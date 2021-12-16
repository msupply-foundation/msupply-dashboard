"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{"./public/app/core/hooks/useQueryParams.ts":(e,s,a)=>{a.d(s,{K:()=>i});var t=a("./packages/grafana-runtime/src/index.ts"),n=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),r=a("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js");function i(){const{search:e}=(0,r.TH)();return[(0,n.useMemo)((()=>(0,t.locationSearchToObject)(e||"")),[e]),(0,n.useCallback)(((e,s)=>setImmediate((()=>t.locationService.partial(e,s)))),[])]}},"./public/app/features/alerting/unified/AlertGroups.tsx":(e,s,a)=>{a.r(s),a.d(s,{default:()=>Q});var t=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),r=a("./packages/grafana-ui/src/index.ts"),i=a("./public/app/core/hooks/useQueryParams.ts"),l=a("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),o=a("./public/app/plugins/datasource/alertmanager/types.ts"),c=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),d=a("./public/app/features/alerting/unified/components/AlertLabels.tsx"),p=a("./packages/grafana-data/src/index.ts"),u=a("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx"),m=a("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx"),g=a("./public/app/features/alerting/unified/utils/misc.ts"),f=a("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),b=a("./public/app/features/alerting/unified/utils/matchers.ts"),x=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const h=({alert:e,alertManagerSourceName:s})=>{const a=(0,r.useStyles2)(j);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:a.actionsRow,children:[e.status.state===o.Z9.Suppressed&&(0,x.jsx)(r.LinkButton,{href:`${(0,g.eQ)("/alerting/silences",s)}&silenceIds=${e.status.silencedBy.join(",")}`,className:a.button,icon:"bell",size:"sm",children:"Manage silences"}),e.status.state===o.Z9.Active&&(0,x.jsx)(r.LinkButton,{href:`${(0,g.eQ)("/alerting/silence/new",s)}&${(0,b.r)(e.labels)}`,className:a.button,icon:"bell-slash",size:"sm",children:"Silence"}),e.generatorURL&&(0,x.jsx)(r.LinkButton,{className:a.button,href:e.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(e.annotations).map((([e,s])=>(0,x.jsx)(f.a,{annotationKey:e,value:s},e))),(0,x.jsxs)("div",{className:a.receivers,children:["Receivers:"," ",e.receivers.map((({name:e})=>e)).filter((e=>!!e)).join(", ")]})]})},j=e=>({button:c.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:c.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:c.css`
    padding: ${e.spacing(1,0)};
  `}),y=({alerts:e,alertManagerSourceName:s})=>{const a=(0,r.useStyles2)(v),n=(0,t.useMemo)((()=>[{id:"state",label:"State",renderCell:({data:e})=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.G,{state:e.status.state}),(0,x.jsxs)("span",{className:a.duration,children:["for"," ",(0,p.intervalToAbbreviatedDurationString)({start:new Date(e.startsAt),end:new Date(e.endsAt)})]})]}),size:"190px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>(0,x.jsx)(d.s,{className:a.labels,labels:e}),size:1}]),[a]),i=(0,t.useMemo)((()=>e.map((e=>({id:e.fingerprint,data:e})))),[e]);return(0,x.jsx)("div",{className:a.tableWrapper,"data-testid":"alert-group-table",children:(0,x.jsx)(m.F,{cols:n,items:i,isExpandable:!0,renderExpandedContent:({data:e})=>(0,x.jsx)(h,{alert:e,alertManagerSourceName:s})})})},v=e=>({tableWrapper:c.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:c.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:c.css`
    padding-bottom: 0;
  `});var $,_=a("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),k=a("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");const S=({alertManagerSourceName:e,group:s})=>{const[a,n]=(0,t.useState)(!0),i=(0,r.useStyles2)(N);return(0,x.jsxs)("div",{className:i.wrapper,children:[(0,x.jsxs)("div",{className:i.header,children:[(0,x.jsxs)("div",{className:i.group,"data-testid":"alert-group",children:[(0,x.jsx)(_.U,{isCollapsed:a,onToggle:()=>n(!a),"data-testid":"alert-group-collapse-toggle"}),Object.keys(s.labels).length?(0,x.jsx)(d.s,{className:i.headerLabels,labels:s.labels}):$||($=(0,x.jsx)("span",{children:"No grouping"}))]}),(0,x.jsx)(k.Z,{group:s})]}),!a&&(0,x.jsx)(y,{alertManagerSourceName:e,alerts:s.alerts})]})},N=e=>({wrapper:c.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,headerLabels:c.css`
    padding-bottom: 0 !important;
    margin-bottom: -${e.spacing(.5)};
  `,header:c.css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: ${e.spacing(1,1,1,0)};
    background-color: ${e.colors.background.secondary};
    width: 100%;
  `,group:c.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,summary:c.css``,spanElement:c.css`
    margin-left: ${e.spacing(.5)};
  `,[o.Z9.Active]:c.css`
    color: ${e.colors.error.main};
  `,[o.Z9.Suppressed]:c.css`
    color: ${e.colors.primary.main};
  `,[o.Z9.Unprocessed]:c.css`
    color: ${e.colors.secondary.main};
  `});var w,C=a("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");const z=({className:e,onFilterChange:s,queryString:a})=>{const t=(0,r.useStyles2)(G);return(0,x.jsxs)("div",{className:e,children:[(0,x.jsxs)(r.Label,{children:[(0,x.jsx)(r.Tooltip,{content:w||(w=(0,x.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,x.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,x.jsx)(r.Icon,{className:t.icon,name:"info-circle",size:"xs"})}),"Search by label"]}),(0,x.jsx)(r.Input,{placeholder:"Search",defaultValue:a,onChange:e=>{const a=e.target;s(a.value)},"data-testid":"search-query-input"})]})},G=e=>({icon:c.css`
    margin-right: ${e.spacing(.5)};
  `});var M;const A=({onStateFilterChange:e,stateFilter:s})=>{const a=(0,r.useStyles2)(B),t=Object.entries(o.Z9).sort((([e],[s])=>e<s?-1:1)).map((([e,s])=>({label:e,value:s})));return(0,x.jsxs)("div",{className:a.wrapper,children:[M||(M=(0,x.jsx)(r.Label,{children:"State"})),(0,x.jsx)(r.RadioButtonGroup,{options:t,value:s,onChange:e})]})},B=e=>({wrapper:c.css`
    margin-left: ${e.spacing(1)};
  `});var E,F,O=a("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const I=({className:e,groups:s,groupBy:a,onGroupingChange:t})=>{const n=(0,O.uniq)(s.flatMap((e=>e.alerts)).flatMap((({labels:e})=>Object.keys(e)))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,x.jsxs)("div",{"data-testid":"group-by-container",className:e,children:[E||(E=(0,x.jsx)(r.Label,{children:"Custom group by"})),(0,x.jsx)(r.MultiSelect,{"aria-label":"group by label keys",value:a,placeholder:"Group by",prefix:F||(F=(0,x.jsx)(r.Icon,{name:"tag-alt"})),onChange:e=>{t(e.map((({value:e})=>e)))},options:n})]})};var L=a("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");const Z=({groups:e})=>{const[s,a]=(0,t.useState)(Math.floor(100*Math.random())),[n,l]=(0,i.K)(),{groupBy:o=[],queryString:c,alertState:d}=(0,g.lC)(n),p=`matcher-${s}`,[u,m]=(0,L.k)(),f=(0,r.useStyles2)(T),b=!!(o.length>0||c||d);return(0,x.jsxs)("div",{className:f.wrapper,children:[(0,x.jsx)(C.P,{current:u,onChange:m}),(0,x.jsxs)("div",{className:f.filterSection,children:[(0,x.jsx)(z,{className:f.filterInput,queryString:c,onFilterChange:e=>l({queryString:e||null})},p),(0,x.jsx)(I,{className:f.filterInput,groups:e,groupBy:o,onGroupingChange:e=>l({groupBy:e.length?e.join(","):null})}),(0,x.jsx)(A,{stateFilter:d,onStateFilterChange:e=>l({alertState:e||null})}),b&&(0,x.jsx)(r.Button,{className:f.clearButton,variant:"secondary",icon:"times",onClick:()=>{l({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>a(s+1)),100)},children:"Clear filters"})]})]})},T=e=>({wrapper:c.css`
    border-bottom: 1px solid ${e.colors.border.medium};
    margin-bottom: ${e.spacing(3)};
  `,filterSection:c.css`
    display: flex;
    flex-direction: row;
    margin-bottom: ${e.spacing(3)};
  `,filterInput:c.css`
    width: 340px;
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,clearButton:c.css`
    margin-left: ${e.spacing(1)};
    margin-top: 19px;
  `});var P=a("./public/app/features/alerting/unified/state/actions.ts"),D=a("./public/app/features/alerting/unified/utils/redux.ts"),W=a("./public/app/features/alerting/unified/utils/constants.ts"),q=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");var K=a("./public/app/features/alerting/unified/utils/alertmanager.ts");var R,U;const H=e=>({groupingBanner:c.css`
    margin: ${e.spacing(2,0)};
  `}),Q=()=>{var e;const[s]=(0,L.k)(),a=(0,n.useDispatch)(),[o]=(0,i.K)(),{groupBy:c=[]}=(0,g.lC)(o),d=(0,r.useStyles2)(H),p=(0,q._)((e=>e.amAlertGroups)),{loading:u,error:m,result:f=[]}=null!==(e=p[s||""])&&void 0!==e?e:D.oq,b=((e,s)=>(0,t.useMemo)((()=>0===s.length?e:e.flatMap((({alerts:e})=>e)).reduce(((e,a)=>{if(s.every((e=>Object.keys(a.labels).includes(e)))){const t=e.find((e=>s.every((s=>e.labels[s]===a.labels[s]))));if(t)t.alerts.push(a);else{const t=s.reduce(((e,s)=>Object.assign({},e,{[s]:a.labels[s]})),{});e.push({alerts:[a],labels:t,receiver:{name:"NONE"}})}}else{const s=e.find((e=>0===Object.keys(e.labels).length));s?s.alerts.push(a):e.push({alerts:[a],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,s]))(f,c),h=(e=>{const[s]=(0,i.K)(),a=(0,g.lC)(s),n=(0,K.Zh)(a.queryString||"");return(0,t.useMemo)((()=>e.reduce(((e,s)=>{const t=s.alerts.filter((({labels:e,status:s})=>{const t=(0,K.eD)(e,n),r=!a.alertState||s.state===a.alertState;return t&&r}));return t.length>0&&(0===Object.keys(s.labels).length?e.unshift(Object.assign({},s,{alerts:t})):e.push(Object.assign({},s,{alerts:t}))),e}),[])),[e,a,n])})(b);return(0,t.useEffect)((()=>{function e(){s&&a((0,P.mS)(s))}e();const t=setInterval(e,W.iF);return()=>{clearInterval(t)}}),[a,s]),(0,x.jsxs)(l.J,{pageId:"groups",children:[(0,x.jsx)(Z,{groups:f}),u&&(R||(R=(0,x.jsx)(r.LoadingPlaceholder,{text:"Loading notifications"}))),m&&!u&&(0,x.jsx)(r.Alert,{title:"Error loading notifications",severity:"error",children:m.message||"Unknown error"}),f&&h.map(((e,a)=>(0,x.jsxs)(t.Fragment,{children:[(1===a&&0===Object.keys(h[0].labels).length||0===a&&Object.keys(e.labels).length>0)&&(0,x.jsxs)("p",{className:d.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,x.jsx)(S,{alertManagerSourceName:s||"",group:e})]},`${JSON.stringify(e.labels)}-group-${a}`))),f&&!h.length&&(U||(U=(0,x.jsx)("p",{children:"No results."})))]})}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,s,a)=>{a.d(s,{J:()=>l});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./public/app/core/components/Page/Page.tsx"),n=a("./public/app/core/selectors/navModel.ts"),r=a("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const l=({children:e,pageId:s,isLoading:a})=>{const l=(0,n.h)((0,r.useSelector)((e=>e.navIndex)),s);return(0,i.jsx)(t.Z,{navModel:l,children:(0,i.jsx)(t.Z.Contents,{isLoading:a,children:e})})}},"./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx":(e,s,a)=>{a.d(s,{a:()=>d});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./public/app/features/alerting/unified/components/Well.tsx"),n=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),i=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),l=a("./public/app/features/alerting/unified/utils/constants.ts"),o=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=["message","description"],d=({annotationKey:e,value:s})=>{const a=l.vY[e]?(0,o.jsx)(r.Tooltip,{content:e,placement:"top",theme:"info",children:(0,o.jsx)("span",{children:l.vY[e]})}):e;return(0,o.jsx)(i.C,{label:a,horizontal:!0,children:(0,o.jsx)(p,{annotationKey:e,value:s})})},p=({annotationKey:e,value:s})=>{const a=(0,r.useStyles)(u);return c.includes(e)?(0,o.jsx)(t.t,{children:s}):s&&s.startsWith("http")?(0,o.jsx)("a",{href:s,target:"__blank",className:a.link,children:s}):(0,o.jsx)(o.Fragment,{children:s})},u=e=>({well:n.css`
    word-break: break-all;
  `,link:n.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})},"./public/app/features/alerting/unified/components/DetailsField.tsx":(e,s,a)=>{a.d(s,{C:()=>i});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=a("./packages/grafana-ui/src/index.ts"),r=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({className:e,label:s,horizontal:a,children:i})=>{const o=(0,n.useStyles2)(l);return(0,r.jsxs)("div",{className:(0,t.cx)(e,o.field,a?o.fieldHorizontal:o.fieldVertical),children:[(0,r.jsx)("div",{children:s}),(0,r.jsx)("div",{children:i})]})},l=e=>({fieldHorizontal:t.css`
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,fieldVertical:t.css`
    flex-direction: column;
  `,field:t.css`
    display: flex;
    margin: ${e.spacing(2)} 0;

    & > div:first-child {
      width: 110px;
      padding-right: ${e.spacing(1)};
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightBold};
      line-height: 1.8;
    }
    & > div:nth-child(2) {
      flex: 1;
      color: ${e.colors.text.secondary};
    }
  `})},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,s,a)=>{a.d(s,{t:()=>l});var t=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const l=({cols:e,items:s,isExpandable:a=!1,onCollapse:l,onExpand:c,isExpanded:d,renderExpandedContent:p,testIdGenerator:u,renderPrefixCell:m,renderPrefixHeader:g})=>{if((l||c||d)&&!(l&&c&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((a||p)&&(!a||!p))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const f=(0,r.useStyles2)(o(e,a,!!g)),[b,x]=(0,t.useState)([]);return(0,i.jsxs)("div",{className:f.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:f.row,"data-testid":"header",children:[g&&g(),a&&(0,i.jsx)("div",{className:f.cell}),e.map((e=>(0,i.jsx)("div",{className:f.cell,children:e.label},e.id)))]}),s.map(((t,o)=>{var g;const h=d?d(t):b.includes(t.id);return(0,i.jsxs)("div",{className:f.row,"data-testid":null!==(g=null==u?void 0:u(t,o))&&void 0!==g?g:"row",children:[m&&m(t,o,s),a&&(0,i.jsx)("div",{className:(0,n.cx)(f.cell,f.expandCell),children:(0,i.jsx)(r.IconButton,{"aria-label":(h?"Collapse":"Expand")+" row",size:"xl","data-testid":"collapse-toggle",className:f.expandButton,name:h?"angle-down":"angle-right",onClick:()=>(e=>{d&&l&&c?d(e)?l(e):c(e):x(b.includes(e.id)?b.filter((s=>s!==e.id)):[...b,e.id])})(t),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,n.cx)(f.cell,f.bodyCell),"data-column":e.label,children:e.renderCell(t,o)},`${t.id}-${e.id}`))),h&&p&&(0,i.jsx)("div",{className:f.expandedContentRow,"data-testid":"expanded-content",children:p(t,o,s)})]},t.id)}))]})},o=(e,s,a)=>{const t=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return s&&t.unshift("calc(1em + 16px)"),a&&t.unshift("0"),e=>({container:n.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:n.css`
      display: grid;
      grid-template-columns: ${t.join(" ")};
      grid-template-rows: 1fr auto;

      &:nth-child(2n + 1) {
        background-color: ${e.colors.background.secondary};
      }

      &:nth-child(2n) {
        background-color: ${e.colors.background.primary};
      }

      ${e.breakpoints.down("sm")} {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'left right';
        padding: 0 ${e.spacing(.5)};

        &:first-child {
          display: none;
        }

        ${a?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:n.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:n.css`
      overflow: hidden;
      word-break: break-all;
      ${e.breakpoints.down("sm")} {
        grid-column-end: right;
        grid-column-start: right;

        &::before {
          content: attr(data-column);
          display: block;
          color: ${e.colors.text.primary};
        }
      }
    `,expandCell:n.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:n.css`
      grid-column-end: ${t.length+1};
      grid-column-start: ${a?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:n.css`
      margin-right: 0;
      display: block;
    `})}},"./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":(e,s,a)=>{a.d(s,{F:()=>o});var t=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n=a("./packages/grafana-ui/src/index.ts"),r=(a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a("./public/app/features/alerting/unified/components/DynamicTable.tsx")),i=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const l=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:s}=e,a=function(e,s){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);const o=(0,n.useStyles2)(c);return(0,i.jsx)(r.t,Object.assign({renderExpandedContent:s?(e,a,n)=>(0,i.jsxs)(i.Fragment,{children:[!(a===n.length-1)&&(0,i.jsx)("div",{className:(0,t.cx)(o.contentGuideline,o.guideline)}),s(e,a,n)]}):void 0,renderPrefixHeader:()=>(0,i.jsx)("div",{className:o.relative,children:(0,i.jsx)("div",{className:(0,t.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,s,a)=>(0,i.jsxs)("div",{className:o.relative,children:[(0,i.jsx)("div",{className:(0,t.cx)(o.topGuideline,o.guideline)}),!(s===a.length-1)&&(0,i.jsx)("div",{className:(0,t.cx)(o.bottomGuideline,o.guideline)})]})},a))},c=e=>({relative:t.css`
    position: relative;
    height: 100%;
  `,guideline:t.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:t.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:t.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:t.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:t.css`
    top: -25px;
    bottom: 0;
  `})},"./public/app/features/alerting/unified/components/Well.tsx":(e,s,a)=>{a.d(s,{t:()=>i});a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=a("./packages/grafana-ui/src/index.ts"),n=a("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({children:e,className:s})=>{const a=(0,t.useStyles)(l);return(0,r.jsx)("div",{className:(0,n.cx)(a.wrapper,s),children:e})},l=e=>({wrapper:n.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},"./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":(e,s,a)=>{a.d(s,{G:()=>l});var t=a("./public/app/plugins/datasource/alertmanager/types.ts"),n=(a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a("./public/app/features/alerting/unified/components/StateTag.tsx")),r=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i={[t.Z9.Active]:"bad",[t.Z9.Unprocessed]:"neutral",[t.Z9.Suppressed]:"info"},l=({state:e})=>(0,r.jsx)(n.i,{state:i[e],children:e})},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,s,a)=>{a.d(s,{k:()=>c});var t=a("./public/app/core/hooks/useQueryParams.ts"),n=a("./public/app/core/store.ts"),r=a("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=a("./public/app/features/alerting/unified/utils/constants.ts"),l=a("./public/app/features/alerting/unified/utils/datasource.ts");function o(e){return e===l.GC||!!(0,l.aM)().find((s=>s.name===e))}function c(){const[e,s]=(0,t.K)(),a=(0,r.useCallback)((e=>{o(e)&&(e===l.GC?(n.Z.delete(i.de),s({[i.c4]:null})):(n.Z.set(i.de,e),s({[i.c4]:e})))}),[s]),c=e[i.c4];if(c&&"string"==typeof c)return o(c)?[c,a]:[void 0,a];const d=n.Z.get(i.de);return d&&"string"==typeof d&&o(d)?(a(d),[d,a]):[l.GC,a]}}}]);
//# sourceMappingURL=AlertGroups.e27ef9683b776a9e8e93.js.map