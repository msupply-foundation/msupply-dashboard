"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["annoListPanel"],{

/***/ "./public/app/plugins/panel/annolist/AnnoListPanel.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnoListPanel: () => (/* binding */ AnnoListPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-data/src/events/common.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-data/src/utils/location.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-data/src/datetime/datemath.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-data/src/datetime/moment_wrapper.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-data/src/types/legacyEvents.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./packages/grafana-ui/src/components/ScrollContainer/ScrollContainer.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./packages/grafana-ui/src/themes/stylesFactory.ts");
/* harmony import */ var _grafana_ui_internal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./packages/grafana-ui/src/components/List/AbstractList.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./public/app/core/app_events.ts");
/* harmony import */ var app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./public/app/features/dashboard/services/DashboardSrv.ts");
/* harmony import */ var _AnnotationListItem__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./public/app/plugins/panel/annolist/AnnotationListItem.tsx");













class AnnoListPanel extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent {
  constructor(props) {
    super(props);
    this.style = getStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_11__.config.theme2);
    this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.tagListRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.createRef)();
    this.onAnnoClick = async (anno) => {
      if (!anno.time) {
        return;
      }
      const { options } = this.props;
      const dashboardSrv = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_19__.getDashboardSrv)();
      const current = dashboardSrv.getCurrent();
      const params = {
        from: this._timeOffset(anno.time, options.navigateBefore, true),
        to: this._timeOffset(anno.timeEnd ?? anno.time, options.navigateAfter, false),
        viewPanel: options.navigateToPanel && anno.panelId ? anno.panelId : void 0
      };
      if (!anno.dashboardUID || current?.uid === anno.dashboardUID) {
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.locationService.partial(params);
        return;
      }
      const result = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.getBackendSrv)().get("/api/search", { dashboardUIDs: anno.dashboardUID });
      if (result && result.length && result[0].uid === anno.dashboardUID) {
        const dash = result[0];
        const url = new URL(dash.url, window.location.origin);
        url.searchParams.set("from", String(params.from));
        url.searchParams.set("to", String(params.to));
        _grafana_runtime__WEBPACK_IMPORTED_MODULE_12__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_5__.locationUtil.stripBaseFromUrl(url.toString()));
        return;
      }
      app_core_app_events__WEBPACK_IMPORTED_MODULE_18__["default"].emit(_grafana_data__WEBPACK_IMPORTED_MODULE_8__.AppEvents.alertWarning, ["Unknown Dashboard: " + anno.dashboardUID]);
    };
    this.onTagClick = (tag, remove) => {
      if (!remove && this.state.queryTags.includes(tag)) {
        return;
      }
      const queryTags = remove ? this.state.queryTags.filter((item) => item !== tag) : [...this.state.queryTags, tag];
      let nextTag = void 0;
      if (remove) {
        const focusedTag = document.activeElement;
        const dataTagId = focusedTag?.getAttribute("data-tag-id");
        if (this.tagListRef.current?.contains(focusedTag) && dataTagId) {
          const parsedTagId = Number.parseInt(dataTagId, 10);
          const possibleNextTag = this.tagListRef.current.querySelector(`[data-tag-id="${parsedTagId + 1}"]`) ?? this.tagListRef.current.querySelector(`[data-tag-id="${parsedTagId - 1}"]`);
          if (possibleNextTag instanceof HTMLElement) {
            nextTag = possibleNextTag;
          }
        }
      }
      this.setState({ queryTags }, () => nextTag?.focus());
    };
    this.onUserClick = (anno) => {
      this.setState({
        queryUser: {
          id: anno.userId,
          login: anno.login,
          email: anno.email
        }
      });
    };
    this.onClearUser = () => {
      this.setState({
        queryUser: void 0
      });
    };
    this.renderItem = (anno, index) => {
      const { options } = this.props;
      const dashboard = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_19__.getDashboardSrv)().getCurrent();
      if (!dashboard) {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _AnnotationListItem__WEBPACK_IMPORTED_MODULE_20__.AnnotationListItem,
        {
          annotation: anno,
          formatDate: dashboard.formatDate,
          onClick: this.onAnnoClick,
          onAvatarClick: this.onUserClick,
          onTagClick: this.onTagClick,
          options
        }
      );
    };
    this.state = {
      annotations: [],
      timeInfo: "",
      loaded: false,
      queryTags: [],
      requestId: `anno-list-panel-${Math.random()}`
    };
  }
  componentDidMount() {
    this.doSearch();
    this.subs.add(
      this.props.eventBus.getStream(_grafana_data__WEBPACK_IMPORTED_MODULE_4__.AnnotationChangeEvent).subscribe({
        next: () => {
          this.doSearch();
        }
      })
    );
  }
  componentWillUnmount() {
    this.subs.unsubscribe();
  }
  componentDidUpdate(prevProps, prevState) {
    const { options, timeRange } = this.props;
    const needsQuery = options !== prevProps.options || this.state.queryTags !== prevState.queryTags || this.state.queryUser !== prevState.queryUser || prevProps.renderCounter !== this.props.renderCounter || options.onlyInTimeRange && timeRange !== prevProps.timeRange;
    if (needsQuery) {
      this.doSearch();
    }
  }
  async doSearch() {
    const { options } = this.props;
    const { queryUser, queryTags } = this.state;
    const params = {
      tags: options.tags,
      limit: options.limit,
      type: "annotation"
      // Skip the Annotations that are really alerts.  (Use the alerts panel!)
    };
    if (options.onlyFromThisDashboard) {
      params.dashboardUID = (0,app_features_dashboard_services_DashboardSrv__WEBPACK_IMPORTED_MODULE_19__.getDashboardSrv)().getCurrent()?.uid;
    }
    let timeInfo = "";
    if (options.onlyInTimeRange) {
      const { timeRange } = this.props;
      params.from = timeRange.from.valueOf();
      params.to = timeRange.to.valueOf();
    } else {
      timeInfo = "All Time";
    }
    if (queryUser) {
      params.userId = queryUser.id;
    }
    if (options.tags && options.tags.length) {
      params.tags = options.tags.map((tag) => this.props.replaceVariables(tag));
    }
    if (queryTags.length) {
      params.tags = params.tags ? [...params.tags, ...queryTags] : queryTags;
    }
    const annotations = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_10__.getBackendSrv)().get("/api/annotations", params, this.state.requestId);
    this.setState({
      annotations,
      timeInfo,
      loaded: true
    });
  }
  _timeOffset(time, offset, subtract = false) {
    let incr = 5;
    let unit = "m";
    const parts = /^(\d+)(\w)/.exec(offset);
    if (parts && parts.length === 3) {
      incr = parseInt(parts[1], 10);
      unit = parts[2];
    }
    const t2 = (0,_grafana_data__WEBPACK_IMPORTED_MODULE_7__.dateTime)(time);
    if (subtract) {
      incr *= -1;
    }
    if (!_grafana_data__WEBPACK_IMPORTED_MODULE_6__.isDurationUnit(unit)) {
      return 0;
    }
    return t2.add(incr, unit).valueOf();
  }
  render() {
    const { loaded, annotations, queryUser, queryTags } = this.state;
    if (!loaded) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "annolist.anno-list-panel.loading", children: "Loading..." }) });
    }
    const hasFilter = queryUser || queryTags.length > 0;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_15__.ScrollContainer, { minHeight: "100%", children: [
      hasFilter && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: this.style.filter, children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "annolist.anno-list-panel.filter", children: "Filter:" }) }),
        queryUser && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Button,
          {
            size: "sm",
            variant: "secondary",
            fill: "text",
            onClick: this.onClearUser,
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.t)(
              "annolist.anno-list-panel.aria-label-remove-filter",
              "Remove filter: {{filterToRemove}}",
              { filterToRemove: queryUser.email }
            ),
            children: queryUser.email
          }
        ),
        queryTags.length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_13__.TagList,
          {
            icon: "times",
            tags: queryTags,
            onClick: (tag) => this.onTagClick(tag, true),
            getAriaLabel: (name) => `Remove ${name} tag`,
            className: this.style.tagList,
            ref: this.tagListRef
          }
        )
      ] }),
      annotations.length < 1 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: this.style.noneFound, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_9__.Trans, { i18nKey: "annolist.anno-list-panel.no-annotations-found", children: "No annotations found" }) }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui_internal__WEBPACK_IMPORTED_MODULE_17__.AbstractList, { items: annotations, renderItem: this.renderItem, getItemKey: (item) => `${item.id}` })
    ] });
  }
}
const getStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_16__.stylesFactory)((theme) => ({
  noneFound: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "calc(100% - 30px)"
  }),
  filter: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(0.5),
    padding: theme.spacing(0.5)
  }),
  tagList: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
    justifyContent: "flex-start",
    "li > button": {
      paddingLeft: "3px"
    }
  })
}));


/***/ }),

/***/ "./public/app/plugins/panel/annolist/AnnotationListItem.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnotationListItem: () => (/* binding */ AnnotationListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Tooltip/Tooltip.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Tags/TagList.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/RenderUserContentAsHTML/RenderUserContentAsHTML.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");





const AnnotationListItem = ({ options, annotation, formatDate, onClick, onAvatarClick, onTagClick }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const { showUser, showTags, showTime } = options;
  const { text = "", login, email, avatarUrl, tags, time, timeEnd } = annotation;
  const onItemClick = () => {
    onClick(annotation);
  };
  const onLoginClick = () => {
    onAvatarClick(annotation);
  };
  const showAvatar = login && showUser;
  const showTimeStamp = time && showTime;
  const showTimeStampEnd = timeEnd && timeEnd !== time && showTime;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card, { noMargin: true, className: styles.card, onClick: onItemClick, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.RenderUserContentAsHTML,
      {
        className: styles.heading,
        onClick: (e) => {
          e.stopPropagation();
        },
        content: text
      }
    ) }),
    showTimeStamp && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Description, { className: styles.timestamp, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TimeStamp, { formatDate, time }),
      showTimeStampEnd && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.time, children: "-" }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TimeStamp, { formatDate, time: timeEnd }),
        " "
      ] })
    ] }),
    showAvatar && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Meta, { className: styles.meta, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Avatar, { email, login, avatarUrl, onClick: onLoginClick }) }),
    showTags && tags && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Card.Tags, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.TagList, { tags, onClick: (tag) => onTagClick(tag, false) }) })
  ] });
};
const Avatar = ({ onClick, avatarUrl, login, email }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  const onAvatarClick = (e) => {
    e.stopPropagation();
    onClick();
  };
  const tooltipContent = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "annolist.annotation-list-item.tooltip-created-by", children: [
    "Created by:",
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
    " ",
    { email }
  ] }) });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.Tooltip, { content: tooltipContent, theme: "info", placement: "top", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: onAvatarClick, className: styles.avatar, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: avatarUrl, alt: "avatar icon" }) }) });
};
const TimeStamp = ({ time, formatDate }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: styles.time, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: formatDate(time) }) });
};
function getStyles(theme) {
  return {
    card: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      gridTemplateAreas: `"Heading Description Meta Tags"`,
      gridTemplateColumns: "auto 1fr auto auto",
      padding: theme.spacing(1),
      margin: theme.spacing(0.5),
      width: "inherit"
    }),
    heading: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      a: {
        zIndex: 1,
        position: "relative",
        color: theme.colors.text.link,
        "&:hover": {
          textDecoration: "underline"
        }
      }
    }),
    meta: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: 0,
      position: "relative",
      justifyContent: "end"
    }),
    timestamp: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      margin: 0,
      alignSelf: "center"
    }),
    time: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      fontSize: theme.typography.bodySmall.fontSize,
      color: theme.colors.text.secondary
    }),
    avatar: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      border: "none",
      background: "inherit",
      margin: 0,
      padding: theme.spacing(0.5),
      img: {
        borderRadius: theme.shape.radius.circle,
        width: theme.spacing(2),
        height: theme.spacing(2)
      }
    })
  };
}


/***/ }),

/***/ "./public/app/plugins/panel/annolist/module.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   plugin: () => (/* binding */ plugin)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-data/src/panel/PanelPlugin.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/TagsInput/TagsInput.tsx");
/* harmony import */ var _AnnoListPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/plugins/panel/annolist/AnnoListPanel.tsx");
/* harmony import */ var _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/plugins/panel/annolist/panelcfg.gen.ts");







const plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__.PanelPlugin(_AnnoListPanel__WEBPACK_IMPORTED_MODULE_4__.AnnoListPanel).setPanelOptions((builder) => {
  const category = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.category-annotation-query", "Annotation query")];
  const displayCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.category-display", "Display")];
  const linkBehaviourCategory = [(0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.category-link-behaviour", "Link behavior")];
  builder.addRadio({
    category,
    path: "onlyFromThisDashboard",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-query-filter", "Query filter"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.onlyFromThisDashboard,
    settings: {
      options: [
        { value: false, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.query-filter-options.label-all-dashboards", "All dashboards") },
        { value: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.query-filter-options.label-this-dashboard", "This dashboard") }
      ]
    }
  }).addRadio({
    category,
    path: "onlyInTimeRange",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-time-range", "Time range"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.onlyInTimeRange,
    settings: {
      options: [
        { value: false, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.time-range-options.label-none", "None") },
        { value: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.time-range-options.label-this-dashboard", "This dashboard") }
      ]
    }
  }).addCustomEditor({
    category,
    id: "tags",
    path: "tags",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-tags", "Tags"),
    description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.description-tags", "Match annotation tags"),
    editor(props) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.TagsInput, { tags: props.value, onChange: props.onChange });
    }
  }).addNumberInput({
    category,
    path: "limit",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-limit", "Limit"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.limit
  }).addBooleanSwitch({
    category: displayCategory,
    path: "showUser",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-show-user", "Show user"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.showUser
  }).addBooleanSwitch({
    category: displayCategory,
    path: "showTime",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-show-time", "Show time"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.showTime
  }).addBooleanSwitch({
    category: displayCategory,
    path: "showTags",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-show-tags", "Show tags"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.showTags
  }).addRadio({
    category: linkBehaviourCategory,
    path: "navigateToPanel",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-link-target", "Link target"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.navigateToPanel,
    settings: {
      options: [
        { value: true, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.link-target-options.label-panel", "Panel") },
        { value: false, label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.link-target-options.label-dashboard", "Dashboard") }
      ]
    }
  }).addTextInput({
    category: linkBehaviourCategory,
    path: "navigateBefore",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-time-before", "Time before"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.navigateBefore,
    description: ""
  }).addTextInput({
    category: linkBehaviourCategory,
    path: "navigateAfter",
    name: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("annolist.name-time-after", "Time after"),
    defaultValue: _panelcfg_gen__WEBPACK_IMPORTED_MODULE_5__.defaultOptions.navigateAfter,
    description: ""
  });
}).setPanelChangeHandler((panel, prevPluginId, prevOptions) => {
  if (prevPluginId === "ryantxu-annolist-panel") {
    return prevOptions;
  }
  return panel.options;
});


/***/ }),

/***/ "./public/app/plugins/panel/annolist/panelcfg.gen.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultOptions: () => (/* binding */ defaultOptions)
/* harmony export */ });

const defaultOptions = {
  limit: 10,
  navigateAfter: "10m",
  navigateBefore: "10m",
  navigateToPanel: true,
  onlyFromThisDashboard: false,
  onlyInTimeRange: false,
  showTags: true,
  showTime: true,
  showUser: true,
  tags: []
};


/***/ })

}]);
//# sourceMappingURL=annoListPanel.61300a19b9941ad88955.js.map