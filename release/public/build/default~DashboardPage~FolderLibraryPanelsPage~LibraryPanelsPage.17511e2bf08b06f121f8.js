(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1S9k":function(e,t,n){"use strict";var a=n("q1tI"),r=n("ZFWI"),i=n("EPCr"),s=n("nKUr");const o=({isCurrent:e,plugin:t,onClick:n,disabled:a})=>Object(s.jsx)(i.a,{title:t.name,plugin:t,description:t.info.description,onClick:n,isCurrent:e,disabled:a,showBadge:!0});o.displayName="VizTypePickerPlugin";var c,l=n("kDLi"),d=n("Obii"),u=n("vF1F");function p(){const e=r.b.panels;return Object.keys(e).filter(t=>!1===e[t].hideFromList).map(t=>e[t]).sort((e,t)=>e.sort-t.sort)}function b(e,t,n){if(!t.length)return e.filter(e=>e.state!==d.PluginState.deprecated||n.id===e.id);const a=t.toLowerCase(),r=[],i=[];for(const t of e){if(t.state===d.PluginState.deprecated&&n.id!==t.id)continue;const e=t.name.toLowerCase().indexOf(a);0===e?r.push(t):e>0&&i.push(t)}return r.concat(i)}n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return h}));const h=({searchQuery:e,onTypeChange:t,current:n})=>{const r=Object(l.useTheme)(),i=g(r),u=Object(a.useMemo)(()=>p(),[]),h=Object(a.useCallback)(()=>b(u,e,n),[n,u,e]),j=h(),f=j.length>0,m=j.concat(u.filter(e=>-1===j.indexOf(e)));return Object(s.jsx)("div",{className:i.grid,children:f?m.map((a,r)=>a.state===d.PluginState.deprecated?null:((a,r)=>{const i=a.id===n.id,c=h().indexOf(a)>-1;return Object(s.jsx)(o,{disabled:!c&&!!e,isCurrent:i,plugin:a,onClick:e=>t(a,e.metaKey||e.ctrlKey||e.altKey)},a.id)})(a)):c||(c=Object(s.jsx)(l.EmptySearchResult,{children:"Could not find anything matching your query"}))})};h.displayName="VizTypePicker";const g=Object(l.stylesFactory)(e=>({grid:u.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `}))},EPCr:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("q1tI");var a=n("Obii"),r=n("kDLi"),i=n("vF1F"),s=n("Csm0"),o=n("nKUr");const c=({isCurrent:e,title:t,plugin:n,onClick:c,onDelete:u,disabled:p,showBadge:b,description:h,children:g})=>{const j=Object(r.useStyles2)(l),f=Object(i.cx)({[j.item]:!0,[j.disabled]:p||n.state===a.PluginState.deprecated,[j.current]:e});return Object(o.jsxs)("div",{className:f,"aria-label":s.selectors.components.PluginVisualization.item(n.name),onClick:p?void 0:c,title:e?"Click again to close this section":n.name,children:[Object(o.jsx)("img",{className:j.img,src:n.info.logos.small}),Object(o.jsxs)("div",{className:j.itemContent,children:[Object(o.jsx)("div",{className:j.name,children:t}),h?Object(o.jsx)("span",{className:j.description,children:h}):null,g]}),b&&Object(o.jsx)("div",{className:Object(i.cx)(j.badge,p&&j.disabled),children:Object(o.jsx)(d,{plugin:n})}),u&&Object(o.jsx)(r.IconButton,{name:"trash-alt",onClick:e=>{e.stopPropagation(),u()},"aria-label":"Delete button on panel type card"})]})};c.displayName="PanelTypeCard";const l=e=>({item:i.css`
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
    `,itemContent:i.css`
      position: relative;
      width: 100%;
      padding: ${e.spacing(0,1)};
    `,current:i.css`
      label: currentVisualizationItem;
      border: 1px solid ${e.colors.primary.border};
      background: ${e.colors.action.selected};
    `,disabled:i.css`
      opacity: 0.2;
      filter: grayscale(1);
      cursor: default;
      pointer-events: none;
    `,name:i.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightMedium};
      width: 100%;
    `,description:i.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      font-weight: ${e.typography.fontWeightLight};
      width: 100%;
    `,img:i.css`
      max-height: 38px;
      width: 38px;
      display: flex;
      align-items: center;
    `,badge:i.css`
      background: ${e.colors.background.primary};
    `}),d=({plugin:e})=>{const t=function(e){switch(e.state){case a.PluginState.deprecated:return{text:"Deprecated",color:"red",tooltip:e.name+" Panel is deprecated"};case a.PluginState.alpha:return{text:"Alpha",color:"blue",tooltip:e.name+" Panel is experimental"};case a.PluginState.beta:return{text:"Beta",color:"blue",tooltip:e.name+" Panel is in beta"};default:return null}}(e);return Object(a.isUnsignedPluginSignature)(e.signature)?Object(o.jsx)(r.PluginSignatureBadge,{status:e.signature}):t?Object(o.jsx)(r.Badge,{color:t.color,text:t.text,icon:t.icon,tooltip:t.tooltip}):null};d.displayName="PanelPluginBadge"},KO1d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("vF1F");function r(e){return{myTable:a.css`
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
    `,noteTextbox:a.css`
      margin-bottom: ${e.spacing.xl};
    `,textInfo:a.css`
      color: ${e.colors.textSemiWeak};
      font-size: ${e.typography.size.sm};
    `,dashboardSearch:a.css`
      margin-top: ${e.spacing.md};
    `,modal:a.css`
      width: 500px;
    `,modalText:a.css`
      font-size: ${e.typography.heading.h4};
      color: ${e.colors.link};
      margin-bottom: calc(${e.spacing.d} * 2);
      padding-top: ${e.spacing.d};
    `}}},NluS:function(e,t,n){"use strict";function a(e){return"function"==typeof e?e():e}function r(){var e={};return e.promise=new Promise((function(t,n){e.resolve=t,e.reject=n})),e}e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,s=void 0,o=void 0,c=[];return function(){var d=a(t),u=(new Date).getTime(),p=!i||u-i>d;i=u;for(var b=arguments.length,h=Array(b),g=0;g<b;g++)h[g]=arguments[g];if(p&&n.leading)return n.accumulate?Promise.resolve(e.call(this,[h])).then((function(e){return e[0]})):Promise.resolve(e.call.apply(e,[this].concat(h)));if(s?clearTimeout(o):s=r(),c.push(h),o=setTimeout(l.bind(this),d),n.accumulate){var j=c.length-1;return s.promise.then((function(e){return e[j]}))}return s.promise};function l(){var t=s;clearTimeout(o),Promise.resolve(n.accumulate?e.call(this,c):e.apply(this,c[c.length-1])).then(t.resolve,t.reject),c=[],s=null}}},ZAQQ:function(e,t,n){"use strict";var a=n("q1tI"),r=n("rYwU"),i=n("vF1F"),s=n("kDLi"),o=n("Obii"),c=n("t8hP"),l=n("EPCr"),d=n("pugT"),u=n("0/uQ"),p=n("F/XL"),b=n("p0ib"),h=n("gI3B"),g=n("psW0"),j=n("9Z1F"),f=n("2WpN"),m=n("S1nX"),O=n("aGNc"),y=n("ny24"),x=n("V8VS"),v=n("i7Pf");function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const w={loadingState:o.LoadingState.Loading,libraryPanels:[],totalCount:0,perPage:40,page:1,numberOfPages:0,currentPanelId:void 0},S=Object(v.b)("libraryPanels/view/initSearch"),C=Object(v.b)("libraryPanels/view/searchCompleted"),k=Object(v.b)("libraryPanels/view/changePage"),F=(e,t)=>{if(S.match(t))return P({},e,{loadingState:o.LoadingState.Loading});if(C.match(t)){const{libraryPanels:n,page:a,perPage:r,totalCount:i}=t.payload,s=Math.ceil(i/r);return P({},e,{libraryPanels:n,perPage:r,totalCount:i,loadingState:o.LoadingState.Done,numberOfPages:s,page:a>s?a-1:a})}return k.match(t)?P({},e,{page:t.payload.page}):e};function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function N(e){return function(t){const n=new d.a,a=Object(u.a)(Object(x.f)({searchString:e.searchString,perPage:e.perPage,page:e.page,excludeUid:e.currentPanelId,sortDirection:e.sortDirection,typeFilter:e.panelFilter,folderFilter:e.folderFilter})).pipe(Object(g.b)(({perPage:e,elements:t,page:n,totalCount:a})=>Object(p.a)(C({libraryPanels:t,page:n,perPage:e,totalCount:a}))),Object(j.a)(t=>(console.error(t),Object(p.a)(C($({},w,{page:e.page,perPage:e.perPage}))))),Object(f.a)(()=>n.unsubscribe()),Object(m.a)());n.add(Object(b.a)(Object(h.a)(50).pipe(Object(O.a)(S()),Object(y.a)(a)),a).subscribe(t))}}function D(e){return function(t){return t instanceof Function?t(e):e(t)}}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const z={loadingState:o.LoadingState.Loading,dashboardTitles:[]},I=Object(v.b)("libraryPanels/delete/searchCompleted"),T=(e=z,t)=>I.match(t)?L({},e,{dashboardTitles:t.payload.dashboards.map(e=>e.title),loadingState:o.LoadingState.Done}):e;var M,B,V,A,K=n("KO1d"),U=n("nKUr");const H=({libraryPanel:e,onDismiss:t,onConfirm:n})=>{const r=Object(s.useStyles)(K.a),[{dashboardTitles:i,loadingState:c},l]=Object(a.useReducer)(T,z),d=Object(a.useMemo)(()=>D(l),[l]);Object(a.useEffect)(()=>{d(function(e){return async function(t){const n=await Object(x.c)(e.uid);t(I({dashboards:n}))}}(e))},[d,e]);const u=Boolean(i.length),p=c===o.LoadingState.Done;return Object(U.jsxs)(s.Modal,{className:r.modal,title:"Delete library panel",icon:"trash-alt",onDismiss:t,isOpen:!0,children:[p?null:M||(M=Object(U.jsx)(Q,{})),p?Object(U.jsxs)("div",{children:[u?Object(U.jsx)(W,{dashboardTitles:i}):null,u?null:B||(B=Object(U.jsx)(R,{})),Object(U.jsxs)(s.Modal.ButtonRow,{children:[Object(U.jsx)(s.Button,{variant:"secondary",onClick:t,fill:"outline",children:"Cancel"}),Object(U.jsx)(s.Button,{variant:"destructive",onClick:n,disabled:u,children:"Delete"})]})]}):null]})},Q=()=>V||(V=Object(U.jsx)("span",{children:"Loading library panel..."})),R=()=>{const e=Object(s.useStyles)(K.a);return Object(U.jsx)("div",{className:e.modalText,children:"Do you want to delete this panel?"})},W=({dashboardTitles:e})=>{const t=Object(s.useStyles)(K.a),n=1===e.length?"dashboard.":"dashboards.",a=`${e.length} ${n}`;return 0===e.length?null:Object(U.jsxs)("div",{children:[Object(U.jsxs)("p",{className:t.textInfo,children:["This library panel can not be deleted because it is connected to ",Object(U.jsx)("strong",{children:a})," Remove the library panel from the dashboards listed below and retry."]}),Object(U.jsxs)("table",{className:t.myTable,children:[A||(A=Object(U.jsx)("thead",{children:Object(U.jsx)("tr",{children:Object(U.jsx)("th",{children:"Dashboard name"})})})),Object(U.jsx)("tbody",{children:e.map((e,t)=>Object(U.jsx)("tr",{children:Object(U.jsx)("td",{children:e})},"dash-title-"+t))})]})]})};var q,G;const E=({libraryPanel:e,onClick:t,onDelete:n,showSecondaryActions:r})=>{var i;const[s,o]=Object(a.useState)(!1),d=null!==(i=c.config.panels[e.model.type])&&void 0!==i?i:{};return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(l.a,{isCurrent:!1,title:e.name,description:e.description,plugin:d,onClick:()=>t(e),onDelete:r?()=>o(!0):void 0,children:Object(U.jsx)(X,{libraryPanel:e})}),s&&Object(U.jsx)(H,{libraryPanel:e,onConfirm:()=>{null==n||n(e),o(!1)},onDismiss:()=>o(!1)})]})};function X({libraryPanel:e}){const t=Object(s.useStyles2)(Z);return e.meta.folderUid?Object(U.jsx)("span",{className:t.metaContainer,children:Object(U.jsxs)(s.Link,{href:"/dashboards/f/"+e.meta.folderUid,children:[G||(G=Object(U.jsx)(s.Icon,{name:"folder-upload",size:"sm"})),Object(U.jsx)("span",{children:e.meta.folderName})]})}):Object(U.jsxs)("span",{className:t.metaContainer,children:[q||(q=Object(U.jsx)(s.Icon,{name:"folder",size:"sm"})),Object(U.jsx)("span",{children:e.meta.folderName})]})}function Z(e){return{metaContainer:i.css`
      display: flex;
      align-items: center;
      color: ${e.colors.text.disabled};
      font-size: ${e.typography.bodySmall.fontSize};
      padding-top: ${e.spacing(.5)};

      svg {
        margin-right: ${e.spacing(.5)};
        margin-bottom: 3px;
      }
    `}}var J;function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return _}));const _=({className:e,onClickCard:t,searchString:n,sortDirection:c,panelFilter:l,folderFilter:d,showSecondaryActions:u,currentPanelId:p,perPage:b=40})=>{const h=Object(s.useStyles)(ee),[{libraryPanels:g,page:j,perPage:f,numberOfPages:m,loadingState:O,currentPanelId:y},v]=Object(a.useReducer)(F,Y({},w,{currentPanelId:p,perPage:b})),P=Object(a.useMemo)(()=>D(v),[v]);Object(r.a)(()=>P(N({searchString:n,sortDirection:c,panelFilter:l,folderFilter:d,page:j,perPage:f,currentPanelId:y})),300,[n,c,l,d,j,P]);const S=({uid:e})=>P(function(e,t){return async function(n){try{await Object(x.b)(e),N(t)(n)}catch(e){console.error(e)}}}(e,{searchString:n,page:j,perPage:f}));return Object(U.jsxs)("div",{className:Object(i.cx)(h.container,e),children:[Object(U.jsx)("div",{className:h.libraryPanelList,children:O===o.LoadingState.Loading?J||(J=Object(U.jsx)("p",{children:"Loading library panels..."})):g.length<1?Object(U.jsx)("p",{className:h.noPanelsFound,children:"No library panels found."}):null==g?void 0:g.map((e,n)=>Object(U.jsx)(E,{libraryPanel:e,onDelete:S,onClick:t,showSecondaryActions:u},"library-panel="+n))}),g.length?Object(U.jsx)("div",{className:h.pagination,children:Object(U.jsx)(s.Pagination,{currentPage:j,numberOfPages:m,onNavigate:e=>P(k({page:e})),hideWhenSinglePage:!0})}):null]})},ee=e=>({container:i.css`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    `,libraryPanelList:i.css`
      max-width: 100%;
      display: grid;
      grid-gap: ${e.spacing.sm};
    `,searchHeader:i.css`
      display: flex;
    `,newPanelButton:i.css`
      margin-top: 10px;
      align-self: flex-start;
    `,pagination:i.css`
      align-self: center;
      margin-top: ${e.spacing.sm};
    `,noPanelsFound:i.css`
      label: noPanelsFound;
      min-height: 200px;
    `})},orvP:function(e,t,n){"use strict";var a,r=n("q1tI"),i=n("kDLi"),s=n("vF1F"),o=n("EKT6"),c=n("Hw4X"),l=n("uC62"),d=n("ZAQQ"),u=n("eXZ6"),p=n("NluS"),b=n.n(p),h=n("NXk7"),g=n("nKUr");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f({onChange:e,maxMenuHeight:t}){const n=Object(i.useStyles2)(m),[s,o]=Object(r.useState)(!1),c=Object(r.useCallback)(e=>async function(e,t){t(!0);const n={query:e,type:"dash-folder",permission:"View"},a=(await Object(h.c)().search(n)).map(e=>({label:e.title,value:{id:e.id,title:e.title}}));e&&!"general".includes(e.toLowerCase())||a.unshift({label:"General",value:{id:0,title:"General"}});return t(!1),a}(e,o),[]),l=Object(r.useMemo)(()=>b()(c,300),[c]),[d,u]=Object(r.useState)([]),p=Object(r.useCallback)(t=>{const n=[];for(const e of t)e.value&&n.push(e.value);e(n),u(t)},[e]),f={defaultOptions:!0,isMulti:!0,noOptionsMessage:"No folders found",placeholder:"Filter by folder",styles:Object(i.resetSelectStyles)(),maxMenuHeight:t,value:d,onChange:p};return Object(g.jsxs)("div",{className:n.container,children:[d.length>0&&Object(g.jsx)("span",{className:n.clear,onClick:()=>p([]),children:"Clear folders"}),Object(g.jsx)(i.AsyncMultiSelect,j({},f,{isLoading:s,loadOptions:l,prefix:a||(a=Object(g.jsx)(i.Icon,{name:"filter"})),"aria-label":"Folder filter"}))]})}function m(e){return{container:s.css`
      label: container;
      position: relative;
      min-width: 180px;
      flex-grow: 1;
    `,clear:s.css`
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
    `}}var O=n("i7Pf");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const x={searchQuery:"",panelFilter:[],folderFilter:[],sortDirection:void 0},v=Object(O.b)("libraryPanels/search/searchChanged"),P=Object(O.b)("libraryPanels/search/sortChanged"),w=Object(O.b)("libraryPanels/search/panelFilterChanged"),S=Object(O.b)("libraryPanels/search/folderFilterChanged"),C=(e,t)=>v.match(t)?y({},e,{searchQuery:t.payload}):P.match(t)?y({},e,{sortDirection:t.payload.value}):w.match(t)?y({},e,{panelFilter:t.payload.map(e=>e.id)}):S.match(t)?y({},e,{folderFilter:t.payload.map(e=>String(e.id))}):e;function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let F;n.d(t,"b",(function(){return F})),n.d(t,"a",(function(){return $})),function(e){e.Tight="tight",e.Spacious="spacious"}(F||(F={}));const $=({onClick:e,variant:t=F.Spacious,currentPanelId:n,currentFolderId:a,perPage:s=u.b,showPanelFilter:p=!1,showFolderFilter:b=!1,showSort:h=!1,showSecondaryActions:j=!1})=>{var m,O;const y=Object(i.useStyles2)(N),[{sortDirection:$,panelFilter:D,folderFilter:L,searchQuery:z},I]=Object(r.useReducer)(C,k({},x,{folderFilter:a?[a.toString(10)]:[]})),T=e=>I(v(e)),M=e=>I(P(e)),B=e=>I(S(e)),V=e=>I(w(e));return t===F.Spacious?Object(g.jsx)("div",{className:y.container,children:Object(g.jsxs)(i.VerticalGroup,{spacing:"lg",children:[m||(m=Object(g.jsx)(o.a,{value:z,onChange:T,placeholder:"Search by name or description",width:0})),Object(g.jsxs)(i.HorizontalGroup,{spacing:"sm",justify:h&&p||b?"space-between":"flex-end",children:[h&&Object(g.jsx)(c.a,{value:$,onChange:M,filter:["alpha-asc","alpha-desc"]}),Object(g.jsxs)(i.HorizontalGroup,{spacing:"sm",justify:b&&p?"space-between":"flex-end",children:[b&&Object(g.jsx)(f,{onChange:B}),p&&Object(g.jsx)(l.a,{onChange:V})]})]}),Object(g.jsx)("div",{className:y.libraryPanelsView,children:O||(O=Object(g.jsx)(d.a,{onClickCard:e,searchString:z,sortDirection:$,panelFilter:D,folderFilter:L,currentPanelId:n,showSecondaryActions:j,perPage:s}))})]})}):Object(g.jsx)("div",{className:y.container,children:Object(g.jsxs)(i.VerticalGroup,{spacing:"xs",children:[Object(g.jsxs)("div",{className:y.buttonRow,children:[Object(g.jsx)("div",{className:y.tightFilter,children:Object(g.jsx)(o.a,{value:z,onChange:T,placeholder:"Search by name",width:0})}),Object(g.jsxs)("div",{className:y.tightSortFilter,children:[h&&Object(g.jsx)(c.a,{value:$,onChange:M}),b&&Object(g.jsx)(f,{onChange:B,maxMenuHeight:200}),p&&Object(g.jsx)(l.a,{onChange:V,maxMenuHeight:200})]})]}),Object(g.jsx)("div",{className:y.libraryPanelsView,children:Object(g.jsx)(d.a,{onClickCard:e,searchString:z,sortDirection:$,panelFilter:D,folderFilter:L,currentPanelId:n,showSecondaryActions:j,perPage:s})})]})})};function N(e){return{container:s.css`
      width: 100%;
      overflow-y: auto;
      padding: ${e.spacing(1)};
      min-height: 400px;
    `,buttonRow:s.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: ${e.spacing(1.5)}; // Clear types link
    `,tightFilter:s.css`
      flex-grow: 1;
    `,tightSortFilter:s.css`
      flex-grow: 1;
      padding: ${e.spacing(0,0,0,.5)};
    `,libraryPanelsView:s.css`
      width: 100%;
    `}}},uC62:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a,r=n("q1tI"),i=n("1S9k"),s=n("kDLi"),o=n("vF1F"),c=n("nKUr");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const d=({onChange:e,maxMenuHeight:t})=>{const n=Object(r.useMemo)(()=>Object(i.c)(),[]),o=Object(r.useMemo)(()=>n.map(e=>({label:e.name,imgUrl:e.info.logos.small,value:e})).sort((e,t)=>{var n;return null===(n=e.label)||void 0===n?void 0:n.localeCompare(t.label)}),[n]),[d,p]=Object(r.useState)([]),b=Object(r.useCallback)(t=>{const n=[];for(const e of t)e.value&&n.push(e.value);e(n),p(t)},[e]),h=Object(s.useStyles2)(u),g={defaultOptions:!0,getOptionLabel:e=>e.label,getOptionValue:e=>e.value,isMulti:!0,noOptionsMessage:"No Panel types found",placeholder:"Filter by type",styles:Object(s.resetSelectStyles)(),maxMenuHeight:t,options:o,value:d,onChange:b};return Object(c.jsxs)("div",{className:h.container,children:[d.length>0&&Object(c.jsx)("span",{className:h.clear,onClick:()=>b([]),children:"Clear types"}),Object(c.jsx)(s.Select,l({},g,{prefix:a||(a=Object(c.jsx)(s.Icon,{name:"filter"})),"aria-label":"Panel Type filter"}))]})};function u(e){return{container:o.css`
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
    `}}}}]);
//# sourceMappingURL=default~DashboardPage~FolderLibraryPanelsPage~LibraryPanelsPage.17511e2bf08b06f121f8.js.map