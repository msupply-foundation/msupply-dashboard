"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["LdapSettingsPage"],{

/***/ "./public/app/core/components/FormPrompt/FormPrompt.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormPrompt: () => (/* binding */ FormPrompt)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _Prompt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/FormPrompt/Prompt.tsx");








const FormPrompt = ({ confirmRedirect, onDiscard, onLocationChange }) => {
  const [modalIsOpen, setModalIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [blockedLocation, setBlockedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [changesDiscarded, setChangesDiscarded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const onBeforeUnload = (e) => {
      if (confirmRedirect) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [confirmRedirect]);
  const handleRedirect = (location) => {
    const currentPath = window.location.pathname;
    const nextPath = location.pathname;
    if (currentPath === nextPath) {
      return true;
    }
    const locationChangeCheck = onLocationChange?.(location);
    let blockRedirect = confirmRedirect && !changesDiscarded;
    if (locationChangeCheck !== void 0) {
      blockRedirect = blockRedirect && locationChangeCheck;
    }
    if (blockRedirect) {
      setModalIsOpen(true);
      setBlockedLocation(location);
      return false;
    }
    if (locationChangeCheck) {
      onDiscard();
    }
    return true;
  };
  const onBackToForm = () => {
    setModalIsOpen(false);
    setBlockedLocation(null);
  };
  const onDiscardChanges = () => {
    setModalIsOpen(false);
    setChangesDiscarded(true);
    onDiscard();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Prompt__WEBPACK_IMPORTED_MODULE_7__.Prompt, { when: true, message: handleRedirect }),
    blockedLocation && changesDiscarded && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.Navigate, { replace: true, to: blockedLocation }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UnsavedChangesModal, { isOpen: modalIsOpen, onDiscard: onDiscardChanges, onBackToForm })
  ] });
};
const UnsavedChangesModal = ({ onDiscard, onBackToForm, isOpen }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      isOpen,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("form-prompt.title", "Leave page?"),
      onDismiss: onBackToForm,
      icon: "exclamation-triangle",
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ width: "500px" }),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "form-prompt.description", children: "Changes that you made may not be saved." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "secondary", onClick: onBackToForm, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "form-prompt.continue-button", children: "Continue editing" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "destructive", onClick: onDiscard, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "form-prompt.discard-button", children: "Discard unsaved changes" }) })
        ] })
      ]
    }
  );
};


/***/ }),

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

/***/ "./public/app/features/admin/ldap/LdapDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LdapDrawerComponent: () => (/* binding */ LdapDrawerComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Divider/Divider.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _LdapGroupMapping__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/admin/ldap/LdapGroupMapping.tsx");








const serverConfig = "settings.config.servers.0";
const tlsOptions = ["TLS1.2", "TLS1.3"].map((v) => ({ label: v, value: v }));
var EncryptionProvider = /* @__PURE__ */ ((EncryptionProvider2) => {
  EncryptionProvider2["Base64"] = "base64";
  EncryptionProvider2["FilePath"] = "path";
  return EncryptionProvider2;
})(EncryptionProvider || {});
const LdapDrawerComponent = ({
  onClose,
  mapKeyCertConfigured: mapCertConfigured,
  setMapKeyCertConfigured: setMapCertConfigured
}) => {
  const [encryptionProvider, setEncryptionProvider] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("base64" /* Base64 */);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.useStyles2)(getStyles);
  const { control, getValues, register, setValue, watch } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useFormContext)();
  const nameId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const surnameId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const usernameId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const memberOfId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const emailId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const { client_cert, client_key, root_ca_cert } = getValues(serverConfig);
    setEncryptionProvider(
      !client_cert?.length && !client_key?.length && !root_ca_cert?.length ? "base64" /* Base64 */ : "path" /* FilePath */
    );
  }, [getValues]);
  const renderMultiSelectLabel = (value) => {
    if (value.length >= 5) {
      return `${value.slice(0, 2)}...${value.slice(-2)}`;
    }
    return value;
  };
  const attributesLabel = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Label,
    {
      className: styles.sectionLabel,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "ldap-drawer.attributes-section.description",
        "Specify the LDAP attributes that map to the user's given name, surname, and email address, ensuring the application correctly retrieves and displays user information."
      ),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "ldap-drawer.attributes-section.label", children: "Attributes" })
    }
  );
  const groupMappingsLabel = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Label,
    {
      className: styles.sectionLabel,
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.group-mapping-section.description", "Map LDAP groups to Grafana org roles"),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "ldap-drawer.group-mapping-section.label", children: "Group mapping" })
    }
  );
  const useTlsDescription = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "ldap-drawer.extra-security-section.use-ssl-tooltip", children: "For a complete list of supported ciphers and TLS versions, refer to:" }),
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.TextLink, { style: { fontSize: "inherit" }, href: "https://go.dev/src/crypto/tls/cipher_suites.go", external: true, children: "https://go.dev/src/crypto/tls/cipher_suites.go" })
  ] });
  const onAddGroupMapping = () => {
    const groupMappings = getValues(`${serverConfig}.group_mappings`) || [];
    setValue(`${serverConfig}.group_mappings`, [
      ...groupMappings,
      {
        group_dn: "",
        org_id: 1,
        org_role: "Viewer",
        grafana_admin: false
      }
    ]);
  };
  const onRemoveGroupMapping = (index) => {
    const groupMappings = getValues(`${serverConfig}.group_mappings`);
    setValue(`${serverConfig}.group_mappings`, [...groupMappings.slice(0, index), ...groupMappings.slice(index + 1)]);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Drawer, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.title", "Advanced settings"), onClose, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.CollapsableSection, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.misc-section.label", "Misc"), isOpen: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.misc-section.allow-sign-up-label", "Allow sign-up"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "ldap-drawer.misc-section.allow-sign-up-descrition",
            "If not enabled, only existing Grafana users can log in using LDAP"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Switch, { id: "allow-sign-up", ...register("settings.allowSignUp") })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.misc-section.port-label", "Port"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "ldap-drawer.misc-section.port-description",
            "Default port is 389 without SSL or 636 with SSL"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
            {
              id: "port",
              placeholder: "389",
              type: "number",
              ...register(`${serverConfig}.port`, { valueAsNumber: true })
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.misc-section.timeout-label", "Timeout"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "ldap-drawer.misc-section.timeout-description",
            "Timeout in seconds for the connection to the LDAP server"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
            {
              id: "timeout",
              placeholder: "10",
              type: "number",
              ...register(`${serverConfig}.timeout`, { valueAsNumber: true })
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.CollapsableSection, { label: attributesLabel, isOpen: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.attributes-section.name-label", "Name"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: nameId, ...register(`${serverConfig}.attributes.name`) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.attributes-section.surname-label", "Surname"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: surnameId, ...register(`${serverConfig}.attributes.surname`) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.attributes-section.username-label", "Username"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: usernameId, ...register(`${serverConfig}.attributes.username`) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.attributes-section.member-of-label", "Member Of"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: memberOfId, ...register(`${serverConfig}.attributes.member_of`) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.attributes-section.email-label", "Email"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: emailId, ...register(`${serverConfig}.attributes.email`) }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.CollapsableSection, { label: groupMappingsLabel, isOpen: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          htmlFor: "skip-org-role-sync",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.group-mapping-section.skip-org-role-sync-label", "Skip organization role sync"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "ldap-drawer.group-mapping-section.skip-org-role-sync-description",
            "Prevent synchronizing users\u2019 organization roles from your IdP"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Switch, { id: "skip-org-role-sync", ...register(`${serverConfig}.skip_org_role_sync`) })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          htmlFor: "group-search-filter",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.group-mapping-section.group-search-filter-label", "Group search filter"),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "ldap-drawer.group-mapping-section.group-search-filter-description",
            "Used to filter and identify group entries within the directory"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input, { id: "group-search-filter", ...register(`${serverConfig}.group_search_filter`) })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.group-mapping-section.group-search-base-dns-label", "Group search base DNS"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
        {
          name: `${serverConfig}.group_search_base_dns`,
          control,
          render: ({ field: { onChange, ref, value, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.MultiSelect,
            {
              ...field,
              allowCustomValue: true,
              className: styles.multiSelect,
              noOptionsMessage: "",
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                "ldap-drawer.group-mapping-section.group-search-base-dns-placeholder",
                "example: ou=groups,dc=example,dc=com"
              ),
              onChange: (v) => onChange(v.map(({ value: value2 }) => String(value2))),
              value: value?.map((v) => ({ label: v, value: v }))
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
        {
          htmlFor: "group-search-filter-user-attribute",
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "ldap-drawer.group-mapping-section.group-search-filter-user-attribute-label",
            "Group name attribute"
          ),
          description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "ldap-drawer.group-mapping-section.group-search-filter-user-attribute-description",
            "Identifies users within group entries for filtering purposes"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
            {
              id: "group-search-filter-user-attribute",
              ...register(`${serverConfig}.group_search_filter_user_attribute`)
            }
          )
        }
      ),
      watch("settings.config.servers.0.group_mappings")?.map((_, i) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LdapGroupMapping__WEBPACK_IMPORTED_MODULE_21__.GroupMappingComponent, { groupMappingIndex: i, onRemove: () => onRemoveGroupMapping(i) }, i);
      }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Divider, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Button, { className: styles.button, variant: "secondary", icon: "plus", onClick: () => onAddGroupMapping(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "ldap-drawer.group-mapping-section.add.button", children: "Add group mapping" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.CollapsableSection,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.label", "Extra security measures"),
        isOpen: true,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.use-ssl-label", "Use SSL"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                "ldap-drawer.extra-security-section.use-ssl-description",
                "Set to true if LDAP server should use TLS connection (either with STARTTLS or LDAPS)"
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Switch, { id: "use-ssl", ...register(`${serverConfig}.use_ssl`) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip, { content: useTlsDescription, interactive: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: "info-circle" }) })
              ] })
            }
          ),
          watch(`${serverConfig}.use_ssl`) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.start-tls-label", "Start TLS"),
                description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                  "ldap-drawer.extra-security-section.start-tls-description",
                  "If set to true, use LDAP with STARTTLS instead of LDAPS"
                ),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Switch, { id: "start-tls", ...register(`${serverConfig}.start_tls`) })
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
              {
                htmlFor: "min-tls-version",
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.min-tls-version-label", "Min TLS version"),
                description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                  "ldap-drawer.extra-security-section.min-tls-version-description",
                  "This is the minimum TLS version allowed. Accepted values are: TLS1.2, TLS1.3."
                ),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Select,
                  {
                    id: "min-tls-version",
                    options: tlsOptions,
                    value: watch(`${serverConfig}.min_tls_version`),
                    onChange: ({ value }) => setValue(`${serverConfig}.min_tls_version`, value)
                  }
                )
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.tls-ciphers-label", "TLS ciphers"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
              {
                name: `${serverConfig}.tls_ciphers`,
                control,
                render: ({ field: { onChange, ref, value, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.MultiSelect,
                  {
                    ...field,
                    allowCustomValue: true,
                    className: styles.multiSelect,
                    noOptionsMessage: "",
                    placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                      "ldap-drawer.extra-security-section.tls-ciphers-placeholder",
                      "example: TLS_AES_256_GCM_SHA384"
                    ),
                    onChange: (v) => onChange(v.map(({ value: value2 }) => String(value2))),
                    value: value?.map((v) => ({ label: v, value: v }))
                  }
                )
              }
            ) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                  "ldap-drawer.extra-security-section.encryption-provider-label",
                  "Encryption key and certificate provision specification."
                ),
                description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                  "ldap-drawer.extra-security-section.encryption-provider-description",
                  "X.509 certificate provides the public part, while the private key issued in a PKCS#8 format provides the private part of the asymmetric encryption."
                ),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.RadioButtonGroup,
                  {
                    id: "encryption-provider",
                    options: [
                      {
                        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                          "ldap-drawer.extra-security-section.encryption-provider-base-64",
                          "Base64-encoded content"
                        ),
                        value: "base64" /* Base64 */
                      },
                      {
                        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.encryption-provider-file-path", "Path to files"),
                        value: "path" /* FilePath */
                      }
                    ],
                    value: encryptionProvider,
                    onChange: setEncryptionProvider
                  }
                )
              }
            ),
            encryptionProvider === "base64" /* Base64 */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
                {
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                    "ldap-drawer.extra-security-section.root-ca-cert-value-label",
                    "Root CA certificate content"
                  ),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
                    {
                      name: `${serverConfig}.root_ca_cert_value`,
                      control,
                      render: ({ field: { onChange, ref, value, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.MultiSelect,
                        {
                          ...field,
                          allowCustomValue: true,
                          className: styles.multiSelect,
                          noOptionsMessage: "",
                          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                            "ldap-drawer.extra-security-section.root-ca-cert-value-placeholder",
                            "example: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0t"
                          ),
                          onChange: (v) => onChange(v.map(({ value: value2 }) => String(value2))),
                          value: value?.map((v) => ({ label: renderMultiSelectLabel(v), value: v }))
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field,
                {
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.client-cert-value-label", "Client certificate content"),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
                    {
                      id: "client-cert",
                      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                        "ldap-drawer.extra-security-section.client-cert-value-placeholder",
                        "Client certificate content in base64"
                      ),
                      type: "text",
                      ...register(`${serverConfig}.client_cert_value`)
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.client-key-value-label", "Client key content"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.SecretInput,
                {
                  id: "client-key",
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                    "ldap-drawer.extra-security-section.client-key-value-placeholder",
                    "Client key content in base64"
                  ),
                  isConfigured: mapCertConfigured.clientKeyCertValue,
                  onReset: () => {
                    setValue(`${serverConfig}.client_key_value`, "");
                    setMapCertConfigured({ ...mapCertConfigured, clientKeyCertValue: false });
                  }
                }
              ) })
            ] }),
            encryptionProvider === "path" /* FilePath */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.root-ca-cert-label", "Root CA certificate path"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
                {
                  id: "root-ca-cert",
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                    "ldap-drawer.extra-security-section.root-ca-cert-placeholder",
                    "/path/to/root_ca_cert.pem"
                  ),
                  type: "text",
                  ...register(`${serverConfig}.root_ca_cert`)
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.client-cert-label", "Client certificate path"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Input,
                {
                  id: "client-cert",
                  placeholder: "/path/to/client_cert.pem",
                  type: "text",
                  ...register(`${serverConfig}.client_cert`)
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("ldap-drawer.extra-security-section.client-key-label", "Client key path"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.SecretInput,
                {
                  id: "client-key",
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                    "ldap-drawer.extra-security-section.client-key-placeholder",
                    "/path/to/client_key.pem"
                  ),
                  isConfigured: mapCertConfigured.clientKeyCertPath,
                  onReset: () => {
                    setValue(`${serverConfig}.client_key`, "");
                    setMapCertConfigured({ ...mapCertConfigured, clientKeyCertPath: false });
                  },
                  value: watch(`${serverConfig}.client_key`),
                  onChange: ({ currentTarget: { value } }) => setValue(`${serverConfig}.client_key`, value)
                }
              ) })
            ] })
          ] })
        ]
      }
    )
  ] });
};
function getStyles(theme) {
  return {
    sectionLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontSize: theme.typography.size.lg
    }),
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(4)
    }),
    multiSelect: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      "div:last-of-type > svg": {
        display: "none"
      }
    })
  };
}


/***/ }),

/***/ "./public/app/features/admin/ldap/LdapGroupMapping.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupMappingComponent: () => (/* binding */ GroupMappingComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/types/orgs.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/core.ts");







const roleOptions = Object.keys(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.OrgRole).map((key) => {
  return { label: key, value: key };
});
const GroupMappingComponent = ({ groupMappingIndex, onRemove }) => {
  const { getValues, register, setValue } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { borderColor: "strong", borderStyle: "solid", padding: 2, marginBottom: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        htmlFor: "group-dn",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("ldap-drawer.group-mapping.group-dn.label", "Group DN"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "ldap-drawer.group-mapping.group-dn.description",
          "The name of the key used to extract the ID token from the returned OAuth2 token."
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { id: "group-dn", ...register(`settings.config.servers.0.group_mappings.${groupMappingIndex}.group_dn`) })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("ldap-drawer.group-mapping.org-role.label", "Org role *"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.RadioButtonGroup,
      {
        id: `org-role-${groupMappingIndex}`,
        options: roleOptions,
        value: getValues(`settings.config.servers.0.group_mappings.${groupMappingIndex}.org_role`),
        onChange: (v) => setValue(`settings.config.servers.0.group_mappings.${groupMappingIndex}.org_role`, v)
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        htmlFor: "org-id",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("ldap-drawer.group-mapping.org-id.label", "Org ID"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "ldap-drawer.group-mapping.org-id.description",
          "The Grafana organization database id. Default org (ID 1) will be used if left out"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
          {
            id: "org-id",
            type: "number",
            ...register(`settings.config.servers.0.group_mappings.${groupMappingIndex}.org_id`, { valueAsNumber: true })
          }
        )
      }
    ),
    app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.isGrafanaAdmin && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        htmlFor: "grafana-admin",
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("ldap-drawer.group-mapping.grafana-admin.label", "Grafana Admin"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "ldap-drawer.group-mapping.grafana-admin.description",
          "If enabled, all users from this group will be Grafana Admins"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Switch,
          {
            id: "grafana-admin",
            ...register(`settings.config.servers.0.group_mappings.${groupMappingIndex}.grafana_admin`)
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: "secondary", fill: "outline", icon: "trash-alt", onClick: onRemove, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "ldap-drawer.group-mapping.remove.button", children: "Remove group mapping" }) })
  ] });
};


/***/ }),

/***/ "./public/app/features/admin/ldap/LdapSettingsPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LdapSettingsPage: () => (/* binding */ LdapSettingsPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/services/appEvents.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Menu/Menu.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./packages/grafana-ui/src/components/Dropdown/Dropdown.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/core/components/FormPrompt/FormPrompt.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/features/plugins/admin/components/Loader.tsx");
/* harmony import */ var _LdapDrawer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./public/app/features/admin/ldap/LdapDrawer.tsx");
/* harmony import */ var _LdapTestDrawer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./public/app/features/admin/ldap/LdapTestDrawer.tsx");
















const appEvents = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.getAppEvents)();
const mapStateToProps = (state) => ({
  ldapSsoSettings: state.ldap.ldapSsoSettings
});
const mapDispatchToProps = {};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps);
const pageNav = {
  text: "LDAP",
  icon: "shield",
  id: "LDAP"
};
const serverConfig = "settings.config.servers.0";
const isOptionDefined = (option) => option !== void 0 && option !== "";
const emptySettings = {
  id: "",
  provider: "",
  source: "",
  settings: {
    activeSyncEnabled: false,
    allowSignUp: false,
    config: {
      servers: [
        {
          attributes: {},
          bind_dn: "",
          bind_password: "",
          client_cert: "",
          client_cert_value: "",
          client_key: "",
          client_key_value: "",
          group_mappings: [],
          group_search_base_dns: [],
          group_search_filter: "",
          group_search_filter_user_attribute: "",
          host: "",
          min_tls_version: "",
          port: 389,
          root_ca_cert: "",
          root_ca_cert_value: [],
          search_base_dns: [],
          search_filter: "",
          skip_org_role_sync: false,
          ssl_skip_verify: false,
          start_tls: false,
          timeout: 10,
          tls_ciphers: [],
          tls_skip_verify: false,
          use_ssl: false
        }
      ]
    },
    enabled: false,
    skipOrgRoleSync: false,
    syncCron: ""
  }
};
const LdapSettingsPage = () => {
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [isTestDrawerOpen, setIsTestDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [usernameParam, setUsernameParam] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const [isBindPasswordConfigured, setBindPasswordConfigured] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [mapKeyCertConfigured, setMapKeyCertConfigured] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    clientKeyCertValue: false,
    clientKeyCertPath: false
  });
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({ defaultValues: emptySettings });
  const {
    control,
    formState: { isDirty, errors },
    getValues,
    setValue,
    handleSubmit,
    register,
    reset,
    watch
  } = methods;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_24__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    async function init() {
      const urlParams = new URLSearchParams(window.location.search);
      const username = urlParams.get("username");
      setUsernameParam(username);
      const payload = await getSettings();
      let serverConfig2 = emptySettings.settings.config.servers[0];
      if (payload.settings.config.servers?.length > 0) {
        serverConfig2 = payload.settings.config.servers[0];
      }
      setMapKeyCertConfigured({
        clientKeyCertValue: isOptionDefined(serverConfig2.client_key_value),
        clientKeyCertPath: isOptionDefined(serverConfig2.client_key)
      });
      setBindPasswordConfigured(isOptionDefined(serverConfig2.bind_password));
      reset(payload);
      setIsLoading(false);
      if (username) {
        setIsTestDrawerOpen(true);
      }
    }
    init();
  }, [reset]);
  if (!app_core_config__WEBPACK_IMPORTED_MODULE_27__["default"].featureToggles.ssoSettingsLDAP) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("admin.ldap-settings-page.title-invalid-configuration", "Invalid configuration"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.alert.feature-flag-disabled", children: [
      "This page is only accessible by enabling the ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "ssoSettingsLDAP" }),
      " feature flag."
    ] }) });
  }
  const getSettings = async () => {
    try {
      const payload = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getBackendSrv)().get("/api/v1/sso-settings/ldap");
      if (!payload || !payload.settings || !payload.settings.config) {
        appEvents.publish({
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
          payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.error-fetching", "Error fetching LDAP settings")]
        });
        return emptySettings;
      }
      return payload;
    } catch (error) {
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
        payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.error-fetching", "Error fetching LDAP settings")]
      });
      return emptySettings;
    }
  };
  const putPayload = async (payload) => {
    try {
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getBackendSrv)().put("/api/v1/sso-settings/ldap", payload);
      if (result) {
        appEvents.publish({
          type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
          payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.error-saving", "Error saving LDAP settings")]
        });
      }
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertSuccess.name,
        payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.saved", "LDAP settings saved")]
      });
      reset(await getSettings());
      setTimeout(() => {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.locationService.push(`/admin/authentication`);
      }, 300);
    } catch (error) {
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
        payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.error-saving", "Error saving LDAP settings")]
      });
    }
  };
  const onErrors = () => {
    appEvents.publish({
      type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
      payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.error-validate-form", "Error validating LDAP settings")]
    });
  };
  const submitFormAndToggleSettings = async (payload) => {
    payload.settings.enabled = !payload.settings.enabled;
    await putPayload(payload);
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("authentication_ldap_enabled");
  };
  const saveForm = async () => {
    await putPayload(getValues());
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("authentication_ldap_saved");
  };
  const deleteLDAPConfig = async () => {
    try {
      setIsLoading(true);
      await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.getBackendSrv)().delete("/api/v1/sso-settings/ldap");
      const payload = await getSettings();
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertSuccess.name,
        payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.discard-success", "LDAP settings discarded")]
      });
      reset(payload);
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("authentication_ldap_deleted");
      setTimeout(() => {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.locationService.push(`/admin/authentication`);
      }, 300);
    } catch (error) {
      appEvents.publish({
        type: _grafana_data__WEBPACK_IMPORTED_MODULE_5__.AppEvents.alertError.name,
        payload: [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.alert.error-saving", "Error saving LDAP settings")]
      });
    } finally {
      setIsLoading(false);
    }
  };
  const onDiscard = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("authentication_ldap_abandoned");
  };
  const isInvalidField = (field) => {
    const err = errors?.settings?.config?.servers?.[0];
    return typeof err === "object" && field in err;
  };
  const subTitle = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.subtitle", children: [
    "The LDAP integration in Grafana allows your Grafana users to log in with their LDAP credentials. Find out more in our",
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.TextLink,
      {
        href: "https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-authentication/ldap/",
        external: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.documentation", children: "documentation" })
      }
    ),
    "."
  ] });
  const disabledFormAlert = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Alert, { title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.login-form-alert.title", "Basic login disabled"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.login-form-alert.description", children: "Your LDAP configuration is not working because the basic login form is currently disabled. Please enable the login form to use LDAP authentication. You can enable it on the Authentication page under \u201CAuth settings\u201D." }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_26__.Page, { navId: "authentication", pageNav, subTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_26__.Page.Contents, { children: [
    app_core_config__WEBPACK_IMPORTED_MODULE_27__["default"].disableLoginForm && disabledFormAlert,
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, { ...methods, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(submitFormAndToggleSettings, onErrors), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_FormPrompt_FormPrompt__WEBPACK_IMPORTED_MODULE_25__.FormPrompt, { confirmRedirect: isDirty, onDiscard }),
        isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_plugins_admin_components_Loader__WEBPACK_IMPORTED_MODULE_28__.Loader, {}),
        !isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", { className: styles.form, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.title", children: "Basic Settings" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.host.label", "Server host"),
              required: true,
              error: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.host.error", "Server host is a required field"),
              invalid: isInvalidField("host"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                "ldap-settings-page.host.description",
                "Hostname or IP address of the LDAP server you wish to connect to."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_22__.Input,
                {
                  id: "host",
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.host.placeholder", "example: 127.0.0.1"),
                  type: "text",
                  ...register(`${serverConfig}.host`, { required: true })
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.bind-dn.label", "Bind DN"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                "ldap-settings-page.bind-dn.description",
                "Distinguished name of the account used to bind and authenticate to the LDAP server."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_22__.Input,
                {
                  id: "bind-dn",
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.bind-dn.placeholder", "example: cn=admin,dc=grafana,dc=org"),
                  type: "text",
                  ...register(`${serverConfig}.bind_dn`)
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.bind-password.label", "Bind password"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.SecretInput,
            {
              id: "bind-password",
              isConfigured: isBindPasswordConfigured,
              onReset: () => {
                setValue(`${serverConfig}.bind_password`, "");
                setBindPasswordConfigured(false);
              },
              value: watch(`${serverConfig}.bind_password`),
              onChange: ({ currentTarget: { value } }) => setValue(`${serverConfig}.bind_password`, value)
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.search_filter.label", "Search filter"),
              required: true,
              invalid: isInvalidField("search_filter"),
              error: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.search_filter.error", "Search filter is a required field"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                "ldap-settings-page.search_filter.description",
                "LDAP search filter used to locate specific entries within the directory."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_22__.Input,
                {
                  id: "search_filter",
                  placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.search_filter.placeholder", "example: cn=%s"),
                  type: "text",
                  ...register(`${serverConfig}.search_filter`, { required: true })
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_20__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.search-base-dns.label", "Search base DNS"),
              required: true,
              invalid: isInvalidField("search_base_dns"),
              error: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.search-base-dns.error", "Search base DNS is a required field"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                "ldap-settings-page.search-base-dns.description",
                "An array of base dns to search through."
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller,
                {
                  rules: { required: true, validate: (value) => !!value?.length },
                  name: `${serverConfig}.search_base_dns`,
                  control,
                  render: ({ field: { onChange, ref, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_21__.MultiSelect,
                    {
                      ...field,
                      allowCustomValue: true,
                      className: styles.multiSelect,
                      noOptionsMessage: "",
                      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("ldap-settings-page.search-base-dns.placeholder", "example: dc=grafana,dc=org"),
                      onChange: (v) => onChange(v.map(({ value }) => String(value)))
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Box, { borderColor: "strong", borderStyle: "solid", padding: 2, width: 68, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Stack, { alignItems: "center", direction: "row", gap: 2, justifyContent: "space-between", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Stack, { alignItems: "start", direction: "column", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Text, { element: "h2", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.advanced-settings-section.title", children: "Advanced Settings" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Text, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.advanced-settings-section.subtitle", children: "Mappings, extra security measures, and more." }) })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { variant: "secondary", onClick: () => setIsDrawerOpen(true), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.advanced-settings-section.edit-button", children: "Edit" }) })
          ] }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Box, { display: "flex", gap: 2, marginTop: 5, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_19__.Stack, { alignItems: "center", gap: 2, children: [
            !watch("settings.enabled") && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.buttons-section.save-and-enable-button", children: "Save and enable" }) }),
            watch("settings.enabled") && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { variant: "secondary", type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.buttons-section.disable-button", children: "Disable" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { variant: "secondary", onClick: handleSubmit(saveForm), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.buttons-section.save-button", children: "Save" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Button, { variant: "secondary", onClick: () => setIsTestDrawerOpen(true), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.buttons-section.test-button", children: "Test" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.LinkButton, { href: "/admin/authentication", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "ldap-settings-page.buttons-section.discard-button", children: "Discard" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_23__.Dropdown,
              {
                overlay: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Menu, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Menu.Item,
                  {
                    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
                      "admin.ldap-settings-page.label-reset-to-default-values",
                      "Reset to default values"
                    ),
                    icon: "history-alt",
                    onClick: deleteLDAPConfig
                  }
                ) }),
                placement: "bottom-start",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.IconButton,
                  {
                    tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("admin.ldap-settings-page.tooltip-more-actions", "More actions"),
                    title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("admin.ldap-settings-page.title-more-actions", "More actions"),
                    size: "md",
                    variant: "secondary",
                    name: "ellipsis-v",
                    hidden: watch("source") === "system"
                  }
                )
              }
            )
          ] }) })
        ] }),
        isDrawerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _LdapDrawer__WEBPACK_IMPORTED_MODULE_29__.LdapDrawerComponent,
          {
            onClose: () => setIsDrawerOpen(false),
            mapKeyCertConfigured,
            setMapKeyCertConfigured
          }
        )
      ] }),
      isTestDrawerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LdapTestDrawer__WEBPACK_IMPORTED_MODULE_30__.LdapTestDrawer, { onClose: () => setIsTestDrawerOpen(false), username: usernameParam || void 0 })
    ] })
  ] }) });
};
function getStyles(theme) {
  return {
    form: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: theme.spacing(68)
    }),
    multiSelect: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      "div:last-of-type > svg": {
        display: "none"
      }
    })
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(LdapSettingsPage));


/***/ }),

/***/ "./public/app/features/admin/ldap/LdapTestDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LdapTestDrawer: () => (/* binding */ LdapTestDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/utils/licensing.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var app_types_appNotifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/types/appNotifications.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/admin/state/actions.ts");
/* harmony import */ var _LdapConnectionStatus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/admin/ldap/LdapConnectionStatus.tsx");
/* harmony import */ var _LdapSyncInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/admin/ldap/LdapSyncInfo.tsx");
/* harmony import */ var _LdapUserInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/admin/ldap/LdapUserInfo.tsx");















const LdapTestDrawer = ({ onClose, username }) => {
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_16__.useDispatch)();
  const ldapConnectionInfo = (0,app_types_store__WEBPACK_IMPORTED_MODULE_16__.useSelector)((state) => state.ldap.connectionInfo);
  const ldapUser = (0,app_types_store__WEBPACK_IMPORTED_MODULE_16__.useSelector)((state) => state.ldap.user);
  const ldapSyncInfo = (0,app_types_store__WEBPACK_IMPORTED_MODULE_16__.useSelector)((state) => state.ldap.syncInfo);
  const userError = (0,app_types_store__WEBPACK_IMPORTED_MODULE_16__.useSelector)((state) => state.ldap.userError);
  const ldapError = (0,app_types_store__WEBPACK_IMPORTED_MODULE_16__.useSelector)((state) => state.ldap.ldapError);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)();
  const fetchUserMapping = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    async (username2) => {
      return dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_17__.loadUserMapping)(username2));
    },
    [dispatch]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchLDAPStatus = async () => {
      return Promise.all([dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_17__.loadLdapState)()), dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_17__.loadLdapSyncStatus)())]);
    };
    async function init() {
      dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_17__.clearUserMappingInfo)());
      await fetchLDAPStatus();
      if (username) {
        await fetchUserMapping(username);
      }
      setIsLoading(false);
    }
    init();
  }, [dispatch, fetchUserMapping, username]);
  const search = (data, event) => {
    event?.preventDefault();
    event?.stopPropagation();
    if (data.username) {
      fetchUserMapping(data.username);
    }
  };
  const onClearUserError = () => {
    dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_17__.clearUserError)());
  };
  const canReadLDAPUser = app_core_core__WEBPACK_IMPORTED_MODULE_13__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_14__.AccessControlAction.LDAPUsersRead);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Drawer,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.ldap.debug-title", "LDAP Diagnostics"),
      subtitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.ldap.debug-subtitle", "Verify your LDAP and user mapping configuration."),
      onClose,
      children: isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LoadingPlaceholder, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.ldap.text-loading-ldap-status", "Loading LDAP status...") }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 4, children: [
        ldapError && ldapError.title && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { title: ldapError.title, severity: app_types_appNotifications__WEBPACK_IMPORTED_MODULE_15__.AppNotificationSeverity.Error, children: ldapError.body }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LdapConnectionStatus__WEBPACK_IMPORTED_MODULE_18__.LdapConnectionStatus, { ldapConnectionInfo }),
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.featureEnabled)("ldapsync") && ldapSyncInfo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LdapSyncInfo__WEBPACK_IMPORTED_MODULE_19__.LdapSyncInfo, { ldapSyncInfo }),
        canReadLDAPUser && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", gap: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Text, { element: "h3", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap.test-mapping-heading", children: "Test user mapping" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: handleSubmit(search), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { noMargin: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.ldap-page.label-username", "Username"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
              {
                ...register("username", { required: true }),
                width: 34,
                id: "username",
                type: "text",
                defaultValue: username
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "secondary", type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap.test-mapping-run-button", children: "Run" }) })
          ] }) }) }),
          userError && userError.title && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Alert, { title: userError.title, severity: app_types_appNotifications__WEBPACK_IMPORTED_MODULE_15__.AppNotificationSeverity.Error, onRemove: onClearUserError, children: userError.body }),
          ldapUser && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LdapUserInfo__WEBPACK_IMPORTED_MODULE_20__.LdapUserInfo, { ldapUser })
        ] }) })
      ] })
    }
  );
};


/***/ }),

/***/ "./public/app/features/plugins/admin/components/Loader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Loader: () => (/* binding */ Loader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");



const Loader = ({ text = "Loading..." }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Box, { display: "flex", alignItems: "center", direction: "column", justifyContent: "center", paddingTop: 10, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.LoadingPlaceholder, { text }) });
};


/***/ })

}]);
//# sourceMappingURL=LdapSettingsPage.2c8d7c537cba1d081174.js.map