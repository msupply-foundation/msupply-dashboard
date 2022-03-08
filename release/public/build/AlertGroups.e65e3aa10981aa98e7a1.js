"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{"./public/app/features/alerting/unified/AlertGroups.tsx":(e,s,t)=>{t.r(s),t.d(s,{default:()=>R});var a=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),r=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),n=t("./packages/grafana-ui/src/index.ts"),i=t("./public/app/core/hooks/useQueryParams.ts"),l=t("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),c=t("./public/app/plugins/datasource/alertmanager/types.ts"),o=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),u=t("./public/app/features/alerting/unified/components/AlertLabels.tsx"),p=t("./packages/grafana-data/src/index.ts"),d=t("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx"),g=t("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx"),m=t("./public/app/features/alerting/unified/utils/misc.ts"),b=t("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),f=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const x=e=>{let{alert:s,alertManagerSourceName:t}=e;const a=(0,n.useStyles2)(h);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:a.actionsRow,children:[s.status.state===c.Z9.Suppressed&&(0,f.jsx)(n.LinkButton,{href:`${(0,m.eQ)("/alerting/silences",t)}&silenceIds=${s.status.silencedBy.join(",")}`,className:a.button,icon:"bell",size:"sm",children:"Manage silences"}),s.status.state===c.Z9.Active&&(0,f.jsx)(n.LinkButton,{href:(0,m.VN)(t,s.labels),className:a.button,icon:"bell-slash",size:"sm",children:"Silence"}),s.generatorURL&&(0,f.jsx)(n.LinkButton,{className:a.button,href:s.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(s.annotations).map((e=>{let[s,t]=e;return(0,f.jsx)(b.a,{annotationKey:s,value:t},s)})),(0,f.jsxs)("div",{className:a.receivers,children:["Receivers:"," ",s.receivers.map((e=>{let{name:s}=e;return s})).filter((e=>!!e)).join(", ")]})]})},h=e=>({button:o.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:o.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:o.css`
    padding: ${e.spacing(1,0)};
  `}),j=e=>{let{alerts:s,alertManagerSourceName:t}=e;const r=(0,n.useStyles2)(y),i=(0,a.useMemo)((()=>[{id:"state",label:"State",renderCell:e=>{let{data:s}=e;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d.G,{state:s.status.state}),(0,f.jsxs)("span",{className:r.duration,children:["for"," ",(0,p.intervalToAbbreviatedDurationString)({start:new Date(s.startsAt),end:new Date(s.endsAt)})]})]})},size:"220px"},{id:"labels",label:"Labels",renderCell:e=>{let{data:{labels:s}}=e;return(0,f.jsx)(u.s,{className:r.labels,labels:s})},size:1}]),[r]),l=(0,a.useMemo)((()=>s.map((e=>({id:e.fingerprint,data:e})))),[s]);return(0,f.jsx)("div",{className:r.tableWrapper,"data-testid":"alert-group-table",children:(0,f.jsx)(g.F,{cols:i,items:l,isExpandable:!0,renderExpandedContent:e=>{let{data:s}=e;return(0,f.jsx)(x,{alert:s,alertManagerSourceName:t})}})})},y=e=>({tableWrapper:o.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:o.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:o.css`
    padding-bottom: 0;
  `});var v,S=t("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),N=t("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");const _=e=>{let{alertManagerSourceName:s,group:t}=e;const[r,i]=(0,a.useState)(!0),l=(0,n.useStyles2)(k);return(0,f.jsxs)("div",{className:l.wrapper,children:[(0,f.jsxs)("div",{className:l.header,children:[(0,f.jsxs)("div",{className:l.group,"data-testid":"alert-group",children:[(0,f.jsx)(S.U,{isCollapsed:r,onToggle:()=>i(!r),"data-testid":"alert-group-collapse-toggle"}),Object.keys(t.labels).length?(0,f.jsx)(u.s,{className:l.headerLabels,labels:t.labels}):v||(v=(0,f.jsx)("span",{children:"No grouping"}))]}),(0,f.jsx)(N.Z,{group:t})]}),!r&&(0,f.jsx)(j,{alertManagerSourceName:s,alerts:t.alerts})]})},k=e=>({wrapper:o.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:o.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:o.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:o.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:o.css``,spanElement:o.css`
    margin-left: ${e.spacing(.5)};
  `,[c.Z9.Active]:o.css`
    color: ${e.colors.error.main};
  `,[c.Z9.Suppressed]:o.css`
    color: ${e.colors.primary.main};
  `,[c.Z9.Unprocessed]:o.css`
    color: ${e.colors.secondary.main};
  `});var $,C=t("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx"),w=t("./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx");const z=e=>{let{onStateFilterChange:s,stateFilter:t}=e;const a=(0,n.useStyles2)(M),r=Object.entries(c.Z9).sort(((e,s)=>{let[t]=e,[a]=s;return t<a?-1:1})).map((e=>{let[s,t]=e;return{label:s,value:t}}));return(0,f.jsxs)("div",{className:a.wrapper,children:[$||($=(0,f.jsx)(n.Label,{children:"State"})),(0,f.jsx)(n.RadioButtonGroup,{options:r,value:t,onChange:s})]})},M=e=>({wrapper:o.css`
    margin-left: ${e.spacing(1)};
  `});var G,A,F=t("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const O=e=>{let{className:s,groups:t,groupBy:a,onGroupingChange:r}=e;const i=(0,F.uniq)(t.flatMap((e=>e.alerts)).flatMap((e=>{let{labels:s}=e;return Object.keys(s)}))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,f.jsxs)("div",{"data-testid":"group-by-container",className:s,children:[G||(G=(0,f.jsx)(n.Label,{children:"Custom group by"})),(0,f.jsx)(n.MultiSelect,{"aria-label":"group by label keys",value:a,placeholder:"Group by",prefix:A||(A=(0,f.jsx)(n.Icon,{name:"tag-alt"})),onChange:e=>{r(e.map((e=>{let{value:s}=e;return s})))},options:i})]})};var B=t("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");const L=e=>{let{groups:s}=e;const[t,r]=(0,a.useState)(Math.floor(100*Math.random())),[l,c]=(0,i.K)(),{groupBy:o=[],queryString:u,alertState:p}=(0,m.lC)(l),d=`matcher-${t}`,[g,b]=(0,B.k)(),x=(0,n.useStyles2)(Z),h=!!(o.length>0||u||p);return(0,f.jsxs)("div",{className:x.wrapper,children:[(0,f.jsx)(C.P,{current:g,onChange:b}),(0,f.jsxs)("div",{className:x.filterSection,children:[(0,f.jsx)(w.F,{className:x.filterInput,defaultQueryString:u,onFilterChange:e=>c({queryString:e||null})},d),(0,f.jsx)(O,{className:x.filterInput,groups:s,groupBy:o,onGroupingChange:e=>c({groupBy:e.length?e.join(","):null})}),(0,f.jsx)(z,{stateFilter:p,onStateFilterChange:e=>c({alertState:e||null})}),h&&(0,f.jsx)(n.Button,{className:x.clearButton,variant:"secondary",icon:"times",onClick:()=>{c({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>r(t+1)),100)},children:"Clear filters"})]})]})},Z=e=>({wrapper:o.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    margin-bottom: ${e.spacing(3)};
  `,filterSection:o.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${e.spacing(3)};
  `,filterInput:o.css`
    width: 340px;
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,clearButton:o.css`
    margin-left: ${e.spacing(1)};
    margin-top: 19px;
  `});var I=t("./public/app/features/alerting/unified/state/actions.ts"),P=t("./public/app/features/alerting/unified/utils/redux.ts"),T=t("./public/app/features/alerting/unified/utils/constants.ts"),E=t("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");var W=t("./public/app/features/alerting/unified/utils/alertmanager.ts");var q,D;const U=e=>({groupingBanner:o.css`
    margin: ${e.spacing(2,0)};
  `}),R=()=>{var e;const[s]=(0,B.k)(),t=(0,r.useDispatch)(),[c]=(0,i.K)(),{groupBy:o=[]}=(0,m.lC)(c),u=(0,n.useStyles2)(U),p=(0,E._)((e=>e.amAlertGroups)),{loading:d,error:g,result:b=[]}=null!==(e=p[s||""])&&void 0!==e?e:P.oq,x=((e,s)=>(0,a.useMemo)((()=>0===s.length?e:e.flatMap((e=>{let{alerts:s}=e;return s})).reduce(((e,t)=>{if(s.every((e=>Object.keys(t.labels).includes(e)))){const a=e.find((e=>s.every((s=>e.labels[s]===t.labels[s]))));if(a)a.alerts.push(t);else{const a=s.reduce(((e,s)=>Object.assign({},e,{[s]:t.labels[s]})),{});e.push({alerts:[t],labels:a,receiver:{name:"NONE"}})}}else{const s=e.find((e=>0===Object.keys(e.labels).length));s?s.alerts.push(t):e.push({alerts:[t],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,s]))(b,o),h=(e=>{const[s]=(0,i.K)(),t=(0,m.lC)(s),r=(0,W.Zh)(t.queryString||"");return(0,a.useMemo)((()=>e.reduce(((e,s)=>{const a=s.alerts.filter((e=>{let{labels:s,status:a}=e;const n=(0,W.eD)(s,r),i=!t.alertState||a.state===t.alertState;return n&&i}));return a.length>0&&(0===Object.keys(s.labels).length?e.unshift(Object.assign({},s,{alerts:a})):e.push(Object.assign({},s,{alerts:a}))),e}),[])),[e,t,r])})(x);return(0,a.useEffect)((()=>{function e(){s&&t((0,I.mS)(s))}e();const a=setInterval(e,T.iF);return()=>{clearInterval(a)}}),[t,s]),(0,f.jsxs)(l.J,{pageId:"groups",children:[(0,f.jsx)(L,{groups:b}),d&&(q||(q=(0,f.jsx)(n.LoadingPlaceholder,{text:"Loading notifications"}))),g&&!d&&(0,f.jsx)(n.Alert,{title:"Error loading notifications",severity:"error",children:g.message||"Unknown error"}),b&&h.map(((e,t)=>(0,f.jsxs)(a.Fragment,{children:[(1===t&&0===Object.keys(h[0].labels).length||0===t&&Object.keys(e.labels).length>0)&&(0,f.jsxs)("p",{className:u.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,f.jsx)(_,{alertManagerSourceName:s||"",group:e})]},`${JSON.stringify(e.labels)}-group-${t}`))),b&&!h.length&&(D||(D=(0,f.jsx)("p",{children:"No results."})))]})}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,s,t)=>{t.d(s,{J:()=>l});t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var a=t("./public/app/core/components/Page/Page.tsx"),r=t("./public/app/core/selectors/navModel.ts"),n=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),i=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=e=>{let{children:s,pageId:t,isLoading:l}=e;const c=(0,r.h)((0,n.useSelector)((e=>e.navIndex)),t);return(0,i.jsx)(a.Z,{navModel:c,children:(0,i.jsx)(a.Z.Contents,{isLoading:l,children:s})})}},"./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":(e,s,t)=>{t.d(s,{F:()=>c});var a=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=t("./packages/grafana-ui/src/index.ts"),n=(t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t("./public/app/features/alerting/unified/components/DynamicTable.tsx")),i=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const l=["renderExpandedContent"];const c=e=>{let{renderExpandedContent:s}=e,t=function(e,s){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);const c=(0,r.useStyles2)(o);return(0,i.jsx)(n.t,Object.assign({renderExpandedContent:s?(e,t,r)=>(0,i.jsxs)(i.Fragment,{children:[!(t===r.length-1)&&(0,i.jsx)("div",{className:(0,a.cx)(c.contentGuideline,c.guideline)}),s(e,t,r)]}):void 0,renderPrefixHeader:()=>(0,i.jsx)("div",{className:c.relative,children:(0,i.jsx)("div",{className:(0,a.cx)(c.headerGuideline,c.guideline)})}),renderPrefixCell:(e,s,t)=>(0,i.jsxs)("div",{className:c.relative,children:[(0,i.jsx)("div",{className:(0,a.cx)(c.topGuideline,c.guideline)}),!(s===t.length-1)&&(0,i.jsx)("div",{className:(0,a.cx)(c.bottomGuideline,c.guideline)})]})},t))},o=e=>({relative:a.css`
    position: relative;
    height: 100%;
  `,guideline:a.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:a.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:a.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:a.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:a.css`
    top: -25px;
    bottom: 0;
  `})},"./public/app/features/alerting/unified/components/alert-groups/MatcherFilter.tsx":(e,s,t)=>{t.d(s,{F:()=>c});t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js");var a,r,n=t("./packages/grafana-ui/src/index.ts"),i=t("./.yarn/__virtual__/@emotion-css-virtual-72c314ddb1/0/cache/@emotion-css-npm-11.7.1-25ff8755a7-ac1f56656f.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),l=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const c=e=>{let{className:s,onFilterChange:t,defaultQueryString:i,queryString:c}=e;const u=(0,n.useStyles2)(o),p=a||(a=(0,l.jsx)(n.Icon,{name:"search"}));return(0,l.jsxs)("div",{className:s,children:[(0,l.jsxs)(n.Label,{children:[(0,l.jsx)(n.Tooltip,{content:r||(r=(0,l.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,l.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,l.jsx)(n.Icon,{className:u.icon,name:"info-circle",size:"xs"})}),"Search by label"]}),(0,l.jsx)(n.Input,{placeholder:"Search",defaultValue:i,value:c,onChange:e=>{const s=e.target;t(s.value)},"data-testid":"search-query-input",prefix:p,className:u.inputWidth})]})},o=e=>({icon:i.css`
    margin-right: ${e.spacing(.5)};
  `,inputWidth:i.css`
    width: 340px;
    flex-grow: 0;
  `})},"./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":(e,s,t)=>{t.d(s,{G:()=>l});var a=t("./public/app/plugins/datasource/alertmanager/types.ts"),r=(t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),t("./public/app/features/alerting/unified/components/StateTag.tsx")),n=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const i={[a.Z9.Active]:"bad",[a.Z9.Unprocessed]:"neutral",[a.Z9.Suppressed]:"info"},l=e=>{let{state:s}=e;return(0,n.jsx)(r.i,{state:i[s],children:s})}},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,s,t)=>{t.d(s,{k:()=>o});var a=t("./public/app/core/hooks/useQueryParams.ts"),r=t("./public/app/core/store.ts"),n=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),i=t("./public/app/features/alerting/unified/utils/constants.ts"),l=t("./public/app/features/alerting/unified/utils/datasource.ts");function c(e){return e===l.GC||!!(0,l.aM)().find((s=>s.name===e))}function o(){const[e,s]=(0,a.K)(),t=(0,n.useCallback)((e=>{c(e)&&(e===l.GC?(r.Z.delete(i.de),s({[i.c4]:null})):(r.Z.set(i.de,e),s({[i.c4]:e})))}),[s]),o=e[i.c4];if(o&&"string"==typeof o)return c(o)?[o,t]:[void 0,t];const u=r.Z.get(i.de);return u&&"string"==typeof u&&c(u)?(t(u),[u,t]):[l.GC,t]}}}]);
//# sourceMappingURL=AlertGroups.e65e3aa10981aa98e7a1.js.map