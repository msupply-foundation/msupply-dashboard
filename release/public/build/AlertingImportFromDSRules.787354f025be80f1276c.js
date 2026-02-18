"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["AlertingImportFromDSRules"],{

/***/ "./public/app/features/alerting/unified/api/convertToGMAApi.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToGMAApi: () => (/* binding */ convertToGMAApi)
/* harmony export */ });
/* harmony import */ var _alertingApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/features/alerting/unified/api/alertingApi.ts");


const convertToGMAApi = _alertingApi__WEBPACK_IMPORTED_MODULE_0__.alertingApi.injectEndpoints({
  endpoints: (build) => ({
    convertToGMA: build.mutation({
      query: ({ payload, targetFolderUID, pauseRecordingRules, pauseAlerts, dataSourceUID, targetDatasourceUID }) => ({
        url: `/api/convert/prometheus/config/v1/rules`,
        method: "POST",
        body: payload,
        headers: {
          "X-Grafana-Alerting-Datasource-UID": dataSourceUID,
          "X-Grafana-Alerting-Recording-Rules-Paused": pauseRecordingRules,
          "X-Grafana-Alerting-Alert-Rules-Paused": pauseAlerts,
          "X-Disable-Provenance": true,
          ...targetFolderUID ? { "X-Grafana-Alerting-Folder-UID": targetFolderUID } : {},
          ...targetDatasourceUID ? { "X-Grafana-Alerting-Target-Datasource-UID": targetDatasourceUID } : {}
        }
      })
    })
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/create-folder/CreateNewFolder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateNewFolder: () => (/* binding */ CreateNewFolder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/api/clients/folder/v1beta1/hooks.ts");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/types/accessControl.ts");











const CreateNewFolder = ({ onCreate }) => {
  const [isCreatingFolder, setIsCreatingFolder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const handleCreate = (folder) => {
    onCreate(folder);
    setIsCreatingFolder(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        onClick: () => setIsCreatingFolder(true),
        type: "button",
        icon: "plus",
        fill: "outline",
        variant: "secondary",
        disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_14__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_15__.AccessControlAction.FoldersCreate),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.new-folder", children: "New folder" })
      }
    ),
    isCreatingFolder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FolderCreationModal, { onCreate: handleCreate, onClose: () => setIsCreatingFolder(false) })
  ] });
};
function FolderCreationModal({
  onClose,
  onCreate
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_13__.useAppNotification)();
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [isCreatingFolder, setIsCreatingFolder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [createFolder] = (0,app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_12__.useCreateFolder)();
  const onSubmit = async () => {
    setIsCreatingFolder(true);
    const { data, error } = await createFolder({ title });
    if (error) {
      notifyApp.error("Failed to create folder");
    } else if (data) {
      onCreate({ title: data.title, uid: data.uid });
      notifyApp.success("Folder created");
    }
    setIsCreatingFolder(false);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      className: styles.modal,
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.create-new-folder.title-new-folder", "New folder"),
      onDismiss: onClose,
      onClickBackdrop: onClose,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
          {
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Label, { htmlFor: "folder", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.folder.name", children: "Folder name" }) }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
              {
                "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.AlertRules.newFolderNameField,
                autoFocus: true,
                id: "folderName",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.create-new-folder.placeholder-enter-a-name", "Enter a name"),
                value: title,
                onChange: (e) => setTitle(e.currentTarget.value)
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "secondary", type: "button", onClick: onClose, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.folder.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
            {
              onClick: onSubmit,
              disabled: !title || isCreatingFolder,
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.AlertRules.newFolderNameCreateButton,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.create-new-folder.folder.create", children: "Create" })
            }
          )
        ] })
      ] })
    }
  );
}
const getStyles = (theme) => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: `${theme.breakpoints.values.sm}px`
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/import-to-gma/ConfirmConvertModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmConversionModal: () => (/* binding */ ConfirmConversionModal),
/* harmony export */   SYNTHETICS_RULE_NAMES: () => (/* binding */ SYNTHETICS_RULE_NAMES),
/* harmony export */   filterRulerRulesConfig: () => (/* binding */ filterRulerRulesConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _Analytics__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/alerting/unified/Analytics.ts");
/* harmony import */ var _api_convertToGMAApi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/alerting/unified/api/convertToGMAApi.ts");
/* harmony import */ var _utils_navigation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/alerting/unified/utils/navigation.ts");
/* harmony import */ var _utils_rules__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/rules.ts");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/components/import-to-gma/hooks.ts");
/* harmony import */ var _yamlToRulerConverter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/components/import-to-gma/yamlToRulerConverter.ts");

















const SYNTHETICS_RULE_NAMES = [
  "SyntheticMonitoringCheckFailureAtHighSensitivity",
  "SyntheticMonitoringCheckFailureAtMediumSensitivity",
  "SyntheticMonitoringCheckFailureAtLowSensitivity",
  "instance_job_severity:probe_success:mean5m"
];
const AlertSomeRulesSkipped = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
        "alerting.import-to-gma.confirm-modal.plugin-rules-warning.title",
        "Some rules are excluded from import"
      ),
      severity: "info",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.import-to-gma.confirm-modal.plugin-rules-warning.text", children: "We have detected that some rules are managed by plugins. These rules will not be imported." }) })
    }
  );
};
const WarningForImportingRulesManagedByIntegrations = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
        "alerting.import-to-gma.confirm-modal.not-using-rules-managed-by-integrations-or-plugins.title",
        "Information"
      ),
      severity: "info",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.import-to-gma.confirm-modal.not-using-rules-managed-by-integrations-or-plugins.text", children: "Rules managed by integrations or plugins should not be imported to Grafana-managed rules." }) })
    }
  );
};
const emptyObject = {};
const ConfirmConversionModal = ({ importPayload, isOpen, onDismiss }) => {
  const appNotification = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_16__.useAppNotification)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(getStyles);
  const {
    importSource,
    selectedDatasourceName,
    selectedDatasourceUID,
    yamlFile,
    targetFolder,
    namespace,
    ruleGroup,
    targetDatasourceUID,
    yamlImportTargetDatasourceUID,
    pauseRecordingRules,
    pauseAlertingRules
  } = importPayload;
  const dataSourceToFetch = isOpen && importSource === "datasource" ? selectedDatasourceName ?? "" : void 0;
  const { rulesToBeImported: rulesToBeImportedFromDatasource, isloadingCloudRules } = (0,_hooks__WEBPACK_IMPORTED_MODULE_22__.useGetRulesToBeImported)(
    !isOpen || importSource === "yaml",
    dataSourceToFetch
  );
  const { value: rulesToBeImportedFromYaml = emptyObject } = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => {
    if (!yamlFile || importSource !== "yaml") {
      return emptyObject;
    }
    try {
      const rulerConfigFromYAML = await (0,_yamlToRulerConverter__WEBPACK_IMPORTED_MODULE_23__.parseYamlFileToRulerRulesConfigDTO)(yamlFile, yamlFile.name);
      return rulerConfigFromYAML;
    } catch (error) {
      appNotification.error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.yaml-error", "Failed to parse YAML file: {{error}}", {
          error: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_17__.stringifyErrorLike)(error)
        })
      );
      return emptyObject;
    }
  }, [importSource, yamlFile]);
  const { filteredConfig: rulerRulesToPayload, someRulesAreSkipped } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (importSource === "datasource") {
      return filterRulerRulesConfig(rulesToBeImportedFromDatasource, namespace, ruleGroup);
    }
    return {
      filteredConfig: rulesToBeImportedFromYaml,
      someRulesAreSkipped: false
    };
  }, [namespace, ruleGroup, importSource, rulesToBeImportedFromYaml, rulesToBeImportedFromDatasource]);
  const { rulesThatMightBeOverwritten } = (0,_hooks__WEBPACK_IMPORTED_MODULE_22__.useGetRulesThatMightBeOverwritten)(!isOpen, targetFolder, rulerRulesToPayload);
  const [convert] = _api_convertToGMAApi__WEBPACK_IMPORTED_MODULE_19__.convertToGMAApi.useConvertToGMAMutation();
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_16__.useAppNotification)();
  if (isloadingCloudRules) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Modal,
      {
        isOpen,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.confirm-modal.loading", "Loading..."),
        onDismiss,
        onClickBackdrop: onDismiss,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.import-to-gma.confirm-modal.loading-body",
          "Preparing data to be imported. This can take a while..."
        ) })
      }
    );
  }
  async function onConvertConfirm() {
    if (!yamlImportTargetDatasourceUID && !selectedDatasourceUID) {
      notifyApp.error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.error", "Failed to import alert rules: {{error}}", {
          error: "No data source selected"
        })
      );
      return;
    }
    try {
      await convert({
        dataSourceUID: importSource === "yaml" ? yamlImportTargetDatasourceUID ?? "" : selectedDatasourceUID ?? "",
        targetFolderUID: targetFolder?.uid,
        pauseRecordingRules,
        pauseAlerts: pauseAlertingRules,
        payload: rulerRulesToPayload,
        targetDatasourceUID
      }).unwrap();
      const isRootFolder = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(targetFolder?.uid);
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_18__.trackImportToGMASuccess)({
        importSource,
        isRootFolder,
        namespace,
        ruleGroup,
        pauseRecordingRules,
        pauseAlertingRules
      });
      const ruleListUrl = (0,_utils_navigation__WEBPACK_IMPORTED_MODULE_20__.createListFilterLink)(isRootFolder ? [] : [["namespace", targetFolder?.title ?? ""]], {
        skipSubPath: true
      });
      notifyApp.success(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.success", "Successfully imported alert rules to Grafana-managed rules.")
      );
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.push(ruleListUrl);
    } catch (error) {
      (0,_Analytics__WEBPACK_IMPORTED_MODULE_18__.trackImportToGMAError)({ importSource });
      notifyApp.error(
        (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.error", "Failed to import alert rules: {{error}}", {
          error: (0,app_features_alerting_unified_utils_misc__WEBPACK_IMPORTED_MODULE_17__.stringifyErrorLike)(error)
        })
      );
    }
  }
  const noRulesToImport = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rulerRulesToPayload);
  if (noRulesToImport) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Modal,
      {
        isOpen,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.confirm-modal.no-rules-title", "No rules to import"),
        onDismiss,
        onClickBackdrop: onDismiss,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { direction: "column", gap: 2, children: [
          someRulesAreSkipped && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertSomeRulesSkipped, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { children: importSource === "yaml" ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
            "alerting.import-to-gma.confirm-modal.no-rules-body-yaml",
            "There are no rules to import. Please select a different yaml file."
          ) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
            "alerting.import-to-gma.confirm-modal.no-rules-body",
            "There are no rules to import. Please select a different namespace or rule group."
          ) })
        ] })
      }
    );
  }
  const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.confirm-modal.title", "Confirm import");
  const confirmText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.import-to-gma.confirm-modal.confirm", "Import");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.ConfirmModal,
    {
      isOpen,
      title,
      confirmText,
      confirmButtonVariant: "primary",
      modalClass: styles.modal,
      body: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { direction: "column", gap: 2, children: [
        !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rulesThatMightBeOverwritten) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TargetFolderNotEmptyWarning, { targetFolderRules: rulesThatMightBeOverwritten }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WarningForImportingRulesManagedByIntegrations, {}),
        someRulesAreSkipped && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AlertSomeRulesSkipped, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "h6", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.to-gma.confirm-modal.summary", children: "The following alert rules will be imported:" }) }),
        rulerRulesToPayload && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RulesPreview, { rules: rulerRulesToPayload })
      ] }),
      onConfirm: onConvertConfirm,
      onDismiss
    }
  );
};
function filterRulerRulesConfig(rulerRulesConfig, namespace, groupName) {
  const filteredConfig = {};
  let someRulesAreSkipped = false;
  Object.entries(rulerRulesConfig).forEach(([ns, groups]) => {
    if (namespace && ns !== namespace) {
      return;
    }
    const filteredGroups = groups.filter((group) => {
      if (groupName && group.name !== groupName) {
        return false;
      }
      return true;
    }).map((group) => {
      const filteredRules = group.rules.filter((rule) => {
        const shouldSkip = isRuleManagedByExternalSystem(rule);
        if (shouldSkip) {
          someRulesAreSkipped = true;
          return false;
        }
        return true;
      });
      return {
        ...group,
        rules: filteredRules
      };
    }).filter((group) => group.rules.length > 0);
    if (filteredGroups.length > 0) {
      filteredConfig[ns] = filteredGroups;
    }
  });
  return { filteredConfig, someRulesAreSkipped };
}
function isRuleManagedByExternalSystem(rule) {
  const hasGrafanaOriginLabel = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_21__.isPluginProvidedRule)(rule);
  if (hasGrafanaOriginLabel) {
    return true;
  }
  const isIntegration = rule.labels?.namespace?.startsWith("integrations-");
  if (isIntegration) {
    return true;
  }
  const hasSyntheticsLabels = rule.labels?.namespace === "synthetic_monitoring";
  if (!hasSyntheticsLabels) {
    return false;
  }
  const ruleName = (0,_utils_rules__WEBPACK_IMPORTED_MODULE_21__.getRuleName)(rule);
  return SYNTHETICS_RULE_NAMES.some((name) => name === ruleName);
}
function RulesPreview({ rules }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.content, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.CodeEditor,
    {
      width: "100%",
      height: 500,
      language: "json",
      value: JSON.stringify(rules, null, 4),
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
    width: "800px"
  })
});
function TargetFolderNotEmptyWarning({ targetFolderRules }) {
  const [showTargetRules, toggleShowTargetRules] = (0,react_use__WEBPACK_IMPORTED_MODULE_5__["default"])(false);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("alerting.to-gma.confirm-modal.title-warning", "Warning"), severity: "warning", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { variant: "body", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "alerting.to-gma.confirm-modal.body", children: "The target folder is not empty, some rules may be overwritten or removed. Are you sure you want to import these alert rules to Grafana-managed rules?" }) }) }),
    targetFolderRules && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Collapse,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
          "alerting.import-to-gma.confirm-modal.target-folder-rules",
          "Target folder rules that might be overwritten"
        ),
        isOpen: showTargetRules,
        onToggle: toggleShowTargetRules,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RulesPreview, { rules: targetFolderRules })
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/import-to-gma/ImportToGMARules.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   supportedImportTypes: () => (/* binding */ supportedImportTypes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useToggle.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/Collapse.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonList/RadioButtonList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/FileUpload/FileUpload.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var app_core_components_NestedFolderPicker_NestedFolderPicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/components/NestedFolderPicker/NestedFolderPicker.tsx");
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/alerting/unified/utils/misc.ts");
/* harmony import */ var _withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/alerting/unified/withPageErrorBoundary.tsx");
/* harmony import */ var _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx");
/* harmony import */ var _create_folder_CreateNewFolder__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/features/alerting/unified/components/create-folder/CreateNewFolder.tsx");
/* harmony import */ var _rule_editor_CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx");
/* harmony import */ var _rule_editor_NeedHelpInfo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx");
/* harmony import */ var _ConfirmConvertModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/alerting/unified/components/import-to-gma/ConfirmConvertModal.tsx");
/* harmony import */ var _NamespaceAndGroupFilter__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/alerting/unified/components/import-to-gma/NamespaceAndGroupFilter.tsx");
/* harmony import */ var _yamlToRulerConverter__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/alerting/unified/components/import-to-gma/yamlToRulerConverter.ts");




















const supportedImportTypes = [_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.DataSourceType.Prometheus, _utils_datasource__WEBPACK_IMPORTED_MODULE_21__.DataSourceType.Loki];
const ImportToGMARules = () => {
  const formAPI = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: {
      importSource: "datasource",
      yamlFile: null,
      yamlImportTargetDatasourceUID: void 0,
      selectedDatasourceUID: void 0,
      selectedDatasourceName: void 0,
      pauseAlertingRules: true,
      pauseRecordingRules: true,
      targetFolder: void 0,
      targetDatasourceUID: void 0
    }
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitting }
  } = formAPI;
  const [optionsShowing, toggleOptions] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(true);
  const [selectedDatasourceName, importSource] = watch(["selectedDatasourceName", "importSource"]);
  const [formImportPayload, setFormImportPayload] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const isImportYamlEnabled = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.featureToggles.alertingImportYAMLUI;
  const onSubmit = async (formData) => {
    setFormImportPayload(formData);
  };
  const importSourceOptions = [
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.source.datasource", "Existing data source-managed rules"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.source.datasource-description", "Import rules from existing data sources"),
      value: "datasource"
    }
  ];
  if (isImportYamlEnabled) {
    importSourceOptions.push({
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.source.yaml", "Prometheus YAML file"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.source.yaml-description", "Import rules from a Prometheus YAML file."),
      value: "yaml"
    });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _AlertingPageWrapper__WEBPACK_IMPORTED_MODULE_24__.AlertingPageWrapper,
    {
      navId: "alert-list",
      pageNav: {
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.pageTitle", "Import alert rules")
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 2, direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, { ...formAPI, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "column", gap: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.import-source", "Import source"),
              invalid: !!errors.importSource,
              error: errors.importSource?.message,
              htmlFor: "import-source",
              noMargin: true,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
                {
                  render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.RadioButtonList,
                    {
                      ...field,
                      onChange: (value) => setValue("importSource", value),
                      options: importSourceOptions
                    }
                  ),
                  control,
                  name: "importSource"
                }
              )
            }
          ),
          importSource === "datasource" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DataSourceField, {}),
          isImportYamlEnabled && importSource === "yaml" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(YamlFileUpload, {}),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(YamlTargetDataSourceField, {})
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Collapse,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.additional-settings", "Additional settings"),
              isOpen: optionsShowing,
              onToggle: toggleOptions,
              children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { marginLeft: 1, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "h5", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.import-location-and-filters", "Import location and filters") }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "column", gap: 2, children: [
                    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TargetFolderField, {}),
                    importSource === "datasource" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NamespaceAndGroupFilter__WEBPACK_IMPORTED_MODULE_29__.NamespaceAndGroupFilter, { rulesSourceName: selectedDatasourceName || void 0 })
                  ] })
                ] }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Divider, {}),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { marginLeft: 1, marginBottom: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "h5", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.alert-rules", "Alert rules") }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField,
                    {
                      transparent: true,
                      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.pause.label", "Pause imported alerting rules"),
                      labelWidth: 30,
                      htmlFor: "pause-alerting-rules",
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineSwitch,
                        {
                          transparent: true,
                          id: "pause-alerting-rules",
                          ...register("pauseAlertingRules"),
                          showLabel: false
                        }
                      )
                    }
                  )
                ] }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Divider, {}),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { marginBottom: 1, marginLeft: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "h5", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.recording-rules", "Recording rules") }) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineField,
                    {
                      transparent: true,
                      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.pause-recording.label", "Pause imported recording rules"),
                      labelWidth: 30,
                      htmlFor: "pause-recording-rules",
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineSwitch, { transparent: true, id: "pause-recording-rules", ...register("pauseRecordingRules") })
                    }
                  ) }),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { marginLeft: 1, width: 50, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TargetDataSourceForRecordingRulesField, {}) })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Box, { marginTop: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 1, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { type: "submit", variant: "primary", disabled: isSubmitting, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", gap: 2, alignItems: "center", children: [
            isSubmitting && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Spinner, { inline: true }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "alerting.import-to-gma.action-button", children: "Import" })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LinkButton, { variant: "secondary", href: "/alerting/list", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "common.cancel", children: "Cancel" }) })
        ] }) }),
        formImportPayload && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _ConfirmConvertModal__WEBPACK_IMPORTED_MODULE_28__.ConfirmConversionModal,
          {
            isOpen: !!formImportPayload,
            onDismiss: () => setFormImportPayload(null),
            importPayload: formImportPayload
          }
        )
      ] }) }) })
    }
  );
};
function YamlFileUpload() {
  const {
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.yaml.label", "Prometheus YAML file"),
      invalid: !!errors.yamlFile,
      error: errors.yamlFile?.message,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.yaml.description", "Select a Prometheus-compatible YAML file to import"),
      noMargin: true,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          name: "yamlFile",
          render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.FileUpload,
            {
              ...field,
              onFileUpload: (event) => {
                const yamlFile = event.currentTarget.files?.item(0);
                onChange(yamlFile);
                event.currentTarget.value = "";
              },
              size: "sm",
              showFileName: true,
              accept: ".yaml,.yml,.json"
            }
          ),
          rules: {
            required: {
              value: true,
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.yaml.required-message", "Please select a file")
            },
            validate: async (value) => {
              if (!value) {
                return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.yaml.required-message", "Please select a file");
              }
              try {
                await (0,_yamlToRulerConverter__WEBPACK_IMPORTED_MODULE_30__.parseYamlFileToRulerRulesConfigDTO)(value, value.name);
                return true;
              } catch (error) {
                return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.yaml-error", "Failed to parse YAML file: {{error}}", {
                  error: (0,_utils_misc__WEBPACK_IMPORTED_MODULE_22__.stringifyErrorLike)(error)
                });
              }
            }
          }
        }
      )
    }
  );
}
function YamlTargetDataSourceField() {
  const {
    formState: { errors },
    setValue,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.yaml.target-datasource", "Target data source"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.import-to-gma.yaml.target-datasource-description",
        "Select the data source that will be queried by the imported rules. Make sure metrics used in the imported rules are available in this data source."
      ),
      invalid: !!errors.yamlImportTargetDatasourceUID,
      error: errors.yamlImportTargetDatasourceUID?.message,
      htmlFor: "yaml-target-data-source",
      noMargin: true,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          name: "yamlImportTargetDatasourceUID",
          render: ({ field: { onChange, ref, value, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_20__.DataSourcePicker,
            {
              ...field,
              current: value,
              noDefault: true,
              inputId: "yaml-target-data-source",
              alerting: true,
              filter: (ds) => (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.isSupportedExternalPrometheusFlavoredRulesSourceType)(ds.type),
              onChange: (ds) => {
                setValue("yamlImportTargetDatasourceUID", ds.uid);
                const recordingRulesTargetDs = getValues("targetDatasourceUID");
                if (!recordingRulesTargetDs && (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.isValidRecordingRulesTarget)(ds)) {
                  setValue("targetDatasourceUID", ds.uid);
                }
              }
            }
          ),
          rules: {
            required: {
              value: true,
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.yaml.target-datasource-required", "Please select a target data source")
            }
          }
        }
      )
    }
  );
}
function TargetDataSourceForRecordingRulesField() {
  const {
    control,
    formState: { errors },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
    {
      required: true,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.recording-rules.label-target-data-source", "Target data source"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "alerting.recording-rules.description-target-data-source",
        "The Prometheus data source to store recording rules in"
      ),
      htmlFor: "recording-rules-target-data-source",
      error: errors.targetDatasourceUID?.message,
      invalid: !!errors.targetDatasourceUID?.message,
      noMargin: true,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_20__.DataSourcePicker,
            {
              ...field,
              current: field.value,
              inputId: "recording-rules-target-data-source",
              noDefault: true,
              filter: _utils_datasource__WEBPACK_IMPORTED_MODULE_21__.isValidRecordingRulesTarget,
              onChange: (ds) => {
                setValue("targetDatasourceUID", ds.uid);
              }
            }
          ),
          name: "targetDatasourceUID",
          control,
          rules: {
            required: {
              value: true,
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.recording-rules.target-data-source-required", "Please select a target data source")
            }
          }
        }
      )
    }
  );
}
function TargetFolderField() {
  const {
    control,
    formState: { errors },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.target-folder.label", "Target folder"),
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.target-folder.description", "The folder to import the rules to"),
      error: errors.targetFolder?.message,
      htmlFor: "folder-picker",
      noMargin: true,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
          {
            name: "targetFolder",
            render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { width: 42, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              app_core_components_NestedFolderPicker_NestedFolderPicker__WEBPACK_IMPORTED_MODULE_19__.NestedFolderPicker,
              {
                permission: "view",
                showRootFolder: false,
                invalid: !!errors.targetFolder?.message,
                ...field,
                value: field.value?.uid,
                onChange: (uid, title) => {
                  if (uid && title) {
                    setValue("targetFolder", { title, uid });
                  } else {
                    setValue("targetFolder", void 0);
                  }
                }
              }
            ) }),
            control
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _create_folder_CreateNewFolder__WEBPACK_IMPORTED_MODULE_25__.CreateNewFolder,
          {
            onCreate: (folder) => {
              setValue("targetFolder", folder);
            }
          }
        )
      ] })
    }
  );
}
function DataSourceField() {
  const {
    control,
    formState: { errors },
    setValue,
    getValues
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
    {
      label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { variant: "bodySmall", color: "secondary", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.datasource.label", "Data source") }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _rule_editor_NeedHelpInfo__WEBPACK_IMPORTED_MODULE_27__.NeedHelpInfo,
          {
            externalLink: "https://grafana.com/docs/grafana/latest/alerting/alerting-rules/alerting-migration/",
            linkText: `Read importing to Grafana alerting`,
            contentText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "alerting.import-to-gma.datasource.help-info.content",
              "The dropdown only displays Mimir or Loki data sources that have the ruler API available."
            ),
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.datasource.help-info.title", "Data source")
          }
        )
      ] }),
      invalid: !!errors.selectedDatasourceName,
      error: errors.selectedDatasourceName?.message,
      htmlFor: "datasource-picker",
      noMargin: true,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
        {
          name: "selectedDatasourceName",
          render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _rule_editor_CloudRulesSourcePicker__WEBPACK_IMPORTED_MODULE_26__.CloudRulesSourcePicker,
            {
              ...field,
              width: 50,
              inputId: "datasource-picker",
              onChange: (ds) => {
                setValue("selectedDatasourceUID", ds.uid);
                setValue("selectedDatasourceName", ds.name);
                const recordingRulesTargetDs = getValues("targetDatasourceUID");
                if (!recordingRulesTargetDs) {
                  const targetDataSourceUID = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_21__.isValidRecordingRulesTarget)(ds) ? ds.uid : void 0;
                  setValue("targetDatasourceUID", targetDataSourceUID);
                }
              }
            }
          ),
          control,
          rules: {
            required: {
              value: true,
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("alerting.import-to-gma.datasource.required-message", "Please select a data source")
            }
          }
        }
      )
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_withPageErrorBoundary__WEBPACK_IMPORTED_MODULE_23__.withPageErrorBoundary)(ImportToGMARules));


/***/ }),

/***/ "./public/app/features/alerting/unified/components/import-to-gma/NamespaceAndGroupFilter.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NamespaceAndGroupFilter: () => (/* binding */ NamespaceAndGroupFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _rule_editor_useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/useAlertRuleSuggestions.tsx");







const NamespaceAndGroupFilter = ({ rulesSourceName }) => {
  const {
    control,
    watch,
    formState: { errors },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const namespace = watch("namespace");
  const { namespaceGroups, isLoading } = (0,_rule_editor_useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_7__.useGetNameSpacesByDatasourceName)(rulesSourceName);
  const namespaceOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => Array.from(namespaceGroups.keys()).map((namespace2) => ({
      label: namespace2,
      value: namespace2
    })),
    [namespaceGroups]
  );
  const groupOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => namespace && namespaceGroups.get(namespace)?.map((group) => ({ label: group, value: group })) || [],
    [namespace, namespaceGroups]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setValue("namespace", "");
    setValue("ruleGroup", "");
  }, [rulesSourceName, setValue]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "row", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        htmlFor: "namespace-picker",
        "data-testid": "namespace-picker",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.import-to-gma.namespace.label", "Namespace"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.import-to-gma.namespace.description", "Type to search for an existing namespace"),
        error: errors.namespace?.message,
        invalid: !!errors.namespace?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
          {
            render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Combobox,
              {
                ...field,
                onChange: (value) => {
                  setValue("ruleGroup", "");
                  onChange(value?.value);
                },
                id: "namespace-picker",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.namespace-and-group-filter.select-namespace", "Select namespace"),
                options: namespaceOptions,
                width: 42,
                loading: isLoading,
                disabled: isLoading || !rulesSourceName,
                isClearable: true
              }
            ),
            name: "namespace",
            control
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        htmlFor: "group-picker",
        "data-testid": "group-picker",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.import-to-gma.group.label", "Group"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.import-to-gma.group.description", "Type to search for an existing group"),
        error: errors.ruleGroup?.message,
        invalid: !!errors.ruleGroup?.message,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
          {
            render: ({ field: { ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Combobox,
              {
                ...field,
                options: groupOptions,
                width: 42,
                onChange: (value) => {
                  setValue("ruleGroup", value?.value ?? "");
                },
                id: "group-picker",
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("alerting.namespace-and-group-filter.select-group", "Select group"),
                loading: isLoading,
                disabled: isLoading || !namespace || !rulesSourceName,
                isClearable: true
              }
            ),
            name: "ruleGroup",
            control
          }
        )
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/import-to-gma/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetRulesThatMightBeOverwritten: () => (/* binding */ useGetRulesThatMightBeOverwritten),
/* harmony export */   useGetRulesToBeImported: () => (/* binding */ useGetRulesToBeImported)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/search/service/searcher.ts");
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _rule_editor_useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/alerting/unified/components/rule-editor/useAlertRuleSuggestions.tsx");







function useGetNestedFolders(folderUID, skip = false) {
  const [nestedFolders, setNestedFolders] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (async () => {
      const searcher = (0,app_features_search_service_searcher__WEBPACK_IMPORTED_MODULE_2__.getGrafanaSearcher)();
      const nestedFoldersIn = skip ? [] : (await searcher.search({
        kind: ["folder"],
        location: folderUID
      })).view.toArray();
      setNestedFolders(nestedFoldersIn);
    })();
  }, [folderUID, skip]);
  return nestedFolders;
}
function useGetRulesThatMightBeOverwritten(skip, targetFolder, rulesToBeImported) {
  const nestedFoldersInTargetFolder = useGetNestedFolders(targetFolder?.uid || "", skip);
  const skipFiltering = skip || nestedFoldersInTargetFolder.length === 0;
  const rulesThatMightBeOverwritten = useFilterRulesThatMightBeOverwritten(
    nestedFoldersInTargetFolder,
    rulesToBeImported,
    skipFiltering
  );
  return { rulesThatMightBeOverwritten };
}
function useGetRulesToBeImported(skip, selectedDatasourceName) {
  const dataSourceToFetch = !skip ? selectedDatasourceName : void 0;
  const { rulerRules: rulesToBeImported, isLoading: isloadingCloudRules } = (0,_rule_editor_useAlertRuleSuggestions__WEBPACK_IMPORTED_MODULE_5__.useGetRulerRules)(dataSourceToFetch);
  return { rulesToBeImported, isloadingCloudRules };
}
function useFilterRulesThatMightBeOverwritten(targetNestedFolders, rulesToBeImported, skip = true) {
  const [fetchRulesByFolderUID] = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_3__.alertRuleApi.endpoints.rulerNamespace.useLazyQuery();
  const [rulesThatMightBeOverwritten, setRulesThatMightBeOverwritten] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (skip || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(targetNestedFolders) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(rulesToBeImported)) {
      setRulesThatMightBeOverwritten({});
      return;
    }
    const targetNestedFoldersFiltered = targetNestedFolders.filter((folder) => {
      return Object.keys(rulesToBeImported).includes(folder.name);
    });
    const fetchRules = async () => {
      const results = {};
      await Promise.all(
        targetNestedFoldersFiltered.map(async (folder) => {
          const { data: rules } = await fetchRulesByFolderUID({
            namespace: folder.uid,
            rulerConfig: _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_4__.GRAFANA_RULER_CONFIG
          });
          if (rules) {
            const folderWithParentTitle = Object.keys(rules)[0];
            if (folderWithParentTitle) {
              results[folderWithParentTitle] = rules[folderWithParentTitle] || [];
            }
          }
        })
      );
      setRulesThatMightBeOverwritten(results);
    };
    fetchRules();
  }, [targetNestedFolders, rulesToBeImported, skip, fetchRulesByFolderUID]);
  return rulesThatMightBeOverwritten;
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/import-to-gma/yamlToRulerConverter.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseYamlFileToRulerRulesConfigDTO: () => (/* binding */ parseYamlFileToRulerRulesConfigDTO),
/* harmony export */   parseYamlToRulerRulesConfigDTO: () => (/* binding */ parseYamlToRulerRulesConfigDTO)
/* harmony export */ });
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/js-yaml/dist/js-yaml.mjs");


function isValidObject(value) {
  return typeof value === "object" && Boolean(value);
}
function isRule(yamlRule) {
  if (!isValidObject(yamlRule)) {
    return false;
  }
  const alert = "alert" in yamlRule && typeof yamlRule.alert === "string" ? yamlRule.alert : void 0;
  const record = "record" in yamlRule && typeof yamlRule.record === "string" ? yamlRule.record : void 0;
  const expr = "expr" in yamlRule && typeof yamlRule.expr === "string" ? yamlRule.expr : void 0;
  if (!expr) {
    return false;
  }
  if (!alert && !record) {
    return false;
  }
  if (alert && record) {
    return false;
  }
  if ("for" in yamlRule && typeof yamlRule.for !== "string") {
    return false;
  }
  if ("labels" in yamlRule && !isValidObject(yamlRule.labels)) {
    return false;
  }
  if ("annotations" in yamlRule && !isValidObject(yamlRule.annotations)) {
    return false;
  }
  return true;
}
function isGroup(obj) {
  if (!isValidObject(obj)) {
    return false;
  }
  const name = "name" in obj && typeof obj.name === "string" ? obj.name : void 0;
  const rules = "rules" in obj && Array.isArray(obj.rules) ? obj.rules : void 0;
  if (!name || !rules) {
    return false;
  }
  return rules.every(isRule);
}
function validatePrometheusYamlFile(obj) {
  if (!isValidObject(obj)) {
    return { isValid: false, error: "Invalid YAML format: missing or invalid groups array" };
  }
  if (!("groups" in obj) || "groups" in obj && !Array.isArray(obj.groups)) {
    return { isValid: false, error: "Invalid YAML format: missing or invalid groups array" };
  }
  if (!Array.isArray(obj.groups)) {
    return { isValid: false, error: "Invalid YAML format: missing or invalid groups array" };
  }
  if ("namespace" in obj && typeof obj.namespace !== "string") {
    return { isValid: false, error: "Invalid YAML format: namespace must be a string" };
  }
  const validatedGroups = obj.groups.map((group, index) => {
    if (isGroup(group)) {
      return group;
    }
    throw new Error(`Invalid YAML format: missing or invalid groups array at index ${index}`);
  });
  const prometheusFile = {
    groups: validatedGroups
  };
  if ("namespace" in obj && typeof obj.namespace === "string") {
    prometheusFile.namespace = obj.namespace;
  }
  return {
    isValid: true,
    data: prometheusFile
  };
}
function parseYamlToRulerRulesConfigDTO(yamlAsString, defaultNamespace) {
  const obj = (0,js_yaml__WEBPACK_IMPORTED_MODULE_0__.load)(yamlAsString);
  const validation = validatePrometheusYamlFile(obj);
  if (!validation.isValid) {
    throw new Error(validation.error);
  }
  const prometheusFile = validation.data;
  const namespace = prometheusFile.namespace ?? defaultNamespace;
  return {
    [namespace]: prometheusFile.groups
  };
}
async function parseYamlFileToRulerRulesConfigDTO(file, defaultNamespace) {
  const yamlContent = await file.text();
  return parseYamlToRulerRulesConfigDTO(yamlContent, defaultNamespace);
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/CloudRulesSourcePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudRulesSourcePicker: () => (/* binding */ CloudRulesSourcePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/datasources/components/picker/DataSourcePicker.tsx");
/* harmony import */ var _hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts");





function CloudRulesSourcePicker({ value, disabled, ...props }) {
  const { rulesSourcesWithRuler: dataSourcesWithRuler, isLoading } = (0,_hooks_useRuleSourcesWithRuler__WEBPACK_IMPORTED_MODULE_3__.useRulesSourcesWithRuler)();
  const dataSourceFilter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (ds) => {
      return dataSourcesWithRuler.some(({ uid }) => uid === ds.uid);
    },
    [dataSourcesWithRuler]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_features_datasources_components_picker_DataSourcePicker__WEBPACK_IMPORTED_MODULE_2__.DataSourcePicker,
    {
      disabled: isLoading || disabled,
      noDefault: true,
      alerting: true,
      filter: dataSourceFilter,
      current: value,
      ...props
    }
  );
}


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/NeedHelpInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NeedHelpInfo: () => (/* binding */ NeedHelpInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Toggletip/Toggletip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function NeedHelpInfo({ contentText, externalLink, linkText, title = "Need help?" }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Toggletip,
    {
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.mutedText, children: contentText }),
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 0.5, direction: "row", alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "question-circle" }),
        title
      ] }),
      footer: externalLink ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: externalLink, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", gap: 0.5, alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { color: "link", children: [
        linkText,
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { size: "sm", name: "external-link-alt" })
      ] }) }) }) : void 0,
      closeButton: true,
      placement: "bottom-start",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.helpInfo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", alignItems: "center", gap: 0.5, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "question-circle", size: "sm" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { variant: "bodySmall", color: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "alerting.need-help-info.need-help", children: "Need help?" }) })
      ] }) })
    }
  );
}
const getStyles = (theme) => ({
  mutedText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    fontSize: theme.typography.size.sm
  }),
  helpInfo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    cursor: "pointer",
    textDecoration: "underline"
  })
});


/***/ }),

/***/ "./public/app/features/alerting/unified/components/rule-editor/useAlertRuleSuggestions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rulerRulesToNamespaceGroups: () => (/* binding */ rulerRulesToNamespaceGroups),
/* harmony export */   useGetLabelsFromDataSourceName: () => (/* binding */ useGetLabelsFromDataSourceName),
/* harmony export */   useGetNameSpacesByDatasourceName: () => (/* binding */ useGetNameSpacesByDatasourceName),
/* harmony export */   useGetRulerRules: () => (/* binding */ useGetRulerRules)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/api/alertRuleApi.ts");
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _featureToggles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/alerting/unified/featureToggles.ts");






const { usePrometheusRuleNamespacesQuery, useLazyRulerRulesQuery, useRulerRulesQuery } = _api_alertRuleApi__WEBPACK_IMPORTED_MODULE_2__.alertRuleApi;
const { useDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_3__.featureDiscoveryApi;
const emptyRulerConfig = {};
const prometheusRulesPrimary = (0,_featureToggles__WEBPACK_IMPORTED_MODULE_4__.shouldUsePrometheusRulesPrimary)();
function useGetLabelsFromDataSourceName(rulesSourceName) {
  const { data: features, isLoading: isFeaturesLoading } = useDiscoverDsFeaturesQuery({ rulesSourceName });
  const [fetchRulerRules, { data: rulerRules = emptyRulerConfig, isLoading: isRulerRulesLoading }] = useLazyRulerRulesQuery();
  const { data: promNamespaces = [], isLoading: isPrometheusRulesLoading } = usePrometheusRuleNamespacesQuery(
    { ruleSourceName: rulesSourceName },
    { skip: !prometheusRulesPrimary }
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (features?.rulerConfig && !prometheusRulesPrimary) {
      fetchRulerRules({ rulerConfig: features.rulerConfig }, true);
    }
  }, [features?.rulerConfig, fetchRulerRules]);
  const labels = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (isPrometheusRulesLoading || isRulerRulesLoading) {
      return /* @__PURE__ */ new Map();
    }
    if (prometheusRulesPrimary) {
      return promNamespacesToLabels(promNamespaces);
    }
    return rulerRulesToLabels(rulerRules);
  }, [promNamespaces, rulerRules, isPrometheusRulesLoading, isRulerRulesLoading]);
  return { labels, isLoading: isPrometheusRulesLoading || isRulerRulesLoading || isFeaturesLoading };
}
function useGetNameSpacesByDatasourceName(rulesSourceName) {
  const { data: features, isLoading: isFeaturesLoading } = useDiscoverDsFeaturesQuery(
    rulesSourceName ? { rulesSourceName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken,
    { skip: !rulesSourceName }
  );
  const [fetchRulerRules, { data: rulerRules = emptyRulerConfig, isLoading: isRulerRulesLoading }] = useLazyRulerRulesQuery();
  const { data: promNamespaces = [], isLoading: isPrometheusRulesLoading } = usePrometheusRuleNamespacesQuery(
    rulesSourceName && prometheusRulesPrimary ? { ruleSourceName: rulesSourceName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (features?.rulerConfig && !prometheusRulesPrimary) {
      fetchRulerRules({ rulerConfig: features.rulerConfig });
    }
  }, [features?.rulerConfig, fetchRulerRules]);
  const namespaceGroups = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (isPrometheusRulesLoading || isRulerRulesLoading) {
      return /* @__PURE__ */ new Map();
    }
    if (prometheusRulesPrimary) {
      return promNamespacesToNamespaceGroups(promNamespaces);
    }
    return rulerRulesToNamespaceGroups(rulerRules);
  }, [promNamespaces, rulerRules, isPrometheusRulesLoading, isRulerRulesLoading]);
  return {
    namespaceGroups,
    isLoading: isPrometheusRulesLoading || isRulerRulesLoading || isFeaturesLoading,
    promNamespaces
  };
}
function useGetRulerRules(rulesSourceName) {
  const { data: features, isLoading: isFeaturesLoading } = useDiscoverDsFeaturesQuery(
    rulesSourceName ? { rulesSourceName } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  const { data: rulerRules = emptyRulerConfig, isLoading: isRulerRulesLoading } = useRulerRulesQuery(
    features?.rulerConfig ? { rulerConfig: features.rulerConfig } : _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  return {
    isLoading: isRulerRulesLoading || isFeaturesLoading,
    rulerRules
  };
}
function promNamespacesToNamespaceGroups(promNamespaces) {
  const groups = /* @__PURE__ */ new Map();
  promNamespaces.forEach((namespace) => {
    groups.set(
      namespace.name,
      namespace.groups.map((group) => group.name)
    );
  });
  return groups;
}
function rulerRulesToNamespaceGroups(rulerConfig) {
  const result = /* @__PURE__ */ new Map();
  Object.entries(rulerConfig).forEach(([namespace, groups]) => {
    result.set(
      namespace,
      groups.map((group) => group.name)
    );
  });
  return result;
}
function promNamespacesToLabels(promNamespace) {
  const rules = promNamespace.flatMap((namespace) => namespace.groups).flatMap((group) => group.rules);
  return rules.reduce((result, rule) => {
    if (!rule.labels) {
      return result;
    }
    Object.entries(rule.labels).forEach(([labelKey, labelValue]) => {
      if (!labelKey || !labelValue) {
        return;
      }
      const labelEntry = result.get(labelKey);
      if (labelEntry) {
        labelEntry.add(labelValue);
      } else {
        result.set(labelKey, /* @__PURE__ */ new Set([labelValue]));
      }
    });
    return result;
  }, /* @__PURE__ */ new Map());
}
function rulerRulesToLabels(rulerConfig) {
  const result = /* @__PURE__ */ new Map();
  const rules = Object.entries(rulerConfig).flatMap(([_, groups]) => groups).flatMap((group) => group.rules);
  return rules.reduce((result2, rule) => {
    if (!rule.labels) {
      return result2;
    }
    Object.entries(rule.labels).forEach(([labelKey, labelValue]) => {
      if (!labelKey || !labelValue) {
        return;
      }
      const labelEntry = result2.get(labelKey);
      if (labelEntry) {
        labelEntry.add(labelValue);
      } else {
        result2.set(labelKey, /* @__PURE__ */ new Set([labelValue]));
      }
    });
    return result2;
  }, result);
}


/***/ }),

/***/ "./public/app/features/alerting/unified/hooks/useRuleSourcesWithRuler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRulesSourcesWithRuler: () => (/* binding */ useRulesSourcesWithRuler)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/unified/api/featureDiscoveryApi.ts");
/* harmony import */ var _utils_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/alerting/unified/utils/datasource.ts");




const { useLazyDiscoverDsFeaturesQuery } = _api_featureDiscoveryApi__WEBPACK_IMPORTED_MODULE_1__.featureDiscoveryApi;
function useRulesSourcesWithRuler() {
  const [rulesSourcesWithRuler, setRulesSourcesWithRuler] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [discoverDsFeatures, { isLoading }] = useLazyDiscoverDsFeaturesQuery();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const dataSources = (0,_utils_datasource__WEBPACK_IMPORTED_MODULE_2__.getRulesDataSources)();
    dataSources.forEach(async (ds) => {
      const { data: dsFeatures } = await discoverDsFeatures({ uid: ds.uid }, true);
      if (dsFeatures?.rulerConfig) {
        setRulesSourcesWithRuler((prev) => [...prev, ds]);
      }
    });
  }, [discoverDsFeatures]);
  return { rulesSourcesWithRuler, isLoading };
}


/***/ })

}]);
//# sourceMappingURL=AlertingImportFromDSRules.787354f025be80f1276c.js.map