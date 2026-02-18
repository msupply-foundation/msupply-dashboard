"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["influxdbPlugin"],{

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthMethod: () => (/* binding */ AuthMethod)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");


var AuthMethod = /* @__PURE__ */ ((AuthMethod2) => {
  AuthMethod2["NoAuth"] = "NoAuth";
  AuthMethod2["BasicAuth"] = "BasicAuth";
  AuthMethod2["OAuthForward"] = "OAuthForward";
  AuthMethod2["CrossSiteCredentials"] = "CrossSiteCredentials";
  return AuthMethod2;
})(AuthMethod || {});


//# sourceMappingURL=types.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/utils.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertLegacyAuthProps: () => (/* binding */ convertLegacyAuthProps),
/* harmony export */   getBasicAuthProps: () => (/* binding */ getBasicAuthProps),
/* harmony export */   getCustomHeaders: () => (/* binding */ getCustomHeaders),
/* harmony export */   getOnAuthMethodSelectHandler: () => (/* binding */ getOnAuthMethodSelectHandler),
/* harmony export */   getSelectedMethod: () => (/* binding */ getSelectedMethod),
/* harmony export */   getTLSProps: () => (/* binding */ getTLSProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js");







const headerNamePrefix = "httpHeaderName";
const headerValuePrefix = "httpHeaderValue";
function convertLegacyAuthProps({
  config,
  onChange
}) {
  const props = {
    selectedMethod: getSelectedMethod(config),
    onAuthMethodSelect: getOnAuthMethodSelectHandler(config, onChange),
    basicAuth: getBasicAuthProps(config, onChange),
    TLS: getTLSProps(config, onChange),
    customHeaders: getCustomHeaders(config, onChange),
    readOnly: config.readOnly
  };
  return props;
}
function getSelectedMethod(config) {
  if (config.basicAuth) {
    return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.BasicAuth;
  }
  if (config.withCredentials) {
    return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.CrossSiteCredentials;
  }
  if (config.jsonData.oauthPassThru) {
    return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.OAuthForward;
  }
  return _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.NoAuth;
}
function getOnAuthMethodSelectHandler(config, onChange) {
  return (method) => {
    onChange({
      ...config,
      basicAuth: method === _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.BasicAuth,
      withCredentials: method === _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.CrossSiteCredentials,
      jsonData: {
        ...config.jsonData,
        oauthPassThru: method === _types_js__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.OAuthForward
      }
    });
  };
}
function getBasicAuthProps(config, onChange) {
  return {
    user: config.basicAuthUser,
    passwordConfigured: config.secureJsonFields.basicAuthPassword,
    onUserChange: (user) => onChange({ ...config, basicAuthUser: user }),
    onPasswordChange: (password) => onChange({
      ...config,
      secureJsonData: {
        ...config.secureJsonData,
        basicAuthPassword: password
      }
    }),
    onPasswordReset: () => onChange({
      ...config,
      secureJsonData: { ...config.secureJsonData, basicAuthPassword: "" },
      secureJsonFields: {
        ...config.secureJsonFields,
        basicAuthPassword: false
      }
    })
  };
}
function getTLSProps(config, onChange) {
  var _a, _b, _c;
  return {
    selfSignedCertificate: {
      enabled: Boolean(config.jsonData.tlsAuthWithCACert),
      certificateConfigured: !!((_a = config.secureJsonFields) == null ? undefined : _a.tlsCACert),
      onToggle: (enabled) => enabled ? onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuthWithCACert: enabled }
      }) : onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuthWithCACert: enabled },
        secureJsonData: { ...config.secureJsonData, tlsCACert: "" },
        secureJsonFields: { ...config.secureJsonFields, tlsCACert: false }
      }),
      onCertificateChange: (certificate) => onChange({
        ...config,
        secureJsonData: { ...config.secureJsonData, tlsCACert: certificate }
      }),
      onCertificateReset: () => onChange({
        ...config,
        secureJsonData: { ...config.secureJsonData, tlsCACert: "" },
        secureJsonFields: { ...config.secureJsonFields, tlsCACert: false }
      })
    },
    TLSClientAuth: {
      enabled: config.jsonData.tlsAuth,
      serverName: config.jsonData.serverName,
      clientCertificateConfigured: !!((_b = config.secureJsonFields) == null ? undefined : _b.tlsClientCert),
      clientKeyConfigured: !!((_c = config.secureJsonFields) == null ? undefined : _c.tlsClientKey),
      onToggle: (enabled) => enabled ? onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuth: enabled }
      }) : onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsAuth: enabled, serverName: "" },
        secureJsonData: { ...config.secureJsonData, tlsClientCert: "", tlsClientKey: "" },
        secureJsonFields: { ...config.secureJsonFields, tlsClientCert: false, tlsClientKey: false }
      }),
      onServerNameChange: (serverName) => onChange({
        ...config,
        jsonData: { ...config.jsonData, serverName }
      }),
      onClientCertificateChange: (clientCertificate) => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientCert: clientCertificate
        }
      }),
      onClientCertificateReset: () => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientCert: ""
        },
        secureJsonFields: {
          ...config.secureJsonFields,
          tlsClientCert: false
        }
      }),
      onClientKeyChange: (clientKey) => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientKey: clientKey
        }
      }),
      onClientKeyReset: () => onChange({
        ...config,
        secureJsonData: {
          ...config.secureJsonData,
          tlsClientKey: ""
        },
        secureJsonFields: {
          ...config.secureJsonFields,
          tlsClientKey: false
        }
      })
    },
    skipTLSVerification: {
      enabled: config.jsonData.tlsSkipVerify,
      onToggle: (enabled) => onChange({
        ...config,
        jsonData: { ...config.jsonData, tlsSkipVerify: enabled }
      })
    }
  };
}
function getCustomHeaders(config, onChange) {
  const headers = Object.keys(config.jsonData).filter((key) => key.startsWith(headerNamePrefix)).sort().map((key) => {
    var _a;
    const index = key.slice(headerNamePrefix.length);
    return {
      name: config.jsonData[key],
      configured: (_a = config.secureJsonFields[`${headerValuePrefix}${index}`]) != null ? _a : false
    };
  });
  return {
    headers,
    onChange: (headers2) => {
      const newJsonData = Object.fromEntries(
        Object.entries(config.jsonData).filter(([key]) => !key.startsWith(headerNamePrefix))
      );
      const newSecureJsonData = Object.fromEntries(
        Object.entries(config.secureJsonData || {}).filter(([key]) => !key.startsWith(headerValuePrefix))
      );
      const newSecureJsonFields = Object.fromEntries(
        Object.entries(config.secureJsonFields).filter(([key]) => !key.startsWith(headerValuePrefix))
      );
      headers2.forEach((header, index) => {
        newJsonData[`${headerNamePrefix}${index + 1}`] = header.name;
        if (header.configured) {
          newSecureJsonFields[`${headerValuePrefix}${index + 1}`] = true;
        } else {
          newSecureJsonData[`${headerValuePrefix}${index + 1}`] = header.value;
        }
      });
      onChange({
        ...config,
        jsonData: newJsonData,
        secureJsonData: newSecureJsonData,
        secureJsonFields: newSecureJsonFields
      });
    }
  };
}


//# sourceMappingURL=utils.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessoryButton: () => (/* binding */ AccessoryButton)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const AccessoryButton = ({ className, ...props }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getButtonStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Button, { ...props, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.button) });
};
const getButtonStyles = (theme) => ({
  button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    paddingLeft: theme.spacing(3 / 2),
    paddingRight: theme.spacing(3 / 2)
  })
});


//# sourceMappingURL=AccessoryButton.js.map


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/annotation/AnnotationEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationEditor: () => (/* binding */ AnnotationEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");




const AnnotationEditor = (props) => {
  const { query, onChange } = props;
  const [eventQuery, setEventQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.query ?? "");
  const [textColumn, setTextColumn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.textColumn ?? "");
  const [tagsColumn, setTagsColumn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query.tagsColumn ?? "");
  const [timeEndColumn, setTimeEndColumn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query?.timeEndColumn ?? "");
  const [titleColumn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(query?.titleColumn ?? "");
  const updateValue = (key, val) => {
    onChange({
      ...query,
      [key]: val,
      rawQuery: true,
      fromAnnotations: true,
      textEditor: true
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 5, direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0.5, direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, { width: 12, children: "InfluxQL Query" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
          {
            value: eventQuery,
            onChange: (e) => setEventQuery(e.currentTarget.value ?? ""),
            onBlur: () => updateValue("query", eventQuery),
            placeholder: "select text from events where $timeFilter limit 1000"
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel,
        {
          width: 12,
          tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "If your influxdb query returns more than one field you need to specify the column names below. An annotation event is composed of a title, tags, and an additional text field. Optionally you can map the timeEnd column for region annotation usage." }),
          children: "Field mappings"
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0.5, alignItems: "flex-start", wrap: "wrap", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, { width: 12, children: "Text" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
            {
              value: textColumn,
              onChange: (e) => setTextColumn(e.currentTarget.value ?? ""),
              onBlur: () => updateValue("textColumn", textColumn)
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, { width: 12, children: "Tags" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
            {
              value: tagsColumn,
              onChange: (e) => setTagsColumn(e.currentTarget.value ?? ""),
              onBlur: () => updateValue("tagsColumn", tagsColumn)
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { gap: 0, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, { width: 12, children: "TimeEnd" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
            {
              value: timeEndColumn,
              onChange: (e) => setTimeEndColumn(e.currentTarget.value ?? ""),
              onBlur: () => updateValue("timeEndColumn", timeEndColumn)
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "gf-form ng-hide", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFormLabel, { width: 12, children: "Title" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input, { defaultValue: titleColumn })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/AdvancedDBConnectionSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedDbConnectionSettings: () => (/* binding */ AdvancedDbConnectionSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");









const AdvancedDbConnectionSettings = (props) => {
  const { options } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(_constants__WEBPACK_IMPORTED_MODULE_12__.getInlineLabelStyles);
  const [maxSeriesValue, setMaxSeriesValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(options.jsonData.maxSeries?.toString() || "");
  const [advancedDbConnectionSettingsIsOpen, setAdvancedDbConnectionSettingsIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(
    () => !!options.jsonData.timeInterval || !!options.jsonData.insecureGrpc || !!options.jsonData.maxSeries
  );
  const onMaxSeriesChange = (e) => {
    setMaxSeriesValue(e.currentTarget.value);
    const val = parseInt(e.currentTarget.value, 10);
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.updateDatasourcePluginJsonDataOption)(props, "maxSeries", Number.isFinite(val) ? val : void 0);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Space, { v: 2 }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.label), children: "Advanced Database Settings" }), labelWidth: 40, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineSwitch,
      {
        "data-testid": "influxdb-v2-config-toggle-switch",
        value: advancedDbConnectionSettingsIsOpen,
        onChange: () => setAdvancedDbConnectionSettingsIsOpen(!advancedDbConnectionSettingsIsOpen),
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_13__.trackInfluxDBConfigV2AdvancedDbConnectionSettingsToggleClicked
      }
    ) }),
    advancedDbConnectionSettingsIsOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_11__.InfluxVersion.InfluxQL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField,
        {
          label: "HTTP Method",
          labelWidth: _constants__WEBPACK_IMPORTED_MODULE_12__.DB_SETTINGS_LABEL_WIDTH,
          tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST\n                        method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method\n                        will restrict you and return an error if the query is too large.",
          grow: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Combobox,
            {
              value: _constants__WEBPACK_IMPORTED_MODULE_12__.HTTP_MODES.find((httpMode) => httpMode.value === options.jsonData.httpMode),
              options: _constants__WEBPACK_IMPORTED_MODULE_12__.HTTP_MODES,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOptionSelect)(props, "httpMode"),
              onBlur: _tracking__WEBPACK_IMPORTED_MODULE_13__.trackInfluxDBConfigV2AdvancedDbConnectionSettingsHTTPMethodClicked,
              "data-testid": "influxdb-v2-config-http-method-select"
            }
          )
        }
      ) }),
      (options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_11__.InfluxVersion.InfluxQL || options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_11__.InfluxVersion.Flux) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField,
        {
          label: "Min time interval",
          labelWidth: _constants__WEBPACK_IMPORTED_MODULE_12__.DB_SETTINGS_LABEL_WIDTH,
          tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
          grow: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
            {
              "data-testid": "influxdb-v2-config-time-interval",
              onBlur: _tracking__WEBPACK_IMPORTED_MODULE_13__.trackInfluxDBConfigV2AdvancedDbConnectionSettingsMinTimeClicked,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOption)(props, "timeInterval"),
              placeholder: "10s",
              value: options.jsonData.timeInterval || ""
            }
          )
        }
      ) }),
      options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_11__.InfluxVersion.InfluxQL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField,
        {
          label: "Autocomplete Range",
          labelWidth: _constants__WEBPACK_IMPORTED_MODULE_12__.DB_SETTINGS_LABEL_WIDTH,
          tooltip: "This time range is used in the query editor's autocomplete to reduce the execution time of tag filter queries.",
          grow: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
            {
              "data-testid": "influxdb-v2-config-autocomplete-range",
              onBlur: _tracking__WEBPACK_IMPORTED_MODULE_13__.trackInfluxDBConfigV2AdvancedDbConnectionSettingsAutocompleteClicked,
              onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOption)(props, "showTagTime"),
              placeholder: "12h",
              value: options.jsonData.showTagTime || ""
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField,
        {
          label: "Max series",
          labelWidth: _constants__WEBPACK_IMPORTED_MODULE_12__.DB_SETTINGS_LABEL_WIDTH,
          tooltip: "Limit the number of series/tables that Grafana will process. Lower this number to prevent abuse, and increase it if you have lots of small time series and not all are shown. Defaults to 1000.",
          grow: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
            {
              "data-testid": "influxdb-v2-config-max-series",
              onBlur: _tracking__WEBPACK_IMPORTED_MODULE_13__.trackInfluxDBConfigV2AdvancedDbConnectionSettingsMaxSeriesClicked,
              onChange: onMaxSeriesChange,
              placeholder: "1000",
              value: maxSeriesValue,
              type: "number"
            }
          )
        }
      ) }),
      options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_11__.InfluxVersion.SQL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { label: "Insecure Connection", labelWidth: _constants__WEBPACK_IMPORTED_MODULE_12__.DB_SETTINGS_LABEL_WIDTH, grow: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineSwitch,
        {
          "data-testid": "influxdb-v2-config-insecure-switch",
          value: options.jsonData.insecureGrpc ?? false,
          onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOptionChecked)(props, "insecureGrpc"),
          onBlur: _tracking__WEBPACK_IMPORTED_MODULE_13__.trackInfluxDBConfigV2AdvancedDbConnectionSettingsInsecureConnectClicked
        }
      ) }) })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/AdvancedHttpSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedHttpSettings: () => (/* binding */ AdvancedHttpSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/TagsInput/TagsInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/CustomHeadersSettings.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");







const AdvancedHttpSettings = ({ options, onOptionsChange }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(_constants__WEBPACK_IMPORTED_MODULE_11__.getInlineLabelStyles);
  const [advancedHttpSettingsIsOpen, setAdvancedHttpSettingsIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
    const keys = Object.keys(options.jsonData);
    return "keepCookies" in options.jsonData || "timeout" in options.jsonData || keys.some((key) => key.includes("httpHeaderName"));
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { display: "flex", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineField, { label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.label), children: "Advanced HTTP Settings" }), labelWidth: 40, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineSwitch,
      {
        "data-testid": "influxdb-v2-config-advanced-http-settings-toggle",
        value: advancedHttpSettingsIsOpen,
        onChange: () => setAdvancedHttpSettingsIsOpen(!advancedHttpSettingsIsOpen),
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_12__.trackInfluxDBConfigV2AdvancedHTTPSettingsToggleClicked
      }
    ) }) }),
    advancedHttpSettingsIsOpen && options.access === "proxy" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { paddingLeft: 1, marginY: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { width: "50%", marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
        {
          label: "Allowed cookies",
          description: "Grafana proxy deletes forwarded cookies by default. Specify cookies by name that should\n                be forwarded to the data source.",
          disabled: options.readOnly,
          noMargin: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TagsInput,
            {
              id: "advanced-http-cookies",
              placeholder: "New cookie (hit enter to add)",
              tags: "keepCookies" in options.jsonData && Array.isArray(options.jsonData.keepCookies) ? options.jsonData.keepCookies : [],
              onChange: (e) => {
                onOptionsChange({
                  ...options,
                  jsonData: {
                    ...options.jsonData,
                    ...{ keepCookies: e }
                  }
                });
              }
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { width: "50%", marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
        {
          htmlFor: "advanced-http-timeout",
          label: "Timeout",
          description: "HTTP request timeout in seconds.",
          disabled: options.readOnly,
          noMargin: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
            {
              id: "advanced-http-timeout",
              type: "number",
              min: 0,
              placeholder: "Timeout in seconds",
              "aria-label": "Timeout in seconds",
              value: "timeout" in options.jsonData && typeof options.jsonData.timeout === "number" ? options.jsonData.timeout.toString() : "",
              onChange: (e) => {
                const parsed = parseInt(e.currentTarget.value, 10);
                onOptionsChange({
                  ...options,
                  jsonData: {
                    ...options.jsonData,
                    ...{ timeout: parsed }
                  }
                });
              },
              onBlur: _tracking__WEBPACK_IMPORTED_MODULE_12__.trackInfluxDBConfigV2AdvancedHTTPSettingsTimeoutField
            }
          )
        }
      ) }),
      advancedHttpSettingsIsOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CustomHeadersSettings, { dataSourceConfig: options, onChange: onOptionsChange })
    ] }) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/AuthSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthSettings: () => (/* binding */ AuthSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useWindowSize.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/utils.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/CertificationKey.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");











const AuthSettings = (props) => {
  const { options, onOptionsChange } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_20__.useStyles2)(_constants__WEBPACK_IMPORTED_MODULE_21__.getInlineLabelStyles);
  const { width } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const authProps = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => (0,_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.convertLegacyAuthProps)({
      config: options,
      onChange: onOptionsChange
    }),
    [options, onOptionsChange]
  );
  const isAuthMethod = (v) => v === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.NoAuth || v === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.BasicAuth || v === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.OAuthForward;
  const [authOptions, setAuthOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    noAuth: (!options.basicAuth && !options.jsonData.oauthPassThru) ?? false,
    basicAuth: options.basicAuth ?? false,
    tlsClientAuth: authProps.TLS?.TLSClientAuth.enabled ?? false,
    caCert: authProps.TLS?.selfSignedCertificate.enabled ?? false,
    skipTLS: authProps.TLS?.skipTLSVerification.enabled ?? false,
    oAuthForward: options.jsonData.oauthPassThru ?? false,
    withCredentials: options.withCredentials ?? false
  });
  const selectedMethod = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (isAuthMethod(authProps.selectedMethod) && authProps.selectedMethod !== _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.CrossSiteCredentials) {
      return authProps.selectedMethod;
    }
    switch (!!authOptions) {
      case authOptions.basicAuth:
        return _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.BasicAuth;
      case authOptions.oAuthForward:
        return _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.OAuthForward;
      case authOptions.noAuth:
        return _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.NoAuth;
      default:
        return void 0;
    }
  }, [authProps.selectedMethod, authOptions]);
  const [authenticationSettingsIsOpen, setAuthenticationSettingsIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(
    () => Object.entries(authOptions).some(([key, value]) => key !== "noAuth" && Boolean(value))
  );
  const toggleOpen = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    setAuthenticationSettingsIsOpen((prev) => {
      (0,_tracking__WEBPACK_IMPORTED_MODULE_22__.trackInfluxDBConfigV2AuthSettingsToggleClicked)();
      return !prev;
    });
  }, []);
  const handleAuthMethodChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (option) => {
      authProps.onAuthMethodSelect(option);
      setAuthOptions((prev) => ({
        ...prev,
        noAuth: option === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.NoAuth,
        basicAuth: option === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.BasicAuth,
        oAuthForward: option === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.OAuthForward,
        withCredentials: prev.withCredentials
      }));
      (0,_tracking__WEBPACK_IMPORTED_MODULE_22__.trackInfluxDBConfigV2AuthSettingsAuthMethodSelected)({ authMethod: option });
    },
    [authProps]
  );
  const toggleOption = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((key, onToggle) => {
    setAuthOptions((prev) => {
      const nextValue = !prev[key];
      const next = { ...prev, [key]: nextValue };
      onToggle(nextValue);
      return next;
    });
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.InlineField, { label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.label), children: "Auth and TLS/SSL Settings" }), labelWidth: 35, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_19__.InlineSwitch,
      {
        "data-testid": "influxdb-v2-config-auth-settings-toggle",
        value: authenticationSettingsIsOpen,
        onChange: toggleOpen
      }
    ) }) }),
    authenticationSettingsIsOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { paddingLeft: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { marginBottom: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { element: "h5", children: "Authentication Method" }), noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { width: "50%", marginY: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.RadioButtonGroup,
        {
          options: _constants__WEBPACK_IMPORTED_MODULE_21__.AUTH_RADIO_BUTTON_OPTIONS,
          value: selectedMethod,
          onChange: handleAuthMethodChange,
          size: width < 1100 ? "sm" : "md"
        }
      ) }) }) }),
      authOptions.basicAuth && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { display: "flex", direction: "column", marginBottom: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.InlineField, { label: "User", labelWidth: _constants__WEBPACK_IMPORTED_MODULE_21__.DB_SETTINGS_LABEL_WIDTH, grow: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Input,
          {
            placeholder: "User",
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.onUpdateDatasourceOption)(props, "basicAuthUser"),
            value: options.basicAuthUser || ""
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.InlineField, { label: "Password", labelWidth: _constants__WEBPACK_IMPORTED_MODULE_21__.DB_SETTINGS_LABEL_WIDTH, grow: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.SecretInput,
          {
            placeholder: "Password",
            isConfigured: options.secureJsonFields.basicAuthPassword || false,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.onUpdateDatasourceSecureJsonDataOption)(props, "basicAuthPassword"),
            onReset: () => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.updateDatasourcePluginResetOption)(props, "basicAuthPassword"),
            value: options.secureJsonData?.basicAuthPassword || ""
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { display: "flex", direction: "row", alignItems: "center", marginBottom: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineLabel,
          {
            style: { width: "150px" },
            tooltip: "Whether credentials such as cookies or auth headers should be sent with cross-site requests.",
            children: "With Credentials"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_19__.InlineSwitch,
          {
            "data-testid": "influxdb-v2-config-auth-settings-with-credentials",
            value: authOptions.withCredentials,
            onChange: (e) => {
              authProps.onAuthMethodSelect(selectedMethod);
              onOptionsChange({
                ...options,
                withCredentials: e.currentTarget.checked,
                jsonData: {
                  ...options.jsonData,
                  oauthPassThru: selectedMethod === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.OAuthForward
                }
              });
              setAuthOptions({
                ...authOptions,
                noAuth: selectedMethod === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.NoAuth,
                basicAuth: selectedMethod === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.BasicAuth,
                oAuthForward: selectedMethod === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.AuthMethod.OAuthForward,
                withCredentials: e.currentTarget.checked
              });
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { element: "h5", children: "TLS Settings" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box,
          {
            display: "flex",
            alignItems: "center",
            "data-testid": "influxdb-v2-config-auth-settings-tls-client-auth-toggle",
            marginTop: 2,
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Label, { style: { width: "125px" }, children: "TLS Client Auth" }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.RadioButtonGroup,
                {
                  options: _constants__WEBPACK_IMPORTED_MODULE_21__.RADIO_BUTTON_OPTIONS,
                  value: authOptions.tlsClientAuth,
                  onChange: () => toggleOption("tlsClientAuth", authProps.TLS.TLSClientAuth.onToggle),
                  size: "sm"
                }
              )
            ]
          }
        ),
        authOptions.tlsClientAuth && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { marginTop: 2, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.InlineField, { label: "Server Name", labelWidth: 14, grow: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_18__.Input,
            {
              placeholder: "domain.example.com",
              onChange: (e) => authProps.TLS?.TLSClientAuth.onServerNameChange(e.currentTarget.value),
              value: authProps.TLS?.TLSClientAuth.serverName || ""
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.CertificationKey,
            {
              label: "Client Cert",
              placeholder: "Begins with -----BEGIN CERTIFICATE-----",
              onChange: (e) => authProps.TLS?.TLSClientAuth.onClientCertificateChange(e.currentTarget.value),
              hasCert: !!authProps.TLS?.TLSClientAuth.clientCertificateConfigured,
              onClick: () => authProps.TLS?.TLSClientAuth.onClientCertificateReset(),
              useGrow: _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.newInfluxDSConfigPageDesign
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.CertificationKey,
            {
              label: "Client Key",
              placeholder: "Begins with -----BEGIN RSA PRIVATE KEY-----",
              onChange: (e) => authProps.TLS?.TLSClientAuth.onClientKeyChange(e.currentTarget.value),
              hasCert: !!authProps.TLS?.TLSClientAuth.clientKeyConfigured,
              onClick: () => authProps.TLS?.TLSClientAuth.onClientKeyReset(),
              useGrow: _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.newInfluxDSConfigPageDesign
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Field, { noMargin: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { display: "flex", alignItems: "center", "data-testid": "influxdb-v2-config-auth-settings-ca-cert-toggle", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Label, { style: { width: "125px" }, children: "CA Cert" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.RadioButtonGroup,
            {
              options: _constants__WEBPACK_IMPORTED_MODULE_21__.RADIO_BUTTON_OPTIONS,
              value: authOptions.caCert,
              onChange: () => toggleOption("caCert", authProps.TLS.selfSignedCertificate.onToggle),
              size: "sm"
            }
          )
        ] }),
        authOptions.caCert && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { marginTop: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.CertificationKey,
          {
            label: "CA Cert",
            placeholder: "Begins with -----BEGIN CERTIFICATE-----",
            onChange: (e) => authProps.TLS?.selfSignedCertificate.onCertificateChange(e.currentTarget.value),
            hasCert: !!authProps.TLS?.selfSignedCertificate.certificateConfigured,
            onClick: () => authProps.TLS?.selfSignedCertificate.onCertificateReset(),
            useGrow: _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.newInfluxDSConfigPageDesign
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Box, { display: "flex", direction: "row", alignItems: "center", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineLabel, { style: { width: "150px" }, children: "Skip TLS Verify" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_19__.InlineSwitch,
          {
            "data-testid": "influxdb-v2-config-auth-settings-skip-tls-verify",
            value: authOptions.skipTLS,
            onChange: () => toggleOption("skipTLS", authProps.TLS.skipTLSVerification.onToggle)
          }
        )
      ] })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _DatabaseConnectionSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/DatabaseConnectionSection.tsx");
/* harmony import */ var _LeftSideBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/LeftSideBar.tsx");
/* harmony import */ var _UrlAndAuthenticationSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/UrlAndAuthenticationSection.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");









const ConfigEditor = ({ onOptionsChange, options }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { justifyContent: "space-between", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `${styles.hideOnSmallScreen} ${styles.leftSticky}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { width: "100%", flex: "1 1 auto", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LeftSideBar__WEBPACK_IMPORTED_MODULE_9__.LeftSideBar, { pdcInjected: options?.jsonData?.pdcInjected }) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { width: "60%", flex: "1 1 auto", minWidth: _constants__WEBPACK_IMPORTED_MODULE_11__.CONTAINER_MIN_WIDTH, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert,
        {
          severity: "info",
          title: "You are viewing a new design for the InfluxDB configuration settings.",
          className: styles.alertHeight,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink,
              {
                href: "https://docs.google.com/forms/d/e/1FAIpQLSdi-zyX3c51vh937UKhNYYxhljUnFi6dQSlZv50mES9NrK-ig/viewform",
                external: true,
                onClick: _tracking__WEBPACK_IMPORTED_MODULE_12__.trackInfluxDBConfigV2FeedbackButtonClicked,
                children: "Share your thoughts"
              }
            ),
            " ",
            "to help us make it even better."
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "bodySmall", color: "secondary", children: "Fields marked with * are required" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UrlAndAuthenticationSection__WEBPACK_IMPORTED_MODULE_10__.UrlAndAuthenticationSection, { options, onOptionsChange }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DatabaseConnectionSection__WEBPACK_IMPORTED_MODULE_8__.DatabaseConnectionSection, { options, onOptionsChange })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { width: "20%", flex: "0 0 20%" })
  ] });
};
const getStyles = (theme) => {
  return {
    hideOnSmallScreen: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "250px",
      flex: "0 0 250px",
      [theme.breakpoints.down("sm")]: {
        display: "none"
      }
    }),
    leftSticky: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "sticky",
      top: "100px",
      alignSelf: "flex-start",
      maxHeight: "calc(100vh - 100px)",
      overflow: "hidden"
    }),
    alertHeight: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100px"
    })
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/DatabaseConnectionSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatabaseConnectionSection: () => (/* binding */ DatabaseConnectionSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _AdvancedDBConnectionSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/AdvancedDBConnectionSettings.tsx");
/* harmony import */ var _InfluxFluxDBConnection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/InfluxFluxDBConnection.tsx");
/* harmony import */ var _InfluxInfluxQLDBConnection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/InfluxInfluxQLDBConnection.tsx");
/* harmony import */ var _InfluxSQLDBConnection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/InfluxSQLDBConnection.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");









const DatabaseConnectionSection = ({ options, onOptionsChange }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
  _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box,
  {
    borderStyle: "solid",
    borderColor: "weak",
    padding: 2,
    marginBottom: 4,
    id: `${_constants__WEBPACK_IMPORTED_MODULE_11__.CONFIG_SECTION_HEADERS[1].id}`,
    minWidth: _constants__WEBPACK_IMPORTED_MODULE_11__.CONTAINER_MIN_WIDTH,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CollapsableSection,
      {
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { element: "h3", children: _constants__WEBPACK_IMPORTED_MODULE_11__.CONFIG_SECTION_HEADERS[1].label }),
        isOpen: _constants__WEBPACK_IMPORTED_MODULE_11__.CONFIG_SECTION_HEADERS[1].isOpen,
        children: [
          !options.jsonData.version && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { severity: "info", title: "Query language required", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "To view connection settings, first choose a query language in the URL and Connection section." }) }),
          options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_6__.InfluxVersion.InfluxQL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { severity: "info", title: "Database Access", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. To support data isolation and security, make sure appropriate permissions are configured in InfluxDB." }) }) }),
          options.jsonData.version && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: "Provide the necessary database connection details based on your selected InfluxDB product and query language." }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Space, { v: 2 })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_6__.InfluxVersion.InfluxQL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxInfluxQLDBConnection__WEBPACK_IMPORTED_MODULE_9__.InfluxInfluxQLDBConnection, { options, onOptionsChange }),
            options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_6__.InfluxVersion.Flux && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxFluxDBConnection__WEBPACK_IMPORTED_MODULE_8__.InfluxFluxDBConnection, { options, onOptionsChange }),
            options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_6__.InfluxVersion.SQL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxSQLDBConnection__WEBPACK_IMPORTED_MODULE_10__.InfluxSQLDBConnection, { options, onOptionsChange }),
            options.jsonData.version && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AdvancedDBConnectionSettings__WEBPACK_IMPORTED_MODULE_7__.AdvancedDbConnectionSettings, { options, onOptionsChange })
          ] })
        ]
      }
    )
  }
) });


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/InfluxFluxDBConnection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxFluxDBConnection: () => (/* binding */ InfluxFluxDBConnection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");






const InfluxFluxDBConnection = (props) => {
  const {
    options: { jsonData, secureJsonData, secureJsonFields }
  } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Organization", labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH, grow: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: "organization",
        placeholder: "myorg",
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2FluxDBDetailsOrgInputField,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOption)(props, "organization"),
        value: jsonData.organization || ""
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH, label: "Default Bucket", grow: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: "default-bucket",
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2FluxDBDetailsDefaultBucketInputField,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOption)(props, "defaultBucket"),
        placeholder: "mybucket",
        value: jsonData.defaultBucket || ""
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH, label: "Token", grow: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretInput,
      {
        id: "token",
        isConfigured: Boolean(secureJsonFields && secureJsonFields.token),
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2FluxDBDetailsTokenInputField,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceSecureJsonDataOption)(props, "token"),
        onReset: () => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginResetOption)(props, "token"),
        value: secureJsonData?.token || ""
      }
    ) }) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/InfluxInfluxQLDBConnection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxInfluxQLDBConnection: () => (/* binding */ InfluxInfluxQLDBConnection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");






const InfluxInfluxQLDBConnection = (props) => {
  const { options } = props;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Database", labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH, grow: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: "database",
        placeholder: "mydb",
        value: options.jsonData.dbName,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOption)(props, "dbName"),
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2InfluxQLDBDetailsDatabaseInputField
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "User", labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH, grow: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: "user",
        placeholder: "myuser",
        value: options.user || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceOption)(props, "user"),
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2InfluxQLDBDetailsUserInputField
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField,
      {
        label: "Password",
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH,
        tooltip: "Enter the token used to query the database. You can find this on the Tokens page in the InfluxDB UI.",
        grow: true,
        required: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretInput,
          {
            id: "password",
            isConfigured: Boolean(options.secureJsonFields && options.secureJsonFields.password),
            value: options.secureJsonData?.password || "",
            onReset: () => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginResetOption)(props, "password"),
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceSecureJsonDataOption)(props, "password"),
            onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2InfluxQLDBDetailsPasswordInputField
          }
        )
      }
    ) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/InfluxSQLDBConnection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxSQLDBConnection: () => (/* binding */ InfluxSQLDBConnection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");






const InfluxSQLDBConnection = (props) => {
  const { options } = props;
  const { secureJsonData, secureJsonFields } = options;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Database", labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH, grow: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        id: "database",
        placeholder: "mydb",
        value: options.jsonData.dbName,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceJsonDataOption)(props, "dbName"),
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2SQLDBDetailsDatabaseInputField
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { labelWidth: _constants__WEBPACK_IMPORTED_MODULE_6__.DB_SETTINGS_LABEL_WIDTH, label: "Token", grow: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SecretInput,
      {
        id: "token",
        isConfigured: Boolean(secureJsonFields && secureJsonFields.token),
        onBlur: _tracking__WEBPACK_IMPORTED_MODULE_7__.trackInfluxDBConfigV2SQLDBDetailsTokenInputField,
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.onUpdateDatasourceSecureJsonDataOption)(props, "token"),
        onReset: () => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.updateDatasourcePluginResetOption)(props, "token"),
        value: secureJsonData?.token || ""
      }
    ) }) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/LeftSideBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftSideBar: () => (/* binding */ LeftSideBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");





const LeftSideBar = ({ pdcInjected }) => {
  const headers = pdcInjected ? _constants__WEBPACK_IMPORTED_MODULE_9__.CONFIG_SECTION_HEADERS_WITH_PDC : _constants__WEBPACK_IMPORTED_MODULE_9__.CONFIG_SECTION_HEADERS;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { flex: 1, marginY: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { element: "h4", children: "Connect data source" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Box, { paddingTop: 2, children: headers.map((header, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": `${header.label}-sidebar`, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "circle", size: "xs" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
        {
          style: header.isOptional ? { padding: "5px 15px", height: "50px", width: "225px" } : {},
          variant: "secondary",
          fill: "text",
          onClick: (e) => {
            e.preventDefault();
            const target = document.getElementById(header.id);
            if (target) {
              const y = target.getBoundingClientRect().top + window.scrollY - 60;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.sidebarText, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.sidebarLabel, children: header.label }),
            header.isOptional && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.sidebarOptional, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", variant: "bodySmall", children: "optional" }) })
          ] })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Space, { v: 1 })
    ] }, index)) })
  ] }) });
};
const getStyles = () => ({
  inlineField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }),
  sidebarText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column"
  }),
  sidebarLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 0,
    lineHeight: 1
  }),
  sidebarOptional: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: 0,
    marginBottom: 0,
    lineHeight: 1
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/UrlAndAuthenticationSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlAndAuthenticationSection: () => (/* binding */ UrlAndAuthenticationSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Collapse/CollapsableSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _AdvancedHttpSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/AdvancedHttpSettings.tsx");
/* harmony import */ var _AuthSettings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/AuthSettings.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts");
/* harmony import */ var _tracking__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts");
/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/versions.ts");













const getQueryLanguageOptions = (productName) => {
  const product = _versions__WEBPACK_IMPORTED_MODULE_21__.INFLUXDB_VERSION_MAP.find(({ name }) => name === productName);
  return product?.queryLanguages?.map(({ name }) => ({ value: name })) ?? [];
};
const UrlAndAuthenticationSection = (props) => {
  const { options, onOptionsChange } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.useStyles2)(getStyles);
  const isInfluxVersion = (v) => typeof v === "string" && (v === _types__WEBPACK_IMPORTED_MODULE_16__.InfluxVersion.Flux || v === _types__WEBPACK_IMPORTED_MODULE_16__.InfluxVersion.InfluxQL || v === _types__WEBPACK_IMPORTED_MODULE_16__.InfluxVersion.SQL);
  const requiresDbrpMapping = options.jsonData.product && options.jsonData.version === _types__WEBPACK_IMPORTED_MODULE_16__.InfluxVersion.InfluxQL && [
    "InfluxDB OSS 1.x",
    "InfluxDB OSS 2.x",
    "InfluxDB Enterprise 1.x",
    "InfluxDB Cloud (TSM)",
    "InfluxDB Cloud Serverless"
  ].includes(options.jsonData.product);
  const onProductChange = ({ value }) => {
    (0,_tracking__WEBPACK_IMPORTED_MODULE_20__.trackInfluxDBConfigV2ProductSelected)({ product: value });
    onOptionsChange({ ...options, jsonData: { ...options.jsonData, product: value, version: void 0 } });
  };
  const onQueryLanguageChange = (option) => {
    const { value } = option;
    (0,_tracking__WEBPACK_IMPORTED_MODULE_20__.trackInfluxDBConfigV2QueryLanguageSelected)({ version: value });
    if (isInfluxVersion(value)) {
      (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOptionSelect)(props, "version")(option);
    }
  };
  const onUrlChange = (event) => {
    (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceOption)(props, "url")(event);
  };
  const pingInfluxForProductDetection = async (urlValue) => {
    const dsId = options.id;
    if (!dsId) {
      return;
    }
    try {
      const res = await (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().fetch({
          method: "GET",
          url: `/api/datasources/proxy/${dsId}/ping`,
          headers: { Accept: "application/json" },
          responseType: "text",
          showErrorAlert: false,
          showSuccessAlert: false
        })
      );
      if (res.ok) {
        let product;
        let version;
        if (res.headers && typeof res.headers.get === "function") {
          product = res.headers.get("x-influxdb-build") ?? void 0;
          version = res.headers.get("x-influxdb-version") ?? void 0;
        }
        if (product || version) {
          return { product, version };
        }
      }
    } catch (err) {
      console.error("Failed to get InfluxDB version:", err);
    }
    return { product: void 0, version: void 0 };
  };
  const matchUrlContains = async (urlValue) => {
    let product;
    product = _versions__WEBPACK_IMPORTED_MODULE_21__.INFLUXDB_VERSION_MAP.find((product2) => {
      if (product2.detectionMethod?.urlContains) {
        return product2.detectionMethod.urlContains.some((url) => {
          return urlValue.includes(url);
        });
      }
      return false;
    });
    if (!product) {
      const pingUrl = await pingInfluxForProductDetection(urlValue);
      if (pingUrl) {
        product = _versions__WEBPACK_IMPORTED_MODULE_21__.INFLUXDB_VERSION_MAP.find((product2) => {
          if (product2.detectionMethod?.pingHeaderResponse) {
            const productBuild = product2.detectionMethod.pingHeaderResponse["x-influxdb-build"];
            const productVersion = product2.detectionMethod.pingHeaderResponse["x-influxdb-version"];
            const pingUrlVersion = pingUrl.version ?? "";
            const pingUrlBuild = pingUrl.product ?? "";
            const versionMatch = new RegExp(productVersion).test(pingUrlVersion);
            const buildMatch = pingUrlBuild.includes(productBuild);
            return versionMatch && buildMatch;
          }
          return false;
        });
      }
    }
    onOptionsChange({
      ...options,
      jsonData: {
        ...options.jsonData,
        product: product ? product.name : void 0,
        version: void 0
      }
    });
  };
  const detectProductFromUrl = (event) => {
    matchUrlContains(event.target.value);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box,
    {
      borderStyle: "solid",
      borderColor: "weak",
      padding: 2,
      id: `${_constants__WEBPACK_IMPORTED_MODULE_19__.CONFIG_SECTION_HEADERS[0].id}`,
      minWidth: _constants__WEBPACK_IMPORTED_MODULE_19__.CONTAINER_MIN_WIDTH,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.CollapsableSection,
        {
          label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { element: "h3", children: _constants__WEBPACK_IMPORTED_MODULE_19__.CONFIG_SECTION_HEADERS[0].label }),
          isOpen: _constants__WEBPACK_IMPORTED_MODULE_19__.CONFIG_SECTION_HEADERS[0].isOpen,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { color: "secondary", children: "Enter the URL of your InfluxDB instance, then select your product and query language. This will determine the available settings and authentication methods in the next steps." }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { direction: "column", marginTop: 3, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field, { label: "URL", noMargin: true, required: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Input,
                {
                  "data-testid": "influxdb-v2-config-url-input",
                  placeholder: "example: http://localhost:8086/",
                  onChange: onUrlChange,
                  value: options.url || "",
                  onBlur: (e) => {
                    detectProductFromUrl(e);
                    (0,_tracking__WEBPACK_IMPORTED_MODULE_20__.trackInfluxDBConfigV2URLInputField)();
                  }
                }
              ) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { marginTop: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "row", wrap: "wrap", justifyContent: "space-between", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.col, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { width: "100%", minWidth: 37, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
                  {
                    label: "Product",
                    description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dropdown, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { color: "secondary", children: [
                      "Use",
                      " ",
                      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink,
                        {
                          href: "https://docs.influxdata.com/influxdb3/enterprise/visualize-data/grafana/?section=influxdb3%252Fenterprise%252Fvisualize-data&detection_method=url_analysis",
                          variant: "bodySmall",
                          external: true,
                          children: "InfluxDB detection"
                        }
                      ),
                      " ",
                      "to identify the product"
                    ] }) }),
                    noMargin: true,
                    required: true,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Combobox,
                      {
                        "data-testid": "influxdb-v2-config-product-select",
                        value: options.jsonData.product,
                        options: _versions__WEBPACK_IMPORTED_MODULE_21__.INFLUXDB_VERSION_MAP.map(({ name }) => ({ value: name })),
                        onChange: onProductChange
                      }
                    )
                  }
                ) }) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.col, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { width: "100%", minWidth: 37, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field,
                  {
                    label: "Query language",
                    description: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.dropdown, children: "The query language depends on product selection" }),
                    noMargin: true,
                    required: true,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                      _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Combobox,
                      {
                        "data-testid": "influxdb-v2-config-query-language-select",
                        value: options.jsonData.product !== "" ? options.jsonData.version : "",
                        options: getQueryLanguageOptions(options.jsonData.product || ""),
                        onChange: onQueryLanguageChange
                      }
                    )
                  }
                ) }) })
              ] }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Space, { v: 2 }),
              requiresDbrpMapping && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { severity: "warning", title: "InfluxQL requires DBRP mapping", children: [
                `${options.jsonData.product} requires a Database + Retention Policy (DBRP) mapping via the CLI or
              API before data can be queried.`,
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TextLink, { href: "https://docs.influxdata.com/influxdb/cloud/query-data/influxql/dbrp/", external: true, children: "Learn how to set this up" })
              ] }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AdvancedHttpSettings__WEBPACK_IMPORTED_MODULE_17__.AdvancedHttpSettings, { options, onOptionsChange }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AuthSettings__WEBPACK_IMPORTED_MODULE_18__.AuthSettings, { options, onOptionsChange })
            ] })
          ]
        }
      )
    }
  );
};
const getStyles = () => {
  return {
    dropdown: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      height: "18px"
    }),
    col: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: "1 1 48%",
      minWidth: "320px"
    }),
    "@media (max-width: 768px)": {
      flexBasis: "100%"
    }
  };
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTH_RADIO_BUTTON_OPTIONS: () => (/* binding */ AUTH_RADIO_BUTTON_OPTIONS),
/* harmony export */   CONFIG_SECTION_HEADERS: () => (/* binding */ CONFIG_SECTION_HEADERS),
/* harmony export */   CONFIG_SECTION_HEADERS_WITH_PDC: () => (/* binding */ CONFIG_SECTION_HEADERS_WITH_PDC),
/* harmony export */   CONTAINER_MIN_WIDTH: () => (/* binding */ CONTAINER_MIN_WIDTH),
/* harmony export */   DB_SETTINGS_LABEL_WIDTH: () => (/* binding */ DB_SETTINGS_LABEL_WIDTH),
/* harmony export */   HTTP_MODES: () => (/* binding */ HTTP_MODES),
/* harmony export */   RADIO_BUTTON_OPTIONS: () => (/* binding */ RADIO_BUTTON_OPTIONS),
/* harmony export */   getInlineLabelStyles: () => (/* binding */ getInlineLabelStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/ConfigEditor/Auth/types.js");




const RADIO_BUTTON_OPTIONS = [
  { label: "Enabled", value: true },
  { label: "Disabled", value: false }
];
const AUTH_RADIO_BUTTON_OPTIONS = [
  { label: "No Authentication", value: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.NoAuth },
  { label: "Basic Authentication", value: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.BasicAuth },
  { label: "Forward OAuth Identity", value: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.AuthMethod.OAuthForward }
];
const CONFIG_SECTION_HEADERS = [
  { label: "URL and authentication", id: "url", isOpen: true, isOptional: false },
  { label: "Database settings", id: "db", isOpen: true, isOptional: false },
  { label: "Save & test", id: `${_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource.saveAndTest}`, isOpen: true, isOptional: null }
];
const CONFIG_SECTION_HEADERS_WITH_PDC = [
  { label: "URL and authentication", id: "url", isOpen: true, isOptional: false },
  { label: "Database settings", id: "db", isOpen: true, isOptional: false },
  { label: "Private data source connect", id: "pdc", isOpen: false, isOptional: true },
  { label: "Save & test", id: `${_grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.DataSource.saveAndTest}`, isOpen: true, isOptional: null }
];
const HTTP_MODES = [
  { label: "POST", value: "POST" },
  { label: "GET", value: "GET" }
];
const getInlineLabelStyles = (theme, transparent = false) => {
  return {
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexShrink: 0,
      padding: theme.spacing(0, 1),
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.size.md,
      backgroundColor: transparent ? "transparent" : theme.colors.background.secondary,
      height: theme.spacing(theme.components.height.md),
      lineHeight: theme.spacing(theme.components.height.md),
      marginRight: theme.spacing(0.5),
      borderRadius: theme.shape.radius.default,
      border: "none",
      width: "220px",
      color: theme.colors.text.primary
    })
  };
};
const CONTAINER_MIN_WIDTH = "450px";
const DB_SETTINGS_LABEL_WIDTH = 22;


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/tracking.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trackInfluxDBConfigV2AdvancedDbConnectionSettingsAutocompleteClicked: () => (/* binding */ trackInfluxDBConfigV2AdvancedDbConnectionSettingsAutocompleteClicked),
/* harmony export */   trackInfluxDBConfigV2AdvancedDbConnectionSettingsHTTPMethodClicked: () => (/* binding */ trackInfluxDBConfigV2AdvancedDbConnectionSettingsHTTPMethodClicked),
/* harmony export */   trackInfluxDBConfigV2AdvancedDbConnectionSettingsInsecureConnectClicked: () => (/* binding */ trackInfluxDBConfigV2AdvancedDbConnectionSettingsInsecureConnectClicked),
/* harmony export */   trackInfluxDBConfigV2AdvancedDbConnectionSettingsMaxSeriesClicked: () => (/* binding */ trackInfluxDBConfigV2AdvancedDbConnectionSettingsMaxSeriesClicked),
/* harmony export */   trackInfluxDBConfigV2AdvancedDbConnectionSettingsMinTimeClicked: () => (/* binding */ trackInfluxDBConfigV2AdvancedDbConnectionSettingsMinTimeClicked),
/* harmony export */   trackInfluxDBConfigV2AdvancedDbConnectionSettingsToggleClicked: () => (/* binding */ trackInfluxDBConfigV2AdvancedDbConnectionSettingsToggleClicked),
/* harmony export */   trackInfluxDBConfigV2AdvancedHTTPSettingsTimeoutField: () => (/* binding */ trackInfluxDBConfigV2AdvancedHTTPSettingsTimeoutField),
/* harmony export */   trackInfluxDBConfigV2AdvancedHTTPSettingsToggleClicked: () => (/* binding */ trackInfluxDBConfigV2AdvancedHTTPSettingsToggleClicked),
/* harmony export */   trackInfluxDBConfigV2AuthSettingsAuthMethodSelected: () => (/* binding */ trackInfluxDBConfigV2AuthSettingsAuthMethodSelected),
/* harmony export */   trackInfluxDBConfigV2AuthSettingsToggleClicked: () => (/* binding */ trackInfluxDBConfigV2AuthSettingsToggleClicked),
/* harmony export */   trackInfluxDBConfigV2FeedbackButtonClicked: () => (/* binding */ trackInfluxDBConfigV2FeedbackButtonClicked),
/* harmony export */   trackInfluxDBConfigV2FluxDBDetailsDefaultBucketInputField: () => (/* binding */ trackInfluxDBConfigV2FluxDBDetailsDefaultBucketInputField),
/* harmony export */   trackInfluxDBConfigV2FluxDBDetailsOrgInputField: () => (/* binding */ trackInfluxDBConfigV2FluxDBDetailsOrgInputField),
/* harmony export */   trackInfluxDBConfigV2FluxDBDetailsTokenInputField: () => (/* binding */ trackInfluxDBConfigV2FluxDBDetailsTokenInputField),
/* harmony export */   trackInfluxDBConfigV2InfluxQLDBDetailsDatabaseInputField: () => (/* binding */ trackInfluxDBConfigV2InfluxQLDBDetailsDatabaseInputField),
/* harmony export */   trackInfluxDBConfigV2InfluxQLDBDetailsPasswordInputField: () => (/* binding */ trackInfluxDBConfigV2InfluxQLDBDetailsPasswordInputField),
/* harmony export */   trackInfluxDBConfigV2InfluxQLDBDetailsUserInputField: () => (/* binding */ trackInfluxDBConfigV2InfluxQLDBDetailsUserInputField),
/* harmony export */   trackInfluxDBConfigV2ProductSelected: () => (/* binding */ trackInfluxDBConfigV2ProductSelected),
/* harmony export */   trackInfluxDBConfigV2QueryLanguageSelected: () => (/* binding */ trackInfluxDBConfigV2QueryLanguageSelected),
/* harmony export */   trackInfluxDBConfigV2SQLDBDetailsDatabaseInputField: () => (/* binding */ trackInfluxDBConfigV2SQLDBDetailsDatabaseInputField),
/* harmony export */   trackInfluxDBConfigV2SQLDBDetailsTokenInputField: () => (/* binding */ trackInfluxDBConfigV2SQLDBDetailsTokenInputField),
/* harmony export */   trackInfluxDBConfigV2URLInputField: () => (/* binding */ trackInfluxDBConfigV2URLInputField)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");


const trackInfluxDBConfigV2FeedbackButtonClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-feedback-button-clicked");
};
const trackInfluxDBConfigV2URLInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-url-input-field");
};
const trackInfluxDBConfigV2QueryLanguageSelected = (props) => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-query-language-dropdown", props);
};
const trackInfluxDBConfigV2ProductSelected = (props) => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-product-selection-dropdown", props);
};
const trackInfluxDBConfigV2FluxDBDetailsOrgInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-flux-dbdetails-org-input-field");
};
const trackInfluxDBConfigV2FluxDBDetailsDefaultBucketInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-flux-dbdetails-default-bucket-input-field");
};
const trackInfluxDBConfigV2FluxDBDetailsTokenInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-flux-dbdetails-token-input-field");
};
const trackInfluxDBConfigV2InfluxQLDBDetailsDatabaseInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-influxql-dbdetails-database-input-field");
};
const trackInfluxDBConfigV2InfluxQLDBDetailsUserInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-influxql-dbdetails-user-input-field");
};
const trackInfluxDBConfigV2InfluxQLDBDetailsPasswordInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-influxql-dbdetails-password-input-field");
};
const trackInfluxDBConfigV2SQLDBDetailsDatabaseInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-sql-dbdetails-database-input-field");
};
const trackInfluxDBConfigV2SQLDBDetailsTokenInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-sql-dbdetails-token-input-field");
};
const trackInfluxDBConfigV2AdvancedDbConnectionSettingsToggleClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanceddb-settings-toggle-clicked");
};
const trackInfluxDBConfigV2AdvancedDbConnectionSettingsHTTPMethodClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanceddb-settings-http-method-clicked");
};
const trackInfluxDBConfigV2AdvancedDbConnectionSettingsInsecureConnectClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanceddb-settings-insecure-connection-clicked");
};
const trackInfluxDBConfigV2AdvancedDbConnectionSettingsMinTimeClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanceddb-settings-min-time-clicked");
};
const trackInfluxDBConfigV2AdvancedDbConnectionSettingsAutocompleteClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanceddb-settings-autocomplete-range-clicked");
};
const trackInfluxDBConfigV2AdvancedDbConnectionSettingsMaxSeriesClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanceddb-settings-max-series-clicked");
};
const trackInfluxDBConfigV2AdvancedHTTPSettingsToggleClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanced-http-settings-toggle-clicked");
};
const trackInfluxDBConfigV2AdvancedHTTPSettingsTimeoutField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanced-http-settings-timeout-field");
};
const trackInfluxDBConfigV2AuthSettingsToggleClicked = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-auth-settings-toggle-clicked");
};
const trackInfluxDBConfigV2AuthSettingsAuthMethodSelected = (props) => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-config-v2-advanced-http-settings-timeout-field", props);
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config-v2/versions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INFLUXDB_VERSION_MAP: () => (/* binding */ INFLUXDB_VERSION_MAP)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");


const INFLUXDB_VERSION_MAP = [
  {
    name: "InfluxDB Cloud Dedicated",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.SQL, fields: ["Host", "Database", "Token"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["Host", "Database", "Token"] }
    ],
    detectionMethod: {
      urlContains: ["influxdb.io"]
    }
  },
  {
    name: "InfluxDB Cloud Serverless",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.SQL, fields: ["Host", "Bucket", "Token"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["Host", "Bucket", "Token"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.Flux, fields: ["Host", "Organization", "Token", "Default bucket"] }
    ],
    detectionMethod: {
      urlContains: ["us-east-1-1.aws.cloud2.influxdata.com", "eu-central-1-1.aws.cloud2.influxdata.com"]
    }
  },
  {
    name: "InfluxDB Clustered",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.SQL, fields: ["Host", "Database", "Token"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["URL", "Database", "Token"] }
    ],
    detectionMethod: {
      pingHeaderResponse: {
        "x-influxdb-version": "\\s*influxqlbridged-development"
      }
    }
  },
  {
    name: "InfluxDB Enterprise 1.x",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["URL", "Database", "User", "Password"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.Flux, fields: ["URL", "User", "Password", "Default database"] }
    ],
    detectionMethod: {
      pingHeaderResponse: {
        "x-influxdb-version": "^v?1\\.",
        "x-influxdb-build": "Enterprise"
      }
    }
  },
  {
    name: "InfluxDB Enterprise 3.x",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.SQL, fields: ["URL", "Token"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["URL", "Token"] }
    ],
    detectionMethod: {
      pingHeaderResponse: {
        "x-influxdb-version": "^v?3\\.",
        "x-influxdb-build": "Enterprise"
      }
    }
  },
  {
    name: "InfluxDB Cloud (TSM)",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["URL", "Database", "Token"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.Flux, fields: ["URL", "Organization", "Token", "Default bucket"] }
    ],
    detectionMethod: {
      urlContains: [
        "us-west-2-1.aws.cloud2.influxdata.com",
        "us-west-2-2.aws.cloud2.influxdata.com",
        "us-east-1-1.aws.cloud2.influxdata.com",
        "eu-central-1-1.aws.cloud2.influxdata.com",
        "us-central1-1.gcp.cloud2.influxdata.com",
        "westeurope-1.azure.cloud2.influxdata.com",
        "eastus-1.azure.cloud2.influxdata.com"
      ]
    }
  },
  {
    name: "InfluxDB Cloud 1",
    queryLanguages: [{ name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["URL", "Database", "Username", "Password"] }],
    detectionMethod: {
      urlContains: ["influxcloud.net"]
    }
  },
  {
    name: "InfluxDB OSS 1.x",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["URL", "Database", "Username", "Password"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.Flux, fields: ["URL", "Username", "Password", "Default database"] }
    ],
    detectionMethod: {
      pingHeaderResponse: {
        "x-influxdb-build": "OSS",
        "x-influxdb-version": "^v?1\\."
      }
    }
  },
  {
    name: "InfluxDB OSS 2.x",
    queryLanguages: [
      {
        name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL,
        fields: [
          "URL",
          "Database",
          { type: "Basic", fields: ["Username", "Password"] },
          { type: "Token", fields: ["Token"] }
        ]
      },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.Flux, fields: ["URL", "Token", "Default bucket"] }
    ],
    detectionMethod: {
      pingHeaderResponse: {
        "x-influxdb-build": "OSS",
        "x-influxdb-version": "^v?2\\."
      }
    }
  },
  {
    name: "InfluxDB OSS 3.x",
    queryLanguages: [
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.SQL, fields: ["URL", "Token"] },
      { name: _types__WEBPACK_IMPORTED_MODULE_0__.InfluxVersion.InfluxQL, fields: ["URL", "Token"] }
    ],
    detectionMethod: {
      pingHeaderResponse: {
        "x-influxdb-build": "OSS",
        "x-influxdb-version": "^v?3\\."
      }
    }
  }
];


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config/ConfigEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigEditor: () => (/* binding */ ConfigEditor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/DataSourceSettings/DataSourceHttpSettings.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _InfluxFluxConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/InfluxFluxConfig.tsx");
/* harmony import */ var _InfluxInfluxQLConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/InfluxInfluxQLConfig.tsx");
/* harmony import */ var _InfluxSQLConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/InfluxSQLConfig.tsx");
/* harmony import */ var _trackingv1__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/trackingv1.ts");













const versionMap = {
  [_types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.InfluxQL]: {
    label: "InfluxQL",
    value: _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.InfluxQL,
    description: "The InfluxDB SQL-like query language."
  },
  [_types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.SQL]: {
    label: "SQL",
    value: _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.SQL,
    description: "Native SQL language. Supported in InfluxDB 3.0"
  },
  [_types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.Flux]: {
    label: "Flux",
    value: _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.Flux,
    description: "Supported in InfluxDB 2.x and 1.8+"
  }
};
const versions = [
  versionMap[_types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.InfluxQL],
  versionMap[_types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.SQL],
  versionMap[_types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.Flux]
];
class ConfigEditor extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      maxSeries: ""
    };
    this.onVersionChanged = (selected) => {
      const { options, onOptionsChange } = this.props;
      if (selected.value) {
        (0,_trackingv1__WEBPACK_IMPORTED_MODULE_17__.trackInfluxDBConfigV1QueryLanguageSelection)({ version: selected.value });
      }
      const copy = {
        ...options,
        jsonData: {
          ...options.jsonData,
          version: selected.value
        }
      };
      if (selected.value === _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.Flux) {
        copy.access = "proxy";
        copy.basicAuth = true;
        copy.jsonData.httpMode = "POST";
        const { user, database, ...rest } = copy;
        onOptionsChange(rest);
      } else {
        onOptionsChange(copy);
      }
    };
    this.state.maxSeries = props.options.jsonData.maxSeries?.toString() || "";
    this.htmlPrefix = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("influxdb-config");
  }
  renderJsonDataOptions() {
    switch (this.props.options.jsonData.version) {
      case _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.InfluxQL:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxInfluxQLConfig__WEBPACK_IMPORTED_MODULE_15__.InfluxInfluxQLConfig, { ...this.props });
      case _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.Flux:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxFluxConfig__WEBPACK_IMPORTED_MODULE_14__.InfluxFluxConfig, { ...this.props });
      case _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.SQL:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxSQLConfig__WEBPACK_IMPORTED_MODULE_16__.InfluxSqlConfig, { ...this.props });
      default:
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxInfluxQLConfig__WEBPACK_IMPORTED_MODULE_15__.InfluxInfluxQLConfig, { ...this.props });
    }
  }
  render() {
    const { options, onOptionsChange } = this.props;
    const isDirectAccess = options.access === "direct";
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.FieldSet, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: "Query language" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
          {
            "aria-label": "Query language",
            className: "width-30",
            value: versionMap[options.jsonData.version ?? _types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.InfluxQL],
            options: versions,
            defaultValue: versionMap[_types__WEBPACK_IMPORTED_MODULE_13__.InfluxVersion.InfluxQL],
            onChange: this.onVersionChanged
          }
        ) })
      ] }),
      isDirectAccess && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { title: "Error", severity: "error", children: _constants__WEBPACK_IMPORTED_MODULE_12__.BROWSER_MODE_DISABLED_MESSAGE }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.DataSourceHttpSettings,
        {
          showAccessOptions: isDirectAccess,
          dataSourceConfig: options,
          defaultUrl: "http://localhost:8086",
          onChange: onOptionsChange,
          secureSocksDSProxyEnabled: _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.secureSocksDSProxyEnabled
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.FieldSet, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: "InfluxDB Details" }),
        this.renderJsonDataOptions(),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineField,
          {
            labelWidth: 20,
            label: "Max series",
            tooltip: "Limit the number of series/tables that Grafana will process. Lower this number to prevent abuse, and increase it if you have lots of small time series and not all are shown. Defaults to 1000.",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input,
              {
                placeholder: "1000",
                type: "number",
                className: "width-20",
                value: this.state.maxSeries,
                onChange: (event) => {
                  this.setState({ maxSeries: event.currentTarget.value });
                  const val = parseInt(event.currentTarget.value, 10);
                  (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.updateDatasourcePluginJsonDataOption)(this.props, "maxSeries", Number.isFinite(val) ? val : void 0);
                }
              }
            )
          }
        )
      ] })
    ] });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigEditor);


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config/InfluxFluxConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxFluxConfig: () => (/* binding */ InfluxFluxConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/constants.ts");
/* harmony import */ var _trackingv1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/trackingv1.ts");







const InfluxFluxConfig = (props) => {
  const {
    options: { jsonData, secureJsonData, secureJsonFields }
  } = props;
  const htmlPrefix = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("influxdb-flux-config");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { labelWidth: _constants__WEBPACK_IMPORTED_MODULE_7__.WIDTH_SHORT, label: "Organization", htmlFor: `${htmlPrefix}-org`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        id: `${htmlPrefix}-org`,
        className: "width-20",
        value: jsonData.organization || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(props, "organization"),
        onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_8__.trackInfluxDBConfigV1FluxOrgInputField
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { labelWidth: _constants__WEBPACK_IMPORTED_MODULE_7__.WIDTH_SHORT, label: "Token", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SecretInput,
      {
        isConfigured: Boolean(secureJsonFields && secureJsonFields.token),
        value: secureJsonData?.token || "",
        label: "Token",
        "aria-label": "Token",
        className: "width-20",
        onReset: () => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.updateDatasourcePluginResetOption)(props, "token"),
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceSecureJsonDataOption)(props, "token"),
        onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_8__.trackInfluxDBConfigV1FluxTokenInputField
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField, { labelWidth: _constants__WEBPACK_IMPORTED_MODULE_7__.WIDTH_SHORT, label: "Default Bucket", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
      {
        className: "width-20",
        placeholder: "default bucket",
        value: jsonData.defaultBucket || "",
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(props, "defaultBucket"),
        onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_8__.trackInfluxDBConfigV1FluxDefaultBucketInputField
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineField,
      {
        labelWidth: _constants__WEBPACK_IMPORTED_MODULE_7__.WIDTH_SHORT,
        label: "Min time interval",
        tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency,\n				for example 1m if your data is written every minute.",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Input,
          {
            className: "width-20",
            placeholder: "10s",
            value: jsonData.timeInterval || "",
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.onUpdateDatasourceJsonDataOption)(props, "timeInterval")
          }
        )
      }
    ) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config/InfluxInfluxQLConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxInfluxQLConfig: () => (/* binding */ InfluxInfluxQLConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/constants.ts");
/* harmony import */ var _trackingv1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/trackingv1.ts");








const httpModes = [
  { label: "GET", value: "GET" },
  { label: "POST", value: "POST" }
];
const InfluxInfluxQLConfig = (props) => {
  const { options, onOptionsChange } = props;
  const { database, jsonData, secureJsonData, secureJsonFields } = options;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  const htmlPrefix = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("influxdb-influxql-config");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { severity: "info", title: "Database Access", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { children: [
      "Setting the database for this datasource does not deny access to other databases. The InfluxDB query syntax allows switching the database in the query. For example:",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "SHOW MEASUREMENTS ON _internal" }),
      " or",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: 'SELECT * FROM "_internal".."database" LIMIT 10' }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      "To support data isolation and security, make sure appropriate permissions are configured in InfluxDB."
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { width: _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH_SHORT, children: "Database" }),
        className: styles.horizontalField,
        htmlFor: `${htmlPrefix}-db`,
        noMargin: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            id: `${htmlPrefix}-db`,
            className: "width-20",
            value: jsonData.dbName ?? database,
            onChange: (event) => {
              onOptionsChange({
                ...options,
                database: "",
                jsonData: {
                  ...jsonData,
                  dbName: event.currentTarget.value
                }
              });
            },
            onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_12__.trackInfluxDBConfigV1InfluxQLDatabaseInputField
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { width: _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH_SHORT, children: "User" }),
        className: styles.horizontalField,
        htmlFor: `${htmlPrefix}-user`,
        noMargin: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            id: `${htmlPrefix}-user`,
            className: "width-20",
            value: options.user || "",
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceOption)(props, "user"),
            onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_12__.trackInfluxDBConfigV1InfluxQLUserInputField
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { width: _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH_SHORT, children: "Password" }),
        className: styles.horizontalField,
        noMargin: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SecretInput,
          {
            isConfigured: Boolean(secureJsonFields && secureJsonFields.password),
            value: secureJsonData?.password || "",
            label: "Password",
            "aria-label": "Password",
            className: "width-20",
            onReset: () => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.updateDatasourcePluginResetOption)(props, "password"),
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceSecureJsonDataOption)(props, "password"),
            onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_12__.trackInfluxDBConfigV1InfluxQLPasswordInputField
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel,
          {
            width: _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH_SHORT,
            tooltip: "You can use either GET or POST HTTP method to query your InfluxDB database. The POST\n          method allows you to perform heavy requests (with a lots of WHERE clause) while the GET method\n          will restrict you and return an error if the query is too large.",
            children: "HTTP Method"
          }
        ),
        htmlFor: `${htmlPrefix}-http-method`,
        className: styles.horizontalField,
        noMargin: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Select,
          {
            inputId: `${htmlPrefix}-http-method`,
            className: "width-20",
            value: httpModes.find((httpMode) => httpMode.value === options.jsonData.httpMode),
            options: httpModes,
            defaultValue: options.jsonData.httpMode,
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOptionSelect)(props, "httpMode")
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel,
          {
            width: _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH_SHORT,
            tooltip: "A lower limit for the auto group by time interval. Recommended to be set to write frequency, for example 1m if your data is written every minute.",
            children: "Min time interval"
          }
        ),
        className: styles.horizontalField,
        noMargin: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            className: "width-20",
            placeholder: "10s",
            value: options.jsonData.timeInterval || "",
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOption)(props, "timeInterval")
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel,
          {
            width: _constants__WEBPACK_IMPORTED_MODULE_11__.WIDTH_SHORT,
            tooltip: "This time range is used in the query editor's autocomplete to reduce the execution time of tag filter queries.",
            children: "Autocomplete range"
          }
        ),
        className: styles.horizontalField,
        noMargin: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
          {
            className: "width-20",
            placeholder: "12h",
            value: options.jsonData.showTagTime || "",
            onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceJsonDataOption)(props, "showTagTime")
          }
        )
      }
    )
  ] });
};
const getStyles = (theme) => ({
  horizontalField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    justifyContent: "initial",
    margin: `0 ${theme.spacing(0.5)} ${theme.spacing(0.5)} 0`
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config/InfluxSQLConfig.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxSqlConfig: () => (/* binding */ InfluxSqlConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/datasource.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/SecretInput/SecretInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/constants.ts");
/* harmony import */ var _trackingv1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/trackingv1.ts");








const InfluxSqlConfig = (props) => {
  const { options, onOptionsChange } = props;
  const { jsonData, secureJsonData, secureJsonFields } = options;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const htmlPrefix = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)("influxdb-sql-config");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineLabel, { width: _constants__WEBPACK_IMPORTED_MODULE_10__.WIDTH_SHORT, children: "Database" }),
        className: styles.horizontalField,
        htmlFor: `${htmlPrefix}-dbName`,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
          {
            id: `${htmlPrefix}-dbName`,
            className: "width-20",
            "aria-label": "Database or bucket name",
            value: jsonData.dbName,
            onChange: (event) => {
              onOptionsChange({
                ...options,
                jsonData: {
                  ...jsonData,
                  dbName: event.currentTarget.value
                }
              });
            },
            onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_11__.trackInfluxDBConfigV1SQLDatabaseInputField
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field, { horizontal: true, label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineLabel, { width: _constants__WEBPACK_IMPORTED_MODULE_10__.WIDTH_SHORT, children: "Token" }), className: styles.horizontalField, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.SecretInput,
      {
        label: "Token",
        "aria-label": "Token",
        className: "width-20",
        value: secureJsonData?.token || "",
        onReset: () => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.updateDatasourcePluginResetOption)(props, "token"),
        onChange: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.onUpdateDatasourceSecureJsonDataOption)(props, "token"),
        isConfigured: Boolean(secureJsonFields && secureJsonFields.token),
        onBlur: _trackingv1__WEBPACK_IMPORTED_MODULE_11__.trackInfluxDBConfigV1SQLTokenInputField
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Field,
      {
        horizontal: true,
        label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineLabel, { width: _constants__WEBPACK_IMPORTED_MODULE_10__.WIDTH_SHORT, children: "Insecure Connection" }),
        className: styles.horizontalField,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineSwitch,
          {
            id: `${htmlPrefix}-insecure-grpc`,
            value: jsonData.insecureGrpc ?? false,
            onChange: (event) => {
              onOptionsChange({
                ...options,
                jsonData: {
                  ...jsonData,
                  insecureGrpc: event.currentTarget.checked
                }
              });
            }
          }
        )
      }
    )
  ] });
};
const getStyles = (theme) => ({
  horizontalField: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    justifyContent: "initial",
    margin: `0 ${theme.spacing(0.5)} ${theme.spacing(0.5)} 0`
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WIDTH_SHORT: () => (/* binding */ WIDTH_SHORT)
/* harmony export */ });

const WIDTH_SHORT = 20;


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/config/trackingv1.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   trackInfluxDBConfigV1FluxDefaultBucketInputField: () => (/* binding */ trackInfluxDBConfigV1FluxDefaultBucketInputField),
/* harmony export */   trackInfluxDBConfigV1FluxOrgInputField: () => (/* binding */ trackInfluxDBConfigV1FluxOrgInputField),
/* harmony export */   trackInfluxDBConfigV1FluxTokenInputField: () => (/* binding */ trackInfluxDBConfigV1FluxTokenInputField),
/* harmony export */   trackInfluxDBConfigV1InfluxQLDatabaseInputField: () => (/* binding */ trackInfluxDBConfigV1InfluxQLDatabaseInputField),
/* harmony export */   trackInfluxDBConfigV1InfluxQLPasswordInputField: () => (/* binding */ trackInfluxDBConfigV1InfluxQLPasswordInputField),
/* harmony export */   trackInfluxDBConfigV1InfluxQLUserInputField: () => (/* binding */ trackInfluxDBConfigV1InfluxQLUserInputField),
/* harmony export */   trackInfluxDBConfigV1QueryLanguageSelection: () => (/* binding */ trackInfluxDBConfigV1QueryLanguageSelection),
/* harmony export */   trackInfluxDBConfigV1SQLDatabaseInputField: () => (/* binding */ trackInfluxDBConfigV1SQLDatabaseInputField),
/* harmony export */   trackInfluxDBConfigV1SQLTokenInputField: () => (/* binding */ trackInfluxDBConfigV1SQLTokenInputField)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");


const trackInfluxDBConfigV1QueryLanguageSelection = (props) => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-query-language-dropdown", props);
};
const trackInfluxDBConfigV1FluxOrgInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-flux-dbdetails-organization-input-field");
};
const trackInfluxDBConfigV1FluxTokenInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-flux-dbdetails-token-input-field");
};
const trackInfluxDBConfigV1FluxDefaultBucketInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-flux-dbdetails-default-bucket-input-field");
};
const trackInfluxDBConfigV1InfluxQLDatabaseInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-influxql-dbdetails-database-input-field");
};
const trackInfluxDBConfigV1InfluxQLUserInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-influxql-dbdetails-user-input-field");
};
const trackInfluxDBConfigV1InfluxQLPasswordInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-influxql-dbdetails-password-input-field");
};
const trackInfluxDBConfigV1SQLDatabaseInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-sql-dbdetails-database-input-field");
};
const trackInfluxDBConfigV1SQLTokenInputField = () => {
  (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.reportInteraction)("influxdb-configv1-sql-dbdetails-token-input-field");
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_RESULT_FORMAT: () => (/* binding */ DEFAULT_RESULT_FORMAT),
/* harmony export */   RESULT_FORMATS: () => (/* binding */ RESULT_FORMATS)
/* harmony export */ });

const RESULT_FORMATS = [
  { label: "Time series", value: "time_series" },
  { label: "Table", value: "table" },
  { label: "Logs", value: "logs" }
];
const DEFAULT_RESULT_FORMAT = "time_series";


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _flux_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/flux/FluxQueryEditor.tsx");
/* harmony import */ var _fsql_FSQLEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/fsql/FSQLEditor.tsx");
/* harmony import */ var _influxql_QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/QueryEditorModeSwitcher.tsx");
/* harmony import */ var _influxql_code_RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/code/RawInfluxQLEditor.tsx");
/* harmony import */ var _influxql_visual_VisualInfluxQLEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/VisualInfluxQLEditor.tsx");










const QueryEditor = ({ query, onChange, onRunQuery, datasource }) => {
  switch (datasource.version) {
    case _types__WEBPACK_IMPORTED_MODULE_3__.InfluxVersion.Flux:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "gf-form-query-content", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_flux_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_4__.FluxQueryEditor, { query, onChange, datasource }) });
    case _types__WEBPACK_IMPORTED_MODULE_3__.InfluxVersion.SQL:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fsql_FSQLEditor__WEBPACK_IMPORTED_MODULE_5__.FSQLEditor, { datasource, query, onChange, onRunQuery });
    case _types__WEBPACK_IMPORTED_MODULE_3__.InfluxVersion.InfluxQL:
    default:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ display: "flex" }), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ flexGrow: 1 }), children: query.rawQuery ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_influxql_code_RawInfluxQLEditor__WEBPACK_IMPORTED_MODULE_7__.RawInfluxQLEditor, { query, onChange, onRunQuery }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_influxql_visual_VisualInfluxQLEditor__WEBPACK_IMPORTED_MODULE_8__.VisualInfluxQLEditor, { query, onChange, onRunQuery, datasource }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _influxql_QueryEditorModeSwitcher__WEBPACK_IMPORTED_MODULE_6__.QueryEditorModeSwitcher,
          {
            isRaw: query.rawQuery ?? false,
            onChange: (value) => {
              onChange({ ...query, query: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.buildRawQuery)(query), rawQuery: value });
              onRunQuery();
            }
          }
        )
      ] });
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/flux/FluxQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FluxQueryEditor: () => (/* binding */ FluxQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/types.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/Segment.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const samples = [
  { label: "Show buckets", description: "List the available buckets (table)", value: "buckets()" },
  {
    label: "Simple query",
    description: "filter by measurement and field",
    value: `from(bucket: "db/rp")
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> filter(fn: (r) =>
    r._measurement == "example-measurement" and
    r._field == "example-field"
  )`
  },
  {
    label: "Grouped Query",
    description: "Group by (min/max/sum/median)",
    value: `// v.windowPeriod is a variable referring to the current optimized window period (currently: $interval)
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_measurement"] == "measurement1" or r["_measurement"] =~ /^.*?regex.*$/)
  |> filter(fn: (r) => r["_field"] == "field2" or r["_field"] =~ /^.*?regex.*$/)
  |> aggregateWindow(every: v.windowPeriod, fn: mean|median|max|count|derivative|sum)
  |> yield(name: "some-name")`
  },
  {
    label: "Filter by value",
    description: "Results between a min/max",
    value: `// v.bucket, v.timeRangeStart, and v.timeRange stop are all variables supported by the flux plugin and influxdb
from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)
  |> filter(fn: (r) => r["_value"] >= 10 and r["_value"] <= 20)`
  },
  {
    label: "Schema Exploration: (measurements)",
    description: "Get a list of measurement using flux",
    value: `import "influxdata/influxdb/v1"
v1.measurements(bucket: v.bucket)`
  },
  {
    label: "Schema Exploration: (fields)",
    description: "Return every possible key in a single table",
    value: `from(bucket: v.bucket)
  |> range(start: v.timeRangeStart, stop:v.timeRangeStop)
  |> keys()
  |> keep(columns: ["_value"])
  |> group()
  |> distinct()`
  },
  {
    label: "Schema Exploration: (tag keys)",
    description: "Get a list of tag keys using flux",
    value: `import "influxdata/influxdb/v1"
v1.tagKeys(bucket: v.bucket)`
  },
  {
    label: "Schema Exploration: (tag values)",
    description: "Get a list of tag values using flux",
    value: `import "influxdata/influxdb/v1"
v1.tagValues(
    bucket: v.bucket,
    tag: "host",
    predicate: (r) => true,
    start: -1d
)`
  }
];
class UnthemedFluxQueryEditor extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.onFluxQueryChange = (query) => {
      this.props.onChange({ ...this.props.query, query });
    };
    this.onSampleChange = (val) => {
      this.props.onChange({
        ...this.props.query,
        query: val.value
      });
      this.forceUpdate();
    };
    this.getSuggestions = () => {
      const sugs = [
        {
          label: "v.timeRangeStart",
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditorSuggestionItemKind.Property,
          detail: "The start time"
        },
        {
          label: "v.timeRangeStop",
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditorSuggestionItemKind.Property,
          detail: "The stop time"
        },
        {
          label: "v.windowPeriod",
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditorSuggestionItemKind.Property,
          detail: "based on max data points"
        },
        {
          label: "v.defaultBucket",
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditorSuggestionItemKind.Property,
          detail: "bucket configured in the datsource"
        },
        {
          label: "v.organization",
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditorSuggestionItemKind.Property,
          detail: "org configured for the datsource"
        }
      ];
      const templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.getTemplateSrv)();
      templateSrv.getVariables().forEach((variable) => {
        const label = "${" + variable.name + "}";
        let val = templateSrv.replace(label);
        if (val === label) {
          val = "";
        }
        sugs.push({
          label,
          kind: _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditorSuggestionItemKind.Text,
          detail: `(Template Variable) ${val}`
        });
      });
      return sugs;
    };
    // For some reason in angular, when this component gets re-mounted, the width
    // is not set properly.  This forces the layout shortly after mount so that it
    // displays OK.  Note: this is not an issue when used directly in react
    this.editorDidMountCallbackHack = (editor) => {
      setTimeout(() => editor.layout(), 100);
    };
  }
  render() {
    const { query, theme } = this.props;
    const styles = getStyles(theme);
    const helpTooltip = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      "Type: ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { children: "ctrl+space" }),
      " to show template variable suggestions ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      "Many queries can be copied from Chronograf"
    ] });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.CodeEditor,
        {
          height: "100%",
          containerStyles: styles.editorContainerStyles,
          language: "sql",
          value: query.query || "",
          onBlur: this.onFluxQueryChange,
          onSave: this.onFluxQueryChange,
          showMiniMap: false,
          showLineNumbers: true,
          getSuggestions: this.getSuggestions,
          onEditorDidMount: this.editorDidMountCallbackHack
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("gf-form-inline", styles.editorActions), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton,
          {
            icon: "external-link-alt",
            variant: "secondary",
            target: "blank",
            href: "https://docs.influxdata.com/influxdb/latest/query-data/get-started/",
            children: "Flux language syntax"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Segment,
          {
            options: samples,
            value: "Sample query",
            onChange: this.onSampleChange,
            className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
              marginTop: theme.spacing(-0.5),
              marginLeft: theme.spacing(0.5)
            })
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "gf-form gf-form--grow", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "gf-form-label gf-form-label--grow" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineFormLabel, { width: 5, tooltip: helpTooltip, children: "Help" })
      ] })
    ] });
  }
}
const getStyles = (theme) => ({
  editorContainerStyles: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "200px",
    maxWidth: "100%",
    resize: "vertical",
    overflow: "auto",
    backgroundColor: theme.isDark ? theme.colors.background.canvas : theme.colors.background.primary,
    paddingBottom: theme.spacing(1)
  }),
  editorActions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginTop: "6px"
  })
});
const FluxQueryEditor = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.withTheme2)(UnthemedFluxQueryEditor);


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/fsql/FSQLEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FSQLEditor: () => (/* binding */ FSQLEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-sql/src/index.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/FormLabel/FormLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _fsql_datasource_flightsql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/fsql/datasource.flightsql.ts");






class UnthemedSQLQueryEditor extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor(props) {
    super(props);
    const { datasource: influxDatasource } = props;
    this.datasource = new _fsql_datasource_flightsql__WEBPACK_IMPORTED_MODULE_8__.FlightSQLDatasource(
      {
        url: influxDatasource.urls[0],
        access: influxDatasource.access,
        id: influxDatasource.id,
        jsonData: {
          // TODO Clean this
          allowCleartextPasswords: false,
          tlsAuth: false,
          tlsAuthWithCACert: false,
          tlsSkipVerify: false,
          maxIdleConns: 1,
          maxOpenConns: 1,
          maxIdleConnsAuto: true,
          connMaxLifetime: 1,
          timezone: "",
          user: "",
          database: "",
          url: influxDatasource.urls[0],
          timeInterval: ""
        },
        meta: influxDatasource.meta,
        name: influxDatasource.name,
        readOnly: false,
        type: influxDatasource.type,
        uid: influxDatasource.uid
      },
      influxDatasource.templateSrv
    );
  }
  transformQuery(query) {
    const defaultQuery = (0,_grafana_sql__WEBPACK_IMPORTED_MODULE_2__.applyQueryDefaults)(query);
    return {
      ...defaultQuery,
      dataset: "iox",
      sql: {
        ...defaultQuery.sql,
        limit: void 0
      }
    };
  }
  render() {
    const { query, onRunQuery, onChange } = this.props;
    const onRunSQLQuery = () => {
      return onRunQuery();
    };
    const onSQLChange = (query2) => {
      onChange({ ...query2 });
    };
    const helpTooltip = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      "Type: ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i", { children: "ctrl+space" }),
      " to show template variable suggestions ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
      "Many queries can be copied from Chronograf"
    ] });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_sql__WEBPACK_IMPORTED_MODULE_2__.SqlQueryEditorLazy,
        {
          datasource: this.datasource,
          query: this.transformQuery(query),
          onRunQuery: onRunSQLQuery,
          onChange: onSQLChange,
          queryHeaderProps: { dialect: "influx" }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Space, { v: 0.5 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { flex: 1, gap: 4, justifyContent: "space-between", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
          {
            icon: "external-link-alt",
            variant: "secondary",
            target: "blank",
            href: "https://docs.influxdata.com/influxdb/cloud-serverless/query-data/sql/",
            children: "SQL language syntax"
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineFormLabel, { width: 5, tooltip: helpTooltip, children: "Help" })
      ] })
    ] });
  }
}
const FSQLEditor = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.withTheme2)(UnthemedSQLQueryEditor);


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/InfluxCheatSheet.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxCheatSheet: () => (/* binding */ InfluxCheatSheet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const CHEAT_SHEET_ITEMS = [
  {
    title: "Getting started",
    label: "Start by selecting a measurement and field from the dropdown above. You can then use the tag selector to further narrow your search."
  }
];
const InfluxCheatSheet = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "InfluxDB Cheat Sheet" }),
    CHEAT_SHEET_ITEMS.map((item) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.cheatSheetItem, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.cheatSheetItemTitle, children: item.title }),
      item.label
    ] }, item.title))
  ] });
};
const getStyles = (theme) => ({
  cheatSheetItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(3, 0)
  }),
  cheatSheetItemTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.h3.fontSize
  })
});


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/InfluxStartPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxStartPage: () => (/* binding */ InfluxStartPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/InfluxCheatSheet.tsx");



function InfluxStartPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InfluxCheatSheet__WEBPACK_IMPORTED_MODULE_1__.InfluxCheatSheet, {});
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/QueryEditorModeSwitcher.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorModeSwitcher: () => (/* binding */ QueryEditorModeSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");




const QueryEditorModeSwitcher = ({ isRaw, onChange }) => {
  const [isModalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setModalOpen(false);
  }, [isRaw]);
  if (isRaw) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
        {
          "aria-label": "Switch to visual editor",
          icon: "pen",
          variant: "secondary",
          type: "button",
          onClick: () => {
            setModalOpen(true);
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.ConfirmModal,
        {
          isOpen: isModalOpen,
          title: "Switch to visual editor mode",
          body: "Are you sure to switch to visual editor mode? You will lose the changes done in raw query mode.",
          confirmText: "Yes, switch to editor mode",
          dismissText: "No, stay in raw query mode",
          onConfirm: () => {
            onChange(false);
          },
          onDismiss: () => {
            setModalOpen(false);
          }
        }
      )
    ] });
  } else {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button,
      {
        "aria-label": "Switch to text editor",
        icon: "pen",
        variant: "secondary",
        type: "button",
        onClick: () => {
          onChange(true);
        }
      }
    );
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/code/RawInfluxQLEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawInfluxQLEditor: () => (/* binding */ RawInfluxQLEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/constants.ts");
/* harmony import */ var _hooks_useShadowedState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/hooks/useShadowedState.ts");






const RawInfluxQLEditor = ({ query, onChange, onRunQuery }) => {
  const [currentQuery, setCurrentQuery] = (0,_hooks_useShadowedState__WEBPACK_IMPORTED_MODULE_8__.useShadowedState)(query.query);
  const [currentAlias, setCurrentAlias] = (0,_hooks_useShadowedState__WEBPACK_IMPORTED_MODULE_8__.useShadowedState)(query.alias);
  const aliasElementId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const selectElementId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const resultFormat = query.resultFormat ?? _constants__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_RESULT_FORMAT;
  const applyDelayedChangesAndRunQuery = () => {
    onChange({
      ...query,
      query: currentQuery,
      alias: currentAlias,
      resultFormat
    });
    onRunQuery();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { direction: "column", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextArea,
      {
        "aria-label": "query",
        rows: 3,
        spellCheck: false,
        placeholder: "InfluxDB Query",
        onBlur: applyDelayedChangesAndRunQuery,
        onChange: (e) => {
          setCurrentQuery(e.currentTarget.value);
        },
        value: currentQuery ?? ""
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Stack, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { htmlFor: selectElementId, label: "Format as", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Select,
        {
          inputId: selectElementId,
          onChange: (v) => {
            onChange({ ...query, resultFormat: v.value });
            onRunQuery();
          },
          value: resultFormat,
          options: _constants__WEBPACK_IMPORTED_MODULE_7__.RESULT_FORMATS
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { htmlFor: aliasElementId, label: "Alias by", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
        {
          id: aliasElementId,
          type: "text",
          spellCheck: false,
          placeholder: "Naming pattern",
          onBlur: applyDelayedChangesAndRunQuery,
          onChange: (e) => {
            setCurrentAlias(e.currentTarget.value);
          },
          value: currentAlias ?? ""
        }
      ) })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/hooks/useShadowedState.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useShadowedState: () => (/* binding */ useShadowedState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/usePrevious.js");



function useShadowedState(outsideVal) {
  const [currentVal, setCurrentVal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(outsideVal);
  const prevOutsideVal = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(outsideVal);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isOutsideValChanged = prevOutsideVal !== outsideVal;
    if (isOutsideValChanged && currentVal !== outsideVal) {
      setCurrentVal(outsideVal);
    }
  }, [outsideVal, currentVal, prevOutsideVal]);
  return [currentVal, setCurrentVal];
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/filterTags.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterTags: () => (/* binding */ filterTags)
/* harmony export */ });

function filterTags(parts, allTagKeys) {
  return parts.filter((t) => t.key.endsWith("::tag") || allTagKeys.has(t.key + "::tag"));
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/getTemplateVariableOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTemplateVariableOptions: () => (/* binding */ getTemplateVariableOptions)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");


function getTemplateVariableOptions(wrapper) {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getTemplateSrv)().getVariables().map(wrapper);
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/partListUtils.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getNewGroupByPartOptions: () => (/* binding */ getNewGroupByPartOptions),
/* harmony export */   getNewSelectPartOptions: () => (/* binding */ getNewSelectPartOptions),
/* harmony export */   makePartList: () => (/* binding */ makePartList)
/* harmony export */ });
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var _toSelectableValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/toSelectableValue.ts");
/* harmony import */ var _unwrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/unwrap.ts");





function getNewSelectPartOptions() {
  const categories = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].getCategories();
  const options = [];
  const keys = Object.keys(categories);
  keys.forEach((key) => {
    const children = categories[key].map((x) => (0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)(x.type));
    options.push({
      label: key,
      options: children
    });
  });
  return options;
}
async function getNewGroupByPartOptions(query, getTagKeys) {
  const tagKeys = await getTagKeys();
  const queryCopy = { ...query };
  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_0__["default"](queryCopy);
  const options = [];
  if (!model.hasFill()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)("fill(null)"));
  }
  if (!model.hasGroupByTime()) {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)("time($interval)"));
  }
  tagKeys.forEach((key) => {
    options.push((0,_toSelectableValue__WEBPACK_IMPORTED_MODULE_2__.toSelectableValue)(`tag(${key})`));
  });
  return options;
}
function getPartParams(part, dynamicParamOptions) {
  const def = _query_part__WEBPACK_IMPORTED_MODULE_1__["default"].create(part).def;
  const paramValues = (part.params ?? []).map((p) => p.toString());
  if (paramValues.length !== def.params.length) {
    throw new Error("Invalid query-segment");
  }
  return paramValues.map((val, index) => {
    const defParam = def.params[index];
    if (defParam.dynamicLookup) {
      return {
        value: val,
        options: (0,_unwrap__WEBPACK_IMPORTED_MODULE_3__.unwrap)(dynamicParamOptions.get(`${def.type}_${index}`))
      };
    }
    if (defParam.options != null) {
      return {
        value: val,
        options: () => Promise.resolve(defParam.options)
      };
    }
    return {
      value: val,
      options: null
    };
  });
}
function makePartList(queryParts, dynamicParamOptions) {
  return queryParts.map((qp) => {
    return {
      name: qp.type,
      params: getPartParams(qp, dynamicParamOptions)
    };
  });
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/tagUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustOperatorIfNeeded: () => (/* binding */ adjustOperatorIfNeeded),
/* harmony export */   getCondition: () => (/* binding */ getCondition),
/* harmony export */   getOperator: () => (/* binding */ getOperator)
/* harmony export */ });

function isRegex(text) {
  return /^\/.*\/$/.test(text);
}
function getOperator(tag) {
  return tag.operator ?? (isRegex(tag.value) ? "=~" : "=");
}
function getCondition(tag, isFirst) {
  return isFirst ? void 0 : tag.condition ?? "AND";
}
function adjustOperatorIfNeeded(currentOperator, newTagValue) {
  const isCurrentOperatorRegex = currentOperator === "=~" || currentOperator === "!~";
  const isNewTagValueRegex = isRegex(newTagValue);
  if (isNewTagValueRegex) {
    return isCurrentOperatorRegex ? currentOperator : "=~";
  } else {
    return isCurrentOperatorRegex ? "=" : currentOperator;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/toSelectableValue.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toSelectableValue: () => (/* binding */ toSelectableValue)
/* harmony export */ });

function toSelectableValue(t) {
  return { label: t, value: t };
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/unwrap.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unwrap: () => (/* binding */ unwrap)
/* harmony export */ });

function unwrap(value) {
  if (value == null) {
    throw new Error("value must not be nullish");
  }
  return value;
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/withTemplateVariableOptions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withTemplateVariableOptions: () => (/* binding */ withTemplateVariableOptions)
/* harmony export */ });
/* harmony import */ var _getTemplateVariableOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/getTemplateVariableOptions.ts");


function withTemplateVariableOptions(optionsPromise, wrapper, filter) {
  let templateVariableOptions = (0,_getTemplateVariableOptions__WEBPACK_IMPORTED_MODULE_0__.getTemplateVariableOptions)(wrapper);
  if (filter) {
    templateVariableOptions = templateVariableOptions.filter((tvo) => tvo.indexOf(filter) > -1);
  }
  return optionsPromise.then((options) => [...templateVariableOptions, ...options]);
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/wrapper.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wrapPure: () => (/* binding */ wrapPure),
/* harmony export */   wrapRegex: () => (/* binding */ wrapRegex)
/* harmony export */ });

function wrapRegex(v) {
  return `/^$${v.name}$/`;
}
function wrapPure(v) {
  return `$${v.name}`;
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/AddButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddButton: () => (/* binding */ AddButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _utils_unwrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/unwrap.ts");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/Seg.tsx");




const AddButton = ({ loadOptions, allowCustomValue, onAdd }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _Seg__WEBPACK_IMPORTED_MODULE_2__.Seg,
    {
      value: "+",
      loadOptions,
      allowCustomValue,
      onChange: (v) => {
        onAdd((0,_utils_unwrap__WEBPACK_IMPORTED_MODULE_1__.unwrap)(v.value));
      }
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/FormatAsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormatAsSection: () => (/* binding */ FormatAsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/constants.ts");
/* harmony import */ var _utils_unwrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/unwrap.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/styles.ts");







const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("width-8", _styles__WEBPACK_IMPORTED_MODULE_5__.paddingRightClass);
const FormatAsSection = ({ format, inputId, onChange }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select,
    {
      inputId,
      className,
      onChange: (v) => {
        onChange((0,_utils_unwrap__WEBPACK_IMPORTED_MODULE_4__.unwrap)(v.value));
      },
      value: format,
      options: _constants__WEBPACK_IMPORTED_MODULE_3__.RESULT_FORMATS
    }
  );
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/FromSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FromSection: () => (/* binding */ FromSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/toSelectableValue.ts");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/Seg.tsx");






const FromSection = ({
  policy,
  measurement,
  onChange,
  getPolicyOptions,
  getMeasurementOptions
}) => {
  const handlePolicyLoadOptions = async () => {
    const allPolicies = await getPolicyOptions();
    const allPoliciesWithDefault = allPolicies.some((p) => p === _types__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POLICY) ? allPolicies : [_types__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POLICY, ...allPolicies];
    return allPoliciesWithDefault.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue);
  };
  const handleMeasurementLoadOptions = async (filter) => {
    const allMeasurements = await getMeasurementOptions(filter);
    return allMeasurements.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Seg__WEBPACK_IMPORTED_MODULE_4__.Seg,
      {
        allowCustomValue: true,
        value: policy ?? "using default policy",
        loadOptions: handlePolicyLoadOptions,
        onChange: (v) => {
          onChange(v.value, measurement);
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Seg__WEBPACK_IMPORTED_MODULE_4__.Seg,
      {
        allowCustomValue: true,
        value: measurement ?? "select measurement",
        loadOptions: handleMeasurementLoadOptions,
        filterByLoadOptions: true,
        onChange: (v) => {
          onChange(policy, v.value);
        }
      }
    ),
    measurement && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.AccessoryButton,
      {
        style: { marginRight: "4px" },
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: () => {
          onChange(policy, void 0);
        }
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/InputSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputSection: () => (/* binding */ InputSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _hooks_useShadowedState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/hooks/useShadowedState.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/styles.ts");






const InputSection = ({ value, onChange, isWide, placeholder }) => {
  const [currentValue, setCurrentValue] = (0,_hooks_useShadowedState__WEBPACK_IMPORTED_MODULE_3__.useShadowedState)(value);
  const onBlur = () => {
    const newValue = currentValue === "" ? void 0 : currentValue;
    onChange(newValue);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Input,
    {
      placeholder,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(isWide ?? false ? "width-14" : "width-8", _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass),
      type: "text",
      spellCheck: false,
      onBlur,
      onChange: (e) => {
        setCurrentValue(e.currentTarget.value);
      },
      value: currentValue ?? ""
    }
  ) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/OrderByTimeSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderByTimeSection: () => (/* binding */ OrderByTimeSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _utils_unwrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/unwrap.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/styles.ts");






const OPTIONS = [
  { label: "ascending", value: "ASC" },
  { label: "descending", value: "DESC" }
];
const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("width-9", _styles__WEBPACK_IMPORTED_MODULE_4__.paddingRightClass);
const OrderByTimeSection = ({ value, onChange, inputId }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Select,
    {
      inputId,
      className,
      onChange: (v) => {
        onChange((0,_utils_unwrap__WEBPACK_IMPORTED_MODULE_3__.unwrap)(v.value));
      },
      value,
      options: OPTIONS
    }
  ) });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/PartListSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartListSection: () => (/* binding */ PartListSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/toSelectableValue.ts");
/* harmony import */ var _utils_unwrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/unwrap.ts");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/AddButton.tsx");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/Seg.tsx");










const noRightMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  paddingRight: "0",
  marginRight: "0"
});
const noHorizMarginPaddingClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  paddingLeft: "0",
  paddingRight: "0",
  marginLeft: "0",
  marginRight: "0"
});
const getPartClass = (theme) => {
  return (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
    "gf-form-label",
    (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      paddingLeft: "0",
      // gf-form-label class makes certain css attributes incorrect
      // for the selectbox-dropdown, so we have to "reset" them back
      lineHeight: theme.typography.body.lineHeight,
      fontSize: theme.typography.body.fontSize
    })
  );
};
const Part = ({ name, params, onChange }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const partClass = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => getPartClass(theme), [theme]);
  const onParamChange = (par, i) => {
    const newParams = params.map((p) => p.value);
    newParams[i] = par;
    onChange(newParams);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: partClass, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("gf-form-label", noRightMarginPaddingClass), children: name }),
    "(",
    params.map((p, i) => {
      const { value, options } = p;
      const isLast = i === params.length - 1;
      const loadOptions = options !== null ? () => options().then((items) => items.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_5__.toSelectableValue)) : void 0;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _Seg__WEBPACK_IMPORTED_MODULE_8__.Seg,
          {
            allowCustomValue: true,
            value,
            buttonClassName: noHorizMarginPaddingClass,
            loadOptions,
            onChange: (v) => {
              onParamChange((0,_utils_unwrap__WEBPACK_IMPORTED_MODULE_6__.unwrap)(v.value), i);
            }
          }
        ),
        !isLast && ","
      ] }, i);
    }),
    ")"
  ] });
};
const PartListSection = ({
  parts,
  getNewPartOptions,
  onAddNewPart,
  onRemovePart,
  onChange
}) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    parts.map((part, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Part,
        {
          name: part.name,
          params: part.params,
          onRemove: () => {
            onRemovePart(index);
          },
          onChange: (pars) => {
            onChange(index, pars);
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.AccessoryButton,
        {
          style: { marginRight: "4px" },
          "aria-label": "remove",
          icon: "times",
          variant: "secondary",
          onClick: () => {
            onRemovePart(index);
          }
        }
      )
    ] }, index)),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddButton__WEBPACK_IMPORTED_MODULE_7__.AddButton, { loadOptions: getNewPartOptions, onAdd: onAddNewPart })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/Seg.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Seg: () => (/* binding */ Seg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _hooks_useShadowedState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/hooks/useShadowedState.ts");








const selectClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  minWidth: "160px"
});
const formatCreateLabel = (v) => v;
const SelReload = ({ loadOptions, allowCustomValue, onChange, onClose }) => {
  const debouncedLoadOptions = debounce_promise__WEBPACK_IMPORTED_MODULE_2___default()(loadOptions, 1e3, { leading: true });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: selectClass, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.AsyncSelect,
    {
      formatCreateLabel,
      defaultOptions: true,
      autoFocus: true,
      isOpen: true,
      onCloseMenu: onClose,
      allowCustomValue,
      loadOptions: debouncedLoadOptions,
      onChange,
      createOptionPosition: "first"
    }
  ) });
};
const SelSingleLoad = ({ loadOptions, allowCustomValue, onChange, onClose }) => {
  const [loadState, doLoad] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(loadOptions, [loadOptions]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    doLoad("");
  }, [doLoad, loadOptions]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: selectClass, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Select,
    {
      isLoading: loadState.loading,
      formatCreateLabel,
      autoFocus: true,
      isOpen: !loadState.loading,
      onCloseMenu: onClose,
      allowCustomValue,
      options: loadState.value ?? [],
      onChange,
      createOptionPosition: "first"
    }
  ) });
};
const Sel = ({ loadOptions, filterByLoadOptions, allowCustomValue, onChange, onClose }) => {
  return filterByLoadOptions ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelReload, { loadOptions, allowCustomValue, onChange, onClose }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    SelSingleLoad,
    {
      loadOptions,
      allowCustomValue,
      onChange,
      onClose
    }
  );
};
const Inp = ({ initialValue, onChange, onClose }) => {
  const [currentValue, setCurrentValue] = (0,_hooks_useShadowedState__WEBPACK_IMPORTED_MODULE_8__.useShadowedState)(initialValue);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
    {
      autoFocus: true,
      type: "text",
      spellCheck: false,
      onBlur: onClose,
      onKeyDown: (e) => {
        if (e.key === "Enter") {
          onChange(currentValue);
        }
      },
      onChange: (e) => {
        setCurrentValue(e.currentTarget.value);
      },
      value: currentValue
    }
  );
};
const defaultButtonClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  width: "auto",
  cursor: "pointer"
});
const Seg = ({
  value,
  buttonClassName,
  loadOptions,
  filterByLoadOptions,
  allowCustomValue,
  onChange
}) => {
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  if (!isOpen) {
    const className = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(defaultButtonClass, buttonClassName);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineLabel,
      {
        as: "button",
        className,
        onClick: () => {
          setOpen(true);
        },
        children: value
      }
    );
  } else {
    if (loadOptions !== void 0) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Sel,
        {
          loadOptions,
          filterByLoadOptions: filterByLoadOptions ?? false,
          allowCustomValue,
          onChange: (v) => {
            setOpen(false);
            onChange(v);
          },
          onClose: () => {
            setOpen(false);
          }
        }
      );
    } else {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        Inp,
        {
          initialValue: value,
          onClose: () => {
            setOpen(false);
          },
          onChange: (v) => {
            setOpen(false);
            onChange({ value: v, label: v });
          }
        }
      );
    }
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/TagsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagsSection: () => (/* binding */ TagsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _utils_tagUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/tagUtils.ts");
/* harmony import */ var _utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/toSelectableValue.ts");
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/AddButton.tsx");
/* harmony import */ var _Seg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/Seg.tsx");







const knownOperators = ["=", "!=", "<>", "<", ">", ">=", "<=", "=~", "!~", "Is", "Is Not"];
const knownConditions = ["AND", "OR"];
const operatorOptions = knownOperators.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue);
const condititonOptions = knownConditions.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue);
const loadConditionOptions = () => Promise.resolve(condititonOptions);
const loadOperatorOptions = () => Promise.resolve(operatorOptions);
const Tag = ({ tag, isFirst, onRemove, onChange, getTagKeyOptions, getTagValueOptions }) => {
  const operator = (0,_utils_tagUtils__WEBPACK_IMPORTED_MODULE_2__.getOperator)(tag);
  const condition = (0,_utils_tagUtils__WEBPACK_IMPORTED_MODULE_2__.getCondition)(tag, isFirst);
  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().catch((err) => {
      console.error(err);
      return [];
    }).then((tags) => tags.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue));
  };
  const getTagValueSegmentOptions = () => {
    return getTagValueOptions(tag.key).then((tags) => tags.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "gf-form", children: [
    condition != null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Seg__WEBPACK_IMPORTED_MODULE_5__.Seg,
      {
        value: condition,
        loadOptions: loadConditionOptions,
        onChange: (v) => {
          onChange({ ...tag, condition: v.value });
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Seg__WEBPACK_IMPORTED_MODULE_5__.Seg,
      {
        allowCustomValue: true,
        value: tag.key,
        loadOptions: getTagKeySegmentOptions,
        onChange: (v) => {
          const { value } = v;
          if (value === void 0) {
            onRemove();
          } else {
            onChange({ ...tag, key: value ?? "" });
          }
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Seg__WEBPACK_IMPORTED_MODULE_5__.Seg,
      {
        value: operator,
        loadOptions: loadOperatorOptions,
        onChange: (op) => {
          onChange({ ...tag, operator: op.value });
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Seg__WEBPACK_IMPORTED_MODULE_5__.Seg,
      {
        allowCustomValue: true,
        value: tag.value,
        loadOptions: getTagValueSegmentOptions,
        onChange: (v) => {
          const value = v.value ?? "";
          onChange({ ...tag, value, operator: (0,_utils_tagUtils__WEBPACK_IMPORTED_MODULE_2__.adjustOperatorIfNeeded)(operator, value) });
        }
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.AccessoryButton,
      {
        style: { marginRight: "4px" },
        "aria-label": "remove",
        icon: "times",
        variant: "secondary",
        onClick: () => {
          onRemove();
        }
      }
    )
  ] });
};
const TagsSection = ({ tags, onChange, getTagKeyOptions, getTagValueOptions }) => {
  const onTagChange = (newTag, index) => {
    const newTags = tags.map((tag, i) => {
      return index === i ? newTag : tag;
    });
    onChange(newTags);
  };
  const onTagRemove = (index) => {
    const newTags = tags.filter((t, i) => i !== index);
    onChange(newTags);
  };
  const getTagKeySegmentOptions = () => {
    return getTagKeyOptions().then((tags2) => tags2.map(_utils_toSelectableValue__WEBPACK_IMPORTED_MODULE_3__.toSelectableValue));
  };
  const addNewTag = (tagKey, isFirst) => {
    const minimalTag = {
      key: tagKey,
      value: "select tag value"
    };
    const newTag = {
      key: minimalTag.key,
      value: minimalTag.value,
      operator: (0,_utils_tagUtils__WEBPACK_IMPORTED_MODULE_2__.getOperator)(minimalTag),
      condition: (0,_utils_tagUtils__WEBPACK_IMPORTED_MODULE_2__.getCondition)(minimalTag, isFirst)
    };
    onChange([...tags, newTag]);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    tags.map((t, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      Tag,
      {
        tag: t,
        isFirst: i === 0,
        onChange: (newT) => {
          onTagChange(newT, i);
        },
        onRemove: () => {
          onTagRemove(i);
        },
        getTagKeyOptions,
        getTagValueOptions
      },
      i
    )),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _AddButton__WEBPACK_IMPORTED_MODULE_4__.AddButton,
      {
        allowCustomValue: true,
        loadOptions: getTagKeySegmentOptions,
        onAdd: (v) => {
          addNewTag(v, tags.length === 0);
        }
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/VisualInfluxQLEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualInfluxQLEditor: () => (/* binding */ VisualInfluxQLEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Segment/SegmentSection.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _influxql_metadata_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influxql_metadata_query.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/constants.ts");
/* harmony import */ var _utils_filterTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/filterTags.ts");
/* harmony import */ var _utils_partListUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/partListUtils.tsx");
/* harmony import */ var _utils_withTemplateVariableOptions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/withTemplateVariableOptions.ts");
/* harmony import */ var _utils_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/utils/wrapper.ts");
/* harmony import */ var _FormatAsSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/FormatAsSection.tsx");
/* harmony import */ var _FromSection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/FromSection.tsx");
/* harmony import */ var _InputSection__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/InputSection.tsx");
/* harmony import */ var _OrderByTimeSection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/OrderByTimeSection.tsx");
/* harmony import */ var _PartListSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/PartListSection.tsx");
/* harmony import */ var _TagsSection__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/TagsSection.tsx");


















const VisualInfluxQLEditor = (props) => {
  const uniqueId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const formatAsId = `influxdb-qe-format-as-${uniqueId}`;
  const orderByTimeId = `influxdb-qe-order-by${uniqueId}`;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const query = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_7__.normalizeQuery)(props.query);
  const { datasource } = props;
  const { measurement, policy } = query;
  const allTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(async () => {
    const tagKeys = (await (0,_influxql_metadata_query__WEBPACK_IMPORTED_MODULE_6__.getTagKeys)(datasource, measurement, policy)).map((tag) => `${tag}::tag`);
    const fieldKeys = (await (0,_influxql_metadata_query__WEBPACK_IMPORTED_MODULE_6__.getFieldKeys)(datasource, measurement || "", policy)).map((field) => `${field}::field`);
    return /* @__PURE__ */ new Set([...tagKeys, ...fieldKeys]);
  }, [measurement, policy, datasource]);
  const selectLists = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const dynamicSelectPartOptions = /* @__PURE__ */ new Map([
      [
        "field_0",
        () => {
          return measurement !== void 0 ? (0,_influxql_metadata_query__WEBPACK_IMPORTED_MODULE_6__.getFieldKeys)(datasource, measurement, policy) : Promise.resolve([]);
        }
      ]
    ]);
    return (query.select ?? []).map((sel) => (0,_utils_partListUtils__WEBPACK_IMPORTED_MODULE_10__.makePartList)(sel, dynamicSelectPartOptions));
  }, [measurement, policy, query.select, datasource]);
  const getMemoizedTagKeys = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => async () => {
      return [...await allTagKeys];
    },
    [allTagKeys]
  );
  const groupByList = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const dynamicGroupByPartOptions = /* @__PURE__ */ new Map([["tag_0", getMemoizedTagKeys]]);
    return (0,_utils_partListUtils__WEBPACK_IMPORTED_MODULE_10__.makePartList)(query.groupBy ?? [], dynamicGroupByPartOptions);
  }, [getMemoizedTagKeys, query.groupBy]);
  const onAppliedChange = (newQuery) => {
    props.onChange(newQuery);
    props.onRunQuery();
  };
  const handleFromSectionChange = (p, m) => {
    onAppliedChange({
      ...query,
      policy: p,
      measurement: m
    });
  };
  const handleTagsSectionChange = (tags) => {
    onAppliedChange({
      ...query,
      tags: tags.length === 0 ? void 0 : tags
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { label: "FROM", fill: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _FromSection__WEBPACK_IMPORTED_MODULE_14__.FromSection,
        {
          policy,
          measurement,
          getPolicyOptions: () => (0,_utils_withTemplateVariableOptions__WEBPACK_IMPORTED_MODULE_11__.withTemplateVariableOptions)((0,_influxql_metadata_query__WEBPACK_IMPORTED_MODULE_6__.getAllPolicies)(datasource), _utils_wrapper__WEBPACK_IMPORTED_MODULE_12__.wrapPure),
          getMeasurementOptions: (filter) => (0,_utils_withTemplateVariableOptions__WEBPACK_IMPORTED_MODULE_11__.withTemplateVariableOptions)(
            allTagKeys.then(
              (keys) => (0,_influxql_metadata_query__WEBPACK_IMPORTED_MODULE_6__.getAllMeasurements)(datasource, (0,_utils_filterTags__WEBPACK_IMPORTED_MODULE_9__.filterTags)(query.tags ?? [], keys), filter === "" ? void 0 : filter)
            ),
            _utils_wrapper__WEBPACK_IMPORTED_MODULE_12__.wrapRegex,
            filter
          ),
          onChange: handleFromSectionChange
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, { width: "auto", className: styles.inlineLabel, children: "WHERE" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _TagsSection__WEBPACK_IMPORTED_MODULE_18__.TagsSection,
        {
          tags: query.tags ?? [],
          onChange: handleTagsSectionChange,
          getTagKeyOptions: getMemoizedTagKeys,
          getTagValueOptions: (key) => (0,_utils_withTemplateVariableOptions__WEBPACK_IMPORTED_MODULE_11__.withTemplateVariableOptions)(
            allTagKeys.then((keys) => (0,_influxql_metadata_query__WEBPACK_IMPORTED_MODULE_6__.getTagValues)(datasource, (0,_utils_filterTags__WEBPACK_IMPORTED_MODULE_9__.filterTags)(query.tags ?? [], keys), key, measurement)),
            _utils_wrapper__WEBPACK_IMPORTED_MODULE_12__.wrapRegex
          )
        }
      )
    ] }),
    selectLists.map((sel, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { label: index === 0 ? "SELECT" : "", fill: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _PartListSection__WEBPACK_IMPORTED_MODULE_17__.PartListSection,
      {
        parts: sel,
        getNewPartOptions: () => Promise.resolve((0,_utils_partListUtils__WEBPACK_IMPORTED_MODULE_10__.getNewSelectPartOptions)()),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_7__.changeSelectPart)(query, index, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: (type) => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_7__.addNewSelectPart)(query, type, index));
        },
        onRemovePart: (partIndex) => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_7__.removeSelectPart)(query, partIndex, index));
        }
      }
    ) }, index)),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { label: "GROUP BY", fill: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _PartListSection__WEBPACK_IMPORTED_MODULE_17__.PartListSection,
      {
        parts: groupByList,
        getNewPartOptions: () => (0,_utils_partListUtils__WEBPACK_IMPORTED_MODULE_10__.getNewGroupByPartOptions)(query, getMemoizedTagKeys),
        onChange: (partIndex, newParams) => {
          const newQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_7__.changeGroupByPart)(query, partIndex, newParams);
          onAppliedChange(newQuery);
        },
        onAddNewPart: (type) => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_7__.addNewGroupByPart)(query, type));
        },
        onRemovePart: (partIndex) => {
          onAppliedChange((0,_queryUtils__WEBPACK_IMPORTED_MODULE_7__.removeGroupByPart)(query, partIndex));
        }
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { label: "TIMEZONE", fill: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _InputSection__WEBPACK_IMPORTED_MODULE_15__.InputSection,
        {
          placeholder: "(optional)",
          value: query.tz,
          onChange: (tz) => {
            onAppliedChange({ ...query, tz });
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, { htmlFor: orderByTimeId, width: "auto", className: styles.inlineLabel, children: "ORDER BY TIME" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _OrderByTimeSection__WEBPACK_IMPORTED_MODULE_16__.OrderByTimeSection,
        {
          inputId: orderByTimeId,
          value: query.orderByTime === "DESC" ? "DESC" : "ASC",
          onChange: (v) => {
            onAppliedChange({ ...query, orderByTime: v });
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { label: "LIMIT", fill: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _InputSection__WEBPACK_IMPORTED_MODULE_15__.InputSection,
        {
          placeholder: "(optional)",
          value: query.limit?.toString(),
          onChange: (limit) => {
            onAppliedChange({ ...query, limit });
          }
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, { width: "auto", className: styles.inlineLabel, children: "SLIMIT" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _InputSection__WEBPACK_IMPORTED_MODULE_15__.InputSection,
        {
          placeholder: "(optional)",
          value: query.slimit?.toString(),
          onChange: (slimit) => {
            onAppliedChange({ ...query, slimit });
          }
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.SegmentSection, { htmlFor: formatAsId, label: "FORMAT AS", fill: true, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _FormatAsSection__WEBPACK_IMPORTED_MODULE_13__.FormatAsSection,
        {
          inputId: formatAsId,
          format: query.resultFormat ?? _constants__WEBPACK_IMPORTED_MODULE_8__.DEFAULT_RESULT_FORMAT,
          onChange: (format) => {
            onAppliedChange({ ...query, resultFormat: format });
          }
        }
      ),
      query.resultFormat !== "table" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineLabel, { width: "auto", className: styles.inlineLabel, children: "ALIAS" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _InputSection__WEBPACK_IMPORTED_MODULE_15__.InputSection,
          {
            isWide: true,
            placeholder: "Naming pattern",
            value: query.alias,
            onChange: (alias) => {
              onAppliedChange({ ...query, alias });
            }
          }
        )
      ] })
    ] })
  ] });
};
function getStyles(theme) {
  return {
    inlineLabel: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.primary.text
    })
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/query/influxql/visual/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   paddingRightClass: () => (/* binding */ paddingRightClass)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");


const paddingRightClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
  paddingRight: "4px"
});


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/components/editor/variable/VariableQueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxVariableEditor: () => (/* binding */ InfluxVariableEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/TextArea/TextArea.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _query_flux_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/flux/FluxQueryEditor.tsx");





const refId = "InfluxVariableQueryEditor-VariableQuery";
const InfluxVariableEditor = ({ onChange, datasource, query }) => {
  const getVariableQuery = (q) => {
    if (typeof q !== "string") {
      return q;
    }
    return {
      refId,
      query: q,
      ...datasource.version === _types__WEBPACK_IMPORTED_MODULE_5__.InfluxVersion.Flux ? { maxDataPoints: 1e3 } : {}
    };
  };
  switch (datasource.version) {
    case _types__WEBPACK_IMPORTED_MODULE_5__.InfluxVersion.Flux:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _query_flux_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_6__.FluxQueryEditor,
          {
            datasource,
            query: getVariableQuery(query),
            onChange: (q) => {
              onChange({ ...query, query: q.query ?? "" });
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField,
          {
            label: "Max Data Points",
            labelWidth: 20,
            required: true,
            grow: true,
            "aria-labelledby": "flux-maxdatapoints",
            tooltip: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Upper boundary of data points will return for the variable query." }),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
              {
                id: "influx-sql-variable-maxdatapoints",
                "aria-label": "flux-maxdatapoints",
                type: "number",
                defaultValue: query.maxDataPoints ?? 1e3,
                placeholder: "Default is 1000",
                onBlur: (e) => {
                  onChange({
                    refId,
                    query: query.query,
                    maxDataPoints: Number.parseInt(e.currentTarget.value, 10)
                  });
                }
              }
            )
          }
        ) })
      ] });
    default:
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, { label: "Query", labelWidth: 20, required: true, grow: true, "aria-labelledby": "influx-variable-query", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TextArea,
        {
          "aria-label": "influx-variable-query",
          defaultValue: getVariableQuery(query).query,
          placeholder: "metric name or tags query",
          rows: 1,
          onBlur: (e) => {
            onChange({ refId, query: e.currentTarget.value ?? "" });
          }
        }
      ) }) });
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSER_MODE_DISABLED_MESSAGE: () => (/* binding */ BROWSER_MODE_DISABLED_MESSAGE)
/* harmony export */ });

const BROWSER_MODE_DISABLED_MESSAGE = "Direct browser access in the InfluxDB datasource is no longer available. Switch to server access mode.";


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/datasource.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxDatasource)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/throwError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/dataframe/processDataFrame.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-data/src/text/string.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-data/src/datetime/datemath.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-runtime/src/utils/DataSourceWithBackend.ts");
/* harmony import */ var _grafana_sql__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-sql/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _components_editor_annotation_AnnotationEditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/annotation/AnnotationEditor.tsx");
/* harmony import */ var _components_editor_query_flux_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/flux/FluxQueryEditor.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/plugins/datasource/influxdb/constants.ts");
/* harmony import */ var _fsql_sqlUtil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/datasource/influxdb/fsql/sqlUtil.ts");
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");
/* harmony import */ var _influx_series__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_series.ts");
/* harmony import */ var _influxql_query_builder__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influxql_query_builder.ts");
/* harmony import */ var _migrations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/plugins/datasource/influxdb/migrations.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _response_parser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./public/app/plugins/datasource/influxdb/response_parser.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./public/app/plugins/datasource/influxdb/variables.ts");




















class InfluxDatasource extends _grafana_runtime__WEBPACK_IMPORTED_MODULE_14__.DataSourceWithBackend {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_13__.getTemplateSrv)()) {
    super(instanceSettings);
    this.templateSrv = templateSrv;
    this.type = "influxdb";
    this.urls = (instanceSettings.url ?? "").split(",").map((url) => {
      return url.trim();
    });
    this.username = instanceSettings.username ?? "";
    this.password = instanceSettings.password ?? "";
    this.name = instanceSettings.name;
    this.basicAuth = instanceSettings.basicAuth;
    this.withCredentials = instanceSettings.withCredentials;
    this.access = instanceSettings.access;
    const settingsData = instanceSettings.jsonData ?? {};
    this.database = settingsData.dbName ?? instanceSettings.database;
    this.interval = settingsData.timeInterval;
    this.showTagTime = settingsData.showTagTime || "";
    this.httpMode = settingsData.httpMode || "GET";
    this.responseParser = new _response_parser__WEBPACK_IMPORTED_MODULE_26__["default"]();
    this.version = settingsData.version ?? _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.InfluxQL;
    this.isProxyAccess = instanceSettings.access === "proxy";
    this.variables = new _variables__WEBPACK_IMPORTED_MODULE_28__.InfluxVariableSupport(this, this.templateSrv);
    if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux) {
      this.annotations = {
        QueryEditor: _components_editor_query_flux_FluxQueryEditor__WEBPACK_IMPORTED_MODULE_18__.FluxQueryEditor
      };
    } else {
      this.annotations = {
        QueryEditor: _components_editor_annotation_AnnotationEditor__WEBPACK_IMPORTED_MODULE_17__.AnnotationEditor,
        prepareAnnotation: _migrations__WEBPACK_IMPORTED_MODULE_24__.prepareAnnotation
      };
    }
  }
  query(request) {
    if (!this.isProxyAccess) {
      const error = new Error(_constants__WEBPACK_IMPORTED_MODULE_19__.BROWSER_MODE_DISABLED_MESSAGE);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => error);
    }
    return this._query(request);
  }
  _query(request) {
    const filteredRequest = {
      ...request,
      targets: request.targets.filter((t) => t.hide !== true)
    };
    if (filteredRequest.targets.some((target) => target.fromAnnotations)) {
      const streams = [];
      for (const target of filteredRequest.targets) {
        if (target.query) {
          streams.push(
            new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
              this.annotationEvents(filteredRequest, target).then((events) => subscriber.next({ data: [(0,_grafana_data__WEBPACK_IMPORTED_MODULE_8__.toDataFrame)(events)] })).catch((ex) => subscriber.error(new Error(ex))).finally(() => subscriber.complete());
            })
          );
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.merge)(...streams);
    }
    if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.InfluxQL && !this.isMigrationToggleOnAndIsAccessProxy()) {
      return this.classicQuery(request);
    }
    return super.query(filteredRequest);
  }
  getQueryDisplayText(query) {
    switch (this.version) {
      case _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux:
        return query.query;
      case _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.SQL:
        return (0,_fsql_sqlUtil__WEBPACK_IMPORTED_MODULE_20__.toRawSql)(query);
      case _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.InfluxQL:
        return new _influx_query_model__WEBPACK_IMPORTED_MODULE_21__["default"](query).render(false);
      default:
        return "";
    }
  }
  /**
   * Returns false if the query should be skipped
   */
  filterQuery(query) {
    if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux) {
      return !!query.query;
    }
    return true;
  }
  applyTemplateVariables(query, scopedVars, filters) {
    const variables = scopedVars || {};
    variables.__interval = {
      value: "$__interval"
    };
    variables.__interval_ms = {
      value: "$__interval_ms"
    };
    if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux) {
      return {
        ...query,
        query: this.templateSrv.replace(query.query ?? "", variables)
        // The raw query text
      };
    }
    if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.SQL || this.isMigrationToggleOnAndIsAccessProxy()) {
      query = this.applyVariables(query, variables, filters);
      if (query.adhocFilters?.length) {
        query.adhocFilters = (query.adhocFilters ?? []).map((af) => {
          const { condition, ...asTag } = af;
          asTag.value = this.templateSrv.replace(asTag.value ?? "", variables);
          return asTag;
        });
        query.tags = [...query.tags ?? [], ...query.adhocFilters];
      }
    }
    return query;
  }
  targetContainsTemplate(target) {
    const queryText = this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux ? target.query : (0,_queryUtils__WEBPACK_IMPORTED_MODULE_25__.buildRawQuery)(target);
    return this.templateSrv.containsTemplate(queryText);
  }
  interpolateVariablesInQueries(queries, scopedVars, filters) {
    if (!queries || queries.length === 0) {
      return [];
    }
    return queries.map((query) => {
      if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux) {
        return {
          ...query,
          datasource: this.getRef(),
          query: this.templateSrv.replace(
            query.query ?? "",
            scopedVars,
            (value = [], variable) => this.interpolateQueryExpr(value, variable, query.query)
          )
          // The raw query text
        };
      }
      const queryWithVariables = this.applyVariables(query, scopedVars, filters);
      if (queryWithVariables.adhocFilters?.length) {
        queryWithVariables.adhocFilters = (queryWithVariables.adhocFilters ?? []).map((af) => {
          const { condition, ...asTag } = af;
          asTag.value = this.templateSrv.replace(asTag.value ?? "", scopedVars);
          return asTag;
        });
        queryWithVariables.tags = [...queryWithVariables.tags ?? [], ...queryWithVariables.adhocFilters];
      }
      return {
        ...queryWithVariables,
        datasource: this.getRef()
      };
    });
  }
  applyVariables(query, scopedVars, filters) {
    const expandedQuery = { ...query };
    if (query.groupBy) {
      expandedQuery.groupBy = query.groupBy.map((groupBy) => {
        return {
          ...groupBy,
          params: groupBy.params?.map((param) => this.templateSrv.replace(param.toString(), void 0))
        };
      });
    }
    if (query.select) {
      expandedQuery.select = query.select.map((selects) => {
        return selects.map((select) => {
          return {
            ...select,
            params: select.params?.map((param) => this.templateSrv.replace(param.toString(), scopedVars))
          };
        });
      });
    }
    if (query.tags) {
      expandedQuery.tags = query.tags.map((tag) => {
        if (tag.operator !== "=~" && tag.operator !== "!~") {
          tag.value = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_25__.removeRegexWrapper)(tag.value);
        }
        return {
          ...tag,
          key: this.templateSrv.replace(tag.key, scopedVars),
          value: this.templateSrv.replace(
            tag.value ?? "",
            scopedVars,
            (value = [], variable) => this.interpolateQueryExpr(value, variable, tag.value)
          )
        };
      });
    }
    return {
      ...expandedQuery,
      adhocFilters: filters ?? [],
      query: this.templateSrv.replace(
        query.query ?? "",
        scopedVars,
        (value = [], variable) => this.interpolateQueryExpr(value, variable, query.query)
      ),
      // The raw sql query text
      rawSql: this.templateSrv.replace(
        query.rawSql ?? "",
        scopedVars,
        (value = [], variable) => this.interpolateQueryExpr(value, variable, query.rawSql)
      ),
      // The raw sql query text
      alias: this.templateSrv.replace(query.alias ?? "", scopedVars),
      limit: this.templateSrv.replace(query.limit?.toString() ?? "", scopedVars),
      measurement: this.templateSrv.replace(
        query.measurement ?? "",
        scopedVars,
        (value = [], variable) => this.interpolateQueryExpr(value, variable, query.measurement)
      ),
      policy: this.templateSrv.replace(query.policy ?? "", scopedVars),
      slimit: this.templateSrv.replace(query.slimit?.toString() ?? "", scopedVars),
      tz: this.templateSrv.replace(query.tz ?? "", scopedVars)
    };
  }
  interpolateQueryExpr(value = [], variable, query) {
    if (typeof value === "string") {
      if (!isNaN(parseFloat(value))) {
        return value;
      }
    }
    if (variable.multi) {
      if (typeof value === "string") {
        if (isNaN(parseFloat(value))) {
          return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.escapeRegex)(value);
        }
        return value;
      }
      return `(${value.map((v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.escapeRegex)(v)).join("|")})`;
    }
    const regexMatcher = new RegExp(/(?<=\/).+?(?=\/)/, "gm");
    const regex = new RegExp(`\\/(?:\\^)?(.*)(\\$${variable.name})(.*)(?:\\$)?\\/`, "gm");
    if (!query || typeof query !== "string") {
      return value;
    }
    const queryMatches = query.match(regexMatcher);
    if (!queryMatches) {
      return value;
    }
    if (!query.match(regex)) {
      return value;
    }
    for (const match of queryMatches) {
      try {
        new RegExp(match);
        return typeof value === "string" ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.escapeRegex)(value) : `(${value.map((v) => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_9__.escapeRegex)(v)).join("|")})`;
      } catch (e) {
        console.warn(`Supplied match is not valid regex: ${match}`);
      }
    }
    return value;
  }
  async runMetadataQuery(target) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
      super.query({
        targets: [target]
      })
    ).then(this.toMetricFindValue);
  }
  async metricFindQuery(query, options) {
    if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux || this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.SQL || this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: "metricFindQuery",
        query: query.query,
        rawQuery: true,
        ...this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.SQL ? { rawSql: query.query, format: _grafana_sql__WEBPACK_IMPORTED_MODULE_15__.QueryFormat.Table } : {}
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
        super.query({
          ...options ?? {},
          // includes 'range'
          maxDataPoints: query.maxDataPoints,
          targets: [target]
        })
      ).then(this.toMetricFindValue);
    }
    const interpolated = this.templateSrv.replace(
      query.query,
      options?.scopedVars,
      (value = [], variable) => this.interpolateQueryExpr(value, variable, query.query)
    );
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this._seriesQuery(interpolated, options)).then((resp) => {
      return this.responseParser.parse(query.query, resp);
    });
  }
  toMetricFindValue(rsp) {
    const valueMap = /* @__PURE__ */ new Map();
    rsp?.data?.forEach((frame) => {
      if (frame && frame.length > 0) {
        let field = frame.fields.find((f) => f.type === _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldType.string);
        if (!field) {
          field = frame.fields.find((f) => f.type !== _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldType.time);
        }
        if (field) {
          field.values.forEach((v) => {
            valueMap.set(v.toString(), { text: v.toString() });
          });
        }
      }
    });
    return Array.from(valueMap.values());
  }
  // By implementing getTagKeys and getTagValues we add ad-hoc filters functionality
  // Used in public/app/features/variables/adhoc/picker/AdHocFilterKey.tsx::fetchFilterKeys
  getTagKeys(options) {
    const query = (0,_influxql_query_builder__WEBPACK_IMPORTED_MODULE_23__.buildMetadataQuery)({
      type: "TAG_KEYS",
      templateService: this.templateSrv,
      database: this.database,
      withTimeFilter: this.showTagTime
    });
    return this.metricFindQuery({ refId: "get-tag-keys", query });
  }
  getTagValues(options) {
    const query = (0,_influxql_query_builder__WEBPACK_IMPORTED_MODULE_23__.buildMetadataQuery)({
      type: "TAG_VALUES",
      templateService: this.templateSrv,
      database: this.database,
      withKey: options.key,
      withTimeFilter: this.showTagTime
    });
    return this.metricFindQuery({ refId: "get-tag-values", query });
  }
  /**
   * @deprecated
   */
  _seriesQuery(query, options) {
    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ results: [] });
    }
    if (options && options.range) {
      const timeFilter = this.getTimeFilter({ rangeRaw: options.range, timezone: options.timezone });
      query = query.replace("$timeFilter", timeFilter);
    }
    return this._influxRequest(this.httpMode, "/query", { q: query, epoch: "ms" }, options);
  }
  /**
   * @deprecated
   */
  serializeParams(params) {
    if (!params) {
      return "";
    }
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(
      params,
      (memo, value, key) => {
        if (value === null || value === void 0) {
          return memo;
        }
        memo.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
        return memo;
      },
      []
    ).join("&");
  }
  /**
   * @deprecated
   */
  _influxRequest(method, url, data, options) {
    const currentUrl = this.urls.shift();
    this.urls.push(currentUrl);
    const params = {};
    if (this.username) {
      params.u = this.username;
      params.p = this.password;
    }
    if (options && options.database) {
      params.db = options.database;
    } else if (this.database) {
      params.db = this.database;
    }
    if (options?.policy && options.policy !== _types__WEBPACK_IMPORTED_MODULE_27__.DEFAULT_POLICY) {
      params.rp = options.policy;
    }
    const { q } = data;
    if (method === "POST" && (0,lodash__WEBPACK_IMPORTED_MODULE_0__.has)(data, "q")) {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(data, ["q"]));
      data = this.serializeParams((0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(data, ["q"]));
    } else if (method === "GET" || method === "POST") {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.extend)(params, data);
      data = null;
    }
    const req = {
      method,
      url: currentUrl + url,
      params,
      data,
      precision: "ms",
      inspect: { type: "influxdb" },
      paramSerializer: this.serializeParams
    };
    req.headers = req.headers || {};
    if (this.basicAuth || this.withCredentials) {
      req.withCredentials = true;
    }
    if (this.basicAuth) {
      req.headers.Authorization = this.basicAuth;
    }
    if (method === "POST") {
      req.headers["Content-type"] = "application/x-www-form-urlencoded";
    }
    return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.getBackendSrv)().fetch(req).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((result) => {
        const { data: data2 } = result;
        if (data2) {
          data2.executedQueryString = q;
          if (data2.results) {
            const errors = result.data.results.filter((elem) => elem.error);
            if (errors.length > 0) {
              throw {
                message: "InfluxDB Error: " + errors[0].error,
                data: data2
              };
            }
          }
        }
        return data2;
      }),
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((err) => {
        if (err.cancelled) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(err);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(this.handleErrors(err));
      })
    );
  }
  /**
   * @deprecated
   */
  handleErrors(err) {
    const error = {
      message: err && err.status || err && err.message || "Unknown error during query transaction. Please check JS console logs."
    };
    if (Number.isInteger(err.status) && err.status !== 0 || err.status >= 300) {
      if (err.data && err.data.error) {
        error.message = "InfluxDB Error: " + err.data.error;
        error.data = err.data;
        error.config = err.config;
      } else {
        error.message = "Network Error: " + err.statusText + "(" + err.status + ")";
        error.data = err.data;
        error.config = err.config;
      }
    }
    return error;
  }
  getTimeFilter(options) {
    const from = this.getInfluxTime(options.rangeRaw.from, false, options.timezone);
    const until = this.getInfluxTime(options.rangeRaw.to, true, options.timezone);
    return "time >= " + from + " and time <= " + until;
  }
  getInfluxTime(date, roundUp, timezone) {
    let outPutDate;
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isString)(date)) {
      if (date === "now") {
        return "now()";
      }
      const parts = /^now-(\d+)([dhms])$/.exec(date);
      if (parts) {
        const amount = parseInt(parts[1], 10);
        const unit = parts[2];
        return "now() - " + amount + unit;
      }
      outPutDate = _grafana_data__WEBPACK_IMPORTED_MODULE_10__.parse(date, roundUp, timezone);
      if (!outPutDate) {
        throw new Error("unable to parse date");
      }
      date = outPutDate;
    }
    return date.valueOf() + "ms";
  }
  // ------------------------ Legacy Code - Before Backend Migration ---------------
  isMigrationToggleOnAndIsAccessProxy() {
    return app_core_config__WEBPACK_IMPORTED_MODULE_16__["default"].featureToggles.influxdbBackendMigration && this.access === "proxy";
  }
  /**
   * The unchanged pre 7.1 query implementation
   * @deprecated
   */
  classicQuery(options) {
    let timeFilter = this.getTimeFilter(options);
    const scopedVars = options.scopedVars;
    const targets = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(options.targets);
    const queryTargets = [];
    let i, y;
    let allQueries = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(targets, (target) => {
      if (target.hide) {
        return "";
      }
      queryTargets.push(target);
      scopedVars.interval = scopedVars.__interval;
      return new _influx_query_model__WEBPACK_IMPORTED_MODULE_21__["default"](target, this.templateSrv, scopedVars).render(true);
    }).reduce((acc, current) => {
      if (current !== "") {
        acc += ";" + current;
      }
      return acc;
    });
    if (allQueries === "") {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ data: [] });
    }
    const adhocFilters = options.filters;
    const adhocFiltersFromDashboard = options.targets.flatMap((target) => target.adhocFilters ?? []);
    if (adhocFilters?.length || adhocFiltersFromDashboard?.length) {
      const ahFilters = adhocFilters?.length ? adhocFilters : adhocFiltersFromDashboard;
      const tmpQuery = new _influx_query_model__WEBPACK_IMPORTED_MODULE_21__["default"]({ refId: "A" }, this.templateSrv, scopedVars);
      timeFilter += " AND " + tmpQuery.renderAdhocFilters(ahFilters);
    }
    scopedVars.timeFilter = { value: timeFilter };
    allQueries = this.templateSrv.replace(allQueries, scopedVars);
    return this._seriesQuery(allQueries, options).pipe(
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((data) => {
        if (!data || !data.results) {
          return { data: [] };
        }
        const seriesList = [];
        for (i = 0; i < data.results.length; i++) {
          const result = data.results[i];
          if (!result || !result.series) {
            continue;
          }
          const target = queryTargets[i];
          let alias = target.alias;
          if (alias) {
            alias = this.templateSrv.replace(target.alias, options.scopedVars);
          }
          const meta = {
            executedQueryString: data.executedQueryString
          };
          const influxSeries = new _influx_series__WEBPACK_IMPORTED_MODULE_22__["default"]({
            refId: target.refId,
            series: data.results[i].series,
            alias,
            meta
          });
          switch (target.resultFormat) {
            case "logs":
              meta.preferredVisualisationType = "logs";
            case "table": {
              seriesList.push(influxSeries.getTable());
              break;
            }
            default: {
              const timeSeries = influxSeries.getTimeSeries();
              for (y = 0; y < timeSeries.length; y++) {
                seriesList.push(timeSeriesToDataFrame(timeSeries[y]));
              }
              break;
            }
          }
        }
        return { data: seriesList };
      })
    );
  }
  async annotationEvents(options, annotation) {
    if (this.version === _types__WEBPACK_IMPORTED_MODULE_27__.InfluxVersion.Flux) {
      return Promise.reject({
        message: "Flux requires the standard annotation query"
      });
    }
    if (!annotation.query) {
      return Promise.reject({
        message: "Query missing in annotation definition"
      });
    }
    if (this.isMigrationToggleOnAndIsAccessProxy()) {
      const target = {
        refId: "metricFindQuery",
        datasource: this.getRef(),
        query: this.templateSrv.replace(
          annotation.query,
          void 0,
          (value = [], variable) => this.interpolateQueryExpr(value, variable, annotation.query)
        ),
        rawQuery: true
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.getBackendSrv)().fetch({
          url: "/api/ds/query",
          method: "POST",
          headers: this.getRequestHeaders(),
          data: {
            from: options.range.from.valueOf().toString(),
            to: options.range.to.valueOf().toString(),
            queries: [target]
          },
          requestId: annotation.name
        }).pipe(
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(
            async (res) => await this.responseParser.transformAnnotationResponse(annotation, res, target)
          )
        )
      );
    }
    const timeFilter = this.getTimeFilter({ rangeRaw: options.range.raw, timezone: options.timezone });
    let query = annotation.query.replace("$timeFilter", timeFilter);
    query = this.templateSrv.replace(
      query,
      void 0,
      (value = [], variable) => this.interpolateQueryExpr(value, variable, query)
    );
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(this._seriesQuery(query, options)).then((data) => {
      if (!data || !data.results || !data.results[0]) {
        throw { message: "No results in response from InfluxDB" };
      }
      return new _influx_series__WEBPACK_IMPORTED_MODULE_22__["default"]({
        series: data.results[0].series,
        annotation
      }).getAnnotations();
    });
  }
}
function getFieldType(values) {
  const firstNotNull = values.find((v) => v !== null);
  if (firstNotNull === void 0) {
    return _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldType.number;
  }
  const valueType = typeof firstNotNull;
  switch (valueType) {
    case "string":
      return _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldType.string;
    case "boolean":
      return _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldType.boolean;
    case "number":
      return _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldType.number;
    default:
      throw new Error(`InfluxQL: invalid value type ${valueType}`);
  }
}
function timeSeriesToDataFrame(timeSeries) {
  const times = [];
  const values = [];
  const points = timeSeries.datapoints;
  for (const point of points) {
    values.push(point[0]);
    times.push(point[1]);
  }
  const timeField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_11__.TIME_SERIES_TIME_FIELD_NAME,
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_11__.FieldType.time,
    config: {},
    values: times
  };
  const valueField = {
    name: _grafana_data__WEBPACK_IMPORTED_MODULE_11__.TIME_SERIES_VALUE_FIELD_NAME,
    type: getFieldType(values),
    config: {
      displayNameFromDS: timeSeries.title
    },
    values,
    labels: timeSeries.tags
  };
  const fields = [timeField, valueField];
  return {
    name: timeSeries.target,
    refId: timeSeries.refId,
    meta: timeSeries.meta,
    fields,
    length: values.length
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/fsql/datasource.flightsql.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlightSQLDatasource: () => (/* binding */ FlightSQLDatasource)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/SQLEditor/types.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _grafana_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-sql/src/index.ts");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/fsql/fields.ts");
/* harmony import */ var _flightsqlMetaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/fsql/flightsqlMetaQuery.ts");
/* harmony import */ var _sqlCompletionProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/fsql/sqlCompletionProvider.ts");
/* harmony import */ var _sqlUtil__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/plugins/datasource/influxdb/fsql/sqlUtil.ts");









class FlightSQLDatasource extends _grafana_sql__WEBPACK_IMPORTED_MODULE_3__.SqlDatasource {
  constructor(instanceSettings, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)()) {
    super(instanceSettings);
    this.instanceSettings = instanceSettings;
    this.templateSrv = templateSrv;
    this.getFunctions = () => {
      const fns = [..._grafana_sql__WEBPACK_IMPORTED_MODULE_3__.COMMON_FNS, { name: "VARIANCE" }, { name: "STDDEV" }];
      const columnParam = {
        name: "Column",
        required: true,
        options: (query) => this.fetchFields(query)
      };
      const intervalParam = {
        name: "Interval",
        required: true,
        options: () => {
          return Promise.resolve([{ label: "$__interval", value: "$__interval" }]);
        }
      };
      return [
        ...fns.map((fn) => ({ ...fn, parameters: [columnParam] })),
        {
          name: "$__timeGroup",
          description: "Time grouping function",
          parameters: [columnParam, intervalParam]
        },
        {
          name: "$__timeGroupAlias",
          description: "Time grouping function with time as alias",
          parameters: [columnParam, intervalParam]
        }
      ];
    };
  }
  getQueryModel() {
    return { quoteLiteral: _sqlUtil__WEBPACK_IMPORTED_MODULE_7__.quoteLiteral };
  }
  getSqlLanguageDefinition() {
    if (this.sqlLanguageDefinition !== void 0) {
      return this.sqlLanguageDefinition;
    }
    const args = {
      getMeta: (identifier) => this.fetchMeta(identifier)
    };
    this.sqlLanguageDefinition = {
      id: "sql",
      completionProvider: (0,_sqlCompletionProvider__WEBPACK_IMPORTED_MODULE_6__.getSqlCompletionProvider)(args),
      formatter: _grafana_sql__WEBPACK_IMPORTED_MODULE_3__.formatSQL
    };
    return this.sqlLanguageDefinition;
  }
  async fetchDatasets() {
    return Promise.resolve(["iox"]);
  }
  async fetchTables(dataset) {
    const query = (0,_flightsqlMetaQuery__WEBPACK_IMPORTED_MODULE_5__.buildTableQuery)(dataset);
    const tables = await this.runSql(query, { refId: "tables" });
    const tableNames = tables.map((t) => (0,_sqlUtil__WEBPACK_IMPORTED_MODULE_7__.quoteIdentifierIfNecessary)(t[0]));
    tableNames.unshift(...this.getTemplateVariables());
    return tableNames;
  }
  async fetchFields(query) {
    if (!query.dataset || !query.table) {
      return [];
    }
    const interpolatedTable = this.templateSrv.replace(query.table);
    const queryString = (0,_flightsqlMetaQuery__WEBPACK_IMPORTED_MODULE_5__.buildColumnQuery)(interpolatedTable, query.dataset);
    const frame = await this.runSql(queryString, { refId: `fields-${uuid__WEBPACK_IMPORTED_MODULE_0__["default"]}` });
    const fields = frame.map((f) => ({
      name: f[0],
      text: f[0],
      value: (0,_sqlUtil__WEBPACK_IMPORTED_MODULE_7__.quoteIdentifierIfNecessary)(f[0]),
      type: f[1],
      label: f[0]
    }));
    fields.unshift(
      ...this.getTemplateVariables().map((v) => ({
        name: v,
        text: v,
        value: (0,_sqlUtil__WEBPACK_IMPORTED_MODULE_7__.quoteIdentifierIfNecessary)(v),
        type: "",
        label: v
      }))
    );
    return (0,_fields__WEBPACK_IMPORTED_MODULE_4__.mapFieldsToTypes)(fields);
  }
  getTemplateVariables() {
    return this.templateSrv.getVariables().map((v) => `$${v.name}`);
  }
  async fetchMeta(identifier) {
    const defaultDB = this.instanceSettings.jsonData.database;
    if (!identifier?.schema && defaultDB) {
      const tables = await this.fetchTables(defaultDB);
      return tables.map((t) => ({ name: t, completion: `${defaultDB}.${t}`, kind: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.CompletionItemKind.Class }));
    } else if (!identifier?.schema && !defaultDB) {
      const datasets = await this.fetchDatasets();
      return datasets.map((d) => ({ name: d, completion: `${d}.`, kind: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.CompletionItemKind.Module }));
    } else {
      if (!identifier?.table && (!defaultDB || identifier?.schema)) {
        const tables = await this.fetchTables(identifier?.schema);
        return tables.map((t) => ({ name: t, completion: t, kind: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.CompletionItemKind.Class }));
      } else if (identifier?.table && identifier.schema) {
        const fields = await this.fetchFields({ dataset: identifier.schema, table: identifier.table });
        return fields.map((t) => ({ name: t.name, completion: t.value, kind: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.CompletionItemKind.Field }));
      } else {
        return [];
      }
    }
  }
  getDB() {
    if (this.db !== void 0) {
      return this.db;
    }
    return {
      datasets: () => this.fetchDatasets(),
      tables: (dataset) => this.fetchTables(dataset),
      fields: (query) => this.fetchFields(query),
      validateQuery: (query, range) => Promise.resolve({ query, error: "", isError: false, isValid: true }),
      dsID: () => this.id,
      toRawSql: _sqlUtil__WEBPACK_IMPORTED_MODULE_7__.toRawSql,
      functions: () => this.getFunctions(),
      getEditorLanguageDefinition: () => this.getSqlLanguageDefinition()
    };
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/fsql/fields.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mapColumnTypeToIcon: () => (/* binding */ mapColumnTypeToIcon),
/* harmony export */   mapFieldsToTypes: () => (/* binding */ mapFieldsToTypes)
/* harmony export */ });

function mapFieldsToTypes(columns) {
  const fields = [];
  for (const col of columns) {
    let type = "text";
    switch (col.type?.toUpperCase()) {
      case "BOOLEAN":
      case "BOOL": {
        type = "boolean";
        break;
      }
      case "BYTES":
      case "VARCHAR": {
        type = "text";
        break;
      }
      case "FLOAT":
      case "FLOAT64":
      case "INT":
      case "INTEGER":
      case "INT64":
      case "NUMERIC":
      case "BIGNUMERIC": {
        type = "number";
        break;
      }
      case "DATE": {
        type = "date";
        break;
      }
      case "TIMESTAMP(NANOSECOND, NONE)":
      case "DATETIME": {
        type = "datetime";
        break;
      }
      case "TIME": {
        type = "time";
        break;
      }
      case "TIMESTAMP": {
        type = "datetime";
        break;
      }
      case "GEOGRAPHY": {
        type = "text";
        break;
      }
      default:
        break;
    }
    fields.push({ ...col, raqbFieldType: type, icon: mapColumnTypeToIcon(col.type.toUpperCase()) });
  }
  return fields;
}
function mapColumnTypeToIcon(type) {
  switch (type) {
    case "TIME":
    case "DATETIME":
    case "TIMESTAMP":
      return "clock-nine";
    case "BOOLEAN":
      return "toggle-off";
    case "INTEGER":
    case "FLOAT":
    case "FLOAT64":
    case "INT":
    case "SMALLINT":
    case "BIGINT":
    case "TINYINT":
    case "BYTEINT":
    case "INT64":
    case "NUMERIC":
    case "DECIMAL":
      return "calculator-alt";
    case "CHAR":
    case "VARCHAR":
    case "STRING":
    case "BYTES":
    case "TEXT":
    case "TINYTEXT":
    case "MEDIUMTEXT":
    case "LONGTEXT":
      return "text";
    case "GEOGRAPHY":
      return "map";
    default:
      return void 0;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/fsql/flightsqlMetaQuery.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildColumnQuery: () => (/* binding */ buildColumnQuery),
/* harmony export */   buildTableConstraint: () => (/* binding */ buildTableConstraint),
/* harmony export */   buildTableQuery: () => (/* binding */ buildTableQuery),
/* harmony export */   quoteIdentAsLiteral: () => (/* binding */ quoteIdentAsLiteral),
/* harmony export */   showDatabases: () => (/* binding */ showDatabases)
/* harmony export */ });
/* harmony import */ var _sqlUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/influxdb/fsql/sqlUtil.ts");


function buildTableQuery(dataset) {
  const database = dataset !== void 0 ? quoteIdentAsLiteral(dataset) : "database()";
  return `SELECT table_name FROM information_schema.tables WHERE table_schema = ${database} ORDER BY table_name`;
}
function showDatabases() {
  return `SELECT DISTINCT TABLE_SCHEMA from information_schema.TABLES where TABLE_TYPE != 'SYSTEM VIEW' ORDER BY TABLE_SCHEMA`;
}
function buildColumnQuery(table, dbName) {
  let query = "SELECT column_name, data_type FROM information_schema.columns WHERE ";
  query += buildTableConstraint(table, dbName);
  query += " ORDER BY column_name";
  return query;
}
function buildTableConstraint(table, dbName) {
  let query = "";
  if (table.includes(".")) {
    const parts = table.split(".");
    query = "table_schema = " + quoteIdentAsLiteral(parts[0]);
    query += " AND table_name = " + quoteIdentAsLiteral(parts[1]);
    return query;
  } else {
    const database = dbName !== void 0 ? quoteIdentAsLiteral(dbName) : "database()";
    query = `table_schema = ${database} AND table_name = ` + quoteIdentAsLiteral(table);
    return query;
  }
}
function quoteIdentAsLiteral(value) {
  return (0,_sqlUtil__WEBPACK_IMPORTED_MODULE_0__.quoteLiteral)((0,_sqlUtil__WEBPACK_IMPORTED_MODULE_0__.unquoteIdentifier)(value));
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/fsql/sqlCompletionProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customStatementPlacementProvider: () => (/* binding */ customStatementPlacementProvider),
/* harmony export */   customSuggestionKinds: () => (/* binding */ customSuggestionKinds),
/* harmony export */   getSqlCompletionProvider: () => (/* binding */ getSqlCompletionProvider)
/* harmony export */ });
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/SQLEditor/standardSql/standardSQLCompletionItemProvider.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/SQLEditor/types.js");


const getSqlCompletionProvider = ({ getMeta }) => (monaco, language) => ({
  ...language && (0,_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_0__.getStandardSQLCompletionProvider)(monaco, language),
  customStatementPlacement: customStatementPlacementProvider,
  customSuggestionKinds: customSuggestionKinds(getMeta)
});
const customStatementPlacement = {
  afterDatabase: "afterDatabase"
};
const customSuggestionKind = {
  tablesWithinDatabase: "tablesWithinDatabase"
};
const FROMKEYWORD = "FROM";
const customStatementPlacementProvider = () => [
  {
    id: customStatementPlacement.afterDatabase,
    resolve: (currentToken, previousKeyword, previousNonWhiteSpace) => {
      return Boolean(
        currentToken?.is(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Delimiter, ".") && previousKeyword?.value === FROMKEYWORD && (previousNonWhiteSpace?.is(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.IdentifierQuote) || previousNonWhiteSpace?.isIdentifier()) && // don't match after table name
        currentToken?.getPreviousUntil(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Keyword, [_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.IdentifierQuote], FROMKEYWORD)?.filter((t) => t.isIdentifier()).length === 1
      );
    }
  }
];
const customSuggestionKinds = (getMeta) => () => [
  {
    id: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.SuggestionKind.Tables,
    overrideDefault: true,
    suggestionsResolver: async (ctx) => {
      const databaseName = getDatabaseName(ctx.currentToken);
      const suggestions = await getMeta({ schema: databaseName });
      return suggestions.map(mapToSuggestion(ctx));
    }
  },
  {
    id: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.SuggestionKind.Columns,
    overrideDefault: true,
    suggestionsResolver: async (ctx) => {
      const databaseToken = getDatabaseToken(ctx.currentToken);
      const databaseName = getDatabaseName(databaseToken);
      const tableName = getTableName(databaseToken);
      if (!databaseName || !tableName) {
        return [];
      }
      const suggestions = await getMeta({ schema: databaseName, table: tableName });
      return suggestions.map(mapToSuggestion(ctx));
    }
  },
  {
    id: customSuggestionKind.tablesWithinDatabase,
    applyTo: [customStatementPlacement.afterDatabase],
    suggestionsResolver: async (ctx) => {
      const databaseName = getDatabaseName(ctx.currentToken);
      const suggestions = await getMeta({ schema: databaseName });
      return suggestions.map(mapToSuggestion(ctx));
    }
  }
];
function mapToSuggestion(ctx) {
  return function(tableDefinition) {
    return {
      label: tableDefinition.name,
      insertText: tableDefinition.completion ?? tableDefinition.name,
      command: { id: "editor.action.triggerSuggest", title: "" },
      kind: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.CompletionItemKind.Field,
      sortText: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.CompletionItemPriority.High,
      range: {
        ...ctx.range,
        startColumn: ctx.range.endColumn,
        endColumn: ctx.range.endColumn
      }
    };
  };
}
function getDatabaseName(token) {
  if (token?.isIdentifier() && token.value[token.value.length - 1] !== ".") {
    return token.value;
  }
  if (token?.is(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Delimiter, ".")) {
    return token.getPreviousOfType(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Identifier)?.value;
  }
  if (token?.is(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.IdentifierQuote)) {
    return token.getPreviousOfType(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Identifier)?.value || token.getNextOfType(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Identifier)?.value;
  }
  return;
}
function getTableName(token) {
  const identifier = token?.getNextOfType(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Identifier);
  return identifier?.value;
}
const getFromKeywordToken = (currentToken) => {
  const selectToken = currentToken?.getPreviousOfType(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Keyword, "SELECT") ?? null;
  return selectToken?.getNextOfType(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Keyword, FROMKEYWORD);
};
const getDatabaseToken = (currentToken) => {
  const fromToken = getFromKeywordToken(currentToken);
  const nextIdentifier = fromToken?.getNextOfType(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Identifier);
  if (nextIdentifier?.isKeyword() && nextIdentifier.next?.is(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_1__.TokenType.Parenthesis, "(")) {
    return null;
  } else {
    return nextIdentifier;
  }
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/fsql/sqlUtil.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidIdentifier: () => (/* binding */ isValidIdentifier),
/* harmony export */   quoteIdentifierIfNecessary: () => (/* binding */ quoteIdentifierIfNecessary),
/* harmony export */   quoteLiteral: () => (/* binding */ quoteLiteral),
/* harmony export */   toRawSql: () => (/* binding */ toRawSql),
/* harmony export */   unquoteIdentifier: () => (/* binding */ unquoteIdentifier)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_sql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-sql/src/index.ts");



function unquoteIdentifier(value) {
  if (value[0] === '"' && value[value.length - 1] === '"') {
    return value.substring(1, value.length - 1).replace(/""/g, '"');
  } else if (value[0] === "`" && value[value.length - 1] === "`") {
    return value.substring(1, value.length - 1);
  } else {
    return value;
  }
}
function quoteLiteral(value) {
  return "'" + value.replace(/'/g, "''") + "'";
}
function toRawSql({ sql, table }) {
  let rawQuery = "";
  if (!sql || !(0,_grafana_sql__WEBPACK_IMPORTED_MODULE_1__.haveColumns)(sql.columns)) {
    return rawQuery;
  }
  const sc = sql.columns.map((c) => ({
    ...c,
    parameters: c.parameters?.map((p) => ({ ...p, name: formatTableName(p.name) }))
  }));
  rawQuery += (0,_grafana_sql__WEBPACK_IMPORTED_MODULE_1__.createSelectClause)(sc);
  if (table) {
    rawQuery += `FROM "${table}" `;
  }
  rawQuery += `WHERE "time" >= $__timeFrom AND "time" <= $__timeTo `;
  if (sql.whereString) {
    const wherePattern = new RegExp("(\\s?)([^\\(]\\S+)(\\s?=)", "g");
    const subst = `$1"$2"$3`;
    const whereString = sql.whereString.replace(wherePattern, subst);
    rawQuery += `AND ${whereString} `;
  }
  if (sql.groupBy?.[0]?.property.name) {
    const groupBy = sql.groupBy.map((g) => `"${g.property.name}"`).filter((g) => !(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(g));
    rawQuery += `GROUP BY ${groupBy.join(", ")} `;
  }
  if (sql.orderBy?.property.name) {
    rawQuery += `ORDER BY "${sql.orderBy.property.name}" `;
  }
  if (sql.orderBy?.property.name && sql.orderByDirection) {
    rawQuery += `${sql.orderByDirection} `;
  }
  if (isLimit(sql.limit)) {
    rawQuery += `LIMIT ${sql.limit}`;
  }
  return rawQuery;
}
function formatTableName(parameter) {
  if (parameter === "*") {
    return parameter;
  }
  return `"${parameter}"`;
}
const isLimit = (limit) => limit !== void 0 && limit >= 0;
function quoteIdentifierIfNecessary(value) {
  return isValidIdentifier(value) ? value : `"${value}"`;
}
function isValidIdentifier(identifier) {
  const isValidName = /^[a-zA-Z_][a-zA-Z0-9_$]*$/g.test(identifier);
  const isReservedWord = RESERVED_WORDS.includes(identifier.toUpperCase());
  return !isReservedWord && isValidName;
}
const RESERVED_WORDS = [
  "ACCESSIBLE",
  "ADD",
  "ALL",
  "ALTER",
  "ANALYZE",
  "AND",
  "AS",
  "ASC",
  "ASENSITIVE",
  "BEFORE",
  "BETWEEN",
  "BIGINT",
  "BINARY",
  "BLOB",
  "BOTH",
  "BY",
  "CALL",
  "CASCADE",
  "CASE",
  "CHANGE",
  "CHAR",
  "CHARACTER",
  "CHECK",
  "COLLATE",
  "COLUMN",
  "CONDITION",
  "CONSTRAINT",
  "CONTINUE",
  "CONVERT",
  "CREATE",
  "CROSS",
  "CUBE",
  "CUME_DIST",
  "CURRENT_DATE",
  "CURRENT_TIME",
  "CURRENT_TIMESTAMP",
  "CURRENT_USER",
  "CURSOR",
  "DATABASE",
  "DATABASES",
  "DAY_HOUR",
  "DAY_MICROSECOND",
  "DAY_MINUTE",
  "DAY_SECOND",
  "DEC",
  "DECIMAL",
  "DECLARE",
  "DEFAULT",
  "DELAYED",
  "DELETE",
  "DENSE_RANK",
  "DESC",
  "DESCRIBE",
  "DETERMINISTIC",
  "DISTINCT",
  "DISTINCTROW",
  "DIV",
  "DOUBLE",
  "DROP",
  "DUAL",
  "EACH",
  "ELSE",
  "ELSEIF",
  "EMPTY",
  "ENCLOSED",
  "ESCAPED",
  "EXCEPT",
  "EXISTS",
  "EXIT",
  "EXPLAIN",
  "FALSE",
  "FETCH",
  "FIRST_VALUE",
  "FLOAT",
  "FLOAT4",
  "FLOAT8",
  "FOR",
  "FORCE",
  "FOREIGN",
  "FROM",
  "FULLTEXT",
  "FUNCTION",
  "GENERATED",
  "GET",
  "GRANT",
  "GROUP",
  "GROUPING",
  "GROUPS",
  "HAVING",
  "HIGH_PRIORITY",
  "HOUR_MICROSECOND",
  "HOUR_MINUTE",
  "HOUR_SECOND",
  "IF",
  "IGNORE",
  "IN",
  "INDEX",
  "INFILE",
  "INNER",
  "INOUT",
  "INSENSITIVE",
  "INSERT",
  "INT",
  "INT1",
  "INT2",
  "INT3",
  "INT4",
  "INT8",
  "INTEGER",
  "INTERSECT",
  "INTERVAL",
  "INTO",
  "IO_AFTER_GTIDS",
  "IO_BEFORE_GTIDS",
  "IS",
  "ITERATE",
  "JOIN",
  "JSON_TABLE",
  "KEY",
  "KEYS",
  "KILL",
  "LAG",
  "LAST_VALUE",
  "LATERAL",
  "LEAD",
  "LEADING",
  "LEAVE",
  "LEFT",
  "LIKE",
  "LIMIT",
  "LINEAR",
  "LINES",
  "LOAD",
  "LOCALTIME",
  "LOCALTIMESTAMP",
  "LOCK",
  "LONG",
  "LONGBLOB",
  "LONGTEXT",
  "LOOP",
  "LOW_PRIORITY",
  "MASTER_BIND",
  "MASTER_SSL_VERIFY_SERVER_CERT",
  "MATCH",
  "MAXVALUE",
  "MEDIUMBLOB",
  "MEDIUMINT",
  "MEDIUMTEXT",
  "MIDDLEINT",
  "MINUTE_MICROSECOND",
  "MINUTE_SECOND",
  "MOD",
  "MODIFIES",
  "NATURAL",
  "NOT",
  "NO_WRITE_TO_BINLOG",
  "NTH_VALUE",
  "NTILE",
  "NULL",
  "NUMERIC",
  "OF",
  "ON",
  "OPTIMIZE",
  "OPTIMIZER_COSTS",
  "OPTION",
  "OPTIONALLY",
  "OR",
  "ORDER",
  "OUT",
  "OUTER",
  "OUTFILE",
  "OVER",
  "PARTITION",
  "PERCENT_RANK",
  "PRECISION",
  "PRIMARY",
  "PROCEDURE",
  "PURGE",
  "RANGE",
  "RANK",
  "READ",
  "READS",
  "READ_WRITE",
  "REAL",
  "RECURSIVE",
  "REFERENCES",
  "REGEXP",
  "RELEASE",
  "RENAME",
  "REPEAT",
  "REPLACE",
  "REQUIRE",
  "RESIGNAL",
  "RESTRICT",
  "RETURN",
  "REVOKE",
  "RIGHT",
  "RLIKE",
  "ROW",
  "ROWS",
  "ROW_NUMBER",
  "SCHEMA",
  "SCHEMAS",
  "SECOND_MICROSECOND",
  "SELECT",
  "SENSITIVE",
  "SEPARATOR",
  "SET",
  "SHOW",
  "SIGNAL",
  "SMALLINT",
  "SPATIAL",
  "SPECIFIC",
  "SQL",
  "SQLEXCEPTION",
  "SQLSTATE",
  "SQLWARNING",
  "SQL_BIG_RESULT",
  "SQL_CALC_FOUND_ROWS",
  "SQL_SMALL_RESULT",
  "SSL",
  "STARTING",
  "STORED",
  "STRAIGHT_JOIN",
  "SYSTEM",
  "TABLE",
  "TERMINATED",
  "THEN",
  "TINYBLOB",
  "TINYINT",
  "TINYTEXT",
  "TO",
  "TRAILING",
  "TRIGGER",
  "TRUE",
  "UNDO",
  "UNION",
  "UNIQUE",
  "UNLOCK",
  "UNSIGNED",
  "UPDATE",
  "USAGE",
  "USE",
  "USING",
  "UTC_DATE",
  "UTC_TIME",
  "UTC_TIMESTAMP",
  "VALUES",
  "VARBINARY",
  "VARCHAR",
  "VARCHARACTER",
  "VARYING",
  "VIRTUAL",
  "WHEN",
  "WHERE",
  "WHILE",
  "WINDOW",
  "WITH",
  "WRITE",
  "XOR",
  "YEAR_MONTH",
  "ZEROFILL"
];


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_query_model.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxQueryModel)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/text/string.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/queryUtils.ts");
/* harmony import */ var _query_part__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/query_part.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");






class InfluxQueryModel {
  constructor(target, templateSrv, scopedVars) {
    this.selectModels = [];
    this.groupByParts = [];
    this.target = target;
    this.templateSrv = templateSrv;
    this.scopedVars = scopedVars;
    target.policy = target.policy || _types__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_POLICY;
    target.resultFormat = target.resultFormat || "time_series";
    target.orderByTime = target.orderByTime || "ASC";
    target.tags = target.tags || [];
    target.groupBy = target.groupBy || [
      { type: "time", params: ["$__interval"] },
      { type: "fill", params: ["null"] }
    ];
    target.select = target.select || [
      [
        { type: "field", params: ["value"] },
        { type: "mean", params: [] }
      ]
    ];
    this.updateProjection();
  }
  updateProjection() {
    this.selectModels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, (parts) => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(parts, _query_part__WEBPACK_IMPORTED_MODULE_3__["default"].create);
    });
    this.groupByParts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.groupBy, _query_part__WEBPACK_IMPORTED_MODULE_3__["default"].create);
  }
  updatePersistedParts() {
    this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.selectModels, (selectParts) => {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, (part) => {
        return { type: part.def.type, params: part.params };
      });
    });
  }
  hasGroupByTime() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, (g) => g.type === "time");
  }
  hasFill() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(this.target.groupBy, (g) => g.type === "fill");
  }
  addGroupBy(value) {
    let stringParts = value.match(/^(\w+)\((.*)\)$/);
    if (!stringParts || !this.target.groupBy) {
      return;
    }
    const typePart = stringParts[1];
    const arg = stringParts[2];
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_3__["default"].create({ type: typePart, params: [arg] });
    const partCount = this.target.groupBy.length;
    if (partCount === 0) {
      this.target.groupBy.push(partModel.part);
    } else if (typePart === "time") {
      this.target.groupBy.splice(0, 0, partModel.part);
    } else if (typePart === "tag") {
      if (this.target.groupBy[partCount - 1].type === "fill") {
        this.target.groupBy.splice(partCount - 1, 0, partModel.part);
      } else {
        this.target.groupBy.push(partModel.part);
      }
    } else {
      this.target.groupBy.push(partModel.part);
    }
    this.updateProjection();
  }
  removeGroupByPart(part, index) {
    const categories = _query_part__WEBPACK_IMPORTED_MODULE_3__["default"].getCategories();
    if (part.def.type === "time") {
      this.target.groupBy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(this.target.groupBy, (g) => g.type !== "fill");
      this.target.select = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(this.target.select, (s) => {
        return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.filter)(s, (part2) => {
          const partModel = _query_part__WEBPACK_IMPORTED_MODULE_3__["default"].create(part2);
          if (partModel.def.category === categories.Aggregations) {
            return false;
          }
          if (partModel.def.category === categories.Selectors) {
            return false;
          }
          return true;
        });
      });
    }
    this.target.groupBy.splice(index, 1);
    this.updateProjection();
  }
  removeSelect(index) {
    this.target.select.splice(index, 1);
    this.updateProjection();
  }
  removeSelectPart(selectParts, part) {
    if (part.def.type === "field") {
      if (this.selectModels.length > 1) {
        const modelsIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(this.selectModels, selectParts);
        this.selectModels.splice(modelsIndex, 1);
      }
    } else {
      const partIndex = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf)(selectParts, part);
      selectParts.splice(partIndex, 1);
    }
    this.updatePersistedParts();
  }
  addSelectPart(selectParts, type) {
    const partModel = _query_part__WEBPACK_IMPORTED_MODULE_3__["default"].create({ type });
    partModel.def.addStrategy(selectParts, partModel, this);
    this.updatePersistedParts();
  }
  isOperatorTypeHandler(operator, value, fieldName) {
    let textValue;
    if (operator === "Is Not") {
      operator = "!=";
    } else {
      operator = "=";
    }
    if (fieldName.endsWith("::tag")) {
      textValue = "'" + (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.removeRegexWrapper)(value.replace(/\\/g, "\\\\").replace(/\'/g, "\\'")) + "'";
      return {
        operator,
        value: textValue
      };
    }
    let lowerValue = value.toLowerCase();
    if (!isNaN(parseFloat(value))) {
      textValue = value;
    } else if (["true", "false"].includes(lowerValue)) {
      textValue = lowerValue;
    } else {
      textValue = "'" + (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.removeRegexWrapper)(value.replace(/\\/g, "\\\\").replace(/\'/g, "\\'")) + "'";
    }
    return {
      operator,
      value: textValue
    };
  }
  renderTagCondition(tag, index, interpolate) {
    let str = "";
    let operator = tag.operator;
    let value = tag.value;
    if (index > 0) {
      str = (tag.condition || "AND") + " ";
    }
    if (!operator) {
      if (/^\/.*\/$/.test(value)) {
        operator = "=~";
      } else {
        operator = "=";
      }
    }
    if (operator !== "=~" && operator !== "!~") {
      if (interpolate) {
        value = this.templateSrv.replace(value, this.scopedVars);
      }
      value = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.removeRegexWrapper)(value);
      if (operator.startsWith("Is")) {
        let r = this.isOperatorTypeHandler(operator, value, tag.key);
        operator = r.operator;
        value = r.value;
      } else if (!operator.startsWith(">") && !operator.startsWith("<") || operator === "<>") {
        value = "'" + value.replace(/\\/g, "\\\\").replace(/\'/g, "\\'") + "'";
      }
    } else if (interpolate) {
      value = this.templateSrv.replace(value, this.scopedVars, "regex");
    }
    let escapedKey = `"${tag.key}"`;
    if (tag.key.endsWith("::tag")) {
      escapedKey = `"${tag.key.slice(0, -5)}"::tag`;
    }
    if (tag.key.endsWith("::field")) {
      escapedKey = `"${tag.key.slice(0, -7)}"::field`;
    }
    return str + escapedKey + " " + operator + " " + value;
  }
  getMeasurementAndPolicy(interpolate) {
    let policy = this.target.policy;
    let measurement = this.target.measurement || "measurement";
    if (!measurement.match("^/.*/$")) {
      measurement = '"' + measurement + '"';
    } else if (interpolate) {
      measurement = this.templateSrv.replace(measurement, this.scopedVars, "regex");
    }
    if (policy !== _types__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_POLICY) {
      policy = '"' + this.target.policy + '".';
    } else {
      policy = "";
    }
    return policy + measurement;
  }
  interpolateQueryStr(value, variable) {
    if (!variable.multi && !variable.includeAll) {
      return value;
    }
    if (typeof value === "string") {
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.escapeRegex)(value);
    }
    const escapedValues = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(value, _grafana_data__WEBPACK_IMPORTED_MODULE_1__.escapeRegex);
    return "(" + escapedValues.join("|") + ")";
  }
  render(interpolate) {
    const target = this.target;
    if (target.rawQuery) {
      if (interpolate) {
        return this.templateSrv.replace(target.query, this.scopedVars, this.interpolateQueryStr);
      } else {
        return target.query;
      }
    }
    let query = "SELECT ";
    let i, y;
    for (i = 0; i < this.selectModels.length; i++) {
      const parts = this.selectModels[i];
      let selectText = "";
      for (y = 0; y < parts.length; y++) {
        const part = parts[y];
        selectText = part.render(selectText);
      }
      if (i > 0) {
        query += ", ";
      }
      query += selectText;
    }
    query += " FROM " + this.getMeasurementAndPolicy(interpolate) + " WHERE ";
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(target.tags, (tag, index) => {
      return this.renderTagCondition(tag, index, interpolate);
    });
    if (conditions.length > 0) {
      query += "(" + conditions.join(" ") + ") AND ";
    }
    query += "$timeFilter";
    let groupBySection = "";
    for (i = 0; i < this.groupByParts.length; i++) {
      const part = this.groupByParts[i];
      if (i > 0) {
        groupBySection += part.def.type === "fill" ? " " : ", ";
      }
      groupBySection += part.render("");
    }
    if (groupBySection.length) {
      query += " GROUP BY " + groupBySection;
    }
    if (target.fill) {
      query += " fill(" + target.fill + ")";
    }
    if (target.orderByTime === "DESC") {
      query += " ORDER BY time DESC";
    }
    if (target.limit) {
      query += " LIMIT " + target.limit;
    }
    if (target.slimit) {
      query += " SLIMIT " + target.slimit;
    }
    if (target.tz) {
      query += " tz('" + target.tz + "')";
    }
    return query;
  }
  renderAdhocFilters(filters) {
    const conditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(filters, (tag, index) => {
      return this.renderTagCondition(tag, index, true);
    });
    return conditions.join(" ");
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influx_series.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfluxSeries)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var app_core_TableModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/TableModel.ts");




class InfluxSeries {
  constructor(options) {
    this.series = options.series;
    this.alias = options.alias;
    this.annotation = options.annotation;
    this.meta = options.meta;
    this.refId = options.refId;
  }
  getTimeSeries() {
    const output = [];
    let i, j;
    if (this.series.length === 0) {
      return output;
    }
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, (series) => {
      const columns = series.columns.length;
      const tags = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(series.tags, (value, key) => {
        return key + ": " + value;
      });
      for (j = 1; j < columns; j++) {
        let seriesName = series.name;
        const columnName = series.columns[j];
        if (columnName !== "value") {
          seriesName = seriesName + "." + columnName;
        }
        if (this.alias) {
          seriesName = this._getSeriesName(series, j);
        } else if (series.tags) {
          seriesName = seriesName + " {" + tags.join(", ") + "}";
        }
        const datapoints = [];
        if (series.values) {
          for (i = 0; i < series.values.length; i++) {
            datapoints[i] = [series.values[i][j], series.values[i][0]];
          }
        }
        output.push({
          title: seriesName,
          target: seriesName,
          datapoints,
          tags: series.tags,
          meta: this.meta,
          refId: this.refId
        });
      }
    });
    return output;
  }
  _getSeriesName(series, index) {
    const regex = /\$(\w+)|\[\[([\s\S]+?)\]\]/g;
    const segments = series.name.split(".");
    return this.alias?.replace(regex, (match, g1, g2) => {
      const group = g1 || g2;
      const segIndex = parseInt(group, 10);
      if (group === "m" || group === "measurement") {
        return series.name;
      }
      if (group === "col") {
        return series.columns[index];
      }
      if (!isNaN(segIndex)) {
        return segments[segIndex] ?? match;
      }
      if (group.indexOf("tag_") !== 0) {
        return match;
      }
      const tag = group.replace("tag_", "");
      if (!series.tags) {
        return match;
      }
      return series.tags[tag];
    });
  }
  getAnnotations() {
    const list = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, (series) => {
      let titleCol = null;
      let timeCol = null;
      let timeEndCol = null;
      const tagsCol = [];
      let textCol = null;
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.columns, (column, index) => {
        if (column === "time") {
          timeCol = index;
          return;
        }
        if (column === "sequence_number") {
          return;
        }
        if (column === this.annotation?.titleColumn) {
          titleCol = index;
          return;
        }
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)((this.annotation?.tagsColumn || "").replace(" ", "").split(","), column)) {
          tagsCol.push(index);
          return;
        }
        if (column === this.annotation?.textColumn) {
          textCol = index;
          return;
        }
        if (column === this.annotation?.timeEndColumn) {
          timeEndCol = index;
          return;
        }
        if (!titleCol && textCol !== index) {
          titleCol = index;
        }
      });
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(series.values, (value) => {
        const data = {
          annotation: this.annotation,
          time: +new Date(value[timeCol]),
          title: value[titleCol],
          timeEnd: value[timeEndCol],
          // Remove empty values, then split in different tags for comma separated values
          tags: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(
            tagsCol.filter((t) => {
              return value[t];
            }).map((t) => {
              return value[t].split(",");
            })
          ),
          text: value[textCol]
        };
        list.push(data);
      });
    });
    return list;
  }
  getTable() {
    const table = new app_core_TableModel__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let i, j;
    table.refId = this.refId;
    table.meta = this.meta;
    if (this.series.length === 0) {
      return table;
    }
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(this.series, (series, seriesIndex) => {
      if (seriesIndex === 0) {
        const firstCol = series.columns[0];
        const firstTableCol = firstCol === "time" ? { text: "Time", type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time } : { text: firstCol };
        table.columns.push(firstTableCol);
        (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)((0,lodash__WEBPACK_IMPORTED_MODULE_0__.keys)(series.tags), (key) => {
          table.columns.push({ text: key });
        });
        for (j = 1; j < series.columns.length; j++) {
          table.columns.push({ text: series.columns[j] });
        }
      }
      if (series.values) {
        for (i = 0; i < series.values.length; i++) {
          const values = series.values[i];
          const reordered = [values[0]];
          if (series.tags) {
            for (const key in series.tags) {
              if (series.tags.hasOwnProperty(key)) {
                reordered.push(series.tags[key]);
              }
            }
          }
          for (j = 1; j < values.length; j++) {
            reordered.push(values[j]);
          }
          table.rows.push(reordered);
        }
      }
    });
    return table;
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influxql_metadata_query.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllMeasurements: () => (/* binding */ getAllMeasurements),
/* harmony export */   getAllPolicies: () => (/* binding */ getAllPolicies),
/* harmony export */   getFieldKeys: () => (/* binding */ getFieldKeys),
/* harmony export */   getTagKeys: () => (/* binding */ getTagKeys),
/* harmony export */   getTagValues: () => (/* binding */ getTagValues)
/* harmony export */ });
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _influxql_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influxql_query_builder.ts");



const runExploreQuery = async (options) => {
  const { type, datasource, scopedVars, measurement, retentionPolicy, tags, withKey, withMeasurementFilter } = options;
  const query = (0,_influxql_query_builder__WEBPACK_IMPORTED_MODULE_1__.buildMetadataQuery)({
    type,
    scopedVars,
    measurement,
    retentionPolicy,
    tags,
    withKey,
    withMeasurementFilter,
    withTimeFilter: datasource.showTagTime,
    templateService: datasource.templateSrv,
    database: datasource.database
  });
  const policy = retentionPolicy ? datasource.templateSrv.replace(retentionPolicy, {}, "regex") : "";
  const target = {
    query,
    policy,
    rawQuery: true,
    refId: "metadataQuery"
  };
  if (app_core_config__WEBPACK_IMPORTED_MODULE_0__["default"].featureToggles.influxdbBackendMigration) {
    return datasource.runMetadataQuery(target);
  } else {
    const options2 = { policy: target.policy };
    return datasource.metricFindQuery({ refId: "run-explore-query", query }, options2);
  }
};
async function getAllPolicies(datasource) {
  const data = await runExploreQuery({ type: "RETENTION_POLICIES", datasource });
  return data.map((item) => item.text);
}
async function getAllMeasurements(datasource, tags, withMeasurementFilter) {
  const data = await runExploreQuery({ type: "MEASUREMENTS", datasource, tags, withMeasurementFilter });
  return data.map((item) => item.text);
}
async function getTagKeys(datasource, measurement, retentionPolicy) {
  const data = await runExploreQuery({ type: "TAG_KEYS", datasource, measurement, retentionPolicy });
  return data.map((item) => item.text);
}
async function getTagValues(datasource, tags, withKey, measurement, retentionPolicy) {
  if (withKey.endsWith("::field")) {
    return [];
  }
  const data = await runExploreQuery({
    type: "TAG_VALUES",
    tags,
    withKey,
    datasource,
    measurement,
    retentionPolicy
  });
  return data.map((item) => item.text);
}
async function getFieldKeys(datasource, measurement, retentionPolicy) {
  const data = await runExploreQuery({ type: "FIELDS", datasource, measurement, retentionPolicy });
  return data.map((item) => item.text);
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/influxql_query_builder.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMetadataQuery: () => (/* binding */ buildMetadataQuery),
/* harmony export */   isValidTimeFilter: () => (/* binding */ isValidTimeFilter),
/* harmony export */   renderTagCondition: () => (/* binding */ renderTagCondition)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/text/string.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/types.ts");




const buildMetadataQuery = (params) => {
  let query = "";
  let {
    type,
    templateService,
    scopedVars,
    database,
    measurement,
    retentionPolicy,
    tags,
    withKey,
    withMeasurementFilter,
    withTimeFilter
  } = params;
  switch (type) {
    case "RETENTION_POLICIES":
      return 'SHOW RETENTION POLICIES on "' + database + '"';
    case "FIELDS":
      if (!measurement || measurement === "") {
        return "SHOW FIELD KEYS";
      }
      if (measurement && !measurement.match(/^\/.*\/|^$/)) {
        measurement = '"' + measurement + '"';
        if (retentionPolicy && retentionPolicy !== _types__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POLICY) {
          retentionPolicy = '"' + retentionPolicy + '"';
          measurement = retentionPolicy + "." + measurement;
        }
      }
      return "SHOW FIELD KEYS FROM " + measurement;
    case "TAG_KEYS":
      query = "SHOW TAG KEYS";
      break;
    case "TAG_VALUES":
      query = "SHOW TAG VALUES";
      break;
    case "MEASUREMENTS":
      query = "SHOW MEASUREMENTS";
      if (withMeasurementFilter) {
        query += " WITH MEASUREMENT =~ /(?i)" + (0,_grafana_data__WEBPACK_IMPORTED_MODULE_1__.escapeRegex)(withMeasurementFilter) + "/";
      }
      break;
    default:
      return query;
  }
  if (measurement) {
    if (!measurement.match("^/.*/") && !measurement.match(/^merge\(.*\)/)) {
      measurement = '"' + measurement + '"';
    }
    if (retentionPolicy && retentionPolicy !== _types__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_POLICY) {
      retentionPolicy = '"' + retentionPolicy + '"';
      measurement = retentionPolicy + "." + measurement;
    }
    if (measurement !== "") {
      query += " FROM " + measurement;
    }
  }
  if (withKey) {
    let keyIdentifier = withKey;
    if (keyIdentifier.endsWith("::tag")) {
      keyIdentifier = keyIdentifier.slice(0, -5);
    }
    query += ' WITH KEY = "' + keyIdentifier + '"';
  }
  let whereConditions = [];
  if (tags && tags.length > 0) {
    whereConditions = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.reduce)(
      tags,
      (memo, tag) => {
        if (tag.key && tag.key === withKey) {
          return memo;
        }
        if (tag.operator === ">" || tag.operator === "<") {
          return memo;
        }
        memo.push(renderTagCondition(tag, memo.length, templateService, scopedVars, true));
        return memo;
      },
      []
    );
  }
  let shouldUseTime = isValidTimeFilter(withTimeFilter) && type !== "MEASUREMENTS";
  if (whereConditions.length > 0) {
    query += " WHERE " + whereConditions.join(" ") + (shouldUseTime ? " AND time > now() - " + withTimeFilter : "");
  } else {
    query += shouldUseTime ? " WHERE time > now() - " + withTimeFilter : "";
  }
  if (type === "MEASUREMENTS") {
    query += " LIMIT 100";
  }
  return query;
};
function isValidTimeFilter(value) {
  if (!value || typeof value !== "string") {
    return false;
  }
  const normalizedValue = value.replace(/µ/g, "u");
  const validUnits = /* @__PURE__ */ new Set(["ns", "u", "ms", "s", "m", "h", "d", "w"]);
  const pattern = /(\d+)(ns|u|ms|s|m|h|d|w)/g;
  const usedUnits = /* @__PURE__ */ new Set();
  let match;
  let totalLength = 0;
  while ((match = pattern.exec(normalizedValue)) !== null) {
    const [fullMatch, numberPart, unit] = match;
    totalLength += fullMatch.length;
    if (!validUnits.has(unit) || usedUnits.has(unit) || numberPart.startsWith("0")) {
      return false;
    }
    usedUnits.add(unit);
  }
  return totalLength === normalizedValue.length;
}
function renderTagCondition(tag, index, templateSrv, scopedVars, interpolate) {
  let str = "";
  let operator = tag.operator;
  let value = tag.value;
  if (index > 0) {
    str = (tag.condition || "AND") + " ";
  }
  if (!operator) {
    if (/^\/.*\/$/.test(tag.value)) {
      operator = "=~";
    } else {
      operator = "=";
    }
  }
  if (value === "" || operator !== "=~" && operator !== "!~") {
    value = "'" + value.replace(/\\/g, "\\\\").replace(/\'/g, "\\'") + "'";
  }
  if (operator !== "=~" && operator !== "!~") {
    if (interpolate) {
      value = templateSrv.replace(value, scopedVars);
    } else if (operator !== ">" && operator !== "<") {
      value = "'" + value.replace(/\\/g, "\\\\").replace(/\'/g, "\\'") + "'";
    }
  } else if (interpolate) {
    value = templateSrv.replace(value, scopedVars, "regex");
  }
  let escapedKey = `"${tag.key}"`;
  if (tag.key.endsWith("::tag")) {
    escapedKey = `"${tag.key.slice(0, -5)}"::tag`;
  }
  if (tag.key.endsWith("::field")) {
    escapedKey = `"${tag.key.slice(0, -7)}"::field`;
  }
  return str + escapedKey + " " + operator + " " + value;
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/migrations.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareAnnotation: () => (/* binding */ prepareAnnotation)
/* harmony export */ });

const migrateLegacyAnnotation = (json) => {
  const target = {
    refId: "",
    query: json.query ?? "",
    queryType: "tags",
    fromAnnotations: true,
    tagsColumn: json.tagsColumn ?? "",
    textColumn: json.textColumn ?? "",
    timeEndColumn: json.timeEndColumn ?? "",
    titleColumn: json.titleColumn ?? "",
    name: json.name ?? ""
  };
  if (json.target && json.target.limit) {
    target.limit = json.target.limit;
  }
  if (json.target && json.target.matchAny) {
    target.matchAny = json.target.matchAny;
  }
  if (json.target && json.target.tags) {
    target.tags = json.target.tags;
  }
  if (json.target && json.target.type) {
    target.type = json.target.type;
  }
  return target;
};
const prepareAnnotation = (json) => {
  json.target = json.target && !json.target?.query ? migrateLegacyAnnotation(json) : json.target;
  return json;
};


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _components_editor_config_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config/ConfigEditor.tsx");
/* harmony import */ var _components_editor_config_v2_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/config-v2/ConfigEditor.tsx");
/* harmony import */ var _components_editor_query_QueryEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/QueryEditor.tsx");
/* harmony import */ var _components_editor_query_influxql_InfluxStartPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/query/influxql/InfluxStartPage.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/influxdb/datasource.ts");








const configEditor = _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.config.featureToggles.newInfluxDSConfigPageDesign ? _components_editor_config_v2_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__.ConfigEditor : _components_editor_config_ConfigEditor__WEBPACK_IMPORTED_MODULE_2__.ConfigEditor;
const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_6__["default"]).setConfigEditor(configEditor).setQueryEditor(_components_editor_query_QueryEditor__WEBPACK_IMPORTED_MODULE_4__.QueryEditor).setQueryEditorHelp(_components_editor_query_influxql_InfluxStartPage__WEBPACK_IMPORTED_MODULE_5__.InfluxStartPage);


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/queryUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNewGroupByPart: () => (/* binding */ addNewGroupByPart),
/* harmony export */   addNewSelectPart: () => (/* binding */ addNewSelectPart),
/* harmony export */   buildRawQuery: () => (/* binding */ buildRawQuery),
/* harmony export */   changeGroupByPart: () => (/* binding */ changeGroupByPart),
/* harmony export */   changeSelectPart: () => (/* binding */ changeSelectPart),
/* harmony export */   normalizeQuery: () => (/* binding */ normalizeQuery),
/* harmony export */   removeGroupByPart: () => (/* binding */ removeGroupByPart),
/* harmony export */   removeRegexWrapper: () => (/* binding */ removeRegexWrapper),
/* harmony export */   removeSelectPart: () => (/* binding */ removeSelectPart)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _influx_query_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/influxdb/influx_query_model.ts");



function buildRawQuery(query) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query);
  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  return model.render(false);
}
function normalizeQuery(query) {
  if (query.policy !== void 0 && query.resultFormat !== void 0 && query.orderByTime !== void 0 && query.tags !== void 0 && query.groupBy !== void 0 && query.select !== void 0) {
    return query;
  }
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query);
  return new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy).target;
}
function addNewSelectPart(query, type, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query);
  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addSelectPart(model.selectModels[index], type);
  return model.target;
}
function removeSelectPart(query, partIndex, index) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query);
  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  const selectModel = model.selectModels[index];
  model.removeSelectPart(selectModel, selectModel[partIndex]);
  return model.target;
}
function changeSelectPart(query, listIndex, partIndex, newParams) {
  const newSel = [...query.select ?? []];
  newSel[listIndex] = [...newSel[listIndex]];
  newSel[listIndex][partIndex] = {
    ...newSel[listIndex][partIndex],
    params: newParams
  };
  return { ...query, select: newSel };
}
function addNewGroupByPart(query, type) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query);
  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.addGroupBy(type);
  return model.target;
}
function removeGroupByPart(query, partIndex) {
  const queryCopy = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(query);
  const model = new _influx_query_model__WEBPACK_IMPORTED_MODULE_1__["default"](queryCopy);
  model.removeGroupByPart(model.groupByParts[partIndex], partIndex);
  return model.target;
}
function changeGroupByPart(query, partIndex, newParams) {
  const newGroupBy = [...query.groupBy ?? []];
  newGroupBy[partIndex] = {
    ...newGroupBy[partIndex],
    params: newParams
  };
  return { ...query, groupBy: newGroupBy };
}
function removeRegexWrapper(str) {
  const regex = /\/\^(.*?)\$\//;
  const match = str.match(regex);
  if (match && match.length > 1) {
    return match[1];
  }
  return str;
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/query_part.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/alerting/state/query_part.ts");



const index = [];
const categories = {
  Aggregations: [],
  GroupByTimeFunctions: [],
  Selectors: [],
  Transformations: [],
  Predictors: [],
  Math: [],
  Aliasing: [],
  Fields: []
};
function createPart(part) {
  const def = index[part.type];
  if (!def) {
    throw { message: "Could not find query part " + part.type };
  }
  return new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPart(part, def);
}
function register(options) {
  index[options.type] = new app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.QueryPartDef(options);
  options.category.push(index[options.type]);
}
function aliasRenderer(part, innerExpr) {
  return innerExpr + ' AS "' + part.params[0] + '"';
}
function fieldRenderer(part) {
  const param = part.params[0];
  if (param === "*") {
    return "*";
  }
  let escapedParam = `"${param}"`;
  if (param.endsWith("::tag")) {
    escapedParam = `"${param.slice(0, -5)}"::tag`;
  }
  if (param.endsWith("::field")) {
    escapedParam = `"${param.slice(0, -7)}"::field`;
  }
  return escapedParam;
}
function replaceAggregationAddStrategy(selectParts, partModel) {
  for (let i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];
    if (part.def.category === categories.Aggregations) {
      if (part.def.type === partModel.def.type) {
        return;
      }
      if (part.def.type === "count" && partModel.def.type === "distinct") {
        break;
      }
      if (part.def.type === "distinct") {
        const morePartsAvailable = selectParts.length >= i + 2;
        if (partModel.def.type !== "count" && morePartsAvailable) {
          const nextPart = selectParts[i + 1];
          if (nextPart.def.category === categories.Aggregations) {
            selectParts.splice(i + 1, 1);
          }
        } else if (partModel.def.type === "count") {
          if (!morePartsAvailable || selectParts[i + 1].def.type !== "count") {
            selectParts.splice(i + 1, 0, partModel);
          }
          return;
        }
      }
      selectParts[i] = partModel;
      return;
    }
    if (part.def.category === categories.Selectors) {
      selectParts[i] = partModel;
      return;
    }
  }
  selectParts.splice(1, 0, partModel);
}
function addTransformationStrategy(selectParts, partModel) {
  let i;
  for (i = 0; i < selectParts.length; i++) {
    const part = selectParts[i];
    if (part.def.category === categories.Math || part.def.category === categories.Aliasing) {
      break;
    }
  }
  selectParts.splice(i, 0, partModel);
}
function addMathStrategy(selectParts, partModel) {
  const partCount = selectParts.length;
  if (partCount > 0) {
    if (selectParts[partCount - 1].def.type === "math") {
      selectParts[partCount - 1] = partModel;
      return;
    }
    if (partCount > 1 && selectParts[partCount - 2].def.type === "math") {
      selectParts[partCount - 2] = partModel;
      return;
    } else if (selectParts[partCount - 1].def.type === "alias") {
      selectParts.splice(partCount - 1, 0, partModel);
      return;
    }
  }
  selectParts.push(partModel);
}
function addAliasStrategy(selectParts, partModel) {
  const partCount = selectParts.length;
  if (partCount > 0) {
    if (selectParts[partCount - 1].def.type === "alias") {
      selectParts[partCount - 1] = partModel;
      return;
    }
  }
  selectParts.push(partModel);
}
function addFieldStrategy(selectParts, partModel, query) {
  const parts = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.map)(selectParts, (part) => {
    return createPart({ type: part.def.type, params: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.clone)(part.params) });
  });
  query.selectModels.push(parts);
}
register({
  type: "field",
  addStrategy: addFieldStrategy,
  category: categories.Fields,
  params: [{ type: "field", dynamicLookup: true }],
  defaultParams: ["value"],
  renderer: fieldRenderer
});
register({
  type: "count",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "distinct",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "integral",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "mean",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "median",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "mode",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "sum",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Aggregations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "derivative",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [
    {
      name: "duration",
      type: "interval",
      options: ["1s", "10s", "1m", "5m", "10m", "15m", "1h"]
    }
  ],
  defaultParams: ["10s"],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "spread",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "non_negative_derivative",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [
    {
      name: "duration",
      type: "interval",
      options: ["1s", "10s", "1m", "5m", "10m", "15m", "1h"]
    }
  ],
  defaultParams: ["10s"],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "difference",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "non_negative_difference",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "moving_average",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [{ name: "window", type: "int", options: [5, 10, 20, 30, 40] }],
  defaultParams: [10],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "cumulative_sum",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "stddev",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "time",
  category: categories.GroupByTimeFunctions,
  params: [
    {
      name: "interval",
      type: "time",
      options: ["$__interval", "1s", "10s", "1m", "5m", "10m", "15m", "1h"]
    }
  ],
  defaultParams: ["$__interval"],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "fill",
  category: categories.GroupByTimeFunctions,
  params: [
    {
      name: "fill",
      type: "string",
      options: ["none", "null", "0", "previous", "linear"]
    }
  ],
  defaultParams: ["null"],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "elapsed",
  addStrategy: addTransformationStrategy,
  category: categories.Transformations,
  params: [
    {
      name: "duration",
      type: "interval",
      options: ["1s", "10s", "1m", "5m", "10m", "15m", "1h"]
    }
  ],
  defaultParams: ["10s"],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "holt_winters",
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [
    { name: "number", type: "int", options: [5, 10, 20, 30, 40] },
    { name: "season", type: "int", options: [0, 1, 2, 5, 10] }
  ],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "holt_winters_with_fit",
  addStrategy: addTransformationStrategy,
  category: categories.Predictors,
  params: [
    { name: "number", type: "int", options: [5, 10, 20, 30, 40] },
    { name: "season", type: "int", options: [0, 1, 2, 5, 10] }
  ],
  defaultParams: [10, 2],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "bottom",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{ name: "count", type: "int" }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "first",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "last",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "max",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "min",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [],
  defaultParams: [],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "percentile",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{ name: "nth", type: "int" }],
  defaultParams: [95],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "top",
  addStrategy: replaceAggregationAddStrategy,
  category: categories.Selectors,
  params: [{ name: "count", type: "int" }],
  defaultParams: [3],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.functionRenderer
});
register({
  type: "tag",
  category: categories.GroupByTimeFunctions,
  params: [{ name: "tag", type: "string", dynamicLookup: true }],
  defaultParams: ["tag"],
  renderer: fieldRenderer
});
register({
  type: "math",
  addStrategy: addMathStrategy,
  category: categories.Math,
  params: [{ name: "expr", type: "string" }],
  defaultParams: [" / 100"],
  renderer: app_features_alerting_state_query_part__WEBPACK_IMPORTED_MODULE_1__.suffixRenderer
});
register({
  type: "alias",
  addStrategy: addAliasStrategy,
  category: categories.Aliasing,
  params: [{ name: "name", type: "string", quote: "double" }],
  defaultParams: ["alias"],
  renderMode: "suffix",
  renderer: aliasRenderer
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createPart,
  getCategories: () => {
    return categories;
  },
  replaceAggregationAdd: replaceAggregationAddStrategy
});


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/response_parser.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponseParser),
/* harmony export */   getSelectedParams: () => (/* binding */ getSelectedParams)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/dataFrame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/utils/queryResponse.ts");
/* harmony import */ var app_core_TableModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/TableModel.ts");





class ResponseParser {
  parse(query, results) {
    if (!results?.results || results.results.length === 0) {
      return [];
    }
    const influxResults = results.results[0];
    if (!influxResults.series) {
      return [];
    }
    const normalizedQuery = query.toLowerCase();
    const isRetentionPolicyQuery = normalizedQuery.indexOf("show retention policies") >= 0;
    const isValueFirst = normalizedQuery.indexOf("show field keys") >= 0 || isRetentionPolicyQuery;
    const res = /* @__PURE__ */ new Set();
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(influxResults.series, (serie) => {
      (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(serie.values, (value) => {
        if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) {
          if (isValueFirst) {
            res.add(value[0].toString());
          } else if (value[1] !== void 0) {
            res.add(value[1].toString());
          } else {
            res.add(value[0].toString());
          }
        } else {
          res.add(value.toString());
        }
      });
    });
    return Array.from(res).map((v) => ({ text: v }));
  }
  getTable(dfs, target, meta) {
    let table = new app_core_TableModel__WEBPACK_IMPORTED_MODULE_3__["default"]();
    if (dfs.length > 0) {
      table.meta = {
        ...meta,
        executedQueryString: dfs[0].meta?.executedQueryString
      };
      table.refId = target.refId;
      table = getTableCols(dfs, table, target);
      if (dfs[0].fields[1] && dfs[0].fields[1].labels) {
        let dfsByLabels = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.groupBy)(
          dfs,
          (df) => df.fields[1].labels ? Object.values(df.fields[1].labels) : null
        );
        const labels = Object.keys(dfsByLabels);
        const dfsByLabelValues = Object.values(dfsByLabels);
        for (let i = 0; i < dfsByLabelValues.length; i++) {
          table = getTableRows(dfsByLabelValues[i], table, [...labels[i].split(",")]);
        }
      } else {
        table = getTableRows(dfs, table, []);
      }
    }
    return table;
  }
  async transformAnnotationResponse(annotation, data, target) {
    const rsp = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.toDataQueryResponse)(data, [target]);
    if (!rsp) {
      return [];
    }
    const table = this.getTable(rsp.data, target, {});
    const list = [];
    let titleColIndex = 0;
    let timeColIndex = 0;
    let timeEndColIndex = 0;
    let textColIndex = 0;
    const tagsColIndexes = [];
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(table.columns, (column, index) => {
      if (column.text.toLowerCase() === "time") {
        timeColIndex = index;
        return;
      }
      if (column.text === annotation.titleColumn) {
        titleColIndex = index;
        return;
      }
      if (colContainsTag(column.text, annotation.tagsColumn)) {
        tagsColIndexes.push(index);
        return;
      }
      if (annotation.textColumn && column.text.includes(annotation.textColumn)) {
        textColIndex = index;
        return;
      }
      if (column.text === annotation.timeEndColumn) {
        timeEndColIndex = index;
        return;
      }
      if (!titleColIndex && textColIndex !== index) {
        titleColIndex = index;
      }
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(table.rows, (value) => {
      const data2 = {
        annotation,
        time: +new Date(value[timeColIndex]),
        title: value[titleColIndex],
        timeEnd: value[timeEndColIndex],
        // Remove empty values, then split in different tags for comma separated values
        tags: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.flatten)(
          tagsColIndexes.filter((t) => {
            return value[t];
          }).map((t) => {
            return value[t].split(",");
          })
        ),
        text: value[textColIndex]
      };
      list.push(data2);
    });
    return list;
  }
}
function colContainsTag(colText, tagsColumn) {
  const tags = (tagsColumn || "").replace(" ", "").split(",");
  for (const tag of tags) {
    if (tag !== "" && colText.includes(tag)) {
      return true;
    }
  }
  return false;
}
function getTableCols(dfs, table, target) {
  const selectedParams = getSelectedParams(target);
  dfs[0].fields.forEach((field) => {
    if (field.name.toLowerCase() === "time") {
      table.columns.push({ text: "Time", type: _grafana_data__WEBPACK_IMPORTED_MODULE_1__.FieldType.time });
    } else if (field.name.toLowerCase() === "value") {
      if (field.labels) {
        Object.keys(field.labels).forEach((key) => {
          table.columns.push({ text: key });
        });
      }
    }
  });
  if (dfs[0].refId === "metricFindQuery") {
    dfs.forEach((field) => {
      if (field.name) {
        table.columns.push({ text: field.name });
      }
    });
  }
  for (let i = 0; i < selectedParams.length; i++) {
    table.columns.push({ text: selectedParams[i] });
  }
  if (target.rawQuery && selectedParams.length === 0 && rawQuerySelectedFieldsInDataframe(target.query, dfs) && dfs[0].refId !== "metricFindQuery") {
    dfs.map((df) => {
      if (df.name) {
        table.columns.push({ text: df.name });
      }
    });
  }
  return table;
}
function getTableRows(dfs, table, labels) {
  const values = dfs[0].fields[0].values;
  for (let i = 0; i < values.length; i++) {
    const time = values[i];
    const metrics = dfs.map((df) => {
      return df.fields[1] ? df.fields[1].values[i] : null;
    });
    if (metrics.indexOf(null) < 0) {
      table.rows.push([time, ...labels, ...metrics]);
    }
  }
  return table;
}
function getSelectedParams(target) {
  let allParams = [];
  target.select?.forEach((select) => {
    const selector = select.filter((x) => x.type !== "field");
    if (selector.length > 0) {
      const aliasIfExist = selector.find((s) => s.type === "alias");
      if (aliasIfExist) {
        allParams.push(aliasIfExist.params?.[0].toString() ?? "");
      } else {
        allParams.push(selector[0].type);
      }
    } else {
      if (select[0] && select[0].params && select[0].params[0]) {
        allParams.push(select[0].params[0].toString());
      }
    }
  });
  let uniqueParams = [];
  allParams.forEach((param) => {
    uniqueParams.push(incrementName(param, param, uniqueParams, 0));
  });
  return uniqueParams;
}
function incrementName(name, nameIncrement, params, index) {
  if (params.indexOf(nameIncrement) > -1) {
    index++;
    return incrementName(name, name + "_" + index, params, index);
  }
  return nameIncrement;
}
function rawQuerySelectedFieldsInDataframe(query, dfs) {
  const names = dfs.map((df) => df.name);
  const colsInRawQuery = names.every((name) => {
    if (name && query) {
      const nameParts = name.split(".");
      return nameParts.every((np) => query.toLowerCase().includes(np.toLowerCase()));
    }
    return false;
  });
  const queryChecks = ["*", "SHOW"];
  const otherChecks = queryChecks.some((qc) => {
    if (query) {
      return query.toLowerCase().includes(qc.toLowerCase());
    }
    return false;
  });
  return colsInRawQuery || otherChecks;
}


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/types.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_POLICY: () => (/* binding */ DEFAULT_POLICY),
/* harmony export */   InfluxVersion: () => (/* binding */ InfluxVersion)
/* harmony export */ });

const DEFAULT_POLICY = "default";
var InfluxVersion = /* @__PURE__ */ ((InfluxVersion2) => {
  InfluxVersion2["InfluxQL"] = "InfluxQL";
  InfluxVersion2["Flux"] = "Flux";
  InfluxVersion2["SQL"] = "SQL";
  return InfluxVersion2;
})(InfluxVersion || {});


/***/ }),

/***/ "./public/app/plugins/datasource/influxdb/variables.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfluxVariableSupport: () => (/* binding */ InfluxVariableSupport)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/variables.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _components_editor_variable_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/influxdb/components/editor/variable/VariableQueryEditor.tsx");






class InfluxVariableSupport extends _grafana_data__WEBPACK_IMPORTED_MODULE_3__.CustomVariableSupport {
  constructor(datasource, templateSrv = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getTemplateSrv)()) {
    super();
    this.datasource = datasource;
    this.templateSrv = templateSrv;
    this.editor = _components_editor_variable_VariableQueryEditor__WEBPACK_IMPORTED_MODULE_5__.InfluxVariableEditor;
  }
  query(request) {
    let query;
    if (typeof request.targets[0] === "string") {
      query = request.targets[0];
    } else {
      query = request.targets[0].query;
    }
    if (!query) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({ data: [] });
    }
    const q = this.templateSrv.replace(query, request.scopedVars, this.datasource.interpolateQueryExpr);
    const timeFilter = this.datasource.getTimeFilter({ rangeRaw: request.range.raw, timezone: request.timezone });
    const interpolated = q.replace("$timeFilter", timeFilter);
    const metricFindStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(
      this.datasource.metricFindQuery(
        {
          refId: request.targets[0].refId,
          query: interpolated,
          maxDataPoints: request.targets[0].maxDataPoints ?? 1e3
        },
        { range: request.range }
      )
    );
    return metricFindStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((results) => ({ data: results })));
  }
}


/***/ })

}]);
//# sourceMappingURL=influxdbPlugin.981aa268bd114f528acb.js.map