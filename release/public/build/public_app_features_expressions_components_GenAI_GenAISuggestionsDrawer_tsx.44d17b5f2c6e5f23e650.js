"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_expressions_components_GenAI_GenAISuggestionsDrawer_tsx"],{

/***/ "./public/app/features/expressions/components/GenAI/GenAISuggestionsDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenAISuggestionsDrawer: () => (/* binding */ GenAISuggestionsDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ClipboardButton/ClipboardButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Monaco/CodeEditor.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/expressions/components/GenAI/utils.ts");







const GenAISuggestionsDrawer = ({
  isOpen,
  onApplySuggestion,
  onClose,
  suggestions
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  if (!isOpen) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Drawer,
    {
      onClose,
      size: "lg",
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "sql-expressions.sql-suggestion-history", children: "SQL Suggestion History" }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.content, "data-testid": "suggestions-drawer", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.timelineContainer, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.timelineLine }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.suggestionsList, children: suggestions.map((suggestion, index) => {
          const parsedSuggestion = (0,_utils__WEBPACK_IMPORTED_MODULE_12__.parseSuggestion)(suggestion);
          const isLatest = index === 0;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.timelineItem, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "div",
              {
                className: `${styles.timelineNode} ${isLatest ? styles.timelineNodeActive : styles.timelineNodeInactive}`
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card, { noMargin: true, className: isLatest ? styles.latestSuggestion : "", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.suggestionContent, children: parsedSuggestion.map(({ type, content, language }, partIndex) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.suggestionPart, children: type === "code" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.codeBlock, children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.codeHeader, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Text, { variant: "bodySmall", weight: "bold", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans,
                  {
                    i18nKey: "sql-expressions.code-label",
                    values: { language: language?.toUpperCase() || "CODE" },
                    children: "{{ language }}"
                  }
                ) }),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "row", gap: 1, children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ClipboardButton,
                    {
                      size: "sm",
                      icon: "copy",
                      variant: "secondary",
                      getText: () => content,
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "sql-expressions.copy", children: "Copy" })
                    }
                  ),
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
                    {
                      size: "sm",
                      variant: "primary",
                      icon: "ai-sparkle",
                      onClick: () => onApplySuggestion(content),
                      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "sql-expressions.apply", children: "Apply" })
                    }
                  )
                ] })
              ] }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.CodeEditor,
                {
                  value: content,
                  language: language === "sql" || language === "mysql" ? "mysql" : "sql",
                  width: "100%",
                  height: Math.max(80, Math.min(300, (content.split("\n").length + 1) * 20)),
                  readOnly: true,
                  showMiniMap: false,
                  showLineNumbers: true,
                  monacoOptions: {
                    lineNumbers: "on",
                    folding: false,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    renderLineHighlight: "none",
                    wordWrap: "on",
                    readOnly: true,
                    contextmenu: false,
                    padding: { top: 8, bottom: 8 },
                    automaticLayout: true,
                    fontSize: 13,
                    lineHeight: 20
                  }
                }
              )
            ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              "div",
              {
                className: "markdown-html",
                dangerouslySetInnerHTML: { __html: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.renderMarkdown)(content) }
              }
            ) }, partIndex)) }) }, index)
          ] }, index);
        }) })
      ] }) }) })
    }
  );
};
const getStyles = (theme) => ({
  content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    height: "100%",
    display: "flex",
    flexDirection: "column"
  }),
  emptyState: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
    gap: theme.spacing(2)
  }),
  timelineContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    flex: 1,
    paddingLeft: theme.spacing(4.5)
    // Space for timeline line and nodes
  }),
  timelineLine: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "absolute",
    // Offset the 2px width of the timeline line
    left: `calc(${theme.spacing(1)} + 2px)`,
    top: theme.spacing(1),
    bottom: 0,
    width: "2px",
    backgroundColor: theme.colors.border.strong,
    zIndex: 1
  }),
  suggestionsList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    position: "relative"
  }),
  timelineItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "relative",
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(2)
  }),
  timelineNode: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    position: "absolute",
    left: theme.spacing(-4.5),
    // Position on the timeline line
    top: theme.spacing(1),
    // Align with card content
    width: theme.spacing(3),
    height: theme.spacing(3),
    borderRadius: theme.shape.radius.pill,
    border: `2px solid ${theme.colors.primary.main}`,
    backgroundColor: theme.colors.background.primary,
    zIndex: 2,
    flexShrink: 0
  }),
  timelineNodeActive: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.primary.main,
    // Filled circle for current/latest
    boxShadow: `0 0 0 4px ${theme.colors.background.primary}`
    // White ring around filled circle
  }),
  timelineNodeInactive: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.background.primary,
    // Empty circle for others
    boxShadow: `0 0 0 4px ${theme.colors.background.primary}`
    // White ring around filled circle
  }),
  latestSuggestion: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    border: `2px solid ${theme.colors.primary.main}`,
    position: "relative",
    "&::before": {
      content: '"Latest"',
      position: "absolute",
      top: theme.spacing(-0.5),
      right: theme.spacing(1),
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.primary.contrastText,
      padding: theme.spacing(0.25, 1),
      borderRadius: theme.shape.radius.default,
      fontSize: theme.typography.bodySmall.fontSize,
      fontWeight: theme.typography.fontWeightMedium
    }
  }),
  suggestionContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    width: "100%",
    overflowX: "auto"
  }),
  suggestionPart: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "block",
    width: "100%"
  }),
  codeBlock: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    border: `1px solid ${theme.colors.border.medium}`,
    borderRadius: theme.shape.radius.default,
    overflow: "hidden",
    marginBottom: theme.spacing(1),
    width: "100%",
    minWidth: "600px"
  }),
  codeHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: theme.colors.background.secondary,
    padding: theme.spacing(1, 1.5),
    borderBottom: `1px solid ${theme.colors.border.weak}`
  })
});


/***/ }),

/***/ "./public/app/features/expressions/components/GenAI/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseSuggestion: () => (/* binding */ parseSuggestion)
/* harmony export */ });

const parseSuggestion = (suggestion) => {
  if (!suggestion) {
    return [];
  }
  const parts = [];
  const segments = suggestion.split(/```/);
  segments.forEach((segment, index) => {
    if (index % 2 === 0) {
      if (segment.trim()) {
        parts.push({ type: "text", content: segment.trim() });
      }
    } else {
      const lines = segment.split("\n");
      let language = "sql";
      let codeContent = segment;
      if (lines[0] && lines[0].trim() && !lines[0].includes(" ")) {
        language = lines[0].trim().toLowerCase();
        codeContent = lines.slice(1).join("\n");
      }
      codeContent = codeContent.replace(/\n+$/, "");
      if (codeContent.trim()) {
        const finalLanguage = language === "mysql" ? "mysql" : language === "sql" ? "mysql" : language;
        parts.push({
          type: "code",
          content: codeContent.trim(),
          language: finalLanguage
        });
      }
    }
  });
  return parts;
};


/***/ })

}]);
//# sourceMappingURL=public_app_features_expressions_components_GenAI_GenAISuggestionsDrawer_tsx.44d17b5f2c6e5f23e650.js.map