"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4620],{"./public/app/core/components/PageActionBar/PageActionBar.tsx":(e,a,s)=>{s.d(a,{Z:()=>o});var t=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=s("./packages/grafana-ui/src/index.ts"),c=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");class o extends t.PureComponent{render(){const{searchQuery:e,linkButton:a,setSearchQuery:s,target:t,placeholder:o="Search by name or type"}=this.props,n={href:null==a?void 0:a.href,disabled:null==a?void 0:a.disabled};return t&&(n.target=t),(0,c.jsxs)("div",{className:"page-action-bar",children:[(0,c.jsx)("div",{className:"gf-form gf-form--grow",children:(0,c.jsx)(r.FilterInput,{value:e,onChange:s,placeholder:o})}),a&&(0,c.jsx)(r.LinkButton,Object.assign({},n,{children:a.title}))]})}}},"./public/app/features/datasources/DataSourcesListPage.tsx":(e,a,s)=>{s.r(a),s.d(a,{DataSourcesListPage:()=>_,default:()=>C});var t,r=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),c=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=s("./public/app/core/core.ts"),n=s("./public/app/core/components/Page/Page.tsx"),d=s("./public/app/core/components/PageActionBar/PageActionBar.tsx"),i=s("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx"),u=s("./packages/grafana-ui/src/index.ts"),l=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),p=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const h=e=>{let{dataSources:a,layoutMode:s}=e;const r=(0,u.useStyles)(m);return(0,p.jsx)("ul",{className:r.list,children:a.map((e=>(0,p.jsx)("li",{children:(0,p.jsxs)(u.Card,{href:`datasources/edit/${e.uid}`,children:[(0,p.jsx)(u.Card.Heading,{children:e.name}),(0,p.jsx)(u.Card.Figure,{children:(0,p.jsx)("img",{src:e.typeLogoUrl,alt:"",height:"40px",width:"40px",className:r.logo})}),(0,p.jsx)(u.Card.Meta,{children:[e.typeName,e.url,e.isDefault&&(t||(t=(0,p.jsx)(u.Tag,{name:"default",colorIndex:1},"default-tag")))]})]})},e.id)))})},m=()=>({list:(0,l.css)({listStyle:"none",display:"grid"}),logo:(0,l.css)({objectFit:"contain"})});var b=s("./public/app/types/index.ts"),g=s("./public/app/features/datasources/state/actions.ts"),x=s("./public/app/core/selectors/navModel.ts"),f=s("./public/app/features/datasources/state/selectors.ts"),j=s("./public/app/features/datasources/state/reducers.ts");const y={loadDataSources:g.bZ,setDataSourcesSearchQuery:j.zT,setDataSourcesLayoutMode:j.Dy},S=(0,c.connect)((function(e){return{navModel:(0,x.h)(e.navIndex,"datasources"),dataSources:(0,f.mt)(e.dataSources),layoutMode:(0,f.pc)(e.dataSources),dataSourcesCount:(0,f.r7)(e.dataSources),searchQuery:(0,f.IO)(e.dataSources),hasFetched:e.dataSources.hasFetched}}),y),v={title:"No data sources defined",buttonIcon:"database",buttonLink:"datasources/new",buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"};class _ extends r.PureComponent{componentDidMount(){this.props.loadDataSources()}render(){const{dataSources:e,dataSourcesCount:a,navModel:s,layoutMode:t,searchQuery:r,setDataSourcesSearchQuery:c,hasFetched:u}=this.props,l=o.Vt.hasPermission(b.bW.DataSourcesCreate)&&o.Vt.hasPermission(b.bW.DataSourcesWrite),m={href:"datasources/new",title:"Add data source",disabled:!l},g=Object.assign({},v,{buttonDisabled:!l});return(0,p.jsx)(n.Z,{navModel:s,children:(0,p.jsx)(n.Z.Contents,{isLoading:!u,children:(0,p.jsxs)(p.Fragment,{children:[u&&0===a&&(0,p.jsx)(i.Z,Object.assign({},g)),u&&a>0&&[(0,p.jsx)(d.Z,{searchQuery:r,setSearchQuery:e=>c(e),linkButton:m},"action-bar"),(0,p.jsx)(h,{dataSources:e,layoutMode:t},"list")]]})})})}}const C=S(_)}}]);
//# sourceMappingURL=DataSourcesListPage.e65e3aa10981aa98e7a1.js.map