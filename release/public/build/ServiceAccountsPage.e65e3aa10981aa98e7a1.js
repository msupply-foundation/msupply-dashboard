"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1337],{"./public/app/features/serviceaccounts/ServiceAccountsListPage.tsx":(e,s,a)=>{a.r(s),a.d(s,{default:()=>A});var c=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t=a("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=a("./packages/grafana-ui/src/index.ts"),n=a("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./public/app/core/components/Page/Page.tsx"),l=a("./public/app/features/serviceaccounts/state/actions.ts"),o=a("./public/app/core/selectors/navModel.ts");const d=e=>{const s=new RegExp(e.searchQuery,"i");return e.serviceAccounts.filter((e=>s.test(e.login)||s.test(e.email)||s.test(e.name)))},u=e=>e.searchQuery,m=e=>e.searchPage;var h,p,x=a("./public/app/core/components/PageLoader/PageLoader.tsx"),g=a("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const v={loadServiceAccounts:l.nD,updateServiceAccount:l.TL,removeServiceAccount:l.IR},f=(0,t.connect)((function(e){return{navModel:(0,o.h)(e.navIndex,"serviceaccounts"),serviceAccounts:d(e.serviceAccounts),searchQuery:u(e.serviceAccounts),searchPage:m(e.serviceAccounts),isLoading:e.serviceAccounts.isLoading}}),v),j=e=>`Edit service account's ${e} details`,b=(0,c.memo)((e=>{let{serviceaccount:s}=e;const a=`org/serviceaccounts/${s.userId}`,c=(0,i.useStyles2)(N);return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"width-4 text-center link-td",children:(0,g.jsx)("a",{href:a,"aria-label":j(s.name),children:(0,g.jsx)("img",{className:"filter-table__avatar",src:s.avatarUrl,alt:`Avatar for user ${s.name}`})})}),(0,g.jsx)("td",{className:"link-td max-width-10",children:(0,g.jsx)("a",{className:"ellipsis",href:a,title:s.login,"aria-label":j(s.name),children:s.login})}),(0,g.jsx)("td",{className:"link-td max-width-10",children:(0,g.jsx)("a",{className:"ellipsis",href:a,title:s.name,"aria-label":j(s.name),children:s.name})}),(0,g.jsx)("td",{className:(0,n.cx)("link-td",c.iconRow),children:(0,g.jsx)("a",{className:"ellipsis",href:a,title:s.name,"aria-label":j(s.name),children:"None"===s.role?(0,g.jsx)("span",{className:c.disabled,children:"Not assigned "}):s.role})}),(0,g.jsx)("td",{className:"link-td max-width-10",children:(0,g.jsx)("a",{className:"ellipsis",href:a,title:"tokens","aria-label":j(s.name),children:"0"})})]},s.userId)}));b.displayName="ServiceAccountListItem";const N=e=>({table:n.css`
      margin-top: ${e.spacing(3)};
    `,filter:n.css`
      margin: 0 ${e.spacing(1)};
    `,iconRow:n.css`
      svg {
        margin-left: ${e.spacing(.5)};
      }
    `,row:n.css`
      display: flex;
      align-items: center;
      height: 100% !important;

      a {
        padding: ${e.spacing(.5)} 0 !important;
      }
    `,unitTooltip:n.css`
      display: flex;
      flex-direction: column;
    `,unitItem:n.css`
      cursor: pointer;
      padding: ${e.spacing(.5)} 0;
      margin-right: ${e.spacing(1)};
    `,disabled:n.css`
      color: ${e.colors.text.disabled};
    `,link:n.css`
      color: inherit;
      cursor: pointer;
      text-decoration: underline;
    `}),A=f((e=>{let{loadServiceAccounts:s,navModel:a,serviceAccounts:t,isLoading:l}=e;const o=(0,i.useStyles2)(N);return(0,c.useEffect)((()=>{s()}),[s]),(0,g.jsx)(r.Z,{navModel:a,children:(0,g.jsx)(r.Z.Contents,{children:l?h||(h=(0,g.jsx)(x.Z,{})):(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:(0,n.cx)(o.table,"admin-list-table"),children:(0,g.jsxs)("table",{className:"filter-table form-inline filter-table--hover",children:[p||(p=(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{}),(0,g.jsx)("th",{children:"Account"}),(0,g.jsx)("th",{children:"ID"}),(0,g.jsx)("th",{children:"Roles"}),(0,g.jsx)("th",{children:"Tokens"})]})})),(0,g.jsx)("tbody",{children:t.map((e=>(0,g.jsx)(b,{serviceaccount:e},e.userId)))})]})})})})})}))}}]);
//# sourceMappingURL=ServiceAccountsPage.e65e3aa10981aa98e7a1.js.map