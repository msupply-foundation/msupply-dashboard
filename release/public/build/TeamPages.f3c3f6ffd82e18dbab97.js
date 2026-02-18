"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["TeamPages"],{

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

/***/ "./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Alert/Alert.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/CallToActionCard/CallToActionCard.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");






const ctaStyle = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  textAlign: "center"
});
const infoBoxStyles = (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
  maxWidth: "700px",
  margin: "0 auto"
});
const EmptyListCTA = ({
  title,
  buttonIcon,
  buttonLink,
  buttonTitle,
  buttonDisabled,
  onClick,
  proTip,
  proTipLink,
  proTipLinkTitle,
  proTipTarget,
  infoBox,
  infoBoxTitle
}) => {
  const footer = () => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      proTip ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Icon, { name: "rocket" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "empty-list-cta.pro-tip", children: [
          "ProTip: ",
          { proTip }
        ] }),
        proTipLink && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: proTipLink, target: proTipTarget, className: "text-link", children: proTipLinkTitle })
      ] }, "proTipFooter") : "",
      infoBox ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Alert, { severity: "info", title: infoBoxTitle ?? "", className: infoBoxStyles, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { dangerouslySetInnerHTML: infoBox }) }) : ""
    ] });
  };
  const ctaElementClassName = !footer() ? (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    marginBottom: "20px"
  }) : "";
  const ButtonEl = buttonLink ? _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.LinkButton : _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button;
  const ctaElement = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    ButtonEl,
    {
      size: "lg",
      onClick,
      href: buttonLink,
      icon: buttonIcon,
      className: ctaElementClassName,
      "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.components.CallToActionCard.buttonV2(buttonTitle),
      disabled: buttonDisabled,
      children: buttonTitle
    }
  );
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.CallToActionCard, { className: ctaStyle, message: title, footer: footer(), callToActionElement: ctaElement });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyListCTA);


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

/***/ "./public/app/core/components/RolePicker/hooks.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMultiOrgRoleOptions: () => (/* binding */ useMultiOrgRoleOptions),
/* harmony export */   useRoleOptions: () => (/* binding */ useRoleOptions)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-use/esm/useDeepCompareEffect.js");
/* harmony import */ var react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-use/lib/useAsync.js");
/* harmony import */ var app_core_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/core.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/RolePicker/api.ts");








const useRoleOptions = (organizationId) => {
  const [orgId, setOrgId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(organizationId);
  const { value = [] } = (0,react_use_lib_useAsync__WEBPACK_IMPORTED_MODULE_3__["default"])(async () => {
    if (app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() && app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionRolesList)) {
      return (0,_api__WEBPACK_IMPORTED_MODULE_6__.fetchRoleOptions)(orgId);
    }
    return Promise.resolve([]);
  }, [orgId]);
  return [{ roleOptions: value }, setOrgId];
};
const useMultiOrgRoleOptions = (orgIDs) => {
  const [orgRoleOptions, setOrgRoleOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react_use__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    if (!app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.licensedAccessControlEnabled() || !app_core_core__WEBPACK_IMPORTED_MODULE_4__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_5__.AccessControlAction.ActionRolesList)) {
      return;
    }
    const currentOrgIDs = Object.keys(orgRoleOptions).map((o) => typeof o === "number" ? o : parseInt(o, 10));
    const newOrgIDs = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.difference)(orgIDs, currentOrgIDs);
    Promise.all(
      newOrgIDs.map((orgID) => {
        return (0,_api__WEBPACK_IMPORTED_MODULE_6__.fetchRoleOptions)(orgID).then((roleOptions) => [orgID, roleOptions]);
      })
    ).then((value) => {
      setOrgRoleOptions({
        ...orgRoleOptions,
        ...Object.fromEntries(value)
      });
    });
  }, [orgIDs]);
  return orgRoleOptions;
};


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

/***/ "./public/app/core/components/SharedPreferences/SharedPreferences.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedPreferences: () => (/* binding */ SharedPreferences),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-data/src/types/app.ts");
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/constants.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/TimeZonePicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/DateTimePickers/WeekStartPicker.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/FeatureBadge/FeatureBadge.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Label.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/Combobox/Combobox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
/* harmony import */ var app_core_internationalization_constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/core/internationalization/constants.ts");
/* harmony import */ var app_core_internationalization_locales__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./public/app/core/internationalization/locales.ts");
/* harmony import */ var app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./public/app/core/services/PreferencesService.ts");
/* harmony import */ var app_core_services_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./public/app/core/services/theme.ts");
/* harmony import */ var _ThemeSelector_getSelectableThemes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./public/app/core/components/ThemeSelector/getSelectableThemes.ts");















function getLanguageOptions() {
  const languageOptions = app_core_internationalization_constants__WEBPACK_IMPORTED_MODULE_20__.LANGUAGES.map((v) => ({
    value: v.code,
    label: v.name
  })).sort((a, b) => {
    if (a.value === _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.PSEUDO_LOCALE) {
      return 1;
    }
    if (b.value === _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.PSEUDO_LOCALE) {
      return -1;
    }
    return a.label.localeCompare(b.label);
  });
  if (true) {
    languageOptions.push({
      value: _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.PSEUDO_LOCALE,
      label: "Pseudo-locale"
    });
  }
  const options = [
    {
      value: "",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("common.locale.default", "Default")
    },
    ...languageOptions
  ];
  return options;
}
function getRegionalFormatOptions() {
  const localeOptions = app_core_internationalization_locales__WEBPACK_IMPORTED_MODULE_21__.LOCALES.map((v) => ({
    value: v.code,
    label: v.name
  })).sort((a, b) => {
    return a.label.localeCompare(b.label);
  });
  const options = [
    {
      value: "",
      label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("common.locale.default", "Default")
    },
    ...localeOptions
  ];
  return options;
}
class SharedPreferences extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmitForm = async (event) => {
      event.preventDefault();
      const confirmationResult = this.props.onConfirm ? await this.props.onConfirm() : true;
      if (confirmationResult) {
        const { homeDashboardUID, theme, timezone, weekStart, language, regionalFormat, queryHistory, navbar } = this.state;
        (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_save_button_clicked", {
          preferenceType: this.props.preferenceType,
          theme,
          language
        });
        this.setState({ isSubmitting: true });
        await this.service.update({
          homeDashboardUID,
          theme,
          timezone,
          weekStart,
          language,
          regionalFormat,
          queryHistory,
          navbar
        }).finally(() => {
          this.setState({ isSubmitting: false });
        });
        window.location.reload();
      }
    };
    this.onThemeChanged = (value) => {
      this.setState({ theme: value.value });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_theme_changed", {
        toTheme: value.value,
        preferenceType: this.props.preferenceType
      });
      if (value.value) {
        (0,app_core_services_theme__WEBPACK_IMPORTED_MODULE_23__.changeTheme)(value.value, true);
      }
    };
    this.onTimeZoneChanged = (timezone) => {
      if (typeof timezone !== "string") {
        return;
      }
      this.setState({ timezone });
    };
    this.onWeekStartChanged = (weekStart) => {
      this.setState({ weekStart: weekStart ?? "" });
    };
    this.onHomeDashboardChanged = (dashboardUID) => {
      this.setState({ homeDashboardUID: dashboardUID });
    };
    this.onLanguageChanged = (language) => {
      this.setState({ language });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_language_changed", {
        toLanguage: language,
        preferenceType: this.props.preferenceType
      });
    };
    this.onLocaleChanged = (regionalFormat) => {
      this.setState({ regionalFormat });
      (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_8__.reportInteraction)("grafana_preferences_regional_format_changed", {
        toRegionalFormat: regionalFormat,
        preferenceType: this.props.preferenceType
      });
    };
    this.service = new app_core_services_PreferencesService__WEBPACK_IMPORTED_MODULE_22__.PreferencesService(props.resourceUri);
    this.state = {
      isLoading: false,
      isSubmitting: false,
      theme: "",
      timezone: "",
      weekStart: "",
      language: "",
      regionalFormat: "",
      queryHistory: { homeTab: "" },
      navbar: { bookmarkUrls: [] }
    };
    const themes = (0,_ThemeSelector_getSelectableThemes__WEBPACK_IMPORTED_MODULE_24__.getSelectableThemes)();
    this.themeOptions = themes.map((theme) => ({
      value: theme.id,
      label: getTranslatedThemeName(theme),
      group: theme.isExtra ? (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.theme.experimental", "Experimental") : void 0
    }));
    this.languageOptions = getLanguageOptions();
    this.regionalFormatOptions = getRegionalFormatOptions();
    this.themeOptions.unshift({ value: "", label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.theme.default-label", "Default") });
  }
  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    const prefs = await this.service.load();
    this.setState({
      isLoading: false,
      homeDashboardUID: prefs.homeDashboardUID,
      theme: prefs.theme,
      timezone: prefs.timezone,
      weekStart: prefs.weekStart,
      language: prefs.language,
      regionalFormat: prefs.regionalFormat,
      queryHistory: prefs.queryHistory,
      navbar: prefs.navbar
    });
  }
  render() {
    const { theme, timezone, weekStart, homeDashboardUID, language, isLoading, isSubmitting, regionalFormat } = this.state;
    const { disabled } = this.props;
    const styles = getStyles();
    const currentThemeOption = this.themeOptions.find((x) => x.value === theme) ?? this.themeOptions[0];
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: this.onSubmitForm, className: styles.form, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.FieldSet, { label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.title", children: "Preferences" }), disabled, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.theme-label", "Interface theme"),
            description: _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.grafanaconThemes && _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.feedbackLinksEnabled ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.theme-description", children: [
              "Enjoying the experimental themes? Tell us what you'd like to see",
              " ",
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TextLink,
                {
                  variant: "bodySmall",
                  external: true,
                  href: "https://docs.google.com/forms/d/e/1FAIpQLSeRKAY8nUMEVIKSYJ99uOO-dimF6Y69_If1Q1jTLOZRWqK1cw/viewform?usp=dialog",
                  children: "here."
                }
              )
            ] }) : void 0,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Combobox,
              {
                options: this.themeOptions,
                value: currentThemeOption.value,
                onChange: this.onThemeChanged,
                id: "shared-preferences-theme-select"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "home-dashboard-select", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.labelText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.home-dashboard-label", children: "Home Dashboard" }) }) }),
            "data-testid": "User preferences home dashboard drop down",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_19__.DashboardPicker,
              {
                value: homeDashboardUID,
                onChange: (v) => this.onHomeDashboardChanged(v?.uid ?? ""),
                defaultOptions: true,
                isClearable: true,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.home-dashboard-placeholder", "Default dashboard"),
                inputId: "home-dashboard-select"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-dashboard.fields.timezone-label", "Timezone"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.TimeZonePicker.containerV2,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.TimeZonePicker,
              {
                includeInternal: true,
                value: timezone,
                onChange: this.onTimeZoneChanged,
                inputId: "shared-preferences-timezone-picker"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.week-start-label", "Week start"),
            "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.WeekStartPicker.containerV2,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.WeekStartPicker,
              {
                value: weekStart && (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.isWeekStart)(weekStart) ? weekStart : void 0,
                onChange: this.onWeekStartChanged,
                inputId: "shared-preferences-week-start-picker"
              }
            )
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "language-preference-select", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.labelText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.language-preference-label", children: "Language" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.FeatureBadge, { featureState: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FeatureState.preview })
            ] }),
            "data-testid": "User preferences language drop down",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Combobox,
              {
                value: this.languageOptions.find((lang) => lang.value === language)?.value || "",
                onChange: (lang) => this.onLanguageChanged(lang?.value ?? ""),
                options: this.languageOptions,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.language-preference-placeholder", "Choose language"),
                id: "language-preference-select"
              }
            )
          }
        ),
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__.config.featureToggles.localeFormatPreference && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_15__.Field,
          {
            loading: isLoading,
            disabled: isLoading,
            label: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Label, { htmlFor: "locale-preference", children: [
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.labelText, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.fields.locale-preference-label", children: "Region format" }) }),
              /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.FeatureBadge, { featureState: _grafana_data__WEBPACK_IMPORTED_MODULE_3__.FeatureState.preview })
            ] }),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)(
              "shared-preferences.fields.locale-preference-description",
              "Choose your region to see the corresponding date, time, and number format"
            ),
            "data-testid": "User preferences locale drop down",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_17__.Combobox,
              {
                value: this.regionalFormatOptions.find((loc) => loc.value === regionalFormat)?.value || "",
                onChange: (locale) => this.onLocaleChanged(locale?.value ?? ""),
                options: this.regionalFormatOptions,
                placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared-preferences.fields.locale-preference-placeholder", "Choose region"),
                id: "locale-preference-select"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_12__.Button,
        {
          disabled: isSubmitting,
          type: "submit",
          variant: "primary",
          "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.components.UserProfile.preferencesSaveButton,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.Trans, { i18nKey: "shared-preferences.save", children: "Save preferences" })
        }
      )
    ] });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SharedPreferences);
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_18__.stylesFactory)(() => {
  return {
    labelText: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: "6px"
    }),
    form: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      maxWidth: "600px"
    })
  };
});
function getTranslatedThemeName(theme) {
  switch (theme.id) {
    case "dark":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared.preferences.theme.dark-label", "Dark");
    case "light":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared.preferences.theme.light-label", "Light");
    case "system":
      return (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("shared.preferences.theme.system-label", "System preference");
    default:
      return theme.name;
  }
}


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

/***/ "./public/app/core/components/Upgrade/UpgradeBox.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpgradeBox: () => (/* binding */ UpgradeBox),
/* harmony export */   UpgradeContent: () => (/* binding */ UpgradeContent),
/* harmony export */   UpgradeContentVertical: () => (/* binding */ UpgradeContentVertical)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");







const UpgradeBox = ({
  featureName,
  className,
  children,
  text,
  featureId,
  eventVariant = "",
  size = "md",
  ...htmlProps
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getUpgradeBoxStyles, size);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportExperimentView)(`feature-highlights-${featureId}`, "test", eventVariant);
  }, [eventVariant, featureId]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.box, className), ...htmlProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "rocket", className: styles.icon }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.inner, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", { className: styles.text, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "upgrade-box.discovery-text", children: "You\u2019ve discovered a Pro feature!" }),
        " ",
        text || (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("upgrade-box.discovery-text-continued", "Get the Grafana Pro plan to access {{featureName}}.", {
          featureName
        })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton,
        {
          variant: "secondary",
          size,
          className: styles.button,
          href: "https://grafana.com/profile/org/subscription",
          target: "__blank",
          rel: "noopener noreferrer",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "upgrade-box.upgrade-button", children: "Upgrade" })
        }
      )
    ] })
  ] });
};
const getUpgradeBoxStyles = (theme, size) => {
  const borderRadius = theme.shape.borderRadius(2);
  const fontBase = size === "md" ? "body" : "bodySmall";
  return {
    box: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      position: "relative",
      borderRadius,
      background: theme.colors.success.transparent,
      padding: theme.spacing(2),
      color: theme.colors.success.text,
      fontSize: theme.typography[fontBase].fontSize,
      textAlign: "left",
      lineHeight: "16px",
      margin: theme.spacing(0, "auto", 3, "auto"),
      maxWidth: `${theme.breakpoints.values.xxl}px`,
      width: "100%"
    }),
    inner: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between"
    }),
    text: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: 0
    }),
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      backgroundColor: theme.colors.success.main,
      fontWeight: theme.typography.fontWeightLight,
      color: "white",
      "&:hover": {
        backgroundColor: theme.colors.success.main
      },
      "&:focus-visible": {
        boxShadow: "none",
        color: theme.colors.text.primary,
        outline: `2px solid ${theme.colors.primary.main}`
      }
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: theme.spacing(0.5, 1, 0.5, 0.5)
    })
  };
};
const UpgradeContent = ({
  listItems,
  image,
  featureUrl,
  featureName,
  description,
  caption,
  action
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getUpgradeContentStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.content, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "upgrade-box.get-started", children: [
        "Get started with ",
        { featureName }
      ] }) }),
      description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6", { className: styles.description, children: description }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.list, children: listItems.map((item, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "check", size: "xl", className: styles.icon }),
        " ",
        item
      ] }, index)) }),
      action?.link && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { variant: "primary", href: action.link, children: action.text }),
      action?.onClick && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Button, { variant: "primary", onClick: action.onClick, children: action.text }),
      featureUrl && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { fill: "text", href: featureUrl, className: styles.link, target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "upgrade-box.learn-more", children: "Learn more" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.media, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: getImgUrl(image), alt: "Feature screenshot" }),
      caption && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: styles.caption, children: caption })
    ] })
  ] });
};
const getUpgradeContentStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      justifyContent: "space-between"
    }),
    content: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "45%",
      marginRight: theme.spacing(4)
    }),
    media: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "55%",
      img: {
        width: "100%"
      }
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.maxContrast
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.primary,
      fontWeight: theme.typography.fontWeightLight
    }),
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      listStyle: "none",
      margin: theme.spacing(4, 0, 2, 0),
      li: {
        display: "flex",
        alignItems: "flex-start",
        color: theme.colors.text.primary,
        padding: theme.spacing(1, 0)
      }
    }),
    icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.success.main,
      marginRight: theme.spacing(1)
    }),
    link: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(2)
    }),
    caption: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      fontWeight: theme.typography.fontWeightLight,
      margin: theme.spacing(1, 0, 0)
    })
  };
};
const UpgradeContentVertical = ({
  featureName,
  description,
  featureUrl,
  image
}) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getContentVerticalStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: styles.title, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "upgrade-box.get-started", children: [
      "Get started with ",
      { featureName }
    ] }) }),
    description && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6", { className: styles.description, children: description }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.LinkButton, { fill: "text", href: featureUrl, target: "_blank", rel: "noreferrer noopener", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "upgrade-box.learn-more", children: "Learn more" }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: styles.media, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: getImgUrl(image), alt: "Feature screenshot" }) })
  ] });
};
const getContentVerticalStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      overflow: "auto",
      height: "100%"
    }),
    title: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.maxContrast
    }),
    description: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      color: theme.colors.text.primary,
      fontWeight: theme.typography.fontWeightLight
    }),
    media: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      width: "100%",
      marginTop: theme.spacing(2),
      img: {
        width: "100%"
      }
    })
  };
};
const getImgUrl = (urlOrId) => {
  if (urlOrId.startsWith("http")) {
    return urlOrId;
  }
  return "/public/build/img/enterprise/highlights/" + urlOrId;
};


/***/ }),

/***/ "./public/app/core/internationalization/locales.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCALES: () => (/* binding */ LOCALES)
/* harmony export */ });

const LOCALES = [
  // Afrikaans - Standard
  { name: "Afrikaans", code: "af" },
  // // Arabic - Standard
  // { name: 'العربية', code: 'ar' }, // Disabled because RTL
  // // Arabic - Algeria
  // { name: 'العربية (الجزائر)', code: 'ar-DZ' }, // Disabled because RTL
  // // Arabic - Kuwait
  // { name: 'العربية (الكويت)', code: 'ar-KW' }, // Disabled because RTL
  // // Arabic - Libya
  // { name: 'العربية (ليبيا)', code: 'ar-LY' }, // Disabled because RTL
  // // Arabic - Morocco
  // { name: 'العربية (المغرب)', code: 'ar-MA' }, // Disabled because RTL
  // // Arabic - Palestine
  // { name: 'العربية (فلسطين)', code: 'ar-PS' }, // Disabled because RTL
  // // Arabic - Saudi Arabia
  // { name: 'العربية (السعودية)', code: 'ar-SA' }, // Disabled because RTL
  // // Arabic - Tunisia
  // { name: 'العربية (تونس)', code: 'ar-TN' }, // Disabled because RTL
  // Azerbaijani - Azerbaijan
  { name: "Az\u0259rbaycan dili", code: "az" },
  // Belarusian - Belarus
  { name: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F \u043C\u043E\u0432\u0430", code: "be-BY" },
  // Bulgarian - Bulgaria
  { name: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u0435\u0437\u0438\u043A", code: "bg-BG" },
  // Bambara - Mali
  { name: "Bamanankan", code: "bm" },
  // Bengali - Standard
  { name: "\u09AC\u09BE\u0982\u09B2\u09BE", code: "bn" },
  // Bengali - Bangladesh
  { name: "\u09AC\u09BE\u0982\u09B2\u09BE", code: "bn-BD" },
  // Tibetan - Tibet (China) and Bhutan
  { name: "\u0F56\u0F7C\u0F51\u0F0B\u0F61\u0F72\u0F42", code: "bo" },
  // Breton - Brittany (France)
  { name: "Brezhoneg", code: "br" },
  // Bosnian - Bosnia and Herzegovina
  { name: "Bosanski jezik", code: "bs" },
  // Catalan - Catalonia (Spain)
  { name: "Catal\xE0", code: "ca-ES" },
  // Czech - Czech Republic
  { name: "\u010Ce\u0161tina", code: "cs-CZ" },
  // Welsh - Wales (United Kingdom)
  { name: "Cymraeg", code: "cy-GB" },
  // Chuvash - Chuvashia (Russia)
  { name: "\u0427\u04D1\u0432\u0430\u0448\u043B\u0430", code: "cv-RU" },
  // Danish - Denmark
  { name: "Dansk", code: "da-DK" },
  // German - Germany
  { name: "Deutsch", code: "de-DE" },
  // German - Austria
  { name: "Deutsch (\xD6sterreich)", code: "de-AT" },
  // German - Switzerland
  { name: "Deutsch (Schweiz)", code: "de-CH" },
  // // Divehi/Maldivian - Maldives
  // { name: 'ދިވެހި', code: 'dv-MV' }, // Disabled because RTL
  // Greek - Greece
  { name: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC", code: "el-GR" },
  // English - Australia
  { name: "English (Australia)", code: "en-AU" },
  // English - Canada
  { name: "English (Canada)", code: "en-CA" },
  // English - United Kingdom
  { name: "English (United Kingdom)", code: "en-GB" },
  // English - Ireland
  { name: "English (Ireland)", code: "en-IE" },
  // English - Israel
  { name: "English (Israel)", code: "en-IL" },
  // English - India
  { name: "English (India)", code: "en-IN" },
  // English - New Zealand
  { name: "English (New Zealand)", code: "en-NZ" },
  // English - Singapore
  { name: "English (Singapore)", code: "en-SG" },
  // English - United States
  { name: "English (United States)", code: "en-US" },
  // Esperanto - International Auxiliary Language
  // { name: 'Esperanto', code: 'eo' },
  // Spanish - Spain
  { name: "Espa\xF1ol", code: "es-ES" },
  // Spanish - Dominican Republic
  { name: "Espa\xF1ol (Rep\xFAblica Dominicana)", code: "es-DO" },
  // Spanish - Mexico
  { name: "Espa\xF1ol (M\xE9xico)", code: "es-MX" },
  // Spanish - United States
  { name: "Espa\xF1ol (Estados Unidos)", code: "es-US" },
  // Estonian - Estonia
  { name: "Eesti keel", code: "et-EE" },
  // Basque - Basque Country
  { name: "Euskara", code: "eu-ES" },
  // // Persian - Iran
  // { name: 'فارسی', code: 'fa-IR' }, // Disabled because RTL
  // Filipino - Philippines
  { name: "Wikang Filipino", code: "fil-PH" },
  // Finnish - Finland
  { name: "Suomi", code: "fi-FI" },
  // Faroese - Faroe Islands
  { name: "F\xF8royskt", code: "fo-FO" },
  // French - France
  { name: "Fran\xE7ais", code: "fr-FR" },
  // French - Canada
  { name: "Fran\xE7ais (Canada)", code: "fr-CA" },
  // French - Switzerland
  { name: "Fran\xE7ais (Suisse)", code: "fr-CH" },
  // West Frisian - Netherlands
  { name: "Frysk", code: "fy" },
  // Irish - Ireland
  { name: "Gaeilge", code: "ga-IE" },
  // Scottish Gaelic - Scotland (UK)
  { name: "G\xE0idhlig", code: "gd-GB" },
  // Galician - Galicia (Spain)
  { name: "Galego", code: "gl-ES" },
  // Konkani (Devanagari script) - India
  { name: "\u0915\u094B\u0902\u0915\u0923\u0940", code: "gom-Deva" },
  // Konkani (Latin script) - India
  { name: "Konkani", code: "gom-Latn" },
  // Gujarati - India
  { name: "\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0", code: "gu-IN" },
  // // Hebrew - Israel
  // { name: 'עברית', code: 'he-IL' }, // Disabled because RTL
  // Hindi - India
  { name: "\u0939\u093F\u0928\u094D\u0926\u0940", code: "hi" },
  // Croatian - Croatia
  { name: "Hrvatski jezik", code: "hr" },
  // Hungarian - Hungary
  { name: "Magyar nyelv", code: "hu-HU" },
  // Armenian - Armenia
  { name: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576", code: "hy-AM" },
  // Indonesian - Indonesia
  { name: "Bahasa Indonesia", code: "id-ID" },
  // Icelandic - Iceland
  { name: "\xCDslenska", code: "is-IS" },
  // Italian - Italy
  { name: "Italiano", code: "it-IT" },
  // Italian - Switzerland
  { name: "Italiano (Svizzera)", code: "it-CH" },
  // Japanese - Japan
  { name: "\u65E5\u672C\u8A9E", code: "ja-JP" },
  // Javanese - Indonesia
  { name: "\uA9A7\uA9B1\uA997\uA9AE", code: "jv" },
  // Georgian - Georgia
  { name: "\u10E5\u10D0\u10E0\u10D7\u10E3\u10DA\u10D8 \u10D4\u10DC\u10D0", code: "ka-GE" },
  // Kazakh - Kazakhstan
  { name: "\u049A\u0430\u0437\u0430\u049B \u0442\u0456\u043B\u0456", code: "kk-KZ" },
  // Khmer - Cambodia
  { name: "\u1781\u17D2\u1798\u17C2\u179A", code: "km-KH" },
  // Kannada - India
  { name: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1", code: "kn-IN" },
  // Korean - South Korea
  { name: "\uD55C\uAD6D\uC5B4", code: "ko-KR" },
  // Kurdish - Kurdistan (Iraq, Iran, Syria, Turkey)
  { name: "Kurd\xEE", code: "ku" },
  // Kyrgyz - Kyrgyzstan
  { name: "\u041A\u044B\u0440\u0433\u044B\u0437 \u0442\u0438\u043B\u0438", code: "ky-KG" },
  // Luxembourgish - Luxembourg
  { name: "L\xEBtzebuergesch", code: "lb-LU" },
  // Lao - Laos
  { name: "\u0E9E\u0EB2\u0EAA\u0EB2\u0EA5\u0EB2\u0EA7", code: "lo-LA" },
  // Lithuanian - Lithuania
  { name: "Lietuvi\u0173 kalba", code: "lt-LT" },
  // Latvian - Latvia
  { name: "Latvie\u0161u valoda", code: "lv-LV" },
  // Macedonian - North Macedonia
  { name: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438 \u0458\u0430\u0437\u0438\u043A", code: "mk-MK" },
  // Malayalam - Kerala (India)
  { name: "\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02", code: "ml-IN" },
  // Māori - New Zealand
  { name: "Te Reo M\u0101ori", code: "mi-NZ" },
  // Montenegrin - Montenegro
  { name: "\u0426\u0440\u043D\u043E\u0433\u043E\u0440\u0441\u043A\u0438 \u0458\u0435\u0437\u0438\u043A", code: "cnr-ME" },
  // Marathi - Maharashtra (India)
  { name: "\u092E\u0930\u093E\u0920\u0940", code: "mr" },
  // Malay - Malaysia, Singapore, Brunei
  { name: "Bahasa Melayu", code: "ms" },
  // Maltese - Malta
  { name: "Malti", code: "mt-MT" },
  // Mongolian - Mongolia
  { name: "\u041C\u043E\u043D\u0433\u043E\u043B \u0445\u044D\u043B", code: "mn-MN" },
  // Burmese - Myanmar
  { name: "\u1019\u103C\u1014\u103A\u1019\u102C\u1005\u102C", code: "my-MM" },
  // Norwegian Bokmål - Norway
  { name: "Norsk bokm\xE5l", code: "nb" },
  // Nepali - Nepal and India
  { name: "\u0928\u0947\u092A\u093E\u0932\u0940", code: "ne" },
  // Dutch - Netherlands
  { name: "Nederlands", code: "nl-NL" },
  // Dutch - Belgium (Flemish)
  { name: "Nederlands (Belgi\xEB)", code: "nl-BE" },
  // Norwegian Nynorsk - Norway
  { name: "Nynorsk", code: "nn-NO" },
  // Occitan - Southern France, Monaco, Italy
  { name: "Occitan", code: "oc" },
  // Punjabi - Punjab (India and Pakistan)
  { name: "\u0A2A\u0A70\u0A1C\u0A3E\u0A2C\u0A40", code: "pa" },
  // Polish - Poland
  { name: "Polski", code: "pl-PL" },
  // Portuguese - Portugal
  { name: "Portugu\xEAs", code: "pt-PT" },
  // Portuguese - Brazil
  { name: "Portugu\xEAs (Brasil)", code: "pt-BR" },
  // Romanian - Romania
  { name: "Rom\xE2n\u0103", code: "ro-RO" },
  // Russian - Russia
  { name: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u044F\u0437\u044B\u043A", code: "ru-RU" },
  // Northern Sami - Northern Scandinavia
  { name: "Davvis\xE1megiella", code: "se" },
  // // Sindhi - Pakistan and India
  // { name: 'سنڌي', code: 'sd' }, // Disabled because RTL
  // Sinhala - Sri Lanka
  { name: "\u0DC3\u0DD2\u0D82\u0DC4\u0DBD", code: "si-LK" },
  // Slovak - Slovakia
  { name: "Slovensk\xFD jazyk", code: "sk-SK" },
  // Slovenian - Slovenia
  { name: "Slovenski jezik", code: "sl-SI" },
  // Albanian - Albania, Kosovo
  { name: "Shqip", code: "sq" },
  // Serbian - Serbia (Default)
  { name: "\u0421\u0440\u043F\u0441\u043A\u0438", code: "sr" },
  // Serbian - Serbia (Cyrillic script)
  { name: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430)", code: "sr-Cyrl" },
  // Swati - Eswatini (Swaziland)
  { name: "SiSwati", code: "ss" },
  // Swahili - East Africa
  { name: "Kiswahili", code: "sw" },
  // Swedish - Sweden
  { name: "Svenska", code: "sv" },
  // Tamil - Tamil Nadu (India), Sri Lanka, Singapore
  { name: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD", code: "ta" },
  // Telugu - Andhra Pradesh, Telangana (India)
  { name: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41", code: "te" },
  // Tetum - East Timor
  { name: "Tetun", code: "tet" },
  // Tajik - Tajikistan
  { name: "\u0422\u043E\u04B7\u0438\u043A\u04E3", code: "tg" },
  // Thai - Thailand
  { name: "\u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22", code: "th-TH" },
  // Turkmen - Turkmenistan
  { name: "T\xFCrkmen dili", code: "tk-TM" },
  // Tagalog - Philippines
  { name: "Wikang Tagalog", code: "tl-PH" },
  // Klingon - Constructed Language (Star Trek)
  { name: "tlhIngan Hol", code: "tlh" },
  // Turkish - Turkey
  { name: "T\xFCrk\xE7e", code: "tr-TR" },
  // Talossan - Constructed Language
  { name: "Talossan", code: "tzl" },
  // Tamazight (Tifinagh script) - North Africa
  { name: "\u2D5C\u2D30\u2D4E\u2D30\u2D63\u2D49\u2D56\u2D5C", code: "tzm" },
  // Tamazight (Latin script) - North Africa
  { name: "Tamazight", code: "tzm-Latn" },
  // // Uyghur - Xinjiang (China)
  // { name: 'ئۇيغۇرچە', code: 'ug-CN' }, // Disabled because RTL
  // Ukrainian - Ukraine
  { name: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430", code: "uk-UA" },
  // // Urdu - Pakistan and India
  // { name: 'اردو', code: 'ur-PK' }, // Disabled because RTL
  // Uzbek - Uzbekistan (Cyrillic script)
  { name: "\u040E\u0437\u0431\u0435\u043A \u0442\u0438\u043B\u0438", code: "uz-UZ" },
  // Uzbek - Uzbekistan (Latin script)
  { name: "O'zbek tili", code: "uz-Latn" },
  // Vietnamese - Vietnam
  { name: "Ti\u1EBFng Vi\u1EC7t", code: "vi-VN" },
  // Chinese - China
  { name: "\u4E2D\u6587", code: "zh-CN" },
  // Chinese - Simplified
  { name: "\u7B80\u4F53\u4E2D\u6587", code: "zh-Hans" },
  // Chinese - Traditional
  { name: "\u7E41\u9AD4\u4E2D\u6587", code: "zh-Hant" },
  // Chinese - Hong Kong
  { name: "\u4E2D\u6587 (\u9999\u6E2F)", code: "zh-HK" },
  // Chinese - Taiwan
  { name: "\u6B63\u9AD4\u4E2D\u6587 (\u53F0\u7063)", code: "zh-TW" },
  // Chinese - Macau
  { name: "\u4E2D\u6587 (\u6FB3\u9580)", code: "zh-MO" },
  // Yoruba - Nigeria, Benin, Togo
  { name: "Yor\xF9b\xE1", code: "yo" }
];


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

/***/ "./public/app/features/teams/TeamGroupSync.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamGroupSync: () => (/* binding */ TeamGroupSync),
/* harmony export */   TeamSyncUpgradeContent: () => (/* binding */ TeamSyncUpgradeContent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineFieldRow.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/Animations/SlideDown.tsx");
/* harmony import */ var app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/core/components/CloseButton/CloseButton.tsx");
/* harmony import */ var app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var app_features_admin_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/admin/utils.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");














function mapStateToProps(state) {
  return {
    groups: (0,_state_selectors__WEBPACK_IMPORTED_MODULE_18__.getTeamGroups)(state.team)
  };
}
const mapDispatchToProps = {
  loadTeamGroups: _state_actions__WEBPACK_IMPORTED_MODULE_17__.loadTeamGroups,
  addTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_17__.addTeamGroup,
  removeTeamGroup: _state_actions__WEBPACK_IMPORTED_MODULE_17__.removeTeamGroup
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps);
const headerTooltip = `Sync LDAP, OAuth or SAML groups with your Grafana teams.`;
class TeamGroupSync extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.onToggleAdding = () => {
      this.setState({ isAdding: !this.state.isAdding });
    };
    this.onNewGroupIdChanged = (event) => {
      this.setState({ newGroupId: event.currentTarget.value });
    };
    this.onAddGroup = (event) => {
      event.preventDefault();
      this.props.addTeamGroup(this.state.newGroupId);
      this.setState({ isAdding: false, newGroupId: "" });
    };
    this.onRemoveGroup = (group) => {
      this.props.removeTeamGroup(group.groupId);
    };
    this.state = { isAdding: false, newGroupId: "" };
  }
  componentDidMount() {
    this.fetchTeamGroups();
  }
  async fetchTeamGroups() {
    this.props.loadTeamGroups();
  }
  isNewGroupValid() {
    return this.state.newGroupId.length > 1;
  }
  renderGroup(group) {
    const { isReadOnly } = this.props;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { children: group.groupId }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", { style: { width: "1%" }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button,
        {
          size: "sm",
          variant: "destructive",
          onClick: () => this.onRemoveGroup(group),
          disabled: isReadOnly,
          "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("teams.team-group-sync.aria-label-remove", "Remove group {{groupName}}", {
            groupName: group.groupId
          }),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { name: "times" })
        }
      ) })
    ] }, group.groupId);
  }
  render() {
    const { isAdding, newGroupId } = this.state;
    const { groups, isReadOnly } = this.props;
    const styles = getStyles();
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      (0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_16__.highlightTrial)() && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_15__.UpgradeBox,
        {
          featureId: "team-sync",
          eventVariant: "trial",
          featureName: "team sync",
          text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "teams.team-group-sync.team-sync-upgrade",
            "Add a group to enable team sync for free during your trial of Grafana Pro"
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "page-action-bar", children: [
        (!(0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_16__.highlightTrial)() || groups.length > 0) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { className: "page-sub-heading", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "teams.team-group-sync.external-group-sync", children: "External group sync" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Tooltip, { placement: "auto", content: headerTooltip, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Icon, { className: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.icon, "page-sub-heading-icon"), name: "question-circle" }) })
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "page-action-bar__spacer" }),
        groups.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { onClick: this.onToggleAdding, icon: "plus", disabled: isReadOnly, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "teams.team-group-sync.add-group-button", children: "Add group" }) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Animations_SlideDown__WEBPACK_IMPORTED_MODULE_12__.SlideDown, { in: isAdding, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "cta-form", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_CloseButton_CloseButton__WEBPACK_IMPORTED_MODULE_13__.CloseButton, { onClick: this.onToggleAdding }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: this.onAddGroup, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.InlineFieldRow, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.InlineField,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("teams.team-group-sync.label-add-external-group", "Add external group"),
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("teams.team-group-sync.tooltip-add-external-group", "LDAP group example: {{example}}", {
                example: "cn=users,ou=groups,dc=grafana,dc=org"
              }),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
                {
                  type: "text",
                  id: "add-external-group",
                  placeholder: "",
                  value: newGroupId,
                  onChange: this.onNewGroupIdChanged,
                  disabled: isReadOnly
                }
              )
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Button, { type: "submit", disabled: isReadOnly || !this.isNewGroupValid(), style: { marginLeft: 4 }, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "teams.team-group-sync.add-group", children: "Add group" }) })
        ] }) })
      ] }) }),
      groups.length === 0 && !isAdding && ((0,app_features_admin_utils__WEBPACK_IMPORTED_MODULE_16__.highlightTrial)() ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        TeamSyncUpgradeContent,
        {
          action: { onClick: this.onToggleAdding, text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("teams.team-group-sync.text.add-group", "Add group") }
        }
      ) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_core_components_EmptyListCTA_EmptyListCTA__WEBPACK_IMPORTED_MODULE_14__["default"],
        {
          onClick: this.onToggleAdding,
          buttonIcon: "users-alt",
          title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
            "teams.team-group-sync.title-there-external-groups",
            "There are no external groups to sync with"
          ),
          buttonTitle: "Add group",
          proTip: headerTooltip,
          proTipLinkTitle: "Learn more",
          proTipLink: "https://grafana.com/docs/grafana/latest/setup-grafana/configure-security/configure-team-sync/",
          proTipTarget: "_blank",
          buttonDisabled: isReadOnly
        }
      )),
      groups.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "admin-list-table", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", { className: "filter-table filter-table--hover form-inline", children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.Trans, { i18nKey: "teams.team-group-sync.external-group-id", children: "External Group ID" }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", { style: { width: "1%" } })
        ] }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", { children: groups.map((group) => this.renderGroup(group)) })
      ] }) })
    ] });
  }
}
const TeamSyncUpgradeContent = ({ action }) => {
  const theme = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.useTheme2)();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_15__.UpgradeContent,
    {
      action,
      listItems: [
        "Stop managing user access in two places - assign users to groups in SAML, LDAP or Oauth, and manage access at a Team level in Grafana",
        "Update users' permissions immediately when you add or remove them from an LDAP group, with no need for them to sign out and back in"
      ],
      image: `team-sync-${theme.isLight ? "light" : "dark"}.png`,
      featureName: "team sync",
      featureUrl: "https://grafana.com/docs/grafana/latest/enterprise/team-sync",
      description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_4__.t)(
        "teams.team-sync-upgrade-content.description",
        "Team Sync makes it easier for you to manage users' access in Grafana, by immediately updating each user's Grafana teams and permissions based on their single sign-on group membership, instead of when users sign in"
      )
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(TeamGroupSync));
const getStyles = () => ({
  icon: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  })
});


/***/ }),

/***/ "./public/app/features/teams/TeamPages.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/reselect/dist/reselect.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/utils/licensing.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Upgrade/UpgradeBox.tsx");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/config.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var app_types_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/types/store.ts");
/* harmony import */ var _TeamGroupSync__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/teams/TeamGroupSync.tsx");
/* harmony import */ var _TeamPermissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/teams/TeamPermissions.tsx");
/* harmony import */ var _TeamSettings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/teams/TeamSettings.tsx");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./public/app/features/teams/state/actions.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./public/app/features/teams/state/navModel.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/features/teams/state/selectors.ts");




















var PageTypes = /* @__PURE__ */ ((PageTypes2) => {
  PageTypes2["Members"] = "members";
  PageTypes2["Settings"] = "settings";
  PageTypes2["GroupSync"] = "groupsync";
  return PageTypes2;
})(PageTypes || {});
const PAGES = ["members", "settings", "groupsync"];
const teamSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(
  [(state) => state.team, (_, teamUid) => teamUid],
  (team, teamUid) => (0,_state_selectors__WEBPACK_IMPORTED_MODULE_18__.getTeam)(team, teamUid)
);
const pageNavSelector = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSelector)(
  [
    (state) => state.navIndex,
    (_state, pageName) => pageName,
    (_state, _pageName, teamUid) => teamUid
  ],
  (navIndex, pageName, teamUid) => {
    const teamLoadingNav = (0,_state_navModel__WEBPACK_IMPORTED_MODULE_17__.getTeamLoadingNav)(pageName);
    return (0,app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_9__.getNavModel)(navIndex, `team-${pageName}-${teamUid}`, teamLoadingNav).main;
  }
);
const TeamPages = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(() => {
  const isSyncEnabled = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)((0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.featureEnabled)("teamsync"));
  const { uid: teamUid = "", page } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_3__.useParams)();
  const team = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state) => teamSelector(state, teamUid));
  let defaultPage = "members";
  if (!team || !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.ActionTeamsPermissionsRead, team)) {
    defaultPage = "settings";
  }
  const pageName = page ?? defaultPage;
  const pageNav = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useSelector)((state) => pageNavSelector(state, pageName, teamUid));
  const dispatch = (0,app_types_store__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
  const { loading: isLoading } = (0,react_use__WEBPACK_IMPORTED_MODULE_4__["default"])(async () => dispatch((0,_state_actions__WEBPACK_IMPORTED_MODULE_16__.loadTeam)(teamUid)), [teamUid]);
  const renderPage = () => {
    const currentPage = PAGES.includes(pageName) ? pageName : PAGES[0];
    const canReadTeam = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.ActionTeamsRead, team);
    const canReadTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(
      app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.ActionTeamsPermissionsRead,
      team
    );
    const canWriteTeamPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.hasPermissionInMetadata(
      app_types_accessControl__WEBPACK_IMPORTED_MODULE_11__.AccessControlAction.ActionTeamsPermissionsWrite,
      team
    );
    switch (currentPage) {
      case "members" /* Members */:
        if (canReadTeamPermissions) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TeamPermissions__WEBPACK_IMPORTED_MODULE_14__["default"], { team });
        }
        return null;
      case "settings" /* Settings */:
        return canReadTeam && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TeamSettings__WEBPACK_IMPORTED_MODULE_15__["default"], { team });
      case "groupsync" /* GroupSync */:
        if (isSyncEnabled.current) {
          if (canReadTeamPermissions) {
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_13__["default"], { isReadOnly: !canWriteTeamPermissions });
          }
        } else if (app_core_config__WEBPACK_IMPORTED_MODULE_8__["default"].featureToggles.featureHighlights) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Upgrade_UpgradeBox__WEBPACK_IMPORTED_MODULE_7__.UpgradeBox, { featureName: "team sync", featureId: "team-sync" }),
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TeamGroupSync__WEBPACK_IMPORTED_MODULE_13__.TeamSyncUpgradeContent, {})
          ] });
        }
    }
    return null;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page, { navId: "teams", pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_6__.Page.Contents, { isLoading, children: team && Object.keys(team).length !== 0 && renderPage() }) });
});
TeamPages.displayName = "TeamPages";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamPages);


/***/ }),

/***/ "./public/app/features/teams/TeamPermissions.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/core/components/AccessControl/Permissions.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/types/accessControl.ts");





const TeamPermissions = (props) => {
  let canSetPermissions = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_2__.contextSrv.hasPermissionInMetadata(
    app_types_accessControl__WEBPACK_IMPORTED_MODULE_3__.AccessControlAction.ActionTeamsPermissionsWrite,
    props.team
  );
  if (props.team.isProvisioned) {
    canSetPermissions = false;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_AccessControl_Permissions__WEBPACK_IMPORTED_MODULE_1__.Permissions,
    {
      addPermissionTitle: "Add member",
      buttonLabel: "Add member",
      emptyLabel: "There are no members in this team or you do not have the permissions to list the current members.",
      resource: "teams",
      resourceId: props.team.id,
      canSetPermissions
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TeamPermissions);


/***/ }),

/***/ "./public/app/features/teams/TeamSettings.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamSettings: () => (/* binding */ TeamSettings),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/components/RolePicker/TeamRolePicker.tsx");
/* harmony import */ var app_core_components_RolePicker_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/RolePicker/hooks.ts");
/* harmony import */ var app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/SharedPreferences/SharedPreferences.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/types/accessControl.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/teams/state/actions.ts");












const mapDispatchToProps = {
  updateTeam: _state_actions__WEBPACK_IMPORTED_MODULE_14__.updateTeam
};
const connector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, mapDispatchToProps);
const TeamSettings = ({ team, updateTeam: updateTeam2 }) => {
  const canWriteTeamSettings = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__.AccessControlAction.ActionTeamsWrite, team);
  const currentOrgId = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.user.orgId;
  const [{ roleOptions }] = (0,app_core_components_RolePicker_hooks__WEBPACK_IMPORTED_MODULE_10__.useRoleOptions)(currentOrgId);
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({ defaultValues: team });
  const canUpdateRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__.AccessControlAction.ActionTeamsRolesAdd) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__.AccessControlAction.ActionTeamsRolesRemove);
  const canListRoles = app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermissionInMetadata(app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__.AccessControlAction.ActionTeamsRolesList, team) && app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.hasPermission(app_types_accessControl__WEBPACK_IMPORTED_MODULE_13__.AccessControlAction.ActionRolesList);
  const onSubmit = async (formTeam) => {
    updateTeam2(formTeam.name, formTeam.email || "");
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 3, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { onSubmit: handleSubmit(onSubmit), style: { maxWidth: "600px" }, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.FieldSet, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("teams.team-settings.label-team-details", "Team details"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Stack, { direction: "column", gap: 2, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            noMargin: true,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("teams.team-settings.label-numerical-identifier", "Numerical identifier"),
            disabled: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { value: team.id, id: "id-input" })
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            noMargin: true,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("teams.team-settings.label-name", "Name"),
            disabled: !canWriteTeamSettings || !!team.isProvisioned,
            required: true,
            invalid: !!errors.name,
            error: "Name is required",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input, { ...register("name", { required: true }), id: "name-input" })
          }
        ),
        app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_12__.contextSrv.licensedAccessControlEnabled() && canListRoles && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field, { noMargin: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("teams.team-settings.label-role", "Role"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_RolePicker_TeamRolePicker__WEBPACK_IMPORTED_MODULE_9__.TeamRolePicker, { teamId: team.id, roleOptions, disabled: !canUpdateRoles, maxWidth: "100%" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Field,
          {
            noMargin: true,
            label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("teams.team-settings.label-email", "Email"),
            description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
              "teams.team-settings.description-email",
              "This is optional and is primarily used to set the team profile avatar (via the Gravatar service)"
            ),
            disabled: !canWriteTeamSettings,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
              _grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Input,
              {
                ...register("email"),
                placeholder: "team@email.com",
                type: "email",
                id: "email-input"
              }
            )
          }
        )
      ] }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.Button, { type: "submit", disabled: !canWriteTeamSettings, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "teams.team-settings.save", children: "Save team details" }) })
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_SharedPreferences_SharedPreferences__WEBPACK_IMPORTED_MODULE_11__.SharedPreferences, { resourceUri: `teams/${team.id}`, disabled: !canWriteTeamSettings, preferenceType: "team" })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connector(TeamSettings));


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

/***/ "./public/app/features/teams/state/selectors.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTeam: () => (/* binding */ getTeam),
/* harmony export */   getTeamGroups: () => (/* binding */ getTeamGroups)
/* harmony export */ });

const getTeamGroups = (state) => state.groups;
const getTeam = (state, currentTeamUid) => {
  if (state.team.uid === currentTeamUid) {
    return state.team;
  }
  return null;
};


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
//# sourceMappingURL=TeamPages.f3c3f6ffd82e18dbab97.js.map