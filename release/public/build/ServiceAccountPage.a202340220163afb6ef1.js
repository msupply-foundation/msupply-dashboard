"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountPage"],{

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

/***/ "./public/app/features/serviceaccounts/ServiceAccountPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAccountPageUnconnected: () => (/* binding */ ServiceAccountPageUnconnected),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/datetime/common.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _ServiceAccountPermissions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/serviceaccounts/ServiceAccountPermissions.tsx");
/* harmony import */ var _components_CreateTokenModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/serviceaccounts/components/CreateTokenModal.tsx");
/* harmony import */ var _components_ServiceAccountProfile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/serviceaccounts/components/ServiceAccountProfile.tsx");
/* harmony import */ var _components_ServiceAccountTokensTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/serviceaccounts/components/ServiceAccountTokensTable.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/serviceaccounts/state/actions.ts");
/* harmony import */ var _state_actionsServiceAccountPage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/serviceaccounts/state/actionsServiceAccountPage.ts");

















function mapStateToProps(state) {
  return {
    serviceAccount: state.serviceAccountProfile.serviceAccount,
    tokens: state.serviceAccountProfile.tokens,
    isLoading: state.serviceAccountProfile.isLoading,
    timezone: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.getTimeZone)(state.user)
  };
}
const mapDispatchToProps = {
  createServiceAccountToken: _state_actionsServiceAccountPage__WEBPACK_IMPORTED_MODULE_18__.createServiceAccountToken,
  deleteServiceAccount: _state_actionsServiceAccountPage__WEBPACK_IMPORTED_MODULE_18__.deleteServiceAccount,
  deleteServiceAccountToken: _state_actionsServiceAccountPage__WEBPACK_IMPORTED_MODULE_18__.deleteServiceAccountToken,
  loadServiceAccount: _state_actionsServiceAccountPage__WEBPACK_IMPORTED_MODULE_18__.loadServiceAccount,
  loadServiceAccountTokens: _state_actionsServiceAccountPage__WEBPACK_IMPORTED_MODULE_18__.loadServiceAccountTokens,
  updateServiceAccount: _state_actionsServiceAccountPage__WEBPACK_IMPORTED_MODULE_18__.updateServiceAccount
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps);
const ServiceAccountPageUnconnected = ({
  serviceAccount,
  tokens,
  timezone,
  isLoading,
  createServiceAccountToken: createServiceAccountToken2,
  deleteServiceAccount: deleteServiceAccount2,
  deleteServiceAccountToken: deleteServiceAccountToken2,
  loadServiceAccount: loadServiceAccount2,
  loadServiceAccountTokens: loadServiceAccountTokens2,
  updateServiceAccount: updateServiceAccount2
}) => {
  const [newToken, setNewToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [isTokenModalOpen, setIsTokenModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [isDisableModalOpen, setIsDisableModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { id = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const tokenActionsDisabled = serviceAccount.isDisabled || serviceAccount.isExternal || !app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_12__.AccessControlAction.ServiceAccountsWrite);
  const ableToWrite = app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_12__.AccessControlAction.ServiceAccountsWrite);
  const canReadPermissions = app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.hasPermissionInMetadata(
    app_types_accessControl__WEBPACK_IMPORTED_MODULE_12__.AccessControlAction.ServiceAccountsPermissionsRead,
    serviceAccount
  );
  const pageNav = {
    text: serviceAccount.name,
    img: serviceAccount.avatarUrl,
    subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
      "serviceaccounts.service-account-page-unconnected.page-nav.subTitle.manage-settings-individual-service-account",
      "Manage settings for an individual service account."
    )
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadServiceAccount2(id);
    loadServiceAccountTokens2(id);
    if (app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.licensedAccessControlEnabled()) {
      (0,_state_actions__WEBPACK_IMPORTED_MODULE_17__.fetchACOptions)();
    }
  }, [loadServiceAccount2, loadServiceAccountTokens2, id]);
  const onProfileChange = (serviceAccount2) => {
    updateServiceAccount2(serviceAccount2);
  };
  const showDeleteServiceAccountModal = (show) => () => {
    setIsDeleteModalOpen(show);
  };
  const showDisableServiceAccountModal = (show) => () => {
    setIsDisableModalOpen(show);
  };
  const handleServiceAccountDelete = () => {
    deleteServiceAccount2(serviceAccount.uid);
  };
  const handleServiceAccountDisable = () => {
    updateServiceAccount2({ ...serviceAccount, isDisabled: true });
    setIsDisableModalOpen(false);
  };
  const handleServiceAccountEnable = () => {
    updateServiceAccount2({ ...serviceAccount, isDisabled: false });
  };
  const onDeleteServiceAccountToken = (key) => {
    deleteServiceAccountToken2(serviceAccount?.uid, key.id);
  };
  const onCreateToken = (token) => {
    createServiceAccountToken2(serviceAccount?.uid, token, setNewToken);
  };
  const onTokenModalClose = () => {
    setIsTokenModalOpen(false);
    setNewToken("");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page, { navId: "serviceaccounts", pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_10__.Page.Contents, { isLoading, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      serviceAccount && !serviceAccount.isExternal && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 2, height: "auto", justifyContent: "flex-end", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
          {
            type: "button",
            variant: "destructive",
            onClick: showDeleteServiceAccountModal(true),
            disabled: !app_core_core__WEBPACK_IMPORTED_MODULE_11__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_12__.AccessControlAction.ServiceAccountsDelete),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "serviceaccounts.service-account-page-unconnected.delete-service-account", children: "Delete service account" })
          }
        ),
        serviceAccount.isDisabled ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
          {
            type: "button",
            variant: "secondary",
            onClick: handleServiceAccountEnable,
            disabled: !ableToWrite,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "serviceaccounts.service-account-page-unconnected.enable-service-account", children: "Enable service account" })
          }
        ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
          {
            type: "button",
            variant: "secondary",
            onClick: showDisableServiceAccountModal(true),
            disabled: !ableToWrite,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "serviceaccounts.service-account-page-unconnected.disable-service-account", children: "Disable service account" })
          }
        )
      ] }),
      serviceAccount && serviceAccount.isExternal && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { gap: 2, height: "auto", justifyContent: "flex-end", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.IconButton,
        {
          disabled: true,
          name: "lock",
          size: "md",
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
            "serviceaccounts.service-account-page-unconnected.tooltip-managed-service-account-cannot-modified",
            "This is a managed service account and cannot be modified"
          )
        }
      ) }),
      serviceAccount && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ServiceAccountProfile__WEBPACK_IMPORTED_MODULE_15__.ServiceAccountProfile, { serviceAccount, timeZone: timezone, onChange: onProfileChange }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Stack, { justifyContent: "space-between", height: "auto", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "serviceaccounts.service-account-page-unconnected.tokens", children: "Tokens" }) }),
        !serviceAccount.isExternal && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button,
          {
            onClick: () => setIsTokenModalOpen(true),
            disabled: tokenActionsDisabled,
            icon: "plus",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "serviceaccounts.service-account-page-unconnected.add-service-account-token", children: "Add service account token" })
          },
          "add-service-account-token"
        )
      ] }),
      tokens && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _components_ServiceAccountTokensTable__WEBPACK_IMPORTED_MODULE_16__.ServiceAccountTokensTable,
        {
          tokens,
          timeZone: timezone,
          onDelete: onDeleteServiceAccountToken,
          tokenActionsDisabled
        }
      ),
      !serviceAccount.isExternal && canReadPermissions && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ServiceAccountPermissions__WEBPACK_IMPORTED_MODULE_13__.ServiceAccountPermissions, { serviceAccount })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.ConfirmModal,
      {
        isOpen: isDeleteModalOpen,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "serviceaccounts.service-account-page-unconnected.title-delete-service-account",
          "Delete service account"
        ),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "serviceaccounts.service-account-page-unconnected.body-delete-service-account",
          "Are you sure you want to delete this service account?"
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "serviceaccounts.service-account-page-unconnected.confirmText-delete-service-account",
          "Delete service account"
        ),
        onConfirm: handleServiceAccountDelete,
        onDismiss: showDeleteServiceAccountModal(false)
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.ConfirmModal,
      {
        isOpen: isDisableModalOpen,
        title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "serviceaccounts.service-account-page-unconnected.title-disable-service-account",
          "Disable service account"
        ),
        body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "serviceaccounts.service-account-page-unconnected.body-disable-service-account",
          "Are you sure you want to disable this service account?"
        ),
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
          "serviceaccounts.service-account-page-unconnected.confirmText-disable-service-account",
          "Disable service account"
        ),
        onConfirm: handleServiceAccountDisable,
        onDismiss: showDisableServiceAccountModal(false)
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _components_CreateTokenModal__WEBPACK_IMPORTED_MODULE_14__.CreateTokenModal,
      {
        isOpen: isTokenModalOpen,
        token: newToken,
        serviceAccountLogin: serviceAccount.login,
        onCreateToken,
        onClose: onTokenModalClose
      }
    )
  ] }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(ServiceAccountPageUnconnected));


/***/ }),

/***/ "./public/app/features/serviceaccounts/ServiceAccountPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAccountPermissions: () => (/* binding */ ServiceAccountPermissions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/AccessControl/Permissions.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/accessControl.ts");





const ServiceAccountPermissions = (props) => {
  const canSetPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermissionInMetadata(
    app_types_accessControl__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ServiceAccountsPermissionsWrite,
    props.serviceAccount
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_1__.Permissions,
    {
      addPermissionTitle: "Add permission",
      buttonLabel: "Add permission",
      resource: "serviceaccounts",
      resourceId: props.serviceAccount.uid,
      canSetPermissions
    }
  );
};


/***/ }),

/***/ "./public/app/features/serviceaccounts/components/CreateTokenModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTokenModal: () => (/* binding */ CreateTokenModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/ClipboardButton/ClipboardButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/DatePickerWithInput/DatePickerWithInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");








const EXPIRATION_OPTIONS = [
  { label: "No expiration", value: false },
  { label: "Set expiration date", value: true }
];
const CreateTokenModal = ({ isOpen, token, serviceAccountLogin, onCreateToken, onClose }) => {
  const tomorrow = /* @__PURE__ */ new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const maxExpirationDate = /* @__PURE__ */ new Date();
  if (_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.tokenExpirationDayLimit !== void 0 && _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.tokenExpirationDayLimit > -1) {
    maxExpirationDate.setDate(maxExpirationDate.getDate() + _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.tokenExpirationDayLimit + 1);
  } else {
    maxExpirationDate.setDate(864e13);
  }
  const defaultExpirationDate = _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.tokenExpirationDayLimit !== void 0 && _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.config.tokenExpirationDayLimit > 0;
  const [defaultTokenName, setDefaultTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [newTokenName, setNewTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const [isWithExpirationDate, setIsWithExpirationDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultExpirationDate);
  const [newTokenExpirationDate, setNewTokenExpirationDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(tomorrow);
  const [isExpirationDateValid, setIsExpirationDateValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(newTokenExpirationDate !== "");
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.useStyles2)(getStyles);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isOpen) {
      setDefaultTokenName(`${serviceAccountLogin}-${(0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])()}`);
    }
  }, [serviceAccountLogin, isOpen]);
  const onExpirationDateChange = (value) => {
    const isValid = value !== "";
    setIsExpirationDateValid(isValid);
    setNewTokenExpirationDate(value);
  };
  const onGenerateToken = () => {
    onCreateToken({
      name: newTokenName || defaultTokenName,
      secondsToLive: isWithExpirationDate ? getSecondsToLive(newTokenExpirationDate) : void 0
    });
  };
  const onCloseInternal = () => {
    setNewTokenName("");
    setDefaultTokenName("");
    setIsWithExpirationDate(defaultExpirationDate);
    setNewTokenExpirationDate(tomorrow);
    setIsExpirationDateValid(newTokenExpirationDate !== "");
    onClose();
  };
  const modalTitle = !token ? "Add service account token" : "Service account token created";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal, { isOpen, title: modalTitle, onDismiss: onCloseInternal, className: styles.modal, children: !token ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.create-token-modal.label-display-name", "Display name"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "serviceaccounts.create-token-modal.description-name-to-easily-identify-the-token",
          "Name to easily identify the token"
        ),
        required: true,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input,
          {
            name: "tokenName",
            value: newTokenName,
            placeholder: defaultTokenName,
            onChange: (e) => {
              setNewTokenName(e.currentTarget.value);
            }
          }
        )
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.create-token-modal.label-expiration", "Expiration"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.RadioButtonGroup,
      {
        options: EXPIRATION_OPTIONS,
        value: isWithExpirationDate,
        onChange: setIsWithExpirationDate,
        size: "md"
      }
    ) }),
    isWithExpirationDate && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.create-token-modal.label-expiration-date", "Expiration date"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.DatePickerWithInput,
      {
        onChange: onExpirationDateChange,
        value: newTokenExpirationDate,
        placeholder: "",
        minDate: tomorrow,
        maxDate: maxExpirationDate
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal.ButtonRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { onClick: onGenerateToken, disabled: isWithExpirationDate && !isExpirationDateValid, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "serviceaccounts.create-token-modal.generate-token", children: "Generate token" }) }) })
  ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Field,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.create-token-modal.label-token", "Token"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
          "serviceaccounts.create-token-modal.description-token",
          "Copy the token now as you will not be able to see it again. Losing a token requires creating a new one."
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.modalTokenRow, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Input, { name: "tokenValue", value: token, readOnly: true }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ClipboardButton,
            {
              className: styles.modalCopyToClipboardButton,
              variant: "primary",
              size: "md",
              icon: "copy",
              getText: () => token,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "serviceaccounts.create-token-modal.copy-clipboard", children: "Copy to clipboard" })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Modal.ButtonRow, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.ClipboardButton, { variant: "primary", getText: () => token, onClipboardCopy: onCloseInternal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "serviceaccounts.create-token-modal.copy-to-clipboard-and-close", children: "Copy to clipboard and close" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Button, { variant: "secondary", onClick: onCloseInternal, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "serviceaccounts.create-token-modal.close", children: "Close" }) })
    ] })
  ] }) });
};
const getSecondsToLive = (date) => {
  const dateAsDate = new Date(date);
  const now = /* @__PURE__ */ new Date();
  return Math.ceil((dateAsDate.getTime() - now.getTime()) / 1e3);
};
const getStyles = (theme) => {
  return {
    modal: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "550px"
    }),
    modalTokenRow: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex"
    }),
    modalCopyToClipboardButton: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(0.5)
    })
  };
};


/***/ }),

/***/ "./public/app/features/serviceaccounts/components/ServiceAccountProfile.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAccountProfile: () => (/* binding */ ServiceAccountProfile),
/* harmony export */   getStyles: () => (/* binding */ getStyles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _ServiceAccountProfileRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/serviceaccounts/components/ServiceAccountProfileRow.tsx");
/* harmony import */ var _ServiceAccountRoleRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/serviceaccounts/components/ServiceAccountRoleRow.tsx");












function ServiceAccountProfile({ serviceAccount, timeZone, onChange }) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const ableToWrite = app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ServiceAccountsWrite);
  const [roles, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const onRoleChange = (role) => {
    onChange({ ...serviceAccount, role });
  };
  const onNameChange = (newValue) => {
    onChange({ ...serviceAccount, name: newValue });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    async function fetchOptions() {
      try {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_10__.AccessControlAction.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_8__.fetchRoleOptions)(serviceAccount.orgId);
          setRoleOptions(options);
        }
      } catch (e) {
        console.error("Error loading options for service account");
      }
    }
    if (app_core_core__WEBPACK_IMPORTED_MODULE_9__.contextSrv.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [serviceAccount.orgId]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.section, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "serviceaccounts.service-account-profile.information", children: "Information" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", { className: "filter-table", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", { children: [
      serviceAccount.id && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ServiceAccountProfileRow__WEBPACK_IMPORTED_MODULE_11__.ServiceAccountProfileRow,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.service-account-profile.label-numerical-identifier", "Numerical identifier"),
          value: serviceAccount.id.toString(),
          disabled: true
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ServiceAccountProfileRow__WEBPACK_IMPORTED_MODULE_11__.ServiceAccountProfileRow,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.service-account-profile.label-name", "Name"),
          value: serviceAccount.name,
          onChange: !serviceAccount.isExternal ? onNameChange : void 0,
          disabled: !ableToWrite || serviceAccount.isDisabled
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ServiceAccountProfileRow__WEBPACK_IMPORTED_MODULE_11__.ServiceAccountProfileRow,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.service-account-profile.label-id", "ID"),
          value: serviceAccount.login,
          disabled: serviceAccount.isDisabled
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ServiceAccountRoleRow__WEBPACK_IMPORTED_MODULE_12__.ServiceAccountRoleRow,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.service-account-profile.label-roles", "Roles"),
          serviceAccount,
          onRoleChange,
          roleOptions: roles
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _ServiceAccountProfileRow__WEBPACK_IMPORTED_MODULE_11__.ServiceAccountProfileRow,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("serviceaccounts.service-account-profile.label-creation-date", "Creation date"),
          value: (0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.dateTimeFormat)(serviceAccount.createdAt, { timeZone }),
          disabled: serviceAccount.isDisabled
        }
      ),
      serviceAccount.isExternal && serviceAccount.requiredBy && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Label, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "serviceaccounts.service-account-profile.used-by", children: "Used by" }) }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.TextLink, { href: `/plugins/${serviceAccount.requiredBy}`, children: serviceAccount.requiredBy }) })
      ] })
    ] }) })
  ] });
}
const getStyles = (theme) => ({
  section: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(4)
  })
});


/***/ }),

/***/ "./public/app/features/serviceaccounts/components/ServiceAccountProfileRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAccountProfileRow: () => (/* binding */ ServiceAccountProfileRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Legacy/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/ConfirmButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const ServiceAccountProfileRow = ({ label, value, inputType, disabled, onChange }) => {
  const inputElem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(value);
  const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getStyles);
  const inputId = `${label}-input`;
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (isEditing) {
      focusInput();
    }
  }, [isEditing]);
  const onEditClick = () => {
    setIsEditing(true);
  };
  const onCancelClick = () => {
    setIsEditing(false);
    setInputValue(value || "");
  };
  const onInputChange = (event, status) => {
    if (status === _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LegacyInputStatus.Invalid) {
      return;
    }
    setInputValue(event.target.value);
  };
  const onInputBlur = (event, status) => {
    if (status === _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.LegacyInputStatus.Invalid) {
      return;
    }
    setInputValue(event.target.value);
  };
  const focusInput = () => {
    inputElem?.current?.focus();
  };
  const onSave = () => {
    setIsEditing(false);
    if (onChange) {
      onChange(inputValue);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Label, { htmlFor: inputId, children: label }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "width-25", colSpan: 2, children: !disabled && isEditing ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Input,
      {
        id: inputId,
        type: inputType,
        defaultValue: value,
        onBlur: onInputBlur,
        onChange: onInputChange,
        ref: inputElem,
        width: 30
      }
    ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)({ [styles.disabled]: disabled }), children: value }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: onChange && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ConfirmButton,
      {
        closeOnConfirm: true,
        confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("serviceaccounts.service-account-profile-row.confirmText-save", "Save"),
        onConfirm: onSave,
        onClick: onEditClick,
        onCancel: onCancelClick,
        disabled,
        children: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("serviceaccounts.service-account-profile-row.edit", "Edit")
      }
    ) })
  ] });
};
const getStyles = (theme) => {
  return {
    disabled: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.secondary
    })
  };
};


/***/ }),

/***/ "./public/app/features/serviceaccounts/components/ServiceAccountRoleRow.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAccountRoleRow: () => (/* binding */ ServiceAccountRoleRow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_features_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/types/accessControl.ts");








const ServiceAccountRoleRow = ({ label, serviceAccount, roleOptions, onRoleChange }) => {
  const inputId = `${label}-input`;
  const canUpdateRole = app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_6__.AccessControlAction.ServiceAccountsWrite, serviceAccount);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { htmlFor: inputId, children: label }) }),
    app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 3, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_3__.UserRolePicker,
      {
        userId: serviceAccount.id,
        orgId: serviceAccount.orgId,
        basicRole: serviceAccount.role,
        onBasicRoleChange: onRoleChange,
        roleOptions,
        basicRoleDisabled: !canUpdateRole,
        disabled: serviceAccount.isExternal || serviceAccount.isDisabled
      }
    ) }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_features_admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_5__.OrgRolePicker,
        {
          width: 24,
          inputId,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("serviceaccounts.service-account-role-row.aria-label-role", "Role"),
          value: serviceAccount.role,
          disabled: serviceAccount.isExternal || serviceAccount.isDisabled,
          onChange: onRoleChange
        }
      ) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { colSpan: 2 })
    ] })
  ] });
};


/***/ }),

/***/ "./public/app/features/serviceaccounts/components/ServiceAccountTokensTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAccountTokensTable: () => (/* binding */ ServiceAccountTokensTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/datetime/formatter.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmButton/DeleteButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");






const ServiceAccountTokensTable = ({ tokens, timeZone, tokenActionsDisabled, onDelete }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useTheme2)();
  const styles = getStyles(theme);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.section, "filter-table"), children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "serviceaccounts.service-account-tokens-table.name", children: "Name" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "serviceaccounts.service-account-tokens-table.expires", children: "Expires" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "serviceaccounts.service-account-tokens-table.created", children: "Created" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "serviceaccounts.service-account-tokens-table.last-used-at", children: "Last used at" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {}),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {})
    ] }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: tokens.map((key) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { className: styles.tableRow(key.hasExpired || key.isRevoked), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: key.name }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TokenExpiration, { timeZone, token: key }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatDate(timeZone, key.created) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: formatLastUsedAtDate(timeZone, key.lastUsedAt) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { className: "width-1 text-center", children: key.isRevoked && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TokenRevoked, {}) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.DeleteButton,
          {
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "serviceaccounts.service-account-tokens-table.aria-label-delete-button",
              "Delete service account token {{key}}",
              { key: key.name }
            ),
            size: "sm",
            onConfirm: () => onDelete(key),
            disabled: tokenActionsDisabled
          }
        ) })
      ] }, key.id);
    }) })
  ] });
};
function formatLastUsedAtDate(timeZone, lastUsedAt) {
  if (!lastUsedAt) {
    return "Never";
  }
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(lastUsedAt, { timeZone });
}
function formatDate(timeZone, expiration) {
  if (!expiration) {
    return "No expiration date";
  }
  return (0,_grafana_data__WEBPACK_IMPORTED_MODULE_2__.dateTimeFormat)(expiration, { timeZone });
}
function formatSecondsLeftUntilExpiration(secondsUntilExpiration) {
  const days = Math.ceil(secondsUntilExpiration / (3600 * 24));
  const daysFormat = days > 1 ? `${days} days` : `${days} day`;
  return `Expires in ${daysFormat}`;
}
const TokenRevoked = () => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: styles.hasExpired, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "serviceaccounts.token-revoked.revoked-label", children: "Revoked" }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.tooltipContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
      {
        content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
          "serviceaccounts.token-revoked.content-token-publicly-exposed-please-rotate",
          "This token has been publicly exposed. Please rotate this token"
        ),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "exclamation-triangle", className: styles.toolTipIcon })
      }
    ) })
  ] });
};
const TokenExpiration = ({ timeZone, token }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  if (!token.expiration) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.neverExpire, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "serviceaccounts.token-expiration.never", children: "Never" }) });
  }
  if (token.secondsUntilExpiration) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.secondsUntilExpiration, children: formatSecondsLeftUntilExpiration(token.secondsUntilExpiration) });
  }
  if (token.hasExpired) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: styles.hasExpired, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "serviceaccounts.token-expiration.expired-label", children: "Expired" }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.tooltipContainer, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip,
        {
          content: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("serviceaccounts.token-expiration.content-this-token-has-expired", "This token has expired"),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "exclamation-triangle", className: styles.toolTipIcon })
        }
      ) })
    ] });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: formatDate(timeZone, token.expiration) });
};
const getStyles = (theme) => ({
  tableRow: (hasExpired) => (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: hasExpired ? theme.colors.text.secondary : theme.colors.text.primary
  }),
  tooltipContainer: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginLeft: theme.spacing(1)
  }),
  toolTipIcon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.error.text
  }),
  secondsUntilExpiration: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.warning.text
  }),
  hasExpired: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.error.text
  }),
  neverExpire: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    color: theme.colors.text.secondary
  }),
  section: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: theme.spacing(4)
  })
});


/***/ }),

/***/ "./public/app/features/serviceaccounts/state/actions.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changePage: () => (/* binding */ changePage),
/* harmony export */   changeQuery: () => (/* binding */ changeQuery),
/* harmony export */   changeStateFilter: () => (/* binding */ changeStateFilter),
/* harmony export */   createServiceAccountToken: () => (/* binding */ createServiceAccountToken),
/* harmony export */   deleteServiceAccount: () => (/* binding */ deleteServiceAccount),
/* harmony export */   fetchACOptions: () => (/* binding */ fetchACOptions),
/* harmony export */   fetchServiceAccounts: () => (/* binding */ fetchServiceAccounts),
/* harmony export */   updateServiceAccount: () => (/* binding */ updateServiceAccount)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var app_types_serviceaccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/serviceaccount.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/serviceaccounts/state/reducers.ts");








const BASE_URL = `/api/serviceaccounts`;
function fetchACOptions() {
  return async (dispatch) => {
    try {
      if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionRolesList)) {
        const options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_2__.fetchRoleOptions)();
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.acOptionsLoaded)(options));
      }
    } catch (error) {
      console.error(error);
    }
  };
}
function fetchServiceAccounts({ withLoadingIndicator } = { withLoadingIndicator: false }) {
  return async (dispatch, getState) => {
    try {
      if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ServiceAccountsRead)) {
        if (withLoadingIndicator) {
          dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.serviceAccountsFetchBegin)());
        }
        const { perPage, page, query, serviceAccountStateFilter } = getState().serviceAccounts;
        const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(
          `/api/serviceaccounts/search?perpage=${perPage}&page=${page}&query=${query}${getStateFilter(
            serviceAccountStateFilter
          )}&accesscontrol=true`
        );
        if (app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.licensedAccessControlEnabled() && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_4__.AccessControlAction.ActionUserRolesList)) {
          dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.rolesFetchBegin)());
          const orgId = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_3__.contextSrv.user.orgId;
          const userIds = result?.serviceAccounts.map((u) => u.id);
          const roles = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post(`/api/access-control/users/roles/search?includeHidden=true`, {
            userIds,
            orgId
          });
          result.serviceAccounts.forEach((u) => {
            u.roles = roles ? roles[u.id] || [] : [];
          });
          dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.rolesFetchEnd)());
        }
        dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.serviceAccountsFetched)(result));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.serviceAccountsFetchEnd)());
    }
  };
}
const fetchServiceAccountsWithDebounce = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.debounce)((dispatch) => dispatch(fetchServiceAccounts()), 500, {
  leading: true
});
function updateServiceAccount(serviceAccount) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().patch(`${BASE_URL}/${serviceAccount.uid}?accesscontrol=true`, {
      ...serviceAccount
    });
    dispatch(fetchServiceAccounts());
  };
}
function deleteServiceAccount(serviceAccountUid) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().delete(`${BASE_URL}/${serviceAccountUid}`);
    dispatch(fetchServiceAccounts());
  };
}
function createServiceAccountToken(saUid, token, onTokenCreated) {
  return async (dispatch) => {
    const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().post(`${BASE_URL}/${saUid}/tokens`, token);
    onTokenCreated(result.key);
    dispatch(fetchServiceAccounts());
  };
}
const getStateFilter = (value) => {
  switch (value) {
    case app_types_serviceaccount__WEBPACK_IMPORTED_MODULE_5__.ServiceAccountStateFilter.WithExpiredTokens:
      return "&expiredTokens=true";
    case app_types_serviceaccount__WEBPACK_IMPORTED_MODULE_5__.ServiceAccountStateFilter.Disabled:
      return "&disabled=true";
    case app_types_serviceaccount__WEBPACK_IMPORTED_MODULE_5__.ServiceAccountStateFilter.External:
      return "&external=true";
    default:
      return "";
  }
};
function changeQuery(query) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.queryChanged)(query));
    fetchServiceAccountsWithDebounce(dispatch);
  };
}
function changeStateFilter(filter) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.stateFilterChanged)(filter));
    dispatch(fetchServiceAccounts());
  };
}
function changePage(page) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_6__.pageChanged)(page));
    dispatch(fetchServiceAccounts());
  };
}


/***/ }),

/***/ "./public/app/features/serviceaccounts/state/actionsServiceAccountPage.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createServiceAccountToken: () => (/* binding */ createServiceAccountToken),
/* harmony export */   deleteServiceAccount: () => (/* binding */ deleteServiceAccount),
/* harmony export */   deleteServiceAccountToken: () => (/* binding */ deleteServiceAccountToken),
/* harmony export */   loadServiceAccount: () => (/* binding */ loadServiceAccount),
/* harmony export */   loadServiceAccountTokens: () => (/* binding */ loadServiceAccountTokens),
/* harmony export */   updateServiceAccount: () => (/* binding */ updateServiceAccount)
/* harmony export */ });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/utils/accessControl.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/features/serviceaccounts/state/reducers.ts");




const BASE_URL = `/api/serviceaccounts`;
function loadServiceAccount(saUid) {
  return async (dispatch) => {
    dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.serviceAccountFetchBegin)());
    try {
      const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`${BASE_URL}/${saUid}`, (0,app_core_utils_accessControl__WEBPACK_IMPORTED_MODULE_2__.accessControlQueryParam)());
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.serviceAccountLoaded)(response));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.serviceAccountFetchEnd)());
    }
  };
}
function updateServiceAccount(serviceAccount) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().patch(`${BASE_URL}/${serviceAccount.uid}?accesscontrol=true`, {
      ...serviceAccount
    });
    dispatch(loadServiceAccount(serviceAccount.uid));
  };
}
function deleteServiceAccount(serviceAccountUid) {
  return async () => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`${BASE_URL}/${serviceAccountUid}`);
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.locationService.push("/org/serviceaccounts");
  };
}
function createServiceAccountToken(saUid, token, onTokenCreated) {
  return async (dispatch) => {
    const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().post(`${BASE_URL}/${saUid}/tokens`, token);
    onTokenCreated(result.key);
    dispatch(loadServiceAccountTokens(saUid));
  };
}
function deleteServiceAccountToken(saUid, id) {
  return async (dispatch) => {
    await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().delete(`${BASE_URL}/${saUid}/tokens/${id}`);
    dispatch(loadServiceAccountTokens(saUid));
  };
}
function loadServiceAccountTokens(saUid) {
  return async (dispatch) => {
    try {
      const response = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__.getBackendSrv)().get(`${BASE_URL}/${saUid}/tokens`);
      dispatch((0,_reducers__WEBPACK_IMPORTED_MODULE_3__.serviceAccountTokensLoaded)(response));
    } catch (error) {
      console.error(error);
    }
  };
}


/***/ })

}]);
//# sourceMappingURL=ServiceAccountPage.a202340220163afb6ef1.js.map