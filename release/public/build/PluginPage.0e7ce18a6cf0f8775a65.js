"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2417],{"./public/app/features/plugins/admin/components/Badges/index.ts":(e,n,s)=>{s.d(n,{SX:()=>t,IF:()=>g,oZ:()=>c,xh:()=>p});s("./node_modules/react/index.js");var a=s("./packages/grafana-data/src/index.ts"),i=s("./packages/grafana-ui/src/index.ts"),r=s("./node_modules/react/jsx-runtime.js");function t({error:e}){const n=function(e){switch(e){case a.PluginErrorCode.modifiedSignature:return"Plugin disabled due to modified content";case a.PluginErrorCode.invalidSignature:return"Plugin disabled due to invalid plugin signature";case a.PluginErrorCode.missingSignature:return"Plugin disabled due to missing plugin signature";default:return`Plugin disabled due to unkown error: ${e}`}}(e);return(0,r.jsx)(i.Badge,{icon:"exclamation-triangle",text:"Disabled",color:"red",tooltip:n})}var l=s("./node_modules/@emotion/css/dist/emotion-css.esm.js");const o=e=>l.css`
  background: ${e.colors.background.primary};
  border-color: ${e.colors.border.strong};
  color: ${e.colors.text.secondary};
`;function c(){const e=(0,i.useStyles2)(o);return(0,r.jsx)(i.Badge,{text:"Installed",color:"orange",className:e})}var d,u=s("./packages/grafana-runtime/src/index.ts");function g({plugin:e}){var n;const s=(0,i.useStyles2)(o);return null!==(n=u.config.licenseInfo)&&void 0!==n&&n.hasValidLicense?d||(d=(0,r.jsx)(i.Badge,{text:"Enterprise",color:"blue"})):(0,r.jsxs)(i.HorizontalGroup,{children:[(0,r.jsx)(i.PluginSignatureBadge,{status:e.signature}),(0,r.jsx)(i.Badge,{icon:"lock","aria-label":"lock icon",text:"Enterprise",color:"blue",className:s}),(0,r.jsx)(i.Button,{size:"sm",fill:"text",icon:"external-link-alt",onClick:n=>{n.preventDefault(),window.open(`https://grafana.com/grafana/plugins/${e.id}?utm_source=grafana_catalog_learn_more`,"_blank","noopener,noreferrer")},children:"Learn more"})]})}function p({plugin:e}){const n=(0,i.useStyles2)(h);return e.hasUpdate&&!e.isCore?(0,r.jsx)(i.Tooltip,{content:e.version,children:(0,r.jsx)("p",{className:n.hasUpdate,children:"Update available!"})}):null}const h=e=>({hasUpdate:l.css`
      color: ${e.colors.text.secondary};
      font-size: ${e.typography.bodySmall.fontSize};
      margin-bottom: 0;
    `})},"./public/app/features/plugins/admin/components/Loader.tsx":(e,n,s)=>{s.d(n,{a:()=>t});s("./node_modules/react/index.js");var a=s("./packages/grafana-ui/src/index.ts"),i=s("./public/app/features/plugins/admin/components/Page.tsx"),r=s("./node_modules/react/jsx-runtime.js");const t=({text:e="Loading..."})=>(0,r.jsx)(i.T,{children:(0,r.jsx)("div",{className:"page-loader-wrapper",children:(0,r.jsx)(a.LoadingPlaceholder,{text:e})})})},"./public/app/features/plugins/admin/components/Page.tsx":(e,n,s)=>{s.d(n,{T:()=>t});s("./node_modules/react/index.js");var a=s("./node_modules/@emotion/css/dist/emotion-css.esm.js"),i=s("./packages/grafana-ui/src/index.ts"),r=s("./node_modules/react/jsx-runtime.js");const t=({children:e})=>{const n=(0,i.useStyles2)(l);return(0,r.jsx)("div",{className:"page-container",children:(0,r.jsx)("div",{className:n,children:e})})},l=e=>a.css`
    margin-bottom: ${e.spacing(3)};
  `},"./public/app/features/plugins/admin/components/PluginLogo.tsx":(e,n,s)=>{s.d(n,{E:()=>i});s("./node_modules/react/index.js");var a=s("./node_modules/react/jsx-runtime.js");function i({alt:e,className:n,src:s,height:i}){return(0,a.jsx)("img",{src:s,className:n,alt:e,loading:"lazy",height:i})}},"./public/app/features/plugins/admin/pages/PluginDetails.tsx":(e,n,s)=>{s.r(n),s.d(n,{default:()=>ue,getStyles:()=>ge});var a,i,r=s("./node_modules/react/index.js"),t=s("./node_modules/@emotion/css/dist/emotion-css.esm.js"),l=s("./node_modules/react-use/esm/usePrevious.js"),o=s("./packages/grafana-ui/src/index.ts"),c=s("./packages/grafana-runtime/src/index.ts"),d=s("./packages/grafana-ui/src/components/Layout/Layout.tsx"),u=s("./public/app/core/components/Page/Page.tsx"),g=s("./packages/grafana-e2e-selectors/src/index.ts"),p=s("./packages/grafana-data/src/index.ts"),h=s("./node_modules/react/jsx-runtime.js");function m({className:e,plugin:n}){const s=n.signature===p.PluginSignatureStatus.valid,r=n.signature===p.PluginSignatureStatus.internal;return s||r?null:(0,h.jsxs)(o.Alert,{severity:"warning",title:"Invalid plugin signature","aria-label":g.wl.pages.PluginPage.signatureInfo,className:e,children:[a||(a=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. Plugin signature verification is part of our security measures to ensure plugins are safe and trustworthy. Grafana Labs can’t guarantee the integrity of this unsigned plugin. Ask the plugin author to request it to be signed."})),i||(i=(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about plugins signing."}))]})}var f=s("./node_modules/semver/index.js"),x=s("./public/app/features/plugins/admin/helpers.ts"),v=s("./public/app/features/plugins/admin/types.ts");function j({pluginId:e,pluginStatus:n}){const s=(0,x.Uj)(e);return n===v.vF.UPDATE?(0,h.jsxs)(o.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(o.LinkButton,{href:s,target:"_blank",rel:"noopener noreferrer",children:"Update via grafana.com"}),(0,h.jsx)(o.LinkButton,{variant:"destructive",href:s,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"})]}):n===v.vF.UNINSTALL?(0,h.jsx)(o.LinkButton,{variant:"destructive",href:s,target:"_blank",rel:"noopener noreferrer",children:"Uninstall via grafana.com"}):(0,h.jsx)(o.LinkButton,{href:s,target:"_blank",rel:"noopener noreferrer",children:"Install via grafana.com"})}var b,y=s("./public/app/core/app_events.ts"),S=s("./public/app/features/plugins/admin/state/hooks.ts");function P({plugin:e,pluginStatus:n}){var s;const{isInstalling:a,error:i}=(0,S.IS)(),{isUninstalling:t,error:l}=(0,S.wq)(),c=(0,S.x3)(),d=(0,S.S1)(),[u,g]=(0,r.useState)(!1),m=()=>g(!0),f=()=>g(!1),x=t?"Uninstalling":"Uninstall",j=async()=>{f(),await d(e.id),l||y.Z.emit(p.AppEvents.alertSuccess,[`Uninstalled ${e.name}`])},b=async()=>{await c(e.id,e.version,!0),i||y.Z.emit(p.AppEvents.alertSuccess,[`Updated ${e.name}`])};return n===v.vF.UNINSTALL?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.ConfirmModal,{isOpen:u,title:`Uninstall ${e.name}`,body:"Are you sure you want to uninstall this plugin?",confirmText:"Confirm",icon:"exclamation-triangle",onConfirm:j,onDismiss:f}),(0,h.jsx)(o.HorizontalGroup,{height:"auto",children:(0,h.jsx)(o.Button,{variant:"destructive",disabled:t,onClick:m,children:x})})]}):n===v.vF.UPDATE?(0,h.jsxs)(o.HorizontalGroup,{height:"auto",children:[(0,h.jsx)(o.Button,{disabled:a,onClick:b,children:a?"Updating":"Update"}),s||(s=(0,h.jsx)(o.Button,{variant:"destructive",disabled:t,onClick:j,children:x}))]}):(0,h.jsx)(o.Button,{disabled:a,onClick:async()=>{await c(e.id,e.version),i||y.Z.emit(p.AppEvents.alertSuccess,[`Installed ${e.name}`])},children:a?"Installing":"Install"})}const N=({plugin:e})=>{var n,s;const a=(0,o.useStyles2)($),i=c.config.pluginAdminExternalManageEnabled,r=(0,x.bO)(),t=null===(n=e.details)||void 0===n?void 0:n.grafanaDependency,l=(0,S.y9)(),d=!!t&&!(0,f.satisfies)(c.config.buildInfo.version,t,{includePrerelease:!0}),u=e.isInstalled?e.hasUpdate?v.vF.UPDATE:v.vF.UNINSTALL:v.vF.INSTALL;if(e.isCore||e.isDisabled)return null;if(e.isEnterprise&&(null===(s=c.config.licenseInfo)||void 0===s||!s.hasValidLicense))return(0,h.jsxs)(o.HorizontalGroup,{height:"auto",align:"center",children:[(0,h.jsx)("span",{className:a.message,children:"No valid Grafana Enterprise license detected."}),(0,h.jsx)(o.LinkButton,{href:`${(0,x.Uj)(e.id)}?utm_source=grafana_catalog_learn_more`,target:"_blank",rel:"noopener noreferrer",size:"sm",fill:"text",icon:"external-link-alt",children:"Learn more"})]});if(e.isDev)return(0,h.jsx)("div",{className:a.message,children:"This is a development build of the plugin and can't be uninstalled."});if(!r&&!i){const e=`You do not have permission to ${u} this plugin.`;return(0,h.jsx)("div",{className:a.message,children:e})}return d?(0,h.jsxs)("div",{className:a.message,children:[b||(b=(0,h.jsx)(o.Icon,{name:"exclamation-triangle"}))," This plugin doesn't support your version of Grafana."]}):i?(0,h.jsx)(j,{pluginId:e.id,pluginStatus:u}):l?(0,h.jsx)(P,{plugin:e,pluginStatus:u}):(0,h.jsx)("div",{className:a.message,children:"The install controls have been disabled because the Grafana server cannot access grafana.com."})},$=e=>({message:t.css`
      color: ${e.colors.text.secondary};
    `});var k=s("./node_modules/lodash/lodash.js");const I={[p.PluginSignatureType.grafana]:"grafana",[p.PluginSignatureType.commercial]:"shield",[p.PluginSignatureType.community]:"shield",DEFAULT:"shield-exclamation"};function w({signatureType:e,signatureOrg:n=""}){const s=(0,o.useStyles2)(L);if(!e&&!n)return null;const a=e===p.PluginSignatureType.grafana?"Grafana Labs":(0,k.capitalize)(e),i=I[e||""]||I.DEFAULT;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(E,{children:[(0,h.jsx)("strong",{className:s.strong,children:"Level: "}),(0,h.jsx)(o.Icon,{size:"xs",name:i})," ",a]}),(0,h.jsxs)(E,{children:[(0,h.jsx)("strong",{className:s.strong,children:"Signed by:"})," ",n]})]})}const E=({children:e})=>{const n=(0,o.useStyles2)(L);return(0,h.jsx)(o.Badge,{color:"green",className:n.badge,text:(0,h.jsx)(h.Fragment,{children:e})})},L=e=>({badge:t.css`
    background-color: ${e.colors.background.canvas};
    border-color: ${e.colors.border.strong};
    color: ${e.colors.text.secondary};
    margin-left: ${e.spacing()};
  `,strong:t.css`
    color: ${e.colors.text.primary};
  `,icon:t.css`
    margin-right: ${e.spacing(.5)};
  `});function _({plugin:e}){const n=e.signature===p.PluginSignatureStatus.valid;return(0,h.jsxs)("div",{children:[(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",target:"_blank",rel:"noreferrer",children:(0,h.jsx)(o.PluginSignatureBadge,{status:e.signature})}),n&&(0,h.jsx)(w,{signatureType:e.signatureType,signatureOrg:e.signatureOrg})]})}function D({plugin:e,className:n}){var s,a;const i=(0,o.useStyles2)(T),r=null===(s=e.details)||void 0===s?void 0:s.pluginDependencies,t=null===(a=e.details)||void 0===a?void 0:a.grafanaDependency;return!(t||r&&r.length)?null:(0,h.jsxs)("div",{className:n,children:[(0,h.jsx)("div",{className:i.dependencyTitle,children:"Dependencies:"}),Boolean(t)&&(0,h.jsxs)("div",{children:[(0,h.jsx)(o.Icon,{name:"grafana",className:i.icon}),"Grafana ",t]}),r&&r.length>0&&(0,h.jsx)("div",{children:r.map((e=>(0,h.jsxs)("span",{children:[(0,h.jsx)(o.Icon,{name:v.Co[e.type],className:i.icon}),e.name," ",e.version]},e.name)))})]})}const T=e=>({dependencyTitle:t.css`
      font-weight: ${e.typography.fontWeightBold};
      margin-right: ${e.spacing(.5)};

      &::after {
        content: '';
        padding: 0;
      }
    `,icon:t.css`
      color: ${e.colors.text.secondary};
      margin-right: ${e.spacing(.5)};
    `});var C,U=s("./public/app/features/plugins/admin/components/PluginLogo.tsx"),A=s("./public/app/features/plugins/admin/components/Badges/index.ts");function B({plugin:e,currentUrl:n,parentUrl:s}){var a;const i=(0,o.useStyles2)(O);return(0,h.jsxs)("div",{className:i.headerContainer,children:[(0,h.jsx)(U.E,{alt:`${e.name} logo`,src:e.info.logos.small,className:t.css`
          object-fit: contain;
          width: 100%;
          height: 68px;
          max-width: 68px;
        `}),(0,h.jsxs)("div",{className:i.headerWrapper,children:[(0,h.jsx)("nav",{className:i.breadcrumb,"aria-label":"Breadcrumb",children:(0,h.jsxs)("ol",{children:[(0,h.jsx)("li",{children:(0,h.jsx)("a",{className:i.textUnderline,href:s,children:"Plugins"})}),(0,h.jsx)("li",{children:(0,h.jsx)("a",{href:n,"aria-current":"page",children:e.name})})]})}),(0,h.jsxs)("div",{className:i.headerInformationRow,children:[(0,h.jsx)("span",{children:e.orgName}),null===(a=e.details)||void 0===a?void 0:a.links.map((e=>(0,h.jsx)("a",{href:e.url,children:e.name},e.name))),e.downloads>0&&(0,h.jsxs)("span",{children:[C||(C=(0,h.jsx)(o.Icon,{name:"cloud-download"})),` ${(new Intl.NumberFormat).format(e.downloads)}`," "]}),e.version&&(0,h.jsx)("span",{children:e.version}),(0,h.jsx)(_,{plugin:e}),e.isDisabled&&(0,h.jsx)(A.SX,{error:e.error})]}),(0,h.jsx)(D,{plugin:e,className:(0,t.cx)(i.headerInformationRow,i.headerInformationRowSecondary)}),(0,h.jsx)("p",{children:e.description}),(0,h.jsx)(N,{plugin:e})]})]})}const O=e=>({headerContainer:t.css`
      display: flex;
      margin-bottom: ${e.spacing(3)};
      margin-top: ${e.spacing(3)};
      min-height: 120px;
    `,headerWrapper:t.css`
      margin-left: ${e.spacing(3)};
    `,breadcrumb:t.css`
      font-size: ${e.typography.h2.fontSize};
      li {
        display: inline;
        list-style: none;
        &::after {
          content: '/';
          padding: 0 0.25ch;
        }
        &:last-child::after {
          content: '';
        }
      }
    `,headerInformationRow:t.css`
      display: flex;
      align-items: center;
      margin-top: ${e.spacing()};
      margin-bottom: ${e.spacing()};

      & > * {
        &::after {
          content: '|';
          padding: 0 ${e.spacing()};
        }
        &:last-child::after {
          content: '';
          padding-right: 0;
        }
      }
      font-size: ${e.typography.h4.fontSize};
    `,headerInformationRowSecondary:t.css`
      font-size: ${e.typography.body.fontSize};
    `,headerOrgName:t.css`
      font-size: ${e.typography.h4.fontSize};
    `,signature:t.css`
      margin: ${e.spacing(3)};
      margin-bottom: 0;
    `,textUnderline:t.css`
      text-decoration: underline;
    `});var z,R;const V=({versions:e=[]})=>{const n=(0,o.useStyles2)(W);return 0===e.length?z||(z=(0,h.jsx)("p",{children:"No version history was found."})):(0,h.jsxs)("table",{className:n.table,children:[R||(R=(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Version"}),(0,h.jsx)("th",{children:"Last updated"})]})})),(0,h.jsx)("tbody",{children:e.map((e=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.version}),(0,h.jsx)("td",{children:(0,p.dateTimeFormatTimeAgo)(e.createdAt)})]},e.version)))})]})},W=e=>({container:t.css`
    padding: ${e.spacing(2,4,3)};
  `,table:t.css`
    width: 100%;
    td,
    th {
      padding: ${e.spacing()} 0;
    }
    th {
      font-size: ${e.typography.h5.fontSize};
    }
  `});var F=s("./node_modules/react-use/esm/useAsync.js"),G=s("./public/app/features/plugins/PluginPage.tsx");const H=e=>(0,F.Z)((async()=>e&&e.isInstalled&&!e.isDisabled?(0,G.loadPlugin)(e.id):null),[null==e?void 0:e.id,null==e?void 0:e.isInstalled,null==e?void 0:e.isDisabled]);var q,Z=s("./public/app/features/plugins/wrappers/AppConfigWrapper.tsx"),M=s("./public/app/features/plugins/PluginDashboards.tsx");function Q({plugin:e,queryParams:n}){const s=(0,o.useStyles2)(J),{value:a}=H(e),i=n.page;var r,l,c;if(i===v.tu.OVERVIEW)return(0,h.jsx)("div",{className:(0,t.cx)(s.readme,s.container),dangerouslySetInnerHTML:{__html:null!==(r=null===(l=e.details)||void 0===l?void 0:l.readme)&&void 0!==r?r:"No plugin help or readme markdown file was found"}});if(i===v.tu.VERSIONS)return(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(V,{versions:null===(c=e.details)||void 0===c?void 0:c.versions})});if(i===v.tu.CONFIG&&null!=a&&a.angularConfigCtrl)return(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(Z.C,{app:a})});if(null!=a&&a.configPages)for(const e of a.configPages){var d;if(i===e.id)return(0,h.jsx)("div",{className:s.container,children:d||(d=(0,h.jsx)(e.body,{plugin:a,query:n}))})}return i===v.tu.DASHBOARDS&&a?(0,h.jsx)("div",{className:s.container,children:(0,h.jsx)(M.O,{plugin:null==a?void 0:a.meta})}):(0,h.jsx)("div",{className:s.container,children:q||(q=(0,h.jsx)("p",{children:"Page not found."}))})}const J=e=>({container:t.css`
    padding: ${e.spacing(3,4)};
  `,readme:t.css`
    & img {
      max-width: 100%;
    }

    h1,
    h2,
    h3 {
      margin-top: ${e.spacing(3)};
      margin-bottom: ${e.spacing(2)};
    }

    *:first-child {
      margin-top: 0;
    }

    li {
      margin-left: ${e.spacing(2)};
      & > p {
        margin: ${e.spacing()} 0;
      }
    }
  `});var X=s("./public/app/features/plugins/admin/components/Page.tsx"),Y=s("./public/app/features/plugins/admin/components/Loader.tsx"),K=s("./node_modules/react-router/esm/react-router.js");var ee,ne,se,ae,ie,re,te,le,oe=s("./public/app/types/index.ts");function ce({className:e,plugin:n}){return n.isDisabled?(0,h.jsxs)(o.Alert,{severity:"error",title:"Plugin disabled",className:e,"aria-label":g.wl.pages.PluginPage.disabledInfo,children:[de(n.error),ee||(ee=(0,h.jsx)("p",{children:"Please contact your server administrator to get this resolved."})),ne||(ne=(0,h.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/administration/cli/#plugins-commands",className:"external-link",target:"_blank",rel:"noreferrer",children:"Read more about managing plugins"}))]}):null}function de(e){switch(e){case p.PluginErrorCode.modifiedSignature:return se||(se=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that the content of this plugin does not match its signature. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case p.PluginErrorCode.invalidSignature:return ae||(ae=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that it was invalid. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));case p.PluginErrorCode.missingSignature:return ie||(ie=(0,h.jsx)("p",{children:"Grafana Labs checks each plugin to verify that it has a valid digital signature. While doing this, we discovered that there is no signature for this plugin. We can not guarantee the trustworthy of this plugin and have therefore disabled it. We recommend you to reinstall the plugin to make sure you are running a verified version of this plugin."}));default:return re||(re=(0,h.jsx)("p",{children:"We failed to run this plugin due to an unkown reason and have therefor disabled it. We recommend you to reinstall the plugin to make sure you are running a working version of this plugin."}))}}function ue({match:e,queryParams:n}){var s;const{params:{pluginId:a=""},url:i}=e,t=n.page||v.tu.OVERVIEW,g=i.substring(0,i.lastIndexOf("/")),f=[{label:v.xc.OVERVIEW,icon:"file-alt",id:v.tu.OVERVIEW,href:`${i}?page=${v.tu.OVERVIEW}`},{label:v.xc.VERSIONS,icon:"history",id:v.tu.VERSIONS,href:`${i}?page=${v.tu.VERSIONS}`}],j=(0,S.bJ)(a),{tabs:b}=((e,n=[])=>{const{loading:s,error:a,value:i}=H(e),{pathname:t}=(0,K.TH)();return{error:a,loading:s,tabs:(0,r.useMemo)((()=>{const e=(0,x.RN)(),s=[...n];if(!i)return s;if(e&&i.meta.type===p.PluginType.app){var a;if(i.angularConfigCtrl&&s.push({label:"Config",icon:"cog",id:v.tu.CONFIG,href:`${t}?page=${v.tu.CONFIG}`}),i.configPages)for(const e of i.configPages)s.push({label:e.title,icon:e.icon,id:e.id,href:`${t}?page=${e.id}`});null!==(a=i.meta.includes)&&void 0!==a&&a.find((e=>e.type===p.PluginIncludeType.dashboard))&&s.push({label:"Dashboards",icon:"apps",id:v.tu.DASHBOARDS,href:`${t}?page=${v.tu.DASHBOARDS}`})}return s}),[i,n,t])}})(j,f),{isLoading:y}=(0,S.ZV)(),{isLoading:P}=(0,S.bt)(),N=(0,o.useStyles2)(ge),$=(0,l.Z)(b);return(0,r.useEffect)((()=>{const e=$&&$.length>b.length,n=t!==v.tu.OVERVIEW&&t!==v.tu.VERSIONS;e&&n&&c.locationService.replace(`${i}?page=${v.tu.OVERVIEW}`)}),[t,i,b,$]),y||P?te||(te=(0,h.jsx)(u.T,{children:(0,h.jsx)(Y.a,{})})):j?(0,h.jsx)(u.T,{children:(0,h.jsxs)(X.T,{children:[(0,h.jsx)(B,{currentUrl:`${i}?page=${t}`,parentUrl:g,plugin:j}),(0,h.jsx)(o.TabsBar,{children:b.map((e=>(0,h.jsx)(o.Tab,{label:e.label,href:e.href,icon:e.icon,active:e.id===t},e.label)))}),(0,h.jsxs)(o.TabContent,{className:N.tabContent,children:[(0,h.jsx)(ce,{plugin:j,className:N.alert}),(0,h.jsx)(m,{plugin:j,className:N.alert}),(0,h.jsx)(Q,{queryParams:n,plugin:j})]})]})}):(0,h.jsx)(d.Ar,{justify:"center",align:"center",children:(0,h.jsxs)(o.Alert,{severity:oe.F1.Warning,title:"Plugin not found",children:["That plugin cannot be found. Please check the url is correct or ",le||(le=(0,h.jsx)("br",{})),"go to the ",s||(s=(0,h.jsx)("a",{href:g,children:"plugin catalog"})),"."]})})}const ge=e=>({alert:t.css`
      margin: ${e.spacing(3)};
      margin-bottom: 0;
    `,tabContent:t.css`
      overflow: auto;
    `})},"./public/app/features/plugins/admin/state/hooks.ts":(e,n,s)=>{s.d(n,{iY:()=>_,bt:()=>k,ZV:()=>$,GE:()=>b,bJ:()=>y,x3:()=>S,IS:()=>I,y9:()=>N,S1:()=>P,wq:()=>w});var a=s("./node_modules/react/index.js"),i=s("./node_modules/react-redux/es/index.js"),r=s("./public/app/features/plugins/admin/state/reducer.ts"),t=s("./public/app/features/plugins/admin/state/actions.ts"),l=s("./node_modules/reselect/es/index.js"),o=s("./public/app/features/plugins/admin/types.ts");const c=e=>e.plugins,d=(0,l.P1)(c,(({items:e})=>e)),u=(0,l.P1)(c,(({settings:e})=>e.displayMode)),{selectAll:g,selectById:p}=r.CD.getSelectors(d),h=(e,n)=>(0,l.P1)((e=>(0,l.P1)(g,(n=>n.filter((n=>"installed"===e?n.isInstalled:!n.isCore)))))(e),(e=>e.filter((e=>"all"===n||e.type===n)))),m=(e,n,s)=>(0,l.P1)(h(n,s),(e=>(0,l.P1)(g,(n=>""===e?[]:n.filter((n=>{const s=[];return n.name&&s.push(n.name.toLowerCase()),n.orgName&&s.push(n.orgName.toLowerCase()),s.some((n=>n.includes(e.toLowerCase())))})))))(e),((n,s)=>""===e?n:s)),f=e=>(0,l.P1)(c,(({requests:n={}})=>n[e])),x=e=>(0,l.P1)(f(e),(e=>(null==e?void 0:e.status)===o.eE.Pending)),v=e=>(0,l.P1)(f(e),(e=>(null==e?void 0:e.status)===o.eE.Rejected?null==e?void 0:e.error:null));var j=s("./public/app/features/plugins/admin/helpers.ts");const b=({query:e="",filterBy:n="installed",filterByType:s="all",sortBy:a=j.Nh.nameAsc})=>{E();const r=(0,i.useSelector)(m(e,n,s)),{isLoading:t,error:l}=$();return{isLoading:t,error:l,plugins:(0,j.AA)(r,a)}},y=e=>(E(),L(e),(0,i.useSelector)((n=>p(n,e)))),S=()=>{const e=(0,i.useDispatch)();return(n,s,a)=>e((0,t.N9)({id:n,version:s,isUpdating:a}))},P=()=>{const e=(0,i.useDispatch)();return n=>e((0,t.Tz)(n))},N=()=>null===(0,i.useSelector)(v(t.tQ.typePrefix)),$=()=>({isLoading:(0,i.useSelector)(x(t.Qd.typePrefix)),error:(0,i.useSelector)(v(t.Qd.typePrefix))}),k=()=>({isLoading:(0,i.useSelector)(x(t.DD.typePrefix)),error:(0,i.useSelector)(v(t.DD.typePrefix))}),I=()=>({isInstalling:(0,i.useSelector)(x(t.N9.typePrefix)),error:(0,i.useSelector)(v(t.N9.typePrefix))}),w=()=>({isUninstalling:(0,i.useSelector)(x(t.Tz.typePrefix)),error:(0,i.useSelector)(v(t.Tz.typePrefix))}),E=()=>{const e=(0,i.useDispatch)(),n=(0,i.useSelector)((s=t.Qd.typePrefix,(0,l.P1)(f(s),(e=>void 0===e))));var s;(0,a.useEffect)((()=>{n&&e((0,t.Qd)())}),[])},L=e=>{const n=(0,i.useDispatch)(),s=(0,i.useSelector)((n=>p(n,e))),r=!(0,i.useSelector)(x(t.DD.typePrefix))&&s&&!s.details;(0,a.useEffect)((()=>{r&&n((0,t.DD)(e))}),[s])},_=()=>{const e=(0,i.useDispatch)();return{displayMode:(0,i.useSelector)(u),setDisplayMode:n=>e((0,r.UC)(n))}}},"./node_modules/react-use/esm/usePrevious.js":(e,n,s)=>{s.d(n,{Z:()=>i});var a=s("./node_modules/react/index.js");function i(e){var n=(0,a.useRef)();return(0,a.useEffect)((function(){n.current=e})),n.current}}}]);
//# sourceMappingURL=PluginPage.0e7ce18a6cf0f8775a65.js.map