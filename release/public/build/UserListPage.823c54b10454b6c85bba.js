"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserListPage"],{

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

/***/ "./public/app/core/components/RolePicker/UserRolePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRolePicker: () => (/* binding */ UserRolePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _RolePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePicker/RolePicker.tsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");








const UserRolePicker = ({
  basicRole,
  roles,
  userId,
  orgId,
  onBasicRoleChange,
  roleOptions,
  disabled,
  basicRoleDisabled,
  basicRoleDisabledMessage,
  apply = false,
  onApplyRoles,
  pendingRoles,
  maxWidth,
  width,
  isLoading
}) => {
  const [{ loading, value: appliedRoles = roles || [] }, getUserRoles] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    try {
      if (roles) {
        return roles;
      }
      if (apply && Boolean(pendingRoles?.length)) {
        return pendingRoles;
      }
      if (app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionUserRolesList) && userId > 0) {
        return await (0,_api__WEBPACK_IMPORTED_MODULE_6__.fetchUserRoles)(userId, orgId);
      }
    } catch (e) {
      console.error("Error loading options");
    }
    return [];
  }, [orgId, userId, pendingRoles, roles]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (orgId) {
      getUserRoles();
    }
  }, [getUserRoles, orgId]);
  const onRolesChange = async (roles2) => {
    if (!apply) {
      await (0,_api__WEBPACK_IMPORTED_MODULE_6__.updateUserRoles)(roles2, userId, orgId);
      await getUserRoles();
    } else if (onApplyRoles) {
      onApplyRoles(roles2, userId, orgId);
    }
  };
  const canUpdateRoles = app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionUserRolesAdd) && app_core_core__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionUserRolesRemove);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _RolePicker__WEBPACK_IMPORTED_MODULE_5__.RolePicker,
    {
      appliedRoles,
      basicRole,
      onRolesChange,
      onBasicRoleChange,
      roleOptions,
      isLoading: loading || isLoading,
      disabled,
      basicRoleDisabled,
      basicRoleDisabledMessage,
      showBasicRole: true,
      apply,
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

/***/ "./public/app/core/components/RolePickerDrawer/RolePickerBadges.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePickerBadges: () => (/* binding */ RolePickerBadges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _RolePickerDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/RolePickerDrawer/RolePickerDrawer.tsx");








const RolePickerBadges = ({ disabled, user }) => {
  const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const { badge, badgeDisabled } = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const badgeStyle = disabled ? badgeDisabled : badge;
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    defaultValues: {
      name: user.name,
      role: user.role,
      roles: user.roles
    }
  });
  const { watch } = methods;
  const drawerControl = () => {
    if (!disabled) {
      setIsDrawerOpen(true);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { gap: 1, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge, { className: badgeStyle, color: "blue", onClick: drawerControl, text: watch("role") }),
      user.roles && user.roles.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Badge,
        {
          className: badgeStyle,
          color: "blue",
          onClick: drawerControl,
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("role-picker-drawer.user-count", "+{{numUsers}}", { numUsers: user.roles.length })
        }
      )
    ] }),
    isDrawerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, { ...methods, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RolePickerDrawer__WEBPACK_IMPORTED_MODULE_8__.RolePickerDrawer, { onClose: () => setIsDrawerOpen(false) }) })
  ] });
};
function getStyles(theme) {
  return {
    badge: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "pointer"
    }),
    badgeDisabled: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      cursor: "not-allowed"
    })
  };
}


/***/ }),

/***/ "./public/app/core/components/RolePickerDrawer/RolePickerDrawer.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePickerDrawer: () => (/* binding */ RolePickerDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/orgs.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Drawer/Drawer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");






const roleOptions = Object.keys(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.OrgRole).map(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.toOption);
const drawerSubtitle = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "role-picker.title.description", children: [
  "Assign roles to users to ensure granular control over access to Grafana\u2018s features and resources. Find out more in our",
  " ",
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextLink,
    {
      external: true,
      href: "https://grafana.com/docs/grafana/latest/administration/roles-and-permissions/#organization-roles",
      children: "documentation"
    }
  ),
  "."
] });
const RolePickerDrawer = ({ onClose }) => {
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useFormContext)();
  const { control, getValues, setValue } = methods;
  const [name, roles] = getValues(["name", "roles"]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Drawer, { title: name, subtitle: drawerSubtitle, onClose, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("role-picker-drawer.basic-roles.label", "Basic Roles"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller,
    {
      name: "role",
      control,
      render: ({ field: { onChange, ref, ...fields } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.RadioButtonGroup,
        {
          ...fields,
          options: roleOptions,
          onChange: (v) => {
            setValue("roleCollection", [v, ...roles]);
            onChange(v);
          }
        }
      )
    }
  ) }) });
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

/***/ "./public/app/features/admin/OrgRolePicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgRolePicker: () => (/* binding */ OrgRolePicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/types/orgs.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");





const basicRoles = Object.values(_grafana_data__WEBPACK_IMPORTED_MODULE_1__.OrgRole).filter((r) => r !== _grafana_data__WEBPACK_IMPORTED_MODULE_1__.OrgRole.None);
const options = basicRoles.map((r) => ({ label: r, value: r }));
function OrgRolePicker({ value, onChange, "aria-label": ariaLabel, inputId, autoFocus, ...restProps }) {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Select,
    {
      inputId,
      value,
      options,
      onChange: (val) => onChange(val.value ?? _grafana_data__WEBPACK_IMPORTED_MODULE_1__.OrgRole.None),
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.org-role-picker.placeholder-choose-role", "Choose role..."),
      "aria-label": ariaLabel,
      autoFocus,
      ...restProps
    }
  );
}


/***/ }),

/***/ "./public/app/features/admin/UserListAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListAdminPage: () => (/* binding */ UserListAdminPage),
/* harmony export */   UserListAdminPageContent: () => (/* binding */ UserListAdminPageContent),
/* harmony export */   addExtraFilters: () => (/* binding */ addExtraFilters),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/admin/EnterpriseAuthFeaturesCard.tsx");
/* harmony import */ var _Users_UsersTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/admin/Users/UsersTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/admin/state/actions.ts");














const extraFilters = [];
const addExtraFilters = (filter) => {
  extraFilters.push(filter);
};
const selectors = _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.UserListPage.UserListAdminPage;
const mapDispatchToProps = {
  fetchUsers: _state_actions__WEBPACK_IMPORTED_MODULE_16__.fetchUsers,
  changeQuery: _state_actions__WEBPACK_IMPORTED_MODULE_16__.changeQuery,
  changePage: _state_actions__WEBPACK_IMPORTED_MODULE_16__.changePage,
  changeFilter: _state_actions__WEBPACK_IMPORTED_MODULE_16__.changeFilter,
  changeSort: _state_actions__WEBPACK_IMPORTED_MODULE_16__.changeSort
};
const mapStateToProps = (state) => ({
  users: state.userListAdmin.users,
  query: state.userListAdmin.query,
  showPaging: state.userListAdmin.showPaging,
  totalPages: state.userListAdmin.totalPages,
  page: state.userListAdmin.page,
  filters: state.userListAdmin.filters,
  isLoading: state.userListAdmin.isLoading
});
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
const UserListAdminPageUnConnected = ({
  fetchUsers: fetchUsers2,
  query,
  changeQuery: changeQuery2,
  users,
  showPaging,
  changeFilter: changeFilter2,
  filters,
  totalPages,
  page,
  changePage: changePage2,
  changeSort: changeSort2,
  isLoading
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchUsers2();
  }, [fetchUsers2]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_11__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.actionBar, "data-testid": selectors.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.row, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.FilterInput,
        {
          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
            "admin.user-list-admin-page-un-connected.placeholder-search-login-email",
            "Search user by login, email, or name."
          ),
          autoFocus: true,
          value: query,
          onChange: changeQuery2,
          escapeRegex: false
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.RadioButtonGroup,
        {
          options: [
            { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("admin.user-list-admin-page-un-connected.label.all-users", "All users"), value: false },
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("admin.user-list-admin-page-un-connected.label.active-last-days", "Active last 30 days"),
              value: true
            }
          ],
          onChange: (value) => changeFilter2({ name: "activeLast30Days", value }),
          value: filters.find((f) => f.name === "activeLast30Days")?.value,
          className: styles.filter
        }
      ),
      extraFilters.map((FilterComponent, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FilterComponent, { filters, onChange: changeFilter2, className: styles.filter }, index)),
      app_core_core__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__.AccessControlAction.UsersCreate) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton, { href: "admin/users/create", variant: "primary", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "admin.users-list.create-button", children: "New user" }) })
    ] }) }),
    !isLoading && users.length === 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.EmptyState, { message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("users.empty-state.message", "No users found"), variant: "not-found" }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Users_UsersTable__WEBPACK_IMPORTED_MODULE_15__.UsersTable,
      {
        users,
        showPaging,
        totalPages,
        onChangePage: changePage2,
        currentPage: page,
        fetchData: changeSort2
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EnterpriseAuthFeaturesCard__WEBPACK_IMPORTED_MODULE_14__.EnterpriseAuthFeaturesCard, { page: "users" })
  ] });
};
const UserListAdminPageContent = connector(UserListAdminPageUnConnected);
function UserListAdminPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_11__.Page, { navId: "global-users", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserListAdminPageContent, {}) });
}
const getStyles = (theme) => {
  return {
    filter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("sm")]: {
        margin: 0
      }
    }),
    actionBar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2),
      display: "flex",
      alignItems: "flex-start",
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap"
      }
    }),
    row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "flex-start",
      textAlign: "left",
      marginBottom: theme.spacing(0.5),
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
        gap: theme.spacing(2),
        width: "100%"
      }
    })
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserListAdminPage);


/***/ }),

/***/ "./public/app/features/admin/UserListAnonymousPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListAnonymousDevicesPage: () => (/* binding */ UserListAnonymousDevicesPage),
/* harmony export */   UserListAnonymousDevicesPageContent: () => (/* binding */ UserListAnonymousDevicesPageContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _Users_AnonUsersTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/Users/AnonUsersTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/admin/state/actions.ts");











const mapDispatchToProps = {
  fetchUsersAnonymousDevices: _state_actions__WEBPACK_IMPORTED_MODULE_11__.fetchUsersAnonymousDevices,
  changeAnonUserSort: _state_actions__WEBPACK_IMPORTED_MODULE_11__.changeAnonUserSort,
  changeAnonPage: _state_actions__WEBPACK_IMPORTED_MODULE_11__.changeAnonPage,
  changeAnonQuery: _state_actions__WEBPACK_IMPORTED_MODULE_11__.changeAnonQuery
};
const mapStateToProps = (state) => ({
  devices: state.userListAnonymousDevices.devices,
  query: state.userListAnonymousDevices.query,
  showPaging: state.userListAnonymousDevices.showPaging,
  totalPages: state.userListAnonymousDevices.totalPages,
  page: state.userListAnonymousDevices.page,
  filters: state.userListAnonymousDevices.filters
});
const selectors = _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.UserListPage.UserListAdminPage;
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
const UserListAnonymousDevicesPageUnConnected = ({
  devices,
  fetchUsersAnonymousDevices: fetchUsersAnonymousDevices2,
  query,
  changeAnonQuery: changeAnonQuery2,
  filters,
  showPaging,
  totalPages,
  page,
  changeAnonPage: changeAnonPage2,
  changeAnonUserSort: changeAnonUserSort2
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchUsersAnonymousDevices2();
  }, [fetchUsersAnonymousDevices2]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__.Page.Contents, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.actionBar, "data-testid": selectors.container, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.row, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.FilterInput,
        {
          placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
            "admin.user-list-anonymous-devices-page-un-connected.placeholder-search-devices-by-ip-address",
            "Search devices by IP address."
          ),
          autoFocus: true,
          value: query,
          onChange: changeAnonQuery2
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.RadioButtonGroup,
        {
          options: [
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
                "admin.user-list-anonymous-devices-page-un-connected.label.active-last-days",
                "Active last 30 days"
              ),
              value: true
            }
          ],
          value: filters.find((f) => f.name === "activeLast30Days")?.value,
          className: styles.filter
        }
      )
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Users_AnonUsersTable__WEBPACK_IMPORTED_MODULE_10__.AnonUsersDevicesTable,
      {
        devices,
        showPaging,
        totalPages,
        onChangePage: changeAnonPage2,
        currentPage: page,
        fetchData: changeAnonUserSort2
      }
    )
  ] });
};
const UserListAnonymousDevicesPageContent = connector(UserListAnonymousDevicesPageUnConnected);
function UserListAnonymousDevicesPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_9__.Page, { navId: "anonymous-users", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserListAnonymousDevicesPageContent, {}) });
}
const getStyles = (theme) => {
  return {
    filter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: theme.spacing(0, 1),
      [theme.breakpoints.down("sm")]: {
        margin: 0
      }
    }),
    actionBar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginBottom: theme.spacing(2),
      display: "flex",
      alignItems: "flex-start",
      gap: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap"
      }
    }),
    row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "flex-start",
      textAlign: "left",
      marginBottom: theme.spacing(0.5),
      flexGrow: 1,
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
        gap: theme.spacing(2),
        width: "100%"
      }
    })
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserListAnonymousDevicesPage);


/***/ }),

/***/ "./public/app/features/admin/UserListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserListPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/TabsBar.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tabs/Tab.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _users_UsersListPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/users/UsersListPage.tsx");
/* harmony import */ var _UserListAdminPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/admin/UserListAdminPage.tsx");
/* harmony import */ var _UserListAnonymousPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/admin/UserListAnonymousPage.tsx");
/* harmony import */ var _UserListPublicDashboardPage_UserListPublicDashboardPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/admin/UserListPublicDashboardPage/UserListPublicDashboardPage.tsx");
















var TabView = /* @__PURE__ */ ((TabView2) => {
  TabView2["ADMIN"] = "admin";
  TabView2["ORG"] = "org";
  TabView2["PUBLIC_DASHBOARDS"] = "public-dashboards";
  TabView2["ANON"] = "anon";
  return TabView2;
})(TabView || {});
const selectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_3__.selectors.pages.UserListPage;
const PublicDashboardsTab = ({ view, setView }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
    {
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("users-access-list.tabs.shared-dashboard-users-tab-title", "Shared dashboard users"),
      active: view === "public-dashboards" /* PUBLIC_DASHBOARDS */,
      onChangeTab: () => setView("public-dashboards" /* PUBLIC_DASHBOARDS */),
      "data-testid": selectors.tabs.publicDashboardsUsers
    }
  );
};
const TAB_PAGE_MAP = {
  ["admin" /* ADMIN */]: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserListAdminPage__WEBPACK_IMPORTED_MODULE_14__.UserListAdminPageContent, {}),
  ["org" /* ORG */]: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_users_UsersListPage__WEBPACK_IMPORTED_MODULE_13__.UsersListPageContent, {}),
  ["public-dashboards" /* PUBLIC_DASHBOARDS */]: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserListPublicDashboardPage_UserListPublicDashboardPage__WEBPACK_IMPORTED_MODULE_16__.UserListPublicDashboardPage, {}),
  ["anon" /* ANON */]: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserListAnonymousPage__WEBPACK_IMPORTED_MODULE_15__.UserListAnonymousDevicesPageContent, {})
};
function UserListPage() {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const hasAccessToAdminUsers = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.UsersRead);
  const hasAccessToOrgUsers = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.OrgUsersRead);
  const [view, setView] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(() => {
    if (hasAccessToAdminUsers) {
      return "admin" /* ADMIN */;
    } else if (hasAccessToOrgUsers) {
      return "org" /* ORG */;
    }
    return null;
  });
  const showAdminAndOrgTabs = hasAccessToOrgUsers && hasAccessToAdminUsers;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_12__.Page, { navId: "global-users", children: [
    showAdminAndOrgTabs ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabsBar, { className: styles.tabsMargin, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-list-page.label-all-users", "All users"),
          active: view === "admin" /* ADMIN */,
          onChangeTab: () => setView("admin" /* ADMIN */),
          "data-testid": selectors.tabs.allUsers
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-list-page.label-organization-users", "Organization users"),
          active: view === "org" /* ORG */,
          onChangeTab: () => setView("org" /* ORG */),
          "data-testid": selectors.tabs.orgUsers
        }
      ),
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.anonymousEnabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-list-page.label-anonymous-devices", "Anonymous devices"),
          active: view === "anon" /* ANON */,
          onChangeTab: () => setView("anon" /* ANON */),
          "data-testid": selectors.tabs.anonUserDevices
        }
      ),
      (0,app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_10__.isEmailSharingEnabled)() && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublicDashboardsTab, { view, setView })
    ] }) : (0,app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_10__.isEmailSharingEnabled)() && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TabsBar, { className: styles.tabsMargin, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tab,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-list-page.label-users", "Users"),
          active: view === "org" /* ORG */,
          onChangeTab: () => setView("org" /* ORG */),
          "data-testid": selectors.tabs.users
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PublicDashboardsTab, { view, setView })
    ] }),
    view ? TAB_PAGE_MAP[view] : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_users_UsersListPage__WEBPACK_IMPORTED_MODULE_13__.UsersListPageContent, {})
  ] });
}
const getStyles = (theme) => ({
  tabsMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(3)
  })
});


/***/ }),

/***/ "./public/app/features/admin/UserListPublicDashboardPage/DashboardsListModalButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardsListModal: () => (/* binding */ DashboardsListModal),
/* harmony export */   DashboardsListModalButton: () => (/* binding */ DashboardsListModalButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/LoadingPlaceholder/LoadingPlaceholder.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/SharePublicDashboard/SharePublicDashboardUtils.ts");
/* harmony import */ var _dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/dashboard/api/publicDashboardApi.ts");








const selectors = _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.UserListPage.UsersListPublicDashboardsPage.DashboardsListModal;
const DashboardsListModal = ({ email, onDismiss }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const { data: dashboards, isLoading } = (0,_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_10__.useGetActiveUserDashboardsQuery)(email);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Modal,
    {
      className: styles.modal,
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("public-dashboard-users-access-list.modal.shared-dashboard-modal-title", "Shared dashboards"),
      onDismiss,
      children: isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.loading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LoadingPlaceholder,
        {
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("public-dashboard-users-access-list.dashboard-modal.loading-text", "Loading...")
        }
      ) }) : dashboards?.map((dash) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.listItem, "data-testid": selectors.listItem(dash.dashboardUid), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.dashboardTitle, children: dash.dashboardTitle }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.urlsContainer, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "a",
            {
              rel: "noreferrer",
              target: "_blank",
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("external-link", styles.url),
              href: (0,app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_9__.generatePublicDashboardUrl)(dash.publicDashboardAccessToken),
              onClick: onDismiss,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "public-dashboard-users-access-list.dashboard-modal.external-link", children: "External link" })
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.urlsDivider, children: "\u2022" }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            "a",
            {
              className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("external-link", styles.url),
              href: (0,app_features_dashboard_components_ShareModal_SharePublicDashboard_SharePublicDashboardUtils__WEBPACK_IMPORTED_MODULE_9__.generatePublicDashboardConfigUrl)(dash.dashboardUid, dash.slug),
              onClick: onDismiss,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "public-dashboard-users-access-list.dashboard-modal.sharing-setting", children: "Sharing settings" })
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", { className: styles.divider })
      ] }, dash.dashboardUid))
    }
  );
};
const DashboardsListModalButton = ({ email }) => {
  const translatedDashboardListModalButtonText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
    "public-dashboard-users-access-list.dashboard-modal.open-dashboard-list-text",
    "Open dashboards list"
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ModalsController, { children: ({ showModal, hideModal }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
    {
      variant: "secondary",
      size: "sm",
      icon: "question-circle",
      title: translatedDashboardListModalButtonText,
      "aria-label": translatedDashboardListModalButtonText,
      onClick: () => showModal(DashboardsListModal, { email, onDismiss: hideModal })
    }
  ) });
};
const getStyles = (theme) => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "590px"
  }),
  loading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "center"
  }),
  listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(0.5)
  }),
  divider: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    margin: theme.spacing(1.5, 0),
    color: theme.colors.text.secondary
  }),
  urlsContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    gap: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  }),
  urlsDivider: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }),
  dashboardTitle: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: 0
  }),
  url: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.body.fontSize
  })
});


/***/ }),

/***/ "./public/app/features/admin/UserListPublicDashboardPage/DeleteUserModalButton.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeleteUserModalButton: () => (/* binding */ DeleteUserModalButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/dashboard/api/publicDashboardApi.ts");






const DeleteUserModal = ({ user, hideModal }) => {
  const [revokeAllAccess] = (0,_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_7__.useRevokeAllAccessMutation)();
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const onRevokeAccessClick = () => {
    revokeAllAccess({ email: user.email });
    hideModal();
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal,
    {
      className: styles.modal,
      isOpen: true,
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("public-dashboard-users-access-list.delete-user-modal.revoke-access-title", "Revoke access"),
      onDismiss: hideModal,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.description, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.delete-user-modal.revoke-user-access-modal-desc-line1", children: [
          "Are you sure you want to revoke access for ",
          { email: user.email },
          "?"
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.description, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "public-dashboard-users-access-list.delete-user-shared-dashboards-modal.revoke-user-access-modal-desc-line2",
            shouldUnescape: true,
            children: [
              "This action will immediately revoke ",
              { email: user.email },
              "'s access to all shared dashboards."
            ]
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Modal.ButtonRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "button", variant: "secondary", onClick: hideModal, fill: "outline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.delete-user-modal.delete-user-cancel-button", children: "Cancel" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "button", variant: "destructive", onClick: onRevokeAccessClick, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.delete-user-modal.delete-user-revoke-access-button", children: "Revoke access" }) })
        ] })
      ]
    }
  );
};
const DeleteUserModalButton = ({ user }) => {
  const translatedDeleteUserText = (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
    "public-dashboard-users-access-list.delete-user-modal.delete-user-button-text",
    "Delete user"
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ModalsController, { children: ({ showModal, hideModal }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
    {
      size: "sm",
      variant: "destructive",
      onClick: () => showModal(DeleteUserModal, { user, hideModal }),
      icon: "times",
      "aria-label": translatedDeleteUserText,
      title: translatedDeleteUserText
    }
  ) });
};
const getStyles = (theme) => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "500px"
  }),
  description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontSize: theme.typography.body.fontSize,
    margin: 0
  })
});


/***/ }),

/***/ "./public/app/features/admin/UserListPublicDashboardPage/UserListPublicDashboardPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserListPublicDashboardPage: () => (/* binding */ UserListPublicDashboardPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/Tag.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/dashboard/api/publicDashboardApi.ts");
/* harmony import */ var _DashboardsListModalButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/admin/UserListPublicDashboardPage/DashboardsListModalButton.tsx");
/* harmony import */ var _DeleteUserModalButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/UserListPublicDashboardPage/DeleteUserModalButton.tsx");









const selectors = _grafana_e2e_selectors_src__WEBPACK_IMPORTED_MODULE_1__.selectors.pages.UserListPage.publicDashboards;
const UserListPublicDashboardPage = () => {
  const { data: users, isLoading } = (0,_dashboard_api_publicDashboardApi__WEBPACK_IMPORTED_MODULE_8__.useGetActiveUsersQuery)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page.Contents, { isLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline", "data-testid": selectors.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.table-header.email-label", children: "Email" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.table-header.activated-label", children: "Activated" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
          {
            placement: "top",
            content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
              "public-dashboard-users-access-list.table-header.activated-tooltip",
              "Earliest time user has been an active user to a dashboard"
            ),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "info-circle" })
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.table-header.last-active-label", children: "Last active" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.table-header.origin-label", children: "Origin" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "public-dashboard-users-access-list.table-header.role-label", children: "Role" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {})
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: users?.map((user) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "max-width-10", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "ellipsis", title: user.email, children: user.email }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "max-width-10", children: user.firstSeenAtAge }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "max-width-10", children: user.lastSeenAtAge }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "max-width-10", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans,
          {
            i18nKey: "public-dashboard-users-access-list.table-body.dashboard-count",
            count: user.totalDashboards,
            children: [
              { count: user.totalDashboards },
              " dashboards"
            ]
          }
        ) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardsListModalButton__WEBPACK_IMPORTED_MODULE_9__.DashboardsListModalButton, { email: user.email })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "max-width-10", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Tag, { name: "Viewer", colorIndex: 19 }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "text-right", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DeleteUserModalButton__WEBPACK_IMPORTED_MODULE_10__.DeleteUserModalButton, { user }) })
    ] }, user.email)) })
  ] }) });
};


/***/ }),

/***/ "./public/app/features/admin/Users/AnonUsersTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonUsersDevicesTable: () => (/* binding */ AnonUsersDevicesTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Badge/Badge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/UsersIndicator/Avatar.tsx");
/* harmony import */ var app_features_alerting_unified_components_EmptyArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/alerting/unified/components/EmptyArea.tsx");






const parseUserAgent = (userAgent) => {
  if (!userAgent.includes(" ")) {
    return {
      browser: userAgent,
      computer: ""
    };
  }
  const parts = userAgent.split(" ");
  return {
    browser: parts[0],
    computer: parts[1]
  };
};
const truncatePart = (part, maxLength) => {
  return part.length > maxLength ? part.substring(0, maxLength) + "..." : part;
};
const UserAgentCell = ({ value }) => {
  const parts = parseUserAgent(value);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { theme: "info-alt", content: value, placement: "top-end", interactive: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
    truncatePart(parts.browser, 10),
    truncatePart(parts.computer, 10)
  ] }) });
};
const AnonUsersDevicesTable = ({
  devices,
  showPaging,
  totalPages,
  onChangePage,
  currentPage,
  fetchData
}) => {
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => [
      {
        id: "avatarUrl",
        header: "",
        cell: ({ cell: { value } }) => value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Avatar, { src: value, alt: "User avatar" })
      },
      {
        id: "login",
        header: "Login",
        cell: ({ cell: { value } }) => "Anonymous"
      },
      {
        id: "userAgent",
        header: "User Agent",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserAgentCell, { value }),
        sortType: "string"
      },
      {
        id: "updatedAt",
        header: "Last active",
        cell: ({ cell: { value } }) => value,
        sortType: (a, b) => new Date(a.original.updatedAt).getTime() - new Date(b.original.updatedAt).getTime()
      },
      {
        id: "clientIp",
        header: "Origin IP (address)",
        cell: ({ cell: { value } }) => value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Badge, { text: value, color: "orange" })
      }
    ],
    []
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.InteractiveTable, { columns, data: devices, getRowId: (user) => user.deviceId, fetchData }),
    showPaging && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Pagination, { numberOfPages: totalPages, currentPage, onNavigate: onChangePage }) }),
    devices.length === 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_alerting_unified_components_EmptyArea__WEBPACK_IMPORTED_MODULE_9__.EmptyArea, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.anon-users.not-found", children: "No anonymous users found." }) }) })
  ] });
};


/***/ }),

/***/ "./public/app/features/admin/Users/OrgUnits.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Content: () => (/* binding */ Content),
/* harmony export */   OrgUnits: () => (/* binding */ OrgUnits)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");




const OrgUnits = ({ units, icon }) => {
  if (!units?.length) {
    return null;
  }
  return units.length > 1 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip,
    {
      placement: "top",
      content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", children: units?.map((unit) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: unit.name }, unit.name)) }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, { icon, children: units.length })
    }
  ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Content, { icon, children: units[0].name });
};
const Content = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, icon }, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { ref, display: "flex", alignItems: "center", marginRight: 1, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: icon }),
    " ",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Box, { marginLeft: 1, children })
  ] });
});
Content.displayName = "TooltipContent";


/***/ }),

/***/ "./public/app/features/admin/Users/OrgUsersTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgUsersTable: () => (/* binding */ OrgUsersTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/Tag.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/UsersIndicator/Avatar.tsx");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_components_RolePickerDrawer_RolePickerBadges__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/components/RolePickerDrawer/RolePickerBadges.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _OrgRolePicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");














const disabledRoleMessage = `This user's role is not editable because it is synchronized from your auth provider.
Refer to the Grafana authentication docs for details.`;
const getBasicRoleDisabled = (user) => {
  const isUserSynced = user?.isExternallySynced;
  return !app_core_core__WEBPACK_IMPORTED_MODULE_21__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_22__.AccessControlAction.OrgUsersWrite, user) || isUserSynced;
};
const selectors = _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.UserListPage.UsersListPage;
const OrgUsersTable = ({
  users,
  orgId,
  onRoleChange,
  onUserRolesChange,
  onRemoveUser,
  fetchData,
  changePage,
  page,
  totalPages,
  rolesLoading
}) => {
  const [userToRemove, setUserToRemove] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function fetchOptions() {
      try {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_21__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_22__.AccessControlAction.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_18__.fetchRoleOptions)(orgId);
          setRoleOptions(options);
        }
      } catch (e) {
        console.error("Error loading options");
      }
    }
    if (app_core_core__WEBPACK_IMPORTED_MODULE_21__.contextSrv.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [orgId]);
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => [
      {
        id: "avatarUrl",
        header: "",
        cell: ({ cell: { value } }) => value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.Avatar, { src: value, alt: "User avatar" })
      },
      {
        id: "login",
        header: "Login",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: value }),
        sortType: "string"
      },
      {
        id: "email",
        header: "Email",
        cell: ({ cell: { value } }) => value,
        sortType: "string"
      },
      {
        id: "name",
        header: "Name",
        cell: ({ cell: { value } }) => value,
        sortType: "string"
      },
      {
        id: "lastSeenAtAge",
        header: "Last active",
        cell: ({ cell: { value } }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value === "10 years" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.Text, { color: "disabled", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.org-uers.last-seen-never", children: "Never" }) }) : value }) });
        },
        sortType: (a, b) => new Date(a.original.lastSeenAt).getTime() - new Date(b.original.lastSeenAt).getTime()
      },
      {
        id: "role",
        header: "Role",
        cell: ({ cell: { value }, row: { original } }) => {
          const basicRoleDisabled = getBasicRoleDisabled(original);
          const onUserRolesUpdate = async (newRoles, userId, orgId2) => {
            await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_18__.updateUserRoles)(newRoles, userId, orgId2);
            if (onUserRolesChange) {
              onUserRolesChange();
            }
          };
          if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.rolePickerDrawer) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_RolePickerDrawer_RolePickerBadges__WEBPACK_IMPORTED_MODULE_19__.RolePickerBadges, { disabled: basicRoleDisabled, user: original });
          }
          return app_core_core__WEBPACK_IMPORTED_MODULE_21__.contextSrv.licensedAccessControlEnabled() ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_17__.UserRolePicker,
            {
              userId: original.userId,
              roles: original.roles,
              apply: true,
              onApplyRoles: onUserRolesUpdate,
              isLoading: rolesLoading,
              orgId,
              roleOptions,
              basicRole: value,
              onBasicRoleChange: (newRole) => onRoleChange(newRole, original),
              basicRoleDisabled,
              basicRoleDisabledMessage: disabledRoleMessage,
              width: 40
            }
          ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _OrgRolePicker__WEBPACK_IMPORTED_MODULE_23__.OrgRolePicker,
            {
              "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.org-users-table.columns.aria-label-role", "Role"),
              value,
              disabled: basicRoleDisabled,
              onChange: (newRole) => onRoleChange(newRole, original)
            }
          );
        }
      },
      {
        id: "info",
        header: "",
        cell: ({ row: { original } }) => {
          const basicRoleDisabled = getBasicRoleDisabled(original);
          return basicRoleDisabled && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Box, { display: "flex", alignItems: "center", marginLeft: 1, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
            {
              interactive: true,
              content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.org-users.not-editable", children: [
                "This user's role is not editable because it is synchronized from your auth provider. Refer to the\xA0",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.TextLink,
                  {
                    href: "https://grafana.com/docs/grafana/latest/administration/user-management/manage-org-users/#change-a-users-organization-permissions",
                    external: true,
                    children: "Grafana authentication docs"
                  }
                ),
                "\xA0for details."
              ] }) }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "question-circle" })
            }
          ) });
        }
      },
      {
        id: "authLabels",
        header: "Origin",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.isArray(value) && value.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_20__.TagBadge, { label: value[0], removeIcon: false, count: 0 }) })
      },
      {
        id: "isProvisioned",
        header: "Provisioned",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tag, { colorIndex: 14, name: "Provisioned" }) })
      },
      {
        id: "isDisabled",
        header: "",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Tag, { colorIndex: 9, name: "Disabled" }) })
      },
      {
        id: "delete",
        header: "",
        cell: ({ row: { original } }) => {
          return app_core_core__WEBPACK_IMPORTED_MODULE_21__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_22__.AccessControlAction.OrgUsersRemove, original) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Button,
            {
              size: "sm",
              variant: "destructive",
              onClick: () => {
                setUserToRemove(original);
              },
              icon: "times",
              "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.org-users-table.delete-aria-label", "Delete user: {{name}}", {
                name: original.name
              })
            }
          );
        }
      }
    ],
    [rolesLoading, orgId, roleOptions, onUserRolesChange, onRoleChange]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { direction: "column", gap: 2, "data-testid": selectors.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.InteractiveTable, { columns, data: users, getRowId: (user) => String(user.userId), fetchData }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Stack, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Pagination, { onNavigate: changePage, currentPage: page, numberOfPages: totalPages, hideWhenSinglePage: true }) }),
    Boolean(userToRemove) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.ConfirmModal,
      {
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.org-users-table.body-delete", "Are you sure you want to delete user {{user}}?", {
          user: userToRemove?.login
        }),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.org-users-table.confirmText-delete", "Delete"),
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.org-users-table.title-delete", "Delete"),
        onDismiss: () => {
          setUserToRemove(null);
        },
        isOpen: true,
        onConfirm: () => {
          if (!userToRemove) {
            return;
          }
          onRemoveUser(userToRemove);
          setUserToRemove(null);
        }
      }
    )
  ] });
};


/***/ }),

/***/ "./public/app/features/admin/Users/UsersTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersTable: () => (/* binding */ UsersTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/InteractiveTable/InteractiveTable.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Pagination/Pagination.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/Tag.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Text/Text.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/UsersIndicator/Avatar.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var _OrgUnits__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/admin/Users/OrgUnits.tsx");







const UsersTable = ({
  users,
  showPaging,
  totalPages,
  onChangePage,
  currentPage,
  fetchData
}) => {
  const showLicensedRole = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => users.some((user) => user.licensedRole), [users]);
  const showBelongsTo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => users.some((user) => user.orgs), [users]);
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
    () => [
      {
        id: "avatarUrl",
        header: "",
        cell: ({ cell: { value } }) => value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Avatar, { src: value, alt: "User avatar" })
      },
      {
        id: "login",
        header: "Login",
        cell: ({ row: { original } }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TextLink,
            {
              color: "primary",
              inline: false,
              href: `/admin/users/edit/${original.uid}`,
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.users-table.columns.title-edit-user", "Edit user"),
              children: original.login
            }
          );
        },
        sortType: "string"
      },
      {
        id: "email",
        header: "Email",
        cell: ({ cell: { value } }) => value,
        sortType: "string"
      },
      {
        id: "name",
        header: "Name",
        cell: ({ cell: { value } }) => value,
        sortType: "string"
      },
      ...showBelongsTo ? [
        {
          id: "orgs",
          header: "Belongs to",
          cell: ({ cell: { value, row } }) => {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { alignItems: "center", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OrgUnits__WEBPACK_IMPORTED_MODULE_14__.OrgUnits, { units: value, icon: "building" }),
              row.original.isAdmin && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
                {
                  placement: "top",
                  content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.users-table.columns.content-grafana-admin", "Grafana Admin"),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "shield" })
                }
              )
            ] });
          }
        }
      ] : [],
      ...showLicensedRole ? [
        {
          id: "licensedRole",
          header: "Licensed role",
          cell: ({ cell: { value } }) => {
            return value === "None" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "disabled", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.users-table.no-licensed-roles", children: "Not assigned" }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Tooltip,
                {
                  placement: "top",
                  content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
                    "admin.users-table.tooltip-assigned-role",
                    "A licensed role will be assigned when this user signs in"
                  ),
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "question-circle", style: { margin: "0 0 4 4" } })
                }
              )
            ] }) : value;
          }
        }
      ] : [],
      {
        id: "lastSeenAtAge",
        header: "Last active",
        headerTooltip: {
          content: "Time since user was seen using Grafana",
          iconName: "question-circle"
        },
        cell: ({ cell: { value } }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value === "10 years" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Text, { color: "disabled", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.users-table.last-seen-never", children: "Never" }) }) : value }) });
        },
        sortType: (a, b) => new Date(a.original.lastSeenAt).getTime() - new Date(b.original.lastSeenAt).getTime()
      },
      {
        id: "authLabels",
        header: "Origin",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: Array.isArray(value) && value.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_13__.TagBadge, { label: value[0], removeIcon: false, count: 0 }) })
      },
      {
        id: "isProvisioned",
        header: "Provisioned",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tag, { colorIndex: 14, name: "Provisioned" }) })
      },
      {
        id: "isDisabled",
        header: "",
        cell: ({ cell: { value } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: value && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tag, { colorIndex: 9, name: "Disabled" }) })
      },
      {
        id: "edit",
        header: "",
        cell: ({ row: { original } }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.LinkButton,
            {
              variant: "secondary",
              size: "sm",
              icon: "pen",
              href: `admin/users/edit/${original.uid}`,
              "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.users-table.edit-aria-label", "Edit user: {{name}}", { name: original.name }),
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.users-table.edit-tooltip", "Edit user")
            }
          );
        }
      }
    ],
    [showLicensedRole, showBelongsTo]
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InteractiveTable, { columns, data: users, getRowId: (user) => String(user.id), fetchData }),
    showPaging && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Pagination, { numberOfPages: totalPages, currentPage, onNavigate: onChangePage }) })
  ] });
};


/***/ }),

/***/ "./public/app/features/alerting/unified/components/EmptyArea.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyArea: () => (/* binding */ EmptyArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");




const EmptyArea = ({ children }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.container, children });
};
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      borderRadius: theme.shape.radius.lg,
      backgroundColor: theme.colors.background.secondary,
      color: theme.colors.text.secondary,
      padding: theme.spacing(4),
      textAlign: "center"
    })
  };
};


/***/ }),

/***/ "./public/app/features/invites/InviteeRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ClipboardButton/ClipboardButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/invites/state/actions.ts");







const mapDispatchToProps = {
  revokeInvite: _state_actions__WEBPACK_IMPORTED_MODULE_6__.revokeInvite
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDispatchToProps);
const InviteeRow = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ invitee, revokeInvite: revokeInvite2 }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: invitee.email }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: invitee.name }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { className: "text-right", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ClipboardButton, { icon: "copy", variant: "secondary", size: "sm", getText: () => invitee.url, children: "Copy Invite" }),
      "\xA0"
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
      {
        variant: "destructive",
        size: "sm",
        icon: "times",
        onClick: () => revokeInvite2(invitee.code),
        "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("invites.invitee-row.aria-label-revoke-invite", "Revoke invite")
      }
    ) })
  ] });
});
InviteeRow.displayName = "InviteeRow";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(InviteeRow));


/***/ }),

/***/ "./public/app/features/invites/InviteesTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _InviteeRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/invites/InviteeRow.tsx");





const InviteesTable = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ invitees }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "invites.invitees-table.email", children: "Email" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "invites.invitees-table.name", children: "Name" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "34px" } })
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { "data-testid": "InviteesTable-body", children: invitees.map((invitee, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InviteeRow__WEBPACK_IMPORTED_MODULE_3__["default"], { invitee }, `${invitee.id}-${index}`);
    }) })
  ] });
});
InviteesTable.displayName = "InviteesTable";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InviteesTable);


/***/ }),

/***/ "./public/app/features/invites/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAll: () => (/* binding */ selectAll),
/* harmony export */   selectById: () => (/* binding */ selectById),
/* harmony export */   selectInvitesMatchingQuery: () => (/* binding */ selectInvitesMatchingQuery),
/* harmony export */   selectTotal: () => (/* binding */ selectTotal)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/reselect/dist/reselect.mjs");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/features/invites/state/reducers.ts");



const { selectAll, selectById, selectTotal } = _reducers__WEBPACK_IMPORTED_MODULE_1__.selectors;
const selectQuery = (_state, query) => query;
const selectInvitesMatchingQuery = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSelector)([selectAll, selectQuery], (invites, searchQuery) => {
  const regex = new RegExp(searchQuery, "i");
  const matches = invites.filter((invite) => regex.test(invite.name) || regex.test(invite.email));
  return matches;
});


/***/ }),

/***/ "./public/app/features/users/UsersActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersActionBar: () => (/* binding */ UsersActionBar),
/* harmony export */   UsersActionBarUnconnected: () => (/* binding */ UsersActionBarUnconnected)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/users/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/users/state/selectors.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/users/utils.ts");













function mapStateToProps(state) {
  return {
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsersSearchQuery)(state.users),
    pendingInvitesCount: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_11__.selectTotal)(state.invites),
    externalUserMngLinkName: state.users.externalUserMngLinkName,
    externalUserMngLinkUrl: state.users.externalUserMngLinkUrl
  };
}
const mapDispatchToProps = {
  changeSearchQuery: _state_actions__WEBPACK_IMPORTED_MODULE_12__.changeSearchQuery
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps);
const UsersActionBarUnconnected = ({
  externalUserMngLinkName,
  externalUserMngLinkUrl,
  searchQuery,
  pendingInvitesCount,
  changeSearchQuery: changeSearchQuery2,
  onShowInvites,
  showInvites
}) => {
  const options = [
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("users.users-action-bar-unconnected.options.label.users", "Users"), value: "users" },
    { label: `Pending Invites (${pendingInvitesCount})`, value: "invites" }
  ];
  const canAddToOrg = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.OrgUsersAdd);
  const showInviteButton = canAddToOrg && !(app_core_config__WEBPACK_IMPORTED_MODULE_8__["default"].disableLoginForm && app_core_config__WEBPACK_IMPORTED_MODULE_8__["default"].externalUserMngInfo);
  const onExternalUserMngClick = () => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.reportInteraction)("users_admin_actions_clicked", {
      category: "org_users",
      item: "manage_users_external"
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "page-action-bar", "data-testid": "users-action-bar", children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.InlineField, { grow: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.FilterInput,
      {
        value: searchQuery,
        onChange: changeSearchQuery2,
        placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
          "users.users-action-bar-unconnected.placeholder-search-login-email",
          "Search user by login, email or name"
        )
      }
    ) }),
    pendingInvitesCount > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: { marginLeft: "1rem" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.RadioButtonGroup, { value: showInvites ? "invites" : "users", options, onChange: onShowInvites }) }),
    showInviteButton && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, { href: "org/users/invite", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "users.users-action-bar-unconnected.invite", children: "Invite" }) }),
    externalUserMngLinkUrl && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton,
      {
        onClick: onExternalUserMngClick,
        href: (0,_utils__WEBPACK_IMPORTED_MODULE_14__.getExternalUserMngLinkUrl)("manage-users"),
        target: "_blank",
        rel: "noopener",
        children: externalUserMngLinkName
      }
    )
  ] });
};
const UsersActionBar = connector(UsersActionBarUnconnected);


/***/ }),

/***/ "./public/app/features/users/UsersListPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersListPageContent: () => (/* binding */ UsersListPageContent),
/* harmony export */   UsersListPageUnconnected: () => (/* binding */ UsersListPageUnconnected),
/* harmony export */   "default": () => (/* binding */ UsersListPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/text/markdown.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var _admin_Users_OrgUsersTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/features/admin/Users/OrgUsersTable.tsx");
/* harmony import */ var _invites_InviteesTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/features/invites/InviteesTable.tsx");
/* harmony import */ var _invites_state_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/invites/state/actions.ts");
/* harmony import */ var _invites_state_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/invites/state/selectors.ts");
/* harmony import */ var _UsersActionBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/users/UsersActionBar.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/users/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/users/state/selectors.ts");















function mapStateToProps(state) {
  const searchQuery = (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsersSearchQuery)(state.users);
  return {
    users: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsers)(state.users),
    searchQuery: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_13__.getUsersSearchQuery)(state.users),
    page: state.users.page,
    totalPages: state.users.totalPages,
    perPage: state.users.perPage,
    invitees: (0,_invites_state_selectors__WEBPACK_IMPORTED_MODULE_10__.selectInvitesMatchingQuery)(state.invites, searchQuery),
    externalUserMngInfo: state.users.externalUserMngInfo,
    isLoading: state.users.isLoading,
    rolesLoading: state.users.rolesLoading
  };
}
const mapDispatchToProps = {
  loadUsers: _state_actions__WEBPACK_IMPORTED_MODULE_12__.loadUsers,
  fetchInvitees: _invites_state_actions__WEBPACK_IMPORTED_MODULE_9__.fetchInvitees,
  changePage: _state_actions__WEBPACK_IMPORTED_MODULE_12__.changePage,
  changeSort: _state_actions__WEBPACK_IMPORTED_MODULE_12__.changeSort,
  updateUser: _state_actions__WEBPACK_IMPORTED_MODULE_12__.updateUser,
  removeUser: _state_actions__WEBPACK_IMPORTED_MODULE_12__.removeUser
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const UsersListPageUnconnected = ({
  users,
  page,
  totalPages,
  invitees,
  externalUserMngInfo,
  isLoading,
  rolesLoading,
  loadUsers: loadUsers2,
  fetchInvitees: fetchInvitees2,
  changePage: changePage2,
  updateUser: updateUser2,
  removeUser: removeUser2,
  changeSort: changeSort2
}) => {
  const [showInvites, setShowInvites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const externalUserMngInfoHtml = externalUserMngInfo ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.renderMarkdown)(externalUserMngInfo) : "";
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadUsers2();
    fetchInvitees2();
  }, [fetchInvitees2, loadUsers2]);
  const onRoleChange = (role, user) => {
    updateUser2({ ...user, role });
  };
  const onRemoveUser = (user) => removeUser2(user.userId);
  const onShowInvites = () => {
    setShowInvites(!showInvites);
  };
  const onUserRolesChange = () => {
    loadUsers2();
  };
  const renderTable = () => {
    if (showInvites) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_invites_InviteesTable__WEBPACK_IMPORTED_MODULE_8__["default"], { invitees });
    } else {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _admin_Users_OrgUsersTable__WEBPACK_IMPORTED_MODULE_7__.OrgUsersTable,
        {
          users,
          orgId: app_core_core__WEBPACK_IMPORTED_MODULE_6__.contextSrv.user.orgId,
          rolesLoading,
          onRoleChange,
          onRemoveUser,
          onUserRolesChange,
          fetchData: changeSort2,
          changePage: changePage2,
          page,
          totalPages
        }
      );
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page.Contents, { isLoading: !isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UsersActionBar__WEBPACK_IMPORTED_MODULE_11__.UsersActionBar, { onShowInvites, showInvites }),
    externalUserMngInfoHtml && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Alert, { severity: "info", title: "", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { dangerouslySetInnerHTML: { __html: externalUserMngInfoHtml } }) }),
    isLoading && renderTable()
  ] });
};
const UsersListPageContent = connector(UsersListPageUnconnected);
function UsersListPage() {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { navId: "users", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UsersListPageContent, {}) });
}


/***/ }),

/***/ "./public/app/features/users/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePage: () => (/* binding */ changePage),
/* harmony export */   changeSearchQuery: () => (/* binding */ changeSearchQuery),
/* harmony export */   changeSort: () => (/* binding */ changeSort),
/* harmony export */   loadUsers: () => (/* binding */ loadUsers),
/* harmony export */   removeUser: () => (/* binding */ removeUser),
/* harmony export */   updateUser: () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/users/state/reducers.ts");







function loadUsers() {
  return async (dispatch, getState) => {
    try {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.usersFetchBegin)());
      const { perPage, page, searchQuery, sort } = getState().users;
      const users = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(
        `/api/org/users/search`,
        (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_3__.accessControlQueryParam)({ perpage: perPage, page, query: searchQuery, sort })
      );
      if (app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.licensedAccessControlEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionUserRolesList)) {
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.rolesFetchBegin)());
        const orgId = app_core_core__WEBPACK_IMPORTED_MODULE_2__.contextSrv.user.orgId;
        const userIds = users?.orgUsers.map((u) => u.userId);
        const roles = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post(`/api/access-control/users/roles/search?includeMapped=true`, {
          userIds,
          orgId
        });
        users.orgUsers.forEach((u) => {
          u.roles = roles ? roles[u.userId] || [] : [];
        });
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.rolesFetchEnd)());
      }
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.usersLoaded)(users));
    } catch (error) {
      (0,_reducers__WEBPACK_IMPORTED_MODULE_5__.usersFetchEnd)();
    }
  };
}
const fetchUsersWithDebounce = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)((dispatch) => dispatch(loadUsers()), 300);
function updateUser(user) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().patch(`/api/org/users/${user.userId}`, { role: user.role });
    dispatch(loadUsers());
  };
}
function removeUser(userId) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`/api/org/users/${userId}`);
    dispatch(loadUsers());
  };
}
function changePage(page) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.pageChanged)(page));
    dispatch(loadUsers());
  };
}
function changeSort({ sortBy }) {
  const sort = sortBy.length ? `${sortBy[0].id}-${sortBy[0].desc ? "desc" : "asc"}` : void 0;
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.sortChanged)(sort));
    dispatch(loadUsers());
  };
}
function changeSearchQuery(query) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_5__.searchQueryChanged)(query));
    fetchUsersWithDebounce(dispatch);
  };
}


/***/ }),

/***/ "./public/app/features/users/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUsers: () => (/* binding */ getUsers),
/* harmony export */   getUsersSearchQuery: () => (/* binding */ getUsersSearchQuery)
/* harmony export */ });

const getUsers = (state) => {
  const regex = new RegExp(state.searchQuery, "i");
  return state.users.filter((user) => {
    return regex.test(user.login) || regex.test(user.email) || regex.test(user.name);
  });
};
const getUsersSearchQuery = (state) => state.searchQuery;


/***/ })

}]);
//# sourceMappingURL=UserListPage.823c54b10454b6c85bba.js.map