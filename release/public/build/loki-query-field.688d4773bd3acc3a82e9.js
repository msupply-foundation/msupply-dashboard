"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["loki-query-field"],{

/***/ "./node_modules/@grafana/monaco-logql/index.js":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.monarchlanguage = exports.languageConfiguration = void 0;
exports.languageConfiguration = {
    // the default separators except `@$`
    wordPattern: /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,
    comments: {
        lineComment: "#",
    },
    brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "`", close: "`" },
    ],
    surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
        { open: "`", close: "`" },
        { open: "<", close: ">" },
    ],
    folding: {},
};
// LogQL built-in aggregation operators
// https://grafana.com/docs/loki/latest/logql/metric_queries/#built-in-aggregation-operators
var aggregations = [
    "sum",
    "avg",
    "min",
    "max",
    "stddev",
    "stdvar",
    "count",
    "topk",
    "bottomk",
];
// LogQL parser expressions
// https://grafana.com/docs/loki/latest/logql/log_queries/#parser-expression
var parsers = ["json", "logfmt", "regexp", "unpack", "pattern"];
// LogQL format expressions
// https://grafana.com/docs/loki/latest/logql/log_queries/#parser-expression
var format_expressions = ["line_format", "label_format"];
// LogQL vector aggregations
// https://grafana.com/docs/loki/latest/logql/metric_queries/#range-vector-aggregation
var vector_aggregations = [
    "count_over_time",
    "rate",
    "bytes_over_time",
    "bytes_rate",
    "avg_over_time",
    "sum_over_time",
    "min_over_time",
    "max_over_time",
    "stdvar_over_time",
    "stddev_over_time",
    "quantile_over_time",
    "first_over_time",
    "last_over_time",
    "absent_over_time",
];
// LogQL by and without clauses
var vector_matching = ["by", "without"];
// Produce a regex matching elements : (by|without)
var vectorMatchingRegex = "(".concat(vector_matching.reduce(function (prev, curr) { return "".concat(prev, "|").concat(curr); }), ")");
// LogQL Operators
var operators = [
    "+",
    "-",
    "*",
    "/",
    "%",
    "^",
    "==",
    "!=",
    ">",
    "<",
    ">=",
    "<=",
    "|=",
    "!=",
    "|~",
    "!~",
    "and",
    "or",
    "unless",
    "|",
];
// Merging all the keywords in one list
var keywords = aggregations
    .concat(parsers)
    .concat(format_expressions)
    .concat(vector_aggregations)
    .concat(vector_matching);
exports.monarchlanguage = {
    ignoreCase: false,
    defaultToken: "",
    tokenPostfix: ".logql",
    keywords: keywords,
    operators: operators,
    vectorMatching: vectorMatchingRegex,
    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*\/^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,
    // The main tokenizer for our languages
    tokenizer: {
        root: [
            // 'by', 'without' and vector matching
            [/@vectorMatching\s*(?=\()/, "type", "@clauses"],
            // labels
            [/[a-z_]\w*(?=\s*(=|!=|=~|!~))/, "tag"],
            // comments
            [/(^#.*$)/, "comment"],
            // all keywords have the same color
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        "@keywords": "type",
                        "@default": "identifier",
                    },
                },
            ],
            // strings
            [/"/, "string", "@string_double"],
            [/'/, "string", "@string_single"],
            [/`/, "string", "@string_backtick"],
            // whitespace
            { include: "@whitespace" },
            // delimiters and operators
            [/[{}()\[\]]/, "@brackets"],
            [/[<>](?!@symbols)/, "@brackets"],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "delimiter",
                        "@default": "",
                    },
                },
            ],
            // numbers
            [/\d+(?:\.\d)?(?:ms|ns|us|µs|[smhdwy])/, "number"],
            [/\d+(?:\.\d)?(?:b|kib|Kib|kb|KB|mib|Mib|mb|MB|gib|Gib|gb|GB|tib|Tib|tb|TB|pib|Pib|pb|PB|eib|Eib|eb|EB])/, "number"],
            [/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, "number.float"],
            [/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, "number.float"],
            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, "number.hex"],
            [/0[0-7']*[0-7](@integersuffix)/, "number.octal"],
            [/0[bB][0-1']*[0-1](@integersuffix)/, "number.binary"],
            [/\d[\d']*\d(@integersuffix)/, "number"],
            [/\d(@integersuffix)/, "number"],
        ],
        string_double: [
            // Set to token: number to differentiate color
            [/\{\{(.*?)\}\}/, { token: 'number' }],
            [/[^\\"]/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/"/, "string", "@pop"],
        ],
        string_single: [
            [/[^\\']+/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/'/, "string", "@pop"],
        ],
        string_backtick: [
            // Set to token: number to differentiate color
            [/\{\{(.*?)\}\}/, { token: 'number' }],
            [/[^\\`]/, "string"],
            [/@escapes/, "string.escape"],
            [/\\./, "string.escape.invalid"],
            [/`/, "string", "@pop"],
        ],
        clauses: [
            [/[^(,)]/, "tag"],
            [/\)/, "identifier", "@pop"],
        ],
        whitespace: [[/[ \t\r\n]+/, "white"]],
    },
};


/***/ }),

/***/ "./node_modules/react-use/esm/useLatest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useLatest = function (value) {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    ref.current = value;
    return ref;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLatest);


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/MonacoQueryField.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultWordPattern: () => (/* binding */ defaultWordPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useLatest.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/lezer-logql/index.es.js");
/* harmony import */ var _grafana_monaco_logql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/monaco-logql/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/ReactMonacoEditorLazy.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _getOverrideServices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/getOverrideServices.ts");
/* harmony import */ var _monaco_completion_provider_CompletionDataProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/CompletionDataProvider.ts");
/* harmony import */ var _monaco_completion_provider_completionUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/completionUtils.ts");
/* harmony import */ var _monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/validation.ts");















const options = {
  codeLens: false,
  contextmenu: false,
  // we need `fixedOverflowWidgets` because otherwise in grafana-dashboards
  // the popup is clipped by the panel-visualizations.
  fixedOverflowWidgets: true,
  folding: false,
  fontSize: 14,
  lineDecorationsWidth: 8,
  // used as "padding-left"
  lineNumbers: "off",
  minimap: { enabled: false },
  overviewRulerBorder: false,
  overviewRulerLanes: 0,
  padding: {
    // these numbers were picked so that visually this matches the previous version
    // of the query-editor the best
    top: 4,
    bottom: 5
  },
  renderLineHighlight: "none",
  scrollbar: {
    vertical: "hidden",
    verticalScrollbarSize: 8,
    // used as "padding-right"
    horizontal: "hidden",
    horizontalScrollbarSize: 0,
    alwaysConsumeMouseWheel: false
  },
  scrollBeyondLastLine: false,
  suggest: (0,_monaco_completion_provider_completionUtils__WEBPACK_IMPORTED_MODULE_13__.getSuggestOptions)(),
  suggestFontSize: 12,
  wordWrap: "on"
};
const EDITOR_HEIGHT_OFFSET = 2;
const LANG_ID = "logql";
let LANGUAGE_SETUP_STARTED = false;
const defaultWordPattern = /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g;
function ensureLogQL(monaco) {
  if (LANGUAGE_SETUP_STARTED === false) {
    LANGUAGE_SETUP_STARTED = true;
    monaco.languages.register({ id: LANG_ID });
    monaco.languages.setMonarchTokensProvider(LANG_ID, _grafana_monaco_logql__WEBPACK_IMPORTED_MODULE_8__.monarchlanguage);
    monaco.languages.setLanguageConfiguration(LANG_ID, {
      ..._grafana_monaco_logql__WEBPACK_IMPORTED_MODULE_8__.languageConfiguration,
      wordPattern: /(-?\d*\.\d\w*)|([^`~!#%^&*()+\[{\]}\\|;:',.<>\/?\s]+)/g
      // Default:  /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g
      // Removed `"`, `=`, and `-`, from the exclusion list, so now the completion provider can decide to overwrite any matching words, or just insert text at the cursor
    });
  }
}
const getStyles = (theme, placeholder) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderRadius: theme.shape.radius.default,
      border: `1px solid ${theme.components.input.borderColor}`,
      width: "100%",
      ".monaco-editor .suggest-widget": {
        minWidth: "50%"
      },
      overflow: "hidden"
    }),
    placeholder: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      "::after": {
        content: `'${placeholder}'`,
        fontFamily: theme.typography.fontFamilyMonospace,
        opacity: 0.3
      }
    })
  };
};
const MonacoQueryField = ({
  history,
  onBlur,
  onRunQuery,
  initialValue,
  datasource,
  placeholder,
  onChange,
  timeRange
}) => {
  const id = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const overrideServicesRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)((0,_getOverrideServices__WEBPACK_IMPORTED_MODULE_11__.getOverrideServices)());
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const langProviderRef = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(datasource.languageProvider);
  const historyRef = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(history);
  const onRunQueryRef = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(onRunQuery);
  const onBlurRef = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(onBlur);
  const completionDataProviderRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const autocompleteCleanupCallback = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useTheme2)();
  const styles = getStyles(theme, placeholder);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    return () => {
      autocompleteCleanupCallback.current?.();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (completionDataProviderRef.current && timeRange) {
      completionDataProviderRef.current.setTimeRange(timeRange);
    }
  }, [timeRange]);
  const setPlaceholder = (monaco, editor) => {
    const placeholderDecorators = [
      {
        range: new monaco.Range(1, 1, 1, 1),
        options: {
          className: styles.placeholder,
          isWholeLine: true
        }
      }
    ];
    let decorators = [];
    const checkDecorators = () => {
      const model = editor.getModel();
      if (!model) {
        return;
      }
      const newDecorators = model.getValueLength() === 0 ? placeholderDecorators : [];
      decorators = model.deltaDecorations(decorators, newDecorators);
    };
    checkDecorators();
    editor.onDidChangeModelContent(checkDecorators);
  };
  const onTypeDebounced = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.debounce)(async (query) => {
    onChange(query);
  }, 1e3);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_6__.selectors.components.QueryField.container,
      className: styles.container,
      ref: containerRef,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.ReactMonacoEditorLazy,
        {
          overrideServices: overrideServicesRef.current,
          options,
          language: LANG_ID,
          value: initialValue,
          beforeMount: (monaco) => {
            ensureLogQL(monaco);
          },
          onMount: (editor, monaco) => {
            const isEditorFocused = editor.createContextKey("isEditorFocused" + id, false);
            editor.onDidBlurEditorWidget(() => {
              isEditorFocused.set(false);
              onBlurRef.current(editor.getValue());
            });
            editor.onDidChangeModelContent((e) => {
              const model = editor.getModel();
              if (!model) {
                return;
              }
              const query = model.getValue();
              const errors = (0,_monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_14__.validateQuery)(
                query,
                datasource.interpolateString(query, _monaco_completion_provider_validation__WEBPACK_IMPORTED_MODULE_14__.placeHolderScopedVars),
                model.getLinesContent(),
                _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_7__.parser
              ) || [];
              const markers = errors.map(({ error, ...boundary }) => ({
                message: `${error ? `Error parsing "${error}"` : "Parse error"}. The query appears to be incorrect and could fail to be executed.`,
                severity: monaco.MarkerSeverity.Error,
                ...boundary
              }));
              onTypeDebounced(query);
              monaco.editor.setModelMarkers(model, "owner", markers);
            });
            const dataProvider = new _monaco_completion_provider_CompletionDataProvider__WEBPACK_IMPORTED_MODULE_12__.CompletionDataProvider(langProviderRef.current, historyRef, timeRange);
            completionDataProviderRef.current = dataProvider;
            const completionProvider = (0,_monaco_completion_provider_completionUtils__WEBPACK_IMPORTED_MODULE_13__.getCompletionProvider)(monaco, dataProvider);
            const filteringCompletionProvider = {
              ...completionProvider,
              provideCompletionItems: (model, position, context, token) => {
                if (editor.getModel()?.id !== model.id) {
                  return { suggestions: [] };
                }
                return completionProvider.provideCompletionItems(model, position, context, token);
              }
            };
            const { dispose } = monaco.languages.registerCompletionItemProvider(LANG_ID, filteringCompletionProvider);
            autocompleteCleanupCallback.current = dispose;
            const handleResize = () => {
              const containerDiv = containerRef.current;
              if (containerDiv !== null) {
                const pixelHeight = editor.getContentHeight();
                containerDiv.style.height = `${pixelHeight + EDITOR_HEIGHT_OFFSET}px`;
                const pixelWidth = containerDiv.clientWidth;
                editor.layout({ width: pixelWidth, height: pixelHeight });
              }
            };
            editor.onDidContentSizeChange(handleResize);
            handleResize();
            editor.addCommand(
              monaco.KeyMod.Shift | monaco.KeyCode.Enter,
              () => {
                onRunQueryRef.current(editor.getValue());
              },
              "isEditorFocused" + id
            );
            monaco.editor.addKeybindingRule({
              keybinding: monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF,
              command: null
            });
            editor.onDidFocusEditorText(() => {
              isEditorFocused.set(true);
              if (editor.getValue().trim() === "") {
                editor.trigger("", "editor.action.triggerSuggest", {});
              }
            });
            setPlaceholder(monaco, editor);
          }
        }
      )
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonacoQueryField);


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/getOverrideServices.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOverrideServices: () => (/* binding */ getOverrideServices)
/* harmony export */ });

function makeStorageService() {
  const strings = /* @__PURE__ */ new Map();
  strings.set("expandSuggestionDocs", true.toString());
  return {
    // we do not implement the on* handlers
    onDidChangeValue: (data) => void 0,
    onDidChangeTarget: (data) => void 0,
    onWillSaveState: (data) => void 0,
    get: (key, scope, fallbackValue) => {
      return strings.get(key) ?? fallbackValue;
    },
    getBoolean: (key, scope, fallbackValue) => {
      const val = strings.get(key);
      if (val !== void 0) {
        return val === "true";
      } else {
        return fallbackValue;
      }
    },
    getNumber: (key, scope, fallbackValue) => {
      const val = strings.get(key);
      if (val !== void 0) {
        return parseInt(val, 10);
      } else {
        return fallbackValue;
      }
    },
    store: (key, value, scope, target) => {
      if (value === null || value === void 0) {
        strings.delete(key);
      } else {
        strings.set(key, value.toString());
      }
    },
    remove: (key, scope) => {
      strings.delete(key);
    },
    keys: (scope, target) => {
      return Array.from(strings.keys());
    },
    logStorage: () => {
      console.log("logStorage: not implemented");
    },
    migrate: () => {
      return Promise.resolve(void 0);
    },
    isNew: (scope) => {
      return true;
    },
    flush: (reason) => {
      return Promise.resolve(void 0);
    }
  };
}
let overrideServices = {
  storageService: makeStorageService()
};
function getOverrideServices() {
  return overrideServices;
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/CompletionDataProvider.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompletionDataProvider: () => (/* binding */ CompletionDataProvider)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");



class CompletionDataProvider {
  constructor(languageProvider, historyRef = { current: [] }, timeRange) {
    this.languageProvider = languageProvider;
    this.historyRef = historyRef;
    this.timeRange = timeRange;
    this.queryToLabelKeysCache = /* @__PURE__ */ new Map();
  }
  buildSelector(labels) {
    const allLabelTexts = labels.map(
      (label) => `${label.name}${label.op}"${(0,_languageUtils__WEBPACK_IMPORTED_MODULE_1__.escapeLabelValueInExactSelector)(label.value)}"`
    );
    return `{${allLabelTexts.join(",")}}`;
  }
  setTimeRange(timeRange) {
    this.timeRange = timeRange;
    this.queryToLabelKeysCache.clear();
  }
  getHistory() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_0__.chain)(this.historyRef.current).orderBy("ts", "desc").map((history) => history.query.expr.trim()).filter().uniq().value();
  }
  async getLabelNames(otherLabels = []) {
    if (otherLabels.length === 0) {
      await this.languageProvider.start(this.timeRange);
      return this.languageProvider.getLabelKeys();
    }
    const possibleLabelNames = await this.languageProvider.fetchLabels({
      streamSelector: this.buildSelector(otherLabels),
      timeRange: this.timeRange
    });
    const usedLabelNames = new Set(otherLabels.map((l) => l.name));
    return possibleLabelNames.filter((label) => !usedLabelNames.has(label));
  }
  async getLabelValues(labelName, otherLabels) {
    return await this.languageProvider.fetchLabelValues(labelName, {
      streamSelector: this.buildSelector(otherLabels),
      timeRange: this.timeRange
    });
  }
  /**
   * Runs a Loki query to extract label keys from the result.
   * The result is cached for the query string.
   *
   * Since various "situations" in the monaco code editor trigger this function, it is prone to being called multiple times for the same query
   * Here is a lightweight and simple cache to avoid calling the backend multiple times for the same query.
   *
   * @param logQuery
   */
  async getParserAndLabelKeys(logQuery) {
    const EXTRACTED_LABEL_KEYS_MAX_CACHE_SIZE = 2;
    const cachedLabelKeys = this.queryToLabelKeysCache.has(logQuery) ? this.queryToLabelKeysCache.get(logQuery) : null;
    if (cachedLabelKeys) {
      return cachedLabelKeys;
    } else {
      if (this.queryToLabelKeysCache.size >= EXTRACTED_LABEL_KEYS_MAX_CACHE_SIZE) {
        const keys = this.queryToLabelKeysCache.keys();
        const firstKey = keys.next().value;
        if (firstKey !== void 0) {
          this.queryToLabelKeysCache.delete(firstKey);
        }
      }
      const labelKeys = await this.languageProvider.getParserAndLabelKeys(logQuery, { timeRange: this.timeRange });
      this.queryToLabelKeysCache.set(logQuery, labelKeys);
      return labelKeys;
    }
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/NeverCaseError.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NeverCaseError: () => (/* binding */ NeverCaseError)
/* harmony export */ });

class NeverCaseError extends Error {
  constructor(value) {
    super(`Unexpected case in switch statement: ${JSON.stringify(value)}`);
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/completionUtils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateRange: () => (/* binding */ calculateRange),
/* harmony export */   getCompletionProvider: () => (/* binding */ getCompletionProvider),
/* harmony export */   getSuggestOptions: () => (/* binding */ getSuggestOptions)
/* harmony export */ });
/* harmony import */ var _NeverCaseError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/NeverCaseError.ts");
/* harmony import */ var _completions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/completions.ts");
/* harmony import */ var _situation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/situation.ts");




const INSERT_AS_SNIPPET_ENUM_VALUE = 4;
function getSuggestOptions() {
  return {
    // monaco-editor sometimes provides suggestions automatically, i am not
    // sure based on what, seems to be by analyzing the words already
    // written.
    // to try it out:
    // - enter `go_goroutines{job~`
    // - have the cursor at the end of the string
    // - press ctrl-enter
    // - you will get two suggestions
    // those were not provided by grafana, they are offered automatically.
    // i want to remove those. the only way i found is:
    // - every suggestion-item has a `kind` attribute,
    //   that controls the icon to the left of the suggestion.
    // - items auto-generated by monaco have `kind` set to `text`.
    // - we make sure grafana-provided suggestions do not have `kind` set to `text`.
    // - and then we tell monaco not to show suggestions of kind `text`
    showWords: false
  };
}
function getMonacoCompletionItemKind(type, monaco) {
  switch (type) {
    case "DURATION":
      return monaco.languages.CompletionItemKind.Unit;
    case "FUNCTION":
      return monaco.languages.CompletionItemKind.Variable;
    case "HISTORY":
      return monaco.languages.CompletionItemKind.Snippet;
    case "LABEL_NAME":
      return monaco.languages.CompletionItemKind.Enum;
    case "LABEL_VALUE":
      return monaco.languages.CompletionItemKind.EnumMember;
    case "PATTERN":
      return monaco.languages.CompletionItemKind.Constructor;
    case "PARSER":
      return monaco.languages.CompletionItemKind.Class;
    case "LINE_FILTER":
      return monaco.languages.CompletionItemKind.TypeParameter;
    case "PIPE_OPERATION":
      return monaco.languages.CompletionItemKind.Interface;
    default:
      throw new _NeverCaseError__WEBPACK_IMPORTED_MODULE_0__.NeverCaseError(type);
  }
}
function getCompletionProvider(monaco, dataProvider) {
  const provideCompletionItems = (model, position) => {
    const word = model.getWordAtPosition(position);
    const wordUntil = model.getWordUntilPosition(position);
    const positionClone = {
      column: position.column,
      lineNumber: position.lineNumber
    };
    const offset = model.getOffsetAt(positionClone);
    const situation = (0,_situation__WEBPACK_IMPORTED_MODULE_2__.getSituation)(model.getValue(), offset);
    const range = calculateRange(situation, word, wordUntil, monaco, position);
    const completionsPromise = situation != null ? (0,_completions__WEBPACK_IMPORTED_MODULE_1__.getCompletions)(situation, dataProvider) : Promise.resolve([]);
    return completionsPromise.then((items) => {
      const maxIndexDigits = items.length.toString().length;
      const suggestions = items.map((item, index) => ({
        kind: getMonacoCompletionItemKind(item.type, monaco),
        label: item.label,
        insertText: item.insertText,
        insertTextRules: item.isSnippet ? INSERT_AS_SNIPPET_ENUM_VALUE : void 0,
        detail: item.detail,
        documentation: item.documentation,
        sortText: index.toString().padStart(maxIndexDigits, "0"),
        // to force the order we have
        range,
        command: item.triggerOnInsert ? {
          id: "editor.action.triggerSuggest",
          title: ""
        } : void 0
      }));
      return { suggestions };
    });
  };
  return {
    triggerCharacters: ["{", ",", "[", "(", "=", "~", " ", '"', "|"],
    provideCompletionItems
  };
}
const calculateRange = (situation, word, wordUntil, monaco, position) => {
  if (situation && situation?.type === "IN_LABEL_SELECTOR_WITH_LABEL_NAME" && "betweenQuotes" in situation && situation.betweenQuotes) {
    const indexOfFirstQuote = wordUntil?.word?.indexOf('"') ?? 0;
    const indexOfLastQuote = word?.word?.lastIndexOf('"') ?? 0;
    const indexOfEquals = word?.word.indexOf("=");
    const indexOfLastEquals = word?.word.lastIndexOf("=");
    if (indexOfLastEquals === indexOfEquals && indexOfFirstQuote !== -1 && indexOfLastQuote !== -1 && indexOfLastEquals !== -1) {
      return word != null ? monaco.Range.lift({
        startLineNumber: position.lineNumber,
        endLineNumber: position.lineNumber,
        startColumn: wordUntil.startColumn + indexOfFirstQuote + 1,
        endColumn: wordUntil.startColumn + indexOfLastQuote
      }) : monaco.Range.fromPositions(position);
    }
  }
  if (situation && situation.type === "IN_LABEL_SELECTOR_WITH_LABEL_NAME") {
    return word != null ? monaco.Range.lift({
      startLineNumber: position.lineNumber,
      endLineNumber: position.lineNumber,
      startColumn: wordUntil.endColumn,
      endColumn: wordUntil.endColumn
    }) : monaco.Range.fromPositions(position);
  }
  return word != null ? monaco.Range.lift({
    startLineNumber: position.lineNumber,
    endLineNumber: position.lineNumber,
    startColumn: word.startColumn,
    endColumn: word.endColumn
  }) : monaco.Range.fromPositions(position);
};


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/completions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAfterSelectorCompletions: () => (/* binding */ getAfterSelectorCompletions),
/* harmony export */   getCompletions: () => (/* binding */ getCompletions),
/* harmony export */   getLogfmtCompletions: () => (/* binding */ getLogfmtCompletions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _languageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/languageUtils.ts");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");
/* harmony import */ var _querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/operations.ts");
/* harmony import */ var _querybuilder_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/datasource/loki/querybuilder/types.ts");
/* harmony import */ var _syntax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/datasource/loki/syntax.ts");
/* harmony import */ var _NeverCaseError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/NeverCaseError.ts");








const LOG_COMPLETIONS = [
  {
    type: "PATTERN",
    label: "{}",
    insertText: "{$0}",
    isSnippet: true,
    triggerOnInsert: true
  }
];
const AGGREGATION_COMPLETIONS = _syntax__WEBPACK_IMPORTED_MODULE_5__.AGGREGATION_OPERATORS.map((f) => ({
  type: "FUNCTION",
  label: f.label,
  insertText: `${f.insertText ?? ""}($0)`,
  // i don't know what to do when this is nullish. it should not be.
  isSnippet: true,
  triggerOnInsert: true,
  detail: f.detail,
  documentation: f.documentation
}));
const FUNCTION_COMPLETIONS = _syntax__WEBPACK_IMPORTED_MODULE_5__.RANGE_VEC_FUNCTIONS.map((f) => ({
  type: "FUNCTION",
  label: f.label,
  insertText: `${f.insertText ?? ""}({$0}[\\$__auto])`,
  // i don't know what to do when this is nullish. it should not be.
  isSnippet: true,
  triggerOnInsert: true,
  detail: f.detail,
  documentation: f.documentation
}));
const BUILT_IN_FUNCTIONS_COMPLETIONS = _syntax__WEBPACK_IMPORTED_MODULE_5__.BUILT_IN_FUNCTIONS.map((f) => ({
  type: "FUNCTION",
  label: f.label,
  insertText: `${f.insertText ?? ""}($0)`,
  isSnippet: true,
  triggerOnInsert: true,
  detail: f.detail,
  documentation: f.documentation
}));
const DURATION_COMPLETIONS = ["$__auto", "1m", "5m", "10m", "30m", "1h", "1d"].map((text) => ({
  type: "DURATION",
  label: text,
  insertText: text
}));
const UNWRAP_FUNCTION_COMPLETIONS = [
  {
    type: "FUNCTION",
    label: "duration_seconds",
    documentation: "Will convert the label value in seconds from the go duration format (e.g 5m, 24s30ms).",
    insertText: "duration_seconds()"
  },
  {
    type: "FUNCTION",
    label: "duration",
    documentation: "Short version of duration_seconds().",
    insertText: "duration()"
  },
  {
    type: "FUNCTION",
    label: "bytes",
    documentation: "Will convert the label value to raw bytes applying the bytes unit (e.g. 5 MiB, 3k, 1G).",
    insertText: "bytes()"
  }
];
const LOGFMT_ARGUMENT_COMPLETIONS = [
  {
    type: "FUNCTION",
    label: "--strict",
    documentation: "Strict parsing. The logfmt parser stops scanning the log line and returns early with an error when it encounters any poorly formatted key/value pair.",
    insertText: "--strict"
  },
  {
    type: "FUNCTION",
    label: "--keep-empty",
    documentation: "Retain standalone keys with empty value. The logfmt parser retains standalone keys (keys without a value) as labels with value set to empty string.",
    insertText: "--keep-empty"
  }
];
const LINE_FILTER_COMPLETIONS = [
  {
    operator: "|=",
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineContains),
    afterPipe: true
  },
  {
    operator: "!=",
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineContainsNot)
  },
  {
    operator: "|~",
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineMatchesRegex),
    afterPipe: true
  },
  {
    operator: "!~",
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineMatchesRegexNot)
  }
];
function getLineFilterCompletions(afterPipe) {
  return LINE_FILTER_COMPLETIONS.filter((completion) => !afterPipe || completion.afterPipe).map(
    ({ operator, documentation }) => ({
      type: "LINE_FILTER",
      label: `${operator} ""`,
      insertText: `${afterPipe ? operator.replace("|", "") : operator} "$0"`,
      isSnippet: true,
      documentation
    })
  );
}
function getPipeOperationsCompletions(prefix = "") {
  const completions = [];
  completions.push({
    type: "PIPE_OPERATION",
    label: "line_format",
    insertText: `${prefix}line_format "{{.$0}}"`,
    isSnippet: true,
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LineFormat)
  });
  completions.push({
    type: "PIPE_OPERATION",
    label: "label_format",
    insertText: `${prefix}label_format`,
    isSnippet: true,
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.LabelFormat)
  });
  completions.push({
    type: "PIPE_OPERATION",
    label: "unwrap",
    insertText: `${prefix}unwrap`,
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Unwrap)
  });
  completions.push({
    type: "PIPE_OPERATION",
    label: "decolorize",
    insertText: `${prefix}decolorize`,
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Decolorize)
  });
  completions.push({
    type: "PIPE_OPERATION",
    label: "drop",
    insertText: `${prefix}drop`,
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Drop)
  });
  completions.push({
    type: "PIPE_OPERATION",
    label: "keep",
    insertText: `${prefix}keep`,
    documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Keep)
  });
  return completions;
}
async function getAllHistoryCompletions(dataProvider) {
  const history = await dataProvider.getHistory();
  return history.map((expr) => ({
    type: "HISTORY",
    label: expr,
    insertText: expr
  }));
}
async function getLabelNamesForSelectorCompletions(otherLabels, dataProvider) {
  const labelNames = await dataProvider.getLabelNames(otherLabels);
  return labelNames.map((label) => ({
    type: "LABEL_NAME",
    label,
    insertText: `${label}=`,
    triggerOnInsert: true
  }));
}
async function getInGroupingCompletions(logQuery, dataProvider) {
  const { extractedLabelKeys } = await dataProvider.getParserAndLabelKeys(logQuery);
  return extractedLabelKeys.map((label) => ({
    type: "LABEL_NAME",
    label,
    insertText: label,
    triggerOnInsert: false
  }));
}
const PARSERS = ["json", "logfmt", "pattern", "regexp", "unpack"];
async function getParserCompletions(prefix, hasJSON, hasLogfmt, hasPack, extractedLabelKeys, hasParserInQuery) {
  const allParsers = new Set(PARSERS);
  const completions = [];
  const hasLevelInExtractedLabels = extractedLabelKeys.some((key) => key === "level");
  if (hasJSON) {
    const extra = hasParserInQuery ? "" : " (detected)";
    if (hasPack) {
      allParsers.delete("unpack");
      completions.push({
        type: "PARSER",
        label: `unpack${extra}`,
        insertText: `${prefix}unpack`,
        documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Unpack)
      });
    } else {
      allParsers.delete("json");
      completions.push({
        type: "PARSER",
        label: `json${extra}`,
        insertText: `${prefix}json`,
        documentation: hasLevelInExtractedLabels ? "Use it to get log-levels in the histogram" : (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Json)
      });
    }
  }
  if (hasLogfmt) {
    allParsers.delete("logfmt");
    const extra = hasParserInQuery ? "" : " (detected)";
    completions.push({
      type: "PARSER",
      label: `logfmt${extra}`,
      insertText: `${prefix}logfmt`,
      documentation: hasLevelInExtractedLabels ? "Get detected levels in the histogram" : (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(_querybuilder_types__WEBPACK_IMPORTED_MODULE_4__.LokiOperationId.Logfmt)
    });
  }
  const remainingParsers = Array.from(allParsers).sort();
  remainingParsers.forEach((parser) => {
    completions.push({
      type: "PARSER",
      label: parser,
      insertText: `${prefix}${parser}`,
      documentation: (0,_querybuilder_operations__WEBPACK_IMPORTED_MODULE_3__.explainOperator)(parser)
    });
  });
  return completions;
}
async function getAfterSelectorCompletions(logQuery, afterPipe, hasSpace, dataProvider) {
  let query = logQuery;
  if (afterPipe) {
    query = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.trimEnd)(logQuery, "| ");
  }
  const { extractedLabelKeys, structuredMetadataKeys, hasJSON, hasLogfmt, hasPack } = await dataProvider.getParserAndLabelKeys(query);
  const hasQueryParser = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_2__.isQueryWithParser)(query).queryWithParser;
  const prefix = `${hasSpace ? "" : " "}${afterPipe ? "" : "| "}`;
  const parserCompletions = await getParserCompletions(
    prefix,
    hasJSON,
    hasLogfmt,
    hasPack,
    extractedLabelKeys,
    hasQueryParser
  );
  const pipeOperations = getPipeOperationsCompletions(prefix);
  const completions = [...parserCompletions, ...pipeOperations];
  structuredMetadataKeys.forEach((key) => {
    completions.push({
      type: "LABEL_NAME",
      label: `${key} (detected)`,
      insertText: `${prefix}${key}`,
      documentation: `"${key}" was suggested based on structured metadata attached to your loglines.`
    });
  });
  if (hasQueryParser) {
    extractedLabelKeys.forEach((key) => {
      completions.push({
        type: "LABEL_NAME",
        label: `${key} (detected)`,
        insertText: `${prefix}${key}`,
        documentation: `"${key}" was suggested based on the content of your log lines for the label filter expression.`
      });
    });
  }
  if (hasQueryParser) {
    return [...completions];
  }
  const lineFilters = afterPipe && hasSpace ? [] : getLineFilterCompletions(afterPipe);
  return [...lineFilters, ...completions];
}
async function getLogfmtCompletions(logQuery, flags, trailingComma, trailingSpace, otherLabels, dataProvider) {
  let completions = [];
  if (trailingComma) {
    logQuery = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.trimEnd)(logQuery, ", ");
  }
  const { extractedLabelKeys, hasJSON, hasLogfmt, hasPack } = await dataProvider.getParserAndLabelKeys(logQuery);
  const pipeOperations = getPipeOperationsCompletions("| ");
  if (!trailingComma && !flags) {
    completions = [...LOGFMT_ARGUMENT_COMPLETIONS];
  }
  if (!trailingComma && trailingSpace) {
    const parserCompletions = otherLabels.length > 0 ? await getParserCompletions("| ", hasJSON, hasLogfmt, hasPack, extractedLabelKeys, true) : [];
    completions = [...completions, ...parserCompletions, ...pipeOperations];
  }
  const labels = extractedLabelKeys.filter((label) => !otherLabels.includes(label));
  let labelPrefix = "";
  if (otherLabels.length > 0 && trailingSpace) {
    labelPrefix = trailingComma ? "" : ", ";
  }
  const labelCompletions = labels.map((label) => ({
    type: "LABEL_NAME",
    label,
    insertText: labelPrefix + label,
    triggerOnInsert: false
  }));
  completions = [...completions, ...labelCompletions];
  return completions;
}
async function getLabelValuesForMetricCompletions(labelName, betweenQuotes, otherLabels, dataProvider) {
  const values = await dataProvider.getLabelValues(labelName, otherLabels);
  return values.map((text) => ({
    type: "LABEL_VALUE",
    label: text,
    insertText: betweenQuotes ? (0,_languageUtils__WEBPACK_IMPORTED_MODULE_1__.escapeLabelValueInExactSelector)(text) : `"${(0,_languageUtils__WEBPACK_IMPORTED_MODULE_1__.escapeLabelValueInExactSelector)(text)}"`
  }));
}
async function getAfterUnwrapCompletions(logQuery, dataProvider) {
  const { unwrapLabelKeys } = await dataProvider.getParserAndLabelKeys(logQuery);
  const labelCompletions = unwrapLabelKeys.map((label) => ({
    type: "LABEL_NAME",
    label,
    insertText: label,
    triggerOnInsert: false
  }));
  return [...labelCompletions, ...UNWRAP_FUNCTION_COMPLETIONS];
}
async function getAfterKeepAndDropCompletions(logQuery, dataProvider) {
  const { extractedLabelKeys } = await dataProvider.getParserAndLabelKeys(logQuery);
  const labelCompletions = extractedLabelKeys.map((label) => ({
    type: "LABEL_NAME",
    label,
    insertText: label,
    triggerOnInsert: false
  }));
  return [...labelCompletions];
}
async function getCompletions(situation, dataProvider) {
  switch (situation.type) {
    case "EMPTY":
    case "AT_ROOT":
      const historyCompletions = await getAllHistoryCompletions(dataProvider);
      return [
        ...historyCompletions,
        ...LOG_COMPLETIONS,
        ...AGGREGATION_COMPLETIONS,
        ...BUILT_IN_FUNCTIONS_COMPLETIONS,
        ...FUNCTION_COMPLETIONS
      ];
    case "IN_RANGE":
      return DURATION_COMPLETIONS;
    case "IN_GROUPING":
      return getInGroupingCompletions(situation.logQuery, dataProvider);
    case "IN_LABEL_SELECTOR_NO_LABEL_NAME":
      return getLabelNamesForSelectorCompletions(situation.otherLabels, dataProvider);
    case "IN_LABEL_SELECTOR_WITH_LABEL_NAME":
      return getLabelValuesForMetricCompletions(
        situation.labelName,
        situation.betweenQuotes,
        situation.otherLabels,
        dataProvider
      );
    case "AFTER_SELECTOR":
      return getAfterSelectorCompletions(situation.logQuery, situation.afterPipe, situation.hasSpace, dataProvider);
    case "AFTER_UNWRAP":
      return getAfterUnwrapCompletions(situation.logQuery, dataProvider);
    case "IN_AGGREGATION":
      return [...FUNCTION_COMPLETIONS, ...AGGREGATION_COMPLETIONS];
    case "AFTER_KEEP_AND_DROP":
      return getAfterKeepAndDropCompletions(situation.logQuery, dataProvider);
    case "IN_LOGFMT":
      return getLogfmtCompletions(
        situation.logQuery,
        situation.flags,
        situation.trailingComma,
        situation.trailingSpace,
        situation.otherLabels,
        dataProvider
      );
    default:
      throw new _NeverCaseError__WEBPACK_IMPORTED_MODULE_6__.NeverCaseError(situation);
  }
}


/***/ }),

/***/ "./public/app/plugins/datasource/loki/components/monaco-query-field/monaco-completion-provider/situation.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSituation: () => (/* binding */ getSituation)
/* harmony export */ });
/* harmony import */ var _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@grafana/lezer-logql/index.es.js");
/* harmony import */ var _queryUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/plugins/datasource/loki/queryUtils.ts");



function move(node, direction) {
  return node[direction];
}
function traverse(node, path) {
  let current = node;
  let next = walk(current, path);
  while (next) {
    let nextTmp = walk(next, path);
    if (nextTmp) {
      next = nextTmp;
    } else {
      return next;
    }
  }
  return null;
}
function walk(node, path) {
  let current = node;
  for (const [direction, expectedNode] of path) {
    current = move(current, direction);
    if (current === null) {
      return null;
    }
    if (current.type.id !== expectedNode) {
      return null;
    }
  }
  return current;
}
function getNodeText(node, text) {
  return text.slice(node.from, node.to);
}
function parseStringLiteral(text) {
  const inside = text.slice(1, text.length - 1);
  if (text.startsWith('"') && text.endsWith('"')) {
    return inside.replace(/\\"/gm, '"');
  }
  if (text.startsWith("'") && text.endsWith("'")) {
    return inside.replace(/\\'/gm, "'");
  }
  if (text.startsWith("`") && text.endsWith("`")) {
    return inside;
  }
  throw new Error(`Invalid string literal: ${text}`);
}
function isPathMatch(resolverPath, cursorPath) {
  return resolverPath.every((item, index) => item === cursorPath[index]);
}
const ERROR_NODE_ID = 0;
const RESOLVERS = [
  {
    paths: [
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector],
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers],
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector]
    ],
    fun: resolveSelector
  },
  {
    paths: [
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogQL],
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.RangeAggregationExpr],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.RangeAggregationExpr],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpressionList],
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpressionList],
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpressionList],
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogfmtExpressionParser]
    ],
    fun: resolveLogfmtParser
  },
  {
    paths: [[_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogQL], [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector]],
    fun: resolveTopLevel
  },
  {
    paths: [[_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matcher]],
    fun: resolveMatcher
  },
  {
    paths: [[_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Grouping]],
    fun: resolveLabelsForGrouping
  },
  {
    paths: [[_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr]],
    fun: resolveLogRange
  },
  {
    paths: [
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matcher],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector]
    ],
    fun: resolveMatcher
  },
  {
    paths: [[ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Range]],
    fun: resolveDurations
  },
  {
    paths: [[ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr]],
    fun: resolveLogRangeFromError
  },
  {
    paths: [[ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LiteralExpr, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.MetricExpr, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.VectorAggregationExpr]],
    fun: () => ({ type: "IN_AGGREGATION" })
  },
  {
    paths: [
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineStage, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineExpr],
      [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineStage, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineExpr]
    ],
    fun: resolvePipeError
  },
  {
    paths: [[ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.UnwrapExpr], [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.UnwrapExpr]],
    fun: resolveAfterUnwrap
  },
  {
    paths: [
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.DropLabelsExpr],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.DropLabels],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.KeepLabelsExpr],
      [ERROR_NODE_ID, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.KeepLabels]
    ],
    fun: resolveAfterKeepAndDrop
  }
];
const LABEL_OP_MAP = /* @__PURE__ */ new Map([
  ["Eq", "="],
  ["Re", "=~"],
  ["Neq", "!="],
  ["Nre", "!~"]
]);
function getLabelOp(opNode) {
  return LABEL_OP_MAP.get(opNode.name) ?? null;
}
function getLabel(matcherNode, text) {
  if (matcherNode.type.id !== _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matcher) {
    return null;
  }
  const nameNode = walk(matcherNode, [["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier]]);
  if (nameNode === null) {
    return null;
  }
  const opNode = nameNode.nextSibling;
  if (opNode === null) {
    return null;
  }
  const op = getLabelOp(opNode);
  if (op === null) {
    return null;
  }
  const valueNode = walk(matcherNode, [["lastChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.String]]);
  if (valueNode === null) {
    return null;
  }
  const name = getNodeText(nameNode, text);
  const value = parseStringLiteral(getNodeText(valueNode, text));
  return { name, value, op };
}
function getLabels(selectorNode, text) {
  if (selectorNode.type.id !== _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector && selectorNode.type.id !== _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers) {
    return [];
  }
  let listNode = null;
  if (selectorNode?.parent?.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector) {
    listNode = selectorNode;
  } else {
    listNode = // Node in-between labels
    traverse(selectorNode, [["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers]]) ?? // Node after all other labels
    walk(selectorNode, [["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers]]) ?? // Node before all other labels
    walk(selectorNode, [["lastChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers]]);
  }
  const labels = [];
  while (listNode !== null) {
    const matcherNode = walk(listNode, [["lastChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matcher]]);
    if (matcherNode !== null) {
      const label = getLabel(matcherNode, text);
      if (label !== null) {
        labels.push(label);
      }
    }
    listNode = walk(listNode, [["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers]]);
  }
  labels.reverse();
  return labels;
}
function resolveAfterUnwrap(node, text, pos) {
  return {
    type: "AFTER_UNWRAP",
    logQuery: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getLogQueryFromMetricsQueryAtPosition)(text, pos).trim()
  };
}
function resolvePipeError(node, text, pos) {
  let exprNode = null;
  if (node.type.id === ERROR_NODE_ID) {
    exprNode = walk(node, [
      ["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineStage],
      ["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineExpr]
    ]);
  } else if (node.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineStage) {
    exprNode = walk(node, [["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineExpr]]);
  }
  if (exprNode?.parent?.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogExpr || exprNode?.parent?.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr) {
    return resolveLogOrLogRange(exprNode.parent, text, pos, true);
  }
  return null;
}
function resolveLabelsForGrouping(node, text, pos) {
  const aggrExpNode = walk(node, [["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.VectorAggregationExpr]]);
  if (aggrExpNode === null) {
    return null;
  }
  const bodyNode = aggrExpNode.getChild("MetricExpr");
  if (bodyNode === null) {
    return null;
  }
  const selectorNode = walk(bodyNode, [
    ["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.RangeAggregationExpr],
    ["lastChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr],
    ["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector]
  ]);
  if (selectorNode === null) {
    return null;
  }
  return {
    type: "IN_GROUPING",
    logQuery: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getLogQueryFromMetricsQueryAtPosition)(text, pos).trim()
  };
}
function resolveMatcher(node, text, pos) {
  const inStringNode = !node.type.isError;
  const parent = walk(node, [["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matcher]]);
  if (parent === null) {
    return null;
  }
  const labelNameNode = walk(parent, [["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier]]);
  if (labelNameNode === null) {
    return null;
  }
  const labelName = getNodeText(labelNameNode, text);
  const firstListNode = walk(parent, [["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers]]);
  if (firstListNode === null) {
    return null;
  }
  let listNode = firstListNode;
  let selectorNode = null;
  while (selectorNode === null) {
    const parent2 = listNode.parent;
    if (parent2 === null) {
      return null;
    }
    switch (parent2.type.id) {
      case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers:
        listNode = parent2;
        continue;
      case _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector:
        selectorNode = parent2;
        continue;
      default:
        return null;
    }
  }
  const allLabels = getLabels(selectorNode, text);
  const otherLabels = allLabels.filter((label) => label.name !== labelName);
  return {
    type: "IN_LABEL_SELECTOR_WITH_LABEL_NAME",
    labelName,
    betweenQuotes: inStringNode,
    otherLabels
  };
}
function resolveLogfmtParser(_, text, cursorPosition) {
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(text);
  const trimRightTextLen = text.substring(0, cursorPosition).trimEnd().length;
  const position = trimRightTextLen < cursorPosition ? trimRightTextLen : cursorPosition;
  const cursor = tree.cursorAt(position);
  const expectedNodes = [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Logfmt, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.ParserFlag, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpression, _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpressionList];
  let inLogfmt = false;
  do {
    const { node } = cursor;
    if (!expectedNodes.includes(node.type.id)) {
      continue;
    }
    if (cursor.from <= position && cursor.to >= position) {
      inLogfmt = true;
      break;
    }
  } while (cursor.next());
  if (!inLogfmt) {
    return null;
  }
  const flags = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getNodesFromQuery)(text, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.ParserFlag]).length > 1;
  const labelNodes = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getNodesFromQuery)(text, [_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LabelExtractionExpression]);
  const otherLabels = labelNodes.map((label) => label.getChild(_grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier)).filter((label) => label !== null).map((label) => getNodeText(label, text));
  const logQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getLogQueryFromMetricsQueryAtPosition)(text, position).trim();
  const trailingSpace = text.charAt(cursorPosition - 1) === " ";
  const trailingComma = text.trimEnd().charAt(position - 1) === ",";
  return {
    type: "IN_LOGFMT",
    otherLabels,
    flags,
    trailingSpace,
    trailingComma,
    logQuery
  };
}
function resolveTopLevel(node, text, pos) {
  const logExprNode = walk(node, [
    ["lastChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Expr],
    ["lastChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogExpr]
  ]);
  if (logExprNode != null && text.endsWith(" ")) {
    return resolveLogOrLogRange(logExprNode, text, pos, false);
  }
  const idNode = walk(node, [
    ["firstChild", ERROR_NODE_ID],
    ["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Identifier]
  ]);
  if (idNode != null) {
    return {
      type: "AT_ROOT"
    };
  }
  return null;
}
function resolveDurations(node, text, pos) {
  return {
    type: "IN_RANGE"
  };
}
function resolveLogRange(node, text, pos) {
  const partialQuery = text.substring(0, pos).trimEnd();
  const afterPipe = partialQuery.endsWith("|");
  return resolveLogOrLogRange(node, text, pos, afterPipe);
}
function resolveLogRangeFromError(node, text, pos) {
  const parent = walk(node, [["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.LogRangeExpr]]);
  if (parent === null) {
    return null;
  }
  const partialQuery = text.substring(0, pos).trimEnd();
  const afterPipe = partialQuery.endsWith("|");
  return resolveLogOrLogRange(parent, text, pos, afterPipe);
}
function resolveLogOrLogRange(node, text, pos, afterPipe) {
  const selectorNode = walk(node, [["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Selector]]);
  if (!selectorNode || selectorNode.to > pos) {
    return null;
  }
  return {
    type: "AFTER_SELECTOR",
    afterPipe,
    hasSpace: text.charAt(pos - 1) === " ",
    logQuery: (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getLogQueryFromMetricsQueryAtPosition)(text, pos).trim()
  };
}
function resolveSelector(node, text, pos) {
  const child = walk(node, [["firstChild", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers]]);
  if (child !== null) {
    const textToCheck = text.slice(child.from, pos);
    if (!textToCheck.trim().endsWith(",")) {
      return null;
    }
  }
  const selectorNode = node.type.id === ERROR_NODE_ID ? walk(node, [["parent", _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.Matchers]]) : node;
  if (!selectorNode) {
    return null;
  }
  const otherLabels = getLabels(selectorNode, text);
  return {
    type: "IN_LABEL_SELECTOR_NO_LABEL_NAME",
    otherLabels
  };
}
function resolveAfterKeepAndDrop(node, text, pos) {
  let logQuery = (0,_queryUtils__WEBPACK_IMPORTED_MODULE_1__.getLogQueryFromMetricsQueryAtPosition)(text, pos).trim();
  let keepAndDropParent = null;
  let parent = node.parent;
  while (parent !== null) {
    if (parent.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineStage) {
      keepAndDropParent = parent;
      break;
    }
    parent = parent.parent;
  }
  if (keepAndDropParent?.type.id === _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.PipelineStage) {
    logQuery = logQuery.slice(0, keepAndDropParent.from);
  }
  return {
    type: "AFTER_KEEP_AND_DROP",
    logQuery
  };
}
function resolveCursor(text, cursorPos) {
  const trimRightTextLen = text.trimEnd().length;
  const pos = trimRightTextLen < cursorPos ? trimRightTextLen : cursorPos;
  const tree = _grafana_lezer_logql__WEBPACK_IMPORTED_MODULE_0__.parser.parse(text);
  const cursor = tree.cursorAt(pos);
  do {
    if (cursor.from === pos && cursor.to === pos && cursor.node.type.isError) {
      return cursor;
    }
  } while (cursor.next());
  return tree.cursorAt(pos);
}
function getSituation(text, pos) {
  if (text === "") {
    return {
      type: "EMPTY"
    };
  }
  const cursor = resolveCursor(text, pos);
  const currentNode = cursor.node;
  const ids = [cursor.type.id];
  while (cursor.parent()) {
    ids.push(cursor.type.id);
  }
  for (let resolver of RESOLVERS) {
    for (let path of resolver.paths) {
      if (isPathMatch(path, ids)) {
        const situation = resolver.fun(currentNode, text, pos);
        if (situation) {
          return situation;
        }
      }
    }
  }
  return null;
}


/***/ })

}]);
//# sourceMappingURL=loki-query-field.688d4773bd3acc3a82e9.js.map