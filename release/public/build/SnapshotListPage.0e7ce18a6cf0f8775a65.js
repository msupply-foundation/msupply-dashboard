"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5295],{"./public/app/features/manage-dashboards/SnapshotListPage.tsx":(e,s,t)=>{t.r(s),t.d(s,{SnapshotListPage:()=>m,default:()=>g});var n,a,r,i=t("./node_modules/react/index.js"),c=t("./node_modules/react-redux/es/index.js"),l=t("./public/app/core/components/Page/Page.tsx"),d=t("./packages/grafana-ui/src/index.ts"),o=t("./packages/grafana-runtime/src/index.ts"),h=t("./node_modules/react-use/lib/useAsync.js"),x=t("./node_modules/react/jsx-runtime.js");const u=()=>{const[e,s]=(0,i.useState)([]),[t,c]=(0,i.useState)(),l=o.locationService.getLocation().pathname,u=window.location.href,j=u.substr(0,u.indexOf(l));(0,h.Z)((async()=>{const e=await(0,o.getBackendSrv)().get("/api/dashboard/snapshots").then((e=>e.map((e=>Object.assign({},e,{url:`/dashboard/snapshot/${e.key}`})))));s(e)}),[s]);const p=(0,i.useCallback)((async t=>{const n=e.filter((e=>e.key!==t.key));s(n),await(0,o.getBackendSrv)().delete(`/api/snapshots/${t.key}`).catch((()=>{s(e)}))}),[e]);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("table",{className:"filter-table",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[n||(n=(0,x.jsx)("th",{children:(0,x.jsx)("strong",{children:"Name"})})),a||(a=(0,x.jsx)("th",{children:(0,x.jsx)("strong",{children:"Snapshot url"})})),(0,x.jsx)("th",{style:{width:"70px"}}),(0,x.jsx)("th",{style:{width:"30px"}}),(0,x.jsx)("th",{style:{width:"25px"}})]})}),(0,x.jsx)("tbody",{children:e.map((e=>{const s=e.externalUrl||e.url,t=e.externalUrl||`${j}${e.url}`;return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsx)("a",{href:s,children:e.name})}),(0,x.jsx)("td",{children:(0,x.jsx)("a",{href:s,children:t})}),(0,x.jsx)("td",{children:e.external&&(r||(r=(0,x.jsx)("span",{className:"query-keyword",children:"External"})))}),(0,x.jsx)("td",{className:"text-center",children:(0,x.jsx)(d.LinkButton,{href:s,variant:"secondary",size:"sm",icon:"eye",children:"View"})}),(0,x.jsx)("td",{className:"text-right",children:(0,x.jsx)(d.Button,{variant:"destructive",size:"sm",icon:"times",onClick:()=>c(e)})})]},e.key)}))})]}),(0,x.jsx)(d.ConfirmModal,{isOpen:!!t,icon:"trash-alt",title:"Delete",body:`Are you sure you want to delete '${null==t?void 0:t.name}'?`,confirmText:"Delete",onDismiss:()=>c(void 0),onConfirm:()=>{p(t),c(void 0)}})]})};var j,p=t("./public/app/core/selectors/navModel.ts");const m=({navModel:e,location:s})=>(0,x.jsx)(l.Z,{navModel:e,children:j||(j=(0,x.jsx)(l.Z.Contents,{children:(0,x.jsx)(u,{})}))}),g=(0,c.connect)((e=>({navModel:(0,p.h)(e.navIndex,"snapshots")})))(m)}}]);
//# sourceMappingURL=SnapshotListPage.0e7ce18a6cf0f8775a65.js.map