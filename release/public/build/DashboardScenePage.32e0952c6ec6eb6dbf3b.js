"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["DashboardScenePage"],{

/***/ "./public/app/core/components/FormPrompt/Prompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Prompt: () => (/* binding */ Prompt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");



const Prompt = ({ message, when = true }) => {
  const history = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.getHistory();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!when) {
      return void 0;
    }
    const unblock = history.block(message);
    return () => {
      unblock();
    };
  }, [when, message, history]);
  return null;
};


/***/ }),

/***/ "./public/app/features/dashboard-scene/pages/DashboardScenePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardScenePage: () => (/* binding */ DashboardScenePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_scenes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/scenes/dist/esm/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/PageLoader/PageLoader.tsx");
/* harmony import */ var app_features_dashboard_containers_DashboardPageError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/containers/DashboardPageError.tsx");
/* harmony import */ var app_features_dashboard_services_DashboardProfiler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/services/DashboardProfiler.ts");
/* harmony import */ var app_features_provisioning_components_Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/components/Dashboards/DashboardPreviewBanner.tsx");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _saving_DashboardPrompt__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard-scene/saving/DashboardPrompt.tsx");
/* harmony import */ var _utils_dashboardSessionState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/dashboard-scene/utils/dashboardSessionState.ts");
/* harmony import */ var _DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/dashboard-scene/pages/DashboardScenePageStateManager.ts");


















function DashboardScenePage({ route, queryParams, location }) {
  const params = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useParams)();
  const { type, slug, uid } = params;
  const path = params["*"];
  const prevMatch = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])({ params });
  const stateManager = (0,_DashboardScenePageStateManager__WEBPACK_IMPORTED_MODULE_16__.getDashboardScenePageStateManager)();
  const { dashboard, isLoading, loadError } = stateManager.useState();
  const routeReloadCounter = location.state?.routeReloadCounter;
  const prevParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(params);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__.DashboardRoutes.Normal && type === "snapshot") {
      stateManager.loadSnapshot(slug);
    } else {
      stateManager.loadDashboard({
        uid: (route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__.DashboardRoutes.Provisioning ? path : uid) ?? "",
        type,
        slug,
        route: route.routeName,
        urlFolderUid: queryParams.folderUid
      });
    }
    return () => {
      (0,app_features_dashboard_services_DashboardProfiler__WEBPACK_IMPORTED_MODULE_11__.getDashboardSceneProfiler)().cancelProfile();
      (0,_utils_dashboardSessionState__WEBPACK_IMPORTED_MODULE_15__.preserveDashboardSceneStateInLocalStorage)(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.getSearch(), uid);
      stateManager.clearState();
      stateManager.resetActiveManager();
    };
  }, [stateManager, uid, route.routeName, queryParams.folderUid, routeReloadCounter, type]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (route.routeName === app_types_dashboard__WEBPACK_IMPORTED_MODULE_13__.DashboardRoutes.Normal) {
      if (uid === prevParams.current.uid && prevParams.current.slug && !slug) {
        const correctedUrl = `/d/${uid}/${prevParams.current.slug}`;
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.replace({
          ..._grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.locationService.getLocation(),
          pathname: correctedUrl
        });
      }
    }
    return () => {
      prevParams.current = { uid, slug: !slug ? prevParams.current.slug : slug };
    };
  }, [route, slug, type, uid]);
  if (!dashboard) {
    let errorElement;
    if (loadError) {
      errorElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_dashboard_containers_DashboardPageError__WEBPACK_IMPORTED_MODULE_10__.DashboardPageError, { error: loadError, type });
    }
    return errorElement || /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_8__.Page, { navId: "dashboards/browse", layout: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.PageLayoutType.Canvas, "data-testid": "dashboard-scene-page", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { paddingY: 4, display: "flex", direction: "column", alignItems: "center", children: isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_9__["default"], {}) }) });
  }
  if (type !== "snapshot" && (!prevMatch || uid !== prevMatch?.params.uid)) {
    console.log("skipping rendering");
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_scenes__WEBPACK_IMPORTED_MODULE_6__.UrlSyncContextProvider, { scene: dashboard, updateUrlOnInit: true, createBrowserHistorySteps: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_provisioning_components_Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_12__.DashboardPreviewBanner, { queryParams, route: route.routeName, slug, path }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(dashboard.Component, { model: dashboard }, dashboard.state.key),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_saving_DashboardPrompt__WEBPACK_IMPORTED_MODULE_14__.DashboardPrompt, { dashboard })
  ] });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardScenePage);


/***/ }),

/***/ "./public/app/features/dashboard-scene/saving/DashboardPrompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPrompt: () => (/* binding */ DashboardPrompt),
/* harmony export */   UnsavedChangesModal: () => (/* binding */ UnsavedChangesModal),
/* harmony export */   ignoreChanges: () => (/* binding */ ignoreChanges),
/* harmony export */   isEmptyDashboard: () => (/* binding */ isEmptyDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_FormPrompt_Prompt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/FormPrompt/Prompt.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_dashboard_api_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/api/utils.ts");
/* harmony import */ var app_features_dashboard_dashgrid_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/dashgrid/types.ts");
/* harmony import */ var _panel_edit_SaveLibraryVizPanelModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/dashboard-scene/panel-edit/SaveLibraryVizPanelModal.tsx");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/dashboard-scene/utils/utils.ts");













const DashboardPrompt = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ dashboard }) => {
  const originalLocation = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.getLocation(), [dashboard]);
  const originalPath = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => originalLocation.pathname, [originalLocation]);
  const { showModal, hideModal } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ModalsContext);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const handleUnload = (event) => {
      if (ignoreChanges(dashboard)) {
        return;
      }
      if (dashboard.state.isDirty) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [dashboard]);
  const onHistoryBlock = (location) => {
    const panelEditor = dashboard.state.editPanel;
    const vizPanel = panelEditor?.getPanel();
    const search = new URLSearchParams(location.search);
    if (panelEditor && vizPanel && (0,_utils_utils__WEBPACK_IMPORTED_MODULE_14__.isLibraryPanel)(vizPanel) && panelEditor.state.isDirty && !search.has("editPanel")) {
      const libPanelBehavior = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_14__.getLibraryPanelBehavior)(vizPanel);
      showModal(_panel_edit_SaveLibraryVizPanelModal__WEBPACK_IMPORTED_MODULE_13__.SaveLibraryVizPanelModal, {
        dashboard,
        isUnsavedPrompt: true,
        libraryPanel: libPanelBehavior,
        onConfirm: () => {
          panelEditor.onConfirmSaveLibraryPanel();
          hideModal();
          moveToBlockedLocationAfterReactStateUpdate(location);
        },
        onDiscard: () => {
          panelEditor.onDiscard();
          hideModal();
          moveToBlockedLocationAfterReactStateUpdate(location);
        },
        onDismiss: hideModal
      });
      return false;
    }
    if (originalPath === location.pathname) {
      return true;
    }
    if (ignoreChanges(dashboard)) {
      return true;
    }
    if (!dashboard.state.isDirty) {
      return true;
    }
    showModal(UnsavedChangesModal, {
      dashboard,
      onSaveDashboardClick: () => {
        hideModal();
        dashboard.openSaveDrawer({
          onSaveSuccess: () => {
            moveToBlockedLocationAfterReactStateUpdate(location);
          }
        });
      },
      onDiscard: () => {
        dashboard.exitEditMode({ skipConfirm: true });
        hideModal();
        if (originalPath === app_features_dashboard_dashgrid_types__WEBPACK_IMPORTED_MODULE_12__.DASHBOARD_LIBRARY_ROUTES.Template) {
          moveToBlockedLocationAfterReactStateUpdate(location, true);
        } else {
          moveToBlockedLocationAfterReactStateUpdate(location);
        }
      },
      onDismiss: hideModal
    });
    return false;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_FormPrompt_Prompt__WEBPACK_IMPORTED_MODULE_9__.Prompt, { when: true, message: onHistoryBlock });
});
DashboardPrompt.displayName = "DashboardPrompt";
function moveToBlockedLocationAfterReactStateUpdate(location, replace = false) {
  if (location) {
    setTimeout(() => replace ? _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.replace(location) : _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.locationService.push(location), 10);
  }
}
const UnsavedChangesModal = ({ onDiscard, onDismiss, onSaveDashboardClick }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("dashboard-scene.unsaved-changes-modal.title-unsaved-changes", "Unsaved changes"),
      onDismiss,
      icon: "exclamation-triangle",
      className: styles.modal,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.changes", children: "Do you want to save your changes?" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", onClick: onDismiss, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "destructive", onClick: onDiscard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.discard", children: "Discard" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: onSaveDashboardClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "dashboard-scene.unsaved-changes-modal.save-dashboard", children: "Save dashboard" }) })
        ] })
      ]
    }
  );
};
const getStyles = () => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "500px"
  })
});
function ignoreChanges(scene) {
  const original = scene?.getInitialSaveModel();
  if (!original) {
    return true;
  }
  if (scene?.state.meta.version === 0) {
    return true;
  }
  if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.isSignedIn) {
    return true;
  }
  if (!scene) {
    return true;
  }
  const dashboard = scene.getSaveModel();
  if (isEmptyDashboard(dashboard, scene?.serializer.metadata)) {
    return true;
  }
  const { canSave, fromScript, fromFile } = scene.state.meta;
  if (!app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.isEditor && !canSave) {
    return true;
  }
  return !canSave || fromScript || fromFile || scene.state.isEditing && !(0,_utils_utils__WEBPACK_IMPORTED_MODULE_14__.hasActualSaveChanges)(scene);
}
function isEmptyDashboard(dashboard, metadata) {
  if ((0,app_features_dashboard_api_utils__WEBPACK_IMPORTED_MODULE_11__.isDashboardV2Spec)(dashboard)) {
    const hasNoPanels2 = Object.keys(dashboard.elements).length === 0;
    const hasNoLinks2 = !dashboard.links.length;
    const hasNoTemplates2 = !dashboard.variables.length;
    const hasNoUid2 = !metadata || !("name" in metadata) || !metadata.name;
    return hasNoPanels2 && hasNoLinks2 && hasNoTemplates2 && hasNoUid2;
  }
  const hasNoPanels = !dashboard.panels?.length;
  const hasNoLinks = !dashboard.links?.length;
  const hasNoTemplates = !dashboard.templating?.list?.length;
  const hasNoUid = !dashboard.uid;
  return hasNoPanels && hasNoLinks && hasNoTemplates && hasNoUid;
}


/***/ }),

/***/ "./public/app/features/dashboard/containers/DashboardPageError.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPageError: () => (/* binding */ DashboardPageError)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/navModel.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/PageNotFound/EntityNotFound.tsx");
/* harmony import */ var app_core_utils_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/utils/errors.ts");








function DashboardPageError({ error, type }) {
  const status = (0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_7__.getStatusFromError)(error);
  const message = (0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_7__.getMessageFromError)(error);
  const entity = type === "snapshot" ? "Snapshot" : "Dashboard";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page,
    {
      navId: "dashboards/browse",
      layout: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PageLayoutType.Canvas,
      pageNav: { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.dashboard-page-error.text.not-found", "Not found") },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { paddingY: 4, display: "flex", direction: "column", alignItems: "center", children: status === 404 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageNotFound_EntityNotFound__WEBPACK_IMPORTED_MODULE_6__.EntityNotFound, { entity }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
        {
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("dashboard.errors.failed-to-load", "Failed to load dashboard"),
          severity: "error",
          "data-testid": "dashboard-page-error",
          children: message
        }
      ) })
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/Wizard/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepoTypeDisplay: () => (/* binding */ RepoTypeDisplay)
/* harmony export */ });

const RepoTypeDisplay = {
  github: "GitHub",
  gitlab: "GitLab",
  bitbucket: "Bitbucket",
  git: "Git",
  local: "Local"
};


/***/ }),

/***/ "./public/app/features/provisioning/components/Dashboards/DashboardPreviewBanner.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardPreviewBanner: () => (/* binding */ DashboardPreviewBanner),
/* harmony export */   commonAlertProps: () => (/* binding */ commonAlertProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/provisioning/hooks/usePullRequestParam.ts");
/* harmony import */ var app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/dashboard.ts");
/* harmony import */ var _hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/provisioning/hooks/useGetResourceRepositoryView.ts");
/* harmony import */ var _Shared_PreviewBannerViewPR__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/components/Shared/PreviewBannerViewPR.tsx");










const commonAlertProps = {
  severity: "info",
  style: { flex: 0 }
};
function DashboardPreviewBannerContent({ queryParams, slug, path }) {
  const { prURL } = (0,app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_5__.usePullRequestParam)();
  const file = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_4__.useGetRepositoryFilesWithPathQuery)({ name: slug, path, ref: queryParams.ref });
  const { repository } = (0,_hooks_useGetResourceRepositoryView__WEBPACK_IMPORTED_MODULE_7__.useGetResourceRepositoryView)({ name: slug });
  const targetRef = file.data?.ref;
  const repoBaseUrl = file.data?.urls?.repositoryURL;
  const branchInfo = {
    targetBranch: targetRef,
    configuredBranch: repository?.branch,
    repoBaseUrl
  };
  if (file.data?.errors) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("dashboard-scene.dashboard-preview-banner.title-error-loading-dashboard", "Error loading dashboard"),
        severity: "error",
        style: { flex: 0 },
        children: file.data.errors.map((error, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: error }, index))
      }
    );
  }
  if (prURL?.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_PreviewBannerViewPR__WEBPACK_IMPORTED_MODULE_8__.PreviewBannerViewPR, { prParam: prURL, branchInfo });
  }
  const prOrCompareUrl = file.data?.urls?.newPullRequestURL ?? file.data?.urls?.compareURL;
  if (prOrCompareUrl) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_PreviewBannerViewPR__WEBPACK_IMPORTED_MODULE_8__.PreviewBannerViewPR, { prParam: prOrCompareUrl, isNewPr: true, branchInfo });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
    {
      ...commonAlertProps,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "dashboard-scene.dashboard-preview-banner.title-dashboard-loaded-external-repository",
        "This dashboard is loaded from an external repository"
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "dashboard-scene.dashboard-preview-banner.not-yet-saved", children: "The value is not saved in the Grafana database" })
    }
  );
}
function DashboardPreviewBanner({ queryParams, route, slug, path }) {
  const provisioningEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.config.featureToggles.provisioning;
  if (!provisioningEnabled || "kiosk" in queryParams || !path || route !== app_types_dashboard__WEBPACK_IMPORTED_MODULE_6__.DashboardRoutes.Provisioning || !slug) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardPreviewBannerContent, { queryParams, slug, path });
}


/***/ }),

/***/ "./public/app/features/provisioning/components/Shared/PreviewBannerViewPR.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreviewBannerViewPR: () => (/* binding */ PreviewBannerViewPR),
/* harmony export */   isValidRepoType: () => (/* binding */ isValidRepoType)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_features_provisioning_Wizard_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/Wizard/types.ts");
/* harmony import */ var app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/hooks/usePullRequestParam.ts");
/* harmony import */ var _Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/components/Dashboards/DashboardPreviewBanner.tsx");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/components/utils/url.ts");









function PreviewBannerViewPR({ prParam, isNewPr, behindBranch, repoUrl, branchInfo }) {
  const { repoType } = (0,app_features_provisioning_hooks_usePullRequestParam__WEBPACK_IMPORTED_MODULE_9__.usePullRequestParam)();
  const { targetBranch, configuredBranch, repoBaseUrl } = branchInfo || {};
  const capitalizedRepoType = isValidRepoType(repoType) ? app_features_provisioning_Wizard_types__WEBPACK_IMPORTED_MODULE_8__.RepoTypeDisplay[repoType] : "repository";
  const titleText = isNewPr ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "provisioned-resource-preview-banner.title-created-branch-in-repo",
    "A new resource has been created in a branch in {{repoType}}.",
    {
      repoType: capitalizedRepoType
    }
  ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "provisioned-resource-preview-banner.title-loaded-pull-request-in-repo",
    "This resource is loaded from the branch you just created in {{repoType}} and it is only visible to you",
    {
      repoType: capitalizedRepoType
    }
  );
  if (behindBranch) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
      {
        ..._Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_10__.commonAlertProps,
        buttonContent: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { alignItems: "center", children: [
          (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioned-resource-preview-banner.preview-banner.open-in-repo-button", "Open in {{repoType}}", {
            repoType: capitalizedRepoType
          }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt" })
        ] }),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioned-resource-preview-banner.preview-banner.behind-branch-text",
          "This resource is behind the branch in {{repoType}}.",
          {
            repoType: capitalizedRepoType
          }
        ),
        onRemove: repoUrl ? () => window.open(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.sanitizeUrl(repoUrl), "_blank") : void 0,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "provisioned-resource-preview-banner.preview-banner.view-in-repo-button",
            values: { repoType: capitalizedRepoType },
            children: [
              "View it in ",
              { repoType },
              " to see the latest changes."
            ]
          }
        )
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert,
    {
      ..._Dashboards_DashboardPreviewBanner__WEBPACK_IMPORTED_MODULE_10__.commonAlertProps,
      title: titleText,
      buttonContent: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { alignItems: "center", children: [
        isNewPr ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioned-resource-preview-banner.preview-banner.open-pull-request-in-repo",
          "Open pull request in {{repoType}}",
          { repoType: capitalizedRepoType }
        ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "provisioned-resource-preview-banner.preview-banner.view-pull-request-in-repo",
          "View pull request in {{repoType}}",
          { repoType: capitalizedRepoType }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "external-link-alt" })
      ] }),
      onRemove: prParam ? () => window.open(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.textUtil.sanitizeUrl(prParam), "_blank") : void 0,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioned-resource-preview-banner.preview-banner.not-saved", children: "The rest of Grafana users in your organization will still see the current version saved to configured default branch until this branch is merged" }),
        showBranchInfo(repoType, branchInfo) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { marginTop: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioned-resource-preview-banner.preview-banner.branch-text", children: "branch: " }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.getBranchUrl)(repoBaseUrl, targetBranch, repoType), children: targetBranch }),
          " ",
          "\u2192",
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: (0,_utils_url__WEBPACK_IMPORTED_MODULE_11__.getBranchUrl)(repoBaseUrl, configuredBranch, repoType), children: configuredBranch })
        ] })
      ]
    }
  );
}
function isValidRepoType(repoType) {
  if (typeof repoType !== "string") {
    return false;
  }
  return repoType in app_features_provisioning_Wizard_types__WEBPACK_IMPORTED_MODULE_8__.RepoTypeDisplay;
}
function showBranchInfo(repoType, branchInfo) {
  const { targetBranch, configuredBranch, repoBaseUrl } = branchInfo || {};
  return repoType !== "local" && !!targetBranch && !!configuredBranch && !!repoBaseUrl;
}


/***/ }),

/***/ "./public/app/features/provisioning/components/utils/url.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBranchUrl: () => (/* binding */ getBranchUrl)
/* harmony export */ });

const getBranchUrl = (baseUrl, branch, repoType) => {
  if (repoType === "local") {
    return "";
  }
  switch (repoType) {
    case "github":
      return `${baseUrl}/tree/${branch}`;
    case "gitlab":
      return `${baseUrl}/-/tree/${branch}`;
    case "bitbucket":
      return `${baseUrl}/src/${branch}`;
    default:
      return "";
  }
};


/***/ }),

/***/ "./public/app/features/provisioning/hooks/usePullRequestParam.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePullRequestParam: () => (/* binding */ usePullRequestParam)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var app_core_navigation_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/navigation/hooks.ts");



const usePullRequestParam = () => {
  const [params] = (0,app_core_navigation_hooks__WEBPACK_IMPORTED_MODULE_1__.useUrlParams)();
  const prParam = params.get("pull_request_url");
  const newPrParam = params.get("new_pull_request_url");
  const repoUrl = params.get("repo_url");
  const repoType = params.get("repo_type");
  return {
    prURL: prParam ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(prParam) : void 0,
    newPrURL: newPrParam ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(newPrParam) : void 0,
    repoURL: repoUrl ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(repoUrl) : void 0,
    repoType: repoType ? _grafana_data__WEBPACK_IMPORTED_MODULE_0__.textUtil.sanitizeUrl(repoType) : void 0
  };
};


/***/ })

}]);
//# sourceMappingURL=DashboardScenePage.32e0952c6ec6eb6dbf3b.js.map