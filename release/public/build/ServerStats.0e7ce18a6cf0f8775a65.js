"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7641],{"./public/app/features/admin/ServerStats.tsx":(s,e,a)=>{a.r(e),a.d(e,{ServerStats:()=>g});var n=a("./node_modules/react/index.js"),t=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("./packages/grafana-ui/src/index.ts"),r=a("./public/app/types/index.ts"),c=a("./packages/grafana-runtime/src/index.ts");var o,d,l,u,m,p=a("./public/app/core/services/context_srv.ts"),x=a("./public/app/features/plugins/admin/components/Loader.tsx"),h=a("./node_modules/react/jsx-runtime.js");const g=()=>{const[s,e]=(0,n.useState)(null),[a,t]=(0,n.useState)(!0),g=(0,i.useStyles2)(v);return(0,n.useEffect)((()=>{(async()=>(0,c.getBackendSrv)().get("api/admin/stats").catch((s=>(console.error(s),null))))().then((s=>{e(s),t(!1)}))}),[]),p.Vt.hasPermission(r.bW.ActionServerStatsRead)?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:g.title,children:"Instance statistics"}),a?(0,h.jsx)("div",{className:g.loader,children:o||(o=(0,h.jsx)(x.a,{text:"Loading instance stats..."}))}):s?(0,h.jsxs)("div",{className:g.row,children:[(0,h.jsx)(j,{content:[{name:"Dashboards (starred)",value:`${s.dashboards} (${s.stars})`},{name:"Tags",value:s.tags},{name:"Playlists",value:s.playlists},{name:"Snapshots",value:s.snapshots}],footer:d||(d=(0,h.jsx)(i.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,h.jsxs)("div",{className:g.doubleRow,children:[(0,h.jsx)(j,{content:[{name:"Data sources",value:s.datasources}],footer:l||(l=(0,h.jsx)(i.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"}))}),(0,h.jsx)(j,{content:[{name:"Alerts",value:s.alerts}],footer:u||(u=(0,h.jsx)(i.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,h.jsx)(j,{content:[{name:"Organisations",value:s.orgs},{name:"Users total",value:s.users},{name:"Active users in last 30 days",value:s.activeUsers},{name:"Active sessions",value:s.activeSessions}],footer:m||(m=(0,h.jsx)(i.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"}))})]}):(0,h.jsx)("p",{className:g.notFound,children:"No stats found."})]}):null},v=s=>({title:t.css`
      margin-bottom: ${s.spacing(4)};
    `,row:t.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${s.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:t.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${s.spacing(2)};
      }
    `,loader:t.css`
      height: 290px;
    `,notFound:t.css`
      font-size: ${s.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),j=({content:s,footer:e})=>{const a=(0,i.useStyles2)(f);return(0,h.jsx)(i.CardContainer,{className:a.container,disableHover:!0,children:(0,h.jsxs)("div",{className:a.inner,children:[(0,h.jsx)("div",{className:a.content,children:s.map((s=>(0,h.jsxs)("div",{className:a.row,children:[(0,h.jsx)("span",{children:s.name}),(0,h.jsx)("span",{children:s.value})]},s.name)))}),e&&(0,h.jsx)("div",{children:e})]})})},f=s=>({container:t.css`
      padding: ${s.spacing(2)};
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
      margin-bottom: ${s.spacing(2)};
      align-items: center;
    `})},"./public/app/features/plugins/admin/components/Loader.tsx":(s,e,a)=>{a.d(e,{a:()=>r});a("./node_modules/react/index.js");var n=a("./packages/grafana-ui/src/index.ts"),t=a("./public/app/features/plugins/admin/components/Page.tsx"),i=a("./node_modules/react/jsx-runtime.js");const r=({text:s="Loading..."})=>(0,i.jsx)(t.T,{children:(0,i.jsx)("div",{className:"page-loader-wrapper",children:(0,i.jsx)(n.LoadingPlaceholder,{text:s})})})},"./public/app/features/plugins/admin/components/Page.tsx":(s,e,a)=>{a.d(e,{T:()=>r});a("./node_modules/react/index.js");var n=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),t=a("./packages/grafana-ui/src/index.ts"),i=a("./node_modules/react/jsx-runtime.js");const r=({children:s})=>{const e=(0,t.useStyles2)(c);return(0,i.jsx)("div",{className:"page-container",children:(0,i.jsx)("div",{className:e,children:s})})},c=s=>n.css`
    margin-bottom: ${s.spacing(3)};
  `}}]);
//# sourceMappingURL=ServerStats.0e7ce18a6cf0f8775a65.js.map