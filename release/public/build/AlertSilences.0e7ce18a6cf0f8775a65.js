"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1783],{"./public/app/core/hooks/useCleanup.ts":(e,s,t)=>{t.d(s,{x:()=>i});var a=t("./node_modules/react/index.js"),n=t("./node_modules/react-redux/es/index.js"),r=t("./public/app/core/actions/cleanUp.ts");function i(e){const s=(0,n.useDispatch)(),t=(0,a.useRef)(e);t.current=e,(0,a.useEffect)((()=>()=>{s((0,r.e)({stateSelector:t.current}))}),[s])}},"./public/app/core/hooks/useQueryParams.ts":(e,s,t)=>{t.d(s,{K:()=>i});var a=t("./packages/grafana-runtime/src/index.ts"),n=t("./node_modules/react/index.js"),r=t("./node_modules/react-router/esm/react-router.js");function i(){const{search:e}=(0,r.TH)();return[(0,n.useMemo)((()=>(0,a.locationSearchToObject)(e||"")),[e]),(0,n.useCallback)(((e,s)=>setImmediate((()=>a.locationService.partial(e,s)))),[])]}},"./public/app/features/alerting/unified/Silences.tsx":(e,s,t)=>{t.r(s),t.d(s,{default:()=>Ge});var a=t("./node_modules/react/index.js"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/react-router/esm/react-router.js"),l=t("./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx"),c=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),o=t("./public/app/plugins/datasource/alertmanager/types.ts"),d=t("./packages/grafana-data/src/index.ts"),u=t("./public/app/features/alerting/unified/components/CollapseToggle.tsx"),m=t("./packages/grafana-ui/src/components/Button/index.ts"),p=t("./node_modules/react/jsx-runtime.js");const x=["className"];const h=e=>{let{className:s}=e,t=function(e,s){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,x);return(0,p.jsx)(m.zx,Object.assign({variant:"secondary",size:"xs",className:(0,c.cx)((0,n.useStyles)(g),s)},t))},g=e=>c.css`
  height: 24px;
  font-size: ${e.typography.size.sm};
`;var j,f=t("./public/app/features/alerting/unified/components/rules/ActionIcon.tsx"),v=t("./public/app/features/alerting/unified/styles/table.ts"),b=t("./public/app/features/alerting/unified/components/AlertLabels.tsx"),S=t("./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx");const y=({alert:e,className:s})=>{const[t,r]=(0,a.useState)(!0),i=(0,n.useStyles2)(v.D),l=(0,d.toDuration)((0,d.dateTimeAsMoment)(e.endsAt).diff(e.startsAt)).asSeconds(),c=Object.entries(e.labels).reduce(((e,[s,t])=>("alertname"!==s&&"__alert_rule_title__"!==s||(e=t),e)),"");return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("tr",{className:s,children:[(0,p.jsx)("td",{children:(0,p.jsx)(u.U,{isCollapsed:t,onToggle:e=>r(e)})}),(0,p.jsx)("td",{children:(0,p.jsx)(S.G,{state:e.status.state})}),(0,p.jsxs)("td",{children:["for ",l," seconds"]}),(0,p.jsx)("td",{children:c}),(0,p.jsx)("td",{className:i.actionsCell,children:(0,p.jsx)(f.A,{icon:"chart-line",to:e.generatorURL,tooltip:"View in explorer"})})]}),!t&&(0,p.jsxs)("tr",{className:s,children:[j||(j=(0,p.jsx)("td",{})),(0,p.jsx)("td",{colSpan:5,children:(0,p.jsx)(b.s,{labels:e.labels})})]})]})};var A,N,w;const C=e=>({tableMargin:c.css`
    margin-bottom: ${e.spacing(1)};
  `,colState:c.css`
    width: 110px;
  `,colName:c.css`
    width: 65%;
  `}),k=({silencedAlerts:e})=>{const s=(0,n.useStyles2)(v.D),t=(0,n.useStyles2)(C);return e.length?(0,p.jsxs)("table",{className:(0,c.cx)(s.table,t.tableMargin),children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{className:s.colExpand}),(0,p.jsx)("col",{className:t.colState}),A||(A=(0,p.jsx)("col",{})),(0,p.jsx)("col",{className:t.colName}),N||(N=(0,p.jsx)("col",{}))]}),w||(w=(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{}),(0,p.jsx)("th",{children:"State"}),(0,p.jsx)("th",{}),(0,p.jsx)("th",{children:"Alert name"}),(0,p.jsx)("th",{children:"Actions"})]})})),(0,p.jsx)("tbody",{children:e.map(((e,t)=>(0,p.jsx)(y,{alert:e,className:t%2==0?s.evenRow:""},e.fingerprint)))})]}):null};var $=t("./public/app/features/alerting/unified/state/actions.ts"),D=t("./public/app/features/alerting/unified/components/silences/Matchers.tsx"),_=t("./public/app/features/alerting/unified/components/StateTag.tsx");const M={[o.As.Active]:"good",[o.As.Expired]:"neutral",[o.As.Pending]:"neutral"},T=({state:e})=>(0,p.jsx)(_.i,{state:M[e],children:e});var R,I,O,B,q,E,V,Z,L,F,P,Q,U=t("./public/app/features/alerting/unified/utils/misc.ts"),G=t("./public/app/core/services/context_srv.ts");const K=e=>({matchersCell:c.css`
    & > * + * {
      margin-left: ${e.spacing.xs};
    }
  `,actionsCell:c.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${e.spacing.sm};
    }
  `,alertRulesCell:c.css`
    vertical-align: top;
  `}),z=({silence:e,className:s,silencedAlerts:t,alertManagerSourceName:i})=>{const[l,o]=(0,a.useState)(!0),m=(0,r.useDispatch)(),x=(0,n.useStyles)(K),{status:g,matchers:j=[],startsAt:v,endsAt:b,comment:S,createdBy:y}=e,A="YYYY-MM-DD HH:mm",N=d.dateMath.parse(v),w=d.dateMath.parse(b),C=(0,d.intervalToAbbreviatedDurationString)({start:new Date(v),end:new Date(b)}),_=G.Vt.isEditor?4:3;return(0,p.jsxs)(a.Fragment,{children:[(0,p.jsxs)("tr",{className:s,"data-testid":"silence-table-row",children:[(0,p.jsx)("td",{children:(0,p.jsx)(u.U,{isCollapsed:l,onToggle:e=>o(e)})}),(0,p.jsx)("td",{children:(0,p.jsx)(T,{state:g.state})}),(0,p.jsx)("td",{className:x.matchersCell,children:(0,p.jsx)(D.g,{matchers:j})}),(0,p.jsx)("td",{"data-testid":"silenced-alerts",children:t.length}),(0,p.jsxs)("td",{children:[null==N?void 0:N.format(A)," ","-",R||(R=(0,p.jsx)("br",{})),null==w?void 0:w.format(A)]}),G.Vt.isEditor&&(0,p.jsxs)("td",{className:x.actionsCell,children:["expired"===g.state?(0,p.jsx)(n.Link,{href:(0,U.eQ)(`/alerting/silence/${e.id}/edit`,i),children:I||(I=(0,p.jsx)(h,{icon:"sync",children:"Recreate"}))}):(0,p.jsx)(h,{icon:"bell",onClick:()=>{m((0,$.yO)(i,e.id))},children:"Unsilence"}),"expired"!==g.state&&(0,p.jsx)(f.A,{to:(0,U.eQ)(`/alerting/silence/${e.id}/edit`,i),icon:"pen",tooltip:"edit"})]})]}),!l&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("tr",{className:s,children:[O||(O=(0,p.jsx)("td",{})),B||(B=(0,p.jsx)("td",{children:"Comment"})),(0,p.jsx)("td",{colSpan:_,children:S})]}),(0,p.jsxs)("tr",{className:s,children:[q||(q=(0,p.jsx)("td",{})),E||(E=(0,p.jsx)("td",{children:"Schedule"})),(0,p.jsx)("td",{colSpan:_,children:`${null==N?void 0:N.format(A)} - ${null==w?void 0:w.format(A)}`})]}),(0,p.jsxs)("tr",{className:s,children:[V||(V=(0,p.jsx)("td",{})),Z||(Z=(0,p.jsx)("td",{children:"Duration"})),(0,p.jsx)("td",{colSpan:_,children:C})]}),(0,p.jsxs)("tr",{className:s,children:[L||(L=(0,p.jsx)("td",{})),F||(F=(0,p.jsx)("td",{children:"Created by"})),(0,p.jsx)("td",{colSpan:_,children:y})]}),!!t.length&&(0,p.jsxs)("tr",{className:(0,c.cx)(s,x.alertRulesCell),children:[P||(P=(0,p.jsx)("td",{})),Q||(Q=(0,p.jsx)("td",{children:"Affected alerts"})),(0,p.jsx)("td",{colSpan:_,children:(0,p.jsx)(k,{silencedAlerts:t})})]})]})]})};var W,Y=t("./public/app/core/components/EmptyListCTA/EmptyListCTA.tsx");const H=({alertManagerSourceName:e})=>G.Vt.isEditor?(0,p.jsx)(Y.Z,{title:"You haven't created any silences yet",buttonIcon:"bell-slash",buttonLink:(0,U.eQ)("alerting/silence/new",e),buttonTitle:"New silence"}):W||(W=(0,p.jsx)(n.CallToActionCard,{callToActionElement:(0,p.jsx)("div",{}),message:"No silences found."}));var J,X,ee,se=t("./public/app/core/hooks/useQueryParams.ts"),te=t("./public/app/features/alerting/unified/utils/alertmanager.ts"),ae=t("./node_modules/lodash/lodash.js");const ne=Object.entries(o.As).map((([e,s])=>({label:e,value:s}))),re=()=>{const[e,s]=(0,a.useState)("queryString-"+100*Math.random()),[t,r]=(0,se.K)(),{queryString:i,silenceState:l}=(0,U.pF)(t),c=(0,n.useStyles2)(ie),o=(0,ae.debounce)((e=>{const s=e.target;r({queryString:s.value||null})}),400),d=!!(i&&i.length>3)&&0===(0,te.Zh)(i).length;return(0,p.jsxs)("div",{className:c.flexRow,children:[(0,p.jsx)(n.Field,{className:c.rowChild,label:(0,p.jsxs)("span",{className:c.fieldLabel,children:[J||(J=(0,p.jsx)(n.Tooltip,{content:(0,p.jsxs)("div",{children:["Filter silences by matchers using a comma separated list of matchers, ie:",(0,p.jsx)("pre",{children:"severity=critical, instance=~cluster-us-.+"})]}),children:(0,p.jsx)(n.Icon,{name:"info-circle"})}))," ","Search by matchers"]}),invalid:d,error:d?"Query must use valid matcher syntax":null,children:(0,p.jsx)(n.Input,{className:c.searchInput,prefix:X||(X=(0,p.jsx)(n.Icon,{name:"search"})),onChange:o,defaultValue:null!=i?i:"",placeholder:"Search","data-testid":"search-query-input"},e)}),(0,p.jsxs)("div",{className:c.rowChild,children:[ee||(ee=(0,p.jsx)(n.Label,{children:"State"})),(0,p.jsx)(n.RadioButtonGroup,{options:ne,value:l,onChange:e=>{r({silenceState:e})}})]}),(i||l)&&(0,p.jsx)("div",{className:c.rowChild,children:(0,p.jsx)(n.Button,{variant:"secondary",icon:"times",onClick:()=>{r({queryString:null,silenceState:null}),setTimeout((()=>s("")))},children:"Clear filters"})})]})},ie=e=>({searchInput:c.css`
    width: 360px;
  `,flexRow:c.css`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${e.spacing(2)};
    border-bottom: 1px solid ${e.colors.border.strong};
  `,rowChild:c.css`
    margin-right: ${e.spacing(1)};
    margin-bottom: 0;
    max-height: 52px;
  `,fieldLabel:c.css`
    font-size: 12px;
    font-weight: 500;
  `});var le,ce,oe,de,ue,me,pe,xe,he,ge,je,fe;const ve=e=>{const[s]=(0,se.K)();return(0,a.useMemo)((()=>{const{queryString:t,silenceState:a}=(0,U.lC)(s),n=null==s?void 0:s.silenceIds;return e.filter((e=>{if("string"==typeof n){if(!n.split(",").includes(e.id))return!1}if(t){if(!(0,te.Zh)(t).every((s=>{var t;return null===(t=e.matchers)||void 0===t?void 0:t.some((({name:e,value:t,isEqual:a,isRegex:n})=>s.name===e&&s.value===t&&s.isEqual===a&&s.isRegex===n))})))return!1}if(a){if(!(e.status.state===a))return!1}return!0}))}),[s,e])},be=e=>({topButtonContainer:c.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  `,addNewSilence:c.css`
    margin: ${e.spacing(2,0)};
  `,colState:c.css`
    width: 110px;
  `,colMatchers:c.css`
    width: 50%;
  `,callout:c.css`
    background-color: ${e.colors.background.secondary};
    border-top: 3px solid ${e.colors.info.border};
    border-radius: 2px;
    height: 62px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: ${e.spacing(2)};

    & > * {
      margin-left: ${e.spacing(1)};
    }
  `,calloutIcon:c.css`
    color: ${e.colors.info.text};
  `}),Se=({silences:e,alertManagerAlerts:s,alertManagerSourceName:t})=>{const a=(0,n.useStyles2)(be),r=(0,n.useStyles2)(v.D),[i]=(0,se.K)(),l=ve(e),{silenceState:c}=(0,U.lC)(i),d=!!l.length&&(void 0===c||c===o.As.Expired);return(0,p.jsxs)("div",{"data-testid":"silences-table",children:[!!e.length&&(0,p.jsxs)(p.Fragment,{children:[le||(le=(0,p.jsx)(re,{})),G.Vt.isEditor&&(0,p.jsx)("div",{className:a.topButtonContainer,children:(0,p.jsx)(n.Link,{href:(0,U.eQ)("/alerting/silence/new",t),children:(0,p.jsx)(n.Button,{className:a.addNewSilence,icon:"plus",children:"New Silence"})})}),l.length?(0,p.jsxs)("table",{className:r.table,children:[(0,p.jsxs)("colgroup",{children:[(0,p.jsx)("col",{className:r.colExpand}),(0,p.jsx)("col",{className:a.colState}),(0,p.jsx)("col",{className:a.colMatchers}),ce||(ce=(0,p.jsx)("col",{})),oe||(oe=(0,p.jsx)("col",{})),G.Vt.isEditor&&(de||(de=(0,p.jsx)("col",{})))]}),(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[ue||(ue=(0,p.jsx)("th",{})),me||(me=(0,p.jsx)("th",{children:"State"})),pe||(pe=(0,p.jsx)("th",{children:"Matching labels"})),xe||(xe=(0,p.jsx)("th",{children:"Alerts"})),he||(he=(0,p.jsx)("th",{children:"Schedule"})),G.Vt.isEditor&&(ge||(ge=(0,p.jsx)("th",{children:"Action"})))]})}),(0,p.jsx)("tbody",{children:l.map(((e,a)=>{const n=(i=e.id,s.filter((e=>e.status.silencedBy.includes(i))));var i;return(0,p.jsx)(z,{silence:e,className:a%2==0?r.evenRow:void 0,silencedAlerts:n,alertManagerSourceName:t},e.id)}))})]}):(0,p.jsxs)("div",{className:a.callout,children:[(0,p.jsx)(n.Icon,{className:a.calloutIcon,name:"info-circle"}),je||(je=(0,p.jsx)("span",{children:"No silences match your filters"}))]}),d&&(0,p.jsxs)("div",{className:a.callout,children:[(0,p.jsx)(n.Icon,{className:a.calloutIcon,name:"info-circle"}),fe||(fe=(0,p.jsx)("span",{children:"Expired silences are automatically deleted after 5 days."}))]})]}),!e.length&&(0,p.jsx)(H,{alertManagerSourceName:t})]})};var ye=t("./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts"),Ae=t("./public/app/features/alerting/unified/hooks/useUnifiedAlertingSelector.ts"),Ne=t("./public/app/features/alerting/unified/utils/constants.ts"),we=t("./public/app/features/alerting/unified/utils/redux.ts"),Ce=t("./node_modules/react-use/esm/useDebounce.js"),ke=t("./packages/grafana-runtime/src/index.ts"),$e=t("./node_modules/react-hook-form/dist/index.esm.js");const De=["onChange","ref"];const _e=e=>({wrapper:c.css`
      margin-top: ${e.spacing(2)};
    `,row:c.css`
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      background-color: ${e.colors.background.secondary};
      padding: ${e.spacing(1)} ${e.spacing(1)} 0 ${e.spacing(1)};
      & > * + * {
        margin-left: ${e.spacing(2)};
      }
    `,removeButton:c.css`
      margin-left: ${e.spacing(1)};
      margin-top: ${e.spacing(2.5)};
    `,matcherOptions:c.css`
      min-width: 140px;
    `,matchers:c.css`
      max-width: 585px;
      margin: ${e.spacing(1)} 0;
      padding-top: ${e.spacing(.5)};
    `}),Me=({className:e})=>{const s=(0,n.useStyles2)(_e),t=(0,$e.Gc)(),{control:a,register:r,formState:{errors:i}}=t,{fields:l=[],append:d,remove:u}=(0,$e.Dq)({name:"matchers"});return(0,p.jsx)("div",{className:(0,c.cx)(e,s.wrapper),children:(0,p.jsx)(n.Field,{label:"Matching labels",required:!0,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("div",{className:s.matchers,children:l.map(((e,t)=>{var c,o,d,m,x,h,g,j,f,v;return(0,p.jsxs)("div",{className:s.row,"data-testid":"matcher",children:[(0,p.jsx)(n.Field,{label:"Label",invalid:!(null==i||null===(c=i.matchers)||void 0===c||null===(o=c[t])||void 0===o||!o.name),error:null==i||null===(d=i.matchers)||void 0===d||null===(m=d[t])||void 0===m||null===(x=m.name)||void 0===x?void 0:x.message,children:(0,p.jsx)(n.Input,Object.assign({},r(`matchers.${t}.name`,{required:{value:!0,message:"Required."}}),{defaultValue:e.name,placeholder:"label"}))}),(0,p.jsx)(n.Field,{label:"Operator",children:(0,p.jsx)(n.InputControl,{control:a,render:e=>{let{field:{onChange:t}}=e,a=function(e,s){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e.field,De);return(0,p.jsx)(n.Select,Object.assign({},a,{menuShouldPortal:!0,onChange:e=>t(e.value),className:s.matcherOptions,options:te.tA,"aria-label":"operator"}))},defaultValue:e.operator||te.tA[0].value,name:`matchers.${t}.operator`,rules:{required:{value:!0,message:"Required."}}})}),(0,p.jsx)(n.Field,{label:"Value",invalid:!(null==i||null===(h=i.matchers)||void 0===h||null===(g=h[t])||void 0===g||!g.value),error:null==i||null===(j=i.matchers)||void 0===j||null===(f=j[t])||void 0===f||null===(v=f.value)||void 0===v?void 0:v.message,children:(0,p.jsx)(n.Input,Object.assign({},r(`matchers.${t}.value`,{required:{value:!0,message:"Required."}}),{defaultValue:e.value,placeholder:"value"}))}),l.length>1&&(0,p.jsx)(n.IconButton,{className:s.removeButton,tooltip:"Remove matcher",name:"trash-alt",onClick:()=>u(t),children:"Remove"})]},`${e.id}`)}))}),(0,p.jsx)(n.Button,{type:"button",icon:"plus",variant:"secondary",onClick:()=>{const e={name:"",value:"",operator:o._M.equal};d(e)},children:"Add matcher"})]})})})},Te=()=>{const{control:e,getValues:s}=(0,$e.Gc)(),t=(0,n.useStyles)(Re),{field:{onChange:a,value:r},fieldState:{invalid:i}}=(0,$e.bc)({name:"startsAt",control:e,rules:{validate:e=>s().endsAt>e}}),{field:{onChange:l,value:c},fieldState:{invalid:o}}=(0,$e.bc)({name:"endsAt",control:e,rules:{validate:e=>s().startsAt<e}}),{field:{onChange:u,value:m}}=(0,$e.bc)({name:"timeZone",control:e}),x=i||o,h=(0,d.dateTime)(r),g=(0,d.dateTime)(c);return(0,p.jsx)(n.Field,{className:t.timeRange,label:"Silence start and end",error:x?"To is before or the same as from":"",invalid:x,children:(0,p.jsx)(n.TimeRangeInput,{value:{from:h,to:g,raw:{from:h,to:g}},timeZone:m,onChange:e=>{a((0,d.dateTime)(e.from)),l((0,d.dateTime)(e.to))},onChangeTimeZone:e=>u(e),hideTimeZone:!1,hideQuickRanges:!0,placeholder:"Select time range"})})},Re=e=>({timeRange:c.css`
    width: 400px;
  `});var Ie,Oe,Be,qe,Ee=t("./public/app/core/hooks/useCleanup.ts"),Ve=t("./public/app/features/alerting/unified/utils/matchers.ts");const Ze=(e,s)=>{const t=new Date;if(s){var a;const e=Date.parse(s.endsAt)<Date.now()?{start:t,end:(0,d.addDurationToDate)(t,{hours:2})}:{start:new Date(s.startsAt),end:new Date(s.endsAt)};return{id:s.id,startsAt:e.start.toISOString(),endsAt:e.end.toISOString(),comment:s.comment,createdBy:s.createdBy,duration:(0,d.intervalToAbbreviatedDurationString)(e),isRegex:!1,matchers:(null===(a=s.matchers)||void 0===a?void 0:a.map(te.cm))||[],matcherName:"",matcherValue:"",timeZone:d.DefaultTimeZone}}{const s=(0,d.addDurationToDate)(t,{hours:2});return Object.assign({id:"",startsAt:t.toISOString(),endsAt:s.toISOString(),comment:"",createdBy:ke.config.bootData.user.name,duration:"2h",isRegex:!1,matchers:[{name:"",value:"",operator:o._M.equal}],matcherName:"",matcherValue:"",timeZone:d.DefaultTimeZone},(e=>{const s={},{matchers:t,comment:a}=e;if("string"==typeof t){const e=(0,Ve.R)(t);e.length&&(s.matchers=e.map(te.cm))}return"string"==typeof a&&(s.comment=a),s})(e))}},Le=e=>({field:c.css`
    margin: ${e.spacing(1,0)};
  `,textArea:c.css`
    width: 600px;
  `,createdBy:c.css`
    width: 200px;
  `,flexRow:c.css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    & > * {
      margin-right: ${e.spacing(1)};
    }
  `}),Fe=({silence:e,alertManagerSourceName:s})=>{var t,i;const[l]=(0,se.K)(),o=(0,a.useMemo)((()=>Ze(l,e)),[e,l]),u=(0,$e.cI)({defaultValues:o}),m=(0,r.useDispatch)(),x=(0,n.useStyles2)(Le),{loading:h}=(0,Ae._)((e=>e.updateSilence));(0,Ee.x)((e=>e.unifiedAlerting.updateSilence));const{register:g,handleSubmit:j,formState:f,watch:v,setValue:b,clearErrors:S}=u,y=v("duration"),A=v("startsAt"),N=v("endsAt"),[w,C]=(0,a.useState)(y);return(0,Ce.Z)((()=>{if((0,d.isValidDate)(A)&&(0,d.isValidDate)(N))if(y!==w)b("endsAt",(0,d.dateTime)((0,d.addDurationToDate)(new Date(A),(0,d.parseDuration)(y))).toISOString()),C(y);else{const e=new Date(A).valueOf();if(new Date(N).valueOf()>e){const e=(0,d.intervalToAbbreviatedDurationString)({start:new Date(A),end:new Date(N)});b("duration",e),C(e)}}}),700,[S,y,N,w,b,A]),(0,p.jsx)($e.RV,Object.assign({},u,{children:(0,p.jsxs)("form",{onSubmit:j((e=>{const{id:t,startsAt:a,endsAt:n,comment:r,createdBy:i,matchers:l}=e,c=l.map(te._J),o=(0,ae.pickBy)({id:t,startsAt:a,endsAt:n,comment:r,createdBy:i,matchers:c},(e=>!!e));m((0,$.QY)({alertManagerSourceName:s,payload:o,exitOnSave:!0,successMessage:"Silence "+(o.id?"updated":"created")}))})),children:[(0,p.jsxs)(n.FieldSet,{label:""+(e?"Recreate silence":"Create silence"),children:[(0,p.jsxs)("div",{className:x.flexRow,children:[Ie||(Ie=(0,p.jsx)(Te,{})),(0,p.jsx)(n.Field,{label:"Duration",invalid:!!f.errors.duration,error:f.errors.duration&&("required"===f.errors.duration.type?"Required field":f.errors.duration.message),children:(0,p.jsx)(n.Input,Object.assign({className:x.createdBy},g("duration",{validate:e=>0===Object.keys((0,d.parseDuration)(e)).length?"Invalid duration. Valid example: 1d 4h (Available units: y, M, w, d, h, m, s)":void 0}),{id:"duration"}))})]}),Oe||(Oe=(0,p.jsx)(Me,{})),(0,p.jsx)(n.Field,{className:(0,c.cx)(x.field,x.textArea),label:"Comment",required:!0,error:null===(t=f.errors.comment)||void 0===t?void 0:t.message,invalid:!!f.errors.comment,children:(0,p.jsx)(n.TextArea,Object.assign({},g("comment",{required:{value:!0,message:"Required."}}),{placeholder:"Details about the silence"}))}),(0,p.jsx)(n.Field,{className:(0,c.cx)(x.field,x.createdBy),label:"Created by",required:!0,error:null===(i=f.errors.createdBy)||void 0===i?void 0:i.message,invalid:!!f.errors.createdBy,children:(0,p.jsx)(n.Input,Object.assign({},g("createdBy",{required:{value:!0,message:"Required."}}),{placeholder:"Username"}))})]}),(0,p.jsxs)("div",{className:x.flexRow,children:[h&&(Be||(Be=(0,p.jsx)(n.Button,{disabled:!0,icon:"fa fa-spinner",variant:"primary",children:"Saving..."}))),!h&&(qe||(qe=(0,p.jsx)(n.Button,{type:"submit",children:"Submit"}))),(0,p.jsx)(n.LinkButton,{href:(0,U.eQ)("alerting/silences",s),variant:"secondary",fill:"outline",children:"Cancel"})]})]})}))};var Pe,Qe,Ue=t("./public/app/features/alerting/unified/components/AlertManagerPicker.tsx");const Ge=(0,n.withErrorBoundary)((()=>{var e,s;const[t,c]=(0,ye.k)(),o=(0,r.useDispatch)(),d=(0,Ae._)((e=>e.silences)),u=(0,Ae._)((e=>e.amAlerts)),m=t?u[t]||we.oq:void 0,x=(0,i.TH)().pathname.endsWith("/alerting/silences");(0,a.useEffect)((()=>{function e(){t&&(o((0,$.je)(t)),o((0,$.dB)(t)))}e();const s=setInterval((()=>e),Ne.cm);return()=>{clearInterval(s)}}),[t,o]);const{result:h,loading:g,error:j}=t&&d[t]||we.oq,f=(0,a.useCallback)((e=>h&&h.find((s=>s.id===e))),[h]);return t?(0,p.jsxs)(l.J,{pageId:"silences",children:[(0,p.jsx)(Ue.P,{disabled:!x,current:t,onChange:c}),j&&!g&&(0,p.jsx)(n.Alert,{severity:"error",title:"Error loading silences",children:j.message||"Unknown error."}),(null==m?void 0:m.error)&&!(null!=m&&m.loading)&&(0,p.jsx)(n.Alert,{severity:"error",title:"Error loading Alertmanager alerts",children:(null===(e=m.error)||void 0===e?void 0:e.message)||"Unknown error."}),g&&(Qe||(Qe=(0,p.jsx)(n.LoadingPlaceholder,{text:"loading silences..."}))),h&&!j&&(0,p.jsxs)(i.rs,{children:[(0,p.jsx)(i.AW,{exact:!0,path:"/alerting/silences",children:(0,p.jsx)(Se,{silences:h,alertManagerAlerts:null!==(s=null==m?void 0:m.result)&&void 0!==s?s:[],alertManagerSourceName:t})}),(0,p.jsx)(i.AW,{exact:!0,path:"/alerting/silence/new",children:(0,p.jsx)(Fe,{alertManagerSourceName:t})}),(0,p.jsx)(i.AW,{exact:!0,path:"/alerting/silence/:id/edit",children:({match:e})=>(null==e?void 0:e.params.id)&&(0,p.jsx)(Fe,{silence:f(e.params.id),alertManagerSourceName:t})})]})]}):Pe||(Pe=(0,p.jsx)(i.l_,{to:"/alerting/silences"}))}),{style:"page"})},"./public/app/features/alerting/unified/components/AlertingPageWrapper.tsx":(e,s,t)=>{t.d(s,{J:()=>l});t("./node_modules/react/index.js");var a=t("./public/app/core/components/Page/Page.tsx"),n=t("./public/app/core/selectors/navModel.ts"),r=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/react/jsx-runtime.js");const l=({children:e,pageId:s,isLoading:t})=>{const l=(0,n.h)((0,r.useSelector)((e=>e.navIndex)),s);return(0,i.jsx)(a.Z,{navModel:l,children:(0,i.jsx)(a.Z.Contents,{isLoading:t,children:e})})}},"./public/app/features/alerting/unified/components/rules/ActionIcon.tsx":(e,s,t)=>{t.d(s,{A:()=>c});var a=t("./packages/grafana-ui/src/index.ts"),n=(t("./node_modules/react/index.js"),t("./node_modules/@emotion/css/dist/emotion-css.esm.js")),r=t("./node_modules/react-router-dom/esm/react-router-dom.js"),i=t("./node_modules/react/jsx-runtime.js");const l=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];const c=e=>{var s;let{tooltip:t,icon:c,to:d,target:u,onClick:m,className:p,tooltipPlacement:x="top"}=e,h=function(e,s){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);const g=(0,i.jsx)(a.Icon,Object.assign({className:(0,n.cx)((0,a.useStyles)(o),p),onClick:m,name:c},h));return(0,i.jsx)(a.Tooltip,{content:t,placement:x,children:d?s||(s=(0,i.jsx)(r.Link,{to:d,target:u,children:g})):g})},o=()=>n.css`
  cursor: pointer;
`},"./public/app/features/alerting/unified/components/silences/AmAlertStateTag.tsx":(e,s,t)=>{t.d(s,{G:()=>l});var a=t("./public/app/plugins/datasource/alertmanager/types.ts"),n=(t("./node_modules/react/index.js"),t("./public/app/features/alerting/unified/components/StateTag.tsx")),r=t("./node_modules/react/jsx-runtime.js");const i={[a.Z9.Active]:"bad",[a.Z9.Unprocessed]:"neutral",[a.Z9.Suppressed]:"info"},l=({state:e})=>(0,r.jsx)(n.i,{state:i[e],children:e})},"./public/app/features/alerting/unified/components/silences/Matchers.tsx":(e,s,t)=>{t.d(s,{g:()=>o});var a=t("./node_modules/react/index.js"),n=t("./packages/grafana-ui/src/index.ts"),r=t("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=t("./public/app/features/alerting/unified/components/AlertLabel.tsx"),l=t("./public/app/features/alerting/unified/utils/alertmanager.ts"),c=t("./node_modules/react/jsx-runtime.js");const o=({matchers:e,onRemoveLabel:s})=>{const t=(0,n.useStyles)(d),r=(0,a.useCallback)((e=>{s&&s(e)}),[s]);return(0,c.jsx)("div",{className:t.wrapper,children:e.map(((e,t)=>{const{name:a,value:n}=e;return(0,c.jsx)(i.i,{labelKey:a,value:n,operator:(0,l.zy)(e),onRemoveLabel:s?()=>r(t):void 0},`${a}-${n}-${t}`)}))})},d=e=>({wrapper:r.css`
    & > * {
      margin-top: ${e.spacing.xs};
      margin-right: ${e.spacing.xs};
    }
    padding-bottom: ${e.spacing.xs};
  `})},"./public/app/features/alerting/unified/hooks/useAlertManagerSourceName.ts":(e,s,t)=>{t.d(s,{k:()=>o});var a=t("./public/app/core/hooks/useQueryParams.ts"),n=t("./public/app/core/store.ts"),r=t("./node_modules/react/index.js"),i=t("./public/app/features/alerting/unified/utils/constants.ts"),l=t("./public/app/features/alerting/unified/utils/datasource.ts");function c(e){return e===l.GC||!!(0,l.aM)().find((s=>s.name===e))}function o(){const[e,s]=(0,a.K)(),t=(0,r.useCallback)((e=>{c(e)&&(e===l.GC?(n.Z.delete(i.de),s({[i.c4]:null})):(n.Z.set(i.de,e),s({[i.c4]:e})))}),[s]),o=e[i.c4];if(o&&"string"==typeof o)return c(o)?[o,t]:[void 0,t];const d=n.Z.get(i.de);return d&&"string"==typeof d&&c(d)?(t(d),[d,t]):[l.GC,t]}},"./public/app/features/alerting/unified/styles/table.ts":(e,s,t)=>{t.d(s,{D:()=>n});var a=t("./node_modules/@emotion/css/dist/emotion-css.esm.js");const n=e=>({table:a.css`
    width: 100%;
    border-radius: ${e.shape.borderRadius()};
    border: solid 1px ${e.colors.border.weak};
    background-color: ${e.colors.background.secondary};

    th {
      padding: ${e.spacing(1)};
    }

    td {
      padding: 0 ${e.spacing(1)};
    }

    tr {
      height: 38px;
    }
  `,evenRow:a.css`
    background-color: ${e.colors.background.primary};
  `,colExpand:a.css`
    width: 36px;
  `,actionsCell:a.css`
    text-align: right;
    width: 1%;
    white-space: nowrap;

    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})}}]);
//# sourceMappingURL=AlertSilences.0e7ce18a6cf0f8775a65.js.map