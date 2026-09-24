"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2311],{8368:(_,f,a)=>{a.d(f,{D:()=>x,o:()=>m});const o={engineInfo:"MySQL dialectic based on dolthub go-mysql-server. The tables are all in memory",refIdExplanation:"RefIDs (A, B, C, etc.) represent data from other queries",columnInfo:"value should always be represented as __value__"},t={refIds:"{refIds}",currentQuery:"{currentQuery}",queryInstruction:"{queryInstruction}",schemaInfo:"{schemaInfo}",errorContext:"{errorContext}",queryContext:"{queryContext}"},i=`You are a SQL expert for Grafana expressions specializing in time series data analysis.
IMPORTANT - Current SQL Errors (if any): ${t.errorContext}

SQL dialect required by Grafana expressions: ${o.engineInfo}

RefIDs context: ${o.refIdExplanation}
Grafana specific context: ${o.columnInfo}

Available RefIDs to use in composable queries: ${t.refIds}

Current query to be improved: ${t.currentQuery}

Schema information to use in composable queries: ${t.schemaInfo}

${t.queryContext}

Query instruction: ${t.queryInstruction}

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
`,S=`You are an expert in SQL and Grafana SQL expressions with deep knowledge of time series data.

SQL dialect: ${o.engineInfo}

RefIDs: ${o.refIdExplanation}

Grafana specific context: ${o.columnInfo}

Available RefIDs: ${t.refIds}

Schema: ${t.schemaInfo}

${t.queryContext}

Explain SQL queries clearly and concisely, focusing on:
- What data is being selected and from which RefIDs
- How the data is being transformed or aggregated
- The purpose and business meaning of the query using dashboard and panel name from query context if relevant
- Performance implications and optimization opportunities. Database columns can not be indexed in context of Grafana sql expressions. Don't focus on 
  performance unless the query context has a requestTime or totalRows that looks like it could benefit from it.
- Time series specific patterns and their significance

Provide a clear explanation of what this SQL query does:`,p=e=>{if(!e)return"";const s=[];if(e.panelId&&s.push(`Panel Type: ${e.panelId}. Please use this to generate suggestions that are relevant to the panel type.`),e.alerting&&s.push("Context: Alerting rule (focus on boolean/threshold results). Please use this to generate suggestions that are relevant to the alerting rule."),e.queries){const n=Array.isArray(e.queries)?JSON.stringify(e.queries,null,2):String(e.queries);s.push(`Queries available to use in the SQL Expression: ${n}`)}if(e.dashboardContext){const n=typeof e.dashboardContext=="object"?JSON.stringify(e.dashboardContext,null,2):String(e.dashboardContext);s.push(`Dashboard context (dashboard title and panel name): ${n}`)}if(e.datasources){const n=Array.isArray(e.datasources)?JSON.stringify(e.datasources,null,2):String(e.datasources);s.push(`Datasources available to use in the SQL Expression: ${n}`)}if(e.totalRows&&s.push(`Total rows in the query: ${e.totalRows}`),e.requestTime&&s.push(`Request time: ${e.requestTime}`),e.numberOfQueries&&s.push(`Number of queries: ${e.numberOfQueries}`),e.seriesData){const n=typeof e.seriesData=="object"?JSON.stringify(e.seriesData,null,2):String(e.seriesData);s.push(`Series data: ${n}`)}return s.length?`Query Context:
${s.join(`
`)}`:""},m=e=>{const s=p(e.queryContext),n="",r=e.errorContext?.length?e.errorContext.join(`
`):"No current errors detected.";return i.replaceAll(t.refIds,e.refIds).replaceAll(t.currentQuery,e.currentQuery).replaceAll(t.queryInstruction,e.queryInstruction).replaceAll(t.schemaInfo,n).replaceAll(t.errorContext,r).replaceAll(t.queryContext,s)},x=e=>{const s=p(e.queryContext);return S.replaceAll(t.refIds,e.refIds).replaceAll(t.schemaInfo,"").replaceAll(t.queryContext,s)}},12311:(_,f,a)=>{a.r(f),a.d(f,{GenAISQLSuggestionsButton:()=>n});var o=a(74848),t=a(96540),i=a(92745),S=a(16200),p=a(37680),m=a(66769),x=a(8368);const e=(r,l)=>{const u=l.trim();return u?[`Improve, fix syntax errors, or optimize this SQL query: ${u}`]:[`Join, aggregate, filter, calculate percentiles, create time-based 
    window functions, or generally just make common SQL pattern queries for data from ${r.join(", ")}`]},s=(r,l,u,c,y)=>{const d=l.trim(),g=d?"Focus on fixing, improving, or enhancing the current query provided above.":"Generate a new SQL query based on the available RefIDs and common use cases.",h=(0,x.o)({refIds:r.length>0?r.join(", "):"A",currentQuery:d||"No current query provided",queryInstruction:g,schemas:u,errorContext:c,queryContext:y}),I=e(r,l),L=I[Math.floor(Math.random()*I.length)];return[{role:m.Xh.system,content:h},{role:m.Xh.user,content:L}]},n=({currentQuery:r,onGenerate:l,onHistoryUpdate:u,refIds:c,initialQuery:y,schemas:d,errorContext:g,queryContext:h})=>{const I=(0,t.useCallback)(()=>s(c,r,d,g,h),[c,r,d,g,h]),L=!r||r===y?"Generate suggestion":"Improve query";return(0,o.jsx)(S.n,{disabled:c.length===0,eventTrackingSrc:p.ec.sqlExpressions,messages:I,onGenerate:l,onHistoryChange:u,temperature:.3,text:(0,i.t)("sql-expressions.sql-ai-interaction","{{text}}",{text:L}),timeout:6e4,toggleTipTitle:(0,i.t)("sql-expressions.ai-suggestions-title","AI-powered SQL expression suggestions"),tooltip:c.length===0?(0,i.t)("sql-expressions.add-query-tooltip","Add at least one data query to generate SQL suggestions"):(0,i.t)("expressions.sql-expr.tooltip-experimental","SQL Expressions LLM integration is experimental. Please report any issues to the Grafana team.")})}}}]);

//# sourceMappingURL=2311.73e1a2b949d289f5d6c9.js.map