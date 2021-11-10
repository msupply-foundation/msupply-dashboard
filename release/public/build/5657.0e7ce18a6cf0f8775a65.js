"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5657],{"./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx":(e,s,n)=>{n.d(s,{a:()=>d});n("./node_modules/react/index.js");var t=n("./public/app/features/alerting/unified/components/Well.tsx"),a=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=n("./public/app/features/alerting/unified/utils/constants.ts"),l=n("./node_modules/react/jsx-runtime.js");const u=["message","description"],d=({annotationKey:e,value:s})=>{const n=o.vY[e]?(0,l.jsx)(r.Tooltip,{content:e,placement:"top",theme:"info",children:(0,l.jsx)("span",{children:o.vY[e]})}):e;return(0,l.jsx)(i.C,{label:n,horizontal:!0,children:(0,l.jsx)(c,{annotationKey:e,value:s})})},c=({annotationKey:e,value:s})=>{const n=(0,r.useStyles)(p);return u.includes(e)?(0,l.jsx)(t.t,{children:s}):s&&s.startsWith("http")?(0,l.jsx)("a",{href:s,target:"__blank",className:n.link,children:s}):(0,l.jsx)(l.Fragment,{children:s})},p=e=>({well:a.css`
    word-break: break-all;
  `,link:a.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})},"./public/app/features/alerting/unified/components/DetailsField.tsx":(e,s,n)=>{n.d(s,{C:()=>i});n("./node_modules/react/index.js");var t=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),a=n("./packages/grafana-ui/src/index.ts"),r=n("./node_modules/react/jsx-runtime.js");const i=({className:e,label:s,horizontal:n,children:i})=>{const l=(0,a.useStyles2)(o);return(0,r.jsxs)("div",{className:(0,t.cx)(e,l.field,n?l.fieldHorizontal:l.fieldVertical),children:[(0,r.jsx)("div",{children:s}),(0,r.jsx)("div",{children:i})]})},o=e=>({fieldHorizontal:t.css`
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
  `})},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,s,n)=>{n.d(s,{t:()=>o});var t=n("./node_modules/react/index.js"),a=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./node_modules/react/jsx-runtime.js");const o=({cols:e,items:s,isExpandable:n=!1,onCollapse:o,onExpand:u,isExpanded:d,renderExpandedContent:c,testIdGenerator:p,renderPrefixCell:m,renderPrefixHeader:f})=>{if((o||u||d)&&!(o&&u&&d))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((n||c)&&(!n||!c))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const g=(0,r.useStyles2)(l(e,n,!!f)),[x,h]=(0,t.useState)([]);return(0,i.jsxs)("div",{className:g.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:g.row,"data-testid":"header",children:[f&&f(),n&&(0,i.jsx)("div",{className:g.cell}),e.map((e=>(0,i.jsx)("div",{className:g.cell,children:e.label},e.id)))]}),s.map(((t,l)=>{var f;const b=d?d(t):x.includes(t.id);return(0,i.jsxs)("div",{className:g.row,"data-testid":null!==(f=null==p?void 0:p(t,l))&&void 0!==f?f:"row",children:[m&&m(t,l,s),n&&(0,i.jsx)("div",{className:(0,a.cx)(g.cell,g.expandCell),children:(0,i.jsx)(r.IconButton,{size:"xl","data-testid":"collapse-toggle",className:g.expandButton,name:b?"angle-down":"angle-right",onClick:()=>(e=>{d&&o&&u?d(e)?o(e):u(e):h(x.includes(e.id)?x.filter((s=>s!==e.id)):[...x,e.id])})(t),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,a.cx)(g.cell,g.bodyCell),"data-column":e.label,children:e.renderCell(t,l)},`${t.id}-${e.id}`))),b&&c&&(0,i.jsx)("div",{className:g.expandedContentRow,"data-testid":"expanded-content",children:c(t,l,s)})]},t.id)}))]})},l=(e,s,n)=>{const t=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return s&&t.unshift("calc(1em + 16px)"),n&&t.unshift("0"),e=>({container:a.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:a.css`
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

        ${n?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:a.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:a.css`
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
    `,expandCell:a.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:a.css`
      grid-column-end: ${t.length+1};
      grid-column-start: ${n?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:a.css`
      margin-right: 0;
      display: block;
    `})}},"./public/app/features/alerting/unified/components/Well.tsx":(e,s,n)=>{n.d(s,{t:()=>i});n("./node_modules/react/index.js");var t=n("./packages/grafana-ui/src/index.ts"),a=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./node_modules/react/jsx-runtime.js");const i=({children:e,className:s})=>{const n=(0,t.useStyles)(o);return(0,r.jsx)("div",{className:(0,a.cx)(n.wrapper,s),children:e})},o=e=>({wrapper:a.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":(e,s,n)=>{n.d(s,{f:()=>y});var t,a,r=n("./node_modules/react/index.js"),i=n("./node_modules/react-redux/es/index.js"),o=n("./node_modules/react-router/esm/react-router.js"),l=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),u=n("./packages/grafana-data/src/index.ts"),d=n("./packages/grafana-runtime/src/index.ts"),c=n("./packages/grafana-ui/src/index.ts"),p=n("./public/app/core/services/context_srv.ts"),m=n("./public/app/core/core.ts"),f=n("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts"),g=n("./public/app/features/alerting/unified/utils/constants.ts"),x=n("./public/app/features/alerting/unified/utils/datasource.ts"),h=n("./public/app/features/alerting/unified/utils/misc.ts"),b=n("./public/app/features/alerting/unified/utils/rule-id.ts"),j=n("./public/app/features/alerting/unified/state/actions.ts"),v=n("./node_modules/react/jsx-runtime.js");const y=({rule:e,rulesSource:s})=>{const n=(0,i.useDispatch)(),l=(0,o.TH)(),y=(0,c.useStyles2)(k),{namespace:_,group:w,rulerRule:$}=e,[S,R]=(0,r.useState)(),C=[],E=[],{isEditable:z}=(0,f.M)((0,x.EG)(s),$),N=l.pathname+l.search,D=l.pathname.endsWith("/view");const q=()=>{if(S&&S.rulerRule){const e=b.Zk((0,x.EG)(S.namespace.rulesSource),S.namespace.name,S.group.name,S.rulerRule);n((0,j.hS)(e,{navigateTo:D?"/alerting/list":void 0})),R(void 0)}},U=()=>{if((0,x.jq)(s)){const n=`${encodeURIComponent(s.name)}/${encodeURIComponent(e.name)}`;return`${d.config.appUrl}${d.config.appSubUrl}/alerting/${n}/find`}return window.location.href.split("?")[0]};if((0,x.jq)(s)&&p.Vt.isEditor&&C.push((0,v.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"chart-line",target:"__blank",href:(0,h.mH)(s.name,e.query),children:"See graph"},"explore")),e.annotations[g.q6.runbookURL]&&C.push((0,v.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"book",target:"__blank",href:e.annotations[g.q6.runbookURL],children:"View runbook"},"runbook")),e.annotations[g.q6.dashboardUID]){const s=e.annotations[g.q6.dashboardUID];if(s){C.push((0,v.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(s)}`,children:"Go to dashboard"},"dashboard"));const n=e.annotations[g.q6.panelID];n&&C.push((0,v.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(s)}?viewPanel=${encodeURIComponent(n)}`,children:"Go to panel"},"dashboard"))}}if(D||E.push((0,v.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"secondary",icon:"eye",href:(0,h.V2)(s,e,N),children:"View"},"view")),z&&$){const n=(0,x.EG)(s),t=b.Zk(n,_.name,w.name,$),a=u.urlUtil.renderUrl(`${d.config.appSubUrl}/alerting/${encodeURIComponent(b.$V(t))}/edit`,{returnTo:N});D&&E.push((0,v.jsx)(c.ClipboardButton,{onClipboardCopy:()=>{m.h$.emit(u.AppEvents.alertSuccess,["URL copied!"])},onClipboardError:e=>{m.h$.emit(u.AppEvents.alertError,["Error while copying URL",e.text])},className:y.button,size:"sm",getText:U,children:"Copy link to rule"})),E.push((0,v.jsx)(c.LinkButton,{className:y.button,size:"xs",variant:"secondary",icon:"pen",href:a,children:"Edit"},"edit"),(0,v.jsx)(c.Button,{className:y.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>R(e),children:"Delete"},"delete"))}return C.length||E.length?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:y.wrapper,children:[(0,v.jsx)(c.HorizontalGroup,{width:"auto",children:C.length?C:t||(t=(0,v.jsx)("div",{}))}),(0,v.jsx)(c.HorizontalGroup,{width:"auto",children:E.length?E:a||(a=(0,v.jsx)("div",{}))})]}),!!S&&(0,v.jsx)(c.ConfirmModal,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:q,onDismiss:()=>R(void 0)})]}):null};const k=e=>({wrapper:l.css`
    padding: ${e.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${e.colors.border.medium};
  `,button:l.css`
    height: 24px;
    margin-top: ${e.spacing(1)};
    font-size: ${e.typography.size.sm};
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":(e,s,n)=>{n.d(s,{J:()=>o});n("./node_modules/react/index.js");var t=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),a=n("./packages/grafana-ui/src/index.ts"),r=n("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),i=n("./node_modules/react/jsx-runtime.js");function o(e){const{annotations:s}=e,n=(0,a.useStyles2)(l);return 0===s.length?null:(0,i.jsx)("div",{className:n.annotations,children:s.map((([e,s])=>(0,i.jsx)(r.a,{annotationKey:e,value:s},e)))})}const l=()=>({annotations:t.css`
    margin-top: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":(e,s,n)=>{n.d(s,{C:()=>p});var t=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),a=n("./packages/grafana-runtime/src/index.ts"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./public/app/features/expressions/ExpressionDatasource.ts"),o=n("./node_modules/react/index.js"),l=n("./public/app/features/alerting/unified/utils/datasource.ts"),u=n("./public/app/features/alerting/unified/utils/rules.ts"),d=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),c=n("./node_modules/react/jsx-runtime.js");function p(e){const{rulesSource:s,rule:n}=e,t=(0,r.useStyles2)(m),p=(0,o.useMemo)((()=>{if((0,l.jq)(s))return[{name:s.name,icon:s.meta.info.logos.small}];if((0,u.Pc)(n.rulerRule)){const{data:e}=n.rulerRule.grafana_alert,s=e.reduce(((e,s)=>{const n=(0,a.getDataSourceSrv)().getInstanceSettings(s.datasourceUid);return n&&n.uid!==i.Yq?(e[n.name]={name:n.name,icon:n.meta.info.logos.small},e):e}),{});return Object.values(s)}return[]}),[n,s]);return 0===p.length?null:(0,c.jsx)(d.C,{label:"Data source",children:p.map((({name:e,icon:s},n)=>(0,c.jsxs)("div",{children:[s&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{className:t.dataSourceIcon,src:s})," "]}),e]},e)))})}function m(e){const s=e.spacing(2);return{dataSourceIcon:t.css`
      width: ${s};
      height: ${s};
    `}}},"./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":(e,s,n)=>{n.d(s,{C:()=>h});var t=n("./node_modules/react/index.js"),a=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./public/app/features/alerting/unified/utils/datasource.ts"),i=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=n("./node_modules/@grafana/slate-react/lib/slate-react.es.js"),l=n("./public/app/plugins/datasource/prometheus/promql.ts"),u=n("./public/app/plugins/datasource/loki/syntax.ts"),d=n("./node_modules/prismjs/prism.js"),c=n("./packages/grafana-ui/src/index.ts"),p=n("./public/app/features/alerting/unified/components/Well.tsx"),m=n("./node_modules/react/jsx-runtime.js");const f=({language:e,expr:s})=>{const n=(0,t.useMemo)((()=>[(0,c.SlatePrism)({onlyIn:e=>"code_block"===e.type,getSyntax:()=>e},Object.assign({},d.languages,{[e]:"logql"===e?u.ZP:l.ZP}))]),[e]),a=(0,t.useMemo)((()=>(0,c.makeValue)(s)),[s]);return(0,m.jsx)(o.ML,{plugins:n,value:a,readOnly:!0})},g=({expression:e,rulesSource:s})=>{const n=(0,c.useStyles)(x);return(0,m.jsx)(p.t,{className:(0,a.cx)(n.well,"slate-query-field"),children:(0,r.jq)(s)?(0,m.jsx)(f,{expr:e,language:s.type===r.ye.Loki?"logql":"promql"}):e})},x=e=>({well:a.css`
    font-family: ${e.typography.fontFamily.monospace};
  `});function h(e){const{annotations:s,rulesSource:n,rule:t}=e,o=b();return(0,r.jq)(n)?(0,m.jsx)(i.C,{label:"Expression",horizontal:!0,className:(0,a.cx)({[o.exprRow]:!!s.length}),children:(0,m.jsx)(g,{expression:t.query,rulesSource:n})}):null}const b=()=>({exprRow:a.css`
    margin-bottom: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":(e,s,n)=>{n.d(s,{M:()=>f});var t=n("./node_modules/react/index.js"),a=n("./public/app/features/alerting/unified/utils/rules.ts"),r=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),i=(n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),n("./public/app/features/alerting/unified/components/AlertLabels.tsx")),o=n("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),l=n("./node_modules/react/jsx-runtime.js");const u=({instance:e})=>{const s=(Object.entries(e.annotations||{})||[]).filter((([e,s])=>!!s.trim()));return(0,l.jsxs)("div",{children:[e.value&&(0,l.jsx)(r.C,{label:"Value",horizontal:!0,children:e.value}),s.map((([e,s])=>(0,l.jsx)(o.a,{annotationKey:e,value:s},e)))]})};var d=n("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),c=n("./public/app/features/alerting/unified/components/DynamicTable.tsx");const p=({instances:e})=>{const s=(0,t.useMemo)((()=>e.map((e=>({data:e,id:(0,a.pB)(e)}))).sort(((e,s)=>e.id.localeCompare(s.id)))),[e]);return(0,l.jsx)(c.t,{cols:m,isExpandable:!0,items:s,renderExpandedContent:({data:e})=>(0,l.jsx)(u,{instance:e})})},m=[{id:"state",label:"State",renderCell:({data:{state:e}})=>(0,l.jsx)(d.l,{state:e}),size:"80px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>(0,l.jsx)(i.s,{labels:e})},{id:"created",label:"Created",renderCell:({data:{activeAt:e}})=>(0,l.jsx)(l.Fragment,{children:e.startsWith("0001")?"-":e.substr(0,19).replace("T"," ")}),size:"150px"}];function f(e){var s;const{promRule:n}=e;return(0,a.x_)(n)&&null!==(s=n.alerts)&&void 0!==s&&s.length?(0,l.jsx)(r.C,{label:"Matching instances",horizontal:!0,children:(0,l.jsx)(p,{instances:n.alerts})}):null}},"./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":(e,s,n)=>{n.d(s,{V:()=>l});var t,a,r=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=n("./packages/grafana-ui/src/index.ts"),o=(n("./node_modules/react/index.js"),n("./node_modules/react/jsx-runtime.js"));const l=({rule:e})=>{const s=(0,i.useStyles2)(u);return"err"===e.health||"error"===e.health?(0,o.jsx)(i.Tooltip,{theme:"error",content:e.lastError||"No error message provided.",children:(0,o.jsxs)("div",{className:s.warn,children:[t||(t=(0,o.jsx)(i.Icon,{name:"exclamation-triangle"})),a||(a=(0,o.jsx)("span",{children:"error"}))]})}):(0,o.jsx)(o.Fragment,{children:e.health})},u=e=>({warn:r.css`
    display: inline-flex;
    flex-direction: row;
    color: ${e.colors.warning.text};
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})},"./public/app/features/alerting/unified/components/rules/RuleState.tsx":(e,s,n)=>{n.d(s,{p:()=>m});var t,a,r=n("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=n("./packages/grafana-data/src/index.ts"),o=n("./packages/grafana-ui/src/index.ts"),l=n("./public/app/types/unified-alerting-dto.ts"),u=n("./node_modules/react/index.js"),d=n("./public/app/features/alerting/unified/utils/rules.ts"),c=n("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),p=n("./node_modules/react/jsx-runtime.js");const m=({rule:e,isDeleting:s,isCreating:n})=>{const r=(0,o.useStyles2)(f),{promRule:m}=e,g=(0,u.useMemo)((()=>{var e;if(m&&(0,d.x_)(m)&&null!==(e=m.alerts)&&void 0!==e&&e.length&&m.state!==l.x_.Inactive){const e=(0,d.ub)(m);if(e)return(0,p.jsxs)("span",{title:String(e),className:r.for,children:["for"," ",(0,i.intervalToAbbreviatedDurationString)({start:e,end:new Date},!1)]})}return null}),[m,r]);return s?t||(t=(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[(0,p.jsx)(o.Spinner,{}),"deleting"]})):n?a||(a=(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[" ",(0,p.jsx)(o.Spinner,{}),"creating"]})):m&&(0,d.x_)(m)?(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[(0,p.jsx)(c.l,{state:m.state}),g]}):m&&(0,d.OP)(m)?(0,p.jsx)(p.Fragment,{children:"Recording rule"}):(0,p.jsx)(p.Fragment,{children:"n/a"})},f=e=>({for:r.css`
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},"./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":(e,s,n)=>{n.d(s,{Z:()=>o});var t=n("./node_modules/react/index.js"),a=n("./public/app/features/alerting/unified/utils/datasource.ts"),r=n("./public/app/features/alerting/unified/utils/rules.ts"),i=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function o(e){const s=(0,i._)((e=>e.promRules)),n=(0,i._)((e=>e.rulerRules)),o=(0,t.useRef)({}),u=(0,t.useMemo)((()=>{if(e){const s=(0,a.o_)(e);if(!s)throw new Error(`Unknown rules source: ${e}`);return[s]}return(0,a.h_)()}),[e]);return(0,t.useMemo)((()=>u.map((e=>{var t,i;const u=(0,a.jq)(e)?e.name:e,d=null===(t=s[u])||void 0===t?void 0:t.result,c=null===(i=n[u])||void 0===i?void 0:i.result,p=o.current[u];if(p&&p.promRules===d&&p.rulerRules===c)return p.result;const m={};Object.entries(c||{}).forEach((([s,n])=>{const t={rulesSource:e,name:s,groups:[]};m[s]=t,function(e,s){e.groups=s.map((s=>{const n={name:s.name,interval:s.interval,rules:[]};return n.rules=s.rules.map((s=>function(e,s,n){return(0,r.cG)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:s,group:n}:(0,r.yF)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:s,group:n}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:s,group:n}}(s,e,n))),n}))}(t,n)})),null==d||d.forEach((({name:s,groups:n})=>{!function(e,s){s.forEach((s=>{var n;let t=e.groups.find((e=>e.name===s.name));t||(t={name:s.name,rules:[]},e.groups.push(t)),(null!==(n=s.rules)&&void 0!==n?n:[]).forEach((s=>{const n=function(e,s,n){var t;if((0,a.HY)(n))return s.rules.find((s=>s.name===e.name));return null!==(t=s.rules.find((s=>!s.promRule&&l(s,e,!0))))&&void 0!==t?t:s.rules.find((s=>!s.promRule&&l(s,e,!1)))}(s,t,e.rulesSource);n?n.promRule=s:t.rules.push(function(e,s,n){return{name:e.name,query:e.query,labels:e.labels||{},annotations:(0,r.x_)(e)&&e.annotations||{},promRule:e,namespace:s,group:n}}(s,e,t))}))}))}(m[s]=m[s]||{rulesSource:e,name:s,groups:[]},n)}));const f=Object.values(m);return(0,a.HY)(e)&&f.forEach((e=>{e.groups=[{name:"default",rules:e.groups.flatMap((e=>e.rules)).sort(((e,s)=>e.name.localeCompare(s.name)))}]})),o.current[u]={promRules:d,rulerRules:c,result:f},f})).flat()),[s,n,u])}function l(e,s,n=!0){return e.name===s.name&&JSON.stringify([n?u(e.query):"",e.labels,e.annotations])===JSON.stringify([n?u(s.query):"",s.labels||{},(0,r.x_)(s)&&s.annotations||{}])}function u(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.substr(1,e.length-2)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}},"./public/app/features/alerting/unified/hooks/useFolder.ts":(e,s,n)=>{n.d(s,{W:()=>l});var t=n("./node_modules/react-redux/es/index.js"),a=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),r=n("./node_modules/react/index.js"),i=n("./public/app/features/alerting/unified/state/actions.ts"),o=n("./public/app/features/alerting/unified/utils/redux.ts");function l(e){const s=(0,t.useDispatch)(),n=(0,a._)((e=>e.folders));if((0,r.useEffect)((()=>{e&&s((0,i.sw)(e))}),[s,e]),e){const s=n[e]||o.oq;return{folder:s.result,loading:s.loading}}return{loading:!1}}},"./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":(e,s,n)=>{n.d(s,{M:()=>c});var t=n("./public/app/core/services/context_srv.ts"),a=n("./public/app/features/alerting/unified/utils/rules.ts"),r=n("./public/app/features/alerting/unified/hooks/useFolder.ts"),i=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),o=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/react/index.js"),u=n("./public/app/features/alerting/unified/state/actions.ts"),d=n("./public/app/features/alerting/unified/utils/datasource.ts");function c(e,s){var n,c;const p=(0,i._)((e=>e.lotexSupportsRuleEditing)),m=(0,o.useDispatch)(),f=s&&(0,a.Pc)(s)?s.grafana_alert.namespace_uid:void 0,{folder:g,loading:x}=(0,r.W)(f);if((0,l.useEffect)((()=>{void 0===p[e]&&e!==d.GC&&m((0,u.Yb)(e))}),[e,p,m]),!s)return{isEditable:!1,loading:!1};if((0,a.Pc)(s)){if(!f)throw new Error(`Rule ${s.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);return{isEditable:null==g?void 0:g.canSave,loading:x}}return{isEditable:t.Vt.isEditor&&!(null===(n=p[e])||void 0===n||!n.result),loading:!(null===(c=p[e])||void 0===c||!c.loading)}}}}]);
//# sourceMappingURL=5657.0e7ce18a6cf0f8775a65.js.map