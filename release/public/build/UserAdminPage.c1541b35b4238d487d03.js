"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["UserAdminPage"],{

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

/***/ "./public/app/core/components/Select/OrgPicker.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrgPicker: () => (/* binding */ OrgPicker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useAsyncFn.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");







function orgToSelectItem(org) {
  return {
    value: org,
    label: org.name
  };
}
function OrgPicker({ onSelected, className, inputId, autoFocus, excludeOrgs, defaultOrganization }) {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(
    defaultOrganization ? orgToSelectItem(defaultOrganization) : void 0
  );
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (autoFocus && inputId) {
      document.getElementById(inputId)?.focus();
    }
  }, [autoFocus, inputId]);
  const [orgOptionsState, getOrgOptions] = (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(async () => {
    const orgs = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.getBackendSrv)().get("/api/orgs");
    const allOrgs = orgs.map(orgToSelectItem);
    if (excludeOrgs) {
      let idArray = excludeOrgs.map((anOrg) => anOrg.orgId);
      return allOrgs.filter((item) => {
        return item.value !== void 0 && !idArray.includes(item.value.id);
      });
    } else {
      return allOrgs;
    }
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.AsyncSelect,
    {
      inputId,
      className,
      isLoading: orgOptionsState.loading,
      defaultOptions: true,
      loadOptions: getOrgOptions,
      filterOption: (option, rawInput) => {
        const input = rawInput.toLowerCase();
        return !!option.value?.name.toLowerCase().includes(input);
      },
      onChange: (item) => {
        onSelected(item);
        setSelected(item);
      },
      value: selected,
      placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("org-picker.select-placeholder", "Select organization"),
      noOptionsMessage: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("org-picker.noOptionsMessage-no-organizations-found", "No organizations found")
    }
  );
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

/***/ "./public/app/features/admin/UserAdminPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserAdminPage: () => (/* binding */ UserAdminPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/utils/licensing.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _UserLdapSyncInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/features/admin/UserLdapSyncInfo.tsx");
/* harmony import */ var _UserOrgs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/admin/UserOrgs.tsx");
/* harmony import */ var _UserPermissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/admin/UserPermissions.tsx");
/* harmony import */ var _UserProfile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/admin/UserProfile.tsx");
/* harmony import */ var _UserSessions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/admin/UserSessions.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/admin/state/actions.ts");

















const UserAdminPage = ({
  loadAdminUserPage: loadAdminUserPage2,
  user,
  orgs,
  sessions,
  ldapSyncInfo,
  isLoading,
  updateUser: updateUser2,
  setUserPassword: setUserPassword2,
  deleteUser: deleteUser2,
  disableUser: disableUser2,
  enableUser: enableUser2,
  updateUserPermissions: updateUserPermissions2,
  deleteOrgUser: deleteOrgUser2,
  updateOrgUserRole: updateOrgUserRole2,
  addOrgUser: addOrgUser2,
  revokeSession: revokeSession2,
  revokeAllSessions: revokeAllSessions2,
  syncLdapUser: syncLdapUser2
}) => {
  const { id = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadAdminUserPage2(id);
  }, [id, loadAdminUserPage2]);
  const onPasswordChange = (password) => {
    if (user) {
      setUserPassword2(user.uid, password);
    }
  };
  const onGrafanaAdminChange = (isGrafanaAdmin) => {
    if (user) {
      updateUserPermissions2(user.uid, isGrafanaAdmin);
    }
  };
  const onOrgRemove = (orgId) => {
    if (user) {
      deleteOrgUser2(user.uid, orgId);
    }
  };
  const onOrgRoleChange = (orgId, newRole) => {
    if (user) {
      updateOrgUserRole2(user.uid, orgId, newRole);
    }
  };
  const onOrgAdd = (orgId, role) => {
    if (user) {
      addOrgUser2(user, orgId, role);
    }
  };
  const onSessionRevoke = (tokenId) => {
    if (user) {
      revokeSession2(tokenId, user.uid);
    }
  };
  const onAllSessionsRevoke = () => {
    if (user) {
      revokeAllSessions2(user.uid);
    }
  };
  const onUserSync = () => {
    if (user) {
      syncLdapUser2(user.id, user.uid);
    }
  };
  const isLDAPUser = user?.isExternal && user?.authLabels?.includes("LDAP");
  const canReadSessions = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.UsersAuthTokenList);
  const canReadLDAPStatus = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_9__.AccessControlAction.LDAPStatusRead);
  let authSource = user?.authLabels?.[0];
  if (user?.isProvisioned) {
    authSource = "SCIM";
  }
  const lockMessage = authSource ? `Synced via ${authSource}` : "";
  const pageNav = {
    text: user?.login ?? "",
    icon: "shield",
    subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
      "admin.user-admin-page.page-nav.subTitle.manage-settings-for-an-individual-user",
      "Manage settings for an individual user."
    )
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page, { navId: "global-users", pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page.Contents, { isLoading, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { gap: 5, direction: "column", children: [
    user && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _UserProfile__WEBPACK_IMPORTED_MODULE_13__.UserProfile,
        {
          user,
          onUserUpdate: updateUser2,
          onUserDelete: deleteUser2,
          onUserDisable: disableUser2,
          onUserEnable: enableUser2,
          onPasswordChange
        }
      ),
      isLDAPUser && user?.isExternallySynced && (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.featureEnabled)("ldapsync") && ldapSyncInfo && canReadLDAPStatus && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserLdapSyncInfo__WEBPACK_IMPORTED_MODULE_10__.UserLdapSyncInfo, { ldapSyncInfo, user, onUserSync }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _UserPermissions__WEBPACK_IMPORTED_MODULE_12__.UserPermissions,
        {
          isGrafanaAdmin: user.isGrafanaAdmin,
          isExternalUser: user?.isGrafanaAdminExternallySynced,
          lockMessage,
          onGrafanaAdminChange
        }
      )
    ] }),
    orgs && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _UserOrgs__WEBPACK_IMPORTED_MODULE_11__.UserOrgs,
      {
        user,
        orgs,
        isExternalUser: user?.isExternallySynced,
        onOrgRemove,
        onOrgRoleChange,
        onOrgAdd
      }
    ),
    sessions && canReadSessions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _UserSessions__WEBPACK_IMPORTED_MODULE_14__.UserSessions,
      {
        sessions,
        onSessionRevoke,
        onAllSessionsRevoke
      }
    )
  ] }) }) });
};
const mapStateToProps = (state) => ({
  user: state.userAdmin.user,
  sessions: state.userAdmin.sessions,
  orgs: state.userAdmin.orgs,
  ldapSyncInfo: state.ldap.syncInfo,
  isLoading: state.userAdmin.isLoading,
  error: state.userAdmin.error
});
const mapDispatchToProps = {
  loadAdminUserPage: _state_actions__WEBPACK_IMPORTED_MODULE_15__.loadAdminUserPage,
  updateUser: _state_actions__WEBPACK_IMPORTED_MODULE_15__.updateUser,
  setUserPassword: _state_actions__WEBPACK_IMPORTED_MODULE_15__.setUserPassword,
  disableUser: _state_actions__WEBPACK_IMPORTED_MODULE_15__.disableUser,
  enableUser: _state_actions__WEBPACK_IMPORTED_MODULE_15__.enableUser,
  deleteUser: _state_actions__WEBPACK_IMPORTED_MODULE_15__.deleteUser,
  updateUserPermissions: _state_actions__WEBPACK_IMPORTED_MODULE_15__.updateUserPermissions,
  addOrgUser: _state_actions__WEBPACK_IMPORTED_MODULE_15__.addOrgUser,
  updateOrgUserRole: _state_actions__WEBPACK_IMPORTED_MODULE_15__.updateOrgUserRole,
  deleteOrgUser: _state_actions__WEBPACK_IMPORTED_MODULE_15__.deleteOrgUser,
  revokeSession: _state_actions__WEBPACK_IMPORTED_MODULE_15__.revokeSession,
  revokeAllSessions: _state_actions__WEBPACK_IMPORTED_MODULE_15__.revokeAllSessions,
  syncLdapUser: _state_actions__WEBPACK_IMPORTED_MODULE_15__.syncLdapUser
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(UserAdminPage));


/***/ }),

/***/ "./public/app/features/admin/UserLdapSyncInfo.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserLdapSyncInfo: () => (/* binding */ UserLdapSyncInfo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");









const format = "dddd YYYY-MM-DD HH:mm zz";
const debugLDAPMappingBaseURL = "/admin/authentication/ldap";
const UserLdapSyncInfo = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ ldapSyncInfo, user, onUserSync }) => {
  const nextSyncSuccessful = ldapSyncInfo && ldapSyncInfo.nextSync;
  const nextSyncTime = nextSyncSuccessful ? (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(ldapSyncInfo.nextSync, { format }) : "";
  const debugLDAPMappingURL = `${debugLDAPMappingBaseURL}?username=${user && user.login}`;
  const canReadLDAPUser = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.LDAPUsersRead);
  const canSyncLDAPUser = app_core_core__WEBPACK_IMPORTED_MODULE_5__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.LDAPUsersSync);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap-sync.title", children: "LDAP Synchronisation" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "gf-form-group", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "gf-form", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: "filter-table form-inline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap-sync.external-sync-label", children: "External sync" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap-sync.external-sync-description", children: "User synced via LDAP. Some changes must be done in LDAP or mappings." }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_7__.TagBadge,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-ldap-sync-info.label-ldap", "LDAP"),
              removeIcon: false,
              count: 0,
              onClick: void 0
            }
          ) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap-sync.next-sync-label", children: "Next scheduled synchronization" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, children: ldapSyncInfo.enabled ? nextSyncTime : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap-sync.not-enabled", children: "Not enabled" }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "gf-form-button-row", children: [
        canSyncLDAPUser && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { variant: "secondary", onClick: onUserSync, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap-sync.sync-button", children: "Sync user" }) }),
        canReadLDAPUser && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LinkButton, { variant: "secondary", href: debugLDAPMappingURL, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.ldap-sync.debug-button", children: "Debug LDAP Mapping" }) })
      ] })
    ] })
  ] });
});
UserLdapSyncInfo.displayName = "UserLdapSyncInfo";


/***/ }),

/***/ "./public/app/features/admin/UserOrgs.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddToOrgModal: () => (/* binding */ AddToOrgModal),
/* harmony export */   ChangeOrgButton: () => (/* binding */ ChangeOrgButton),
/* harmony export */   ExternalUserTooltip: () => (/* binding */ ExternalUserTooltip),
/* harmony export */   UserOrgs: () => (/* binding */ UserOrgs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/orgs.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/ConfirmButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_components_Select_OrgPicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/components/Select/OrgPicker.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _OrgRolePicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");













const UserOrgs = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ user, orgs, isExternalUser, onOrgRoleChange, onOrgRemove, onOrgAdd }) => {
  const [showAddOrgModal, setShowAddOrgModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const addToOrgButtonRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const showOrgAddModal = () => {
    setShowAddOrgModal(true);
  };
  const dismissOrgAddModal = () => {
    setShowAddOrgModal(false);
    addToOrgButtonRef.current?.focus();
  };
  const canAddToOrg = app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.OrgUsersAdd) && !isExternalUser;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.user-orgs.title", children: "Organizations" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 1.5, direction: "column", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: "filter-table form-inline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: orgs.map((org, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        OrgRow,
        {
          isExternalUser,
          user,
          org,
          onOrgRoleChange,
          onOrgRemove
        },
        `${org.orgId}-${index}`
      )) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: canAddToOrg && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", onClick: showOrgAddModal, ref: addToOrgButtonRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.user-orgs.add-button", children: "Add user to organization" }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        AddToOrgModal,
        {
          user,
          userOrgs: orgs,
          isOpen: showAddOrgModal,
          onOrgAdd,
          onDismiss: dismissOrgAddModal
        }
      )
    ] })
  ] });
});
UserOrgs.displayName = "UserOrgs";
const getOrgRowStyles = (theme) => {
  return {
    removeButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: "0.6rem",
      textDecoration: "underline",
      color: theme.v1.palette.blue95
    }),
    label: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontWeight: 500
    }),
    disabledTooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex"
    }),
    tooltipItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: "5px"
    }),
    tooltipItemLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.v1.palette.blue95
    }),
    rolePickerWrapper: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex"
    }),
    rolePicker: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      flex: "auto",
      marginRight: theme.spacing(1)
    })
  };
};
const OrgRow = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ user, org, isExternalUser, onOrgRemove, onOrgRoleChange }) => {
  const [currentRole, setCurrentRole] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(org.role);
  const [isChangingRole, setIsChangingRole] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getOrgRowStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.licensedAccessControlEnabled()) {
      if (app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.ActionRolesList)) {
        (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_16__.fetchRoleOptions)(org.orgId).then((roles) => setRoleOptions(roles)).catch((e) => console.error(e));
      }
    }
  }, [org.orgId]);
  const handleOrgRemove = async () => {
    onOrgRemove(org.orgId);
  };
  const handleChangeRoleClick = () => {
    setIsChangingRole(true);
    setCurrentRole(org.role);
  };
  const handleOrgRoleChange = (newRole) => {
    setCurrentRole(newRole);
  };
  const handleOrgRoleSave = () => {
    onOrgRoleChange(org.orgId, currentRole);
  };
  const handleCancelClick = () => {
    setIsChangingRole(false);
  };
  const handleBasicRoleChange = (newRole) => {
    onOrgRoleChange(org.orgId, newRole);
  };
  const authSource = user?.authLabels?.length && user?.authLabels[0];
  const lockMessage = authSource ? `Synced via ${authSource}` : "";
  const labelClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)("width-16", styles.label);
  const canChangeRole = app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.OrgUsersWrite);
  const canRemoveFromOrg = app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.OrgUsersRemove) && !isExternalUser;
  const rolePickerDisabled = isExternalUser || !canChangeRole;
  const inputId = `${org.name}-input`;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: labelClass, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: inputId, children: org.name }) }),
    app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.licensedAccessControlEnabled() ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.rolePickerWrapper, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.rolePicker, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_15__.UserRolePicker,
        {
          userId: user?.id || 0,
          orgId: org.orgId,
          basicRole: org.role,
          roleOptions,
          onBasicRoleChange: handleBasicRoleChange,
          basicRoleDisabled: rolePickerDisabled,
          basicRoleDisabledMessage: "This user's role is not editable because it is synchronized from your auth provider.\n                  Refer to the Grafana authentication docs for details."
        }
      ) }),
      isExternalUser && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExternalUserTooltip, { lockMessage })
    ] }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      isChangingRole ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OrgRolePicker__WEBPACK_IMPORTED_MODULE_20__.OrgRolePicker, { inputId, value: currentRole, onChange: handleOrgRoleChange, autoFocus: true }) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "width-25", children: org.role }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 1, children: canChangeRole && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        ChangeOrgButton,
        {
          lockMessage,
          isExternalUser,
          onChangeRoleClick: handleChangeRoleClick,
          onCancelClick: handleCancelClick,
          onOrgRoleSave: handleOrgRoleSave
        }
      ) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 1, children: canRemoveFromOrg && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmButton,
      {
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.un-themed-org-row.confirmText-confirm-removal", "Confirm removal"),
        confirmVariant: "destructive",
        onCancel: handleCancelClick,
        onConfirm: handleOrgRemove,
        children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-orgs.remove-button", "Remove from organization")
      }
    ) })
  ] });
});
OrgRow.displayName = "OrgRow";
const getAddToOrgModalStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.stylesFactory)(() => ({
  modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    width: "500px"
  }),
  buttonRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    textAlign: "center"
  }),
  modalContent: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    overflow: "visible"
  })
}));
class AddToOrgModal extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      selectedOrg: null,
      role: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.OrgRole.Viewer,
      roleOptions: [],
      pendingOrgId: null,
      pendingUserId: null,
      pendingRoles: []
    };
    this.onOrgSelect = (org) => {
      const userOrg = this.props.userOrgs.find((userOrg2) => userOrg2.orgId === org.value?.id);
      this.setState({ selectedOrg: org.value, role: userOrg?.role || _grafana_data__WEBPACK_IMPORTED_MODULE_3__.OrgRole.Viewer });
      if (app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.licensedAccessControlEnabled()) {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.ActionRolesList)) {
          (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_16__.fetchRoleOptions)(org.value?.id).then((roles) => this.setState({ roleOptions: roles })).catch((e) => console.error(e));
        }
      }
    };
    this.onOrgRoleChange = (newRole) => {
      this.setState({
        role: newRole
      });
    };
    this.onAddUserToOrg = async () => {
      const { selectedOrg, role } = this.state;
      this.props.onOrgAdd(selectedOrg.id, role);
      if (app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.licensedAccessControlEnabled()) {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_18__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_19__.AccessControlAction.ActionUserRolesAdd)) {
          if (this.state.pendingUserId) {
            await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_16__.updateUserRoles)(this.state.pendingRoles, this.state.pendingUserId, this.state.pendingOrgId);
            this.setState({
              pendingOrgId: null,
              pendingRoles: [],
              pendingUserId: null
            });
          }
        }
      }
    };
    this.onCancel = () => {
      this.setState({
        selectedOrg: null,
        pendingRoles: [],
        pendingOrgId: null,
        pendingUserId: null
      });
      if (this.props.onDismiss) {
        this.props.onDismiss();
      }
    };
    this.onRoleUpdate = async (roles, userId, orgId) => {
      this.setState({
        pendingRoles: roles,
        pendingOrgId: orgId,
        pendingUserId: userId
      });
    };
  }
  render() {
    const { isOpen, user, userOrgs } = this.props;
    const { role, roleOptions, selectedOrg } = this.state;
    const styles = getAddToOrgModalStyles();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal,
      {
        className: styles.modal,
        contentClassName: styles.modalContent,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.add-to-org-modal.title-add-to-an-organization", "Add to an organization"),
        isOpen,
        onDismiss: this.onCancel,
        children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.add-to-org-modal.label-organization", "Organization"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Select_OrgPicker__WEBPACK_IMPORTED_MODULE_17__.OrgPicker, { inputId: "new-org-input", onSelected: this.onOrgSelect, excludeOrgs: userOrgs, autoFocus: true }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.add-to-org-modal.label-role", "Role"), disabled: selectedOrg === null, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_15__.UserRolePicker,
            {
              userId: user?.id || 0,
              orgId: selectedOrg?.id,
              basicRole: role,
              onBasicRoleChange: this.onOrgRoleChange,
              basicRoleDisabled: false,
              roleOptions,
              apply: true,
              onApplyRoles: this.onRoleUpdate,
              pendingRoles: this.state.pendingRoles
            }
          ) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal.ButtonRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Stack, { gap: 2, justifyContent: "center", children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", fill: "outline", onClick: this.onCancel, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.user-orgs-modal.cancel-button", children: "Cancel" }) }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "primary", disabled: selectedOrg === null, onClick: this.onAddUserToOrg, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.user-orgs-modal.add-button", children: "Add to organization" }) })
          ] }) })
        ]
      }
    );
  }
}
const getChangeOrgButtonTheme = (theme) => ({
  disabledTooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex"
  }),
  tooltipItemLink: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.v1.palette.blue95
  }),
  lockMessageClass: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontStyle: "italic",
    marginLeft: "1.8rem",
    marginRight: "0.6rem"
  }),
  icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    lineHeight: 2
  })
});
function ChangeOrgButton({
  lockMessage,
  onChangeRoleClick,
  isExternalUser,
  onOrgRoleSave,
  onCancelClick
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getChangeOrgButtonTheme);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.disabledTooltip, children: isExternalUser ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.lockMessageClass, children: lockMessage }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
      {
        placement: "right-end",
        interactive: true,
        content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.user-orgs.role-not-editable", children: [
          "This user's role is not editable because it is synchronized from your auth provider. Refer to the\xA0",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TextLink, { href: "https://grafana.com/docs/grafana/latest/auth", external: true, children: "Grafana authentication docs" }),
          "\xA0for details."
        ] }) }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.icon, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "question-circle" }) })
      }
    )
  ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmButton,
    {
      confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.change-org-button.confirmText-save", "Save"),
      onClick: onChangeRoleClick,
      onCancel: onCancelClick,
      onConfirm: onOrgRoleSave,
      disabled: isExternalUser,
      children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("admin.user-orgs.change-role-button", "Change role")
    }
  ) });
}
const ExternalUserTooltip = ({ lockMessage }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getTooltipStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.disabledTooltip, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.lockMessageClass, children: lockMessage }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Tooltip,
      {
        placement: "right-end",
        interactive: true,
        content: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "admin.user-orgs.external-user-tooltip", children: [
          "This user's built-in role is not editable because it is synchronized from your auth provider. Refer to the\xA0",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.TextLink, { href: "https://grafana.com/docs/grafana/latest/auth", external: true, children: "Grafana authentication docs" }),
          "\xA0for details."
        ] }) }),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "question-circle" })
      }
    )
  ] });
};
const getTooltipStyles = (theme) => ({
  disabledTooltip: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex"
  }),
  lockMessageClass: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontStyle: "italic",
    marginLeft: "1.8rem",
    marginRight: "0.6rem"
  })
});


/***/ }),

/***/ "./public/app/features/admin/UserPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserPermissions: () => (/* binding */ UserPermissions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/ConfirmButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_admin_UserOrgs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/features/admin/UserOrgs.tsx");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/accessControl.ts");









const adminOptions = [
  { label: "Yes", value: true },
  { label: "No", value: false }
];
function UserPermissions({ isGrafanaAdmin, isExternalUser, lockMessage, onGrafanaAdminChange }) {
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [currentAdminOption, setCurrentAdminOption] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isGrafanaAdmin);
  const onChangeClick = () => setIsEditing(true);
  const onCancelClick = () => {
    setIsEditing(false);
    setCurrentAdminOption(isGrafanaAdmin);
  };
  const handleGrafanaAdminChange = () => onGrafanaAdminChange(currentAdminOption);
  const canChangePermissions = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.UsersPermissionsUpdate) && !isExternalUser;
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getTooltipStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-permissions.title", children: "Permissions" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: "filter-table form-inline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "width-16", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-permissions.grafana-admin-key", children: "Grafana Admin" }) }),
      isEditing ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.RadioButtonGroup,
        {
          options: adminOptions,
          value: currentAdminOption,
          onChange: setCurrentAdminOption,
          autoFocus: true
        }
      ) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2, children: isGrafanaAdmin ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "shield" }),
        " ",
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-permissions.grafana-admin-yes", children: "Yes" })
      ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-permissions.grafana-admin-no", children: "No" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", { children: [
        canChangePermissions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmButton,
          {
            onClick: onChangeClick,
            onConfirm: handleGrafanaAdminChange,
            onCancel: onCancelClick,
            confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-permissions.confirmText-change", "Change"),
            children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-permissions.change-button", "Change")
          }
        ),
        isExternalUser && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.lockMessageClass, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_features_admin_UserOrgs__WEBPACK_IMPORTED_MODULE_9__.ExternalUserTooltip, { lockMessage }) })
      ] })
    ] }) }) })
  ] });
}
const getTooltipStyles = (theme) => ({
  lockMessageClass: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    justifyContent: "flex-end",
    fontStyle: "italic",
    marginRight: theme.spacing(0.6)
  })
});


/***/ }),

/***/ "./public/app/features/admin/UserProfile.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LockedRow: () => (/* binding */ LockedRow),
/* harmony export */   UserProfile: () => (/* binding */ UserProfile),
/* harmony export */   UserProfileRow: () => (/* binding */ UserProfileRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legacy/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/ConfirmButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/accessControl.ts");








function UserProfile({
  user,
  onUserUpdate,
  onUserDelete,
  onUserDisable,
  onUserEnable,
  onPasswordChange
}) {
  const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const [showDisableModal, setShowDisableModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const deleteUserRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const showDeleteUserModal = (show) => () => {
    setShowDeleteModal(show);
    if (!show && deleteUserRef.current) {
      deleteUserRef.current.focus();
    }
  };
  const disableUserRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const showDisableUserModal = (show) => () => {
    setShowDisableModal(show);
    if (!show && disableUserRef.current) {
      disableUserRef.current.focus();
    }
  };
  const handleUserDelete = () => onUserDelete(user.uid);
  const handleUserDisable = () => onUserDisable(user.uid);
  const handleUserEnable = () => onUserEnable(user.uid);
  const onUserNameChange = (newValue) => {
    onUserUpdate({
      ...user,
      name: newValue
    });
  };
  const onUserEmailChange = (newValue) => {
    onUserUpdate({
      ...user,
      email: newValue
    });
  };
  const onUserLoginChange = (newValue) => {
    onUserUpdate({
      ...user,
      login: newValue
    });
  };
  let authSource = user.authLabels?.length && user.authLabels[0];
  if (user.isProvisioned) {
    authSource = "SCIM";
  }
  const lockMessage = authSource ? `Synced via ${authSource}` : "";
  const editLocked = user.isExternal || user.isProvisioned || !app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.UsersWrite, user);
  const passwordChangeLocked = user.isExternal || user.isProvisioned || !app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.UsersPasswordUpdate, user);
  const canDelete = app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.UsersDelete, user);
  const canDisable = app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.UsersDisable, user);
  const canEnable = app_core_core__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.UsersEnable, user);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-profile.title", children: "User information" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { direction: "column", gap: 1.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: "filter-table form-inline", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          UserProfileRow,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.label-numerical-identifier", "Numerical identifier"),
            value: user.id.toString(),
            locked: true
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          UserProfileRow,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.label-name", "Name"),
            value: user.name,
            locked: editLocked,
            lockMessage,
            onChange: onUserNameChange
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          UserProfileRow,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.label-email", "Email"),
            value: user.email,
            locked: editLocked,
            lockMessage,
            onChange: onUserEmailChange
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          UserProfileRow,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.label-username", "Username"),
            value: user.login,
            locked: editLocked,
            lockMessage,
            onChange: onUserLoginChange
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          UserProfileRow,
          {
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.label-password", "Password"),
            value: "********",
            inputType: "password",
            locked: passwordChangeLocked,
            lockMessage,
            onChange: onPasswordChange
          }
        )
      ] }) }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Stack, { gap: 2, children: [
        canDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "destructive", onClick: showDeleteUserModal(true), ref: deleteUserRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-profile.delete-button", children: "Delete user" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmModal,
            {
              isOpen: showDeleteModal,
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.title-delete-user", "Delete user"),
              body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.body-delete", "Are you sure you want to delete this user?"),
              confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.confirmText-delete-user", "Delete user"),
              onConfirm: handleUserDelete,
              onDismiss: showDeleteUserModal(false)
            }
          )
        ] }),
        user.isDisabled && canEnable && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", onClick: handleUserEnable, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-profile.enable-button", children: "Enable user" }) }),
        !user.isDisabled && canDisable && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { variant: "secondary", onClick: showDisableUserModal(true), ref: disableUserRef, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "admin.user-profile.disable-button", children: "Disable user" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ConfirmModal,
            {
              isOpen: showDisableModal,
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.title-disable-user", "Disable user"),
              body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.body-disable", "Are you sure you want to disable this user?"),
              confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.confirmText-disable-user", "Disable user"),
              onConfirm: handleUserDisable,
              onDismiss: showDisableUserModal(false)
            }
          )
        ] })
      ] })
    ] })
  ] });
}
class UserProfileRow extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      editing: false,
      value: this.props.value || ""
    };
    this.setInputElem = (elem) => {
      this.inputElem = elem;
    };
    this.onEditClick = () => {
      if (this.props.inputType === "password") {
        this.setState({ editing: true, value: "" }, this.focusInput);
      } else {
        this.setState({ editing: true }, this.focusInput);
      }
    };
    this.onCancelClick = () => {
      this.setState({ editing: false, value: this.props.value || "" });
    };
    this.onInputChange = (event, status) => {
      if (status === _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LegacyInputStatus.Invalid) {
        return;
      }
      this.setState({
        value: event.target.value
      });
    };
    this.onInputBlur = (event, status) => {
      if (status === _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LegacyInputStatus.Invalid) {
        return;
      }
      this.setState({
        value: event.target.value
      });
    };
    this.focusInput = () => {
      if (this.inputElem && this.inputElem.focus) {
        this.inputElem.focus();
      }
    };
    this.onSave = () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    };
  }
  static {
    this.defaultProps = {
      value: "",
      locked: false,
      lockMessage: "",
      inputType: "text"
    };
  }
  render() {
    const { label, locked, lockMessage, inputType } = this.props;
    const { value } = this.state;
    const labelClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
      "width-16",
      (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        fontWeight: 500
      })
    );
    if (locked) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LockedRow, { label, value, lockMessage });
    }
    const inputId = `${label}-input`;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: labelClass, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: inputId, children: label }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "width-25", colSpan: 2, children: this.state.editing ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
        {
          id: inputId,
          type: inputType,
          defaultValue: value,
          onBlur: this.onInputBlur,
          onChange: this.onInputChange,
          ref: this.setInputElem,
          width: 30
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: this.props.value }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmButton,
        {
          confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile-row.confirmText-save", "Save"),
          onClick: this.onEditClick,
          onConfirm: this.onSave,
          onCancel: this.onCancelClick,
          children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("admin.user-profile.edit-button", "Edit")
        }
      ) })
    ] });
  }
}
const LockedRow = ({ label, value, lockMessage }) => {
  const lockMessageClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    fontStyle: "italic",
    marginRight: "0.6rem"
  });
  const labelClass = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(
    "width-16",
    (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontWeight: 500
    })
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: labelClass, children: label }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "width-25", colSpan: 2, children: value }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: lockMessageClass, children: lockMessage }) })
  ] });
};


/***/ }),

/***/ "./public/app/features/admin/UserSessions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserSessions: () => (/* binding */ UserSessions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/ConfirmButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_core_internationalization_dates__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/internationalization/dates.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/accessControl.ts");









const UserSessions = (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ sessions, onSessionRevoke, onAllSessionsRevoke }) => {
  const [showLogoutModal, setShowLogoutModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const forceAllLogoutButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const showLogoutConfirmationModal = () => {
    setShowLogoutModal(true);
  };
  const dismissLogoutConfirmationModal = () => {
    setShowLogoutModal(false);
    forceAllLogoutButton.current?.focus();
  };
  const handleSessionRevoke = (id) => {
    return () => {
      onSessionRevoke(id);
    };
  };
  const handleAllSessionsRevoke = () => {
    setShowLogoutModal(false);
    onAllSessionsRevoke();
  };
  const canLogout = app_core_core__WEBPACK_IMPORTED_MODULE_8__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.UsersLogout);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.user-sessions.title", children: "Sessions" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "column", gap: 1.5, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table form-inline", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.user-sessions.last-seen-column", children: "Last seen" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.user-sessions.logged-on-column", children: "Logged on" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.user-sessions.ip-column", children: "IP address" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.user-sessions.browser-column", children: "Browser and OS" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { colSpan: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "user-session.auth-module-column", children: "Identity Provider" }) })
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: sessions && sessions.map((session, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: session.isActive ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.user-sessions.now", "Now") : session.seenAt }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: (0,app_core_internationalization_dates__WEBPACK_IMPORTED_MODULE_9__.formatDate)(session.createdAt, { dateStyle: "long" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: session.clientIp }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: `${session.browser} on ${session.os} ${session.osVersion}` }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: session.authModule && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_7__.TagBadge, { label: session.authModule, removeIcon: false, count: 0 }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: canLogout && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.ConfirmButton,
            {
              confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.base-user-sessions.confirmText-confirm-logout", "Confirm logout"),
              confirmVariant: "destructive",
              onConfirm: handleSessionRevoke(session.id),
              children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.user-sessions.force-logout-button", "Force logout")
            }
          ) })
        ] }, `${session.id}-${index}`)) })
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
        canLogout && sessions.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "secondary", onClick: showLogoutConfirmationModal, ref: forceAllLogoutButton, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "admin.user-sessions.force-logout-all-button", children: "Force logout from all devices" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal,
          {
            isOpen: showLogoutModal,
            title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.base-user-sessions.title-force-logout-from-all-devices", "Force logout from all devices"),
            body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
              "admin.base-user-sessions.body-force-logout-from-all-devices",
              "Are you sure you want to force logout from all devices?"
            ),
            confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("admin.base-user-sessions.confirmText-force-logout", "Force logout"),
            onConfirm: handleAllSessionsRevoke,
            onDismiss: dismissLogoutConfirmationModal
          }
        )
      ] })
    ] })
  ] });
});
UserSessions.displayName = "UserSessions";


/***/ })

}]);
//# sourceMappingURL=UserAdminPage.c1541b35b4238d487d03.js.map