"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2415],{"./public/app/core/hooks/useQueryParams.ts":(e,s,t)=>{t.d(s,{K:()=>i});var a=t("./packages/grafana-runtime/src/index.ts"),n=t("./node_modules/react/index.js"),r=t("./node_modules/react-router/esm/react-router.js");function i(){const{search:e}=(0,r.TH)();return[(0,n.useMemo)((()=>(0,a.locationSearchToObject)(e||"")),[e]),(0,n.useCallback)(((e,s)=>setImmediate((()=>a.locationService.partial(e,s)))),[])]}},"./public/app/features/alerting/unified/AlertGroups.tsx":(e,s,t)=>{t.r(s),t.d(s,{default:()=>Q});var a=t("./node_modules/react/index.js"),n=t("./node_modules/react-redux/es/index.js"),r=t("./packages/grafana-ui/src/index.ts"),i=t("./public/app/core/hooks/useQueryParams.ts"),l=t("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),o=t("./public/app/plugins/datasource/alertmanager/types.ts"),c=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),d=t("./public/app/features/alerting/unified/components/AlertLabels.tsx"),u=t("./packages/grafana-data/src/index.ts"),p=t("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx"),g=t("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx"),m=t("./public/app/features/alerting/unified/utils/misc.ts"),x=t("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),b=t("./public/app/features/alerting/unified/utils/matchers.ts"),f=t("./node_modules/react/jsx-runtime.js");const h=({alert:e,alertManagerSourceName:s})=>{const t=(0,r.useStyles2)(j);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:t.actionsRow,children:[e.status.state===o.Z9.Suppressed&&(0,f.jsx)(r.LinkButton,{href:`${(0,m.eQ)("/alerting/silences",s)}&silenceIds=${e.status.silencedBy.join(",")}`,className:t.button,icon:"bell",size:"sm",children:"Manage silences"}),e.status.state===o.Z9.Active&&(0,f.jsx)(r.LinkButton,{href:`${(0,m.eQ)("/alerting/silence/new",s)}&${(0,b.r)(e.labels)}`,className:t.button,icon:"bell-slash",size:"sm",children:"Silence"}),e.generatorURL&&(0,f.jsx)(r.LinkButton,{className:t.button,href:e.generatorURL,icon:"chart-line",size:"sm",children:"See source"})]}),Object.entries(e.annotations).map((([e,s])=>(0,f.jsx)(x.a,{annotationKey:e,value:s},e))),(0,f.jsxs)("div",{className:t.receivers,children:["Receivers:"," ",e.receivers.map((({name:e})=>e)).filter((e=>!!e)).join(", ")]})]})},j=e=>({button:c.css`
    & + & {
      margin-left: ${e.spacing(1)};
    }
  `,actionsRow:c.css`
    padding: ${e.spacing(2,0)} !important;
    border-bottom: 1px solid ${e.colors.border.medium};
  `,receivers:c.css`
    padding: ${e.spacing(1,0)};
  `}),y=({alerts:e,alertManagerSourceName:s})=>{const t=(0,r.useStyles2)(v),n=(0,a.useMemo)((()=>[{id:"state",label:"State",renderCell:({data:e})=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(p.G,{state:e.status.state}),(0,f.jsxs)("span",{className:t.duration,children:["for"," ",(0,u.intervalToAbbreviatedDurationString)({start:new Date(e.startsAt),end:new Date(e.endsAt)})]})]}),size:"190px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>(0,f.jsx)(d.s,{className:t.labels,labels:e}),size:1}]),[t]),i=(0,a.useMemo)((()=>e.map((e=>({id:e.fingerprint,data:e})))),[e]);return(0,f.jsx)("div",{className:t.tableWrapper,"data-testid":"alert-group-table",children:(0,f.jsx)(g.F,{cols:n,items:i,isExpandable:!0,renderExpandedContent:({data:e})=>(0,f.jsx)(h,{alert:e,alertManagerSourceName:s})})})},v=e=>({tableWrapper:c.css`
    margin-top: ${e.spacing(3)};
    ${e.breakpoints.up("md")} {
      margin-left: ${e.spacing(4.5)};
    }
  `,duration:c.css`
    margin-left: ${e.spacing(1)};
    font-size: ${e.typography.bodySmall.fontSize};
  `,labels:c.css`
    padding-bottom: 0;
  `});var $,k=t("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),S=t("./public/app/features/alerting/unified/components/alert-groups/AlertGroupHeader.tsx");const N=({alertManagerSourceName:e,group:s})=>{const[t,n]=(0,a.useState)(!0),i=(0,r.useStyles2)(w);return(0,f.jsxs)("div",{className:i.wrapper,children:[(0,f.jsxs)("div",{className:i.header,children:[(0,f.jsxs)("div",{className:i.group,"data-testid":"alert-group",children:[(0,f.jsx)(k.U,{isCollapsed:t,onToggle:()=>n(!t),"data-testid":"alert-group-collapse-toggle"}),Object.keys(s.labels).length?(0,f.jsx)(d.s,{className:i.headerLabels,labels:s.labels}):$||($=(0,f.jsx)("span",{children:"No grouping"}))]}),(0,f.jsx)(S.Z,{group:s})]}),!t&&(0,f.jsx)(y,{alertManagerSourceName:e,alerts:s.alerts})]})},w=e=>({wrapper:c.css`
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
  `});var C,_=t("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");const G=({className:e,onFilterChange:s,queryString:t})=>{const a=(0,r.useStyles2)(M);return(0,f.jsxs)("div",{className:e,children:[(0,f.jsxs)(r.Label,{children:[(0,f.jsx)(r.Tooltip,{content:C||(C=(0,f.jsxs)("div",{children:["Filter alerts using label querying, ex:",(0,f.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,f.jsx)(r.Icon,{className:a.icon,name:"info-circle",size:"xs"})}),"Search by label"]}),(0,f.jsx)(r.Input,{placeholder:"Search",defaultValue:t,onChange:e=>{const t=e.target;s(t.value)},"data-testid":"search-query-input"})]})},M=e=>({icon:c.css`
    margin-right: ${e.spacing(.5)};
  `});var A;const B=({onStateFilterChange:e,stateFilter:s})=>{const t=(0,r.useStyles2)(E),a=Object.entries(o.Z9).sort((([e],[s])=>e<s?-1:1)).map((([e,s])=>({label:e,value:s})));return(0,f.jsxs)("div",{className:t.wrapper,children:[A||(A=(0,f.jsx)(r.Label,{children:"State"})),(0,f.jsx)(r.RadioButtonGroup,{options:a,value:s,onChange:e})]})},E=e=>({wrapper:c.css`
    margin-left: ${e.spacing(1)};
  `});var F,O,z=t("./node_modules/lodash/lodash.js");const I=({className:e,groups:s,groupBy:t,onGroupingChange:a})=>{const n=(0,z.uniq)(s.flatMap((e=>e.alerts)).flatMap((({labels:e})=>Object.keys(e)))).filter((e=>!(e.startsWith("__")&&e.endsWith("__")))).map((e=>({label:e,value:e})));return(0,f.jsxs)("div",{"data-testid":"group-by-container",className:e,children:[F||(F=(0,f.jsx)(r.Label,{children:"Custom group by"})),(0,f.jsx)(r.MultiSelect,{"aria-label":"group by label keys",value:t,placeholder:"Group by",prefix:O||(O=(0,f.jsx)(r.Icon,{name:"tag-alt"})),onChange:e=>{a(e.map((({value:e})=>e)))},options:n})]})};var L=t("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts");const Z=({groups:e})=>{const[s,t]=(0,a.useState)(Math.floor(100*Math.random())),[n,l]=(0,i.K)(),{groupBy:o=[],queryString:c,alertState:d}=(0,m.lC)(n),u=`matcher-${s}`,[p,g]=(0,L.k)(),x=(0,r.useStyles2)(T),b=!!(o.length>0||c||d);return(0,f.jsxs)("div",{className:x.wrapper,children:[(0,f.jsx)(_.P,{current:p,onChange:g}),(0,f.jsxs)("div",{className:x.filterSection,children:[(0,f.jsx)(G,{className:x.filterInput,queryString:c,onFilterChange:e=>l({queryString:e||null})},u),(0,f.jsx)(I,{className:x.filterInput,groups:e,groupBy:o,onGroupingChange:e=>l({groupBy:e.length?e.join(","):null})}),(0,f.jsx)(B,{stateFilter:d,onStateFilterChange:e=>l({alertState:e||null})}),b&&(0,f.jsx)(r.Button,{className:x.clearButton,variant:"secondary",icon:"times",onClick:()=>{l({groupBy:null,queryString:null,alertState:null}),setTimeout((()=>t(s+1)),100)},children:"Clear filters"})]})]})},T=e=>({wrapper:c.css`
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
  `});var P=t("./public/app/features/alerting/unified/state/actions.ts"),D=t("./public/app/features/alerting/unified/utils/redux.ts"),W=t("./public/app/features/alerting/unified/utils/constants.ts"),q=t("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");var K=t("./public/app/features/alerting/unified/utils/alertmanager.ts");var R,U;const H=e=>({groupingBanner:c.css`
    margin: ${e.spacing(2,0)};
  `}),Q=()=>{var e;const[s]=(0,L.k)(),t=(0,n.useDispatch)(),[o]=(0,i.K)(),{groupBy:c=[]}=(0,m.lC)(o),d=(0,r.useStyles2)(H),u=(0,q._)((e=>e.amAlertGroups)),{loading:p,error:g,result:x=[]}=null!==(e=u[s||""])&&void 0!==e?e:D.oq,b=(e=>{const[s]=(0,i.K)(),t=(0,m.lC)(s),n=(0,K.Zh)(t.queryString||"");return(0,a.useMemo)((()=>e.reduce(((e,s)=>{const a=s.alerts.filter((({labels:e,status:s})=>{const a=(0,K.eD)(e,n),r=!t.alertState||s.state===t.alertState;return a&&r}));return a.length>0&&(0===Object.keys(s.labels).length?e.unshift(Object.assign({},s,{alerts:a})):e.push(Object.assign({},s,{alerts:a}))),e}),[])),[e,t,n])})(((e,s)=>(0,a.useMemo)((()=>0===s.length?e:e.flatMap((({alerts:e})=>e)).reduce(((e,t)=>{if(s.every((e=>Object.keys(t.labels).includes(e)))){const a=e.find((e=>s.every((s=>e.labels[s]===t.labels[s]))));if(a)a.alerts.push(t);else{const a=s.reduce(((e,s)=>Object.assign({},e,{[s]:t.labels[s]})),{});e.push({alerts:[t],labels:a,receiver:{name:"NONE"}})}}else{const s=e.find((e=>0===Object.keys(e.labels).length));s?s.alerts.push(t):e.push({alerts:[t],labels:{},receiver:{name:"NONE"}})}return e}),[])),[e,s]))(x,c));return(0,a.useEffect)((()=>{function e(){s&&t((0,P.mS)(s))}e();const a=setInterval(e,W.iF);return()=>{clearInterval(a)}}),[t,s]),(0,f.jsxs)(l.J,{pageId:"groups",children:[(0,f.jsx)(Z,{groups:x}),p&&(R||(R=(0,f.jsx)(r.LoadingPlaceholder,{text:"Loading notifications"}))),g&&!p&&(0,f.jsx)(r.Alert,{title:"Error loading notifications",severity:"error",children:g.message||"Unknown error"}),x&&b.map(((e,t)=>(0,f.jsxs)(a.Fragment,{children:[(1===t&&0===Object.keys(b[0].labels).length||0===t&&Object.keys(e.labels).length>0)&&(0,f.jsxs)("p",{className:d.groupingBanner,children:["Grouped by: ",Object.keys(e.labels).join(", ")]}),(0,f.jsx)(N,{alertManagerSourceName:s||"",group:e})]},`${JSON.stringify(e.labels)}-group-${t}`))),x&&!b.length&&(U||(U=(0,f.jsx)("p",{children:"No results."})))]})}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,s,t)=>{t.d(s,{J:()=>l});t("./node_modules/react/index.js");var a=t("./public/app/core/components/Page/Page.tsx"),n=t("./public/app/core/selectors/navModel.ts"),r=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/react/jsx-runtime.js");const l=({children:e,pageId:s,isLoading:t})=>{const l=(0,n.h)((0,r.useSelector)((e=>e.navIndex)),s);return(0,i.jsx)(a.Z,{navModel:l,children:(0,i.jsx)(a.Z.Contents,{isLoading:t,children:e})})}},"./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx":(e,s,t)=>{t.d(s,{a:()=>d});t("./node_modules/react/index.js");var a=t("./public/app/features/alerting/unified/components/Well.tsx"),n=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=t("./packages/grafana-ui/src/index.ts"),i=t("./public/app/features/alerting/unified/components/DetailsField.tsx"),l=t("./public/app/features/alerting/unified/utils/constants.ts"),o=t("./node_modules/react/jsx-runtime.js");const c=["message","description"],d=({annotationKey:e,value:s})=>{const t=l.vY[e]?(0,o.jsx)(r.Tooltip,{content:e,placement:"top",theme:"info",children:(0,o.jsx)("span",{children:l.vY[e]})}):e;return(0,o.jsx)(i.C,{label:t,horizontal:!0,children:(0,o.jsx)(u,{annotationKey:e,value:s})})},u=({annotationKey:e,value:s})=>{const t=(0,r.useStyles)(p);return c.includes(e)?(0,o.jsx)(a.t,{children:s}):s&&s.startsWith("http")?(0,o.jsx)("a",{href:s,target:"__blank",className:t.link,children:s}):(0,o.jsx)(o.Fragment,{children:s})},p=e=>({well:n.css`
    word-break: break-all;
  `,link:n.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})},"./public/app/features/alerting/unified/components/DetailsField.tsx":(e,s,t)=>{t.d(s,{C:()=>i});t("./node_modules/react/index.js");var a=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./node_modules/react/jsx-runtime.js");const i=({className:e,label:s,horizontal:t,children:i})=>{const o=(0,n.useStyles2)(l);return(0,r.jsxs)("div",{className:(0,a.cx)(e,o.field,t?o.fieldHorizontal:o.fieldVertical),children:[(0,r.jsx)("div",{children:s}),(0,r.jsx)("div",{children:i})]})},l=e=>({fieldHorizontal:a.css`
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,fieldVertical:a.css`
    flex-direction: column;
  `,field:a.css`
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
  `})},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,s,t)=>{t.d(s,{t:()=>l});var a=t("./node_modules/react/index.js"),n=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=t("./packages/grafana-ui/src/index.ts"),i=t("./node_modules/react/jsx-runtime.js");const l=({cols:e,items:s,isExpandable:t=!1,onCollapse:l,onExpand:c,isExpanded:d,renderExpandedContent:u,testIdGenerator:p,renderPrefixCell:g,renderPrefixHeader:m})=>{if((l||c||d)&&!(l&&c&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((t||u)&&(!t||!u))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const x=(0,r.useStyles2)(o(e,t,!!m)),[b,f]=(0,a.useState)([]);return(0,i.jsxs)("div",{className:x.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:x.row,"data-testid":"header",children:[m&&m(),t&&(0,i.jsx)("div",{className:x.cell}),e.map((e=>(0,i.jsx)("div",{className:x.cell,children:e.label},e.id)))]}),s.map(((a,o)=>{var m;const h=d?d(a):b.includes(a.id);return(0,i.jsxs)("div",{className:x.row,"data-testid":null!==(m=null==p?void 0:p(a,o))&&void 0!==m?m:"row",children:[g&&g(a,o,s),t&&(0,i.jsx)("div",{className:(0,n.cx)(x.cell,x.expandCell),children:(0,i.jsx)(r.IconButton,{size:"xl","data-testid":"collapse-toggle",className:x.expandButton,name:h?"angle-down":"angle-right",onClick:()=>(e=>{d&&l&&c?d(e)?l(e):c(e):f(b.includes(e.id)?b.filter((s=>s!==e.id)):[...b,e.id])})(a),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,n.cx)(x.cell,x.bodyCell),"data-column":e.label,children:e.renderCell(a,o)},`${a.id}-${e.id}`))),h&&u&&(0,i.jsx)("div",{className:x.expandedContentRow,"data-testid":"expanded-content",children:u(a,o,s)})]},a.id)}))]})},o=(e,s,t)=>{const a=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return s&&a.unshift("calc(1em + 16px)"),t&&a.unshift("0"),e=>({container:n.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:n.css`
      display: grid;
      grid-template-columns: ${a.join(" ")};
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

        ${t?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
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
      grid-column-end: ${a.length+1};
      grid-column-start: ${t?3:2};
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
    `})}},"./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":(e,s,t)=>{t.d(s,{F:()=>o});var a=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),n=t("./packages/grafana-ui/src/index.ts"),r=(t("./node_modules/react/index.js"),t("./public/app/features/alerting/unified/components/DynamicTable.tsx")),i=t("./node_modules/react/jsx-runtime.js");const l=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:s}=e,t=function(e,s){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);const o=(0,n.useStyles2)(c);return(0,i.jsx)(r.t,Object.assign({renderExpandedContent:s?(e,t,n)=>(0,i.jsxs)(i.Fragment,{children:[!(t===n.length-1)&&(0,i.jsx)("div",{className:(0,a.cx)(o.contentGuideline,o.guideline)}),s(e,t,n)]}):void 0,renderPrefixHeader:()=>(0,i.jsx)("div",{className:o.relative,children:(0,i.jsx)("div",{className:(0,a.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,s,t)=>(0,i.jsxs)("div",{className:o.relative,children:[(0,i.jsx)("div",{className:(0,a.cx)(o.topGuideline,o.guideline)}),!(s===t.length-1)&&(0,i.jsx)("div",{className:(0,a.cx)(o.bottomGuideline,o.guideline)})]})},t))},c=e=>({relative:a.css`
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
  `})},"./public/app/features/alerting/unified/components/Well.tsx":(e,s,t)=>{t.d(s,{t:()=>i});t("./node_modules/react/index.js");var a=t("./packages/grafana-ui/src/index.ts"),n=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=t("./node_modules/react/jsx-runtime.js");const i=({children:e,className:s})=>{const t=(0,a.useStyles)(l);return(0,r.jsx)("div",{className:(0,n.cx)(t.wrapper,s),children:e})},l=e=>({wrapper:n.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},"./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":(e,s,t)=>{t.d(s,{G:()=>l});var a=t("./public/app/plugins/datasource/alertmanager/types.ts"),n=(t("./node_modules/react/index.js"),t("./public/app/features/alerting/unified/components/StateTag.tsx")),r=t("./node_modules/react/jsx-runtime.js");const i={[a.Z9.Active]:"bad",[a.Z9.Unprocessed]:"neutral",[a.Z9.Suppressed]:"info"},l=({state:e})=>(0,r.jsx)(n.i,{state:i[e],children:e})},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,s,t)=>{t.d(s,{k:()=>c});var a=t("./public/app/core/hooks/useQueryParams.ts"),n=t("./public/app/core/store.ts"),r=t("./node_modules/react/index.js"),i=t("./public/app/features/alerting/unified/utils/constants.ts"),l=t("./public/app/features/alerting/unified/utils/datasource.ts");function o(e){return e===l.GC||!!(0,l.aM)().find((s=>s.name===e))}function c(){const[e,s]=(0,a.K)(),t=(0,r.useCallback)((e=>{o(e)&&(e===l.GC?(n.Z.delete(i.de),s({[i.c4]:null})):(n.Z.set(i.de,e),s({[i.c4]:e})))}),[s]),c=e[i.c4];if(c&&"string"==typeof c)return o(c)?[c,t]:[void 0,t];const d=n.Z.get(i.de);return d&&"string"==typeof d&&o(d)?(t(d),[d,t]):[l.GC,t]}}}]);
//# sourceMappingURL=AlertGroups.0e7ce18a6cf0f8775a65.js.map