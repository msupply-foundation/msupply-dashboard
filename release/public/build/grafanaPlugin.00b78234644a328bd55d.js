"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["grafanaPlugin"],{

/***/ "./public/app/features/live/info.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getManagedChannelInfo: () => (/* binding */ getManagedChannelInfo)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/dataframe/DataFrameJSON.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");



async function getManagedChannelInfo() {
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get("api/live/list").then((v) => {
    const channelInfo = v.channels ?? [];
    const channelFields = {};
    const channels = channelInfo.map((c) => {
      if (c.data) {
        const distinctFields = /* @__PURE__ */ new Set();
        const frame = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_0__.dataFrameFromJSON)(c.data);
        for (const f of frame.fields) {
          distinctFields.add(f.name);
        }
        channelFields[c.channel] = Array.from(distinctFields).map((n) => ({
          value: n,
          label: n
        }));
      }
      return {
        value: c.channel,
        label: c.channel + " [" + c.minute_rate + " msg/min]"
      };
    });
    return { channelFields, channels };
  });
}


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditor: () => (/* binding */ QueryEditor),
/* harmony export */   UnthemedQueryEditor: () => (/* binding */ UnthemedQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/dataframe/DataFrameJSON.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/rangeutil.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/services/dataSourceSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/FileDropzone/FileDropzone.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_features_dataframe_import_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/dataframe-import/constants.ts");
/* harmony import */ var app_features_dataframe_import_utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/dataframe-import/utils.ts");
/* harmony import */ var app_features_live_info__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/live/info.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/plugins/datasource/grafana/types.ts");
/* harmony import */ var _RandomWalkEditor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/RandomWalkEditor.tsx");
/* harmony import */ var _SearchEditor__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/SearchEditor.tsx");















const labelWidth = 12;
class UnthemedQueryEditor extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
  constructor(props) {
    super(props);
    this.state = { channels: [], channelFields: {} };
    this.queryTypes = [
      {
        label: "Random Walk",
        value: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.RandomWalk,
        description: "Random signal within the selected time range"
      },
      {
        label: "Live Measurements",
        value: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.LiveMeasurements,
        description: "Stream real-time measurements from Grafana"
      },
      {
        label: "List public files",
        value: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.List,
        description: "Show directory listings for public resources"
      }
    ];
    this.onQueryTypeChange = (sel) => {
      const { onChange, query, onRunQuery } = this.props;
      onChange({ ...query, queryType: sel.value });
      onRunQuery();
      this.loadChannelInfo();
    };
    this.onChannelChange = (sel) => {
      const { onChange, query, onRunQuery } = this.props;
      onChange({ ...query, channel: sel?.value });
      onRunQuery();
    };
    this.onFieldNamesChange = (item) => {
      const { onChange, query, onRunQuery } = this.props;
      let fields = [];
      if (Array.isArray(item)) {
        fields = item.map((v) => v.value);
      } else if (item.value) {
        fields = [item.value];
      }
      if (fields.length === 1 && !query.filter?.fields?.length && query.channel) {
        const names = this.state.channelFields[query.channel] ?? [];
        const tf = names.find((f) => f.value === "time" || f.value === "Time");
        if (tf && tf.value && tf.value !== fields[0]) {
          fields = [tf.value, ...fields];
        }
      }
      onChange({
        ...query,
        filter: {
          ...query.filter,
          fields
        }
      });
      onRunQuery();
    };
    this.checkAndUpdateValue = (key, txt) => {
      const { onChange, query, onRunQuery } = this.props;
      if (key === "buffer") {
        let buffer;
        if (txt) {
          try {
            buffer = _grafana_data__WEBPACK_IMPORTED_MODULE_6__.intervalToSeconds(txt) * 1e3;
          } catch (err) {
            console.warn("ERROR", err);
          }
        }
        onChange({
          ...query,
          buffer
        });
      } else {
        onChange({
          ...query,
          [key]: txt
        });
      }
      onRunQuery();
    };
    this.handleEnterKey = (e) => {
      if (e.key !== "Enter") {
        return;
      }
      this.checkAndUpdateValue("buffer", e.currentTarget.value);
    };
    this.handleBlur = (e) => {
      this.checkAndUpdateValue("buffer", e.currentTarget.value);
    };
    this.onFolderChanged = (sel) => {
      const { onChange, query, onRunQuery } = this.props;
      onChange({ ...query, path: sel?.value });
      onRunQuery();
    };
    // Skip rendering the file list as we're handling that in this component instead.
    this.fileListRenderer = (file, removeFile) => {
      return null;
    };
    this.onFileDrop = (acceptedFiles2, fileRejections, event) => {
      (0,app_features_dataframe_import_utils__WEBPACK_IMPORTED_MODULE_21__.filesToDataframes)(acceptedFiles2).subscribe((next) => {
        const snapshot = [];
        next.dataFrames.forEach((df) => {
          const dataframeJson = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dataFrameToJSON)(df);
          snapshot.push(dataframeJson);
        });
        this.props.onChange({
          ...this.props.query,
          file: { name: next.file.name, size: next.file.size },
          queryType: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.Snapshot,
          snapshot
        });
        this.props.onRunQuery();
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_9__.reportInteraction)("grafana_datasource_drop_files", {
          number_of_files: fileRejections.length + acceptedFiles2.length,
          accepted_files: acceptedFiles2.map((a) => {
            return { type: a.type, size: a.size };
          }),
          rejected_files: fileRejections.map((r) => {
            return { type: r.file.type, size: r.file.size };
          })
        });
      });
    };
    this.onSearchChange = (search) => {
      const { query, onChange, onRunQuery } = this.props;
      onChange({
        ...query,
        search
      });
      onRunQuery();
    };
    this.onSearchNextChange = (search) => {
      const { query, onChange, onRunQuery } = this.props;
      onChange({
        ...query,
        searchNext: search
      });
      onRunQuery();
    };
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.panelTitleSearch && app_core_config__WEBPACK_IMPORTED_MODULE_19__.hasAlphaPanels) {
      this.queryTypes.push({
        label: "Search",
        value: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.Search,
        description: "Search for grafana resources"
      });
    }
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.unifiedStorageSearchUI) {
      this.queryTypes.push({
        label: "Search (experimental)",
        value: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.SearchNext,
        description: "Search for grafana resources"
      });
    }
    if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.editPanelCSVDragAndDrop) {
      this.queryTypes.push({
        label: "Spreadsheet or snapshot",
        value: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.Snapshot,
        description: "Query an uploaded spreadsheet or a snapshot"
      });
    }
  }
  loadChannelInfo() {
    (0,app_features_live_info__WEBPACK_IMPORTED_MODULE_22__.getManagedChannelInfo)().then((v) => {
      this.setState(v);
    });
  }
  loadFolderInfo() {
    const query = {
      targets: [{ queryType: _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.List, refId: "A" }]
    };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.getDataSourceSrv)().get("-- Grafana --").then((ds) => {
      const gds = ds;
      gds.query(query).subscribe({
        next: (rsp) => {
          if (rsp.data.length) {
            const names = rsp.data[0].fields[0];
            const folders = names.values.map((v) => ({
              value: v,
              label: v
            }));
            this.setState({ folders });
          }
        }
      });
    });
  }
  componentDidMount() {
    this.loadChannelInfo();
  }
  renderMeasurementsQuery() {
    let { channel, filter, buffer } = this.props.query;
    let { channels, channelFields } = this.state;
    let currentChannel = channels.find((c) => c.value === channel);
    if (channel && !currentChannel) {
      currentChannel = {
        value: channel,
        label: channel,
        description: `Connected to ${channel}`
      };
      channels = [currentChannel, ...channels];
    }
    const distinctFields = /* @__PURE__ */ new Set();
    const fields = channel ? channelFields[channel] ?? [] : [];
    if (filter?.fields) {
      for (const f of filter.fields) {
        if (!distinctFields.has(f)) {
          fields.push({
            value: f,
            label: `${f} (not loaded)`,
            description: `Configured, but not found in the query results`
          });
          distinctFields.add(f);
        }
      }
    }
    let formattedTime = "";
    if (buffer) {
      formattedTime = _grafana_data__WEBPACK_IMPORTED_MODULE_6__.secondsToHms(buffer / 1e3);
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineField, { label: "Channel", grow: true, labelWidth, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Select,
        {
          options: channels,
          value: currentChannel || "",
          onChange: this.onChannelChange,
          allowCustomValue: true,
          backspaceRemovesValue: true,
          placeholder: "Select measurements channel",
          isClearable: true,
          noOptionsMessage: "Enter channel name",
          formatCreateLabel: (input) => `Connect to: ${input}`
        }
      ) }),
      channel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "row", gap: 0, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineField, { label: "Fields", grow: true, labelWidth, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Select,
          {
            options: fields,
            value: filter?.fields || [],
            onChange: this.onFieldNamesChange,
            allowCustomValue: true,
            backspaceRemovesValue: true,
            placeholder: "All fields",
            isClearable: true,
            noOptionsMessage: "Unable to list all fields",
            formatCreateLabel: (input) => `Field: ${input}`,
            isSearchable: true,
            isMulti: true
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineField, { label: "Buffer", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Input,
          {
            placeholder: "Auto",
            width: 12,
            defaultValue: formattedTime,
            onKeyDown: this.handleEnterKey,
            onBlur: this.handleBlur,
            spellCheck: false
          }
        ) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert, { title: "Grafana Live - Measurements", severity: "info", children: "This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready." })
    ] });
  }
  renderListPublicFiles() {
    let { path } = this.props.query;
    let { folders } = this.state;
    if (!folders) {
      folders = [];
      this.loadFolderInfo();
    }
    const currentFolder = folders.find((f) => f.value === path);
    if (path && !currentFolder) {
      folders = [
        ...folders,
        {
          value: path,
          label: path
        }
      ];
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineField, { label: "Path", grow: true, labelWidth, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Select,
      {
        options: folders,
        value: currentFolder || "",
        onChange: this.onFolderChanged,
        allowCustomValue: true,
        backspaceRemovesValue: true,
        placeholder: "Select folder",
        isClearable: true,
        formatCreateLabel: (input) => `Folder: ${input}`
      }
    ) }) });
  }
  renderSnapshotQuery() {
    const { query, theme } = this.props;
    const file = query.file;
    const styles = getStyles(theme);
    const fileSize = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getValueFormat)("decbytes")(file ? file.size : 0);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineField, { label: "Snapshot", grow: true, labelWidth, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.InlineLabel, { children: pluralize__WEBPACK_IMPORTED_MODULE_2___default()("frame", query.snapshot?.length ?? 0, true) }) }) }),
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.editPanelCSVDragAndDrop && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.FileDropzone,
          {
            readAs: "readAsArrayBuffer",
            fileListRenderer: this.fileListRenderer,
            options: {
              onDrop: this.onFileDrop,
              maxSize: app_features_dataframe_import_constants__WEBPACK_IMPORTED_MODULE_20__.maxFileSize,
              multiple: false,
              accept: app_features_dataframe_import_constants__WEBPACK_IMPORTED_MODULE_20__.acceptedFiles
            },
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.FileDropzoneDefaultChildren,
              {
                primaryText: this.props?.query?.file ? "Replace file" : "Drop file here or click to upload"
              }
            )
          }
        ),
        file && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.file, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: file?.name }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(fileSize) }) })
        ] })
      ] })
    ] });
  }
  renderRandomWalkQuery() {
    const { query, onChange, onRunQuery } = this.props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RandomWalkEditor__WEBPACK_IMPORTED_MODULE_24__.RandomWalkEditor, { query, onChange, onRunQuery });
  }
  render() {
    const query = {
      ..._types__WEBPACK_IMPORTED_MODULE_23__.defaultQuery,
      ...this.props.query
    };
    const { queryType } = query;
    let queryTypes = this.queryTypes;
    if (queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.Snapshot && !_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.editPanelCSVDragAndDrop) {
      queryTypes = [
        ...this.queryTypes,
        {
          label: "Snapshot",
          value: queryType
        }
      ];
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.Search && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert, { title: "Grafana Search", severity: "info", children: "Using this datasource to call the new search system is experimental, and subject to change at any time without notice." }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.InlineField, { label: "Query type", grow: true, labelWidth, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Select,
        {
          options: queryTypes,
          value: queryTypes.find((v) => v.value === queryType) || queryTypes[0],
          onChange: this.onQueryTypeChange
        }
      ) }) }),
      queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.RandomWalk && _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.dashboardTemplates && this.renderRandomWalkQuery(),
      queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.LiveMeasurements && this.renderMeasurementsQuery(),
      queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.List && this.renderListPublicFiles(),
      queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.Snapshot && this.renderSnapshotQuery(),
      queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.Search && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SearchEditor__WEBPACK_IMPORTED_MODULE_25__["default"], { value: query.search ?? {}, onChange: this.onSearchChange }),
      queryType === _types__WEBPACK_IMPORTED_MODULE_23__.GrafanaQueryType.SearchNext && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SearchEditor__WEBPACK_IMPORTED_MODULE_25__["default"], { value: query.searchNext ?? {}, onChange: this.onSearchNextChange })
    ] });
  }
}
const QueryEditor = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.withTheme2)(UnthemedQueryEditor);
function getStyles(theme) {
  return {
    file: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(2),
      border: `1px dashed ${theme.colors.border.medium}`,
      backgroundColor: theme.colors.background.secondary,
      marginTop: theme.spacing(1)
    })
  };
}


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/RandomWalkEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RandomWalkEditor: () => (/* binding */ RandomWalkEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");



const coreFields = [
  {
    label: "Series count",
    id: "seriesCount",
    placeholder: "1",
    min: 1,
    step: 1,
    tooltip: "Number of series to generate"
  },
  {
    label: "Start value",
    id: "startValue",
    placeholder: "auto",
    step: 1,
    tooltip: "Initial value for the random walk"
  },
  { label: "Min", id: "min", placeholder: "none", step: 0.1 },
  { label: "Max", id: "max", placeholder: "none", step: 0.1 }
];
const advancedFields = [
  {
    label: "Spread",
    id: "spread",
    placeholder: "1",
    min: 0.5,
    step: 0.1,
    tooltip: "Maximum step size between values. Higher values create more dramatic changes."
  },
  {
    label: "Noise",
    id: "noise",
    placeholder: "0",
    min: 0,
    step: 0.1,
    tooltip: "Random noise added to each value. Higher values create more variability."
  },
  {
    label: "Drop (%)",
    id: "dropPercent",
    placeholder: "0",
    min: 0,
    max: 100,
    step: 1,
    tooltip: "Percentage of points to randomly drop (simulates missing data)"
  }
];
const labelWidth = 16;
const RandomWalkEditor = ({ query, onChange, onRunQuery }) => {
  const onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    const numValue = value === "" ? void 0 : parseFloat(value);
    onChange({
      ...query,
      [name]: numValue
    });
    onRunQuery();
  };
  const renderField = (fieldConfig) => {
    const { label, id, min, step, max, placeholder, tooltip } = fieldConfig;
    const value = query[id];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.InlineField, { label, labelWidth, tooltip, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Input,
      {
        width: 32,
        name: id,
        type: "number",
        id: `randomWalk-${id}-${query.refId}`,
        min,
        step,
        max,
        value: typeof value === "number" ? value : "",
        placeholder,
        onChange: onInputChange
      }
    ) }, id);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, { children: coreFields.map(renderField) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.InlineFieldRow, { children: advancedFields.map(renderField) })
  ] });
};


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/components/SearchEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");




function SearchEditor({ value, onChange }) {
  const [json, setJSON] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(value.query ?? "");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const emptySearchQuery = {
      query: "*",
      location: "",
      // general, etc
      ds_uid: "",
      sort: "",
      tags: [],
      kind: [],
      explain: false,
      facet: [{ field: "kind" }, { field: "tags" }],
      from: 0,
      limit: 20
    };
    setJSON(JSON.stringify({ ...emptySearchQuery, ...value }, null, 2));
  }, [value]);
  const handleSearchBlur = () => {
    if (query !== value.query) {
      onChange({ ...value, query });
    }
  };
  const handleSearchEnterKey = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    handleSearchBlur();
  };
  const onSaveSearchJSON = (rawSearchJSON) => {
    try {
      const searchQuery = JSON.parse(rawSearchJSON);
      onChange(searchQuery);
      setQuery(searchQuery.query ?? "");
    } catch (ex) {
      console.log("UNABLE TO parse search", rawSearchJSON, ex);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InlineFieldRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { label: "Query", grow: true, labelWidth: 12, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Input,
      {
        placeholder: "Everything",
        value: query,
        onChange: (e) => setQuery(e.currentTarget.value),
        onKeyDown: handleSearchEnterKey,
        onBlur: handleSearchBlur,
        spellCheck: false
      }
    ) }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.CodeEditor,
      {
        height: 300,
        language: "json",
        value: json,
        onBlur: onSaveSearchJSON,
        onSave: onSaveSearchJSON,
        showMiniMap: false,
        showLineNumbers: true
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/plugins/datasource/grafana/module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/types/datasource.ts");
/* harmony import */ var _components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/grafana/components/QueryEditor.tsx");
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/grafana/datasource.ts");




const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.DataSourcePlugin(_datasource__WEBPACK_IMPORTED_MODULE_2__.GrafanaDatasource).setQueryEditor(
  _components_QueryEditor__WEBPACK_IMPORTED_MODULE_1__.QueryEditor
);


/***/ })

}]);
//# sourceMappingURL=grafanaPlugin.00b78234644a328bd55d.js.map