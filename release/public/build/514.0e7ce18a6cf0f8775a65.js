/*! For license information please see 514.0e7ce18a6cf0f8775a65.js.LICENSE.txt */
(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[514],{"./packages/jaeger-ui-components/src/index.ts":(e,t,s)=>{"use strict";s.d(t,{kt:()=>qr,f6:()=>y,f8:()=>m,T2:()=>Ur,Ox:()=>In,y3:()=>tt,Mp:()=>Ye,DE:()=>it,J5:()=>Qe,YB:()=>et,h2:()=>T,rZ:()=>ko,R1:()=>jo,Fg:()=>k});var n=s("./node_modules/react/index.js"),r=s("./node_modules/@emotion/css/dist/emotion-css.esm.js"),o=s("./packages/jaeger-ui-components/node_modules/classnames/index.js"),i=s.n(o),a=s("./packages/grafana-ui/src/index.ts"),l=s("./packages/jaeger-ui-components/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),c=s.n(l),d=s("./node_modules/memoize-one/dist/memoize-one.esm.js"),u=s("./node_modules/tinycolor2/tinycolor.js"),p=s.n(u),h=s("./node_modules/react/jsx-runtime.js");const g=["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#DA70BF","#4DC19C","#776E57"];let m;!function(e){e[e.Dark=0]="Dark",e[e.Light=1]="Light"}(m||(m={}));const f={type:m.Light,borderStyle:"1px solid #bbb",servicesColorPalette:["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#162A65","#DA70BF","#125C77","#4DC19C","#776E57"]};function b(e){return!(!e||!e.type)&&e.type===m.Light}const v=n.createContext(void 0);v.displayName="ThemeContext";const y=v.Provider;function x(e){return(0,h.jsx)(v.Consumer,{children:t=>{const s=w(t);return e.children(s)}})}const w=(0,d.default)((e=>{const t={};return b(e)||(t.servicesColorPalette=g),e?Object.assign({},f,t,e):f})),j=e=>{let t=t=>(0,h.jsx)(x,{children:s=>(0,h.jsx)(e,Object.assign({},Object.assign({},t,{theme:s})))});return t.displayName=`WithTheme(${e.displayName})`,t=c()(t,e),t.wrapped=e,t};function k(){const e=(0,n.useContext)(v);return Object.assign({},f,e)}const _=e=>(0,d.default)(e);function T(e,t,s){if(b(e))return t;{if(s){const e=p()(t);return p().mostReadable(s,[e.clone().lighten(25),e.clone().lighten(10),e,e.clone().darken(10),e.clone().darken(25)],{includeFallbackColors:!1}).toHex8String()}const e=p()(t).toHsl();e.l=1-e.l;const n=p()(e);return n.isLight()?n.darken(5).toHex8String():n.lighten(5).toHex8String()}}const I=_((()=>({TimelineCollapser:r.css`
      align-items: center;
      display: flex;
      flex: none;
      justify-content: center;
      margin-right: 0.5rem;
    `})));function C(e){const{onExpandAll:t,onExpandOne:s,onCollapseAll:n,onCollapseOne:r}=e,o=I();return(0,h.jsxs)("div",{className:o.TimelineCollapser,"data-test-id":"TimelineCollapser",children:[(0,h.jsx)(a.IconButton,{tooltip:"Expand +1",size:"xl",tooltipPlacement:"top",name:"angle-down",onClick:s}),(0,h.jsx)(a.IconButton,{tooltip:"Collapse +1",size:"xl",tooltipPlacement:"top",name:"angle-right",onClick:r}),(0,h.jsx)(a.IconButton,{tooltip:"Expand All",size:"xl",tooltipPlacement:"top",name:"angle-double-down",onClick:t}),(0,h.jsx)(a.IconButton,{tooltip:"Collapse All",size:"xl",tooltipPlacement:"top",name:"angle-double-right",onClick:n})]})}var S;!function(e){e.DragEnd="DragEnd",e.DragMove="DragMove",e.DragStart="DragStart",e.MouseEnter="MouseEnter",e.MouseLeave="MouseLeave",e.MouseMove="MouseMove"}(S||(S={}));const D=S;var E=s("./node_modules/lodash/lodash.js");const L=["getBounds","tag","resetBoundsOnResize"];function N(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class O{constructor(e){let{getBounds:t,tag:s,resetBoundsOnResize:n=!0}=e,r=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,L);N(this,"_bounds",void 0),N(this,"_isDragging",void 0),N(this,"_onMouseEnter",void 0),N(this,"_onMouseLeave",void 0),N(this,"_onMouseMove",void 0),N(this,"_onDragStart",void 0),N(this,"_onDragMove",void 0),N(this,"_onDragEnd",void 0),N(this,"_resetBoundsOnResize",void 0),N(this,"getBounds",void 0),N(this,"tag",void 0),N(this,"handleMouseEnter",void 0),N(this,"handleMouseMove",void 0),N(this,"handleMouseLeave",void 0),N(this,"handleMouseDown",void 0),N(this,"resetBounds",(()=>{this._bounds=void 0})),N(this,"_handleMinorMouseEvent",(e=>{const{button:t,clientX:s,type:n}=e;if(this._isDragging||0!==t)return;let r,o=null;if("mouseenter"===n)o=D.MouseEnter,r=this._onMouseEnter;else if("mouseleave"===n)o=D.MouseLeave,r=this._onMouseLeave;else{if("mousemove"!==n)throw new Error(`invalid event type: ${n}`);o=D.MouseMove,r=this._onMouseMove}if(!r)return;const{value:i,x:a}=this._getPosition(s);r({event:e,type:o,value:i,x:a,manager:this,tag:this.tag})})),N(this,"_handleDragEvent",(e=>{const{button:t,clientX:s,type:n}=e;let r,o=null;if("mousedown"===n){if(this._isDragging||0!==t)return;window.addEventListener("mousemove",this._handleDragEvent),window.addEventListener("mouseup",this._handleDragEvent);const e=(0,E.get)(document,"body.style");e&&(e.userSelect="none"),this._isDragging=!0,o=D.DragStart,r=this._onDragStart}else if("mousemove"===n){if(!this._isDragging)return;o=D.DragMove,r=this._onDragMove}else{if("mouseup"!==n)throw new Error(`invalid event type: ${n}`);if(!this._isDragging)return;this._stopDragging(),o=D.DragEnd,r=this._onDragEnd}if(!r)return;const{value:i,x:a}=this._getPosition(s);r({event:e,type:o,value:i,x:a,manager:this,tag:this.tag})})),this.handleMouseDown=this._handleDragEvent,this.handleMouseEnter=this._handleMinorMouseEvent,this.handleMouseMove=this._handleMinorMouseEvent,this.handleMouseLeave=this._handleMinorMouseEvent,this.getBounds=t,this.tag=s,this._isDragging=!1,this._bounds=void 0,this._resetBoundsOnResize=Boolean(n),this._resetBoundsOnResize&&window.addEventListener("resize",this.resetBounds),this._onMouseEnter=r.onMouseEnter,this._onMouseLeave=r.onMouseLeave,this._onMouseMove=r.onMouseMove,this._onDragStart=r.onDragStart,this._onDragMove=r.onDragMove,this._onDragEnd=r.onDragEnd}_getBounds(){return this._bounds||(this._bounds=this.getBounds(this.tag)),this._bounds}_getPosition(e){const{clientXLeft:t,maxValue:s,minValue:n,width:r}=this._getBounds();let o=e-t,i=o/r;return null!=n&&i<n?(i=n,o=n*r):null!=s&&i>s&&(i=s,o=s*r),{value:i,x:o}}_stopDragging(){window.removeEventListener("mousemove",this._handleDragEvent),window.removeEventListener("mouseup",this._handleDragEvent);const e=(0,E.get)(document,"body.style");e&&(e.userSelect=null),this._isDragging=!1}isDragging(){return this._isDragging}dispose(){this._isDragging&&this._stopDragging(),this._resetBoundsOnResize&&window.removeEventListener("resize",this.resetBounds),this._bounds=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0}}function P(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const M=_((()=>({TimelineColumnResizer:r.css`
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,wrapper:r.css`
      bottom: 0;
      position: absolute;
      top: 0;
    `,dragger:r.css`
      border-left: 2px solid transparent;
      cursor: col-resize;
      height: 5000px;
      margin-left: -1px;
      position: absolute;
      top: 0;
      width: 1px;
      z-index: 10;
      &:hover {
        border-left: 2px solid rgba(0, 0, 0, 0.3);
      }
      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -8px;
        right: 0;
        content: ' ';
      }
    `,draggerDragging:r.css`
      background: rgba(136, 0, 136, 0.05);
      width: unset;
      &::before {
        left: -2000px;
        right: -2000px;
      }
    `,draggerDraggingLeft:r.css`
      border-left: 2px solid #808;
      border-right: 1px solid #999;
    `,draggerDraggingRight:r.css`
      border-left: 1px solid #999;
      border-right: 2px solid #808;
    `,gripIcon:r.css`
      position: absolute;
      top: 0;
      bottom: 0;
      &::before,
      &::after {
        border-right: 1px solid #ccc;
        content: ' ';
        height: 9px;
        position: absolute;
        right: 9px;
        top: 25px;
      }
      &::after {
        right: 5px;
      }
    `,gripIconDragging:r.css`
      &::before,
      &::after {
        border-right: 1px solid rgba(136, 0, 136, 0.5);
      }
    `})));class R extends n.PureComponent{constructor(e){super(e),P(this,"state",void 0),P(this,"_dragManager",void 0),P(this,"_rootElm",void 0),P(this,"_setRootElm",(e=>{this._rootElm=e})),P(this,"_getDraggingBounds",(()=>{if(!this._rootElm)throw new Error("invalid state");const{left:e,width:t}=this._rootElm.getBoundingClientRect(),{min:s,max:n}=this.props;return{clientXLeft:e,width:t,maxValue:n,minValue:s}})),P(this,"_handleDragUpdate",(({value:e})=>{this.setState({dragPosition:e})})),P(this,"_handleDragEnd",(({manager:e,value:t})=>{e.resetBounds(),this.setState({dragPosition:null}),this.props.onChange(t)})),this._dragManager=new O({getBounds:this._getDraggingBounds,onDragEnd:this._handleDragEnd,onDragMove:this._handleDragUpdate,onDragStart:this._handleDragUpdate}),this._rootElm=void 0,this.state={dragPosition:null}}componentWillUnmount(){this._dragManager.dispose()}render(){let e,t;const{position:s,columnResizeHandleHeight:n}=this.props,{dragPosition:r}=this.state;e=100*s+"%";const o={left:e};let a=!1,l=!1;const c=M();if(this._dragManager.isDragging()&&this._rootElm&&null!=r){a=r<s,l=r>s,e=100*r+"%";t={left:100*Math.min(s,r)+"%",right:`calc(${100*(1-Math.max(s,r))}% - 1px)`}}else t=o;t.height=n;const d=a||l;return(0,h.jsxs)("div",{className:c.TimelineColumnResizer,ref:this._setRootElm,"data-test-id":"TimelineColumnResizer",children:[(0,h.jsx)("div",{className:i()(c.gripIcon,d&&c.gripIconDragging),style:o,"data-test-id":"TimelineColumnResizer--gripIcon"}),(0,h.jsx)("div",{"aria-hidden":!0,className:i()(c.dragger,d&&c.draggerDragging,l&&c.draggerDraggingRight,a&&c.draggerDraggingLeft),onMouseDown:this._dragManager.handleMouseDown,style:t,"data-test-id":"TimelineColumnResizer--dragger"})]})}}function $(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const H=_((()=>({TimelineViewingLayer:r.css`
      label: TimelineViewingLayer;
      bottom: 0;
      cursor: vertical-text;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,TimelineViewingLayerCursorGuide:r.css`
      label: TimelineViewingLayerCursorGuide;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: red;
    `,TimelineViewingLayerDragged:r.css`
      label: TimelineViewingLayerDragged;
      position: absolute;
      top: 0;
      bottom: 0;
    `,TimelineViewingLayerDraggedDraggingLeft:r.css`
      label: TimelineViewingLayerDraggedDraggingLeft;
      border-left: 1px solid;
    `,TimelineViewingLayerDraggedDraggingRight:r.css`
      label: TimelineViewingLayerDraggedDraggingRight;
      border-right: 1px solid;
    `,TimelineViewingLayerDraggedShiftDrag:r.css`
      label: TimelineViewingLayerDraggedShiftDrag;
      background-color: rgba(68, 68, 255, 0.2);
      border-color: #44f;
    `,TimelineViewingLayerDraggedReframeDrag:r.css`
      label: TimelineViewingLayerDraggedReframeDrag;
      background-color: rgba(255, 68, 68, 0.2);
      border-color: #f44;
    `,TimelineViewingLayerFullOverlay:r.css`
      label: TimelineViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `})));function V(e,t,s){return e+s*(t-e)}function B(e,t,s){return(s-e)/(t-e)}function A(e,t,s,n,o){const i=function(e,t){let[s,n]=e<t?[e,t]:[t,e];return s>=1||n<=0?{isOutOfView:!0}:(s<0&&(s=0),n>1&&(n=1),{isDraggingLeft:e>t,left:100*s+"%",width:100*(n-s)+"%"})}(B(e,t,s),B(e,t,n));if(function(e){return Reflect.has(e,"isOutOfView")}(i))return null;const{isDraggingLeft:a,left:l,width:c}=i,d=H(),u=(0,r.cx)({[d.TimelineViewingLayerDraggedDraggingRight]:!a,[d.TimelineViewingLayerDraggedReframeDrag]:!o,[d.TimelineViewingLayerDraggedShiftDrag]:o});return(0,h.jsx)("div",{className:(0,r.cx)(d.TimelineViewingLayerDragged,d.TimelineViewingLayerDraggedDraggingLeft,u),style:{left:l,width:c},"data-test-id":"Dragged"})}class F extends n.PureComponent{constructor(e){super(e),$(this,"_draggerReframe",void 0),$(this,"_root",void 0),$(this,"_setRoot",(e=>{this._root=e})),$(this,"_getDraggingBounds",(()=>{if(!this._root)throw new Error("invalid state");const{left:e,width:t}=this._root.getBoundingClientRect();return{clientXLeft:e,width:t}})),$(this,"_handleReframeMouseMove",(({value:e})=>{const[t,s]=this.props.viewRangeTime.current,n=V(t,s,e);this.props.updateNextViewRangeTime({cursor:n})})),$(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:void 0})})),$(this,"_handleReframeDragUpdate",(({value:e})=>{const{current:t,reframe:s}=this.props.viewRangeTime,[n,r]=t,o=V(n,r,e),i={reframe:{anchor:s?s.anchor:o,shift:o}};this.props.updateNextViewRangeTime(i)})),$(this,"_handleReframeDragEnd",(({manager:e,value:t})=>{const{current:s,reframe:n}=this.props.viewRangeTime,[r,o]=s,i=V(r,o,t),a=n?n.anchor:i,[l,c]=i<a?[i,a]:[a,i];e.resetBounds(),this.props.updateViewRangeTime(l,c,"timeline-header")})),this._draggerReframe=new O({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseLeave:this._handleReframeMouseLeave,onMouseMove:this._handleReframeMouseMove}),this._root=void 0}UNSAFE_componentWillReceiveProps(e){const{boundsInvalidator:t}=this.props;t!==e.boundsInvalidator&&this._draggerReframe.resetBounds()}componentWillUnmount(){this._draggerReframe.dispose()}render(){const{viewRangeTime:e}=this.props,{current:t,cursor:s,reframe:n,shiftEnd:r,shiftStart:o}=e,[i,a]=t;let l;!(null!=n||null!=r||null!=o)&&null!=s&&s>=i&&s<=a&&(l=100*B(i,a,s)+"%");const c=H();return(0,h.jsxs)("div",{"aria-hidden":!0,className:c.TimelineViewingLayer,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,"data-test-id":"TimelineViewingLayer",children:[null!=l&&(0,h.jsx)("div",{className:c.TimelineViewingLayerCursorGuide,style:{left:l},"data-test-id":"TimelineViewingLayer--cursorGuide"}),null!=n&&A(i,a,n.anchor,n.shift,!1),null!=r&&A(i,a,a,r,!0),null!=o&&A(i,a,i,o,!0)]})}}var z=s("./node_modules/moment-timezone/index.js"),W=s.n(z);const G=1e3,U=1e6,K=6e7,q=36e8,Z=Math.log10(G),X=[{unit:"d",microseconds:864e8,ofPrevious:24},{unit:"h",microseconds:q,ofPrevious:60},{unit:"m",microseconds:K,ofPrevious:60},{unit:"s",microseconds:U,ofPrevious:1e3},{unit:"ms",microseconds:G,ofPrevious:1e3},{unit:"μs",microseconds:1,ofPrevious:1e3}];const J=(e,t,s)=>function(e,t){const s=t+(Math.floor(Math.log10(Math.abs(e)))+1);return s<=0?Math.trunc(e):Number(e.toPrecision(s))}(e/s,t)*s;function Y(e){const[t,s]=(0,E.dropWhile)(X,(({microseconds:t},s)=>s<X.length-1&&t>e));if(1e3===t.ofPrevious)return`${(0,E.round)(e/t.microseconds,2)}${t.unit}`;const n=`${Math.floor(e/t.microseconds)}${t.unit}`,r=Math.round(e/s.microseconds%t.ofPrevious),o=`${r}${s.unit}`;return 0===r?n:`${n} ${o}`}function Q(e,t,s){return!(!Array.isArray(s.tags)||!s.tags.length)&&s.tags.some((s=>s.key===e&&s.value===t))}const ee=Q.bind(null,"span.kind","client"),te=Q.bind(null,"span.kind","server"),se=Q.bind(null,"error",!0),ne=Q.bind(null,"error","true"),re=e=>se(e)||ne(e);const oe=_((e=>({Ticks:r.css`
      label: Ticks;
      pointer-events: none;
    `,TicksTick:r.css`
      label: TicksTick;
      position: absolute;
      height: 100%;
      width: 1px;
      background: ${T(e,"#d8d8d8")};
      &:last-child {
        width: 0;
      }
    `,TicksTickLabel:r.css`
      label: TicksTickLabel;
      left: 0.25rem;
      position: absolute;
    `,TicksTickLabelEndAnchor:r.css`
      label: TicksTickLabelEndAnchor;
      left: initial;
      right: 0.25rem;
    `})));function ie(e){const{endTime:t,numTicks:s,showLabels:n,startTime:r}=e;let o;if(n){o=[];const e=(t||0)-(r||0);for(let t=0;t<s;t++){const n=(r||0)+t/(s-1)*e;o.push(Y(n))}}const a=oe(k()),l=[];for(let e=0;e<s;e++){const t=e/(s-1);l.push((0,h.jsx)("div",{className:a.TicksTick,style:{left:100*t+"%"},children:o&&(0,h.jsx)("span",{className:i()(a.TicksTickLabel,{[a.TicksTickLabelEndAnchor]:t>=1}),children:o[e]})},t))}return(0,h.jsx)("div",{className:a.Ticks,children:l})}ie.defaultProps={endTime:null,showLabels:null,startTime:null};const ae=r.css`
  position: relative;
`,le=r.css`
  margin-bottom: 0.25rem;
`,ce=r.css`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,de=r.css`
  margin: 0;
`,ue=r.css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,pe=r.css`
  padding-bottom: 0.5rem;
`,he=r.css`
  display: flex;
`,ge=r.css`
  align-items: center;
`,me=r.css`
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`,fe=r.css`
  text-align: right;
`,be=r.css`
  display: inline-block;
`,ve=r.css`
  margin: -0.2rem 0.25rem 0 0;
`,ye=r.css`
  text-overflow: ellipsis;
`,xe=r.css`
  width: 100%;
`,we=r.css`
  color: #aaa;
`,je=r.css`
  justify-content: flex-end;
`,ke=["children","className"],_e=["children","className","width","style"];function Te(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}const Ie=_((()=>({flexRow:r.css`
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
    `})));function Ce(e){const{children:t,className:s=""}=e,n=Te(e,ke),r=Ie();return(0,h.jsx)("div",Object.assign({className:i()(r.flexRow,s)},n,{children:t}))}function Se(e){const{children:t,className:s="",width:n,style:r}=e,o=Te(e,_e),a=100*n+"%",l=Object.assign({},r,{flexBasis:a,maxWidth:a});return(0,h.jsx)("div",Object.assign({className:i()(ae,s),style:l},o,{children:t}))}Ce.defaultProps={className:""},Se.defaultProps={className:"",style:{}},Ce.Cell=Se;const De=_((e=>({TimelineHeaderRow:r.css`
      label: TimelineHeaderRow;
      background: ${T(e,"#ececec")};
      border-bottom: 1px solid ${T(e,"#ccc")};
      height: 38px;
      line-height: 38px;
      width: 100%;
      z-index: 4;
      position: relative;
    `,TimelineHeaderRowTitle:r.css`
      label: TimelineHeaderRowTitle;
      flex: 1;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,TimelineHeaderWrapper:r.css`
      label: TimelineHeaderWrapper;
      align-items: center;
    `})));function Ee(e){const{duration:t,nameColumnWidth:s,numTicks:n,onCollapseAll:r,onCollapseOne:o,onColummWidthChange:a,onExpandAll:l,onExpandOne:c,updateViewRangeTime:d,updateNextViewRangeTime:u,viewRangeTime:p,columnResizeHandleHeight:g}=e,[m,f]=p.current,b=De(k());return(0,h.jsxs)(Ce,{className:b.TimelineHeaderRow,"data-test-id":"TimelineHeaderRow",children:[(0,h.jsxs)(Ce.Cell,{className:i()(he,ue,b.TimelineHeaderWrapper),width:s,children:[(0,h.jsx)("h4",{className:b.TimelineHeaderRowTitle,children:"Service & Operation"}),(0,h.jsx)(C,{onCollapseAll:r,onExpandAll:l,onCollapseOne:o,onExpandOne:c})]}),(0,h.jsxs)(Ce.Cell,{width:1-s,children:[(0,h.jsx)(F,{boundsInvalidator:s,updateNextViewRangeTime:u,updateViewRangeTime:d,viewRangeTime:p}),(0,h.jsx)(ie,{numTicks:n,startTime:m*t,endTime:f*t,showLabels:!0})]}),(0,h.jsx)(R,{columnResizeHandleHeight:g,position:s,onChange:a,min:.2,max:.85})]})}function Le(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class Ne{constructor(e){Le(this,"bufferLen",void 0),Le(this,"dataLen",void 0),Le(this,"heights",void 0),Le(this,"lastI",void 0),Le(this,"ys",void 0),this.ys=[],this.heights=[],this.bufferLen=e,this.dataLen=-1,this.lastI=-1}profileData(e){e!==this.dataLen&&(this.dataLen=e,this.ys.length=e,this.heights.length=e,this.lastI>=e&&(this.lastI=e-1))}calcHeights(e,t,s){null!=s&&(this.lastI=s);let n=e+this.bufferLen;if(n<=this.lastI)return;n>=this.heights.length&&(n=this.heights.length-1);let r=this.lastI;for(-1===this.lastI&&(r=0,this.ys[0]=0);r<=n;){const e=this.heights[r]=t(r);this.ys[r+1]=this.ys[r]+e,r++}this.lastI=n}calcYs(e,t){for(;(null==this.ys[this.lastI]||e>this.ys[this.lastI])&&this.lastI<this.dataLen-1;)this.calcHeights(this.lastI,t)}confirmHeight(e,t){let s=e;if(s>this.lastI)return void this.calcHeights(s,t);const n=t(s);if(n===this.heights[s])return;const r=n-this.heights[s];for(this.heights[s]=n;++s<=this.lastI;)this.ys[s]+=r;null!=this.ys[this.lastI+1]&&(this.ys[this.lastI+1]+=r)}findFloorIndex(e,t){this.calcYs(e,t);let s,n=0,r=this.lastI;if(this.ys.length<2||e<this.ys[1])return 0;if(e>this.ys[r])return r;for(;n<r;)if(s=n+.5*(r-n)|0,e>this.ys[s]){if(e<=this.ys[s+1])return s;n=s}else{if(!(e<this.ys[s]))return s;if(e>=this.ys[s-1])return s-1;r=s}throw new Error(`unable to find floor index for y=${e}`)}getRowPosition(e,t){return this.confirmHeight(e,t),{height:this.heights[e],y:this.ys[e]}}getEstimatedHeight(){const e=this.ys[this.lastI]+this.heights[this.lastI];return this.lastI>=this.dataLen-1?0|e:e/(this.lastI+1)*this.heights.length|0}}function Oe(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const Pe=100;class Me extends n.Component{constructor(e){super(e),Oe(this,"_yPositions",void 0),Oe(this,"_knownHeights",void 0),Oe(this,"_startIndexDrawn",void 0),Oe(this,"_endIndexDrawn",void 0),Oe(this,"_startIndex",void 0),Oe(this,"_endIndex",void 0),Oe(this,"_viewHeight",void 0),Oe(this,"_scrollTop",void 0),Oe(this,"_isScrolledOrResized",void 0),Oe(this,"_htmlTopOffset",void 0),Oe(this,"_windowScrollListenerAdded",void 0),Oe(this,"_htmlElm",void 0),Oe(this,"_wrapperElm",void 0),Oe(this,"_itemHolderElm",void 0),Oe(this,"getViewHeight",(()=>this._viewHeight)),Oe(this,"getBottomVisibleIndex",(()=>{const e=this._scrollTop+this._viewHeight;return this._yPositions.findFloorIndex(e,this._getHeight)})),Oe(this,"getTopVisibleIndex",(()=>this._yPositions.findFloorIndex(this._scrollTop,this._getHeight))),Oe(this,"getRowPosition",(e=>this._yPositions.getRowPosition(e,this._getHeight))),Oe(this,"_onScroll",(()=>{this._isScrolledOrResized||(this._isScrolledOrResized=!0,window.requestAnimationFrame(this._positionList))})),Oe(this,"_positionList",(()=>{if(this._isScrolledOrResized=!1,!this._wrapperElm)return;this._calcViewIndexes();const e=this.props.viewBufferMin>this._startIndex?0:this._startIndex-this.props.viewBufferMin,t=this.props.viewBufferMin<this.props.dataLength-this._endIndex?this._endIndex+this.props.viewBufferMin:this.props.dataLength-1;(e<this._startIndexDrawn||t>this._endIndexDrawn)&&this.forceUpdate()})),Oe(this,"_initWrapper",(e=>{this.props.windowScroller&&(this._wrapperElm=e,e&&(this._viewHeight=e.clientHeight))})),Oe(this,"_initItemHolder",(e=>{this._itemHolderElm=e,this._scanItemHeights()})),Oe(this,"_scanItemHeights",(()=>{const e=this.props.getIndexFromKey;if(!this._itemHolderElm)return;let t=null,s=null,n=!1;const r=this._itemHolderElm.childNodes,o=r.length;for(let e=0;e<o;e++){const o=r[e],i=o.getAttribute("data-item-key");if(!i){console.warn("itemKey not found");continue}const a=(o.firstElementChild||o).clientHeight;a!==this._knownHeights.get(i)&&(this._knownHeights.set(i,a),n?s=i:(n=!0,t=s=i))}if(null!=t&&null!=s){const n=e(t),r=s===t?n:e(s);this._yPositions.calcHeights(r,this._getHeight,n),this.forceUpdate()}})),Oe(this,"_getHeight",(e=>{const t=this.props.getKeyFromIndex(e),s=this._knownHeights.get(t);return null!=s&&s==s?s:this.props.itemHeightGetter(e,t)})),this._yPositions=new Ne(200),this._knownHeights=new Map,this._startIndexDrawn=2**20,this._endIndexDrawn=-1048576,this._startIndex=0,this._endIndex=0,this._viewHeight=-1,this._scrollTop=-1,this._isScrolledOrResized=!1,this._htmlTopOffset=-1,this._windowScrollListenerAdded=!1,this._htmlElm=document.documentElement,this._wrapperElm=void 0,this._itemHolderElm=void 0}componentDidMount(){if(this.props.windowScroller){if(this._wrapperElm){const{top:e}=this._wrapperElm.getBoundingClientRect();this._htmlTopOffset=e+this._htmlElm.scrollTop}window.addEventListener("scroll",this._onScroll),this._windowScrollListenerAdded=!0}else{var e;this._wrapperElm=this.props.scrollElement,null===(e=this._wrapperElm)||void 0===e||e.addEventListener("scroll",this._onScroll)}}componentDidUpdate(){this._itemHolderElm&&this._scanItemHeights()}componentWillUnmount(){var e;this._windowScrollListenerAdded?window.removeEventListener("scroll",this._onScroll):null===(e=this._wrapperElm)||void 0===e||e.removeEventListener("scroll",this._onScroll)}_isViewChanged(){if(!this._wrapperElm)return!1;const e=this.props.windowScroller,t=e?this._htmlElm.clientHeight:this._wrapperElm.clientHeight,s=e?this._htmlElm.scrollTop:this._wrapperElm.scrollTop;return t!==this._viewHeight||s!==this._scrollTop}_calcViewIndexes(){if(this.props.windowScroller)this._viewHeight=window.innerHeight-this._htmlTopOffset,this._scrollTop=window.scrollY;else{if(!this._wrapperElm)return this._viewHeight=-1,this._startIndex=0,void(this._endIndex=0);this._viewHeight=this._wrapperElm.clientHeight,this._scrollTop=this._wrapperElm.scrollTop}const e=this._scrollTop,t=this._scrollTop+this._viewHeight;this._startIndex=this._yPositions.findFloorIndex(e,this._getHeight),this._endIndex=this._yPositions.findFloorIndex(t,this._getHeight)}render(){const{dataLength:e,getKeyFromIndex:t,initialDraw:s=Pe,itemRenderer:n,viewBuffer:r,viewBufferMin:o}=this.props,i=this._getHeight,a=[];let l,c;if(this._yPositions.profileData(e),this._wrapperElm){this._isViewChanged()&&this._calcViewIndexes();const t=o>this._startIndex?0:this._startIndex-o,s=o<e-this._endIndex?this._endIndex+o:e-1;t<this._startIndexDrawn||s>this._endIndexDrawn?(l=r>this._startIndex?0:this._startIndex-r,c=this._endIndex+r,c>=e&&(c=e-1)):(l=this._startIndexDrawn,c=this._endIndexDrawn>e-1?e-1:this._endIndexDrawn)}else l=0,c=(s<e?s:e)-1;this._yPositions.calcHeights(c,i,l||-1),this._startIndexDrawn=l,this._endIndexDrawn=c,a.length=c-l+1;for(let e=l;e<=c;e++){const{y:s,height:r}=this._yPositions.getRowPosition(e,i),o={height:r,top:s,position:"absolute"},l=t(e),c={"data-item-key":l};a.push(n(l,o,e,c))}const d={style:{position:"relative"},ref:this._initWrapper};this.props.windowScroller||(d.onScroll=this._onScroll,d.style.height="100%",d.style.overflowY="auto");const u={position:"relative",height:this._yPositions.getEstimatedHeight()};return(0,h.jsx)("div",Object.assign({},d,{children:(0,h.jsx)("div",{style:u,children:(0,h.jsx)("div",{style:{position:"absolute",top:0,margin:0,padding:0},className:this.props.itemsWrapperClassName,ref:this._initItemHolder,children:a})})}))}}Oe(Me,"defaultProps",{initialDraw:Pe,itemsWrapperClassName:"",windowScroller:!1});var Re=s("./node_modules/react-icons/lib/io/alert.js"),$e=s.n(Re),He=s("./node_modules/react-icons/lib/io/arrow-right-a.js"),Ve=s.n(He),Be=s("./node_modules/react-icons/lib/io/network.js"),Ae=s.n(Be),Fe=s("./node_modules/react-icons/lib/md/file-upload.js"),ze=s.n(Fe),We=s("./node_modules/react-icons/lib/io/android-open.js"),Ge=s.n(We);const Ue=["isLarge","className"];const Ke=_((()=>({NewWindowIconLarge:r.css`
      label: NewWindowIconLarge;
      font-size: 1.5em;
    `})));function qe(e){const{isLarge:t,className:s}=e,n=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,Ue),r=Ke(),o=i()({[r.NewWindowIconLarge]:t},s);return(0,h.jsx)(Ge(),Object.assign({className:o},n))}qe.defaultProps={isLarge:!1};const Ze=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Popover,Object.assign({},e))})},Xe=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Tooltip,Object.assign({},e))})},Je=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Icon,Object.assign({},e))})},Ye=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Dropdown,Object.assign({},e))})},Qe=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Menu,Object.assign({},e))})},et=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.MenuItem,Object.assign({},e))})},tt=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Button,Object.assign({},e))})},st=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Divider,Object.assign({},e))})},nt=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.Input,Object.assign({},e))})},rt=function(e){return(0,h.jsx)(at,{children:t=>(0,h.jsx)(t.InputGroup,Object.assign({},e))})},ot=n.createContext(void 0);ot.displayName="UIElementsContext";const it=ot;function at(e){return(0,h.jsx)(ot.Consumer,{children:t=>{if(!t)throw new Error("Elements context is required. You probably forget to use UIElementsContext.Provider");return e.children(t)}})}const lt=n.createContext(void 0);lt.displayName="ExternalLinkContext";const ct=lt,dt=["reference","children","className","focusSpan"];function ut(e){const{reference:t,children:s,className:n,focusSpan:r}=e,o=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,dt);return delete o.onClick,t.span?(0,h.jsx)("a",Object.assign({role:"button",onClick:()=>r(t.spanID),className:n},o,{children:s})):(0,h.jsx)(ct.Consumer,{children:e=>{if(!e)throw new Error("ExternalLinkContext does not have a value, you probably forgot to setup it's provider");return(0,h.jsx)("a",Object.assign({href:e(t.traceID,t.spanID),target:"_blank",rel:"noopener noreferrer",className:n},o,{children:s}))}})}const pt=_((()=>({MultiParent:r.css`
      padding: 0 5px;
      color: #000;
      & ~ & {
        margin-left: 5px;
      }
    `,TraceRefLink:r.css`
      display: flex;
      justify-content: space-between;
    `,NewWindowIcon:r.css`
      margin: 0.2em 0 0;
    `,tooltip:r.css`
      max-width: none;
    `})));class ht extends n.PureComponent{constructor(...e){var t,s,n;super(...e),n=e=>{const t=pt();return(0,h.jsx)(Qe,{children:e.map((e=>{const{span:s,spanID:n}=e;return(0,h.jsx)(et,{children:(0,h.jsxs)(ut,{reference:e,focusSpan:this.props.focusSpan,className:t.TraceRefLink,children:[s?`${s.process.serviceName}:${s.operationName} - ${e.spanID}`:`(another trace) - ${e.spanID}`,!s&&(0,h.jsx)(qe,{className:t.NewWindowIcon})]})},`${n}`)}))})},(s="referencesList")in(t=this)?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n}render(){const{references:e,children:t,tooltipText:s,focusSpan:n}=this.props,r=pt(),o={arrowPointAtCenter:!0,mouseLeaveDelay:.5,placement:"bottom",title:s,overlayClassName:r.tooltip};if(e.length>1)return(0,h.jsx)(Xe,Object.assign({},o,{children:(0,h.jsx)(Ye,{overlay:this.referencesList(e),placement:"bottomRight",trigger:["click"],children:(0,h.jsx)("a",{className:r.MultiParent,children:t})})}));const i=e[0];return(0,h.jsx)(Xe,Object.assign({},o,{children:(0,h.jsx)(ut,{reference:i,focusSpan:n,className:r.MultiParent,children:t})}))}}var gt,mt,ft=s("./node_modules/react-icons/lib/io/chevron-right.js"),bt=s.n(ft),vt=s("./node_modules/react-icons/lib/io/ios-arrow-down.js"),yt=s.n(vt);function xt(e){return(0,E.get)((0,E.find)(e.references,(({span:e,refType:t})=>e&&e.spanID&&("CHILD_OF"===t||"FOLLOWS_FROM"===t))),"span")}function wt(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const jt=_((e=>({SpanTreeOffset:r.css`
      label: SpanTreeOffset;
      color: ${T(e,"#000")};
      position: relative;
    `,SpanTreeOffsetParent:r.css`
      label: SpanTreeOffsetParent;
      &:hover {
        cursor: pointer;
      }
    `,indentGuide:r.css`
      label: indentGuide;
      /* The size of the indentGuide is based off of the iconWrapper */
      padding-right: calc(0.5rem + 12px);
      height: 100%;
      border-left: 3px solid transparent;
      display: inline-flex;
      &::before {
        content: '';
        padding-left: 1px;
        background-color: ${T(e,"lightgrey")};
      }
    `,indentGuideActive:r.css`
      label: indentGuideActive;
      border-color: ${T(e,"darkgrey")};
      &::before {
        background-color: transparent;
      }
    `,iconWrapper:r.css`
      label: iconWrapper;
      position: absolute;
      right: 0.25rem;
    `})));class kt extends n.PureComponent{constructor(e){super(e),wt(this,"ancestorIds",void 0),wt(this,"handleMouseLeave",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,E.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.removeHoverIndentGuideId(t)})),wt(this,"handleMouseEnter",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,E.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.addHoverIndentGuideId(t)})),this.ancestorIds=function(e){const t=[];if(!e)return t;let s=xt(e);for(;s;)t.push(s.spanID),s=xt(s);return t}(e.span),this.ancestorIds.push("root"),this.ancestorIds.reverse()}render(){const{childrenVisible:e,onClick:t,showChildrenIcon:s,span:n,theme:r}=this.props,{hasChildren:o,spanID:a}=n,l=o?{onClick:t,role:"switch","aria-checked":e}:null,c=s&&o&&(e?gt||(gt=(0,h.jsx)(yt(),{})):mt||(mt=(0,h.jsx)(bt(),{}))),d=jt(r);return(0,h.jsxs)("span",Object.assign({className:i()(d.SpanTreeOffset,{[d.SpanTreeOffsetParent]:o})},l,{children:[this.ancestorIds.map((e=>(0,h.jsx)("span",{className:i()(d.indentGuide,{[d.indentGuideActive]:this.props.hoverIndentGuideIds.has(e)}),"data-ancestor-id":e,"data-test-id":"SpanTreeOffset--indentGuide",onMouseEnter:t=>this.handleMouseEnter(t,e),onMouseLeave:t=>this.handleMouseLeave(t,e)},e))),c&&(0,h.jsx)("span",{className:d.iconWrapper,onMouseEnter:e=>this.handleMouseEnter(e,a),onMouseLeave:e=>this.handleMouseLeave(e,a),"data-test-id":"icon-wrapper",children:c})]}))}}wt(kt,"displayName","UnthemedSpanTreeOffset"),wt(kt,"defaultProps",{childrenVisible:!1,showChildrenIcon:!0});const _t=j(kt);var Tt=s("./node_modules/fbjs/lib/shallowEqual.js"),It=s.n(Tt),Ct=(s("./node_modules/recompose/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),s("./node_modules/change-emitter/lib/index.js")),St=s("./node_modules/symbol-observable/es/index.js"),Dt=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},Lt=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Nt=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Ot=function(e,t,s,r,o){if(!e&&t)return s(o?Et({},r,{children:o}):r);var i=s;return o?n.createElement(i,r,o):n.createElement(i,r)},Pt=function(e){return Boolean(e&&e.prototype&&"function"==typeof e.prototype.render)},Mt=function(e){return Boolean("function"==typeof e&&!Pt(e)&&!e.defaultProps&&!e.contextTypes)},Rt=function(e){var t=Mt(e);return function(s,n){return Ot(!1,t,e,s,n)}},$t=function(e){return function(t){var s=Rt(t);return function(t){return s(e(t))}}},Ht=function(e,t){for(var s={},n=0;n<t.length;n++){var r=t[n];e.hasOwnProperty(r)&&(s[r]=e[r])}return s},Vt=(Object.keys,function(e){function t(){return Dt(this,t),Nt(this,e.apply(this,arguments))}Lt(t,e),t.prototype.render=function(){return null}}(n.Component),function(e){return function(t){var s=Rt(t);return function(t){function n(){return Dt(this,n),Nt(this,t.apply(this,arguments))}return Lt(n,t),n.prototype.shouldComponentUpdate=function(t){return e(this.props,t)},n.prototype.render=function(){return s(this.props)},n}(n.Component)}}),Bt=function(e){return Vt((function(t,s){return!It()(Ht(s,e),Ht(t,e))}))};var At,Ft={fromESObservable:null,toESObservable:null},zt={fromESObservable:function(e){return"function"==typeof Ft.fromESObservable?Ft.fromESObservable(e):e},toESObservable:function(e){return"function"==typeof Ft.toESObservable?Ft.toESObservable(e):e}},Wt=(At=zt,s("./node_modules/react-icons/lib/io/ios-arrow-right.js")),Gt=s.n(Wt);var Ut=s("./node_modules/json-markup/index.js"),Kt=s.n(Ut),qt=s("./node_modules/copy-to-clipboard/index.js"),Zt=s.n(qt);function Xt(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const Jt=_((()=>({CopyIcon:r.css`
      background-color: transparent;
      border: none;
      color: inherit;
      height: 100%;
      overflow: hidden;
      padding: 0px;
      &:focus {
        background-color: rgba(255, 255, 255, 0.25);
        color: inherit;
      }
    `})));class Yt extends n.PureComponent{constructor(...e){super(...e),Xt(this,"state",{hasCopied:!1}),Xt(this,"handleClick",(()=>{this.setState({hasCopied:!0}),Zt()(this.props.copyText)})),Xt(this,"handleTooltipVisibilityChange",(e=>{!e&&this.state.hasCopied&&this.setState({hasCopied:!1})}))}render(){const e=Jt();return(0,h.jsx)(Xe,{arrowPointAtCenter:!0,mouseLeaveDelay:.5,onVisibleChange:this.handleTooltipVisibilityChange,placement:this.props.placement,title:this.state.hasCopied?"Copied":this.props.tooltipTitle,children:(0,h.jsx)(tt,{className:i()(e.CopyIcon,this.props.className),htmlType:"button",icon:this.props.icon,onClick:this.handleClick})})}}Xt(Yt,"defaultProps",{className:void 0,icon:"copy",placement:"left"});const Qt="copyIcon",es=_((e=>({KeyValueTable:r.css`
      label: KeyValueTable;
      background: ${T(e,"#fff")};
      border: 1px solid ${T(e,"#ddd")};
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,body:r.css`
      label: body;
      vertical-align: baseline;
    `,row:r.css`
      label: row;
      & > td {
        padding: 0.25rem 0.5rem;
        padding: 0.25rem 0.5rem;
        vertical-align: top;
      }
      &:nth-child(2n) > td {
        background: ${T(e,"#f5f5f5")};
      }
      &:not(:hover) .${Qt} {
        visibility: hidden;
      }
    `,keyColumn:r.css`
      label: keyColumn;
      color: ${T(e,"#888")};
      white-space: pre;
      width: 125px;
    `,copyColumn:r.css`
      label: copyColumn;
      text-align: right;
    `,linkIcon:r.css`
      label: linkIcon;
      vertical-align: middle;
      font-weight: bold;
    `}))),ts=/^(\[|\{)/;function ss(e){if("string"==typeof e&&ts.test(e))try{return JSON.parse(e)}catch(e){}return e}const ns=e=>{const t=es(k());return(0,h.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[e.children," ",(0,h.jsx)(Je,{className:t.linkIcon,type:"export"})]})};ns.defaultProps={title:""};const rs=e=>(0,h.jsx)(Qe,{children:e.map((({text:e,url:t},s)=>(0,h.jsx)(et,{children:(0,h.jsx)(ns,{href:t,children:e})},`${t}-${s}`)))});function os(e){const{data:t,linksGetter:s}=e,n=es(k());return(0,h.jsx)("div",{className:i()(n.KeyValueTable),"data-test-id":"KeyValueTable",children:(0,h.jsx)("table",{className:xe,children:(0,h.jsx)("tbody",{className:n.body,children:t.map(((e,r)=>{const o={__html:Kt()(ss(e.value))},i=(0,h.jsx)("div",{className:be,dangerouslySetInnerHTML:o}),a=s?s(t,r):null;let l;return l=a&&1===a.length?(0,h.jsx)("div",{children:(0,h.jsx)(ns,{href:a[0].url,title:a[0].text,children:i})}):a&&a.length>1?(0,h.jsx)("div",{children:(0,h.jsx)(Ye,{overlay:rs(a),placement:"bottomRight",trigger:["click"],children:(0,h.jsxs)("a",{children:[i," ",(0,h.jsx)(Je,{className:n.linkIcon,type:"profile"})]})})}):i,(0,h.jsxs)("tr",{className:n.row,children:[(0,h.jsx)("td",{className:n.keyColumn,"data-test-id":"KeyValueTable--keyColumn",children:e.key}),(0,h.jsx)("td",{children:l}),(0,h.jsx)("td",{className:n.copyColumn,children:(0,h.jsx)(Yt,{className:Qt,copyText:JSON.stringify(e,null,2),tooltipTitle:"Copy JSON"})})]},`${e.key}-${r}`)}))})})})}const is=_((e=>({header:r.css`
      label: header;
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${T(e,"#e8e8e8")};
      }
    `,headerEmpty:r.css`
      label: headerEmpty;
      background: none;
      cursor: initial;
    `,headerHighContrast:r.css`
      label: headerHighContrast;
      &:hover {
        background: ${T(e,"#ddd")};
      }
    `,emptyIcon:r.css`
      label: emptyIcon;
      color: ${T(e,"#aaa")};
    `,summary:r.css`
      label: summary;
      display: inline;
      list-style: none;
      padding: 0;
    `,summaryItem:r.css`
      label: summaryItem;
      display: inline;
      margin-left: 0.7em;
      padding-right: 0.5rem;
      border-right: 1px solid ${T(e,"#ddd")};
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `,summaryLabel:r.css`
      label: summaryLabel;
      color: ${T(e,"#777")};
    `,summaryDelim:r.css`
      label: summaryDelim;
      color: ${T(e,"#bbb")};
      padding: 0 0.2em;
    `})));function as(e){const{data:t}=e,s=is(k());return Array.isArray(t)&&t.length?(0,h.jsx)("ul",{className:s.summary,children:t.map(((e,t)=>(0,h.jsxs)("li",{className:s.summaryItem,children:[(0,h.jsx)("span",{className:s.summaryLabel,children:e.key}),(0,h.jsx)("span",{className:s.summaryDelim,children:"="}),String(e.value)]},`${e.key}-${t}`)))}):null}function ls(e){const{className:t,data:s,highContrast:n,interactive:r,isOpen:o,label:a,linksGetter:l,onToggle:c}=e,d=!Array.isArray(s)||!s.length,u=is(k()),p=i()(ve,{[u.emptyIcon]:d});let g=null,m=null;return r&&(g=o?(0,h.jsx)(yt(),{className:p}):(0,h.jsx)(Gt(),{className:p}),m={"aria-checked":o,onClick:d?null:c,role:"switch"}),(0,h.jsxs)("div",{className:i()(t,ye),children:[(0,h.jsxs)("div",Object.assign({className:i()(u.header,{[u.headerEmpty]:d,[u.headerHighContrast]:n&&!d})},m,{"data-test-id":"AccordianKeyValues--header",children:[g,(0,h.jsxs)("strong",{"data-test":"label",children:[a,o||":"]}),!o&&(0,h.jsx)(as,{data:s})]})),o&&(0,h.jsx)(os,{data:s,linksGetter:l})]})}var cs,ds,us;as.defaultProps={data:null},ls.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const ps=_((e=>({AccordianLogs:r.css`
      label: AccordianLogs;
      border: 1px solid ${T(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianLogsHeader:r.css`
      label: AccordianLogsHeader;
      background: ${T(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${T(e,"#dadada")};
      }
    `,AccordianLogsContent:r.css`
      label: AccordianLogsContent;
      background: ${T(e,"#f0f0f0")};
      border-top: 1px solid ${T(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianLogsFooter:r.css`
      label: AccordianLogsFooter;
      color: ${T(e,"#999")};
    `})));function hs(e){const{interactive:t,isOpen:s,linksGetter:n,logs:r,openedItems:o,onItemToggle:i,onToggle:a,timestamp:l}=e;let c=null,d="span",u=null;t&&(c=s?cs||(cs=(0,h.jsx)(yt(),{className:ve})):ds||(ds=(0,h.jsx)(Gt(),{className:"u-align-icon"})),d="a",u={"aria-checked":s,onClick:a,role:"switch"});const p=ps(k());return(0,h.jsxs)("div",{className:p.AccordianLogs,children:[(0,h.jsxs)(d,Object.assign({className:p.AccordianLogsHeader},u,{children:[c," ",us||(us=(0,h.jsx)("strong",{children:"Logs"}))," (",r.length,")"]})),s&&(0,h.jsxs)("div",{className:p.AccordianLogsContent,children:[(0,E.sortBy)(r,"timestamp").map(((e,s)=>(0,h.jsx)(ls,{className:s<r.length-1?le:null,data:e.fields||[],highContrast:!0,interactive:t,isOpen:!!o&&o.has(e),label:`${Y(e.timestamp-l)}`,linksGetter:n,onToggle:t&&i?()=>i(e):null},`${e.timestamp}-${s}`))),(0,h.jsx)("small",{className:p.AccordianLogsFooter,children:"Log timestamps are relative to the start time of the full trace."})]})]})}hs.defaultProps={interactive:!0,linksGetter:void 0,onItemToggle:void 0,onToggle:void 0,openedItems:void 0};const gs=_((e=>({wrapper:r.css`
      label: wrapper;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    `,bar:r.css`
      label: bar;
      border-radius: 3px;
      min-width: 2px;
      position: absolute;
      height: 36%;
      top: 32%;
    `,rpc:r.css`
      label: rpc;
      position: absolute;
      top: 35%;
      bottom: 35%;
      z-index: 1;
    `,label:r.css`
      label: label;
      color: #aaa;
      font-size: 12px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1em;
      white-space: nowrap;
      padding: 0 0.5em;
      position: absolute;
    `,logMarker:r.css`
      label: logMarker;
      background-color: ${T(e,"#2c3235")};
      cursor: pointer;
      height: 60%;
      min-width: 1px;
      position: absolute;
      top: 20%;
      &:hover {
        background-color: ${T(e,"#464c54")};
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        border: 1px solid transparent;
      }
      &::after {
        left: 0;
      }
    `})));function ms(e){return`${(100*e).toFixed(1)}%`}const fs=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}((vs="label",ys="setLabel",xs=e=>e.shortLabel,function(e){var t=Rt(e);return function(e){function s(){var t,n;Dt(this,s);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return t=n=Nt(this,e.call.apply(e,[this].concat(o))),n.state={stateValue:"function"==typeof xs?xs(n.props):xs},n.updateStateValue=function(e,t){return n.setState((function(t){var s=t.stateValue;return{stateValue:"function"==typeof e?e(s):e}}),t)},Nt(n,t)}return Lt(s,e),s.prototype.render=function(){var e;return t(Et({},this.props,((e={})[vs]=this.state.stateValue,e[ys]=this.updateStateValue,e)))},s}(n.Component)}),(bs=({setLabel:e,shortLabel:t,longLabel:s})=>({setLongLabel:()=>e(s),setShortLabel:()=>e(t)}),$t((function(e){return Et({},e,"function"==typeof bs?bs(e):bs)}))),Bt(["label","rpc","viewStart","viewEnd"]))((function(e){const{viewEnd:t,viewStart:s,getViewedBounds:n,color:r,label:o,onClick:a,setLongLabel:l,setShortLabel:c,rpc:d,traceStartTime:u,span:p,theme:g,className:m,labelClassName:f}=e,b=(0,E.groupBy)(p.logs,(e=>{const t=n(e.timestamp,e.timestamp).start;return ms(Math.round(500*t)/500)})),v=gs(g);return(0,h.jsxs)("div",{className:i()(v.wrapper,m),onClick:a,onMouseLeave:c,onMouseOver:l,"aria-hidden":!0,"data-test-id":"SpanBar--wrapper",children:[(0,h.jsx)("div",{"aria-label":o,className:v.bar,style:{background:r,left:ms(s),width:ms(t-s)},children:(0,h.jsx)("div",{className:i()(v.label,f),"data-test-id":"SpanBar--label",children:o})}),(0,h.jsx)("div",{children:Object.keys(b).map((e=>(0,h.jsx)(Ze,{placement:"topLeft",content:(0,h.jsx)(hs,{interactive:!1,isOpen:!0,logs:b[e],timestamp:u}),children:(0,h.jsx)("div",{className:v.logMarker,style:{left:e}})},e)))}),d&&(0,h.jsx)("div",{className:v.rpc,style:{background:d.color,left:ms(d.viewStart),width:ms(d.viewEnd-d.viewStart)}})]})}));var bs,vs,ys,xs,ws,js,ks,_s;function Ts(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const Is="spanBar",Cs="spanBarLabel",Ss="nameWrapper",Ds="jaegerView",Es="nameColumn",Ls=_((e=>({nameWrapper:r.css`
      label: nameWrapper;
      line-height: 27px;
      overflow: hidden;
      display: flex;
    `,nameWrapperMatchingFilter:r.css`
      label: nameWrapperMatchingFilter;
      background-color: ${T(e,"#fffce4")};
    `,nameColumn:r.css`
      label: nameColumn;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:hover {
        z-index: 1;
      }
    `,endpointName:r.css`
      label: endpointName;
      color: ${T(e,"#808080")};
    `,view:r.css`
      label: view;
      position: relative;
    `,viewExpanded:r.css`
      label: viewExpanded;
      background: ${T(e,"#f8f8f8")};
      outline: 1px solid ${T(e,"#ddd")};
    `,viewExpandedAndMatchingFilter:r.css`
      label: viewExpandedAndMatchingFilter;
      background: ${T(e,"#fff3d7")};
      outline: 1px solid ${T(e,"#ddd")};
    `,row:r.css`
      label: row;
      &:hover .${Is} {
        opacity: 1;
      }
      &:hover .${Cs} {
        color: ${T(e,"#000")};
      }
      &:hover .${Ss} {
        background: #f8f8f8;
        background: linear-gradient(
          90deg,
          ${T(e,"#fafafa")},
          ${T(e,"#f8f8f8")} 75%,
          ${T(e,"#eee")}
        );
      }
      &:hover .${Ds} {
        background-color: ${T(e,"#f5f5f5")};
        outline: 1px solid ${T(e,"#ddd")};
      }
    `,rowClippingLeft:r.css`
      label: rowClippingLeft;
      & .${Es}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to right,
          ${T(e,"rgba(25, 25, 25, 0.25)")},
          ${T(e,"rgba(32, 32, 32, 0)")}
        );
        left: 100%;
        z-index: -1;
      }
    `,rowClippingRight:r.css`
      label: rowClippingRight;
      & .${Ds}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to left,
          ${T(e,"rgba(25, 25, 25, 0.25)")},
          ${T(e,"rgba(25, 25, 25, 0.25)")}
        );
        right: 0%;
        z-index: 1;
      }
    `,rowExpanded:r.css`
      label: rowExpanded;
      & .${Is} {
        opacity: 1;
      }
      & .${Cs} {
        color: ${T(e,"#000")};
      }
      & .${Ss}, &:hover .${Ss} {
        background: ${T(e,"#f0f0f0")};
        box-shadow: 0 1px 0 ${T(e,"#ddd")};
      }
      & .${"nameWrapperMatchingFilter"} {
        background: ${T(e,"#fff3d7")};
      }
      &:hover .${Ds} {
        background: ${T(e,"#eee")};
      }
    `,rowMatchingFilter:r.css`
      label: rowMatchingFilter;
      background-color: ${T(e,"#fffce4")};
      &:hover .${Ss} {
        background: linear-gradient(
          90deg,
          ${T(e,"#fff5e1")},
          ${T(e,"#fff5e1")} 75%,
          ${T(e,"#ffe6c9")}
        );
      }
      &:hover .${Ds} {
        background-color: ${T(e,"#fff3d7")};
        outline: 1px solid ${T(e,"#ddd")};
      }
    `,rowExpandedAndMatchingFilter:r.css`
      label: rowExpandedAndMatchingFilter;
      &:hover .${Ds} {
        background: ${T(e,"#ffeccf")};
      }
    `,name:r.css`
      label: name;
      color: ${T(e,"#000")};
      cursor: pointer;
      flex: 1 1 auto;
      outline: none;
      overflow: hidden;
      padding-left: 4px;
      padding-right: 0.25em;
      position: relative;
      text-overflow: ellipsis;
      &::before {
        content: ' ';
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 0;
        border-left: 4px solid;
        border-left-color: inherit;
      }

      /* This is so the hit area of the span-name extends the rest of the width of the span-name column */
      &::after {
        background: transparent;
        bottom: 0;
        content: ' ';
        left: 0;
        position: absolute;
        top: 0;
        width: 1000px;
      }
      &:focus {
        text-decoration: none;
      }
      &:hover > small {
        color: ${T(e,"#000")};
      }
    `,nameDetailExpanded:r.css`
      label: nameDetailExpanded;
      &::before {
        bottom: 0;
      }
    `,svcName:r.css`
      label: svcName;
      padding: 0 0.25rem 0 0.5rem;
      font-size: 1.05em;
    `,svcNameChildrenCollapsed:r.css`
      label: svcNameChildrenCollapsed;
      font-weight: bold;
      font-style: italic;
    `,errorIcon:r.css`
      label: errorIcon;
      border-radius: 6.5px;
      color: ${T(e,"#fff")};
      font-size: 0.85em;
      margin-right: 0.25rem;
      padding: 1px;
    `,rpcColorMarker:r.css`
      label: rpcColorMarker;
      border-radius: 6.5px;
      display: inline-block;
      font-size: 0.85em;
      height: 1em;
      margin-right: 0.25rem;
      padding: 1px;
      width: 1em;
      vertical-align: middle;
    `,labelRight:r.css`
      label: labelRight;
      left: 100%;
    `,labelLeft:r.css`
      label: labelLeft;
      right: 100%;
    `})));class Ns extends n.PureComponent{constructor(...e){super(...e),Ts(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),Ts(this,"_childrenToggle",(()=>{this.props.onChildrenToggled(this.props.span.spanID)}))}render(){const{className:e,color:t,columnDivision:s,isChildrenExpanded:n,isDetailExpanded:r,isMatchingFilter:o,numTicks:a,rpc:l,noInstrumentedServer:c,showErrorIcon:d,getViewedBounds:u,traceStartTime:p,span:g,focusSpan:m,hoverIndentGuideIds:f,addHoverIndentGuideId:b,removeHoverIndentGuideId:v,clippingLeft:y,clippingRight:x,theme:w,createSpanLink:j}=this.props,{duration:k,hasChildren:_,operationName:I,process:{serviceName:C}}=g,S=Y(k),D=u(g.startTime,g.startTime+g.duration),E=D.start,L=D.end,N=Ls(w),O=`${C}::${I}`;let P,M;return E>1-L?(P=`${O} | ${S}`,M=N.labelLeft):(P=`${S} | ${O}`,M=N.labelRight),(0,h.jsxs)(Ce,{className:i()(N.row,{[N.rowExpanded]:r,[N.rowMatchingFilter]:o,[N.rowExpandedAndMatchingFilter]:o&&r,[N.rowClippingLeft]:y,[N.rowClippingRight]:x},e),children:[(0,h.jsx)(Ce.Cell,{className:i()(N.nameColumn,Es),width:s,children:(0,h.jsxs)("div",{className:i()(N.nameWrapper,Ss,{[N.nameWrapperMatchingFilter]:o,nameWrapperMatchingFilter:o}),children:[(0,h.jsx)(_t,{childrenVisible:n,span:g,onClick:_?this._childrenToggle:void 0,hoverIndentGuideIds:f,addHoverIndentGuideId:b,removeHoverIndentGuideId:v}),(0,h.jsxs)("a",{className:i()(N.name,{[N.nameDetailExpanded]:r}),"aria-checked":r,title:O,onClick:this._detailToggle,role:"switch",style:{borderColor:t},tabIndex:0,children:[(0,h.jsxs)("span",{className:i()(N.svcName,{[N.svcNameChildrenCollapsed]:_&&!n}),children:[d&&(0,h.jsx)($e(),{style:{backgroundColor:g.errorIconColor?T(w,g.errorIconColor):T(w,"#db2828")},className:N.errorIcon}),C," ",l&&(0,h.jsxs)("span",{children:[ws||(ws=(0,h.jsx)(Ve(),{}))," ",(0,h.jsx)("i",{className:N.rpcColorMarker,style:{background:l.color}}),l.serviceName]}),c&&(0,h.jsxs)("span",{children:[js||(js=(0,h.jsx)(Ve(),{}))," ",(0,h.jsx)("i",{className:N.rpcColorMarker,style:{background:c.color}}),c.serviceName]})]}),(0,h.jsx)("small",{className:N.endpointName,children:l?l.operationName:I}),(0,h.jsxs)("small",{className:N.endpointName,children:[" | ",S]})]}),j&&(()=>{const e=j(g);return(0,h.jsx)("a",{href:e.href,target:"_blank",style:{marginRight:"5px"},rel:"noopener noreferrer",onClick:e.onClick?t=>{t.ctrlKey||t.metaKey||t.shiftKey||!e.onClick||(t.preventDefault(),e.onClick(t))}:void 0,children:e.content})})(),g.references&&g.references.length>1&&(0,h.jsx)(ht,{references:g.references,tooltipText:"Contains multiple references",focusSpan:m,children:ks||(ks=(0,h.jsx)(Ae(),{}))}),g.subsidiarilyReferencedBy&&g.subsidiarilyReferencedBy.length>0&&(0,h.jsx)(ht,{references:g.subsidiarilyReferencedBy,tooltipText:"This span is referenced by "+(1===g.subsidiarilyReferencedBy.length?"another span":"multiple other spans"),focusSpan:m,children:_s||(_s=(0,h.jsx)(ze(),{}))})]})}),(0,h.jsxs)(Ce.Cell,{className:i()(N.view,Ds,{[N.viewExpanded]:r,[N.viewExpandedAndMatchingFilter]:o&&r}),"data-test-id":"span-view",style:{cursor:"pointer"},width:1-s,onClick:this._detailToggle,children:[(0,h.jsx)(ie,{numTicks:a}),(0,h.jsx)(fs,{rpc:l,viewStart:E,viewEnd:L,theme:w,getViewedBounds:u,color:t,shortLabel:S,longLabel:P,traceStartTime:p,span:g,labelClassName:`spanBarLabel ${M}`,className:Is})]})]})}}Ts(Ns,"displayName","UnthemedSpanBarRow"),Ts(Ns,"defaultProps",{className:"",rpc:null});const Os=j(Ns),Ps=_((()=>({TextList:r.css`
      max-height: 450px;
      overflow: auto;
    `,List:r.css`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    `,item:r.css`
      padding: 0.25rem 0.5rem;
      vertical-align: top;
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `})));function Ms(e){const{data:t}=e,s=Ps();return(0,h.jsx)("div",{className:i()(s.TextList),"data-test-id":"TextList",children:(0,h.jsx)("ul",{className:s.List,children:t.map(((e,t)=>(0,h.jsx)("li",{className:s.item,children:e},`${t}`)))})})}const Rs=_((e=>({header:r.css`
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${T(e,"#e8e8e8")};
      }
    `})));function $s({data:e}){return(0,h.jsx)(Ms,{data:e})}function Hs(e){const{className:t,data:s,headerClassName:n,interactive:r,isOpen:o,label:a,onToggle:l,TextComponent:c=$s}=e,d=!Array.isArray(s)||!s.length,u=is(k()),p=i()(ve,{[u.emptyIcon]:d});let g=null,m=null;r&&(g=o?(0,h.jsx)(yt(),{className:p}):(0,h.jsx)(Gt(),{className:p}),m={"aria-checked":o,onClick:d?null:l,role:"switch"});const f=Rs(k());return(0,h.jsxs)("div",{className:t||"",children:[(0,h.jsxs)("div",Object.assign({className:i()(f.header,n)},m,{"data-test-id":"AccordianText--header",children:[g,(0,h.jsx)("strong",{children:a})," (",s.length,")"]})),o&&(0,h.jsx)(c,{data:s})]})}Hs.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const Vs=_((e=>({LabeledList:r.css`
      label: LabeledList;
      list-style: none;
      margin: 0;
      padding: 0;
    `,LabeledListItem:r.css`
      label: LabeledListItem;
      display: inline-block;
    `,LabeledListLabel:r.css`
      label: LabeledListLabel;
      color: ${b(e)?"#999":"#666"};
      margin-right: 0.25rem;
    `})));function Bs(e){var t;const{className:s,dividerClassName:n,items:r}=e,o=Vs(k());return(0,h.jsx)("ul",{className:i()(o.LabeledList,s),children:r.map((({key:e,label:s,value:i},a)=>{const l=a<r.length-1&&(0,h.jsx)("li",{className:o.LabeledListItem,children:t||(t=(0,h.jsx)(st,{className:n,type:"vertical"}))},`${e}--divider`);return[(0,h.jsxs)("li",{className:o.LabeledListItem,children:[(0,h.jsx)("span",{className:o.LabeledListLabel,children:s}),(0,h.jsx)("strong",{children:i})]},e),l]}))})}var As,Fs;const zs=_((()=>({ReferencesList:r.css`
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,list:r.css`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      background: #fff;
    `,itemContent:r.css`
      padding: 0.25rem 0.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `,item:r.css`
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `,debugInfo:r.css`
      letter-spacing: 0.25px;
      margin: 0.5em 0 0;
    `,debugLabel:r.css`
      margin: 0 5px 0 5px;
      &::before {
        color: #bbb;
        content: attr(data-label);
      }
    `})));function Ws(e){const{data:t,focusSpan:s}=e,n=zs();return(0,h.jsx)("div",{className:i()(n.ReferencesList),children:(0,h.jsx)("ul",{className:n.list,children:t.map((e=>(0,h.jsx)("li",{className:n.item,children:(0,h.jsx)(ut,{reference:e,focusSpan:s,children:(0,h.jsxs)("span",{className:n.itemContent,children:[e.span?(0,h.jsxs)("span",{children:[(0,h.jsx)("span",{className:"span-svc-name",children:e.span.process.serviceName}),(0,h.jsx)("small",{className:"endpoint-name",children:e.span.operationName})]}):As||(As=(0,h.jsx)("span",{className:"span-svc-name",children:"< span in another trace >"})),(0,h.jsxs)("small",{className:n.debugInfo,children:[(0,h.jsx)("span",{className:n.debugLabel,"data-label":"Reference Type:",children:e.refType}),(0,h.jsx)("span",{className:n.debugLabel,"data-label":"SpanID:",children:e.spanID})]})]})})},`${e.spanID}`)))})})}class Gs extends n.PureComponent{render(){const{data:e,interactive:t,isOpen:s,onToggle:n,focusSpan:r}=this.props,o=!Array.isArray(e)||!e.length,i=ve;let a=null,l=null;return t&&(a=s?(0,h.jsx)(yt(),{className:i}):(0,h.jsx)(Gt(),{className:i}),l={"aria-checked":s,onClick:o?null:n,role:"switch"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",Object.assign({},l,{children:[a,Fs||(Fs=(0,h.jsx)("strong",{children:(0,h.jsx)("span",{children:"References"})}))," ","(",e.length,")"]})),s&&(0,h.jsx)(Ws,{data:e,focusSpan:r})]})}}var Us,Ks,qs;qs={highContrast:!1,interactive:!0,onToggle:null},(Ks="defaultProps")in(Us=Gs)?Object.defineProperty(Us,Ks,{value:qs,enumerable:!0,configurable:!0,writable:!0}):Us[Ks]=qs;const Zs=_((e=>({divider:r.css`
      label: divider;
      background: ${T(e,"#ddd")};
    `,dividerVertical:r.css`
      label: dividerVertical;
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      clear: both;
      vertical-align: middle;
      position: relative;
      top: -0.06em;
    `,debugInfo:r.css`
      label: debugInfo;
      display: block;
      letter-spacing: 0.25px;
      margin: 0.5em 0 -0.75em;
      text-align: right;
    `,debugLabel:r.css`
      label: debugLabel;
      &::before {
        color: ${T(e,"#bbb")};
        content: attr(data-label);
      }
    `,debugValue:r.css`
      label: debugValue;
      background-color: inherit;
      border: none;
      color: ${T(e,"#888")};
      cursor: pointer;
      &:hover {
        color: ${T(e,"#333")};
      }
    `,AccordianWarnings:r.css`
      label: AccordianWarnings;
      background: ${T(e,"#fafafa")};
      border: 1px solid ${T(e,"#e4e4e4")};
      margin-bottom: 0.25rem;
    `,AccordianWarningsHeader:r.css`
      label: AccordianWarningsHeader;
      background: ${T(e,"#fff7e6")};
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${T(e,"#ffe7ba")};
      }
    `,AccordianWarningsHeaderOpen:r.css`
      label: AccordianWarningsHeaderOpen;
      border-bottom: 1px solid ${T(e,"#e8e8e8")};
    `,AccordianWarningsLabel:r.css`
      label: AccordianWarningsLabel;
      color: ${T(e,"#d36c08")};
    `,Textarea:r.css`
      word-break: break-all;
      white-space: pre;
    `})));function Xs(e){const{detailState:t,linksGetter:s,logItemToggle:n,logsToggle:r,processToggle:o,span:l,tagsToggle:c,traceStartTime:d,warningsToggle:u,stackTracesToggle:p,referencesToggle:g,focusSpan:m,createSpanLink:f}=e,{isTagsOpen:b,isProcessOpen:v,logs:y,isWarningsOpen:x,isReferencesOpen:w,isStackTracesOpen:j}=t,{operationName:_,process:T,duration:I,relativeStartTime:C,spanID:S,logs:D,tags:E,warnings:L,references:N,stackTraces:O}=l,P=[{key:"svc",label:"Service:",value:T.serviceName},{key:"duration",label:"Duration:",value:Y(I)},{key:"start",label:"Start Time:",value:Y(C)}],M=`${window.location.origin}${window.location.pathname}?uiFind=${S}`,R=Zs(k()),$=null==f?void 0:f(l);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{className:i()(he,ge,le),children:[(0,h.jsx)("h2",{className:i()(me,de),children:_}),(0,h.jsx)(Bs,{className:fe,dividerClassName:R.divider,items:P})]}),$?(0,h.jsx)(a.DataLinkButton,{link:Object.assign({},$,{title:"Logs for this span"}),buttonProps:{icon:"gf-logs"}}):null,(0,h.jsx)(st,{className:i()(R.divider,R.dividerVertical,ce)}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsx)(ls,{data:E,label:"Tags",linksGetter:s,isOpen:b,onToggle:()=>c(S)}),T.tags&&(0,h.jsx)(ls,{className:le,data:T.tags,label:"Process",linksGetter:s,isOpen:v,onToggle:()=>o(S)})]}),D&&D.length>0&&(0,h.jsx)(hs,{linksGetter:s,logs:D,isOpen:y.isOpen,openedItems:y.openedItems,onToggle:()=>r(S),onItemToggle:e=>n(S,e),timestamp:d}),L&&L.length>0&&(0,h.jsx)(Hs,{className:R.AccordianWarnings,headerClassName:R.AccordianWarningsHeader,label:(0,h.jsx)("span",{className:R.AccordianWarningsLabel,children:"Warnings"}),data:L,isOpen:x,onToggle:()=>u(S)}),O&&O.length&&(0,h.jsx)(Hs,{label:"Stack trace",data:O,isOpen:j,TextComponent:e=>{var t;let s;var n;(null===(t=e.data)||void 0===t?void 0:t.length)>1?s=e.data.map(((e,t)=>`StackTrace ${t+1}:\n${e}`)).join("\n"):s=null===(n=e.data)||void 0===n?void 0:n[0];return(0,h.jsx)(a.TextArea,{className:R.Textarea,style:{cursor:"unset"},readOnly:!0,cols:10,rows:10,value:s})},onToggle:()=>p(S)}),N&&N.length>0&&(N.length>1||"CHILD_OF"!==N[0].refType)&&(0,h.jsx)(Gs,{data:N,isOpen:w,onToggle:()=>g(S),focusSpan:m}),(0,h.jsxs)("small",{className:R.debugInfo,children:[(0,h.jsx)("span",{className:R.debugLabel,"data-label":"SpanID:"})," ",S,(0,h.jsx)(Yt,{copyText:M,icon:"link",placement:"topRight",tooltipTitle:"Copy deep link to this span"})]})]})]})}function Js(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const Ys=_((e=>({expandedAccent:r.css`
      cursor: pointer;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      &::before {
        border-left: 4px solid;
        pointer-events: none;
        width: 1000px;
      }
      &::after {
        border-right: 1000px solid;
        border-color: inherit;
        cursor: pointer;
        opacity: 0.2;
      }

      /* border-color inherit must come AFTER other border declarations for accent */
      &::before,
      &::after {
        border-color: inherit;
        content: ' ';
        position: absolute;
        height: 100%;
      }

      &:hover::after {
        opacity: 0.35;
      }
    `,infoWrapper:r.css`
      label: infoWrapper;
      border: 1px solid ${T(e,"#d3d3d3")};
      border-top: 3px solid;
      padding: 0.75rem;
    `})));class Qs extends n.PureComponent{constructor(...e){super(...e),Js(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),Js(this,"_linksGetter",((e,t)=>{const{linksGetter:s,span:n}=this.props;return s(n,e,t)}))}render(){const{color:e,columnDivision:t,detailState:s,logItemToggle:n,logsToggle:r,processToggle:o,referencesToggle:i,warningsToggle:a,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:u,focusSpan:p,hoverIndentGuideIds:g,addHoverIndentGuideId:m,removeHoverIndentGuideId:f,theme:b,createSpanLink:v}=this.props,y=Ys(b);return(0,h.jsxs)(Ce,{children:[(0,h.jsxs)(Ce.Cell,{width:t,style:{overflow:"hidden"},children:[(0,h.jsx)(_t,{span:c,showChildrenIcon:!1,hoverIndentGuideIds:g,addHoverIndentGuideId:m,removeHoverIndentGuideId:f}),(0,h.jsx)("span",{children:(0,h.jsx)("span",{className:y.expandedAccent,"aria-checked":"true",onClick:this._detailToggle,role:"switch",style:{borderColor:e},"data-test-id":"detail-row-expanded-accent"})})]}),(0,h.jsx)(Ce.Cell,{width:1-t,children:(0,h.jsx)("div",{className:y.infoWrapper,style:{borderTopColor:e},children:(0,h.jsx)(Xs,{detailState:s,linksGetter:this._linksGetter,logItemToggle:n,logsToggle:r,processToggle:o,referencesToggle:i,warningsToggle:a,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:u,focusSpan:p,createSpanLink:v})})})]})}}const en=j(Qs);function tn(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function sn(e){if(7!==e.length)return[0,0,0];const t=e.slice(1,3),s=e.slice(3,5),n=e.slice(5);return[parseInt(t,16),parseInt(s,16),parseInt(n,16)]}class nn{constructor(e){tn(this,"colorsHex",void 0),tn(this,"colorsRgb",void 0),tn(this,"cache",void 0),tn(this,"currentIdx",void 0),this.colorsHex=e,this.colorsRgb=e.map(sn),this.cache=new Map,this.currentIdx=0}_getColorIndex(e){let t=this.cache.get(e);return null==t&&(t=this.currentIdx,this.cache.set(e,this.currentIdx),this.currentIdx=++this.currentIdx%this.colorsHex.length),t}getColorByKey(e){const t=this._getColorIndex(e);return this.colorsHex[t]}getRgbColorByKey(e){const t=this._getColorIndex(e);return this.colorsRgb[t]}clear(){this.cache.clear(),this.currentIdx=0}}const rn=(0,d.default)((e=>new nn(e)));function on(e,t){return rn(t.servicesColorPalette).getColorByKey(e)}function an(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const ln=_((()=>({rowsWrapper:r.css`
      width: 100%;
    `,row:r.css`
      width: 100%;
    `}))),cn=28,dn=161,un=197;const pn=(0,d.default)((function(e,t,s){return e?function(e,t,s){if(!e)return[];let n=null;const r=[];for(let o=0;o<e.length;o++){const i=e[o],{spanID:a,depth:l}=i;let c=!1;null!=n&&(l>=n?c=!0:n=null),c||(t.has(a)&&(n=l+1),r.push({span:i,isDetail:!1,spanIndex:o}),s.has(a)&&r.push({span:i,isDetail:!0,spanIndex:o}))}return r}(e.spans,t,s):[]})),hn=(0,d.default)((function(e){const{min:t,max:s,viewStart:n,viewEnd:r}=e,o=s-t,i=t+n*o,a=s-(1-r)*o-i;return(e,t)=>({start:(e-i)/a,end:(t-i)/a})}),E.isEqual),gn=(0,d.default)((function(e){const[t,s]=e;return{left:t>0,right:s<1}}),E.isEqual);class mn extends n.Component{constructor(e){super(e),an(this,"listView",void 0),an(this,"getViewRange",(()=>this.props.currentViewRangeTime)),an(this,"getSearchedSpanIDs",(()=>this.props.findMatchesIDs)),an(this,"getCollapsedChildren",(()=>this.props.childrenHiddenIDs)),an(this,"mapRowIndexToSpanIndex",(e=>this.getRowStates()[e].spanIndex)),an(this,"mapSpanIndexToRowIndex",(e=>{const t=this.getRowStates().length;for(let s=0;s<t;s++){const{spanIndex:t}=this.getRowStates()[s];if(t===e)return s}throw new Error(`unable to find row for span index: ${e}`)})),an(this,"setListView",(e=>{const t=this.listView!==e;this.listView=e,e&&t&&this.props.registerAccessors(this.getAccessors())})),an(this,"getKeyFromIndex",(e=>{const{isDetail:t,span:s}=this.getRowStates()[e];return`${s.spanID}--${t?"detail":"bar"}`})),an(this,"getIndexFromKey",(e=>{const t=e.split("--"),s=t[0],n="detail"===t[1],r=this.getRowStates().length;for(let e=0;e<r;e++){const{span:t,isDetail:r}=this.getRowStates()[e];if(t.spanID===s&&r===n)return e}return-1})),an(this,"getRowHeight",(e=>{const{span:t,isDetail:s}=this.getRowStates()[e];return s?Array.isArray(t.logs)&&t.logs.length?un:dn:cn})),an(this,"renderRow",((e,t,s,n)=>{const{isDetail:r,span:o,spanIndex:i}=this.getRowStates()[s];return r?this.renderSpanDetailRow(o,e,t,n):this.renderSpanBarRow(o,i,e,t,n)}));const{setTrace:t,trace:s,uiFind:n}=e;t(s,n)}shouldComponentUpdate(e){const t=Object.keys(e);for(let s=0;s<t.length;s+=1)if(e[t[s]]!==this.props[t[s]]){if("shouldScrollToFirstUiFindMatch"!==t[s])return!0;if(e[t[s]])return!0}return!1}componentDidUpdate(e){const{registerAccessors:t,trace:s}=e,{shouldScrollToFirstUiFindMatch:n,clearShouldScrollToFirstUiFindMatch:r,scrollToFirstVisibleSpan:o,registerAccessors:i,setTrace:a,trace:l,uiFind:c}=this.props;s!==l&&a(l,c),this.listView&&t!==i&&i(this.getAccessors()),n&&(o(),r())}getRowStates(){const{childrenHiddenIDs:e,detailStates:t,trace:s}=this.props;return pn(s,e,t)}getClipping(){const{currentViewRangeTime:e}=this.props;return gn(e)}getViewedBounds(){const{currentViewRangeTime:e,trace:t}=this.props,[s,n]=e;return hn({min:t.startTime,max:t.endTime,viewStart:s,viewEnd:n})}getAccessors(){const e=this.listView;if(!e)throw new Error("ListView unavailable");return{getViewRange:this.getViewRange,getSearchedSpanIDs:this.getSearchedSpanIDs,getCollapsedChildren:this.getCollapsedChildren,getViewHeight:e.getViewHeight,getBottomRowIndexVisible:e.getBottomVisibleIndex,getTopRowIndexVisible:e.getTopVisibleIndex,getRowPosition:e.getRowPosition,mapRowIndexToSpanIndex:this.mapRowIndexToSpanIndex,mapSpanIndexToRowIndex:this.mapSpanIndexToRowIndex}}renderSpanBarRow(e,t,s,n,r){const{spanID:o}=e,{serviceName:i}=e.process,{childrenHiddenIDs:a,childrenToggle:l,detailStates:c,detailToggle:d,findMatchesIDs:u,spanNameColumnWidth:p,trace:g,focusSpan:m,hoverIndentGuideIds:f,addHoverIndentGuideId:b,removeHoverIndentGuideId:v,theme:y,createSpanLink:x}=this.props;if(!g)return null;const w=on(i,y),j=a.has(o),k=c.has(o),_=!!u&&u.has(o),T=re(e)||j&&function(e,t){const{depth:s}=e[t];let n=t+1;for(;n<e.length&&e[n].depth>s;n++)if(re(e[n]))return!0;return!1}(g.spans,t);let I=null;if(j){const e=function(e){if(e.length<=1||!ee(e[0]))return!1;const t=e[0].depth+1;let s=1;for(;s<e.length&&e[s].depth===t;){if(te(e[s]))return e[s];s++}return null}(g.spans.slice(t));if(e){const t=this.getViewedBounds()(e.startTime,e.startTime+e.duration);I={color:on(e.process.serviceName,y),operationName:e.operationName,serviceName:e.process.serviceName,viewEnd:t.end,viewStart:t.start}}}const C=e.tags.find((e=>"peer.service"===e.key));let S=null;!e.hasChildren&&C&&(e=>e.tags.some((({key:e,value:t})=>"span.kind"===e&&"client"===t)))(e)&&(S={serviceName:C.value,color:on(C.value,y)});const D=ln();return(0,h.jsx)("div",Object.assign({className:D.row,style:n},r,{children:(0,h.jsx)(Os,{clippingLeft:this.getClipping().left,clippingRight:this.getClipping().right,color:w,columnDivision:p,isChildrenExpanded:!j,isDetailExpanded:k,isMatchingFilter:_,numTicks:5,onDetailToggled:d,onChildrenToggled:l,rpc:I,noInstrumentedServer:S,showErrorIcon:T,getViewedBounds:this.getViewedBounds(),traceStartTime:g.startTime,span:e,focusSpan:m,hoverIndentGuideIds:f,addHoverIndentGuideId:b,removeHoverIndentGuideId:v,createSpanLink:x})}),s)}renderSpanDetailRow(e,t,s,n){const{spanID:r}=e,{serviceName:o}=e.process,{detailLogItemToggle:i,detailLogsToggle:a,detailProcessToggle:l,detailReferencesToggle:c,detailWarningsToggle:d,detailStackTracesToggle:u,detailStates:p,detailTagsToggle:g,detailToggle:m,spanNameColumnWidth:f,trace:b,focusSpan:v,hoverIndentGuideIds:y,addHoverIndentGuideId:x,removeHoverIndentGuideId:w,linksGetter:j,theme:k,createSpanLink:_}=this.props,T=p.get(r);if(!b||!T)return null;const I=on(o,k),C=ln();return(0,h.jsx)("div",Object.assign({className:C.row,style:Object.assign({},s,{zIndex:1})},n,{children:(0,h.jsx)(en,{color:I,columnDivision:f,onDetailToggled:m,detailState:T,linksGetter:j,logItemToggle:i,logsToggle:a,processToggle:l,referencesToggle:c,warningsToggle:d,stackTracesToggle:u,span:e,tagsToggle:g,traceStartTime:b.startTime,focusSpan:v,hoverIndentGuideIds:y,addHoverIndentGuideId:x,removeHoverIndentGuideId:w,createSpanLink:_})}),t)}render(){const e=ln(),{scrollElement:t}=this.props;return(0,h.jsx)("div",{children:(0,h.jsx)(Me,{ref:this.setListView,dataLength:this.getRowStates().length,itemHeightGetter:this.getRowHeight,itemRenderer:this.renderRow,viewBuffer:50,viewBufferMin:50,itemsWrapperClassName:e.rowsWrapper,getKeyFromIndex:this.getKeyFromIndex,getIndexFromKey:this.getIndexFromKey,windowScroller:!1,scrollElement:t})})}}const fn=j(mn);var bn=s("./node_modules/combokeys/Combokeys/index.js"),vn=s.n(bn);const yn={scrollPageDown:{binding:"s",label:"Scroll down"},scrollPageUp:{binding:"w",label:"Scroll up"},scrollToNextVisibleSpan:{binding:"f",label:"Scroll to the next visible span"},scrollToPrevVisibleSpan:{binding:"b",label:"Scroll to the previous visible span"},panLeft:{binding:["a","left"],label:"Pan left"},panLeftFast:{binding:["shift+a","shift+left"],label:"Pan left — Large"},panRight:{binding:["d","right"],label:"Pan right"},panRightFast:{binding:["shift+d","shift+right"],label:"Pan right — Large"},zoomIn:{binding:"up",label:"Zoom in"},zoomInFast:{binding:"shift+up",label:"Zoom in — Large"},zoomOut:{binding:"down",label:"Zoom out"},zoomOutFast:{binding:"shift+down",label:"Zoom out — Large"},collapseAll:{binding:"]",label:"Collapse All"},expandAll:{binding:"[",label:"Expand All"},collapseOne:{binding:"p",label:"Collapse One Level"},expandOne:{binding:"o",label:"Expand One Level"},searchSpans:{binding:"ctrl+b",label:"Search Spans"},clearSearch:{binding:"escape",label:"Clear Search"}};let xn;function wn(){if(xn)return xn;const e=new(vn())(document.body);return xn=e,e}const jn=["setSpanNameColumnWidth","updateNextViewRangeTime","updateViewRangeTime","viewRange","createLinkToExternalSpan","traceTimeline","theme"];function kn(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const _n=_((e=>({TraceTimelineViewer:r.css`
      label: TraceTimelineViewer;
      border-bottom: 1px solid ${T(e,"#bbb")};

      & .json-markup {
        line-height: 17px;
        font-size: 13px;
        font-family: monospace;
        white-space: pre-wrap;
      }

      & .json-markup-key {
        font-weight: bold;
      }

      & .json-markup-bool {
        color: ${T(e,"firebrick")};
      }

      & .json-markup-string {
        color: ${T(e,"teal")};
      }

      & .json-markup-null {
        color: ${T(e,"teal")};
      }

      & .json-markup-number {
        color: ${T(e,"blue","black")};
      }
    `})));class Tn extends n.PureComponent{constructor(e){super(e),kn(this,"collapseAll",(()=>{this.props.collapseAll(this.props.trace.spans)})),kn(this,"collapseOne",(()=>{this.props.collapseOne(this.props.trace.spans)})),kn(this,"expandAll",(()=>{this.props.expandAll()})),kn(this,"expandOne",(()=>{this.props.expandOne(this.props.trace.spans)})),this.state={height:0}}componentDidMount(){!function(e){const t=wn();Object.keys(e).forEach((s=>{const n=e[s];n&&t.bind(yn[s].binding,n)}))}({collapseAll:this.collapseAll,expandAll:this.expandAll,collapseOne:this.collapseOne,expandOne:this.expandOne})}render(){const e=this.props,{setSpanNameColumnWidth:t,updateNextViewRangeTime:s,updateViewRangeTime:n,viewRange:r,createLinkToExternalSpan:o,traceTimeline:i,theme:a}=e,l=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,jn),{trace:c}=l,d=_n(a);return(0,h.jsx)(ct.Provider,{value:o,children:(0,h.jsxs)("div",{className:d.TraceTimelineViewer,ref:e=>e&&this.setState({height:e.getBoundingClientRect().height}),children:[(0,h.jsx)(Ee,{duration:c.duration,nameColumnWidth:i.spanNameColumnWidth,numTicks:5,onCollapseAll:this.collapseAll,onCollapseOne:this.collapseOne,onColummWidthChange:t,onExpandAll:this.expandAll,onExpandOne:this.expandOne,viewRangeTime:r.time,updateNextViewRangeTime:s,updateViewRangeTime:n,columnResizeHandleHeight:this.state.height}),(0,h.jsx)(fn,Object.assign({},l,i,{setSpanNameColumnWidth:t,currentViewRangeTime:r.time.current}))]})})}}const In=j(Tn);var Cn=s("./node_modules/react-icons/lib/md/keyboard-arrow-right.js"),Sn=s.n(Cn);function Dn(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const En=_((e=>({CanvasSpanGraph:r.css`
      label: CanvasSpanGraph;
      background: ${T(e,"#fafafa")};
      height: 60px;
      position: absolute;
      width: 100%;
    `})));class Ln extends n.PureComponent{constructor(e){super(e),Dn(this,"_canvasElm",void 0),Dn(this,"getColor",(e=>function(e,t){return rn(t.servicesColorPalette).getRgbColorByKey(e)}(e,this.props.theme))),Dn(this,"_setCanvasRef",(e=>{this._canvasElm=e})),this._canvasElm=void 0}componentDidMount(){this._draw()}componentDidUpdate(){this._draw()}_draw(){if(this._canvasElm){const{valueWidth:e,items:t}=this.props;!function(e,t,s,n,r){const o=new Map,i=t.length<60?60:Math.min(t.length,200),a=2*window.innerWidth;e.width=a,e.height=i;const l=Math.min(6,Math.max(2,i/t.length)),c=i/t.length,d=e.getContext("2d",{alpha:!1});d.fillStyle=r,d.fillRect(0,0,a,i);for(let e=0;e<t.length;e++){const{valueWidth:r,valueOffset:i,serviceName:u}=t[e],p=i/s*a;let h=r/s*a;h<10&&(h=10);let g=o.get(u);g||(g=`rgba(${n(u).concat(.8).join()})`,o.set(u,g)),d.fillStyle=g,d.fillRect(p,e*c,h,l)}}(this._canvasElm,t,e,this.getColor,T(this.props.theme,"#fff"))}}render(){return(0,h.jsx)("canvas",{className:En(this.props.theme).CanvasSpanGraph,ref:this._setCanvasRef})}}const Nn=j(Ln),On=_((()=>({TickLabels:r.css`
      label: TickLabels;
      height: 1rem;
      position: relative;
    `,TickLabelsLabel:r.css`
      label: TickLabelsLabel;
      color: #717171;
      font-size: 0.7rem;
      position: absolute;
      user-select: none;
    `})));function Pn(e){const{numTicks:t,duration:s}=e,n=On(),r=[];for(let e=0;e<t+1;e++){const o=e/t,i=1===o?{right:"0%"}:{left:100*o+"%"};r.push((0,h.jsx)("div",{className:n.TickLabelsLabel,style:i,"data-test":"tick",children:Y(s*o)},o))}return(0,h.jsx)("div",{className:n.TickLabels,children:r})}const Mn=_((()=>({GraphTick:r.css`
      label: GraphTick;
      stroke: #aaa;
      stroke-width: 1px;
    `})));function Rn(e){const{numTicks:t}=e,s=[];for(let e=1;e<t;e++){const n=e/t*100+"%";s.push((0,h.jsx)("line",{className:Mn().GraphTick,x1:n,y1:"0%",x2:n,y2:"100%"},e/t))}return(0,h.jsx)("g",{"data-test":"ticks","aria-hidden":"true",children:s})}const $n=_((()=>({ScrubberHandleExpansion:i()(r.css`
        label: ScrubberHandleExpansion;
        cursor: col-resize;
        fill-opacity: 0;
        fill: #44f;
      `,"scrubber-handle-expansion"),ScrubberHandle:i()(r.css`
        label: ScrubberHandle;
        cursor: col-resize;
        fill: #555;
      `,"scrubber-handle"),ScrubberLine:i()(r.css`
        label: ScrubberLine;
        pointer-events: none;
        stroke: #555;
      `,"scrubber-line"),ScrubberDragging:r.css`
      label: ScrubberDragging;
      & .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      & .scrubber-handle {
        fill: #44f;
      }
      & > .scrubber-line {
        stroke: #44f;
      }
    `,ScrubberHandles:r.css`
      label: ScrubberHandles;
      &:hover > .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      &:hover > .scrubber-handle {
        fill: #44f;
      }
      &:hover + .scrubber.line {
        stroke: #44f;
      }
    `})));function Hn({isDragging:e,onMouseDown:t,onMouseEnter:s,onMouseLeave:n,position:r}){const o=100*r+"%",a=$n(),l=i()({[a.ScrubberDragging]:e});return(0,h.jsxs)("g",{className:l,children:[(0,h.jsxs)("g",{className:a.ScrubberHandles,onMouseDown:t,onMouseEnter:s,onMouseLeave:n,children:[(0,h.jsx)("rect",{x:o,className:a.ScrubberHandleExpansion,style:{transform:"translate(-4.5px)"},width:"9",height:"20"}),(0,h.jsx)("rect",{x:o,className:a.ScrubberHandle,style:{transform:"translate(-1.5px)"},width:"3",height:"20"})]}),(0,h.jsx)("line",{className:a.ScrubberLine,y2:"100%",x1:o,x2:o})]})}function Vn(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const Bn=_((e=>{const t="JaegerUiComponents__ViewingLayerResetZoomHoverClassName",s=r.css`
    label: ViewingLayerResetZoom;
    display: none;
    position: absolute;
    right: 1%;
    top: 10%;
    z-index: 1;
  `;return{ViewingLayer:r.css`
      label: ViewingLayer;
      cursor: vertical-text;
      position: relative;
      z-index: 1;
      &:hover > .${t} {
        display: unset;
      }
    `,ViewingLayerGraph:r.css`
      label: ViewingLayerGraph;
      border: 1px solid ${T(e,"#999")};
      /* need !important here to overcome something from semantic UI */
      overflow: visible !important;
      position: relative;
      transform-origin: 0 0;
      width: 100%;
    `,ViewingLayerInactive:r.css`
      label: ViewingLayerInactive;
      fill: ${T(e,"rgba(214, 214, 214, 0.5)")};
    `,ViewingLayerCursorGuide:r.css`
      label: ViewingLayerCursorGuide;
      stroke: ${T(e,"#f44")};
      stroke-width: 1;
    `,ViewingLayerDraggedShift:r.css`
      label: ViewingLayerDraggedShift;
      fill-opacity: 0.2;
    `,ViewingLayerDrag:r.css`
      label: ViewingLayerDrag;
      fill: ${T(e,"#44f")};
    `,ViewingLayerFullOverlay:r.css`
      label: ViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `,ViewingLayerResetZoom:s,ViewingLayerResetZoomHoverClassName:t}})),An="SHIFT_END",Fn="SHIFT_START",zn="REFRAME";class Wn extends n.PureComponent{constructor(e){super(e),Vn(this,"state",void 0),Vn(this,"_root",void 0),Vn(this,"_draggerReframe",void 0),Vn(this,"_draggerStart",void 0),Vn(this,"_draggerEnd",void 0),Vn(this,"_setRoot",(e=>{this._root=e})),Vn(this,"_getDraggingBounds",(e=>{if(!this._root)throw new Error("invalid state");const{left:t,width:s}=this._root.getBoundingClientRect(),[n,r]=this.props.viewRange.time.current;let o=1,i=0;return e===Fn?o=r:e===An&&(i=n),{clientXLeft:t,maxValue:o,minValue:i,width:s}})),Vn(this,"_handleReframeMouseMove",(({value:e})=>{this.props.updateNextViewRangeTime({cursor:e})})),Vn(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:null})})),Vn(this,"_handleReframeDragUpdate",(({value:e})=>{const t=e,{time:s}=this.props.viewRange,n={reframe:{anchor:s.reframe?s.reframe.anchor:t,shift:t}};this.props.updateNextViewRangeTime(n)})),Vn(this,"_handleReframeDragEnd",(({manager:e,value:t})=>{const{time:s}=this.props.viewRange,n=s.reframe?s.reframe.anchor:t,[r,o]=t<n?[t,n]:[n,t];e.resetBounds(),this.props.updateViewRangeTime(r,o,"minimap")})),Vn(this,"_handleScrubberEnterLeave",(({type:e})=>{const t=e===D.MouseEnter;this.setState({preventCursorLine:t})})),Vn(this,"_handleScrubberDragUpdate",(({event:e,tag:t,type:s,value:n})=>{s===D.DragStart&&e.stopPropagation(),t===Fn?this.props.updateNextViewRangeTime({shiftStart:n}):t===An&&this.props.updateNextViewRangeTime({shiftEnd:n})})),Vn(this,"_handleScrubberDragEnd",(({manager:e,tag:t,value:s})=>{const[n,r]=this.props.viewRange.time.current;let o;if(t===Fn)o=[s,r];else{if(t!==An)throw new Error("bad state");o=[n,s]}e.resetBounds(),this.setState({preventCursorLine:!1}),this.props.updateViewRangeTime(o[0],o[1],"minimap")})),Vn(this,"_resetTimeZoomClickHandler",(()=>{this.props.updateViewRangeTime(0,1)})),this._draggerReframe=new O({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseMove:this._handleReframeMouseMove,onMouseLeave:this._handleReframeMouseLeave,tag:zn}),this._draggerStart=new O({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Fn}),this._draggerEnd=new O({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:An}),this._root=void 0,this.state={preventCursorLine:!1}}componentWillUnmount(){this._draggerReframe.dispose(),this._draggerEnd.dispose(),this._draggerStart.dispose()}_getMarkers(e,t){const s=Bn(this.props.theme),n=function(e,t){const[s,n]=e<t?[e,t]:[t,e];return{x:100*s+"%",width:100*(n-s)+"%",leadingX:100*t+"%"}}(e,t);return[(0,h.jsx)("rect",{className:i()(s.ViewingLayerDraggedShift,s.ViewingLayerDrag),x:n.x,y:"0",width:n.width,height:this.props.height-2},"fill"),(0,h.jsx)("rect",{className:i()(s.ViewingLayerDrag),x:n.leadingX,y:"0",width:"1",height:this.props.height-2},"edge")]}render(){const{height:e,viewRange:t,numTicks:s,theme:n}=this.props,{preventCursorLine:r}=this.state,{current:o,cursor:a,shiftStart:l,shiftEnd:c,reframe:d}=t.time,u=null!=l||null!=c||null!=d,[p,g]=o;let m=0;p&&(m=100*p);let f,b=100;g&&(b=100-100*g),u||null==a||r||(f=100*a+"%");const v=Bn(n);return(0,h.jsxs)("div",{"aria-hidden":!0,className:v.ViewingLayer,style:{height:e},children:[(0!==p||1!==g)&&(0,h.jsx)(tt,{onClick:this._resetTimeZoomClickHandler,className:i()(v.ViewingLayerResetZoom,v.ViewingLayerResetZoomHoverClassName),htmlType:"button",children:"Reset Selection"}),(0,h.jsxs)("svg",{height:e,className:v.ViewingLayerGraph,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,children:[m>0&&(0,h.jsx)("rect",{x:0,y:0,height:"100%",width:`${m}%`,className:v.ViewingLayerInactive}),b>0&&(0,h.jsx)("rect",{x:100-b+"%",y:0,height:"100%",width:`${b}%`,className:v.ViewingLayerInactive}),(0,h.jsx)(Rn,{numTicks:s}),f&&(0,h.jsx)("line",{className:v.ViewingLayerCursorGuide,x1:f,y1:"0",x2:f,y2:e-2,strokeWidth:"1"}),null!=l&&this._getMarkers(p,l),null!=c&&this._getMarkers(g,c),(0,h.jsx)(Hn,{isDragging:null!=l,onMouseDown:this._draggerStart.handleMouseDown,onMouseEnter:this._draggerStart.handleMouseEnter,onMouseLeave:this._draggerStart.handleMouseLeave,position:p||0}),(0,h.jsx)(Hn,{isDragging:null!=c,position:g||1,onMouseDown:this._draggerEnd.handleMouseDown,onMouseEnter:this._draggerEnd.handleMouseEnter,onMouseLeave:this._draggerEnd.handleMouseLeave}),null!=d&&this._getMarkers(d.anchor,d.shift)]}),u&&(0,h.jsx)("div",{className:v.ViewingLayerFullOverlay})]})}}const Gn=j(Wn);var Un;function Kn(e){return{valueOffset:e.relativeStartTime,valueWidth:e.duration,serviceName:e.process.serviceName}}const qn=(0,d.default)((function(e){return e.spans.map(Kn)}));class Zn extends n.PureComponent{render(){const{height:e,trace:t,viewRange:s,updateNextViewRangeTime:n,updateViewRangeTime:r}=this.props;if(!t)return Un||(Un=(0,h.jsx)("div",{}));const o=qn(t);return(0,h.jsxs)("div",{className:i()(pe,ue),children:[(0,h.jsx)(Pn,{numTicks:4,duration:t.duration}),(0,h.jsxs)("div",{className:ae,children:[(0,h.jsx)(Nn,{valueWidth:t.duration,items:o}),(0,h.jsx)(Gn,{viewRange:s,numTicks:4,height:e||60,updateViewRangeTime:r,updateNextViewRangeTime:n})]})]})}}!function(e,t,s){t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s}(Zn,"defaultProps",{height:60});var Xn=s("./node_modules/react-icons/lib/io/android-locate.js"),Jn=s.n(Xn);function Yn(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class Qn extends n.PureComponent{constructor(...e){super(...e),Yn(this,"clearUiFind",(()=>{this.props.onChange("")}))}render(){const{allowClear:e,inputProps:t,value:s}=this.props,n=(0,h.jsxs)(h.Fragment,{children:[e&&s&&s.length&&(0,h.jsx)(Je,{type:"close",onClick:this.clearUiFind}),t.suffix]});return(0,h.jsx)(nt,Object.assign({autosize:null,placeholder:"Find..."},t,{onChange:e=>this.props.onChange(e.target.value),suffix:n,value:s}))}}var er;Yn(Qn,"defaultProps",{inputProps:{},trackFindFunction:void 0,value:void 0});const tr=_((()=>({TracePageSearchBar:r.css`
      label: TracePageSearchBar;
    `,TracePageSearchBarBar:r.css`
      label: TracePageSearchBarBar;
      max-width: 20rem;
      transition: max-width 0.5s;
      &:focus-within {
        max-width: 100%;
      }
    `,TracePageSearchBarCount:r.css`
      label: TracePageSearchBarCount;
      opacity: 0.6;
    `,TracePageSearchBarBtn:r.css`
      label: TracePageSearchBarBtn;
      border-left: none;
      transition: 0.2s;
    `,TracePageSearchBarBtnDisabled:r.css`
      label: TracePageSearchBarBtnDisabled;
      opacity: 0.5;
    `,TracePageSearchBarLocateBtn:r.css`
      label: TracePageSearchBarLocateBtn;
      padding: 1px 8px 4px;
    `}))),sr=(0,n.memo)((function(e){const{clearSearch:t,focusUiFindMatches:s,navigable:n,nextResult:r,prevResult:o,resultCount:a,textFilter:l,onSearchValueChange:c,searchValue:d,hideSearchButtons:u}=e,p=tr(),g=l?(0,h.jsx)("span",{className:p.TracePageSearchBarCount,children:a}):null,m=i()(p.TracePageSearchBarBtn,{[p.TracePageSearchBarBtnDisabled]:!l}),f={"data-test":"in-trace-search",className:i()(p.TracePageSearchBarBar,me),name:"search",suffix:g};return(0,h.jsx)("div",{className:p.TracePageSearchBar,children:(0,h.jsxs)(rt,{className:je,compact:!0,style:{display:"flex"},children:[(0,h.jsx)(Qn,{onChange:c,value:d,inputProps:f}),!u&&(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(tt,{className:i()(m,p.TracePageSearchBarLocateBtn),disabled:!l,htmlType:"button",onClick:s,children:er||(er=(0,h.jsx)(Jn(),{}))}),(0,h.jsx)(tt,{className:m,disabled:!l,htmlType:"button",icon:"up",onClick:o}),(0,h.jsx)(tt,{className:m,disabled:!l,htmlType:"button",icon:"down",onClick:r})]}),(0,h.jsx)(tt,{className:m,disabled:!l,htmlType:"button",icon:"close",onClick:t})]})]})})})),nr=_((()=>({BreakableText:r.css`
      label: BreakableText;
      display: inline-block;
      white-space: pre;
    `}))),rr=/\W*\w+\W*/g;function or(e){const{className:t,text:s,wordRegexp:n=rr}=e;if(!s)return"string"==typeof s?s:null;const r=[];n.exec("");let o=n.exec(s)||[s];for(;o;)r.push((0,h.jsx)("span",{className:t||nr().BreakableText,children:o[0]},`${s}-${r.length}`)),o=n.exec(s);return r}or.defaultProps={wordRegexp:rr};const ir=["centered","className","small"];const ar=_((()=>{const e=r.keyframes`
    /*
    rgb(0, 128, 128) == teal
    rgba(0, 128, 128, 0.3) == #bedfdf
    */
    from {
      color: #bedfdf;
    }
    to {
      color: teal;
    }
  `;return{LoadingIndicator:r.css`
      label: LoadingIndicator;
      animation: ${e} 1s infinite alternate;
      font-size: 36px;
      /* outline / stroke the loading indicator */
      text-shadow: -0.5px 0 rgba(0, 128, 128, 0.6), 0 0.5px rgba(0, 128, 128, 0.6), 0.5px 0 rgba(0, 128, 128, 0.6),
        0 -0.5px rgba(0, 128, 128, 0.6);
    `,LoadingIndicatorCentered:r.css`
      label: LoadingIndicatorCentered;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `,LoadingIndicatorSmall:r.css`
      label: LoadingIndicatorSmall;
      font-size: 0.7em;
    `}}));function lr(e){const{centered:t,className:s,small:n}=e,r=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,ir),o=ar(),a=i()(o.LoadingIndicator,{[o.LoadingIndicatorCentered]:t,[o.LoadingIndicatorSmall]:n,className:s});return(0,h.jsx)(Je,Object.assign({type:"loading",className:a},r))}lr.defaultProps={centered:!1,className:void 0,small:!1};const cr="<trace-without-root-span>",dr="FETCH_ERROR",ur="FETCH_LOADING";var pr;const hr=_((e=>{var t,s,n,o;return{TraceName:r.css`
      label: TraceName;
      font-size: ${n=null===(t=e.components)||void 0===t||null===(s=t.TraceName)||void 0===s?void 0:s.fontSize,o="unset",n?"string"==typeof n?n:`${n}px`:o};
    `,TraceNameError:r.css`
      label: TraceNameError;
      color: #c00;
    `}}));function gr(e){const{className:t,error:s,state:n,traceName:r}=e,o=n===dr;let a=r||cr;const l=hr(k());let c="";if(o){c=l.TraceNameError;let e="";s&&(e="string"==typeof s?s:s.message||String(s)),e||(e="Error: Unknown error"),a=e,a=(0,h.jsx)(or,{text:e})}else if(n===ur)a=pr||(pr=(0,h.jsx)(lr,{small:!0}));else{const e=String(r||cr);a=(0,h.jsx)(or,{text:e})}return(0,h.jsx)("span",{className:i()(l.TraceName,c,t),children:a})}const mr=(0,E.memoize)((function(e){let t;const s=new Set(e.map((({spanID:e})=>e)));for(let n=0;n<e.length;n++){if(e[n].references&&e[n].references.some((({traceID:t,spanID:r})=>t===e[n].traceID&&s.has(r))))continue;if(!t){t=e[n];continue}const r=e[n].references&&e[n].references.length||0,o=t.references&&t.references.length||0;(r<o||r===o&&e[n].startTime<t.startTime)&&(t=e[n])}return t?`${t.process.serviceName}: ${t.operationName}`:""}),(e=>e.length?e[0].traceID:0));var fr=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function br(e,t){return 1===e?function(e){var t;return{get:function(s){if(t&&e(s,t.key))return t.value},put:function(e,s){t={key:e,value:s}}}}(t):function(e,t){var s=[];function n(e){var n=function(e,t){for(var s=0;s<e.length;s++)if(t(e[s]))return s;return-1}(s,(function(s){return t(e,s.key)}));if(n>-1){var r=s[n];return n>0&&(s.splice(n,1),s.unshift(r)),r.value}}return{get:n,put:function(t,r){n(t)||(s.unshift({key:t,value:r}),s.length>e&&s.pop())}}}(e,t)}function vr(e,t){var s=t?function(e,t){return function s(n,r){if(e(n,r))return!0;if(Array.isArray(n))return!(!Array.isArray(r)||n.length!==r.length||!n.every((function(e,t){return s(e,r[t])})));if(Array.isArray(r))return!1;if("object"==typeof n){if("object"!=typeof r)return!1;var o=null===n,i=null===r;if(o||i)return o===i;var a=Object.keys(n),l=Object.keys(r);if(a.length!==l.length)return!1;var c=t?s:e;return!!a.every((function(e){return fr(n,e)&&fr(r,e)&&c(n[e],r[e])}))}return!1}}(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1)if(!s(e[n],t[n]))return!1;return!0}}const yr=function(){for(var e=1,t=function(e,t){return e===t},s=!1,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];"number"==typeof r[0]&&(e=r.shift()),"function"==typeof r[0]?t=r.shift():void 0===r[0]&&r.shift(),"boolean"==typeof r[0]&&(s=r[0]);var i=br(e,vr(t,s));return function(e){return function(){for(var t=arguments.length,s=new Array(t),n=0;n<t;n++)s[n]=arguments[n];var r=i.get(s);return void 0===r&&(r=e.apply(e,s),i.put(s,r)),r}}};var xr=s("./node_modules/deep-freeze/index.js");const wr=s.n(xr)()(Object.defineProperty({archiveEnabled:!1,dependencies:{dagMaxNumServices:100,menuEnabled:!0},linkPatterns:[],menu:[{label:"About Jaeger",items:[{label:"GitHub",url:"https://github.com/uber/jaeger"},{label:"Docs",url:"http://jaeger.readthedocs.io/en/latest/"},{label:"Twitter",url:"https://twitter.com/JaegerTracing"},{label:"Discussion Group",url:"https://groups.google.com/forum/#!forum/jaeger-tracing"},{label:"Gitter.im",url:"https://gitter.im/jaegertracing/Lobby"},{label:"Blog",url:"https://medium.com/jaegertracing/"}]}],search:{maxLookback:{label:"2 Days",value:"2d"},maxLimit:1500},tracking:{gaID:null,trackErrors:!0}},"__mergeFields",{value:["dependencies","search","tracking"]}));function jr(e){return(0,E.get)(wr,e)}function kr(e){const t=e.references?e.references.find((e=>"CHILD_OF"===e.refType)):null;return t?t.span:null}const _r=/#\{([^{}]*)\}/g;function Tr(e){const t=new Set;return e.replace(_r,((e,s)=>(t.add(s),e))),Array.from(t)}function Ir(e,t,s){return e.replace(_r,((e,n)=>{const r=s[n];return null==r?"":t(r)}))}function Cr(e,t){if("string"!=typeof e)throw new Error("Invalid template");return{parameters:Tr(e),template:Ir.bind(null,e,t)}}function Sr(e){if("string"==typeof e)return t=>t===e;if(Array.isArray(e))return t=>e.indexOf(t)>-1;if(null==e)return()=>!0;throw new Error(`Invalid value: ${e}`)}const Dr=e=>e;function Er(e,t){if(t)return t.find((t=>t.key===e))}function Lr(e,t){return e.template(t)}function Nr(e,t,s,n){const r=s[n];let o="logs";const i=t.process.tags===s;i&&(o="process");t.tags===s&&(o="tags");const a=[];return e.forEach((e=>{if(e.type(o)&&e.key(r.key)&&e.value(r.value)){const n={};e.parameters.every((a=>{let l=Er(a,s);return l||i||(l=function(e,t){let s=t;for(;s;){const t=Er(e,s.tags)||Er(e,s.process.tags);if(t)return t;s=kr(s)}}(a,t)),l?(n[a]=l.value,!0):(console.warn(`Skipping link pattern, missing parameter ${a} for key ${r.key} in ${o}.`,e.object),!1)}))&&a.push({url:Lr(e.url,n),text:Lr(e.text,n)})}})),a}const Or=(jr("linkPatterns")||[]).map((function(e){try{const t=Cr(e.url,encodeURIComponent),s=Cr(e.text,Dr);return{object:e,type:Sr(e.type),key:Sr(e.key),value:Sr(e.value),url:t,text:s,parameters:(0,E.uniq)(t.parameters.concat(s.parameters))}}catch(t){return console.error(`Ignoring invalid link pattern: ${t}`,e),null}})).filter(Boolean),Pr=yr(10)((e=>{const t=[];return e?function(e,t){const s=[],n=Object.keys(t).filter((e=>"string"==typeof t[e]||"number"===t[e]));return e.filter((e=>e.type("traces"))).forEach((e=>{const r={};e.parameters.every((e=>{const s=e;return!!n.includes(s)&&(r[e]=t[s],!0)}))&&s.push({url:Lr(e.url,r),text:Lr(e.text,r)})})),s}(Or,e):t}));Mr=Or,Rr=new WeakMap;var Mr,Rr,$r,Hr;const Vr=e=>(0,h.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",className:e.className,children:[e.children," ",$r||($r=(0,h.jsx)(qe,{}))]}),Br=e=>(0,h.jsx)(Qe,{children:e.map((({text:e,url:t},s)=>(0,h.jsx)(et,{children:(0,h.jsx)(Vr,{href:t,children:e})},`${t}-${s}`)))});function Ar(e){const{links:t}=e;return 1===t.length?(0,h.jsx)(Vr,{href:t[0].url,title:t[0].text,className:e.className}):(0,h.jsx)(Ye,{overlay:Br(t),placement:"bottomRight",trigger:["click"],children:(0,h.jsx)("a",{className:e.className,children:Hr||(Hr=(0,h.jsx)(qe,{isLarge:!0}))})})}var Fr=s("./packages/grafana-data/src/index.ts");const zr=["renderer"];const Wr=_((e=>({TracePageHeader:r.css`
      label: TracePageHeader;
      & > :first-child {
        border-bottom: 1px solid ${T(e,"#e8e8e8")};
      }
      & > :nth-child(2) {
        background-color: ${T(e,"#eee")};
        border-bottom: 1px solid ${T(e,"#e4e4e4")};
      }
      & > :last-child {
        border-bottom: 1px solid ${T(e,"#ccc")};
      }
    `,TracePageHeaderTitleRow:r.css`
      label: TracePageHeaderTitleRow;
      align-items: center;
      display: flex;
    `,TracePageHeaderBack:r.css`
      label: TracePageHeaderBack;
      align-items: center;
      align-self: stretch;
      background-color: #fafafa;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      color: inherit;
      display: flex;
      font-size: 1.4rem;
      padding: 0 1rem;
      margin-bottom: -1px;
      &:hover {
        background-color: #f0f0f0;
        border-color: #ccc;
      }
    `,TracePageHeaderTitleLink:r.css`
      label: TracePageHeaderTitleLink;
      align-items: center;
      display: flex;
      flex: 1;

      &:hover * {
        text-decoration: underline;
      }
      &:hover > *,
      &:hover small {
        text-decoration: none;
      }
    `,TracePageHeaderDetailToggle:r.css`
      label: TracePageHeaderDetailToggle;
      font-size: 2.5rem;
      transition: transform 0.07s ease-out;
    `,TracePageHeaderDetailToggleExpanded:r.css`
      label: TracePageHeaderDetailToggleExpanded;
      transform: rotate(90deg);
    `,TracePageHeaderTitle:r.css`
      label: TracePageHeaderTitle;
      color: inherit;
      flex: 1;
      font-size: 1.7em;
      line-height: 1em;
      margin: 0 0 0 0.5em;
      padding-bottom: 0.5em;
    `,TracePageHeaderTitleCollapsible:r.css`
      label: TracePageHeaderTitleCollapsible;
      margin-left: 0;
    `,TracePageHeaderOverviewItems:r.css`
      label: TracePageHeaderOverviewItems;
      border-bottom: 1px solid #e4e4e4;
      padding: 0.25rem 0.5rem !important;
    `,TracePageHeaderOverviewItemValueDetail:i()(r.css`
        label: TracePageHeaderOverviewItemValueDetail;
        color: #aaa;
      `,"trace-item-value-detail"),TracePageHeaderOverviewItemValue:r.css`
      label: TracePageHeaderOverviewItemValue;
      &:hover > .trace-item-value-detail {
        color: unset;
      }
    `,TracePageHeaderArchiveIcon:r.css`
      label: TracePageHeaderArchiveIcon;
      font-size: 1.78em;
      margin-right: 0.15em;
    `,TracePageHeaderTraceId:r.css`
      label: TracePageHeaderTraceId;
      white-space: nowrap;
    `}))),Gr=[{key:"timestamp",label:"Trace Start",renderer(e,t,s){const n=(0,Fr.dateTimeFormat)(e.startTime/1e3,{timeZone:t}),r=n.match(/^(.+)(:\d\d\.\d+)$/);return r?(0,h.jsxs)("span",{className:s.TracePageHeaderOverviewItemValue,children:[r[1],(0,h.jsx)("span",{className:s.TracePageHeaderOverviewItemValueDetail,children:r[2]})]}):n}},{key:"duration",label:"Duration",renderer:e=>Y(e.duration)},{key:"service-count",label:"Services",renderer:e=>new Set((0,E.values)(e.processes).map((e=>e.serviceName))).size},{key:"depth",label:"Depth",renderer:e=>(0,E.get)((0,E.maxBy)(e.spans,"depth"),"depth",0)+1},{key:"span-count",label:"Total Spans",renderer:e=>e.spans.length}];function Ur(e){const{canCollapse:t,clearSearch:s,focusUiFindMatches:r,hideMap:o,hideSummary:a,nextResult:l,onSlimViewClicked:c,prevResult:d,resultCount:u,slimView:p,textFilter:g,trace:m,traceGraphView:f,updateNextViewRangeTime:b,updateViewRangeTime:v,viewRange:y,searchValue:x,onSearchValueChange:w,hideSearchButtons:j,timeZone:_}=e,T=Wr(k()),I=n.useMemo((()=>m?Pr(m):[]),[m]);if(!m)return null;const C=!a&&!p&&Gr.map((e=>{const{renderer:t}=e,s=function(e,t){if(null==e)return{};var s,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)s=o[n],t.indexOf(s)>=0||(r[s]=e[s]);return r}(e,zr);return Object.assign({},s,{value:t(m,_,T)})})),S=(0,h.jsxs)("h1",{className:i()(T.TracePageHeaderTitle,t&&T.TracePageHeaderTitleCollapsible),children:[(0,h.jsx)(gr,{traceName:mr(m.spans)})," ",(0,h.jsx)("small",{className:i()(T.TracePageHeaderTraceId,we),children:m.traceID})]});return(0,h.jsxs)("header",{className:T.TracePageHeader,children:[(0,h.jsxs)("div",{className:T.TracePageHeaderTitleRow,children:[I&&I.length>0&&(0,h.jsx)(Ar,{links:I,className:T.TracePageHeaderBack}),t?(0,h.jsxs)("a",{className:T.TracePageHeaderTitleLink,onClick:c,role:"switch","aria-checked":!p,children:[(0,h.jsx)(Sn(),{className:i()(T.TracePageHeaderDetailToggle,!p&&T.TracePageHeaderDetailToggleExpanded)}),S]}):S,(0,h.jsx)(sr,{clearSearch:s,focusUiFindMatches:r,nextResult:l,prevResult:d,resultCount:u,textFilter:g,navigable:!f,searchValue:x,onSearchValueChange:w,hideSearchButtons:j})]}),C&&(0,h.jsx)(Bs,{className:T.TracePageHeaderOverviewItems,items:C}),!o&&!p&&(0,h.jsx)(Zn,{trace:m,viewRange:y,updateNextViewRangeTime:b,updateViewRangeTime:v})]})}function Kr(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class qr{constructor(e){Kr(this,"isTagsOpen",void 0),Kr(this,"isProcessOpen",void 0),Kr(this,"logs",void 0),Kr(this,"isWarningsOpen",void 0),Kr(this,"isStackTracesOpen",void 0),Kr(this,"isReferencesOpen",void 0);const{isTagsOpen:t,isProcessOpen:s,isReferencesOpen:n,isWarningsOpen:r,isStackTracesOpen:o,logs:i}=e||{};this.isTagsOpen=Boolean(t),this.isProcessOpen=Boolean(s),this.isReferencesOpen=Boolean(n),this.isWarningsOpen=Boolean(r),this.isStackTracesOpen=Boolean(o),this.logs={isOpen:Boolean(i&&i.isOpen),openedItems:i&&i.openedItems?new Set(i.openedItems):new Set}}toggleTags(){const e=new qr(this);return e.isTagsOpen=!this.isTagsOpen,e}toggleProcess(){const e=new qr(this);return e.isProcessOpen=!this.isProcessOpen,e}toggleReferences(){const e=new qr(this);return e.isReferencesOpen=!this.isReferencesOpen,e}toggleWarnings(){const e=new qr(this);return e.isWarningsOpen=!this.isWarningsOpen,e}toggleStackTraces(){const e=new qr(this);return e.isStackTracesOpen=!this.isStackTracesOpen,e}toggleLogs(){const e=new qr(this);return e.logs.isOpen=!this.logs.isOpen,e}toggleLogItem(e){const t=new qr(this);return t.logs.openedItems.has(e)?t.logs.openedItems.delete(e):t.logs.openedItems.add(e),t}}var Zr=s("./node_modules/reselect/es/index.js"),Xr=s("./node_modules/fuzzy/lib/fuzzy.js"),Jr=s.n(Xr);const Yr=e=>e.serviceName,Qr=e=>e.spanID,eo=e=>e.operationName,to=e=>e.duration,so=e=>e.startTime,no=e=>e.processID,ro=(0,Zr.P1)((0,Zr.P1)((({span:e})=>e),(e=>e.references||[])),(({type:e})=>e),((e,t)=>e.find((e=>e.refType===t)))),oo=((0,Zr.P1)((e=>ro({span:e,type:"CHILD_OF"})),(e=>e?e.spanID:null)),(0,Zr.P1)((e=>{if(!e.process)throw new Error("\n      you must hydrate the spans with the processes, perhaps\n      using hydrateSpansWithProcesses(), before accessing a span's process\n    ");return e.process}),Yr)),io=((0,Zr.P1)((({spans:e})=>e),(({leftBound:e})=>e),(({rightBound:e})=>e),((e,t,s)=>e.filter((e=>so(e)>=t&&so(e)<=s)))),(0,Zr.P1)((({spans:e})=>e),(({text:e})=>e),((e,t)=>Jr().filter(t,e,{extract:e=>`${oo(e)} ${eo(e)}`}).map((({original:e})=>e))))),ao=(0,Zr.P1)(io,(e=>e.reduce(((e,t)=>({...e,[Qr(t)]:t})),{})));(0,Zr.P1)((({spans:e})=>e),ao,((e,t)=>e.map((e=>({...e,muted:!t[Qr(e)]})))));class lo{static iterFunction(e,t=0){return s=>e(s.value,s,t)}static searchFunction(e){return"function"==typeof e?e:(t,s)=>e instanceof lo?s===e:t===e}constructor(e,t=[]){this.value=e,this.children=t}get depth(){return this.children.reduce(((e,t)=>Math.max(t.depth+1,e)),1)}get size(){let e=0;return this.walk((()=>e++)),e}addChild(e){return this.children.push(e instanceof lo?e:new lo(e)),this}find(e){if(lo.iterFunction(lo.searchFunction(e))(this))return this;for(let t=0;t<this.children.length;t++){const s=this.children[t].find(e);if(s)return s}return null}getPath(e){const t=lo.iterFunction(lo.searchFunction(e)),s=(e,n)=>{const r=n.concat([e]);if(t(e))return r;for(let t=0;t<e.children.length;t++){const n=e.children[t],o=s(n,r);if(o)return o}return null};return s(this,[])}walk(e,t=0){const s=[];let n=t;for(s.push({node:this,depth:n});s.length;){const{node:t,depth:r}=s.pop();e(t.value,t,r),n=r+1;let o=t.children.length-1;for(;o>=0;)s.push({node:t.children[o],depth:n}),o--}}}const co=e=>e.spans,uo=e=>e.processes,po=(0,Zr.P1)((e=>e.span),(e=>e.processes),((e,t)=>({...e,process:t[no(e)]}))),ho=(0,Zr.P1)(co,(e=>e.reduce(((e,t)=>e.set(Qr(t),t)),new Map)));function go(e){const t=new Map(e.spans.map((e=>[e.spanID,new lo(e.spanID)]))),s=new Map(e.spans.map((e=>[e.spanID,e]))),n=new lo("__root__");e.spans.forEach((e=>{const s=t.get(e.spanID);if(Array.isArray(e.references)&&e.references.length){const{refType:r,spanID:o}=e.references[0];if("CHILD_OF"!==r&&"FOLLOWS_FROM"!==r)throw new Error(`Unrecognized ref type: ${r}`);(t.get(o)||n).children.push(s)}else n.children.push(s)}));const r=(e,t)=>{const n=s.get(e.value),r=s.get(t.value);return+(n.startTime>r.startTime)||+(n.startTime===r.startTime)-1};return e.spans.forEach((e=>{const s=t.get(e.spanID);s.children.length>1&&s.children.sort(r)})),n.children.sort(r),n}(0,Zr.P1)(co,(e=>e.length));const mo=(0,Zr.P1)(co,(e=>e.reduce(((e,t)=>e?Math.min(e,so(t)):so(t)),null))),fo=(0,Zr.P1)(co,mo,((e,t)=>e.reduce(((e,s)=>e?Math.max(so(s)-t+to(s),e):to(s)),null))),bo=((0,Zr.P1)(mo,fo,((e,t)=>e+t)),(0,Zr.P1)(go,ho,((e,t)=>e.children.map((e=>t.get(e.value))).sort(((e,t)=>{return s=so(e),n=so(t),s-n;var s,n}))[0]))),vo=((0,Zr.P1)(go,(e=>e.depth-1)),(0,Zr.P1)((0,Zr.P1)((e=>e.trace),go),(0,Zr.P1)((e=>e.span),Qr),((e,t)=>e.getPath(t).length-1)),(0,Zr.P1)(uo,(e=>Object.keys(e).reduce(((t,s)=>t.add(Yr(e[s]))),new Set)))),yo=((0,Zr.P1)(vo,(e=>e.size)),{ms:function(e){const t=J(e,Z,G);return`${W().duration(t/G).asMilliseconds()}ms`},s:function(e){const t=J(e,Z,U);return`${W().duration(t/G).asSeconds()}s`}}),xo=(0,Zr.P1)(fo,(e=>e>=U?yo.s:yo.ms)),wo=((0,Zr.P1)((({duration:e})=>e),(({unit:e})=>yo[e]),((e,t)=>t(e))),(0,Zr.P1)((({duration:e})=>e),(0,Zr.P1)((({trace:e})=>e),xo),((e,t)=>t(e))),(0,Zr.P1)((({trace:e})=>e),(({spans:e})=>e),(({sort:e})=>e),((e,t,{dir:s,comparator:n,selector:r})=>[...t].sort(((t,o)=>s*n(r(t,e),r(o,e)))))),(0,Zr.P1)(go,(e=>{const t=new Map;let s=0;return e.walk((e=>t.set(e,s++))),t})));(0,Zr.P1)((0,Zr.P1)((e=>e.trace),go),(0,Zr.P1)((e=>e.span),Qr),((e,t)=>{const s=e.find(t);return s?s.size-1:-1})),(0,Zr.P1)((0,Zr.P1)((({trace:e})=>e),wo),(({span:e})=>e),((e,t)=>e.get(Qr(t)))),(0,Zr.P1)((0,Zr.P1)((0,Zr.P1)((e=>{const t=co(e),s=uo(e);return{...e,spans:t.map((e=>po({span:e,processes:s})))}}),bo),(0,Zr.zB)({name:eo,serviceName:oo})),(({name:e,serviceName:t})=>`${t}: ${e}`)),(0,Zr.P1)((({spans:e})=>e),(0,Zr.P1)((({trace:e})=>e),go),(({collapsed:e})=>e),((e,t,s)=>{const n=s.reduce(((e,s)=>(t.find(s).walk((t=>t!==s&&e.add(t))),e)),new Set);return n.size>0?e.filter((e=>!n.has(Qr(e)))):e})),(0,Zr.P1)((({trace:e})=>e),(({interval:e=4})=>e),(({width:e=3})=>e),((e,t,s)=>[...Array(t+1).keys()].map((n=>({timestamp:mo(e)+fo(e)*(n/t),width:s}))))),(0,Zr.P1)((e=>e),co,((e,t)=>{const s=new Map;return{...e,spans:t.reduce(((e,t)=>{const n=s.has(Qr(t))?`${Qr(t)}_${s.get(Qr(t))}`:Qr(t),r={...t,spanID:n};return n!==Qr(t)&&console.warn("duplicate spanID in trace replaced",Qr(t),"new:",n),s.set(Qr(t),(s.get(Qr(t))||0)+1),e.concat([r])}),[])}})),(0,Zr.P1)((e=>e),co,((e,t)=>({...e,spans:t.filter((e=>!!so(e)))})));function jo(e){if(null==e||!e.traceID)return null;const t=e.traceID.toLowerCase();let s=0,n=Number.MAX_SAFE_INTEGER;const r=new Map,o=new Map;e.spans=e.spans.filter((e=>Boolean(e.startTime)));const i=e.spans.length;for(let t=0;t<i;t++){const i=e.spans[t],{startTime:a,duration:l,processID:c}=i;let d=i.spanID;a<n&&(n=a),a+l>s&&(s=a+l);const u=r.get(d);null!=u?(console.warn(`Dupe spanID, ${u+1} x ${d}`,i,o.get(d)),(0,E.isEqual)(i,o.get(d))&&console.warn("\t two spans with same ID have `isEqual(...) === true`"),r.set(d,u+1),d=`${d}_${u}`,i.spanID=d):r.set(d,1),i.process=e.processes[c],o.set(d,i)}const a=go(e),l=[],c={};a.walk(((e,s,r=0)=>{if("__root__"===e)return;const i=o.get(e);if(!i)return;const{serviceName:a}=i.process;c[a]=(c[a]||0)+1,i.relativeStartTime=i.startTime-n,i.depth=r-1,i.hasChildren=s.children.length>0,i.warnings=i.warnings||[],i.tags=i.tags||[],i.references=i.references||[];const d=function(e){const t=new Map;return{tags:e.reduce(((e,s)=>(e.some((e=>e.key===s.key&&e.value===s.value))?t.set(`${s.key}:${s.value}`,`Duplicate tag "${s.key}:${s.value}"`):e.push(s),e)),[]),warnings:Array.from(t.values())}}(i.tags);i.tags=function(e,t){const s=e.slice(),n=(t||[]).map((e=>e.toLowerCase()));return s.sort(((e,t)=>{const s=e.key.toLowerCase(),r=t.key.toLowerCase();for(let e=0;e<n.length;e++){const t=n[e];if(s.startsWith(t)&&!r.startsWith(t))return-1;if(!s.startsWith(t)&&r.startsWith(t))return 1}return s>r?1:s<r?-1:0})),s}(d.tags,jr("topTagPrefixes")),i.warnings=i.warnings.concat(d.warnings),i.references.forEach(((s,n)=>{const r=o.get(s.spanID);r&&(s.span=r,n>0&&(r.subsidiarilyReferencedBy=r.subsidiarilyReferencedBy||[],r.subsidiarilyReferencedBy.push({spanID:e,traceID:t,span:i,refType:s.refType})))})),l.push(i)}));const d=mr(l);return{services:Object.keys(c).map((e=>({name:e,numberOfSpans:c[e]}))),spans:l,traceID:t,traceName:d,processes:e.processes,duration:s-n,startTime:n,endTime:s}}function ko(e,t){if(!t)return null;const s=[],n=[];e.split(/\s+/).filter(Boolean).forEach((e=>{"-"===e[0]?n.push(e.substr(1).toLowerCase()):s.push(e.toLowerCase())}));const r=(e,t)=>e.some((e=>t.toLowerCase().includes(e))),o=e=>!!e&&e.some((e=>!r(n,e.key)&&(r(s,e.key)||r(s,e.value.toString()))));return new Set(t.filter((e=>r(s,e.operationName)||r(s,e.process.serviceName)||o(e.tags)||null!==e.logs&&e.logs.some((e=>o(e.fields)))||o(e.process.tags)||s.some((t=>t===e.spanID)))).map((e=>e.spanID)))}},"./public/app/plugins/datasource/jaeger/responseTransform.ts":(e,t,s)=>{"use strict";s.d(t,{xM:()=>o,Wp:()=>i,c6:()=>l});var n=s("./packages/grafana-data/src/index.ts"),r=s("./packages/jaeger-ui-components/src/index.ts");function o(e){const t=e.spans.map((t=>{return s=t,n=e.processes,{spanID:s.spanID,traceID:s.traceID,parentSpanID:null===(r=s.references)||void 0===r||null===(o=r.find((e=>"CHILD_OF"===e.refType)))||void 0===o?void 0:o.spanID,operationName:s.operationName,startTime:s.startTime/1e3,duration:s.duration/1e3,logs:s.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:s.tags,warnings:null!==(i=s.warnings)&&void 0!==i?i:void 0,stackTraces:s.stackTraces,serviceName:n[s.processID].serviceName,serviceTags:n[s.processID].tags};var s,n,r,o,i})),s=new n.MutableDataFrame({fields:[{name:"traceID",type:n.FieldType.string},{name:"spanID",type:n.FieldType.string},{name:"parentSpanID",type:n.FieldType.string},{name:"operationName",type:n.FieldType.string},{name:"serviceName",type:n.FieldType.string},{name:"serviceTags",type:n.FieldType.other},{name:"startTime",type:n.FieldType.number},{name:"duration",type:n.FieldType.number},{name:"logs",type:n.FieldType.other},{name:"tags",type:n.FieldType.other},{name:"warnings",type:n.FieldType.other},{name:"stackTraces",type:n.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)s.add(e);return s}function i(e,t){const s=new n.MutableDataFrame({fields:[{name:"traceID",type:n.FieldType.string,config:{displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:n.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:n.FieldType.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:n.FieldType.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),r=e.map(a).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of r)s.add(e);return s}function a(e){const t=(0,r.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function l(e){let t={traceID:"",spans:[],processes:{},warnings:null},s=[];for(let n=0;n<e.length;n++){const r=e.get(n);t.traceID||(t.traceID=r.traceID),s.find((e=>e===r.serviceName))||(s.push(r.serviceName),t.processes[`p${s.length}`]={serviceName:r.serviceName,tags:r.serviceTags}),t.spans.push({traceID:r.traceID,spanID:r.spanID,duration:1e3*r.duration,references:r.parentSpanID?[{refType:"CHILD_OF",spanID:r.parentSpanID,traceID:r.traceID}]:[],flags:0,logs:r.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:r.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===r.serviceName))||"",startTime:1e3*r.startTime,tags:r.tags,warnings:r.warnings?r.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},"./node_modules/change-emitter/lib/index.js":(e,t)=>{"use strict";t.E=function(){var e=[],t=e;function s(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var n=!0;return s(),t.push(e),function(){if(n){n=!1,s();var r=t.indexOf(e);t.splice(r,1)}}},emit:function(){for(var s=e=t,n=0;n<s.length;n++)s[n].apply(s,arguments)}}}},"./node_modules/combokeys/Combokeys/index.js":(e,t,s)=>{"use strict";e.exports=function(e,t){var s=this,n=s.constructor;return s.options=Object.assign({storeInstancesGlobally:!0},t||{}),s.callbacks={},s.directMap={},s.sequenceLevels={},s.resetTimer=null,s.ignoreNextKeyup=!1,s.ignoreNextKeypress=!1,s.nextExpectedAction=!1,s.element=e,s.addEvents(),s.options.storeInstancesGlobally&&n.instances.push(s),s},e.exports.prototype.bind=s("./node_modules/combokeys/Combokeys/prototype/bind.js"),e.exports.prototype.bindMultiple=s("./node_modules/combokeys/Combokeys/prototype/bindMultiple.js"),e.exports.prototype.unbind=s("./node_modules/combokeys/Combokeys/prototype/unbind.js"),e.exports.prototype.trigger=s("./node_modules/combokeys/Combokeys/prototype/trigger.js"),e.exports.prototype.reset=s("./node_modules/combokeys/Combokeys/prototype/reset.js"),e.exports.prototype.stopCallback=s("./node_modules/combokeys/Combokeys/prototype/stopCallback.js"),e.exports.prototype.handleKey=s("./node_modules/combokeys/Combokeys/prototype/handleKey.js"),e.exports.prototype.addEvents=s("./node_modules/combokeys/Combokeys/prototype/addEvents.js"),e.exports.prototype.bindSingle=s("./node_modules/combokeys/Combokeys/prototype/bindSingle.js"),e.exports.prototype.getKeyInfo=s("./node_modules/combokeys/Combokeys/prototype/getKeyInfo.js"),e.exports.prototype.pickBestAction=s("./node_modules/combokeys/Combokeys/prototype/pickBestAction.js"),e.exports.prototype.getReverseMap=s("./node_modules/combokeys/Combokeys/prototype/getReverseMap.js"),e.exports.prototype.getMatches=s("./node_modules/combokeys/Combokeys/prototype/getMatches.js"),e.exports.prototype.resetSequences=s("./node_modules/combokeys/Combokeys/prototype/resetSequences.js"),e.exports.prototype.fireCallback=s("./node_modules/combokeys/Combokeys/prototype/fireCallback.js"),e.exports.prototype.bindSequence=s("./node_modules/combokeys/Combokeys/prototype/bindSequence.js"),e.exports.prototype.resetSequenceTimer=s("./node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js"),e.exports.prototype.detach=s("./node_modules/combokeys/Combokeys/prototype/detach.js"),e.exports.instances=[],e.exports.reset=s("./node_modules/combokeys/Combokeys/reset.js"),e.exports.REVERSE_MAP=null},"./node_modules/combokeys/Combokeys/prototype/addEvents.js":(e,t,s)=>{"use strict";e.exports=function(){var e=this,t=s("./node_modules/combokeys/Combokeys/prototype/dom-event.js"),n=e.element;e.eventHandler=s("./node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js").bind(e),t(n,"keypress",e.eventHandler),t(n,"keydown",e.eventHandler),t(n,"keyup",e.eventHandler)}},"./node_modules/combokeys/Combokeys/prototype/bind.js":e=>{"use strict";e.exports=function(e,t,s){return e=e instanceof Array?e:[e],this.bindMultiple(e,t,s),this}},"./node_modules/combokeys/Combokeys/prototype/bindMultiple.js":e=>{"use strict";e.exports=function(e,t,s){for(var n=0;n<e.length;++n)this.bindSingle(e[n],t,s)}},"./node_modules/combokeys/Combokeys/prototype/bindSequence.js":(e,t,s)=>{"use strict";e.exports=function(e,t,n,r){var o=this;function i(t){return function(){o.nextExpectedAction=t,++o.sequenceLevels[e],o.resetSequenceTimer()}}function a(t){var i;o.fireCallback(n,t,e),"keyup"!==r&&(i=s("./node_modules/combokeys/helpers/characterFromEvent.js"),o.ignoreNextKeyup=i(t)),setTimeout((function(){o.resetSequences()}),10)}o.sequenceLevels[e]=0;for(var l=0;l<t.length;++l){var c=l+1===t.length?a:i(r||o.getKeyInfo(t[l+1]).action);o.bindSingle(t[l],c,r,e,l)}}},"./node_modules/combokeys/Combokeys/prototype/bindSingle.js":e=>{"use strict";e.exports=function(e,t,s,n,r){var o=this;o.directMap[e+":"+s]=t;var i,a=(e=e.replace(/\s+/g," ")).split(" ");a.length>1?o.bindSequence(e,a,t,s):(i=o.getKeyInfo(e,s),o.callbacks[i.key]=o.callbacks[i.key]||[],o.getMatches(i.key,i.modifiers,{type:i.action},n,e,r),o.callbacks[i.key][n?"unshift":"push"]({callback:t,modifiers:i.modifiers,action:i.action,seq:n,level:r,combo:e}))}},"./node_modules/combokeys/Combokeys/prototype/detach.js":(e,t,s)=>{var n=s("./node_modules/combokeys/Combokeys/prototype/dom-event.js").off;e.exports=function(){var e=this,t=e.element;n(t,"keypress",e.eventHandler),n(t,"keydown",e.eventHandler),n(t,"keyup",e.eventHandler)}},"./node_modules/combokeys/Combokeys/prototype/dom-event.js":e=>{function t(e,t,s,n){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,s,n),s}e.exports=t,e.exports.on=t,e.exports.off=function(e,t,s,n){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,s,n),s}},"./node_modules/combokeys/Combokeys/prototype/fireCallback.js":(e,t,s)=>{"use strict";e.exports=function(e,t,n,r){this.stopCallback(t,t.target||t.srcElement,n,r)||!1===e(t,n)&&(s("./node_modules/combokeys/helpers/preventDefault.js")(t),s("./node_modules/combokeys/helpers/stopPropagation.js")(t))}},"./node_modules/combokeys/Combokeys/prototype/getKeyInfo.js":(e,t,s)=>{"use strict";e.exports=function(e,t){var n,r,o,i,a,l,c=[];for(n=s("./node_modules/combokeys/helpers/keysFromString.js")(e),i=s("./node_modules/combokeys/helpers/special-aliases.js"),a=s("./node_modules/combokeys/helpers/shift-map.js"),l=s("./node_modules/combokeys/helpers/isModifier.js"),o=0;o<n.length;++o)i[r=n[o]]&&(r=i[r]),t&&"keypress"!==t&&a[r]&&(r=a[r],c.push("shift")),l(r)&&c.push(r);return{key:r,modifiers:c,action:t=this.pickBestAction(r,c,t)}}},"./node_modules/combokeys/Combokeys/prototype/getMatches.js":(e,t,s)=>{"use strict";e.exports=function(e,t,n,r,o,i){var a,l,c,d,u=this,p=[],h=n.type;"keypress"!==h||n.code&&"Arrow"===n.code.slice(0,5)||(u.callbacks["any-character"]||[]).forEach((function(e){p.push(e)}));if(!u.callbacks[e])return p;for(c=s("./node_modules/combokeys/helpers/isModifier.js"),"keyup"===h&&c(e)&&(t=[e]),a=0;a<u.callbacks[e].length;++a)if(l=u.callbacks[e][a],(r||!l.seq||u.sequenceLevels[l.seq]===l.level)&&h===l.action&&(d=s("./node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"),"keypress"===h&&!n.metaKey&&!n.ctrlKey||d(t,l.modifiers))){var g=!r&&l.combo===o,m=r&&l.seq===r&&l.level===i;(g||m)&&u.callbacks[e].splice(a,1),p.push(l)}return p}},"./node_modules/combokeys/Combokeys/prototype/getReverseMap.js":(e,t,s)=>{"use strict";e.exports=function(){var e,t=this.constructor;if(!t.REVERSE_MAP)for(var n in t.REVERSE_MAP={},e=s("./node_modules/combokeys/helpers/special-keys-map.js"))n>95&&n<112||e.hasOwnProperty(n)&&(t.REVERSE_MAP[e[n]]=n);return t.REVERSE_MAP}},"./node_modules/combokeys/Combokeys/prototype/handleKey.js":(e,t,s)=>{"use strict";e.exports=function(e,t,n){var r,o,i,a,l=this,c={},d=0,u=!1;for(r=l.getMatches(e,t,n),o=0;o<r.length;++o)r[o].seq&&(d=Math.max(d,r[o].level));for(o=0;o<r.length;++o)if(r[o].seq){if(r[o].level!==d)continue;u=!0,c[r[o].seq]=1,l.fireCallback(r[o].callback,n,r[o].combo,r[o].seq)}else u||l.fireCallback(r[o].callback,n,r[o].combo);a="keypress"===n.type&&l.ignoreNextKeypress,i=s("./node_modules/combokeys/helpers/isModifier.js"),n.type!==l.nextExpectedAction||i(e)||a||l.resetSequences(c),l.ignoreNextKeypress=u&&"keydown"===n.type}},"./node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js":(e,t,s)=>{"use strict";e.exports=function(e){var t,n=this;"number"!=typeof e.which&&(e.which=e.keyCode);var r=s("./node_modules/combokeys/helpers/characterFromEvent.js")(e);void 0!==r&&("keyup"!==e.type||n.ignoreNextKeyup!==r?(t=s("./node_modules/combokeys/helpers/eventModifiers.js"),n.handleKey(r,t(e),e)):n.ignoreNextKeyup=!1)}},"./node_modules/combokeys/Combokeys/prototype/modifiersMatch.js":e=>{"use strict";e.exports=function(e,t){return e.sort().join(",")===t.sort().join(",")}},"./node_modules/combokeys/Combokeys/prototype/pickBestAction.js":e=>{"use strict";e.exports=function(e,t,s){return s||(s=this.getReverseMap()[e]?"keydown":"keypress"),"keypress"===s&&t.length&&(s="keydown"),s}},"./node_modules/combokeys/Combokeys/prototype/reset.js":e=>{"use strict";e.exports=function(){return this.callbacks={},this.directMap={},this}},"./node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js":e=>{"use strict";e.exports=function(){var e=this;clearTimeout(e.resetTimer),e.resetTimer=setTimeout((function(){e.resetSequences()}),1e3)}},"./node_modules/combokeys/Combokeys/prototype/resetSequences.js":e=>{"use strict";e.exports=function(e){var t=this;e=e||{};var s,n=!1;for(s in t.sequenceLevels)e[s]?n=!0:t.sequenceLevels[s]=0;n||(t.nextExpectedAction=!1)}},"./node_modules/combokeys/Combokeys/prototype/stopCallback.js":e=>{"use strict";e.exports=function(e,t){if((" "+t.className+" ").indexOf(" combokeys ")>-1)return!1;var s=t.tagName.toLowerCase();return"input"===s||"select"===s||"textarea"===s||t.isContentEditable}},"./node_modules/combokeys/Combokeys/prototype/trigger.js":e=>{"use strict";e.exports=function(e,t){return this.directMap[e+":"+t]&&this.directMap[e+":"+t]({},e),this}},"./node_modules/combokeys/Combokeys/prototype/unbind.js":e=>{"use strict";e.exports=function(e,t){return this.bind(e,(function(){}),t)}},"./node_modules/combokeys/Combokeys/reset.js":e=>{"use strict";e.exports=function(){this.instances.forEach((function(e){e.reset()}))}},"./node_modules/combokeys/helpers/characterFromEvent.js":(e,t,s)=>{"use strict";e.exports=function(e){var t,n;if(t=s("./node_modules/combokeys/helpers/special-keys-map.js"),n=s("./node_modules/combokeys/helpers/special-characters-map.js"),"keypress"===e.type){var r=String.fromCharCode(e.which);return e.shiftKey||(r=r.toLowerCase()),r}return void 0!==t[e.which]?t[e.which]:void 0!==n[e.which]?n[e.which]:String.fromCharCode(e.which).toLowerCase()}},"./node_modules/combokeys/helpers/eventModifiers.js":e=>{"use strict";e.exports=function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}},"./node_modules/combokeys/helpers/isModifier.js":e=>{"use strict";e.exports=function(e){return"shift"===e||"ctrl"===e||"alt"===e||"meta"===e}},"./node_modules/combokeys/helpers/keysFromString.js":e=>{"use strict";e.exports=function(e){return"+"===e?["+"]:e.split("+")}},"./node_modules/combokeys/helpers/preventDefault.js":e=>{"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},"./node_modules/combokeys/helpers/shift-map.js":e=>{"use strict";e.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}},"./node_modules/combokeys/helpers/special-aliases.js":e=>{"use strict";e.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}},"./node_modules/combokeys/helpers/special-characters-map.js":e=>{"use strict";e.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}},"./node_modules/combokeys/helpers/special-keys-map.js":e=>{"use strict";e.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(var t=1;t<20;++t)e.exports[111+t]="f"+t;for(t=0;t<=9;++t)e.exports[t+96]=t},"./node_modules/combokeys/helpers/stopPropagation.js":e=>{"use strict";e.exports=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},"./node_modules/copy-to-clipboard/index.js":(e,t,s)=>{"use strict";var n=s("./node_modules/toggle-selection/index.js"),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var s,o,i,a,l,c,d=!1;t||(t={}),s=t.debug||!1;try{if(i=n(),a=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),void 0===n.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=r[t.format]||r.default;window.clipboardData.setData(o,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(c),a.selectNodeContents(c),l.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(n){s&&console.error("unable to copy using execCommand: ",n),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(n){s&&console.error("unable to copy using clipboardData: ",n),s&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(a):l.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}},"./node_modules/deep-freeze/index.js":e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(s){!t.hasOwnProperty(s)||null===t[s]||"object"!=typeof t[s]&&"function"!=typeof t[s]||Object.isFrozen(t[s])||e(t[s])})),t}},"./node_modules/fbjs/lib/shallowEqual.js":e=>{"use strict";var t=Object.prototype.hasOwnProperty;function s(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,n){if(s(e,n))return!0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return!1;var r=Object.keys(e),o=Object.keys(n);if(r.length!==o.length)return!1;for(var i=0;i<r.length;i++)if(!t.call(n,r[i])||!s(e[r[i]],n[r[i]]))return!1;return!0}},"./node_modules/fuzzy/lib/fuzzy.js":e=>{var t;t={},e.exports=t,t.simpleFilter=function(e,s){return s.filter((function(s){return t.test(e,s)}))},t.test=function(e,s){return null!==t.match(e,s)},t.match=function(e,t,s){s=s||{};var n,r=0,o=[],i=t.length,a=0,l=0,c=s.pre||"",d=s.post||"",u=s.caseSensitive&&t||t.toLowerCase();e=s.caseSensitive&&e||e.toLowerCase();for(var p=0;p<i;p++)n=t[p],u[p]===e[r]?(n=c+n+d,r+=1,l+=1+l):l=0,a+=l,o[o.length]=n;return r===e.length?(a=u===e?1/0:a,{rendered:o.join(""),score:a}):null},t.filter=function(e,s,n){return s&&0!==s.length?"string"!=typeof e?s:(n=n||{},s.reduce((function(s,r,o,i){var a=r;n.extract&&(a=n.extract(r));var l=t.match(e,a,n);return null!=l&&(s[s.length]={string:l.rendered,score:l.score,index:o,original:r}),s}),[]).sort((function(e,t){var s=t.score-e.score;return s||e.index-t.index}))):[]}},"./node_modules/json-markup/index.js":e=>{"use strict";var t="    ";function s(e){return e?function(t){return'style="'+(s=e["."+t],n="",s&&Object.keys(s).forEach((function(e){n+=e+":"+s[e]+";"})),n+'"');var s,n}:function(e){return'class="'+e+'"'}}function n(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}e.exports=function(e,r){var o="",i=s(r),a=function(e,s,n,r){if(!e.length)return s+" "+n;var i=s+"\n";return o+=t,e.forEach((function(t,s){i+=o+r(t)+(s<e.length-1?",":"")+"\n"})),o=o.slice(0,-t.length),i+o+n};return"<div "+i("json-markup")+">"+function e(t){if(void 0===t)return"";switch(function(e){return null===e?"null":Array.isArray(e)?"array":"string"==typeof e&&/^https?:/.test(e)?"link":"object"==typeof e&&"function"==typeof e.toISOString?"date":typeof e}(t)){case"boolean":return"<span "+i("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+i("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+n(t.toISOString())+'"</span>';case"null":return"<span "+i("json-markup-null")+">null</span>";case"string":return"<span "+i("json-markup-string")+'>"'+n(t.replace(/\n/g,"\n"+o))+'"</span>';case"link":return"<span "+i("json-markup-string")+'>"<a href="'+n(t)+'">'+n(t)+'</a>"</span>';case"array":return a(t,"[","]",e);case"object":var s=Object.keys(t).filter((function(e){return void 0!==t[e]}));return a(s,"{","}",(function(s){return"<span "+i("json-markup-key")+'>"'+s+'":</span> '+e(t[s])}))}return""}(e)+"</div>"}},"./node_modules/react-icon-base/lib/index.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/prop-types/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t){var s=e.children,o=e.color,i=e.size,a=e.style,l=e.width,c=e.height,d=function(e,t){var s={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(s[n]=e[n]);return s}(e,["children","color","size","style","width","height"]),u=t.reactIconBase,p=void 0===u?{}:u,h=i||p.size||"1em";return r.default.createElement("svg",n({children:s,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||h,width:l||h},p,d,{style:n({verticalAlign:"middle",color:o||p.color},p.style||{},a)}))};a.propTypes={color:o.default.string,size:o.default.oneOfType([o.default.string,o.default.number]),width:o.default.oneOfType([o.default.string,o.default.number]),height:o.default.oneOfType([o.default.string,o.default.number]),style:o.default.object},a.contextTypes={reactIconBase:o.default.shape(a.propTypes)},t.default=a,e.exports=t.default},"./node_modules/react-icons/lib/io/alert.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"})))},e.exports=t.default},"./node_modules/react-icons/lib/io/android-locate.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m17.5 13.8c3.4 0 6.3 2.8 6.3 6.2s-2.9 6.3-6.3 6.3-6.2-2.9-6.2-6.3 2.8-6.2 6.2-6.2z m14.9 4.6h2.6v3.2h-2.6c-0.8 7-6.3 12.5-13.3 13.3v2.6h-3.2v-2.6c-7-0.8-12.5-6.3-13.3-13.3h-2.6v-3.2h2.6c0.8-7 6.3-12.5 13.3-13.3v-2.6h3.2v2.6c7 0.8 12.5 6.3 13.3 13.3z m-14.9 13.2c6.4 0 11.6-5.2 11.6-11.6s-5.2-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.2 11.6 11.6 11.6z"})))},e.exports=t.default},"./node_modules/react-icons/lib/io/android-open.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m31.6 31.6v-10.3h3.4v10.3c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h10.4v3.4h-10.4v23.2h23.2z m-9.1-26.6h12.5v12.5h-3.4v-6.8l-16.8 16.8-2.3-2.3 16.8-16.8h-6.8v-3.4z"})))},e.exports=t.default},"./node_modules/react-icons/lib/io/arrow-right-a.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m35 20l-15 15v-8.7h-15v-12.5h15v-8.8z"})))},e.exports=t.default},"./node_modules/react-icons/lib/io/chevron-right.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m23.3 20l-13.1-13.6c-0.3-0.3-0.3-0.9 0-1.2l2.4-2.4c0.3-0.3 0.9-0.4 1.2-0.1l16 16.7c0.1 0.1 0.2 0.4 0.2 0.6s-0.1 0.5-0.2 0.6l-16 16.7c-0.3 0.3-0.9 0.3-1.2 0l-2.4-2.5c-0.3-0.3-0.3-0.9 0-1.2z"})))},e.exports=t.default},"./node_modules/react-icons/lib/io/ios-arrow-down.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m31 12.5l1.5 1.6-12.5 13.4-12.5-13.4 1.5-1.6 11 11.7z"})))},e.exports=t.default},"./node_modules/react-icons/lib/io/ios-arrow-right.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m12.5 9l1.6-1.5 13.4 12.5-13.4 12.5-1.6-1.5 11.7-11z"})))},e.exports=t.default},"./node_modules/react-icons/lib/io/network.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m35 7.5c0 1.9-1 3.4-2.5 4.3v7.3l-10 5v4.1c1.5 0.9 2.5 2.4 2.5 4.3 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.9 1-3.4 2.5-4.3v-4.1l-10-5v-7.3c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5c0 1.9-1 3.4-2.5 4.3v4.1l7.5 3.8 7.5-3.8v-4.1c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5z m-25-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m10 30c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m10-25c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"})))},e.exports=t.default},"./node_modules/react-icons/lib/md/file-upload.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m8.4 30h23.2v3.4h-23.2v-3.4z m6.6-3.4v-10h-6.6l11.6-11.6 11.6 11.6h-6.6v10h-10z"})))},e.exports=t.default},"./node_modules/react-icons/lib/md/keyboard-arrow-right.js":(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},r=i(s("./node_modules/react/index.js")),o=i(s("./node_modules/react-icon-base/lib/index.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement(o.default,n({viewBox:"0 0 40 40"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"})))},e.exports=t.default},"./node_modules/recompose/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":e=>{"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,r=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,a=Object.getPrototypeOf,l=a&&a(Object);e.exports=function e(c,d,u){if("string"!=typeof d){if(l){var p=a(d);p&&p!==l&&e(c,p,u)}var h=r(d);o&&(h=h.concat(o(d)));for(var g=0;g<h.length;++g){var m=h[g];if(!(t[m]||s[m]||u&&u[m])){var f=i(d,m);try{n(c,m,f)}catch(e){}}}return c}return c}},"./node_modules/toggle-selection/index.js":e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],n=0;n<e.rangeCount;n++)s.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"./packages/jaeger-ui-components/node_modules/classnames/index.js":(e,t)=>{var s;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var o=typeof s;if("string"===o||"number"===o)e.push(s);else if(Array.isArray(s)){if(s.length){var i=r.apply(null,s);i&&e.push(i)}}else if("object"===o)if(s.toString===Object.prototype.toString)for(var a in s)n.call(s,a)&&s[a]&&e.push(a);else e.push(s.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(s=function(){return r}.apply(t,[]))||(e.exports=s)}()},"./packages/jaeger-ui-components/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":(e,t,s)=>{"use strict";var n=s("./packages/jaeger-ui-components/node_modules/react-is/index.js"),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return n.isMemo(e)?i:a[e.$$typeof]||r}a[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[n.Memo]=i;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,s,n){if("string"!=typeof s){if(g){var r=h(s);r&&r!==g&&e(t,r,n)}var i=d(s);u&&(i=i.concat(u(s)));for(var a=l(t),m=l(s),f=0;f<i.length;++f){var b=i[f];if(!(o[b]||n&&n[b]||m&&m[b]||a&&a[b])){var v=p(s,b);try{c(t,b,v)}catch(e){}}}}return t}},"./packages/jaeger-ui-components/node_modules/react-is/cjs/react-is.production.min.js":(e,t)=>{"use strict";var s="function"==typeof Symbol&&Symbol.for,n=s?Symbol.for("react.element"):60103,r=s?Symbol.for("react.portal"):60106,o=s?Symbol.for("react.fragment"):60107,i=s?Symbol.for("react.strict_mode"):60108,a=s?Symbol.for("react.profiler"):60114,l=s?Symbol.for("react.provider"):60109,c=s?Symbol.for("react.context"):60110,d=s?Symbol.for("react.async_mode"):60111,u=s?Symbol.for("react.concurrent_mode"):60111,p=s?Symbol.for("react.forward_ref"):60112,h=s?Symbol.for("react.suspense"):60113,g=s?Symbol.for("react.suspense_list"):60120,m=s?Symbol.for("react.memo"):60115,f=s?Symbol.for("react.lazy"):60116,b=s?Symbol.for("react.block"):60121,v=s?Symbol.for("react.fundamental"):60117,y=s?Symbol.for("react.responder"):60118,x=s?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case d:case u:case o:case a:case i:case h:return e;default:switch(e=e&&e.$$typeof){case c:case p:case f:case m:case l:return e;default:return t}}case r:return t}}}function j(e){return w(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=n,t.ForwardRef=p,t.Fragment=o,t.Lazy=f,t.Memo=m,t.Portal=r,t.Profiler=a,t.StrictMode=i,t.Suspense=h,t.isAsyncMode=function(e){return j(e)||w(e)===d},t.isConcurrentMode=j,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===f},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===r},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===u||e===a||e===i||e===h||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===p||e.$$typeof===v||e.$$typeof===y||e.$$typeof===x||e.$$typeof===b)},t.typeOf=w},"./packages/jaeger-ui-components/node_modules/react-is/index.js":(e,t,s)=>{"use strict";e.exports=s("./packages/jaeger-ui-components/node_modules/react-is/cjs/react-is.production.min.js")}}]);
//# sourceMappingURL=514.0e7ce18a6cf0f8775a65.js.map