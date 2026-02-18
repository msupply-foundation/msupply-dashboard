"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["sql-query-editor"],{

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

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorHeader.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorHeader: () => (/* binding */ EditorHeader)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const EditorHeader = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: styles.root }, children);
};
const getStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: theme.spacing(3),
    minHeight: theme.spacing(4)
  })
});


//# sourceMappingURL=EditorHeader.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorList.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorList: () => (/* binding */ EditorList)
/* harmony export */ });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _EditorStack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");




const EditorList = react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function EditorList2({ items, renderItem, onChange }, ref) {
  const onAddItem = () => {
    const newItems = [...items, {}];
    onChange(newItems);
  };
  const onChangeItem = (itemIndex, newItem) => {
    const newItems = [...items];
    newItems[itemIndex] = newItem;
    onChange(newItems);
  };
  const onDeleteItem = (itemIndex) => {
    const newItems = [...items];
    newItems.splice(itemIndex, 1);
    onChange(newItems);
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_EditorStack_js__WEBPACK_IMPORTED_MODULE_2__.EditorStack, null, items.map((item, index) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { key: index }, renderItem(
    item,
    (newItem) => onChangeItem(index, newItem),
    () => onDeleteItem(index)
  ))), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__.Button, { ref, onClick: onAddItem, variant: "secondary", size: "md", icon: "plus", "aria-label": "Add", type: "button" }));
});


//# sourceMappingURL=EditorList.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorRow: () => (/* binding */ EditorRow)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _EditorStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");






const EditorRow = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: styles.root }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_EditorStack_js__WEBPACK_IMPORTED_MODULE_3__.EditorStack, { gap: 2 }, children));
};
const getStyles = (theme) => {
  return {
    root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
      padding: theme.spacing(1),
      backgroundColor: theme.colors.background.secondary,
      borderRadius: theme.shape.radius.default
    })
  };
};


//# sourceMappingURL=EditorRow.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRows.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorRows: () => (/* binding */ EditorRows)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _EditorStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js");



const EditorRows = ({ children }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditorStack_js__WEBPACK_IMPORTED_MODULE_1__.EditorStack, { gap: 0.5, direction: "column" }, children);
};


//# sourceMappingURL=EditorRows.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorStack.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorStack: () => (/* binding */ EditorStack)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




const EditorStack = ({ children, wrap: wrapItems = true, ...props }) => {
  var _a, _b;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.Stack, { wrap: wrapItems ? "wrap" : undefined, direction: (_a = props.direction) != null ? _a : "row", gap: (_b = props.gap) != null ? _b : 2, ...props }, children);
};


//# sourceMappingURL=EditorStack.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/FlexItem.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexItem: () => (/* binding */ FlexItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");


const FlexItem = ({ grow, shrink }) => {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { display: "block", flexGrow: grow, flexShrink: shrink } });
};


//# sourceMappingURL=FlexItem.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InlineSelect.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSelect: () => (/* binding */ InlineSelect)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/SelectContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





function InlineSelect({ label: labelProp, ...props }) {
  const [id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(() => Math.random().toString(16).slice(2));
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getSelectStyles);
  const components = {
    SelectContainer,
    ValueContainer,
    SingleValue: ValueContainer
  };
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: styles.root }, labelProp && /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", { className: styles.label, htmlFor: id }, labelProp, ":", "\xA0"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select, { openMenuOnFocus: true, inputId: id, ...props, components }));
}
const SelectContainer = (props) => {
  const { children } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getSelectStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.SelectContainer, { ...props, className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(props.className, styles.container) }, children);
};
const ValueContainer = (props) => {
  const { className, children } = props;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getSelectStyles);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(className, styles.valueContainer) }, children);
};
const getSelectStyles = (theme) => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    fontSize: 12,
    alignItems: "center"
  }),
  label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.secondary,
    whiteSpace: "nowrap"
  }),
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    background: "none",
    borderColor: "transparent"
  }),
  valueContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    alignItems: "center",
    flex: "initial",
    color: theme.colors.text.secondary,
    fontSize: 12
  })
});


//# sourceMappingURL=InlineSelect.js.map


/***/ }),

/***/ "./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js":
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputGroup: () => (/* binding */ InputGroup)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");




const InputGroup = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_1__.useStyles2)(getStyles);
  const modifiedChildren = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, (child) => {
    if ((0,react__WEBPACK_IMPORTED_MODULE_2__.isValidElement)(child) && child.props.invalid) {
      return (0,react__WEBPACK_IMPORTED_MODULE_2__.cloneElement)(child, { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.cx)(child.props.className, styles.invalidChild) });
    }
    return child;
  });
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", { className: styles.root }, modifiedChildren);
};
const borderPriority = [
  "",
  // lowest priority
  "base",
  "hovered",
  "invalid",
  "focused"
  // highest priority
];
const getStyles = () => ({
  root: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    // Style the direct children of the component
    "> *": {
      "&:not(:first-child)": {
        // Negative margin hides the double-border on adjacent selects
        marginLeft: -1
      },
      "&:first-child": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      "&:last-child": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      },
      //
      position: "relative",
      zIndex: borderPriority.indexOf("base"),
      // Adjacent borders are overlapping, so raise children up when hovering etc
      // so all that child's borders are visible.
      "&:hover": {
        zIndex: borderPriority.indexOf("hovered")
      },
      "&:focus-within": {
        zIndex: borderPriority.indexOf("focused")
      }
    }
  }),
  invalidChild: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    zIndex: borderPriority.indexOf("invalid")
  })
});


//# sourceMappingURL=InputGroup.js.map


/***/ }),

/***/ "./packages/grafana-sql/src/components/ConfirmModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmModal: () => (/* binding */ ConfirmModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






function ConfirmModal({ isOpen, onCancel, onDiscard, onCopy }) {
  const buttonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isOpen) {
      buttonRef.current?.focus();
    }
  }, [isOpen]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      title: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.modalHeaderTitle, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "exclamation-triangle", size: "lg" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.titleText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "grafana-sql.components.confirm-modal.warning", children: "Warning" }) })
      ] }),
      ariaLabel: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-sql.components.confirm-modal.warning", "Warning"),
      onDismiss: onCancel,
      isOpen,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "grafana-sql.components.confirm-modal.builder-mode", children: "Builder mode does not display changes made in code. The query builder will display the last changes you made in builder mode." }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "grafana-sql.components.confirm-modal.clipboard", children: "Do you want to copy your code to the clipboard?" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { type: "button", variant: "secondary", onClick: onCancel, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "grafana-sql.components.confirm-modal.cancel", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "destructive", type: "button", onClick: onDiscard, ref: buttonRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "grafana-sql.components.confirm-modal.discard-code-and-switch", children: "Discard code and switch" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "primary", onClick: onCopy, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "grafana-sql.components.confirm-modal.copy-code-and-switch", children: "Copy code and switch" }) })
        ] })
      ]
    }
  );
}
const getStyles = (theme) => ({
  titleText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    paddingLeft: theme.spacing(2)
  }),
  modalHeaderTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.size.lg,
    float: "left",
    paddingTop: theme.spacing(1),
    margin: theme.spacing(0, 2)
  })
});


/***/ }),

/***/ "./packages/grafana-sql/src/components/DatasetSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatasetSelector: () => (/* binding */ DatasetSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-sql/src/types.ts");






const DatasetSelector = ({
  dataset,
  db,
  dialect,
  onChange,
  inputId,
  preconfiguredDataset
}) => {
  const hasPreconfigCondition = !!preconfiguredDataset || dialect === "postgres";
  const state = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    if (hasPreconfigCondition) {
      onChange((0,_types__WEBPACK_IMPORTED_MODULE_4__.toOption)(preconfiguredDataset));
      return [(0,_types__WEBPACK_IMPORTED_MODULE_4__.toOption)(preconfiguredDataset)];
    }
    if (dataset) {
      onChange((0,_types__WEBPACK_IMPORTED_MODULE_4__.toOption)(dataset));
    }
    const datasets = await db.datasets();
    return datasets.map(_types__WEBPACK_IMPORTED_MODULE_4__.toOption);
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select,
    {
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-sql.components.dataset-selector.aria-label-dataset-selector", "Dataset selector"),
      inputId,
      value: dataset,
      options: state.value,
      onChange,
      disabled: state.loading,
      isLoading: state.loading,
      menuShouldPortal: true
    }
  );
};


/***/ }),

/***/ "./packages/grafana-sql/src/components/QueryEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SqlQueryEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/types.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-sql/src/defaults.ts");
/* harmony import */ var _utils_sql_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-sql/src/utils/sql.utils.ts");
/* harmony import */ var _QueryHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-sql/src/components/QueryHeader.tsx");
/* harmony import */ var _query_editor_raw_RawEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-sql/src/components/query-editor-raw/RawEditor.tsx");
/* harmony import */ var _visual_query_builder_VisualEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/VisualEditor.tsx");











function SqlQueryEditor({
  datasource,
  query,
  onChange,
  onRunQuery,
  range,
  queryHeaderProps
}) {
  const [isQueryRunnable, setIsQueryRunnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const db = datasource.getDB();
  const { preconfiguredDatabase } = datasource;
  const dialect = queryHeaderProps?.dialect ?? "other";
  const { loading, error } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    return () => {
      if (datasource.getDB(datasource.id).init !== void 0) {
        datasource.getDB(datasource.id).init();
      }
    };
  }, [datasource]);
  const queryWithDefaults = (0,_defaults__WEBPACK_IMPORTED_MODULE_5__.applyQueryDefaults)(query);
  const [queryRowFilter, setQueryRowFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    filter: !!queryWithDefaults.sql?.whereString,
    group: !!queryWithDefaults.sql?.groupBy?.[0]?.property.name,
    order: !!queryWithDefaults.sql?.orderBy?.property.name,
    preview: true
  });
  const [queryToValidate, setQueryToValidate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(queryWithDefaults);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    return () => {
      if (datasource.getDB(datasource.id).dispose !== void 0) {
        datasource.getDB(datasource.id).dispose();
      }
    };
  }, [datasource]);
  const processQuery = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (q) => {
      if (isQueryValid(q) && onRunQuery) {
        onRunQuery();
      }
    },
    [onRunQuery]
  );
  const onQueryChange = (q, process = true) => {
    setQueryToValidate(q);
    onChange(q);
    if ((0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_6__.haveColumns)(q.sql?.columns) && q.sql?.columns.some((c) => c.name) && !queryRowFilter.group) {
      setQueryRowFilter({ ...queryRowFilter, group: true });
    }
    if (process) {
      processQuery(q);
    }
  };
  const onQueryHeaderChange = (q) => {
    setQueryToValidate(q);
    onChange(q);
  };
  if (loading || error) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _QueryHeader__WEBPACK_IMPORTED_MODULE_7__.QueryHeader,
      {
        db,
        preconfiguredDataset: preconfiguredDatabase,
        onChange: onQueryHeaderChange,
        onRunQuery,
        onQueryRowChange: setQueryRowFilter,
        queryRowFilter,
        query: queryWithDefaults,
        isQueryRunnable,
        dialect
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Space, { v: 0.5 }),
    queryWithDefaults.editorMode !== _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorMode.Code && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _visual_query_builder_VisualEditor__WEBPACK_IMPORTED_MODULE_9__.VisualEditor,
      {
        db,
        query: queryWithDefaults,
        onChange: (q) => onQueryChange(q, false),
        queryRowFilter,
        onValidate: setIsQueryRunnable,
        range
      }
    ),
    queryWithDefaults.editorMode === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorMode.Code && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _query_editor_raw_RawEditor__WEBPACK_IMPORTED_MODULE_8__.RawEditor,
      {
        db,
        query: queryWithDefaults,
        queryToValidate,
        onChange: onQueryChange,
        onRunQuery,
        onValidate: setIsQueryRunnable,
        range
      }
    )
  ] });
}
const isQueryValid = (q) => {
  return Boolean(q.rawSql);
};


/***/ }),

/***/ "./packages/grafana-sql/src/components/QueryHeader.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryHeader: () => (/* binding */ QueryHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useCopyToClipboard.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorHeader.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/FlexItem.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InlineSelect.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/types.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Switch/Switch.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-sql/src/types.ts");
/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-sql/src/components/ConfirmModal.tsx");
/* harmony import */ var _DatasetSelector__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./packages/grafana-sql/src/components/DatasetSelector.tsx");
/* harmony import */ var _TableSelector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./packages/grafana-sql/src/components/TableSelector.tsx");













function QueryHeader({
  db,
  dialect,
  isQueryRunnable,
  onChange,
  onQueryRowChange,
  onRunQuery,
  preconfiguredDataset,
  query,
  queryRowFilter
}) {
  const { editorMode } = query;
  const [_, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const [showConfirm, setShowConfirm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const toRawSql = db.toRawSql;
  const htmlId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  const editorModes = [
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.editor-modes.label-builder", "Builder"),
      value: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder
    },
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.editor-modes.label-code", "Code"), value: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Code }
  ];
  const onEditorModeChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (newEditorMode) => {
      if (newEditorMode === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Code) {
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_editor_mode_changed", {
          datasource: query.datasource?.type,
          selectedEditorMode: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Code
        });
      }
      if (editorMode === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Code) {
        setShowConfirm(true);
        return;
      }
      onChange({ ...query, editorMode: newEditorMode });
    },
    [editorMode, onChange, query]
  );
  const onFormatChange = (e) => {
    const next = { ...query, format: e.value !== void 0 ? e.value : _types__WEBPACK_IMPORTED_MODULE_17__.QueryFormat.Table };
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_format_changed", {
      datasource: query.datasource?.type,
      selectedFormat: next.format
    });
    onChange(next);
  };
  const onDatasetChange = (e) => {
    if (e.value === query.dataset) {
      return;
    }
    const next = {
      ...query,
      dataset: e.value,
      table: void 0,
      sql: void 0,
      rawSql: ""
    };
    onChange(next);
  };
  const onTableChange = (e) => {
    if (e.value === query.table) {
      return;
    }
    const next = {
      ...query,
      table: e.value,
      sql: void 0,
      rawSql: ""
    };
    onChange(next);
  };
  const datasetDropdownIsAvailable = () => {
    if (dialect === "influx") {
      return false;
    }
    return true;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorHeader, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_9__.InlineSelect,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.label-format", "Format"),
          value: query.format,
          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.placeholder-select-format", "Select format"),
          menuShouldPortal: true,
          onChange: onFormatChange,
          options: _types__WEBPACK_IMPORTED_MODULE_17__.QUERY_FORMAT_OPTIONS
        }
      ),
      editorMode === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineSwitch,
          {
            id: `sql-filter-${htmlId}`,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.label-filter", "Filter"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.headerFilterSwitch,
            transparent: true,
            showLabel: true,
            value: queryRowFilter.filter,
            onChange: (ev) => {
              if (!(ev.target instanceof HTMLInputElement)) {
                return;
              }
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_filter_toggled", {
                datasource: query.datasource?.type,
                displayed: ev.target.checked
              });
              onQueryRowChange({ ...queryRowFilter, filter: ev.target.checked });
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineSwitch,
          {
            id: `sql-group-${htmlId}`,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.label-group", "Group"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.headerGroupSwitch,
            transparent: true,
            showLabel: true,
            value: queryRowFilter.group,
            onChange: (ev) => {
              if (!(ev.target instanceof HTMLInputElement)) {
                return;
              }
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_group_toggled", {
                datasource: query.datasource?.type,
                displayed: ev.target.checked
              });
              onQueryRowChange({ ...queryRowFilter, group: ev.target.checked });
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineSwitch,
          {
            id: `sql-order-${htmlId}`,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.label-order", "Order"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.headerOrderSwitch,
            transparent: true,
            showLabel: true,
            value: queryRowFilter.order,
            onChange: (ev) => {
              if (!(ev.target instanceof HTMLInputElement)) {
                return;
              }
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_order_toggled", {
                datasource: query.datasource?.type,
                displayed: ev.target.checked
              });
              onQueryRowChange({ ...queryRowFilter, order: ev.target.checked });
            }
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_16__.InlineSwitch,
          {
            id: `sql-preview-${htmlId}`,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.label-preview", "Preview"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.headerPreviewSwitch,
            transparent: true,
            showLabel: true,
            value: queryRowFilter.preview,
            onChange: (ev) => {
              if (!(ev.target instanceof HTMLInputElement)) {
                return;
              }
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_preview_toggled", {
                datasource: query.datasource?.type,
                displayed: ev.target.checked
              });
              onQueryRowChange({ ...queryRowFilter, preview: ev.target.checked });
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_8__.FlexItem, { grow: 1 }),
      isQueryRunnable ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, { icon: "play", variant: "primary", size: "sm", onClick: () => onRunQuery(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "grafana-sql.components.query-header.run-query", children: "Run query" }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Tooltip,
        {
          theme: "error",
          content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "grafana-sql.components.query-header.content-invalid-query", children: [
            "Your query is invalid. Check below for details. ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
            "However, you can still run this query."
          ] }),
          placement: "top",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Button, { icon: "exclamation-triangle", variant: "secondary", size: "sm", onClick: () => onRunQuery(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "grafana-sql.components.query-header.run-query", children: "Run query" }) })
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.RadioButtonGroup, { options: editorModes, size: "sm", value: editorMode, onChange: onEditorModeChange }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ConfirmModal__WEBPACK_IMPORTED_MODULE_18__.ConfirmModal,
        {
          isOpen: showConfirm,
          onCopy: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_editor_mode_changed", {
              datasource: query.datasource?.type,
              selectedEditorMode: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder,
              type: "copy"
            });
            setShowConfirm(false);
            copyToClipboard(query.rawSql);
            onChange({
              ...query,
              rawSql: toRawSql(query),
              editorMode: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder
            });
          },
          onDiscard: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_editor_mode_changed", {
              datasource: query.datasource?.type,
              selectedEditorMode: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder,
              type: "discard"
            });
            setShowConfirm(false);
            onChange({
              ...query,
              rawSql: toRawSql(query),
              editorMode: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder
            });
          },
          onCancel: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.reportInteraction)("grafana_sql_editor_mode_changed", {
              datasource: query.datasource?.type,
              selectedEditorMode: _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder,
              type: "cancel"
            });
            setShowConfirm(false);
          }
        }
      )
    ] }),
    editorMode === _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_10__.EditorMode.Builder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Space, { v: 0.5 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__.EditorRow, { children: [
        datasetDropdownIsAvailable() && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.label-dataset", "Dataset"), width: 25, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _DatasetSelector__WEBPACK_IMPORTED_MODULE_19__.DatasetSelector,
          {
            db,
            inputId: `sql-dataset-${htmlId}`,
            dataset: query.dataset,
            dialect,
            preconfiguredDataset,
            onChange: onDatasetChange
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.query-header.label-table", "Table"), width: 25, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _TableSelector__WEBPACK_IMPORTED_MODULE_20__.TableSelector,
          {
            db,
            inputId: `sql-tableselect-${htmlId}`,
            dataset: query.dataset || preconfiguredDataset,
            table: query.table,
            onChange: onTableChange
          }
        ) })
      ] })
    ] })
  ] });
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/TableSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableSelector: () => (/* binding */ TableSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");







const TableSelector = ({ db, dataset, table, className, onChange, inputId }) => {
  const state = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    if (!dataset) {
      return [];
    }
    const tables = await db.tables(dataset);
    return tables.map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption);
  }, [dataset]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
    {
      className,
      disabled: state.loading,
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.table-selector.aria-label-table-selector", "Table selector"),
      inputId,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.headerTableSelector,
      value: table,
      options: state.value,
      onChange,
      isLoading: state.loading,
      menuShouldPortal: true,
      placeholder: state.loading ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.table-selector.placeholder-loading", "Loading tables") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.table-selector.placeholder-select-table", "Select table"),
      allowCustomValue: true
    }
  );
};


/***/ }),

/***/ "./packages/grafana-sql/src/components/query-editor-raw/QueryEditorRaw.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryEditorRaw: () => (/* binding */ QueryEditorRaw)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/SQLEditor/components/SQLEditor.js");




function QueryEditorRaw({ children, onChange, query, width, height, editorLanguageDefinition }) {
  const queryRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(query);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    queryRef.current = query;
  }, [query]);
  const onRawQueryChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (rawSql, processQuery) => {
      const newQuery = {
        ...queryRef.current,
        rawQuery: true,
        rawSql
      };
      onChange(newQuery, processQuery);
    },
    [onChange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_2__.SQLEditor,
    {
      width,
      height,
      query: query.rawSql,
      onChange: onRawQueryChange,
      language: editorLanguageDefinition,
      children
    }
  );
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/query-editor-raw/QueryToolbox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryToolbox: () => (/* binding */ QueryToolbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _QueryValidator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-sql/src/components/query-editor-raw/QueryValidator.tsx");








function QueryToolbox({ showTools, onFormatCode, onExpand, isExpanded, ...validatorProps }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useTheme2)();
  const [validationResult, setValidationResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const styles = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return {
      container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        border: `1px solid ${theme.colors.border.medium}`,
        borderTop: "none",
        padding: theme.spacing(0.5, 0.5, 0.5, 0.5),
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between",
        fontSize: theme.typography.bodySmall.fontSize
      }),
      error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.error.text,
        fontSize: theme.typography.bodySmall.fontSize,
        fontFamily: theme.typography.fontFamilyMonospace
      }),
      valid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.success.text
      }),
      info: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.text.secondary
      }),
      hint: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.text.disabled,
        whiteSpace: "nowrap",
        cursor: "help"
      })
    };
  }, [theme]);
  let style = {};
  if (!showTools && validationResult === void 0) {
    style = { height: 0, padding: 0, visibility: "hidden" };
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, style, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: validatorProps.onValidate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _QueryValidator__WEBPACK_IMPORTED_MODULE_10__.QueryValidator,
      {
        ...validatorProps,
        onValidate: (result) => {
          setValidationResult(result);
          validatorProps.onValidate(result);
        }
      }
    ) }),
    showTools && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 1, children: [
      onFormatCode && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.IconButton,
        {
          onClick: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_sql_query_formatted", {
              datasource: validatorProps.query.datasource?.type
            });
            onFormatCode();
          },
          name: "brackets-curly",
          size: "xs",
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-sql.components.query-toolbox.tooltip-format-query", "Format query")
        }
      ),
      onExpand && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.IconButton,
        {
          onClick: () => {
            (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_sql_editor_expand", {
              datasource: validatorProps.query.datasource?.type,
              expanded: !isExpanded
            });
            onExpand(!isExpanded);
          },
          name: isExpanded ? "angle-up" : "angle-down",
          size: "xs",
          tooltip: isExpanded ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-sql.components.query-toolbox.tooltip-collapse", "Collapse editor") : (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-sql.components.query-toolbox.tooltip-expand", "Expand editor")
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
        {
          content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "grafana-sql.components.query-toolbox.content-hit-ctrlcmdreturn-to-run-query",
            "Hit CTRL/CMD+Return to run query"
          ),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: styles.hint, name: "keyboard" })
        }
      )
    ] }) })
  ] });
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/query-editor-raw/QueryValidator.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryValidator: () => (/* binding */ QueryValidator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useDebounce.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/valueFormats/valueFormats.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");








function QueryValidator({ db, query, onValidate, range }) {
  const [validationResult, setValidationResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useTheme2)();
  const valueFormatter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.getValueFormat)("bytes"), []);
  const styles = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return {
      error: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.error.text,
        fontSize: theme.typography.bodySmall.fontSize,
        fontFamily: theme.typography.fontFamilyMonospace
      }),
      valid: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.success.text
      }),
      info: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        color: theme.colors.text.secondary
      })
    };
  }, [theme]);
  const [state, validateQuery] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])(
    async (q) => {
      if (q.rawSql?.trim() === "") {
        return null;
      }
      return await db.validateQuery(q, range);
    },
    [db]
  );
  const [,] = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(
    async () => {
      const result = await validateQuery(query);
      if (result) {
        setValidationResult(result);
      }
      return null;
    },
    1e3,
    [query, validateQuery]
  );
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (validationResult?.isError) {
      onValidate(false);
    }
    if (validationResult?.isValid) {
      onValidate(true);
    }
  }, [validationResult, onValidate]);
  if (!state.value && !state.loading) {
    return null;
  }
  const error = state.value?.error ? processErrorMessage(state.value.error) : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    state.loading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.info, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Spinner, { inline: true, size: "xs" }),
      " ",
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "grafana-sql.components.query-validator.validating-query", children: "Validating query..." })
    ] }),
    !state.loading && state.value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: state.value.isValid && state.value.statistics && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.valid, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans,
        {
          i18nKey: "grafana-sql.components.query-validator.query-will-process",
          values: { bytes: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_5__.formattedValueToString)(valueFormatter(state.value.statistics.TotalBytesProcessed)) },
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Icon, { name: "check" }),
            " This query will process ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "{{bytes}}" }),
            " when run."
          ]
        }
      ) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: state.value.isError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.error, children: error }) })
    ] })
  ] });
}
function processErrorMessage(error) {
  const splat = error.split(":");
  if (splat.length > 2) {
    return splat.slice(2).join(":");
  }
  return error;
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/query-editor-raw/RawEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawEditor: () => (/* binding */ RawEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/esm/useMeasure.js");
/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _QueryEditorRaw__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-sql/src/components/query-editor-raw/QueryEditorRaw.tsx");
/* harmony import */ var _QueryToolbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-sql/src/components/query-editor-raw/QueryToolbox.tsx");











function RawEditor({ db, query, onChange, onRunQuery, onValidate, queryToValidate, range }) {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [toolboxRef, toolboxMeasure] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [editorRef, editorMeasure] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const editorLanguageDefinition = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => db.getEditorLanguageDefinition(), [db]);
  const renderQueryEditor = (width, height) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _QueryEditorRaw__WEBPACK_IMPORTED_MODULE_9__.QueryEditorRaw,
      {
        editorLanguageDefinition,
        query,
        width,
        height: height ? height - toolboxMeasure.height : void 0,
        onChange,
        children: ({ formatQuery }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: toolboxRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _QueryToolbox__WEBPACK_IMPORTED_MODULE_10__.QueryToolbox,
            {
              db,
              query: queryToValidate,
              onValidate,
              onFormatCode: formatQuery,
              showTools: true,
              range,
              onExpand: setIsExpanded,
              isExpanded
            }
          ) });
        }
      }
    );
  };
  const renderEditor = (standalone = false) => {
    return standalone ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_4__["default"], { children: ({ width, height }) => {
      return renderQueryEditor(width, height);
    } }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: editorRef, children: renderQueryEditor() });
  };
  const renderPlaceholder = () => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "div",
      {
        style: {
          width: editorMeasure.width,
          height: editorMeasure.height,
          background: theme.colors.background.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "grafana-sql.components.raw-editor.render-placeholder.editing-in-expanded-code-editor", children: "Editing in expanded code editor" })
      }
    );
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    isExpanded ? renderPlaceholder() : renderEditor(),
    isExpanded && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Modal,
      {
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("grafana-sql.components.raw-editor.title-query-num", "Query {{queryNum}}", {
          queryNum: query.refId
        }),
        closeOnBackdropClick: false,
        closeOnEscape: false,
        className: styles.modal,
        contentClassName: styles.modalContent,
        isOpen: isExpanded,
        onDismiss: () => {
          (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.reportInteraction)("grafana_sql_editor_expand", {
            datasource: query.datasource?.type,
            expanded: false
          });
          setIsExpanded(false);
        },
        children: renderEditor(true)
      }
    )
  ] });
}
function getStyles(theme) {
  return {
    modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "95vw",
      height: "95vh"
    }),
    modalContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      height: "100%",
      paddingTop: 0
    })
  };
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/AwesomeQueryBuilder.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyInitTree: () => (/* binding */ emptyInitTree),
/* harmony export */   raqbConfig: () => (/* binding */ raqbConfig),
/* harmony export */   settings: () => (/* binding */ settings),
/* harmony export */   widgets: () => (/* binding */ widgets)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@react-awesome-query-builder/ui/esm/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/DateTimePicker/DateTimePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");








const buttonLabels = {
  add: "Add",
  remove: "Remove"
};
const emptyInitTree = {
  id: _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.Utils.uuid(),
  type: "group"
};
const TIME_FILTER = "timeFilter";
const macros = [TIME_FILTER];
const widgets = {
  ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets,
  text: {
    ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets.text,
    factory: function TextInput(props) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
        {
          value: props?.value || "",
          placeholder: props?.placeholder,
          onChange: (e) => props?.setValue(e.currentTarget.value)
        }
      );
    }
  },
  number: {
    ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets.number,
    factory: function NumberInput(props) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
        {
          value: props?.value,
          placeholder: props?.placeholder,
          type: "number",
          onChange: (e) => props?.setValue(Number.parseInt(e.currentTarget.value, 10))
        }
      );
    }
  },
  datetime: {
    ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets.datetime,
    factory: function DateTimeInput(props) {
      if (props?.operator === "macros" /* MACROS */) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
          {
            id: props.id,
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.widgets.aria-label-macros-value-selector", "Macros value selector"),
            menuShouldPortal: true,
            options: macros.map(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption),
            value: props?.value,
            onChange: (val) => props.setValue(val.value)
          }
        );
      }
      const dateValue = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTime)(props?.value).isValid() ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.dateTime)(props?.value).utc() : void 0;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.DateTimePicker,
        {
          onChange: (e) => {
            props?.setValue(e?.format(_react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets.datetime.valueFormat));
          },
          date: dateValue
        }
      );
    },
    // Function for formatting widget’s value in SQL WHERE query.
    sqlFormatValue: (val, field, widget, operator, operatorDefinition, rightFieldDef) => {
      if (operator === "macros" /* MACROS */) {
        if (macros.includes(val)) {
          return val;
        }
        return void 0;
      }
      if (typeof _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets.datetime.sqlFormatValue === "string" || typeof _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets.datetime.sqlFormatValue === "object") {
        return void 0;
      }
      const func = _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.widgets.datetime.sqlFormatValue;
      return func?.call(_react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.ctx, val, field, widget, operator, operatorDefinition, rightFieldDef) || "";
    }
  }
};
const settings = {
  ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.settings,
  canRegroup: false,
  maxNesting: 1,
  canReorder: false,
  showNot: false,
  addRuleLabel: buttonLabels.add,
  deleteLabel: buttonLabels.remove,
  // This is the component that renders conjunctions (logical operators)
  renderConjs: function Conjunctions(conjProps) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
      {
        id: conjProps?.id,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.settings.aria-label-conjunction", "Conjunction"),
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.SQLQueryEditor.filterConjunction,
        menuShouldPortal: true,
        options: conjProps?.conjunctionOptions ? Object.keys(conjProps?.conjunctionOptions).map(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption) : void 0,
        value: conjProps?.selectedConjunction,
        onChange: (val) => conjProps?.setConjunction(val.value)
      }
    );
  },
  // This is the component that renders fields
  renderField: function Field2(fieldProps) {
    const fields = fieldProps?.config?.fields || {};
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
      {
        id: fieldProps?.id,
        width: 25,
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.settings.aria-label-field", "Field"),
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.SQLQueryEditor.filterField,
        menuShouldPortal: true,
        options: fieldProps?.items.map((f) => {
          const icon = fields[f.key].mainWidgetProps?.customProps?.icon;
          return {
            label: f.label,
            value: f.key,
            icon
          };
        }),
        value: fieldProps?.selectedKey,
        onChange: (val) => {
          fieldProps?.setField(val.label);
        }
      }
    );
  },
  // This is the component used for the Add/Remove buttons
  renderButton: function RAQBButton(buttonProps) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
      {
        type: "button",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.settings.title-button-filter", "{{ buttonLabel }} filter", {
          buttonLabel: buttonProps?.label
        }),
        onClick: buttonProps?.onClick,
        variant: "secondary",
        size: "md",
        icon: buttonProps?.label === buttonLabels.add ? "plus" : "times"
      }
    );
  },
  // This is the component used for the fields operator selector
  renderOperator: function Operator2(operatorProps) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Select,
      {
        options: operatorProps?.items.map((op) => ({ label: op.label, value: op.key })),
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.settings.aria-label-operator", "Operator"),
        "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.SQLQueryEditor.filterOperator,
        menuShouldPortal: true,
        value: operatorProps?.selectedKey,
        onChange: (val) => {
          operatorProps?.setField(val.value || "");
        }
      }
    );
  }
};
var Op = /* @__PURE__ */ ((Op2) => {
  Op2["IN"] = "select_any_in";
  Op2["NOT_IN"] = "select_not_any_in";
  Op2["MACROS"] = "macros";
  return Op2;
})(Op || {});
const customOperators = getCustomOperators(_react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig);
const textWidget = _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types.text.widgets.text;
const opers = [...textWidget.operators || [], "select_any_in" /* IN */, "select_not_any_in" /* NOT_IN */];
const customTextWidget = {
  ...textWidget,
  operators: opers
};
const customTypes = {
  ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types,
  text: {
    ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types.text,
    widgets: {
      ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types.text.widgets,
      text: customTextWidget
    }
  },
  datetime: {
    ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types.datetime,
    widgets: {
      ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types.datetime.widgets,
      datetime: {
        ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types.datetime.widgets.datetime,
        operators: ["macros" /* MACROS */, ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig.types.datetime.widgets.datetime.operators || []]
      }
    }
  }
};
const raqbConfig = {
  ..._react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_1__.BasicConfig,
  widgets,
  settings,
  operators: customOperators,
  types: customTypes
};
const noop = () => "";
function getCustomOperators(config) {
  const { ...supportedOperators } = config.operators;
  const sqlFormatInOp = supportedOperators["select_any_in" /* IN */].sqlFormatOp?.bind(config.ctx) || noop;
  const formatInOp = supportedOperators["select_any_in" /* IN */].formatOp?.bind(config.ctx) || noop;
  const customSqlInFormatter = (field, op, value, valueSrc, valueType, opDef, operatorOptions, fieldDef) => {
    return sqlFormatInOp(field, op, splitIfString(value), valueSrc, valueType, opDef, operatorOptions, fieldDef);
  };
  const sqlFormatNotInOp = supportedOperators["select_not_any_in" /* NOT_IN */].sqlFormatOp?.bind(config.ctx) || noop;
  const formatNotInOp = supportedOperators["select_not_any_in" /* NOT_IN */].formatOp?.bind(config.ctx) || noop;
  const customSqlNotInFormatter = (field, op, value, valueSrc, valueType, opDef, operatorOptions, fieldDef) => {
    return sqlFormatNotInOp(field, op, splitIfString(value), valueSrc, valueType, opDef, operatorOptions, fieldDef);
  };
  const customOperators2 = {
    ...supportedOperators,
    ["select_any_in" /* IN */]: {
      ...supportedOperators["select_any_in" /* IN */],
      formatOp: (field, op, value, valueSrc) => {
        return formatInOp(field, op, splitIfString(value), valueSrc);
      },
      sqlFormatOp: customSqlInFormatter
    },
    ["select_not_any_in" /* NOT_IN */]: {
      ...supportedOperators["select_not_any_in" /* NOT_IN */],
      formatOp: (field, op, value, valueSrc) => {
        return formatNotInOp(field, op, splitIfString(value), valueSrc);
      },
      sqlFormatOp: customSqlNotInFormatter
    },
    ["macros" /* MACROS */]: {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.get-custom-operators.custom-operators.label.macros", "Macros"),
      sqlFormatOp: (field, _operator, value) => {
        if (value === TIME_FILTER) {
          return `$__timeFilter(${field})`;
        }
        throw new Error("Invalid macro");
      }
    }
  };
  return customOperators2;
}
function splitIfString(value) {
  if ((0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(value)) {
    return value.split(",");
  }
  return value;
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/GroupByRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GroupByRow: () => (/* binding */ GroupByRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/AccessoryButton.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorList.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _utils_sql_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-sql/src/utils/sql.utils.ts");








function GroupByRow({ sql, columns, onSqlChange }) {
  const onGroupByChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (item) => {
      const cleaned = item.map((v) => (0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_8__.setGroupByField)(v.property?.name));
      const newSql = { ...sql, groupBy: cleaned };
      onSqlChange(newSql);
    },
    [onSqlChange, sql]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorList,
    {
      items: sql.groupBy,
      onChange: onGroupByChange,
      renderItem: makeRenderColumn({
        options: columns
      })
    }
  );
}
function makeRenderColumn({ options }) {
  const renderColumn = function(item, onChangeItem, onDeleteItem) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.InputGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
        {
          value: item.property?.name ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption)(item.property.name) : null,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-sql.components.make-render-column.render-column.aria-label-group-by", "Group by"),
          options,
          menuShouldPortal: true,
          onChange: ({ value }) => value && onChangeItem((0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_8__.setGroupByField)(value))
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.AccessoryButton,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
            "grafana-sql.components.make-render-column.render-column.title-remove-group-by-column",
            "Remove group by column"
          ),
          icon: "times",
          variant: "secondary",
          onClick: onDeleteItem
        }
      )
    ] });
  };
  return renderColumn;
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/OrderByRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderByRow: () => (/* binding */ OrderByRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/InputGroup.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Space.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _utils_sql_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-sql/src/utils/sql.utils.ts");









const sortOrderOptions = [
  { description: "Sort by ascending", value: "ASC", icon: "sort-amount-up" },
  { description: "Sort by descending", value: "DESC", icon: "sort-amount-down" }
];
function OrderByRow({ sql, onSqlChange, columns, showOffset }) {
  const onSortOrderChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (item) => {
      const newSql = { ...sql, orderByDirection: item };
      onSqlChange(newSql);
    },
    [onSqlChange, sql]
  );
  const onLimitChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (event) => {
      const newSql = { ...sql, limit: Number.parseInt(event.currentTarget.value, 10) };
      onSqlChange(newSql);
    },
    [onSqlChange, sql]
  );
  const onOffsetChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (event) => {
      const newSql = { ...sql, offset: Number.parseInt(event.currentTarget.value, 10) };
      onSqlChange(newSql);
    },
    [onSqlChange, sql]
  );
  const onOrderByChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (item) => {
      const newSql = { ...sql, orderBy: (0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_11__.setPropertyField)(item?.value) };
      if (item === null) {
        newSql.orderByDirection = void 0;
      }
      onSqlChange(newSql);
    },
    [onSqlChange, sql]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.order-by-row.label-order-by", "Order by"), width: 25, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_6__.InputGroup, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Select,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.order-by-row.aria-label-order-by", "Order by"),
          options: columns,
          value: sql.orderBy?.property.name ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption)(sql.orderBy.property.name) : null,
          isClearable: true,
          menuShouldPortal: true,
          onChange: onOrderByChange
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Space, { h: 1.5 }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.RadioButtonGroup,
        {
          options: sortOrderOptions,
          disabled: !sql?.orderBy?.property.name,
          value: sql.orderByDirection,
          onChange: onSortOrderChange
        }
      )
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.order-by-row.label-limit", "Limit"), optional: true, width: 25, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input, { type: "number", min: 0, id: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("limit-"), value: sql.limit || "", onChange: onLimitChange }) }),
    showOffset && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.order-by-row.label-offset", "Offset"), optional: true, width: 25, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input, { type: "number", id: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.uniqueId)("offset-"), value: sql.offset || "", onChange: onOffsetChange }) })
  ] });
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/SQLGroupByRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLGroupByRow: () => (/* binding */ SQLGroupByRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _utils_getColumnsWithIndices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-sql/src/utils/getColumnsWithIndices.ts");
/* harmony import */ var _utils_useSqlChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-sql/src/utils/useSqlChange.ts");
/* harmony import */ var _GroupByRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/GroupByRow.tsx");





function SQLGroupByRow({ fields, query, onQueryChange, db }) {
  const { onSqlChange } = (0,_utils_useSqlChange__WEBPACK_IMPORTED_MODULE_2__.useSqlChange)({ query, onQueryChange, db });
  let columnsWithIndices = (0,_utils_getColumnsWithIndices__WEBPACK_IMPORTED_MODULE_1__.getColumnsWithIndices)(query, fields);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GroupByRow__WEBPACK_IMPORTED_MODULE_3__.GroupByRow, { columns: columnsWithIndices, sql: query.sql, onSqlChange });
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/SQLOrderByRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLOrderByRow: () => (/* binding */ SQLOrderByRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _utils_getColumnsWithIndices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-sql/src/utils/getColumnsWithIndices.ts");
/* harmony import */ var _utils_useSqlChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-sql/src/utils/useSqlChange.ts");
/* harmony import */ var _OrderByRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/OrderByRow.tsx");





function SQLOrderByRow({ fields, query, onQueryChange, db }) {
  const { onSqlChange } = (0,_utils_useSqlChange__WEBPACK_IMPORTED_MODULE_2__.useSqlChange)({ query, onQueryChange, db });
  let columnsWithIndices = (0,_utils_getColumnsWithIndices__WEBPACK_IMPORTED_MODULE_1__.getColumnsWithIndices)(query, fields);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OrderByRow__WEBPACK_IMPORTED_MODULE_3__.OrderByRow, { sql: query.sql, onSqlChange, columns: columnsWithIndices });
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/SQLWhereRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SQLWhereRow: () => (/* binding */ SQLWhereRow),
/* harmony export */   removeQuotesForMultiVariables: () => (/* binding */ removeQuotesForMultiVariables)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-runtime/src/services/templateSrv.ts");
/* harmony import */ var _utils_useSqlChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-sql/src/utils/useSqlChange.ts");
/* harmony import */ var _WhereRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/WhereRow.tsx");






function SQLWhereRow({ query, fields, onQueryChange, db }) {
  const state = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    return mapFieldsToTypes(fields);
  }, [fields]);
  const { onSqlChange } = (0,_utils_useSqlChange__WEBPACK_IMPORTED_MODULE_3__.useSqlChange)({ query, onQueryChange, db });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _WhereRow__WEBPACK_IMPORTED_MODULE_4__.WhereRow,
    {
      config: { fields: state.value || {} },
      sql: query.sql,
      onSqlChange: (val) => {
        const templateVars = (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_2__.getTemplateSrv)().getVariables();
        removeQuotesForMultiVariables(val, templateVars);
        onSqlChange(val);
      }
    },
    JSON.stringify(state.value)
  );
}
function mapFieldsToTypes(columns) {
  const fields = {};
  for (const col of columns) {
    fields[col.value] = {
      type: col.raqbFieldType || "text",
      valueSources: ["value"],
      mainWidgetProps: { customProps: { icon: col.icon } }
    };
  }
  return fields;
}
function removeQuotesForMultiVariables(val, templateVars) {
  const multiVariableInWhereString = (tv) => "multi" in tv && tv.multi && (val.whereString?.includes(`\${${tv.name}}`) || val.whereString?.includes(`$${tv.name}`));
  if (templateVars.some((tv) => multiVariableInWhereString(tv))) {
    val.whereString = val.whereString?.replaceAll("')", ")");
    val.whereString = val.whereString?.replaceAll("('", "(");
  }
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/SelectColumn.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectColumn: () => (/* binding */ SelectColumn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");







function SelectColumn({ columns, onParameterChange, value }) {
  const selectInputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("grafana-sql.components.select-column.label-column", "Column"), width: 25, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Select,
    {
      value,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.SQLQueryEditor.selectColumn,
      inputId: selectInputId,
      menuShouldPortal: true,
      options: [{ label: "*", value: "*" }, ...columns],
      allowCustomValue: true,
      onChange: (s) => onParameterChange(s.value)
    }
  ) });
}


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/SelectCustomFunctionParameters.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectCustomFunctionParameters: () => (/* binding */ SelectCustomFunctionParameters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-sql/src/expressions.ts");
/* harmony import */ var _utils_sql_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-sql/src/utils/sql.utils.ts");
/* harmony import */ var _SelectColumn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SelectColumn.tsx");










function SelectCustomFunctionParameters({
  columns,
  query,
  onSqlChange,
  onParameterChange,
  currentColumnIndex
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const macroOrFunction = query.sql?.columns?.[currentColumnIndex];
  const addParameter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (index) => {
      const item = query.sql?.columns?.[index];
      if (!item) {
        return;
      }
      item.parameters = item.parameters ? [...item.parameters, { type: _expressions__WEBPACK_IMPORTED_MODULE_10__.QueryEditorExpressionType.FunctionParameter, name: "" }] : [];
      const newSql = {
        ...query.sql,
        columns: query.sql?.columns?.map((c, i) => i === index ? item : c)
      };
      onSqlChange(newSql);
    },
    [onSqlChange, query.sql]
  );
  const removeParameter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (columnIndex, index) => {
      const item = query.sql?.columns?.[columnIndex];
      if (!item?.parameters) {
        return;
      }
      item.parameters = item.parameters?.filter((_, i) => i !== index);
      const newSql = {
        ...query.sql,
        columns: query.sql?.columns?.map((c, i) => i === columnIndex ? item : c)
      };
      onSqlChange(newSql);
    },
    [onSqlChange, query.sql]
  );
  function renderParameters(columnIndex) {
    if (!macroOrFunction?.parameters || macroOrFunction.parameters.length <= 1) {
      return null;
    }
    const paramComponents = macroOrFunction.parameters.map((param, index) => {
      if (index === 0) {
        return null;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { className: styles.label, children: "," }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
          {
            onChange: (e) => onParameterChange(index)(e.currentTarget.value),
            value: param.name,
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
              "grafana-sql.components.select-custom-function-parameters.aria-label-parameter",
              "Parameter {{index}} for column {{columnIndex}}",
              { index, columnIndex }
            ),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.selectInputParameter,
            addonAfter: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
              {
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
                  "grafana-sql.components.select-custom-function-parameters.render-parameters.params.title-remove-parameter",
                  "Remove parameter"
                ),
                type: "button",
                icon: "times",
                variant: "secondary",
                size: "md",
                onClick: () => removeParameter(columnIndex, index)
              }
            )
          }
        )
      ] }, index);
    });
    return paramComponents;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { className: styles.label, children: "(" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SelectColumn__WEBPACK_IMPORTED_MODULE_12__.SelectColumn,
      {
        columns,
        onParameterChange: (s) => onParameterChange(0)(s),
        value: (0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_11__.getColumnValue)(macroOrFunction?.parameters?.[0])
      }
    ),
    renderParameters(currentColumnIndex),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
      {
        type: "button",
        onClick: () => addParameter(currentColumnIndex),
        variant: "secondary",
        size: "md",
        icon: "plus",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("grafana-sql.components.select-custom-function-parameters.title-add-parameter", "Add parameter")
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InlineLabel, { className: styles.label, children: ")" })
  ] });
}
const getStyles = () => {
  return {
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: 0,
      margin: 0,
      width: "unset"
    })
  };
};


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/SelectFunctionParameters.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectFunctionParameters: () => (/* binding */ SelectFunctionParameters)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineLabel.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-sql/src/expressions.ts");
/* harmony import */ var _utils_sql_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-sql/src/utils/sql.utils.ts");
/* harmony import */ var _SelectColumn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SelectColumn.tsx");
/* harmony import */ var _SelectCustomFunctionParameters__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SelectCustomFunctionParameters.tsx");











function SelectFunctionParameters({ query, onSqlChange, currentColumnIndex, db, columns }) {
  const selectInputId = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
  const macroOrFunction = query.sql?.columns?.[currentColumnIndex];
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const func = db.functions().find((f) => f.name === macroOrFunction?.name);
  const [fieldsFromFunction, setFieldsFromFunction] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const getFieldsFromFunction = async () => {
      if (!func) {
        return;
      }
      const options = [];
      for (const param of func.parameters ?? []) {
        if (param.options) {
          options.push(await param.options(query));
        } else {
          options.push([]);
        }
      }
      setFieldsFromFunction(options);
    };
    getFieldsFromFunction();
  }, [macroOrFunction?.name]);
  const onParameterChange = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(
    (index, keepIndex) => (s) => {
      const item = query.sql?.columns?.[currentColumnIndex];
      if (!item) {
        return;
      }
      if (!item.parameters) {
        item.parameters = [];
      }
      if (item.parameters[index] === void 0) {
        item.parameters[index] = { type: _expressions__WEBPACK_IMPORTED_MODULE_10__.QueryEditorExpressionType.FunctionParameter, name: s };
      } else if (s == null && keepIndex) {
        item.parameters = item.parameters.map((p, i) => i === index ? { ...p, name: "" } : p);
        if (item.parameters[item.parameters.length - 1]?.name === "") {
          item.parameters = item.parameters.filter((p) => p.name !== "");
        }
      } else if (s == null) {
        item.parameters = item.parameters.filter((_, i) => i !== index);
      } else {
        item.parameters = item.parameters.map((p, i) => i === index ? { ...p, name: s } : p);
      }
      const newSql = {
        ...query.sql,
        columns: query.sql?.columns?.map((c, i) => i === currentColumnIndex ? item : c)
      };
      onSqlChange(newSql);
    },
    [currentColumnIndex, onSqlChange, query.sql]
  );
  function renderParametersWithFunctions() {
    if (!func?.parameters) {
      return null;
    }
    return func?.parameters.map((funcParam, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { alignItems: "flex-end", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorField, { label: funcParam.name, width: 25, optional: !funcParam.required, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: funcParam.options ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Select,
          {
            value: (0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_11__.getColumnValue)(macroOrFunction?.parameters[index]),
            options: fieldsFromFunction?.[index],
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.selectFunctionParameter(funcParam.name),
            inputId: selectInputId,
            menuShouldPortal: true,
            allowCustomValue: true,
            isClearable: true,
            onChange: (s) => onParameterChange(index, true)(s?.value)
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
          {
            onChange: (e) => onParameterChange(index, true)(e.currentTarget.value),
            value: macroOrFunction?.parameters[index]?.name,
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.components.SQLQueryEditor.selectInputParameter
          }
        ) }) }),
        func.parameters.length !== index + 1 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineLabel, { className: styles.label, children: "," })
      ] }, index);
    });
  }
  if (macroOrFunction?.name === void 0) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SelectColumn__WEBPACK_IMPORTED_MODULE_12__.SelectColumn,
      {
        columns,
        onParameterChange: (s) => onParameterChange(0)(s),
        value: (0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_11__.getColumnValue)(macroOrFunction?.parameters?.[0])
      }
    );
  }
  if (!func) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _SelectCustomFunctionParameters__WEBPACK_IMPORTED_MODULE_13__.SelectCustomFunctionParameters,
      {
        query,
        onSqlChange,
        currentColumnIndex,
        columns,
        onParameterChange
      }
    );
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineLabel, { className: styles.label, children: "(" }),
    renderParametersWithFunctions(),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.InlineLabel, { className: styles.label, children: ")" })
  ] });
}
const getStyles = () => {
  return {
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: 0,
      margin: 0,
      width: "unset"
    })
  };
};


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/SelectRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectRow: () => (/* binding */ SelectRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _expressions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-sql/src/expressions.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-sql/src/types.ts");
/* harmony import */ var _utils_sql_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-sql/src/utils/sql.utils.ts");
/* harmony import */ var _utils_useSqlChange__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-sql/src/utils/useSqlChange.ts");
/* harmony import */ var _SelectFunctionParameters__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SelectFunctionParameters.tsx");















function SelectRow({ query, onQueryChange, db, columns }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useStyles2)(getStyles);
  const { onSqlChange } = (0,_utils_useSqlChange__WEBPACK_IMPORTED_MODULE_15__.useSqlChange)({ query, onQueryChange, db });
  const timeSeriesAliasOpts = [];
  if (query.format === _types__WEBPACK_IMPORTED_MODULE_13__.QueryFormat.Timeseries) {
    timeSeriesAliasOpts.push({ label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.label.time", "time"), value: "time" });
    timeSeriesAliasOpts.push({ label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.label.value", "value"), value: "value" });
  }
  const onAggregationChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (item, index) => (aggregation) => {
      const newItem = {
        ...item,
        name: aggregation?.value,
        parameters: [
          { type: _expressions__WEBPACK_IMPORTED_MODULE_12__.QueryEditorExpressionType.FunctionParameter, name: item.parameters?.[0]?.name || "" }
        ]
      };
      const newSql = {
        ...query.sql,
        columns: query.sql?.columns?.map((c, i) => i === index ? newItem : c)
      };
      onSqlChange(newSql);
    },
    [onSqlChange, query.sql]
  );
  const onAliasChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (item, index) => (alias) => {
      let newItem = { ...item };
      if (alias !== null) {
        newItem = { ...item, alias: `"${alias?.value?.trim()}"` };
      } else {
        delete newItem.alias;
      }
      const newSql = {
        ...query.sql,
        columns: query.sql?.columns?.map((c, i) => i === index ? newItem : c)
      };
      onSqlChange(newSql);
    },
    [onSqlChange, query.sql]
  );
  const removeColumn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (index) => () => {
      const clone = [...query.sql?.columns || []];
      clone.splice(index, 1);
      const newSql = {
        ...query.sql,
        columns: clone
      };
      onSqlChange(newSql);
    },
    [onSqlChange, query.sql]
  );
  const addColumn = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(() => {
    const newSql = { ...query.sql, columns: [...query.sql?.columns || [], (0,_utils_sql_utils__WEBPACK_IMPORTED_MODULE_14__.createFunctionField)()] };
    onSqlChange(newSql);
  }, [onSqlChange, query.sql]);
  const aggregateOptions = () => {
    const options = [
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.aggregate-options.options.label.aggregations", "Aggregations"),
        options: []
      },
      { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.aggregate-options.options.label.macros", "Macros"), options: [] }
    ];
    for (const func of db.functions()) {
      if (func.name.startsWith("$__")) {
        options[1].options.push({ label: func.name, value: func.name });
      } else {
        options[0].options.push({ label: func.name, value: func.name });
      }
    }
    return options;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 2, wrap: "wrap", direction: "column", children: [
    query.sql?.columns?.map((item, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 2, alignItems: "end", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__.EditorField,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.label-data-operations", "Data operations"),
          optional: true,
          width: 25,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
            {
              value: item.name ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(item.name) : null,
              inputId: `select-aggregation-${index}-${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)()}`,
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.SQLQueryEditor.selectAggregation,
              isClearable: true,
              menuShouldPortal: true,
              allowCustomValue: true,
              options: aggregateOptions(),
              onChange: onAggregationChange(item, index)
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _SelectFunctionParameters__WEBPACK_IMPORTED_MODULE_16__.SelectFunctionParameters,
        {
          currentColumnIndex: index,
          columns,
          onSqlChange,
          query,
          db
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_7__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.label-alias", "Alias"), optional: true, width: 15, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Select,
        {
          value: item.alias ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.toOption)(item.alias) : null,
          inputId: `select-alias-${index}-${(0,lodash__WEBPACK_IMPORTED_MODULE_2__.uniqueId)()}`,
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_5__.selectors.components.SQLQueryEditor.selectAlias,
          options: timeSeriesAliasOpts,
          onChange: onAliasChange(item, index),
          isClearable: true,
          menuShouldPortal: true,
          allowCustomValue: true
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
        {
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.title-remove-column", "Remove column"),
          type: "button",
          icon: "trash-alt",
          variant: "secondary",
          size: "md",
          onClick: removeColumn(index)
        }
      )
    ] }) }, index)),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
      {
        type: "button",
        onClick: addColumn,
        variant: "secondary",
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("grafana-sql.components.select-row.title-add-column", "Add column"),
        size: "md",
        icon: "plus",
        className: styles.addButton
      }
    )
  ] });
}
const getStyles = () => {
  return {
    addButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({ alignSelf: "flex-start" }),
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: 0,
      margin: 0,
      width: "unset"
    })
  };
};


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/VisualEditor.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualEditor: () => (/* binding */ VisualEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorField.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRow.js");
/* harmony import */ var _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@grafana/plugin-ui/dist/esm/components/QueryEditor/EditorRows.js");
/* harmony import */ var _query_editor_raw_QueryToolbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-sql/src/components/query-editor-raw/QueryToolbox.tsx");
/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/Preview.tsx");
/* harmony import */ var _SQLGroupByRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SQLGroupByRow.tsx");
/* harmony import */ var _SQLOrderByRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SQLOrderByRow.tsx");
/* harmony import */ var _SQLWhereRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SQLWhereRow.tsx");
/* harmony import */ var _SelectRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/SelectRow.tsx");











const VisualEditor = ({ query, db, queryRowFilter, onChange, onValidate, range }) => {
  const state = (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    const fields = await db.fields(query);
    return fields;
  }, [db, query.dataset, query.table]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_5__.EditorRows, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SelectRow__WEBPACK_IMPORTED_MODULE_11__.SelectRow, { columns: state.value || [], query, onQueryChange: onChange, db }) }),
      queryRowFilter.filter && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-sql.components.visual-editor.label-filter-by-column-value", "Filter by column value"),
          optional: true,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLWhereRow__WEBPACK_IMPORTED_MODULE_10__.SQLWhereRow, { fields: state.value || [], query, onQueryChange: onChange, db })
        }
      ) }),
      queryRowFilter.group && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_3__.EditorField, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("grafana-sql.components.visual-editor.label-group-by-column", "Group by column"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLGroupByRow__WEBPACK_IMPORTED_MODULE_8__.SQLGroupByRow, { fields: state.value || [], query, onQueryChange: onChange, db }) }) }),
      queryRowFilter.order && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SQLOrderByRow__WEBPACK_IMPORTED_MODULE_9__.SQLOrderByRow, { fields: state.value || [], query, onQueryChange: onChange, db }) }),
      queryRowFilter.preview && query.rawSql && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_plugin_ui__WEBPACK_IMPORTED_MODULE_4__.EditorRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Preview__WEBPACK_IMPORTED_MODULE_7__.Preview, { rawSql: query.rawSql, datasourceType: query.datasource?.type }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_query_editor_raw_QueryToolbox__WEBPACK_IMPORTED_MODULE_6__.QueryToolbox, { db, query, onValidate, range })
  ] });
};


/***/ }),

/***/ "./packages/grafana-sql/src/components/visual-query-builder/WhereRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhereRow: () => (/* binding */ WhereRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@react-awesome-query-builder/ui/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AwesomeQueryBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-sql/src/components/visual-query-builder/AwesomeQueryBuilder.tsx");






function WhereRow({ sql, config, onSqlChange }) {
  const [tree, setTree] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  const configWithDefaults = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => ({ ..._AwesomeQueryBuilder__WEBPACK_IMPORTED_MODULE_4__.raqbConfig, ...config }), [config]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!tree) {
      const initTree = _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Utils.checkTree(_react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Utils.loadTree(sql.whereJsonTree ?? _AwesomeQueryBuilder__WEBPACK_IMPORTED_MODULE_4__.emptyInitTree), configWithDefaults);
      setTree(initTree);
    }
  }, [configWithDefaults, sql.whereJsonTree, tree]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!sql.whereJsonTree) {
      setTree(_react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Utils.checkTree(_react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Utils.loadTree(_AwesomeQueryBuilder__WEBPACK_IMPORTED_MODULE_4__.emptyInitTree), configWithDefaults));
    }
  }, [configWithDefaults, sql.whereJsonTree]);
  const onTreeChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(
    (changedTree, config2) => {
      setTree(changedTree);
      const newSql = {
        ...sql,
        whereJsonTree: _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Utils.getTree(changedTree),
        whereString: _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Utils.sqlFormat(changedTree, config2)
      };
      onSqlChange(newSql);
    },
    [onSqlChange, sql]
  );
  if (!tree) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Query,
    {
      ...configWithDefaults,
      value: tree,
      onChange: onTreeChange,
      renderBuilder: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_react_awesome_query_builder_ui__WEBPACK_IMPORTED_MODULE_2__.Builder, { ...props })
    }
  );
}
function flex(direction) {
  return `
    display: flex;
    gap: 8px;
    flex-direction: ${direction};`;
}
(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.injectGlobal)`
  .group--header {
    ${flex("row")}
  }

  .group-or-rule {
    ${flex("column")}
    .rule {
      flex-direction: row;
    }
  }

  .rule--body {
    ${flex("row")}
  }

  .group--children {
    ${flex("column")}
  }

  .group--conjunctions:empty {
    display: none;
  }
`;


/***/ }),

/***/ "./packages/grafana-sql/src/utils/getColumnsWithIndices.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColumnsWithIndices: () => (/* binding */ getColumnsWithIndices)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");


function getColumnsWithIndices(query, fields) {
  if (!fields || !query.sql?.columns) {
    return fields;
  }
  const options = query.sql.columns.map((c, i) => {
    const value = c.name ? `${c.name}(${c.parameters?.map((p) => p.name).join(", ")})` : c.parameters?.map((p) => p.name).join(", ");
    return {
      value,
      label: `${i + 1} - ${value}`
    };
  });
  return [
    {
      value: "",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("grafana-sql.utils.get-columns-width-indices.label-selected-columns", "Selected columns"),
      options,
      expanded: true
    },
    ...fields
  ];
}


/***/ }),

/***/ "./packages/grafana-sql/src/utils/useSqlChange.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSqlChange: () => (/* binding */ useSqlChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useSqlChange({ query, onQueryChange, db }) {
  const onSqlChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (sql) => {
      const toRawSql = db.toRawSql;
      const rawSql = toRawSql({ sql, dataset: query.dataset, table: query.table, refId: query.refId });
      const newQuery = { ...query, sql, rawSql };
      onQueryChange(newQuery);
    },
    [db, onQueryChange, query]
  );
  return { onSqlChange };
}


/***/ })

}]);
//# sourceMappingURL=sql-query-editor.ebef6cd9f16d784eb35c.js.map