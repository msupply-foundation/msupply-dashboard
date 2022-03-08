"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{"./public/app/features/admin/ServerStats.tsx":(e,s,a)=>{a.r(s),a.d(s,{ServerStats:()=>N});var n=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),c=a("./public/app/types/index.ts"),i=a("./packages/grafana-runtime/src/index.ts");var o=a("./public/app/core/services/context_srv.ts"),d=a("./public/app/features/plugins/admin/components/Loader.tsx"),l=a("./packages/grafana-data/src/index.ts"),u=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const p=()=>{var e;const s=m((0,r.useTheme2)()),[a,t]=(0,n.useState)(!1),[c,o]=(0,n.useState)({mode:"thumbs",theme:i.config.theme2.isLight?"light":"dark"}),d=()=>t(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(r.Modal,{title:"Start crawler",isOpen:a,onDismiss:d,children:[(0,u.jsx)("div",{className:s.wrap,children:(0,u.jsx)(r.CodeEditor,{height:200,value:null!==(e=JSON.stringify(c,null,2))&&void 0!==e?e:"",showLineNumbers:!1,readOnly:!1,language:"json",showMiniMap:!1,onBlur:e=>{o(JSON.parse(e))}})}),(0,u.jsxs)(r.Modal.ButtonRow,{children:[(0,u.jsx)(r.Button,{onClick:()=>{(0,i.getBackendSrv)().post("/api/admin/crawler/start",c).then((e=>{console.log("GOT",e),d()}))},children:"Start"}),(0,u.jsx)(r.Button,{variant:"secondary",onClick:d,children:"Cancel"})]})]}),(0,u.jsx)(r.Button,{onClick:()=>t(!0),variant:"primary",children:"Start"})]})},m=e=>({wrap:t.css`
      border: 2px solid #111;
    `});var h,x,g;const v=()=>{const e=f((0,r.useTheme2)()),[s,a]=(0,n.useState)();return(0,n.useEffect)((()=>{const e=(0,i.getGrafanaLiveSrv)().getStream({scope:l.LiveChannelScope.Grafana,namespace:"broadcast",path:"crawler"}).subscribe({next:e=>{((0,l.isLiveChannelMessageEvent)(e)||(0,l.isLiveChannelStatusEvent)(e))&&a(e.message)}});return()=>{e.unsubscribe()}}),[]),s?(0,u.jsxs)("div",{className:e.wrap,children:[(0,u.jsx)("pre",{children:JSON.stringify(s,null,2)}),"running"!==s.state&&(g||(g=(0,u.jsx)(p,{}))),"stopped"!==s.state&&(0,u.jsx)(r.Button,{variant:"secondary",onClick:()=>{(0,i.getBackendSrv)().post("/api/admin/crawler/stop")},children:"Stop"})]}):(0,u.jsxs)("div",{className:e.wrap,children:["No status (never run)",h||(h=(0,u.jsx)("br",{})),x||(x=(0,u.jsx)(p,{}))]})},f=e=>({wrap:t.css`
      border: 4px solid red;
    `,running:t.css`
      border: 4px solid green;
    `});var j,b,y,S,w,k;const N=()=>{const[e,s]=(0,n.useState)(null),[a,t]=(0,n.useState)(!1),l=(0,r.useStyles2)(_),p=o.Vt.hasAccess(c.bW.DataSourcesRead,o.Vt.isGrafanaAdmin),m=o.Vt.hasAccess(c.bW.UsersRead,o.Vt.isGrafanaAdmin);return(0,n.useEffect)((()=>{o.Vt.hasAccess(c.bW.ActionServerStatsRead,o.Vt.isGrafanaAdmin)&&(t(!0),(async()=>(0,i.getBackendSrv)().get("api/admin/stats").catch((e=>(console.error(e),null))))().then((e=>{s(e),t(!1)})))}),[]),o.Vt.hasAccess(c.bW.ActionServerStatsRead,o.Vt.isGrafanaAdmin)?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{className:l.title,children:"Instance statistics"}),a?(0,u.jsx)("div",{className:l.loader,children:j||(j=(0,u.jsx)(d.a,{text:"Loading instance stats..."}))}):e?(0,u.jsxs)("div",{className:l.row,children:[(0,u.jsx)(L,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:b||(b=(0,u.jsx)(r.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,u.jsxs)("div",{className:l.doubleRow,children:[(0,u.jsx)(L,{content:[{name:"Data sources",value:e.datasources}],footer:p&&(y||(y=(0,u.jsx)(r.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"})))}),(0,u.jsx)(L,{content:[{name:"Alerts",value:e.alerts}],footer:S||(S=(0,u.jsx)(r.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,u.jsx)(L,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:m&&(w||(w=(0,u.jsx)(r.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"})))})]}):(0,u.jsx)("p",{className:l.notFound,children:"No stats found."}),i.config.featureToggles.dashboardPreviews&&(k||(k=(0,u.jsx)(v,{})))]}):null},_=e=>({title:t.css`
      margin-bottom: ${e.spacing(4)};
    `,row:t.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:t.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:t.css`
      height: 290px;
    `,notFound:t.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),L=e=>{let{content:s,footer:a}=e;const n=(0,r.useStyles2)(A);return(0,u.jsx)(r.CardContainer,{className:n.container,disableHover:!0,children:(0,u.jsxs)("div",{className:n.inner,children:[(0,u.jsx)("div",{className:n.content,children:s.map((e=>(0,u.jsxs)("div",{className:n.row,children:[(0,u.jsx)("span",{children:e.name}),(0,u.jsx)("span",{children:e.value})]},e.name)))}),a&&(0,u.jsx)("div",{children:a})]})})},A=e=>({container:t.css`
      padding: ${e.spacing(2)};
    `,inner:t.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:t.css`
      flex: 1 0 auto;
    `,row:t.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},"./public/app/features/plugins/admin/components/Loader.tsx":(e,s,a)=>{a.d(s,{a:()=>c});a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n=a("./packages/grafana-ui/src/index.ts"),t=a("./public/app/features/plugins/admin/components/Page.tsx"),r=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=e=>{let{text:s="Loading..."}=e;return(0,r.jsx)(t.T,{children:(0,r.jsx)("div",{className:"page-loader-wrapper",children:(0,r.jsx)(n.LoadingPlaceholder,{text:s})})})}},"./public/app/features/plugins/admin/components/Page.tsx":(e,s,a)=>{a.d(s,{T:()=>c});a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=a("./packages/grafana-ui/src/index.ts"),r=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=e=>{let{children:s}=e;const a=(0,t.useStyles2)(i);return(0,r.jsx)("div",{className:"page-container",children:(0,r.jsx)("div",{className:a,children:s})})},i=e=>n.css`
    margin-bottom: ${e.spacing(3)};
  `}}]);
//# sourceMappingURL=ServerStats.e65e3aa10981aa98e7a1.js.map