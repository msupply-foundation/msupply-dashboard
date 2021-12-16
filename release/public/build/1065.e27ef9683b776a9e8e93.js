"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1065],{"./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx":(e,a,n)=>{n.d(a,{a:()=>u});n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=n("./public/app/features/alerting/unified/components/Well.tsx"),s=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=n("./public/app/features/alerting/unified/utils/constants.ts"),l=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=["message","description"],u=({annotationKey:e,value:a})=>{const n=o.vY[e]?(0,l.jsx)(r.Tooltip,{content:e,placement:"top",theme:"info",children:(0,l.jsx)("span",{children:o.vY[e]})}):e;return(0,l.jsx)(i.C,{label:n,horizontal:!0,children:(0,l.jsx)(d,{annotationKey:e,value:a})})},d=({annotationKey:e,value:a})=>{const n=(0,r.useStyles)(p);return c.includes(e)?(0,l.jsx)(t.t,{children:a}):a&&a.startsWith("http")?(0,l.jsx)("a",{href:a,target:"__blank",className:n.link,children:a}):(0,l.jsx)(l.Fragment,{children:a})},p=e=>({well:s.css`
    word-break: break-all;
  `,link:s.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})},"./public/app/features/alerting/unified/components/DetailsField.tsx":(e,a,n)=>{n.d(a,{C:()=>i});n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("./packages/grafana-ui/src/index.ts"),r=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({className:e,label:a,horizontal:n,children:i})=>{const l=(0,s.useStyles2)(o);return(0,r.jsxs)("div",{className:(0,t.cx)(e,l.field,n?l.fieldHorizontal:l.fieldVertical),children:[(0,r.jsx)("div",{children:a}),(0,r.jsx)("div",{children:i})]})},o=e=>({fieldHorizontal:t.css`
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
  `})},"./public/app/features/alerting/unified/components/DynamicTable.tsx":(e,a,n)=>{n.d(a,{t:()=>o});var t=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const o=({cols:e,items:a,isExpandable:n=!1,onCollapse:o,onExpand:c,isExpanded:u,renderExpandedContent:d,testIdGenerator:p,renderPrefixCell:m,renderPrefixHeader:f})=>{if((o||c||u)&&!(o&&c&&u))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((n||d)&&(!n||!d))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const g=(0,r.useStyles2)(l(e,n,!!f)),[x,h]=(0,t.useState)([]);return(0,i.jsxs)("div",{className:g.container,"data-testid":"dynamic-table",children:[(0,i.jsxs)("div",{className:g.row,"data-testid":"header",children:[f&&f(),n&&(0,i.jsx)("div",{className:g.cell}),e.map((e=>(0,i.jsx)("div",{className:g.cell,children:e.label},e.id)))]}),a.map(((t,l)=>{var f;const b=u?u(t):x.includes(t.id);return(0,i.jsxs)("div",{className:g.row,"data-testid":null!==(f=null==p?void 0:p(t,l))&&void 0!==f?f:"row",children:[m&&m(t,l,a),n&&(0,i.jsx)("div",{className:(0,s.cx)(g.cell,g.expandCell),children:(0,i.jsx)(r.IconButton,{"aria-label":(b?"Collapse":"Expand")+" row",size:"xl","data-testid":"collapse-toggle",className:g.expandButton,name:b?"angle-down":"angle-right",onClick:()=>(e=>{u&&o&&c?u(e)?o(e):c(e):h(x.includes(e.id)?x.filter((a=>a!==e.id)):[...x,e.id])})(t),type:"button"})}),e.map((e=>(0,i.jsx)("div",{className:(0,s.cx)(g.cell,g.bodyCell),"data-column":e.label,children:e.renderCell(t,l)},`${t.id}-${e.id}`))),b&&d&&(0,i.jsx)("div",{className:g.expandedContentRow,"data-testid":"expanded-content",children:d(t,l,a)})]},t.id)}))]})},l=(e,a,n)=>{const t=e.map((e=>e.size?"number"==typeof e.size?`${e.size}fr`:e.size:"auto"));return a&&t.unshift("calc(1em + 16px)"),n&&t.unshift("0"),e=>({container:s.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:s.css`
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
    `,cell:s.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:s.css`
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
    `,expandCell:s.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:s.css`
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
    `,expandButton:s.css`
      margin-right: 0;
      display: block;
    `})}},"./public/app/features/alerting/unified/components/Well.tsx":(e,a,n)=>{n.d(a,{t:()=>i});n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=n("./packages/grafana-ui/src/index.ts"),s=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const i=({children:e,className:a})=>{const n=(0,t.useStyles)(o);return(0,r.jsx)("div",{className:(0,s.cx)(n.wrapper,a),children:e})},o=e=>({wrapper:s.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx":(e,a,n)=>{n.d(a,{f:()=>y});var t,s,r=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=n("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),o=n("./.yarn/__virtual__/react-router-virtual-31642fe47a/0/cache/react-router-npm-5.2.1-ea754d7473-7daae084bf.zip/node_modules/react-router/esm/react-router.js"),l=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),c=n("./packages/grafana-data/src/index.ts"),u=n("./packages/grafana-runtime/src/index.ts"),d=n("./packages/grafana-ui/src/index.ts"),p=n("./public/app/core/services/context_srv.ts"),m=n("./public/app/core/core.ts"),f=n("./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts"),g=n("./public/app/features/alerting/unified/utils/constants.ts"),x=n("./public/app/features/alerting/unified/utils/datasource.ts"),h=n("./public/app/features/alerting/unified/utils/misc.ts"),b=n("./public/app/features/alerting/unified/utils/rule-id.ts"),j=n("./public/app/features/alerting/unified/state/actions.ts"),v=n("./public/app/features/alerting/unified/utils/alertmanager.ts"),_=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const y=({rule:e,rulesSource:a})=>{var n;const l=(0,i.useDispatch)(),y=(0,o.TH)(),k=(0,d.useStyles2)(z),{namespace:w,group:$,rulerRule:S}=e,[C,R]=(0,r.useState)(),E=(0,x.HY)(a)?a:null===(n=(0,v.Xy)(a.jsonData.alertmanagerUid))||void 0===n?void 0:n.name,N=[],D=[],{isEditable:q}=(0,f.M)((0,x.EG)(a),S),U=y.pathname+y.search,I=y.pathname.endsWith("/view");const F=()=>{if(C&&C.rulerRule){const e=b.Zk((0,x.EG)(C.namespace.rulesSource),C.namespace.name,C.group.name,C.rulerRule);l((0,j.hS)(e,{navigateTo:I?"/alerting/list":void 0})),R(void 0)}},B=()=>{if((0,x.jq)(a)){const n=`${encodeURIComponent(a.name)}/${encodeURIComponent(e.name)}`;return`${u.config.appUrl}${u.config.appSubUrl}/alerting/${n}/find`}return window.location.href.split("?")[0]};if((0,x.jq)(a)&&p.Vt.isEditor&&N.push((0,_.jsx)(d.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"chart-line",target:"__blank",href:(0,h.mH)(a.name,e.query),children:"See graph"},"explore")),e.annotations[g.q6.runbookURL]&&N.push((0,_.jsx)(d.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"book",target:"__blank",href:e.annotations[g.q6.runbookURL],children:"View runbook"},"runbook")),e.annotations[g.q6.dashboardUID]){const a=e.annotations[g.q6.dashboardUID];if(a){N.push((0,_.jsx)(d.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(a)}`,children:"Go to dashboard"},"dashboard"));const n=e.annotations[g.q6.panelID];n&&N.push((0,_.jsx)(d.LinkButton,{className:k.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(a)}?viewPanel=${encodeURIComponent(n)}`,children:"Go to panel"},"panel"))}}if(E&&N.push((0,_.jsx)(d.LinkButton,{className:k.button,size:"xs",icon:"bell-slash",target:"__blank",href:(0,h.S1)(E,e),children:"Silence"},"silence")),I||D.push((0,_.jsx)(d.LinkButton,{className:k.button,size:"xs",variant:"secondary",icon:"eye",href:(0,h.V2)(a,e,U),children:"View"},"view")),q&&S){const n=(0,x.EG)(a),t=b.Zk(n,w.name,$.name,S),s=c.urlUtil.renderUrl(`${u.config.appSubUrl}/alerting/${encodeURIComponent(b.$V(t))}/edit`,{returnTo:U});I&&D.push((0,_.jsx)(d.ClipboardButton,{onClipboardCopy:()=>{m.h$.emit(c.AppEvents.alertSuccess,["URL copied!"])},onClipboardError:e=>{m.h$.emit(c.AppEvents.alertError,["Error while copying URL",e.text])},className:k.button,size:"sm",getText:B,children:"Copy link to rule"},"copy")),D.push((0,_.jsx)(d.LinkButton,{className:k.button,size:"xs",variant:"secondary",icon:"pen",href:s,children:"Edit"},"edit"),(0,_.jsx)(d.Button,{className:k.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>R(e),children:"Delete"},"delete"))}return N.length||D.length?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:k.wrapper,children:[(0,_.jsx)(d.HorizontalGroup,{width:"auto",children:N.length?N:t||(t=(0,_.jsx)("div",{}))}),(0,_.jsx)(d.HorizontalGroup,{width:"auto",children:D.length?D:s||(s=(0,_.jsx)("div",{}))})]}),!!C&&(0,_.jsx)(d.ConfirmModal,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:F,onDismiss:()=>R(void 0)})]}):null};const z=e=>({wrapper:l.css`
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
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx":(e,a,n)=>{n.d(a,{J:()=>o});n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js");var t=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("./packages/grafana-ui/src/index.ts"),r=n("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),i=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function o(e){const{annotations:a}=e,n=(0,s.useStyles2)(l);return 0===a.length?null:(0,i.jsx)("div",{className:n.annotations,children:a.map((([e,a])=>(0,i.jsx)(r.a,{annotationKey:e,value:a},e)))})}const l=()=>({annotations:t.css`
    margin-top: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx":(e,a,n)=>{n.d(a,{C:()=>p});var t=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),s=n("./packages/grafana-runtime/src/index.ts"),r=n("./packages/grafana-ui/src/index.ts"),i=n("./public/app/features/expressions/ExpressionDatasource.ts"),o=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),l=n("./public/app/features/alerting/unified/utils/datasource.ts"),c=n("./public/app/features/alerting/unified/utils/rules.ts"),u=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),d=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");function p(e){const{rulesSource:a,rule:n}=e,t=(0,r.useStyles2)(m),p=(0,o.useMemo)((()=>{if((0,l.jq)(a))return[{name:a.name,icon:a.meta.info.logos.small}];if((0,c.Pc)(n.rulerRule)){const{data:e}=n.rulerRule.grafana_alert,a=e.reduce(((e,a)=>{const n=(0,s.getDataSourceSrv)().getInstanceSettings(a.datasourceUid);return n&&n.uid!==i.Yq?(e[n.name]={name:n.name,icon:n.meta.info.logos.small},e):e}),{});return Object.values(a)}return[]}),[n,a]);return 0===p.length?null:(0,d.jsx)(u.C,{label:"Data source",children:p.map((({name:e,icon:a},n)=>(0,d.jsxs)("div",{children:[a&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{alt:`${e} datasource logo`,className:t.dataSourceIcon,src:a})," "]}),e]},e)))})}function m(e){const a=e.spacing(2);return{dataSourceIcon:t.css`
      width: ${a};
      height: ${a};
    `}}},"./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx":(e,a,n)=>{n.d(a,{C:()=>h});var t=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),r=n("./public/app/features/alerting/unified/utils/datasource.ts"),i=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=n("./.yarn/__virtual__/@grafana-slate-react-virtual-13c8a80c0a/0/cache/@grafana-slate-react-npm-0.22.10-grafana-510bc0576d-3417c53d9d.zip/node_modules/@grafana/slate-react/lib/slate-react.es.js"),l=n("./public/app/plugins/datasource/prometheus/promql.ts"),c=n("./public/app/plugins/datasource/loki/syntax.ts"),u=n("./.yarn/cache/prismjs-npm-1.25.0-8d60169ac0-04d8eae9d1.zip/node_modules/prismjs/prism.js"),d=n("./packages/grafana-ui/src/index.ts"),p=n("./public/app/features/alerting/unified/components/Well.tsx"),m=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const f=({language:e,expr:a})=>{const n=(0,t.useMemo)((()=>[(0,d.SlatePrism)({onlyIn:e=>"code_block"===e.type,getSyntax:()=>e},Object.assign({},u.languages,{[e]:"logql"===e?c.ZP:l.ZP}))]),[e]),s=(0,t.useMemo)((()=>(0,d.makeValue)(a)),[a]);return(0,m.jsx)(o.ML,{plugins:n,value:s,readOnly:!0})},g=({expression:e,rulesSource:a})=>{const n=(0,d.useStyles)(x);return(0,m.jsx)(p.t,{className:(0,s.cx)(n.well,"slate-query-field"),children:(0,r.jq)(a)?(0,m.jsx)(f,{expr:e,language:a.type===r.ye.Loki?"logql":"promql"}):e})},x=e=>({well:s.css`
    font-family: ${e.typography.fontFamily.monospace};
  `});function h(e){const{annotations:a,rulesSource:n,rule:t}=e,o=b();return(0,r.jq)(n)?(0,m.jsx)(i.C,{label:"Expression",horizontal:!0,className:(0,s.cx)({[o.exprRow]:!!a.length}),children:(0,m.jsx)(g,{expression:t.query,rulesSource:n})}):null}const b=()=>({exprRow:s.css`
    margin-bottom: 46px;
  `})},"./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx":(e,a,n)=>{n.d(a,{M:()=>f});var t=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=n("./public/app/features/alerting/unified/utils/rules.ts"),r=n("./public/app/features/alerting/unified/components/DetailsField.tsx"),i=(n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),n("./public/app/features/alerting/unified/components/AlertLabels.tsx")),o=n("./public/app/features/alerting/unified/components/AnnotationDetailsField.tsx"),l=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const c=({instance:e})=>{const a=(Object.entries(e.annotations||{})||[]).filter((([e,a])=>!!a.trim()));return(0,l.jsxs)("div",{children:[e.value&&(0,l.jsx)(r.C,{label:"Value",horizontal:!0,children:e.value}),a.map((([e,a])=>(0,l.jsx)(o.a,{annotationKey:e,value:a},e)))]})};var u=n("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),d=n("./public/app/features/alerting/unified/components/DynamicTable.tsx");const p=({instances:e})=>{const a=(0,t.useMemo)((()=>e.map((e=>({data:e,id:(0,s.pB)(e)}))).sort(((e,a)=>e.id.localeCompare(a.id)))),[e]);return(0,l.jsx)(d.t,{cols:m,isExpandable:!0,items:a,renderExpandedContent:({data:e})=>(0,l.jsx)(c,{instance:e})})},m=[{id:"state",label:"State",renderCell:({data:{state:e}})=>(0,l.jsx)(u.l,{state:e}),size:"80px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>(0,l.jsx)(i.s,{labels:e})},{id:"created",label:"Created",renderCell:({data:{activeAt:e}})=>(0,l.jsx)(l.Fragment,{children:e.startsWith("0001")?"-":e.substr(0,19).replace("T"," ")}),size:"150px"}];function f(e){var a;const{promRule:n}=e;return(0,s.x_)(n)&&null!==(a=n.alerts)&&void 0!==a&&a.length?(0,l.jsx)(r.C,{label:"Matching instances",horizontal:!0,children:(0,l.jsx)(p,{instances:n.alerts})}):null}},"./public/app/features/alerting/unified/components/rules/RuleHealth.tsx":(e,a,n)=>{n.d(a,{V:()=>l});var t,s,r=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=n("./packages/grafana-ui/src/index.ts"),o=(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js"));const l=({rule:e})=>{const a=(0,i.useStyles2)(c);return"err"===e.health||"error"===e.health?(0,o.jsx)(i.Tooltip,{theme:"error",content:e.lastError||"No error message provided.",children:(0,o.jsxs)("div",{className:a.warn,children:[t||(t=(0,o.jsx)(i.Icon,{name:"exclamation-triangle"})),s||(s=(0,o.jsx)("span",{children:"error"}))]})}):(0,o.jsx)(o.Fragment,{children:e.health})},c=e=>({warn:r.css`
    display: inline-flex;
    flex-direction: row;
    color: ${e.colors.warning.text};
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})},"./public/app/features/alerting/unified/components/rules/RuleState.tsx":(e,a,n)=>{n.d(a,{p:()=>m});var t,s,r=n("./.yarn/__virtual__/@emotion-css-virtual-9fd25d72e0/0/cache/@emotion-css-npm-11.1.3-72aa05c30f-dc50283f65.zip/node_modules/@emotion/css/dist/emotion-css.esm.js"),i=n("./packages/grafana-data/src/index.ts"),o=n("./packages/grafana-ui/src/index.ts"),l=n("./public/app/types/unified-alerting-dto.ts"),c=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),u=n("./public/app/features/alerting/unified/utils/rules.ts"),d=n("./public/app/features/alerting/unified/components/rules/AlertStateTag.tsx"),p=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const m=({rule:e,isDeleting:a,isCreating:n})=>{const r=(0,o.useStyles2)(f),{promRule:m}=e,g=(0,c.useMemo)((()=>{var e;if(m&&(0,u.x_)(m)&&null!==(e=m.alerts)&&void 0!==e&&e.length&&m.state!==l.x_.Inactive){const e=(0,u.ub)(m);if(e)return(0,p.jsxs)("span",{title:String(e),className:r.for,children:["for"," ",(0,i.intervalToAbbreviatedDurationString)({start:e,end:new Date},!1)]})}return null}),[m,r]);return a?t||(t=(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[(0,p.jsx)(o.Spinner,{}),"deleting"]})):n?s||(s=(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[" ",(0,p.jsx)(o.Spinner,{}),"creating"]})):m&&(0,u.x_)(m)?(0,p.jsxs)(o.HorizontalGroup,{align:"flex-start",children:[(0,p.jsx)(d.l,{state:m.state}),g]}):m&&(0,u.OP)(m)?(0,p.jsx)(p.Fragment,{children:"Recording rule"}):(0,p.jsx)(p.Fragment,{children:"n/a"})},f=e=>({for:r.css`
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},"./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts":(e,a,n)=>{n.d(a,{Z:()=>o});var t=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),s=n("./public/app/features/alerting/unified/utils/datasource.ts"),r=n("./public/app/features/alerting/unified/utils/rules.ts"),i=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function o(e){const a=(0,i._)((e=>e.promRules)),n=(0,i._)((e=>e.rulerRules)),o=(0,t.useRef)({}),c=(0,t.useMemo)((()=>{if(e){const a=(0,s.o_)(e);if(!a)throw new Error(`Unknown rules source: ${e}`);return[a]}return(0,s.h_)()}),[e]);return(0,t.useMemo)((()=>c.map((e=>{var t,i;const c=(0,s.jq)(e)?e.name:e,u=null===(t=a[c])||void 0===t?void 0:t.result,d=null===(i=n[c])||void 0===i?void 0:i.result,p=o.current[c];if(p&&p.promRules===u&&p.rulerRules===d)return p.result;const m={};Object.entries(d||{}).forEach((([a,n])=>{const t={rulesSource:e,name:a,groups:[]};m[a]=t,function(e,a){e.groups=a.map((a=>{const n={name:a.name,interval:a.interval,rules:[]};return n.rules=a.rules.map((a=>function(e,a,n){return(0,r.cG)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:a,group:n}:(0,r.yF)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:a,group:n}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:a,group:n}}(a,e,n))),n}))}(t,n)})),null==u||u.forEach((({name:a,groups:n})=>{!function(e,a){a.forEach((a=>{var n;let t=e.groups.find((e=>e.name===a.name));t||(t={name:a.name,rules:[]},e.groups.push(t)),(null!==(n=a.rules)&&void 0!==n?n:[]).forEach((a=>{const n=function(e,a,n){var t;if((0,s.HY)(n))return a.rules.find((a=>a.name===e.name));return null!==(t=a.rules.find((a=>!a.promRule&&l(a,e,!0))))&&void 0!==t?t:a.rules.find((a=>!a.promRule&&l(a,e,!1)))}(a,t,e.rulesSource);n?n.promRule=a:t.rules.push(function(e,a,n){return{name:e.name,query:e.query,labels:e.labels||{},annotations:(0,r.x_)(e)&&e.annotations||{},promRule:e,namespace:a,group:n}}(a,e,t))}))}))}(m[a]=m[a]||{rulesSource:e,name:a,groups:[]},n)}));const f=Object.values(m);return(0,s.HY)(e)&&f.forEach((e=>{e.groups=[{name:"default",rules:e.groups.flatMap((e=>e.rules)).sort(((e,a)=>e.name.localeCompare(a.name)))}]})),o.current[c]={promRules:u,rulerRules:d,result:f},f})).flat()),[a,n,c])}function l(e,a,n=!0){return e.name===a.name&&JSON.stringify([n?c(e.query):"",e.labels,e.annotations])===JSON.stringify([n?c(a.query):"",a.labels||{},(0,r.x_)(a)&&a.annotations||{}])}function c(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.substr(1,e.length-2)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}},"./public/app/features/alerting/unified/hooks/useFolder.ts":(e,a,n)=>{n.d(a,{W:()=>l});var t=n("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),s=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),r=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),i=n("./public/app/features/alerting/unified/state/actions.ts"),o=n("./public/app/features/alerting/unified/utils/redux.ts");function l(e){const a=(0,t.useDispatch)(),n=(0,s._)((e=>e.folders));if((0,r.useEffect)((()=>{e&&a((0,i.sw)(e))}),[a,e]),e){const a=n[e]||o.oq;return{folder:a.result,loading:a.loading}}return{loading:!1}}},"./public/app/features/alerting/unified/hooks/useIsRuleEditable.ts":(e,a,n)=>{n.d(a,{M:()=>d});var t=n("./public/app/core/services/context_srv.ts"),s=n("./public/app/features/alerting/unified/utils/rules.ts"),r=n("./public/app/features/alerting/unified/hooks/useFolder.ts"),i=n("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),o=n("./.yarn/__virtual__/react-redux-virtual-8e30c710ae/0/cache/react-redux-npm-7.2.5-cf7e365145-04ac4a4178.zip/node_modules/react-redux/es/index.js"),l=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),c=n("./public/app/features/alerting/unified/state/actions.ts"),u=n("./public/app/features/alerting/unified/utils/datasource.ts");function d(e,a){var n,d;const p=(0,i._)((e=>e.lotexSupportsRuleEditing)),m=(0,o.useDispatch)(),f=a&&(0,s.Pc)(a)?a.grafana_alert.namespace_uid:void 0,{folder:g,loading:x}=(0,r.W)(f);if((0,l.useEffect)((()=>{void 0===p[e]&&e!==u.GC&&m((0,c.Yb)(e))}),[e,p,m]),!a)return{isEditable:!1,loading:!1};if((0,s.Pc)(a)){if(!f)throw new Error(`Rule ${a.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);return{isEditable:null==g?void 0:g.canSave,loading:x}}return{isEditable:t.Vt.isEditor&&!(null===(n=p[e])||void 0===n||!n.result),loading:!(null===(d=p[e])||void 0===d||!d.loading)}}}}]);
//# sourceMappingURL=1065.e27ef9683b776a9e8e93.js.map