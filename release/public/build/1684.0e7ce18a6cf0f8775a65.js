"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1684,7641],{"./public/app/features/admin/ServerStats.tsx":(e,s,t)=>{t.r(s),t.d(s,{ServerStats:()=>m});var i=t("./node_modules/react/index.js"),a=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./public/app/types/index.ts"),l=t("./packages/grafana-runtime/src/index.ts");var o,c,d,p,x,u=t("./public/app/core/services/context_srv.ts"),g=t("./public/app/features/plugins/admin/components/Loader.tsx"),h=t("./node_modules/react/jsx-runtime.js");const m=()=>{const[e,s]=(0,i.useState)(null),[t,a]=(0,i.useState)(!0),m=(0,n.useStyles2)(j);return(0,i.useEffect)((()=>{(async()=>(0,l.getBackendSrv)().get("api/admin/stats").catch((e=>(console.error(e),null))))().then((e=>{s(e),a(!1)}))}),[]),u.Vt.hasPermission(r.bW.ActionServerStatsRead)?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:m.title,children:"Instance statistics"}),t?(0,h.jsx)("div",{className:m.loader,children:o||(o=(0,h.jsx)(g.a,{text:"Loading instance stats..."}))}):e?(0,h.jsxs)("div",{className:m.row,children:[(0,h.jsx)(f,{content:[{name:"Dashboards (starred)",value:`${e.dashboards} (${e.stars})`},{name:"Tags",value:e.tags},{name:"Playlists",value:e.playlists},{name:"Snapshots",value:e.snapshots}],footer:c||(c=(0,h.jsx)(n.LinkButton,{href:"/dashboards",variant:"secondary",children:"Manage dashboards"}))}),(0,h.jsxs)("div",{className:m.doubleRow,children:[(0,h.jsx)(f,{content:[{name:"Data sources",value:e.datasources}],footer:d||(d=(0,h.jsx)(n.LinkButton,{href:"/datasources",variant:"secondary",children:"Manage data sources"}))}),(0,h.jsx)(f,{content:[{name:"Alerts",value:e.alerts}],footer:p||(p=(0,h.jsx)(n.LinkButton,{href:"/alerting/list",variant:"secondary",children:"Alerts"}))})]}),(0,h.jsx)(f,{content:[{name:"Organisations",value:e.orgs},{name:"Users total",value:e.users},{name:"Active users in last 30 days",value:e.activeUsers},{name:"Active sessions",value:e.activeSessions}],footer:x||(x=(0,h.jsx)(n.LinkButton,{href:"/admin/users",variant:"secondary",children:"Manage users"}))})]}):(0,h.jsx)("p",{className:m.notFound,children:"No stats found."})]}):null},j=e=>({title:a.css`
      margin-bottom: ${e.spacing(4)};
    `,row:a.css`
      display: flex;
      justify-content: space-between;
      width: 100%;

      & > div:not(:last-of-type) {
        margin-right: ${e.spacing(2)};
      }

      & > div {
        width: 33.3%;
      }
    `,doubleRow:a.css`
      display: flex;
      flex-direction: column;

      & > div:first-of-type {
        margin-bottom: ${e.spacing(2)};
      }
    `,loader:a.css`
      height: 290px;
    `,notFound:a.css`
      font-size: ${e.typography.h6.fontSize};
      text-align: center;
      height: 290px;
    `}),f=({content:e,footer:s})=>{const t=(0,n.useStyles2)(v);return(0,h.jsx)(n.CardContainer,{className:t.container,disableHover:!0,children:(0,h.jsxs)("div",{className:t.inner,children:[(0,h.jsx)("div",{className:t.content,children:e.map((e=>(0,h.jsxs)("div",{className:t.row,children:[(0,h.jsx)("span",{children:e.name}),(0,h.jsx)("span",{children:e.value})]},e.name)))}),s&&(0,h.jsx)("div",{children:s})]})})},v=e=>({container:a.css`
      padding: ${e.spacing(2)};
    `,inner:a.css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:a.css`
      flex: 1 0 auto;
    `,row:a.css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: ${e.spacing(2)};
      align-items: center;
    `})},"./public/app/features/admin/UpgradePage.tsx":(e,s,t)=>{t.r(s),t.d(s,{UpgradeInfo:()=>D,UpgradePage:()=>P,default:()=>F});t("./node_modules/react/index.js");var i=t("./node_modules/react-redux/es/index.js"),a=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./public/app/core/components/Page/Page.tsx"),l=t("./public/app/core/selectors/navModel.ts"),o=t("./node_modules/react/jsx-runtime.js");const c={fontWeight:500,fontSize:"26px",lineHeight:"123%"},d=(0,n.stylesFactory)((e=>{const s=e.isDark?"public/img/licensing/header_dark.svg":"public/img/licensing/header_light.svg",t=e.isDark?e.palette.dark9:e.palette.gray6;return{container:a.css`
      padding: 36px 79px;
      background: ${e.colors.panelBg};
    `,footer:a.css`
      text-align: center;
      padding: 16px;
      background: ${t};
    `,header:a.css`
      height: 137px;
      padding: 40px 0 0 79px;
      position: relative;
      background: url('${s}') right;
    `}})),p=({header:e,editionNotice:s,subheader:t,children:i})=>{const a=(0,n.useTheme)(),r=d(a);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:r.header,children:[(0,o.jsx)("h2",{style:c,children:e}),t&&(0,o.jsx)("h3",{children:t}),(0,o.jsx)(x,{size:"128px",style:{boxShadow:"0px 0px 24px rgba(24, 58, 110, 0.45)",background:"#0A1C36",position:"absolute",top:"19px",left:"71%"},children:(0,o.jsx)("img",{src:"public/img/grafana_icon.svg",alt:"Grafana",width:"80px",style:{position:"absolute",left:"23px",top:"20px"}})})]}),(0,o.jsx)("div",{className:r.container,children:i}),s&&(0,o.jsx)("div",{className:r.footer,children:s})]})},x=({size:e,style:s,children:t})=>(0,o.jsx)("div",{style:Object.assign({width:e,height:e,position:"absolute",bottom:0,right:0,borderRadius:"50%"},s),children:t});var u,g,h,m,j,f,v,b,y,S,k,w,N,_,A=t("./public/app/features/admin/ServerStats.tsx");const P=({navModel:e})=>(0,o.jsx)(r.Z,{navModel:e,children:u||(u=(0,o.jsxs)(r.Z.Contents,{children:[(0,o.jsx)(A.ServerStats,{}),(0,o.jsx)(D,{editionNotice:"You are running the open-source version of Grafana. You have to install the Enterprise edition in order enable Enterprise features."})]}))}),L={fontWeight:500,fontSize:"26px",lineHeight:"123%"},D=({editionNotice:e})=>{const s=(0,n.useStyles2)($);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:s.title,children:"Enterprise license"}),(0,o.jsx)(p,{header:"Grafana Enterprise",subheader:"Get your free trial",editionNotice:e,children:(0,o.jsxs)("div",{className:s.column,children:[g||(g=(0,o.jsx)(M,{})),h||(h=(0,o.jsx)(B,{}))]})})]})},$=e=>({column:a.css`
      display: grid;
      grid-template-columns: 100%;
      column-gap: 20px;
      row-gap: 40px;

      @media (min-width: 1050px) {
        grid-template-columns: 50% 50%;
      }
    `,title:a.css`
      margin: ${e.spacing(4)} 0;
    `}),E=()=>(0,o.jsxs)("div",{style:{marginTop:"40px",marginBottom:"30px"},children:[m||(m=(0,o.jsx)("h2",{style:L,children:"Get Grafana Enterprise"})),j||(j=(0,o.jsx)(G,{})),(0,o.jsx)("p",{style:{paddingTop:"12px"},children:"You can use the trial version for free for 30 days. We will remind you about it five days before the trial period ends."})]}),G=()=>f||(f=(0,o.jsx)(n.LinkButton,{variant:"primary",size:"lg",href:"https://grafana.com/contact?about=grafana-enterprise&utm_source=grafana-upgrade-page",children:"Contact us and get a free trial"})),B=()=>(0,o.jsxs)("div",{children:[v||(v=(0,o.jsx)("h4",{children:"At your service"})),b||(b=(0,o.jsxs)(C,{children:[(0,o.jsx)(T,{title:"Enterprise Plugins",image:"public/img/licensing/plugin_enterprise.svg"}),(0,o.jsx)(T,{title:"Critical SLA: 2 hours",image:"public/img/licensing/sla.svg"}),(0,o.jsxs)(T,{title:"Unlimited Expert Support",image:"public/img/licensing/customer_support.svg",children:["24 x 7 x 365 support via",(0,o.jsxs)(C,{nested:!0,children:[(0,o.jsx)(T,{title:"Email"}),(0,o.jsx)(T,{title:"Private Slack channel"}),(0,o.jsx)(T,{title:"Phone"})]})]}),(0,o.jsx)(T,{title:"Hand-in-hand support",image:"public/img/licensing/handinhand_support.svg",children:"in the upgrade process"})]})),(0,o.jsxs)("div",{style:{marginTop:"20px"},children:[y||(y=(0,o.jsx)("strong",{children:"Also included:"})),S||(S=(0,o.jsx)("br",{})),"Indemnification, working with Grafana Labs on future prioritization, and training from the core Grafana team."]}),k||(k=(0,o.jsx)(E,{}))]}),M=()=>(0,o.jsxs)("div",{style:{paddingRight:"11px"},children:[w||(w=(0,o.jsx)("h4",{children:"Enhanced functionality"})),N||(N=(0,o.jsx)(z,{}))]}),z=()=>_||(_=(0,o.jsxs)(C,{children:[(0,o.jsx)(T,{title:"Data source permissions"}),(0,o.jsx)(T,{title:"Reporting"}),(0,o.jsx)(T,{title:"SAML authentication"}),(0,o.jsx)(T,{title:"Enhanced LDAP integration"}),(0,o.jsx)(T,{title:"Team Sync",children:"LDAP, GitHub OAuth, Auth Proxy, Okta"}),(0,o.jsx)(T,{title:"White labeling"}),(0,o.jsx)(T,{title:"Auditing"}),(0,o.jsx)(T,{title:"Settings updates at runtime"}),(0,o.jsx)(T,{title:"Grafana usage insights",children:(0,o.jsxs)(C,{nested:!0,children:[(0,o.jsx)(T,{title:"Sort dashboards by popularity in search"}),(0,o.jsx)(T,{title:"Find unused dashboards"}),(0,o.jsx)(T,{title:"Dashboard usage stats drawer"}),(0,o.jsx)(T,{title:"Dashboard presence indicators"})]})}),(0,o.jsx)(T,{title:"Enterprise plugins",children:(0,o.jsxs)(C,{nested:!0,children:[(0,o.jsx)(T,{title:"Oracle"}),(0,o.jsx)(T,{title:"Splunk"}),(0,o.jsx)(T,{title:"Service Now"}),(0,o.jsx)(T,{title:"Dynatrace"}),(0,o.jsx)(T,{title:"New Relic"}),(0,o.jsx)(T,{title:"DataDog"}),(0,o.jsx)(T,{title:"AppDynamics"}),(0,o.jsx)(T,{title:"SAP HANA®"}),(0,o.jsx)(T,{title:"Gitlab"}),(0,o.jsx)(T,{title:"Honeycomb"}),(0,o.jsx)(T,{title:"Jira"}),(0,o.jsx)(T,{title:"MongoDB"}),(0,o.jsx)(T,{title:"Salesforce"}),(0,o.jsx)(T,{title:"Snowflake"}),(0,o.jsx)(T,{title:"Wavefront"})]})})]})),C=({children:e,nested:s})=>{const t=a.css`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > div {
      margin-bottom: ${s?0:8}px;
    }
  `;return(0,o.jsx)("div",{className:t,children:e})},T=({children:e,title:s,image:t})=>{const i=t||"public/img/licensing/checkmark.svg",n=a.css`
    display: flex;

    > img {
      display: block;
      height: 22px;
      flex-grow: 0;
      padding-right: 12px;
    }
  `,r=a.css`
    font-weight: 500;
    line-height: 1.7;
  `;return(0,o.jsxs)("div",{className:n,children:[(0,o.jsx)("img",{src:i,alt:""}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:r,children:s}),e]})]})},F=(0,i.connect)((e=>({navModel:(0,l.h)(e.navIndex,"upgrading")})))(P)},"./public/app/features/plugins/admin/components/Loader.tsx":(e,s,t)=>{t.d(s,{a:()=>r});t("./node_modules/react/index.js");var i=t("./packages/grafana-ui/src/index.ts"),a=t("./public/app/features/plugins/admin/components/Page.tsx"),n=t("./node_modules/react/jsx-runtime.js");const r=({text:e="Loading..."})=>(0,n.jsx)(a.T,{children:(0,n.jsx)("div",{className:"page-loader-wrapper",children:(0,n.jsx)(i.LoadingPlaceholder,{text:e})})})},"./public/app/features/plugins/admin/components/Page.tsx":(e,s,t)=>{t.d(s,{T:()=>r});t("./node_modules/react/index.js");var i=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),a=t("./packages/grafana-ui/src/index.ts"),n=t("./node_modules/react/jsx-runtime.js");const r=({children:e})=>{const s=(0,a.useStyles2)(l);return(0,n.jsx)("div",{className:"page-container",children:(0,n.jsx)("div",{className:s,children:e})})},l=e=>i.css`
    margin-bottom: ${e.spacing(3)};
  `}}]);
//# sourceMappingURL=1684.0e7ce18a6cf0f8775a65.js.map