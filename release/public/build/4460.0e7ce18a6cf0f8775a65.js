"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4460],{"./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx":(e,s,a)=>{a.d(s,{j:()=>c});var t,n=a("./node_modules/react/index.js"),r=a("./public/app/features/dashboard/components/VizTypePicker/VizTypePicker.tsx"),i=a("./packages/grafana-ui/src/index.ts"),o=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),l=a("./node_modules/react/jsx-runtime.js");const c=({onChange:e,maxMenuHeight:s})=>{const a=(0,n.useMemo)((()=>(0,r.xW)()),[]),o=(0,n.useMemo)((()=>a.map((e=>({label:e.name,imgUrl:e.info.logos.small,value:e}))).sort(((e,s)=>{var a;return null===(a=e.label)||void 0===a?void 0:a.localeCompare(s.label)}))),[a]),[c,p]=(0,n.useState)([]),u=(0,n.useCallback)((s=>{const a=[];for(const e of s)e.value&&a.push(e.value);e(a),p(s)}),[e]),g=(0,i.useStyles2)(d),m={defaultOptions:!0,getOptionLabel:e=>e.label,getOptionValue:e=>e.value,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",styles:(0,i.resetSelectStyles)(),maxMenuHeight:s,options:o,value:c,onChange:u};return(0,l.jsxs)("div",{className:g.container,children:[c.length>0&&(0,l.jsx)("span",{className:g.clear,onClick:()=>u([]),children:"Clear types"}),(0,l.jsx)(i.MultiSelect,Object.assign({menuShouldPortal:!0},m,{prefix:t||(t=(0,l.jsx)(i.Icon,{name:"filter"})),"aria-label":"Panel Type filter"}))]})};function d(e){return{container:o.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:o.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}},"./public/app/features/dashboard/components/VizTypePicker/PanelTypeCard.tsx":(e,s,a)=>{a.d(s,{X:()=>c});a("./node_modules/react/index.js");var t=a("./packages/grafana-data/src/index.ts"),n=a("./packages/grafana-ui/src/index.ts"),r=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("./packages/grafana-e2e-selectors/src/index.ts"),o=a("./public/app/features/plugins/PluginStateInfo.tsx"),l=a("./node_modules/react/jsx-runtime.js");const c=({isCurrent:e,title:s,plugin:a,onClick:o,onDelete:c,disabled:u,showBadge:g,description:m,children:h})=>{const x=(0,n.useStyles2)(d),b=(0,r.cx)({[x.item]:!0,[x.disabled]:u||a.state===t.PluginState.deprecated,[x.current]:e});return(0,l.jsxs)("div",{className:b,"aria-label":i.wl.components.PluginVisualization.item(a.name),onClick:u?void 0:o,title:e?"Click again to close this section":a.name,children:[(0,l.jsx)("img",{className:x.img,src:a.info.logos.small,alt:`${a.name} logo`}),(0,l.jsxs)("div",{className:x.itemContent,children:[(0,l.jsx)("div",{className:x.name,children:s}),m?(0,l.jsx)("span",{className:x.description,children:m}):null,h]}),g&&(0,l.jsx)("div",{className:(0,r.cx)(x.badge,u&&x.disabled),children:(0,l.jsx)(p,{plugin:a})}),c&&(0,l.jsx)(n.IconButton,{name:"trash-alt",onClick:e=>{e.stopPropagation(),c()},"aria-label":"Delete button on panel type card"})]})};c.displayName="PanelTypeCard";const d=e=>({item:r.css`
      position: relative;
      display: flex;
      flex-shrink: 0;
      cursor: pointer;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      box-shadow: ${e.shadows.z1};
      border: 1px solid ${e.colors.background.secondary};
      align-items: center;
      padding: 8px;
      width: 100%;
      position: relative;
      overflow: hidden;
      transition: ${e.transitions.create(["background"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,itemContent:r.css`
      position: relative;
      width: 100%;
      padding: ${e.spacing(0,1)};
    `,current:r.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:r.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:r.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
    `,img:r.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:r.css`
      background: ${e.colors.background.primary};
    `}),p=({plugin:e})=>(0,t.isUnsignedPluginSignature)(e.signature)?(0,l.jsx)(n.PluginSignatureBadge,{status:e.signature}):(0,l.jsx)(o.u,{state:e.state});p.displayName="PanelPluginBadge"},"./public/app/features/dashboard/components/VizTypePicker/VizTypePicker.tsx":(e,s,a)=>{a.d(s,{G5:()=>m,rw:()=>g,xW:()=>u});var t=a("./node_modules/react/index.js"),n=a("./public/app/core/config.ts"),r=a("./public/app/features/dashboard/components/VizTypePicker/PanelTypeCard.tsx"),i=a("./node_modules/react/jsx-runtime.js");const o=({isCurrent:e,plugin:s,onClick:a,disabled:t})=>(0,i.jsx)(r.X,{title:s.name,plugin:s,description:s.info.description,onClick:a,isCurrent:e,disabled:t,showBadge:!0});o.displayName="VizTypePickerPlugin";var l,c=a("./packages/grafana-ui/src/index.ts"),d=a("./packages/grafana-data/src/index.ts"),p=a("./node_modules/@emotion/css/dist/emotion-css.esm.js");function u(){const e=n.ZP.panels;return Object.keys(e).filter((s=>!1===e[s].hideFromList)).map((s=>e[s])).sort(((e,s)=>e.sort-s.sort))}function g(e,s,a){if(!s.length)return e.filter((e=>e.state!==d.PluginState.deprecated||a.id===e.id));const t=s.toLowerCase(),n=[],r=[];for(const s of e){if(s.state===d.PluginState.deprecated&&a.id!==s.id)continue;const e=s.name.toLowerCase().indexOf(t);0===e?n.push(s):e>0&&r.push(s)}return n.concat(r)}const m=({searchQuery:e,onTypeChange:s,current:a})=>{const n=(0,c.useTheme)(),r=h(n),p=(0,t.useMemo)((()=>u()),[]),m=(0,t.useCallback)((()=>g(p,e,a)),[a,p,e]),x=m(),b=x.length>0,f=x.concat(p.filter((e=>-1===x.indexOf(e))));return(0,i.jsx)("div",{className:r.grid,children:b?f.map(((t,n)=>t.state===d.PluginState.deprecated?null:((t,n)=>{const r=t.id===a.id,l=m().indexOf(t)>-1;return(0,i.jsx)(o,{disabled:!l&&!!e,isCurrent:r,plugin:t,onClick:e=>s(t,Boolean(e.metaKey||e.ctrlKey||e.altKey))},t.id)})(t))):l||(l=(0,i.jsx)(c.EmptySearchResult,{children:"Could not find anything matching your query"}))})};m.displayName="VizTypePicker";const h=(0,c.stylesFactory)((e=>({grid:p.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `})))},"./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx":(e,s,a)=>{a.d(s,{N:()=>k,e:()=>C});var t,n=a("./node_modules/react/index.js"),r=a("./packages/grafana-ui/src/index.ts"),i=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),o=a("./public/app/core/components/Select/SortPicker.tsx"),l=a("./public/app/core/components/PanelTypeFilter/PanelTypeFilter.tsx"),c=a("./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx"),d=a("./public/app/core/constants.ts"),p=a("./node_modules/debounce-promise/dist/index.js"),u=a.n(p),g=a("./public/app/types/index.ts"),m=a("./public/app/core/services/backend_srv.ts"),h=a("./node_modules/react/jsx-runtime.js");function x({onChange:e,maxMenuHeight:s}){const a=(0,r.useStyles2)(b),[i,o]=(0,n.useState)(!1),l=(0,n.useCallback)((e=>async function(e,s){s(!0);const a={query:e,type:"dash-folder",permission:g.bf.View},t=(await(0,m.i)().search(a)).map((e=>({label:e.title,value:{id:e.id,title:e.title}})));e&&!"general".includes(e.toLowerCase())||t.unshift({label:"General",value:{id:0,title:"General"}});return s(!1),t}(e,o)),[]),c=(0,n.useMemo)((()=>u()(l,300)),[l]),[d,p]=(0,n.useState)([]),x=(0,n.useCallback)((s=>{const a=[];for(const e of s)e.value&&a.push(e.value);e(a),p(s)}),[e]),f={defaultOptions:!0,isMulti:!0,noOptionsMessage:"No folders found",placeholder:"Filter by folder",styles:(0,r.resetSelectStyles)(),maxMenuHeight:s,value:d,onChange:x};return(0,h.jsxs)("div",{className:a.container,children:[d.length>0&&(0,h.jsx)("span",{className:a.clear,onClick:()=>x([]),children:"Clear folders"}),(0,h.jsx)(r.AsyncMultiSelect,Object.assign({menuShouldPortal:!0},f,{isLoading:i,loadOptions:c,prefix:t||(t=(0,h.jsx)(r.Icon,{name:"filter"})),"aria-label":"Folder filter"}))]})}function b(e){return{container:i.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:i.css`
      label: clear;
      text-decoration: underline;
      font-size: ${e.spacing(1.5)};
      position: absolute;
      top: -${e.spacing(2.75)};
      right: 0;
      cursor: pointer;
      color: ${e.colors.text.link};

      &:hover {
        color: ${e.colors.text.maxContrast};
      }
    `}}var f=a("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const y={searchQuery:"",panelFilter:[],folderFilter:[],sortDirection:void 0},j=(0,f.PH)("libraryPanels/search/searchChanged"),P=(0,f.PH)("libraryPanels/search/sortChanged"),v=(0,f.PH)("libraryPanels/search/panelFilterChanged"),S=(0,f.PH)("libraryPanels/search/folderFilterChanged"),w=(e,s)=>j.match(s)?Object.assign({},e,{searchQuery:s.payload}):P.match(s)?Object.assign({},e,{sortDirection:s.payload.value}):v.match(s)?Object.assign({},e,{panelFilter:s.payload.map((e=>e.id))}):S.match(s)?Object.assign({},e,{folderFilter:s.payload.map((e=>String(e.id)))}):e;let C;!function(e){e.Tight="tight",e.Spacious="spacious"}(C||(C={}));const k=({onClick:e,variant:s=C.Spacious,currentPanelId:a,currentFolderId:t,perPage:i=d.gN,showPanelFilter:p=!1,showFolderFilter:u=!1,showSort:g=!1,showSecondaryActions:m=!1})=>{var b,f;const k=(0,r.useStyles2)($),[{sortDirection:F,panelFilter:N,folderFilter:T,searchQuery:z},_]=(0,n.useReducer)(w,Object.assign({},y,{folderFilter:t?[t.toString(10)]:[]})),O=e=>_(j(e)),L=e=>_(P(e)),D=e=>_(S(e)),I=e=>_(v(e));return s===C.Spacious?(0,h.jsx)("div",{className:k.container,children:(0,h.jsxs)(r.VerticalGroup,{spacing:"lg",children:[b||(b=(0,h.jsx)(r.FilterInput,{value:z,onChange:O,placeholder:"Search by name or description",width:0})),(0,h.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:g&&p||u?"space-between":"flex-end",children:[g&&(0,h.jsx)(o.P,{value:F,onChange:L,filter:["alpha-asc","alpha-desc"]}),(0,h.jsxs)(r.HorizontalGroup,{spacing:"sm",justify:u&&p?"space-between":"flex-end",children:[u&&(0,h.jsx)(x,{onChange:D}),p&&(0,h.jsx)(l.j,{onChange:I})]})]}),(0,h.jsx)("div",{className:k.libraryPanelsView,children:f||(f=(0,h.jsx)(c.u,{onClickCard:e,searchString:z,sortDirection:F,panelFilter:N,folderFilter:T,currentPanelId:a,showSecondaryActions:m,perPage:i}))})]})}):(0,h.jsx)("div",{className:k.container,children:(0,h.jsxs)(r.VerticalGroup,{spacing:"xs",children:[(0,h.jsxs)("div",{className:k.buttonRow,children:[(0,h.jsx)("div",{className:k.tightFilter,children:(0,h.jsx)(r.FilterInput,{value:z,onChange:O,placeholder:"Search by name",width:0})}),(0,h.jsxs)("div",{className:k.tightSortFilter,children:[g&&(0,h.jsx)(o.P,{value:F,onChange:L}),u&&(0,h.jsx)(x,{onChange:D,maxMenuHeight:200}),p&&(0,h.jsx)(l.j,{onChange:I,maxMenuHeight:200})]})]}),(0,h.jsx)("div",{className:k.libraryPanelsView,children:(0,h.jsx)(c.u,{onClickCard:e,searchString:z,sortDirection:F,panelFilter:N,folderFilter:T,currentPanelId:a,showSecondaryActions:m,perPage:i})})]})})};function $(e){return{container:i.css`
      width: 100%;
      overflow-y: auto;
      padding: ${e.spacing(1)};
      min-height: 400px;
    `,buttonRow:i.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${e.spacing(1.5)}; // Clear types link
    `,tightFilter:i.css`
      flex-grow: 1;
    `,tightSortFilter:i.css`
      flex-grow: 1;
      padding: ${e.spacing(0,0,0,.5)};
    `,libraryPanelsView:i.css`
      width: 100%;
    `}}},"./public/app/features/library-panels/components/LibraryPanelsView/LibraryPanelsView.tsx":(e,s,a)=>{a.d(s,{u:()=>X});var t=a("./node_modules/react/index.js"),n=a("./node_modules/react-use/esm/useDebounce.js"),r=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("./packages/grafana-ui/src/index.ts"),o=a("./packages/grafana-data/src/index.ts"),l=a("./public/app/features/dashboard/components/VizTypePicker/PanelTypeCard.tsx"),c=a("./node_modules/rxjs/dist/esm5/internal/Subscription.js"),d=a("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),p=a("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),u=a("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),g=a("./node_modules/rxjs/dist/esm5/internal/observable/timer.js"),m=a("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),h=a("./node_modules/rxjs/dist/esm5/internal/operators/catchError.js"),x=a("./node_modules/rxjs/dist/esm5/internal/operators/finalize.js"),b=a("./node_modules/rxjs/dist/esm5/internal/operators/share.js"),f=a("./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),y=a("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),j=a("./public/app/features/library-panels/state/api.ts"),P=a("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");const v={loadingState:o.LoadingState.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},S=(0,P.PH)("libraryPanels/view/initSearch"),w=(0,P.PH)("libraryPanels/view/searchCompleted"),C=(0,P.PH)("libraryPanels/view/changePage"),k=(e,s)=>{if(S.match(s))return Object.assign({},e,{loadingState:o.LoadingState.Loading});if(w.match(s)){const{libraryPanels:a,page:t,perPage:n,totalCount:r}=s.payload,i=Math.ceil(r/n);return Object.assign({},e,{libraryPanels:a,perPage:n,totalCount:r,loadingState:o.LoadingState.Done,numberOfPages:i,page:t>i?t-1:t})}return C.match(s)?Object.assign({},e,{page:s.payload.page}):e};function $(e){return function(s){const a=new c.w0,t=(0,d.Dp)((0,j.Pq)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilter:e.folderFilter})).pipe((0,m.z)((({perPage:e,elements:s,page:a,totalCount:t})=>(0,p.of)(w({libraryPanels:s,page:a,perPage:e,totalCount:t})))),(0,h.K)((s=>(console.error(s),(0,p.of)(w(Object.assign({},v,{page:e.page,perPage:e.perPage})))))),(0,x.x)((()=>a.unsubscribe())),(0,b.B)());a.add((0,u.T)((0,g.H)(50).pipe((0,f.h)(S()),(0,y.R)(t)),t).subscribe(s))}}function F(e){return function(s){return s instanceof Function?s(e):e(s)}}const N={loadingState:o.LoadingState.Loading,dashboardTitles:[]},T=(0,P.PH)("libraryPanels/delete/searchCompleted"),z=(e=N,s)=>T.match(s)?Object.assign({},e,{dashboardTitles:s.payload.dashboards.map((e=>e.title)),loadingState:o.LoadingState.Done}):e;var _,O,L,D,I=a("./public/app/features/library-panels/styles.ts"),M=a("./node_modules/react/jsx-runtime.js");const V=({libraryPanel:e,onDismiss:s,onConfirm:a})=>{const n=(0,i.useStyles)(I.J),[{dashboardTitles:r,loadingState:l},c]=(0,t.useReducer)(z,N),d=(0,t.useMemo)((()=>F(c)),[c]);(0,t.useEffect)((()=>{d(function(e){return async function(s){const a=await(0,j.E8)(e.uid);s(T({dashboards:a}))}}(e))}),[d,e]);const p=Boolean(r.length),u=l===o.LoadingState.Done;return(0,M.jsxs)(i.Modal,{className:n.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:s,isOpen:!0,children:[u?null:_||(_=(0,M.jsx)(H,{})),u?(0,M.jsxs)("div",{children:[p?(0,M.jsx)(R,{dashboardTitles:r}):null,p?null:O||(O=(0,M.jsx)(B,{})),(0,M.jsxs)(i.Modal.ButtonRow,{children:[(0,M.jsx)(i.Button,{variant:"secondary",onClick:s,fill:"outline",children:"Cancel"}),(0,M.jsx)(i.Button,{variant:"destructive",onClick:a,disabled:p,children:"Delete"})]})]}):null]})},H=()=>L||(L=(0,M.jsx)("span",{children:"Loading library panel..."})),B=()=>{const e=(0,i.useStyles)(I.J);return(0,M.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},R=({dashboardTitles:e})=>{const s=(0,i.useStyles)(I.J),a=1===e.length?"dashboard.":"dashboards.",t=`${e.length} ${a}`;return 0===e.length?null:(0,M.jsxs)("div",{children:[(0,M.jsxs)("p",{className:s.textInfo,children:["This library panel can not be deleted because it is connected to ",(0,M.jsx)("strong",{children:t})," Remove the library panel from the dashboards listed below and retry."]}),(0,M.jsxs)("table",{className:s.myTable,children:[D||(D=(0,M.jsx)("thead",{children:(0,M.jsx)("tr",{children:(0,M.jsx)("th",{children:"Dashboard name"})})})),(0,M.jsx)("tbody",{children:e.map(((e,s)=>(0,M.jsx)("tr",{children:(0,M.jsx)("td",{children:e})},`dash-title-${s}`)))})]})]})};var A,G,U=a("./packages/grafana-runtime/src/index.ts"),W=a("./public/app/features/dashboard/dashgrid/PanelPluginError.tsx");const E=({libraryPanel:e,onClick:s,onDelete:a,showSecondaryActions:n})=>{var r;const[i,o]=(0,t.useState)(!1),c=null!==(r=U.config.panels[e.model.type])&&void 0!==r?r:(0,W.X)(e.model.type).meta;return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(l.X,{isCurrent:!1,title:e.name,description:e.description,plugin:c,onClick:()=>s(e),onDelete:n?()=>o(!0):void 0,children:(0,M.jsx)(J,{libraryPanel:e})}),i&&(0,M.jsx)(V,{libraryPanel:e,onConfirm:()=>{null==a||a(e),o(!1)},onDismiss:()=>o(!1)})]})};function J({libraryPanel:e}){const s=(0,i.useStyles2)(K);return e.meta.folderUid?(0,M.jsx)("span",{className:s.metaContainer,children:(0,M.jsxs)(i.Link,{href:`/dashboards/f/${e.meta.folderUid}`,children:[G||(G=(0,M.jsx)(i.Icon,{name:"folder-upload",size:"sm"})),(0,M.jsx)("span",{children:e.meta.folderName})]})}):(0,M.jsxs)("span",{className:s.metaContainer,children:[A||(A=(0,M.jsx)(i.Icon,{name:"folder",size:"sm"})),(0,M.jsx)("span",{children:e.meta.folderName})]})}function K(e){return{metaContainer:r.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}var Q;const X=({className:e,onClickCard:s,searchString:a,sortDirection:l,panelFilter:c,folderFilter:d,showSecondaryActions:p,currentPanelId:u,perPage:g=40})=>{const m=(0,i.useStyles)(q),[{libraryPanels:h,page:x,perPage:b,numberOfPages:f,loadingState:y,currentPanelId:P},S]=(0,t.useReducer)(k,Object.assign({},v,{currentPanelId:u,perPage:g})),w=(0,t.useMemo)((()=>F(S)),[S]);(0,n.Z)((()=>w($({searchString:a,sortDirection:l,panelFilter:c,folderFilter:d,page:x,perPage:b,currentPanelId:P}))),300,[a,l,c,d,x,w]);const N=({uid:e})=>w(function(e,s){return async function(a){try{await(0,j.UO)(e),$(s)(a)}catch(e){console.error(e)}}}(e,{searchString:a,page:x,perPage:b}));return(0,M.jsxs)("div",{className:(0,r.cx)(m.container,e),children:[(0,M.jsx)("div",{className:m.libraryPanelList,children:y===o.LoadingState.Loading?Q||(Q=(0,M.jsx)("p",{children:"Loading library panels..."})):h.length<1?(0,M.jsx)("p",{className:m.noPanelsFound,children:"No library panels found."}):null==h?void 0:h.map(((e,a)=>(0,M.jsx)(E,{libraryPanel:e,onDelete:N,onClick:s,showSecondaryActions:p},`library-panel=${a}`)))}),h.length?(0,M.jsx)("div",{className:m.pagination,children:(0,M.jsx)(i.Pagination,{currentPage:x,numberOfPages:f,onNavigate:e=>w(C({page:e})),hideWhenSinglePage:!0})}):null]})},q=e=>({container:r.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:r.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `,searchHeader:r.css`
      display: flex;
    `,newPanelButton:r.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:r.css`
      align-self: center;
      margin-top: ${e.spacing.sm};
    `,noPanelsFound:r.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},"./public/app/features/library-panels/styles.ts":(e,s,a)=>{a.d(s,{J:()=>n});var t=a("./node_modules/@emotion/css/dist/emotion-css.esm.js");function n(e){return{myTable:t.css`
      max-height: 204px;
      overflow-y: auto;
      margin-top: 11px;
      margin-bottom: 28px;
      border-radius: ${e.border.radius.sm};
      border: 1px solid ${e.colors.bg3};
      background: ${e.colors.bg1};
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.md};
      width: 100%;

      thead {
        color: #538ade;
        font-size: ${e.typography.size.sm};
      }

      th,
      td {
        padding: 6px 13px;
        height: ${e.spacing.xl};
      }

      tbody > tr:nth-child(odd) {
        background: ${e.colors.bg2};
      }
    `,noteTextbox:t.css`
      margin-bottom: ${e.spacing.xl};
    `,textInfo:t.css`
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:t.css`
      margin-top: ${e.spacing.md};
    `,modal:t.css`
      width: 500px;
    `,modalText:t.css`
      font-size: ${e.typography.heading.h4};
      color: ${e.colors.link};
      margin-bottom: calc(${e.spacing.d} * 2);
      padding-top: ${e.spacing.d};
    `}}},"./public/app/features/plugins/PluginStateInfo.tsx":(e,s,a)=>{a.d(s,{u:()=>i});a("./node_modules/react/index.js");var t=a("./packages/grafana-ui/src/index.ts"),n=a("./packages/grafana-data/src/index.ts"),r=a("./node_modules/react/jsx-runtime.js");const i=e=>{const s=function(e){switch(e){case n.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:"This feature is deprecated and will be removed in a future release"};case n.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:"This feature is experimental and future updates might not be backward compatible"};case n.PluginState.beta:return{text:"Beta",color:"blue",tooltip:"This feature is close to complete but not fully tested"};default:return null}}(e.state);return s?(0,r.jsx)(t.Badge,{color:s.color,title:s.tooltip,text:s.text,icon:s.icon}):null}}}]);
//# sourceMappingURL=4460.0e7ce18a6cf0f8775a65.js.map