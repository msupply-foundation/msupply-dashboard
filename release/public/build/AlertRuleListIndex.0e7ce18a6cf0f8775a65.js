"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2461,4286],{"./public/app/core/hooks/useCleanup.ts":(e,s,a)=>{a.d(s,{x:()=>i});var t=a("./node_modules/react/index.js"),r=a("./node_modules/react-redux/es/index.js"),n=a("./public/app/core/actions/cleanUp.ts");function i(e){const s=(0,r.useDispatch)(),a=(0,t.useRef)(e);a.current=e,(0,t.useEffect)((()=>()=>{s((0,n.e)({stateSelector:a.current}))}),[s])}},"./public/app/core/hooks/useQueryParams.ts":(e,s,a)=>{a.d(s,{K:()=>i});var t=a("./packages/grafana-runtime/src/index.ts"),r=a("./node_modules/react/index.js"),n=a("./node_modules/react-router/esm/react-router.js");function i(){const{search:e}=(0,n.TH)();return[(0,r.useMemo)((()=>(0,t.locationSearchToObject)(e||"")),[e]),(0,r.useCallback)(((e,s)=>setImmediate((()=>t.locationService.partial(e,s)))),[])]}},"./public/app/features/alerting/AlertRuleList.tsx":(e,s,a)=>{a.r(s),a.d(s,{AlertRuleListUnconnected:()=>R,default:()=>_});var t=a("./node_modules/react/index.js"),r=a("./node_modules/react-redux/es/index.js"),n=a("./public/app/core/components/Page/Page.tsx"),i=a("./node_modules/react-highlight-words/dist/main.js"),l=a.n(i),o=a("./packages/grafana-ui/src/index.ts"),c=a("./node_modules/react/jsx-runtime.js");const u=({rule:e,search:s,onTogglePause:a})=>{const r=`${e.url}?editPanel=${e.panelId}&tab=alert`,n=(0,t.useCallback)((e=>(0,c.jsx)(l(),{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[s]},e)),[s]);return(0,c.jsxs)(o.Card,{heading:(0,c.jsx)("a",{href:r,children:n(e.name)}),children:[(0,c.jsx)(o.Card.Figure,{children:(0,c.jsx)(o.Icon,{size:"xl",name:e.stateIcon,className:`alert-rule-item__icon ${e.stateClass}`})}),(0,c.jsxs)(o.Card.Meta,{children:[(0,c.jsxs)("span",{children:[(0,c.jsxs)("span",{className:`${e.stateClass}`,children:[n(e.stateText)," "]},"text"),"for ",e.stateAge]},"state"),e.info?n(e.info):null]}),(0,c.jsxs)(o.Card.Actions,{children:[(0,c.jsx)(o.Button,{variant:"secondary",icon:"paused"===e.state?"play":"pause",onClick:a,children:"paused"===e.state?"Resume":"Pause"},"play"),(0,c.jsx)(o.LinkButton,{variant:"secondary",href:r,icon:"cog",children:"Edit alert"},"edit")]})]})};var d=a("./public/app/core/app_events.ts"),p=a("./public/app/core/selectors/navModel.ts"),m=a("./public/app/features/alerting/state/actions.ts");const g=e=>e.searchQuery,h=e=>{const s=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter((e=>s.test(e.name)||s.test(e.stateText)||s.test(e.info)))};var x,f,j,v,b=a("./packages/grafana-runtime/src/index.ts"),S=a("./public/app/features/alerting/state/reducers.ts"),y=a("./public/app/types/events.ts");function w({onDismiss:e}){return(0,c.jsx)(o.Modal,{title:"Adding an Alert",isOpen:!0,onDismiss:e,onClickBackdrop:e,children:x||(x=(0,c.jsxs)(o.VerticalGroup,{spacing:"sm",children:[(0,c.jsx)("img",{src:"public/img/alert_howto_new.png",alt:"link to how to alert image"}),(0,c.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),(0,c.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}function N(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}const k={getAlertRulesAsync:m.Au,setSearchQuery:S.ql,togglePauseAlertRule:m.en},C=(0,r.connect)((function(e){return{navModel:(0,p.h)(e.navIndex,"alert-list"),alertRules:h(e),search:g(e.alertRules),isLoading:e.alertRules.isLoading}}),k);class R extends t.PureComponent{constructor(...e){super(...e),N(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),N(this,"onStateFilterChanged",(e=>{b.locationService.partial({state:e.value})})),N(this,"onOpenHowTo",(()=>{d.Z.publish(new y.Dn({component:w}))})),N(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),N(this,"onTogglePause",(e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})})),N(this,"alertStateFilterOption",(({text:e,value:s})=>(0,c.jsx)("option",{value:s,children:e},s)))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{navModel:e,alertRules:s,search:a,isLoading:t}=this.props;return(0,c.jsx)(n.Z,{navModel:e,children:(0,c.jsxs)(n.Z.Contents,{isLoading:t,children:[(0,c.jsxs)("div",{className:"page-action-bar",children:[(0,c.jsx)("div",{className:"gf-form gf-form--grow",children:(0,c.jsx)(o.FilterInput,{placeholder:"Search alerts",value:a,onChange:this.onSearchQueryChange})}),(0,c.jsxs)("div",{className:"gf-form",children:[f||(f=(0,c.jsx)("label",{className:"gf-form-label",children:"States"})),(0,c.jsx)("div",{className:"width-13",children:(0,c.jsx)(o.Select,{menuShouldPortal:!0,options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),j||(j=(0,c.jsx)("div",{className:"page-action-bar__spacer"})),b.config.unifiedAlertingEnabled&&(v||(v=(0,c.jsx)(o.LinkButton,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),(0,c.jsx)(o.Button,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),(0,c.jsx)(o.VerticalGroup,{spacing:"none",children:s.map((e=>(0,c.jsx)(u,{rule:e,search:a,onTogglePause:()=>this.onTogglePause(e)},e.id)))})]})})}}const _=C(R)},"./public/app/features/alerting/AlertRuleListIndex.tsx":(e,s,a)=>{a.r(s),a.d(s,{default:()=>Ae});var t,r,n=a("./packages/grafana-runtime/src/index.ts"),i=a("./packages/grafana-data/src/index.ts"),l=a("./packages/grafana-ui/src/index.ts"),o=a("./node_modules/react/index.js"),c=a("./node_modules/react-redux/es/index.js"),u=a("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),d=a("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx"),p=a("./public/app/core/services/context_srv.ts"),m=a("./node_modules/react/jsx-runtime.js");const g=()=>p.Vt.hasEditPermissionInFolders||p.Vt.isEditor?t||(t=(0,m.jsx)(d.Z,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"New alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"})):r||(r=(0,m.jsx)(l.CallToActionCard,{message:"No rules exist yet.",callToActionElement:(0,m.jsx)("div",{})}));var h=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),x=a("./public/app/features/alerting/unified/utils/datasource.ts"),f=a("./public/app/features/alerting/unified/utils/rules.ts"),j=a("./public/app/features/alerting/unified/utils/misc.ts"),v=a("./public/app/core/hooks/useQueryParams.ts"),b=a("./public/app/types/unified-alerting-dto.ts"),S=a("./public/app/features/alerting/unified/utils/alertmanager.ts");const y=e=>(s,a)=>{const t=a.groups.reduce(w(e),[]);return t.length&&s.push(Object.assign({},a,{groups:t})),s},w=e=>(s,a)=>{const t=a.rules.filter((s=>{if(e.dataSource&&(0,f.Pc)(s.rulerRule)&&!N(s.rulerRule,e))return!1;if(e.queryString){var a;const t=e.queryString.toLocaleLowerCase(),r=null===(a=s.name)||void 0===a?void 0:a.toLocaleLowerCase().includes(t),n=(0,S.Zh)(e.queryString),i=(0,S.eD)(s.labels,n),l=s.promRule&&s.promRule.type===b.pz.Alerting&&s.promRule.alerts&&s.promRule.alerts.some((e=>(0,S.eD)(e.labels,n)));if(!(r||i||l))return!1}return!!(!e.alertState||s.promRule&&(0,f.x_)(s.promRule)&&s.promRule.state===e.alertState)}));return t.length&&s.push(Object.assign({},a,{rules:t})),s},N=(e,s)=>!s.dataSource||!!e.grafana_alert.data.find((e=>{if(!e.datasourceUid)return!1;const a=(0,n.getDataSourceSrv)().getInstanceSettings(e.datasourceUid);return(null==a?void 0:a.name)===s.dataSource}));var k,C,R,_,$,A=a("./public/app/features/alerting/unified/state/actions.ts"),F=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),I=a("./public/app/features/alerting/unified/hooks/useCombinedRuleNamespaces.ts"),T=a("./public/app/features/alerting/unified/utils/constants.ts"),P=a("./node_modules/lodash/lodash.js");const E=[{icon:"folder",label:"Groups",value:"group"},{icon:"heart-rate",label:"State",value:"state"}],L=e=>({container:F.css`
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid ${e.colors.border1};
      padding-bottom: ${e.spacing.sm};

      & > div {
        margin-bottom: ${e.spacing.sm};
      }
    `,inputWidth:F.css`
      width: 340px;
      flex-grow: 0;
    `,flexRow:F.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,spaceBetween:F.css`
      justify-content: space-between;
    `,rowChild:F.css`
      margin-right: ${e.spacing.sm};
      margin-top: ${e.spacing.sm};
    `,tooltip:F.css`
      margin: 0 ${e.spacing.xs};
    `,clearButton:F.css`
      margin-top: ${e.spacing.sm};
    `}),G=()=>{const[e,s]=(0,v.K)(),[a,t]=(0,o.useState)(Math.floor(100*Math.random())),r=`dataSource-${a}`,i=`queryString-${a}`,{dataSource:c,alertState:u,queryString:d}=(0,j.lC)(e),p=(0,l.useStyles)(L),g=Object.entries(b.x_).map((([e,s])=>({label:(0,f.SS)(s),value:s}))),h=(0,P.debounce)((e=>{const a=e.target;s({queryString:a.value||null})}),600),x=k||(k=(0,m.jsx)(l.Icon,{name:"search"}));return(0,m.jsxs)("div",{className:p.container,children:[(0,m.jsxs)("div",{className:p.inputWidth,children:[C||(C=(0,m.jsx)(l.Label,{children:"Select data source"})),(0,m.jsx)(n.DataSourcePicker,{alerting:!0,noDefault:!0,current:c,onChange:e=>{s({dataSource:e.name})}},r)]}),(0,m.jsxs)("div",{className:(0,F.cx)(p.flexRow,p.spaceBetween),children:[(0,m.jsxs)("div",{className:p.flexRow,children:[(0,m.jsxs)("div",{className:p.rowChild,children:[(0,m.jsxs)(l.Label,{children:[(0,m.jsx)(l.Tooltip,{content:R||(R=(0,m.jsxs)("div",{children:["Filter rules and alerts using label querying, ex:",(0,m.jsx)("pre",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]})),children:(0,m.jsx)(l.Icon,{name:"info-circle",className:p.tooltip})}),"Search by label"]}),(0,m.jsx)(l.Input,{className:p.inputWidth,prefix:x,onChange:h,defaultValue:d,placeholder:"Search","data-testid":"search-query-input"},i)]}),(0,m.jsxs)("div",{className:p.rowChild,children:[_||(_=(0,m.jsx)(l.Label,{children:"State"})),(0,m.jsx)(l.RadioButtonGroup,{options:g,value:u,onChange:e=>{s({alertState:e})}})]}),(0,m.jsxs)("div",{className:p.rowChild,children:[$||($=(0,m.jsx)(l.Label,{children:"View as"})),(0,m.jsx)(l.RadioButtonGroup,{options:E,value:String(e.view||"group"),onChange:e=>{s({view:e})}})]})]}),(c||u||d)&&(0,m.jsx)("div",{className:p.flexRow,children:(0,m.jsx)(l.Button,{className:p.clearButton,fullWidth:!1,icon:"times",variant:"secondary",onClick:()=>{s({alertState:null,queryString:null,dataSource:null}),setTimeout((()=>t(a+1)),100)},children:"Clear filters"})})]})]})};var O=a("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),M=a("./public/app/features/alerting/unified/components/rules/RulesTable.tsx"),q=a("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx"),B=a("./public/app/features/alerting/unified/hooks/useHasRuler.ts"),D=a("./public/app/core/utils/kbn.ts"),H=a("./public/app/features/alerting/unified/hooks/useFolder.ts"),U=a("./node_modules/pluralize/pluralize.js"),z=a.n(U);const V=({children:e,status:s})=>{const a=(0,l.useStyles2)(W);return(0,m.jsx)("span",{className:a[s],children:e||s})},W=e=>({[b.x_.Inactive]:F.css`
    color: ${e.colors.success.text};
  `,[b.x_.Pending]:F.css`
    color: ${e.colors.warning.text};
  `,[b.x_.Firing]:F.css`
    color: ${e.colors.error.text};
  `,neutral:F.css`
    color: ${e.colors.text.secondary};
  `});var Z,K;const Q={total:0,recording:0,[b.x_.Firing]:0,[b.x_.Pending]:0,[b.x_.Inactive]:0,error:0},J=({showInactive:e,showRecording:s,group:a,namespaces:t})=>{const r=(0,o.useMemo)((()=>{const e=Object.assign({},Q),s=s=>{var a,t;s.promRule&&(0,f.x_)(s.promRule)&&(e[s.promRule.state]+=1),"err"!==(null===(a=s.promRule)||void 0===a?void 0:a.health)&&"error"!==(null===(t=s.promRule)||void 0===t?void 0:t.health)||(e.error+=1),(s.promRule&&(0,f.OP)(s.promRule)||s.rulerRule&&(0,f.yF)(s.rulerRule))&&(e.recording+=1),e.total+=1};return a&&a.rules.forEach(s),t&&t.forEach((e=>e.groups.forEach((e=>e.rules.forEach(s))))),e}),[a,t]),n=[];return r[b.x_.Firing]&&n.push((0,m.jsxs)(V,{status:b.x_.Firing,children:[r[b.x_.Firing]," firing"]},"firing")),r.error&&n.push((0,m.jsxs)(V,{status:b.x_.Firing,children:[r.error," errors"]},"errors")),r[b.x_.Pending]&&n.push((0,m.jsxs)(V,{status:b.x_.Pending,children:[r[b.x_.Pending]," pending"]},"pending")),e&&r[b.x_.Inactive]&&n.push((0,m.jsxs)(V,{status:"neutral",children:[r[b.x_.Inactive]," normal"]},"inactive")),s&&r.recording&&n.push((0,m.jsxs)(V,{status:"neutral",children:[r.recording," recording"]},"recording")),(0,m.jsxs)("div",{children:[(0,m.jsxs)("span",{children:[r.total," ",z()("rule",r.total)]}),!!n.length&&(0,m.jsxs)(m.Fragment,{children:[Z||(Z=(0,m.jsx)("span",{children:": "})),n.reduce(((e,s,a)=>e.length?[e,(0,m.jsx)(o.Fragment,{children:K||(K=(0,m.jsx)("span",{children:", "}))},a),s]:[s]),[])]})]})};var Y=a("./public/app/features/alerting/unified/utils/time.ts"),X=a("./public/app/features/alerting/unified/utils/redux.ts"),ee=a("./public/app/core/hooks/useCleanup.ts");function se(e){var s,a;const{namespace:t,group:r,onClose:n}=e,i=(0,l.useStyles2)(ae),u=(0,c.useDispatch)(),{loading:d,error:p,dispatched:g}=null!==(s=(0,h._)((e=>e.updateLotexNamespaceAndGroup)))&&void 0!==s?s:X.oq,f=(0,o.useMemo)((()=>{var e;return{namespaceName:t.name,groupName:r.name,groupInterval:null!==(e=r.interval)&&void 0!==e?e:""}}),[t,r]);(0,o.useEffect)((()=>{!g||d||p||n()}),[g,d,n,p]),(0,ee.x)((e=>e.unifiedAlerting.updateLotexNamespaceAndGroup));return(0,m.jsx)(l.Modal,{className:i.modal,isOpen:!0,title:"Edit namespace or rule group",onDismiss:n,onClickBackdrop:n,children:(0,m.jsx)(l.Form,{defaultValues:f,onSubmit:e=>{u((0,A.hv)({rulesSourceName:(0,x.EG)(t.rulesSource),groupName:r.name,newGroupName:e.groupName,namespaceName:t.name,newNamespaceName:e.namespaceName,groupInterval:e.groupInterval||void 0}))},children:({register:e,errors:s,formState:{isDirty:t}})=>{var r,i,o;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Field,{label:"Namespace",invalid:!!s.namespaceName,error:null===(r=s.namespaceName)||void 0===r?void 0:r.message,children:(0,m.jsx)(l.Input,Object.assign({id:"namespaceName"},e("namespaceName",{required:"Namespace name is required."})))}),(0,m.jsx)(l.Field,{label:"Rule group",invalid:!!s.groupName,error:null===(i=s.groupName)||void 0===i?void 0:i.message,children:(0,m.jsx)(l.Input,Object.assign({id:"groupName"},e("groupName",{required:"Rule group name is required."})))}),(0,m.jsx)(l.Field,{label:"Rule group evaluation interval",invalid:!!s.groupInterval,error:null===(o=s.groupInterval)||void 0===o?void 0:o.message,children:(0,m.jsx)(l.Input,Object.assign({id:"groupInterval",placeholder:"1m"},e("groupInterval",{pattern:Y.lR})))}),(0,m.jsxs)(l.Modal.ButtonRow,{children:[a||(a=(0,m.jsx)(l.Button,{variant:"secondary",type:"button",disabled:d,onClick:n,fill:"outline",children:"Close"})),(0,m.jsx)(l.Button,{type:"submit",disabled:!t||d,children:d?"Saving...":"Save changes"})]})]})}},JSON.stringify(f))})}const ae=()=>({modal:F.css`
    max-width: 560px;
  `});var te;const re=o.memo((({group:e,namespace:s})=>{var a;const{rulesSource:t}=s,r=(0,l.useStyles2)(ne),[n,i]=(0,o.useState)(!0),[c,u]=(0,o.useState)(!1),d=(0,B.h)(),p=null===(a=e.rules[0])||void 0===a?void 0:a.rulerRule,g=p&&(0,f.Pc)(p)&&p.grafana_alert.namespace_uid||void 0,{folder:h}=(0,H.W)(g),j=[];if(d(t)&&!e.rules.find((e=>!!e.rulerRule)))j.push(te||(te=(0,m.jsxs)(l.HorizontalGroup,{children:[(0,m.jsx)(l.Spinner,{}),"deleting"]},"is-deleting")));else if(t===x.GC){if(g){const e=`/dashboards/f/${g}/${D.Z.slugifyForUrl(s.name)}`;null!=h&&h.canSave&&j.push((0,m.jsx)(q.A,{icon:"pen",tooltip:"edit",to:e+"/settings",target:"__blank"},"edit")),null!=h&&h.canAdmin&&j.push((0,m.jsx)(q.A,{icon:"lock",tooltip:"manage permissions",to:e+"/permissions",target:"__blank"},"manage-perms"))}}else d(t)&&j.push((0,m.jsx)(q.A,{"data-testid":"edit-group",icon:"pen",tooltip:"edit",onClick:()=>u(!0)},"edit"));const v=(0,x.jq)(t)?`${s.name} > ${e.name}`:s.name;return(0,m.jsxs)("div",{className:r.wrapper,"data-testid":"rule-group",children:[(0,m.jsxs)("div",{className:r.header,"data-testid":"rule-group-header",children:[(0,m.jsx)(O.U,{className:r.collapseToggle,isCollapsed:n,onToggle:i,"data-testid":"group-collapse-toggle"}),(0,m.jsx)(l.Icon,{name:n?"folder":"folder-open"}),(0,x.jq)(t)&&(0,m.jsx)(l.Tooltip,{content:t.name,placement:"top",children:(0,m.jsx)("img",{className:r.dataSourceIcon,src:t.meta.info.logos.small})}),(0,m.jsx)("h6",{className:r.heading,children:v}),(0,m.jsx)("div",{className:r.spacer}),(0,m.jsx)("div",{className:r.headerStats,children:(0,m.jsx)(J,{showInactive:!1,group:e})}),!!j.length&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:r.actionsSeparator,children:"|"}),(0,m.jsx)("div",{className:r.actionIcons,children:j})]})]}),!n&&(0,m.jsx)(M.i,{showSummaryColumn:!0,className:r.rulesTable,showGuidelines:!0,rules:e.rules}),c&&(0,m.jsx)(se,{group:e,namespace:s,onClose:()=>u(!1)})]})}));re.displayName="RulesGroup";const ne=e=>({wrapper:F.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,header:F.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} 0;
    background-color: ${e.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:F.css`
    span {
      vertical-align: middle;
    }

    ${e.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${e.spacing(1)};
    }
  `,heading:F.css`
    margin-left: ${e.spacing(1)};
    margin-bottom: 0;
  `,spacer:F.css`
    flex: 1;
  `,collapseToggle:F.css`
    background: none;
    border: none;
    margin-top: -${e.spacing(1)};
    margin-bottom: -${e.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:F.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
    margin-left: ${e.spacing(2)};
  `,dataSourceOrigin:F.css`
    margin-right: 1em;
    color: ${e.colors.text.disabled};
  `,actionsSeparator:F.css`
    margin: 0 ${e.spacing(2)};
  `,actionIcons:F.css`
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `,rulesTable:F.css`
    margin-top: ${e.spacing(3)};
  `});var ie,le,oe,ce;const ue=({namespaces:e})=>{const s=(0,l.useStyles)(de),a=(0,h._)((e=>e.promRules)),t=(0,o.useMemo)(x.Eu,[]),r=(0,o.useMemo)((()=>t.filter((e=>{var s;return null===(s=a[e.name])||void 0===s?void 0:s.loading}))),[a,t]);return(0,m.jsxs)("section",{className:s.wrapper,children:[(0,m.jsxs)("div",{className:s.sectionHeader,children:[ie||(ie=(0,m.jsx)("h5",{children:"Cortex / Loki"})),r.length?(0,m.jsx)(l.LoadingPlaceholder,{className:s.loader,text:`Loading rules from ${r.length} ${z()("source",r.length)}`}):le||(le=(0,m.jsx)("div",{}))]}),e.map((e=>{const{groups:s,rulesSource:a}=e;return s.map((s=>(0,m.jsx)(re,{group:s,namespace:e},`${(0,x.EG)(a)}-${name}-${s.name}`)))})),0===(null==e?void 0:e.length)&&!!t.length&&(oe||(oe=(0,m.jsx)("p",{children:"No rules found."}))),!t.length&&(ce||(ce=(0,m.jsx)("p",{children:"There are no Prometheus or Loki datas sources configured."})))]})},de=e=>({loader:F.css`
    margin-bottom: 0;
  `,sectionHeader:F.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:F.css`
    margin-bottom: ${e.spacing.xl};
  `});var pe,me,ge;const he=({namespaces:e})=>{const s=(0,l.useStyles)(xe),{loading:a}=(0,h._)((e=>e.promRules[x.GC]||X.oq));return(0,m.jsxs)("section",{className:s.wrapper,children:[(0,m.jsxs)("div",{className:s.sectionHeader,children:[pe||(pe=(0,m.jsx)("h5",{children:"Grafana"})),a?(0,m.jsx)(l.LoadingPlaceholder,{className:s.loader,text:"Loading..."}):me||(me=(0,m.jsx)("div",{}))]}),null==e?void 0:e.map((e=>e.groups.map((s=>(0,m.jsx)(re,{group:s,namespace:e},`${e.name}-${s.name}`))))),0===(null==e?void 0:e.length)&&(ge||(ge=(0,m.jsx)("p",{children:"No rules found."})))]})},xe=e=>({loader:F.css`
    margin-bottom: 0;
  `,sectionHeader:F.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:F.css`
    margin-bottom: ${e.spacing.xl};
  `}),fe=({rules:e,state:s,defaultCollapsed:a=!1})=>{const[t,r]=(0,o.useState)(a),n=(0,l.useStyles2)(je);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("h4",{className:n.header,children:[(0,m.jsx)(O.U,{className:n.collapseToggle,size:"xxl",isCollapsed:t,onToggle:()=>r(!t)}),(0,f.SS)(s)," (",e.length,")"]}),!t&&(0,m.jsx)(M.i,{className:n.rulesTable,rules:e,showGroupColumn:!0})]})},je=e=>({collapseToggle:F.css`
    vertical-align: middle;
  `,header:F.css`
    margin-top: ${e.spacing(2)};
  `,rulesTable:F.css`
    margin-top: ${e.spacing(3)};
  `});var ve=a("./node_modules/react-router/esm/react-router.js");function be(){const[e,s]=(0,o.useState)(!1),[a,t]=(0,o.useState)(!1),r=(0,h._)((e=>e.promRules)),n=(0,h._)((e=>e.rulerRules)),i=(0,l.useStyles2)(Se),c=(0,o.useMemo)((()=>{var e,s;const[a,t]=[r,n].map((e=>(0,x.Eu)().reduce(((s,a)=>{var t;const r=null===(t=e[a.name])||void 0===t?void 0:t.error;return e[a.name]&&r&&!(0,f.m$)(e[a.name])?[...s,{dataSource:a,error:r}]:s}),[]))),i=null===(e=r[x.GC])||void 0===e?void 0:e.error,l=null===(s=n[x.GC])||void 0===s?void 0:s.error,o=[];return i&&o.push((0,m.jsxs)(m.Fragment,{children:["Failed to load Grafana rules state: ",i.message||"Unknown error."]})),l&&o.push((0,m.jsxs)(m.Fragment,{children:["Failed to load Grafana rules config: ",l.message||"Unknown error."]})),a.forEach((({dataSource:e,error:s})=>o.push((0,m.jsxs)(m.Fragment,{children:["Failed to load rules state from ",(0,m.jsx)("a",{href:`datasources/edit/${e.uid}`,children:e.name}),":"," ",s.message||"Unknown error."]})))),t.forEach((({dataSource:e,error:s})=>o.push((0,m.jsxs)(m.Fragment,{children:["Failed to load rules config from ",(0,m.jsx)("a",{href:"datasources/edit/${dataSource.uid}",children:e.name}),":"," ",s.message||"Unknown error."]})))),o}),[r,n]);return(0,m.jsx)(m.Fragment,{children:!!c.length&&!a&&(0,m.jsxs)(l.Alert,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",onRemove:()=>t(!0),children:[e&&c.map(((e,s)=>(0,m.jsx)("div",{children:e},s))),!e&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:c[0]}),c.length>=2&&(0,m.jsxs)(l.Button,{className:i.moreButton,variant:"link",icon:"angle-right",size:"sm",onClick:()=>s(!0),children:[c.length-1," more ",z()("error",c.length-1)]})]})]})})}const Se=e=>({moreButton:F.css`
    padding: 0;
  `});var ye,we,Ne,ke;const Ce={groups:({namespaces:e})=>{const[s,a]=(0,o.useMemo)((()=>{const s=e.map((e=>Object.assign({},e,{groups:e.groups.sort(((e,s)=>e.name.localeCompare(s.name)))}))).sort(((e,s)=>e.name.localeCompare(s.name)));return[s.filter((e=>(0,x.HY)(e.rulesSource))),s.filter((e=>(0,x.jq)(e.rulesSource)))]}),[e]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(he,{namespaces:s}),(0,m.jsx)(ue,{namespaces:a})]})},state:({namespaces:e})=>{const s=(0,j.lC)((0,v.K)()[0]),a=(0,o.useMemo)((()=>{const s={[b.x_.Firing]:[],[b.x_.Inactive]:[],[b.x_.Pending]:[]};return e.forEach((e=>e.groups.forEach((e=>e.rules.forEach((e=>{e.promRule&&(0,f.x_)(e.promRule)&&s[e.promRule.state].push(e)})))))),Object.values(s).forEach((e=>e.sort(((e,s)=>e.name.localeCompare(s.name))))),s}),[e]);return(0,m.jsxs)(m.Fragment,{children:[(!s.alertState||s.alertState===b.x_.Firing)&&(0,m.jsx)(fe,{state:b.x_.Firing,rules:a[b.x_.Firing]}),(!s.alertState||s.alertState===b.x_.Pending)&&(0,m.jsx)(fe,{state:b.x_.Pending,rules:a[b.x_.Pending]}),(!s.alertState||s.alertState===b.x_.Inactive)&&(0,m.jsx)(fe,{defaultCollapsed:s.alertState!==b.x_.Inactive,state:b.x_.Inactive,rules:a[b.x_.Inactive]})]})}},Re=(0,l.withErrorBoundary)((()=>{const e=(0,c.useDispatch)(),s=(0,l.useStyles2)(_e),a=(0,o.useMemo)(x.mA,[]),t=(0,ve.TH)(),[r]=(0,v.K)(),n=Ce[r.view]?r.view:"groups",d=Ce[n];(0,o.useEffect)((()=>{e((0,A.ei)());const s=setInterval((()=>e((0,A.ei)())),T.p4);return()=>{clearInterval(s)}}),[e]);const f=(0,h._)((e=>e.promRules)),b=(0,h._)((e=>e.rulerRules)),S=a.some((e=>{var s,a;return(null===(s=f[e])||void 0===s?void 0:s.dispatched)||(null===(a=b[e])||void 0===a?void 0:a.dispatched)})),w=a.some((e=>{var s,a;return(null===(s=f[e])||void 0===s?void 0:s.loading)||(null===(a=b[e])||void 0===a?void 0:a.loading)})),N=a.some((e=>{var s,a,t,r,n;return(null===(s=f[e])||void 0===s||null===(a=s.result)||void 0===a?void 0:a.length)&&!(null!==(t=f[e])&&void 0!==t&&t.error)||Object.keys((null===(r=b[e])||void 0===r?void 0:r.result)||{}).length&&!(null!==(n=b[e])&&void 0!==n&&n.error)})),k=S&&!w&&!N,C=(e=>{const[s]=(0,v.K)(),a=(0,j.lC)(s);return(0,o.useMemo)((()=>a.queryString||a.dataSource||a.alertState?e.filter((({rulesSource:e})=>!a.dataSource||!(0,x.jq)(e)||e.name===a.dataSource)).reduce(y(a),[]):e),[e,a])})((0,I.Z)());return(0,m.jsxs)(u.J,{pageId:"alert-list",isLoading:w&&!N,children:[ye||(ye=(0,m.jsx)(be,{})),!k&&(0,m.jsxs)(m.Fragment,{children:[we||(we=(0,m.jsx)(G,{})),(0,m.jsx)("div",{className:s.break}),(0,m.jsxs)("div",{className:s.buttonsContainer,children:[(0,m.jsx)(J,{showInactive:!0,showRecording:!0,namespaces:C}),Ne||(Ne=(0,m.jsx)("div",{})),(p.Vt.hasEditPermissionInFolders||p.Vt.isEditor)&&(0,m.jsx)(l.LinkButton,{href:i.urlUtil.renderUrl("alerting/new",{returnTo:t.pathname+t.search}),icon:"plus",children:"New alert rule"})]})]}),k&&(ke||(ke=(0,m.jsx)(g,{}))),N&&(0,m.jsx)(d,{namespaces:C})]})}),{style:"page"}),_e=e=>({break:F.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing(2)};
    border-bottom: solid 1px ${e.colors.border.medium};
  `,buttonsContainer:F.css`
    margin-bottom: ${e.spacing(2)};
    display: flex;
    justify-content: space-between;
  `});var $e=a("./public/app/features/alerting/AlertRuleList.tsx");const Ae=n.config.unifiedAlertingEnabled?Re:$e.default},"./public/app/features/alerting/state/actions.ts":(e,s,a)=>{a.d(s,{Au:()=>l,en:()=>o,C2:()=>c,fg:()=>u,c1:()=>d,fA:()=>p,tk:()=>m});var t=a("./packages/grafana-data/src/index.ts"),r=a("./packages/grafana-runtime/src/index.ts"),n=a("./public/app/core/core.ts"),i=a("./public/app/features/alerting/state/reducers.ts");function l(e){return async s=>{s((0,i.gz)());const a=await(0,r.getBackendSrv)().get("/api/alerts",e);s((0,i.Oc)(a))}}function o(e,s){return async a=>{await(0,r.getBackendSrv)().post(`/api/alerts/${e}/pause`,s);a(l({state:(r.locationService.getSearchObject().state||"all").toString()}))}}function c(e){return async s=>{try{await(0,r.getBackendSrv)().post("/api/alert-notifications",e),n.h$.emit(t.AppEvents.alertSuccess,["Notification created"]),r.locationService.push("/alerting/notifications")}catch(e){n.h$.emit(t.AppEvents.alertError,[e.data.error])}}}function u(e){return async s=>{try{await(0,r.getBackendSrv)().put(`/api/alert-notifications/${e.id}`,e),n.h$.emit(t.AppEvents.alertSuccess,["Notification updated"])}catch(e){n.h$.emit(t.AppEvents.alertError,[e.data.error])}}}function d(e){return async(s,a)=>{const t=a().notificationChannel.notificationChannel;await(0,r.getBackendSrv)().post("/api/alert-notifications/test",Object.assign({id:t.id},e))}}function p(){return async e=>{const s=(await(0,r.getBackendSrv)().get("/api/alert-notifiers")).sort(((e,s)=>e.name>s.name?1:-1));e((0,i.T2)(s))}}function m(e){return async s=>{await s(p());const a=await(0,r.getBackendSrv)().get(`/api/alert-notifications/${e}`);s((0,i.K)(a))}}},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,s,a)=>{a.d(s,{J:()=>l});a("./node_modules/react/index.js");var t=a("./public/app/core/components/Page/Page.tsx"),r=a("./public/app/core/selectors/navModel.ts"),n=a("./node_modules/react-redux/es/index.js"),i=a("./node_modules/react/jsx-runtime.js");const l=({children:e,pageId:s,isLoading:a})=>{const l=(0,r.h)((0,n.useSelector)((e=>e.navIndex)),s);return(0,i.jsx)(t.Z,{navModel:l,children:(0,i.jsx)(t.Z.Contents,{isLoading:a,children:e})})}},"./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx":(e,s,a)=>{a.d(s,{F:()=>o});var t=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),r=a("./packages/grafana-ui/src/index.ts"),n=(a("./node_modules/react/index.js"),a("./public/app/features/alerting/unified/components/DynamicTable.tsx")),i=a("./node_modules/react/jsx-runtime.js");const l=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:s}=e,a=function(e,s){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);const o=(0,r.useStyles2)(c);return(0,i.jsx)(n.t,Object.assign({renderExpandedContent:s?(e,a,r)=>(0,i.jsxs)(i.Fragment,{children:[!(a===r.length-1)&&(0,i.jsx)("div",{className:(0,t.cx)(o.contentGuideline,o.guideline)}),s(e,a,r)]}):void 0,renderPrefixHeader:()=>(0,i.jsx)("div",{className:o.relative,children:(0,i.jsx)("div",{className:(0,t.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,s,a)=>(0,i.jsxs)("div",{className:o.relative,children:[(0,i.jsx)("div",{className:(0,t.cx)(o.topGuideline,o.guideline)}),!(s===a.length-1)&&(0,i.jsx)("div",{className:(0,t.cx)(o.bottomGuideline,o.guideline)})]})},a))},c=e=>({relative:t.css`
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
  `})},"./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":(e,s,a)=>{a.d(s,{A:()=>o});var t=a("./packages/grafana-ui/src/index.ts"),r=(a("./node_modules/react/index.js"),a("./node_modules/@emotion/css/dist/emotion-css.esm.js")),n=a("./node_modules/react-router-dom/esm/react-router-dom.js"),i=a("./node_modules/react/jsx-runtime.js");const l=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];const o=e=>{var s;let{tooltip:a,icon:o,to:u,target:d,onClick:p,className:m,tooltipPlacement:g="top"}=e,h=function(e,s){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],s.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);const x=(0,i.jsx)(t.Icon,Object.assign({className:(0,r.cx)((0,t.useStyles)(c),m),onClick:p,name:o},h));return(0,i.jsx)(t.Tooltip,{content:a,placement:g,children:u?s||(s=(0,i.jsx)(n.Link,{to:u,target:d,children:x})):x})},c=()=>r.css`
  cursor: pointer;
`},"./public/app/features/alerting/unified/components/rules/RulesTable.tsx":(e,s,a)=>{a.d(s,{i:()=>w});var t=a("./packages/grafana-ui/src/index.ts"),r=a("./node_modules/react/index.js"),n=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=a("./public/app/features/alerting/unified/components/AlertLabels.tsx"),l=a("./public/app/features/alerting/unified/components/DetailsField.tsx"),o=a("./public/app/features/alerting/unified/components/rules/RuleDetailsActionButtons.tsx"),c=a("./public/app/features/alerting/unified/components/rules/RuleDetailsDataSources.tsx"),u=a("./public/app/features/alerting/unified/components/rules/RuleDetailsMatchingInstances.tsx"),d=a("./public/app/features/alerting/unified/components/rules/RuleDetailsExpression.tsx"),p=a("./public/app/features/alerting/unified/components/rules/RuleDetailsAnnotations.tsx"),m=a("./node_modules/react/jsx-runtime.js");const g=({rule:e})=>{const s=(0,t.useStyles2)(h),{promRule:a,namespace:{rulesSource:r}}=e,n=Object.entries(e.annotations).filter((([e,s])=>!!s.trim()));return(0,m.jsxs)("div",{children:[(0,m.jsx)(o.f,{rule:e,rulesSource:r}),(0,m.jsxs)("div",{className:s.wrapper,children:[(0,m.jsxs)("div",{className:s.leftSide,children:[!!e.labels&&!!Object.keys(e.labels).length&&(0,m.jsx)(l.C,{label:"Labels",horizontal:!0,children:(0,m.jsx)(i.s,{labels:e.labels})}),(0,m.jsx)(d.C,{rulesSource:r,rule:e,annotations:n}),(0,m.jsx)(p.J,{annotations:n})]}),(0,m.jsx)("div",{className:s.rightSide,children:(0,m.jsx)(c.C,{rulesSource:r,rule:e})})]}),(0,m.jsx)(u.M,{promRule:a})]})},h=e=>({wrapper:n.css`
    display: flex;
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:n.css`
    flex: 1;
  `,rightSide:n.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var x=a("./public/app/features/alerting/unified/utils/datasource.ts"),f=a("./public/app/features/alerting/unified/hooks/useHasRuler.ts"),j=a("./public/app/features/alerting/unified/utils/constants.ts"),v=a("./public/app/features/alerting/unified/components/rules/RuleState.tsx"),b=a("./public/app/features/alerting/unified/components/rules/RuleHealth.tsx"),S=a("./public/app/features/alerting/unified/components/DynamicTable.tsx"),y=a("./public/app/features/alerting/unified/components/DynamicTableWithGuidelines.tsx");const w=({rules:e,className:s,showGuidelines:a=!1,emptyMessage:i="No rules found.",showGroupColumn:l=!1,showSummaryColumn:o=!1})=>{const c=(0,t.useStyles2)(N),u=(0,n.cx)(c.wrapper,s,{[c.wrapperMargin]:a}),d=(0,r.useMemo)((()=>{const s=[];return e.map(((e,a)=>{var t;let r=JSON.stringify([null===(t=e.promRule)||void 0===t?void 0:t.type,e.labels,e.query,e.name,e.annotations]);return s.includes(r)&&(r+=`-${a}`),s.push(r),{id:r,data:e}}))}),[e]),p=function(e,s){const a=(0,f.h)();return(0,r.useMemo)((()=>{const t=[{id:"state",label:"State",renderCell:({data:e})=>{const{namespace:s}=e,{rulesSource:t}=s,{promRule:r,rulerRule:n}=e,i=!(!a(t)||!r||n),l=!(!a(t)||!n||r);return(0,m.jsx)(v.p,{rule:e,isDeleting:i,isCreating:l})},size:"165px"},{id:"name",label:"Name",renderCell:({data:e})=>e.name,size:5},{id:"health",label:"Health",renderCell:({data:{promRule:e}})=>e?(0,m.jsx)(b.V,{rule:e}):null,size:"75px"}];return e&&t.push({id:"summary",label:"Summary",renderCell:({data:e})=>{var s;return null!==(s=e.annotations[j.q6.summary])&&void 0!==s?s:""},size:5}),s&&t.push({id:"group",label:"Group",renderCell:({data:e})=>{const{namespace:s,group:a}=e,{rulesSource:t}=s;return(0,x.jq)(t)?`${s.name} > ${a.name}`:s.name},size:5}),t}),[a,e,s])}(o,l);if(!e.length)return(0,m.jsx)("div",{className:(0,n.cx)(u,c.emptyMessage),children:i});const h=a?y.F:S.t;return(0,m.jsx)("div",{className:u,"data-testid":"rules-table",children:(0,m.jsx)(h,{cols:p,isExpandable:!0,items:d,renderExpandedContent:({data:e})=>(0,m.jsx)(g,{rule:e})})})},N=e=>({wrapperMargin:n.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:n.css`
    padding: ${e.spacing(1)};
  `,wrapper:n.css`
    width: auto;
    background-color: ${e.colors.background.secondary};
    border-radius: ${e.shape.borderRadius()};
  `,table:n.css`
    width: 100%;
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};

    th {
      padding: ${e.spacing(1)};
    }

    td + td {
      padding: ${e.spacing(0,1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:n.css`
    background-color: ${e.colors.background.primary};
  `,state:n.css`
    width: 110px;
  `})},"./public/app/features/alerting/unified/hooks/useHasRuler.ts":(e,s,a)=>{a.d(s,{h:()=>i});var t=a("./node_modules/react/index.js"),r=a("./public/app/features/alerting/unified/utils/datasource.ts"),n=a("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts");function i(){const e=(0,n._)((e=>e.rulerRules));return(0,t.useCallback)((s=>{var a;const t="string"==typeof s?s:s.name;return t===r.GC||!(null===(a=e[t])||void 0===a||!a.result)}),[e])}}}]);
//# sourceMappingURL=AlertRuleListIndex.0e7ce18a6cf0f8775a65.js.map