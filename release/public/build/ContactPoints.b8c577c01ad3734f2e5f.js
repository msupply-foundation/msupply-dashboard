"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ContactPoints"],{

/***/ "./public/app/features/alerting/unified/api/templateApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewTemplateUrl: () => (/* binding */ previewTemplateUrl),
/* harmony export */   templatesApi: () => (/* binding */ templatesApi),
/* harmony export */   usePreviewTemplateMutation: () => (/* binding */ usePreviewTemplateMutation)
/* harmony export */ });
/* harmony import */ var app_features_alerting_unified_utils_template_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/utils/template-constants.ts");
/* harmony import */ var _components_receivers_form_fields_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/form/fields/utils.ts");
/* harmony import */ var _openapi_templatesApi_gen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/openapi/templatesApi.gen.ts");




const previewTemplateUrl = `/api/alertmanager/grafana/config/api/v1/templates/test`;
_openapi_templatesApi_gen__WEBPACK_IMPORTED_MODULE_2__.generatedTemplatesApi.enhanceEndpoints({
  endpoints: {
    readNamespacedTemplateGroup: (endpoint) => {
      const extraOptions = { hideErrorMessage: true };
      endpoint.extraOptions = extraOptions;
    }
  }
});
const templatesApi = _openapi_templatesApi_gen__WEBPACK_IMPORTED_MODULE_2__.generatedTemplatesApi.injectEndpoints({
  endpoints: (build) => ({
    previewTemplate: build.mutation({
      query: ({ template, alerts, name }) => ({
        url: previewTemplateUrl,
        data: { template, alerts, name },
        method: "POST"
      })
    }),
    getDefaultTemplates: build.query({
      queryFn: async () => {
        const data = (0,_components_receivers_form_fields_utils__WEBPACK_IMPORTED_MODULE_1__.parseTemplates)(app_features_alerting_unified_utils_template_constants__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_TEMPLATES);
        return { data };
      }
    })
  })
});
const { usePreviewTemplateMutation } = templatesApi;


/***/ }),

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

/***/ "./public/app/features/alerting/unified/components/contact-points/ContactPoints.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActiveTab: () => (/* binding */ ActiveTab),
/* harmony export */   ContactPointsPageContents: () => (/* binding */ ContactPointsPageContents),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/hooks/usePagination.ts");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_alertmanager_extraConfigs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/alertmanager/extraConfigs.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/GrafanaAlertmanagerWarning.tsx");
/* harmony import */ var _ContactPoint__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/ContactPoint.tsx");
/* harmony import */ var _NotificationTemplates__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/NotificationTemplates.tsx");
/* harmony import */ var _components_ContactPointsFilter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/components/ContactPointsFilter.tsx");
/* harmony import */ var _components_GlobalConfigAlert__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/components/GlobalConfigAlert.tsx");
/* harmony import */ var _useContactPoints__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useContactPoints.ts");
/* harmony import */ var _useContactPointsSearch__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useContactPointsSearch.tsx");
/* harmony import */ var _useExportContactPoint__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useExportContactPoint.tsx");

























var ActiveTab = /* @__PURE__ */ ((ActiveTab2) => {
  ActiveTab2["ContactPoints"] = "contact_points";
  ActiveTab2["NotificationTemplates"] = "templates";
  return ActiveTab2;
})(ActiveTab || {});
const DEFAULT_PAGE_SIZE = 10;
const ContactPointsTab = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_20__.useAlertmanager)();
  const [queryParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_19__.useURLSearchParams)();
  const fetchPolicies = !(0,app_features_alerting_unified_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_14__.shouldUseK8sApi)(selectedAlertmanager);
  const fetchStatuses = app_core_core__WEBPACK_IMPORTED_MODULE_13__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_16__.AccessControlAction.AlertingNotificationsRead);
  const { isLoading, error, contactPoints } = (0,_useContactPoints__WEBPACK_IMPORTED_MODULE_30__.useContactPointsWithStatus)({
    alertmanager: selectedAlertmanager,
    fetchPolicies,
    fetchStatuses
  });
  const [addContactPointSupported, addContactPointAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.CreateContactPoint
  );
  const [exportContactPointsSupported, exportContactPointsAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.ExportContactPoint
  );
  const [ExportDrawer, showExportDrawer] = (0,_useExportContactPoint__WEBPACK_IMPORTED_MODULE_32__.useExportContactPoint)();
  const search = queryParams.get("search");
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-tab.text-loading", "Loading...") });
  }
  const isGrafanaManagedAlertmanager = selectedAlertmanager === _utils_datasource__WEBPACK_IMPORTED_MODULE_22__.GRAFANA_RULES_SOURCE_NAME;
  if (contactPoints.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState,
      {
        variant: addContactPointAllowed ? "call-to-action" : "not-found",
        button: addContactPointAllowed && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
          {
            href: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_15__.makeAMLink)("/alerting/notifications/receivers/new", selectedAlertmanager),
            icon: "plus",
            size: "lg",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.contact-points.create", children: "Create contact point" })
          }
        ),
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points.empty-state.title", "You don't have any contact points yet")
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", alignItems: "end", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContactPointsFilter__WEBPACK_IMPORTED_MODULE_28__.ContactPointsFilter, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", gap: 1, children: [
        addContactPointSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
          {
            icon: "plus",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-tab.aria-label-add-contact-point", "add contact point"),
            variant: "primary",
            href: "/alerting/notifications/receivers/new",
            disabled: !addContactPointAllowed,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.contact-points.create", children: "Create contact point" })
          }
        ),
        exportContactPointsSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button,
          {
            icon: "download-alt",
            variant: "secondary",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-tab.aria-label-export-all", "export all"),
            disabled: !exportContactPointsAllowed,
            onClick: () => showExportDrawer(_useExportContactPoint__WEBPACK_IMPORTED_MODULE_32__.ALL_CONTACT_POINTS),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.contact-points-tab.export-all", children: "Export all" })
          }
        )
      ] })
    ] }),
    error ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.contact-points-tab.title-failed-to-fetch-contact-points",
          "Failed to fetch contact points"
        ),
        children: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_15__.stringifyErrorLike)(error)
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointsList, { contactPoints, search, pageSize: DEFAULT_PAGE_SIZE }),
    !isGrafanaManagedAlertmanager && !(0,_utils_alertmanager_extraConfigs__WEBPACK_IMPORTED_MODULE_21__.isExtraConfig)(selectedAlertmanager) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_GlobalConfigAlert__WEBPACK_IMPORTED_MODULE_29__.GlobalConfigAlert, { alertManagerName: selectedAlertmanager }),
    ExportDrawer
  ] });
};
const NotificationTemplatesTab = () => {
  const [createTemplateSupported, createTemplateAllowed] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(
    _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.CreateNotificationTemplate
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.notification-templates-tab.create-notification-templates-customize-notifications", children: "Create notification templates to customize your notifications." }) }),
      createTemplateSupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.LinkButton,
        {
          icon: "plus",
          variant: "primary",
          href: "/alerting/notifications/templates/new",
          disabled: !createTemplateAllowed,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.notification-templates-tab.add-notification-template-group", children: "Add notification template group" })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NotificationTemplates__WEBPACK_IMPORTED_MODULE_27__.NotificationTemplates, {})
  ] });
};
const useTabQueryParam = (defaultTab) => {
  const [queryParams, setQueryParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_19__.useURLSearchParams)();
  const param = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const queryParam = queryParams.get("tab");
    if (!queryParam || !Object.values(ActiveTab).map(String).includes(queryParam)) {
      return defaultTab;
    }
    return queryParam || defaultTab;
  }, [defaultTab, queryParams]);
  const setParam = (tab) => setQueryParams({ tab });
  return [param, setParam];
};
const ContactPointsPageContents = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_20__.useAlertmanager)();
  const [, canViewContactPoints] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.ViewContactPoint);
  const [, canCreateContactPoints] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.CreateContactPoint);
  const [, showTemplatesTab] = (0,_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.useAlertmanagerAbility)(_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_17__.AlertmanagerAction.ViewNotificationTemplate);
  const showContactPointsTab = canViewContactPoints || canCreateContactPoints;
  const defaultTab = [
    showContactPointsTab && "contact_points" /* ContactPoints */,
    showTemplatesTab && "templates" /* NotificationTemplates */
  ].filter((tab) => !!tab)[0];
  const [activeTab, setActiveTab] = useTabQueryParam(defaultTab);
  const { contactPoints } = (0,_useContactPoints__WEBPACK_IMPORTED_MODULE_30__.useContactPointsWithStatus)({
    alertmanager: selectedAlertmanager
  });
  const showingContactPoints = activeTab === "contact_points" /* ContactPoints */;
  const showNotificationTemplates = activeTab === "templates" /* NotificationTemplates */;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GrafanaAlertmanagerWarning__WEBPACK_IMPORTED_MODULE_25__.GrafanaAlertmanagerWarning, { currentAlertmanager: selectedAlertmanager }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabsBar, { children: [
        showContactPointsTab && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-page-contents.label-contact-points", "Contact Points"),
            active: showingContactPoints,
            counter: contactPoints.length,
            onChangeTab: () => setActiveTab("contact_points" /* ContactPoints */)
          }
        ),
        showTemplatesTab && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points-page-contents.label-notification-templates", "Notification Templates"),
            active: showNotificationTemplates,
            onChangeTab: () => setActiveTab("templates" /* NotificationTemplates */)
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.TabContent, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: [
        showingContactPoints && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointsTab, {}),
        showNotificationTemplates && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NotificationTemplatesTab, {})
      ] }) })
    ] })
  ] });
};
const ContactPointsList = ({ contactPoints, search, pageSize = DEFAULT_PAGE_SIZE }) => {
  const searchResults = (0,_useContactPointsSearch__WEBPACK_IMPORTED_MODULE_31__.useContactPointsSearch)(contactPoints, search);
  const { page, pageItems, numberOfPages, onPageChange } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_18__.usePagination)(searchResults, 1, pageSize);
  if (pageItems.length === 0) {
    const emptyMessage = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.contact-points.no-contact-points-found", "No contact points found");
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState, { variant: "not-found", message: emptyMessage });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    pageItems.map((contactPoint, index) => {
      const key = `${contactPoint.name}-${index}`;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContactPoint__WEBPACK_IMPORTED_MODULE_26__.ContactPoint, { contactPoint }, key);
    }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Pagination, { currentPage: page, numberOfPages, onNavigate: onPageChange, hideWhenSinglePage: true })
  ] });
};
function ContactPointsPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_24__.AlertmanagerPageWrapper, { navId: "receivers", accessType: "notification", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ContactPointsPageContents, {}) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__.withPageErrorBoundary)(ContactPointsPage));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/NotificationTemplates.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationTemplates: () => (/* binding */ NotificationTemplates)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/state/AlertmanagerContext.tsx");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _receivers_TemplatesTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx");
/* harmony import */ var _useNotificationTemplates__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts");








const NotificationTemplates = () => {
  const { selectedAlertmanager } = (0,_state_AlertmanagerContext__WEBPACK_IMPORTED_MODULE_4__.useAlertmanager)();
  const { data: templates, isLoading, error } = (0,_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_7__.useNotificationTemplates)({ alertmanager: selectedAlertmanager ?? "" });
  if (error) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "alerting.notification-templates.title-failed-to-fetch-notification-templates",
          "Failed to fetch notification templates"
        ),
        children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.stringifyErrorLike)(error)
      }
    );
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LoadingPlaceholder,
      {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
          "alerting.notification-templates.text-loading-notification-templates",
          "Loading notification templates"
        )
      }
    );
  }
  if (templates) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_receivers_TemplatesTable__WEBPACK_IMPORTED_MODULE_6__.TemplatesTable, { alertManagerName: selectedAlertmanager, templates });
  }
  return null;
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/components/ContactPointsFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactPointsFilter: () => (/* binding */ ContactPointsFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useURLSearchParams.ts");








const ContactPointsFilter = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const [searchParams, setSearchParams] = (0,_hooks_useURLSearchParams__WEBPACK_IMPORTED_MODULE_11__.useURLSearchParams)();
  const defaultValue = searchParams.get("search") ?? "";
  const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue);
  const [_, cancel] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(
    () => {
      setSearchParams({ search: searchValue }, true);
    },
    300,
    [setSearchParams, searchValue]
  );
  const clear = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    cancel();
    setSearchValue("");
    setSearchParams({ search: "" }, true);
  }, [cancel, setSearchParams]);
  const hasInput = Boolean(defaultValue);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", alignItems: "end", gap: 0.5, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Field,
      {
        className: styles.noBottom,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.label-search-by-name-or-type", "Search by name or type"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.aria-label-search-contact-points", "search contact points"),
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.placeholder-search", "Search"),
            width: 46,
            prefix: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "search" }),
            onChange: (event) => {
              setSearchValue(event.currentTarget.value);
            },
            value: searchValue
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        variant: "secondary",
        icon: "times",
        onClick: () => clear(),
        disabled: !hasInput,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.contact-points-filter.aria-label-clear", "clear"),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.contact-points-filter.clear", children: "Clear" })
      }
    )
  ] });
};
const getStyles = () => ({
  noBottom: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: 0
  })
});



/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/components/GlobalConfigAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalConfigAlert: () => (/* binding */ GlobalConfigAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Authorize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");








const GlobalConfigAlert = ({ alertManagerName }) => {
  const isVanillaAM = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_5__.isVanillaPrometheusAlertManagerDataSource)(alertManagerName);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Authorize__WEBPACK_IMPORTED_MODULE_7__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_4__.AlertmanagerAction.UpdateExternalConfiguration], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert,
    {
      severity: "info",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "alerting.global-config-alert.title-global-config-for-contact-points",
        "Global config for contact points"
      ),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "alerting.global-config-alert.body", children: "For each external Alertmanager you can define global settings, like server addresses, usernames and password, for all the supported contact points." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton, { href: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_6__.makeAMLink)("alerting/notifications/global-config", alertManagerName), variant: "secondary", children: isVanillaAM ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.global-config-alert.view-global-config", "View global config") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.global-config-alert.edit-global-config", "Edit global config") })
      ]
    }
  ) });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/useContactPointsSearch.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useContactPointsSearch: () => (/* binding */ useContactPointsSearch)
/* harmony export */ });
/* harmony import */ var _leeoniya_ufuzzy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@leeoniya/ufuzzy/dist/uFuzzy.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_features_alerting_unified_components_contact_points_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/constants.ts");





const fuzzyFinder = new _leeoniya_ufuzzy__WEBPACK_IMPORTED_MODULE_0__["default"]({
  intraMode: 1,
  intraIns: 1,
  intraSub: 1,
  intraDel: 1,
  intraTrn: 1
});
const useContactPointsSearch = (contactPoints, search) => {
  const nameHaystack = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return contactPoints.map((contactPoint) => contactPoint.name);
  }, [contactPoints]);
  const typeHaystack = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return contactPoints.map(
      (contactPoint) => (
        // we're using the resolved metadata key here instead of the "type" property – ex. we alias "teams" to "microsoft teams"
        contactPoint.grafana_managed_receiver_configs.map((receiver) => receiver[app_features_alerting_unified_components_contact_points_constants__WEBPACK_IMPORTED_MODULE_3__.RECEIVER_META_KEY].name).join(" ")
      )
    );
  }, [contactPoints]);
  if (!search) {
    return contactPoints;
  }
  const nameHits = fuzzyFinder.filter(nameHaystack, search) ?? [];
  const typeHits = fuzzyFinder.filter(typeHaystack, search) ?? [];
  const hits = [...nameHits, ...typeHits];
  return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniq)(hits).map((id) => contactPoints[id]) ?? [];
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCreateNotificationTemplate: () => (/* binding */ useCreateNotificationTemplate),
/* harmony export */   useDeleteNotificationTemplate: () => (/* binding */ useDeleteNotificationTemplate),
/* harmony export */   useGetNotificationTemplate: () => (/* binding */ useGetNotificationTemplate),
/* harmony export */   useNotificationTemplateMetadata: () => (/* binding */ useNotificationTemplateMetadata),
/* harmony export */   useNotificationTemplates: () => (/* binding */ useNotificationTemplates),
/* harmony export */   useUpdateNotificationTemplate: () => (/* binding */ useUpdateNotificationTemplate),
/* harmony export */   useValidateNotificationTemplate: () => (/* binding */ useValidateNotificationTemplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/utils.ts");
/* harmony import */ var _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertmanagerApi.ts");
/* harmony import */ var _api_templateApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/templateApi.ts");
/* harmony import */ var _hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useProduceNewAlertmanagerConfig.ts");
/* harmony import */ var _reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/reducers/alertmanager/notificationTemplates.ts");
/* harmony import */ var _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/constants.ts");
/* harmony import */ var _utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/utils/k8s/utils.ts");
/* harmony import */ var _utils_templates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/utils/templates.ts");











const { useGetAlertmanagerConfigurationQuery, useLazyGetAlertmanagerConfigurationQuery } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__.alertmanagerApi;
const {
  useListNamespacedTemplateGroupQuery,
  useLazyReadNamespacedTemplateGroupQuery,
  useCreateNamespacedTemplateGroupMutation,
  useReplaceNamespacedTemplateGroupMutation,
  useDeleteNamespacedTemplateGroupMutation
} = _api_templateApi__WEBPACK_IMPORTED_MODULE_3__.templatesApi;
function useNotificationTemplates({ alertmanager }) {
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  const k8sApiTemplatesRequestState = useListNamespacedTemplateGroupQuery(
    { namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)() },
    {
      skip: !k8sApiSupported,
      selectFromResult: (state) => ({
        ...state,
        data: state.data ? templateGroupsToTemplates(state.data) : void 0,
        currentData: state.currentData ? templateGroupsToTemplates(state.currentData) : void 0
      })
    }
  );
  const configApiTemplatesRequestState = useGetAlertmanagerConfigurationQuery(alertmanager, {
    skip: k8sApiSupported,
    selectFromResult: (state) => ({
      ...state,
      data: state.data ? amConfigToTemplates(state.data) : void 0,
      currentData: state.currentData ? amConfigToTemplates(state.currentData) : void 0
    })
  });
  return k8sApiSupported ? k8sApiTemplatesRequestState : configApiTemplatesRequestState;
}
function templateGroupsToTemplates(templateGroups) {
  return templateGroups.items.map((templateGroup) => templateGroupToTemplate(templateGroup));
}
function templateGroupToTemplate(templateGroup) {
  const provenance = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.getAnnotation)(templateGroup, _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.K8sAnnotations.Provenance) ?? _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.PROVENANCE_NONE;
  return {
    // K8s entities should always have a metadata.name property. The type is marked as optional because it's also used in other places
    uid: templateGroup.metadata.name ?? templateGroup.spec.title,
    title: templateGroup.spec.title,
    content: templateGroup.spec.content,
    provenance
  };
}
function amConfigToTemplates(config) {
  const { alertmanager_config } = config;
  const { templates = [] } = alertmanager_config;
  return Object.entries(config.template_files).map(([title, content]) => ({
    uid: title,
    title,
    content,
    // Undefined, null or empty string should be converted to PROVENANCE_NONE
    provenance: (config.template_file_provenances ?? {})[title] || _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.PROVENANCE_NONE,
    missing: !templates.includes(title)
  }));
}
function useGetNotificationTemplate({ alertmanager, uid }) {
  const [fetchAmConfig, amConfigStatus] = useLazyGetAlertmanagerConfigurationQuery({
    selectFromResult: (state) => ({
      ...state,
      data: state.data ? amConfigToTemplate(state.data, uid) : void 0,
      currentData: state.currentData ? amConfigToTemplate(state.currentData, uid) : void 0
      // TODO set error and isError in case template is not found
    })
  });
  const [fetchTemplate, templateStatus] = useLazyReadNamespacedTemplateGroupQuery({
    selectFromResult: (state) => {
      return {
        ...state,
        data: state.data ? templateGroupToTemplate(state.data) : void 0,
        currentData: state.currentData ? templateGroupToTemplate(state.currentData) : void 0
      };
    }
  });
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (k8sApiSupported) {
      fetchTemplate({ namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(), name: uid });
    } else {
      fetchAmConfig(alertmanager);
    }
  }, [alertmanager, uid, k8sApiSupported, fetchAmConfig, fetchTemplate]);
  return k8sApiSupported ? templateStatus : amConfigStatus;
}
function amConfigToTemplate(config, name) {
  const templates = amConfigToTemplates(config);
  return templates.find((t) => t.title === name);
}
function useCreateNotificationTemplate({ alertmanager }) {
  const [createNamespacedTemplateGroup] = useCreateNamespacedTemplateGroupMutation();
  const [updateAlertmanagerConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__.useProduceNewAlertmanagerConfiguration)();
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  const createUsingConfigFileApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ templateValues }) => {
    const action = (0,_reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__.addNotificationTemplateAction)({ template: templateValues });
    return updateAlertmanagerConfiguration(action);
  });
  const createUsingK8sApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ templateValues }) => {
    const content = (0,_utils_templates__WEBPACK_IMPORTED_MODULE_9__.ensureDefine)(templateValues.title, templateValues.content);
    return createNamespacedTemplateGroup({
      namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(),
      comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup: {
        spec: { title: templateValues.title, content },
        metadata: {}
      }
    }).unwrap();
  });
  return k8sApiSupported ? createUsingK8sApi : createUsingConfigFileApi;
}
function useUpdateNotificationTemplate({ alertmanager }) {
  const [replaceNamespacedTemplateGroup] = useReplaceNamespacedTemplateGroupMutation();
  const [updateAlertmanagerConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__.useProduceNewAlertmanagerConfiguration)();
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  const updateUsingConfigFileApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ template, patch }) => {
    const action = (0,_reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__.updateNotificationTemplateAction)({ name: template.title, template: patch });
    return updateAlertmanagerConfiguration(action);
  });
  const updateUsingK8sApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ template, patch }) => {
    const content = (0,_utils_templates__WEBPACK_IMPORTED_MODULE_9__.ensureDefine)(patch.title, patch.content);
    return replaceNamespacedTemplateGroup({
      namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(),
      name: template.uid,
      comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup: {
        spec: { title: patch.title, content },
        metadata: { name: template.uid }
      }
    }).unwrap();
  });
  return k8sApiSupported ? updateUsingK8sApi : updateUsingConfigFileApi;
}
function useDeleteNotificationTemplate({ alertmanager }) {
  const [deleteNamespacedTemplateGroup] = useDeleteNamespacedTemplateGroupMutation();
  const [updateAlertmanagerConfiguration] = (0,_hooks_useProduceNewAlertmanagerConfig__WEBPACK_IMPORTED_MODULE_5__.useProduceNewAlertmanagerConfiguration)();
  const deleteUsingConfigAPI = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(async ({ uid }) => {
    const action = (0,_reducers_alertmanager_notificationTemplates__WEBPACK_IMPORTED_MODULE_6__.deleteNotificationTemplateAction)({ name: uid });
    return updateAlertmanagerConfiguration(action);
  });
  const deleteUsingK8sApi = (0,_hooks_useAsync__WEBPACK_IMPORTED_MODULE_4__.useAsync)(({ uid }) => {
    return deleteNamespacedTemplateGroup({
      namespace: (0,_api_utils__WEBPACK_IMPORTED_MODULE_1__.getAPINamespace)(),
      name: uid,
      ioK8SApimachineryPkgApisMetaV1DeleteOptions: {}
    }).unwrap();
  });
  const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
  return k8sApiSupported ? deleteUsingK8sApi : deleteUsingConfigAPI;
}
function useValidateNotificationTemplate({
  alertmanager,
  originalTemplate
}) {
  const { useLazyGetAlertmanagerConfigurationQuery: useLazyGetAlertmanagerConfigurationQuery2 } = _api_alertmanagerApi__WEBPACK_IMPORTED_MODULE_2__.alertmanagerApi;
  const [fetchAmConfig] = useLazyGetAlertmanagerConfigurationQuery2();
  const titleIsUnique = async (name) => {
    const k8sApiSupported = (0,_utils_k8s_utils__WEBPACK_IMPORTED_MODULE_8__.shouldUseK8sApi)(alertmanager);
    if (k8sApiSupported) {
      return true;
    }
    if (originalTemplate?.title === name) {
      return true;
    }
    const amConfig = await fetchAmConfig(alertmanager).unwrap();
    const templates = amConfigToTemplates(amConfig);
    const templateOfThisNameExists = templates.some((t) => t.title === name);
    if (templateOfThisNameExists) {
      return "Another template with this name already exists";
    }
    return true;
  };
  return {
    titleIsUnique
  };
}
function useNotificationTemplateMetadata(template) {
  if (!template) {
    return {
      isProvisioned: false
    };
  }
  return {
    isProvisioned: Boolean(template.provenance) && template.provenance !== _utils_k8s_constants__WEBPACK_IMPORTED_MODULE_7__.PROVENANCE_NONE
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplateEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateEditor: () => (/* binding */ TemplateEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _editor_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/autocomplete.ts");
/* harmony import */ var _editor_definition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/definition.ts");
/* harmony import */ var _editor_register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/register.ts");







const TemplateEditor = (props) => {
  const shouldAutoHeight = Boolean(props.autoHeight);
  const disposeSuggestions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const onEditorDidMount = (editor2) => {
    if (shouldAutoHeight) {
      const contentHeight = editor2.getContentHeight();
      try {
        editor2.layout({ height: contentHeight, width: NaN });
      } catch (err) {
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      disposeSuggestions.current?.dispose();
    };
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
    {
      showLineNumbers: true,
      showMiniMap: false,
      ...props,
      monacoOptions: {
        scrollBeyondLastLine: false
      },
      onEditorDidMount,
      onBeforeEditorMount: (monaco) => {
        (0,_editor_register__WEBPACK_IMPORTED_MODULE_5__.registerLanguage)(monaco, _editor_definition__WEBPACK_IMPORTED_MODULE_4__["default"]);
        disposeSuggestions.current = (0,_editor_autocomplete__WEBPACK_IMPORTED_MODULE_3__.registerGoTemplateAutocomplete)(monaco);
      },
      language: _editor_definition__WEBPACK_IMPORTED_MODULE_4__.GO_TEMPLATE_LANGUAGE_ID
    }
  );
};



/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/TemplatesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplatesTable: () => (/* binding */ TemplatesTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/utils/logging.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_alerting_unified_components_common_TextVariants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/common/TextVariants.tsx");
/* harmony import */ var app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _components_Authorize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/Authorize.tsx");
/* harmony import */ var _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAbilities.ts");
/* harmony import */ var _styles_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/styles/table.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _CollapseToggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/components/CollapseToggle.tsx");
/* harmony import */ var _DetailsField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/components/DetailsField.tsx");
/* harmony import */ var _Provisioning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/components/Provisioning.tsx");
/* harmony import */ var _contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/components/contact-points/useNotificationTemplates.ts");
/* harmony import */ var _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx");
/* harmony import */ var _TemplateEditor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/TemplateEditor.tsx");



















const TemplatesTable = ({ alertManagerName, templates }) => {
  const appNotification = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_8__.useAppNotification)();
  const [deleteTemplate] = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_18__.useDeleteNotificationTemplate)({ alertmanager: alertManagerName });
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_13__.getAlertTableStyles);
  const [templateToDelete, setTemplateToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const onDeleteTemplate = async () => {
    if (templateToDelete) {
      try {
        await deleteTemplate.execute({ uid: templateToDelete.uid });
        appNotification.success("Template deleted", `Template ${templateToDelete.title} has been deleted`);
      } catch (error) {
        appNotification.error("Error deleting template", `Error deleting template ${templateToDelete.title}`);
        const loggableError = error instanceof Error ? error : new Error((0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.stringifyErrorLike)(error));
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.logError)(loggableError);
      }
    }
    setTemplateToDelete(void 0);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: tableStyles.table, "data-testid": "templates-table", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("colgroup", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", { className: tableStyles.colExpand }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("col", {})
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates-table.template-group", children: "Template group" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize,
          {
            actions: [
              _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.CreateNotificationTemplate,
              _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.UpdateNotificationTemplate,
              _hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.DeleteNotificationTemplate
            ],
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates-table.actions", children: "Actions" }) })
          }
        )
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [
        !templates.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", { className: tableStyles.evenRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates-table.no-templates-defined", children: "No templates defined." }) }) }),
        templates.map((notificationTemplate, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          TemplateRow,
          {
            notificationTemplate,
            idx,
            alertManagerName,
            onDeleteClick: setTemplateToDelete
          },
          notificationTemplate.uid
        ))
      ] })
    ] }),
    !!templateToDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal,
      {
        isOpen: true,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.templates-table.title-delete-template-group", "Delete template group"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "alerting.templates-table.body-delete-template-group",
          'Are you sure you want to delete template group "{{template}}"?',
          { template: templateToDelete.title }
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.templates-table.confirmText-yes-delete", "Yes, delete"),
        onConfirm: onDeleteTemplate,
        onDismiss: () => setTemplateToDelete(void 0)
      }
    )
  ] });
};
function TemplateRow({ notificationTemplate, idx, alertManagerName, onDeleteClick }) {
  const tableStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(_styles_table__WEBPACK_IMPORTED_MODULE_13__.getAlertTableStyles);
  const isGrafanaAlertmanager = alertManagerName === app_features_alerting_unified_utils_datasource__WEBPACK_IMPORTED_MODULE_10__.GRAFANA_RULES_SOURCE_NAME;
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { isProvisioned } = (0,_contact_points_useNotificationTemplates__WEBPACK_IMPORTED_MODULE_18__.useNotificationTemplateMetadata)(notificationTemplate);
  const { uid, title: name, content: template, missing } = notificationTemplate;
  const misconfiguredBadgeText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.templates.misconfigured-badge-text", "Misconfigured");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: idx % 2 === 0 ? tableStyles.evenRow : void 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollapseToggle__WEBPACK_IMPORTED_MODULE_15__.CollapseToggle, { isCollapsed: !isExpanded, onToggle: () => setIsExpanded(!isExpanded) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { children: [
        name,
        " ",
        isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Provisioning__WEBPACK_IMPORTED_MODULE_17__.ProvisioningBadge, {}),
        " ",
        missing && !isGrafanaAlertmanager && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
          {
            content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates.misconfigured-warning", children: "This template is misconfigured." }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.templates.misconfigured-warning-details", children: [
                "Templates must be defined in both the",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_common_TextVariants__WEBPACK_IMPORTED_MODULE_9__.CodeText, { content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.content-templatefiles", "template_files") }),
                " and",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_common_TextVariants__WEBPACK_IMPORTED_MODULE_9__.CodeText, { content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.content-templates", "templates") }),
                " sections of your alertmanager configuration."
              ] })
            ] }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge, { text: misconfiguredBadgeText, color: "orange" }) })
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { className: tableStyles.actionsCell, children: [
        isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(uid)}/edit`, alertManagerName),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-view-template", "view template"),
            icon: "file-alt"
          }
        ),
        !isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.UpdateNotificationTemplate], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)(`/alerting/notifications/templates/${encodeURIComponent(uid)}/edit`, alertManagerName),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-edit-template-group", "Edit template group"),
            icon: "pen"
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.CreateNotificationTemplate], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            to: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.makeAMLink)(
              `/alerting/notifications/templates/${encodeURIComponent(uid)}/duplicate`,
              alertManagerName
            ),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-copy-template-group", "Copy template group"),
            icon: "copy"
          }
        ) }),
        !isProvisioned && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Authorize__WEBPACK_IMPORTED_MODULE_11__.Authorize, { actions: [_hooks_useAbilities__WEBPACK_IMPORTED_MODULE_12__.AlertmanagerAction.DeleteNotificationTemplate], children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rules_ActionIcon__WEBPACK_IMPORTED_MODULE_19__.ActionIcon,
          {
            onClick: () => onDeleteClick(notificationTemplate),
            tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.template-row.tooltip-delete-template-group", "Delete template group"),
            icon: "trash-alt"
          }
        ) })
      ] })
    ] }),
    isExpanded && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: idx % 2 === 0 ? tableStyles.evenRow : void 0, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DetailsField__WEBPACK_IMPORTED_MODULE_16__.DetailsField, { label: "", horizontal: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _TemplateEditor__WEBPACK_IMPORTED_MODULE_20__.TemplateEditor,
        {
          width: "auto",
          height: "auto",
          autoHeight: true,
          value: template,
          showLineNumbers: false,
          monacoOptions: {
            readOnly: true,
            scrollBeyondLastLine: false
          }
        }
      ) }) })
    ] })
  ] }, uid);
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/alertManagerSuggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertManagerSuggestions: () => (/* binding */ getAlertManagerSuggestions),
/* harmony export */   getGomplateSuggestions: () => (/* binding */ getGomplateSuggestions)
/* harmony export */ });
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/language.ts");


function getAlertManagerSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Function;
  return [
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.toUpper,
      detail: "function(s string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.toLower,
      detail: "function(s string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.title,
      documentation: "Capitalizes the first letter of each word",
      detail: "function(s string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.join,
      documentation: { value: "Joins an array of strings using the separator provided." },
      detail: "function(separator string, s []string)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.match,
      detail: "function",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.safeHtml,
      detail: "function(pattern, repl, text)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.reReplaceAll,
      detail: "function(pattern, repl, text)",
      kind
    },
    {
      label: _language__WEBPACK_IMPORTED_MODULE_0__.AlertmanagerTemplateFunction.stringSlice,
      detail: "function(s ...string)",
      kind
    }
  ];
}
function getGomplateSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Function;
  return Object.values(_language__WEBPACK_IMPORTED_MODULE_0__.GomplateFunctions).flatMap(
    (functionList) => functionList.map((func) => ({
      label: func.keyword,
      detail: func.usage,
      documentation: `${func.definition}

${func.example}`,
      kind
    }))
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/autocomplete.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletionProvider: () => (/* binding */ CompletionProvider),
/* harmony export */   registerGoTemplateAutocomplete: () => (/* binding */ registerGoTemplateAutocomplete)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alertManagerSuggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/alertManagerSuggestions.ts");
/* harmony import */ var _templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/templateDataSuggestions.ts");




function registerGoTemplateAutocomplete(monaco) {
  const goTemplateAutocompleteProvider = {
    triggerCharacters: ["."],
    provideCompletionItems(model, position, context) {
      const word = model.getWordUntilPosition(position);
      const range = {
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: word.startColumn,
        endColumn: word.endColumn
      };
      const completionProvider = new CompletionProvider(monaco, range);
      const insideExpression = isInsideGoExpression(model, position);
      if (!insideExpression) {
        return completionProvider.getSnippetsSuggestions();
      }
      if (context.triggerKind === monaco.languages.CompletionTriggerKind.Invoke && !context.triggerCharacter) {
        return completionProvider.getFunctionsSuggestions();
      }
      const wordBeforeDot = model.getWordUntilPosition({
        lineNumber: position.lineNumber,
        column: position.column - 1
      });
      return completionProvider.getTemplateDataSuggestions(wordBeforeDot.word);
    }
  };
  return monaco.languages.registerCompletionItemProvider("go-template", goTemplateAutocompleteProvider);
}
function isInsideGoExpression(model, position) {
  const goSyntaxRegex = "\\{\\{(?:.|\\n)+?\\}\\}";
  const matches = model.findMatches(goSyntaxRegex, model.getFullModelRange(), true, false, null, false);
  return matches.some(
    (match) => match.range.containsPosition({
      lineNumber: position.lineNumber,
      column: position.column + 1
      // Stricter check to avoid matching on the closing bracket.
    })
  );
}
class CompletionProvider {
  constructor(monaco, range) {
    this.monaco = monaco;
    this.range = range;
    this.getSnippetsSuggestions = () => {
      return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getSnippetsSuggestions)(this.monaco));
    };
    this.getFunctionsSuggestions = () => {
      return this.getCompletionsFromDefinitions(
        (0,_alertManagerSuggestions__WEBPACK_IMPORTED_MODULE_1__.getAlertManagerSuggestions)(this.monaco),
        (0,_alertManagerSuggestions__WEBPACK_IMPORTED_MODULE_1__.getGomplateSuggestions)(this.monaco)
      );
    };
    this.getTemplateDataSuggestions = (wordContext) => {
      switch (wordContext) {
        case "":
          return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getGlobalSuggestions)(this.monaco), (0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getAlertSuggestions)(this.monaco));
        case "Alerts":
          return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getAlertsSuggestions)(this.monaco));
        case "GroupLabels":
        case "CommonLabels":
        case "CommonAnnotations":
        case "Labels":
        case "Annotations":
          return this.getCompletionsFromDefinitions((0,_templateDataSuggestions__WEBPACK_IMPORTED_MODULE_2__.getKeyValueSuggestions)(this.monaco));
        default:
          return { suggestions: [] };
      }
    };
    this.getCompletionsFromDefinitions = (...args) => {
      const allDefinitions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.concat)(...args);
      return {
        suggestions: allDefinitions.map((definition) => buildAutocompleteSuggestion(definition, this.range))
      };
    };
  }
}
function buildAutocompleteSuggestion({ label, detail, documentation, kind, insertText }, range) {
  const insertFallback = typeof label === "string" ? label : label.label;
  const labelObject = typeof label === "string" ? { label, description: detail } : { ...label };
  labelObject.description ??= detail;
  return {
    label: labelObject,
    kind,
    insertText: insertText ?? insertFallback,
    range,
    documentation,
    detail
  };
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/definition.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GO_TEMPLATE_LANGUAGE_ID: () => (/* binding */ GO_TEMPLATE_LANGUAGE_ID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const GO_TEMPLATE_LANGUAGE_ID = "go-template";
const goTemplateLanguageDefinition = {
  id: GO_TEMPLATE_LANGUAGE_ID,
  extensions: [],
  aliases: [],
  mimetypes: [],
  loader: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, "./public/app/features/alerting/unified/components/receivers/editor/language.ts"))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goTemplateLanguageDefinition);


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/register.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerLanguage: () => (/* binding */ registerLanguage)
/* harmony export */ });

const registerLanguage = (monaco, language) => {
  const { id, loader } = language;
  const languages = monaco.languages.getLanguages();
  if (languages.find((l) => l.id === id)) {
    return;
  }
  monaco.languages.register({ id });
  loader().then((monarch) => {
    monaco.languages.setMonarchTokensProvider(id, monarch.language);
    monaco.languages.setLanguageConfiguration(id, monarch.conf);
  });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/snippets.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertDetailsSnippet: () => (/* binding */ alertDetailsSnippet),
/* harmony export */   alertsLoopSnippet: () => (/* binding */ alertsLoopSnippet),
/* harmony export */   annotationsLoopSnippet: () => (/* binding */ annotationsLoopSnippet),
/* harmony export */   commonAnnotationsLoopSnippet: () => (/* binding */ commonAnnotationsLoopSnippet),
/* harmony export */   commonLabelsLoopSnippet: () => (/* binding */ commonLabelsLoopSnippet),
/* harmony export */   groupLabelsLoopSnippet: () => (/* binding */ groupLabelsLoopSnippet),
/* harmony export */   jsonSnippet: () => (/* binding */ jsonSnippet),
/* harmony export */   labelsLoopSnippet: () => (/* binding */ labelsLoopSnippet)
/* harmony export */ });

const alertsLoopSnippet = `
{{ range .Alerts }}
  Status: {{ .Status }}
  Starts at: {{ .StartsAt }}
{{ end }}
`;
const alertDetailsSnippet = `
[{{.Status}}] {{ .Labels.alertname }}

Labels:
{{ range .Labels.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}

{{ if gt (len .Annotations) 0 }}
Annotations:
{{ range .Annotations.SortedPairs }}
  {{ .Name }}: {{ .Value }}
{{ end }}
{{ end }}

{{ if gt (len .SilenceURL ) 0 }}
  Silence alert: {{ .SilenceURL }}
{{ end }}
{{ if gt (len .DashboardURL ) 0 }}
  Go to dashboard: {{ .DashboardURL }}
{{ end }}
`;
const jsonSnippet = `
{{ coll.Dict
  "receiver" .Receiver
  "status" .Status
  "alerts" ( len .Alerts )
| data.ToJSONPretty " " }}
`;
const groupLabelsLoopSnippet = getKeyValueTemplate("GroupLabels.SortedPairs");
const commonLabelsLoopSnippet = getKeyValueTemplate("CommonLabels.SortedPairs");
const commonAnnotationsLoopSnippet = getKeyValueTemplate("CommonAnnotations.SortedPairs");
const labelsLoopSnippet = getKeyValueTemplate("Labels.SortedPairs");
const annotationsLoopSnippet = getKeyValueTemplate("Annotations.SortedPairs");
function getKeyValueTemplate(arrayName) {
  return `
{{ range .${arrayName} }}
  {{ .Name }} = {{ .Value }}
{{ end }}`;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/editor/templateDataSuggestions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAlertSuggestions: () => (/* binding */ getAlertSuggestions),
/* harmony export */   getAlertsSuggestions: () => (/* binding */ getAlertsSuggestions),
/* harmony export */   getGlobalSuggestions: () => (/* binding */ getGlobalSuggestions),
/* harmony export */   getKeyValueSuggestions: () => (/* binding */ getKeyValueSuggestions),
/* harmony export */   getSnippetsSuggestions: () => (/* binding */ getSnippetsSuggestions),
/* harmony export */   snippets: () => (/* binding */ snippets)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/components/receivers/editor/snippets.ts");



function getGlobalSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    {
      label: "Alerts",
      kind,
      detail: "Alert[]",
      documentation: {
        value: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.get-global-suggestions.value.an-array-containing-all-alerts",
          "An Array containing all alerts"
        )
      }
    },
    { label: "Receiver", kind, detail: "string" },
    { label: "Status", kind, detail: "string" },
    { label: "GroupLabels", kind, detail: "[]KeyValue" },
    { label: "CommonLabels", kind, detail: "[]KeyValue" },
    { label: "CommonAnnotations", kind, detail: "[]KeyValue" },
    { label: "ExternalURL", kind, detail: "string" },
    { label: "GroupKey", kind, detail: "string" },
    { label: "TruncatedAlerts", kind, detail: "integer" }
  ];
}
function getAlertSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    {
      label: { label: "Status", detail: "(Alert)", description: "string" },
      kind,
      detail: "string",
      documentation: {
        value: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.get-alert-suggestions.value.status-alert-firing-resolved",
          "Status of the alert. It can be `firing` or `resolved`"
        )
      }
    },
    {
      label: { label: "Labels", detail: "(Alert)" },
      kind,
      detail: "[]KeyValue",
      documentation: {
        value: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
          "alerting.get-alert-suggestions.value.labels-attached-alert",
          "A set of labels attached to the alert."
        )
      }
    },
    {
      label: { label: "Annotations", detail: "(Alert)" },
      kind,
      detail: "[]KeyValue",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.annotations-attached-alert",
        "A set of annotations attached to the alert."
      )
    },
    {
      label: { label: "StartsAt", detail: "(Alert)" },
      kind,
      detail: "time.Time",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.time-the-alert-started-firing",
        "Time the alert started firing."
      )
    },
    {
      label: { label: "EndsAt", detail: "(Alert)" },
      kind,
      detail: "time.Time",
      documentation: "Only set if the end time of an alert is known. Otherwise set to a configurable timeout period from the time since the last alert was received."
    },
    {
      label: { label: "GeneratorURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.grafana-external-alertmanager",
        "Back link to Grafana or external Alertmanager."
      )
    },
    {
      label: { label: "SilenceURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "Link to Grafana silence for with labels for this alert pre-filled. Only for Grafana managed alerts."
    },
    {
      label: { label: "DashboardURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "Link to Grafana dashboard, if alert rule belongs to one. Only for Grafana managed alerts."
    },
    {
      label: { label: "PanelURL", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "Link to Grafana dashboard panel, if alert rule belongs to one. Only for Grafana managed alerts."
    },
    {
      label: { label: "Fingerprint", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.fingerprint-identify-alert",
        "Fingerprint that can be used to identify the alert."
      )
    },
    {
      label: { label: "ValueString", detail: "(Alert)" },
      kind,
      detail: "string",
      documentation: "String that contains labels and values of each reduced expression in the alert."
    },
    {
      label: { label: "OrgID", detail: "(Alert)" },
      kind,
      detail: "integer",
      documentation: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)(
        "alerting.get-alert-suggestions.documentation.organization-alert",
        "The ID of the organization that owns the alert."
      )
    }
  ];
}
function getAlertsSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    { label: "Firing", kind, detail: "Alert[]" },
    { label: "Resolved", kind, detail: "Alert[]" }
  ];
}
function getKeyValueSuggestions(monaco) {
  const kind = monaco.languages.CompletionItemKind.Field;
  return [
    { label: "SortedPairs", kind, detail: "[]KeyValue" },
    { label: "Names", kind, detail: "[]string" },
    { label: "Values", kind, detail: "[]string" },
    {
      label: "Remove",
      detail: "KeyValue[] function(keys []string)",
      kind: monaco.languages.CompletionItemKind.Method
    }
  ];
}
const snippets = {
  alerts: {
    label: "alertsloop",
    description: "Renders a loop through alerts",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.alertsLoopSnippet
  },
  alertDetails: {
    label: "alertdetails",
    description: "Renders all information available about the alert",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.alertDetailsSnippet
  },
  groupLabels: {
    label: "grouplabelsloop",
    description: "Renders a loop through group labels",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.groupLabelsLoopSnippet
  },
  commonLabels: {
    label: "commonlabelsloop",
    description: "Renders a loop through common labels",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.commonLabelsLoopSnippet
  },
  commonAnnotations: {
    label: "commonannotationsloop",
    description: "Renders a loop through common annotations",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.commonAnnotationsLoopSnippet
  },
  labels: {
    label: "labelsloop",
    description: "Renders a loop through labels",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.labelsLoopSnippet
  },
  annotations: {
    label: "annotationsloop",
    description: "Renders a loop through annotations",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.annotationsLoopSnippet
  },
  json: {
    label: "json",
    description: "Renders a JSON object",
    snippet: _snippets__WEBPACK_IMPORTED_MODULE_1__.jsonSnippet
  }
};
function getSnippetsSuggestions(monaco) {
  const snippetKind = monaco.languages.CompletionItemKind.Snippet;
  const snippetInsertRule = monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet;
  const { alerts, alertDetails, groupLabels, commonLabels, commonAnnotations, labels, annotations, json } = snippets;
  return [
    {
      label: alerts.label,
      documentation: alerts.description,
      kind: snippetKind,
      insertText: alerts.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: {
        label: alertDetails.label,
        detail: "(Alert)"
      },
      documentation: alertDetails.description,
      kind: snippetKind,
      insertText: alertDetails.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: groupLabels.label,
      documentation: groupLabels.description,
      kind: snippetKind,
      insertText: groupLabels.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: commonLabels.label,
      documentation: commonLabels.description,
      kind: snippetKind,
      insertText: commonLabels.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: commonAnnotations.label,
      documentation: commonAnnotations.description,
      kind: snippetKind,
      insertText: commonAnnotations.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: { label: labels.label, detail: "(Alert)" },
      documentation: labels.description,
      kind: snippetKind,
      insertText: labels.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: { label: annotations.label, detail: "(Alert)" },
      documentation: annotations.description,
      kind: snippetKind,
      insertText: annotations.snippet,
      insertTextRules: snippetInsertRule
    },
    {
      label: json.label,
      documentation: json.description,
      kind: snippetKind,
      insertText: json.snippet,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.KeepWhitespace
    }
  ];
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/receivers/form/fields/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTemplateName: () => (/* binding */ getTemplateName),
/* harmony export */   getUseTemplateText: () => (/* binding */ getUseTemplateText),
/* harmony export */   matchesOnlyOneTemplate: () => (/* binding */ matchesOnlyOneTemplate),
/* harmony export */   parseTemplates: () => (/* binding */ parseTemplates)
/* harmony export */ });

function parseTemplates(templatesString) {
  const templates = {};
  const stack = [];
  const regex = /{{-?\s*(define|end|if|range|else|with|template|block)\b(.*?)-?}}/gs;
  let match;
  let currentIndex = 0;
  while ((match = regex.exec(templatesString)) !== null) {
    const [, keyword, middleContent] = match;
    currentIndex = match.index;
    if (keyword === "define") {
      const nameMatch = middleContent?.match(/"([^"]+)"/);
      if (nameMatch) {
        stack.push({ type: "define", startIndex: currentIndex, name: nameMatch[1] });
      }
    } else if (keyword === "end") {
      let top = stack.pop();
      while (top && top.type !== "define" && top.type !== "if" && top.type !== "range" && top.type !== "with" && top.type !== "block") {
        top = stack.pop();
      }
      if (top) {
        const endIndex = regex.lastIndex;
        if (top.type === "define" && !top.name?.startsWith("__")) {
          templates[top.name] = {
            name: top.name,
            content: templatesString.slice(top.startIndex, endIndex)
          };
        }
      }
    } else if (keyword === "if" || keyword === "range" || keyword === "else" || keyword === "with" || keyword === "block") {
      stack.push({ type: keyword, startIndex: currentIndex });
    }
  }
  for (const template of Object.values(templates)) {
    const regex2 = /{{ template "([^"]+)" }}/g;
    let match2;
    while ((match2 = regex2.exec(template.content)) !== null) {
      const name = match2[1];
      if (templates[name]?.content) {
        template.content += "\n" + templates[name]?.content;
        delete templates[name];
      }
    }
  }
  return Object.values(templates);
}
function getUseTemplateText(templateName) {
  return `{{ template "${templateName}" . }}`;
}
function getTemplateName(useTemplateText) {
  const match = useTemplateText.match(/\{\{\s*template\s*"(.*)"\s*\.\s*\}\}/);
  return match ? match[1] : "";
}
function matchesOnlyOneTemplate(fieldValue) {
  const pattern = /\{\{\s*template\s*".*?"\s*\.\s*\}\}/g;
  const matches = fieldValue.match(pattern);
  if (matches?.length !== 1) {
    return false;
  }
  const parts = fieldValue.split(pattern);
  for (const part of parts) {
    if (part.trim() !== "") {
      return false;
    }
  }
  return true;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionIcon: () => (/* binding */ ActionIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");



const ActionIcon = ({
  tooltip,
  icon,
  to,
  target,
  onClick,
  className,
  tooltipPlacement = "top",
  ...rest
}) => {
  const ariaLabel = typeof tooltip === "string" ? tooltip : void 0;
  return to ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LinkButton,
    {
      tooltip,
      tooltipPlacement,
      variant: "secondary",
      fill: "text",
      icon,
      href: to,
      size: "sm",
      target,
      ...rest,
      "aria-label": ariaLabel
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Button,
    {
      tooltip,
      tooltipPlacement,
      className,
      variant: "secondary",
      fill: "text",
      size: "sm",
      icon,
      type: "button",
      onClick,
      ...rest,
      "aria-label": ariaLabel
    }
  );
};


/***/ }),

/***/ "./public/app/features/alerting/unified/openapi/templatesApi.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTagTypes: () => (/* binding */ addTagTypes),
/* harmony export */   generatedTemplatesApi: () => (/* binding */ injectedRtkApi)
/* harmony export */ });
/* harmony import */ var _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const addTagTypes = ["TemplateGroup"];
const injectedRtkApi = _api_alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.enhanceEndpoints({
  addTagTypes
}).injectEndpoints({
  endpoints: (build) => ({
    listNamespacedTemplateGroup: build.query({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups`,
        params: {
          pretty: queryArg.pretty,
          allowWatchBookmarks: queryArg.allowWatchBookmarks,
          continue: queryArg["continue"],
          fieldSelector: queryArg.fieldSelector,
          labelSelector: queryArg.labelSelector,
          limit: queryArg.limit,
          resourceVersion: queryArg.resourceVersion,
          resourceVersionMatch: queryArg.resourceVersionMatch,
          sendInitialEvents: queryArg.sendInitialEvents,
          timeoutSeconds: queryArg.timeoutSeconds,
          watch: queryArg.watch
        }
      }),
      providesTags: ["TemplateGroup"]
    }),
    createNamespacedTemplateGroup: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups`,
        method: "POST",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TemplateGroup"]
    }),
    readNamespacedTemplateGroup: build.query({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups/${queryArg.name}`,
        params: { pretty: queryArg.pretty }
      }),
      providesTags: ["TemplateGroup"]
    }),
    replaceNamespacedTemplateGroup: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups/${queryArg.name}`,
        method: "PUT",
        body: queryArg.comGithubGrafanaGrafanaPkgApisAlertingNotificationsV0Alpha1TemplateGroup,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          fieldManager: queryArg.fieldManager,
          fieldValidation: queryArg.fieldValidation
        }
      }),
      invalidatesTags: ["TemplateGroup"]
    }),
    deleteNamespacedTemplateGroup: build.mutation({
      query: (queryArg) => ({
        url: `/apis/notifications.alerting.grafana.app/v0alpha1/namespaces/${queryArg["namespace"]}/templategroups/${queryArg.name}`,
        method: "DELETE",
        body: queryArg.ioK8SApimachineryPkgApisMetaV1DeleteOptions,
        params: {
          pretty: queryArg.pretty,
          dryRun: queryArg.dryRun,
          gracePeriodSeconds: queryArg.gracePeriodSeconds,
          orphanDependents: queryArg.orphanDependents,
          propagationPolicy: queryArg.propagationPolicy
        }
      }),
      invalidatesTags: ["TemplateGroup"]
    })
  }),
  overrideExisting: false
});



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


/***/ }),

/***/ "./public/app/features/alerting/unified/utils/template-constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_TEMPLATES: () => (/* binding */ DEFAULT_TEMPLATES)
/* harmony export */ });

const DEFAULT_TEMPLATES = `{{ define "__subject" }}[{{ .Status | toUpper }}{{ if eq .Status "firing" }}:{{ .Alerts.Firing | len }}{{ if gt (.Alerts.Resolved | len) 0 }}, RESOLVED:{{ .Alerts.Resolved | len }}{{ end }}{{ end }}] {{ .GroupLabels.SortedPairs.Values | join " " }} {{ if gt (len .CommonLabels) (len .GroupLabels) }}({{ with .CommonLabels.Remove .GroupLabels.Names }}{{ .Values | join " " }}{{ end }}){{ end }}{{ end }}

{{ define "__text_values_list" }}{{ if len .Values }}{{ $first := true }}{{ range $refID, $value := .Values -}}
{{ if $first }}{{ $first = false }}{{ else }}, {{ end }}{{ $refID }}={{ $value }}{{ end -}}
{{ else }}[no value]{{ end }}{{ end }}

{{ define "__text_alert_list" }}{{ range . }}
Value: {{ template "__text_values_list" . }}
Labels:
{{ range .Labels.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}Annotations:
{{ range .Annotations.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}{{ if gt (len .GeneratorURL) 0 }}Source: {{ .GeneratorURL }}
{{ end }}{{ if gt (len .SilenceURL) 0 }}Silence: {{ .SilenceURL }}
{{ end }}{{ if gt (len .DashboardURL) 0 }}Dashboard: {{ .DashboardURL }}
{{ end }}{{ if gt (len .PanelURL) 0 }}Panel: {{ .PanelURL }}
{{ end }}{{ end }}{{ end }}

{{ define "default.title" }}{{ template "__subject" . }}{{ end }}

{{ define "default.message" }}{{ if gt (len .Alerts.Firing) 0 }}**Firing**
{{ template "__text_alert_list" .Alerts.Firing }}{{ if gt (len .Alerts.Resolved) 0 }}

{{ end }}{{ end }}{{ if gt (len .Alerts.Resolved) 0 }}**Resolved**
{{ template "__text_alert_list" .Alerts.Resolved }}{{ end }}{{ end }}

{{ define "__teams_text_alert_list" }}{{ range . }}
Value: {{ template "__text_values_list" . }}
Labels:
{{ range .Labels.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}
Annotations:
{{ range .Annotations.SortedPairs }} - {{ .Name }} = {{ .Value }}
{{ end }}
{{ if gt (len .GeneratorURL) 0 }}Source: [{{ .GeneratorURL }}]({{ .GeneratorURL }})

{{ end }}{{ if gt (len .SilenceURL) 0 }}Silence: [{{ .SilenceURL }}]({{ .SilenceURL }})

{{ end }}{{ if gt (len .DashboardURL) 0 }}Dashboard: [{{ .DashboardURL }}]({{ .DashboardURL }})

{{ end }}{{ if gt (len .PanelURL) 0 }}Panel: [{{ .PanelURL }}]({{ .PanelURL }})

{{ end }}
{{ end }}{{ end }}

{{ define "teams.default.message" }}{{ if gt (len .Alerts.Firing) 0 }}**Firing**
{{ template "__teams_text_alert_list" .Alerts.Firing }}{{ if gt (len .Alerts.Resolved) 0 }}

{{ end }}{{ end }}{{ if gt (len .Alerts.Resolved) 0 }}**Resolved**
{{ template "__teams_text_alert_list" .Alerts.Resolved }}{{ end }}{{ end }}`;


/***/ })

}]);
//# sourceMappingURL=ContactPoints.b8c577c01ad3734f2e5f.js.map