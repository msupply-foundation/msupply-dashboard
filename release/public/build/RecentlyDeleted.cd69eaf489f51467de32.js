"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["RecentlyDeleted"],{

/***/ "./public/app/features/alerting/unified/components/rules/deleted-rules/ConfirmDeletePermanantlyModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDeletedPermanentlyModal: () => (/* binding */ ConfirmDeletedPermanentlyModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");







const ConfirmDeletedPermanentlyModal = ({ isOpen, onDismiss, guid }) => {
  const [remove] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_7__.alertRuleApi.endpoints.permanentlyDeleteRule.useMutation();
  const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.deleted-rules.delete-modal.title", "Permanently delete alert rule");
  const confirmText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.deleted-rules.delete-modal.confirm", "Yes, permanently delete");
  const appNotification = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_6__.useAppNotification)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  async function onDeleteConfirm() {
    if (!guid) {
      return;
    }
    return remove({ guid }).then(() => {
      onDismiss();
      appNotification.success((0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.deleted-rules.delete-modal.success", "Alert rule permanently deleted"));
    }).catch((err) => {
      appNotification.error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.deleted-rules.delete-modal.error", "Could not permanently delete alert rule")
      );
    });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmModal,
    {
      isOpen,
      title,
      confirmText,
      modalClass: styles.modal,
      confirmButtonVariant: "destructive",
      body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.deleted-rules.delete-modal.body", children: "Are you sure you want to permanently delete this alert rule? This action cannot be undone." }) }),
      onConfirm: onDeleteConfirm,
      onDismiss
    }
  );
};
const getStyles = () => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "700px"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/deleted-rules/ConfirmRestoreDeletedRuleModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmRestoreDeletedRuleModal: () => (/* binding */ ConfirmRestoreDeletedRuleModal),
/* harmony export */   useRestoreDeletedRule: () => (/* binding */ useRestoreDeletedRule)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/backend_srv.ts");
/* harmony import */ var app_core_utils_errors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/utils/errors.ts");
/* harmony import */ var app_features_alerting_unified_hooks_useAsync__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useAsync.tsx");
/* harmony import */ var _hooks_ruleGroup_useUpsertRuleFromRuleGroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/hooks/ruleGroup/useUpsertRuleFromRuleGroup.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _utils_rule_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/alerting/unified/utils/rule-form.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/url.ts");















const ConfirmRestoreDeletedRuleModal = ({
  isOpen,
  ruleToRestore,
  onDismiss,
  onRestoreSucess,
  onRestoreError
}) => {
  const [restoreMethod, { error }] = useRestoreDeletedRule();
  const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.deleted-rules.restore-modal.title", "Restore deleted alert rule");
  const errorTitle = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.deleted-rules.restore-modal.error", "Could not restore deleted alert rule");
  const confirmText = !error ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("alerting.deleted-rules.restore-modal.confirm", "Yes, restore deleted rule") : "Manually restore the rule";
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  async function onRestoreConfirm() {
    if (!ruleToRestore) {
      return;
    }
    return restoreMethod.execute(ruleToRestore).then(() => {
      onDismiss();
      onRestoreSucess();
    }).catch((err) => {
      onRestoreError(err);
    });
  }
  async function onManualRestore() {
    if (!ruleToRestore) {
      return;
    }
    await redirectToRestoreForm(ruleToRestore);
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal,
    {
      isOpen,
      title,
      confirmText,
      modalClass: styles.modal,
      confirmButtonVariant: !error ? "destructive" : "primary",
      body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.deleted-rules.restore-modal.body", children: "Are you sure you want to restore this deleted alert rule definition?" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: ruleToRestore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RulePreview, { rule: ruleToRestore }) }),
        error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { severity: "warning", title: errorTitle, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.deleted-rules.restore-deleted-manually", children: "Your alert rule could not be restored. This may be due to changes to other entities such as contact points, data sources etc. Please manually restore the deleted rule by editing the rule and saving it." }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { style: { marginBottom: 0 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_14__.stringifyErrorLike)(error) }) })
        ] })
      ] }),
      onConfirm: !error ? onRestoreConfirm : onManualRestore,
      onDismiss
    }
  );
};
function RulePreview({ rule }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.content, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor,
    {
      width: "100%",
      height: 600,
      language: "json",
      value: JSON.stringify(rule, null, 4),
      monacoOptions: {
        minimap: {
          enabled: false
        },
        scrollBeyondLastLine: false,
        lineNumbers: "on",
        readOnly: true
      }
    }
  ) });
}
const getStyles = () => ({
  content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    flex: "1 1 100%"
  }),
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "700px"
  })
});
function useRestoreDeletedRule() {
  const [addRuleToRuleGroup] = (0,_hooks_ruleGroup_useUpsertRuleFromRuleGroup__WEBPACK_IMPORTED_MODULE_12__.useAddRuleToRuleGroup)();
  return (0,app_features_alerting_unified_hooks_useAsync__WEBPACK_IMPORTED_MODULE_11__.useAsync)(async (deletedRule) => {
    const ruleGroupIdentifier = {
      dataSourceName: _utils_datasource__WEBPACK_IMPORTED_MODULE_13__.GRAFANA_RULES_SOURCE_NAME,
      namespaceName: deletedRule.grafana_alert.namespace_uid,
      groupName: deletedRule.grafana_alert.rule_group
    };
    return addRuleToRuleGroup.execute(ruleGroupIdentifier, deletedRule);
  });
}
const redirectToRestoreForm = async (ruleToRecover) => {
  let formValues;
  const namespaceName = await app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_9__.backendSrv.getFolderByUid(ruleToRecover.grafana_alert.namespace_uid).then((folder) => folder.title);
  try {
    formValues = (0,_utils_rule_form__WEBPACK_IMPORTED_MODULE_15__.grafanaRuleDtoToFormValues)(ruleToRecover, namespaceName);
  } catch (err) {
    const message = `Error getting rule values from the deleted rule: ${(0,app_core_utils_errors__WEBPACK_IMPORTED_MODULE_10__.getMessageFromError)(err)}`;
    throw new Error(message);
  }
  const urlPath = _utils_rules__WEBPACK_IMPORTED_MODULE_16__.rulerRuleType.grafana.recordingRule(ruleToRecover) ? "/alerting/new/grafana-recording" : "/alerting/new";
  const ruleFormUrl = (0,_utils_url__WEBPACK_IMPORTED_MODULE_17__.createRelativeUrl)(urlPath, {
    isManualRestore: "true",
    defaults: JSON.stringify(formValues),
    returnTo: window.location.pathname + window.location.search
  });
  _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push(ruleFormUrl);
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/deleted-rules/DeletedRules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeletedRules: () => (/* binding */ DeletedRules)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");
/* harmony import */ var _rule_viewer_tabs_version_history_UpdatedBy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-viewer/tabs/version-history/UpdatedBy.tsx");
/* harmony import */ var _ConfirmDeletePermanantlyModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/deleted-rules/ConfirmDeletePermanantlyModal.tsx");
/* harmony import */ var _ConfirmRestoreDeletedRuleModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/deleted-rules/ConfirmRestoreDeletedRuleModal.tsx");











const DELETED_RULES_PAGE_SIZE = 30;
function DeletedRules({ deletedRules }) {
  const [confirmRestore, setConfirmRestore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [restoreRule, setRestoreRule] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [guidToDelete, setGuidToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const confirmDeletePermanently = guidToDelete !== void 0;
  const unknown = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.deleted-rules.unknown", "Unknown");
  if (deletedRules.length === 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.EmptyState,
      {
        message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.deleted-rules.empty-state-title", "No recently deleted rules found"),
        variant: "not-found"
      }
    );
  }
  const showConfirmation = (id) => {
    const ruleTorestore = deletedRules.find((rule) => getRowId(rule.grafana_alert) === id);
    if (!ruleTorestore) {
      return;
    }
    setConfirmRestore(true);
    setRestoreRule(ruleTorestore);
  };
  const hideConfirmationForRestore = () => {
    setConfirmRestore(false);
  };
  const hideConfirmationForDelete = () => {
    setGuidToDelete(void 0);
  };
  const showDeleteConfirmation = (id) => {
    const ruleTorestore = deletedRules.find((rule) => getRowId(rule.grafana_alert) === id);
    if (!ruleTorestore) {
      return;
    }
    setGuidToDelete(ruleTorestore.grafana_alert.guid);
  };
  const shouldAllowRemovePermanently = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_9__.shouldAllowPermanentlyDeletingRules)();
  const columns = [
    {
      id: "createdBy",
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.deleted-rules.table.updatedBy", "Deleted By"),
      disableGrow: true,
      cell: ({ row }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_rule_viewer_tabs_version_history_UpdatedBy__WEBPACK_IMPORTED_MODULE_10__.UpdatedByUser, { user: row.original.grafana_alert.updated_by });
      }
    },
    {
      id: "title",
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.deleted-rules.table.title", "Title"),
      disableGrow: true,
      cell: ({ row }) => {
        return row.original.grafana_alert.title;
      }
    },
    {
      id: "folder",
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.deleted-rules.table.folder", "Folder"),
      disableGrow: true,
      cell: ({ row }) => {
        return row.original.grafana_alert.namespace_uid;
      }
    },
    {
      id: "group",
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.deleted-rules.table.group", "Group"),
      disableGrow: true,
      cell: ({ row }) => {
        return row.original.grafana_alert.rule_group;
      }
    },
    {
      id: "created",
      header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.deleted-rules.table.updated", "Deletion Date"),
      disableGrow: true,
      cell: ({ row }) => {
        const value = row.original.grafana_alert.updated;
        if (!value) {
          return unknown;
        }
        return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(value) + " (" + (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormatTimeAgo)(value) + ")";
      }
    },
    {
      id: "actions",
      disableGrow: true,
      cell: ({ row }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "row", alignItems: "center", justifyContent: "flex-end", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
            {
              variant: "secondary",
              size: "sm",
              icon: "history",
              onClick: () => {
                showConfirmation(getRowId(row.original.grafana_alert));
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.deleted-rules.restore", children: "Restore" })
            }
          ),
          shouldAllowRemovePermanently && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
            {
              variant: "destructive",
              size: "sm",
              icon: "trash-alt",
              onClick: () => {
                showDeleteConfirmation(getRowId(row.original.grafana_alert));
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "alerting.deleted-rules.permanently-delete", children: "Permanently delete" })
            }
          )
        ] });
      }
    }
  ];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InteractiveTable,
      {
        pageSize: DELETED_RULES_PAGE_SIZE,
        columns,
        data: deletedRules,
        getRowId: (row) => {
          return getRowId(row.grafana_alert);
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ConfirmRestoreDeletedRuleModal__WEBPACK_IMPORTED_MODULE_12__.ConfirmRestoreDeletedRuleModal,
      {
        ruleToRestore: restoreRule,
        isOpen: confirmRestore,
        onDismiss: hideConfirmationForRestore,
        onRestoreSucess: _Analytics__WEBPACK_IMPORTED_MODULE_8__.trackDeletedRuleRestoreSuccess,
        onRestoreError: _Analytics__WEBPACK_IMPORTED_MODULE_8__.trackDeletedRuleRestoreFail
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ConfirmDeletePermanantlyModal__WEBPACK_IMPORTED_MODULE_11__.ConfirmDeletedPermanentlyModal,
      {
        guid: guidToDelete,
        isOpen: confirmDeletePermanently,
        onDismiss: hideConfirmationForDelete
      }
    )
  ] });
}
function getRowId(row) {
  return row.guid || row.uid;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rules/deleted-rules/DeletedRulesPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _DeletedRules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/alerting/unified/components/rules/deleted-rules/DeletedRules.tsx");










function DeletedrulesPage() {
  const {
    currentData = [],
    isLoading,
    error
  } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_3__.alertRuleApi.endpoints.getDeletedRules.useQuery({
    rulerConfig: _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULER_CONFIG,
    filter: {}
    // todo: add filters, and limit?????
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_7__.AlertingPageWrapper, { navId: "alerts/recently-deleted", isLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("alerting.deleted-rules.errorloading", "Failed to load alert deleted rules"), children: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_5__.stringifyErrorLike)(error) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DeletedRules__WEBPACK_IMPORTED_MODULE_8__.DeletedRules, { deletedRules: currentData })
  ] }) });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_6__.withPageErrorBoundary)(DeletedrulesPage));


/***/ })

}]);
//# sourceMappingURL=RecentlyDeleted.cd69eaf489f51467de32.js.map