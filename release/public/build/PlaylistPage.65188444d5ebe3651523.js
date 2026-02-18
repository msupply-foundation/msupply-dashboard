"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistPage"],{

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

/***/ "./public/app/core/components/PageActionBar/PageActionBar.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageActionBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/InlineField.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/FilterInput/FilterInput.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _Select_SortPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Select/SortPicker.tsx");





function PageActionBar({
  searchQuery,
  linkButton,
  setSearchQuery,
  target,
  placeholder = "Search by name or type",
  sortPicker,
  filterCheckbox
}) {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.useStyles2)(getStyles);
  const linkProps = {
    href: linkButton?.href,
    disabled: linkButton?.disabled
  };
  if (target) {
    linkProps.target = target;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: styles.container, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.InlineField, { grow: true, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.FilterInput, { value: searchQuery, onChange: setSearchQuery, placeholder }) }),
    filterCheckbox && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Checkbox,
      {
        label: filterCheckbox.label,
        value: filterCheckbox.value,
        onChange: (event) => filterCheckbox.onChange(event.currentTarget.checked)
      }
    ),
    sortPicker && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _Select_SortPicker__WEBPACK_IMPORTED_MODULE_7__.SortPicker,
      {
        onChange: sortPicker.onChange,
        value: sortPicker.value,
        getSortOptions: sortPicker.getSortOptions
      }
    ),
    linkButton && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.LinkButton, { ...linkProps, children: linkButton.title })
  ] });
}
const getStyles = (theme) => {
  return {
    container: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2)
    })
  };
};


/***/ }),

/***/ "./public/app/features/playlist/PlaylistCard.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistCard: () => (/* binding */ PlaylistCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-loading-skeleton/dist/index.js");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/ModalsContext.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Card/Card.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/utils/skeleton.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var app_features_dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/dashboard/components/DashNav/DashNavButton.tsx");
/* harmony import */ var _ShareModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/playlist/ShareModal.tsx");










const PlaylistCardComponent = ({ playlist, setStartPlaylist, setPlaylistToDelete }) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card, { noMargin: true, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Heading, { children: [
      playlist.spec?.title,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ModalsController, { children: ({ showModal, hideModal }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        app_features_dashboard_components_DashNav_DashNavButton__WEBPACK_IMPORTED_MODULE_11__.DashNavButton,
        {
          tooltip: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist-page.card.tooltip", "Share playlist"),
          icon: "share-alt",
          iconSize: "lg",
          onClick: () => {
            showModal(_ShareModal__WEBPACK_IMPORTED_MODULE_12__.ShareModal, {
              playlistUid: playlist.metadata?.name ?? "",
              onDismiss: hideModal
            });
          }
        }
      ) }, "button-share")
    ] }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Actions, { children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button, { variant: "secondary", icon: "play", onClick: () => setStartPlaylist(playlist), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "playlist-page.card.start", children: "Start playlist" }) }),
      app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.isEditor && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { variant: "secondary", href: `/playlists/edit/${playlist.metadata?.name}`, icon: "cog", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "playlist-page.card.edit", children: "Edit playlist" }) }, "edit"),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.Button,
          {
            disabled: false,
            onClick: () => setPlaylistToDelete(playlist),
            icon: "trash-alt",
            variant: "destructive",
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "playlist-page.card.delete", children: "Delete playlist" })
          }
        )
      ] })
    ] })
  ] });
};
const PlaylistCardSkeleton = ({ rootProps }) => {
  const skeletonStyles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.useStyles2)(getSkeletonStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card, { noMargin: true, ...rootProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Heading, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { width: 140 }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Card.Actions, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Stack, { direction: "row", wrap: "wrap", children: [
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { containerClassName: skeletonStyles.button, width: 142, height: 32 }),
      app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_10__.contextSrv.isEditor && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { containerClassName: skeletonStyles.button, width: 135, height: 32 }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__["default"], { containerClassName: skeletonStyles.button, width: 153, height: 32 })
      ] })
    ] }) })
  ] });
};
const PlaylistCard = (0,_grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_9__.attachSkeleton)(PlaylistCardComponent, PlaylistCardSkeleton);
function getSkeletonStyles(theme) {
  return {
    button: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      lineHeight: 1
    })
  };
}


/***/ }),

/***/ "./public/app/features/playlist/PlaylistPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistPage: () => (/* binding */ PlaylistPage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/components/EmptyState/EmptyState.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-ui/src/components/ConfirmModal/ConfirmModal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Link/TextLink.tsx");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./public/app/core/components/Page/Page.tsx");
/* harmony import */ var app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./public/app/core/components/PageActionBar/PageActionBar.tsx");
/* harmony import */ var app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./public/app/core/services/context_srv.ts");
/* harmony import */ var _api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./public/app/api/clients/playlist/v0alpha1/index.ts");
/* harmony import */ var _PlaylistPageList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./public/app/features/playlist/PlaylistPageList.tsx");
/* harmony import */ var _StartModal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/playlist/StartModal.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./public/app/features/playlist/utils.ts");












const PlaylistPage = () => {
  const { data, isLoading } = (0,_api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_10__.useListPlaylistQuery)({});
  const [deletePlaylist] = (0,_api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_10__.useDeletePlaylistMutation)();
  const [searchQuery, setSearchQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const allPlaylists = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => data?.items ?? [], [data?.items]);
  const playlists = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_utils__WEBPACK_IMPORTED_MODULE_13__.searchPlaylists)(allPlaylists, searchQuery), [searchQuery, allPlaylists]);
  const [startPlaylist, setStartPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const [playlistToDelete, setPlaylistToDelete] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const hasPlaylists = playlists && playlists.length > 0;
  const onDismissDelete = () => setPlaylistToDelete(void 0);
  const onDeletePlaylist = () => {
    if (!playlistToDelete) {
      return;
    }
    deletePlaylist({
      name: playlistToDelete.metadata?.name ?? ""
    }).finally(() => {
      setPlaylistToDelete(void 0);
    });
  };
  const showSearch = isLoading || playlists.length > 0 || searchQuery.length > 0;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page,
    {
      actions: app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.isEditor && showSearch ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { href: "/playlists/new", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "playlist-page.create-button.title", children: "New playlist" }) }) : void 0,
      navId: "dashboards/playlists",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_7__.Page.Contents, { children: [
        showSearch && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(app_core_components_PageActionBar_PageActionBar__WEBPACK_IMPORTED_MODULE_8__["default"], { searchQuery, setSearchQuery }),
        isLoading ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaylistPageList__WEBPACK_IMPORTED_MODULE_11__.PlaylistPageList.Skeleton, {}) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [
          !hasPlaylists && searchQuery ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.EmptyState, { variant: "not-found", message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("playlists.empty-state.message", "No playlists found") }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _PlaylistPageList__WEBPACK_IMPORTED_MODULE_11__.PlaylistPageList,
            {
              playlists,
              setStartPlaylist,
              setPlaylistToDelete
            }
          ),
          !showSearch && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_3__.EmptyState,
            {
              variant: "call-to-action",
              button: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__.LinkButton, { disabled: !app_core_services_context_srv__WEBPACK_IMPORTED_MODULE_9__.contextSrv.isEditor, href: "playlists/new", icon: "plus", size: "lg", children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "playlist-page.empty.button", children: "Create playlist" }) }),
              message: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("playlist-page.empty.title", "There are no playlists created yet"),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.Trans, { i18nKey: "playlist-page.empty.pro-tip", children: [
                "You can use playlists to cycle dashboards on TVs without user control.",
                " ",
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.TextLink, { external: true, href: "https://docs.grafana.org/reference/playlist/", children: "Learn more" })
              ] })
            }
          ),
          playlistToDelete && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_4__.ConfirmModal,
            {
              title: playlistToDelete.spec?.title ?? "",
              confirmText: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("playlist-page.delete-modal.confirm-text", "Delete"),
              body: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("playlist-page.delete-modal.body", "Are you sure you want to delete {{name}} playlist?", {
                name: playlistToDelete.spec?.title
              }),
              onConfirm: onDeletePlaylist,
              isOpen: Boolean(playlistToDelete),
              onDismiss: onDismissDelete
            }
          ),
          startPlaylist && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StartModal__WEBPACK_IMPORTED_MODULE_12__.StartModal, { playlist: startPlaylist, onDismiss: () => setStartPlaylist(void 0) })
        ] })
      ] })
    }
  );
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaylistPage);


/***/ }),

/***/ "./public/app/features/playlist/PlaylistPageList.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaylistPageList: () => (/* binding */ PlaylistPageList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@emotion/css/dist/emotion-css.development.esm.js");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-ui/src/themes/ThemeContext.tsx");
/* harmony import */ var _grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-ui/src/utils/skeleton.tsx");
/* harmony import */ var _PlaylistCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./public/app/features/playlist/PlaylistCard.tsx");






const PlaylistPageListComponent = ({ playlists, setStartPlaylist, setPlaylistToDelete }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: styles.list, children: playlists.map((playlist) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { className: styles.listItem, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    _PlaylistCard__WEBPACK_IMPORTED_MODULE_4__.PlaylistCard,
    {
      playlist,
      setStartPlaylist,
      setPlaylistToDelete
    }
  ) }, playlist.metadata?.name)) });
};
const PlaylistPageListSkeleton = ({ rootProps }) => {
  const styles = (0,_grafana_ui__WEBPACK_IMPORTED_MODULE_2__.useStyles2)(getStyles);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { "data-testid": "playlist-page-list-skeleton", className: styles.list, ...rootProps, children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaylistCard__WEBPACK_IMPORTED_MODULE_4__.PlaylistCard.Skeleton, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaylistCard__WEBPACK_IMPORTED_MODULE_4__.PlaylistCard.Skeleton, {}),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PlaylistCard__WEBPACK_IMPORTED_MODULE_4__.PlaylistCard.Skeleton, {})
  ] });
};
const PlaylistPageList = (0,_grafana_ui_unstable__WEBPACK_IMPORTED_MODULE_3__.attachSkeleton)(PlaylistPageListComponent, PlaylistPageListSkeleton);
function getStyles(theme) {
  return {
    list: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      display: "grid",
      gap: theme.spacing(1)
    }),
    listItem: (0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.css)({
      listStyle: "none"
    })
  };
}


/***/ }),

/***/ "./public/app/features/playlist/ShareModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareModal: () => (/* binding */ ShareModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-ui/src/components/ClipboardButton/ClipboardButton.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Input/Input.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");
/* harmony import */ var app_features_dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./public/app/features/dashboard/components/ShareModal/utils.ts");








const ShareModal = ({ playlistUid, onDismiss }) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const modes = [
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("share-playlist.mode-normal", "Normal"), value: false },
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("share-playlist.mode-kiosk", "Kiosk"), value: true }
  ];
  const params = {};
  if (mode) {
    params.kiosk = mode;
  }
  if (autoFit) {
    params.autofitpanels = true;
  }
  const shareUrl = _grafana_data__WEBPACK_IMPORTED_MODULE_2__.urlUtil.renderUrl(`${(0,app_features_dashboard_components_ShareModal_utils__WEBPACK_IMPORTED_MODULE_12__.buildBaseUrl)()}/play/${playlistUid}`, params);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__.Modal, { isOpen: true, title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("share-playlist.title", "Share playlist"), onDismiss, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.FieldSet, { children: [
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("share-playlist.mode", "Mode"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.RadioButtonGroup, { value: mode, options: modes, onChange: setMode }) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Checkbox,
      {
        label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("share-playlist.checkbox-label", "Autofit"),
        description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("share-playlist.checkbox-description", "Panel heights will be adjusted to fit screen size"),
        name: "autofix",
        value: autoFit,
        onChange: (e) => setAutofit(e.currentTarget.checked)
      }
    ) }),
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("share-playlist.link-url-label", "Link URL"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      _grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Input,
      {
        id: "link-url-input",
        value: shareUrl,
        readOnly: true,
        addonAfter: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
          _grafana_ui__WEBPACK_IMPORTED_MODULE_5__.ClipboardButton,
          {
            icon: "copy",
            variant: "primary",
            getText: () => shareUrl,
            onClipboardCopy: () => {
              (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.reportInteraction)("grafana_kiosk_mode", {
                action: "share_playlist",
                mode
              });
            },
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "share-playlist.copy-link-button", children: "Copy" })
          }
        )
      }
    ) })
  ] }) });
};


/***/ }),

/***/ "./public/app/features/playlist/StartModal.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StartModal: () => (/* binding */ StartModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./packages/grafana-data/src/utils/url.ts");
/* harmony import */ var _grafana_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./packages/grafana-i18n/src/i18n.tsx");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./packages/grafana-runtime/src/config.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./packages/grafana-runtime/src/analytics/utils.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./packages/grafana-runtime/src/services/LocationService.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./packages/grafana-ui/src/components/Modal/Modal.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./packages/grafana-ui/src/components/Button/Button.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Box/Box.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./packages/grafana-ui/src/components/Layout/Stack/Stack.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Field.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/FieldSet.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/RadioButtonGroup/RadioButtonGroup.tsx");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./packages/grafana-ui/src/components/Forms/Checkbox.tsx");







const StartModal = ({ playlist, onDismiss }) => {
  const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [autoFit, setAutofit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [displayTimePicker, setDisplayTimePicker] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [displayVariables, setDisplayVariables] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [displayLinks, setDisplayLinks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const modes = [
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.modes.label.normal", "Normal"), value: false },
    { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.modes.label.kiosk", "Kiosk"), value: true }
  ];
  const onStart = () => {
    const params = {};
    if (mode) {
      params.kiosk = mode;
    }
    if (autoFit) {
      params.autofitpanels = true;
    }
    if (!displayTimePicker) {
      params["_dash.hideTimePicker"] = true;
    }
    if (!displayVariables) {
      params["_dash.hideVariables"] = true;
    }
    if (!displayLinks) {
      params["_dash.hideLinks"] = true;
    }
    _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__.locationService.push(_grafana_data__WEBPACK_IMPORTED_MODULE_2__.urlUtil.renderUrl(`/playlists/play/${playlist.metadata?.name}`, params));
    (0,_grafana_runtime__WEBPACK_IMPORTED_MODULE_5__.reportInteraction)("grafana_kiosk_mode", {
      action: "start_playlist",
      mode
    });
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
    _grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Modal,
    {
      isOpen: true,
      icon: "play",
      title: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.title-start-playlist", "Start playlist"),
      onDismiss,
      children: [
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_12__.FieldSet, { children: [
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.label-mode", "Mode"), children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_13__.RadioButtonGroup, { value: mode, options: modes, onChange: setMode }) }),
          /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Checkbox,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.label-autofit", "Autofit"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                "playlist.start-modal.description-panel-heights-adjusted-screen",
                "Panel heights will be adjusted to fit screen size"
              ),
              name: "autofix",
              value: autoFit,
              onChange: (e) => setAutofit(e.currentTarget.checked)
            }
          ) }),
          _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__.config.featureToggles.dashboardScene && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
            _grafana_ui__WEBPACK_IMPORTED_MODULE_11__.Field,
            {
              label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.label-display-dashboard-controls", "Display dashboard controls"),
              description: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(
                "playlist.start-modal.description-customize-dashboard-elements-visibility",
                "Customize dashboard elements visibility"
              ),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_9__.Box, { marginTop: 2, marginBottom: 2, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_ui__WEBPACK_IMPORTED_MODULE_10__.Stack, { direction: "column", alignItems: "start", justifyContent: "left", gap: 2, children: [
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Checkbox,
                  {
                    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.label-time-and-refresh", "Time and refresh"),
                    name: "displayTimePicker",
                    value: displayTimePicker,
                    onChange: (e) => setDisplayTimePicker(e.currentTarget.checked)
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Checkbox,
                  {
                    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.label-variables", "Variables"),
                    name: "displayVariableControls",
                    value: displayVariables,
                    onChange: (e) => setDisplayVariables(e.currentTarget.checked)
                  }
                ),
                /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  _grafana_ui__WEBPACK_IMPORTED_MODULE_14__.Checkbox,
                  {
                    label: (0,_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("playlist.start-modal.label-dashboard-links", "Dashboard links"),
                    name: "displayLinks",
                    value: displayLinks,
                    onChange: (e) => setDisplayLinks(e.currentTarget.checked)
                  }
                )
              ] }) })
            }
          )
        ] }),
        /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_7__.Modal.ButtonRow, { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_8__.Button, { variant: "primary", onClick: onStart, children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_grafana_i18n__WEBPACK_IMPORTED_MODULE_3__.Trans, { i18nKey: "playlist.start-modal.button-start", values: { title: playlist.spec?.title }, children: [
          "Start ",
          "{{title}}"
        ] }) }) })
      ]
    }
  );
};


/***/ })

}]);
//# sourceMappingURL=PlaylistPage.65188444d5ebe3651523.js.map