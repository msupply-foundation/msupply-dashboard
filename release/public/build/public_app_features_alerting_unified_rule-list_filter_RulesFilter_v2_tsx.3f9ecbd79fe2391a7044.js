"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_alerting_unified_rule-list_filter_RulesFilter_v2_tsx"],{

/***/ "./public/app/features/alerting/unified/components/rules/Filter/useRuleFilterAutocomplete.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAlertingDataSourceOptions: () => (/* binding */ useAlertingDataSourceOptions),
/* harmony export */   useLabelOptions: () => (/* binding */ useLabelOptions),
/* harmony export */   useNamespaceAndGroupOptions: () => (/* binding */ useNamespaceAndGroupOptions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _api_prometheusApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/prometheusApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");






const collator = new Intl.Collator();
function getExternalRuleDataSources() {
  return (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_4__.getRulesDataSources)().filter((ds) => !!ds?.url);
}
function useNamespaceAndGroupOptions() {
  const [fetchGrafanaGroups] = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_3__.prometheusApi.useLazyGetGrafanaGroupsQuery();
  const [fetchExternalGroups] = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_3__.prometheusApi.useLazyGetGroupsQuery();
  const formatNamespaceOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((namespaceName) => {
    if (namespaceName.includes("/") && (namespaceName.endsWith(".yml") || namespaceName.endsWith(".yaml"))) {
      const filename = namespaceName.split("/").pop() || namespaceName;
      const maxDescriptionLength2 = 100;
      const truncatedDescription2 = namespaceName.length > maxDescriptionLength2 ? `${namespaceName.substring(0, maxDescriptionLength2)}...` : namespaceName;
      return { label: filename, value: namespaceName, description: truncatedDescription2 };
    }
    const maxLength = 50;
    const maxDescriptionLength = 100;
    const truncatedName = namespaceName.length > maxLength ? `${namespaceName.substring(0, maxLength)}...` : namespaceName;
    const truncatedDescription = namespaceName.length > maxDescriptionLength ? `${namespaceName.substring(0, maxDescriptionLength)}...` : namespaceName;
    return { label: truncatedName, value: namespaceName, description: truncatedDescription };
  }, []);
  const namespaceOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    async (inputValue) => {
      const grafanaResponse = await fetchGrafanaGroups({ limitAlerts: 0, groupLimit: 1e3 }).unwrap();
      const grafanaFolders = Array.from(
        new Set(grafanaResponse.data.groups.map((g) => g.file || "default"))
      ).map((name) => ({
        label: name,
        value: name,
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rules-filter.grafana-folder", "Grafana folder")
      })).sort((a, b) => collator.compare(a.label ?? "", b.label ?? ""));
      const namespaceNameSet = /* @__PURE__ */ new Set();
      const calls = getExternalRuleDataSources().map(
        (ds) => fetchExternalGroups({
          ruleSource: { uid: ds.uid },
          excludeAlerts: true,
          groupLimit: 500,
          notificationOptions: { showErrorAlert: false }
        }).unwrap()
      );
      const results = await Promise.allSettled(calls);
      for (const res of results) {
        if (res.status === "fulfilled") {
          res.value.data.groups.forEach((group) => namespaceNameSet.add(group.file || "default"));
        }
      }
      const externalNamespaces = Array.from(namespaceNameSet).map(formatNamespaceOption).sort((a, b) => collator.compare(a.label ?? "", b.label ?? ""));
      const options = [...grafanaFolders, ...externalNamespaces];
      const filtered = filterBySearch(options, inputValue);
      return filtered;
    },
    [fetchGrafanaGroups, fetchExternalGroups, formatNamespaceOption]
  );
  const allGroupNames = [];
  const isLoadingNamespaces = false;
  const namespacePlaceholder = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.rules-filter.filter-options.placeholder-namespace", "Select namespace");
  const groupPlaceholder = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("grafana.select-group", "Select group");
  return { namespaceOptions, allGroupNames, isLoadingNamespaces, namespacePlaceholder, groupPlaceholder };
}
function useLabelOptions() {
  const [fetchGrafanaGroups] = _api_prometheusApi__WEBPACK_IMPORTED_MODULE_3__.prometheusApi.useLazyGetGrafanaGroupsQuery();
  const createInfoOption = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("label-dropdown-info", "Can't find your label? Enter it manually"),
      value: "__GRAFANA_LABEL_DROPDOWN_INFO__",
      infoOption: true
    };
  }, []);
  const toOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((labelsMap) => {
    const selectable = Array.from(labelsMap.entries()).flatMap(
      ([key, values]) => Array.from(values).map((value) => ({
        label: `${key}=${value}`,
        value: `${key}=${value}`
      }))
    );
    selectable.sort((a, b) => collator.compare(a.label ?? "", b.label ?? ""));
    return selectable;
  }, []);
  const labelOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    async (inputValue) => {
      const response = await fetchGrafanaGroups({ limitAlerts: 0, groupLimit: 1e3 }, true).unwrap();
      const labelsMap = groupsToLabels(response.data.groups);
      const selectable = toOptions(labelsMap);
      if (selectable.length === 0) {
        return [];
      }
      const options = [...selectable, createInfoOption()];
      return filterBySearch(options, inputValue, true);
    },
    [fetchGrafanaGroups, toOptions, createInfoOption]
  );
  return { labelOptions };
}
function useAlertingDataSourceOptions() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (inputValue) => {
    const options = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getDataSourceSrv)().getList({ alerting: true }).map((ds) => ({ label: ds.name, value: ds.name }));
    return filterBySearch(options, inputValue);
  }, []);
}
function groupsToLabels(groups) {
  const rules = groups.flatMap((group) => group.rules);
  return rules.reduce((result, rule) => {
    if (!rule.labels) {
      return result;
    }
    Object.entries(rule.labels).forEach(([labelKey, labelValue]) => {
      if (!labelKey || !labelValue) {
        return;
      }
      const existing = result.get(labelKey);
      if (existing) {
        existing.add(labelValue);
      } else {
        result.set(labelKey, /* @__PURE__ */ new Set([labelValue]));
      }
    });
    return result;
  }, /* @__PURE__ */ new Map());
}
function filterBySearch(options, inputValue, keepInfoOption = false) {
  const search = (inputValue ?? "").toLowerCase();
  if (!search) {
    return options;
  }
  return options.filter(
    (opt) => (opt.label ?? opt.value).toLowerCase().includes(search) || keepInfoOption && !!opt.infoOption
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/filter/RulesFilter.v2.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RulesFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-alerting/src/grafana/contactPoints/components/ContactPointSelector/ContactPointSelector.tsx");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/MultiCombobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/types/unified-alerting-dto.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _components_HoverCard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/HoverCard.tsx");
/* harmony import */ var _components_rules_Filter_RulesViewModeSelector__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/Filter/RulesViewModeSelector.tsx");
/* harmony import */ var _components_rules_Filter_useRuleFilterAutocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/Filter/useRuleFilterAutocomplete.ts");
/* harmony import */ var _hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useFilteredRules.ts");
/* harmony import */ var _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/search/rulesSearchParser.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/rule-list/filter/utils.ts");


















const canRenderContactPointSelector = app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.AlertingReceiversRead);
const radioGroupCompactClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ width: "max-content" });
function RulesFilter({ viewMode, onViewModeChange }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const [isPopupOpen, setIsPopupOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { searchQuery, updateFilters, setSearchQuery } = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_25__.useRulesFilter)();
  const popupRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const { pluginsFilterEnabled } = (0,_utils__WEBPACK_IMPORTED_MODULE_27__.usePluginsFilterStatus)();
  const { control, setValue, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: {
      query: searchQuery
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setValue("query", searchQuery);
  }, [searchQuery, setValue]);
  const submitHandler = (values) => {
    const parsedFilter = (0,_search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__.getSearchFilterFromQuery)(values.query);
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_21__.trackAlertRuleFilterEvent)({ filterMethod: "search-input", filter: parsedFilter, filterVariant: "v2" });
    updateFilters(parsedFilter);
  };
  const handleAdvancedFilters = (values) => {
    const newFilter = (0,_utils__WEBPACK_IMPORTED_MODULE_27__.formAdvancedFiltersToRuleFilter)(values);
    updateFilters(newFilter);
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_21__.trackFilterButtonApplyClick)(values, pluginsFilterEnabled);
    setIsPopupOpen(false);
  };
  const handleClearFilters = () => {
    updateFilters((0,_utils__WEBPACK_IMPORTED_MODULE_27__.formAdvancedFiltersToRuleFilter)(_utils__WEBPACK_IMPORTED_MODULE_27__.emptyAdvancedFilters));
    setSearchQuery(void 0);
  };
  const handleOnToggle = () => {
    (0,_Analytics__WEBPACK_IMPORTED_MODULE_21__.trackFilterButtonClick)();
    setIsPopupOpen(!isPopupOpen);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (isPopupOpen && popupRef.current && event.target instanceof Node && !popupRef.current.contains(event.target)) {
        if (event.target instanceof Element) {
          const isPortalClick = event.target.closest("[data-popper-placement]") || event.target.closest('[role="listbox"]');
          if (!isPortalClick) {
            setIsPopupOpen(false);
          }
        } else {
          setIsPopupOpen(false);
        }
      }
    };
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);
  const filterButtonLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.filter-options.aria-label-show-filters", "Filter");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: handleSubmit(submitHandler), onReset: () => {
  }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { htmlFor: "rulesSearchInput", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { gap: 0.5, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.search", children: "Search" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_HoverCard__WEBPACK_IMPORTED_MODULE_22__.PopupCard, { content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SearchQueryHelp, {}), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
        {
          name: "info-circle",
          size: "sm",
          tabIndex: 0,
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.title-search-help", "Search help")
        }
      ) })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { flex: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
        {
          name: "query",
          control,
          render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.FilterInput,
            {
              id: "rulesSearchInput",
              "data-testid": "search-query-input",
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                "alerting.rules-filter.filter-options.placeholder-search-input",
                "Search by name or enter filter query..."
              ),
              name: "searchQuery",
              onChange: (next) => {
                (0,_Analytics__WEBPACK_IMPORTED_MODULE_21__.trackRulesSearchInputCleared)(field.value, next);
                field.onChange(next);
              },
              onKeyDown: (event) => {
                if (event.key === "Enter" || event.key === "NumpadEnter") {
                  event.preventDefault();
                  handleSubmit(submitHandler)();
                }
              },
              onBlur: () => {
                const currentQuery = field.value;
                const parsedFilter = (0,_search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__.getSearchFilterFromQuery)(currentQuery);
                (0,_Analytics__WEBPACK_IMPORTED_MODULE_21__.trackAlertRuleFilterEvent)({
                  filterMethod: "search-input",
                  filter: parsedFilter,
                  filterVariant: "v2"
                });
                updateFilters(parsedFilter);
              },
              value: field.value
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_HoverCard__WEBPACK_IMPORTED_MODULE_22__.PopupCard,
        {
          showOn: "click",
          placement: "auto",
          disableBlur: true,
          isOpen: isPopupOpen,
          onClose: () => setIsPopupOpen(false),
          onToggle: handleOnToggle,
          content: (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "div",
              {
                ref: popupRef,
                className: styles.content,
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.stopPropagation();
                  }
                },
                role: "dialog",
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.filter-options.aria-label", "Filter options"),
                tabIndex: -1,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  FilterOptions,
                  {
                    onSubmit: handleAdvancedFilters,
                    onClear: handleClearFilters,
                    pluginsFilterEnabled
                  }
                )
              }
            )
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { name: "filter", icon: "filter", variant: "secondary", "aria-label": filterButtonLabel, children: filterButtonLabel })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rules_Filter_RulesViewModeSelector__WEBPACK_IMPORTED_MODULE_23__.RulesViewModeSelector, { viewMode, onViewModeChange })
    ] })
  ] }) });
}
const FilterOptions = ({ onSubmit, onClear, pluginsFilterEnabled }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useTheme2)();
  const { filterState } = (0,_hooks_useFilteredRules__WEBPACK_IMPORTED_MODULE_25__.useRulesFilter)();
  const isManualResetRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);
  const portalContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_27__.usePortalContainer)(theme.zIndex.portal + 100);
  const defaultValues = (0,_utils__WEBPACK_IMPORTED_MODULE_27__.searchQueryToDefaultValues)(filterState);
  const { namespaceOptions, allGroupNames, isLoadingNamespaces, namespacePlaceholder, groupPlaceholder } = (0,_components_rules_Filter_useRuleFilterAutocomplete__WEBPACK_IMPORTED_MODULE_24__.useNamespaceAndGroupOptions)();
  const { labelOptions } = (0,_components_rules_Filter_useRuleFilterAutocomplete__WEBPACK_IMPORTED_MODULE_24__.useLabelOptions)();
  const dataSourceOptions = (0,_components_rules_Filter_useRuleFilterAutocomplete__WEBPACK_IMPORTED_MODULE_24__.useAlertingDataSourceOptions)();
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues
  });
  const { handleSubmit, reset } = methods;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isManualResetRef.current) {
      isManualResetRef.current = false;
      return;
    }
    const newDefaultValues = (0,_utils__WEBPACK_IMPORTED_MODULE_27__.searchQueryToDefaultValues)(filterState);
    reset(newDefaultValues);
  }, [filterState, reset]);
  const submitAdvancedFilters = handleSubmit(onSubmit);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, { ...methods, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "form",
    {
      onSubmit: submitAdvancedFilters,
      onReset: () => {
        isManualResetRef.current = true;
        reset(_utils__WEBPACK_IMPORTED_MODULE_27__.emptyAdvancedFilters);
        (0,_Analytics__WEBPACK_IMPORTED_MODULE_21__.trackFilterButtonClearClick)();
        onClear();
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", alignItems: "end", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.grid, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleNameField, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LabelsField, { labelOptions, portalContainer }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            NamespaceField,
            {
              namespaceOptions,
              namespacePlaceholder,
              isLoadingNamespaces,
              portalContainer
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            GroupField,
            {
              allGroupNames,
              groupPlaceholder,
              isLoadingNamespaces,
              portalContainer
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DataSourceNamesField, { dataSourceOptions, portalContainer }),
          canRenderContactPointSelector && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointField, { portalContainer }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleSourceField, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleStateField, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleTypeField, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RuleHealthField, {}),
          pluginsFilterEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginsField, {})
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { type: "reset", variant: "secondary", "data-testid": "filter-clear-button", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "common.clear", children: "Clear" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { type: "submit", "data-testid": "filter-apply-button", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "common.apply", children: "Apply" }) })
        ] })
      ] })
    }
  ) });
};
function RuleNameField() {
  const { register } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.rule-name", children: "Rule name" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Input, { ...register("ruleName"), "data-testid": "rule-name-input" })
  ] });
}
function LabelsField({
  labelOptions,
  portalContainer
}) {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.labels", children: "Labels" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "labels",
        control,
        render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.MultiCombobox,
          {
            options: labelOptions,
            value: field.value,
            onChange: (selections) => field.onChange(selections.map((s) => s.value)),
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.placeholder-labels", "Select labels"),
            portalContainer,
            width: "auto",
            minWidth: 40,
            maxWidth: 80
          }
        )
      }
    )
  ] });
}
function NamespaceField({
  namespaceOptions,
  namespacePlaceholder,
  isLoadingNamespaces,
  portalContainer
}) {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.namespace", children: "Folder / Namespace" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "namespace",
        control,
        render: ({ field }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Combobox,
            {
              placeholder: namespacePlaceholder,
              options: namespaceOptions,
              onChange: (option) => field.onChange(option?.value || null),
              value: field.value,
              loading: isLoadingNamespaces,
              isClearable: true,
              portalContainer
            }
          );
        }
      }
    )
  ] });
}
function GroupField({
  allGroupNames,
  groupPlaceholder,
  isLoadingNamespaces,
  portalContainer
}) {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.evaluation-group", children: "Evaluation group" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "groupName",
        control,
        render: ({ field }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Combobox,
            {
              placeholder: groupPlaceholder,
              options: allGroupNames.map((name) => ({ label: name, value: name })),
              onChange: (option) => field.onChange(option?.value || null),
              value: field.value,
              loading: isLoadingNamespaces,
              isClearable: true,
              portalContainer
            }
          );
        }
      }
    )
  ] });
}
function DataSourceNamesField({
  dataSourceOptions,
  portalContainer
}) {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { gap: 0.5, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.data-source", children: "Data source" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
        {
          content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.configured-alert-rules", children: "Data sources containing configured alert rules are Mimir or Loki data sources where alert rules are stored and evaluated in the data source itself." }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.manage-alerts", children: "In these data sources, you can select Manage alerts via Alerting UI to be able to manage these alert rules in the Grafana UI as well as in the data source where they were configured." }) })
          ] }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
            {
              name: "info-circle",
              size: "sm",
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                "alerting.rules-filter.data-source-picker-inline-help-title-search-by-data-sources-help",
                "Search by data sources help"
              )
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "dataSourceNames",
        control,
        render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.MultiCombobox,
          {
            options: dataSourceOptions,
            value: field.value,
            onChange: (selections) => field.onChange(selections.map((s) => s.value)),
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.placeholder-data-sources", "Select data sources"),
            portalContainer,
            width: "auto",
            minWidth: 40,
            maxWidth: 80
          }
        )
      }
    )
  ] });
}
function ContactPointField({ portalContainer }) {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { gap: 0.5, alignItems: "center", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.contactPointFilter.label", children: "Contact point" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
        {
          content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.contact-point-tooltip", children: "Filters alert rules which route directly to the selected contact point. Alert rules routed to notification policies will not be displayed." }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
            {
              name: "info-circle",
              size: "sm",
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.contact-point-tooltip-title", "Contact point filter help")
            }
          )
        }
      )
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "contactPoint",
        control,
        render: ({ field }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_alerting_unstable__WEBPACK_IMPORTED_MODULE_4__.ContactPointSelector,
            {
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.placeholder-contact-point", "Select contact point"),
              value: field.value,
              isClearable: true,
              onChange: (contactPoint) => {
                field.onChange(contactPoint?.spec.title || null);
              },
              portalContainer
            }
          );
        }
      }
    )
  ] });
}
function RuleStateField() {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.state", children: "State" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "ruleState",
        control,
        render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.RadioButtonGroup,
          {
            options: [
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("common.all", "All"), value: "*" },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.state.firing", "Firing"), value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__.PromAlertingRuleState.Firing },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.state.normal", "Normal"), value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__.PromAlertingRuleState.Inactive },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.state.pending", "Pending"), value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__.PromAlertingRuleState.Pending },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.state.recovering", "Recovering"), value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__.PromAlertingRuleState.Recovering },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.state.unknown", "Unknown"), value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__.PromAlertingRuleState.Unknown }
            ],
            value: field.value,
            onChange: field.onChange,
            fullWidth: false,
            className: radioGroupCompactClass
          }
        )
      }
    )
  ] });
}
function RuleTypeField() {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.rule-type", children: "Type" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "ruleType",
        control,
        render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.RadioButtonGroup,
          {
            options: [
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("common.all", "All"), value: "*" },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.type.alert", "Alert rule"), value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__.PromRuleType.Alerting },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.type.recording", "Recording rule"), value: app_types_unified_alerting_dto__WEBPACK_IMPORTED_MODULE_20__.PromRuleType.Recording }
            ],
            value: field.value,
            onChange: field.onChange,
            fullWidth: false,
            className: radioGroupCompactClass
          }
        )
      }
    )
  ] });
}
function RuleSourceField() {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.rule-source", children: "Rule source" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "ruleSource",
        control,
        render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.RadioButtonGroup,
          {
            options: [
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("common.all", "All"), value: null },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.rule-source.grafana", "Grafana managed"), value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__.RuleSource.Grafana },
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.rule-source.datasource", "Data source managed"),
                value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__.RuleSource.DataSource
              }
            ],
            value: field.value,
            onChange: field.onChange,
            fullWidth: false,
            className: radioGroupCompactClass
          }
        )
      }
    )
  ] });
}
function RuleHealthField() {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search.property.rule-health", children: "Health" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "ruleHealth",
        control,
        render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.RadioButtonGroup,
          {
            options: [
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("common.all", "All"), value: "*" },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.health.ok", "OK"), value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__.RuleHealth.Ok },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.health.no-data", "No data"), value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__.RuleHealth.NoData },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules.health.error", "Error"), value: _search_rulesSearchParser__WEBPACK_IMPORTED_MODULE_26__.RuleHealth.Error }
            ],
            value: field.value,
            onChange: field.onChange,
            fullWidth: false,
            className: radioGroupCompactClass
          }
        )
      }
    )
  ] });
}
function PluginsField() {
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.rules-filter.plugin-rules", children: "Plugin rules" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
      {
        name: "plugins",
        control,
        render: ({ field }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.RadioButtonGroup,
          {
            options: [
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.label.show", "Show"), value: "show" },
              { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.rules-filter.label.hide", "Hide"), value: "hide" }
            ],
            value: field.value,
            onChange: field.onChange,
            fullWidth: false,
            className: radioGroupCompactClass
          }
        )
      }
    )
  ] });
}
function SearchQueryHelp() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(helpStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search-query-help.search-syntax", children: "Search syntax allows to query alert rules by the parameters defined below." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.grid, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search-query-help.filter-type", children: "Filter type" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "alerting.search-query-help.expression", children: "Expression" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-datasources", "Datasources"),
          expr: "datasource:mimir datasource:prometheus"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-folder-namespace", "Folder/Namespace"),
          expr: "namespace:global"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-group", "Group"), expr: "group:cpu-usage" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-rule", "Rule"), expr: 'rule:"cpu 80%"' }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-labels", "Labels"),
          expr: 'label:team=A label:"cluster=new york"'
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-state", "State"), expr: "state:firing|normal|pending" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-type", "Type"), expr: "type:alerting|recording" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HelpRow, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-health", "Health"), expr: "health:ok|nodata|error" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-dashboard-uid", "Dashboard UID"),
          expr: "dashboard:eadde4c7-54e6-4964-85c0-484ab852fd04"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        HelpRow,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("alerting.search-query-help.title-contact-point", "Contact point"),
          expr: "contactPoint:slack"
        }
      )
    ] })
  ] });
}
function HelpRow({ title, expr }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(helpStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { className: styles.code, children: expr })
  ] });
}
const helpStyles = (theme) => ({
  grid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "grid",
    gridTemplateColumns: "max-content auto",
    gap: theme.spacing(1),
    alignItems: "center"
  }),
  code: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "block",
    textAlign: "center"
  })
});
function getStyles(theme) {
  return {
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(1)
    }),
    grid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      alignItems: "center",
      gap: theme.spacing(2)
    })
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/rule-list/filter/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyAdvancedFilters: () => (/* binding */ emptyAdvancedFilters),
/* harmony export */   formAdvancedFiltersToRuleFilter: () => (/* binding */ formAdvancedFiltersToRuleFilter),
/* harmony export */   searchQueryToDefaultValues: () => (/* binding */ searchQueryToDefaultValues),
/* harmony export */   usePluginsFilterStatus: () => (/* binding */ usePluginsFilterStatus),
/* harmony export */   usePortalContainer: () => (/* binding */ usePortalContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_useAlertingHomePageExtensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/plugins/useAlertingHomePageExtensions.ts");



function formAdvancedFiltersToRuleFilter(values) {
  return {
    freeFormWords: [],
    ...values,
    namespace: values.namespace || void 0,
    groupName: values.groupName || void 0,
    contactPoint: values.contactPoint || void 0,
    ruleHealth: values.ruleHealth === "*" ? void 0 : values.ruleHealth,
    ruleState: values.ruleState === "*" ? void 0 : values.ruleState,
    ruleType: values.ruleType === "*" ? void 0 : values.ruleType,
    plugins: values.plugins === "show" ? void 0 : "hide",
    ruleSource: values.ruleSource ?? void 0
  };
}
const emptyAdvancedFilters = {
  namespace: null,
  groupName: null,
  ruleName: void 0,
  ruleType: "*",
  ruleState: "*",
  dataSourceNames: [],
  labels: [],
  ruleHealth: "*",
  dashboardUid: void 0,
  plugins: "show",
  contactPoint: null,
  ruleSource: null
};
function searchQueryToDefaultValues(filterState) {
  return {
    namespace: filterState.namespace ?? null,
    groupName: filterState.groupName ?? null,
    ruleName: filterState.ruleName,
    ruleType: filterState.ruleType ?? "*",
    ruleState: filterState.ruleState ?? "*",
    dataSourceNames: filterState.dataSourceNames,
    labels: filterState.labels,
    ruleHealth: filterState.ruleHealth ?? "*",
    dashboardUid: filterState.dashboardUid,
    plugins: filterState.plugins ?? "show",
    contactPoint: filterState.contactPoint ?? null,
    ruleSource: filterState.ruleSource ?? null
  };
}
function usePortalContainer(zIndex) {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const container = document.createElement("div");
    Object.assign(container.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: String(zIndex)
    });
    document.body.appendChild(container);
    containerRef.current = container;
    return () => {
      container.remove();
    };
  }, [zIndex]);
  return containerRef.current || void 0;
}
function usePluginsFilterStatus() {
  const { components } = (0,_plugins_useAlertingHomePageExtensions__WEBPACK_IMPORTED_MODULE_1__.useAlertingHomePageExtensions)();
  return { pluginsFilterEnabled: components.length > 0 };
}


/***/ })

}]);
//# sourceMappingURL=public_app_features_alerting_unified_rule-list_filter_RulesFilter_v2_tsx.3f9ecbd79fe2391a7044.js.map