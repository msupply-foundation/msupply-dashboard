"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8715],{"./public/app/features/teams/CreateTeam.tsx":(e,a,t)=>{t.r(a),t.d(a,{CreateTeam:()=>u,default:()=>h});var r,n,s=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),c=t("./public/app/core/components/Page/Page.tsx"),i=t("./packages/grafana-ui/src/index.ts"),l=t("./packages/grafana-runtime/src/index.ts"),d=t("./.yarn/__virtual__/react-redux-virtual-7ad20a440e/0/cache/react-redux-npm-7.2.6-134f5ed64d-0bf142ce0d.zip/node_modules/react-redux/es/index.js"),o=t("./public/app/core/selectors/navModel.ts"),p=t("./public/app/core/core.ts"),m=t("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");class u extends s.PureComponent{constructor(){var e,a,t;super(...arguments),t=async e=>{const a=await(0,l.getBackendSrv)().post("/api/teams",e);a.teamId&&(await p.Vt.fetchUserPermissions(),l.locationService.push(`/org/teams/edit/${a.teamId}`))},(a="create")in(e=this)?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t}render(){const{navModel:e}=this.props;return(0,m.jsx)(c.Z,{navModel:e,children:(0,m.jsx)(c.Z.Contents,{children:(0,m.jsx)(i.Form,{onSubmit:this.create,children:e=>{let{register:a}=e;return(0,m.jsxs)(i.FieldSet,{label:"New Team",children:[(0,m.jsx)(i.Field,{label:"Name",children:(0,m.jsx)(i.Input,Object.assign({},a("name",{required:!0}),{id:"team-name",width:60}))}),(0,m.jsx)(i.Field,{label:(0,m.jsxs)(i.Label,{children:[r||(r=(0,m.jsx)("span",{children:"Email"})),(0,m.jsx)(i.Tooltip,{content:"This is optional and is primarily used for allowing custom team avatars.",children:(0,m.jsx)(i.Icon,{name:"info-circle",style:{marginLeft:6}})})]}),children:(0,m.jsx)(i.Input,Object.assign({},a("email"),{type:"email",placeholder:"email@test.com",width:60}))}),n||(n=(0,m.jsx)("div",{className:"gf-form-button-row",children:(0,m.jsx)(i.Button,{type:"submit",variant:"primary",children:"Create"})}))]})}})})})}}const h=(0,d.connect)((function(e){return{navModel:(0,o.h)(e.navIndex,"teams")}}))(u)}}]);
//# sourceMappingURL=CreateTeam.e65e3aa10981aa98e7a1.js.map