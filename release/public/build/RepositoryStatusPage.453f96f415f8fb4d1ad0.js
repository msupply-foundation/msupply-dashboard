"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["RepositoryStatusPage"],{

/***/ "./public/app/features/explore/TraceView/components/Theme.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoColor: () => (/* binding */ autoColor)
/* harmony export */ });
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");


function autoColor(theme, hex, base) {
  if (theme.isLight) {
    return hex;
  } else {
    if (base) {
      const color2 = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_0__["default"])(hex);
      return tinycolor2__WEBPACK_IMPORTED_MODULE_0__["default"].mostReadable(
        base,
        [
          color2.clone().lighten(25),
          color2.clone().lighten(10),
          color2,
          color2.clone().darken(10),
          color2.clone().darken(25)
        ],
        {
          includeFallbackColors: false
        }
      ).toHex8String();
    }
    const color = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_0__["default"])(hex).toHsl();
    color.l = 1 - color.l;
    const newColor = (0,tinycolor2__WEBPACK_IMPORTED_MODULE_0__["default"])(color);
    return newColor.isLight() ? newColor.darken(5).toHex8String() : newColor.lighten(5).toHex8String();
  }
}


/***/ }),

/***/ "./public/app/features/explore/TraceView/components/TraceTimelineViewer/SpanDetail/KeyValuesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinkValue: () => (/* binding */ LinkValue),
/* harmony export */   "default": () => (/* binding */ KeyValuesTable),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/explore/TraceView/components/Theme.tsx");
/* harmony import */ var _common_CopyIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/explore/TraceView/components/common/CopyIcon.tsx");
/* harmony import */ var _jsonMarkup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/explore/TraceView/components/TraceTimelineViewer/SpanDetail/jsonMarkup.js");








const copyIconClassName = "copyIcon";
const getStyles = (theme) => {
  return {
    KeyValueTable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "KeyValueTable",
      background: (0,_Theme__WEBPACK_IMPORTED_MODULE_5__.autoColor)(theme, "#fff"),
      border: `1px solid ${(0,_Theme__WEBPACK_IMPORTED_MODULE_5__.autoColor)(theme, "#ddd")}`,
      marginBottom: "0.5rem",
      maxHeight: "450px",
      overflow: "auto"
    }),
    table: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%"
    }),
    body: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "body",
      verticalAlign: "baseline"
    }),
    row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "row",
      "& > td": {
        padding: "0 0.5rem",
        height: "30px"
      },
      "&:nth-child(2n) > td": {
        background: (0,_Theme__WEBPACK_IMPORTED_MODULE_5__.autoColor)(theme, "#f5f5f5")
      },
      [`&:not(:hover) .${copyIconClassName}`]: {
        visibility: "hidden"
      },
      "a span": {
        color: `${theme.colors.text.link} !important`
      },
      "a:hover span": {
        textDecoration: "underline"
      }
    }),
    keyColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "keyColumn",
      color: (0,_Theme__WEBPACK_IMPORTED_MODULE_5__.autoColor)(theme, "#888"),
      whiteSpace: "pre",
      width: "125px"
    }),
    copyColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "copyColumn",
      textAlign: "right"
    }),
    linkIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "linkIcon",
      verticalAlign: "middle",
      fontWeight: "bold"
    }),
    jsonTable: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "inline-block"
    })
  };
};
const jsonObjectOrArrayStartRegex = /^(\[|\{)/;
function parseIfComplexJson(value) {
  if (typeof value === "string" && jsonObjectOrArrayStartRegex.test(value)) {
    try {
      return JSON.parse(value);
    } catch (_) {
    }
  }
  return value;
}
const LinkValue = ({ link, children }) => {
  const { path, title = "", onClick, icon = "external-link-alt" } = link;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { href: path, title, onClick, target: "_blank", rel: "noopener noreferrer", children: [
    children,
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: icon })
  ] });
};
function KeyValuesTable(props) {
  const { data, linksGetter, onlyValues } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.KeyValueTable), "data-testid": "KeyValueTable", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: styles.table, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { className: styles.body, children: data.map((row, i) => {
    let markup = { __html: "" };
    if (row.type === "code") {
      markup = {
        __html: `<pre style="border: none; background: none">${row.value}</pre>`
      };
    } else if (row.type === "text") {
      markup = {
        __html: `<span style="white-space: pre-wrap;">${row.value}</span>`
      };
    } else {
      markup = {
        __html: (0,_jsonMarkup__WEBPACK_IMPORTED_MODULE_7__["default"])(parseIfComplexJson(row.value))
      };
    }
    const jsonTable = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.jsonTable, dangerouslySetInnerHTML: markup });
    const links = linksGetter?.(data, i);
    let valueMarkup;
    if (links && links.length) {
      valueMarkup = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LinkValue, { link: links[0], children: jsonTable }) });
    } else {
      valueMarkup = jsonTable;
    }
    return (
      // `i` is necessary in the key because row.key can repeat
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: styles.row, children: [
        !onlyValues && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.keyColumn, "data-testid": "KeyValueTable--keyColumn", children: row.key }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: valueMarkup }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: styles.copyColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _common_CopyIcon__WEBPACK_IMPORTED_MODULE_6__["default"],
          {
            className: copyIconClassName,
            copyText: row.type === "code" || row.type === "text" ? row.value : JSON.stringify(row, null, 2),
            tooltipTitle: "Copy"
          }
        ) })
      ] }, `${row.key}-${i}`)
    );
  }) }) }) });
}


/***/ }),

/***/ "./public/app/features/explore/TraceView/components/TraceTimelineViewer/SpanDetail/jsonMarkup.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ jsonMarkup)
/* harmony export */ });
// The MIT License (MIT)
//
// Copyright (c) 2014 Mathias Buus
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

const INDENT = '    ';

function inlineRule(objRule) {
  let str = '';
  objRule &&
    Object.keys(objRule).forEach(function (rule) {
      str += rule + ':' + objRule[rule] + ';';
    });
  return str;
}

function Stylize(styleFile) {
  function styleClass(cssClass) {
    return 'class="' + cssClass + '"';
  }

  function styleInline(cssClass) {
    return 'style="' + inlineRule(styleFile['.' + cssClass]) + '"';
  }

  if (!styleFile) {
    return styleClass;
  }
  return styleInline;
}

function type(doc) {
  if (doc === null) {
    return 'null';
  }
  if (Array.isArray(doc)) {
    return 'array';
  }
  if (typeof doc === 'string' && /^https?:/.test(doc)) {
    return 'link';
  }
  if (typeof doc === 'object' && typeof doc.toISOString === 'function') {
    return 'date';
  }

  return typeof doc;
}

function escape(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function jsonMarkup(doc, styleFile) {
  let indent = '';
  const style = Stylize(styleFile);

  let forEach = function (list, start, end, fn) {
    if (!list.length) {
      return start + ' ' + end;
    }

    let out = start + '\n';

    indent += INDENT;
    list.forEach(function (key, i) {
      out += indent + fn(key) + (i < list.length - 1 ? ',' : '') + '\n';
    });
    indent = indent.slice(0, -INDENT.length);

    return out + indent + end;
  };

  function visit(obj) {
    if (obj === undefined) {
      return '';
    }

    switch (type(obj)) {
      case 'boolean':
        return '<span ' + style('json-markup-bool') + '>' + obj + '</span>';

      case 'number':
        return '<span ' + style('json-markup-number') + '>' + obj + '</span>';

      case 'date':
        return '<span class="json-markup-string">"' + escape(obj.toISOString()) + '"</span>';

      case 'null':
        return '<span ' + style('json-markup-null') + '>null</span>';

      case 'string':
        return '<span ' + style('json-markup-string') + '>"' + escape(obj.replace(/\n/g, '\n' + indent)) + '"</span>';

      case 'link':
        return (
          '<span ' + style('json-markup-string') + '>"<a href="' + encodeURI(obj) + '">' + escape(obj) + '</a>"</span>'
        );

      case 'array':
        return forEach(obj, '[', ']', visit);

      case 'object':
        const keys = Object.keys(obj).filter(function (key) {
          return obj[key] !== undefined;
        });

        return forEach(keys, '{', '}', function (key) {
          return '<span ' + style('json-markup-key') + '>"' + escape(key) + '":</span> ' + visit(obj[key]);
        });
    }

    return '';
  }

  return '<div ' + style('json-markup') + '>' + visit(doc) + '</div>';
}


/***/ }),

/***/ "./public/app/features/explore/TraceView/components/common/CopyIcon.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");







const getStyles = () => ({
  CopyIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    backgroundColor: "transparent",
    border: "none",
    color: "inherit",
    overflow: "hidden",
    "&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.25)",
      color: "inherit"
    }
  })
});
function CopyIcon({ copyText, icon = "copy", tooltipTitle }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const [hasCopied, setHasCopied] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleClick = () => {
    navigator.clipboard.writeText(copyText);
    setHasCopied(true);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { content: hasCopied ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("explore.trace-view.tooltip-copy-icon", "Copied") : tooltipTitle, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
    {
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("explore.trace-view.aria-label-copy", "Copy to clipboard"),
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(styles.CopyIcon),
      type: "button",
      icon,
      onClick: handleClick
    }
  ) });
}


/***/ }),

/***/ "./public/app/features/provisioning/File/FilesView.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesView: () => (/* binding */ FilesView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/File/utils.ts");








function FilesView({ repo }) {
  const name = repo.metadata?.name ?? "";
  const query = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_8__.useGetRepositoryFilesQuery)({ name });
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const data = [...query.data?.items ?? []].filter(
    (file) => file.path.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const showHistoryBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.isFileHistorySupported)(repo.spec?.type);
  const columns = [
    {
      id: "path",
      header: "Path",
      sortType: "string",
      cell: ({ row: { original } }) => {
        const { path } = original;
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `${_constants__WEBPACK_IMPORTED_MODULE_9__.PROVISIONING_URL}/${name}/file/${path}`, children: path });
      }
    },
    {
      id: "size",
      header: "Size (KB)",
      cell: ({ row: { original } }) => {
        const { size } = original;
        return (parseInt(size, 10) / 1024).toFixed(2);
      },
      sortType: "number"
    },
    {
      id: "hash",
      header: "Hash",
      sortType: "string"
    },
    {
      id: "actions",
      header: "",
      cell: ({ row: { original } }) => {
        const { path } = original;
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { children: [
          (path.endsWith(".json") || path.endsWith(".yaml") || path.endsWith(".yml")) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: `${_constants__WEBPACK_IMPORTED_MODULE_9__.PROVISIONING_URL}/${name}/file/${path}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.files-view.columns.view", children: "View" }) }),
          showHistoryBtn && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: `${_constants__WEBPACK_IMPORTED_MODULE_9__.PROVISIONING_URL}/${name}/history/${path}?repo_type=${repo.spec?.type}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.files-view.columns.history", children: "History" }) })
        ] });
      }
    }
  ];
  if (query.isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { grow: 1, direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.FilterInput,
      {
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.files-view.placeholder-search", "Search"),
        autoFocus: true,
        value: searchQuery,
        onChange: setSearchQuery
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InteractiveTable, { columns, data, pageSize: 25, getRowId: (f) => String(f.path) })
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/File/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFileHistorySupported: () => (/* binding */ isFileHistorySupported)
/* harmony export */ });

function isFileHistorySupported(repoType) {
  const supportedRepoTypes = /* @__PURE__ */ new Set(["github", "gitlab", "bitbucket"]);
  return !!repoType && supportedRepoTypes.has(repoType);
}


/***/ }),

/***/ "./public/app/features/provisioning/Job/RecentJobs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentJobs: () => (/* binding */ RecentJobs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/durationutil.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var app_features_explore_TraceView_components_TraceTimelineViewer_SpanDetail_KeyValuesTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/explore/TraceView/components/TraceTimelineViewer/SpanDetail/KeyValuesTable.tsx");
/* harmony import */ var _Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/Shared/ProvisioningAlert.tsx");
/* harmony import */ var _hooks_useRepositoryAllJobs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/hooks/useRepositoryAllJobs.ts");
/* harmony import */ var _utils_repositoryStatus__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryStatus.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/provisioning/utils/time.ts");
/* harmony import */ var _JobSummary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/provisioning/Job/JobSummary.tsx");












const getJobColumns = () => [
  {
    id: "jobId",
    header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.column-job-id", "Job ID"),
    cell: ({ row: { original: job } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", children: job.metadata?.name || "" })
  },
  {
    id: "status",
    header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.column-status", "Status"),
    cell: ({ row: { original: job } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Badge,
      {
        text: job.status?.state || "",
        color: (0,_utils_repositoryStatus__WEBPACK_IMPORTED_MODULE_15__.getStatusColor)(job.status?.state),
        icon: job.status?.state === "working" ? "spinner" : void 0
      }
    )
  },
  {
    id: "action",
    header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.column-action", "Action"),
    cell: ({ row: { original: job } }) => job.spec?.action
  },
  {
    id: "started",
    header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.column-started", "Started"),
    cell: ({ row: { original: job } }) => (0,_utils_time__WEBPACK_IMPORTED_MODULE_16__.formatTimestamp)(job.status?.started)
  },
  {
    id: "duration",
    header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.column-duration", "Duration"),
    cell: ({ row: { original: job } }) => {
      const interval = {
        start: job.status?.started ?? 0,
        end: job.status?.finished ?? Date.now()
      };
      if (!interval.start) {
        return null;
      }
      const elapsed = interval.end - interval.start;
      if (elapsed < 1e3) {
        return `${elapsed}ms`;
      }
      return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.intervalToAbbreviatedDurationString)(interval, true);
    }
  },
  {
    id: "message",
    header: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.column-message", "Message"),
    cell: ({ row: { original: job } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: job.status?.message })
  }
];
function ExpandedRow({ row }) {
  const hasSummary = Boolean(row.status?.summary?.length);
  const hasErrors = Boolean(row.status?.errors?.length);
  const hasSpec = Boolean(row.spec);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const v = [];
    const action = row.spec?.action;
    if (!action) {
      return v;
    }
    const def = row.spec?.[action];
    if (!def) {
      return v;
    }
    for (const [key, value] of Object.entries(def)) {
      v.push({ key, value });
    }
    return v;
  }, [row.spec]);
  if (!hasSummary && !hasErrors && !hasSpec) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Box, { padding: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 2, children: [
    hasSpec && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.expanded-row.job-specification", children: "Job Specification" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_explore_TraceView_components_TraceTimelineViewer_SpanDetail_KeyValuesTable__WEBPACK_IMPORTED_MODULE_12__["default"], { data })
    ] }),
    hasErrors && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_ProvisioningAlert__WEBPACK_IMPORTED_MODULE_13__.ProvisioningAlert, { error: { message: row.status?.errors } }),
    hasSummary && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", gap: 2, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.expanded-row.summary", children: "Summary" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_JobSummary__WEBPACK_IMPORTED_MODULE_17__.JobSummary, { summary: row.status.summary })
    ] })
  ] }) });
}
function EmptyState() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.empty-state.no-jobs", children: "No jobs..." }) }) });
}
function ErrorLoading(typ, error) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.error-loading", "Error loading {{type}}", { type: typ }),
      severity: "error",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: JSON.stringify(error) })
    }
  );
}
function Loading() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { direction: "column", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, {}) });
}
function RecentJobs({ repo }) {
  const [jobs, activeQuery, historicQuery] = (0,_hooks_useRepositoryAllJobs__WEBPACK_IMPORTED_MODULE_14__.useRepositoryAllJobs)({
    repositoryName: repo.metadata?.name ?? "x"
  });
  const jobColumns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => getJobColumns(), []);
  let description;
  if (activeQuery.isLoading || historicQuery.isLoading) {
    description = Loading();
  } else if (activeQuery.isError) {
    description = ErrorLoading((0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.recent-jobs.active-jobs", "active jobs"), activeQuery.error);
  } else if (!jobs?.length) {
    description = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EmptyState, {});
  } else {
    description = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InteractiveTable,
      {
        data: jobs,
        columns: jobColumns,
        getRowId: (item) => `${item.metadata?.uid}`,
        renderExpandedRow: (row) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExpandedRow, { row }),
        pageSize: 10
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.recent-jobs.jobs", children: "Jobs" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Card.Description, { children: description })
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/CheckRepository.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckRepository: () => (/* binding */ CheckRepository)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");





function CheckRepository({ repository }) {
  const [testRepo, testQuery] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_4__.useCreateRepositoryTestMutation)();
  const name = repository.metadata?.name;
  const onClick = () => {
    if (!name) {
      return;
    }
    testRepo({ name, body: {} });
  };
  if (testQuery.isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Spinner, {});
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { icon: "check-circle", variant: "secondary", disabled: testQuery.isLoading || !name, onClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.check-repository.check", children: "Check" }) }) });
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/RepositoryActions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryActions: () => (/* binding */ RepositoryActions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _Shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/provisioning/Shared/StatusBadge.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _utils_git__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/utils/git.ts");
/* harmony import */ var _utils_repository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/utils/repository.ts");
/* harmony import */ var _utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryTypes.ts");
/* harmony import */ var _SyncRepository__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/Repository/SyncRepository.tsx");











function RepositoryActions({ repository }) {
  const name = repository.metadata?.name ?? "";
  const repoHref = (0,_utils_git__WEBPACK_IMPORTED_MODULE_8__.getRepoHrefForProvider)(repository.spec);
  const repoType = repository.spec?.type;
  const repoConfig = repoType ? (0,_utils_repositoryTypes__WEBPACK_IMPORTED_MODULE_10__.getRepositoryTypeConfig)(repoType) : void 0;
  const providerIcon = repoConfig?.icon || "external-link-alt";
  const isReadOnlyRepo = (0,_utils_repository__WEBPACK_IMPORTED_MODULE_9__.getIsReadOnlyWorkflows)(repository.spec?.workflows);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { wrap: "wrap", children: [
    isReadOnlyRepo && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Badge, { color: "darkgrey", text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("folder-repo.read-only-badge", "Read only") }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_StatusBadge__WEBPACK_IMPORTED_MODULE_6__.StatusBadge, { repo: repository, displayOnly: true }),
    repoHref && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "secondary", icon: providerIcon, onClick: () => window.open(repoHref, "_blank"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.repository-actions.source-code", children: "Source code" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SyncRepository__WEBPACK_IMPORTED_MODULE_11__.SyncRepository, { repository }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.LinkButton,
      {
        variant: "secondary",
        icon: "cog",
        href: `${_constants__WEBPACK_IMPORTED_MODULE_7__.PROVISIONING_URL}/${name}/edit`,
        onClick: () => {
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.reportInteraction)("grafana_provisioning_repository_settings_opened", {
            repositoryName: name,
            repositoryType: repository.spec?.type ?? "unknown"
          });
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.Trans, { i18nKey: "provisioning.repository-actions.settings", children: "Settings" })
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/RepositoryHealthCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryHealthCard: () => (/* binding */ RepositoryHealthCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Grid/Grid.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/utils/time.ts");
/* harmony import */ var _CheckRepository__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/Repository/CheckRepository.tsx");







function RepositoryHealthCard({ repo }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const status = repo.status;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card, { noMargin: true, className: styles.card, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.health", children: "Health" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Description, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Grid, { columns: 3, gap: 1, alignItems: "baseline", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.status", children: "Status:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spanTwo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge,
        {
          color: status?.health?.healthy ? "green" : "red",
          text: status?.health?.healthy ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.repository-overview.healthy", "Healthy") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.repository-overview.unhealthy", "Unhealthy"),
          icon: status?.health?.healthy ? "check-circle" : "exclamation-triangle"
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.checked", children: "Checked:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spanTwo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "body", children: (0,_utils_time__WEBPACK_IMPORTED_MODULE_9__.formatTimestamp)(status?.health?.checked) }) }),
      !!status?.health?.message?.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.messages", children: "Messages:" }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { gap: 1, children: status.health.message.map((msg, idx) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Text, { variant: "body", children: msg }, idx)) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Actions, { className: styles.actions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CheckRepository__WEBPACK_IMPORTED_MODULE_10__.CheckRepository, { repository: repo }) })
  ] });
}
const getStyles = () => {
  return {
    spanTwo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridColumn: "span 2"
    }),
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }),
    actions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: "auto"
    })
  };
};


/***/ }),

/***/ "./public/app/features/provisioning/Repository/RepositoryOverview.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryOverview: () => (/* binding */ RepositoryOverview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Grid/Grid.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Job_RecentJobs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/Job/RecentJobs.tsx");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/utils/time.ts");
/* harmony import */ var _RepositoryHealthCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/provisioning/Repository/RepositoryHealthCard.tsx");
/* harmony import */ var _RepositoryPullStatusCard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/provisioning/Repository/RepositoryPullStatusCard.tsx");










function getColumnCount(hasWebhook) {
  return {
    xxlColumn: hasWebhook ? 5 : 4,
    lgColumn: hasWebhook ? 3 : 2
  };
}
function RepositoryOverview({ repo }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const status = repo.status;
  const webhookURL = getWebhookURL(repo);
  const { lgColumn, xxlColumn } = getColumnCount(Boolean(repo.status?.webhook));
  const resourceColumns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => [
      {
        id: "Resource",
        header: "Resource Type",
        cell: ({ row: { original } }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: original.resource });
        },
        size: "auto"
      },
      {
        id: "count",
        header: "Count",
        cell: ({ row: { original } }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: original.count });
        },
        size: 100
      }
    ],
    []
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Box, { padding: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Grid, { columns: { xs: 1, sm: 2, lg: lgColumn, xxl: xxlColumn }, gap: 2, alignItems: "flex-start", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.cardContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card, { noMargin: true, className: styles.card, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.repository-overview.resources", children: "Resources" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card.Description, { children: repo.status?.stats ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InteractiveTable,
          {
            columns: resourceColumns,
            data: repo.status.stats,
            getRowId: (r) => `${r.group}-${r.resource}`
          }
        ) : null }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card.Actions, { className: styles.actions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { size: "md", href: getFolderURL(repo), icon: "folder-open", variant: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.repository-overview.view-folder", children: "View Folder" }) }) })
      ] }) }),
      repo.status?.health && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.cardContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepositoryHealthCard__WEBPACK_IMPORTED_MODULE_14__.RepositoryHealthCard, { repo }) }),
      repo.status?.webhook && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.cardContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card, { noMargin: true, className: styles.card, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.repository-overview.webhook", children: "Webhook" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card.Description, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Grid, { columns: 12, gap: 1, alignItems: "baseline", children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.labelColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.repository-overview.webhook-id", children: "ID:" }) }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.valueColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", children: status?.webhook?.id ?? "N/A" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.labelColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.repository-overview.webhook-events", children: "Events:" }) }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.valueColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", children: status?.webhook?.subscribedEvents?.join(", ") ?? "N/A" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.labelColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.repository-overview.webhook-last-event", children: "Last Event:" }) }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.valueColumn, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Text, { variant: "body", children: (0,_utils_time__WEBPACK_IMPORTED_MODULE_13__.formatTimestamp)(status?.webhook?.lastEvent) }) })
        ] }) }),
        webhookURL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Card.Actions, { className: styles.actions, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { fill: "outline", href: webhookURL, icon: "external-link-alt", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.repository-overview.webhook-url", children: "View Webhook" }) }) })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "div",
        {
          className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
            styles.pullStatusCard,
            repo.status?.webhook ? styles.pullStatusCardLgSpan3 : styles.pullStatusCardLgSpan2
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepositoryPullStatusCard__WEBPACK_IMPORTED_MODULE_15__.RepositoryPullStatusCard, { repo })
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.cardContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Job_RecentJobs__WEBPACK_IMPORTED_MODULE_12__.RecentJobs, { repo }) })
  ] }) });
}
function getFolderURL(repo) {
  if (repo.spec?.sync.target === "folder") {
    return `/dashboards/f/${repo.metadata?.name}`;
  }
  return "/dashboards";
}
const getStyles = (theme) => {
  return {
    cardContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%"
    }),
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }),
    actions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginTop: "auto"
    }),
    labelColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      minWidth: theme.spacing(10),
      gridColumn: "span 3"
    }),
    valueColumn: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridColumn: "span 9"
    }),
    pullStatusCard: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridColumn: "span 2",
      [theme.breakpoints.down("lg")]: {
        gridColumn: "span 2"
      }
    }),
    pullStatusCardLgSpan3: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      [theme.breakpoints.down("xxl")]: {
        gridColumn: "span 3"
      }
    }),
    pullStatusCardLgSpan2: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      [theme.breakpoints.down("xxl")]: {
        gridColumn: "span 2"
      }
    })
  };
};
function getWebhookURL(repo) {
  const { status, spec } = repo;
  if (spec?.type === "github" && status?.webhook?.url && spec.github?.url) {
    return `${spec.github.url}/settings/hooks/${status.webhook?.id}`;
  }
  return void 0;
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/RepositoryPullStatusCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryPullStatusCard: () => (/* binding */ RepositoryPullStatusCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Grid/Grid.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Shared_MessageList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/Shared/MessageList.tsx");
/* harmony import */ var _utils_git__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/utils/git.ts");
/* harmony import */ var _utils_repositoryStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/utils/repositoryStatus.ts");
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/provisioning/utils/time.ts");
/* harmony import */ var _SyncRepository__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/provisioning/Repository/SyncRepository.tsx");










function RepositoryPullStatusCard({ repo }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const status = repo.status;
  const statusColor = (0,_utils_repositoryStatus__WEBPACK_IMPORTED_MODULE_11__.getStatusColor)(status?.sync.state);
  const statusIcon = (0,_utils_repositoryStatus__WEBPACK_IMPORTED_MODULE_11__.getStatusIcon)(status?.sync.state);
  const { url: lastCommitUrl, hasUrl } = (0,_utils_git__WEBPACK_IMPORTED_MODULE_10__.getRepoCommitUrl)(repo.spec, status?.sync.lastRef);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.pull-status", children: "Pull status" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Description, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Grid, { columns: 3, gap: 1, alignItems: "baseline", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.status", children: "Status:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spanTwo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge, { icon: statusIcon, color: statusColor, text: status?.sync.state ?? "N/A" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.job-id", children: "Job ID:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spanTwo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", children: status?.sync.job ?? "N/A" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.last-ref", children: "Last Ref:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spanTwo, children: hasUrl && lastCommitUrl ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TextLink, { href: lastCommitUrl, external: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", children: status?.sync.lastRef ? status.sync.lastRef.substring(0, 7) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.repository-overview.not-available", "N/A") }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", children: status?.sync.lastRef ? status.sync.lastRef.substring(0, 7) : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.repository-overview.not-available", "N/A") }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.finished", children: "Last successful pull:" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spanTwo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { variant: "body", children: (0,_utils_time__WEBPACK_IMPORTED_MODULE_12__.formatTimestamp)(status?.sync.finished) }) }),
      !!status?.sync?.message?.length && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Text, { color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-overview.messages", children: "Messages:" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spanTwo, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Shared_MessageList__WEBPACK_IMPORTED_MODULE_9__.MessageList, { messages: status.sync.message, variant: "body" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Actions, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SyncRepository__WEBPACK_IMPORTED_MODULE_13__.SyncRepository, { repository: repo }) })
  ] });
}
const getStyles = () => {
  return {
    spanTwo: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridColumn: "span 2"
    })
  };
};


/***/ }),

/***/ "./public/app/features/provisioning/Repository/RepositoryResources.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepositoryResources: () => (/* binding */ RepositoryResources)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/Link.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _File_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/provisioning/File/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/provisioning/constants.ts");








function RepositoryResources({ repo }) {
  const name = repo.metadata?.name ?? "";
  const query = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_9__.useGetRepositoryResourcesQuery)({ name });
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const data = (query.data?.items ?? []).filter(
    (Resource) => Resource.path.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const historySupported = (0,_File_utils__WEBPACK_IMPORTED_MODULE_10__.isFileHistorySupported)(repo.spec?.type);
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => [
      {
        id: "title",
        header: "Title",
        sortType: "string",
        cell: ({ row: { original } }) => {
          const { resource, name: name2, title } = original;
          if (resource === "dashboards") {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `/d/${name2}`, children: title });
          }
          if (resource === "folders") {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `/dashboards/f/${name2}`, children: title });
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: title });
        }
      },
      {
        id: "resource",
        header: "Type",
        sortType: "string",
        cell: ({ row: { original } }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { textTransform: "capitalize" }, children: original.resource });
        }
      },
      {
        id: "path",
        header: "Path",
        sortType: "string",
        cell: ({ row: { original } }) => {
          const { resource, name: name2, path } = original;
          if (resource === "dashboards") {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: `/d/${name2}`, children: path });
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: path });
        }
      },
      {
        id: "hash",
        header: "Hash",
        sortType: "string",
        cell: ({ row: { original } }) => {
          const { hash } = original;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { title: hash, children: hash.substring(0, 7) });
        }
      },
      {
        id: "folder",
        header: "Folder",
        sortType: "string",
        cell: ({ row: { original } }) => {
          const { folder } = original;
          if (folder?.length) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Link, { href: `/dashboards/f/${folder}`, children: folder });
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {});
        }
      },
      {
        id: "actions",
        header: "",
        cell: ({ row: { original } }) => {
          const { resource, name: name2, path } = original;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { children: [
            resource === "dashboards" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: `/d/${name2}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-resources.columns.view-dashboard", children: "View" }) }),
            resource === "folders" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: `/dashboards/f/${name2}`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-resources.columns.view-folder", children: "View" }) }),
            historySupported && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton,
              {
                href: `${_constants__WEBPACK_IMPORTED_MODULE_11__.PROVISIONING_URL}/${repo.metadata?.name}/history/${path}?repo_type=${repo.spec?.type}`,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "provisioning.repository-resources.columns.history", children: "History" })
              }
            )
          ] });
        }
      }
    ],
    [repo.metadata?.name, historySupported, repo.spec?.type]
  );
  if (query.isLoading) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { justifyContent: "center", alignItems: "center", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Spinner, {}) });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { grow: 1, direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Stack, { gap: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.FilterInput,
      {
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.repository-resources.placeholder-search", "Search"),
        autoFocus: true,
        value: searchQuery,
        onChange: setSearchQuery
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InteractiveTable,
      {
        columns,
        data,
        pageSize: 25,
        getRowId: (r) => String(r.path)
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/RepositoryStatusPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RepositoryStatusPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabContent.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/hooks/useQueryParams.ts");
/* harmony import */ var app_features_alerting_unified_api_util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/alerting/unified/api/util.ts");
/* harmony import */ var _File_FilesView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/provisioning/File/FilesView.tsx");
/* harmony import */ var _components_InlineSecureValueWarning__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/provisioning/components/InlineSecureValueWarning.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _RepositoryActions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/features/provisioning/Repository/RepositoryActions.tsx");
/* harmony import */ var _RepositoryOverview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/features/provisioning/Repository/RepositoryOverview.tsx");
/* harmony import */ var _RepositoryResources__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/provisioning/Repository/RepositoryResources.tsx");


















var TabSelection = /* @__PURE__ */ ((TabSelection2) => {
  TabSelection2["Overview"] = "overview";
  TabSelection2["Resources"] = "resources";
  TabSelection2["Files"] = "files";
  return TabSelection2;
})(TabSelection || {});
function RepositoryStatusPage() {
  const { name = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const query = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_14__.useListRepositoryQuery)({
    fieldSelector: `metadata.name=${name}`,
    watch: true
  });
  const data = query.data?.items?.[0];
  const location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  const [queryParams] = (0,app_core_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_16__.useQueryParams)();
  const settings = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_14__.useGetFrontendSettingsQuery)();
  const tab = queryParams["tab"] ?? "overview" /* Overview */;
  const notFound = query.isError && (0,app_features_alerting_unified_api_util__WEBPACK_IMPORTED_MODULE_17__.isNotFoundError)(query.error);
  const tabInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => [
      {
        value: "overview" /* Overview */,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.tab-overview", "Overview"),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.tab-overview-title", "Repository overview")
      },
      {
        value: "resources" /* Resources */,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.tab-resources", "Resources"),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.tab-resources-title", "Resources saved in grafana database")
      },
      {
        value: "files" /* Files */,
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.tab-files", "Files"),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.tab-files-title", "The raw file list from the repository")
      }
    ],
    []
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_15__.Page,
    {
      navId: "provisioning",
      pageNav: {
        text: data?.spec?.title ?? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.title", "Repository Status"),
        subTitle: data?.spec?.description
      },
      actions: data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepositoryActions__WEBPACK_IMPORTED_MODULE_21__.RepositoryActions, { repository: data }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_15__.Page.Contents, { isLoading: query.isLoading, children: [
        settings.data?.legacyStorage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert,
          {
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.title-legacy-storage", "Legacy Storage"),
            severity: "error",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "provisioning.repository-status-page.legacy-storage-message", children: "Instance is not yet running unified storage -- requires migration wizard" })
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_InlineSecureValueWarning__WEBPACK_IMPORTED_MODULE_19__.InlineSecureValueWarning, { repo: data }),
        notFound ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.EmptyState,
          {
            message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.not-found-message", "Repository not found"),
            variant: "not-found",
            children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { element: "p", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "provisioning.repository-status-page.repository-config-exists-configuration", children: "Make sure the repository config exists in the configuration file." }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.TextLink, { href: _constants__WEBPACK_IMPORTED_MODULE_20__.PROVISIONING_URL, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "provisioning.repository-status-page.back-to-repositories", children: "Back to repositories" }) })
            ]
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: data ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.TabsBar, { children: tabInfo.map((t2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Tab,
            {
              href: _grafana_data__WEBPACK_IMPORTED_MODULE_4__.urlUtil.renderUrl(location.pathname, { ...queryParams, tab: t2.value }),
              label: t2.label,
              active: tab === t2.value,
              title: t2.title
            },
            t2.value
          )) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TabContent, { children: [
            data?.metadata?.deletionTimestamp && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Alert,
              {
                title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("provisioning.repository-status-page.title-queued-for-deletion", "Queued for deletion"),
                severity: "warning",
                children: [
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Spinner, {}),
                  " ",
                  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "provisioning.repository-status-page.cleaning-up-resources", children: "Cleaning up repository resources" })
                ]
              }
            ),
            tab === "overview" /* Overview */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepositoryOverview__WEBPACK_IMPORTED_MODULE_22__.RepositoryOverview, { repo: data }),
            tab === "resources" /* Resources */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RepositoryResources__WEBPACK_IMPORTED_MODULE_23__.RepositoryResources, { repo: data }),
            tab === "files" /* Files */ && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_File_FilesView__WEBPACK_IMPORTED_MODULE_18__.FilesView, { repo: data })
          ] })
        ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "provisioning.repository-status-page.not-found", children: "not found" }) }) })
      ] })
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/Repository/SyncRepository.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SyncRepository: () => (/* binding */ SyncRepository)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/provisioning/constants.ts");
/* harmony import */ var _useGetActiveJob__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/provisioning/useGetActiveJob.ts");










function SyncRepository({ repository }) {
  const [createJob, jobQuery] = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_7__.useCreateRepositoryJobsMutation)();
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const navigate = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  const name = repository.metadata?.name;
  const activeJob = (0,_useGetActiveJob__WEBPACK_IMPORTED_MODULE_9__.useGetActiveJob)(name);
  const onClick = () => {
    if (!name) {
      return;
    }
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_provisioning_repository_pull_triggered", {
      repositoryName: name,
      repositoryType: repository.spec?.type ?? "unknown",
      target: repository.spec?.sync.target ?? "unknown"
    });
    createJob({
      name,
      jobSpec: {
        pull: {
          incremental: false
          // will queue a full resync job
        }
      }
    });
    setIsModalOpen(false);
  };
  const isHealthy = Boolean(repository.status?.health.healthy);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
      {
        icon: "cloud-download",
        variant: "secondary",
        tooltip: isHealthy ? void 0 : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.tooltip-unhealthy-repository", "Unable to pull an unhealthy repository"),
        disabled: jobQuery.isLoading || activeJob?.status?.state === "working" || !name || !isHealthy,
        onClick,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "provisioning.sync-repository.pull", children: "Pull" })
      }
    ),
    !repository.spec?.sync.enabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmModal,
      {
        isOpen: isModalOpen,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.title-pull-not-enabled", "Pull is not enabled"),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.body-edit-configuration", "Edit the configuration"),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("provisioning.sync-repository.button-edit", "Edit"),
        onConfirm: () => navigate(`${_constants__WEBPACK_IMPORTED_MODULE_8__.PROVISIONING_URL}/${name}/edit`),
        onDismiss: () => setIsModalOpen(false)
      }
    )
  ] });
}


/***/ }),

/***/ "./public/app/features/provisioning/Shared/StatusBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatusBadge: () => (/* binding */ StatusBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/provisioning/constants.ts");







function getBadgeConfig(repo) {
  if (repo.metadata?.deletionTimestamp) {
    return {
      color: "red",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.deleting", "Deleting"),
      icon: "spinner"
    };
  }
  if (!repo.spec?.sync?.enabled) {
    return {
      color: "orange",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.automatic-pulling-disabled", "Automatic pulling disabled"),
      icon: "info-circle"
    };
  }
  if (!repo.status?.sync?.state?.length) {
    return {
      color: "darkgrey",
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.pending", "Pending"),
      icon: "spinner",
      tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.waiting-for-health-check", "Waiting for health check to run")
    };
  }
  switch (repo.status?.sync?.state) {
    case "success":
      return {
        icon: "check",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.up-to-date", "Up-to-date"),
        color: "green"
      };
    case "warning":
      return {
        color: "orange",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.warning", "Warning"),
        icon: "exclamation-triangle"
      };
    case "working":
    case "pending":
      return {
        color: "darkgrey",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.pulling", "Pulling"),
        icon: "spinner"
      };
    case "error":
      return {
        color: "red",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.error", "Error"),
        icon: "exclamation-triangle"
      };
    default:
      return {
        color: "purple",
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("provisioning.status-badge.unknown", "Unknown"),
        icon: "exclamation-triangle"
      };
  }
}
function StatusBadge({ repo, displayOnly = false }) {
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (displayOnly || !repo?.metadata?.name) {
      return;
    }
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push(`${_constants__WEBPACK_IMPORTED_MODULE_5__.PROVISIONING_URL}/${repo.metadata.name}/?tab=overview`);
  }, [repo?.metadata?.name, displayOnly]);
  if (!repo) {
    return null;
  }
  const { color, text, icon, tooltip } = getBadgeConfig(repo);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Badge,
    {
      color,
      icon,
      text,
      style: { cursor: displayOnly ? "default" : "pointer" },
      tooltip,
      onClick: handleClick
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/components/InlineSecureValueWarning.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSecureValueWarning: () => (/* binding */ InlineSecureValueWarning)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");




function InlineSecureValueWarning({ repo, items }) {
  const isRepoValid = (r) => r?.spec?.type === "local" || !!r?.secure?.token?.name;
  if (isRepoValid(repo)) {
    return null;
  }
  if (items?.every(isRepoValid)) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Alert,
    {
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)(
        "provisioning.inline-secure-values-warning",
        "You need to save your access tokens again due to a system update"
      ),
      severity: "error"
    }
  );
}


/***/ }),

/***/ "./public/app/features/provisioning/hooks/useRepositoryAllJobs.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useRepositoryAllJobs: () => (/* binding */ useRepositoryAllJobs)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");



function labelSelectorActive(repositoryName) {
  return repositoryName ? `provisioning.grafana.app/repository=${repositoryName}` : void 0;
}
function useRepositoryAllJobs({
  repositoryName
}) {
  const activeQuery = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useListJobQuery)({
    labelSelector: labelSelectorActive(repositoryName),
    watch: true
  });
  const historicQuery = (0,app_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useGetRepositoryJobsQuery)({ name: repositoryName });
  (0,react_use__WEBPACK_IMPORTED_MODULE_0__["default"])(
    () => {
      historicQuery.refetch();
    },
    250,
    [activeQuery.data]
  );
  const concatedItems = [...activeQuery.data?.items ?? [], ...historicQuery.data?.items ?? []];
  const collator = new Intl.Collator(void 0, { numeric: true });
  const sortedItems = concatedItems.slice().sort((a, b) => {
    const aTime = a.metadata?.creationTimestamp ?? "";
    const bTime = b.metadata?.creationTimestamp ?? "";
    return collator.compare(bTime, aTime);
  });
  return [sortedItems, activeQuery, historicQuery];
}


/***/ }),

/***/ "./public/app/features/provisioning/useGetActiveJob.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useGetActiveJob: () => (/* binding */ useGetActiveJob)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs");
/* harmony import */ var _api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/clients/provisioning/v0alpha1/index.ts");



function useGetActiveJob(name) {
  const activeQuery = (0,_api_clients_provisioning_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useListJobQuery)(
    name ? {
      fieldSelector: `metadata.name=${name}`,
      watch: true
    } : _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.skipToken
  );
  return activeQuery?.data?.items?.[0];
}


/***/ }),

/***/ "./public/app/features/provisioning/utils/repositoryStatus.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStatusColor: () => (/* binding */ getStatusColor),
/* harmony export */   getStatusIcon: () => (/* binding */ getStatusIcon)
/* harmony export */ });

const getStatusColor = (state) => {
  switch (state) {
    case "success":
      return "green";
    case "working":
      return "blue";
    case "warning":
      return "orange";
    case "pending":
      return "darkgrey";
    case "error":
      return "red";
    default:
      return "darkgrey";
  }
};
const getStatusIcon = (state) => {
  switch (state) {
    case "success":
      return "check";
    case "working":
    case "warning":
      return "exclamation-triangle";
    case "pending":
      return "spinner";
    case "error":
      return "exclamation-triangle";
    default:
      return "exclamation-triangle";
  }
};


/***/ }),

/***/ "./public/app/features/provisioning/utils/time.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatTimestamp: () => (/* binding */ formatTimestamp)
/* harmony export */ });

function formatTimestamp(timestamp) {
  if (!timestamp) {
    return "N/A";
  }
  return new Date(timestamp).toLocaleString();
}


/***/ })

}]);
//# sourceMappingURL=RepositoryStatusPage.453f96f415f8fb4d1ad0.js.map