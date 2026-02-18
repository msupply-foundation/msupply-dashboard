"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["MigrateToCloud"],{

/***/ "./public/app/features/migrate-to-cloud/MigrateToCloud.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MigrateToCloud)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _cloud_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/Page.tsx");
/* harmony import */ var _onprem_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/Page.tsx");






function MigrateToCloud() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { navId: "migrate-to-cloud", children: _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.cloudMigrationIsTarget ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_cloud_Page__WEBPACK_IMPORTED_MODULE_3__.Page, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_onprem_Page__WEBPACK_IMPORTED_MODULE_4__.Page, {}) });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/api/errors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maybeAPIError: () => (/* binding */ maybeAPIError)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");


function maybeAPIError(err) {
  if (!(0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(err) || typeof err.data !== "object" || !err.data) {
    return null;
  }
  const data = err?.data;
  const message = "message" in data && typeof data.message === "string" ? data.message : null;
  const messageId = "messageId" in data && typeof data.messageId === "string" ? data.messageId : null;
  const statusCode = "statusCode" in data && typeof data.statusCode === "number" ? data.statusCode : null;
  if (!message || !messageId || !statusCode) {
    return null;
  }
  return { message, messageId, statusCode };
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/api/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloudMigrationAPI: () => (/* binding */ cloudMigrationAPI),
/* harmony export */   generatedAPI: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.generatedAPI),
/* harmony export */   useCancelSnapshotMutation: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useCancelSnapshotMutation),
/* harmony export */   useCreateCloudMigrationTokenMutation: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useCreateCloudMigrationTokenMutation),
/* harmony export */   useCreateSessionMutation: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useCreateSessionMutation),
/* harmony export */   useCreateSnapshotMutation: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useCreateSnapshotMutation),
/* harmony export */   useDeleteCloudMigrationTokenMutation: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useDeleteCloudMigrationTokenMutation),
/* harmony export */   useDeleteSessionMutation: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useDeleteSessionMutation),
/* harmony export */   useGetCloudMigrationTokenQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetCloudMigrationTokenQuery),
/* harmony export */   useGetDashboardByUidQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetDashboardByUidQuery),
/* harmony export */   useGetLibraryElementByUidQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetLibraryElementByUidQuery),
/* harmony export */   useGetLocalPluginListQuery: () => (/* binding */ useGetLocalPluginListQuery),
/* harmony export */   useGetResourceDependenciesQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetResourceDependenciesQuery),
/* harmony export */   useGetSessionListQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetSessionListQuery),
/* harmony export */   useGetSessionQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetSessionQuery),
/* harmony export */   useGetShapshotListQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetShapshotListQuery),
/* harmony export */   useGetSnapshotQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useGetSnapshotQuery),
/* harmony export */   useLazyGetCloudMigrationTokenQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetCloudMigrationTokenQuery),
/* harmony export */   useLazyGetDashboardByUidQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetDashboardByUidQuery),
/* harmony export */   useLazyGetLibraryElementByUidQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetLibraryElementByUidQuery),
/* harmony export */   useLazyGetResourceDependenciesQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetResourceDependenciesQuery),
/* harmony export */   useLazyGetSessionListQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetSessionListQuery),
/* harmony export */   useLazyGetSessionQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetSessionQuery),
/* harmony export */   useLazyGetShapshotListQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetShapshotListQuery),
/* harmony export */   useLazyGetSnapshotQuery: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useLazyGetSnapshotQuery),
/* harmony export */   useUploadSnapshotMutation: () => (/* reexport safe */ _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.useUploadSnapshotMutation)
/* harmony export */ });
/* harmony import */ var _grafana_api_clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-api-clients/src/utils/utils.ts");
/* harmony import */ var _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-api-clients/src/clients/rtkq/migrate-to-cloud/index.ts");
/* harmony import */ var app_features_plugins_admin_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/plugins/admin/api.ts");




const cloudMigrationAPI = _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_1__.generatedAPI.injectEndpoints({
  endpoints: (build) => ({
    // Manually written because the Swagger specifications for the plugins endpoint do not exist
    getLocalPluginList: build.query({
      queryFn: async () => {
        try {
          const list = await (0,app_features_plugins_admin_api__WEBPACK_IMPORTED_MODULE_2__.getLocalPlugins)();
          return { data: list };
        } catch (error) {
          return (0,_grafana_api_clients__WEBPACK_IMPORTED_MODULE_0__.handleRequestError)(error);
        }
      }
    })
  })
});
const { useGetLocalPluginListQuery } = cloudMigrationAPI;



/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/EmptyState/InfoPane.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoPane: () => (/* binding */ InfoPane)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _shared_InfoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/migrate-to-cloud/shared/InfoItem.tsx");




const InfoPane = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_InfoItem__WEBPACK_IMPORTED_MODULE_2__.InfoItem, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.migrate-to-this-stack.title", "Let us help you migrate to this stack"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.migrate-to-this-stack.body", children: "You can securely migrate some resources from your self-managed Grafana installation to this cloud stack. To get started, you'll need to generate a migration token. Your self-managed instance will use the token to authenticate with this cloud stack." }) });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/EmptyState/MigrationStepsPane.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MigrationStepsPane: () => (/* binding */ MigrationStepsPane)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _shared_InfoItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/migrate-to-cloud/shared/InfoItem.tsx");






const MigrationStepsPane = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { alignItems: "flex-start", display: "flex", direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_InfoItem__WEBPACK_IMPORTED_MODULE_7__.InfoItem,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("migrate-to-cloud.get-started.title", "Performing a migration"),
        linkTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("migrate-to-cloud.get-started.link-title", "Learn more about Private Data Source Connect"),
        linkHref: "https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.get-started.body", children: "The migration process must be started from your self-managed Grafana instance." }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", { className: styles.list, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.get-started.step-1", children: "Log in to your self-managed instance and navigate to Administration > General > Migrate to Grafana Cloud." }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.get-started.step-2", children: 'Select "Migrate this instance to Cloud".' }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.get-started.step-3", children: `You'll be prompted for a migration token. Generate one from this screen. Enter your token and click "Connect to this stack".` }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.get-started.step-4", children: 'After connecting to the cloud stack, click "Build snapshot" to create a snapshot of your self-managed instance.' }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.get-started.step-5", children: 'After a snapshot is created, click "Upload snapshot" to copy the resources to your cloud stack.' }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.get-started.step-6", children: "If some of your data sources will not work over the public internet, you\u2019ll need to install Private Data Source Connect in your self-managed environment." }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink, { href: "/connections/private-data-source-connections", external: true, children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("migrate-to-cloud.get-started.configure-pdc-link", "Configure PDC for this stack") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink, { href: "https://grafana.com/docs/grafana-cloud/account-management/migration-guide", external: true, children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("migrate-to-cloud.migrate-to-this-stack.link-title", "View the full migration guide") })
  ] });
};
const getStyles = (theme) => ({
  list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    padding: "revert"
  })
});


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/CreateTokenModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTokenModal: () => (/* binding */ CreateTokenModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ClipboardButton/ClipboardButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _TokenErrorAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/TokenErrorAlert.tsx");






const CreateTokenModal = ({ isOpen, hideModal, migrationToken }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal,
    {
      isOpen,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("migrate-to-cloud.migration-token.modal-title", "Migration token created"),
      onDismiss: hideModal,
      children: [
        migrationToken ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TokenSuccessContent, { migrationToken }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TokenErrorAlert__WEBPACK_IMPORTED_MODULE_9__.TokenErrorAlert, {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "secondary", onClick: hideModal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.migration-token.modal-close", children: "Close" }) }),
          migrationToken && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ClipboardButton, { variant: "primary", getText: () => migrationToken, onClipboardCopy: hideModal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.migration-token.modal-copy-and-close", children: "Copy to clipboard and close" }) })
        ] })
      ]
    }
  );
};
function TokenSuccessContent({ migrationToken }) {
  const inputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
    {
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "migrate-to-cloud.migration-token.modal-field-description",
        "Copy the token now, as you will not be able to see it again. Losing this token requires creating a new one."
      ),
      htmlFor: inputId,
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("migrate-to-cloud.migration-token.modal-field-label", "Token"),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { id: inputId, value: migrationToken, readOnly: true }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ClipboardButton, { icon: "clipboard-alt", getText: () => migrationToken, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.migration-token.modal-copy-button", children: "Copy to clipboard" }) })
      ] })
    }
  );
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/DeleteTokenConfirmationModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteTokenConfirmationModal: () => (/* binding */ DeleteTokenConfirmationModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");




function DeleteTokenConfirmationModal(props) {
  const { isOpen, hasError, onConfirm, onDismiss } = props;
  const body = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.delete-migration-token-confirm.body", children: "If you've already used this token with a self-managed installation, that installation will no longer be able to upload content." }) }),
    hasError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Alert,
      {
        severity: "error",
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.delete-migration-token-confirm.error-title", "Error deleting token")
      }
    )
  ] });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal,
    {
      isOpen,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.delete-migration-token-confirm.title", "Delete migration token"),
      body,
      confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.delete-migration-token-confirm.confirm-button", "Delete token"),
      onConfirm,
      onDismiss
    }
  );
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/MigrationTokenPane.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MigrationTokenPane: () => (/* binding */ MigrationTokenPane)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-api-clients/src/clients/rtkq/migrate-to-cloud/endpoints.gen.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/migrate-to-cloud/api/errors.ts");
/* harmony import */ var _TokenErrorAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/TokenErrorAlert.tsx");
/* harmony import */ var _CreateTokenModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/CreateTokenModal.tsx");
/* harmony import */ var _DeleteTokenConfirmationModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/DeleteTokenConfirmationModal.tsx");
/* harmony import */ var _TokenStatus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/TokenStatus.tsx");












const MigrationTokenPane = () => {
  const [showCreateModal, setShowCreateModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const getTokenQuery = (0,_grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_2__.useGetCloudMigrationTokenQuery)();
  const [createTokenMutation, createTokenResponse] = (0,_grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_2__.useCreateCloudMigrationTokenMutation)();
  const [deleteTokenMutation, deleteTokenResponse] = (0,_grafana_api_clients_rtkq_legacy_migrate_to_cloud__WEBPACK_IMPORTED_MODULE_2__.useDeleteCloudMigrationTokenMutation)();
  const getTokenQueryError = (0,_api_errors__WEBPACK_IMPORTED_MODULE_8__.maybeAPIError)(getTokenQuery.error);
  const hasToken = Boolean(getTokenQuery.data?.id) && getTokenQueryError?.statusCode !== 404;
  const isLoading = getTokenQuery.isFetching || createTokenResponse.isLoading;
  const handleGenerateToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_e2c_generate_token_clicked");
    const resp = await createTokenMutation();
    if (!("error" in resp)) {
      setShowCreateModal(true);
    }
  }, [createTokenMutation]);
  const handleDeleteToken = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    if (!getTokenQuery.data?.id) {
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_e2c_delete_token_clicked");
    const resp = await deleteTokenMutation({ uid: getTokenQuery.data.id });
    if (!("error" in resp)) {
      setShowDeleteModal(false);
    }
  }, [deleteTokenMutation, getTokenQuery.data]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { display: "flex", alignItems: "flex-start", direction: "column", gap: 2, children: [
      createTokenResponse?.isError ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TokenErrorAlert__WEBPACK_IMPORTED_MODULE_9__.TokenErrorAlert, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "migrate-to-cloud.migration-token.status", children: [
        "Current status:",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TokenStatus__WEBPACK_IMPORTED_MODULE_12__.TokenStatus, { hasToken, isFetching: isLoading, errorMessageId: getTokenQueryError?.messageId })
      ] }) }),
      hasToken ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { onClick: () => setShowDeleteModal(true), variant: "destructive", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.migration-token.delete-button", "Delete token") }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { disabled: isLoading, onClick: handleGenerateToken, children: createTokenResponse.isLoading ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.migration-token.generate-button-loading", "Generating a migration token...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.migration-token.generate-button", "Generate a migration token") })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _CreateTokenModal__WEBPACK_IMPORTED_MODULE_10__.CreateTokenModal,
      {
        isOpen: showCreateModal,
        hideModal: () => {
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_e2c_generated_token_modal_dismissed");
          setShowCreateModal(false);
        },
        migrationToken: createTokenResponse.data?.token
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _DeleteTokenConfirmationModal__WEBPACK_IMPORTED_MODULE_11__.DeleteTokenConfirmationModal,
      {
        isOpen: showDeleteModal,
        onConfirm: handleDeleteToken,
        onDismiss: () => setShowDeleteModal(false),
        hasError: Boolean(deleteTokenResponse.error)
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/TokenStatus.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenStatus: () => (/* binding */ TokenStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");





const TokenStatus = ({ hasToken, errorMessageId, isFetching }) => {
  if (isFetching) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__["default"], { width: 100 });
  } else if (hasToken) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "success", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.token-status.active", children: "Token created and active" }) });
  } else if (errorMessageId === "cloudmigrations.tokenNotFound") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.token-status.no-active", children: "No active token" });
  } else if (errorMessageId) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "error", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.token-status.unknown-error", children: "Error retrieving token" }) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "warning", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.token-status.unknown", children: "Unknown" }) });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/Page.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _EmptyState_InfoPane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/EmptyState/InfoPane.tsx");
/* harmony import */ var _EmptyState_MigrationStepsPane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/EmptyState/MigrationStepsPane.tsx");
/* harmony import */ var _MigrationTokenPane_MigrationTokenPane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/migrate-to-cloud/cloud/MigrationTokenPane/MigrationTokenPane.tsx");






const Page = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Box, { borderRadius: "lg", backgroundColor: "secondary", display: "flex", alignItems: "center", direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Box, { maxWidth: 90, paddingY: 6, paddingX: 2, gap: 6, direction: "column", display: "flex", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 2, direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EmptyState_InfoPane__WEBPACK_IMPORTED_MODULE_3__.InfoPane, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MigrationTokenPane_MigrationTokenPane__WEBPACK_IMPORTED_MODULE_5__.MigrationTokenPane, {})
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EmptyState_MigrationStepsPane__WEBPACK_IMPORTED_MODULE_4__.MigrationStepsPane, {})
  ] }) });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/cloud/TokenErrorAlert.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenErrorAlert: () => (/* binding */ TokenErrorAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");




function TokenErrorAlert() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { severity: "error", title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.migration-token.error-title", "Something went wrong"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.migration-token.error-body", children: "Unable to generate a migration token. Please try again later." }) });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/CTAInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CTAInfo: () => (/* binding */ CTAInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");



function CTAInfo(props) {
  const { title, accessory, children } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Box, { maxWidth: 44, display: "flex", direction: "row", gap: 1, alignItems: "flex-start", children: [
    accessory && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Box, { children: accessory }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 2, direction: "column", alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Text, { element: "h3", variant: "h5", children: title }),
      children
    ] })
  ] });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/ConfigureSnapshot.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigureSnapshot: () => (/* binding */ ConfigureSnapshot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _resourceDependency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/resourceDependency.ts");
/* harmony import */ var _resourceInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/resourceInfo.ts");







const alertsSubResources = [
  "ALERT_RULE",
  "NOTIFICATION_POLICY",
  "NOTIFICATION_TEMPLATE",
  "CONTACT_POINT",
  "MUTE_TIMING"
];
const displayOrder = [
  "DASHBOARD",
  "LIBRARY_ELEMENT",
  "DATASOURCE",
  "PLUGIN",
  "FOLDER",
  "ALERT_RULE_GROUP",
  ...alertsSubResources
];
const hasAllResourceTypes = true;
function resourceTypeOrder(resourceTypes) {
  return hasAllResourceTypes && displayOrder.filter((type) => resourceTypes.includes(type));
}
function ConfigureSnapshot(props) {
  const { disabled, isLoading, onClick, resourceDependencies } = props;
  const [selectedTypes, setSelectedTypes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(/* @__PURE__ */ new Set());
  const [includeAll, setIncludeAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const { dependencyMap, dependentMap } = (0,_resourceDependency__WEBPACK_IMPORTED_MODULE_11__.buildDependencyMaps)(resourceDependencies);
  const resourceTypes = resourceTypeOrder(Array.from(dependencyMap.keys()));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSelectedTypes(new Set(resourceTypes));
  }, []);
  const handleIncludeAllChange = (e) => {
    const checked = e.target.checked;
    setIncludeAll(checked);
    if (checked) {
      setSelectedTypes(new Set(resourceTypes));
    } else {
      setSelectedTypes(/* @__PURE__ */ new Set());
    }
  };
  const handleTypeChange = (id) => (e) => {
    const updatedList = e.target.checked ? (0,_resourceDependency__WEBPACK_IMPORTED_MODULE_11__.handleSelection)(dependencyMap, selectedTypes, id) : (0,_resourceDependency__WEBPACK_IMPORTED_MODULE_11__.handleDeselection)(dependentMap, selectedTypes, id);
    setSelectedTypes(updatedList);
    setIncludeAll(updatedList.size === resourceTypes.length);
  };
  const handleBuildSnapshot = () => {
    onClick(Array.from(selectedTypes));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 3, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "h4", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", gap: 1, alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "cog", size: "lg" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.configure-snapshot.title", children: "Configure snapshot" })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { color: "secondary", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.configure-snapshot.description", children: "Select which resources you want to include in the snapshot to migrate." }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { weight: "bold", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.configure-snapshot.description-sub-line", children: "Some resources may depend on others and will be automatically selected or deselected." }) })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1, alignItems: "flex-start", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { alignItems: "flex-start", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Checkbox,
          {
            indeterminate: selectedTypes.size > 0 && !includeAll,
            value: includeAll,
            onChange: handleIncludeAllChange,
            "data-testid": "migrate-to-cloud-configure-snapshot-checkbox-resource-include-all",
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "h5", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.configure-snapshot.resource-include-all", children: "Include all" }) })
          }
        ) }, "include-all"),
        resourceTypes.map((type) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 1, alignItems: "center", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Space, { h: alertsSubResources.includes(type) ? 2 : 0.25 }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Checkbox,
            {
              value: selectedTypes.has(type),
              onChange: handleTypeChange(type),
              "data-testid": `migrate-to-cloud-configure-snapshot-checkbox-resource-${type.toLowerCase()}`,
              label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 1, alignItems: "center", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: (0,_resourceInfo__WEBPACK_IMPORTED_MODULE_12__.iconNameForResource)(type), size: "xl" }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "h5", children: (0,_resourceInfo__WEBPACK_IMPORTED_MODULE_12__.pluralizeResourceName)(type) ?? type })
              ] })
            }
          )
        ] }, type))
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 1, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
          {
            disabled: disabled || selectedTypes.size === 0,
            onClick: handleBuildSnapshot,
            icon: isLoading ? "spinner" : void 0,
            "data-testid": "migrate-to-cloud-configure-snapshot-build-snapshot-button",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.summary.start-migration", children: "Build snapshot" })
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
          {
            content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.building-snapshot.description-eta", children: "Creating a snapshot typically takes less than two minutes." }),
            placement: "right",
            interactive: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle", size: "lg" })
          }
        )
      ] })
    ] })
  ] });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/EmptyState/CallToAction/CallToAction.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CallToAction: () => (/* binding */ CallToAction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/migrate-to-cloud/api/index.ts");
/* harmony import */ var _ConnectModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/EmptyState/CallToAction/ConnectModal.tsx");







const CallToAction = () => {
  const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [createMigration, createMigrationResponse] = (0,_api__WEBPACK_IMPORTED_MODULE_6__.useCreateSessionMutation)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { display: "flex", gap: 2, direction: "column", alignItems: "center", backgroundColor: "secondary", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "h3", textAlignment: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.cta.header", children: "Let us manage your Grafana stack" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
        {
          "data-testid": "migrate-to-cloud-connect-session-modal-button",
          disabled: createMigrationResponse.isLoading,
          onClick: () => setModalOpen(true),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "migrate-to-cloud.cta.button", children: "Migrate this instance to Cloud" })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ConnectModal__WEBPACK_IMPORTED_MODULE_7__.ConnectModal,
      {
        isOpen: modalOpen,
        isLoading: createMigrationResponse.isLoading,
        error: createMigrationResponse.error,
        onConfirm: createMigration,
        hideModal: () => setModalOpen(false)
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/EmptyState/CallToAction/ConnectModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectModal: () => (/* binding */ ConnectModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_migrate_to_cloud_shared_AlertWithTraceID__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/migrate-to-cloud/shared/AlertWithTraceID.tsx");
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/migrate-to-cloud/api/errors.ts");









function getTMessage(messageId) {
  switch (messageId) {
    case "cloudmigrations.createMigration.tokenInvalid":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.token-invalid",
        "Token is not valid. Generate a new token on your cloud instance and try again."
      );
    case "cloudmigrations.createMigration.tokenRequestError":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.token-request-error",
        "An error occurred while validating the token. Please check the Grafana instance logs."
      );
    case "cloudmigrations.createMigration.tokenValidationFailure":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.token-validation-failure",
        "Token is not valid. Please ensure the token matches the migration token on your cloud instance."
      );
    case "cloudmigrations.createMigration.instanceUnreachable":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.instance-unreachable",
        "The cloud instance cannot be reached. Make sure the instance is running and try again."
      );
    case "cloudmigrations.createMigration.instanceRequestError":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.instance-request-error",
        "An error occurred while attempting to verify the cloud instance's connectivity. Please check the network settings or cloud instance status."
      );
    case "cloudmigrations.createMigration.sessionCreationFailure":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.session-creation-failure",
        "There was an error creating the migration. Please try again."
      );
    case "cloudmigrations.createMigration.migrationDisabled":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.migration-disabled",
        "Cloud migrations are disabled on this instance."
      );
    default:
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "migrate-to-cloud.connect-modal.token-errors.token-not-saved",
        "There was an error saving the token. See the Grafana server logs for more details."
      );
  }
}
const ConnectModal = ({ isOpen, isLoading, error, hideModal, onConfirm }) => {
  const tokenId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.useStyles2)(getStyles);
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: {
      token: ""
    }
  });
  const token = watch("token");
  const onConfirmConnect = (formData) => {
    onConfirm({
      cloudMigrationSessionRequestDto: {
        authToken: formData.token
      }
    }).then((resp) => {
      const didError = typeof resp === "object" && resp && "error" in resp;
      if (!didError) {
        hideModal();
      }
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      isOpen,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.title", "Connect to a cloud stack"),
      onDismiss: hideModal,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onConfirmConnect), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.connect-modal.body-get-started", children: "To get started, you'll need a Grafana.com account." }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink, { href: "https://grafana.com/auth/sign-up/create-user?pg=prod-cloud", external: true, children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.body-sign-up", "Sign up for a Grafana.com account") }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.connect-modal.body-cloud-stack", children: "You'll also need a cloud stack. If you just signed up, we'll automatically create your first stack. If you have an account, you'll need to select or create a stack." }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink, { href: "https://grafana.com/auth/sign-in/", external: true, children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.body-view-stacks", "View my cloud stacks") }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.connect-modal.body-token", children: "Your self-managed Grafana installation needs special access to securely migrate content. You'll need to create a migration token on your chosen cloud stack." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.connect-modal.body-token-instructions", children: "Log into your cloud stack and navigate to Administration > General > Migrate to Grafana Cloud. Create a migration token on that screen and paste the token here." }) }),
          error ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_features_migrate_to_cloud_shared_AlertWithTraceID__WEBPACK_IMPORTED_MODULE_13__.AlertWithTraceID,
            {
              error,
              severity: "error",
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.token-error-title", "Error saving token"),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { element: "p", children: getTMessage((0,_api_errors__WEBPACK_IMPORTED_MODULE_14__.maybeAPIError)(error)?.messageId || "") || "There was an error saving the token. See the Grafana server logs for more details." })
            }
          ) : void 0,
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
            {
              className: styles.field,
              invalid: !!errors.token,
              error: errors.token?.message,
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.body-token-field", "Migration token"),
              required: true,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
                {
                  ...register("token", {
                    required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.token-required-error", "Migration token is required")
                  }),
                  id: tokenId,
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.body-token-field-placeholder", "Paste token here"),
                  "data-testid": "migrate-to-cloud-connect-session-modal-token-input"
                }
              )
            }
          )
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "secondary", onClick: hideModal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.connect-modal.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
            {
              type: "submit",
              disabled: isLoading || !token,
              "data-testid": "migrate-to-cloud-connect-session-modal-connect-button",
              children: isLoading ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.connecting", "Connecting to this stack...") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("migrate-to-cloud.connect-modal.connect", "Connect to this stack")
            }
          )
        ] })
      ] })
    }
  );
};
const getStyles = (theme) => ({
  field: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    alignSelf: "stretch"
  })
});


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/EmptyState/EmptyState.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyState: () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Grid/Grid.tsx");
/* harmony import */ var _CallToAction_CallToAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/EmptyState/CallToAction/CallToAction.tsx");
/* harmony import */ var _InfoPaneLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/EmptyState/InfoPaneLeft.tsx");
/* harmony import */ var _InfoPaneRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/EmptyState/InfoPaneRight.tsx");






const EmptyState = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Box, { borderRadius: "lg", backgroundColor: "secondary", display: "flex", alignItems: "center", direction: "column", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Box, { maxWidth: 180, paddingY: 6, paddingX: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 5, direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CallToAction_CallToAction__WEBPACK_IMPORTED_MODULE_4__.CallToAction, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Grid,
      {
        alignItems: "flex-start",
        gap: 4,
        columns: {
          xs: 1,
          lg: 2
        },
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfoPaneLeft__WEBPACK_IMPORTED_MODULE_5__.InfoPaneLeft, {}),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfoPaneRight__WEBPACK_IMPORTED_MODULE_6__.InfoPaneRight, {})
        ]
      }
    )
  ] }) }) });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/EmptyState/InfoPaneLeft.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoPaneLeft: () => (/* binding */ InfoPaneLeft)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/migrate-to-cloud/shared/InfoItem.tsx");





const InfoPaneLeft = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 4, direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__.InfoItem,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.what-is-cloud.title", "What is Grafana Cloud?"),
        linkTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.what-is-cloud.link-title", "Learn about cloud features"),
        linkHref: "https://grafana.com/products/cloud",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.what-is-cloud.body", children: "Grafana cloud is a fully managed cloud-hosted observability platform ideal for cloud native environments. It's everything you love about Grafana without the overhead of maintaining, upgrading, and supporting an installation." })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__.InfoItem,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.why-host.title", "Why host with Grafana?"),
        linkTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.why-host.link-title", "More questions? Talk to an expert"),
        linkHref: "https://grafana.com/contact",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.why-host.body", children: "In addition to the convenience of managed hosting, Grafana Cloud includes many cloud-exclusive features like SLOs, incident management, machine learning, and powerful observability integrations." })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__.InfoItem,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.is-it-secure.title", "Is it secure?"),
        linkTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.is-it-secure.link-title", "Grafana Labs Trust Center"),
        linkHref: "https://trust.grafana.com",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.is-it-secure.body", children: "Grafana Labs is committed to maintaining the highest standards of data privacy and security. By implementing industry-standard security technologies and procedures, we help protect our customers' data from unauthorized access, use, or disclosure." })
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/EmptyState/InfoPaneRight.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoPaneRight: () => (/* binding */ InfoPaneRight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/migrate-to-cloud/shared/InfoItem.tsx");





const InfoPaneRight = () => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 4, direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__.InfoItem,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.pdc.title", "What if not all my data sources are on the public internet?"),
        linkTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.pdc.link-title", "Learn about PDC"),
        linkHref: "https://grafana.com/docs/grafana-cloud/connect-externally-hosted/private-data-source-connect",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.pdc.body", children: "Exposing your data sources to the internet can raise security concerns. Private data source connect (PDC) allows Grafana Cloud to access your existing data sources over a secure network tunnel." })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__.InfoItem,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.pricing.title", "How much does it cost?"),
        linkTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.pricing.link-title", "Grafana Cloud pricing"),
        linkHref: "https://grafana.com/pricing",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.pricing.body", children: "Grafana Cloud has a generous free plan and a 14 day unlimited usage trial. After your trial expires, you'll be billed based on usage over the free plan limits." })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _shared_InfoItem__WEBPACK_IMPORTED_MODULE_3__.InfoItem,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.can-i-move.title", "Where can I learn more about migrating to Grafana Cloud?"),
        linkTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.can-i-move.link-title", "Learn about migrating to Grafana Cloud"),
        linkHref: "https://grafana.com/docs/grafana-cloud/account-management/migration-guide",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.can-i-move.body", children: "You can use the migration assistant to migrate a large proportion of your Grafana resources." })
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/MigrationInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MigrationInfo: () => (/* binding */ MigrationInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");



function MigrationInfo({ title, children }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Box, { minWidth: { xs: 0, xxl: 16 }, display: "flex", direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Text, { variant: "bodySmall", color: "secondary", children: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Text, { variant: "h4", children })
  ] });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/MigrationSummary.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MigrationSummary: () => (/* binding */ MigrationSummary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var app_core_internationalization_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/internationalization/dates.ts");
/* harmony import */ var _MigrationInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/MigrationInfo.tsx");






const DATE_FORMAT = {
  dateStyle: "medium",
  timeStyle: "short"
};
function MigrationSummary(props) {
  const {
    session,
    snapshot,
    isBusy,
    disconnectIsLoading,
    onDisconnect,
    showUploadSnapshot,
    uploadSnapshotIsLoading,
    onUploadSnapshot,
    showRebuildSnapshot,
    onRebuildSnapshot,
    isHighlightErrors,
    onHighlightErrors,
    showOnlyErrorsSwitch
  } = props;
  const totalCount = snapshot?.stats?.total ?? 0;
  const errorCount = snapshot?.stats?.statuses?.["ERROR"] ?? 0;
  const successCount = snapshot?.stats?.statuses?.["OK"] ?? 0;
  const warningCount = snapshot?.stats?.statuses?.["WARNING"] ?? 0;
  const switchLabel = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.summary.show-errors", "Only view errors");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box,
    {
      borderRadius: "lg",
      borderColor: "weak",
      borderStyle: "solid",
      padding: 2,
      display: "flex",
      gap: 4,
      alignItems: "center",
      justifyContent: "space-between",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 4, wrap: true, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MigrationInfo__WEBPACK_IMPORTED_MODULE_9__.MigrationInfo, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.summary.snapshot-date", "Snapshot timestamp"), children: snapshot?.created ? (0,app_core_internationalization_dates__WEBPACK_IMPORTED_MODULE_8__.formatDate)(snapshot.created, DATE_FORMAT) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.summary.snapshot-not-created", children: "Not yet created" }) }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MigrationInfo__WEBPACK_IMPORTED_MODULE_9__.MigrationInfo, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.summary.total-resource-count", "Total resources"), children: totalCount }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MigrationInfo__WEBPACK_IMPORTED_MODULE_9__.MigrationInfo, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.summary.successful-resource-count", "Successfully migrated"), children: successCount + warningCount }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MigrationInfo__WEBPACK_IMPORTED_MODULE_9__.MigrationInfo, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.summary.errored-resource-count", "Errors"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "row", alignItems: "center", children: [
            errorCount,
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Space, { h: 1, layout: "inline" }),
            showOnlyErrorsSwitch && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Switch, { label: switchLabel, value: isHighlightErrors, onChange: onHighlightErrors }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "bodySmall", color: "secondary", children: switchLabel })
            ] })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_MigrationInfo__WEBPACK_IMPORTED_MODULE_9__.MigrationInfo, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.summary.target-stack-title", "Uploading to"), children: [
            session.slug,
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Space, { h: 1, layout: "inline" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
              {
                disabled: isBusy,
                onClick: onDisconnect,
                variant: "secondary",
                size: "sm",
                icon: disconnectIsLoading ? "spinner" : void 0,
                "data-testid": "migrate-to-cloud-summary-disconnect-button",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.summary.disconnect", children: "Disconnect" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 2, wrap: true, justifyContent: "flex-end", children: [
          showRebuildSnapshot && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
            {
              disabled: isBusy || uploadSnapshotIsLoading,
              onClick: onRebuildSnapshot,
              variant: "secondary",
              "data-testid": "migrate-to-cloud-summary-reconfigure-snapshot-button",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.summary.rebuild-snapshot", children: "Reconfigure snapshot" })
            }
          ),
          showUploadSnapshot && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button,
            {
              disabled: isBusy || uploadSnapshotIsLoading,
              onClick: onUploadSnapshot,
              icon: uploadSnapshotIsLoading ? "spinner" : void 0,
              "data-testid": "migrate-to-cloud-summary-upload-snapshot-button",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.summary.upload-migration", children: "Upload snapshot" })
            }
          )
        ] })
      ]
    }
  );
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/NameCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NameCell: () => (/* binding */ NameCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/utils.ts");
/* harmony import */ var app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/api/clients/folder/v1beta1/hooks.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/migrate-to-cloud/api/index.ts");
/* harmony import */ var _resourceInfo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/resourceInfo.ts");












function NameCell(props) {
  const data = props.row.original;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", gap: 2, alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ResourceIcon, { resource: data }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ResourceInfo, { data }) })
  ] });
}
function ResourceInfo({ data }) {
  switch (data.type) {
    case "DASHBOARD":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DashboardInfo, { data });
    case "DATASOURCE":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DatasourceInfo, { data });
    case "FOLDER":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FolderInfo, { data });
    case "LIBRARY_ELEMENT":
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LibraryElementInfo, { data });
    // Starting from 11.4.x, new resources have both `name` and optionally a `parentName`, so we can use this catch-all component.
    default:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BasicResourceInfo, { data });
  }
}
function DatasourceInfo({ data }) {
  const datasourceUID = data.refId;
  const datasource = useDatasource(datasourceUID);
  if (!datasource) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.resource-table.unknown-datasource-title", children: [
        "Data source ",
        { datasourceUID }
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.resource-table.unknown-datasource-type", children: "Unknown data source" }) })
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: datasource.name }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: datasource.type })
  ] });
}
function getTitleFromDashboardJSON(dashboardData) {
  if (dashboardData && "title" in dashboardData && typeof dashboardData.title === "string") {
    return dashboardData.title;
  }
  return null;
}
function DashboardInfo({ data }) {
  const dashboardUID = data.refId;
  const skipApiCall = !!data.name && !!data.parentName;
  const {
    data: dashboardData,
    isLoading,
    isError
  } = (0,_api__WEBPACK_IMPORTED_MODULE_12__.useGetDashboardByUidQuery)({ uid: dashboardUID }, { skip: skipApiCall });
  const dashboardName = data.name || getTitleFromDashboardJSON(dashboardData?.dashboard) || dashboardUID;
  const dashboardParentName = data.parentName || dashboardData?.meta?.folderTitle || "Dashboards";
  if (isError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { italic: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.resource-table.dashboard-load-error", children: "Unable to load dashboard" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.dashboard-info.dashboard", children: [
        "Dashboard ",
        { dashboardUID }
      ] }) })
    ] });
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InfoSkeleton, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: dashboardName }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: dashboardParentName })
  ] });
}
function FolderInfo({ data }) {
  const folderUID = data.refId;
  const skipApiCall = !!data.name && !!data.parentName;
  const { data: folderData, isLoading, isError } = (0,app_api_clients_folder_v1beta1_hooks__WEBPACK_IMPORTED_MODULE_11__.useGetFolderQueryFacade)(skipApiCall ? void 0 : folderUID);
  const folderName = data.name || folderData?.title;
  const folderParentName = data.parentName || folderData?.parents?.[folderData.parents.length - 1]?.title;
  if (isError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { italic: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.folder-info.unable-to-load-folder", children: "Unable to load folder" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.folder-info.folder", values: { folderUid: data.refId }, children: [
        "Folder ",
        "{{folderUid}}"
      ] }) })
    ] });
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InfoSkeleton, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: folderName }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: folderParentName ?? "Dashboards" })
  ] });
}
function LibraryElementInfo({ data }) {
  const uid = data.refId;
  const skipApiCall = !!data.name && !!data.parentName;
  const {
    data: libraryElementData,
    isError,
    isLoading
  } = (0,_api__WEBPACK_IMPORTED_MODULE_12__.useGetLibraryElementByUidQuery)({ libraryElementUid: uid }, { skip: skipApiCall });
  const name = data.name || libraryElementData?.result?.name || uid;
  const parentName = data.parentName || libraryElementData?.result?.meta?.folderName || "General";
  if (isError) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { italic: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.resource-table.error-library-element-title", children: "Unable to load library element" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "migrate-to-cloud.resource-table.error-library-element-sub", children: [
        "Library Element ",
        { uid }
      ] }) })
    ] });
  }
  if (isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InfoSkeleton, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: name }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: parentName })
  ] });
}
function InfoSkeleton() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 250 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 130 })
  ] });
}
function BasicResourceInfo({ data }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: data.name }),
    data.parentName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: data.parentName })
  ] });
}
function ResourceIcon({ resource }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getIconStyles);
  const datasource = useDatasource(resource.type === "DATASOURCE" ? resource.refId : void 0);
  const pluginLogo = usePluginLogo(resource.type === "PLUGIN" ? resource.plugin : void 0);
  if (resource.type === "DATASOURCE" && datasource?.meta?.info?.logos?.small) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: styles.icon, src: datasource.meta.info.logos.small, alt: "" });
  } else if (resource.type === "PLUGIN" && pluginLogo) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { className: styles.icon, src: pluginLogo, alt: "" });
  } else {
    const iconName = (0,_resourceInfo__WEBPACK_IMPORTED_MODULE_13__.iconNameForResource)(resource.type);
    if (iconName) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { size: "xl", name: iconName });
    }
  }
  return void 0;
}
function getIconStyles() {
  return {
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "block",
      width: (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__.getSvgSize)("xl"),
      height: (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__.getSvgSize)("xl")
    })
  };
}
function useDatasource(datasourceUID) {
  const datasource = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!datasourceUID) {
      return void 0;
    }
    return _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.datasources[datasourceUID] || Object.values(_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.datasources).find((ds) => ds.uid === datasourceUID);
  }, [datasourceUID]);
  return datasource;
}
function usePluginLogo(plugin) {
  const logos = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (!plugin) {
      return void 0;
    }
    return plugin?.info?.logos;
  }, [plugin]);
  return logos?.small;
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/Page.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/migrate-to-cloud/api/index.ts");
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/migrate-to-cloud/api/errors.ts");
/* harmony import */ var _shared_AlertWithTraceID__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/migrate-to-cloud/shared/AlertWithTraceID.tsx");
/* harmony import */ var _ConfigureSnapshot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/ConfigureSnapshot.tsx");
/* harmony import */ var _EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/EmptyState/EmptyState.tsx");
/* harmony import */ var _MigrationSummary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/MigrationSummary.tsx");
/* harmony import */ var _ResourcesTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/ResourcesTable.tsx");
/* harmony import */ var _SnapshotCTAs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/SnapshotCTAs.tsx");
/* harmony import */ var _SupportedTypesDisclosure__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/SupportedTypesDisclosure.tsx");
/* harmony import */ var _useNotifyOnSuccess__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/useNotifyOnSuccess.tsx");

















function useGetLatestSession() {
  const result = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useGetSessionListQuery)();
  const latestMigration = result.data?.sessions?.at(-1);
  return {
    ...result,
    data: latestMigration
  };
}
const SHOULD_POLL_STATUSES = [
  "INITIALIZING",
  "CREATING",
  "UPLOADING",
  "PENDING_PROCESSING",
  "PROCESSING"
];
const PAGE_SIZE = 50;
function useGetLatestSnapshot(sessionUid, page = 1, sortParams, showErrors = false) {
  const [shouldPoll, setShouldPoll] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const listResult = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useGetShapshotListQuery)(
    sessionUid ? { uid: sessionUid, page: 1, limit: 1, sort: "latest" } : _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.skipToken
  );
  const lastItem = listResult.currentData?.snapshots?.at(0);
  const getSnapshotQueryArgs = sessionUid && lastItem?.uid ? {
    uid: sessionUid,
    snapshotUid: lastItem.uid,
    resultLimit: PAGE_SIZE,
    resultPage: page,
    resultSortColumn: sortParams?.column ? sortParams.column : void 0,
    resultSortOrder: sortParams?.order,
    errorsOnly: showErrors
  } : _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.skipToken;
  const snapshotResult = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useGetSnapshotQuery)(getSnapshotQueryArgs, {
    pollingInterval: shouldPoll ? _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.cloudMigrationPollIntervalMs : 0,
    skipPollingIfUnfocused: true
  });
  const isError = listResult.isError || snapshotResult.isError;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const shouldPoll2 = !isError && SHOULD_POLL_STATUSES.includes(snapshotResult.data?.status);
    setShouldPoll(shouldPoll2);
  }, [snapshotResult?.data?.status, isError]);
  return {
    ...snapshotResult,
    // RTK Query will retain old data if a new request has been skipped.
    // This meant that if you loaded a snapshot, disconnected, and then reconnected, we would
    // show the old snapshot.
    // This ensures that if the query has been skipped (because GetSessionList returned nothing)
    // we don't return stale data
    data: getSnapshotQueryArgs === _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.skipToken ? void 0 : snapshotResult.data,
    error: listResult.error || snapshotResult.error,
    // isSuccess and isUninitialised should always be from snapshotResult
    // as only the 'final' values from those are important
    isError,
    isLoading: listResult.isLoading || snapshotResult.isLoading,
    isFetching: listResult.isFetching || snapshotResult.isFetching
  };
}
const Page = () => {
  const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const [sortParams, setSortParams] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    column: "",
    order: void 0
  });
  const [highlightErrors, setHighlightErrors] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { data: resourceDependencies = { resourceDependencies: [] } } = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useGetResourceDependenciesQuery)();
  const [reconfiguring, setReconfiguring] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [lastSnapshotUid, setLastSnapshotUid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(void 0);
  const [performCreateSnapshot, createSnapshotResult] = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useCreateSnapshotMutation)();
  const [performUploadSnapshot, uploadSnapshotResult] = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useUploadSnapshotMutation)();
  const [performCancelSnapshot, cancelSnapshotResult] = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useCancelSnapshotMutation)();
  const [performDisconnect, disconnectResult] = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useDeleteSessionMutation)();
  const { currentData: localPlugins = [] } = (0,_api__WEBPACK_IMPORTED_MODULE_8__.useGetLocalPluginListQuery)();
  const session = useGetLatestSession();
  const snapshot = useGetLatestSnapshot(session.data?.uid, page, sortParams, highlightErrors);
  const numPages = Math.ceil(
    (highlightErrors ? snapshot?.data?.stats?.statuses?.["ERROR"] || 0 : snapshot?.data?.stats?.total || 0) / PAGE_SIZE
  );
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (numPages > 0 && page > numPages) {
      setPage(numPages);
    }
  }, [numPages, page]);
  const [uiState, setUiState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(
    "loading"
  );
  (0,_useNotifyOnSuccess__WEBPACK_IMPORTED_MODULE_17__.useNotifySuccessful)(snapshot.data);
  const sessionUid = session.data?.uid;
  const snapshotUid = snapshot.data?.uid;
  const snapshotStatus = snapshot.data?.status;
  const isBusy = createSnapshotResult.isLoading || uploadSnapshotResult.isLoading || cancelSnapshotResult.isLoading || session.isLoading || snapshot.isLoading || disconnectResult.isLoading;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (reconfiguring && lastSnapshotUid !== snapshot.data?.uid && createSnapshotResult.isSuccess && createSnapshotResult.data?.uid) {
      setLastSnapshotUid(createSnapshotResult.data.uid);
      setReconfiguring(false);
    }
  }, [
    createSnapshotResult.isSuccess,
    createSnapshotResult.data?.uid,
    lastSnapshotUid,
    snapshot.data?.uid,
    setLastSnapshotUid,
    setReconfiguring,
    reconfiguring
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!sessionUid || snapshot.isLoading || snapshot.isFetching) {
      return;
    }
    if (uiState === "loading") {
      if (snapshotStatus === "CREATING") {
        setUiState("building");
        return;
      }
      if (snapshotStatus === "PENDING_UPLOAD") {
        setUiState("built");
        return;
      }
      if (["UPLOADING", "PENDING_PROCESSING", "PROCESSING"].includes(snapshotStatus ?? "")) {
        setUiState("uploading");
        return;
      }
      if (snapshotStatus === "FINISHED") {
        setUiState("uploaded");
        return;
      }
      if (!snapshotStatus || snapshotStatus === "ERROR") {
        setUiState("configure");
        return;
      }
    }
    if (uiState === "configure" && snapshotStatus === "CREATING") {
      setUiState("building");
      return;
    }
    if (!reconfiguring && uiState === "building" && snapshotStatus === "PENDING_UPLOAD") {
      setUiState("built");
      return;
    }
    if (uiState === "built" && (snapshotStatus === "PROCESSING" || snapshotStatus === "UPLOADING")) {
      setUiState("uploading");
      return;
    }
    if (uiState === "uploading" && snapshotStatus === "FINISHED") {
      setUiState("uploaded");
      return;
    }
    if (!reconfiguring && (uiState === "built" || uiState === "uploaded") && snapshotStatus !== "FINISHED" && (snapshot.data?.results?.length === 0 || snapshot.isUninitialized)) {
      setReconfiguring(true);
      setUiState("configure");
      return;
    }
    if (uiState === "building" && (createSnapshotResult.error || snapshot.isError)) {
      setUiState("configure");
      return;
    }
    if (uiState === "uploading" && (uploadSnapshotResult.error || snapshotStatus === "ERROR")) {
      setUiState("uploaded");
      return;
    }
  }, [
    sessionUid,
    snapshotStatus,
    snapshot.isLoading,
    snapshot.isFetching,
    snapshot.isUninitialized,
    snapshot.isError,
    setReconfiguring,
    setUiState,
    uiState,
    reconfiguring,
    snapshot.data?.results?.length,
    createSnapshotResult.error,
    uploadSnapshotResult.error
  ]);
  const error = getError({
    snapshot: snapshot.data,
    getSnapshotError: snapshot.error,
    getSessionError: session.error,
    createSnapshotError: createSnapshotResult.error,
    uploadSnapshotError: uploadSnapshotResult.error,
    cancelSnapshotError: cancelSnapshotResult.error,
    disconnectSnapshotError: disconnectResult.error
  });
  const handleCreateSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (resourceTypes) => {
      if (sessionUid) {
        setUiState("building");
        performCreateSnapshot({
          uid: sessionUid,
          createSnapshotRequestDto: {
            resourceTypes
          }
        });
      }
    },
    [performCreateSnapshot, sessionUid]
  );
  const handleUploadSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (sessionUid && snapshotUid) {
      performUploadSnapshot({ uid: sessionUid, snapshotUid });
    }
  }, [performUploadSnapshot, sessionUid, snapshotUid]);
  const handleRebuildSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (sessionUid && snapshotUid) {
      setReconfiguring(true);
      setUiState("configure");
    }
  }, [setUiState, setReconfiguring, sessionUid, snapshotUid]);
  const handleCancelSnapshot = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    if (sessionUid && snapshotUid) {
      setUiState("configure");
      performCancelSnapshot({ uid: sessionUid, snapshotUid });
    }
  }, [performCancelSnapshot, setUiState, sessionUid, snapshotUid]);
  const handleDisconnect = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async () => {
    if (sessionUid) {
      setUiState("loading");
      performDisconnect({ uid: sessionUid });
    }
  }, [performDisconnect, setUiState, sessionUid]);
  if (session.isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "migrate-to-cloud.summary.page-loading", children: "Loading..." }) });
  } else if (!session.data) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EmptyState_EmptyState__WEBPACK_IMPORTED_MODULE_12__.EmptyState, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _MigrationSummary__WEBPACK_IMPORTED_MODULE_13__.MigrationSummary,
      {
        session: session.data,
        snapshot: snapshot.data,
        isBusy,
        disconnectIsLoading: disconnectResult.isLoading,
        onDisconnect: handleDisconnect,
        showUploadSnapshot: ["built", "uploading"].includes(uiState),
        uploadSnapshotIsLoading: uploadSnapshotResult.isLoading || uiState === "uploading",
        onUploadSnapshot: handleUploadSnapshot,
        showRebuildSnapshot: ["built", "uploading", "uploaded"].includes(uiState),
        onRebuildSnapshot: handleRebuildSnapshot,
        onHighlightErrors: () => setHighlightErrors(!highlightErrors),
        isHighlightErrors: highlightErrors,
        showOnlyErrorsSwitch: ["uploading", "uploaded"].includes(uiState)
      }
    ),
    (["built", "uploaded"].includes(uiState) || !!createSnapshotResult?.error) && error && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_AlertWithTraceID__WEBPACK_IMPORTED_MODULE_10__.AlertWithTraceID, { severity: error.severity, title: error.title, error: error.error, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "p", children: error.body }) }),
    uiState === "configure" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _ConfigureSnapshot__WEBPACK_IMPORTED_MODULE_11__.ConfigureSnapshot,
      {
        disabled: isBusy,
        isLoading: isBusy,
        onClick: handleCreateSnapshot,
        resourceDependencies: resourceDependencies.resourceDependencies || []
      }
    ),
    uiState === "building" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Box, { display: "flex", justifyContent: "center", paddingY: 10, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SnapshotCTAs__WEBPACK_IMPORTED_MODULE_15__.CreatingSnapshotCTA,
      {
        disabled: isBusy,
        isLoading: cancelSnapshotResult.isLoading,
        onClick: handleCancelSnapshot
      }
    ) }),
    ["built", "uploading", "uploaded"].includes(uiState) && snapshot.data?.results && snapshot.data?.results.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 4, direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ResourcesTable__WEBPACK_IMPORTED_MODULE_14__.ResourcesTable,
        {
          resources: snapshot.data.results,
          localPlugins,
          onChangePage: setPage,
          numberOfPages: numPages,
          page,
          onChangeSort: (a) => {
            const order = a.sortBy[0]?.desc === void 0 ? void 0 : a.sortBy[0]?.desc ? "desc" : "asc";
            if (sortParams.column !== a.sortBy[0]?.id || order !== sortParams.order) {
              setSortParams({
                column: a.sortBy[0]?.id,
                order
              });
            }
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SupportedTypesDisclosure__WEBPACK_IMPORTED_MODULE_16__.SupportedTypesDisclosure, {})
    ] })
  ] }) });
};
function getError(props) {
  const {
    snapshot,
    getSnapshotError,
    getSessionError,
    createSnapshotError,
    uploadSnapshotError,
    cancelSnapshotError,
    disconnectSnapshotError
  } = props;
  const seeLogs = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.error-see-server-logs", "See the Grafana server logs for more details");
  if (getSessionError) {
    return {
      severity: "error",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.get-session-error-title", "Error loading migration configuration"),
      body: seeLogs,
      error: getSessionError
    };
  }
  if (getSnapshotError) {
    return {
      severity: "error",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.get-snapshot-error-title", "Error loading snapshot"),
      body: seeLogs,
      error: getSnapshotError
    };
  }
  if (disconnectSnapshotError) {
    return {
      severity: "warning",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.disconnect-error-title", "Error disconnecting"),
      body: seeLogs,
      error: disconnectSnapshotError
    };
  }
  if (createSnapshotError) {
    return handleCreateSnapshotError(createSnapshotError, seeLogs);
  }
  if (uploadSnapshotError) {
    return {
      severity: "warning",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.upload-snapshot-error-title", "Error uploading snapshot"),
      body: seeLogs,
      error: uploadSnapshotError
    };
  }
  if (cancelSnapshotError) {
    return {
      severity: "warning",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.cancel-snapshot-error-title", "Error cancelling creating snapshot"),
      body: seeLogs,
      error: cancelSnapshotError
    };
  }
  if (snapshot?.status === "ERROR") {
    return {
      severity: "warning",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.snapshot-error-status-title", "Error migrating resources"),
      body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "migrate-to-cloud.onprem.snapshot-error-status-body",
        "There was an error creating the snapshot or starting the migration process. See the Grafana server logs for more details"
      )
    };
  }
  const errorCount = snapshot?.stats?.statuses?.["ERROR"] ?? 0;
  const warningCount = snapshot?.stats?.statuses?.["WARNING"] ?? 0;
  if (snapshot?.status === "FINISHED" && errorCount + warningCount > 0) {
    let msgBody = "";
    if (errorCount > 0) {
      msgBody = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "migrate-to-cloud.onprem.migration-finished-with-errors-body",
        "The migration has completed, but some items could not be migrated to the cloud stack. Check the failed resources for more details."
      );
    } else if (warningCount > 0) {
      msgBody = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "migrate-to-cloud.onprem.migration-finished-with-warnings-body",
        "The migration has completed with some warnings. Check individual resources for more details"
      );
    }
    return {
      severity: "warning",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.migration-finished-with-caveat-title", "Resource migration complete"),
      body: msgBody
    };
  }
  return void 0;
}
function handleCreateSnapshotError(createSnapshotError, seeLogs) {
  const apiError = (0,_api_errors__WEBPACK_IMPORTED_MODULE_9__.maybeAPIError)(createSnapshotError);
  let severity = "warning";
  let body = null;
  switch (apiError?.messageId) {
    case "cloudmigrations.emptyResourceTypes":
      severity = "error";
      body = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "migrate-to-cloud.onprem.create-snapshot-error-empty-resource-types",
        "You need to provide at least one resource type for snapshot creation"
      );
      break;
    case "cloudmigrations.unknownResourceType":
      severity = "error";
      body = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "migrate-to-cloud.onprem.create-snapshot-error-unknown-resource-type",
        "Unknown resource type. See the Grafana server logs for more details"
      );
      break;
    case "cloudmigrations.duplicateResourceType":
      severity = "error";
      body = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "migrate-to-cloud.onprem.create-snapshot-error-duplicate-resource-type",
        "Duplicate resource type. See the Grafana server logs for more details"
      );
      break;
    case "cloudmigrations.missingDependency":
      severity = "error";
      body = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
        "migrate-to-cloud.onprem.create-snapshot-error-missing-dependency",
        "Missing dependency. See the Grafana server logs for more details"
      );
      break;
  }
  return {
    severity,
    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("migrate-to-cloud.onprem.create-snapshot-error-title", "Error creating snapshot"),
    body: body || seeLogs,
    error: createSnapshotError
  };
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/ResourceDetailsModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourceDetailsModal: () => (/* binding */ ResourceDetailsModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _TypeCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/TypeCell.tsx");





function getTMessage(errorCode) {
  switch (errorCode) {
    case "ALERT_RULES_QUOTA_REACHED":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.alert-rules-quota-reached",
        "Maximum number of alert rules reached: Delete some alert rules or upgrade your plan and try again."
      );
    case "ALERT_RULES_GROUP_QUOTA_REACHED":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.alert-rules-group-quota-reached",
        "Maximum number of alert rule groups reached: Delete some alert rule groups or upgrade your plan and try again."
      );
    case "DATASOURCE_NAME_CONFLICT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.datasource-name-conflict",
        "There is a data source with the same name in the target instance. Rename one of them and try again."
      );
    case "DATASOURCE_INVALID_URL":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.datasource-invalid-url",
        "There is a data source which has an invalid URL. Provide a valid URL and try again."
      );
    case "DATASOURCE_ALREADY_MANAGED":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.datasource-already-managed",
        "Data source is already provisioned and managed by Grafana in the cloud instance. If this is a different resource, set another UID and try again."
      );
    case "FOLDER_NAME_CONFLICT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.folder-name-conflict",
        "There is a folder with the same name in the target instance. Rename one of them and try again."
      );
    case "DASHBOARD_ALREADY_MANAGED":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.dashboard-already-managed",
        "Dashboard is already provisioned and managed by Grafana in the cloud instance. We recommend using the provisioned dashboard going forward. If you still wish to copy the dashboard to the cloud instance, then change the dashboard ID in the dashboard JSON, save a new snapshot and upload again."
      );
    case "LIBRARY_ELEMENT_NAME_CONFLICT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.library-element-name-conflict",
        "There is a library element with the same name in the target instance. Rename one of them and try again."
      );
    case "UNSUPPORTED_DATA_TYPE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.unsupported-data-type",
        "Migration of this data type is not currently supported."
      );
    case "RESOURCE_CONFLICT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.resource-conflict",
        "There is a resource conflict with the target instance. Please check the Grafana server logs for more details."
      );
    case "UNEXPECTED_STATUS_CODE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.unexpected-error",
        "There has been an error while migrating. Please check the Grafana server logs for more details."
      );
    case "INTERNAL_SERVICE_ERROR":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.internal-service-error",
        "There has been an error while migrating. Please check the Grafana server logs for more details."
      );
    case "GENERIC_ERROR":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "migrate-to-cloud.resource-details.error-messages.generic-error",
        "There has been an error while migrating. Please check the cloud migration logs for more information."
      );
    // Handle new errors here
    default:
      return "";
  }
}
function ResourceDetailsModal(props) {
  const { resource, onClose } = props;
  const refId = resource?.refId;
  const typeName = resource && (0,_TypeCell__WEBPACK_IMPORTED_MODULE_6__.prettyTypeName)(resource.type);
  const hasError = resource?.errorCode || resource?.message;
  let msgTitle = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-details.generic-title", "Resource migration details:");
  if (resource?.status === "ERROR") {
    msgTitle = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-details.error-title", "Unable to migrate this resource:");
  } else if (resource?.status === "WARNING") {
    msgTitle = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-details.warning-title", "Resource migrated with a warning:");
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Modal,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-details.title", "Migration resource details"),
      isOpen: Boolean(resource),
      onDismiss: onClose,
      children: resource && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 2, alignItems: "flex-start", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { element: "p", weight: "bold", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.resource-details.resource-summary", children: [
          { refId },
          " (",
          { typeName },
          ")"
        ] }) }),
        hasError ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { element: "p", children: msgTitle }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { element: "p", children: getTMessage(resource?.errorCode) || resource?.message || /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.resource-details.error-messages.generic-error", children: "There has been an error while migrating. Please check the cloud migration logs for more information." }) })
        ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.resource-details.missing-message", children: "No message provided." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { onClick: onClose, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.resource-details.dismiss-button", children: "OK" }) })
      ] })
    }
  );
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/ResourcesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResourcesTable: () => (/* binding */ ResourcesTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _NameCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/NameCell.tsx");
/* harmony import */ var _ResourceDetailsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/ResourceDetailsModal.tsx");
/* harmony import */ var _StatusCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/StatusCell.tsx");
/* harmony import */ var _TypeCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/TypeCell.tsx");








const columns = [
  { id: "name", header: "Name", cell: _NameCell__WEBPACK_IMPORTED_MODULE_5__.NameCell, sortType: "alphanumeric" },
  { id: "resource_type", header: "Type", cell: _TypeCell__WEBPACK_IMPORTED_MODULE_8__.TypeCell, sortType: "alphanumeric" },
  { id: "status", header: "Status", cell: _StatusCell__WEBPACK_IMPORTED_MODULE_7__.StatusCell, sortType: "alphanumeric" }
];
function ResourcesTable({
  resources,
  localPlugins,
  numberOfPages = 0,
  onChangePage,
  onChangeSort,
  page = 1
}) {
  const initialSortBy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => [{ id: "resource_type", desc: true }], []);
  const [focusedResource, setfocusedResource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const handleShowDetailsModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((resource) => {
    setfocusedResource(resource);
  }, []);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return resources.map((r) => {
      const plugin = getPlugin(r, localPlugins);
      return {
        ...r,
        showDetails: handleShowDetailsModal,
        plugin
      };
    });
  }, [resources, handleShowDetailsModal, localPlugins]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { alignItems: "flex-end", direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InteractiveTable,
        {
          columns,
          data,
          getRowId: (r) => r.refId,
          fetchData: onChangeSort,
          initialSortBy
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Pagination, { numberOfPages, currentPage: page, onNavigate: onChangePage })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ResourceDetailsModal__WEBPACK_IMPORTED_MODULE_6__.ResourceDetailsModal, { resource: focusedResource, onClose: () => setfocusedResource(void 0) })
  ] });
}
function getPlugin(r, plugins) {
  if (!r || !plugins || r.type !== "PLUGIN") {
    return void 0;
  }
  return plugins.find((plugin) => plugin.id === r.refId);
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/SnapshotCTAs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildSnapshotCTA: () => (/* binding */ BuildSnapshotCTA),
/* harmony export */   CreatingSnapshotCTA: () => (/* binding */ CreatingSnapshotCTA)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _CTAInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/CTAInfo.tsx");





function BuildSnapshotCTA(props) {
  const { disabled, isLoading, onClick } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _CTAInfo__WEBPACK_IMPORTED_MODULE_6__.CTAInfo,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.build-snapshot.title", "No snapshot exists"),
      accessory: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "cog", size: "lg" }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "p", variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.build-snapshot.description", children: "This tool can migrate some resources from this installation to your cloud stack. To get started, you'll need to create a snapshot of this installation. Creating a snapshot typically takes less than two minutes. The snapshot is stored alongside this Grafana installation." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "p", variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.build-snapshot.when-complete", children: "Once the snapshot is complete, you will be able to upload it to your cloud stack." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button,
          {
            disabled,
            onClick,
            icon: isLoading ? "spinner" : void 0,
            "data-testid": "migrate-to-cloud-configure-snapshot-build-snapshot-button",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.summary.start-migration", children: "Build snapshot" })
          }
        )
      ]
    }
  );
}
function CreatingSnapshotCTA(props) {
  const { disabled, isLoading, onClick } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_CTAInfo__WEBPACK_IMPORTED_MODULE_6__.CTAInfo, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.building-snapshot.title", "Building snapshot"), accessory: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Spinner, { inline: true }), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Text, { element: "p", variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.building-snapshot.description", children: "We're gathering your resources for migration to Grafana Cloud. This should only take a moment." }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { disabled, onClick, icon: isLoading ? "spinner" : void 0, variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.summary.cancel-snapshot", children: "Cancel snapshot" }) })
  ] });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/StatusCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusCell: () => (/* binding */ StatusCell)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




function StatusCell(props) {
  const item = props.row.original;
  if (item.status === "PENDING") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-status.not-migrated", "Not yet uploaded") });
  } else if (item.status === "OK") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "success", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-status.migrated", "Uploaded to cloud") });
  } else if (item.status === "WARNING") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WarningCell, { item });
  } else if (item.status === "ERROR") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorCell, { item });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-status.unknown", "Unknown") });
}
function ErrorCell({ item }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "error", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-status.failed", "Error") }),
    item.message && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", variant: "secondary", onClick: () => item.showDetails(item), children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-status.error-details-button", "Details") })
  ] });
}
function WarningCell({ item }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { alignItems: "center", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "warning", children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-status.warning", "Uploaded with warning") }),
    item.message && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { size: "sm", variant: "secondary", onClick: () => item.showDetails(item), children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-status.warning-details-button", "Details") })
  ] });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/SupportedTypesDisclosure.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportedTypesDisclosure: () => (/* binding */ SupportedTypesDisclosure)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");




function SupportedTypesDisclosure() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", textAlignment: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "migrate-to-cloud.support-types-disclosure.text", children: [
    "Resources are copied to your Grafana Cloud stack.",
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.TextLink,
      {
        external: true,
        href: "https://grafana.com/docs/grafana-cloud/security-and-account-management/migration-guide/",
        children: "Learn more"
      }
    ),
    " ",
    "about the full set of supported resources and migrating other settings."
  ] }) });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/TypeCell.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypeCell: () => (/* binding */ TypeCell),
/* harmony export */   prettyTypeName: () => (/* binding */ prettyTypeName)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");



function prettyTypeName(type) {
  switch (type) {
    case "DATASOURCE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.datasource", "Data source");
    case "DASHBOARD":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.dashboard", "Dashboard");
    case "FOLDER":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.folder", "Folder");
    case "LIBRARY_ELEMENT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.library_element", "Library Element");
    case "MUTE_TIMING":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.mute_timing", "Mute Timing");
    case "NOTIFICATION_TEMPLATE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.notification_template", "Notification Template");
    case "CONTACT_POINT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.contact_point", "Contact Point");
    case "NOTIFICATION_POLICY":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.notification_policy", "Notification Policy");
    case "ALERT_RULE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.alert_rule", "Alert Rule");
    case "ALERT_RULE_GROUP":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.alert_rule_group", "Alert Rule Group");
    case "PLUGIN":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.plugin", "Plugin");
    default:
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.resource-type.unknown", "Unknown");
  }
}
function TypeCell(props) {
  const { type } = props.row.original;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: prettyTypeName(type) });
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/resourceDependency.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildDependencyMaps: () => (/* binding */ buildDependencyMaps),
/* harmony export */   handleDeselection: () => (/* binding */ handleDeselection),
/* harmony export */   handleSelection: () => (/* binding */ handleSelection)
/* harmony export */ });

function buildDependencyMaps(resourceDependencies) {
  const dependencyMap = /* @__PURE__ */ new Map();
  const dependentMap = /* @__PURE__ */ new Map();
  for (const dependency of resourceDependencies) {
    const resourceType = dependency.resourceType;
    const dependencies = dependency.dependencies || [];
    dependencyMap.set(resourceType, dependencies);
    for (const dep of dependencies) {
      if (!dependentMap.has(dep)) {
        dependentMap.set(dep, []);
      }
      dependentMap.get(dep)?.push(resourceType);
    }
  }
  return { dependencyMap, dependentMap };
}
function handleSelection(dependencyMap, selectedTypes, resourceToSelect) {
  const result = new Set(selectedTypes);
  function selectWithDependencies(resourceType, visited) {
    if (visited.has(resourceType)) {
      return;
    }
    visited.add(resourceType);
    result.add(resourceType);
    dependencyMap.get(resourceType)?.forEach((dep) => selectWithDependencies(dep, visited));
  }
  selectWithDependencies(resourceToSelect, /* @__PURE__ */ new Set());
  return result;
}
function handleDeselection(dependentMap, selectedTypes, resourceToDeselect) {
  const result = new Set(selectedTypes);
  function processDeselection(resourceType, visited) {
    if (visited.has(resourceType)) {
      return;
    }
    visited.add(resourceType);
    result.delete(resourceType);
    dependentMap.get(resourceType)?.forEach((dep) => processDeselection(dep, visited));
  }
  processDeselection(resourceToDeselect, /* @__PURE__ */ new Set());
  return result;
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/resourceInfo.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconNameForResource: () => (/* binding */ iconNameForResource),
/* harmony export */   pluralizeResourceName: () => (/* binding */ pluralizeResourceName)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");


function iconNameForResource(resource) {
  switch (resource) {
    case "DASHBOARD":
      return "dashboard";
    case "FOLDER":
      return "folder";
    case "DATASOURCE":
      return "database";
    case "LIBRARY_ELEMENT":
      return "library-panel";
    case "MUTE_TIMING":
      return "clock-nine";
    case "NOTIFICATION_TEMPLATE":
      return "file-alt";
    case "CONTACT_POINT":
      return "at";
    case "NOTIFICATION_POLICY":
      return "comment-alt";
    case "ALERT_RULE":
      return "bell";
    case "ALERT_RULE_GROUP":
      return "bell";
    case "PLUGIN":
      return "plug";
    default:
      return void 0;
  }
}
function pluralizeResourceName(resource) {
  switch (resource) {
    case "DASHBOARD":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.dashboard", "Dashboards");
    case "FOLDER":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.folder", "Folders");
    case "DATASOURCE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.datasource", "Data Sources");
    case "LIBRARY_ELEMENT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.library_element", "Library Elements");
    case "MUTE_TIMING":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.mute_timing", "Mute Timings");
    case "NOTIFICATION_TEMPLATE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.notification_template", "Notification Templates");
    case "CONTACT_POINT":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.contact_point", "Contact Points");
    case "NOTIFICATION_POLICY":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.notification_policy", "Notification Policies");
    case "ALERT_RULE":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.alert_rule", "Alert Rules");
    case "ALERT_RULE_GROUP":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.alert_rule_group", "Alert Rule Groups");
    case "PLUGIN":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("migrate-to-cloud.resource-types.plugin", "Plugins");
    default:
      return void 0;
  }
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/onprem/useNotifyOnSuccess.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNotifySuccessful: () => (/* binding */ useNotifySuccessful)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _resourceInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/migrate-to-cloud/onprem/resourceInfo.ts");





const SUCCESS_MESSAGE_ITEM_TYPES_THRESHOLD = 4;
function useNotifySuccessful(snapshot) {
  const previousStatusRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(void 0);
  const notifyApp = (0,app_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_2__.useAppNotification)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const status = snapshot?.status;
    const didJustFinish = previousStatusRef.current !== "FINISHED" && previousStatusRef.current !== void 0 && status === "FINISHED";
    previousStatusRef.current = status;
    if (!didJustFinish) {
      return;
    }
    if (snapshot) {
      const title = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("migrate-to-cloud.onprem.success-title", "Migration completed!");
      const message = getTranslatedMessage(snapshot);
      notifyApp.success(title, message);
    }
  }, [notifyApp, snapshot]);
}
function getTranslatedMessage(snapshot) {
  const types = [];
  let distinctItems = 0;
  for (const [type, count] of Object.entries(snapshot.stats?.types ?? {})) {
    if (count <= 0) {
      continue;
    }
    const resourceType = (0,_resourceInfo__WEBPACK_IMPORTED_MODULE_3__.pluralizeResourceName)(type);
    if (!resourceType) {
      continue;
    }
    types.push(resourceType);
    distinctItems += 1;
  }
  const successCount = snapshot?.stats?.statuses?.["OK"] ?? 0;
  if (distinctItems > SUCCESS_MESSAGE_ITEM_TYPES_THRESHOLD) {
    return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
      "migrate-to-cloud.onprem.success-message-generic",
      "Successfully migrated {{successCount}} resources to your Grafana Cloud instance.",
      { successCount }
    );
  }
  return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
    "migrate-to-cloud.onprem.success-message",
    "Successfully migrated {{successCount}} {{types, list}} to your Grafana Cloud instance.",
    { successCount, types }
  );
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/shared/AlertWithTraceID.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertWithTraceID: () => (/* binding */ AlertWithTraceID)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




function AlertWithTraceID(props) {
  const { error, children, ...rest } = props;
  const traceID = maybeGetTraceID(error);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert, { ...rest, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { direction: "column", gap: 1, children: [
    children,
    traceID && /* Deliberately don't want to translate 'Trace ID' */
    /* eslint-disable-next-line @grafana/i18n/no-untranslated-strings */
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { element: "p", color: "secondary", variant: "bodySmall", children: [
      "Trace ID: ",
      traceID
    ] })
  ] }) });
}
function maybeGetTraceID(err) {
  const data = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.isFetchError)(err) ? err.data : err;
  if (typeof data === "object" && data && "traceID" in data && typeof data.traceID === "string") {
    return data.traceID;
  }
  return void 0;
}


/***/ }),

/***/ "./public/app/features/migrate-to-cloud/shared/InfoItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoItem: () => (/* binding */ InfoItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");



const InfoItem = ({ children, title, linkHref, linkTitle }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Stack, { gap: 2, direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { element: "h4", children: title }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Text, { color: "secondary", children }),
    linkHref && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.TextLink, { href: linkHref, external: true, children: linkTitle ?? linkHref })
  ] });
};


/***/ })

}]);
//# sourceMappingURL=MigrateToCloud.f365821d5a60eade5115.js.map