"use strict";
(self["webpackChunkgrafana"] = self["webpackChunkgrafana"] || []).push([["PlaylistStartPage"],{

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

/***/ "./public/app/features/playlist/PlaylistStartPage.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlaylistStartPage)
/* harmony export */ });
/* harmony import */ var react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-router-dom-v5-compat/node_modules/react-router/dist/index.js");
/* harmony import */ var _api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./public/app/api/clients/playlist/v0alpha1/index.ts");
/* harmony import */ var _PlaylistSrv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./public/app/features/playlist/PlaylistSrv.ts");




function PlaylistStartPage() {
  const { uid = "" } = (0,react_router_dom_v5_compat__WEBPACK_IMPORTED_MODULE_0__.useParams)();
  const { data, isLoading } = (0,_api_clients_playlist_v0alpha1__WEBPACK_IMPORTED_MODULE_1__.useGetPlaylistQuery)({ name: uid });
  if (!isLoading && data) {
    _PlaylistSrv__WEBPACK_IMPORTED_MODULE_2__.playlistSrv.start(data);
  }
  return null;
}


/***/ })

}]);
//# sourceMappingURL=PlaylistStartPage.3ddc936108e42d073521.js.map