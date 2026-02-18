"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["dashListPanel"],{

/***/ "./node_modules/react-use/esm/useThrottle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useUnmount.js");


var useThrottle = function (value, ms) {
    if (ms === void 0) { ms = 200; }
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value), state = _a[0], setState = _a[1];
    var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var nextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var hasNextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!timeout.current) {
            setState(value);
            var timeoutCallback_1 = function () {
                if (hasNextValue.current) {
                    hasNextValue.current = false;
                    setState(nextValue.current);
                    timeout.current = setTimeout(timeoutCallback_1, ms);
                }
                else {
                    timeout.current = undefined;
                }
            };
            timeout.current = setTimeout(timeoutCallback_1, ms);
        }
        else {
            nextValue.current = value;
            hasNextValue.current = true;
        }
    }, [value]);
    (0,_useUnmount__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
        timeout.current && clearTimeout(timeout.current);
    });
    return state;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThrottle);


/***/ }),

/***/ "./public/app/plugins/panel/dashlist/DashList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashList: () => (/* binding */ DashList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useThrottle.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/Link.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_impression_srv__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/services/impression_srv.ts");
/* harmony import */ var app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/search/service/searcher.ts");
/* harmony import */ var app_features_stars_StarToolbarButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/stars/StarToolbarButton.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/panel/dashlist/styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/panel/dashlist/utils.ts");














async function fetchDashboards(options, replaceVars) {
  const searcher = (0,app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_14__.getGrafanaSearcher)();
  let starredDashboards = Promise.resolve();
  let recentDashboards = Promise.resolve();
  let searchedDashboards = Promise.resolve();
  if (options.showStarred) {
    const params = { limit: options.maxItems, starred: true };
    starredDashboards = searcher.starred(params);
  }
  let dashUIDs = [];
  if (options.showRecentlyViewed) {
    let uids = await app_core_services_impression_srv__WEBPACK_IMPORTED_MODULE_13__["default"].getDashboardOpened();
    dashUIDs = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.take)(uids, options.maxItems);
    recentDashboards = searcher.search({ uid: dashUIDs, limit: options.maxItems, kind: ["dashboard"] });
  }
  if (options.showSearch) {
    const uid = options.folderUID === "" ? "general" : options.folderUID;
    const params = {
      limit: options.maxItems,
      query: replaceVars(options.query, {}, "text"),
      location: uid,
      tags: options.tags.map((tag) => replaceVars(tag, {}, "text")),
      kind: ["dashboard"]
    };
    searchedDashboards = searcher.search(params);
  }
  const [starred, searched, recent] = await Promise.allSettled([
    starredDashboards,
    searchedDashboards,
    recentDashboards
  ]);
  let dashMap = /* @__PURE__ */ new Map();
  if (recent && recent.status === "fulfilled") {
    for (const dashUID of dashUIDs) {
      const dash = recent.value?.view.find((d) => {
        return d.uid === dashUID;
      });
      if (dash) {
        dashMap.set(dashUID, { ...dash, title: dash.name, isRecent: true });
      }
    }
  }
  if (searched && searched.status === "fulfilled") {
    searched?.value?.view.forEach((dash) => {
      if (!dash.uid) {
        return;
      }
      if (dashMap.has(dash.uid)) {
        dashMap.get(dash.uid).isSearchResult = true;
      } else {
        dashMap.set(dash.uid, { ...dash, isSearchResult: true });
      }
    });
  }
  if (starred && starred.status === "fulfilled") {
    starred?.value?.view.forEach((dash) => {
      if (!dash.uid) {
        return;
      }
      if (dashMap.has(dash.uid)) {
        dashMap.get(dash.uid).isStarred = true;
      } else {
        dashMap.set(dash.uid, { ...dash, isStarred: true });
      }
    });
  }
  return dashMap;
}
async function fetchDashboardFolders() {
  return (0,app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_14__.getGrafanaSearcher)().getLocationInfo();
}
const collator = new Intl.Collator();
function DashList(props) {
  const [dashboards, setDashboards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(/* @__PURE__ */ new Map());
  const [foldersTitleMap, setFoldersTitleMap] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const throttledRenderCount = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(props.renderCounter, 5e3);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchDashboards(props.options, props.replaceVariables).then((dashes) => {
      setDashboards(dashes);
    });
  }, [props.options, props.replaceVariables, throttledRenderCount]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props.options.showFolderNames && dashboards.size > 0) {
      fetchDashboardFolders().then((locationInfo) => {
        setFoldersTitleMap(locationInfo);
      });
    }
  }, [props.options.showFolderNames, dashboards]);
  const [starredDashboards, recentDashboards, searchedDashboards] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const dashboardList = [...dashboards.values()];
    const dashboardsGroupsMap = {
      starred: [],
      recent: [],
      searched: []
    };
    for (const dash of dashboardList) {
      if (dash.isStarred) {
        dashboardsGroupsMap.starred.push(dash);
      }
      if (dash.isRecent) {
        dashboardsGroupsMap.recent.push(dash);
      }
      if (dash.isSearchResult) {
        dashboardsGroupsMap.searched.push(dash);
      }
    }
    return [
      dashboardsGroupsMap.starred.sort((a, b) => collator.compare(a.name, b.name)),
      dashboardsGroupsMap.recent,
      dashboardsGroupsMap.searched.sort((a, b) => collator.compare(a.name, b.name))
    ];
  }, [dashboards]);
  const { showStarred, showRecentlyViewed, showHeadings, showFolderNames, showSearch } = props.options;
  const dashboardGroups = [
    {
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("panel.dashlist.starred-dashboards", "Starred dashboards"),
      dashboards: starredDashboards,
      show: showStarred
    },
    {
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("panel.dashlist.recently-viewed-dashboards", "Recently viewed dashboards"),
      dashboards: recentDashboards,
      show: showRecentlyViewed
    },
    {
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("panel.dashlist.search", "Search"),
      dashboards: searchedDashboards,
      show: showSearch
    }
  ];
  const handleStarChange = (id, isStarred) => {
    const updatedDashboards = new Map(dashboards);
    updatedDashboards.set(id, { ...dashboards.get(id), isStarred });
    setDashboards(updatedDashboards);
  };
  const css = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_16__.getStyles);
  const urlParams = (0,_utils__WEBPACK_IMPORTED_MODULE_17__.useDashListUrlParams)(props);
  const renderList = (dashboards2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: dashboards2.map((dash) => {
    let url = dash.url + urlParams;
    url = (0,app_core_config__WEBPACK_IMPORTED_MODULE_12__.getConfig)().disableSanitizeHtml ? url : _grafana_data__WEBPACK_IMPORTED_MODULE_4__.textUtil.sanitizeUrl(url);
    const locationInfo = showFolderNames && dash.location ? foldersTitleMap[dash.location] : void 0;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: css.dashlistLink, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { flex: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Link, { href: url, children: dash.name }),
        showFolderNames && locationInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { color: "secondary", variant: "bodySmall", element: "p", children: locationInfo?.name })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_features_stars_StarToolbarButton__WEBPACK_IMPORTED_MODULE_15__.StarToolbarButton,
        {
          title: dash.name,
          group: "dashboard.grafana.app",
          kind: "Dashboard",
          id: dash.uid,
          onStarChange: handleStarChange
        }
      )
    ] }) }, `dash-${dash.uid}`);
  }) });
  const showEmptyState = dashboardGroups.every(({ show }) => !show);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.ScrollContainer, { minHeight: "100%", children: [
    showEmptyState && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.EmptyState,
      {
        hideImage: true,
        variant: "call-to-action",
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("panel.dashlist.empty-state-message", "No dashboard groups configured")
      }
    ),
    dashboardGroups.map(
      ({ show, header, dashboards: dashboards2 }, i) => show && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { marginBottom: 2, paddingTop: 0.5, children: [
        showHeadings && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { marginRight: 1, paddingX: 1, paddingY: 0.25, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "h6", element: "h6", children: header }) }),
        renderList(dashboards2)
      ] }, `dash-group-${i}`)
    )
  ] });
}


/***/ }),

/***/ "./public/app/plugins/panel/dashlist/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dashlistMigrationHandler: () => (/* binding */ dashlistMigrationHandler)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");


async function getFolderUID(folderID) {
  if (folderID === 0) {
    return "";
  }
  const folderDTO = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`/api/folders/id/${folderID}`, void 0, void 0, {
    showErrorAlert: false
  });
  return folderDTO.uid;
}
async function dashlistMigrationHandler(panel) {
  const newOptions = {
    ...panel.options,
    showStarred: panel.options.showStarred ?? panel.starred,
    showRecentlyViewed: panel.options.showRecentlyViewed ?? panel.recent,
    showSearch: panel.options.showSearch ?? panel.search,
    showHeadings: panel.options.showHeadings ?? panel.headings,
    maxItems: panel.options.maxItems ?? panel.limit,
    query: panel.options.query ?? panel.query,
    folderId: panel.options.folderId ?? panel.folderId,
    tags: panel.options.tags ?? panel.tags
  };
  const previousVersion = parseFloat(panel.pluginVersion || "6.1");
  if (previousVersion < 6.3) {
    const oldProps = ["starred", "recent", "search", "headings", "limit", "query", "folderId"];
    oldProps.forEach((prop) => delete panel[prop]);
  }
  if (newOptions.folderId !== void 0) {
    const folderId = newOptions.folderId;
    try {
      const folderUID = await getFolderUID(folderId);
      newOptions.folderUID = folderUID;
      delete newOptions.folderId;
    } catch (err) {
      console.warn("Dashlist: Error migrating folder ID to UID", err);
    }
  }
  return newOptions;
}


/***/ }),

/***/ "./public/app/plugins/panel/dashlist/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/TagsInput/TagsInput.tsx");
/* harmony import */ var app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Select/FolderPicker.tsx");
/* harmony import */ var _DashList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/dashlist/DashList.tsx");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/dashlist/migrations.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/panel/dashlist/panelcfg.gen.ts");









const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelPlugin(_DashList__WEBPACK_IMPORTED_MODULE_5__.DashList).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.category-dashboard-list", "Dashboard list")];
  builder.addBooleanSwitch({
    path: "keepTime",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-include-current-time-range", "Include current time range"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.keepTime
  }).addBooleanSwitch({
    path: "includeVars",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-include-current-template-variables", "Include current template variable values"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.includeVars
  }).addBooleanSwitch({
    path: "showStarred",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-starred", "Starred"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showStarred
  }).addBooleanSwitch({
    path: "showRecentlyViewed",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-recently-viewed", "Recently viewed"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showRecentlyViewed
  }).addBooleanSwitch({
    path: "showSearch",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-search", "Search"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showSearch
  }).addBooleanSwitch({
    path: "showHeadings",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-show-headings", "Show headings"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showHeadings
  }).addBooleanSwitch({
    path: "showFolderNames",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-show-folder-names", "Show folder names"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.showFolderNames
  }).addNumberInput({
    path: "maxItems",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-max-items", "Max items"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.maxItems
  }).addTextInput({
    path: "query",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-query", "Query"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.query
  }).addCustomEditor({
    path: "folderUID",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-folder", "Folder"),
    category,
    id: "folderUID",
    defaultValue: void 0,
    editor: function RenderFolderPicker({ value, onChange }) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Select_FolderPicker__WEBPACK_IMPORTED_MODULE_4__.FolderPicker, { clearable: true, permission: "view", value, onChange: (folderUID) => onChange(folderUID) });
    }
  }).addCustomEditor({
    id: "tags",
    path: "tags",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashlist.name-tags", "Tags"),
    category,
    description: "",
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_7__.defaultOptions.tags,
    editor(props) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TagsInput, { tags: props.value, onChange: props.onChange });
    }
  });
}).setMigrationHandler(_migrations__WEBPACK_IMPORTED_MODULE_6__.dashlistMigrationHandler);


/***/ }),

/***/ "./public/app/plugins/panel/dashlist/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

const defaultOptions = {
  includeVars: false,
  keepTime: false,
  maxItems: 10,
  query: "",
  showFolderNames: true,
  showHeadings: true,
  showRecentlyViewed: false,
  showSearch: false,
  showStarred: true,
  tags: []
};


/***/ }),

/***/ "./public/app/plugins/panel/dashlist/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const getStyles = (theme) => {
  return {
    dashlistLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: "flex",
      cursor: "pointer",
      borderBottom: `1px solid ${theme.colors.border.weak}`,
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      alignItems: "center",
      "&:hover": {
        a: {
          color: theme.colors.text.link,
          textDecoration: "underline"
        }
      }
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/panel/dashlist/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDashListUrlParams: () => (/* binding */ useDashListUrlParams)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/dataLinks.ts");
/* harmony import */ var _core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _core_hooks_useBusEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/hooks/useBusEvent.ts");
/* harmony import */ var _features_variables_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/variables/types.ts");





function useDashListUrlParams(props) {
  (0,_core_hooks_useBusEvent__WEBPACK_IMPORTED_MODULE_3__.useBusEvent)(_core_core__WEBPACK_IMPORTED_MODULE_2__.appEvents, _features_variables_types__WEBPACK_IMPORTED_MODULE_4__.VariablesChanged);
  let query = "";
  if (props.options.keepTime) {
    query = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.appendQueryToUrl(query, `$${_grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataLinkBuiltInVars.keepTime}`);
  }
  if (props.options.includeVars) {
    query = _grafana_data__WEBPACK_IMPORTED_MODULE_0__.urlUtil.appendQueryToUrl(query, `$${_grafana_data__WEBPACK_IMPORTED_MODULE_1__.DataLinkBuiltInVars.includeVars}`);
  }
  return props.replaceVariables(query);
}


/***/ })

}]);
//# sourceMappingURL=dashListPanel.75d40fecbb3568e54ee6.js.map