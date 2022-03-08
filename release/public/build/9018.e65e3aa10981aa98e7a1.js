(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[9018],{"./packages/jaeger-ui-components/src/index.ts":(e,t,n)=>{"use strict";n.d(t,{kt:()=>Vs,T2:()=>$s,Ox:()=>xr,y3:()=>Je,Mp:()=>Ze,DE:()=>rt,J5:()=>Xe,YB:()=>Ye,h2:()=>ee,rZ:()=>fa,R1:()=>ga});var r=n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js"),s=n("./.yarn/cache/@emotion-cache-npm-11.7.1-82b45442ee-cf7aa8fe3b.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),a=n("./.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),o=n("./.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function i(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function l(e,t,n){var r=[],s=(0,o.f)(e,r,n);return r.length<2?n:s+t(r)}var c=function e(t){for(var n="",r=0;r<t.length;r++){var s=t[r];if(null!=s){var a=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))a=e(s);else for(var o in a="",s)s[o]&&o&&(a&&(a+=" "),a+=o);break;default:a=s}a&&(n&&(n+=" "),n+=a)}}return n};const d=function(e){var t=(0,s.Z)(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=(0,a.O)(n,t.registered,void 0);return(0,o.M)(t,s,!1),t.key+"-"+s.name};return{css:n,cx:function(){for(var e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];return l(t.registered,n,c(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=(0,a.O)(n,t.registered);i(t,s)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=(0,a.O)(n,t.registered),o="animation-"+s.name;return i(t,{name:s.name,styles:"@keyframes "+o+"{"+s.styles+"}"}),o},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:o.f.bind(null,t.registered),merge:l.bind(null,t.registered,n)}};var p=d({key:"css"}),u=(p.flush,p.hydrate,p.cx),h=(p.merge,p.getRegisteredStyles,p.injectGlobal,p.keyframes),m=p.css,g=(p.sheet,p.cache,n("./packages/grafana-ui/src/index.ts")),f=n("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js"),b=n.n(f),y=n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/jsx-runtime.js");const v=()=>({TimelineCollapser:m`
      align-items: center;
      display: flex;
      flex: none;
      justify-content: center;
      margin-right: 0.5rem;
    `});function x(e){const{onExpandAll:t,onExpandOne:n,onCollapseAll:r,onCollapseOne:s}=e,a=(0,g.useStyles2)(v);return(0,y.jsxs)("div",{className:a.TimelineCollapser,"data-test-id":"TimelineCollapser",children:[(0,y.jsx)(g.IconButton,{tooltip:"Expand +1",size:"xl",tooltipPlacement:"top",name:"angle-down",onClick:n}),(0,y.jsx)(g.IconButton,{tooltip:"Collapse +1",size:"xl",tooltipPlacement:"top",name:"angle-right",onClick:s}),(0,y.jsx)(g.IconButton,{tooltip:"Expand All",size:"xl",tooltipPlacement:"top",name:"angle-double-down",onClick:t}),(0,y.jsx)(g.IconButton,{tooltip:"Collapse All",size:"xl",tooltipPlacement:"top",name:"angle-double-right",onClick:r})]})}var w;!function(e){e.DragEnd="DragEnd",e.DragMove="DragMove",e.DragStart="DragStart",e.MouseEnter="MouseEnter",e.MouseLeave="MouseLeave",e.MouseMove="MouseMove"}(w||(w={}));const _=w;var k=n("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const j=["getBounds","tag","resetBoundsOnResize"];function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class I{constructor(e){let{getBounds:t,tag:n,resetBoundsOnResize:r=!0}=e,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,j);T(this,"_bounds",void 0),T(this,"_isDragging",void 0),T(this,"_onMouseEnter",void 0),T(this,"_onMouseLeave",void 0),T(this,"_onMouseMove",void 0),T(this,"_onDragStart",void 0),T(this,"_onDragMove",void 0),T(this,"_onDragEnd",void 0),T(this,"_resetBoundsOnResize",void 0),T(this,"getBounds",void 0),T(this,"tag",void 0),T(this,"handleMouseEnter",void 0),T(this,"handleMouseMove",void 0),T(this,"handleMouseLeave",void 0),T(this,"handleMouseDown",void 0),T(this,"resetBounds",(()=>{this._bounds=void 0})),T(this,"_handleMinorMouseEvent",(e=>{const{button:t,clientX:n,type:r}=e;if(this._isDragging||0!==t)return;let s,a=null;if("mouseenter"===r)a=_.MouseEnter,s=this._onMouseEnter;else if("mouseleave"===r)a=_.MouseLeave,s=this._onMouseLeave;else{if("mousemove"!==r)throw new Error(`invalid event type: ${r}`);a=_.MouseMove,s=this._onMouseMove}if(!s)return;const{value:o,x:i}=this._getPosition(n);s({event:e,type:a,value:o,x:i,manager:this,tag:this.tag})})),T(this,"_handleDragEvent",(e=>{const{button:t,clientX:n,type:r}=e;let s,a=null;if("mousedown"===r){if(this._isDragging||0!==t)return;window.addEventListener("mousemove",this._handleDragEvent),window.addEventListener("mouseup",this._handleDragEvent);const e=(0,k.get)(document,"body.style");e&&(e.userSelect="none"),this._isDragging=!0,a=_.DragStart,s=this._onDragStart}else if("mousemove"===r){if(!this._isDragging)return;a=_.DragMove,s=this._onDragMove}else{if("mouseup"!==r)throw new Error(`invalid event type: ${r}`);if(!this._isDragging)return;this._stopDragging(),a=_.DragEnd,s=this._onDragEnd}if(!s)return;const{value:o,x:i}=this._getPosition(n);s({event:e,type:a,value:o,x:i,manager:this,tag:this.tag})})),this.handleMouseDown=this._handleDragEvent,this.handleMouseEnter=this._handleMinorMouseEvent,this.handleMouseMove=this._handleMinorMouseEvent,this.handleMouseLeave=this._handleMinorMouseEvent,this.getBounds=t,this.tag=n,this._isDragging=!1,this._bounds=void 0,this._resetBoundsOnResize=Boolean(r),this._resetBoundsOnResize&&window.addEventListener("resize",this.resetBounds),this._onMouseEnter=s.onMouseEnter,this._onMouseLeave=s.onMouseLeave,this._onMouseMove=s.onMouseMove,this._onDragStart=s.onDragStart,this._onDragMove=s.onDragMove,this._onDragEnd=s.onDragEnd}_getBounds(){return this._bounds||(this._bounds=this.getBounds(this.tag)),this._bounds}_getPosition(e){const{clientXLeft:t,maxValue:n,minValue:r,width:s}=this._getBounds();let a=e-t,o=a/s;return null!=r&&o<r?(o=r,a=r*s):null!=n&&o>n&&(o=n,a=n*s),{value:o,x:a}}_stopDragging(){window.removeEventListener("mousemove",this._handleDragEvent),window.removeEventListener("mouseup",this._handleDragEvent);const e=(0,k.get)(document,"body.style");e&&(e.userSelect=null),this._isDragging=!1}isDragging(){return this._isDragging}dispose(){this._isDragging&&this._stopDragging(),this._resetBoundsOnResize&&window.removeEventListener("resize",this.resetBounds),this._bounds=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0}}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const D=(0,g.stylesFactory)((()=>({TimelineColumnResizer:m`
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,wrapper:m`
      bottom: 0;
      position: absolute;
      top: 0;
    `,dragger:m`
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
    `,draggerDragging:m`
      background: rgba(136, 0, 136, 0.05);
      width: unset;
      &::before {
        left: -2000px;
        right: -2000px;
      }
    `,draggerDraggingLeft:m`
      border-left: 2px solid #808;
      border-right: 1px solid #999;
    `,draggerDraggingRight:m`
      border-left: 1px solid #999;
      border-right: 2px solid #808;
    `,gripIcon:m`
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
    `,gripIconDragging:m`
      &::before,
      &::after {
        border-right: 1px solid rgba(136, 0, 136, 0.5);
      }
    `})));class C extends r.PureComponent{constructor(e){super(e),S(this,"state",void 0),S(this,"_dragManager",void 0),S(this,"_rootElm",void 0),S(this,"_setRootElm",(e=>{this._rootElm=e})),S(this,"_getDraggingBounds",(()=>{if(!this._rootElm)throw new Error("invalid state");const{left:e,width:t}=this._rootElm.getBoundingClientRect(),{min:n,max:r}=this.props;return{clientXLeft:e,width:t,maxValue:r,minValue:n}})),S(this,"_handleDragUpdate",(e=>{let{value:t}=e;this.setState({dragPosition:t})})),S(this,"_handleDragEnd",(e=>{let{manager:t,value:n}=e;t.resetBounds(),this.setState({dragPosition:null}),this.props.onChange(n)})),this._dragManager=new I({getBounds:this._getDraggingBounds,onDragEnd:this._handleDragEnd,onDragMove:this._handleDragUpdate,onDragStart:this._handleDragUpdate}),this._rootElm=void 0,this.state={dragPosition:null}}componentWillUnmount(){this._dragManager.dispose()}render(){let e,t;const{position:n,columnResizeHandleHeight:r}=this.props,{dragPosition:s}=this.state;e=100*n+"%";const a={left:e};let o=!1,i=!1;const l=D();if(this._dragManager.isDragging()&&this._rootElm&&null!=s){o=s<n,i=s>n,e=100*s+"%";t={left:100*Math.min(n,s)+"%",right:`calc(${100*(1-Math.max(n,s))}% - 1px)`}}else t=a;t.height=r;const c=o||i;return(0,y.jsxs)("div",{className:l.TimelineColumnResizer,ref:this._setRootElm,"data-test-id":"TimelineColumnResizer",children:[(0,y.jsx)("div",{className:b()(l.gripIcon,c&&l.gripIconDragging),style:a,"data-test-id":"TimelineColumnResizer--gripIcon"}),(0,y.jsx)("div",{"aria-hidden":!0,className:b()(l.dragger,c&&l.draggerDragging,i&&l.draggerDraggingRight,o&&l.draggerDraggingLeft),onMouseDown:this._dragManager.handleMouseDown,style:t,"data-test-id":"TimelineColumnResizer--dragger"})]})}}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const L=(0,g.stylesFactory)((()=>({TimelineViewingLayer:m`
      label: TimelineViewingLayer;
      bottom: 0;
      cursor: vertical-text;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,TimelineViewingLayerCursorGuide:m`
      label: TimelineViewingLayerCursorGuide;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: red;
    `,TimelineViewingLayerDragged:m`
      label: TimelineViewingLayerDragged;
      position: absolute;
      top: 0;
      bottom: 0;
    `,TimelineViewingLayerDraggedDraggingLeft:m`
      label: TimelineViewingLayerDraggedDraggingLeft;
      border-left: 1px solid;
    `,TimelineViewingLayerDraggedDraggingRight:m`
      label: TimelineViewingLayerDraggedDraggingRight;
      border-right: 1px solid;
    `,TimelineViewingLayerDraggedShiftDrag:m`
      label: TimelineViewingLayerDraggedShiftDrag;
      background-color: rgba(68, 68, 255, 0.2);
      border-color: #44f;
    `,TimelineViewingLayerDraggedReframeDrag:m`
      label: TimelineViewingLayerDraggedReframeDrag;
      background-color: rgba(255, 68, 68, 0.2);
      border-color: #f44;
    `,TimelineViewingLayerFullOverlay:m`
      label: TimelineViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `})));function E(e,t,n){return e+n*(t-e)}function O(e,t,n){return(n-e)/(t-e)}function M(e,t,n,r,s){const a=function(e,t){let[n,r]=e<t?[e,t]:[t,e];return n>=1||r<=0?{isOutOfView:!0}:(n<0&&(n=0),r>1&&(r=1),{isDraggingLeft:e>t,left:100*n+"%",width:100*(r-n)+"%"})}(O(e,t,n),O(e,t,r));if(function(e){return Reflect.has(e,"isOutOfView")}(a))return null;const{isDraggingLeft:o,left:i,width:l}=a,c=L(),d=u({[c.TimelineViewingLayerDraggedDraggingRight]:!o,[c.TimelineViewingLayerDraggedReframeDrag]:!s,[c.TimelineViewingLayerDraggedShiftDrag]:s});return(0,y.jsx)("div",{className:u(c.TimelineViewingLayerDragged,c.TimelineViewingLayerDraggedDraggingLeft,d),style:{left:i,width:l},"data-test-id":"Dragged"})}class P extends r.PureComponent{constructor(e){super(e),N(this,"_draggerReframe",void 0),N(this,"_root",void 0),N(this,"_setRoot",(e=>{this._root=e})),N(this,"_getDraggingBounds",(()=>{if(!this._root)throw new Error("invalid state");const{left:e,width:t}=this._root.getBoundingClientRect();return{clientXLeft:e,width:t}})),N(this,"_handleReframeMouseMove",(e=>{let{value:t}=e;const[n,r]=this.props.viewRangeTime.current,s=E(n,r,t);this.props.updateNextViewRangeTime({cursor:s})})),N(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:void 0})})),N(this,"_handleReframeDragUpdate",(e=>{let{value:t}=e;const{current:n,reframe:r}=this.props.viewRangeTime,[s,a]=n,o=E(s,a,t),i={reframe:{anchor:r?r.anchor:o,shift:o}};this.props.updateNextViewRangeTime(i)})),N(this,"_handleReframeDragEnd",(e=>{let{manager:t,value:n}=e;const{current:r,reframe:s}=this.props.viewRangeTime,[a,o]=r,i=E(a,o,n),l=s?s.anchor:i,[c,d]=i<l?[i,l]:[l,i];t.resetBounds(),this.props.updateViewRangeTime(c,d,"timeline-header")})),this._draggerReframe=new I({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseLeave:this._handleReframeMouseLeave,onMouseMove:this._handleReframeMouseMove}),this._root=void 0}UNSAFE_componentWillReceiveProps(e){const{boundsInvalidator:t}=this.props;t!==e.boundsInvalidator&&this._draggerReframe.resetBounds()}componentWillUnmount(){this._draggerReframe.dispose()}render(){const{viewRangeTime:e}=this.props,{current:t,cursor:n,reframe:r,shiftEnd:s,shiftStart:a}=e,[o,i]=t;let l;!(null!=r||null!=s||null!=a)&&null!=n&&n>=o&&n<=i&&(l=100*O(o,i,n)+"%");const c=L();return(0,y.jsxs)("div",{"aria-hidden":!0,className:c.TimelineViewingLayer,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,"data-test-id":"TimelineViewingLayer",children:[null!=l&&(0,y.jsx)("div",{className:c.TimelineViewingLayerCursorGuide,style:{left:l},"data-test-id":"TimelineViewingLayer--cursorGuide"}),null!=r&&M(o,i,r.anchor,r.shift,!1),null!=s&&M(o,i,i,s,!0),null!=a&&M(o,i,o,a,!0)]})}}var R=n("./.yarn/cache/moment-timezone-npm-0.5.34-e4fe2d01f6-12a1d3d52e.zip/node_modules/moment-timezone/index.js"),z=n.n(R);const $=1e3,H=1e6,V=6e7,F=36e8,B=Math.log10($),A=[{unit:"d",microseconds:864e8,ofPrevious:24},{unit:"h",microseconds:F,ofPrevious:60},{unit:"m",microseconds:V,ofPrevious:60},{unit:"s",microseconds:H,ofPrevious:1e3},{unit:"ms",microseconds:$,ofPrevious:1e3},{unit:"μs",microseconds:1,ofPrevious:1e3}];const G=(e,t,n)=>function(e,t){const n=t+(Math.floor(Math.log10(Math.abs(e)))+1);return n<=0?Math.trunc(e):Number(e.toPrecision(n))}(e/n,t)*n;function W(e){const[t,n]=(0,k.dropWhile)(A,((t,n)=>{let{microseconds:r}=t;return n<A.length-1&&r>e}));if(1e3===t.ofPrevious)return`${(0,k.round)(e/t.microseconds,2)}${t.unit}`;const r=`${Math.floor(e/t.microseconds)}${t.unit}`,s=Math.round(e/n.microseconds%t.ofPrevious),a=`${s}${n.unit}`;return 0===s?r:`${r} ${a}`}function U(e,t,n){return!(!Array.isArray(n.tags)||!n.tags.length)&&n.tags.some((n=>n.key===e&&n.value===t))}const K=U.bind(null,"span.kind","client"),q=U.bind(null,"span.kind","server"),Z=U.bind(null,"error",!0),X=U.bind(null,"error","true"),Y=e=>Z(e)||X(e);var J=n("./.yarn/cache/tinycolor2-npm-1.4.2-462ba30c26-57ed262e08.zip/node_modules/tinycolor2/tinycolor.js"),Q=n.n(J);function ee(e,t,n){if(e.isLight)return t;{if(n){const e=Q()(t);return Q().mostReadable(n,[e.clone().lighten(25),e.clone().lighten(10),e,e.clone().darken(10),e.clone().darken(25)],{includeFallbackColors:!1}).toHex8String()}const e=Q()(t).toHsl();e.l=1-e.l;const r=Q()(e);return r.isLight()?r.darken(5).toHex8String():r.lighten(5).toHex8String()}}const te=e=>({Ticks:m`
      label: Ticks;
      pointer-events: none;
    `,TicksTick:m`
      label: TicksTick;
      position: absolute;
      height: 100%;
      width: 1px;
      background: ${ee(e,"#d8d8d8")};
      &:last-child {
        width: 0;
      }
    `,TicksTickLabel:m`
      label: TicksTickLabel;
      left: 0.25rem;
      position: absolute;
    `,TicksTickLabelEndAnchor:m`
      label: TicksTickLabelEndAnchor;
      left: initial;
      right: 0.25rem;
    `});function ne(e){const{endTime:t,numTicks:n,showLabels:r,startTime:s}=e;let a;if(r){a=[];const e=(t||0)-(s||0);for(let t=0;t<n;t++){const r=(s||0)+t/(n-1)*e;a.push(W(r))}}const o=(0,g.useStyles2)(te),i=[];for(let e=0;e<n;e++){const t=e/(n-1);i.push((0,y.jsx)("div",{className:o.TicksTick,style:{left:100*t+"%"},children:a&&(0,y.jsx)("span",{className:b()(o.TicksTickLabel,{[o.TicksTickLabelEndAnchor]:t>=1}),children:a[e]})},t))}return(0,y.jsx)("div",{className:o.Ticks,children:i})}ne.defaultProps={endTime:null,showLabels:null,startTime:null};const re=m`
  position: relative;
`,se=m`
  margin-bottom: 0.25rem;
`,ae=m`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,oe=m`
  margin: 0;
`,ie=m`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,le=m`
  padding-bottom: 0.5rem;
`,ce=m`
  display: flex;
`,de=m`
  align-items: center;
`,pe=m`
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`,ue=m`
  text-align: right;
`,he=m`
  display: inline-block;
`,me=m`
  margin: -0.2rem 0.25rem 0 0;
`,ge=m`
  text-overflow: ellipsis;
`,fe=m`
  width: 100%;
`,be=m`
  color: #aaa;
`,ye=m`
  justify-content: flex-end;
`,ve=["children","className"],xe=["children","className","width","style"];function we(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}const _e=()=>({flexRow:m`
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
    `});function ke(e){const{children:t,className:n=""}=e,r=we(e,ve),s=(0,g.useStyles2)(_e);return(0,y.jsx)("div",Object.assign({className:b()(s.flexRow,n)},r,{children:t}))}function je(e){const{children:t,className:n="",width:r,style:s}=e,a=we(e,xe),o=100*r+"%",i=Object.assign({},s,{flexBasis:o,maxWidth:o});return(0,y.jsx)("div",Object.assign({className:b()(re,n),style:i},a,{children:t}))}ke.defaultProps={className:""},je.defaultProps={className:"",style:{}},ke.Cell=je;const Te=e=>({TimelineHeaderRow:m`
      label: TimelineHeaderRow;
      background: ${ee(e,"#ececec")};
      border-bottom: 1px solid ${ee(e,"#ccc")};
      height: 38px;
      line-height: 38px;
      width: 100%;
      z-index: 4;
      position: relative;
    `,TimelineHeaderRowTitle:m`
      label: TimelineHeaderRowTitle;
      flex: 1;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,TimelineHeaderWrapper:m`
      label: TimelineHeaderWrapper;
      align-items: center;
    `});function Ie(e){const{duration:t,nameColumnWidth:n,numTicks:r,onCollapseAll:s,onCollapseOne:a,onColummWidthChange:o,onExpandAll:i,onExpandOne:l,updateViewRangeTime:c,updateNextViewRangeTime:d,viewRangeTime:p,columnResizeHandleHeight:u}=e,[h,m]=p.current,f=(0,g.useStyles2)(Te);return(0,y.jsxs)(ke,{className:f.TimelineHeaderRow,"data-test-id":"TimelineHeaderRow",children:[(0,y.jsxs)(ke.Cell,{className:b()(ce,ie,f.TimelineHeaderWrapper),width:n,children:[(0,y.jsx)("h4",{className:f.TimelineHeaderRowTitle,children:"Service & Operation"}),(0,y.jsx)(x,{onCollapseAll:s,onExpandAll:i,onCollapseOne:a,onExpandOne:l})]}),(0,y.jsxs)(ke.Cell,{width:1-n,children:[(0,y.jsx)(P,{boundsInvalidator:n,updateNextViewRangeTime:d,updateViewRangeTime:c,viewRangeTime:p}),(0,y.jsx)(ne,{numTicks:r,startTime:h*t,endTime:m*t,showLabels:!0})]}),(0,y.jsx)(C,{columnResizeHandleHeight:u,position:n,onChange:o,min:.2,max:.85})]})}var Se=n("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js");function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Ce{constructor(e){De(this,"bufferLen",void 0),De(this,"dataLen",void 0),De(this,"heights",void 0),De(this,"lastI",void 0),De(this,"ys",void 0),this.ys=[],this.heights=[],this.bufferLen=e,this.dataLen=-1,this.lastI=-1}profileData(e){e!==this.dataLen&&(this.dataLen=e,this.ys.length=e,this.heights.length=e,this.lastI>=e&&(this.lastI=e-1))}calcHeights(e,t,n){null!=n&&(this.lastI=n);let r=e+this.bufferLen;if(r<=this.lastI)return;r>=this.heights.length&&(r=this.heights.length-1);let s=this.lastI;for(-1===this.lastI&&(s=0,this.ys[0]=0);s<=r;){const e=this.heights[s]=t(s);this.ys[s+1]=this.ys[s]+e,s++}this.lastI=r}calcYs(e,t){for(;(null==this.ys[this.lastI]||e>this.ys[this.lastI])&&this.lastI<this.dataLen-1;)this.calcHeights(this.lastI,t)}confirmHeight(e,t){let n=e;if(n>this.lastI)return void this.calcHeights(n,t);const r=t(n);if(r===this.heights[n])return;const s=r-this.heights[n];for(this.heights[n]=r;++n<=this.lastI;)this.ys[n]+=s;null!=this.ys[this.lastI+1]&&(this.ys[this.lastI+1]+=s)}findFloorIndex(e,t){this.calcYs(e,t);let n,r=0,s=this.lastI;if(this.ys.length<2||e<this.ys[1])return 0;if(e>this.ys[s])return s;for(;r<s;)if(n=r+.5*(s-r)|0,e>this.ys[n]){if(e<=this.ys[n+1])return n;r=n}else{if(!(e<this.ys[n]))return n;if(e>=this.ys[n-1])return n-1;s=n}throw new Error(`unable to find floor index for y=${e}`)}getRowPosition(e,t){return this.confirmHeight(e,t),{height:this.heights[e],y:this.ys[e]}}getEstimatedHeight(){const e=this.ys[this.lastI]+this.heights[this.lastI];return this.lastI>=this.dataLen-1?0|e:e/(this.lastI+1)*this.heights.length|0}}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Le=100;class Ee extends r.Component{constructor(e){super(e),Ne(this,"_yPositions",void 0),Ne(this,"_knownHeights",void 0),Ne(this,"_startIndexDrawn",void 0),Ne(this,"_endIndexDrawn",void 0),Ne(this,"_startIndex",void 0),Ne(this,"_endIndex",void 0),Ne(this,"_viewHeight",void 0),Ne(this,"_scrollTop",void 0),Ne(this,"_isScrolledOrResized",void 0),Ne(this,"_htmlTopOffset",void 0),Ne(this,"_windowScrollListenerAdded",void 0),Ne(this,"_htmlElm",void 0),Ne(this,"_wrapperElm",void 0),Ne(this,"_itemHolderElm",void 0),Ne(this,"getViewHeight",(()=>this._viewHeight)),Ne(this,"getBottomVisibleIndex",(()=>{const e=this._scrollTop+this._viewHeight;return this._yPositions.findFloorIndex(e,this._getHeight)})),Ne(this,"getTopVisibleIndex",(()=>this._yPositions.findFloorIndex(this._scrollTop,this._getHeight))),Ne(this,"getRowPosition",(e=>this._yPositions.getRowPosition(e,this._getHeight))),Ne(this,"scrollToIndex",(e=>{var t,n;const{scrollElement:r}=this.props,s=(null==r?void 0:r.getBoundingClientRect().top)||0,a=((null==r?void 0:r.scrollTop)||0)+((null===(t=this._itemHolderElm)||void 0===t?void 0:t.getBoundingClientRect().top)||0)-s,o=this.getRowPosition(e).y;null===(n=this.props.scrollElement)||void 0===n||n.scrollTo({top:o+a-80})})),Ne(this,"_onScroll",(()=>{this._isScrolledOrResized||(this._isScrolledOrResized=!0,window.requestAnimationFrame(this._positionList))})),Ne(this,"_positionList",(()=>{if(this._isScrolledOrResized=!1,!this._wrapperElm)return;this._calcViewIndexes();const e=this.props.viewBufferMin>this._startIndex?0:this._startIndex-this.props.viewBufferMin,t=this.props.viewBufferMin<this.props.dataLength-this._endIndex?this._endIndex+this.props.viewBufferMin:this.props.dataLength-1;(e<this._startIndexDrawn||t>this._endIndexDrawn)&&this.forceUpdate()})),Ne(this,"_initWrapper",(e=>{this.props.windowScroller&&(this._wrapperElm=e,e&&(this._viewHeight=e.clientHeight))})),Ne(this,"_initItemHolder",(e=>{this._itemHolderElm=e,this._scanItemHeights()})),Ne(this,"_scanItemHeights",(()=>{const e=this.props.getIndexFromKey;if(!this._itemHolderElm)return;let t=null,n=null,r=!1;const s=this._itemHolderElm.childNodes,a=s.length;for(let e=0;e<a;e++){const a=s[e],o=a.getAttribute("data-item-key");if(!o){console.warn("itemKey not found");continue}const i=(a.firstElementChild||a).clientHeight;i!==this._knownHeights.get(o)&&(this._knownHeights.set(o,i),r?n=o:(r=!0,t=n=o))}if(null!=t&&null!=n){const r=e(t),s=n===t?r:e(n);this._yPositions.calcHeights(s,this._getHeight,r),this.forceUpdate()}})),Ne(this,"_getHeight",(e=>{const t=this.props.getKeyFromIndex(e),n=this._knownHeights.get(t);return null!=n&&n==n?n:this.props.itemHeightGetter(e,t)})),this._yPositions=new Ce(200),this._knownHeights=new Map,this._startIndexDrawn=2**20,this._endIndexDrawn=-1048576,this._startIndex=0,this._endIndex=0,this._viewHeight=-1,this._scrollTop=-1,this._isScrolledOrResized=!1,this._htmlTopOffset=-1,this._windowScrollListenerAdded=!1,this._htmlElm=document.documentElement,this._wrapperElm=void 0,this._itemHolderElm=void 0}componentDidMount(){if(this.props.windowScroller){if(this._wrapperElm){const{top:e}=this._wrapperElm.getBoundingClientRect();this._htmlTopOffset=e+this._htmlElm.scrollTop}window.addEventListener("scroll",this._onScroll),this._windowScrollListenerAdded=!0}else{var e;this._wrapperElm=this.props.scrollElement,null===(e=this._wrapperElm)||void 0===e||e.addEventListener("scroll",this._onScroll)}}componentDidUpdate(){this._itemHolderElm&&this._scanItemHeights()}componentWillUnmount(){var e;this._windowScrollListenerAdded?window.removeEventListener("scroll",this._onScroll):null===(e=this._wrapperElm)||void 0===e||e.removeEventListener("scroll",this._onScroll)}_isViewChanged(){if(!this._wrapperElm)return!1;const e=this.props.windowScroller,t=e?this._htmlElm.clientHeight:this._wrapperElm.clientHeight,n=e?this._htmlElm.scrollTop:this._wrapperElm.scrollTop;return t!==this._viewHeight||n!==this._scrollTop}_calcViewIndexes(){if(this.props.windowScroller)this._viewHeight=window.innerHeight-this._htmlTopOffset,this._scrollTop=window.scrollY;else{if(!this._wrapperElm)return this._viewHeight=-1,this._startIndex=0,void(this._endIndex=0);this._viewHeight=this._wrapperElm.clientHeight,this._scrollTop=this._wrapperElm.scrollTop}const e=this._scrollTop,t=this._scrollTop+this._viewHeight;this._startIndex=this._yPositions.findFloorIndex(e,this._getHeight),this._endIndex=this._yPositions.findFloorIndex(t,this._getHeight)}render(){const{dataLength:e,getKeyFromIndex:t,initialDraw:n=Le,itemRenderer:r,viewBuffer:s,viewBufferMin:a}=this.props,o=this._getHeight,i=[];let l,c;if(this._yPositions.profileData(e),this._wrapperElm){this._isViewChanged()&&this._calcViewIndexes();const t=a>this._startIndex?0:this._startIndex-a,n=a<e-this._endIndex?this._endIndex+a:e-1;t<this._startIndexDrawn||n>this._endIndexDrawn?(l=s>this._startIndex?0:this._startIndex-s,c=this._endIndex+s,c>=e&&(c=e-1)):(l=this._startIndexDrawn,c=this._endIndexDrawn>e-1?e-1:this._endIndexDrawn)}else l=0,c=(n<e?n:e)-1;this._yPositions.calcHeights(c,o,l||-1),this._startIndexDrawn=l,this._endIndexDrawn=c,i.length=c-l+1;for(let e=l;e<=c;e++){const{y:n,height:s}=this._yPositions.getRowPosition(e,o),a={height:s,top:n,position:"absolute"},l=t(e),c={"data-item-key":l};i.push(r(l,a,e,c))}const d={style:{position:"relative"},ref:this._initWrapper};this.props.windowScroller||(d.onScroll=this._onScroll,d.style.height="100%",d.style.overflowY="auto");const p={position:"relative",height:this._yPositions.getEstimatedHeight()};return(0,y.jsx)("div",Object.assign({},d,{children:(0,y.jsx)("div",{style:p,children:(0,y.jsx)("div",{style:{position:"absolute",top:0,margin:0,padding:0},className:this.props.itemsWrapperClassName,ref:this._initItemHolder,children:i})})}))}}Ne(Ee,"defaultProps",{initialDraw:Le,itemsWrapperClassName:"",windowScroller:!1});var Oe=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js"),Me=n.n(Oe),Pe=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js"),Re=n.n(Pe),ze=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/network.js"),$e=n.n(ze),He=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js"),Ve=n.n(He),Fe=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js"),Be=n.n(Fe);const Ae=["isLarge","className"];const Ge=()=>({NewWindowIconLarge:m`
      label: NewWindowIconLarge;
      font-size: 1.5em;
    `});function We(e){const{isLarge:t,className:n}=e,r=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,Ae),s=(0,g.useStyles2)(Ge),a=b()({[s.NewWindowIconLarge]:t},n);return(0,y.jsx)(Be(),Object.assign({className:a},r))}We.defaultProps={isLarge:!1};const Ue=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Popover,Object.assign({},e))})},Ke=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Tooltip,Object.assign({},e))})},qe=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Icon,Object.assign({},e))})},Ze=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Dropdown,Object.assign({},e))})},Xe=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Menu,Object.assign({},e))})},Ye=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.MenuItem,Object.assign({},e))})},Je=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Button,Object.assign({},e))})},Qe=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Divider,Object.assign({},e))})},et=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.Input,Object.assign({},e))})},tt=function(e){return(0,y.jsx)(st,{children:t=>(0,y.jsx)(t.InputGroup,Object.assign({},e))})},nt=r.createContext(void 0);nt.displayName="UIElementsContext";const rt=nt;function st(e){return(0,y.jsx)(nt.Consumer,{children:t=>{if(!t)throw new Error("Elements context is required. You probably forget to use UIElementsContext.Provider");return e.children(t)}})}const at=r.createContext(void 0);at.displayName="ExternalLinkContext";const ot=at,it=["reference","children","className","focusSpan"];function lt(e){const{reference:t,children:n,className:r,focusSpan:s}=e,a=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,it);return delete a.onClick,t.span?(0,y.jsx)("a",Object.assign({role:"button",onClick:()=>s(t.spanID),className:r},a,{children:n})):(0,y.jsx)(ot.Consumer,{children:e=>{if(!e)throw new Error("ExternalLinkContext does not have a value, you probably forgot to setup it's provider");return(0,y.jsx)("a",Object.assign({href:e(t.traceID,t.spanID),target:"_blank",rel:"noopener noreferrer",className:r},a,{children:n}))}})}const ct=(0,g.stylesFactory)((()=>({MultiParent:m`
      padding: 0 5px;
      color: #000;
      & ~ & {
        margin-left: 5px;
      }
    `,TraceRefLink:m`
      display: flex;
      justify-content: space-between;
    `,NewWindowIcon:m`
      margin: 0.2em 0 0;
    `,tooltip:m`
      max-width: none;
    `})));class dt extends r.PureComponent{constructor(){var e,t,n;super(...arguments),n=e=>{const t=ct();return(0,y.jsx)(Xe,{children:e.map((e=>{const{span:n,spanID:r}=e;return(0,y.jsx)(Ye,{children:(0,y.jsxs)(lt,{reference:e,focusSpan:this.props.focusSpan,className:t.TraceRefLink,children:[n?`${n.process.serviceName}:${n.operationName} - ${e.spanID}`:`(another trace) - ${e.spanID}`,!n&&(0,y.jsx)(We,{className:t.NewWindowIcon})]})},`${r}`)}))})},(t="referencesList")in(e=this)?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}render(){const{references:e,children:t,tooltipText:n,focusSpan:r}=this.props,s=ct(),a={arrowPointAtCenter:!0,mouseLeaveDelay:.5,placement:"bottom",title:n,overlayClassName:s.tooltip};if(e.length>1)return(0,y.jsx)(Ke,Object.assign({},a,{children:(0,y.jsx)(Ze,{overlay:this.referencesList(e),placement:"bottomRight",trigger:["click"],children:(0,y.jsx)("a",{className:s.MultiParent,children:t})})}));const o=e[0];return(0,y.jsx)(Ke,Object.assign({},a,{children:(0,y.jsx)(lt,{reference:o,focusSpan:r,className:s.MultiParent,children:t})}))}}var pt,ut,ht=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js"),mt=n.n(ht),gt=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js"),ft=n.n(gt);function bt(e){return(0,k.get)((0,k.find)(e.references,(e=>{let{span:t,refType:n}=e;return t&&t.spanID&&("CHILD_OF"===n||"FOLLOWS_FROM"===n)})),"span")}function yt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const vt=(0,g.stylesFactory)((e=>({SpanTreeOffset:m`
      label: SpanTreeOffset;
      color: ${ee(e,"#000")};
      position: relative;
    `,SpanTreeOffsetParent:m`
      label: SpanTreeOffsetParent;
      &:hover {
        cursor: pointer;
      }
    `,indentGuide:m`
      label: indentGuide;
      /* The size of the indentGuide is based off of the iconWrapper */
      padding-right: calc(0.5rem + 12px);
      height: 100%;
      border-left: 3px solid transparent;
      display: inline-flex;
      &::before {
        content: '';
        padding-left: 1px;
        background-color: ${ee(e,"lightgrey")};
      }
    `,indentGuideActive:m`
      label: indentGuideActive;
      border-color: ${ee(e,"darkgrey")};
      &::before {
        background-color: transparent;
      }
    `,iconWrapper:m`
      label: iconWrapper;
      position: absolute;
      right: 0.25rem;
    `})));class xt extends r.PureComponent{constructor(e){super(e),yt(this,"ancestorIds",void 0),yt(this,"handleMouseLeave",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,k.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.removeHoverIndentGuideId(t)})),yt(this,"handleMouseEnter",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,k.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.addHoverIndentGuideId(t)})),this.ancestorIds=function(e){const t=[];if(!e)return t;let n=bt(e);for(;n;)t.push(n.spanID),n=bt(n);return t}(e.span),this.ancestorIds.push("root"),this.ancestorIds.reverse()}render(){const{childrenVisible:e,onClick:t,showChildrenIcon:n,span:r,theme:s}=this.props,{hasChildren:a,spanID:o}=r,i=a?{onClick:t,role:"switch","aria-checked":e}:null,l=n&&a&&(e?pt||(pt=(0,y.jsx)(ft(),{})):ut||(ut=(0,y.jsx)(mt(),{}))),c=vt(s);return(0,y.jsxs)("span",Object.assign({className:b()(c.SpanTreeOffset,{[c.SpanTreeOffsetParent]:a})},i,{children:[this.ancestorIds.map((e=>(0,y.jsx)("span",{className:b()(c.indentGuide,{[c.indentGuideActive]:this.props.hoverIndentGuideIds.has(e)}),"data-ancestor-id":e,"data-test-id":"SpanTreeOffset--indentGuide",onMouseEnter:t=>this.handleMouseEnter(t,e),onMouseLeave:t=>this.handleMouseLeave(t,e)},e))),l&&(0,y.jsx)("span",{className:c.iconWrapper,onMouseEnter:e=>this.handleMouseEnter(e,o),onMouseLeave:e=>this.handleMouseLeave(e,o),"data-test-id":"icon-wrapper",children:l})]}))}}yt(xt,"displayName","UnthemedSpanTreeOffset"),yt(xt,"defaultProps",{childrenVisible:!1,showChildrenIcon:!0});const wt=(0,g.withTheme2)(xt);var _t=n("./.yarn/cache/@babel-runtime-npm-7.15.4-52ce5bf6ea-c408254304.zip/node_modules/@babel/runtime/helpers/esm/extends.js"),kt=n("./.yarn/cache/fbjs-npm-0.8.18-79fe681dcf-668731b946.zip/node_modules/fbjs/lib/shallowEqual.js"),jt=n.n(kt),Tt=n("./.yarn/cache/@babel-runtime-npm-7.15.4-52ce5bf6ea-c408254304.zip/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),It=(n("./.yarn/cache/react-lifecycles-compat-npm-3.0.4-d5e285a39e-a904b0fc0a.zip/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js"),n("./.yarn/cache/hoist-non-react-statics-npm-2.5.5-e15c7ba611-ee2d05e5c7.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),n("./.yarn/cache/change-emitter-npm-0.1.6-9daba4f281-0ed494ba99.zip/node_modules/change-emitter/lib/index.js")),St=n("./.yarn/cache/symbol-observable-npm-1.2.0-9e812a0a39-48ffbc22e3.zip/node_modules/symbol-observable/es/index.js"),Dt=function(e){return function(t){var n=(0,r.createFactory)(t);return function(t){return n(e(t))}}},Ct=function(e,t){for(var n={},r=0;r<t.length;r++){var s=t[r];e.hasOwnProperty(s)&&(n[s]=e[s])}return n},Nt=(Object.keys,r.Component,function(e){return function(t){var n=(0,r.createFactory)(t),s=function(t){function r(){return t.apply(this,arguments)||this}(0,Tt.Z)(r,t);var s=r.prototype;return s.shouldComponentUpdate=function(t){return e(this.props,t)},s.render=function(){return n(this.props)},r}(r.Component);return s}}),Lt=function(e){return Nt((function(t,n){return!jt()(Ct(n,e),Ct(t,e))}))};var Et,Ot={fromESObservable:null,toESObservable:null},Mt={fromESObservable:function(e){return"function"==typeof Ot.fromESObservable?Ot.fromESObservable(e):e},toESObservable:function(e){return"function"==typeof Ot.toESObservable?Ot.toESObservable(e):e}},Pt=(Et=Mt,n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js")),Rt=n.n(Pt);var zt=n("./.yarn/cache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js"),$t=n.n(zt),Ht=n("./.yarn/cache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js"),Vt=n.n(Ht);function Ft(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Bt=(0,g.stylesFactory)((()=>({CopyIcon:m`
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
    `})));class At extends r.PureComponent{constructor(){super(...arguments),Ft(this,"state",{hasCopied:!1}),Ft(this,"handleClick",(()=>{this.setState({hasCopied:!0}),Vt()(this.props.copyText)})),Ft(this,"handleTooltipVisibilityChange",(e=>{!e&&this.state.hasCopied&&this.setState({hasCopied:!1})}))}render(){const e=Bt();return(0,y.jsx)(Ke,{arrowPointAtCenter:!0,mouseLeaveDelay:.5,onVisibleChange:this.handleTooltipVisibilityChange,placement:this.props.placement,title:this.state.hasCopied?"Copied":this.props.tooltipTitle,children:(0,y.jsx)(Je,{className:b()(e.CopyIcon,this.props.className),htmlType:"button",icon:this.props.icon,onClick:this.handleClick})})}}Ft(At,"defaultProps",{className:void 0,icon:"copy",placement:"left"});const Gt="copyIcon",Wt=e=>({KeyValueTable:m`
      label: KeyValueTable;
      background: ${ee(e,"#fff")};
      border: 1px solid ${ee(e,"#ddd")};
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,body:m`
      label: body;
      vertical-align: baseline;
    `,row:m`
      label: row;
      & > td {
        padding: 0.25rem 0.5rem;
        padding: 0.25rem 0.5rem;
        vertical-align: top;
      }
      &:nth-child(2n) > td {
        background: ${ee(e,"#f5f5f5")};
      }
      &:not(:hover) .${Gt} {
        visibility: hidden;
      }
    `,keyColumn:m`
      label: keyColumn;
      color: ${ee(e,"#888")};
      white-space: pre;
      width: 125px;
    `,copyColumn:m`
      label: copyColumn;
      text-align: right;
    `,linkIcon:m`
      label: linkIcon;
      vertical-align: middle;
      font-weight: bold;
    `}),Ut=/^(\[|\{)/;function Kt(e){if("string"==typeof e&&Ut.test(e))try{return JSON.parse(e)}catch(e){}return e}const qt=e=>{const t=(0,g.useStyles2)(Wt);return(0,y.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[e.children," ",(0,y.jsx)(qe,{className:t.linkIcon,type:"export"})]})};qt.defaultProps={title:""};const Zt=e=>(0,y.jsx)(Xe,{children:e.map(((e,t)=>{let{text:n,url:r}=e;return(0,y.jsx)(Ye,{children:(0,y.jsx)(qt,{href:r,children:n})},`${r}-${t}`)}))});function Xt(e){const{data:t,linksGetter:n}=e,r=(0,g.useStyles2)(Wt);return(0,y.jsx)("div",{className:b()(r.KeyValueTable),"data-test-id":"KeyValueTable",children:(0,y.jsx)("table",{className:fe,children:(0,y.jsx)("tbody",{className:r.body,children:t.map(((e,s)=>{const a={__html:$t()(Kt(e.value))},o=(0,y.jsx)("div",{className:he,dangerouslySetInnerHTML:a}),i=n?n(t,s):null;let l;return l=i&&1===i.length?(0,y.jsx)("div",{children:(0,y.jsx)(qt,{href:i[0].url,title:i[0].text,children:o})}):i&&i.length>1?(0,y.jsx)("div",{children:(0,y.jsx)(Ze,{overlay:Zt(i),placement:"bottomRight",trigger:["click"],children:(0,y.jsxs)("a",{children:[o," ",(0,y.jsx)(qe,{className:r.linkIcon,type:"profile"})]})})}):o,(0,y.jsxs)("tr",{className:r.row,children:[(0,y.jsx)("td",{className:r.keyColumn,"data-test-id":"KeyValueTable--keyColumn",children:e.key}),(0,y.jsx)("td",{children:l}),(0,y.jsx)("td",{className:r.copyColumn,children:(0,y.jsx)(At,{className:Gt,copyText:JSON.stringify(e,null,2),tooltipTitle:"Copy JSON"})})]},`${e.key}-${s}`)}))})})})}const Yt=e=>({header:m`
      label: header;
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${ee(e,"#e8e8e8")};
      }
    `,headerEmpty:m`
      label: headerEmpty;
      background: none;
      cursor: initial;
    `,headerHighContrast:m`
      label: headerHighContrast;
      &:hover {
        background: ${ee(e,"#ddd")};
      }
    `,emptyIcon:m`
      label: emptyIcon;
      color: ${ee(e,"#aaa")};
    `,summary:m`
      label: summary;
      display: inline;
      list-style: none;
      padding: 0;
    `,summaryItem:m`
      label: summaryItem;
      display: inline;
      margin-left: 0.7em;
      padding-right: 0.5rem;
      border-right: 1px solid ${ee(e,"#ddd")};
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `,summaryLabel:m`
      label: summaryLabel;
      color: ${ee(e,"#777")};
    `,summaryDelim:m`
      label: summaryDelim;
      color: ${ee(e,"#bbb")};
      padding: 0 0.2em;
    `});function Jt(e){const{data:t}=e,n=(0,g.useStyles2)(Yt);return Array.isArray(t)&&t.length?(0,y.jsx)("ul",{className:n.summary,children:t.map(((e,t)=>(0,y.jsxs)("li",{className:n.summaryItem,children:[(0,y.jsx)("span",{className:n.summaryLabel,children:e.key}),(0,y.jsx)("span",{className:n.summaryDelim,children:"="}),String(e.value)]},`${e.key}-${t}`)))}):null}function Qt(e){const{className:t,data:n,highContrast:r,interactive:s,isOpen:a,label:o,linksGetter:i,onToggle:l}=e,c=!Array.isArray(n)||!n.length,d=(0,g.useStyles2)(Yt),p=b()(me,{[d.emptyIcon]:c});let u=null,h=null;return s&&(u=a?(0,y.jsx)(ft(),{className:p}):(0,y.jsx)(Rt(),{className:p}),h={"aria-checked":a,onClick:c?null:l,role:"switch"}),(0,y.jsxs)("div",{className:b()(t,ge),children:[(0,y.jsxs)("div",Object.assign({className:b()(d.header,{[d.headerEmpty]:c,[d.headerHighContrast]:r&&!c})},h,{"data-test-id":"AccordianKeyValues--header",children:[u,(0,y.jsxs)("strong",{"data-test":"label",children:[o,a||":"]}),!a&&(0,y.jsx)(Jt,{data:n})]})),a&&(0,y.jsx)(Xt,{data:n,linksGetter:i})]})}var en,tn,nn;Jt.defaultProps={data:null},Qt.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const rn=e=>({AccordianLogs:m`
      label: AccordianLogs;
      border: 1px solid ${ee(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianLogsHeader:m`
      label: AccordianLogsHeader;
      background: ${ee(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${ee(e,"#dadada")};
      }
    `,AccordianLogsContent:m`
      label: AccordianLogsContent;
      background: ${ee(e,"#f0f0f0")};
      border-top: 1px solid ${ee(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianLogsFooter:m`
      label: AccordianLogsFooter;
      color: ${ee(e,"#999")};
    `});function sn(e){const{interactive:t,isOpen:n,linksGetter:r,logs:s,openedItems:a,onItemToggle:o,onToggle:i,timestamp:l}=e;let c=null,d="span",p=null;t&&(c=n?en||(en=(0,y.jsx)(ft(),{className:me})):tn||(tn=(0,y.jsx)(Rt(),{className:"u-align-icon"})),d="a",p={"aria-checked":n,onClick:i,role:"switch"});const u=(0,g.useStyles2)(rn);return(0,y.jsxs)("div",{className:u.AccordianLogs,children:[(0,y.jsxs)(d,Object.assign({className:u.AccordianLogsHeader},p,{children:[c," ",nn||(nn=(0,y.jsx)("strong",{children:"Logs"}))," (",s.length,")"]})),n&&(0,y.jsxs)("div",{className:u.AccordianLogsContent,children:[(0,k.sortBy)(s,"timestamp").map(((e,n)=>(0,y.jsx)(Qt,{className:n<s.length-1?se:null,data:e.fields||[],highContrast:!0,interactive:t,isOpen:!!a&&a.has(e),label:`${W(e.timestamp-l)}`,linksGetter:r,onToggle:t&&o?()=>o(e):null},`${e.timestamp}-${n}`))),(0,y.jsx)("small",{className:u.AccordianLogsFooter,children:"Log timestamps are relative to the start time of the full trace."})]})]})}sn.defaultProps={interactive:!0,linksGetter:void 0,onItemToggle:void 0,onToggle:void 0,openedItems:void 0};const an=e=>({wrapper:m`
      label: wrapper;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    `,bar:m`
      label: bar;
      border-radius: 3px;
      min-width: 2px;
      position: absolute;
      height: 36%;
      top: 32%;
    `,rpc:m`
      label: rpc;
      position: absolute;
      top: 35%;
      bottom: 35%;
      z-index: 1;
    `,label:m`
      label: label;
      color: #aaa;
      font-size: 12px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1em;
      white-space: nowrap;
      padding: 0 0.5em;
      position: absolute;
    `,logMarker:m`
      label: logMarker;
      background-color: ${ee(e,"#2c3235")};
      cursor: pointer;
      height: 60%;
      min-width: 1px;
      position: absolute;
      top: 20%;
      &:hover {
        background-color: ${ee(e,"#464c54")};
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
    `});function on(e){return`${(100*e).toFixed(1)}%`}const ln=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}),(function(e){return e}))}((dn="label",pn="setLabel",un=e=>e.shortLabel,function(e){var t=(0,r.createFactory)(e),n=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).state={stateValue:"function"==typeof un?un(t.props):un},t.updateStateValue=function(e,n){return t.setState((function(t){var n=t.stateValue;return{stateValue:"function"==typeof e?e(n):e}}),n)},t}return(0,Tt.Z)(n,e),n.prototype.render=function(){var e;return t((0,_t.Z)({},this.props,((e={})[dn]=this.state.stateValue,e[pn]=this.updateStateValue,e)))},n}(r.Component);return n}),(cn=e=>{let{setLabel:t,shortLabel:n,longLabel:r}=e;return{setLongLabel:()=>t(r),setShortLabel:()=>t(n)}},Dt((function(e){return(0,_t.Z)({},e,"function"==typeof cn?cn(e):cn)}))),Lt(["label","rpc","viewStart","viewEnd"]))((function(e){const{viewEnd:t,viewStart:n,getViewedBounds:r,color:s,label:a,onClick:o,setLongLabel:i,setShortLabel:l,rpc:c,traceStartTime:d,span:p,className:u,labelClassName:h}=e,m=(0,k.groupBy)(p.logs,(e=>{const t=r(e.timestamp,e.timestamp).start;return on(Math.round(500*t)/500)})),f=(0,g.useStyles2)(an);return(0,y.jsxs)("div",{className:b()(f.wrapper,u),onClick:o,onMouseLeave:l,onMouseOver:i,"aria-hidden":!0,"data-test-id":"SpanBar--wrapper",children:[(0,y.jsx)("div",{"aria-label":a,className:f.bar,style:{background:s,left:on(n),width:on(t-n)},children:(0,y.jsx)("div",{className:b()(f.label,h),"data-test-id":"SpanBar--label",children:a})}),(0,y.jsx)("div",{children:Object.keys(m).map((e=>(0,y.jsx)(Ue,{placement:"topLeft",content:(0,y.jsx)(sn,{interactive:!1,isOpen:!0,logs:m[e],timestamp:d}),children:(0,y.jsx)("div",{className:f.logMarker,style:{left:e}})},e)))}),c&&(0,y.jsx)("div",{className:f.rpc,style:{background:c.color,left:on(c.viewStart),width:on(c.viewEnd-c.viewStart)}})]})}));var cn,dn,pn,un,hn,mn,gn,fn;function bn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const yn="spanBar",vn="spanBarLabel",xn="nameWrapper",wn="nameWrapperMatchingFilter",_n="jaegerView",kn="nameColumn",jn=(0,g.stylesFactory)((e=>{const t=h`
    label: flash;
    from {
      background-color: ${ee(e,"#68b9ff")};
    }
    to {
      background-color: default;
    }
  `;return{nameWrapper:m`
      label: nameWrapper;
      line-height: 27px;
      overflow: hidden;
      display: flex;
    `,nameWrapperMatchingFilter:m`
      label: nameWrapperMatchingFilter;
      background-color: ${ee(e,"#fffce4")};
    `,nameColumn:m`
      label: nameColumn;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:hover {
        z-index: 1;
      }
    `,endpointName:m`
      label: endpointName;
      color: ${ee(e,"#808080")};
    `,view:m`
      label: view;
      position: relative;
    `,viewExpanded:m`
      label: viewExpanded;
      background: ${ee(e,"#f8f8f8")};
      outline: 1px solid ${ee(e,"#ddd")};
    `,viewExpandedAndMatchingFilter:m`
      label: viewExpandedAndMatchingFilter;
      background: ${ee(e,"#fff3d7")};
      outline: 1px solid ${ee(e,"#ddd")};
    `,row:m`
      label: row;
      &:hover .${yn} {
        opacity: 1;
      }
      &:hover .${vn} {
        color: ${ee(e,"#000")};
      }
      &:hover .${xn} {
        background: #f8f8f8;
        background: linear-gradient(
          90deg,
          ${ee(e,"#fafafa")},
          ${ee(e,"#f8f8f8")} 75%,
          ${ee(e,"#eee")}
        );
      }
      &:hover .${_n} {
        background-color: ${ee(e,"#f5f5f5")};
        outline: 1px solid ${ee(e,"#ddd")};
      }
    `,rowClippingLeft:m`
      label: rowClippingLeft;
      & .${kn}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to right,
          ${ee(e,"rgba(25, 25, 25, 0.25)")},
          ${ee(e,"rgba(32, 32, 32, 0)")}
        );
        left: 100%;
        z-index: -1;
      }
    `,rowClippingRight:m`
      label: rowClippingRight;
      & .${_n}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to left,
          ${ee(e,"rgba(25, 25, 25, 0.25)")},
          ${ee(e,"rgba(25, 25, 25, 0.25)")}
        );
        right: 0%;
        z-index: 1;
      }
    `,rowExpanded:m`
      label: rowExpanded;
      & .${yn} {
        opacity: 1;
      }
      & .${vn} {
        color: ${ee(e,"#000")};
      }
      & .${xn}, &:hover .${xn} {
        background: ${ee(e,"#f0f0f0")};
        box-shadow: 0 1px 0 ${ee(e,"#ddd")};
      }
      & .${wn} {
        background: ${ee(e,"#fff3d7")};
      }
      &:hover .${_n} {
        background: ${ee(e,"#eee")};
      }
    `,rowMatchingFilter:m`
      label: rowMatchingFilter;
      background-color: ${ee(e,"#fffce4")};
      &:hover .${xn} {
        background: linear-gradient(
          90deg,
          ${ee(e,"#fff5e1")},
          ${ee(e,"#fff5e1")} 75%,
          ${ee(e,"#ffe6c9")}
        );
      }
      &:hover .${_n} {
        background-color: ${ee(e,"#fff3d7")};
        outline: 1px solid ${ee(e,"#ddd")};
      }
    `,rowFocused:m`
      label: rowFocused;
      background-color: ${ee(e,"#cbe7ff")};
      animation: ${t} 1s cubic-bezier(0.12, 0, 0.39, 0);
      & .${xn}, .${_n}, .${wn} {
        background-color: ${ee(e,"#cbe7ff")};
        animation: ${t} 1s cubic-bezier(0.12, 0, 0.39, 0);
      }
      & .${yn} {
        opacity: 1;
      }
      & .${vn} {
        color: ${ee(e,"#000")};
      }
      &:hover .${xn}, :hover .${_n} {
        background: ${ee(e,"#d5ebff")};
        box-shadow: 0 1px 0 ${ee(e,"#ddd")};
      }
    `,rowExpandedAndMatchingFilter:m`
      label: rowExpandedAndMatchingFilter;
      &:hover .${_n} {
        background: ${ee(e,"#ffeccf")};
      }
    `,name:m`
      label: name;
      color: ${ee(e,"#000")};
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
        color: ${ee(e,"#000")};
      }
    `,nameDetailExpanded:m`
      label: nameDetailExpanded;
      &::before {
        bottom: 0;
      }
    `,svcName:m`
      label: svcName;
      padding: 0 0.25rem 0 0.5rem;
      font-size: 1.05em;
    `,svcNameChildrenCollapsed:m`
      label: svcNameChildrenCollapsed;
      font-weight: bold;
      font-style: italic;
    `,errorIcon:m`
      label: errorIcon;
      border-radius: 6.5px;
      color: ${ee(e,"#fff")};
      font-size: 0.85em;
      margin-right: 0.25rem;
      padding: 1px;
    `,rpcColorMarker:m`
      label: rpcColorMarker;
      border-radius: 6.5px;
      display: inline-block;
      font-size: 0.85em;
      height: 1em;
      margin-right: 0.25rem;
      padding: 1px;
      width: 1em;
      vertical-align: middle;
    `,labelRight:m`
      label: labelRight;
      left: 100%;
    `,labelLeft:m`
      label: labelLeft;
      right: 100%;
    `}}));class Tn extends r.PureComponent{constructor(){super(...arguments),bn(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),bn(this,"_childrenToggle",(()=>{this.props.onChildrenToggled(this.props.span.spanID)}))}render(){const{className:e,color:t,columnDivision:n,isChildrenExpanded:r,isDetailExpanded:s,isMatchingFilter:a,isFocused:o,numTicks:i,rpc:l,noInstrumentedServer:c,showErrorIcon:d,getViewedBounds:p,traceStartTime:u,span:h,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:v,clippingLeft:x,clippingRight:w,theme:_,createSpanLink:k}=this.props,{duration:j,hasChildren:T,operationName:I,process:{serviceName:S}}=h,D=W(j),C=p(h.startTime,h.startTime+h.duration),N=C.start,L=C.end,E=jn(_),O=`${S}::${I}`;let M,P;return N>1-L?(M=`${O} | ${D}`,P=E.labelLeft):(M=`${D} | ${O}`,P=E.labelRight),(0,y.jsxs)(ke,{className:b()(E.row,{[E.rowExpanded]:s,[E.rowMatchingFilter]:a,[E.rowExpandedAndMatchingFilter]:a&&s,[E.rowFocused]:o,[E.rowClippingLeft]:x,[E.rowClippingRight]:w},e),children:[(0,y.jsx)(ke.Cell,{className:b()(E.nameColumn,kn),width:n,children:(0,y.jsxs)("div",{className:b()(E.nameWrapper,xn,{[E.nameWrapperMatchingFilter]:a,nameWrapperMatchingFilter:a}),children:[(0,y.jsx)(wt,{childrenVisible:r,span:h,onClick:T?this._childrenToggle:void 0,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:v}),(0,y.jsxs)("a",{className:b()(E.name,{[E.nameDetailExpanded]:s}),"aria-checked":s,title:O,onClick:this._detailToggle,role:"switch",style:{borderColor:t},tabIndex:0,children:[(0,y.jsxs)("span",{className:b()(E.svcName,{[E.svcNameChildrenCollapsed]:T&&!r}),children:[d&&(0,y.jsx)(Me(),{style:{backgroundColor:h.errorIconColor?ee(_,h.errorIconColor):ee(_,"#db2828")},className:E.errorIcon}),S," ",l&&(0,y.jsxs)("span",{children:[hn||(hn=(0,y.jsx)(Re(),{}))," ",(0,y.jsx)("i",{className:E.rpcColorMarker,style:{background:l.color}}),l.serviceName]}),c&&(0,y.jsxs)("span",{children:[mn||(mn=(0,y.jsx)(Re(),{}))," ",(0,y.jsx)("i",{className:E.rpcColorMarker,style:{background:c.color}}),c.serviceName]})]}),(0,y.jsx)("small",{className:E.endpointName,children:l?l.operationName:I}),(0,y.jsxs)("small",{className:E.endpointName,children:[" | ",D]})]}),k&&(()=>{const e=k(h);return e?(0,y.jsx)("a",{href:e.href,target:"_blank",style:{marginRight:"5px"},rel:"noopener noreferrer",onClick:e.onClick?t=>{t.ctrlKey||t.metaKey||t.shiftKey||!e.onClick||(t.preventDefault(),e.onClick(t))}:void 0,children:e.content}):null})(),h.references&&h.references.length>1&&(0,y.jsx)(dt,{references:h.references,tooltipText:"Contains multiple references",focusSpan:m,children:gn||(gn=(0,y.jsx)($e(),{}))}),h.subsidiarilyReferencedBy&&h.subsidiarilyReferencedBy.length>0&&(0,y.jsx)(dt,{references:h.subsidiarilyReferencedBy,tooltipText:"This span is referenced by "+(1===h.subsidiarilyReferencedBy.length?"another span":"multiple other spans"),focusSpan:m,children:fn||(fn=(0,y.jsx)(Ve(),{}))})]})}),(0,y.jsxs)(ke.Cell,{className:b()(E.view,_n,{[E.viewExpanded]:s,[E.viewExpandedAndMatchingFilter]:a&&s}),"data-test-id":"span-view",style:{cursor:"pointer"},width:1-n,onClick:this._detailToggle,children:[(0,y.jsx)(ne,{numTicks:i}),(0,y.jsx)(ln,{rpc:l,viewStart:N,viewEnd:L,getViewedBounds:p,color:t,shortLabel:D,longLabel:M,traceStartTime:u,span:h,labelClassName:`spanBarLabel ${P}`,className:yn})]})]})}}bn(Tn,"displayName","UnthemedSpanBarRow"),bn(Tn,"defaultProps",{className:"",rpc:null});const In=(0,g.withTheme2)(Tn);var Sn=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/link.js"),Dn=n.n(Sn);const Cn=()=>({TextList:m`
      max-height: 450px;
      overflow: auto;
    `,List:m`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    `,item:m`
      padding: 0.25rem 0.5rem;
      vertical-align: top;
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `});function Nn(e){const{data:t}=e,n=(0,g.useStyles2)(Cn);return(0,y.jsx)("div",{className:b()(n.TextList),"data-test-id":"TextList",children:(0,y.jsx)("ul",{className:n.List,children:t.map(((e,t)=>(0,y.jsx)("li",{className:n.item,children:e},`${t}`)))})})}const Ln=e=>({header:m`
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${ee(e,"#e8e8e8")};
      }
    `});function En(e){let{data:t}=e;return(0,y.jsx)(Nn,{data:t})}function On(e){const{className:t,data:n,headerClassName:r,interactive:s,isOpen:a,label:o,onToggle:i,TextComponent:l=En}=e,c=!Array.isArray(n)||!n.length,d=(0,g.useStyles2)(Yt),p=b()(me,{[d.emptyIcon]:c});let u=null,h=null;s&&(u=a?(0,y.jsx)(ft(),{className:p}):(0,y.jsx)(Rt(),{className:p}),h={"aria-checked":a,onClick:c?null:i,role:"switch"});const m=(0,g.useStyles2)(Ln);return(0,y.jsxs)("div",{className:t||"",children:[(0,y.jsxs)("div",Object.assign({className:b()(m.header,r)},h,{"data-test-id":"AccordianText--header",children:[u,(0,y.jsx)("strong",{children:o})," (",n.length,")"]})),a&&(0,y.jsx)(l,{data:n})]})}On.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const Mn=e=>({LabeledList:m`
      label: LabeledList;
      list-style: none;
      margin: 0;
      padding: 0;
    `,LabeledListItem:m`
      label: LabeledListItem;
      display: inline-block;
    `,LabeledListLabel:m`
      label: LabeledListLabel;
      color: ${e.isLight?"#999":"#666"};
      margin-right: 0.25rem;
    `});function Pn(e){var t;const{className:n,dividerClassName:r,items:s}=e,a=(0,g.useStyles2)(Mn);return(0,y.jsx)("ul",{className:b()(a.LabeledList,n),children:s.map(((e,n)=>{let{key:o,label:i,value:l}=e;const c=n<s.length-1&&(0,y.jsx)("li",{className:a.LabeledListItem,children:t||(t=(0,y.jsx)(Qe,{className:r,type:"vertical"}))},`${o}--divider`);return[(0,y.jsxs)("li",{className:a.LabeledListItem,children:[(0,y.jsx)("span",{className:a.LabeledListLabel,children:i}),(0,y.jsx)("strong",{children:l})]},o),c]}))})}var Rn,zn;const $n=()=>({ReferencesList:m`
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,list:m`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      background: #fff;
    `,itemContent:m`
      padding: 0.25rem 0.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `,item:m`
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `,debugInfo:m`
      letter-spacing: 0.25px;
      margin: 0.5em 0 0;
    `,debugLabel:m`
      margin: 0 5px 0 5px;
      &::before {
        color: #bbb;
        content: attr(data-label);
      }
    `});function Hn(e){const{data:t,focusSpan:n}=e,r=(0,g.useStyles2)($n);return(0,y.jsx)("div",{className:b()(r.ReferencesList),children:(0,y.jsx)("ul",{className:r.list,children:t.map((e=>(0,y.jsx)("li",{className:r.item,children:(0,y.jsx)(lt,{reference:e,focusSpan:n,children:(0,y.jsxs)("span",{className:r.itemContent,children:[e.span?(0,y.jsxs)("span",{children:[(0,y.jsx)("span",{className:"span-svc-name",children:e.span.process.serviceName}),(0,y.jsx)("small",{className:"endpoint-name",children:e.span.operationName})]}):Rn||(Rn=(0,y.jsx)("span",{className:"span-svc-name",children:"< span in another trace >"})),(0,y.jsxs)("small",{className:r.debugInfo,children:[(0,y.jsx)("span",{className:r.debugLabel,"data-label":"Reference Type:",children:e.refType}),(0,y.jsx)("span",{className:r.debugLabel,"data-label":"SpanID:",children:e.spanID})]})]})})},`${e.spanID}`)))})})}class Vn extends r.PureComponent{render(){const{data:e,interactive:t,isOpen:n,onToggle:r,focusSpan:s}=this.props,a=!Array.isArray(e)||!e.length,o=me;let i=null,l=null;return t&&(i=n?(0,y.jsx)(ft(),{className:o}):(0,y.jsx)(Rt(),{className:o}),l={"aria-checked":n,onClick:a?null:r,role:"switch"}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",Object.assign({},l,{children:[i,zn||(zn=(0,y.jsx)("strong",{children:(0,y.jsx)("span",{children:"References"})}))," ","(",e.length,")"]})),n&&(0,y.jsx)(Hn,{data:e,focusSpan:s})]})}}var Fn,Bn,An;An={highContrast:!1,interactive:!0,onToggle:null},(Bn="defaultProps")in(Fn=Vn)?Object.defineProperty(Fn,Bn,{value:An,enumerable:!0,configurable:!0,writable:!0}):Fn[Bn]=An;const Gn=e=>({divider:m`
      label: divider;
      background: ${ee(e,"#ddd")};
    `,dividerVertical:m`
      label: dividerVertical;
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      clear: both;
      vertical-align: middle;
      position: relative;
      top: -0.06em;
    `,debugInfo:m`
      label: debugInfo;
      display: block;
      letter-spacing: 0.25px;
      margin: 0.5em 0 -0.75em;
      text-align: right;
    `,debugLabel:m`
      label: debugLabel;
      &::before {
        color: ${ee(e,"#bbb")};
        content: attr(data-label);
      }
    `,debugValue:m`
      label: debugValue;
      background-color: inherit;
      border: none;
      color: ${ee(e,"#888")};
      cursor: pointer;
      &:hover {
        color: ${ee(e,"#333")};
      }
    `,AccordianWarnings:m`
      label: AccordianWarnings;
      background: ${ee(e,"#fafafa")};
      border: 1px solid ${ee(e,"#e4e4e4")};
      margin-bottom: 0.25rem;
    `,AccordianWarningsHeader:m`
      label: AccordianWarningsHeader;
      background: ${ee(e,"#fff7e6")};
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${ee(e,"#ffe7ba")};
      }
    `,AccordianWarningsHeaderOpen:m`
      label: AccordianWarningsHeaderOpen;
      border-bottom: 1px solid ${ee(e,"#e8e8e8")};
    `,AccordianWarningsLabel:m`
      label: AccordianWarningsLabel;
      color: ${ee(e,"#d36c08")};
    `,Textarea:m`
      word-break: break-all;
      white-space: pre;
    `,LinkIcon:m`
      font-size: 1.5em;
    `});function Wn(e){const{detailState:t,linksGetter:n,logItemToggle:r,logsToggle:s,processToggle:a,span:o,tagsToggle:i,traceStartTime:l,warningsToggle:c,stackTracesToggle:d,referencesToggle:p,focusSpan:u,createSpanLink:h,createFocusSpanLink:m}=e,{isTagsOpen:f,isProcessOpen:v,logs:x,isWarningsOpen:w,isReferencesOpen:_,isStackTracesOpen:k}=t,{operationName:j,process:T,duration:I,relativeStartTime:S,traceID:D,spanID:C,logs:N,tags:L,warnings:E,references:O,stackTraces:M}=o,P=[{key:"svc",label:"Service:",value:T.serviceName},{key:"duration",label:"Duration:",value:W(I)},{key:"start",label:"Start Time:",value:W(S)}],R=(0,g.useStyles2)(Gn),z=null==h?void 0:h(o),$=m(D,C);return(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{className:b()(ce,de,se),children:[(0,y.jsx)("h2",{className:b()(pe,oe),children:j}),(0,y.jsx)(Pn,{className:ue,dividerClassName:R.divider,items:P})]}),z?(0,y.jsx)(g.DataLinkButton,{link:Object.assign({},z,{title:"Logs for this span"}),buttonProps:{icon:"gf-logs"}}):null,(0,y.jsx)(Qe,{className:b()(R.divider,R.dividerVertical,ae)}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(Qt,{data:L,label:"Tags",linksGetter:n,isOpen:f,onToggle:()=>i(C)}),T.tags&&(0,y.jsx)(Qt,{className:se,data:T.tags,label:"Process",linksGetter:n,isOpen:v,onToggle:()=>a(C)})]}),N&&N.length>0&&(0,y.jsx)(sn,{linksGetter:n,logs:N,isOpen:x.isOpen,openedItems:x.openedItems,onToggle:()=>s(C),onItemToggle:e=>r(C,e),timestamp:l}),E&&E.length>0&&(0,y.jsx)(On,{className:R.AccordianWarnings,headerClassName:R.AccordianWarningsHeader,label:(0,y.jsx)("span",{className:R.AccordianWarningsLabel,children:"Warnings"}),data:E,isOpen:w,onToggle:()=>c(C)}),M&&M.length&&(0,y.jsx)(On,{label:"Stack trace",data:M,isOpen:k,TextComponent:e=>{var t;let n;var r;(null===(t=e.data)||void 0===t?void 0:t.length)>1?n=e.data.map(((e,t)=>`StackTrace ${t+1}:\n${e}`)).join("\n"):n=null===(r=e.data)||void 0===r?void 0:r[0];return(0,y.jsx)(g.TextArea,{className:R.Textarea,style:{cursor:"unset"},readOnly:!0,cols:10,rows:10,value:n})},onToggle:()=>d(C)}),O&&O.length>0&&(O.length>1||"CHILD_OF"!==O[0].refType)&&(0,y.jsx)(Vn,{data:O,isOpen:_,onToggle:()=>p(C),focusSpan:u}),(0,y.jsxs)("small",{className:R.debugInfo,children:[(0,y.jsx)("a",Object.assign({},$,{onClick:e=>{!$.onClick||0!==e.button||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||(e.preventDefault(),$.onClick(e))},children:(0,y.jsx)(Dn(),{className:b()(me,R.LinkIcon)})})),(0,y.jsx)("span",{className:R.debugLabel,"data-label":"SpanID:"})," ",C]})]})]})}function Un(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Kn=(0,g.stylesFactory)((e=>({expandedAccent:m`
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
    `,infoWrapper:m`
      label: infoWrapper;
      border: 1px solid ${ee(e,"#d3d3d3")};
      border-top: 3px solid;
      padding: 0.75rem;
    `})));class qn extends r.PureComponent{constructor(){super(...arguments),Un(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),Un(this,"_linksGetter",((e,t)=>{const{linksGetter:n,span:r}=this.props;return n(r,e,t)}))}render(){const{color:e,columnDivision:t,detailState:n,logItemToggle:r,logsToggle:s,processToggle:a,referencesToggle:o,warningsToggle:i,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:p,focusSpan:u,hoverIndentGuideIds:h,addHoverIndentGuideId:m,removeHoverIndentGuideId:g,theme:f,createSpanLink:b,focusedSpanId:v,createFocusSpanLink:x}=this.props,w=Kn(f);return(0,y.jsxs)(ke,{children:[(0,y.jsxs)(ke.Cell,{width:t,style:{overflow:"hidden"},children:[(0,y.jsx)(wt,{span:c,showChildrenIcon:!1,hoverIndentGuideIds:h,addHoverIndentGuideId:m,removeHoverIndentGuideId:g}),(0,y.jsx)("span",{children:(0,y.jsx)("span",{className:w.expandedAccent,"aria-checked":"true",onClick:this._detailToggle,role:"switch",style:{borderColor:e},"data-test-id":"detail-row-expanded-accent"})})]}),(0,y.jsx)(ke.Cell,{width:1-t,children:(0,y.jsx)("div",{className:w.infoWrapper,style:{borderTopColor:e},children:(0,y.jsx)(Wn,{detailState:n,linksGetter:this._linksGetter,logItemToggle:r,logsToggle:s,processToggle:a,referencesToggle:o,warningsToggle:i,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:p,focusSpan:u,createSpanLink:b,focusedSpanId:v,createFocusSpanLink:x})})})]})}}const Zn=(0,g.withTheme2)(qn);function Xn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yn(e){if(7!==e.length)return[0,0,0];const t=e.slice(1,3),n=e.slice(3,5),r=e.slice(5);return[parseInt(t,16),parseInt(n,16),parseInt(r,16)]}class Jn{constructor(e){Xn(this,"colorsHex",void 0),Xn(this,"colorsRgb",void 0),Xn(this,"cache",void 0),Xn(this,"currentIdx",void 0),this.colorsHex=e,this.colorsRgb=e.map(Yn),this.cache=new Map,this.currentIdx=0}_getColorIndex(e){let t=this.cache.get(e);return null==t&&(t=this.currentIdx,this.cache.set(e,this.currentIdx),this.currentIdx=++this.currentIdx%this.colorsHex.length),t}getColorByKey(e){const t=this._getColorIndex(e);return this.colorsHex[t]}getRgbColorByKey(e){const t=this._getColorIndex(e);return this.colorsRgb[t]}clear(){this.cache.clear(),this.currentIdx=0}}const Qn=(0,Se.Z)((e=>new Jn(e)));function er(e,t){return Qn(g.colors).getColorByKey(e)}function tr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const nr=(0,g.stylesFactory)((()=>({rowsWrapper:m`
      width: 100%;
    `,row:m`
      width: 100%;
    `}))),rr=28,sr=161,ar=197;const or=(0,Se.Z)((function(e,t,n){return e?function(e,t,n){if(!e)return[];let r=null;const s=[];for(let a=0;a<e.length;a++){const o=e[a],{spanID:i,depth:l}=o;let c=!1;null!=r&&(l>=r?c=!0:r=null),c||(t.has(i)&&(r=l+1),s.push({span:o,isDetail:!1,spanIndex:a}),n.has(i)&&s.push({span:o,isDetail:!0,spanIndex:a}))}return s}(e.spans,t,n):[]})),ir=(0,Se.Z)((function(e){const{min:t,max:n,viewStart:r,viewEnd:s}=e,a=n-t,o=t+r*a,i=n-(1-s)*a-o;return(e,t)=>({start:(e-o)/i,end:(t-o)/i})}),k.isEqual),lr=(0,Se.Z)((function(e){const[t,n]=e;return{left:t>0,right:n<1}}),k.isEqual);class cr extends r.Component{constructor(e){super(e),tr(this,"listView",void 0),tr(this,"getViewRange",(()=>this.props.currentViewRangeTime)),tr(this,"getSearchedSpanIDs",(()=>this.props.findMatchesIDs)),tr(this,"getCollapsedChildren",(()=>this.props.childrenHiddenIDs)),tr(this,"mapRowIndexToSpanIndex",(e=>this.getRowStates()[e].spanIndex)),tr(this,"mapSpanIndexToRowIndex",(e=>{const t=this.getRowStates().length;for(let n=0;n<t;n++){const{spanIndex:t}=this.getRowStates()[n];if(t===e)return n}throw new Error(`unable to find row for span index: ${e}`)})),tr(this,"setListView",(e=>{const t=this.listView!==e;this.listView=e,e&&t&&this.props.registerAccessors(this.getAccessors())})),tr(this,"getKeyFromIndex",(e=>{const{isDetail:t,span:n}=this.getRowStates()[e];return`${n.traceID}--${n.spanID}--${t?"detail":"bar"}`})),tr(this,"getIndexFromKey",(e=>{const t=e.split("--"),n=t[0],r=t[1],s="detail"===t[2],a=this.getRowStates().length;for(let e=0;e<a;e++){const{span:t,isDetail:a}=this.getRowStates()[e];if(t.spanID===r&&t.traceID===n&&a===s)return e}return-1})),tr(this,"getRowHeight",(e=>{const{span:t,isDetail:n}=this.getRowStates()[e];return n?Array.isArray(t.logs)&&t.logs.length?ar:sr:rr})),tr(this,"renderRow",((e,t,n,r)=>{const{isDetail:s,span:a,spanIndex:o}=this.getRowStates()[n];return s?this.renderSpanDetailRow(a,e,t,r):this.renderSpanBarRow(a,o,e,t,r)})),tr(this,"scrollToSpan",(e=>{if(null==e)return;const t=this.getRowStates().findIndex((t=>t.span.spanID===e));var n;t>=0&&(null===(n=this.listView)||void 0===n||n.scrollToIndex(t))}));const{setTrace:t,trace:n,uiFind:r}=e;t(n,r)}componentDidMount(){this.scrollToSpan(this.props.focusedSpanId)}shouldComponentUpdate(e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)if(e[t[n]]!==this.props[t[n]]){if("shouldScrollToFirstUiFindMatch"!==t[n])return!0;if(e[t[n]])return!0}return!1}componentDidUpdate(e){const{registerAccessors:t,trace:n}=e,{shouldScrollToFirstUiFindMatch:r,clearShouldScrollToFirstUiFindMatch:s,scrollToFirstVisibleSpan:a,registerAccessors:o,setTrace:i,trace:l,uiFind:c,focusedSpanId:d}=this.props;n!==l&&i(l,c),this.listView&&t!==o&&o(this.getAccessors()),r&&(a(),s()),d!==e.focusedSpanId&&this.scrollToSpan(d)}getRowStates(){const{childrenHiddenIDs:e,detailStates:t,trace:n}=this.props;return or(n,e,t)}getClipping(){const{currentViewRangeTime:e}=this.props;return lr(e)}getViewedBounds(){const{currentViewRangeTime:e,trace:t}=this.props,[n,r]=e;return ir({min:t.startTime,max:t.endTime,viewStart:n,viewEnd:r})}getAccessors(){const e=this.listView;if(!e)throw new Error("ListView unavailable");return{getViewRange:this.getViewRange,getSearchedSpanIDs:this.getSearchedSpanIDs,getCollapsedChildren:this.getCollapsedChildren,getViewHeight:e.getViewHeight,getBottomRowIndexVisible:e.getBottomVisibleIndex,getTopRowIndexVisible:e.getTopVisibleIndex,getRowPosition:e.getRowPosition,mapRowIndexToSpanIndex:this.mapRowIndexToSpanIndex,mapSpanIndexToRowIndex:this.mapSpanIndexToRowIndex}}renderSpanBarRow(e,t,n,r,s){const{spanID:a}=e,{serviceName:o}=e.process,{childrenHiddenIDs:i,childrenToggle:l,detailStates:c,detailToggle:d,findMatchesIDs:p,spanNameColumnWidth:u,trace:h,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,theme:v,createSpanLink:x,focusedSpanId:w}=this.props;if(!h)return null;const _=er(o),k=i.has(a),j=c.has(a),T=!!p&&p.has(a),I=a===w,S=Y(e)||k&&function(e,t){const{depth:n}=e[t];let r=t+1;for(;r<e.length&&e[r].depth>n;r++)if(Y(e[r]))return!0;return!1}(h.spans,t);let D=null;if(k){const e=function(e){if(e.length<=1||!K(e[0]))return!1;const t=e[0].depth+1;let n=1;for(;n<e.length&&e[n].depth===t;){if(q(e[n]))return e[n];n++}return null}(h.spans.slice(t));if(e){const t=this.getViewedBounds()(e.startTime,e.startTime+e.duration);D={color:er(e.process.serviceName),operationName:e.operationName,serviceName:e.process.serviceName,viewEnd:t.end,viewStart:t.start}}}const C=e.tags.find((e=>"peer.service"===e.key));let N=null;!e.hasChildren&&C&&(e=>e.tags.some((e=>{let{key:t,value:n}=e;return"span.kind"===t&&"client"===n})))(e)&&(N={serviceName:C.value,color:er(C.value)});const L=nr();return(0,y.jsx)("div",Object.assign({className:L.row,style:r},s,{children:(0,y.jsx)(In,{clippingLeft:this.getClipping().left,clippingRight:this.getClipping().right,color:_,columnDivision:u,isChildrenExpanded:!k,isDetailExpanded:j,isMatchingFilter:T,isFocused:I,numTicks:5,onDetailToggled:d,onChildrenToggled:l,rpc:D,noInstrumentedServer:N,showErrorIcon:S,getViewedBounds:this.getViewedBounds(),traceStartTime:h.startTime,span:e,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,createSpanLink:x})}),n)}renderSpanDetailRow(e,t,n,r){const{spanID:s}=e,{serviceName:a}=e.process,{detailLogItemToggle:o,detailLogsToggle:i,detailProcessToggle:l,detailReferencesToggle:c,detailWarningsToggle:d,detailStackTracesToggle:p,detailStates:u,detailTagsToggle:h,detailToggle:m,spanNameColumnWidth:g,trace:f,focusSpan:b,hoverIndentGuideIds:v,addHoverIndentGuideId:x,removeHoverIndentGuideId:w,linksGetter:_,theme:k,createSpanLink:j,focusedSpanId:T,createFocusSpanLink:I}=this.props,S=u.get(s);if(!f||!S)return null;const D=er(a),C=nr();return(0,y.jsx)("div",Object.assign({className:C.row,style:Object.assign({},n,{zIndex:1})},r,{children:(0,y.jsx)(Zn,{color:D,columnDivision:g,onDetailToggled:m,detailState:S,linksGetter:_,logItemToggle:o,logsToggle:i,processToggle:l,referencesToggle:c,warningsToggle:d,stackTracesToggle:p,span:e,tagsToggle:h,traceStartTime:f.startTime,focusSpan:b,hoverIndentGuideIds:v,addHoverIndentGuideId:x,removeHoverIndentGuideId:w,createSpanLink:j,focusedSpanId:T,createFocusSpanLink:I})}),t)}render(){const e=nr(),{scrollElement:t}=this.props;return(0,y.jsx)("div",{children:(0,y.jsx)(Ee,{ref:this.setListView,dataLength:this.getRowStates().length,itemHeightGetter:this.getRowHeight,itemRenderer:this.renderRow,viewBuffer:50,viewBufferMin:50,itemsWrapperClassName:e.rowsWrapper,getKeyFromIndex:this.getKeyFromIndex,getIndexFromKey:this.getIndexFromKey,windowScroller:!1,scrollElement:t})})}}const dr=(0,g.withTheme2)(cr);var pr=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js"),ur=n.n(pr);const hr={scrollPageDown:{binding:"s",label:"Scroll down"},scrollPageUp:{binding:"w",label:"Scroll up"},scrollToNextVisibleSpan:{binding:"f",label:"Scroll to the next visible span"},scrollToPrevVisibleSpan:{binding:"b",label:"Scroll to the previous visible span"},panLeft:{binding:["a","left"],label:"Pan left"},panLeftFast:{binding:["shift+a","shift+left"],label:"Pan left — Large"},panRight:{binding:["d","right"],label:"Pan right"},panRightFast:{binding:["shift+d","shift+right"],label:"Pan right — Large"},zoomIn:{binding:"up",label:"Zoom in"},zoomInFast:{binding:"shift+up",label:"Zoom in — Large"},zoomOut:{binding:"down",label:"Zoom out"},zoomOutFast:{binding:"shift+down",label:"Zoom out — Large"},collapseAll:{binding:"]",label:"Collapse All"},expandAll:{binding:"[",label:"Expand All"},collapseOne:{binding:"p",label:"Collapse One Level"},expandOne:{binding:"o",label:"Expand One Level"},searchSpans:{binding:"ctrl+b",label:"Search Spans"},clearSearch:{binding:"escape",label:"Clear Search"}};let mr;function gr(){if(mr)return mr;const e=new(ur())(document.body);return mr=e,e}const fr=["setSpanNameColumnWidth","updateNextViewRangeTime","updateViewRangeTime","viewRange","createLinkToExternalSpan","traceTimeline","theme"];function br(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const yr=(0,g.stylesFactory)((e=>({TraceTimelineViewer:m`
      label: TraceTimelineViewer;
      border-bottom: 1px solid ${ee(e,"#bbb")};

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
        color: ${ee(e,"firebrick")};
      }

      & .json-markup-string {
        color: ${ee(e,"teal")};
      }

      & .json-markup-null {
        color: ${ee(e,"teal")};
      }

      & .json-markup-number {
        color: ${ee(e,"blue","black")};
      }
    `})));class vr extends r.PureComponent{constructor(e){super(e),br(this,"collapseAll",(()=>{this.props.collapseAll(this.props.trace.spans)})),br(this,"collapseOne",(()=>{this.props.collapseOne(this.props.trace.spans)})),br(this,"expandAll",(()=>{this.props.expandAll()})),br(this,"expandOne",(()=>{this.props.expandOne(this.props.trace.spans)})),this.state={height:0}}componentDidMount(){!function(e){const t=gr();Object.keys(e).forEach((n=>{const r=e[n];r&&t.bind(hr[n].binding,r)}))}({collapseAll:this.collapseAll,expandAll:this.expandAll,collapseOne:this.collapseOne,expandOne:this.expandOne})}render(){const e=this.props,{setSpanNameColumnWidth:t,updateNextViewRangeTime:n,updateViewRangeTime:r,viewRange:s,createLinkToExternalSpan:a,traceTimeline:o,theme:i}=e,l=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,fr),{trace:c}=l,d=yr(i);return(0,y.jsx)(ot.Provider,{value:a,children:(0,y.jsxs)("div",{className:d.TraceTimelineViewer,ref:e=>e&&this.setState({height:e.getBoundingClientRect().height}),children:[(0,y.jsx)(Ie,{duration:c.duration,nameColumnWidth:o.spanNameColumnWidth,numTicks:5,onCollapseAll:this.collapseAll,onCollapseOne:this.collapseOne,onColummWidthChange:t,onExpandAll:this.expandAll,onExpandOne:this.expandOne,viewRangeTime:s.time,updateNextViewRangeTime:n,updateViewRangeTime:r,columnResizeHandleHeight:this.state.height}),(0,y.jsx)(dr,Object.assign({},l,o,{setSpanNameColumnWidth:t,currentViewRangeTime:s.time.current}))]})})}}const xr=(0,g.withTheme2)(vr);var wr=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js"),_r=n.n(wr),kr=n("./packages/grafana-data/src/index.ts");function jr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Tr=(0,g.stylesFactory)((e=>({CanvasSpanGraph:m`
      label: CanvasSpanGraph;
      background: ${ee(e,"#fafafa")};
      height: 60px;
      position: absolute;
      width: 100%;
    `})));class Ir extends r.PureComponent{constructor(e){super(e),jr(this,"_canvasElm",void 0),jr(this,"getColor",(e=>function(e,t){return Qn(g.colors).getRgbColorByKey(e)}(e,this.props.theme))),jr(this,"_setCanvasRef",(e=>{this._canvasElm=e})),this._canvasElm=void 0}componentDidMount(){this._draw()}componentDidUpdate(){this._draw()}_draw(){if(this._canvasElm){const{valueWidth:e,items:t}=this.props;!function(e,t,n,r,s){const a=new Map,o=t.length<60?60:Math.min(t.length,200),i=2*window.innerWidth;e.width=i,e.height=o;const l=Math.min(6,Math.max(2,o/t.length)),c=o/t.length,d=e.getContext("2d",{alpha:!1});d.fillStyle=s,d.fillRect(0,0,i,o);for(let e=0;e<t.length;e++){const{valueWidth:s,valueOffset:o,serviceName:p}=t[e],u=o/n*i;let h=s/n*i;h<10&&(h=10);let m=a.get(p);m||(m=`rgba(${r(p).concat(.8).join()})`,a.set(p,m)),d.fillStyle=m,d.fillRect(u,e*c,h,l)}}(this._canvasElm,t,e,this.getColor,ee(this.props.theme,"#fff"))}}render(){return(0,y.jsx)("canvas",{className:Tr(this.props.theme).CanvasSpanGraph,ref:this._setCanvasRef})}}const Sr=(0,g.withTheme2)(Ir),Dr=()=>({TickLabels:m`
      label: TickLabels;
      height: 1rem;
      position: relative;
    `,TickLabelsLabel:m`
      label: TickLabelsLabel;
      color: #717171;
      font-size: 0.7rem;
      position: absolute;
      user-select: none;
    `});function Cr(e){const{numTicks:t,duration:n}=e,r=(0,g.useStyles2)(Dr),s=[];for(let e=0;e<t+1;e++){const a=e/t,o=1===a?{right:"0%"}:{left:100*a+"%"};s.push((0,y.jsx)("div",{className:r.TickLabelsLabel,style:o,"data-test":"tick",children:W(n*a)},a))}return(0,y.jsx)("div",{className:r.TickLabels,children:s})}const Nr=()=>({GraphTick:m`
      label: GraphTick;
      stroke: #aaa;
      stroke-width: 1px;
    `});function Lr(e){const{numTicks:t}=e,n=(0,g.useStyles2)(Nr),r=[];for(let e=1;e<t;e++){const s=e/t*100+"%";r.push((0,y.jsx)("line",{className:n.GraphTick,x1:s,y1:"0%",x2:s,y2:"100%"},e/t))}return(0,y.jsx)("g",{"data-test":"ticks","aria-hidden":"true",children:r})}const Er=()=>({ScrubberHandleExpansion:b()(m`
        label: ScrubberHandleExpansion;
        cursor: col-resize;
        fill-opacity: 0;
        fill: #44f;
      `,"scrubber-handle-expansion"),ScrubberHandle:b()(m`
        label: ScrubberHandle;
        cursor: col-resize;
        fill: #555;
      `,"scrubber-handle"),ScrubberLine:b()(m`
        label: ScrubberLine;
        pointer-events: none;
        stroke: #555;
      `,"scrubber-line"),ScrubberDragging:m`
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
    `,ScrubberHandles:m`
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
    `});function Or(e){let{isDragging:t,onMouseDown:n,onMouseEnter:r,onMouseLeave:s,position:a}=e;const o=100*a+"%",i=(0,g.useStyles2)(Er),l=b()({[i.ScrubberDragging]:t});return(0,y.jsxs)("g",{className:l,children:[(0,y.jsxs)("g",{className:i.ScrubberHandles,onMouseDown:n,onMouseEnter:r,onMouseLeave:s,children:[(0,y.jsx)("rect",{x:o,className:i.ScrubberHandleExpansion,style:{transform:"translate(-4.5px)"},width:"9",height:"20"}),(0,y.jsx)("rect",{x:o,className:i.ScrubberHandle,style:{transform:"translate(-1.5px)"},width:"3",height:"20"})]}),(0,y.jsx)("line",{className:i.ScrubberLine,y2:"100%",x1:o,x2:o})]})}function Mr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Pr=(0,g.stylesFactory)((e=>{const t="JaegerUiComponents__ViewingLayerResetZoomHoverClassName",n=m`
    label: ViewingLayerResetZoom;
    display: none;
    position: absolute;
    right: 1%;
    top: 10%;
    z-index: 1;
  `;return{ViewingLayer:m`
      label: ViewingLayer;
      cursor: vertical-text;
      position: relative;
      z-index: 1;
      &:hover > .${t} {
        display: unset;
      }
    `,ViewingLayerGraph:m`
      label: ViewingLayerGraph;
      border: 1px solid ${ee(e,"#999")};
      /* need !important here to overcome something from semantic UI */
      overflow: visible !important;
      position: relative;
      transform-origin: 0 0;
      width: 100%;
    `,ViewingLayerInactive:m`
      label: ViewingLayerInactive;
      fill: ${ee(e,"rgba(214, 214, 214, 0.5)")};
    `,ViewingLayerCursorGuide:m`
      label: ViewingLayerCursorGuide;
      stroke: ${ee(e,"#f44")};
      stroke-width: 1;
    `,ViewingLayerDraggedShift:m`
      label: ViewingLayerDraggedShift;
      fill-opacity: 0.2;
    `,ViewingLayerDrag:m`
      label: ViewingLayerDrag;
      fill: ${ee(e,"#44f")};
    `,ViewingLayerFullOverlay:m`
      label: ViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `,ViewingLayerResetZoom:n,ViewingLayerResetZoomHoverClassName:t}})),Rr="SHIFT_END",zr="SHIFT_START",$r="REFRAME";class Hr extends r.PureComponent{constructor(e){super(e),Mr(this,"state",void 0),Mr(this,"_root",void 0),Mr(this,"_draggerReframe",void 0),Mr(this,"_draggerStart",void 0),Mr(this,"_draggerEnd",void 0),Mr(this,"_setRoot",(e=>{this._root=e})),Mr(this,"_getDraggingBounds",(e=>{if(!this._root)throw new Error("invalid state");const{left:t,width:n}=this._root.getBoundingClientRect(),[r,s]=this.props.viewRange.time.current;let a=1,o=0;return e===zr?a=s:e===Rr&&(o=r),{clientXLeft:t,maxValue:a,minValue:o,width:n}})),Mr(this,"_handleReframeMouseMove",(e=>{let{value:t}=e;this.props.updateNextViewRangeTime({cursor:t})})),Mr(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:null})})),Mr(this,"_handleReframeDragUpdate",(e=>{let{value:t}=e;const n=t,{time:r}=this.props.viewRange,s={reframe:{anchor:r.reframe?r.reframe.anchor:n,shift:n}};this.props.updateNextViewRangeTime(s)})),Mr(this,"_handleReframeDragEnd",(e=>{let{manager:t,value:n}=e;const{time:r}=this.props.viewRange,s=r.reframe?r.reframe.anchor:n,[a,o]=n<s?[n,s]:[s,n];t.resetBounds(),this.props.updateViewRangeTime(a,o,"minimap")})),Mr(this,"_handleScrubberEnterLeave",(e=>{let{type:t}=e;const n=t===_.MouseEnter;this.setState({preventCursorLine:n})})),Mr(this,"_handleScrubberDragUpdate",(e=>{let{event:t,tag:n,type:r,value:s}=e;r===_.DragStart&&t.stopPropagation(),n===zr?this.props.updateNextViewRangeTime({shiftStart:s}):n===Rr&&this.props.updateNextViewRangeTime({shiftEnd:s})})),Mr(this,"_handleScrubberDragEnd",(e=>{let{manager:t,tag:n,value:r}=e;const[s,a]=this.props.viewRange.time.current;let o;if(n===zr)o=[r,a];else{if(n!==Rr)throw new Error("bad state");o=[s,r]}t.resetBounds(),this.setState({preventCursorLine:!1}),this.props.updateViewRangeTime(o[0],o[1],"minimap")})),Mr(this,"_resetTimeZoomClickHandler",(()=>{this.props.updateViewRangeTime(0,1)})),this._draggerReframe=new I({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseMove:this._handleReframeMouseMove,onMouseLeave:this._handleReframeMouseLeave,tag:$r}),this._draggerStart=new I({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:zr}),this._draggerEnd=new I({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Rr}),this._root=void 0,this.state={preventCursorLine:!1}}componentWillUnmount(){this._draggerReframe.dispose(),this._draggerEnd.dispose(),this._draggerStart.dispose()}_getMarkers(e,t){const n=Pr(this.props.theme),r=function(e,t){const[n,r]=e<t?[e,t]:[t,e];return{x:100*n+"%",width:100*(r-n)+"%",leadingX:100*t+"%"}}(e,t);return[(0,y.jsx)("rect",{className:b()(n.ViewingLayerDraggedShift,n.ViewingLayerDrag),x:r.x,y:"0",width:r.width,height:this.props.height-2},"fill"),(0,y.jsx)("rect",{className:b()(n.ViewingLayerDrag),x:r.leadingX,y:"0",width:"1",height:this.props.height-2},"edge")]}render(){const{height:e,viewRange:t,numTicks:n,theme:r}=this.props,{preventCursorLine:s}=this.state,{current:a,cursor:o,shiftStart:i,shiftEnd:l,reframe:c}=t.time,d=null!=i||null!=l||null!=c,[p,u]=a;let h=0;p&&(h=100*p);let m,g=100;u&&(g=100-100*u),d||null==o||s||(m=100*o+"%");const f=Pr(r);return(0,y.jsxs)("div",{"aria-hidden":!0,className:f.ViewingLayer,style:{height:e},children:[(0!==p||1!==u)&&(0,y.jsx)(Je,{onClick:this._resetTimeZoomClickHandler,className:b()(f.ViewingLayerResetZoom,f.ViewingLayerResetZoomHoverClassName),htmlType:"button",children:"Reset Selection"}),(0,y.jsxs)("svg",{height:e,className:f.ViewingLayerGraph,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,children:[h>0&&(0,y.jsx)("rect",{x:0,y:0,height:"100%",width:`${h}%`,className:f.ViewingLayerInactive}),g>0&&(0,y.jsx)("rect",{x:100-g+"%",y:0,height:"100%",width:`${g}%`,className:f.ViewingLayerInactive}),(0,y.jsx)(Lr,{numTicks:n}),m&&(0,y.jsx)("line",{className:f.ViewingLayerCursorGuide,x1:m,y1:"0",x2:m,y2:e-2,strokeWidth:"1"}),null!=i&&this._getMarkers(p,i),null!=l&&this._getMarkers(u,l),(0,y.jsx)(Or,{isDragging:null!=i,onMouseDown:this._draggerStart.handleMouseDown,onMouseEnter:this._draggerStart.handleMouseEnter,onMouseLeave:this._draggerStart.handleMouseLeave,position:p||0}),(0,y.jsx)(Or,{isDragging:null!=l,position:u||1,onMouseDown:this._draggerEnd.handleMouseDown,onMouseEnter:this._draggerEnd.handleMouseEnter,onMouseLeave:this._draggerEnd.handleMouseLeave}),null!=c&&this._getMarkers(c.anchor,c.shift)]}),d&&(0,y.jsx)("div",{className:f.ViewingLayerFullOverlay})]})}}const Vr=(0,g.withTheme2)(Hr);var Fr;function Br(e){return{valueOffset:e.relativeStartTime,valueWidth:e.duration,serviceName:e.process.serviceName}}const Ar=(0,Se.Z)((function(e){return e.spans.map(Br)}));class Gr extends r.PureComponent{render(){const{height:e,trace:t,viewRange:n,updateNextViewRangeTime:r,updateViewRangeTime:s}=this.props;if(!t)return Fr||(Fr=(0,y.jsx)("div",{}));const a=Ar(t);return(0,y.jsxs)("div",{className:b()(le,ie),children:[(0,y.jsx)(Cr,{numTicks:4,duration:t.duration}),(0,y.jsxs)("div",{className:re,children:[(0,y.jsx)(Sr,{valueWidth:t.duration,items:a}),(0,y.jsx)(Vr,{viewRange:n,numTicks:4,height:e||60,updateViewRangeTime:s,updateNextViewRangeTime:r})]})]})}}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(Gr,"defaultProps",{height:60});var Wr=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-locate.js"),Ur=n.n(Wr);function Kr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class qr extends r.PureComponent{constructor(){super(...arguments),Kr(this,"clearUiFind",(()=>{this.props.onChange("")}))}render(){const{allowClear:e,inputProps:t,value:n}=this.props,r=(0,y.jsxs)(y.Fragment,{children:[e&&n&&n.length&&(0,y.jsx)(qe,{type:"close",onClick:this.clearUiFind}),t.suffix]});return(0,y.jsx)(et,Object.assign({autosize:null,placeholder:"Find..."},t,{onChange:e=>this.props.onChange(e.target.value),suffix:r,value:n}))}}var Zr;Kr(qr,"defaultProps",{inputProps:{},trackFindFunction:void 0,value:void 0});const Xr=()=>({TracePageSearchBar:m`
      label: TracePageSearchBar;
    `,TracePageSearchBarBar:m`
      label: TracePageSearchBarBar;
      max-width: 20rem;
      transition: max-width 0.5s;
      &:focus-within {
        max-width: 100%;
      }
    `,TracePageSearchBarCount:m`
      label: TracePageSearchBarCount;
      opacity: 0.6;
    `,TracePageSearchBarBtn:m`
      label: TracePageSearchBarBtn;
      border-left: none;
      transition: 0.2s;
    `,TracePageSearchBarBtnDisabled:m`
      label: TracePageSearchBarBtnDisabled;
      opacity: 0.5;
    `,TracePageSearchBarLocateBtn:m`
      label: TracePageSearchBarLocateBtn;
      padding: 1px 8px 4px;
    `}),Yr=(0,r.memo)((function(e){const{clearSearch:t,focusUiFindMatches:n,navigable:r,nextResult:s,prevResult:a,resultCount:o,textFilter:i,onSearchValueChange:l,searchValue:c,hideSearchButtons:d}=e,p=(0,g.useStyles2)(Xr),u=i?(0,y.jsx)("span",{className:p.TracePageSearchBarCount,children:o}):null,h=b()(p.TracePageSearchBarBtn,{[p.TracePageSearchBarBtnDisabled]:!i}),m={"data-test":"in-trace-search",className:b()(p.TracePageSearchBarBar,pe),name:"search",suffix:u};return(0,y.jsx)("div",{className:p.TracePageSearchBar,children:(0,y.jsxs)(tt,{className:ye,compact:!0,style:{display:"flex"},children:[(0,y.jsx)(qr,{onChange:l,value:c,inputProps:m}),!d&&(0,y.jsxs)(y.Fragment,{children:[r&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Je,{className:b()(h,p.TracePageSearchBarLocateBtn),disabled:!i,htmlType:"button",onClick:n,children:Zr||(Zr=(0,y.jsx)(Ur(),{}))}),(0,y.jsx)(Je,{className:h,disabled:!i,htmlType:"button",icon:"up",onClick:a}),(0,y.jsx)(Je,{className:h,disabled:!i,htmlType:"button",icon:"down",onClick:s})]}),(0,y.jsx)(Je,{className:h,disabled:!i,htmlType:"button",icon:"close",onClick:t})]})]})})})),Jr=()=>({BreakableText:m`
      label: BreakableText;
      display: inline-block;
      white-space: pre;
    `}),Qr=/\W*\w+\W*/g;function es(e){const{className:t,text:n,wordRegexp:r=Qr}=e,s=(0,g.useStyles2)(Jr);if(!n)return"string"==typeof n?n:null;const a=[];r.exec("");let o=r.exec(n)||[n];for(;o;)a.push((0,y.jsx)("span",{className:t||s.BreakableText,children:o[0]},`${n}-${a.length}`)),o=r.exec(n);return a}es.defaultProps={wordRegexp:Qr};const ts=["centered","className","small"];const ns=()=>{const e=h`
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
  `;return{LoadingIndicator:m`
      label: LoadingIndicator;
      animation: ${e} 1s infinite alternate;
      font-size: 36px;
      /* outline / stroke the loading indicator */
      text-shadow: -0.5px 0 rgba(0, 128, 128, 0.6), 0 0.5px rgba(0, 128, 128, 0.6), 0.5px 0 rgba(0, 128, 128, 0.6),
        0 -0.5px rgba(0, 128, 128, 0.6);
    `,LoadingIndicatorCentered:m`
      label: LoadingIndicatorCentered;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `,LoadingIndicatorSmall:m`
      label: LoadingIndicatorSmall;
      font-size: 0.7em;
    `}};function rs(e){const{centered:t,className:n,small:r}=e,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,ts),a=(0,g.useStyles2)(ns),o=b()(a.LoadingIndicator,{[a.LoadingIndicatorCentered]:t,[a.LoadingIndicatorSmall]:r,className:n});return(0,y.jsx)(qe,Object.assign({type:"loading",className:o},s))}rs.defaultProps={centered:!1,className:void 0,small:!1};const ss="<trace-without-root-span>",as="FETCH_ERROR",os="FETCH_LOADING";var is;const ls=e=>({TraceName:m`
      label: TraceName;
      font-size: ${e.typography.size.lg};
    `,TraceNameError:m`
      label: TraceNameError;
      color: #c00;
    `});function cs(e){const{className:t,error:n,state:r,traceName:s}=e,a=r===as;let o=s||ss;const i=(0,g.useStyles2)(ls);let l="";if(a){l=i.TraceNameError;let e="";n&&(e="string"==typeof n?n:n.message||String(n)),e||(e="Error: Unknown error"),o=e,o=(0,y.jsx)(es,{text:e})}else if(r===os)o=is||(is=(0,y.jsx)(rs,{small:!0}));else{const e=String(s||ss);o=(0,y.jsx)(es,{text:e})}return(0,y.jsx)("span",{className:b()(i.TraceName,l,t),children:o})}const ds=(0,k.memoize)((function(e){let t;const n=new Set(e.map((e=>{let{spanID:t}=e;return t})));for(let r=0;r<e.length;r++){if(e[r].references&&e[r].references.some((t=>{let{traceID:s,spanID:a}=t;return s===e[r].traceID&&n.has(a)})))continue;if(!t){t=e[r];continue}const s=e[r].references&&e[r].references.length||0,a=t.references&&t.references.length||0;(s<a||s===a&&e[r].startTime<t.startTime)&&(t=e[r])}return t?`${t.process.serviceName}: ${t.operationName}`:""}),(e=>e.length?e[0].traceID:0));var ps=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function us(e,t){return 1===e?function(e){var t;return{get:function(n){if(t&&e(n,t.key))return t.value},put:function(e,n){t={key:e,value:n}}}}(t):function(e,t){var n=[];function r(e){var r=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return-1}(n,(function(n){return t(e,n.key)}));if(r>-1){var s=n[r];return r>0&&(n.splice(r,1),n.unshift(s)),s.value}}return{get:r,put:function(t,s){r(t)||(n.unshift({key:t,value:s}),n.length>e&&n.pop())}}}(e,t)}function hs(e,t){var n=t?function(e,t){return function n(r,s){if(e(r,s))return!0;if(Array.isArray(r))return!(!Array.isArray(s)||r.length!==s.length||!r.every((function(e,t){return n(e,s[t])})));if(Array.isArray(s))return!1;if("object"==typeof r){if("object"!=typeof s)return!1;var a=null===r,o=null===s;if(a||o)return a===o;var i=Object.keys(r),l=Object.keys(s);if(i.length!==l.length)return!1;var c=t?n:e;return!!i.every((function(e){return ps(r,e)&&ps(s,e)&&c(r[e],s[e])}))}return!1}}(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1)if(!n(e[r],t[r]))return!1;return!0}}const ms=function(){for(var e=1,t=function(e,t){return e===t},n=!1,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];"number"==typeof s[0]&&(e=s.shift()),"function"==typeof s[0]?t=s.shift():void 0===s[0]&&s.shift(),"boolean"==typeof s[0]&&(n=s[0]);var o=us(e,hs(t,n));return function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=o.get(n);return void 0===s&&(s=e.apply(e,n),o.put(n,s)),s}}};var gs=n("./.yarn/cache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js");const fs=n.n(gs)()(Object.defineProperty({archiveEnabled:!1,dependencies:{dagMaxNumServices:100,menuEnabled:!0},linkPatterns:[],menu:[{label:"About Jaeger",items:[{label:"GitHub",url:"https://github.com/uber/jaeger"},{label:"Docs",url:"http://jaeger.readthedocs.io/en/latest/"},{label:"Twitter",url:"https://twitter.com/JaegerTracing"},{label:"Discussion Group",url:"https://groups.google.com/forum/#!forum/jaeger-tracing"},{label:"Gitter.im",url:"https://gitter.im/jaegertracing/Lobby"},{label:"Blog",url:"https://medium.com/jaegertracing/"}]}],search:{maxLookback:{label:"2 Days",value:"2d"},maxLimit:1500},tracking:{gaID:null,trackErrors:!0}},"__mergeFields",{value:["dependencies","search","tracking"]}));function bs(e){return(0,k.get)(fs,e)}function ys(e){const t=e.references?e.references.find((e=>"CHILD_OF"===e.refType)):null;return t?t.span:null}const vs=/#\{([^{}]*)\}/g;function xs(e){const t=new Set;return e.replace(vs,((e,n)=>(t.add(n),e))),Array.from(t)}function ws(e,t,n){return e.replace(vs,((e,r)=>{const s=n[r];return null==s?"":t(s)}))}function _s(e,t){if("string"!=typeof e)throw new Error("Invalid template");return{parameters:xs(e),template:ws.bind(null,e,t)}}function ks(e){if("string"==typeof e)return t=>t===e;if(Array.isArray(e))return t=>e.indexOf(t)>-1;if(null==e)return()=>!0;throw new Error(`Invalid value: ${e}`)}const js=e=>e;function Ts(e,t){if(t)return t.find((t=>t.key===e))}function Is(e,t){return e.template(t)}function Ss(e,t,n,r){const s=n[r];let a="logs";const o=t.process.tags===n;o&&(a="process");t.tags===n&&(a="tags");const i=[];return e.forEach((e=>{if(e.type(a)&&e.key(s.key)&&e.value(s.value)){const r={},l=e.parameters.every((i=>{let l=Ts(i,n);return l||o||(l=function(e,t){let n=t;for(;n;){const t=Ts(e,n.tags)||Ts(e,n.process.tags);if(t)return t;n=ys(n)}}(i,t)),l?(r[i]=l.value,!0):(console.warn(`Skipping link pattern, missing parameter ${i} for key ${s.key} in ${a}.`,e.object),!1)}));l&&i.push({url:Is(e.url,r),text:Is(e.text,r)})}})),i}const Ds=(bs("linkPatterns")||[]).map((function(e){try{const t=_s(e.url,encodeURIComponent),n=_s(e.text,js);return{object:e,type:ks(e.type),key:ks(e.key),value:ks(e.value),url:t,text:n,parameters:(0,k.uniq)(t.parameters.concat(n.parameters))}}catch(t){return console.error(`Ignoring invalid link pattern: ${t}`,e),null}})).filter(Boolean),Cs=ms(10)((e=>{const t=[];return e?function(e,t){const n=[],r=Object.keys(t).filter((e=>"string"==typeof t[e]||"number"===t[e]));return e.filter((e=>e.type("traces"))).forEach((e=>{const s={},a=e.parameters.every((e=>{const n=e;return!!r.includes(n)&&(s[e]=t[n],!0)}));a&&n.push({url:Is(e.url,s),text:Is(e.text,s)})})),n}(Ds,e):t}));new WeakMap;var Ns,Ls;const Es=e=>(0,y.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",className:e.className,children:[e.children," ",Ns||(Ns=(0,y.jsx)(We,{}))]}),Os=e=>(0,y.jsx)(Xe,{children:e.map(((e,t)=>{let{text:n,url:r}=e;return(0,y.jsx)(Ye,{children:(0,y.jsx)(Es,{href:r,children:n})},`${r}-${t}`)}))});function Ms(e){const{links:t}=e;return 1===t.length?(0,y.jsx)(Es,{href:t[0].url,title:t[0].text,className:e.className}):(0,y.jsx)(Ze,{overlay:Os(t),placement:"bottomRight",trigger:["click"],children:(0,y.jsx)("a",{className:e.className,children:Ls||(Ls=(0,y.jsx)(We,{isLarge:!0}))})})}const Ps=["renderer"];const Rs=e=>({TracePageHeader:m`
      label: TracePageHeader;
      & > :first-child {
        border-bottom: 1px solid ${ee(e,"#e8e8e8")};
      }
      & > :nth-child(2) {
        background-color: ${ee(e,"#eee")};
        border-bottom: 1px solid ${ee(e,"#e4e4e4")};
      }
      & > :last-child {
        border-bottom: 1px solid ${ee(e,"#ccc")};
      }
    `,TracePageHeaderTitleRow:m`
      label: TracePageHeaderTitleRow;
      align-items: center;
      display: flex;
    `,TracePageHeaderBack:m`
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
    `,TracePageHeaderTitleLink:m`
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
    `,TracePageHeaderDetailToggle:m`
      label: TracePageHeaderDetailToggle;
      font-size: 2.5rem;
      transition: transform 0.07s ease-out;
    `,TracePageHeaderDetailToggleExpanded:m`
      label: TracePageHeaderDetailToggleExpanded;
      transform: rotate(90deg);
    `,TracePageHeaderTitle:m`
      label: TracePageHeaderTitle;
      color: inherit;
      flex: 1;
      font-size: 1.7em;
      line-height: 1em;
      margin: 0 0 0 0.5em;
      padding-bottom: 0.5em;
    `,TracePageHeaderTitleCollapsible:m`
      label: TracePageHeaderTitleCollapsible;
      margin-left: 0;
    `,TracePageHeaderOverviewItems:m`
      label: TracePageHeaderOverviewItems;
      border-bottom: 1px solid #e4e4e4;
      padding: 0.25rem 0.5rem !important;
    `,TracePageHeaderOverviewItemValueDetail:b()(m`
        label: TracePageHeaderOverviewItemValueDetail;
        color: #aaa;
      `,"trace-item-value-detail"),TracePageHeaderOverviewItemValue:m`
      label: TracePageHeaderOverviewItemValue;
      &:hover > .trace-item-value-detail {
        color: unset;
      }
    `,TracePageHeaderArchiveIcon:m`
      label: TracePageHeaderArchiveIcon;
      font-size: 1.78em;
      margin-right: 0.15em;
    `,TracePageHeaderTraceId:m`
      label: TracePageHeaderTraceId;
      white-space: nowrap;
    `}),zs=[{key:"timestamp",label:"Trace Start",renderer(e,t,n){const r=(0,kr.dateTimeFormat)(e.startTime/1e3,{timeZone:t,defaultWithMS:!0}),s=r.match(/^(.+)(:\d\d\.\d+)$/);return s?(0,y.jsxs)("span",{className:n.TracePageHeaderOverviewItemValue,children:[s[1],(0,y.jsx)("span",{className:n.TracePageHeaderOverviewItemValueDetail,children:s[2]})]}):r}},{key:"duration",label:"Duration",renderer:e=>W(e.duration)},{key:"service-count",label:"Services",renderer:e=>new Set((0,k.values)(e.processes).map((e=>e.serviceName))).size},{key:"depth",label:"Depth",renderer:e=>(0,k.get)((0,k.maxBy)(e.spans,"depth"),"depth",0)+1},{key:"span-count",label:"Total Spans",renderer:e=>e.spans.length}];function $s(e){const{canCollapse:t,clearSearch:n,focusUiFindMatches:s,hideMap:a,hideSummary:o,nextResult:i,onSlimViewClicked:l,prevResult:c,resultCount:d,slimView:p,textFilter:u,trace:h,traceGraphView:m,updateNextViewRangeTime:f,updateViewRangeTime:v,viewRange:x,searchValue:w,onSearchValueChange:_,hideSearchButtons:k,timeZone:j}=e,T=(0,g.useStyles2)(Rs),I=r.useMemo((()=>h?Cs(h):[]),[h]);if(!h)return null;const S=!o&&!p&&zs.map((e=>{const{renderer:t}=e,n=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,Ps);return Object.assign({},n,{value:t(h,j,T)})})),D=(0,y.jsxs)("h1",{className:b()(T.TracePageHeaderTitle,t&&T.TracePageHeaderTitleCollapsible),children:[(0,y.jsx)(cs,{traceName:ds(h.spans)})," ",(0,y.jsx)("small",{className:b()(T.TracePageHeaderTraceId,be),children:h.traceID})]});return(0,y.jsxs)("header",{className:T.TracePageHeader,children:[(0,y.jsxs)("div",{className:T.TracePageHeaderTitleRow,children:[I&&I.length>0&&(0,y.jsx)(Ms,{links:I,className:T.TracePageHeaderBack}),t?(0,y.jsxs)("a",{className:T.TracePageHeaderTitleLink,onClick:l,role:"switch","aria-checked":!p,children:[(0,y.jsx)(_r(),{className:b()(T.TracePageHeaderDetailToggle,!p&&T.TracePageHeaderDetailToggleExpanded)}),D]}):D,(0,y.jsx)(Yr,{clearSearch:n,focusUiFindMatches:s,nextResult:i,prevResult:c,resultCount:d,textFilter:u,navigable:!m,searchValue:w,onSearchValueChange:_,hideSearchButtons:k})]}),S&&(0,y.jsx)(Pn,{className:T.TracePageHeaderOverviewItems,items:S}),!a&&!p&&(0,y.jsx)(Gr,{trace:h,viewRange:x,updateNextViewRangeTime:f,updateViewRangeTime:v})]})}function Hs(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Vs{constructor(e){Hs(this,"isTagsOpen",void 0),Hs(this,"isProcessOpen",void 0),Hs(this,"logs",void 0),Hs(this,"isWarningsOpen",void 0),Hs(this,"isStackTracesOpen",void 0),Hs(this,"isReferencesOpen",void 0);const{isTagsOpen:t,isProcessOpen:n,isReferencesOpen:r,isWarningsOpen:s,isStackTracesOpen:a,logs:o}=e||{};this.isTagsOpen=Boolean(t),this.isProcessOpen=Boolean(n),this.isReferencesOpen=Boolean(r),this.isWarningsOpen=Boolean(s),this.isStackTracesOpen=Boolean(a),this.logs={isOpen:Boolean(o&&o.isOpen),openedItems:o&&o.openedItems?new Set(o.openedItems):new Set}}toggleTags(){const e=new Vs(this);return e.isTagsOpen=!this.isTagsOpen,e}toggleProcess(){const e=new Vs(this);return e.isProcessOpen=!this.isProcessOpen,e}toggleReferences(){const e=new Vs(this);return e.isReferencesOpen=!this.isReferencesOpen,e}toggleWarnings(){const e=new Vs(this);return e.isWarningsOpen=!this.isWarningsOpen,e}toggleStackTraces(){const e=new Vs(this);return e.isStackTracesOpen=!this.isStackTracesOpen,e}toggleLogs(){const e=new Vs(this);return e.logs.isOpen=!this.logs.isOpen,e}toggleLogItem(e){const t=new Vs(this);return t.logs.openedItems.has(e)?t.logs.openedItems.delete(e):t.logs.openedItems.add(e),t}}var Fs=n("./.yarn/cache/reselect-npm-4.1.5-bc046e41ae-54c13c1e79.zip/node_modules/reselect/es/index.js"),Bs=n("./.yarn/cache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js"),As=n.n(Bs);const Gs=e=>e.serviceName,Ws=e=>e.spanID,Us=e=>e.operationName,Ks=e=>e.duration,qs=e=>e.startTime,Zs=e=>e.processID,Xs=(0,Fs.P1)((0,Fs.P1)((({span:e})=>e),(e=>e.references||[])),(({type:e})=>e),((e,t)=>e.find((e=>e.refType===t)))),Ys=((0,Fs.P1)((e=>Xs({span:e,type:"CHILD_OF"})),(e=>e?e.spanID:null)),(0,Fs.P1)((e=>{if(!e.process)throw new Error("\n      you must hydrate the spans with the processes, perhaps\n      using hydrateSpansWithProcesses(), before accessing a span's process\n    ");return e.process}),Gs)),Js=((0,Fs.P1)((({spans:e})=>e),(({leftBound:e})=>e),(({rightBound:e})=>e),((e,t,n)=>e.filter((e=>qs(e)>=t&&qs(e)<=n)))),(0,Fs.P1)((({spans:e})=>e),(({text:e})=>e),((e,t)=>As().filter(t,e,{extract:e=>`${Ys(e)} ${Us(e)}`}).map((({original:e})=>e))))),Qs=(0,Fs.P1)(Js,(e=>e.reduce(((e,t)=>({...e,[Ws(t)]:t})),{})));(0,Fs.P1)((({spans:e})=>e),Qs,((e,t)=>e.map((e=>({...e,muted:!t[Ws(e)]})))));class ea{static iterFunction(e,t=0){return n=>e(n.value,n,t)}static searchFunction(e){return"function"==typeof e?e:(t,n)=>e instanceof ea?n===e:t===e}constructor(e,t=[]){this.value=e,this.children=t}get depth(){return this.children.reduce(((e,t)=>Math.max(t.depth+1,e)),1)}get size(){let e=0;return this.walk((()=>e++)),e}addChild(e){return this.children.push(e instanceof ea?e:new ea(e)),this}find(e){if(ea.iterFunction(ea.searchFunction(e))(this))return this;for(let t=0;t<this.children.length;t++){const n=this.children[t].find(e);if(n)return n}return null}getPath(e){const t=ea.iterFunction(ea.searchFunction(e)),n=(e,r)=>{const s=r.concat([e]);if(t(e))return s;for(let t=0;t<e.children.length;t++){const r=e.children[t],a=n(r,s);if(a)return a}return null};return n(this,[])}walk(e,t=0){const n=[];let r=t;for(n.push({node:this,depth:r});n.length;){const{node:t,depth:s}=n.pop();e(t.value,t,s),r=s+1;let a=t.children.length-1;for(;a>=0;)n.push({node:t.children[a],depth:r}),a--}}}const ta=e=>e.spans,na=e=>e.processes,ra=(0,Fs.P1)((e=>e.span),(e=>e.processes),((e,t)=>({...e,process:t[Zs(e)]}))),sa=(0,Fs.P1)(ta,(e=>e.reduce(((e,t)=>e.set(Ws(t),t)),new Map)));function aa(e){const t=new Map(e.spans.map((e=>[e.spanID,new ea(e.spanID)]))),n=new Map(e.spans.map((e=>[e.spanID,e]))),r=new ea("__root__");e.spans.forEach((e=>{const n=t.get(e.spanID);if(Array.isArray(e.references)&&e.references.length){const{refType:s,spanID:a}=e.references[0];if("CHILD_OF"!==s&&"FOLLOWS_FROM"!==s)throw new Error(`Unrecognized ref type: ${s}`);(t.get(a)||r).children.push(n)}else r.children.push(n)}));const s=(e,t)=>{const r=n.get(e.value),s=n.get(t.value);return+(r.startTime>s.startTime)||+(r.startTime===s.startTime)-1};return e.spans.forEach((e=>{const n=t.get(e.spanID);n.children.length>1&&n.children.sort(s)})),r.children.sort(s),r}(0,Fs.P1)(ta,(e=>e.length));const oa=(0,Fs.P1)(ta,(e=>e.reduce(((e,t)=>e?Math.min(e,qs(t)):qs(t)),null))),ia=(0,Fs.P1)(ta,oa,((e,t)=>e.reduce(((e,n)=>e?Math.max(qs(n)-t+Ks(n),e):Ks(n)),null))),la=((0,Fs.P1)(oa,ia,((e,t)=>e+t)),(0,Fs.P1)(aa,sa,((e,t)=>e.children.map((e=>t.get(e.value))).sort(((e,t)=>{return n=qs(e),r=qs(t),n-r;var n,r}))[0]))),ca=((0,Fs.P1)(aa,(e=>e.depth-1)),(0,Fs.P1)((0,Fs.P1)((e=>e.trace),aa),(0,Fs.P1)((e=>e.span),Ws),((e,t)=>e.getPath(t).length-1)),(0,Fs.P1)(na,(e=>Object.keys(e).reduce(((t,n)=>t.add(Gs(e[n]))),new Set)))),da=((0,Fs.P1)(ca,(e=>e.size)),{ms:function(e){const t=G(e,B,$);return`${z().duration(t/$).asMilliseconds()}ms`},s:function(e){const t=G(e,B,H);return`${z().duration(t/$).asSeconds()}s`}}),pa=(0,Fs.P1)(ia,(e=>e>=H?da.s:da.ms)),ua=((0,Fs.P1)((({duration:e})=>e),(({unit:e})=>da[e]),((e,t)=>t(e))),(0,Fs.P1)((({duration:e})=>e),(0,Fs.P1)((({trace:e})=>e),pa),((e,t)=>t(e))),(0,Fs.P1)((({trace:e})=>e),(({spans:e})=>e),(({sort:e})=>e),((e,t,{dir:n,comparator:r,selector:s})=>[...t].sort(((t,a)=>n*r(s(t,e),s(a,e)))))),(0,Fs.P1)(aa,(e=>{const t=new Map;let n=0;return e.walk((e=>t.set(e,n++))),t})));(0,Fs.P1)((0,Fs.P1)((e=>e.trace),aa),(0,Fs.P1)((e=>e.span),Ws),((e,t)=>{const n=e.find(t);return n?n.size-1:-1})),(0,Fs.P1)((0,Fs.P1)((({trace:e})=>e),ua),(({span:e})=>e),((e,t)=>e.get(Ws(t)))),(0,Fs.P1)((0,Fs.P1)((0,Fs.P1)((e=>{const t=ta(e),n=na(e);return{...e,spans:t.map((e=>ra({span:e,processes:n})))}}),la),(0,Fs.zB)({name:Us,serviceName:Ys})),(({name:e,serviceName:t})=>`${t}: ${e}`)),(0,Fs.P1)((({spans:e})=>e),(0,Fs.P1)((({trace:e})=>e),aa),(({collapsed:e})=>e),((e,t,n)=>{const r=n.reduce(((e,n)=>(t.find(n).walk((t=>t!==n&&e.add(t))),e)),new Set);return r.size>0?e.filter((e=>!r.has(Ws(e)))):e})),(0,Fs.P1)((({trace:e})=>e),(({interval:e=4})=>e),(({width:e=3})=>e),((e,t,n)=>[...Array(t+1).keys()].map((r=>({timestamp:oa(e)+ia(e)*(r/t),width:n}))))),(0,Fs.P1)((e=>e),ta,((e,t)=>{const n=new Map;return{...e,spans:t.reduce(((e,t)=>{const r=n.has(Ws(t))?`${Ws(t)}_${n.get(Ws(t))}`:Ws(t),s={...t,spanID:r};return r!==Ws(t)&&console.warn("duplicate spanID in trace replaced",Ws(t),"new:",r),n.set(Ws(t),(n.get(Ws(t))||0)+1),e.concat([s])}),[])}})),(0,Fs.P1)((e=>e),ta,((e,t)=>({...e,spans:t.filter((e=>!!qs(e)))})));function ha(e){const t=new Map;return{tags:e.reduce(((e,n)=>(e.some((e=>e.key===n.key&&e.value===n.value))?t.set(`${n.key}:${n.value}`,`Duplicate tag "${n.key}:${n.value}"`):e.push(n),e)),[]),warnings:Array.from(t.values())}}function ma(e,t){const n=e.slice(),r=(t||[]).map((e=>e.toLowerCase()));return n.sort(((e,t)=>{const n=e.key.toLowerCase(),s=t.key.toLowerCase();for(let e=0;e<r.length;e++){const t=r[e];if(n.startsWith(t)&&!s.startsWith(t))return-1;if(!n.startsWith(t)&&s.startsWith(t))return 1}return n>s?1:n<s?-1:0})),n}function ga(e){if(null==e||!e.traceID)return null;const t=e.traceID.toLowerCase();let n=0,r=Number.MAX_SAFE_INTEGER;const s=new Map,a=new Map;e.spans=e.spans.filter((e=>Boolean(e.startTime)));const o=e.spans.length;for(let t=0;t<o;t++){const o=e.spans[t],{startTime:i,duration:l,processID:c}=o;let d=o.spanID;i<r&&(r=i),i+l>n&&(n=i+l);const p=s.get(d);null!=p?(console.warn(`Dupe spanID, ${p+1} x ${d}`,o,a.get(d)),(0,k.isEqual)(o,a.get(d))&&console.warn("\t two spans with same ID have `isEqual(...) === true`"),s.set(d,p+1),d=`${d}_${p}`,o.spanID=d):s.set(d,1),o.process=e.processes[c],a.set(d,o)}const i=aa(e),l=[],c={};i.walk((function(e,n){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("__root__"===e)return;const o=a.get(e);if(!o)return;const{serviceName:i}=o.process;c[i]=(c[i]||0)+1,o.relativeStartTime=o.startTime-r,o.depth=s-1,o.hasChildren=n.children.length>0,o.warnings=o.warnings||[],o.tags=o.tags||[],o.references=o.references||[];const d=ha(o.tags);o.tags=ma(d.tags,bs("topTagPrefixes")),o.warnings=o.warnings.concat(d.warnings),o.references.forEach(((n,r)=>{const s=a.get(n.spanID);s&&(n.span=s,r>0&&(s.subsidiarilyReferencedBy=s.subsidiarilyReferencedBy||[],s.subsidiarilyReferencedBy.push({spanID:e,traceID:t,span:o,refType:n.refType})))})),l.push(o)}));const d=ds(l);return{services:Object.keys(c).map((e=>({name:e,numberOfSpans:c[e]}))),spans:l,traceID:t,traceName:d,processes:e.processes,duration:n-r,startTime:r,endTime:n}}function fa(e,t){if(!t)return null;const n=[],r=[];e.split(/\s+/).filter(Boolean).forEach((e=>{"-"===e[0]?r.push(e.substr(1).toLowerCase()):n.push(e.toLowerCase())}));const s=(e,t)=>e.some((e=>t.toLowerCase().includes(e))),a=e=>!!e&&e.some((e=>!s(r,e.key)&&(s(n,e.key)||s(n,e.value.toString()))));return new Set(t.filter((e=>s(n,e.operationName)||s(n,e.process.serviceName)||a(e.tags)||null!==e.logs&&e.logs.some((e=>a(e.fields)))||a(e.process.tags)||n.some((t=>t===e.spanID)))).map((e=>e.spanID)))}},"./public/app/core/utils/tracing.ts":(e,t,n)=>{"use strict";n.d(t,{et:()=>s,nO:()=>a,fy:()=>o,np:()=>l});var r=n("./packages/grafana-data/src/index.ts");function s(e){e.sort(((e,t)=>e[0]-t[0]));return e.reduce(((e,t)=>{if(!e.length)return[t];const n=e.slice(-1)[0],[r,s]=n,[a,o]=t;return o<s?e:a>s?[...e,t]:[...e.slice(0,-1),[r,o]]}),[]).reduce(((e,t)=>e+(t[1]-t[0])),0)}function a(e){const t={};let n;for(let r=0;n=e(r),n;r++){t[n.id]?t[n.id].span=n.span:t[n.id]={span:n.span,children:[]};for(const e of n.parentIds)e&&(t[e]?t[e].children.push(n.id):t[e]={span:void 0,children:[n.id]})}return t}function o(e,t,n){return{main:`${i(e)}ms (${i(e/t*100)}%)`,secondary:`${i(n)}ms (${i(n/e*100)}%)`}}function i(e){return parseFloat(e.toFixed(2))}function l(){return[new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.title,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.subTitle,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.mainStat,type:r.FieldType.string,config:{displayName:"Total time (% of trace)"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,type:r.FieldType.string,config:{displayName:"Self time (% of total)"}},{name:r.NodeGraphDataFrameFieldNames.color,type:r.FieldType.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.target,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.source,type:r.FieldType.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},"./public/app/plugins/datasource/jaeger/responseTransform.ts":(e,t,n)=>{"use strict";n.d(t,{xM:()=>a,Wp:()=>o,c6:()=>l});var r=n("./packages/grafana-data/src/index.ts"),s=n("./packages/jaeger-ui-components/src/index.ts");function a(e){const t=e.spans.map((t=>{return n=t,r=e.processes,{spanID:n.spanID,traceID:n.traceID,parentSpanID:null===(s=n.references)||void 0===s||null===(a=s.find((e=>"CHILD_OF"===e.refType)))||void 0===a?void 0:a.spanID,operationName:n.operationName,startTime:n.startTime/1e3,duration:n.duration/1e3,logs:n.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:n.tags,warnings:null!==(o=n.warnings)&&void 0!==o?o:void 0,stackTraces:n.stackTraces,serviceName:r[n.processID].serviceName,serviceTags:r[n.processID].tags};var n,r,s,a,o})),n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string},{name:"spanID",type:r.FieldType.string},{name:"parentSpanID",type:r.FieldType.string},{name:"operationName",type:r.FieldType.string},{name:"serviceName",type:r.FieldType.string},{name:"serviceTags",type:r.FieldType.other},{name:"startTime",type:r.FieldType.number},{name:"duration",type:r.FieldType.number},{name:"logs",type:r.FieldType.other},{name:"tags",type:r.FieldType.other},{name:"warnings",type:r.FieldType.other},{name:"stackTraces",type:r.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)n.add(e);return n}function o(e,t){const n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string,config:{displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:r.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:r.FieldType.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:r.FieldType.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),s=e.map(i).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of s)n.add(e);return n}function i(e){const t=(0,s.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function l(e){let t={traceID:"",spans:[],processes:{},warnings:null},n=[];for(let r=0;r<e.length;r++){const s=e.get(r);t.traceID||(t.traceID=s.traceID),n.find((e=>e===s.serviceName))||(n.push(s.serviceName),t.processes[`p${n.length}`]={serviceName:s.serviceName,tags:s.serviceTags}),t.spans.push({traceID:s.traceID,spanID:s.spanID,duration:1e3*s.duration,references:s.parentSpanID?[{refType:"CHILD_OF",spanID:s.parentSpanID,traceID:s.traceID}]:[],flags:0,logs:s.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:s.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===s.serviceName))||"",startTime:1e3*s.startTime,tags:s.tags,warnings:s.warnings?s.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},"./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){var n=e.children,a=e.color,o=e.size,i=e.style,l=e.width,c=e.height,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),p=t.reactIconBase,u=void 0===p?{}:p,h=o||u.size||"1em";return s.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||h,width:l||h},u,d,{style:r({verticalAlign:"middle",color:a||u.color},u.style||{},i)}))};i.propTypes={color:a.default.string,size:a.default.oneOfType([a.default.string,a.default.number]),width:a.default.oneOfType([a.default.string,a.default.number]),height:a.default.oneOfType([a.default.string,a.default.number]),style:a.default.object},i.contextTypes={reactIconBase:a.default.shape(i.propTypes)},t.default=i,e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-locate.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m17.5 13.8c3.4 0 6.3 2.8 6.3 6.2s-2.9 6.3-6.3 6.3-6.2-2.9-6.2-6.3 2.8-6.2 6.2-6.2z m14.9 4.6h2.6v3.2h-2.6c-0.8 7-6.3 12.5-13.3 13.3v2.6h-3.2v-2.6c-7-0.8-12.5-6.3-13.3-13.3h-2.6v-3.2h2.6c0.8-7 6.3-12.5 13.3-13.3v-2.6h3.2v2.6c7 0.8 12.5 6.3 13.3 13.3z m-14.9 13.2c6.4 0 11.6-5.2 11.6-11.6s-5.2-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.2 11.6 11.6 11.6z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31.6 31.6v-10.3h3.4v10.3c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h10.4v3.4h-10.4v23.2h23.2z m-9.1-26.6h12.5v12.5h-3.4v-6.8l-16.8 16.8-2.3-2.3 16.8-16.8h-6.8v-3.4z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m35 20l-15 15v-8.7h-15v-12.5h15v-8.8z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m23.3 20l-13.1-13.6c-0.3-0.3-0.3-0.9 0-1.2l2.4-2.4c0.3-0.3 0.9-0.4 1.2-0.1l16 16.7c0.1 0.1 0.2 0.4 0.2 0.6s-0.1 0.5-0.2 0.6l-16 16.7c-0.3 0.3-0.9 0.3-1.2 0l-2.4-2.5c-0.3-0.3-0.3-0.9 0-1.2z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31 12.5l1.5 1.6-12.5 13.4-12.5-13.4 1.5-1.6 11 11.7z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m12.5 9l1.6-1.5 13.4 12.5-13.4 12.5-1.6-1.5 11.7-11z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/link.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m20 16.3z m8.8-3.8c3.4 0 6.2 2.8 6.2 6.3v2.5c0 3.4-2.8 6.2-6.2 6.2h-8.8c-2.6 0-4.7-1.6-5.7-3.7-0.3-0.8-0.5-1.6-0.5-2.5v-2.5h3.7v2.5c0 1.4 1.1 2.5 2.5 2.5h8.8c1.4 0 2.5-1.1 2.5-2.5v-2.5c0-1.5-1.1-2.5-2.5-2.5h-1.3c-0.5-2.5-2.5-3.8-2.5-3.8h3.8z m-3 3.8c0.3 0.7 0.5 1.6 0.5 2.5v2.5h-3.8v-2.5c0-1.5-1.1-2.5-2.5-2.5h-8.7c-1.5 0-2.5 1-2.5 2.5v2.5c0 1.4 1 2.5 2.5 2.5h1.2c0.5 2.4 2.5 3.7 2.5 3.7h-3.7c-3.5 0-6.3-2.8-6.3-6.2v-2.5c0-3.5 2.8-6.3 6.3-6.3h8.7c2.6 0 4.8 1.6 5.8 3.8z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/network.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m35 7.5c0 1.9-1 3.4-2.5 4.3v7.3l-10 5v4.1c1.5 0.9 2.5 2.4 2.5 4.3 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.9 1-3.4 2.5-4.3v-4.1l-10-5v-7.3c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5c0 1.9-1 3.4-2.5 4.3v4.1l7.5 3.8 7.5-3.8v-4.1c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5z m-25-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m10 30c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m10-25c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m8.4 30h23.2v3.4h-23.2v-3.4z m6.6-3.4v-10h-6.6l11.6-11.6 11.6 11.6h-6.6v10h-10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=o(n("./.yarn/cache/react-npm-17.0.2-99ba37d931-b254cc17ce.zip/node_modules/react/index.js")),a=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(a.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"})))},e.exports=t.default},"./.yarn/cache/change-emitter-npm-0.1.6-9daba4f281-0ed494ba99.zip/node_modules/change-emitter/lib/index.js":(e,t)=>{"use strict";t.E=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var s=t.indexOf(e);t.splice(s,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var n=this,r=n.constructor;return n.options=Object.assign({storeInstancesGlobally:!0},t||{}),n.callbacks={},n.directMap={},n.sequenceLevels={},n.resetTimer=null,n.ignoreNextKeyup=!1,n.ignoreNextKeypress=!1,n.nextExpectedAction=!1,n.element=e,n.addEvents(),n.options.storeInstancesGlobally&&r.instances.push(n),n},e.exports.prototype.bind=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js"),e.exports.prototype.bindMultiple=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js"),e.exports.prototype.unbind=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js"),e.exports.prototype.trigger=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js"),e.exports.prototype.reset=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js"),e.exports.prototype.stopCallback=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js"),e.exports.prototype.handleKey=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js"),e.exports.prototype.addEvents=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js"),e.exports.prototype.bindSingle=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js"),e.exports.prototype.getKeyInfo=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js"),e.exports.prototype.pickBestAction=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js"),e.exports.prototype.getReverseMap=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js"),e.exports.prototype.getMatches=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js"),e.exports.prototype.resetSequences=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js"),e.exports.prototype.fireCallback=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js"),e.exports.prototype.bindSequence=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js"),e.exports.prototype.resetSequenceTimer=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js"),e.exports.prototype.detach=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js"),e.exports.instances=[],e.exports.reset=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js"),e.exports.REVERSE_MAP=null},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js":(e,t,n)=>{"use strict";e.exports=function(){var e=this,t=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js"),r=e.element;e.eventHandler=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js").bind(e),t(r,"keypress",e.eventHandler),t(r,"keydown",e.eventHandler),t(r,"keyup",e.eventHandler)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js":e=>{"use strict";e.exports=function(e,t,n){return e=e instanceof Array?e:[e],this.bindMultiple(e,t,n),this}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js":e=>{"use strict";e.exports=function(e,t,n){for(var r=0;r<e.length;++r)this.bindSingle(e[r],t,n)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,s){var a=this;function o(t){return function(){a.nextExpectedAction=t,++a.sequenceLevels[e],a.resetSequenceTimer()}}function i(t){var o;a.fireCallback(r,t,e),"keyup"!==s&&(o=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js"),a.ignoreNextKeyup=o(t)),setTimeout((function(){a.resetSequences()}),10)}a.sequenceLevels[e]=0;for(var l=0;l<t.length;++l){var c=l+1===t.length?i:o(s||a.getKeyInfo(t[l+1]).action);a.bindSingle(t[l],c,s,e,l)}}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js":e=>{"use strict";e.exports=function(e,t,n,r,s){var a=this;a.directMap[e+":"+n]=t;var o,i=(e=e.replace(/\s+/g," ")).split(" ");i.length>1?a.bindSequence(e,i,t,n):(o=a.getKeyInfo(e,n),a.callbacks[o.key]=a.callbacks[o.key]||[],a.getMatches(o.key,o.modifiers,{type:o.action},r,e,s),a.callbacks[o.key][r?"unshift":"push"]({callback:t,modifiers:o.modifiers,action:o.action,seq:r,level:s,combo:e}))}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js":(e,t,n)=>{var r=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js").off;e.exports=function(){var e=this,t=e.element;r(t,"keypress",e.eventHandler),r(t,"keydown",e.eventHandler),r(t,"keyup",e.eventHandler)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js":e=>{function t(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}e.exports=t,e.exports.on=t,e.exports.off=function(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,s){this.stopCallback(t,t.target||t.srcElement,r,s)||!1===e(t,r)&&(n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js")(t),n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js")(t))}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var r,s,a,o,i,l,c=[];for(r=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js")(e),o=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js"),i=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js"),l=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),a=0;a<r.length;++a)o[s=r[a]]&&(s=o[s]),t&&"keypress"!==t&&i[s]&&(s=i[s],c.push("shift")),l(s)&&c.push(s);return{key:s,modifiers:c,action:t=this.pickBestAction(s,c,t)}}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,s,a,o){var i,l,c,d,p=this,u=[],h=r.type;"keypress"!==h||r.code&&"Arrow"===r.code.slice(0,5)||(p.callbacks["any-character"]||[]).forEach((function(e){u.push(e)}));if(!p.callbacks[e])return u;for(c=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),"keyup"===h&&c(e)&&(t=[e]),i=0;i<p.callbacks[e].length;++i)if(l=p.callbacks[e][i],(s||!l.seq||p.sequenceLevels[l.seq]===l.level)&&h===l.action&&(d=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"),"keypress"===h&&!r.metaKey&&!r.ctrlKey||d(t,l.modifiers))){var m=!s&&l.combo===a,g=s&&l.seq===s&&l.level===o;(m||g)&&p.callbacks[e].splice(i,1),u.push(l)}return u}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js":(e,t,n)=>{"use strict";e.exports=function(){var e,t=this.constructor;if(!t.REVERSE_MAP)for(var r in t.REVERSE_MAP={},e=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"))r>95&&r<112||e.hasOwnProperty(r)&&(t.REVERSE_MAP[e[r]]=r);return t.REVERSE_MAP}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r){var s,a,o,i,l=this,c={},d=0,p=!1;for(s=l.getMatches(e,t,r),a=0;a<s.length;++a)s[a].seq&&(d=Math.max(d,s[a].level));for(a=0;a<s.length;++a)if(s[a].seq){if(s[a].level!==d)continue;p=!0,c[s[a].seq]=1,l.fireCallback(s[a].callback,r,s[a].combo,s[a].seq)}else p||l.fireCallback(s[a].callback,r,s[a].combo);i="keypress"===r.type&&l.ignoreNextKeypress,o=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),r.type!==l.nextExpectedAction||o(e)||i||l.resetSequences(c),l.ignoreNextKeypress=p&&"keydown"===r.type}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r=this;"number"!=typeof e.which&&(e.which=e.keyCode);var s=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js")(e);void 0!==s&&("keyup"!==e.type||r.ignoreNextKeyup!==s?(t=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js"),r.handleKey(s,t(e),e)):r.ignoreNextKeyup=!1)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js":e=>{"use strict";e.exports=function(e,t){return e.sort().join(",")===t.sort().join(",")}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js":e=>{"use strict";e.exports=function(e,t,n){return n||(n=this.getReverseMap()[e]?"keydown":"keypress"),"keypress"===n&&t.length&&(n="keydown"),n}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js":e=>{"use strict";e.exports=function(){return this.callbacks={},this.directMap={},this}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js":e=>{"use strict";e.exports=function(){var e=this;clearTimeout(e.resetTimer),e.resetTimer=setTimeout((function(){e.resetSequences()}),1e3)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js":e=>{"use strict";e.exports=function(e){var t=this;e=e||{};var n,r=!1;for(n in t.sequenceLevels)e[n]?r=!0:t.sequenceLevels[n]=0;r||(t.nextExpectedAction=!1)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js":e=>{"use strict";e.exports=function(e,t){if((" "+t.className+" ").indexOf(" combokeys ")>-1)return!1;var n=t.tagName.toLowerCase();return"input"===n||"select"===n||"textarea"===n||t.isContentEditable}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js":e=>{"use strict";e.exports=function(e,t){return this.directMap[e+":"+t]&&this.directMap[e+":"+t]({},e),this}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js":e=>{"use strict";e.exports=function(e,t){return this.bind(e,(function(){}),t)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js":e=>{"use strict";e.exports=function(){this.instances.forEach((function(e){e.reset()}))}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r;if(t=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"),r=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js"),"keypress"===e.type){var s=String.fromCharCode(e.which);return e.shiftKey||(s=s.toLowerCase()),s}return void 0!==t[e.which]?t[e.which]:void 0!==r[e.which]?r[e.which]:String.fromCharCode(e.which).toLowerCase()}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js":e=>{"use strict";e.exports=function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js":e=>{"use strict";e.exports=function(e){return"shift"===e||"ctrl"===e||"alt"===e||"meta"===e}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js":e=>{"use strict";e.exports=function(e){return"+"===e?["+"]:e.split("+")}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js":e=>{"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js":e=>{"use strict";e.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js":e=>{"use strict";e.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js":e=>{"use strict";e.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js":e=>{"use strict";e.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(var t=1;t<20;++t)e.exports[111+t]="f"+t;for(t=0;t<=9;++t)e.exports[t+96]=t},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js":e=>{"use strict";e.exports=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},"./.yarn/cache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js":(e,t,n)=>{"use strict";var r=n("./.yarn/cache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js"),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,o,i,l,c,d=!1;t||(t={}),n=t.debug||!1;try{if(o=r(),i=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=s[t.format]||s.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),o()}return d}},"./.yarn/cache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js":e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},"./.yarn/cache/fbjs-npm-0.8.18-79fe681dcf-668731b946.zip/node_modules/fbjs/lib/shallowEqual.js":e=>{"use strict";var t=Object.prototype.hasOwnProperty;function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,r){if(n(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var s=Object.keys(e),a=Object.keys(r);if(s.length!==a.length)return!1;for(var o=0;o<s.length;o++)if(!t.call(r,s[o])||!n(e[s[o]],r[s[o]]))return!1;return!0}},"./.yarn/cache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js":e=>{var t;t={},e.exports=t,t.simpleFilter=function(e,n){return n.filter((function(n){return t.test(e,n)}))},t.test=function(e,n){return null!==t.match(e,n)},t.match=function(e,t,n){n=n||{};var r,s=0,a=[],o=t.length,i=0,l=0,c=n.pre||"",d=n.post||"",p=n.caseSensitive&&t||t.toLowerCase();e=n.caseSensitive&&e||e.toLowerCase();for(var u=0;u<o;u++)r=t[u],p[u]===e[s]?(r=c+r+d,s+=1,l+=1+l):l=0,i+=l,a[a.length]=r;return s===e.length?(i=p===e?1/0:i,{rendered:a.join(""),score:i}):null},t.filter=function(e,n,r){return n&&0!==n.length?"string"!=typeof e?n:(r=r||{},n.reduce((function(n,s,a,o){var i=s;r.extract&&(i=r.extract(s));var l=t.match(e,i,r);return null!=l&&(n[n.length]={string:l.rendered,score:l.score,index:a,original:s}),n}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))):[]}},"./.yarn/cache/hoist-non-react-statics-npm-2.5.5-e15c7ba611-ee2d05e5c7.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":e=>{"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,s=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);e.exports=function e(c,d,p){if("string"!=typeof d){if(l){var u=i(d);u&&u!==l&&e(c,u,p)}var h=s(d);a&&(h=h.concat(a(d)));for(var m=0;m<h.length;++m){var g=h[m];if(!(t[g]||n[g]||p&&p[g])){var f=o(d,g);try{r(c,g,f)}catch(e){}}}return c}return c}},"./.yarn/cache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js":e=>{"use strict";var t="    ";function n(e){return e?function(t){return'style="'+(n=e["."+t],r="",n&&Object.keys(n).forEach((function(e){r+=e+":"+n[e]+";"})),r+'"');var n,r}:function(e){return'class="'+e+'"'}}function r(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}e.exports=function(e,s){var a="",o=n(s),i=function(e,n,r,s){if(!e.length)return n+" "+r;var o=n+"\n";return a+=t,e.forEach((function(t,n){o+=a+s(t)+(n<e.length-1?",":"")+"\n"})),a=a.slice(0,-t.length),o+a+r};return"<div "+o("json-markup")+">"+function e(t){if(void 0===t)return"";switch(function(e){return null===e?"null":Array.isArray(e)?"array":"string"==typeof e&&/^https?:/.test(e)?"link":"object"==typeof e&&"function"==typeof e.toISOString?"date":typeof e}(t)){case"boolean":return"<span "+o("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+o("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+r(t.toISOString())+'"</span>';case"null":return"<span "+o("json-markup-null")+">null</span>";case"string":return"<span "+o("json-markup-string")+'>"'+r(t.replace(/\n/g,"\n"+a))+'"</span>';case"link":return"<span "+o("json-markup-string")+'>"<a href="'+r(t)+'">'+r(t)+'</a>"</span>';case"array":return i(t,"[","]",e);case"object":var n=Object.keys(t).filter((function(e){return void 0!==t[e]}));return i(n,"{","}",(function(n){return"<span "+o("json-markup-key")+'>"'+n+'":</span> '+e(t[n])}))}return""}(e)+"</div>"}},"./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var r=n("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js");function s(){}function a(){}a.resetWarningCache=s,e.exports=function(){function e(e,t,n,s,a,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return n.PropTypes=n,n}},"./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/factoryWithThrowingShims.js")()},"./.yarn/cache/prop-types-npm-15.8.1-17c71ee7ee-c056d3f1c0.zip/node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./.yarn/cache/symbol-observable-npm-1.2.0-9e812a0a39-48ffbc22e3.zip/node_modules/symbol-observable/es/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),e=n.hmd(e);const r=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:e)},"./.yarn/cache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js":e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=9018.e65e3aa10981aa98e7a1.js.map