(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["textPanel"],{

/***/ "./node_modules/dangerously-set-html-content/src/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

'use client'

const { createElement, useEffect, useRef } = __webpack_require__("./node_modules/react/index.js")

function DangerouslySetHtmlContent({
  html,
  dangerouslySetInnerHTML,
  allowRerender,
  ...rest
}) {
  // We remove 'dangerouslySetInnerHTML' from props passed to the div
  const divRef = useRef(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (!html || !divRef.current) throw new Error("html prop can't be null")
    if (!isFirstRender.current) return
    isFirstRender.current = Boolean(allowRerender)

    const slotHtml = document.createRange().createContextualFragment(html) // Create a 'tiny' document and parse the html string
    divRef.current.innerHTML = '' // Clear the container
    divRef.current.appendChild(slotHtml) // Append the new content
  }, [html, divRef])

  return createElement('div', { ...rest, ref: divRef })
}

module.exports = DangerouslySetHtmlContent


/***/ }),

/***/ "./public/app/plugins/panel/text/TextPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextPanel: () => (/* binding */ TextPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/dangerously-set-html-content/src/index.js");
/* harmony import */ var dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/text/sanitize.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/plugins/panel/text/panelcfg.gen.ts");










function TextPanel(props) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const [processed, setProcessed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    mode: props.options.mode,
    content: processContent(props.options, props.replaceVariables, app_core_config__WEBPACK_IMPORTED_MODULE_10__["default"].disableSanitizeHtml)
  });
  (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(
    () => {
      const { options, replaceVariables } = props;
      const content = processContent(options, replaceVariables, app_core_config__WEBPACK_IMPORTED_MODULE_10__["default"].disableSanitizeHtml);
      if (content !== processed.content || options.mode !== processed.mode) {
        setProcessed({
          mode: options.mode,
          content
        });
      }
    },
    100,
    [props]
  );
  if (processed.mode === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.TextMode.Code) {
    const code = props.options.code ?? _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.defaultCodeOptions;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.CodeEditor,
      {
        value: processed.content,
        language: code.language ?? _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.defaultCodeOptions.language,
        width: props.width,
        height: props.height,
        containerStyles: styles.codeEditorContainer,
        showMiniMap: code.showMiniMap,
        showLineNumbers: code.showLineNumbers,
        readOnly: true
      },
      `${code.showLineNumbers}/${code.showMiniMap}`
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.containStrict, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.ScrollContainer, { minHeight: "100%", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    (dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2___default()),
    {
      allowRerender: true,
      html: processed.content,
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("markdown-html", styles.markdownHtml),
      "data-testid": "TextPanel-converted-content"
    }
  ) }) });
}
function processContent(options, interpolate, disableSanitizeHtml) {
  let { mode, content } = options;
  content = interpolate(content, {}, options.code?.language === "json" ? "json" : "html");
  if (!content) {
    return " ";
  }
  switch (mode) {
    case _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.TextMode.Code:
      break;
    // nothing
    case _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.TextMode.HTML:
      if (!disableSanitizeHtml) {
        content = _grafana_data__WEBPACK_IMPORTED_MODULE_6__.textUtil.sanitizeTextPanelContent(content);
      }
      break;
    case _panelcfg_gen__WEBPACK_IMPORTED_MODULE_11__.TextMode.Markdown:
    default:
      content = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.renderTextPanelMarkdown)(content, {
        noSanitize: disableSanitizeHtml
      });
  }
  return content;
}
const getStyles = (theme) => ({
  codeEditorContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    ".monaco-editor .margin, .monaco-editor-background": {
      backgroundColor: theme.colors.background.primary
    }
  }),
  containStrict: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    contain: "strict",
    height: "100%",
    display: "flex"
  }),
  markdownHtml: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "100%"
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/text/TextPanelEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextPanelEditor: () => (/* binding */ TextPanelEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/plugins/panel/text/panelcfg.gen.ts");






const TextPanelEditor = ({ value, onChange, context }) => {
  const language = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => context.options?.mode ?? _panelcfg_gen__WEBPACK_IMPORTED_MODULE_6__.TextMode.Markdown, [context]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.useStyles2)(getStyles);
  const getSuggestions = () => {
    if (!context.getSuggestions) {
      return [];
    }
    return context.getSuggestions().map((v) => (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.variableSuggestionToCodeEditorSuggestion)(v));
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.editorBox), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.CodeEditor,
    {
      value,
      onBlur: onChange,
      onSave: onChange,
      language,
      width: "100%",
      showMiniMap: false,
      showLineNumbers: false,
      height: "500px",
      getSuggestions
    }
  ) });
};
const getStyles = (theme) => ({
  editorBox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    label: "editorBox",
    margin: theme.spacing(0.5, 0),
    width: "100%"
  })
});


/***/ }),

/***/ "./public/app/plugins/panel/text/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _TextPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/plugins/panel/text/TextPanel.tsx");
/* harmony import */ var _TextPanelEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/plugins/panel/text/TextPanelEditor.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/text/panelcfg.gen.ts");
/* harmony import */ var _textPanelMigrationHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/text/textPanelMigrationHandler.ts");







const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_TextPanel__WEBPACK_IMPORTED_MODULE_2__.TextPanel).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.category-text", "Text")];
  builder.addRadio({
    path: "mode",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.name-mode", "Mode"),
    category,
    settings: {
      options: [
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.TextMode.Markdown, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.mode-options.label-markdown", "Markdown") },
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.TextMode.HTML, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.mode-options.label-html", "HTML") },
        { value: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.TextMode.Code, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.mode-options.label-code", "Code") }
      ]
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultOptions.mode
  }).addSelect({
    path: "code.language",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.name-language", "Language"),
    category,
    settings: {
      options: Object.values(_panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.CodeLanguage).map((v) => ({
        value: v,
        label: v
      }))
    },
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultCodeOptions.language,
    showIf: (v) => v.mode === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.TextMode.Code
  }).addBooleanSwitch({
    path: "code.showLineNumbers",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.name-show-line-numbers", "Show line numbers"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultCodeOptions.showLineNumbers,
    showIf: (v) => v.mode === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.TextMode.Code
  }).addBooleanSwitch({
    path: "code.showMiniMap",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.name-show-mini-map", "Show mini map"),
    category,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultCodeOptions.showMiniMap,
    showIf: (v) => v.mode === _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.TextMode.Code
  }).addCustomEditor({
    id: "content",
    path: "content",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("text.name-content", "Content"),
    category,
    editor: _TextPanelEditor__WEBPACK_IMPORTED_MODULE_3__.TextPanelEditor,
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_4__.defaultOptions.content
  });
}).setMigrationHandler(_textPanelMigrationHandler__WEBPACK_IMPORTED_MODULE_5__.textPanelMigrationHandler);


/***/ }),

/***/ "./public/app/plugins/panel/text/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeLanguage: () => (/* binding */ CodeLanguage),
/* harmony export */   TextMode: () => (/* binding */ TextMode),
/* harmony export */   defaultCodeLanguage: () => (/* binding */ defaultCodeLanguage),
/* harmony export */   defaultCodeOptions: () => (/* binding */ defaultCodeOptions),
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

var TextMode = /* @__PURE__ */ ((TextMode2) => {
  TextMode2["Code"] = "code";
  TextMode2["HTML"] = "html";
  TextMode2["Markdown"] = "markdown";
  return TextMode2;
})(TextMode || {});
var CodeLanguage = /* @__PURE__ */ ((CodeLanguage2) => {
  CodeLanguage2["Go"] = "go";
  CodeLanguage2["Html"] = "html";
  CodeLanguage2["Json"] = "json";
  CodeLanguage2["Markdown"] = "markdown";
  CodeLanguage2["Plaintext"] = "plaintext";
  CodeLanguage2["Sql"] = "sql";
  CodeLanguage2["Typescript"] = "typescript";
  CodeLanguage2["Xml"] = "xml";
  CodeLanguage2["Yaml"] = "yaml";
  return CodeLanguage2;
})(CodeLanguage || {});
const defaultCodeLanguage = "plaintext" /* Plaintext */;
const defaultCodeOptions = {
  language: "plaintext" /* Plaintext */,
  showLineNumbers: false,
  showMiniMap: false
};
const defaultOptions = {
  content: `# Title

For markdown syntax help: [commonmark.org/help](https://commonmark.org/help/)`,
  mode: "markdown" /* Markdown */
};


/***/ }),

/***/ "./public/app/plugins/panel/text/textPanelMigrationHandler.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   textPanelMigrationHandler: () => (/* binding */ textPanelMigrationHandler)
/* harmony export */ });
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./public/app/plugins/panel/text/panelcfg.gen.ts");


const textPanelMigrationHandler = (panel) => {
  const previousVersion = parseFloat(panel.pluginVersion || "6.1");
  let options = panel.options;
  if (panel.hasOwnProperty("content") && panel.hasOwnProperty("mode")) {
    const oldTextPanel = panel;
    const content = oldTextPanel.content;
    const mode = oldTextPanel.mode;
    delete oldTextPanel.content;
    delete oldTextPanel.mode;
    if (previousVersion < 7.1) {
      options = { content, mode };
    }
  }
  const modes = [_panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.TextMode.Code, _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.TextMode.HTML, _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.TextMode.Markdown];
  if (!modes.find((f) => f === options.mode)) {
    options = { ...options, mode: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_0__.TextMode.Markdown };
  }
  return options;
};


/***/ })

}]);
//# sourceMappingURL=textPanel.282b8af49724ba28ccc7.js.map