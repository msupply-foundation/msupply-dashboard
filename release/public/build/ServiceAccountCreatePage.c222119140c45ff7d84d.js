"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["ServiceAccountCreatePage"],{

/***/ "./public/app/core/components/Form/Form.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Form: () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");





function Form({
  defaultValues,
  onSubmit,
  validateOnMount = false,
  validateFieldsOnMount,
  children,
  validateOn = "onSubmit",
  maxWidth = 600,
  ...htmlProps
}) {
  const { handleSubmit, trigger, formState, ...rest } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
    mode: validateOn,
    defaultValues
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (validateOnMount) {
      trigger(validateFieldsOnMount);
    }
  }, [trigger, validateFieldsOnMount, validateOnMount]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "form",
    {
      className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
        maxWidth: maxWidth !== "none" ? maxWidth + "px" : maxWidth,
        width: "100%"
      }),
      onSubmit: handleSubmit(onSubmit),
      ...htmlProps,
      children: children({ errors: formState.errors, formState, trigger, ...rest })
    }
  );
}


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

/***/ "./public/app/core/components/RolePickerDrawer/RolePickerSelect.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolePickerSelect: () => (/* binding */ RolePickerSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/utils/selectUtils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Select/Select.tsx");
/* harmony import */ var _RolePickerDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/core/components/RolePickerDrawer/RolePickerDrawer.tsx");







const RolePickerSelect = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { control } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller,
      {
        name: "role-collection",
        control,
        render: ({ field: { ref, value, ...field } }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.MultiSelect,
          {
            ...field,
            onOpenMenu: toggleDrawer,
            onChange: () => {
            },
            value: value?.map(_grafana_data__WEBPACK_IMPORTED_MODULE_3__.toOption)
          }
        )
      }
    ),
    isDrawerOpen && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RolePickerDrawer__WEBPACK_IMPORTED_MODULE_5__.RolePickerDrawer, { onClose: toggleDrawer })
  ] });
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

/***/ "./public/app/features/serviceaccounts/ServiceAccountCreatePage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceAccountCreatePage: () => (/* binding */ ServiceAccountCreatePage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/orgs.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/components/RolePicker/UserRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");
/* harmony import */ var app_core_components_RolePickerDrawer_RolePickerSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/core/components/RolePickerDrawer/RolePickerSelect.tsx");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/admin/OrgRolePicker.tsx");
















const createServiceAccount = async (sa) => {
  const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().post("/api/serviceaccounts/", sa);
  await app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.fetchUserPermissions();
  return result;
};
const updateServiceAccount = async (uid, sa) => (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.getBackendSrv)().patch(`/api/serviceaccounts/${uid}`, sa);
const defaultServiceAccount = {
  id: 0,
  uid: "",
  orgId: app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.user.orgId,
  role: app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.licensedAccessControlEnabled() ? _grafana_data__WEBPACK_IMPORTED_MODULE_3__.OrgRole.None : _grafana_data__WEBPACK_IMPORTED_MODULE_3__.OrgRole.Viewer,
  tokens: 0,
  name: "",
  login: "",
  isDisabled: false,
  createdAt: "",
  teams: []
};
const ServiceAccountCreatePage = ({}) => {
  const [roleOptions, setRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [pendingRoles, setPendingRoles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    defaultValues: {
      name: "",
      role: defaultServiceAccount.role,
      roleCollection: [defaultServiceAccount.role],
      roles: []
    }
  });
  const {
    formState: { errors },
    register
  } = methods;
  const currentOrgId = app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.user.orgId;
  const [serviceAccount, setServiceAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultServiceAccount);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function fetchOptions() {
      try {
        if (app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_18__.AccessControlAction.ActionRolesList)) {
          let options = await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_15__.fetchRoleOptions)(currentOrgId);
          setRoleOptions(options);
        }
      } catch (e) {
        console.error("Error loading options", e);
      }
    }
    if (app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.licensedAccessControlEnabled()) {
      fetchOptions();
    }
  }, [currentOrgId]);
  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
    async (data) => {
      data.role = serviceAccount.role;
      const response = await createServiceAccount(data);
      try {
        const newAccount = {
          avatarUrl: response.avatarUrl,
          id: response.id,
          uid: response.uid,
          isDisabled: response.isDisabled,
          login: response.login,
          name: response.name,
          orgId: response.orgId,
          role: response.role,
          tokens: response.tokens
        };
        await updateServiceAccount(newAccount.uid, data);
        if (app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.licensedAccessControlEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_18__.AccessControlAction.ActionUserRolesAdd) && app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_18__.AccessControlAction.ActionUserRolesRemove)) {
          await (0,app_core_components_RolePicker_api__WEBPACK_IMPORTED_MODULE_15__.updateUserRoles)(pendingRoles, newAccount.id, newAccount.orgId);
        }
      } catch (e) {
        console.error(e);
      }
      _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.locationService.push(`/org/serviceaccounts/${response.uid}`);
    },
    [serviceAccount.role, pendingRoles]
  );
  const onRoleChange = (role) => {
    setServiceAccount({
      ...serviceAccount,
      role
    });
  };
  const onPendingRolesUpdate = (roles, userId, orgId) => {
    setPendingRoles(roles);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_13__.Page,
    {
      navId: "serviceaccounts",
      pageNav: { text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.page-nav.label", "Create service account") },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_13__.Page.Contents, { children: [
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.rolePickerDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.FormProvider, { ...methods, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.FieldSet, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
              {
                label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.name.label", "Display name"),
                required: true,
                invalid: !!errors.name,
                error: errors.name ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.name.required-error", "Display name is required") : void 0,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input, { id: "name", ...register("name", { required: true }), autoFocus: true })
              }
            ),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.role.label", "Role"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_RolePickerDrawer_RolePickerSelect__WEBPACK_IMPORTED_MODULE_16__.RolePickerSelect, {}) })
          ] }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "service-account-create-page.create.button", children: "Create" }) })
        ] }) }),
        !_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.config.featureToggles.rolePickerDrawer && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_12__.Form, { onSubmit, validateOn: "onSubmit", children: ({ register: register2, errors: errors2 }) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.FieldSet, { children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field,
                {
                  label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.name.label", "Display name"),
                  required: true,
                  invalid: !!errors2.name,
                  error: errors2.name ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.name.required-error", "Display name is required") : void 0,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Input, { id: "display-name-input", ...register2("name", { required: true }), autoFocus: true })
                }
              ),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.role.label", "Role"), children: app_core_core__WEBPACK_IMPORTED_MODULE_17__.contextSrv.licensedAccessControlEnabled() ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                app_core_components_RolePicker_UserRolePicker__WEBPACK_IMPORTED_MODULE_14__.UserRolePicker,
                {
                  apply: true,
                  userId: serviceAccount.id || 0,
                  orgId: serviceAccount.orgId,
                  basicRole: serviceAccount.role,
                  onBasicRoleChange: onRoleChange,
                  roleOptions,
                  onApplyRoles: onPendingRolesUpdate,
                  pendingRoles,
                  maxWidth: "100%"
                }
              ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _admin_OrgRolePicker__WEBPACK_IMPORTED_MODULE_19__.OrgRolePicker,
                {
                  "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("service-account-create-page.role.label", "Role"),
                  value: serviceAccount.role,
                  onChange: onRoleChange
                }
              ) })
            ] }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { type: "submit", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "service-account-create-page.create.button", children: "Create" }) })
          ] });
        } })
      ] })
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ServiceAccountCreatePage);


/***/ })

}]);
//# sourceMappingURL=ServiceAccountCreatePage.c222119140c45ff7d84d.js.map