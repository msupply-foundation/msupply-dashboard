"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["public_app_features_expressions_components_GenAI_GenAISQLExplainButton_tsx"],{

/***/ "./public/app/features/expressions/components/GenAI/GenAISQLExplainButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenAISQLExplainButton: () => (/* binding */ GenAISQLExplainButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _dashboard_components_GenAI_GenAIButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/dashboard/components/GenAI/GenAIButton.tsx");
/* harmony import */ var _dashboard_components_GenAI_tracking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/dashboard/components/GenAI/tracking.ts");
/* harmony import */ var _dashboard_components_GenAI_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/dashboard/components/GenAI/utils.ts");
/* harmony import */ var _sqlPromptConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/expressions/components/GenAI/sqlPromptConfig.ts");








const getExplanationPrompt = (currentQuery) => {
  if (!currentQuery || currentQuery.trim() === "") {
    return "There is no SQL query to explain. Please enter a SQL expression first.";
  }
  return `${currentQuery}

Explain what this query does in simple terms.`;
};
const getSQLExplanationMessages = (refIds, currentQuery, schemas, queryContext) => {
  const systemPrompt = (0,_sqlPromptConfig__WEBPACK_IMPORTED_MODULE_6__.getSQLExplanationSystemPrompt)({
    refIds: refIds.length > 0 ? refIds.join(", ") : "A",
    currentQuery: currentQuery.trim() || "No current query provided",
    schemas,
    // Will be utilized once schema extraction is implemented
    queryContext
  });
  const userPrompt = getExplanationPrompt(currentQuery);
  return [
    {
      role: _dashboard_components_GenAI_utils__WEBPACK_IMPORTED_MODULE_5__.Role.system,
      content: systemPrompt
    },
    {
      role: _dashboard_components_GenAI_utils__WEBPACK_IMPORTED_MODULE_5__.Role.user,
      content: userPrompt
    }
  ];
};
const GenAISQLExplainButton = ({
  currentQuery,
  onExplain,
  queryContext,
  refIds,
  schemas
  // Future implementation will use this for enhanced context
}) => {
  const messages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    return getSQLExplanationMessages(refIds, currentQuery, schemas, queryContext);
  }, [refIds, currentQuery, schemas, queryContext]);
  const hasQuery = currentQuery && currentQuery.trim() !== "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _dashboard_components_GenAI_GenAIButton__WEBPACK_IMPORTED_MODULE_3__.GenAIButton,
    {
      disabled: !hasQuery,
      eventTrackingSrc: _dashboard_components_GenAI_tracking__WEBPACK_IMPORTED_MODULE_4__.EventTrackingSrc.sqlExpressions,
      messages,
      onGenerate: onExplain,
      temperature: 0.3,
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sql-expressions.explain-query", "Explain query"),
      timeout: 6e4,
      toggleTipTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sql-expressions.ai-explain-title", "AI-powered SQL expression explanation"),
      tooltip: !hasQuery ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("sql-expressions.explain-empty-query-tooltip", "Enter a SQL expression to get an explanation") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
        "expressions.sql-expr.tooltip-experimental",
        "SQL Expressions LLM integration is experimental. Please report any issues to the Grafana team."
      )
    }
  );
};


/***/ }),

/***/ "./public/app/features/expressions/components/GenAI/sqlPromptConfig.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSQLExplanationSystemPrompt: () => (/* binding */ getSQLExplanationSystemPrompt),
/* harmony export */   getSQLSuggestionSystemPrompt: () => (/* binding */ getSQLSuggestionSystemPrompt)
/* harmony export */ });

const COMMON_SQL_CONTEXT = {
  engineInfo: "MySQL dialectic based on dolthub go-mysql-server. The tables are all in memory",
  refIdExplanation: "RefIDs (A, B, C, etc.) represent data from other queries",
  columnInfo: "value should always be represented as __value__"
};
const TEMPLATE_PLACEHOLDERS = {
  refIds: "{refIds}",
  currentQuery: "{currentQuery}",
  queryInstruction: "{queryInstruction}",
  schemaInfo: "{schemaInfo}",
  // Note: Schema information will be implemented in future updates
  errorContext: "{errorContext}",
  // Note: Error context will be implemented in future updates
  queryContext: "{queryContext}"
};
const SQL_SUGGESTION_SYSTEM_PROMPT = `You are a SQL expert for Grafana expressions specializing in time series data analysis.
IMPORTANT - Current SQL Errors (if any): ${TEMPLATE_PLACEHOLDERS.errorContext}

SQL dialect required by Grafana expressions: ${COMMON_SQL_CONTEXT.engineInfo}

RefIDs context: ${COMMON_SQL_CONTEXT.refIdExplanation}
Grafana specific context: ${COMMON_SQL_CONTEXT.columnInfo}

Available RefIDs to use in composable queries: ${TEMPLATE_PLACEHOLDERS.refIds}

Current query to be improved: ${TEMPLATE_PLACEHOLDERS.currentQuery}

Schema information to use in composable queries: ${TEMPLATE_PLACEHOLDERS.schemaInfo}

${TEMPLATE_PLACEHOLDERS.queryContext}

Query instruction: ${TEMPLATE_PLACEHOLDERS.queryInstruction}

You may be able to derive schema information from the series data in queryContext.

Given the above data, help users with their SQL query by:
- **PRIORITY: If there are errors listed above, focus on fixing them first**
- Fixing syntax errors using available field and data type information
- Suggesting optimal queries based on actual data schema and patterns.
- Look at query context stats: totalRows, requestTime, numberOfQueries, and if it looks like performance should be part of the conversation, suggest optimizing for performance. Note indexing is not supported in Grafana expressions.
- Leveraging time series patterns and Grafana-specific use cases

Guidelines:
- Use proper field names and types based on schema information
- Include LIMIT clauses for performance unless aggregating
- Consider time-based filtering and grouping for time series data
- Suggest meaningful aggregations for metric data
- Use appropriate JOIN conditions when correlating multiple RefIDs
`;
const SQL_EXPLANATION_SYSTEM_PROMPT = `You are an expert in SQL and Grafana SQL expressions with deep knowledge of time series data.

SQL dialect: ${COMMON_SQL_CONTEXT.engineInfo}

RefIDs: ${COMMON_SQL_CONTEXT.refIdExplanation}

Grafana specific context: ${COMMON_SQL_CONTEXT.columnInfo}

Available RefIDs: ${TEMPLATE_PLACEHOLDERS.refIds}

Schema: ${TEMPLATE_PLACEHOLDERS.schemaInfo}

${TEMPLATE_PLACEHOLDERS.queryContext}

Explain SQL queries clearly and concisely, focusing on:
- What data is being selected and from which RefIDs
- How the data is being transformed or aggregated
- The purpose and business meaning of the query using dashboard and panel name from query context if relevant
- Performance implications and optimization opportunities. Database columns can not be indexed in context of Grafana sql expressions. Don't focus on 
  performance unless the query context has a requestTime or totalRows that looks like it could benefit from it.
- Time series specific patterns and their significance

Provide a clear explanation of what this SQL query does:`;
const generateQueryContext = (queryContext) => {
  if (!queryContext) {
    return "";
  }
  const contextParts = [];
  if (queryContext.panelId) {
    contextParts.push(
      `Panel Type: ${queryContext.panelId}. Please use this to generate suggestions that are relevant to the panel type.`
    );
  }
  if (queryContext.alerting) {
    contextParts.push(
      "Context: Alerting rule (focus on boolean/threshold results). Please use this to generate suggestions that are relevant to the alerting rule."
    );
  }
  if (queryContext.queries) {
    const queriesText = Array.isArray(queryContext.queries) ? JSON.stringify(queryContext.queries, null, 2) : String(queryContext.queries);
    contextParts.push(`Queries available to use in the SQL Expression: ${queriesText}`);
  }
  if (queryContext.dashboardContext) {
    const dashboardText = typeof queryContext.dashboardContext === "object" ? JSON.stringify(queryContext.dashboardContext, null, 2) : String(queryContext.dashboardContext);
    contextParts.push(`Dashboard context (dashboard title and panel name): ${dashboardText}`);
  }
  if (queryContext.datasources) {
    const datasourcesText = Array.isArray(queryContext.datasources) ? JSON.stringify(queryContext.datasources, null, 2) : String(queryContext.datasources);
    contextParts.push(`Datasources available to use in the SQL Expression: ${datasourcesText}`);
  }
  if (queryContext.totalRows) {
    contextParts.push(`Total rows in the query: ${queryContext.totalRows}`);
  }
  if (queryContext.requestTime) {
    contextParts.push(`Request time: ${queryContext.requestTime}`);
  }
  if (queryContext.numberOfQueries) {
    contextParts.push(`Number of queries: ${queryContext.numberOfQueries}`);
  }
  if (queryContext.seriesData) {
    const seriesDataText = typeof queryContext.seriesData === "object" ? JSON.stringify(queryContext.seriesData, null, 2) : String(queryContext.seriesData);
    contextParts.push(`Series data: ${seriesDataText}`);
  }
  return contextParts.length ? `Query Context:
${contextParts.join("\n")}` : "";
};
const getSQLSuggestionSystemPrompt = (variables) => {
  const queryContext = generateQueryContext(variables.queryContext);
  const schemaInfo = "";
  const errorContext = variables.errorContext?.length ? variables.errorContext.join("\n") : "No current errors detected.";
  return SQL_SUGGESTION_SYSTEM_PROMPT.replaceAll(TEMPLATE_PLACEHOLDERS.refIds, variables.refIds).replaceAll(TEMPLATE_PLACEHOLDERS.currentQuery, variables.currentQuery).replaceAll(TEMPLATE_PLACEHOLDERS.queryInstruction, variables.queryInstruction).replaceAll(TEMPLATE_PLACEHOLDERS.schemaInfo, schemaInfo).replaceAll(TEMPLATE_PLACEHOLDERS.errorContext, errorContext).replaceAll(TEMPLATE_PLACEHOLDERS.queryContext, queryContext);
};
const getSQLExplanationSystemPrompt = (variables) => {
  const queryContext = generateQueryContext(variables.queryContext);
  const schemaInfo = "";
  return SQL_EXPLANATION_SYSTEM_PROMPT.replaceAll(TEMPLATE_PLACEHOLDERS.refIds, variables.refIds).replaceAll(TEMPLATE_PLACEHOLDERS.schemaInfo, schemaInfo).replaceAll(TEMPLATE_PLACEHOLDERS.queryContext, queryContext);
};


/***/ })

}]);
//# sourceMappingURL=public_app_features_expressions_components_GenAI_GenAISQLExplainButton_tsx.31c14d1807714f8759a6.js.map