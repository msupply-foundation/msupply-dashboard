"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[94],{"./public/app/features/plugins/admin/components/Badges/index.ts":(e,a,s)=>{s.d(a,{SX:()=>i,IF:()=>p,oZ:()=>c,xh:()=>g});s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var r=s("./packages/grafana-data/src/index.ts"),t=s("./packages/grafana-ui/src/index.ts"),n=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function i(e){let{error:a}=e;const s=function(e){switch(e){case r.PluginErrorCode.modifiedSignature:return"Plugin disabled due to modified content";case r.PluginErrorCode.invalidSignature:return"Plugin disabled due to invalid plugin signature";case r.PluginErrorCode.missingSignature:return"Plugin disabled due to missing plugin signature";default:return`Plugin disabled due to unkown error: ${e}`}}(a);return(0,n.jsx)(t.Badge,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:s})}var l=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js");const o=e=>l.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,t.useStyles2)(o);return(0,n.jsx)(t.Badge,{text:"Installed",color:"orange",className:e})}var u,d=s("./packages/grafana-runtime/src/index.ts");function p(e){let{plugin:a}=e;const s=(0,t.useStyles2)(o);return(0,d.featureEnabled)("enterprise.plugins")?u||(u=(0,n.jsx)(t.Badge,{text:"Enterprise",color:"blue"})):(0,n.jsxs)(t.HorizontalGroup,{children:[(0,n.jsx)(t.PluginSignatureBadge,{status:a.signature}),(0,n.jsx)(t.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:s}),(0,n.jsx)(t.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:e=>{e.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${a.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function g(e){let{plugin:a}=e;const s=(0,t.useStyles2)(m);return a.hasUpdate&&!a.isCore&&a.type!==r.PluginType.renderer?(0,n.jsx)("p",{className:s.hasUpdate,children:"Update available!"}):null}const m=e=>({hasUpdate:l.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},"./public/app/features/plugins/admin/components/Page.tsx":(e,a,s)=>{s.d(a,{T:()=>i});s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var r=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),t=s("./packages/grafana-ui/src/index.ts"),n=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i=e=>{let{children:a}=e;const s=(0,t.useStyles2)(l);return(0,n.jsx)("div",{className:"page-container",children:(0,n.jsx)("div",{className:s,children:a})})},l=e=>r.css`
    margin-bottom: ${e.spacing(3)};
  `},"./public/app/features/plugins/admin/components/PluginLogo.tsx":(e,a,s)=>{s.d(a,{E:()=>t});s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var r=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function t(e){let{alt:a,className:s,src:t,height:n}=e;return(0,r.jsx)("img",{src:t,className:s,alt:a,loading:"lazy",height:n})}},"./public/app/features/plugins/admin/pages/Browse.tsx":(e,a,s)=>{s.r(a),s.d(a,{default:()=>$});var r,t=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),n=s("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./packages/grafana-ui/src/index.ts"),l=s("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),o=s("./packages/grafana-runtime/src/index.ts"),c=s("./public/app/features/plugins/admin/types.ts"),u=s("./public/app/features/plugins/admin/components/Badges/index.ts"),d=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");function p(e){var a,s;let{plugin:t}=e;return t.isEnterprise?(0,d.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[a||(a=(0,d.jsx)(u.IF,{plugin:t})),t.isDisabled&&(0,d.jsx)(u.SX,{error:t.error}),s||(s=(0,d.jsx)(u.xh,{plugin:t}))]}):(0,d.jsxs)(i.HorizontalGroup,{height:"auto",wrap:!0,children:[(0,d.jsx)(i.PluginSignatureBadge,{status:t.signature}),t.isDisabled&&(0,d.jsx)(u.SX,{error:t.error}),t.isInstalled&&(r||(r=(0,d.jsx)(u.oZ,{}))),(0,d.jsx)(u.xh,{plugin:t})]})}var g=s("./public/app/features/plugins/admin/components/PluginLogo.tsx");const m="48px";function h(e){let{plugin:a,pathName:s,displayMode:r=c.lL.Grid}=e;const t=(0,i.useStyles2)(x),l=r===c.lL.List;return(0,d.jsxs)("a",{href:`${s}/${a.id}`,className:(0,n.cx)(t.container,{[t.list]:l}),children:[(0,d.jsx)(g.E,{src:a.info.logos.small,className:t.pluginLogo,height:m,alt:""}),(0,d.jsx)("h2",{className:(0,n.cx)(t.name,"plugin-name"),children:a.name}),(0,d.jsxs)("div",{className:(0,n.cx)(t.content,"plugin-content"),children:[(0,d.jsxs)("p",{children:["By ",a.orgName]}),(0,d.jsx)(p,{plugin:a})]}),(0,d.jsx)("div",{className:t.pluginType,children:a.type&&(0,d.jsx)(i.Icon,{name:c.Co[a.type],title:`${a.type} plugin`})})]})}const x=e=>({container:n.css`
      display: grid;
      grid-template-columns: ${m} 1fr ${e.spacing(3)};
      grid-template-rows: auto;
      gap: ${e.spacing(2)};
      grid-auto-flow: row;
      background: ${e.colors.background.secondary};
      border-radius: ${e.shape.borderRadius()};
      padding: ${e.spacing(3)};
      transition: ${e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short})};

      &:hover {
        background: ${e.colors.emphasize(e.colors.background.secondary,.03)};
      }
    `,list:n.css`
      row-gap: 0px;

      > img {
        align-self: start;
      }

      > .plugin-content {
        min-height: 0px;
        grid-area: 2 / 2 / 4 / 3;

        > p {
          margin: ${e.spacing(0,0,.5,0)};
        }
      }

      > .plugin-name {
        align-self: center;
        grid-area: 1 / 2 / 2 / 3;
      }
    `,pluginType:n.css`
      grid-area: 1 / 3 / 2 / 4;
      color: ${e.colors.text.secondary};
    `,pluginLogo:n.css`
      grid-area: 1 / 1 / 3 / 2;
      max-width: 100%;
      align-self: center;
      object-fit: contain;
    `,content:n.css`
      grid-area: 3 / 1 / 4 / 3;
      color: ${e.colors.text.secondary};
    `,name:n.css`
      grid-area: 1 / 2 / 3 / 3;
      align-self: center;
      font-size: ${e.typography.h4.fontSize};
      color: ${e.colors.text.primary};
      margin: 0;
    `}),f=e=>{let{plugins:a,displayMode:s}=e;const r=s===c.lL.List,t=(0,i.useStyles2)(y),o=(0,l.TH)();return(0,d.jsx)("div",{className:(0,n.cx)(t.container,{[t.list]:r}),"data-testid":"plugin-list",children:a.map((e=>(0,d.jsx)(h,{plugin:e,pathName:o.pathname,displayMode:s},e.id)))})},y=e=>({container:n.css`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      gap: ${e.spacing(3)};
    `,list:n.css`
      grid-template-columns: 1fr;
    `});var b=s("./.yarn/__virtual__/react-use-virtual-00326e70ba/0/cache/react-use-npm-17.3.2-a032cbeb01-7379460f51.zip/node_modules/react-use/esm/useDebounce.js");const v=e=>{let{value:a,onSearch:s}=e;const[r,n]=(0,t.useState)(a);return function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const r=(0,t.useRef)(!0),n=[...s,r];(0,b.Z)((()=>{if(!r.current)return e();r.current=!1}),a,n)}((()=>s(null!=r?r:"")),500,[r]),(0,d.jsx)(i.FilterInput,{value:r,onKeyDown:e=>{"Enter"!==e.key&&13!==e.keyCode||s(e.currentTarget.value)},placeholder:"Search Grafana plugins",onChange:e=>{n(e)},width:46})};var j=s("./public/app/features/plugins/admin/components/Page.tsx");const S=e=>{let{children:a,wrap:s,className:r}=e;const t=(0,i.useTheme2)(),l=_(t,s);return(0,d.jsx)("div",{className:(0,n.cx)(l.container,r),children:a})},_=(e,a)=>({container:n.css`
    display: flex;
    flex-direction: row;
    flex-wrap: ${a?"wrap":"no-wrap"};
    & > * {
      margin-bottom: ${e.spacing()};
      margin-right: ${e.spacing()};
    }
    & > *:last-child {
      margin-right: 0;
    }
  `});var P=s("./public/app/core/components/Page/Page.tsx"),B=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),w=s("./public/app/core/selectors/navModel.ts"),z=s("./public/app/features/plugins/admin/state/hooks.ts"),N=s("./public/app/features/plugins/admin/helpers.ts");function $(e){let{route:a}=e;const s=(0,l.TH)(),r=(0,o.locationSearchToObject)(s.search),t=D(a.routeName),u=(0,B.useSelector)((e=>(0,w.h)(e.navIndex,t))),{displayMode:p,setDisplayMode:g}=(0,z.iY)(),m=(0,i.useStyles2)(k),h={push:e=>{let{query:a}=e;o.locationService.partial(a)}},x=(0,z.y9)(),y=r.q||"",b=r.filterBy||"installed",_=r.filterByType||"all",$=r.sortBy||N.Nh.nameAsc,{isLoading:L,error:C,plugins:T}=(0,z.GE)({query:y,filterBy:b,filterByType:_,sortBy:$}),E=[{value:"all",label:"All"},{value:"installed",label:"Installed"}],A=e=>{h.push({query:{filterBy:e}})};return C?(console.error(C.message),null):(0,d.jsx)(P.T,{navModel:u,children:(0,d.jsx)(P.T.Contents,{children:(0,d.jsxs)(j.T,{children:[(0,d.jsxs)(S,{wrap:!0,children:[(0,d.jsx)(v,{value:y,onSearch:e=>{h.push({query:{filterBy:"all",filterByType:"all",q:e}})}}),(0,d.jsxs)(S,{wrap:!0,className:m.actionBar,children:[(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{value:_,onChange:e=>{h.push({query:{filterByType:e}})},options:[{value:"all",label:"All"},{value:"datasource",label:"Data sources"},{value:"panel",label:"Panels"},{value:"app",label:"Applications"}]})}),x?(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{value:b,onChange:A,options:E})}):(0,d.jsx)(i.Tooltip,{content:"This filter has been disabled because the Grafana server cannot access grafana.com",placement:"top",children:(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{disabled:!0,value:b,onChange:A,options:E})})}),(0,d.jsx)("div",{children:(0,d.jsx)(i.Select,{menuShouldPortal:!0,"aria-label":"Sort Plugins List",width:24,value:$,onChange:e=>{h.push({query:{sortBy:e.value}})},options:[{value:"nameAsc",label:"Sort by name (A-Z)"},{value:"nameDesc",label:"Sort by name (Z-A)"},{value:"updated",label:"Sort by updated date"},{value:"published",label:"Sort by published date"},{value:"downloads",label:"Sort by downloads"}]})}),(0,d.jsx)("div",{children:(0,d.jsx)(i.RadioButtonGroup,{className:m.displayAs,value:p,onChange:g,options:[{value:c.lL.Grid,icon:"table",description:"Display plugins in a grid layout"},{value:c.lL.List,icon:"list-ul",description:"Display plugins in list"}]})})]})]}),(0,d.jsx)("div",{className:m.listWrap,children:L?(0,d.jsx)(i.LoadingPlaceholder,{className:n.css`
                  margin-bottom: 0;
                `,text:"Loading results"}):(0,d.jsx)(f,{plugins:T,displayMode:p})})]})})})}const k=e=>({actionBar:n.css`
    ${e.breakpoints.up("xl")} {
      margin-left: auto;
    }
  `,listWrap:n.css`
    margin-top: ${e.spacing(2)};
  `,displayAs:n.css`
    svg {
      margin-right: 0;
    }
  `}),D=e=>e===c.cd.HomeAdmin||e===c.cd.BrowseAdmin?"admin-plugins":"plugins"},"./public/app/features/plugins/admin/state/hooks.ts":(e,a,s)=>{s.d(a,{iY:()=>C,bt:()=>N,ZV:()=>z,GE:()=>j,UQ:()=>_,bJ:()=>S,x3:()=>P,IS:()=>$,y9:()=>w,S1:()=>B,wq:()=>k});var r=s("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t=s("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),n=s("./public/app/features/plugins/admin/state/reducer.ts"),i=s("./public/app/features/plugins/admin/state/actions.ts"),l=s("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js"),o=s("./public/app/features/plugins/admin/types.ts");const c=e=>e.plugins,u=(0,l.P1)(c,(e=>{let{items:a}=e;return a})),d=(0,l.P1)(c,(e=>{let{settings:a}=e;return a.displayMode})),{selectAll:p,selectById:g}=n.CD.getSelectors(u),m=(e,a)=>(0,l.P1)((e=>(0,l.P1)(p,(a=>a.filter((a=>"installed"===e?a.isInstalled:!a.isCore)))))(e),(e=>e.filter((e=>"all"===a||e.type===a)))),h=(e,a,s)=>(0,l.P1)(m(a,s),(e=>(0,l.P1)(p,(a=>""===e?[]:a.filter((a=>{const s=[];return a.name&&s.push(a.name.toLowerCase()),a.orgName&&s.push(a.orgName.toLowerCase()),s.some((a=>a.includes(e.toLowerCase())))})))))(e),((a,s)=>""===e?a:s)),x=(0,l.P1)(p,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),f=e=>(0,l.P1)(c,(a=>{let{requests:s={}}=a;return s[e]})),y=e=>(0,l.P1)(f(e),(e=>(null==e?void 0:e.status)===o.eE.Pending)),b=e=>(0,l.P1)(f(e),(e=>(null==e?void 0:e.status)===o.eE.Rejected?null==e?void 0:e.error:null));var v=s("./public/app/features/plugins/admin/helpers.ts");const j=e=>{let{query:a="",filterBy:s="installed",filterByType:r="all",sortBy:n=v.Nh.nameAsc}=e;D();const i=(0,t.useSelector)(h(a,s,r)),{isLoading:l,error:o}=z();return{isLoading:l,error:o,plugins:(0,v.AA)(i,n)}},S=e=>(D(),L(e),(0,t.useSelector)((a=>g(a,e)))),_=()=>(D(),(0,t.useSelector)(x)),P=()=>{const e=(0,t.useDispatch)();return(a,s,r)=>e((0,i.N9)({id:a,version:s,isUpdating:r}))},B=()=>{const e=(0,t.useDispatch)();return a=>e((0,i.Tz)(a))},w=()=>null===(0,t.useSelector)(b(i.tQ.typePrefix)),z=()=>({isLoading:(0,t.useSelector)(y(i.Qd.typePrefix)),error:(0,t.useSelector)(b(i.Qd.typePrefix))}),N=()=>({isLoading:(0,t.useSelector)(y(i.DD.typePrefix)),error:(0,t.useSelector)(b(i.DD.typePrefix))}),$=()=>({isInstalling:(0,t.useSelector)(y(i.N9.typePrefix)),error:(0,t.useSelector)(b(i.N9.typePrefix))}),k=()=>({isUninstalling:(0,t.useSelector)(y(i.Tz.typePrefix)),error:(0,t.useSelector)(b(i.Tz.typePrefix))}),D=()=>{const e=(0,t.useDispatch)(),a=(0,t.useSelector)((s=i.Qd.typePrefix,(0,l.P1)(f(s),(e=>void 0===e))));var s;(0,r.useEffect)((()=>{a&&e((0,i.Qd)())}),[])},L=e=>{const a=(0,t.useDispatch)(),s=(0,t.useSelector)((a=>g(a,e))),n=!(0,t.useSelector)(y(i.DD.typePrefix))&&s&&!s.details;(0,r.useEffect)((()=>{n&&a((0,i.DD)(e))}),[s])},C=()=>{const e=(0,t.useDispatch)();return{displayMode:(0,t.useSelector)(d),setDisplayMode:a=>e((0,n.UC)(a))}}}}]);
//# sourceMappingURL=PluginListPage.e65e3aa10981aa98e7a1.js.map