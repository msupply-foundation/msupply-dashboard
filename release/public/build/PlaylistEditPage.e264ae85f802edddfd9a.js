"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistEditPage"],{

/***/ "./public/app/api/clients/playlist/v0alpha1/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   playlistAPIv0alpha1: () => (/* binding */ playlistAPIv0alpha1),
/* harmony export */   useCreatePlaylistMutation: () => (/* binding */ useCreatePlaylistMutation),
/* harmony export */   useDeletePlaylistMutation: () => (/* binding */ useDeletePlaylistMutation),
/* harmony export */   useGetPlaylistQuery: () => (/* binding */ useGetPlaylistQuery),
/* harmony export */   useListPlaylistQuery: () => (/* binding */ useListPlaylistQuery),
/* harmony export */   useReplacePlaylistMutation: () => (/* binding */ useReplacePlaylistMutation)
/* harmony export */ });
/* harmony import */ var _grafana_api_clients_rtkq_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./packages/grafana-api-clients/src/clients/rtkq/playlist/v0alpha1/index.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./packages/grafana-runtime/src/services/backendSrv.ts");
/* harmony import */ var _core_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/core/actions/index.ts");
/* harmony import */ var _core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./public/app/core/copy/appNotification.ts");
/* harmony import */ var _core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/api/utils.ts");







const playlistAPIv0alpha1 = _grafana_api_clients_rtkq_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_0__.generatedAPI.enhanceEndpoints({
  endpoints: {
    getPlaylist: {
      transformResponse: async (response) => {
        await migrateInternalIDs(response.spec);
        return response;
      }
    },
    createPlaylist: (endpointDefinition) => {
      const originalQuery = endpointDefinition.query;
      if (!originalQuery) {
        return;
      }
      endpointDefinition.query = (requestOptions) => {
        const metadata = requestOptions.playlist.metadata;
        if (metadata && !metadata.name && !metadata.generateName) {
          metadata.generateName = _core_services_context_srv__WEBPACK_IMPORTED_MODULE_4__.contextSrv.user.login?.slice(0, 2) || "g";
        }
        return originalQuery(requestOptions);
      };
      endpointDefinition.onQueryStarted = async (_, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled;
          dispatch((0,_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createSuccessNotification)("Playlist created")));
        } catch (e) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_5__.handleError)(e, dispatch, "Unable to create playlist");
        }
      };
    },
    replacePlaylist: {
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled;
          dispatch((0,_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createSuccessNotification)("Playlist updated")));
        } catch (e) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_5__.handleError)(e, dispatch, "Unable to update playlist");
        }
      }
    },
    deletePlaylist: {
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          await queryFulfilled;
          dispatch((0,_core_actions__WEBPACK_IMPORTED_MODULE_2__.notifyApp)((0,_core_copy_appNotification__WEBPACK_IMPORTED_MODULE_3__.createSuccessNotification)("Playlist deleted")));
        } catch (e) {
          (0,_utils__WEBPACK_IMPORTED_MODULE_5__.handleError)(e, dispatch, "Unable to delete playlist");
        }
      }
    }
  }
});
async function migrateInternalIDs(playlist) {
  if (playlist?.items) {
    for (const item of playlist.items) {
      if (item.type === "dashboard_by_id") {
        item.type = "dashboard_by_uid";
        const uids = await (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_1__.getBackendSrv)().get(`/api/dashboards/ids/${item.value}`);
        if (uids?.length) {
          item.value = uids[0];
        }
      }
    }
  }
}
const {
  useCreatePlaylistMutation,
  useDeletePlaylistMutation,
  useGetPlaylistQuery,
  useListPlaylistQuery,
  useReplacePlaylistMutation
} = playlistAPIv0alpha1;


/***/ }),

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

/***/ "./public/app/features/playlist/PlaylistEditPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistEditPage: () => (/* binding */ PlaylistEditPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./public/app/api/clients/playlist/v0alpha1/index.ts");
/* harmony import */ var _PlaylistForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./public/app/features/playlist/PlaylistForm.tsx");








const PlaylistEditPage = () => {
  const { uid = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_1__.useParams)();
  const { data, isLoading, isError, error } = (0,_api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_5__.useGetPlaylistQuery)({ name: uid });
  const [replacePlaylist] = (0,_api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_5__.useReplacePlaylistMutation)();
  const onSubmit = async (playlist) => {
    replacePlaylist({
      name: playlist.metadata?.name ?? "",
      playlist
    });
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__.locationService.push("/playlists");
  };
  const pageNav = {
    text: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("playlist-edit.title", "Edit playlist"),
    subTitle: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(
      "playlist-edit.sub-title",
      "A playlist rotates through a pre-selected list of dashboards. A playlist can be a great way to build situational awareness, or just show off your metrics to your team or visitors."
    )
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page, { navId: "dashboards/playlists", pageNav, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_4__.Page.Contents, { isLoading, children: [
    isError && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "playlist-edit.error-prefix", children: "Error loading playlist:" }),
      JSON.stringify(error)
    ] }),
    data && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaylistForm__WEBPACK_IMPORTED_MODULE_6__.PlaylistForm, { onSubmit, playlist: data })
  ] }) });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaylistEditPage);


/***/ }),

/***/ "./public/app/features/playlist/PlaylistForm.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistForm: () => (/* binding */ PlaylistForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/Form/Form.tsx");
/* harmony import */ var app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/core/components/Select/DashboardPicker.tsx");
/* harmony import */ var app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/core/components/TagFilter/TagFilter.tsx");
/* harmony import */ var _search_service_searcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/search/service/searcher.ts");
/* harmony import */ var _PlaylistTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./public/app/features/playlist/PlaylistTable.tsx");
/* harmony import */ var _usePlaylistItems__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./public/app/features/playlist/usePlaylistItems.tsx");













const PlaylistForm = ({ onSubmit, playlist }) => {
  const [saving, setSaving] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const { title: name, interval, items: propItems } = playlist.spec || {};
  const tagOptions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return () => (0,_search_service_searcher__WEBPACK_IMPORTED_MODULE_13__.getGrafanaSearcher)().tags({ kind: ["dashboard"] });
  }, []);
  const { items, addByUID, addByTag, deleteItem, moveItem } = (0,_usePlaylistItems__WEBPACK_IMPORTED_MODULE_15__.usePlaylistItems)(propItems);
  const doSubmit = (specUpdates) => {
    setSaving(true);
    onSubmit({
      ...playlist,
      spec: {
        ...specUpdates,
        interval: specUpdates?.interval ?? "5m",
        title: specUpdates?.title ?? "",
        items
      }
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Form_Form__WEBPACK_IMPORTED_MODULE_10__.Form, { onSubmit: doSubmit, validateOn: "onBlur", children: ({ register, errors }) => {
    const isDisabled = items.length === 0 || Object.keys(errors).length > 0;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.name-label", "Name"),
          invalid: !!errors.title,
          error: errors?.title?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              type: "text",
              ...register("title", { required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.name-required", "Name is required") }),
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.name-placeholder", "Name"),
              defaultValue: name,
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.name
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field,
        {
          label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.interval-label", "Interval"),
          invalid: !!errors.interval,
          error: errors?.interval?.message,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Input,
            {
              type: "text",
              ...register("interval", {
                required: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.interval-required", "Interval is required")
              }),
              placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.interval-placeholder", "5m"),
              defaultValue: interval ?? "5m",
              "aria-label": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_2__.selectors.pages.PlaylistForm.interval
            }
          )
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaylistTable__WEBPACK_IMPORTED_MODULE_14__.PlaylistTable, { items, deleteItem, moveItem }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.FieldSet, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.heading", "Add dashboards"), children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.add-title-label", "Add by title"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_Select_DashboardPicker__WEBPACK_IMPORTED_MODULE_11__.DashboardPicker, { id: "dashboard-picker", onChange: addByUID }, items.length) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.add-tag-label", "Add by tag"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          app_core_components_TagFilter_TagFilter__WEBPACK_IMPORTED_MODULE_12__.TagFilter,
          {
            isClearable: true,
            tags: [],
            hideValues: true,
            tagOptions,
            onChange: addByTag,
            placeholder: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-edit.form.add-tag-placeholder", "Select a tag")
          }
        ) })
      ] }),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { type: "submit", variant: "primary", disabled: isDisabled, icon: saving ? "spinner" : void 0, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "playlist-edit.form.save", children: "Save" }) }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { variant: "secondary", href: `${_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.appSubUrl}/playlists`, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "playlist-edit.form.cancel", children: "Cancel" }) })
      ] })
    ] });
  } });
};


/***/ }),

/***/ "./public/app/features/playlist/PlaylistTable.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistTable: () => (/* binding */ PlaylistTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@hello-pangea/dnd/dist/dnd.esm.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _PlaylistTableRows__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/playlist/PlaylistTableRows.tsx");






const PlaylistTable = ({ items, deleteItem, moveItem }) => {
  const onDragEnd = (d) => {
    if (d.destination) {
      moveItem(d.source.index, d.destination?.index);
    }
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.FieldSet, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("playlist-edit.form.table-heading", "Dashboards"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_1__.DragDropContext, { onDragEnd, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_1__.Droppable, { droppableId: "playlist-list", direction: "vertical", children: (provided) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ref: provided.innerRef, ...provided.droppableProps, children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaylistTableRows__WEBPACK_IMPORTED_MODULE_4__.PlaylistTableRows, { items, onDelete: deleteItem }),
      provided.placeholder
    ] });
  } }) }) });
};


/***/ }),

/***/ "./public/app/features/playlist/PlaylistTableRows.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistTableRows: () => (/* binding */ PlaylistTableRows)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@hello-pangea/dnd/dist/dnd.esm.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-e2e-selectors/src/selectors/index.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Icon/Icon.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/IconButton/IconButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Spinner/Spinner.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/components/TagFilter/TagBadge.tsx");









const PlaylistTableRows = ({ items, onDelete }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.useStyles2)(getStyles);
  if (!items?.length) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "playlist-edit.form.table-empty", children: "Playlist is empty. Add dashboards below." }) }) });
  }
  const renderItem = (item) => {
    let icon = item.type === "dashboard_by_tag" ? "apps" : "tag-alt";
    const info = [];
    const first = item.dashboards?.[0];
    if (!item.dashboards) {
      info.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Spinner, {}, "spinner"));
    } else if (item.type === "dashboard_by_tag") {
      info.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_TagFilter_TagBadge__WEBPACK_IMPORTED_MODULE_10__.TagBadge, { label: item.value, removeIcon: false, count: 0 }, item.value));
      if (!first) {
        icon = "exclamation-triangle";
        info.push(
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
            "\xA0",
            " ",
            /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "playlist.playlist-table-rows.no-dashboards-found", children: "No dashboards found" }) }, "info")
          ] })
        );
      } else {
        info.push(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
          "\xA0 ",
          pluralize__WEBPACK_IMPORTED_MODULE_3___default()("dashboard", item.dashboards.length, true)
        ] }, "info"));
      }
    } else if (first) {
      info.push(
        item.dashboards.length > 1 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
          "\xA0",
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "playlist.playlist-table-rows.multiple-dashboards-found", values: { items: item.value }, children: [
            "Multiple items found: ",
            "{{items}}"
          ] }) }, "info")
        ] }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: first.name ?? item.value }, "info")
      );
    } else {
      icon = "exclamation-triangle";
      info.push(
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [
          "\xA0",
          " ",
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.Trans, { i18nKey: "playlist.playlist-table-rows.not-found", values: { items: item.value }, children: [
            "Not found: ",
            "{{items}}"
          ] }) }, "info")
        ] })
      );
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon, { name: icon, className: styles.rightMargin }, "icon"),
      info
    ] });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: items.map((item, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hello_pangea_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, { draggableId: `${index}`, index, children: (provided) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    "div",
    {
      className: styles.row,
      ref: provided.innerRef,
      ...provided.draggableProps,
      ...provided.dragHandleProps,
      role: "row",
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          "div",
          {
            className: styles.actions,
            role: "cell",
            "aria-label": (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)(
              "playlist.playlist-table-rows.aria-label-playlist-item",
              "Playlist item, {{itemType}}, {{itemValue}}",
              { itemType: item.type, itemValue: item.value }
            ),
            children: renderItem(item)
          }
        ),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.actions, children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.IconButton,
            {
              name: "times",
              size: "md",
              onClick: () => onDelete(index),
              "data-testid": _grafana_e2e_selectors__WEBPACK_IMPORTED_MODULE_4__.selectors.pages.PlaylistForm.itemDelete,
              tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("playlist-edit.form.table-delete", "Delete playlist item")
            }
          ),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Icon,
            {
              title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("playlist-edit.form.table-drag", "Drag and drop to reorder"),
              name: "draggabledots",
              size: "md"
            }
          )
        ] })
      ]
    }
  ) }, `${index}/${item.value}`)) });
};
function getStyles(theme) {
  return {
    row: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      padding: theme.spacing(0.75),
      background: theme.colors.background.secondary,
      borderRadius: theme.shape.radius.default,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "3px",
      border: `1px solid ${theme.colors.border.medium}`,
      "&:hover": {
        border: `1px solid ${theme.colors.border.strong}`
      }
    }),
    rightMargin: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      marginRight: "5px"
    }),
    actions: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    }),
    settings: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      label: "settings",
      textAlign: "right"
    })
  };
}


/***/ }),

/***/ "./public/app/features/playlist/usePlaylistItems.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usePlaylistItems: () => (/* binding */ usePlaylistItems)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-use/esm/useAsync.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/playlist/utils.ts");




function usePlaylistItems(playlistItems) {
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(playlistItems ?? []);
  (0,react_use__WEBPACK_IMPORTED_MODULE_1__["default"])(async () => {
    for (const item of items) {
      if (!item.dashboards) {
        setItems(await (0,_utils__WEBPACK_IMPORTED_MODULE_2__.loadDashboards)(items));
        return;
      }
    }
  }, [items]);
  const addByUID = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (dashboard) => {
      if (!dashboard) {
        return;
      }
      setItems([
        ...items,
        {
          type: "dashboard_by_uid",
          value: dashboard.uid
        }
      ]);
    },
    [items]
  );
  const addByTag = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (tags) => {
      const tag = tags[0];
      if (!tag || items.find((item) => item.value === tag)) {
        return;
      }
      const newItem = {
        type: "dashboard_by_tag",
        value: tag
      };
      setItems([...items, newItem]);
    },
    [items]
  );
  const moveItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (src, dst) => {
      if (src === dst || !items[src]) {
        return;
      }
      const update = Array.from(items);
      const [removed] = update.splice(src, 1);
      update.splice(dst, 0, removed);
      setItems(update);
    },
    [items]
  );
  const deleteItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
    (index) => {
      const copy = items.slice();
      copy.splice(index, 1);
      setItems(copy);
    },
    [items]
  );
  return { items, addByUID, addByTag, deleteItem, moveItem };
}


/***/ })

}]);
//# sourceMappingURL=PlaylistEditPage.e264ae85f802edddfd9a.js.map