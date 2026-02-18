"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamList"],{

/***/ "./public/app/core/components/Branding/CloudEnterpriseBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudEnterpriseBadge: () => (/* binding */ CloudEnterpriseBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _OrangeBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Branding/OrangeBadge.tsx");




function CloudEnterpriseBadge() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OrangeBadge__WEBPACK_IMPORTED_MODULE_2__.OrangeBadge, { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("cloud-enterprise-feature-badge", "Cloud & Enterprise") });
}


/***/ }),

/***/ "./public/app/core/components/Branding/OrangeBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrangeBadge: () => (/* binding */ OrangeBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




function OrangeBadge({ text, className, ...htmlProps }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(getStyles, text);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper, className), ...htmlProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: "cloud", size: "sm" }),
    text
  ] });
}
const getStyles = (theme, text) => {
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "inline-flex",
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.shape.radius.pill,
      background: theme.colors.gradients.brandHorizontal,
      color: theme.colors.primary.contrastText,
      fontWeight: theme.typography.fontWeightMedium,
      gap: theme.spacing(0.5),
      fontSize: theme.typography.bodySmall.fontSize,
      lineHeight: theme.typography.bodySmall.lineHeight,
      alignItems: "center",
      ...text === void 0 && {
        svg: {
          marginRight: 0
        }
      }
    })
  };
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/BuiltinRoleSelector.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuiltinRoleSelector: () => (/* binding */ BuiltinRoleSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/orgs.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonList/RadioButtonList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/RolePicker/styles.ts");







const BuiltinRoleSelector = ({ value, onChange, disabled, disabledMesssage, tooltipMessage }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_8__.getStyles);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useTheme2)();
  const basicRoleOptions = Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.OrgRole).filter((r) => {
    if (r === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.OrgRole.None && !app_core_core__WEBPACK_IMPORTED_MODULE_7__.contextSrv.licensedAccessControlEnabled()) {
      return false;
    }
    return true;
  }).map((r) => ({
    label: r === _grafana_data__WEBPACK_IMPORTED_MODULE_1__.OrgRole.None ? "No basic role" : r,
    value: r
  }));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.groupHeader, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { marginRight: theme.spacing(1) }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "role-picker.built-in.basic-roles", children: "Basic roles" }) }),
      disabled && disabledMesssage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { placement: "right-end", interactive: true, content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: disabledMesssage }), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "question-circle" }) }),
      !disabled && tooltipMessage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip, { placement: "right-end", interactive: true, content: tooltipMessage, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle", size: "xs" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RadioButtonList,
      {
        name: "Basic Role Selector",
        className: styles.basicRoleSelector,
        options: basicRoleOptions,
        value,
        onChange,
        disabled
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/RoleMenuGroupOption.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleMenuGroupOption: () => (/* binding */ RoleMenuGroupOption)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Portal/Portal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/getSelectStyles.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/RolePicker/styles.ts");









const RoleMenuGroupOption = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(
  react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(
    ({
      name,
      value,
      isFocused,
      isSelected,
      partiallySelected,
      disabled,
      onChange,
      onClick,
      onOpenSubMenu,
      onCloseSubMenu,
      children,
      root
    }, ref) => {
      const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useTheme2)();
      const styles = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.getSelectStyles)(theme);
      const customStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_8__.getStyles);
      const wrapperClassName = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
        styles.option,
        isFocused && styles.optionFocused,
        disabled && customStyles.menuOptionDisabled
      );
      const onChangeInternal = (event) => {
        if (disabled) {
          return;
        }
        if (value) {
          onChange(value);
        }
      };
      const onClickInternal = (event) => {
        if (onClick) {
          onClick(value);
        }
      };
      const onMouseEnter = () => {
        if (onOpenSubMenu) {
          onOpenSubMenu(value);
        }
      };
      const onMouseLeave = () => {
        if (onCloseSubMenu) {
          onCloseSubMenu();
        }
      };
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onMouseEnter, onMouseLeave, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "div",
        {
          ref,
          className: wrapperClassName,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("role-picker.menu-group-option-aria-label", "Role picker option"),
          onClick: onClickInternal,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Checkbox,
              {
                value: isSelected,
                className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(customStyles.menuOptionCheckbox, {
                  [customStyles.checkboxPartiallyChecked]: partiallySelected
                }),
                onChange: onChangeInternal,
                disabled
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.optionBody, customStyles.menuOptionBody), children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: name }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: customStyles.menuOptionExpand })
            ] }),
            root && children && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Portal, { className: customStyles.subMenuPortal, root, children })
          ]
        }
      ) });
    }
  )
);
RoleMenuGroupOption.displayName = "RoleMenuGroupOption";


/***/ }),

/***/ "./public/app/core/components/RolePicker/RoleMenuGroupsSection.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleMenuGroupsSection: () => (/* binding */ RoleMenuGroupsSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Select/getSelectStyles.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RoleMenuGroupOption__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/RolePicker/RoleMenuGroupOption.tsx");
/* harmony import */ var _RoleMenuOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/RoleMenuOption.tsx");
/* harmony import */ var _RolePickerSubMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/RolePicker/RolePickerSubMenu.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/RolePicker/styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/RolePicker/utils.ts");









const RoleMenuGroupsSection = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(
  ({
    roles,
    isFiltered,
    renderedName,
    showGroups,
    optionGroups,
    onGroupChange,
    groupSelected,
    groupPartiallySelected,
    subMenuNode,
    selectedOptions,
    onRoleChange,
    onClearSubMenu,
    showOnLeftSubMenu
  }, _ref) => {
    const [showSubMenu, setShowSubMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openedMenuGroup, setOpenedMenuGroup] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useTheme2)();
    const selectStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.getSelectStyles)(theme);
    const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_7__.getStyles);
    const onOpenSubMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((value) => {
      setOpenedMenuGroup(value);
      setShowSubMenu(true);
    }, []);
    const onCloseSubMenu = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
      setShowSubMenu(false);
      setOpenedMenuGroup("");
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: roles.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.menuSection, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.groupHeader, children: renderedName }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: selectStyles.optionBody }),
      showGroups && !!optionGroups?.length ? optionGroups.map((groupOption) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RoleMenuGroupOption__WEBPACK_IMPORTED_MODULE_4__.RoleMenuGroupOption,
        {
          name: groupOption.name,
          value: groupOption.value,
          isSelected: groupSelected(groupOption.value) || groupPartiallySelected(groupOption.value),
          partiallySelected: groupPartiallySelected(groupOption.value),
          disabled: groupOption.options?.every(
            (option) => (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isNotDelegatable)(option) || selectedOptions.find((opt) => opt.uid === option.uid && opt.mapped)
          ),
          onChange: onGroupChange,
          onOpenSubMenu,
          onCloseSubMenu,
          root: subMenuNode,
          isFocused: showSubMenu && openedMenuGroup === groupOption.value,
          children: showSubMenu && openedMenuGroup === groupOption.value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _RolePickerSubMenu__WEBPACK_IMPORTED_MODULE_6__.RolePickerSubMenu,
            {
              options: groupOption.options,
              selectedOptions,
              onSelect: onRoleChange,
              onClear: () => onClearSubMenu(openedMenuGroup),
              showOnLeft: showOnLeftSubMenu
            }
          )
        },
        groupOption.value
      )) : roles.map((option) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _RoleMenuOption__WEBPACK_IMPORTED_MODULE_5__.RoleMenuOption,
        {
          useFilteredDisplayName: isFiltered,
          data: option,
          isSelected: !!(option.uid && !!selectedOptions.find((opt) => opt.uid === option.uid)),
          disabled: (0,_utils__WEBPACK_IMPORTED_MODULE_8__.isNotDelegatable)(option),
          mapped: !!(option.uid && selectedOptions.find((opt) => opt.uid === option.uid && opt.mapped)),
          onChange: onRoleChange,
          hideDescription: true
        },
        option.uid
      ))
    ] }) });
  }
);
RoleMenuGroupsSection.displayName = "RoleMenuGroupsSection";


/***/ }),

/***/ "./public/app/core/components/RolePicker/RoleMenuOption.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleMenuOption: () => (/* binding */ RoleMenuOption)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Select/getSelectStyles.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/RolePicker/styles.ts");








const RoleMenuOption = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(
  ({ data, isFocused, isSelected, useFilteredDisplayName, disabled, mapped, onChange, hideDescription }, ref) => {
    const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
    const styles = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_8__.getSelectStyles)(theme);
    const customStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_9__.getStyles);
    disabled = disabled || mapped;
    let disabledMessage = "";
    if (disabled) {
      disabledMessage = "You do not have permissions to assign this role.";
      if (mapped) {
        disabledMessage = "Role assignment cannot be removed because the role is mapped through group sync.";
      }
    }
    const wrapperClassName = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
      styles.option,
      isFocused && styles.optionFocused,
      disabled && customStyles.menuOptionDisabled
    );
    const onChangeInternal = (event) => {
      if (disabled) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      onChange(data);
    };
    return (
      // TODO: fix keyboard a11y
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
        "div",
        {
          ref,
          className: wrapperClassName,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("role-picker.menu-option-aria-label", "Role picker option"),
          onClick: onChangeInternal,
          children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Checkbox,
              {
                value: isSelected,
                className: customStyles.menuOptionCheckbox,
                onChange: onChangeInternal,
                disabled
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.optionBody, customStyles.menuOptionBody), children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: useFilteredDisplayName && data.filteredDisplayName || data.displayName || data.name }),
              !hideDescription && data.description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.optionDescription, children: data.description })
            ] }),
            disabledMessage && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { content: disabledMessage, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "lock" }) }),
            data.description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip, { content: data.description, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "info-circle", className: customStyles.menuOptionInfoSign }) })
          ]
        }
      )
    );
  }
);
RoleMenuOption.displayName = "RoleMenuOption";


/***/ }),

/***/ "./public/app/core/components/RolePicker/RolePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePicker: () => (/* binding */ RolePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Portal/Portal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ClickOutsideWrapper/ClickOutsideWrapper.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RolePickerInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/RolePickerInput.tsx");
/* harmony import */ var _RolePickerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/RolePicker/RolePickerMenu.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/RolePicker/constants.ts");







const RolePicker = ({
  basicRole,
  appliedRoles,
  roleOptions,
  disabled,
  isLoading,
  basicRoleDisabled,
  basicRoleDisabledMessage,
  showBasicRole,
  onRolesChange,
  onBasicRoleChange,
  canUpdateRoles = true,
  apply = false,
  maxWidth = _constants__WEBPACK_IMPORTED_MODULE_7__.ROLE_PICKER_WIDTH,
  width
}) => {
  const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [selectedRoles, setSelectedRoles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(appliedRoles);
  const [selectedBuiltInRole, setSelectedBuiltInRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(basicRole);
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [offset, setOffset] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({ vertical: 0, horizontal: 0 });
  const [menuLeft, setMenuLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useTheme2)();
  const widthPx = typeof width === "number" ? theme.spacing(width) : width;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSelectedBuiltInRole(basicRole);
    setSelectedRoles(appliedRoles);
  }, [appliedRoles, basicRole, onBasicRoleChange]);
  const setMenuPosition = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    const { horizontal, vertical, menuToLeft } = calculateMenuPosition();
    if (horizontal && vertical) {
      setOffset({ horizontal, vertical });
      setMenuLeft(menuToLeft);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isOpen) {
      return;
    }
    setMenuPosition();
  }, [isOpen, selectedRoles, setMenuPosition]);
  const calculateMenuPosition = () => {
    const dimensions = ref?.current?.getBoundingClientRect();
    if (!dimensions) {
      return {};
    }
    const { bottom, top, left, right } = dimensions;
    const spaceBelow = window.innerHeight - bottom;
    const spaceAbove = top;
    const spaceRight = window.innerWidth - right;
    const spaceLeft = left;
    let horizontal = left;
    let vertical = bottom;
    let menuToLeft = false;
    let menuToTop = false;
    if (spaceBelow < _constants__WEBPACK_IMPORTED_MODULE_7__.MENU_MAX_HEIGHT && spaceAbove > spaceBelow) {
      vertical = top - _constants__WEBPACK_IMPORTED_MODULE_7__.MENU_MAX_HEIGHT;
      menuToTop = true;
    }
    if (spaceRight < _constants__WEBPACK_IMPORTED_MODULE_7__.ROLE_PICKER_MENU_MAX_WIDTH && spaceLeft < _constants__WEBPACK_IMPORTED_MODULE_7__.ROLE_PICKER_MENU_MAX_WIDTH) {
      horizontal = right - _constants__WEBPACK_IMPORTED_MODULE_7__.ROLE_PICKER_MENU_MAX_WIDTH;
      menuToLeft = true;
    } else {
      horizontal = Math.max(0, left + (dimensions.width - _constants__WEBPACK_IMPORTED_MODULE_7__.ROLE_PICKER_MENU_MAX_WIDTH) / 2);
    }
    horizontal = Math.max(0, Math.min(horizontal, window.innerWidth - _constants__WEBPACK_IMPORTED_MODULE_7__.ROLE_PICKER_MAX_MENU_WIDTH));
    vertical = Math.max(0, Math.min(vertical, window.innerHeight - _constants__WEBPACK_IMPORTED_MODULE_7__.MENU_MAX_HEIGHT));
    if (menuToTop) {
      vertical -= 48;
    }
    return { horizontal, vertical, menuToLeft };
  };
  const onOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    (event) => {
      if (!disabled) {
        event.preventDefault();
        event.stopPropagation();
        setMenuPosition();
        setOpen(true);
      }
    },
    [disabled, setMenuPosition]
  );
  const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    setOpen(false);
    setQuery("");
    setSelectedRoles(appliedRoles);
    setSelectedBuiltInRole(basicRole);
  }, [appliedRoles, basicRole]);
  const onClickOutside = () => isOpen && onClose();
  const onInputChange = (query2) => {
    if (query2) {
      setQuery(query2);
    } else {
      setQuery("");
    }
  };
  const onSelect = (roles) => {
    setSelectedRoles(roles);
  };
  const onBasicRoleSelect = (role) => {
    setSelectedBuiltInRole(role);
  };
  const onUpdate = (newRoles, newBuiltInRole) => {
    if (onBasicRoleChange && newBuiltInRole && newBuiltInRole !== basicRole) {
      onBasicRoleChange(newBuiltInRole);
    }
    if (canUpdateRoles) {
      onRolesChange(newRoles);
    }
    setQuery("");
    setOpen(false);
  };
  const getOptions = () => {
    const options = roleOptions.map((r) => ({ ...r, delegatable: canUpdateRoles && r.delegatable }));
    if (query && query.trim() !== "") {
      return options.filter((option) => option.name?.toLowerCase().includes(query.toLowerCase()));
    }
    return options;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "div",
    {
      "data-testid": "role-picker",
      style: {
        position: "relative",
        maxWidth: widthPx || maxWidth,
        width: widthPx
      },
      ref,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ClickOutsideWrapper, { onClick: onClickOutside, useCapture: false, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _RolePickerInput__WEBPACK_IMPORTED_MODULE_5__.RolePickerInput,
          {
            basicRole: selectedBuiltInRole,
            appliedRoles: selectedRoles,
            query,
            onQueryChange: onInputChange,
            onOpen,
            onClose,
            isFocused: isOpen,
            disabled,
            showBasicRole,
            width: widthPx,
            isLoading
          }
        ),
        isOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Portal, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _RolePickerMenu__WEBPACK_IMPORTED_MODULE_6__.RolePickerMenu,
          {
            options: getOptions(),
            isFiltered: query.trim() !== "",
            basicRole: selectedBuiltInRole,
            appliedRoles,
            onBasicRoleSelect,
            onSelect,
            onUpdate,
            showGroups: query.length === 0 || query.trim() === "",
            basicRoleDisabled,
            disabledMessage: basicRoleDisabledMessage,
            showBasicRole,
            updateDisabled: basicRoleDisabled && !canUpdateRoles,
            apply,
            offset,
            menuLeft
          }
        ) }) })
      ] })
    }
  );
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/RolePickerInput.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePickerInput: () => (/* binding */ RolePickerInput),
/* harmony export */   RolesLabel: () => (/* binding */ RolesLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/commonStyles.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/mixins.ts");
/* harmony import */ var _ValueContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/RolePicker/ValueContainer.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/RolePicker/constants.ts");









const stopPropagation = (event) => event.stopPropagation();
const RolePickerInput = ({
  appliedRoles,
  basicRole,
  disabled,
  isFocused,
  query,
  showBasicRole,
  width,
  isLoading,
  onOpen,
  onClose,
  onQueryChange,
  ...rest
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getRolePickerInputStyles, false, !!isFocused, !!disabled, false, width);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  });
  const onInputChange = (event) => {
    const query2 = event.target?.value;
    onQueryChange(query2);
  };
  const showBasicRoleOnLabel = showBasicRole && basicRole !== "None";
  return !isFocused ? (
    // TODO: fix keyboard a11y
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.wrapper, styles.selectedRoles), onMouseDown: onOpen, children: [
      showBasicRoleOnLabel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ValueContainer__WEBPACK_IMPORTED_MODULE_11__.ValueContainer, { children: basicRole }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        RolesLabel,
        {
          appliedRoles,
          numberOfRoles: appliedRoles.length,
          showBuiltInRole: showBasicRoleOnLabel
        }
      ),
      isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.spinner, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Spinner, { size: 16, inline: true }) })
    ] })
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.wrapper, children: [
    showBasicRoleOnLabel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ValueContainer__WEBPACK_IMPORTED_MODULE_11__.ValueContainer, { children: basicRole }),
    appliedRoles.map((role) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ValueContainer__WEBPACK_IMPORTED_MODULE_11__.ValueContainer, { children: role.group + ":" + (role.displayName || role.name) }, role.uid)),
    !disabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      "input",
      {
        ...rest,
        className: styles.input,
        ref: inputRef,
        onMouseDown: stopPropagation,
        onChange: onInputChange,
        "data-testid": "role-picker-input",
        placeholder: isFocused ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("role-picker.input.placeholder-select-role", "Select role") : void 0,
        value: query
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.suffix, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "angle-up", className: styles.dropdownIndicator, onMouseDown: onClose }) })
  ] });
};
RolePickerInput.displayName = "RolePickerInput";
const RolesLabel = ({ showBuiltInRole, numberOfRoles, appliedRoles }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)((theme) => getTooltipStyles(theme));
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: !!numberOfRoles ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tooltip,
    {
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.tooltip, children: appliedRoles?.map((role) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: role.group + ":" + (role.displayName || role.name) }, role.uid)) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ValueContainer__WEBPACK_IMPORTED_MODULE_11__.ValueContainer, { children: `${showBuiltInRole ? "+" : ""}${numberOfRoles} role${numberOfRoles > 1 ? "s" : ""}` })
    }
  ) : !showBuiltInRole && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ValueContainer__WEBPACK_IMPORTED_MODULE_11__.ValueContainer, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "role-picker.input.no-roles", children: "No roles assigned" }) }) });
};
const getRolePickerInputStyles = (theme, invalid, focused, disabled, withPrefix, width) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.getInputStyles)({ theme, invalid });
  return {
    wrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
      styles.wrapper,
      (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.sharedInputStyle)(theme, invalid),
      focused && (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)((0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_10__.getFocusStyles)(theme)),
      disabled && styles.inputDisabled,
      (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        minWidth: width || _constants__WEBPACK_IMPORTED_MODULE_12__.ROLE_PICKER_WIDTH + "px",
        width,
        minHeight: "32px",
        maxHeight: "200px",
        overflow: "scroll",
        overflowX: "hidden",
        overflowY: "auto",
        height: "auto",
        flexDirection: "row",
        paddingRight: theme.spacing(1),
        maxWidth: "100%",
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        position: "relative",
        boxSizing: "border-box",
        cursor: "default"
      }),
      withPrefix && (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        paddingLeft: 0
      })
    ),
    input: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
      (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.sharedInputStyle)(theme, invalid),
      (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        maxWidth: "120px",
        border: "none",
        cursor: focused ? "default" : "pointer"
      })
    ),
    suffix: styles.suffix,
    dropdownIndicator: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "pointer"
    }),
    selectedRoles: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer"
    }),
    tooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      p: {
        marginBottom: theme.spacing(0.5)
      }
    }),
    spinner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      flexGrow: 1,
      justifyContent: "flex-end"
    })
  };
};
const getTooltipStyles = (theme) => ({
  tooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    p: {
      marginBottom: theme.spacing(0.5)
    }
  })
});


/***/ }),

/***/ "./public/app/core/components/RolePicker/RolePickerMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePickerMenu: () => (/* binding */ RolePickerMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Select/getSelectStyles.ts");
/* harmony import */ var _BuiltinRoleSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/RolePicker/BuiltinRoleSelector.tsx");
/* harmony import */ var _RoleMenuGroupsSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/RolePicker/RoleMenuGroupsSection.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/RolePicker/constants.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/RolePicker/styles.ts");











var GroupType = /* @__PURE__ */ ((GroupType2) => {
  GroupType2["fixed"] = "fixed";
  GroupType2["custom"] = "custom";
  GroupType2["plugin"] = "plugin";
  return GroupType2;
})(GroupType || {});
const fixedRoleGroupNames = {
  ldap: "LDAP",
  current: "Current org"
};
const tooltipMessage = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "role-picker.menu.tooltip", children: [
  'You can now select the "No basic role" option and add permissions to your custom needs. You can find more information in\xA0',
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink,
    {
      href: "https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/#organization-roles",
      variant: "bodySmall",
      external: true,
      children: "our documentation"
    }
  ),
  "."
] });
const RolePickerMenu = ({
  basicRole,
  options,
  isFiltered,
  appliedRoles,
  showGroups,
  basicRoleDisabled,
  disabledMessage,
  showBasicRole,
  onSelect,
  onBasicRoleSelect,
  onUpdate,
  updateDisabled,
  offset,
  menuLeft,
  apply
}) => {
  const [selectedOptions, setSelectedOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(appliedRoles);
  const [selectedBuiltInRole, setSelectedBuiltInRole] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(basicRole);
  const [rolesCollection, setRolesCollection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
  const subMenuNode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useTheme2)();
  const styles = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_9__.getSelectStyles)(theme);
  const customStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_13__.getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    onSelect(selectedOptions);
  }, [selectedOptions, onSelect]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (onBasicRoleSelect && selectedBuiltInRole) {
      onBasicRoleSelect(selectedBuiltInRole);
    }
  }, [selectedBuiltInRole, onBasicRoleSelect]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const customRoles = options.filter(filterCustomRoles).sort(sortRolesByName);
    const fixedRoles = options.filter(filterFixedRoles).sort(sortRolesByName);
    const pluginRoles = options.filter(filterPluginsRoles).sort(sortRolesByName);
    const optionGroups = {
      fixed: convertRolesToGroupOptions(fixedRoles).sort((a, b) => a.name.localeCompare(b.name)),
      custom: convertRolesToGroupOptions(customRoles).sort((a, b) => a.name.localeCompare(b.name)),
      plugin: convertRolesToGroupOptions(pluginRoles).sort((a, b) => a.name.localeCompare(b.name))
    };
    setRolesCollection({
      fixed: {
        groupType: "fixed" /* fixed */,
        optionGroup: optionGroups.fixed,
        renderedName: `Fixed roles`,
        roles: fixedRoles
      },
      custom: {
        groupType: "custom" /* custom */,
        optionGroup: optionGroups.custom,
        renderedName: `Custom roles`,
        roles: customRoles
      },
      plugin: {
        groupType: "plugin" /* plugin */,
        optionGroup: optionGroups.plugin,
        renderedName: `Plugin roles`,
        roles: pluginRoles
      }
    });
  }, [options]);
  const getSelectedGroupOptions = (group) => {
    const selectedGroupOptions = [];
    for (const role of selectedOptions) {
      if (getRoleGroup(role) === group) {
        selectedGroupOptions.push(role);
      }
    }
    return selectedGroupOptions;
  };
  const groupSelected = (groupType, group) => {
    const selectedGroupOptions = getSelectedGroupOptions(group);
    const groupOptions = rolesCollection[groupType]?.optionGroup.find((g) => g.value === group);
    return selectedGroupOptions.length > 0 && selectedGroupOptions.length >= groupOptions.options.length;
  };
  const groupPartiallySelected = (groupType, group) => {
    const selectedGroupOptions = getSelectedGroupOptions(group);
    const groupOptions = rolesCollection[groupType]?.optionGroup.find((g) => g.value === group);
    return selectedGroupOptions.length > 0 && selectedGroupOptions.length < groupOptions.options.length;
  };
  const changeableGroupRolesSelected = (groupType, group) => {
    const selectedGroupOptions = getSelectedGroupOptions(group);
    const changeableGroupOptions = selectedGroupOptions.filter((role) => role.delegatable && !role.mapped);
    const groupOptions = rolesCollection[groupType]?.optionGroup.find((g) => g.value === group);
    return changeableGroupOptions.length > 0 && changeableGroupOptions.length < groupOptions.options.length;
  };
  const onChange = (option) => {
    if (selectedOptions.find((role) => role.uid === option.uid && !role.mapped)) {
      setSelectedOptions(selectedOptions.filter((role) => role.uid !== option.uid));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const onGroupChange = (groupType, value) => {
    const group = rolesCollection[groupType]?.optionGroup.find((g) => {
      return g.value === value;
    });
    if (!group) {
      return;
    }
    if (groupSelected(groupType, value) || changeableGroupRolesSelected(groupType, value)) {
      const mappedGroupOptions = selectedOptions.filter(
        (option) => group.options.find((role) => role.uid === option.uid && option.mapped)
      );
      const restOptions = selectedOptions.filter((role) => !group.options.find((option) => role.uid === option.uid));
      setSelectedOptions([...restOptions, ...mappedGroupOptions]);
    } else {
      const mappedGroupOptions = selectedOptions.filter(
        (option) => group.options.find((role) => role.uid === option.uid && role.delegatable)
      );
      const groupOptions = group.options.filter(
        (role) => role.delegatable && !selectedOptions.find((option) => role.uid === option.uid && option.mapped)
      );
      const restOptions = selectedOptions.filter((role) => !group.options.find((option) => role.uid === option.uid));
      setSelectedOptions([...restOptions, ...groupOptions, ...mappedGroupOptions]);
    }
  };
  const onSelectedBuiltinRoleChange = (newRole) => {
    setSelectedBuiltInRole(newRole);
  };
  const onClearInternal = async () => {
    const mappedRoles = selectedOptions.filter((role) => role.mapped);
    const nonDelegatableRoles = options.filter(
      (role) => selectedOptions.find((option) => role.uid === option.uid && !role.delegatable)
    );
    setSelectedOptions([...mappedRoles, ...nonDelegatableRoles]);
  };
  const onClearSubMenu = (group) => {
    const options2 = selectedOptions.filter((role) => {
      const roleGroup = getRoleGroup(role);
      return roleGroup !== group || role.mapped;
    });
    setSelectedOptions(options2);
  };
  const onUpdateInternal = () => {
    onUpdate(selectedOptions, selectedBuiltInRole);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
        styles.menu,
        customStyles.menuWrapper,
        { [customStyles.menuLeft]: menuLeft },
        (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
          top: `${offset.vertical}px`,
          left: !menuLeft ? `${offset.horizontal}px` : "unset",
          right: menuLeft ? `${offset.horizontal}px` : "unset"
        })
      ),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: customStyles.menu, "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("role-picker.menu-aria-label", "Role picker menu"), children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.ScrollContainer,
            {
              maxHeight: `${_constants__WEBPACK_IMPORTED_MODULE_12__.MENU_MAX_HEIGHT}px`,
              scrollbarWidth: "none",
              children: [
                showBasicRole && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: customStyles.menuSection, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _BuiltinRoleSelector__WEBPACK_IMPORTED_MODULE_10__.BuiltinRoleSelector,
                  {
                    value: selectedBuiltInRole,
                    onChange: onSelectedBuiltinRoleChange,
                    disabled: basicRoleDisabled,
                    disabledMesssage: disabledMessage,
                    tooltipMessage
                  }
                ) }),
                Object.entries(rolesCollection).map(([groupId, collection]) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _RoleMenuGroupsSection__WEBPACK_IMPORTED_MODULE_11__.RoleMenuGroupsSection,
                  {
                    roles: collection.roles,
                    isFiltered,
                    renderedName: collection.renderedName,
                    showGroups,
                    optionGroups: collection.optionGroup,
                    groupSelected: (group) => groupSelected(collection.groupType, group),
                    groupPartiallySelected: (group) => groupPartiallySelected(collection.groupType, group),
                    onGroupChange: (group) => onGroupChange(collection.groupType, group),
                    subMenuNode: subMenuNode?.current,
                    selectedOptions,
                    onRoleChange: onChange,
                    onClearSubMenu,
                    showOnLeftSubMenu: menuLeft
                  },
                  groupId
                ))
              ]
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: customStyles.menuButtonRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { justifyContent: "flex-end", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", fill: "text", onClick: onClearInternal, disabled: updateDisabled, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "role-picker.menu.clear-button", children: "Clear all" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { size: "sm", onClick: onUpdateInternal, disabled: updateDisabled, children: apply ? `Apply` : `Update` })
          ] }) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: subMenuNode })
      ]
    }
  );
};
const filterCustomRoles = (option) => !option.name?.startsWith("fixed:") && !option.name.startsWith("plugins:");
const filterFixedRoles = (option) => option.name?.startsWith("fixed:");
const filterPluginsRoles = (option) => option.name?.startsWith("plugins:");
const convertRolesToGroupOptions = (roles) => {
  const groupsMap = {};
  roles.forEach((role) => {
    const groupId = getRoleGroup(role);
    const groupName = getRoleGroupName(role);
    if (!groupsMap[groupId]) {
      groupsMap[groupId] = { name: groupName, roles: [] };
    }
    groupsMap[groupId].roles.push(role);
  });
  const groups = Object.entries(groupsMap).map(([groupId, groupEntry]) => {
    return {
      name: fixedRoleGroupNames[groupId] || capitalize(groupEntry.name),
      value: groupId,
      options: groupEntry.roles.sort(sortRolesByName)
    };
  });
  return groups;
};
const getRoleGroup = (role) => {
  const prefix = getRolePrefix(role);
  const name = getRoleGroupName(role);
  return `${prefix}:${name}`;
};
const getRoleGroupName = (role) => {
  return role.group || "Other";
};
const getRolePrefix = (role) => {
  const prefixEnd = role.name.indexOf(":");
  if (prefixEnd < 0) {
    return "unknown";
  }
  return role.name.substring(0, prefixEnd);
};
const sortRolesByName = (a, b) => a.name.localeCompare(b.name);
const capitalize = (s) => {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/RolePickerSubMenu.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePickerSubMenu: () => (/* binding */ RolePickerSubMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Select/getSelectStyles.ts");
/* harmony import */ var _RoleMenuOption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/RolePicker/RoleMenuOption.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/RolePicker/constants.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/RolePicker/styles.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/RolePicker/utils.ts");










const RolePickerSubMenu = ({
  options,
  selectedOptions,
  disabledOptions,
  onSelect,
  onClear,
  showOnLeft
}) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useTheme2)();
  const styles = (0,_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_7__.getSelectStyles)(theme);
  const customStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(_styles__WEBPACK_IMPORTED_MODULE_10__.getStyles);
  const onClearInternal = async () => {
    if (onClear) {
      onClear();
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "div",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(customStyles.subMenu, { [customStyles.subMenuLeft]: showOnLeft }),
      "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("role-picker.sub-menu-aria-label", "Role picker submenu"),
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ScrollContainer, { maxHeight: `${_constants__WEBPACK_IMPORTED_MODULE_9__.MENU_MAX_HEIGHT}px`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.optionBody, children: options.map((option, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _RoleMenuOption__WEBPACK_IMPORTED_MODULE_8__.RoleMenuOption,
          {
            data: option,
            useFilteredDisplayName: false,
            isSelected: !!(option.uid && (!!selectedOptions.find((opt) => opt.uid === option.uid) || disabledOptions?.find((opt) => opt.uid === option.uid))),
            disabled: !!(option.uid && disabledOptions?.find((opt) => opt.uid === option.uid)) || (0,_utils__WEBPACK_IMPORTED_MODULE_11__.isNotDelegatable)(option),
            mapped: !!(option.uid && selectedOptions.find((opt) => opt.uid === option.uid && opt.mapped)),
            onChange: onSelect,
            hideDescription: true
          },
          i
        )) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: customStyles.subMenuButtonRow, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Stack, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Button, { size: "sm", fill: "text", onClick: onClearInternal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "role-picker.sub-menu.clear-button", children: "Clear" }) }) }) })
      ]
    }
  );
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/TeamRolePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamRolePicker: () => (/* binding */ TeamRolePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _RolePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/RolePicker.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");








const TeamRolePicker = ({
  teamId,
  roleOptions,
  disabled,
  roles,
  onApplyRoles,
  pendingRoles,
  apply = false,
  maxWidth,
  width,
  isLoading
}) => {
  const [{ loading, value: appliedRoles = roles || [] }, getTeamRoles] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    try {
      if (roles) {
        return roles;
      }
      if (apply && Boolean(pendingRoles?.length)) {
        return pendingRoles;
      }
      if (app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesList) && teamId > 0) {
        return await (0,_api__WEBPACK_IMPORTED_MODULE_6__.fetchTeamRoles)(teamId);
      }
    } catch (e) {
      console.error("Error loading options", e);
    }
    return [];
  }, [teamId, pendingRoles, roles]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getTeamRoles();
  }, [getTeamRoles]);
  const onRolesChange = async (roles2) => {
    if (!apply) {
      await (0,_api__WEBPACK_IMPORTED_MODULE_6__.updateTeamRoles)(roles2, teamId);
      await getTeamRoles();
    } else if (onApplyRoles) {
      onApplyRoles(roles2);
    }
  };
  const canUpdateRoles = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesAdd) && app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionTeamsRolesRemove);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _RolePicker__WEBPACK_IMPORTED_MODULE_5__.RolePicker,
    {
      apply,
      onRolesChange,
      roleOptions,
      appliedRoles,
      isLoading: loading || isLoading,
      disabled,
      basicRoleDisabled: true,
      canUpdateRoles,
      maxWidth,
      width
    }
  );
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/ValueContainer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValueContainer: () => (/* binding */ ValueContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/getSelectStyles.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const ValueContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ children, iconName }, ref) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, ref, children: [
    iconName && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: iconName, size: "xs" }),
    children
  ] });
});
ValueContainer.displayName = "ValueContainer";
const getStyles = (theme) => {
  const { prefix } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.getInputStyles)({ theme });
  const { multiValueContainer } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.getSelectStyles)(theme);
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
      prefix,
      multiValueContainer,
      (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        position: "relative",
        padding: theme.spacing(0.5, 1, 0.5, 1),
        svg: {
          marginRight: theme.spacing(0.5)
        }
      })
    )
  };
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/api.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchRoleOptions: () => (/* binding */ fetchRoleOptions),
/* harmony export */   fetchTeamRoles: () => (/* binding */ fetchTeamRoles),
/* harmony export */   fetchUserRoles: () => (/* binding */ fetchUserRoles),
/* harmony export */   updateTeamRoles: () => (/* binding */ updateTeamRoles),
/* harmony export */   updateUserRoles: () => (/* binding */ updateUserRoles)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/RolePicker/utils.ts");



const fetchRoleOptions = async (orgId) => {
  let rolesUrl = "/api/access-control/roles?delegatable=true";
  if (orgId) {
    rolesUrl += `&targetOrgId=${orgId}`;
  }
  const roles = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(rolesUrl);
  if (!roles || !roles.length) {
    return [];
  }
  return roles.map(_utils__WEBPACK_IMPORTED_MODULE_1__.addDisplayNameForFixedRole).map(_utils__WEBPACK_IMPORTED_MODULE_1__.addFilteredDisplayName);
};
const fetchUserRoles = async (userId, orgId) => {
  let userRolesUrl = `/api/access-control/users/${userId}/roles?includeMapped=true&includeHidden=true`;
  if (orgId) {
    userRolesUrl += `&targetOrgId=${orgId}`;
  }
  try {
    const roles = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(userRolesUrl);
    if (!roles || !roles.length) {
      return [];
    }
    return roles.map(_utils__WEBPACK_IMPORTED_MODULE_1__.addDisplayNameForFixedRole).map(_utils__WEBPACK_IMPORTED_MODULE_1__.addFilteredDisplayName);
  } catch (error) {
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(error)) {
      error.isHandled = true;
    }
    return [];
  }
};
const updateUserRoles = (roles, userId, orgId) => {
  let userRolesUrl = `/api/access-control/users/${userId}/roles`;
  if (orgId) {
    userRolesUrl += `?targetOrgId=${orgId}`;
  }
  const filteredRoles = roles.filter((role) => !role.mapped);
  const roleUids = filteredRoles.flatMap((x) => x.uid);
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(userRolesUrl, {
    orgId,
    roleUids
  });
};
const fetchTeamRoles = async (teamId, orgId) => {
  let teamRolesUrl = `/api/access-control/teams/${teamId}/roles`;
  if (orgId) {
    teamRolesUrl += `?targetOrgId=${orgId}`;
  }
  try {
    const roles = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(teamRolesUrl);
    if (!roles || !roles.length) {
      return [];
    }
    return roles.map(_utils__WEBPACK_IMPORTED_MODULE_1__.addDisplayNameForFixedRole).map(_utils__WEBPACK_IMPORTED_MODULE_1__.addFilteredDisplayName);
  } catch (error) {
    if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.isFetchError)(error)) {
      error.isHandled = true;
    }
    return [];
  }
};
const updateTeamRoles = (roles, teamId, orgId) => {
  let teamRolesUrl = `/api/access-control/teams/${teamId}/roles`;
  if (orgId) {
    teamRolesUrl += `?targetOrgId=${orgId}`;
  }
  const roleUids = roles.flatMap((x) => x.uid);
  return (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().put(teamRolesUrl, {
    orgId,
    roleUids
  });
};


/***/ }),

/***/ "./public/app/core/components/RolePicker/constants.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MENU_MAX_HEIGHT: () => (/* binding */ MENU_MAX_HEIGHT),
/* harmony export */   ROLE_PICKER_MAX_MENU_WIDTH: () => (/* binding */ ROLE_PICKER_MAX_MENU_WIDTH),
/* harmony export */   ROLE_PICKER_MENU_MAX_WIDTH: () => (/* binding */ ROLE_PICKER_MENU_MAX_WIDTH),
/* harmony export */   ROLE_PICKER_MENU_MIN_WIDTH: () => (/* binding */ ROLE_PICKER_MENU_MIN_WIDTH),
/* harmony export */   ROLE_PICKER_SUBMENU_MAX_WIDTH: () => (/* binding */ ROLE_PICKER_SUBMENU_MAX_WIDTH),
/* harmony export */   ROLE_PICKER_SUBMENU_MIN_WIDTH: () => (/* binding */ ROLE_PICKER_SUBMENU_MIN_WIDTH),
/* harmony export */   ROLE_PICKER_WIDTH: () => (/* binding */ ROLE_PICKER_WIDTH)
/* harmony export */ });

const ROLE_PICKER_WIDTH = 360;
const MENU_MAX_HEIGHT = 300;
const ROLE_PICKER_MENU_MIN_WIDTH = 320;
const ROLE_PICKER_MENU_MAX_WIDTH = 360;
const ROLE_PICKER_SUBMENU_MIN_WIDTH = 320;
const ROLE_PICKER_SUBMENU_MAX_WIDTH = 360;
const ROLE_PICKER_MAX_MENU_WIDTH = ROLE_PICKER_MENU_MAX_WIDTH + ROLE_PICKER_SUBMENU_MAX_WIDTH;


/***/ }),

/***/ "./public/app/core/components/RolePicker/styles.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/RolePicker/constants.ts");



const getStyles = (theme) => ({
  hideScrollBar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    ".scrollbar-view": {
      /* Hide scrollbar for Chrome, Safari, and Opera */
      "&::-webkit-scrollbar": {
        display: "none"
      },
      /* Hide scrollbar for Firefox */
      scrollbarWidth: "none"
    }
  }),
  menuWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    maxHeight: "650px",
    position: "absolute",
    zIndex: theme.zIndex.dropdown,
    overflow: "hidden",
    minWidth: "auto"
  }),
  menu: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    minWidth: `${_constants__WEBPACK_IMPORTED_MODULE_1__.ROLE_PICKER_MENU_MIN_WIDTH}px`,
    maxWidth: `${_constants__WEBPACK_IMPORTED_MODULE_1__.ROLE_PICKER_MENU_MAX_WIDTH}px`,
    "& > div": {
      paddingTop: theme.spacing(1)
    }
  }),
  menuLeft: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    flexDirection: "row-reverse"
  }),
  subMenu: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    height: "100%",
    minWidth: `${_constants__WEBPACK_IMPORTED_MODULE_1__.ROLE_PICKER_SUBMENU_MIN_WIDTH}px`,
    maxWidth: `${_constants__WEBPACK_IMPORTED_MODULE_1__.ROLE_PICKER_SUBMENU_MAX_WIDTH}px`,
    display: "flex",
    flexDirection: "column",
    borderLeft: `1px solid ${theme.components.input.borderColor}`,
    "& > div": {
      paddingTop: theme.spacing(1)
    }
  }),
  subMenuLeft: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    borderRight: `1px solid ${theme.components.input.borderColor}`,
    borderLeft: "unset"
  }),
  groupHeader: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(0, 4.5),
    display: "flex",
    alignItems: "center",
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeightBold
  }),
  container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    padding: theme.spacing(1),
    border: `1px ${theme.colors.border.weak} solid`,
    borderRadius: theme.shape.radius.default,
    backgroundColor: theme.colors.background.primary,
    zIndex: theme.zIndex.modal
  }),
  menuSection: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    marginBottom: theme.spacing(2)
  }),
  menuOptionCheckbox: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    display: "flex",
    margin: theme.spacing(0, 1, 0, 0.25)
  }),
  menuButtonRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing(1)
  }),
  menuOptionBody: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    fontWeight: theme.typography.fontWeightRegular,
    padding: theme.spacing(0, 1.5, 0, 0)
  }),
  menuOptionDisabled: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.disabled,
    cursor: "not-allowed"
  }),
  menuOptionExpand: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    position: "absolute",
    right: theme.spacing(2.5),
    color: theme.colors.text.disabled,
    "&:after": {
      content: '">"'
    }
  }),
  menuOptionInfoSign: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    color: theme.colors.text.disabled
  }),
  basicRoleSelector: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    margin: theme.spacing(1, 1.25, 1, 1.5)
  }),
  subMenuPortal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    height: "100%",
    "> div": {
      height: "100%"
    }
  }),
  subMenuButtonRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing(1)
  }),
  checkboxPartiallyChecked: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    input: {
      "&:checked + span": {
        "&:after": {
          borderWidth: "0 3px 0px 0",
          transform: "rotate(90deg)"
        }
      }
    }
  }),
  loadingSpinner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.css)({
    marginLeft: theme.spacing(1)
  })
});


/***/ }),

/***/ "./public/app/core/components/RolePicker/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDisplayNameForFixedRole: () => (/* binding */ addDisplayNameForFixedRole),
/* harmony export */   addFilteredDisplayName: () => (/* binding */ addFilteredDisplayName),
/* harmony export */   isNotDelegatable: () => (/* binding */ isNotDelegatable)
/* harmony export */ });

const isNotDelegatable = (role) => {
  return role.delegatable !== void 0 && !role.delegatable;
};
const addDisplayNameForFixedRole = (role) => {
  const fixedRolePrefix = "fixed:";
  if (!role.displayName && role.name.startsWith(fixedRolePrefix)) {
    let newRoleName = "";
    let rNameWithoutFixedPrefix = role.name.replace(fixedRolePrefix, "");
    newRoleName = rNameWithoutFixedPrefix.replace(/[:\\.]/g, " ");
    role.displayName = newRoleName;
  }
  return role;
};
const addFilteredDisplayName = (role) => {
  if (role.group && role.displayName) {
    role.filteredDisplayName = role.group + ":" + role.displayName;
  }
  return role;
};


/***/ }),

/***/ "./public/app/core/components/Upgrade/ProBadge.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProBadge: () => (/* binding */ ProBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Branding_OrangeBadge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Branding/OrangeBadge.tsx");







const ProBadge = ({ className, experimentId, eventVariant = "", ...htmlProps }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (experimentId) {
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportExperimentView)(experimentId, "test", eventVariant);
    }
  }, [experimentId, eventVariant]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Branding_OrangeBadge__WEBPACK_IMPORTED_MODULE_5__.OrangeBadge, { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.badge, className), ...htmlProps });
};
const getStyles = (theme) => {
  return {
    badge: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(1.25)
    })
  };
};


/***/ }),

/***/ "./public/app/features/admin/EnterpriseAuthFeaturesCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnterpriseAuthFeaturesCard: () => (/* binding */ EnterpriseAuthFeaturesCard),
/* harmony export */   isOpenSourceBuildOrUnlicenced: () => (/* binding */ isOpenSourceBuildOrUnlicenced)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/config.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Branding_CloudEnterpriseBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Branding/CloudEnterpriseBadge.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/services/backend_srv.ts");











function EnterpriseAuthFeaturesCard({ page }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  const helpFlags = app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.user.helpFlags1;
  const HELP_FLAG_ENTERPRISE_AUTH = 4;
  const [isDismissed, setDismissed] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Boolean(helpFlags & HELP_FLAG_ENTERPRISE_AUTH));
  const onDismiss = () => {
    app_core_services_backend_srv__WEBPACK_IMPORTED_MODULE_12__.backendSrv.put(`/api/user/helpflags/${HELP_FLAG_ENTERPRISE_AUTH}`, void 0, { showSuccessAlert: false }).then((res) => {
      app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.user.helpFlags1 = res.helpFlags1;
      setDismissed(true);
    });
  };
  if (isDismissed || !isOpenSourceBuildOrUnlicenced()) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.box, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "row", alignItems: "center", justifyContent: "space-between", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Branding_CloudEnterpriseBadge__WEBPACK_IMPORTED_MODULE_10__.CloudEnterpriseBadge, {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button,
        {
          variant: "secondary",
          fill: "text",
          icon: "times",
          onClick: onDismiss,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.enterprise-auth-features-card.dismiss", "Dismiss")
        }
      )
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 0.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "h4", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.enterprise-auth-features-card.heading", children: "Enterprise authentication" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Text, { variant: "body", color: "secondary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.enterprise-auth-features-card.text", children: [
        "Manage users, teams, and permissions automatically with ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "SAML" }),
        ", ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "SCIM" }),
        ",",
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "LDAP" }),
        ", and ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "RBAC" }),
        " \u2014 available in Grafana Cloud and Enterprise."
      ] }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton,
      {
        href: `https://grafana.com/auth/sign-up/create-user?cloud-auth=&redirectPath=cloud-auth&utm_source=oss-grafana&cnt-admin-${page}`,
        icon: "external-link-alt",
        variant: "secondary",
        target: "_blank",
        rel: "noopener noreferrer",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.enterprise-auth-features-card.learn-more-link", children: "Learn more" })
      }
    ) })
  ] });
}
function getStyles(theme) {
  return {
    cloudBadge: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      background: theme.colors.gradients.brandHorizontal,
      color: theme.colors.primary.contrastText,
      padding: theme.spacing(0.5, 1),
      borderRadius: theme.shape.radius.pill,
      fontSize: theme.typography.bodySmall.fontSize,
      gap: theme.spacing(1)
    }),
    box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(3),
      border: `1px solid ${theme.colors.border.weak}`,
      backgroundColor: theme.colors.background.secondary,
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1.5),
      borderRadius: theme.shape.radius.lg,
      marginTop: theme.spacing(3),
      strong: {
        color: theme.colors.text.primary
      }
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      position: "relative",
      top: -1
    })
  };
}
function isOpenSourceBuildOrUnlicenced() {
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.buildInfo.edition === _grafana_data_internal__WEBPACK_IMPORTED_MODULE_3__.GrafanaEdition.OpenSource) {
    return true;
  }
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.licenseInfo.stateInfo !== "Licensed") {
    return true;
  }
  return false;
}


/***/ }),

/***/ "./public/app/features/admin/utils.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   highlightTrial: () => (/* binding */ highlightTrial),
/* harmony export */   isTrial: () => (/* binding */ isTrial),
/* harmony export */   w3cStandardEmailValidator: () => (/* binding */ w3cStandardEmailValidator)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");


const w3cStandardEmailValidator = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function isTrial() {
  const expiry = _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.licenseInfo?.trialExpiry;
  return !!(expiry && expiry > 0);
}
const highlightTrial = () => isTrial() && _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.config.featureToggles.featureHighlights;


/***/ }),

/***/ "./public/app/features/teams/TeamList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/DeleteButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/Tag.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/UsersIndicator/Avatar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/core/components/RolePicker/TeamRolePicker.tsx");
/* harmony import */ var _admin_EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/admin/EnterpriseAuthFeaturesCard.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/features/teams/state/actions.ts");















const skeletonData = new Array(3).fill(null).map((_, index) => ({
  id: index,
  uid: "",
  memberCount: 0,
  name: "",
  orgId: 0,
  isProvisioned: false
}));
const TeamList = ({
  teams,
  query,
  noTeams,
  hasFetched,
  loadTeams: loadTeams2,
  deleteTeam: deleteTeam2,
  changeQuery: changeQuery2,
  totalPages,
  page,
  rolesLoading,
  changePage: changePage2,
  changeSort: changeSort2
}) => {
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_17__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    loadTeams2(true);
  }, [loadTeams2]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionRolesList)) {
      (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_19__.fetchRoleOptions)().then((roles) => setRoleOptions(roles));
    }
  }, []);
  const canCreate = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionTeamsCreate);
  const displayRolePicker = shouldDisplayRolePicker();
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(
    () => [
      {
        id: "avatarUrl",
        header: "",
        disableGrow: true,
        cell: ({ cell: { value } }) => {
          if (!hasFetched) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { containerClassName: styles.blockSkeleton, width: 24, height: 24, circle: true });
          }
          return value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Avatar, { src: value, alt: "User avatar" });
        }
      },
      {
        id: "name",
        header: "Name",
        cell: ({ cell: { value }, row: { original } }) => {
          if (!hasFetched) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 100 });
          }
          const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionTeamsRead, original);
          if (!canReadTeam) {
            return value;
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.TextLink,
            {
              color: "primary",
              inline: false,
              href: `/org/teams/edit/${original.uid}`,
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("teams.team-list.columns.title-edit-team", "Edit team"),
              children: value
            }
          );
        },
        sortType: "string"
      },
      {
        id: "email",
        header: "Email",
        cell: ({ cell: { value } }) => {
          if (!hasFetched) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 60 });
          }
          return value;
        },
        sortType: "string"
      },
      {
        id: "memberCount",
        header: "Members",
        disableGrow: true,
        cell: ({ cell: { value } }) => {
          if (!hasFetched) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 40 });
          }
          return value;
        },
        sortType: "number"
      },
      ...displayRolePicker ? [
        {
          id: "role",
          header: "Role",
          cell: ({ cell: { value }, row: { original } }) => {
            if (!hasFetched) {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 320, height: 32, containerClassName: styles.blockSkeleton });
            }
            const canSeeTeamRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermissionInMetadata(
              app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionTeamsRolesList,
              original
            );
            return canSeeTeamRoles && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_22__.TeamRolePicker,
              {
                teamId: original.id,
                roles: original.roles || [],
                isLoading: rolesLoading,
                roleOptions,
                width: 40
              }
            );
          }
        }
      ] : [],
      {
        id: "isProvisioned",
        header: "",
        cell: ({ cell: { value } }) => {
          if (!hasFetched) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { width: 240 });
          }
          return !!value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Tag, { colorIndex: 14, name: "Provisioned" });
        }
      },
      {
        id: "actions",
        header: "",
        disableGrow: true,
        cell: ({ row: { original } }) => {
          if (!hasFetched) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", justifyContent: "flex-end", alignItems: "center", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { containerClassName: styles.blockSkeleton, width: 16, height: 16 }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], { containerClassName: styles.blockSkeleton, width: 22, height: 24 })
            ] });
          }
          const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionTeamsRead, original);
          const canDelete = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionTeamsDelete, original);
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "row", justifyContent: "flex-end", gap: 2, children: [
            canReadTeam && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.LinkButton,
              {
                href: `org/teams/edit/${original.uid}`,
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("teams.team-list.columns.aria-label-edit-team", "Edit team {{teamName}}", {
                  teamName: original.name
                }),
                icon: "pen",
                size: "sm",
                variant: "secondary",
                tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("teams.team-list.columns.tooltip-edit-team", "Edit team")
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.DeleteButton,
              {
                "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("teams.team-list.columns.aria-label-delete-button", "Delete team {{teamName}}", {
                  teamName: original.name
                }),
                size: "sm",
                disabled: !canDelete,
                onConfirm: () => deleteTeam2(original.uid)
              }
            )
          ] });
        }
      }
    ],
    [displayRolePicker, hasFetched, rolesLoading, roleOptions, deleteTeam2, styles]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_18__.Page,
    {
      navId: "teams",
      actions: !noTeams ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.LinkButton, { href: canCreate ? "org/teams/new" : "#", disabled: !canCreate, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "teams.team-list.new-team", children: "New Team" }) }) : void 0,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_18__.Page.Contents, { children: [
        noTeams ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.EmptyState,
          {
            variant: "call-to-action",
            button: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.LinkButton, { disabled: !canCreate, href: "org/teams/new", icon: "users-alt", size: "lg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "teams.empty-state.button-title", children: "New team" }) }),
            message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("teams.empty-state.title", "You haven't created any teams yet"),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "teams.empty-state.pro-tip", children: [
              "Assign folder and dashboard permissions to teams instead of users to ease administration.",
              " ",
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.TextLink, { external: true, href: "https://grafana.com/docs/grafana/latest/administration/team-management", children: "Learn more" })
            ] })
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "page-action-bar", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.InlineField, { grow: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.FilterInput,
            {
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("teams.team-list.placeholder-search-teams", "Search teams"),
              value: query,
              onChange: changeQuery2
            }
          ) }) }),
          hasFetched && teams.length === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.EmptyState, { variant: "not-found", message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("teams.empty-state.message", "No teams found") }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { direction: "column", gap: 2, children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InteractiveTable,
              {
                columns,
                data: hasFetched ? teams : skeletonData,
                getRowId: (team) => String(team.id),
                fetchData: changeSort2
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Stack, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Pagination,
              {
                hideWhenSinglePage: true,
                currentPage: page,
                numberOfPages: totalPages,
                onNavigate: changePage2
              }
            ) })
          ] })
        ] }),
        !query && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_admin_EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_23__.EnterpriseAuthFeaturesCard, { page: "teams" })
      ] })
    }
  );
};
function shouldDisplayRolePicker() {
  return app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionTeamsRolesList) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_20__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_21__.AccessControlAction.ActionRolesList);
}
function mapStateToProps(state) {
  return {
    teams: state.teams.teams,
    query: state.teams.query,
    perPage: state.teams.perPage,
    page: state.teams.page,
    noTeams: state.teams.noTeams,
    totalPages: state.teams.totalPages,
    hasFetched: state.teams.hasFetched,
    rolesLoading: state.teams.rolesLoading
  };
}
const mapDispatchToProps = {
  loadTeams: _state_actions__WEBPACK_IMPORTED_MODULE_24__.loadTeams,
  deleteTeam: _state_actions__WEBPACK_IMPORTED_MODULE_24__.deleteTeam,
  changePage: _state_actions__WEBPACK_IMPORTED_MODULE_24__.changePage,
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_24__.changeQuery,
  changeSort: _state_actions__WEBPACK_IMPORTED_MODULE_24__.changeSort
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamList));
const getStyles = () => ({
  blockSkeleton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    lineHeight: 1,
    // needed for things to align properly in the table
    display: "flex"
  })
});


/***/ }),

/***/ "./public/app/features/teams/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTeamGroup: () => (/* binding */ addTeamGroup),
/* harmony export */   changePage: () => (/* binding */ changePage),
/* harmony export */   changeQuery: () => (/* binding */ changeQuery),
/* harmony export */   changeSort: () => (/* binding */ changeSort),
/* harmony export */   deleteTeam: () => (/* binding */ deleteTeam),
/* harmony export */   loadTeam: () => (/* binding */ loadTeam),
/* harmony export */   loadTeamGroups: () => (/* binding */ loadTeamGroups),
/* harmony export */   loadTeams: () => (/* binding */ loadTeams),
/* harmony export */   removeTeamGroup: () => (/* binding */ removeTeamGroup),
/* harmony export */   updateTeam: () => (/* binding */ updateTeam)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var app_core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _navModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/teams/state/reducers.ts");









function loadTeams(initial = false) {
  return async (dispatch, getState) => {
    const { query, page, perPage, sort } = getState().teams;
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsRead)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.teamsLoaded)({ teams: [], totalCount: 0, page: 1, perPage, noTeams: true }));
      return;
    }
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(
      "/api/teams/search",
      (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__.accessControlQueryParam)({ query, page, perpage: perPage, sort })
    );
    let noTeams = false;
    if (initial) {
      noTeams = response.teams.length === 0;
    }
    if (app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.licensedAccessControlEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionTeamsRolesList)) {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.rolesFetchBegin)());
      const teamIds = response?.teams.map((t) => t.id);
      const roles = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post(`/api/access-control/teams/roles/search`, { teamIds });
      response.teams.forEach((t) => {
        t.roles = roles ? roles[t.id] || [] : [];
      });
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.rolesFetchEnd)());
    }
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.teamsLoaded)({ noTeams, ...response }));
  };
}
const loadTeamsWithDebounce = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)((dispatch) => dispatch(loadTeams()), 500);
function loadTeam(uid) {
  return async (dispatch) => {
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/teams/${uid}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_4__.accessControlQueryParam)());
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.teamLoaded)(response));
    dispatch((0,app_core_actions__WEBPACK_IMPORTED_MODULE_2__.updateNavIndex)((0,_navModel__WEBPACK_IMPORTED_MODULE_6__.buildNavModel)(response)));
  };
}
function deleteTeam(uid) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/teams/${uid}`);
    await app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.fetchUserPermissions();
    dispatch(loadTeams());
  };
}
function changeQuery(query) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.queryChanged)(query));
    loadTeamsWithDebounce(dispatch);
  };
}
function changePage(page) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.pageChanged)(page));
    dispatch(loadTeams());
  };
}
function changeSort({ sortBy }) {
  const sort = sortBy.length ? `${sortBy[0].id}-${sortBy[0].desc ? "desc" : "asc"}` : void 0;
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.sortChanged)(sort));
    dispatch(loadTeams());
  };
}
function updateTeam(name, email) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().put(`/api/teams/${team.uid}`, { name, email });
    dispatch(loadTeam(team.uid));
  };
}
function loadTeamGroups() {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/teams/${team.uid}/groups`);
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_7__.teamGroupsLoaded)(response));
  };
}
function addTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post(`/api/teams/${team.uid}/groups`, { groupId });
    dispatch(loadTeamGroups());
  };
}
function removeTeamGroup(groupId) {
  return async (dispatch, getStore) => {
    const team = getStore().team.team;
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/teams/${team.uid}/groups?groupId=${encodeURIComponent(groupId)}`);
    dispatch(loadTeamGroups());
  };
}


/***/ }),

/***/ "./public/app/features/teams/state/navModel.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildNavModel: () => (/* binding */ buildNavModel),
/* harmony export */   getTeamLoadingNav: () => (/* binding */ getTeamLoadingNav)
/* harmony export */ });
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/utils/licensing.ts");
/* harmony import */ var app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/Upgrade/ProBadge.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var app_types_acl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/types/acl.ts");
/* harmony import */ var img_user_profile_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/img/user_profile.png");










const loadingTeam = {
  avatarUrl: img_user_profile_png__WEBPACK_IMPORTED_MODULE_8__,
  id: 1,
  uid: "",
  name: "Loading",
  email: "loading",
  memberCount: 0,
  permission: app_types_acl__WEBPACK_IMPORTED_MODULE_7__.TeamPermissionLevel.Member,
  accessControl: { isEditor: false },
  orgId: 0,
  updated: "",
  isProvisioned: false
};
function buildNavModel(team) {
  const navModel = {
    img: team.avatarUrl,
    id: "team-" + team.uid,
    subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("teams.build-nav-model.nav-model.subTitle.manage-members-and-settings", "Manage members and settings"),
    url: `org/teams/edit/${team.uid}`,
    text: team.name,
    children: [
      // With RBAC this tab will always be available (but not always editable)
      // With Legacy it will be hidden by hideTabsFromNonTeamAdmin should the user not be allowed to see it
      {
        active: false,
        icon: "sliders-v-alt",
        id: `team-settings-${team.uid}`,
        text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("teams.build-nav-model.nav-model.text.settings", "Settings"),
        url: `org/teams/edit/${team.uid}/settings`
      }
    ]
  };
  if (team === loadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
    navModel.children.unshift({
      active: false,
      icon: "users-alt",
      id: `team-members-${team.uid}`,
      text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("teams.build-nav-model.text.members", "Members"),
      url: `org/teams/edit/${team.uid}/members`
    });
  }
  const teamGroupSync = {
    active: false,
    icon: "sync",
    id: `team-groupsync-${team.uid}`,
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("teams.build-nav-model.team-group-sync.text.external-group-sync", "External group sync"),
    url: `org/teams/edit/${team.uid}/groupsync`
  };
  const isLoadingTeam = team === loadingTeam;
  if ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_5__.highlightTrial)()) {
    teamGroupSync.tabSuffix = () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({ experimentId: isLoadingTeam ? "" : "feature-highlights-team-sync-badge", eventVariant: "trial" });
  }
  if ((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.featureEnabled)("teamsync")) {
    if (isLoadingTeam || app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
      navModel.children.push(teamGroupSync);
    }
  } else if (app_core_config__WEBPACK_IMPORTED_MODULE_3__["default"].featureToggles.featureHighlights) {
    navModel.children.push({
      ...teamGroupSync,
      tabSuffix: () => (0,app_core_components_Upgrade_ProBadge__WEBPACK_IMPORTED_MODULE_2__.ProBadge)({ experimentId: isLoadingTeam ? "" : "feature-highlights-team-sync-badge" })
    });
  }
  return navModel;
}
function getTeamLoadingNav(pageName) {
  const main = buildNavModel(loadingTeam);
  let node;
  for (const child of main.children) {
    if (child.id.indexOf(pageName) > 0) {
      child.active = true;
      node = child;
      break;
    }
  }
  return {
    main,
    node
  };
}


/***/ }),

/***/ "./public/app/types/acl.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchQueryType: () => (/* binding */ SearchQueryType),
/* harmony export */   TeamPermissionLevel: () => (/* binding */ TeamPermissionLevel)
/* harmony export */ });

var TeamPermissionLevel = /* @__PURE__ */ ((TeamPermissionLevel2) => {
  TeamPermissionLevel2[TeamPermissionLevel2["Admin"] = 4] = "Admin";
  TeamPermissionLevel2[TeamPermissionLevel2["Member"] = 0] = "Member";
  return TeamPermissionLevel2;
})(TeamPermissionLevel || {});
var SearchQueryType = /* @__PURE__ */ ((SearchQueryType2) => {
  SearchQueryType2["Folder"] = "dash-folder";
  SearchQueryType2["Dashboard"] = "dash-db";
  return SearchQueryType2;
})(SearchQueryType || {});


/***/ }),

/***/ "./public/img/user_profile.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/img/user_profile.4d4fc140.png";

/***/ })

}]);
//# sourceMappingURL=TeamList.096fe302035974071d42.js.map