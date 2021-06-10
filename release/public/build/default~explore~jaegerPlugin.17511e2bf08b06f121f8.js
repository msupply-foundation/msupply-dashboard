/*! For license information please see default~explore~jaegerPlugin.17511e2bf08b06f121f8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+A2i":function(e,t){function n(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}e.exports=n,e.exports.on=n,e.exports.off=function(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}},"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),s={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,o,c,l,d=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),o=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=s[t.format]||s.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),o.selectNodeContents(l),c.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(o):c.removeAllRanges()),l&&document.body.removeChild(l),a()}return d}},"+VKv":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m35 7.5c0 1.9-1 3.4-2.5 4.3v7.3l-10 5v4.1c1.5 0.9 2.5 2.4 2.5 4.3 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.9 1-3.4 2.5-4.3v-4.1l-10-5v-7.3c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5c0 1.9-1 3.4-2.5 4.3v4.1l7.5 3.8 7.5-3.8v-4.1c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5z m-25-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m10 30c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m10-25c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"})))},e.exports=t.default},"/aea":function(e,t,n){"use strict";function r(e,t){if(!t)return null;const n=[],r=[];e.split(/\s+/).filter(Boolean).forEach(e=>{"-"===e[0]?r.push(e.substr(1).toLowerCase()):n.push(e.toLowerCase())});const s=(e,t)=>e.some(e=>t.toLowerCase().includes(e)),i=e=>!!e&&e.some(e=>!s(r,e.key)&&(s(n,e.key)||s(n,e.value.toString())));return new Set(t.filter(e=>s(n,e.operationName)||s(n,e.process.serviceName)||i(e.tags)||e.logs.some(e=>i(e.fields))||i(e.process.tags)||n.some(t=>t===e.spanID)).map(e=>e.spanID))}n.d(t,"a",(function(){return r}))},"03AE":function(e,t,n){"use strict";e.exports=function(e){e=e||{};var t,n=!1;for(t in this.sequenceLevels)e[t]?n=!0:this.sequenceLevels[t]=0;n||(this.nextExpectedAction=!1)}},"0WXz":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m35 20l-15 15v-8.7h-15v-12.5h15v-8.8z"})))},e.exports=t.default},"1Ktg":function(e,t,n){"use strict";var r=n("3LWo"),s={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function c(e){return r.isMemo(e)?a:o[e.$$typeof]||s}o[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[r.Memo]=a;var l=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,h=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,g=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(g){var s=p(n);s&&s!==g&&e(t,s,r)}var a=d(n);u&&(a=a.concat(u(n)));for(var o=c(t),f=c(n),b=0;b<a.length;++b){var m=a[b];if(!(i[m]||r&&r[m]||f&&f[m]||o&&o[m])){var v=h(n,m);try{l(t,m,v)}catch(e){}}}}return t}},"1aZc":function(e,t,n){"use strict";e.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}},"2AKD":function(e,t,n){"use strict";n("ZkAY"),n("UvYX"),n("BO54")},"2XSw":function(e,t,n){"use strict";e.exports=function(e,t,n,r,s){this.directMap[e+":"+n]=t;var i,a=(e=e.replace(/\s+/g," ")).split(" ");a.length>1?this.bindSequence(e,a,t,n):(i=this.getKeyInfo(e,n),this.callbacks[i.key]=this.callbacks[i.key]||[],this.getMatches(i.key,i.modifiers,{type:i.action},r,e,s),this.callbacks[i.key][r?"unshift":"push"]({callback:t,modifiers:i.modifiers,action:i.action,seq:r,level:s,combo:e}))}},"3LWo":function(e,t,n){"use strict";e.exports=n("cdav")},"3r5/":function(e,t,n){"use strict";e.exports=function(e,t){return this.bind(e,(function(){}),t)}},"4Z0I":function(e,t,n){"use strict";e.exports=function(){var e=n("+A2i"),t=this.element;this.eventHandler=n("lI8u").bind(this),e(t,"keypress",this.eventHandler),e(t,"keydown",this.eventHandler),e(t,"keyup",this.eventHandler)}},"4kj3":function(e,t,n){"use strict";function r(e){return e?function(t){return'style="'+(n=e["."+t],r="",n&&Object.keys(n).forEach((function(e){r+=e+":"+n[e]+";"})),r+'"');var n,r}:function(e){return'class="'+e+'"'}}function s(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}e.exports=function(e,t){var n="",i=r(t),a=function(e,t,r,s){if(!e.length)return t+" "+r;var i=t+"\n";return n+="    ",e.forEach((function(t,r){i+=n+s(t)+(r<e.length-1?",":"")+"\n"})),n=n.slice(0,-"    ".length),i+n+r};return"<div "+i("json-markup")+">"+function e(t){if(void 0===t)return"";switch(function(e){return null===e?"null":Array.isArray(e)?"array":"string"==typeof e&&/^https?:/.test(e)?"link":"object"==typeof e&&"function"==typeof e.toISOString?"date":typeof e}(t)){case"boolean":return"<span "+i("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+i("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+s(t.toISOString())+'"</span>';case"null":return"<span "+i("json-markup-null")+">null</span>";case"string":return"<span "+i("json-markup-string")+'>"'+s(t.replace(/\n/g,"\n"+n))+'"</span>';case"link":return"<span "+i("json-markup-string")+'>"<a href="'+s(t)+'">'+s(t)+'</a>"</span>';case"array":return a(t,"[","]",e);case"object":var r=Object.keys(t).filter((function(e){return void 0!==t[e]}));return a(r,"{","}",(function(n){return"<span "+i("json-markup-key")+'>"'+n+'":</span> '+e(t[n])}))}return""}(e)+"</div>"}},"50T7":function(e,t,n){"use strict";n("xpaS");var r=n("IBZi");n.d(t,"EUpdateTypes",(function(){return r.a}));var s=n("9dug");n.d(t,"default",(function(){return s.a}))},"582L":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n("q1tI");var r=n("TSYQ"),s=n.n(r),i=n("snuD"),a=n.n(i),o=n("vF1F"),c=n("XZY6"),l=n("nKUr");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const u=Object(c.d)(()=>({NewWindowIconLarge:o.css`
      label: NewWindowIconLarge;
      font-size: 1.5em;
    `}));function h(e){const{isLarge:t,className:n}=e,r=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["isLarge","className"]),i=u(),o=s()({[i.NewWindowIconLarge]:t},n);return Object(l.jsx)(a.a,d({className:o},r))}h.defaultProps={isLarge:!1}},"5sUZ":function(e,t,n){"use strict";e.exports=function(e,t){var n=this.constructor;return this.options=Object.assign({storeInstancesGlobally:!0},t||{}),this.callbacks={},this.directMap={},this.sequenceLevels={},this.resetTimer=null,this.ignoreNextKeyup=!1,this.ignoreNextKeypress=!1,this.nextExpectedAction=!1,this.element=e,this.addEvents(),this.options.storeInstancesGlobally&&n.instances.push(this),this},e.exports.prototype.bind=n("zL40"),e.exports.prototype.bindMultiple=n("Z8xD"),e.exports.prototype.unbind=n("3r5/"),e.exports.prototype.trigger=n("IGUK"),e.exports.prototype.reset=n("9V4m"),e.exports.prototype.stopCallback=n("9vlb"),e.exports.prototype.handleKey=n("hrSM"),e.exports.prototype.addEvents=n("4Z0I"),e.exports.prototype.bindSingle=n("2XSw"),e.exports.prototype.getKeyInfo=n("pdZY"),e.exports.prototype.pickBestAction=n("zQGu"),e.exports.prototype.getReverseMap=n("H5sb"),e.exports.prototype.getMatches=n("Tfl2"),e.exports.prototype.resetSequences=n("03AE"),e.exports.prototype.fireCallback=n("Dita"),e.exports.prototype.bindSequence=n("kX/o"),e.exports.prototype.resetSequenceTimer=n("9TO8"),e.exports.prototype.detach=n("Wopw"),e.exports.instances=[],e.exports.reset=n("V280"),e.exports.REVERSE_MAP=null},"5uNx":function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},"7vSn":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m23.3 20l-13.1-13.6c-0.3-0.3-0.3-0.9 0-1.2l2.4-2.4c0.3-0.3 0.9-0.4 1.2-0.1l16 16.7c0.1 0.1 0.2 0.4 0.2 0.6s-0.1 0.5-0.2 0.6l-16 16.7c-0.3 0.3-0.9 0.3-1.2 0l-2.4-2.5c-0.3-0.3-0.3-0.9 0-1.2z"})))},e.exports=t.default},"9TO8":function(e,t,n){"use strict";e.exports=function(){var e=this;clearTimeout(e.resetTimer),e.resetTimer=setTimeout((function(){e.resetSequences()}),1e3)}},"9V4m":function(e,t,n){"use strict";e.exports=function(){return this.callbacks={},this.directMap={},this}},"9dug":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("LvDl"),s=n("IBZi");class i{constructor(e){let{getBounds:t,tag:n,resetBoundsOnResize:i=!0}=e,a=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["getBounds","tag","resetBoundsOnResize"]);this._bounds=void 0,this._isDragging=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0,this._resetBoundsOnResize=void 0,this.getBounds=void 0,this.tag=void 0,this.handleMouseEnter=void 0,this.handleMouseMove=void 0,this.handleMouseLeave=void 0,this.handleMouseDown=void 0,this.resetBounds=()=>{this._bounds=void 0},this._handleMinorMouseEvent=e=>{const{button:t,clientX:n,type:r}=e;if(this._isDragging||0!==t)return;let i,a=null;if("mouseenter"===r)a=s.a.MouseEnter,i=this._onMouseEnter;else if("mouseleave"===r)a=s.a.MouseLeave,i=this._onMouseLeave;else{if("mousemove"!==r)throw new Error("invalid event type: "+r);a=s.a.MouseMove,i=this._onMouseMove}if(!i)return;const{value:o,x:c}=this._getPosition(n);i({event:e,type:a,value:o,x:c,manager:this,tag:this.tag})},this._handleDragEvent=e=>{const{button:t,clientX:n,type:i}=e;let a,o=null;if("mousedown"===i){if(this._isDragging||0!==t)return;window.addEventListener("mousemove",this._handleDragEvent),window.addEventListener("mouseup",this._handleDragEvent);const e=Object(r.get)(document,"body.style");e&&(e.userSelect="none"),this._isDragging=!0,o=s.a.DragStart,a=this._onDragStart}else if("mousemove"===i){if(!this._isDragging)return;o=s.a.DragMove,a=this._onDragMove}else{if("mouseup"!==i)throw new Error("invalid event type: "+i);if(!this._isDragging)return;this._stopDragging(),o=s.a.DragEnd,a=this._onDragEnd}if(!a)return;const{value:c,x:l}=this._getPosition(n);a({event:e,type:o,value:c,x:l,manager:this,tag:this.tag})},this.handleMouseDown=this._handleDragEvent,this.handleMouseEnter=this._handleMinorMouseEvent,this.handleMouseMove=this._handleMinorMouseEvent,this.handleMouseLeave=this._handleMinorMouseEvent,this.getBounds=t,this.tag=n,this._isDragging=!1,this._bounds=void 0,this._resetBoundsOnResize=Boolean(i),this._resetBoundsOnResize&&window.addEventListener("resize",this.resetBounds),this._onMouseEnter=a.onMouseEnter,this._onMouseLeave=a.onMouseLeave,this._onMouseMove=a.onMouseMove,this._onDragStart=a.onDragStart,this._onDragMove=a.onDragMove,this._onDragEnd=a.onDragEnd}_getBounds(){return this._bounds||(this._bounds=this.getBounds(this.tag)),this._bounds}_getPosition(e){const{clientXLeft:t,maxValue:n,minValue:r,width:s}=this._getBounds();let i=e-t,a=i/s;return null!=r&&a<r?(a=r,i=r*s):null!=n&&a>n&&(a=n,i=n*s),{value:a,x:i}}_stopDragging(){window.removeEventListener("mousemove",this._handleDragEvent),window.removeEventListener("mouseup",this._handleDragEvent);const e=Object(r.get)(document,"body.style");e&&(e.userSelect=null),this._isDragging=!1}isDragging(){return this._isDragging}dispose(){this._isDragging&&this._stopDragging(),this._resetBoundsOnResize&&window.removeEventListener("resize",this.resetBounds),this._bounds=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0}}},"9vlb":function(e,t,n){"use strict";e.exports=function(e,t){if((" "+t.className+" ").indexOf(" combokeys ")>-1)return!1;var n=t.tagName.toLowerCase();return"input"===n||"select"===n||"textarea"===n||t.isContentEditable}},AjF4:function(e,t,n){"use strict";var r=n("LvDl"),s=n("uISq"),i=n.n(s),a=n("w2pd"),o=i()(Object.defineProperty({archiveEnabled:!1,dependencies:{dagMaxNumServices:a.a,menuEnabled:!0},linkPatterns:[],menu:[{label:"About Jaeger",items:[{label:"GitHub",url:"https://github.com/uber/jaeger"},{label:"Docs",url:"http://jaeger.readthedocs.io/en/latest/"},{label:"Twitter",url:"https://twitter.com/JaegerTracing"},{label:"Discussion Group",url:"https://groups.google.com/forum/#!forum/jaeger-tracing"},{label:"Gitter.im",url:"https://gitter.im/jaegertracing/Lobby"},{label:"Blog",url:"https://medium.com/jaegertracing/"}]}],search:{maxLookback:{label:"2 Days",value:"2d"},maxLimit:1500},tracking:{gaID:null,trackErrors:!0}},"__mergeFields",{value:["dependencies","search","tracking"]}));function c(e){return Object(r.get)(o,e)}n.d(t,"a",(function(){return c}))},B3JP:function(e,t,n){"use strict";var r=n("q1tI"),s=n.n(r),i=n("vF1F"),a=n("TSYQ"),o=n.n(a),c=n("kDLi"),l=n("XZY6"),d=n("nKUr");const u=Object(l.d)(()=>({TimelineCollapser:i.css`
      align-items: center;
      display: flex;
      flex: none;
      justify-content: center;
      margin-right: 0.5rem;
    `}));function h(e){const{onExpandAll:t,onExpandOne:n,onCollapseAll:r,onCollapseOne:s}=e,i=u();return Object(d.jsxs)("div",{className:i.TimelineCollapser,"data-test-id":"TimelineCollapser",children:[Object(d.jsx)(c.IconButton,{tooltip:"Expand +1",size:"xl",tooltipPlacement:"top",name:"angle-down",onClick:n}),Object(d.jsx)(c.IconButton,{tooltip:"Collapse +1",size:"xl",tooltipPlacement:"top",name:"angle-right",onClick:s}),Object(d.jsx)(c.IconButton,{tooltip:"Expand All",size:"xl",tooltipPlacement:"top",name:"angle-double-down",onClick:t}),Object(d.jsx)(c.IconButton,{tooltip:"Collapse All",size:"xl",tooltipPlacement:"top",name:"angle-double-right",onClick:r})]})}var p=n("50T7");const g=Object(l.d)(()=>({TimelineColumnResizer:i.css`
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,wrapper:i.css`
      bottom: 0;
      position: absolute;
      top: 0;
    `,dragger:i.css`
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
    `,draggerDragging:i.css`
      background: rgba(136, 0, 136, 0.05);
      width: unset;
      &::before {
        left: -2000px;
        right: -2000px;
      }
    `,draggerDraggingLeft:i.css`
      border-left: 2px solid #808;
      border-right: 1px solid #999;
    `,draggerDraggingRight:i.css`
      border-left: 1px solid #999;
      border-right: 2px solid #808;
    `,gripIcon:i.css`
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
    `,gripIconDragging:i.css`
      &::before,
      &::after {
        border-right: 1px solid rgba(136, 0, 136, 0.5);
      }
    `}));class f extends r.PureComponent{constructor(e){super(e),this.state=void 0,this._dragManager=void 0,this._rootElm=void 0,this._setRootElm=e=>{this._rootElm=e},this._getDraggingBounds=()=>{if(!this._rootElm)throw new Error("invalid state");const{left:e,width:t}=this._rootElm.getBoundingClientRect(),{min:n,max:r}=this.props;return{clientXLeft:e,width:t,maxValue:r,minValue:n}},this._handleDragUpdate=({value:e})=>{this.setState({dragPosition:e})},this._handleDragEnd=({manager:e,value:t})=>{e.resetBounds(),this.setState({dragPosition:null}),this.props.onChange(t)},this._dragManager=new p.default({getBounds:this._getDraggingBounds,onDragEnd:this._handleDragEnd,onDragMove:this._handleDragUpdate,onDragStart:this._handleDragUpdate}),this._rootElm=void 0,this.state={dragPosition:null}}componentWillUnmount(){this._dragManager.dispose()}render(){let e,t;const{position:n,columnResizeHandleHeight:r}=this.props,{dragPosition:s}=this.state;e=100*n+"%";const i={left:e};let a=!1,c=!1;const l=g();if(this._dragManager.isDragging()&&this._rootElm&&null!=s){a=s<n,c=s>n,e=100*s+"%";t={left:100*Math.min(n,s)+"%",right:`calc(${100*(1-Math.max(n,s))}% - 1px)`}}else t=i;t.height=r;const u=a||c;return Object(d.jsxs)("div",{className:l.TimelineColumnResizer,ref:this._setRootElm,"data-test-id":"TimelineColumnResizer",children:[Object(d.jsx)("div",{className:o()(l.gripIcon,u&&l.gripIconDragging),style:i,"data-test-id":"TimelineColumnResizer--gripIcon"}),Object(d.jsx)("div",{"aria-hidden":!0,className:o()(l.dragger,u&&l.draggerDragging,c&&l.draggerDraggingRight,a&&l.draggerDraggingLeft),onMouseDown:this._dragManager.handleMouseDown,style:t,"data-test-id":"TimelineColumnResizer--dragger"})]})}}const b=Object(l.d)(()=>({TimelineViewingLayer:i.css`
      label: TimelineViewingLayer;
      bottom: 0;
      cursor: vertical-text;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,TimelineViewingLayerCursorGuide:i.css`
      label: TimelineViewingLayerCursorGuide;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: red;
    `,TimelineViewingLayerDragged:i.css`
      label: TimelineViewingLayerDragged;
      position: absolute;
      top: 0;
      bottom: 0;
    `,TimelineViewingLayerDraggedDraggingLeft:i.css`
      label: TimelineViewingLayerDraggedDraggingLeft;
      border-left: 1px solid;
    `,TimelineViewingLayerDraggedDraggingRight:i.css`
      label: TimelineViewingLayerDraggedDraggingRight;
      border-right: 1px solid;
    `,TimelineViewingLayerDraggedShiftDrag:i.css`
      label: TimelineViewingLayerDraggedShiftDrag;
      background-color: rgba(68, 68, 255, 0.2);
      border-color: #44f;
    `,TimelineViewingLayerDraggedReframeDrag:i.css`
      label: TimelineViewingLayerDraggedReframeDrag;
      background-color: rgba(255, 68, 68, 0.2);
      border-color: #f44;
    `,TimelineViewingLayerFullOverlay:i.css`
      label: TimelineViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `}));function m(e,t,n){return e+n*(t-e)}function v(e,t,n){return(n-e)/(t-e)}function j(e,t,n,r,s){const a=function(e,t){let[n,r]=e<t?[e,t]:[t,e];return n>=1||r<=0?{isOutOfView:!0}:(n<0&&(n=0),r>1&&(r=1),{isDraggingLeft:e>t,left:100*n+"%",width:100*(r-n)+"%"})}(v(e,t,n),v(e,t,r));if(function(e){return Reflect.has(e,"isOutOfView")}(a))return null;const{isDraggingLeft:o,left:c,width:l}=a,u=b(),h=Object(i.cx)({[u.TimelineViewingLayerDraggedDraggingRight]:!o,[u.TimelineViewingLayerDraggedReframeDrag]:!s,[u.TimelineViewingLayerDraggedShiftDrag]:s});return Object(d.jsx)("div",{className:Object(i.cx)(u.TimelineViewingLayerDragged,u.TimelineViewingLayerDraggedDraggingLeft,h),style:{left:c,width:l},"data-test-id":"Dragged"})}class x extends r.PureComponent{constructor(e){super(e),this._draggerReframe=void 0,this._root=void 0,this._setRoot=e=>{this._root=e},this._getDraggingBounds=()=>{if(!this._root)throw new Error("invalid state");const{left:e,width:t}=this._root.getBoundingClientRect();return{clientXLeft:e,width:t}},this._handleReframeMouseMove=({value:e})=>{const[t,n]=this.props.viewRangeTime.current,r=m(t,n,e);this.props.updateNextViewRangeTime({cursor:r})},this._handleReframeMouseLeave=()=>{this.props.updateNextViewRangeTime({cursor:void 0})},this._handleReframeDragUpdate=({value:e})=>{const{current:t,reframe:n}=this.props.viewRangeTime,[r,s]=t,i=m(r,s,e),a={reframe:{anchor:n?n.anchor:i,shift:i}};this.props.updateNextViewRangeTime(a)},this._handleReframeDragEnd=({manager:e,value:t})=>{const{current:n,reframe:r}=this.props.viewRangeTime,[s,i]=n,a=m(s,i,t),o=r?r.anchor:a,[c,l]=a<o?[a,o]:[o,a];e.resetBounds(),this.props.updateViewRangeTime(c,l,"timeline-header")},this._draggerReframe=new p.default({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseLeave:this._handleReframeMouseLeave,onMouseMove:this._handleReframeMouseMove}),this._root=void 0}UNSAFE_componentWillReceiveProps(e){const{boundsInvalidator:t}=this.props;t!==e.boundsInvalidator&&this._draggerReframe.resetBounds()}componentWillUnmount(){this._draggerReframe.dispose()}render(){const{viewRangeTime:e}=this.props,{current:t,cursor:n,reframe:r,shiftEnd:s,shiftStart:i}=e,[a,o]=t;let c;!(null!=r||null!=s||null!=i)&&null!=n&&n>=a&&n<=o&&(c=100*v(a,o,n)+"%");const l=b();return Object(d.jsxs)("div",{"aria-hidden":!0,className:l.TimelineViewingLayer,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,"data-test-id":"TimelineViewingLayer",children:[null!=c&&Object(d.jsx)("div",{className:l.TimelineViewingLayerCursorGuide,style:{left:c},"data-test-id":"TimelineViewingLayer--cursorGuide"}),null!=r&&j(a,o,r.anchor,r.shift,!1),null!=s&&j(a,o,o,s,!0),null!=i&&j(a,o,a,i,!0)]})}}var O=n("kxiF");function y(e){const{min:t,max:n,viewStart:r,viewEnd:s}=e,i=n-t,a=t+r*i,o=n-(1-s)*i-a;return(e,t)=>({start:(e-a)/o,end:(t-a)/o})}function w(e,t,n){return!(!Array.isArray(n.tags)||!n.tags.length)&&n.tags.some(n=>n.key===e&&n.value===t)}const T=w.bind(null,"span.kind","client"),k=w.bind(null,"span.kind","server"),_=w.bind(null,"error",!0),I=w.bind(null,"error","true"),S=e=>_(e)||I(e);const D=Object(l.d)(e=>({Ticks:i.css`
      label: Ticks;
      pointer-events: none;
    `,TicksTick:i.css`
      label: TicksTick;
      position: absolute;
      height: 100%;
      width: 1px;
      background: ${Object(l.c)(e,"#d8d8d8")};
      &:last-child {
        width: 0;
      }
    `,TicksTickLabel:i.css`
      label: TicksTickLabel;
      left: 0.25rem;
      position: absolute;
    `,TicksTickLabelEndAnchor:i.css`
      label: TicksTickLabelEndAnchor;
      left: initial;
      right: 0.25rem;
    `}));function E(e){const{endTime:t,numTicks:n,showLabels:r,startTime:s}=e;let i;if(r){i=[];const e=(t||0)-(s||0);for(let t=0;t<n;t++){const r=(s||0)+t/(n-1)*e;i.push(Object(O.c)(r))}}const a=D(Object(l.g)()),c=[];for(let e=0;e<n;e++){const t=e/(n-1);c.push(Object(d.jsx)("div",{className:a.TicksTick,style:{left:100*t+"%"},children:i&&Object(d.jsx)("span",{className:o()(a.TicksTickLabel,{[a.TicksTickLabelEndAnchor]:t>=1}),children:i[e]})},t))}return Object(d.jsx)("div",{className:a.Ticks,children:c})}E.defaultProps={endTime:null,showLabels:null,startTime:null};var C=n("xIog");function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}const R=Object(l.d)(()=>({flexRow:i.css`
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
    `}));function M(e){const{children:t,className:n=""}=e,r=N(e,["children","className"]),s=R();return Object(d.jsx)("div",L({className:o()(s.flexRow,n)},r,{children:t}))}function P(e){const{children:t,className:n="",width:r,style:s}=e,i=N(e,["children","className","width","style"]),a=100*r+"%",c=L({},s,{flexBasis:a,maxWidth:a});return Object(d.jsx)("div",L({className:o()(C.o,n),style:c},i,{children:t}))}M.defaultProps={className:""},P.defaultProps={className:"",style:{}},M.Cell=P;const H=Object(l.d)(e=>({TimelineHeaderRow:i.css`
      label: TimelineHeaderRow;
      background: ${Object(l.c)(e,"#ececec")};
      border-bottom: 1px solid ${Object(l.c)(e,"#ccc")};
      height: 38px;
      line-height: 38px;
      width: 100%;
      z-index: 4;
      position: relative;
    `,TimelineHeaderRowTitle:i.css`
      label: TimelineHeaderRowTitle;
      flex: 1;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,TimelineHeaderWrapper:i.css`
      label: TimelineHeaderWrapper;
      align-items: center;
    `}));function V(e){const{duration:t,nameColumnWidth:n,numTicks:r,onCollapseAll:s,onCollapseOne:i,onColummWidthChange:a,onExpandAll:c,onExpandOne:u,updateViewRangeTime:p,updateNextViewRangeTime:g,viewRangeTime:b,columnResizeHandleHeight:m}=e,[v,j]=b.current,O=H(Object(l.g)());return Object(d.jsxs)(M,{className:O.TimelineHeaderRow,"data-test-id":"TimelineHeaderRow",children:[Object(d.jsxs)(M.Cell,{className:o()(C.e,C.n,O.TimelineHeaderWrapper),width:n,children:[Object(d.jsx)("h4",{className:O.TimelineHeaderRowTitle,children:"Service & Operation"}),Object(d.jsx)(h,{onCollapseAll:s,onExpandAll:c,onCollapseOne:i,onExpandOne:u})]}),Object(d.jsxs)(M.Cell,{width:1-n,children:[Object(d.jsx)(x,{boundsInvalidator:n,updateNextViewRangeTime:g,updateViewRangeTime:p,viewRangeTime:b}),Object(d.jsx)(E,{numTicks:r,startTime:v*t,endTime:j*t,showLabels:!0})]}),Object(d.jsx)(f,{columnResizeHandleHeight:m,position:n,onChange:a,min:.2,max:.85})]})}class B{constructor(e){this.bufferLen=void 0,this.dataLen=void 0,this.heights=void 0,this.lastI=void 0,this.ys=void 0,this.ys=[],this.heights=[],this.bufferLen=e,this.dataLen=-1,this.lastI=-1}profileData(e){e!==this.dataLen&&(this.dataLen=e,this.ys.length=e,this.heights.length=e,this.lastI>=e&&(this.lastI=e-1))}calcHeights(e,t,n){null!=n&&(this.lastI=n);let r=e+this.bufferLen;if(r<=this.lastI)return;r>=this.heights.length&&(r=this.heights.length-1);let s=this.lastI;for(-1===this.lastI&&(s=0,this.ys[0]=0);s<=r;){const e=this.heights[s]=t(s);this.ys[s+1]=this.ys[s]+e,s++}this.lastI=r}calcYs(e,t){for(;(null==this.ys[this.lastI]||e>this.ys[this.lastI])&&this.lastI<this.dataLen-1;)this.calcHeights(this.lastI,t)}confirmHeight(e,t){let n=e;if(n>this.lastI)return void this.calcHeights(n,t);const r=t(n);if(r===this.heights[n])return;const s=r-this.heights[n];for(this.heights[n]=r;++n<=this.lastI;)this.ys[n]+=s;null!=this.ys[this.lastI+1]&&(this.ys[this.lastI+1]+=s)}findFloorIndex(e,t){this.calcYs(e,t);let n,r=0,s=this.lastI;if(this.ys.length<2||e<this.ys[1])return 0;if(e>this.ys[s])return s;for(;r<s;)if(n=r+.5*(s-r)|0,e>this.ys[n]){if(e<=this.ys[n+1])return n;r=n}else{if(!(e<this.ys[n]))return n;if(e>=this.ys[n-1])return n-1;s=n}throw new Error("unable to find floor index for y="+e)}getRowPosition(e,t){return this.confirmHeight(e,t),{height:this.heights[e],y:this.ys[e]}}getEstimatedHeight(){const e=this.ys[this.lastI]+this.heights[this.lastI];return this.lastI>=this.dataLen-1?0|e:e/(this.lastI+1)*this.heights.length|0}}function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const A=100;class F extends r.Component{constructor(e){super(e),this._yPositions=void 0,this._knownHeights=void 0,this._startIndexDrawn=void 0,this._endIndexDrawn=void 0,this._startIndex=void 0,this._endIndex=void 0,this._viewHeight=void 0,this._scrollTop=void 0,this._isScrolledOrResized=void 0,this._htmlTopOffset=void 0,this._windowScrollListenerAdded=void 0,this._htmlElm=void 0,this._wrapperElm=void 0,this._itemHolderElm=void 0,this.getViewHeight=()=>this._viewHeight,this.getBottomVisibleIndex=()=>{const e=this._scrollTop+this._viewHeight;return this._yPositions.findFloorIndex(e,this._getHeight)},this.getTopVisibleIndex=()=>this._yPositions.findFloorIndex(this._scrollTop,this._getHeight),this.getRowPosition=e=>this._yPositions.getRowPosition(e,this._getHeight),this._onScroll=()=>{this._isScrolledOrResized||(this._isScrolledOrResized=!0,window.requestAnimationFrame(this._positionList))},this._positionList=()=>{if(this._isScrolledOrResized=!1,!this._wrapperElm)return;this._calcViewIndexes();const e=this.props.viewBufferMin>this._startIndex?0:this._startIndex-this.props.viewBufferMin,t=this.props.viewBufferMin<this.props.dataLength-this._endIndex?this._endIndex+this.props.viewBufferMin:this.props.dataLength-1;(e<this._startIndexDrawn||t>this._endIndexDrawn)&&this.forceUpdate()},this._initWrapper=e=>{this.props.windowScroller&&(this._wrapperElm=e,e&&(this._viewHeight=e.clientHeight))},this._initItemHolder=e=>{this._itemHolderElm=e,this._scanItemHeights()},this._scanItemHeights=()=>{const e=this.props.getIndexFromKey;if(!this._itemHolderElm)return;let t=null,n=null,r=!1;const s=this._itemHolderElm.childNodes,i=s.length;for(let e=0;e<i;e++){const i=s[e],a=i.getAttribute("data-item-key");if(!a){console.warn("itemKey not found");continue}const o=(i.firstElementChild||i).clientHeight;o!==this._knownHeights.get(a)&&(this._knownHeights.set(a,o),r?n=a:(r=!0,t=n=a))}if(null!=t&&null!=n){const r=e(t),s=n===t?r:e(n);this._yPositions.calcHeights(s,this._getHeight,r),this.forceUpdate()}},this._getHeight=e=>{const t=this.props.getKeyFromIndex(e),n=this._knownHeights.get(t);return null!=n&&n==n?n:this.props.itemHeightGetter(e,t)},this._yPositions=new B(200),this._knownHeights=new Map,this._startIndexDrawn=2**20,this._endIndexDrawn=-1048576,this._startIndex=0,this._endIndex=0,this._viewHeight=-1,this._scrollTop=-1,this._isScrolledOrResized=!1,this._htmlTopOffset=-1,this._windowScrollListenerAdded=!1,this._htmlElm=document.documentElement,this._wrapperElm=void 0,this._itemHolderElm=void 0}componentDidMount(){if(this.props.windowScroller){if(this._wrapperElm){const{top:e}=this._wrapperElm.getBoundingClientRect();this._htmlTopOffset=e+this._htmlElm.scrollTop}window.addEventListener("scroll",this._onScroll),this._windowScrollListenerAdded=!0}else{var e;this._wrapperElm=this.props.scrollElement,null===(e=this._wrapperElm)||void 0===e||e.addEventListener("scroll",this._onScroll)}}componentDidUpdate(){this._itemHolderElm&&this._scanItemHeights()}componentWillUnmount(){var e;this._windowScrollListenerAdded?window.removeEventListener("scroll",this._onScroll):null===(e=this._wrapperElm)||void 0===e||e.removeEventListener("scroll",this._onScroll)}_isViewChanged(){if(!this._wrapperElm)return!1;const e=this.props.windowScroller,t=e?this._htmlElm.clientHeight:this._wrapperElm.clientHeight,n=e?this._htmlElm.scrollTop:this._wrapperElm.scrollTop;return t!==this._viewHeight||n!==this._scrollTop}_calcViewIndexes(){if(this.props.windowScroller)this._viewHeight=window.innerHeight-this._htmlTopOffset,this._scrollTop=window.scrollY;else{if(!this._wrapperElm)return this._viewHeight=-1,this._startIndex=0,void(this._endIndex=0);this._viewHeight=this._wrapperElm.clientHeight,this._scrollTop=this._wrapperElm.scrollTop}const e=this._scrollTop,t=this._scrollTop+this._viewHeight;this._startIndex=this._yPositions.findFloorIndex(e,this._getHeight),this._endIndex=this._yPositions.findFloorIndex(t,this._getHeight)}render(){const{dataLength:e,getKeyFromIndex:t,initialDraw:n=A,itemRenderer:r,viewBuffer:s,viewBufferMin:i}=this.props,a=this._getHeight,o=[];let c,l;if(this._yPositions.profileData(e),this._wrapperElm){this._isViewChanged()&&this._calcViewIndexes();const t=i>this._startIndex?0:this._startIndex-i,n=i<e-this._endIndex?this._endIndex+i:e-1;t<this._startIndexDrawn||n>this._endIndexDrawn?(c=s>this._startIndex?0:this._startIndex-s,l=this._endIndex+s,l>=e&&(l=e-1)):(c=this._startIndexDrawn,l=this._endIndexDrawn>e-1?e-1:this._endIndexDrawn)}else c=0,l=(n<e?n:e)-1;this._yPositions.calcHeights(l,a,c||-1),this._startIndexDrawn=c,this._endIndexDrawn=l,o.length=l-c+1;for(let e=c;e<=l;e++){const{y:n,height:s}=this._yPositions.getRowPosition(e,a),i={height:s,top:n,position:"absolute"},c=t(e),l={"data-item-key":c};o.push(r(c,i,e,l))}const u={style:{position:"relative"},ref:this._initWrapper};this.props.windowScroller||(u.onScroll=this._onScroll,u.style.height="100%",u.style.overflowY="auto");const h={position:"relative",height:this._yPositions.getEstimatedHeight()};return Object(d.jsx)("div",$({},u,{children:Object(d.jsx)("div",{style:h,children:Object(d.jsx)("div",{style:{position:"absolute",top:0,margin:0,padding:0},className:this.props.itemsWrapperClassName,ref:this._initItemHolder,children:o})})}))}}F.defaultProps={initialDraw:A,itemsWrapperClassName:"",windowScroller:!1};var z=n("cKlj"),W=n.n(z),G=n("0WXz"),U=n.n(G),K=n("+VKv"),q=n.n(K),Y=n("CONf"),Z=n.n(Y),X=n("582L"),J=n("PK6U");const Q=s.a.createContext(void 0);Q.displayName="ExternalLinkContext";var ee=Q;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e){const{reference:t,children:n,className:r,focusSpan:s}=e,i=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["reference","children","className","focusSpan"]);return delete i.onClick,t.span?Object(d.jsx)("a",te({role:"button",onClick:()=>s(t.spanID),className:r},i,{children:n})):Object(d.jsx)(ee.Consumer,{children:e=>{if(!e)throw new Error("ExternalLinkContext does not have a value, you probably forgot to setup it's provider");return Object(d.jsx)("a",te({href:e(t.traceID,t.spanID),target:"_blank",rel:"noopener noreferrer",className:r},i,{children:n}))}})}function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const se=Object(l.d)(()=>({MultiParent:i.css`
      padding: 0 5px;
      color: #000;
      & ~ & {
        margin-left: 5px;
      }
    `,TraceRefLink:i.css`
      display: flex;
      justify-content: space-between;
    `,NewWindowIcon:i.css`
      margin: 0.2em 0 0;
    `,tooltip:i.css`
      max-width: none;
    `}));class ie extends s.a.PureComponent{constructor(...e){super(...e),this.referencesList=e=>{const t=se();return Object(d.jsx)(J.g,{children:e.map(e=>{const{span:n,spanID:r}=e;return Object(d.jsx)(J.h,{children:Object(d.jsxs)(ne,{reference:e,focusSpan:this.props.focusSpan,className:t.TraceRefLink,children:[n?`${n.process.serviceName}:${n.operationName} - ${e.spanID}`:"(another trace) - "+e.spanID,!n&&Object(d.jsx)(X.a,{className:t.NewWindowIcon})]})},""+r)})})}}render(){const{references:e,children:t,tooltipText:n,focusSpan:r}=this.props,s=se(),i={arrowPointAtCenter:!0,mouseLeaveDelay:.5,placement:"bottom",title:n,overlayClassName:s.tooltip};if(e.length>1)return Object(d.jsx)(J.j,re({},i,{children:Object(d.jsx)(J.c,{overlay:this.referencesList(e),placement:"bottomRight",trigger:["click"],children:Object(d.jsx)("a",{className:s.MultiParent,children:t})})}));const a=e[0];return Object(d.jsx)(J.j,re({},i,{children:Object(d.jsx)(ne,{reference:a,focusSpan:r,className:s.MultiParent,children:t})}))}}var ae,oe,ce=n("LvDl"),le=n("7vSn"),de=n.n(le),ue=n("VYNe"),he=n.n(ue);function pe(e){return Object(ce.get)(Object(ce.find)(e.references,({span:e,refType:t})=>e&&e.spanID&&("CHILD_OF"===t||"FOLLOWS_FROM"===t)),"span")}function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const fe=Object(l.d)(e=>({SpanTreeOffset:i.css`
      label: SpanTreeOffset;
      color: ${Object(l.c)(e,"#000")};
      position: relative;
    `,SpanTreeOffsetParent:i.css`
      label: SpanTreeOffsetParent;
      &:hover {
        cursor: pointer;
      }
    `,indentGuide:i.css`
      label: indentGuide;
      /* The size of the indentGuide is based off of the iconWrapper */
      padding-right: calc(0.5rem + 12px);
      height: 100%;
      border-left: 3px solid transparent;
      display: inline-flex;
      &::before {
        content: '';
        padding-left: 1px;
        background-color: ${Object(l.c)(e,"lightgrey")};
      }
    `,indentGuideActive:i.css`
      label: indentGuideActive;
      border-color: ${Object(l.c)(e,"darkgrey")};
      &::before {
        background-color: transparent;
      }
    `,iconWrapper:i.css`
      label: iconWrapper;
      position: absolute;
      right: 0.25rem;
    `}));class be extends s.a.PureComponent{constructor(e){super(e),this.ancestorIds=void 0,this.handleMouseLeave=(e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&Object(ce.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.removeHoverIndentGuideId(t)},this.handleMouseEnter=(e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&Object(ce.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.addHoverIndentGuideId(t)},this.ancestorIds=function(e){const t=[];if(!e)return t;let n=pe(e);for(;n;)t.push(n.spanID),n=pe(n);return t}(e.span),this.ancestorIds.push("root"),this.ancestorIds.reverse()}render(){const{childrenVisible:e,onClick:t,showChildrenIcon:n,span:r,theme:s}=this.props,{hasChildren:i,spanID:a}=r,c=i?{onClick:t,role:"switch","aria-checked":e}:null,l=n&&i&&(e?ae||(ae=Object(d.jsx)(he.a,{})):oe||(oe=Object(d.jsx)(de.a,{}))),u=fe(s);return Object(d.jsxs)("span",ge({className:o()(u.SpanTreeOffset,{[u.SpanTreeOffsetParent]:i})},c,{children:[this.ancestorIds.map(e=>Object(d.jsx)("span",{className:o()(u.indentGuide,{[u.indentGuideActive]:this.props.hoverIndentGuideIds.has(e)}),"data-ancestor-id":e,"data-test-id":"SpanTreeOffset--indentGuide",onMouseEnter:t=>this.handleMouseEnter(t,e),onMouseLeave:t=>this.handleMouseLeave(t,e)},e)),l&&Object(d.jsx)("span",{className:u.iconWrapper,onMouseEnter:e=>this.handleMouseEnter(e,a),onMouseLeave:e=>this.handleMouseLeave(e,a),"data-test-id":"icon-wrapper",children:l})]}))}}be.displayName="UnthemedSpanTreeOffset",be.defaultProps={childrenVisible:!1,showChildrenIcon:!0};var me=Object(l.h)(be),ve=n("MnCE"),je=n("ia7v"),xe=n.n(je);var Oe=n("4kj3"),ye=n.n(Oe),we=n("+QRC"),Te=n.n(we);const ke=Object(l.d)(()=>({CopyIcon:i.css`
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
    `}));class _e extends r.PureComponent{constructor(...e){super(...e),this.state={hasCopied:!1},this.handleClick=()=>{this.setState({hasCopied:!0}),Te()(this.props.copyText)},this.handleTooltipVisibilityChange=e=>{!e&&this.state.hasCopied&&this.setState({hasCopied:!1})}}render(){const e=ke();return Object(d.jsx)(J.j,{arrowPointAtCenter:!0,mouseLeaveDelay:.5,onVisibleChange:this.handleTooltipVisibilityChange,placement:this.props.placement,title:this.state.hasCopied?"Copied":this.props.tooltipTitle,children:Object(d.jsx)(J.a,{className:o()(e.CopyIcon,this.props.className),htmlType:"button",icon:this.props.icon,onClick:this.handleClick})})}}_e.defaultProps={className:void 0,icon:"copy",placement:"left"};const Ie=Object(l.d)(e=>({KeyValueTable:i.css`
      label: KeyValueTable;
      background: ${Object(l.c)(e,"#fff")};
      border: 1px solid ${Object(l.c)(e,"#ddd")};
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,body:i.css`
      label: body;
      vertical-align: baseline;
    `,row:i.css`
      label: row;
      & > td {
        padding: 0.25rem 0.5rem;
        padding: 0.25rem 0.5rem;
        vertical-align: top;
      }
      &:nth-child(2n) > td {
        background: ${Object(l.c)(e,"#f5f5f5")};
      }
      &:not(:hover) .${"copyIcon"} {
        display: none;
      }
    `,keyColumn:i.css`
      label: keyColumn;
      color: ${Object(l.c)(e,"#888")};
      white-space: pre;
      width: 125px;
    `,copyColumn:i.css`
      label: copyColumn;
      text-align: right;
    `,linkIcon:i.css`
      label: linkIcon;
      vertical-align: middle;
      font-weight: bold;
    `})),Se=/^(\[|\{)/;function De(e){if("string"==typeof e&&Se.test(e))try{return JSON.parse(e)}catch(e){}return e}const Ee=e=>{const t=Ie(Object(l.g)());return Object(d.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[e.children," ",Object(d.jsx)(J.d,{className:t.linkIcon,type:"export"})]})};Ee.defaultProps={title:""};const Ce=e=>Object(d.jsx)(J.g,{children:e.map(({text:e,url:t},n)=>Object(d.jsx)(J.h,{children:Object(d.jsx)(Ee,{href:t,children:e})},`${t}-${n}`))});function Le(e){const{data:t,linksGetter:n}=e,r=Ie(Object(l.g)());return Object(d.jsx)("div",{className:o()(r.KeyValueTable),"data-test-id":"KeyValueTable",children:Object(d.jsx)("table",{className:C.d,children:Object(d.jsx)("tbody",{className:r.body,children:t.map((e,s)=>{const i={__html:ye()(De(e.value))},a=Object(d.jsx)("div",{className:C.g,dangerouslySetInnerHTML:i}),o=n?n(t,s):null;let c;return c=o&&1===o.length?Object(d.jsx)("div",{children:Object(d.jsx)(Ee,{href:o[0].url,title:o[0].text,children:a})}):o&&o.length>1?Object(d.jsx)("div",{children:Object(d.jsx)(J.c,{overlay:Ce(o),placement:"bottomRight",trigger:["click"],children:Object(d.jsxs)("a",{children:[a," ",Object(d.jsx)(J.d,{className:r.linkIcon,type:"profile"})]})})}):a,Object(d.jsxs)("tr",{className:r.row,children:[Object(d.jsx)("td",{className:r.keyColumn,"data-test-id":"KeyValueTable--keyColumn",children:e.key}),Object(d.jsx)("td",{children:c}),Object(d.jsx)("td",{className:r.copyColumn,children:Object(d.jsx)(_e,{className:"copyIcon",copyText:JSON.stringify(e,null,2),tooltipTitle:"Copy JSON"})})]},`${e.key}-${s}`)})})})})}function Ne(){return(Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Re=Object(l.d)(e=>({header:i.css`
      label: header;
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${Object(l.c)(e,"#e8e8e8")};
      }
    `,headerEmpty:i.css`
      label: headerEmpty;
      background: none;
      cursor: initial;
    `,headerHighContrast:i.css`
      label: headerHighContrast;
      &:hover {
        background: ${Object(l.c)(e,"#ddd")};
      }
    `,emptyIcon:i.css`
      label: emptyIcon;
      color: ${Object(l.c)(e,"#aaa")};
    `,summary:i.css`
      label: summary;
      display: inline;
      list-style: none;
      padding: 0;
    `,summaryItem:i.css`
      label: summaryItem;
      display: inline;
      margin-left: 0.7em;
      padding-right: 0.5rem;
      border-right: 1px solid ${Object(l.c)(e,"#ddd")};
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `,summaryLabel:i.css`
      label: summaryLabel;
      color: ${Object(l.c)(e,"#777")};
    `,summaryDelim:i.css`
      label: summaryDelim;
      color: ${Object(l.c)(e,"#bbb")};
      padding: 0 0.2em;
    `}));function Me(e){const{data:t}=e,n=Re(Object(l.g)());return Array.isArray(t)&&t.length?Object(d.jsx)("ul",{className:n.summary,children:t.map((e,t)=>Object(d.jsxs)("li",{className:n.summaryItem,children:[Object(d.jsx)("span",{className:n.summaryLabel,children:e.key}),Object(d.jsx)("span",{className:n.summaryDelim,children:"="}),String(e.value)]},`${e.key}-${t}`))}):null}function Pe(e){const{className:t,data:n,highContrast:r,interactive:s,isOpen:i,label:a,linksGetter:c,onToggle:u}=e,h=!Array.isArray(n)||!n.length,p=Re(Object(l.g)()),g=o()(C.a,{[p.emptyIcon]:h});let f=null,b=null;return s&&(f=i?Object(d.jsx)(he.a,{className:g}):Object(d.jsx)(xe.a,{className:g}),b={"aria-checked":i,onClick:h?null:u,role:"switch"}),Object(d.jsxs)("div",{className:o()(t,C.b),children:[Object(d.jsxs)("div",Ne({className:o()(p.header,{[p.headerEmpty]:h,[p.headerHighContrast]:r&&!h})},b,{"data-test-id":"AccordianKeyValues--header",children:[f,Object(d.jsxs)("strong",{"data-test":"label",children:[a,i||":"]}),!i&&Object(d.jsx)(Me,{data:n})]})),i&&Object(d.jsx)(Le,{data:n,linksGetter:c})]})}var He,Ve,Be;function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}Me.defaultProps={data:null},Pe.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const Ae=Object(l.d)(e=>({AccordianLogs:i.css`
      label: AccordianLogs;
      border: 1px solid ${Object(l.c)(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianLogsHeader:i.css`
      label: AccordianLogsHeader;
      background: ${Object(l.c)(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${Object(l.c)(e,"#dadada")};
      }
    `,AccordianLogsContent:i.css`
      label: AccordianLogsContent;
      background: ${Object(l.c)(e,"#f0f0f0")};
      border-top: 1px solid ${Object(l.c)(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianLogsFooter:i.css`
      label: AccordianLogsFooter;
      color: ${Object(l.c)(e,"#999")};
    `}));function Fe(e){const{interactive:t,isOpen:n,linksGetter:r,logs:s,openedItems:i,onItemToggle:a,onToggle:o,timestamp:c}=e;let u=null,h="span",p=null;t&&(u=n?He||(He=Object(d.jsx)(he.a,{className:C.a})):Ve||(Ve=Object(d.jsx)(xe.a,{className:"u-align-icon"})),h="a",p={"aria-checked":n,onClick:o,role:"switch"});const g=Ae(Object(l.g)());return Object(d.jsxs)("div",{className:g.AccordianLogs,children:[Object(d.jsxs)(h,$e({className:g.AccordianLogsHeader},p,{children:[u," ",Be||(Be=Object(d.jsx)("strong",{children:"Logs"}))," (",s.length,")"]})),n&&Object(d.jsxs)("div",{className:g.AccordianLogsContent,children:[Object(ce.sortBy)(s,"timestamp").map((e,n)=>Object(d.jsx)(Pe,{className:n<s.length-1?C.k:null,data:e.fields||[],highContrast:!0,interactive:t,isOpen:!!i&&i.has(e),label:""+Object(O.c)(e.timestamp-c),linksGetter:r,onToggle:t&&a?()=>a(e):null},`${e.timestamp}-${n}`)),Object(d.jsx)("small",{className:g.AccordianLogsFooter,children:"Log timestamps are relative to the start time of the full trace."})]})]})}Fe.defaultProps={interactive:!0,linksGetter:void 0,onItemToggle:void 0,onToggle:void 0,openedItems:void 0};const ze=Object(l.d)(e=>({wrapper:i.css`
      label: wrapper;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    `,bar:i.css`
      label: bar;
      border-radius: 3px;
      min-width: 2px;
      position: absolute;
      height: 36%;
      top: 32%;
    `,rpc:i.css`
      label: rpc;
      position: absolute;
      top: 35%;
      bottom: 35%;
      z-index: 1;
    `,label:i.css`
      label: label;
      color: #aaa;
      font-size: 12px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1em;
      white-space: nowrap;
      padding: 0 0.5em;
      position: absolute;
    `,logMarker:i.css`
      label: logMarker;
      background-color: ${Object(l.c)(e,"#2c3235")};
      cursor: pointer;
      height: 60%;
      min-width: 1px;
      position: absolute;
      top: 20%;
      &:hover {
        background-color: ${Object(l.c)(e,"#464c54")};
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
    `}));function We(e){return(100*e).toFixed(1)+"%"}var Ge,Ue,Ke,qe=Object(ve.a)(Object(ve.d)("label","setLabel",e=>e.shortLabel),Object(ve.c)(({setLabel:e,shortLabel:t,longLabel:n})=>({setLongLabel:()=>e(n),setShortLabel:()=>e(t)})),Object(ve.b)(["label","rpc","viewStart","viewEnd"]))((function(e){const{viewEnd:t,viewStart:n,getViewedBounds:r,color:s,label:i,onClick:a,setLongLabel:c,setShortLabel:l,rpc:u,traceStartTime:h,span:p,theme:g,className:f,labelClassName:b}=e,m=Object(ce.groupBy)(p.logs,e=>{const t=r(e.timestamp,e.timestamp).start;return We(Math.round(500*t)/500)}),v=ze(g);return Object(d.jsxs)("div",{className:o()(v.wrapper,f),onClick:a,onMouseLeave:l,onMouseOver:c,"aria-hidden":!0,"data-test-id":"SpanBar--wrapper",children:[Object(d.jsx)("div",{"aria-label":i,className:v.bar,style:{background:s,left:We(n),width:We(t-n)},children:Object(d.jsx)("div",{className:o()(v.label,b),"data-test-id":"SpanBar--label",children:i})}),Object(d.jsx)("div",{children:Object.keys(m).map(e=>Object(d.jsx)(J.i,{placement:"topLeft",content:Object(d.jsx)(Fe,{interactive:!1,isOpen:!0,logs:m[e],timestamp:h}),children:Object(d.jsx)("div",{className:v.logMarker,style:{left:e}})},e))}),u&&Object(d.jsx)("div",{className:v.rpc,style:{background:u.color,left:We(u.viewStart),width:We(u.viewEnd-u.viewStart)}})]})}));const Ye=Object(l.d)(e=>({nameWrapper:i.css`
      label: nameWrapper;
      line-height: 27px;
      overflow: hidden;
      display: flex;
    `,nameWrapperMatchingFilter:i.css`
      label: nameWrapperMatchingFilter;
      background-color: ${Object(l.c)(e,"#fffce4")};
    `,nameColumn:i.css`
      label: nameColumn;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:hover {
        z-index: 1;
      }
    `,endpointName:i.css`
      label: endpointName;
      color: ${Object(l.c)(e,"#808080")};
    `,view:i.css`
      label: view;
      position: relative;
    `,viewExpanded:i.css`
      label: viewExpanded;
      background: ${Object(l.c)(e,"#f8f8f8")};
      outline: 1px solid ${Object(l.c)(e,"#ddd")};
    `,viewExpandedAndMatchingFilter:i.css`
      label: viewExpandedAndMatchingFilter;
      background: ${Object(l.c)(e,"#fff3d7")};
      outline: 1px solid ${Object(l.c)(e,"#ddd")};
    `,row:i.css`
      label: row;
      &:hover .${"spanBar"} {
        opacity: 1;
      }
      &:hover .${"spanBarLabel"} {
        color: ${Object(l.c)(e,"#000")};
      }
      &:hover .${"nameWrapper"} {
        background: #f8f8f8;
        background: linear-gradient(
          90deg,
          ${Object(l.c)(e,"#fafafa")},
          ${Object(l.c)(e,"#f8f8f8")} 75%,
          ${Object(l.c)(e,"#eee")}
        );
      }
      &:hover .${"jaegerView"} {
        background-color: ${Object(l.c)(e,"#f5f5f5")};
        outline: 1px solid ${Object(l.c)(e,"#ddd")};
      }
    `,rowClippingLeft:i.css`
      label: rowClippingLeft;
      & .${"nameColumn"}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to right,
          ${Object(l.c)(e,"rgba(25, 25, 25, 0.25)")},
          ${Object(l.c)(e,"rgba(32, 32, 32, 0)")}
        );
        left: 100%;
        z-index: -1;
      }
    `,rowClippingRight:i.css`
      label: rowClippingRight;
      & .${"jaegerView"}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to left,
          ${Object(l.c)(e,"rgba(25, 25, 25, 0.25)")},
          ${Object(l.c)(e,"rgba(25, 25, 25, 0.25)")}
        );
        right: 0%;
        z-index: 1;
      }
    `,rowExpanded:i.css`
      label: rowExpanded;
      & .${"spanBar"} {
        opacity: 1;
      }
      & .${"spanBarLabel"} {
        color: ${Object(l.c)(e,"#000")};
      }
      & .${"nameWrapper"}, &:hover .${"nameWrapper"} {
        background: ${Object(l.c)(e,"#f0f0f0")};
        box-shadow: 0 1px 0 ${Object(l.c)(e,"#ddd")};
      }
      & .${"nameWrapperMatchingFilter"} {
        background: ${Object(l.c)(e,"#fff3d7")};
      }
      &:hover .${"jaegerView"} {
        background: ${Object(l.c)(e,"#eee")};
      }
    `,rowMatchingFilter:i.css`
      label: rowMatchingFilter;
      background-color: ${Object(l.c)(e,"#fffce4")};
      &:hover .${"nameWrapper"} {
        background: linear-gradient(
          90deg,
          ${Object(l.c)(e,"#fff5e1")},
          ${Object(l.c)(e,"#fff5e1")} 75%,
          ${Object(l.c)(e,"#ffe6c9")}
        );
      }
      &:hover .${"jaegerView"} {
        background-color: ${Object(l.c)(e,"#fff3d7")};
        outline: 1px solid ${Object(l.c)(e,"#ddd")};
      }
    `,rowExpandedAndMatchingFilter:i.css`
      label: rowExpandedAndMatchingFilter;
      &:hover .${"jaegerView"} {
        background: ${Object(l.c)(e,"#ffeccf")};
      }
    `,name:i.css`
      label: name;
      color: ${Object(l.c)(e,"#000")};
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
        color: ${Object(l.c)(e,"#000")};
      }
    `,nameDetailExpanded:i.css`
      label: nameDetailExpanded;
      &::before {
        bottom: 0;
      }
    `,svcName:i.css`
      label: svcName;
      padding: 0 0.25rem 0 0.5rem;
      font-size: 1.05em;
    `,svcNameChildrenCollapsed:i.css`
      label: svcNameChildrenCollapsed;
      font-weight: bold;
      font-style: italic;
    `,errorIcon:i.css`
      label: errorIcon;
      border-radius: 6.5px;
      color: ${Object(l.c)(e,"#fff")};
      font-size: 0.85em;
      margin-right: 0.25rem;
      padding: 1px;
    `,rpcColorMarker:i.css`
      label: rpcColorMarker;
      border-radius: 6.5px;
      display: inline-block;
      font-size: 0.85em;
      height: 1em;
      margin-right: 0.25rem;
      padding: 1px;
      width: 1em;
      vertical-align: middle;
    `,labelRight:i.css`
      label: labelRight;
      left: 100%;
    `,labelLeft:i.css`
      label: labelLeft;
      right: 100%;
    `}));class Ze extends r.PureComponent{constructor(...e){super(...e),this._detailToggle=()=>{this.props.onDetailToggled(this.props.span.spanID)},this._childrenToggle=()=>{this.props.onChildrenToggled(this.props.span.spanID)}}render(){const{className:e,color:t,columnDivision:n,isChildrenExpanded:r,isDetailExpanded:s,isMatchingFilter:i,numTicks:a,rpc:c,showErrorIcon:u,getViewedBounds:h,traceStartTime:p,span:g,focusSpan:f,hoverIndentGuideIds:b,addHoverIndentGuideId:m,removeHoverIndentGuideId:v,clippingLeft:j,clippingRight:x,theme:y,createSpanLink:w}=this.props,{duration:T,hasChildren:k,operationName:_,process:{serviceName:I}}=g,S=Object(O.c)(T),D=h(g.startTime,g.startTime+g.duration),C=D.start,L=D.end,N=Ye(y),R=`${I}::${_}`;let P,H;return C>1-L?(P=`${R} | ${S}`,H=N.labelLeft):(P=`${S} | ${R}`,H=N.labelRight),Object(d.jsxs)(M,{className:o()(N.row,{[N.rowExpanded]:s,[N.rowMatchingFilter]:i,[N.rowExpandedAndMatchingFilter]:i&&s,[N.rowClippingLeft]:j,[N.rowClippingRight]:x},e),children:[Object(d.jsx)(M.Cell,{className:o()(N.nameColumn,"nameColumn"),width:n,children:Object(d.jsxs)("div",{className:o()(N.nameWrapper,"nameWrapper",{[N.nameWrapperMatchingFilter]:i,nameWrapperMatchingFilter:i}),children:[Object(d.jsx)(me,{childrenVisible:r,span:g,onClick:k?this._childrenToggle:void 0,hoverIndentGuideIds:b,addHoverIndentGuideId:m,removeHoverIndentGuideId:v}),Object(d.jsxs)("a",{className:o()(N.name,{[N.nameDetailExpanded]:s}),"aria-checked":s,title:R,onClick:this._detailToggle,role:"switch",style:{borderColor:t},tabIndex:0,children:[Object(d.jsxs)("span",{className:o()(N.svcName,{[N.svcNameChildrenCollapsed]:k&&!r}),children:[u&&Object(d.jsx)(W.a,{style:{backgroundColor:g.errorIconColor?Object(l.c)(y,g.errorIconColor):Object(l.c)(y,"#db2828")},className:N.errorIcon}),I," ",c&&Object(d.jsxs)("span",{children:[Ge||(Ge=Object(d.jsx)(U.a,{}))," ",Object(d.jsx)("i",{className:N.rpcColorMarker,style:{background:c.color}}),c.serviceName]})]}),Object(d.jsx)("small",{className:N.endpointName,children:c?c.operationName:_})]}),w&&(()=>{const e=w(g);return Object(d.jsx)("a",{href:e.href,target:"_blank",style:{marginRight:"5px"},rel:"noopener noreferrer",onClick:e.onClick?t=>{t.ctrlKey||t.metaKey||t.shiftKey||!e.onClick||(t.preventDefault(),e.onClick(t))}:void 0,children:e.content})})(),g.references&&g.references.length>1&&Object(d.jsx)(ie,{references:g.references,tooltipText:"Contains multiple references",focusSpan:f,children:Ue||(Ue=Object(d.jsx)(q.a,{}))}),g.subsidiarilyReferencedBy&&g.subsidiarilyReferencedBy.length>0&&Object(d.jsx)(ie,{references:g.subsidiarilyReferencedBy,tooltipText:"This span is referenced by "+(1===g.subsidiarilyReferencedBy.length?"another span":"multiple other spans"),focusSpan:f,children:Ke||(Ke=Object(d.jsx)(Z.a,{}))})]})}),Object(d.jsxs)(M.Cell,{className:o()(N.view,"jaegerView",{[N.viewExpanded]:s,[N.viewExpandedAndMatchingFilter]:i&&s}),"data-test-id":"span-view",style:{cursor:"pointer"},width:1-n,onClick:this._detailToggle,children:[Object(d.jsx)(E,{numTicks:a}),Object(d.jsx)(qe,{rpc:c,viewStart:C,viewEnd:L,theme:y,getViewedBounds:h,color:t,shortLabel:S,longLabel:P,traceStartTime:p,span:g,labelClassName:"spanBarLabel "+H,className:"spanBar"})]})]})}}Ze.displayName="UnthemedSpanBarRow",Ze.defaultProps={className:"",rpc:null};var Xe=Object(l.h)(Ze);const Je=Object(l.d)(()=>({TextList:i.css`
      max-height: 450px;
      overflow: auto;
    `,List:i.css`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    `,item:i.css`
      padding: 0.25rem 0.5rem;
      vertical-align: top;
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `}));function Qe(e){const{data:t}=e,n=Je();return Object(d.jsx)("div",{className:o()(n.TextList),"data-test-id":"TextList",children:Object(d.jsx)("ul",{className:n.List,children:t.map((e,t)=>Object(d.jsx)("li",{className:n.item,children:e},""+t))})})}function et(){return(et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const tt=Object(l.d)(e=>({header:i.css`
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${Object(l.c)(e,"#e8e8e8")};
      }
    `}));function nt({data:e}){return Object(d.jsx)(Qe,{data:e})}function rt(e){const{className:t,data:n,headerClassName:r,interactive:s,isOpen:i,label:a,onToggle:c,TextComponent:u=nt}=e,h=!Array.isArray(n)||!n.length,p=Re(Object(l.g)()),g=o()(C.a,{[p.emptyIcon]:h});let f=null,b=null;s&&(f=i?Object(d.jsx)(he.a,{className:g}):Object(d.jsx)(xe.a,{className:g}),b={"aria-checked":i,onClick:h?null:c,role:"switch"});const m=tt(Object(l.g)());return Object(d.jsxs)("div",{className:t||"",children:[Object(d.jsxs)("div",et({className:o()(m.header,r)},b,{"data-test-id":"AccordianText--header",children:[f,Object(d.jsx)("strong",{children:a})," (",n.length,")"]})),i&&Object(d.jsx)(u,{data:n})]})}rt.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};var st,it,at=n("HamY");function ot(){return(ot=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const ct=Object(l.d)(()=>({ReferencesList:i.css`
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,list:i.css`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      background: #fff;
    `,itemContent:i.css`
      padding: 0.25rem 0.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `,item:i.css`
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `,debugInfo:i.css`
      letter-spacing: 0.25px;
      margin: 0.5em 0 0;
    `,debugLabel:i.css`
      margin: 0 5px 0 5px;
      &::before {
        color: #bbb;
        content: attr(data-label);
      }
    `}));function lt(e){const{data:t,focusSpan:n}=e,r=ct();return Object(d.jsx)("div",{className:o()(r.ReferencesList),children:Object(d.jsx)("ul",{className:r.list,children:t.map(e=>Object(d.jsx)("li",{className:r.item,children:Object(d.jsx)(ne,{reference:e,focusSpan:n,children:Object(d.jsxs)("span",{className:r.itemContent,children:[e.span?Object(d.jsxs)("span",{children:[Object(d.jsx)("span",{className:"span-svc-name",children:e.span.process.serviceName}),Object(d.jsx)("small",{className:"endpoint-name",children:e.span.operationName})]}):st||(st=Object(d.jsx)("span",{className:"span-svc-name",children:"< span in another trace >"})),Object(d.jsxs)("small",{className:r.debugInfo,children:[Object(d.jsx)("span",{className:r.debugLabel,"data-label":"Reference Type:",children:e.refType}),Object(d.jsx)("span",{className:r.debugLabel,"data-label":"SpanID:",children:e.spanID})]})]})})},""+e.spanID))})})}class dt extends r.PureComponent{render(){const{data:e,interactive:t,isOpen:n,onToggle:r,focusSpan:s}=this.props,i=!Array.isArray(e)||!e.length,a=C.a;let o=null,c=null;return t&&(o=n?Object(d.jsx)(he.a,{className:a}):Object(d.jsx)(xe.a,{className:a}),c={"aria-checked":n,onClick:i?null:r,role:"switch"}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",ot({},c,{children:[o,it||(it=Object(d.jsx)("strong",{children:Object(d.jsx)("span",{children:"References"})}))," ","(",e.length,")"]})),n&&Object(d.jsx)(lt,{data:e,focusSpan:s})]})}}function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}dt.defaultProps={highContrast:!1,interactive:!0,onToggle:null};const ht=Object(l.d)(e=>({divider:i.css`
      label: divider;
      background: ${Object(l.c)(e,"#ddd")};
    `,dividerVertical:i.css`
      label: dividerVertical;
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      clear: both;
      vertical-align: middle;
      position: relative;
      top: -0.06em;
    `,debugInfo:i.css`
      label: debugInfo;
      display: block;
      letter-spacing: 0.25px;
      margin: 0.5em 0 -0.75em;
      text-align: right;
    `,debugLabel:i.css`
      label: debugLabel;
      &::before {
        color: ${Object(l.c)(e,"#bbb")};
        content: attr(data-label);
      }
    `,debugValue:i.css`
      label: debugValue;
      background-color: inherit;
      border: none;
      color: ${Object(l.c)(e,"#888")};
      cursor: pointer;
      &:hover {
        color: ${Object(l.c)(e,"#333")};
      }
    `,AccordianWarnings:i.css`
      label: AccordianWarnings;
      background: ${Object(l.c)(e,"#fafafa")};
      border: 1px solid ${Object(l.c)(e,"#e4e4e4")};
      margin-bottom: 0.25rem;
    `,AccordianWarningsHeader:i.css`
      label: AccordianWarningsHeader;
      background: ${Object(l.c)(e,"#fff7e6")};
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${Object(l.c)(e,"#ffe7ba")};
      }
    `,AccordianWarningsHeaderOpen:i.css`
      label: AccordianWarningsHeaderOpen;
      border-bottom: 1px solid ${Object(l.c)(e,"#e8e8e8")};
    `,AccordianWarningsLabel:i.css`
      label: AccordianWarningsLabel;
      color: ${Object(l.c)(e,"#d36c08")};
    `,Textarea:i.css`
      word-break: break-all;
      white-space: pre;
    `}));function pt(e){const{detailState:t,linksGetter:n,logItemToggle:r,logsToggle:s,processToggle:i,span:a,tagsToggle:u,traceStartTime:h,warningsToggle:p,stackTracesToggle:g,referencesToggle:f,focusSpan:b,createSpanLink:m}=e,{isTagsOpen:v,isProcessOpen:j,logs:x,isWarningsOpen:y,isReferencesOpen:w,isStackTracesOpen:T}=t,{operationName:k,process:_,duration:I,relativeStartTime:S,spanID:D,logs:E,tags:L,warnings:N,references:R,stackTraces:M}=a,P=[{key:"svc",label:"Service:",value:_.serviceName},{key:"duration",label:"Duration:",value:Object(O.c)(I)},{key:"start",label:"Start Time:",value:Object(O.c)(S)}],H=`${window.location.origin}${window.location.pathname}?uiFind=${D}`,V=ht(Object(l.g)()),B=null==m?void 0:m(a);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:o()(C.e,C.h,C.k),children:[Object(d.jsx)("h2",{className:o()(C.f,C.j),children:k}),Object(d.jsx)(at.a,{className:C.p,dividerClassName:V.divider,items:P})]}),B?Object(d.jsx)(c.DataLinkButton,{link:ut({},B,{title:"Logs for this span"}),buttonProps:{icon:"gf-logs"}}):null,Object(d.jsx)(J.b,{className:o()(V.divider,V.dividerVertical,C.l)}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(Pe,{data:L,label:"Tags",linksGetter:n,isOpen:v,onToggle:()=>u(D)}),_.tags&&Object(d.jsx)(Pe,{className:C.k,data:_.tags,label:"Process",linksGetter:n,isOpen:j,onToggle:()=>i(D)})]}),E&&E.length>0&&Object(d.jsx)(Fe,{linksGetter:n,logs:E,isOpen:x.isOpen,openedItems:x.openedItems,onToggle:()=>s(D),onItemToggle:e=>r(D,e),timestamp:h}),N&&N.length>0&&Object(d.jsx)(rt,{className:V.AccordianWarnings,headerClassName:V.AccordianWarningsHeader,label:Object(d.jsx)("span",{className:V.AccordianWarningsLabel,children:"Warnings"}),data:N,isOpen:y,onToggle:()=>p(D)}),M&&M.length&&Object(d.jsx)(rt,{label:"Stack trace",data:M,isOpen:T,TextComponent:e=>{var t;let n;var r;(null===(t=e.data)||void 0===t?void 0:t.length)>1?n=e.data.map((e,t)=>`StackTrace ${t+1}:\n${e}`).join("\n"):n=null===(r=e.data)||void 0===r?void 0:r[0];return Object(d.jsx)(c.TextArea,{className:V.Textarea,style:{cursor:"unset"},readOnly:!0,cols:10,rows:10,value:n})},onToggle:()=>g(D)}),R&&R.length>1&&Object(d.jsx)(dt,{data:R,isOpen:w,onToggle:()=>f(D),focusSpan:b}),Object(d.jsxs)("small",{className:V.debugInfo,children:[Object(d.jsx)("span",{className:V.debugLabel,"data-label":"SpanID:"})," ",D,Object(d.jsx)(_e,{copyText:H,icon:"link",placement:"topRight",tooltipTitle:"Copy deep link to this span"})]})]})]})}const gt=Object(l.d)(e=>({expandedAccent:i.css`
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
    `,infoWrapper:i.css`
      label: infoWrapper;
      border: 1px solid ${Object(l.c)(e,"#d3d3d3")};
      border-top: 3px solid;
      padding: 0.75rem;
    `}));class ft extends s.a.PureComponent{constructor(...e){super(...e),this._detailToggle=()=>{this.props.onDetailToggled(this.props.span.spanID)},this._linksGetter=(e,t)=>{const{linksGetter:n,span:r}=this.props;return n(r,e,t)}}render(){const{color:e,columnDivision:t,detailState:n,logItemToggle:r,logsToggle:s,processToggle:i,referencesToggle:a,warningsToggle:o,stackTracesToggle:c,span:l,tagsToggle:u,traceStartTime:h,focusSpan:p,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,theme:m,createSpanLink:v}=this.props,j=gt(m);return Object(d.jsxs)(M,{children:[Object(d.jsxs)(M.Cell,{width:t,style:{overflow:"hidden"},children:[Object(d.jsx)(me,{span:l,showChildrenIcon:!1,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b}),Object(d.jsx)("span",{children:Object(d.jsx)("span",{className:j.expandedAccent,"aria-checked":"true",onClick:this._detailToggle,role:"switch",style:{borderColor:e},"data-test-id":"detail-row-expanded-accent"})})]}),Object(d.jsx)(M.Cell,{width:1-t,children:Object(d.jsx)("div",{className:j.infoWrapper,style:{borderTopColor:e},children:Object(d.jsx)(pt,{detailState:n,linksGetter:this._linksGetter,logItemToggle:r,logsToggle:s,processToggle:i,referencesToggle:a,warningsToggle:o,stackTracesToggle:c,span:l,tagsToggle:u,traceStartTime:h,focusSpan:p,createSpanLink:v})})})]})}}var bt=Object(l.h)(ft),mt=n("SScd");function vt(){return(vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const jt=Object(l.d)(()=>({rowsWrapper:i.css`
      width: 100%;
    `,row:i.css`
      width: 100%;
    `})),xt=28,Ot=161,yt=197;function wt(e,t,n){if(!e)return[];let r=null;const s=[];for(let i=0;i<e.length;i++){const a=e[i],{spanID:o,depth:c}=a;let l=!1;null!=r&&(c>=r?l=!0:r=null),l||(t.has(o)&&(r=c+1),s.push({span:a,isDetail:!1,spanIndex:i}),n.has(o)&&s.push({span:a,isDetail:!0,spanIndex:i}))}return s}function Tt(e){const[t,n]=e;return{left:t>0,right:n<1}}class kt extends r.Component{constructor(e){super(e),this.clipping=void 0,this.listView=void 0,this.rowStates=void 0,this.getViewedBounds=void 0,this.getViewRange=()=>this.props.currentViewRangeTime,this.getSearchedSpanIDs=()=>this.props.findMatchesIDs,this.getCollapsedChildren=()=>this.props.childrenHiddenIDs,this.mapRowIndexToSpanIndex=e=>this.rowStates[e].spanIndex,this.mapSpanIndexToRowIndex=e=>{const t=this.rowStates.length;for(let n=0;n<t;n++){const{spanIndex:t}=this.rowStates[n];if(t===e)return n}throw new Error("unable to find row for span index: "+e)},this.setListView=e=>{const t=this.listView!==e;this.listView=e,e&&t&&this.props.registerAccessors(this.getAccessors())},this.getKeyFromIndex=e=>{const{isDetail:t,span:n}=this.rowStates[e];return`${n.spanID}--${t?"detail":"bar"}`},this.getIndexFromKey=e=>{const t=e.split("--"),n=t[0],r="detail"===t[1],s=this.rowStates.length;for(let e=0;e<s;e++){const{span:t,isDetail:s}=this.rowStates[e];if(t.spanID===n&&s===r)return e}return-1},this.getRowHeight=e=>{const{span:t,isDetail:n}=this.rowStates[e];return n?Array.isArray(t.logs)&&t.logs.length?yt:Ot:xt},this.renderRow=(e,t,n,r)=>{const{isDetail:s,span:i,spanIndex:a}=this.rowStates[n];return s?this.renderSpanDetailRow(i,e,t,r):this.renderSpanBarRow(i,a,e,t,r)};const{currentViewRangeTime:t,childrenHiddenIDs:n,detailStates:r,setTrace:s,trace:i,uiFind:a}=e;this.clipping=Tt(t);const[o,c]=t;this.getViewedBounds=y({min:i.startTime,max:i.endTime,viewStart:o,viewEnd:c}),this.rowStates=wt(i.spans,n,r),s(i,a)}shouldComponentUpdate(e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)if(e[t[n]]!==this.props[t[n]]){if("shouldScrollToFirstUiFindMatch"!==t[n])return!0;if(e[t[n]])return!0}return!1}UNSAFE_componentWillUpdate(e){const{childrenHiddenIDs:t,detailStates:n,registerAccessors:r,trace:s,currentViewRangeTime:i}=this.props,{currentViewRangeTime:a,childrenHiddenIDs:o,detailStates:c,registerAccessors:l,setTrace:d,trace:u,uiFind:h}=e;if(s!==u&&d(u,h),s===u&&t===o&&n===c||(this.rowStates=u?wt(u.spans,o,c):[]),i!==a||s!==u&&u){this.clipping=Tt(a);const[e,t]=a;this.getViewedBounds=y({min:u.startTime,max:u.endTime,viewStart:e,viewEnd:t})}this.listView&&r!==l&&l(this.getAccessors())}componentDidUpdate(){const{shouldScrollToFirstUiFindMatch:e,clearShouldScrollToFirstUiFindMatch:t,scrollToFirstVisibleSpan:n}=this.props;e&&(n(),t())}getAccessors(){const e=this.listView;if(!e)throw new Error("ListView unavailable");return{getViewRange:this.getViewRange,getSearchedSpanIDs:this.getSearchedSpanIDs,getCollapsedChildren:this.getCollapsedChildren,getViewHeight:e.getViewHeight,getBottomRowIndexVisible:e.getBottomVisibleIndex,getTopRowIndexVisible:e.getTopVisibleIndex,getRowPosition:e.getRowPosition,mapRowIndexToSpanIndex:this.mapRowIndexToSpanIndex,mapSpanIndexToRowIndex:this.mapSpanIndexToRowIndex}}renderSpanBarRow(e,t,n,r,s){const{spanID:i}=e,{serviceName:a}=e.process,{childrenHiddenIDs:o,childrenToggle:c,detailStates:l,detailToggle:u,findMatchesIDs:h,spanNameColumnWidth:p,trace:g,focusSpan:f,hoverIndentGuideIds:b,addHoverIndentGuideId:m,removeHoverIndentGuideId:v,theme:j,createSpanLink:x}=this.props;if(!g)return null;const O=Object(mt.a)(a,j),y=o.has(i),w=l.has(i),_=!!h&&h.has(i),I=S(e)||y&&function(e,t){const{depth:n}=e[t];let r=t+1;for(;r<e.length&&e[r].depth>n;r++)if(S(e[r]))return!0;return!1}(g.spans,t);let D=null;if(y){const e=function(e){if(e.length<=1||!T(e[0]))return!1;const t=e[0].depth+1;let n=1;for(;n<e.length&&e[n].depth===t;){if(k(e[n]))return e[n];n++}return null}(g.spans.slice(t));if(e){const t=this.getViewedBounds(e.startTime,e.startTime+e.duration);D={color:Object(mt.a)(e.process.serviceName,j),operationName:e.operationName,serviceName:e.process.serviceName,viewEnd:t.end,viewStart:t.start}}}const E=jt();return Object(d.jsx)("div",vt({className:E.row,style:r},s,{children:Object(d.jsx)(Xe,{clippingLeft:this.clipping.left,clippingRight:this.clipping.right,color:O,columnDivision:p,isChildrenExpanded:!y,isDetailExpanded:w,isMatchingFilter:_,numTicks:5,onDetailToggled:u,onChildrenToggled:c,rpc:D,showErrorIcon:I,getViewedBounds:this.getViewedBounds,traceStartTime:g.startTime,span:e,focusSpan:f,hoverIndentGuideIds:b,addHoverIndentGuideId:m,removeHoverIndentGuideId:v,createSpanLink:x})}),n)}renderSpanDetailRow(e,t,n,r){const{spanID:s}=e,{serviceName:i}=e.process,{detailLogItemToggle:a,detailLogsToggle:o,detailProcessToggle:c,detailReferencesToggle:l,detailWarningsToggle:u,detailStackTracesToggle:h,detailStates:p,detailTagsToggle:g,detailToggle:f,spanNameColumnWidth:b,trace:m,focusSpan:v,hoverIndentGuideIds:j,addHoverIndentGuideId:x,removeHoverIndentGuideId:O,linksGetter:y,theme:w,createSpanLink:T}=this.props,k=p.get(s);if(!m||!k)return null;const _=Object(mt.a)(i,w),I=jt();return Object(d.jsx)("div",vt({className:I.row,style:vt({},n,{zIndex:1})},r,{children:Object(d.jsx)(bt,{color:_,columnDivision:b,onDetailToggled:f,detailState:k,linksGetter:y,logItemToggle:a,logsToggle:o,processToggle:c,referencesToggle:l,warningsToggle:u,stackTracesToggle:h,span:e,tagsToggle:g,traceStartTime:m.startTime,focusSpan:v,hoverIndentGuideIds:j,addHoverIndentGuideId:x,removeHoverIndentGuideId:O,createSpanLink:T})}),t)}render(){const e=jt(),{scrollElement:t}=this.props;return Object(d.jsx)("div",{children:Object(d.jsx)(F,{ref:this.setListView,dataLength:this.rowStates.length,itemHeightGetter:this.getRowHeight,itemRenderer:this.renderRow,viewBuffer:50,viewBufferMin:50,itemsWrapperClassName:e.rowsWrapper,getKeyFromIndex:this.getKeyFromIndex,getIndexFromKey:this.getIndexFromKey,windowScroller:!1,scrollElement:t})})}}var _t=Object(l.h)(kt),It=n("5sUZ"),St=n.n(It);var Dt={scrollPageDown:{binding:"s",label:"Scroll down"},scrollPageUp:{binding:"w",label:"Scroll up"},scrollToNextVisibleSpan:{binding:"f",label:"Scroll to the next visible span"},scrollToPrevVisibleSpan:{binding:"b",label:"Scroll to the previous visible span"},panLeft:{binding:["a","left"],label:"Pan left"},panLeftFast:{binding:["shift+a","shift+left"],label:"Pan left — Large"},panRight:{binding:["d","right"],label:"Pan right"},panRightFast:{binding:["shift+d","shift+right"],label:"Pan right — Large"},zoomIn:{binding:"up",label:"Zoom in"},zoomInFast:{binding:"shift+up",label:"Zoom in — Large"},zoomOut:{binding:"down",label:"Zoom out"},zoomOutFast:{binding:"shift+down",label:"Zoom out — Large"},collapseAll:{binding:"]",label:"Collapse All"},expandAll:{binding:"[",label:"Expand All"},collapseOne:{binding:"p",label:"Collapse One Level"},expandOne:{binding:"o",label:"Expand One Level"},searchSpans:{binding:"ctrl+b",label:"Search Spans"},clearSearch:{binding:"escape",label:"Clear Search"}};let Et;function Ct(){if(Et)return Et;const e=new St.a(document.body);return Et=e,e}function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Nt=Object(l.d)(e=>({TraceTimelineViewer:i.css`
      label: TraceTimelineViewer;
      border-bottom: 1px solid ${Object(l.c)(e,"#bbb")};

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
        color: ${Object(l.c)(e,"firebrick")};
      }

      & .json-markup-string {
        color: ${Object(l.c)(e,"teal")};
      }

      & .json-markup-null {
        color: ${Object(l.c)(e,"teal")};
      }

      & .json-markup-number {
        color: ${Object(l.c)(e,"blue","black")};
      }
    `}));class Rt extends s.a.PureComponent{constructor(e){super(e),this.collapseAll=()=>{this.props.collapseAll(this.props.trace.spans)},this.collapseOne=()=>{this.props.collapseOne(this.props.trace.spans)},this.expandAll=()=>{this.props.expandAll()},this.expandOne=()=>{this.props.expandOne(this.props.trace.spans)},this.state={height:0}}componentDidMount(){!function(e){const t=Ct();Object.keys(e).forEach(n=>{const r=e[n];r&&t.bind(Dt[n].binding,r)})}({collapseAll:this.collapseAll,expandAll:this.expandAll,collapseOne:this.collapseOne,expandOne:this.expandOne})}render(){const e=this.props,{setSpanNameColumnWidth:t,updateNextViewRangeTime:n,updateViewRangeTime:r,viewRange:s,createLinkToExternalSpan:i,traceTimeline:a,theme:o}=e,c=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["setSpanNameColumnWidth","updateNextViewRangeTime","updateViewRangeTime","viewRange","createLinkToExternalSpan","traceTimeline","theme"]),{trace:l}=c,u=Nt(o);return Object(d.jsx)(ee.Provider,{value:i,children:Object(d.jsxs)("div",{className:u.TraceTimelineViewer,ref:e=>e&&this.setState({height:e.getBoundingClientRect().height}),children:[Object(d.jsx)(V,{duration:l.duration,nameColumnWidth:a.spanNameColumnWidth,numTicks:5,onCollapseAll:this.collapseAll,onCollapseOne:this.collapseOne,onColummWidthChange:t,onExpandAll:this.expandAll,onExpandOne:this.expandOne,viewRangeTime:s.time,updateNextViewRangeTime:n,updateViewRangeTime:r,columnResizeHandleHeight:this.state.height}),Object(d.jsx)(_t,Lt({},c,a,{setSpanNameColumnWidth:t,currentViewRangeTime:s.time.current}))]})})}}t.a=Object(l.h)(Rt)},BO54:function(e,t){},Bcrw:function(e,t,n){"use strict";e.exports=function(e){var t,r;if(t=n("id2x"),r=n("pKQe"),"keypress"===e.type){var s=String.fromCharCode(e.which);return e.shiftKey||(s=s.toLowerCase()),s}return void 0!==t[e.which]?t[e.which]:void 0!==r[e.which]?r[e.which]:String.fromCharCode(e.which).toLowerCase()}},CONf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m8.4 30h23.2v3.4h-23.2v-3.4z m6.6-3.4v-10h-6.6l11.6-11.6 11.6 11.6h-6.6v10h-10z"})))},e.exports=t.default},Dita:function(e,t,n){"use strict";e.exports=function(e,t,r,s){this.stopCallback(t,t.target||t.srcElement,r,s)||!1===e(t,r)&&(n("5uNx")(t),n("EyJl")(t))}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},EomD:function(e,t,n){"use strict";e.exports=function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}},EyJl:function(e,t,n){"use strict";e.exports=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},"Go+2":function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,a=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,d=l&&l(Object);e.exports=function e(t,n,u){if("string"!=typeof n){if(d){var h=l(n);h&&h!==d&&e(t,h,u)}var p=a(n);o&&(p=p.concat(o(n)));for(var g=0;g<p.length;++g){var f=p[g];if(!(r[f]||s[f]||u&&u[f])){var b=c(n,f);try{i(t,f,b)}catch(e){}}}return t}return t}},H5sb:function(e,t,n){"use strict";e.exports=function(){var e,t=this.constructor;if(!t.REVERSE_MAP)for(var r in t.REVERSE_MAP={},e=n("id2x"))r>95&&r<112||e.hasOwnProperty(r)&&(t.REVERSE_MAP[e[r]]=r);return t.REVERSE_MAP}},HamY:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("q1tI");var r=n("vF1F"),s=n("TSYQ"),i=n.n(s),a=n("XZY6"),o=n("PK6U"),c=n("nKUr");const l=Object(a.d)(e=>({LabeledList:r.css`
      label: LabeledList;
      list-style: none;
      margin: 0;
      padding: 0;
    `,LabeledListItem:r.css`
      label: LabeledListItem;
      display: inline-block;
    `,LabeledListLabel:r.css`
      label: LabeledListLabel;
      color: ${Object(a.e)(e)?"#999":"#666"};
      margin-right: 0.25rem;
    `}));function d(e){var t;const{className:n,dividerClassName:r,items:s}=e,d=l(Object(a.g)());return Object(c.jsx)("ul",{className:i()(d.LabeledList,n),children:s.map(({key:e,label:n,value:i},a)=>{const l=a<s.length-1&&Object(c.jsx)("li",{className:d.LabeledListItem,children:t||(t=Object(c.jsx)(o.b,{className:r,type:"vertical"}))},e+"--divider");return[Object(c.jsxs)("li",{className:d.LabeledListItem,children:[Object(c.jsx)("span",{className:d.LabeledListLabel,children:n}),Object(c.jsx)("strong",{children:i})]},e),l]})})}},IBZi:function(e,t,n){"use strict";var r;!function(e){e.DragEnd="DragEnd",e.DragMove="DragMove",e.DragStart="DragStart",e.MouseEnter="MouseEnter",e.MouseLeave="MouseLeave",e.MouseMove="MouseMove"}(r||(r={})),t.a=r},IGUK:function(e,t,n){"use strict";e.exports=function(e,t){return this.directMap[e+":"+t]&&this.directMap[e+":"+t]({},e),this}},IfRf:function(e,t,n){"use strict";e.exports=function(e){return"shift"===e||"ctrl"===e||"alt"===e||"meta"===e}},MnCE:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return w}));var r=n("q1tI"),s=n.n(r),i=n("rzV7"),a=n.n(i),o=(n("Go+2"),n("xmmm")),c=n("bCCX"),l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(e,t,n,r,i){if(!e&&t)return n(i?d({},r,{children:i}):r);var a=n;return i?s.a.createElement(a,r,i):s.a.createElement(a,r)},g=function(e){return Boolean(e&&e.prototype&&"function"==typeof e.prototype.render)},f=function(e){return Boolean("function"==typeof e&&!g(e)&&!e.defaultProps&&!e.contextTypes)},b=function(e){var t=f(e);return function(n,r){return p(!1,t,e,n,r)}},m=function(e){return function(t){var n=b(t);return function(t){return n(e(t))}}},v=function(e){return m((function(t){return d({},t,"function"==typeof e?e(t):e)}))},j=function(e,t){for(var n={},r=0;r<t.length;r++){var s=t[r];e.hasOwnProperty(s)&&(n[s]=e[s])}return n},x=(Object.keys,function(e,t,n){return function(s){var i=b(s);return function(r){function s(){var e,t;l(this,s);for(var i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return e=t=h(this,r.call.apply(r,[this].concat(a))),t.state={stateValue:"function"==typeof n?n(t.props):n},t.updateStateValue=function(e,n){return t.setState((function(t){var n=t.stateValue;return{stateValue:"function"==typeof e?e(n):e}}),n)},h(t,e)}return u(s,r),s.prototype.render=function(){var n;return i(d({},this.props,((n={})[e]=this.state.stateValue,n[t]=this.updateStateValue,n)))},s}(r.Component)}}),O=(function(e){function t(){return l(this,t),h(this,e.apply(this,arguments))}u(t,e),t.prototype.render=function(){return null}}(r.Component),function(e){return function(t){var n=b(t);return function(t){function r(){return l(this,r),h(this,t.apply(this,arguments))}return u(r,t),r.prototype.shouldComponentUpdate=function(t){return e(this.props,t)},r.prototype.render=function(){return n(this.props)},r}(r.Component)}}),y=function(e){return O((function(t,n){return!a()(j(n,e),j(t,e))}))};function w(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}var T,k={fromESObservable:null,toESObservable:null},_={fromESObservable:function(e){return"function"==typeof k.fromESObservable?k.fromESObservable(e):e},toESObservable:function(e){return"function"==typeof k.toESObservable?k.toESObservable(e):e}};T=_},"Ovh+":function(e,t,n){"use strict";var r=n("LvDl"),s=n("G4qV"),i=n("P8+q"),a=n.n(i);const o=e=>e.serviceName;function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const l=e=>e.spanID,d=e=>e.operationName,u=e=>e.duration,h=e=>e.startTime,p=e=>e.processID,g=Object(s.a)(Object(s.a)(({span:e})=>e,e=>e.references||[]),({type:e})=>e,(e,t)=>e.find(e=>e.refType===t)),f=(Object(s.a)(e=>g({span:e,type:"CHILD_OF"}),e=>e?e.spanID:null),Object(s.a)(e=>{if(!e.process)throw new Error("\n      you must hydrate the spans with the processes, perhaps\n      using hydrateSpansWithProcesses(), before accessing a span's process\n    ");return e.process},o)),b=(Object(s.a)(({spans:e})=>e,({leftBound:e})=>e,({rightBound:e})=>e,(e,t,n)=>e.filter(e=>h(e)>=t&&h(e)<=n)),Object(s.a)(({spans:e})=>e,({text:e})=>e,(e,t)=>a.a.filter(t,e,{extract:e=>`${f(e)} ${d(e)}`}).map(({original:e})=>e))),m=Object(s.a)(b,e=>e.reduce((e,t)=>c({},e,{[l(t)]:t}),{}));Object(s.a)(({spans:e})=>e,m,(e,t)=>e.map(e=>c({},e,{muted:!t[l(e)]})));var v=n("kxiF");class j{static iterFunction(e,t=0){return n=>e(n.value,n,t)}static searchFunction(e){return"function"==typeof e?e:(t,n)=>e instanceof j?n===e:t===e}constructor(e,t=[]){this.value=e,this.children=t}get depth(){return this.children.reduce((e,t)=>Math.max(t.depth+1,e),1)}get size(){let e=0;return this.walk(()=>e++),e}addChild(e){return this.children.push(e instanceof j?e:new j(e)),this}find(e){if(j.iterFunction(j.searchFunction(e))(this))return this;for(let t=0;t<this.children.length;t++){const n=this.children[t].find(e);if(n)return n}return null}getPath(e){const t=j.iterFunction(j.searchFunction(e)),n=(e,r)=>{const s=r.concat([e]);if(t(e))return s;for(let t=0;t<e.children.length;t++){const r=e.children[t],i=n(r,s);if(i)return i}return null};return n(this,[])}walk(e,t=0){const n=[];let r=t;for(n.push({node:this,depth:r});n.length;){const{node:t,depth:s}=n.pop();e(t.value,t,s),r=s+1;let i=t.children.length-1;for(;i>=0;)n.push({node:t.children[i],depth:r}),i--}}}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const O=e=>e.spans,y=e=>e.processes,w=Object(s.a)(e=>e.span,e=>e.processes,(e,t)=>x({},e,{process:t[p(e)]})),T=Object(s.a)(O,e=>e.reduce((e,t)=>e.set(l(t),t),new Map));function k(e){const t=new Map(e.spans.map(e=>[e.spanID,new j(e.spanID)])),n=new Map(e.spans.map(e=>[e.spanID,e])),r=new j("__root__");e.spans.forEach(e=>{const n=t.get(e.spanID);if(Array.isArray(e.references)&&e.references.length){const{refType:s,spanID:i}=e.references[0];if("CHILD_OF"!==s&&"FOLLOWS_FROM"!==s)throw new Error("Unrecognized ref type: "+s);(t.get(i)||r).children.push(n)}else r.children.push(n)});const s=(e,t)=>{const r=n.get(e.value),s=n.get(t.value);return+(r.startTime>s.startTime)||+(r.startTime===s.startTime)-1};return e.spans.forEach(e=>{const n=t.get(e.spanID);n.children.length>1&&n.children.sort(s)}),r.children.sort(s),r}Object(s.a)(O,e=>e.length);const _=Object(s.a)(O,e=>e.reduce((e,t)=>e?Math.min(e,h(t)):h(t),null)),I=Object(s.a)(O,_,(e,t)=>e.reduce((e,n)=>e?Math.max(h(n)-t+u(n),e):u(n),null)),S=(Object(s.a)(_,I,(e,t)=>e+t),Object(s.a)(k,T,(e,t)=>e.children.map(e=>t.get(e.value)).sort((e,t)=>{return n=h(e),r=h(t),n-r;var n,r})[0])),D=(Object(s.a)(k,e=>e.depth-1),Object(s.a)(Object(s.a)(e=>e.trace,k),Object(s.a)(e=>e.span,l),(e,t)=>e.getPath(t).length-1),Object(s.a)(y,e=>Object.keys(e).reduce((t,n)=>t.add(o(e[n])),new Set))),E=(Object(s.a)(D,e=>e.size),{ms:v.d,s:v.e}),C=Object(s.a)(I,e=>e>=v.a?E.s:E.ms),L=(Object(s.a)(({duration:e})=>e,({unit:e})=>E[e],(e,t)=>t(e)),Object(s.a)(({duration:e})=>e,Object(s.a)(({trace:e})=>e,C),(e,t)=>t(e)),Object(s.a)(({trace:e})=>e,({spans:e})=>e,({sort:e})=>e,(e,t,{dir:n,comparator:r,selector:s})=>[...t].sort((t,i)=>n*r(s(t,e),s(i,e)))),Object(s.a)(k,e=>{const t=new Map;let n=0;return e.walk(e=>t.set(e,n++)),t}));Object(s.a)(Object(s.a)(e=>e.trace,k),Object(s.a)(e=>e.span,l),(e,t)=>{const n=e.find(t);return n?n.size-1:-1}),Object(s.a)(Object(s.a)(({trace:e})=>e,L),({span:e})=>e,(e,t)=>e.get(l(t))),Object(s.a)(Object(s.a)(Object(s.a)(e=>{const t=O(e),n=y(e);return x({},e,{spans:t.map(e=>w({span:e,processes:n}))})},S),Object(s.b)({name:d,serviceName:f})),({name:e,serviceName:t})=>`${t}: ${e}`),Object(s.a)(({spans:e})=>e,Object(s.a)(({trace:e})=>e,k),({collapsed:e})=>e,(e,t,n)=>{const r=n.reduce((e,n)=>(t.find(n).walk(t=>t!==n&&e.add(t)),e),new Set);return r.size>0?e.filter(e=>!r.has(l(e))):e}),Object(s.a)(({trace:e})=>e,({interval:e=4})=>e,({width:e=3})=>e,(e,t,n)=>[...Array(t+1).keys()].map(r=>({timestamp:_(e)+I(e)*(r/t),width:n}))),Object(s.a)(e=>e,O,(e,t)=>{const n=new Map;return x({},e,{spans:t.reduce((e,t)=>{const r=n.has(l(t))?`${l(t)}_${n.get(l(t))}`:l(t),s=x({},t,{spanID:r});return r!==l(t)&&console.warn("duplicate spanID in trace replaced",l(t),"new:",r),n.set(l(t),(n.get(l(t))||0)+1),e.concat([s])},[])})}),Object(s.a)(e=>e,O,(e,t)=>x({},e,{spans:t.filter(e=>!!h(e))}));var N=n("AjF4");function R(e){if(null==e||!e.traceID)return null;const t=e.traceID.toLowerCase();let n=0,s=Number.MAX_SAFE_INTEGER;const i=new Map,a=new Map;e.spans=e.spans.filter(e=>Boolean(e.startTime));const o=e.spans.length;for(let t=0;t<o;t++){const o=e.spans[t],{startTime:c,duration:l,processID:d}=o;let u=o.spanID;c<s&&(s=c),c+l>n&&(n=c+l);const h=i.get(u);null!=h?(console.warn(`Dupe spanID, ${h+1} x ${u}`,o,a.get(u)),Object(r.isEqual)(o,a.get(u))&&console.warn("\t two spans with same ID have `isEqual(...) === true`"),i.set(u,h+1),u=`${u}_${h}`,o.spanID=u):i.set(u,1),o.process=e.processes[d],a.set(u,o)}const c=k(e),l=[],d={};let u="";c.walk((e,n,r=0)=>{if("__root__"===e)return;const i=a.get(e);if(!i)return;const{serviceName:o}=i.process;d[o]=(d[o]||0)+1,i.references&&i.references.length||(u=`${o}: ${i.operationName}`),i.relativeStartTime=i.startTime-s,i.depth=r-1,i.hasChildren=n.children.length>0,i.warnings=i.warnings||[],i.tags=i.tags||[],i.references=i.references||[];const c=function(e){const t=new Map;return{tags:e.reduce((e,n)=>(e.some(e=>e.key===n.key&&e.value===n.value)?t.set(`${n.key}:${n.value}`,`Duplicate tag "${n.key}:${n.value}"`):e.push(n),e),[]),warnings:Array.from(t.values())}}(i.tags);i.tags=function(e,t){const n=e.slice(),r=(t||[]).map(e=>e.toLowerCase());return n.sort((e,t)=>{const n=e.key.toLowerCase(),s=t.key.toLowerCase();for(let e=0;e<r.length;e++){const t=r[e];if(n.startsWith(t)&&!s.startsWith(t))return-1;if(!n.startsWith(t)&&s.startsWith(t))return 1}return n>s?1:n<s?-1:0}),n}(c.tags,Object(N.a)("topTagPrefixes")),i.warnings=i.warnings.concat(c.warnings),i.references.forEach((n,r)=>{const s=a.get(n.spanID);s&&(n.span=s,r>0&&(s.subsidiarilyReferencedBy=s.subsidiarilyReferencedBy||[],s.subsidiarilyReferencedBy.push({spanID:e,traceID:t,span:i,refType:n.refType})))}),l.push(i)});return{services:Object.keys(d).map(e=>({name:e,numberOfSpans:d[e]})),spans:l,traceID:t,traceName:u,processes:e.processes,duration:n-s,startTime:s,endTime:n}}n.d(t,"a",(function(){return R}))},"P8+q":function(e,t,n){var r;r={},e.exports=r,r.simpleFilter=function(e,t){return t.filter((function(t){return r.test(e,t)}))},r.test=function(e,t){return null!==r.match(e,t)},r.match=function(e,t,n){n=n||{};var r,s=0,i=[],a=t.length,o=0,c=0,l=n.pre||"",d=n.post||"",u=n.caseSensitive&&t||t.toLowerCase();e=n.caseSensitive&&e||e.toLowerCase();for(var h=0;h<a;h++)r=t[h],u[h]===e[s]?(r=l+r+d,s+=1,c+=1+c):c=0,o+=c,i[i.length]=r;return s===e.length?(o=u===e?1/0:o,{rendered:i.join(""),score:o}):null},r.filter=function(e,t,n){return t&&0!==t.length?"string"!=typeof e?t:(n=n||{},t.reduce((function(t,s,i,a){var o=s;n.extract&&(o=n.extract(s));var c=r.match(e,o,n);return null!=c&&(t[t.length]={string:c.rendered,score:c.score,index:i,original:s}),t}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))):[]}},PK6U:function(e,t,n){"use strict";n.d(t,"i",(function(){return o})),n.d(t,"j",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"h",(function(){return h})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return b}));var r=n("q1tI"),s=n.n(r),i=n("nKUr");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const o=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Popover,a({},e))})},c=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Tooltip,a({},e))})},l=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Icon,a({},e))})},d=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Dropdown,a({},e))})},u=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Menu,a({},e))})},h=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.MenuItem,a({},e))})},p=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Button,a({},e))})},g=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Divider,a({},e))})},f=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.Input,a({},e))})},b=function(e){return Object(i.jsx)(v,{children:t=>Object(i.jsx)(t.InputGroup,a({},e))})},m=s.a.createContext(void 0);function v(e){return Object(i.jsx)(m.Consumer,{children:t=>{if(!t)throw new Error("Elements context is required. You probably forget to use UIElementsContext.Provider");return e.children(t)}})}m.displayName="UIElementsContext",t.k=m},QNYp:function(e,t,n){"use strict";var r=n("B3JP");n.d(t,"TraceTimelineViewer",(function(){return r.a}));var s=n("iB72");n.d(t,"TracePageHeader",(function(){return s.a}));var i=n("PK6U");n.d(t,"UIElementsContext",(function(){return i.k})),n.d(t,"UIButton",(function(){return i.a})),n.d(t,"UIDropdown",(function(){return i.c})),n.d(t,"UIMenu",(function(){return i.g})),n.d(t,"UIMenuItem",(function(){return i.h}));n("2AKD");var a=n("mvwf");n.o(a,"ThemeProvider")&&n.d(t,"ThemeProvider",(function(){return a.ThemeProvider})),n.o(a,"ThemeType")&&n.d(t,"ThemeType",(function(){return a.ThemeType})),n.o(a,"autoColor")&&n.d(t,"autoColor",(function(){return a.autoColor})),n.o(a,"useTheme")&&n.d(t,"useTheme",(function(){return a.useTheme}));var o=n("YljP");n.d(t,"DetailState",(function(){return o.a}));var c=n("Ovh+");n.d(t,"transformTraceData",(function(){return c.a}));var l=n("/aea");n.d(t,"filterSpans",(function(){return l.a}));var d=n("XZY6");n.d(t,"ThemeProvider",(function(){return d.a})),n.d(t,"ThemeType",(function(){return d.b})),n.d(t,"autoColor",(function(){return d.c})),n.d(t,"useTheme",(function(){return d.g}));n("MnCE").b},SScd:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var r=n("Wwog");function s(e){if(7!==e.length)return[0,0,0];const t=e.slice(1,3),n=e.slice(3,5),r=e.slice(5);return[parseInt(t,16),parseInt(n,16),parseInt(r,16)]}class i{constructor(e){this.colorsHex=void 0,this.colorsRgb=void 0,this.cache=void 0,this.currentIdx=void 0,this.colorsHex=e,this.colorsRgb=e.map(s),this.cache=new Map,this.currentIdx=0}_getColorIndex(e){let t=this.cache.get(e);return null==t&&(t=this.currentIdx,this.cache.set(e,this.currentIdx),this.currentIdx=++this.currentIdx%this.colorsHex.length),t}getColorByKey(e){const t=this._getColorIndex(e);return this.colorsHex[t]}getRgbColorByKey(e){const t=this._getColorIndex(e);return this.colorsRgb[t]}clear(){this.cache.clear(),this.currentIdx=0}}const a=Object(r.default)(e=>new i(e));function o(e,t){return a(t.servicesColorPalette).getColorByKey(e)}function c(e,t){return a(t.servicesColorPalette).getRgbColorByKey(e)}},TR4N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}var o=function(e,t){var n=e.children,i=e.color,a=e.size,o=e.style,c=e.width,l=e.height,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),u=t.reactIconBase,h=void 0===u?{}:u,p=a||h.size||"1em";return s.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:l||p,width:c||p},h,d,{style:r({verticalAlign:"middle",color:i||h.color},h.style||{},o)}))};o.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number]),width:i.default.oneOfType([i.default.string,i.default.number]),height:i.default.oneOfType([i.default.string,i.default.number]),style:i.default.object},o.contextTypes={reactIconBase:i.default.shape(o.propTypes)},t.default=o,e.exports=t.default},Tfl2:function(e,t,n){"use strict";e.exports=function(e,t,r,s,i,a){var o,c,l,d,u=[],h=r.type;"keypress"!==h||r.code&&"Arrow"===r.code.slice(0,5)||(this.callbacks["any-character"]||[]).forEach((function(e){u.push(e)}));if(!this.callbacks[e])return u;for(l=n("IfRf"),"keyup"===h&&l(e)&&(t=[e]),o=0;o<this.callbacks[e].length;++o)if(c=this.callbacks[e][o],(s||!c.seq||this.sequenceLevels[c.seq]===c.level)&&h===c.action&&(d=n("khqB"),"keypress"===h&&!r.metaKey&&!r.ctrlKey||d(t,c.modifiers))){var p=!s&&c.combo===i,g=s&&c.seq===s&&c.level===a;(p||g)&&this.callbacks[e].splice(o,1),u.push(c)}return u}},UvYX:function(e,t){},V280:function(e,t,n){"use strict";e.exports=function(){this.instances.forEach((function(e){e.reset()}))}},VYNe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31 12.5l1.5 1.6-12.5 13.4-12.5-13.4 1.5-1.6 11 11.7z"})))},e.exports=t.default},Wopw:function(e,t,n){var r=n("+A2i").off;e.exports=function(){var e=this.element;r(e,"keypress",this.eventHandler),r(e,"keydown",this.eventHandler),r(e,"keyup",this.eventHandler)}},XZY6:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"h",(function(){return x})),n.d(t,"g",(function(){return O})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return w})),n.d(t,"f",(function(){return T}));var r=n("q1tI"),s=n.n(r),i=n("1Ktg"),a=n.n(i),o=n("Wwog"),c=n("Zss7"),l=n.n(c),d=n("nKUr");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const h=["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#DA70BF","#4DC19C","#776E57"];let p;!function(e){e[e.Dark=0]="Dark",e[e.Light=1]="Light"}(p||(p={}));const g={type:p.Light,borderStyle:"1px solid #bbb",servicesColorPalette:["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#162A65","#DA70BF","#125C77","#4DC19C","#776E57"]};function f(e){return!(!e||!e.type)&&e.type===p.Light}const b=s.a.createContext(void 0);b.displayName="ThemeContext";const m=b.Provider;function v(e){return Object(d.jsx)(b.Consumer,{children:t=>{const n=j(t);return e.children(n)}})}const j=Object(o.default)(e=>{const t={};return f(e)||(t.servicesColorPalette=h),e?u({},g,t,e):g}),x=e=>{let t=t=>Object(d.jsx)(v,{children:n=>Object(d.jsx)(e,u({},u({},t,{theme:n})))});return t.displayName=`WithTheme(${e.displayName})`,t=a()(t,e),t.wrapped=e,t};function O(){const e=Object(r.useContext)(b);return u({},g,e)}const y=e=>Object(o.default)(e);function w(e,t,n){if(f(e))return t;{if(n){const e=l()(t);return l.a.mostReadable(n,[e.clone().lighten(25),e.clone().lighten(10),e,e.clone().darken(10),e.clone().darken(25)],{includeFallbackColors:!1}).toHex8String()}const e=l()(t).toHsl();e.l=1-e.l;const r=l()(e);return r.isLight()?r.darken(5).toHex8String():r.lighten(5).toHex8String()}}function T(e,t){return e?"string"==typeof e?e:e+"px":t}},YljP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(e){this.isTagsOpen=void 0,this.isProcessOpen=void 0,this.logs=void 0,this.isWarningsOpen=void 0,this.isStackTracesOpen=void 0,this.isReferencesOpen=void 0;const{isTagsOpen:t,isProcessOpen:n,isReferencesOpen:r,isWarningsOpen:s,isStackTracesOpen:i,logs:a}=e||{};this.isTagsOpen=Boolean(t),this.isProcessOpen=Boolean(n),this.isReferencesOpen=Boolean(r),this.isWarningsOpen=Boolean(s),this.isStackTracesOpen=Boolean(i),this.logs={isOpen:Boolean(a&&a.isOpen),openedItems:a&&a.openedItems?new Set(a.openedItems):new Set}}toggleTags(){const e=new r(this);return e.isTagsOpen=!this.isTagsOpen,e}toggleProcess(){const e=new r(this);return e.isProcessOpen=!this.isProcessOpen,e}toggleReferences(){const e=new r(this);return e.isReferencesOpen=!this.isReferencesOpen,e}toggleWarnings(){const e=new r(this);return e.isWarningsOpen=!this.isWarningsOpen,e}toggleStackTraces(){const e=new r(this);return e.isStackTracesOpen=!this.isStackTracesOpen,e}toggleLogs(){const e=new r(this);return e.logs.isOpen=!this.logs.isOpen,e}toggleLogItem(e){const t=new r(this);return t.logs.openedItems.has(e)?t.logs.openedItems.delete(e):t.logs.openedItems.add(e),t}}},Z8xD:function(e,t,n){"use strict";e.exports=function(e,t,n){for(var r=0;r<e.length;++r)this.bindSingle(e[r],t,n)}},ZkAY:function(e,t){},cKlj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"})))},e.exports=t.default},cdav:function(e,t,n){"use strict";var r="function"==typeof Symbol&&Symbol.for,s=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,d=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,g=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,j=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case s:switch(e=e.type){case u:case h:case a:case c:case o:case g:return e;default:switch(e=e&&e.$$typeof){case d:case p:case m:case b:case l:return e;default:return t}}case i:return t}}}function w(e){return y(e)===h}t.AsyncMode=u,t.ConcurrentMode=h,t.ContextConsumer=d,t.ContextProvider=l,t.Element=s,t.ForwardRef=p,t.Fragment=a,t.Lazy=m,t.Memo=b,t.Portal=i,t.Profiler=c,t.StrictMode=o,t.Suspense=g,t.isAsyncMode=function(e){return w(e)||y(e)===u},t.isConcurrentMode=w,t.isContextConsumer=function(e){return y(e)===d},t.isContextProvider=function(e){return y(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===s},t.isForwardRef=function(e){return y(e)===p},t.isFragment=function(e){return y(e)===a},t.isLazy=function(e){return y(e)===m},t.isMemo=function(e){return y(e)===b},t.isPortal=function(e){return y(e)===i},t.isProfiler=function(e){return y(e)===c},t.isStrictMode=function(e){return y(e)===o},t.isSuspense=function(e){return y(e)===g},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===h||e===c||e===o||e===g||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===l||e.$$typeof===d||e.$$typeof===p||e.$$typeof===j||e.$$typeof===x||e.$$typeof===O||e.$$typeof===v)},t.typeOf=y},fBm0:function(e,t,n){"use strict";e.exports=function(e){return"+"===e?["+"]:e.split("+")}},hrSM:function(e,t,n){"use strict";e.exports=function(e,t,r){var s,i,a,o,c={},l=0,d=!1;for(s=this.getMatches(e,t,r),i=0;i<s.length;++i)s[i].seq&&(l=Math.max(l,s[i].level));for(i=0;i<s.length;++i)if(s[i].seq){if(s[i].level!==l)continue;d=!0,c[s[i].seq]=1,this.fireCallback(s[i].callback,r,s[i].combo,s[i].seq)}else d||this.fireCallback(s[i].callback,r,s[i].combo);o="keypress"===r.type&&this.ignoreNextKeypress,a=n("IfRf"),r.type!==this.nextExpectedAction||a(e)||o||this.resetSequences(c),this.ignoreNextKeypress=d&&"keydown"===r.type}},iB72:function(e,t,n){"use strict";var r=n("q1tI"),s=n("LvDl"),i=n("rhR/"),a=n.n(i),o=n("vF1F"),c=n("TSYQ"),l=n.n(c);var d=n("SScd"),u=n("XZY6"),h=n("nKUr");const p=Object(u.d)(e=>({CanvasSpanGraph:o.css`
      label: CanvasSpanGraph;
      background: ${Object(u.c)(e,"#fafafa")};
      height: 60px;
      position: absolute;
      width: 100%;
    `}));class g extends r.PureComponent{constructor(e){super(e),this._canvasElm=void 0,this.getColor=e=>Object(d.b)(e,this.props.theme),this._setCanvasRef=e=>{this._canvasElm=e},this._canvasElm=void 0}componentDidMount(){this._draw()}componentDidUpdate(){this._draw()}_draw(){if(this._canvasElm){const{valueWidth:e,items:t}=this.props;!function(e,t,n,r,s){const i=new Map,a=t.length<60?60:Math.min(t.length,200),o=2*window.innerWidth;e.width=o,e.height=a;const c=Math.min(6,Math.max(2,a/t.length)),l=a/t.length,d=e.getContext("2d",{alpha:!1});d.fillStyle=s,d.fillRect(0,0,o,a);for(let e=0;e<t.length;e++){const{valueWidth:s,valueOffset:a,serviceName:u}=t[e],h=a/n*o;let p=s/n*o;p<10&&(p=10);let g=i.get(u);g||(g=`rgba(${r(u).concat(.8).join()})`,i.set(u,g)),d.fillStyle=g,d.fillRect(h,e*l,p,c)}}(this._canvasElm,t,e,this.getColor,Object(u.c)(this.props.theme,"#fff"))}}render(){return Object(h.jsx)("canvas",{className:p(this.props.theme).CanvasSpanGraph,ref:this._setCanvasRef})}}var f=Object(u.h)(g),b=n("kxiF");const m=Object(u.d)(()=>({TickLabels:o.css`
      label: TickLabels;
      height: 1rem;
      position: relative;
    `,TickLabelsLabel:o.css`
      label: TickLabelsLabel;
      color: #717171;
      font-size: 0.7rem;
      position: absolute;
      user-select: none;
    `}));function v(e){const{numTicks:t,duration:n}=e,r=m(),s=[];for(let e=0;e<t+1;e++){const i=e/t,a=1===i?{right:"0%"}:{left:100*i+"%"};s.push(Object(h.jsx)("div",{className:r.TickLabelsLabel,style:a,"data-test":"tick",children:Object(b.c)(n*i)},i))}return Object(h.jsx)("div",{className:r.TickLabels,children:s})}const j=Object(u.d)(()=>({GraphTick:o.css`
      label: GraphTick;
      stroke: #aaa;
      stroke-width: 1px;
    `}));function x(e){const{numTicks:t}=e,n=[];for(let e=1;e<t;e++){const r=e/t*100+"%";n.push(Object(h.jsx)("line",{className:j().GraphTick,x1:r,y1:"0%",x2:r,y2:"100%"},e/t))}return Object(h.jsx)("g",{"data-test":"ticks","aria-hidden":"true",children:n})}const O=Object(u.d)(()=>({ScrubberHandleExpansion:l()(o.css`
        label: ScrubberHandleExpansion;
        cursor: col-resize;
        fill-opacity: 0;
        fill: #44f;
      `,"scrubber-handle-expansion"),ScrubberHandle:l()(o.css`
        label: ScrubberHandle;
        cursor: col-resize;
        fill: #555;
      `,"scrubber-handle"),ScrubberLine:l()(o.css`
        label: ScrubberLine;
        pointer-events: none;
        stroke: #555;
      `,"scrubber-line"),ScrubberDragging:o.css`
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
    `,ScrubberHandles:o.css`
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
    `}));function y({isDragging:e,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,position:s}){const i=100*s+"%",a=O(),o=l()({[a.ScrubberDragging]:e});return Object(h.jsxs)("g",{className:o,children:[Object(h.jsxs)("g",{className:a.ScrubberHandles,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,children:[Object(h.jsx)("rect",{x:i,className:a.ScrubberHandleExpansion,style:{transform:"translate(-4.5px)"},width:"9",height:"20"}),Object(h.jsx)("rect",{x:i,className:a.ScrubberHandle,style:{transform:"translate(-1.5px)"},width:"3",height:"20"})]}),Object(h.jsx)("line",{className:a.ScrubberLine,y2:"100%",x1:i,x2:i})]})}var w=n("QNYp"),T=n("50T7");const k=Object(u.d)(e=>{const t=o.css`
    label: ViewingLayerResetZoom;
    display: none;
    position: absolute;
    right: 1%;
    top: 10%;
    z-index: 1;
  `;return{ViewingLayer:o.css`
      label: ViewingLayer;
      cursor: vertical-text;
      position: relative;
      z-index: 1;
      &:hover > .${"JaegerUiComponents__ViewingLayerResetZoomHoverClassName"} {
        display: unset;
      }
    `,ViewingLayerGraph:o.css`
      label: ViewingLayerGraph;
      border: 1px solid ${Object(u.c)(e,"#999")};
      /* need !important here to overcome something from semantic UI */
      overflow: visible !important;
      position: relative;
      transform-origin: 0 0;
      width: 100%;
    `,ViewingLayerInactive:o.css`
      label: ViewingLayerInactive;
      fill: ${Object(u.c)(e,"rgba(214, 214, 214, 0.5)")};
    `,ViewingLayerCursorGuide:o.css`
      label: ViewingLayerCursorGuide;
      stroke: ${Object(u.c)(e,"#f44")};
      stroke-width: 1;
    `,ViewingLayerDraggedShift:o.css`
      label: ViewingLayerDraggedShift;
      fill-opacity: 0.2;
    `,ViewingLayerDrag:o.css`
      label: ViewingLayerDrag;
      fill: ${Object(u.c)(e,"#44f")};
    `,ViewingLayerFullOverlay:o.css`
      label: ViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `,ViewingLayerResetZoom:t,ViewingLayerResetZoomHoverClassName:"JaegerUiComponents__ViewingLayerResetZoomHoverClassName"}}),_="SHIFT_END",I="SHIFT_START",S="REFRAME";class D extends r.PureComponent{constructor(e){super(e),this.state=void 0,this._root=void 0,this._draggerReframe=void 0,this._draggerStart=void 0,this._draggerEnd=void 0,this._setRoot=e=>{this._root=e},this._getDraggingBounds=e=>{if(!this._root)throw new Error("invalid state");const{left:t,width:n}=this._root.getBoundingClientRect(),[r,s]=this.props.viewRange.time.current;let i=1,a=0;return e===I?i=s:e===_&&(a=r),{clientXLeft:t,maxValue:i,minValue:a,width:n}},this._handleReframeMouseMove=({value:e})=>{this.props.updateNextViewRangeTime({cursor:e})},this._handleReframeMouseLeave=()=>{this.props.updateNextViewRangeTime({cursor:null})},this._handleReframeDragUpdate=({value:e})=>{const t=e,{time:n}=this.props.viewRange,r={reframe:{anchor:n.reframe?n.reframe.anchor:t,shift:t}};this.props.updateNextViewRangeTime(r)},this._handleReframeDragEnd=({manager:e,value:t})=>{const{time:n}=this.props.viewRange,r=n.reframe?n.reframe.anchor:t,[s,i]=t<r?[t,r]:[r,t];e.resetBounds(),this.props.updateViewRangeTime(s,i,"minimap")},this._handleScrubberEnterLeave=({type:e})=>{const t=e===T.EUpdateTypes.MouseEnter;this.setState({preventCursorLine:t})},this._handleScrubberDragUpdate=({event:e,tag:t,type:n,value:r})=>{n===T.EUpdateTypes.DragStart&&e.stopPropagation(),t===I?this.props.updateNextViewRangeTime({shiftStart:r}):t===_&&this.props.updateNextViewRangeTime({shiftEnd:r})},this._handleScrubberDragEnd=({manager:e,tag:t,value:n})=>{const[r,s]=this.props.viewRange.time.current;let i;if(t===I)i=[n,s];else{if(t!==_)throw new Error("bad state");i=[r,n]}e.resetBounds(),this.setState({preventCursorLine:!1}),this.props.updateViewRangeTime(i[0],i[1],"minimap")},this._resetTimeZoomClickHandler=()=>{this.props.updateViewRangeTime(0,1)},this._draggerReframe=new T.default({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseMove:this._handleReframeMouseMove,onMouseLeave:this._handleReframeMouseLeave,tag:S}),this._draggerStart=new T.default({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:I}),this._draggerEnd=new T.default({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:_}),this._root=void 0,this.state={preventCursorLine:!1}}componentWillUnmount(){this._draggerReframe.dispose(),this._draggerEnd.dispose(),this._draggerStart.dispose()}_getMarkers(e,t){const n=k(this.props.theme),r=function(e,t){const[n,r]=e<t?[e,t]:[t,e];return{x:100*n+"%",width:100*(r-n)+"%",leadingX:100*t+"%"}}(e,t);return[Object(h.jsx)("rect",{className:l()(n.ViewingLayerDraggedShift,n.ViewingLayerDrag),x:r.x,y:"0",width:r.width,height:this.props.height-2},"fill"),Object(h.jsx)("rect",{className:l()(n.ViewingLayerDrag),x:r.leadingX,y:"0",width:"1",height:this.props.height-2},"edge")]}render(){const{height:e,viewRange:t,numTicks:n,theme:r}=this.props,{preventCursorLine:s}=this.state,{current:i,cursor:a,shiftStart:o,shiftEnd:c,reframe:d}=t.time,u=null!=o||null!=c||null!=d,[p,g]=i;let f=0;p&&(f=100*p);let b,m=100;g&&(m=100-100*g),u||null==a||s||(b=100*a+"%");const v=k(r);return Object(h.jsxs)("div",{"aria-hidden":!0,className:v.ViewingLayer,style:{height:e},children:[(0!==p||1!==g)&&Object(h.jsx)(w.UIButton,{onClick:this._resetTimeZoomClickHandler,className:l()(v.ViewingLayerResetZoom,v.ViewingLayerResetZoomHoverClassName),htmlType:"button",children:"Reset Selection"}),Object(h.jsxs)("svg",{height:e,className:v.ViewingLayerGraph,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,children:[f>0&&Object(h.jsx)("rect",{x:0,y:0,height:"100%",width:f+"%",className:v.ViewingLayerInactive}),m>0&&Object(h.jsx)("rect",{x:100-m+"%",y:0,height:"100%",width:m+"%",className:v.ViewingLayerInactive}),Object(h.jsx)(x,{numTicks:n}),b&&Object(h.jsx)("line",{className:v.ViewingLayerCursorGuide,x1:b,y1:"0",x2:b,y2:e-2,strokeWidth:"1"}),null!=o&&this._getMarkers(p,o),null!=c&&this._getMarkers(g,c),Object(h.jsx)(y,{isDragging:null!=o,onMouseDown:this._draggerStart.handleMouseDown,onMouseEnter:this._draggerStart.handleMouseEnter,onMouseLeave:this._draggerStart.handleMouseLeave,position:p||0}),Object(h.jsx)(y,{isDragging:null!=c,position:g||1,onMouseDown:this._draggerEnd.handleMouseDown,onMouseEnter:this._draggerEnd.handleMouseEnter,onMouseLeave:this._draggerEnd.handleMouseLeave}),null!=d&&this._getMarkers(d.anchor,d.shift)]}),u&&Object(h.jsx)("div",{className:v.ViewingLayerFullOverlay})]})}}var E,C=Object(u.h)(D),L=n("xIog");function N(e){return{valueOffset:e.relativeStartTime,valueWidth:e.duration,serviceName:e.process.serviceName}}class R extends r.PureComponent{constructor(e){super(e),this.state=void 0;const{trace:t}=e;this.state={items:t?t.spans.map(N):[]}}UNSAFE_componentWillReceiveProps(e){const{trace:t}=e;this.props.trace!==t&&this.setState({items:t?t.spans.map(N):[]})}render(){const{height:e,trace:t,viewRange:n,updateNextViewRangeTime:r,updateViewRangeTime:s}=this.props;if(!t)return E||(E=Object(h.jsx)("div",{}));const{items:i}=this.state;return Object(h.jsxs)("div",{className:l()(L.m,L.n),children:[Object(h.jsx)(v,{numTicks:4,duration:t.duration}),Object(h.jsxs)("div",{className:L.o,children:[Object(h.jsx)(f,{valueWidth:t.duration,items:i}),Object(h.jsx)(C,{viewRange:n,numTicks:4,height:e||60,updateViewRangeTime:s,updateNextViewRangeTime:r})]})]})}}R.defaultProps={height:60};var M=n("yD29"),P=n.n(M);var H,V=n("PK6U");function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}class $ extends r.PureComponent{constructor(...e){super(...e),this.clearUiFind=()=>{this.props.onChange("")}}render(){const{allowClear:e,inputProps:t,value:n}=this.props,r=Object(h.jsxs)(h.Fragment,{children:[e&&n&&n.length&&Object(h.jsx)(V.d,{type:"close",onClick:this.clearUiFind}),t.suffix]});return Object(h.jsx)(V.e,B({autosize:null,placeholder:"Find..."},t,{onChange:e=>this.props.onChange(e.target.value),suffix:r,value:n}))}}$.defaultProps={inputProps:{},trackFindFunction:void 0,value:void 0};const A=Object(u.d)(()=>({TracePageSearchBar:o.css`
      label: TracePageSearchBar;
    `,TracePageSearchBarBar:o.css`
      label: TracePageSearchBarBar;
      max-width: 20rem;
      transition: max-width 0.5s;
      &:focus-within {
        max-width: 100%;
      }
    `,TracePageSearchBarCount:o.css`
      label: TracePageSearchBarCount;
      opacity: 0.6;
    `,TracePageSearchBarBtn:o.css`
      label: TracePageSearchBarBtn;
      border-left: none;
      transition: 0.2s;
    `,TracePageSearchBarBtnDisabled:o.css`
      label: TracePageSearchBarBtnDisabled;
      opacity: 0.5;
    `,TracePageSearchBarLocateBtn:o.css`
      label: TracePageSearchBarLocateBtn;
      padding: 1px 8px 4px;
    `}));var F=Object(r.memo)((function(e){const{clearSearch:t,focusUiFindMatches:n,navigable:r,nextResult:s,prevResult:i,resultCount:a,textFilter:o,onSearchValueChange:c,searchValue:d,hideSearchButtons:u}=e,p=A(),g=o?Object(h.jsx)("span",{className:p.TracePageSearchBarCount,children:a}):null,f=l()(p.TracePageSearchBarBtn,{[p.TracePageSearchBarBtnDisabled]:!o}),b={"data-test":"in-trace-search",className:l()(p.TracePageSearchBarBar,L.f),name:"search",suffix:g};return Object(h.jsx)("div",{className:p.TracePageSearchBar,children:Object(h.jsxs)(V.f,{className:L.i,compact:!0,style:{display:"flex"},children:[Object(h.jsx)($,{onChange:c,value:d,inputProps:b}),!u&&Object(h.jsxs)(h.Fragment,{children:[r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(V.a,{className:l()(f,p.TracePageSearchBarLocateBtn),disabled:!o,htmlType:"button",onClick:n,children:H||(H=Object(h.jsx)(P.a,{}))}),Object(h.jsx)(V.a,{className:f,disabled:!o,htmlType:"button",icon:"up",onClick:i}),Object(h.jsx)(V.a,{className:f,disabled:!o,htmlType:"button",icon:"down",onClick:s})]}),Object(h.jsx)(V.a,{className:f,disabled:!o,htmlType:"button",icon:"close",onClick:t})]})]})})})),z=n("HamY");const W=Object(u.d)(()=>({BreakableText:o.css`
      label: BreakableText;
      display: inline-block;
      white-space: pre;
    `})),G=/\W*\w+\W*/g;function U(e){const{className:t,text:n,wordRegexp:r=G}=e;if(!n)return"string"==typeof n?n:null;const s=[];r.exec("");let i=r.exec(n)||[n];for(;i;)s.push(Object(h.jsx)("span",{className:t||W().BreakableText,children:i[0]},`${n}-${s.length}`)),i=r.exec(n);return s}function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}U.defaultProps={wordRegexp:G};const q=Object(u.d)(()=>{const e=o.keyframes`
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
  `;return{LoadingIndicator:o.css`
      label: LoadingIndicator;
      animation: ${e} 1s infinite alternate;
      font-size: 36px;
      /* outline / stroke the loading indicator */
      text-shadow: -0.5px 0 rgba(0, 128, 128, 0.6), 0 0.5px rgba(0, 128, 128, 0.6), 0.5px 0 rgba(0, 128, 128, 0.6),
        0 -0.5px rgba(0, 128, 128, 0.6);
    `,LoadingIndicatorCentered:o.css`
      label: LoadingIndicatorCentered;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `,LoadingIndicatorSmall:o.css`
      label: LoadingIndicatorSmall;
      font-size: 0.7em;
    `}});function Y(e){const{centered:t,className:n,small:r}=e,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["centered","className","small"]),i=q(),a=l()(i.LoadingIndicator,{[i.LoadingIndicatorCentered]:t,[i.LoadingIndicatorSmall]:r,className:n});return Object(h.jsx)(V.d,K({type:"loading",className:a},s))}Y.defaultProps={centered:!1,className:void 0,small:!1};var Z,X=n("w2pd");const J=Object(u.d)(e=>{var t,n;return{TraceName:o.css`
      label: TraceName;
      font-size: ${Object(u.f)(null===(t=e.components)||void 0===t||null===(n=t.TraceName)||void 0===n?void 0:n.fontSize,"unset")};
    `,TraceNameError:o.css`
      label: TraceNameError;
      color: #c00;
    `}});function Q(e){const{className:t,error:n,state:r,traceName:s}=e,i=r===X.c.ERROR;let a=s||X.b;const o=J(Object(u.g)());let c="";if(i){c=o.TraceNameError;let e="";n&&(e="string"==typeof n?n:n.message||String(n)),e||(e="Error: Unknown error"),a=e,a=Object(h.jsx)(U,{text:e})}else if(r===X.c.LOADING)a=Z||(Z=Object(h.jsx)(Y,{small:!0}));else{const e=String(s||X.b);a=Object(h.jsx)(U,{text:e})}return Object(h.jsx)("span",{className:l()(o.TraceName,c,t),children:a})}function ee(e){const t=e.filter(e=>!e.references||!e.references.length)[0];return t?`${t.process.serviceName}: ${t.operationName}`:""}var te=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function ne(e,t){return 1===e?function(e){var t;return{get:function(n){if(t&&e(n,t.key))return t.value},put:function(e,n){t={key:e,value:n}}}}(t):function(e,t){var n=[];function r(e){var r=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return-1}(n,(function(n){return t(e,n.key)}));if(r>-1){var s=n[r];return r>0&&(n.splice(r,1),n.unshift(s)),s.value}}return{get:r,put:function(t,s){r(t)||(n.unshift({key:t,value:s}),n.length>e&&n.pop())}}}(e,t)}function re(e,t){var n=t?function(e,t){return function n(r,s){if(e(r,s))return!0;if(Array.isArray(r))return!(!Array.isArray(s)||r.length!==s.length)&&!!r.every((function(e,t){return n(e,s[t])}));if(Array.isArray(s))return!1;if("object"==typeof r){if("object"!=typeof s)return!1;var i=null===r,a=null===s;if(i||a)return i===a;var o=Object.keys(r),c=Object.keys(s);if(o.length!==c.length)return!1;var l=t?n:e;return!!o.every((function(e){return te(r,e)&&te(s,e)&&l(r[e],s[e])}))}return!1}}(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1)if(!n(e[r],t[r]))return!1;return!0}}var se=function(){for(var e=1,t=function(e,t){return e===t},n=!1,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];"number"==typeof s[0]&&(e=s.shift()),"function"==typeof s[0]?t=s.shift():void 0===s[0]&&s.shift(),"boolean"==typeof s[0]&&(n=s[0]);var a=ne(e,re(t,n));return function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var s=a.get(n);return void 0===s&&(s=e.apply(e,n),a.put(n,s)),s}}},ie=n("AjF4");function ae(e){const t=e.references?e.references.find(e=>"CHILD_OF"===e.refType):null;return t?t.span:null}const oe=/#\{([^{}]*)\}/g;function ce(e){const t=new Set;return e.replace(oe,(e,n)=>(t.add(n),e)),Array.from(t)}function le(e,t,n){return e.replace(oe,(e,r)=>{const s=n[r];return null==s?"":t(s)})}function de(e,t){if("string"!=typeof e)throw new Error("Invalid template");return{parameters:ce(e),template:le.bind(null,e,t)}}function ue(e){if("string"==typeof e)return t=>t===e;if(Array.isArray(e))return t=>e.indexOf(t)>-1;if(null==e)return()=>!0;throw new Error("Invalid value: "+e)}const he=e=>e;function pe(e,t){if(t)return t.find(t=>t.key===e)}function ge(e,t){return e.template(t)}function fe(e,t,n,r){const s=n[r];let i="logs";const a=t.process.tags===n;a&&(i="process");t.tags===n&&(i="tags");const o=[];return e.forEach(e=>{if(e.type(i)&&e.key(s.key)&&e.value(s.value)){const r={};e.parameters.every(o=>{let c=pe(o,n);return c||a||(c=function(e,t){let n=t;for(;n;){const t=pe(e,n.tags)||pe(e,n.process.tags);if(t)return t;n=ae(n)}}(o,t)),c?(r[o]=c.value,!0):(console.warn(`Skipping link pattern, missing parameter ${o} for key ${s.key} in ${i}.`,e.object),!1)})&&o.push({url:ge(e.url,r),text:ge(e.text,r)})}}),o}const be=(Object(ie.a)("linkPatterns")||[]).map((function(e){try{const t=de(e.url,encodeURIComponent),n=de(e.text,he);return{object:e,type:ue(e.type),key:ue(e.key),value:ue(e.value),url:t,text:n,parameters:Object(s.uniq)(t.parameters.concat(n.parameters))}}catch(t){return console.error("Ignoring invalid link pattern: "+t,e),null}})).filter(Boolean),me=se(10)(e=>{const t=[];return e?function(e,t){const n=[],r=Object.keys(t).filter(e=>"string"==typeof t[e]||"number"===t[e]);return e.filter(e=>e.type("traces")).forEach(e=>{const s={};e.parameters.every(e=>{const n=e;return!!r.includes(n)&&(s[e]=t[n],!0)})&&n.push({url:ge(e.url,s),text:ge(e.text,s)})}),n}(be,e):t});ve=be,je=new WeakMap;var ve,je,xe,Oe,ye=n("582L");const we=e=>Object(h.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",className:e.className,children:[e.children," ",xe||(xe=Object(h.jsx)(ye.a,{}))]}),Te=e=>Object(h.jsx)(w.UIMenu,{children:e.map(({text:e,url:t},n)=>Object(h.jsx)(w.UIMenuItem,{children:Object(h.jsx)(we,{href:t,children:e})},`${t}-${n}`))});function ke(e){const{links:t}=e;return 1===t.length?Object(h.jsx)(we,{href:t[0].url,title:t[0].text,className:e.className}):Object(h.jsx)(w.UIDropdown,{overlay:Te(t),placement:"bottomRight",trigger:["click"],children:Object(h.jsx)("a",{className:e.className,children:Oe||(Oe=Object(h.jsx)(ye.a,{isLarge:!0}))})})}function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const Ie=Object(u.d)(e=>({TracePageHeader:o.css`
      label: TracePageHeader;
      & > :first-child {
        border-bottom: 1px solid ${Object(w.autoColor)(e,"#e8e8e8")};
      }
      & > :nth-child(2) {
        background-color: ${Object(w.autoColor)(e,"#eee")};
        border-bottom: 1px solid ${Object(w.autoColor)(e,"#e4e4e4")};
      }
      & > :last-child {
        border-bottom: 1px solid ${Object(w.autoColor)(e,"#ccc")};
      }
    `,TracePageHeaderTitleRow:o.css`
      label: TracePageHeaderTitleRow;
      align-items: center;
      display: flex;
    `,TracePageHeaderBack:o.css`
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
    `,TracePageHeaderTitleLink:o.css`
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
    `,TracePageHeaderDetailToggle:o.css`
      label: TracePageHeaderDetailToggle;
      font-size: 2.5rem;
      transition: transform 0.07s ease-out;
    `,TracePageHeaderDetailToggleExpanded:o.css`
      label: TracePageHeaderDetailToggleExpanded;
      transform: rotate(90deg);
    `,TracePageHeaderTitle:o.css`
      label: TracePageHeaderTitle;
      color: inherit;
      flex: 1;
      font-size: 1.7em;
      line-height: 1em;
      margin: 0 0 0 0.5em;
      padding-bottom: 0.5em;
    `,TracePageHeaderTitleCollapsible:o.css`
      label: TracePageHeaderTitleCollapsible;
      margin-left: 0;
    `,TracePageHeaderOverviewItems:o.css`
      label: TracePageHeaderOverviewItems;
      border-bottom: 1px solid #e4e4e4;
      padding: 0.25rem 0.5rem !important;
    `,TracePageHeaderOverviewItemValueDetail:l()(o.css`
        label: TracePageHeaderOverviewItemValueDetail;
        color: #aaa;
      `,"trace-item-value-detail"),TracePageHeaderOverviewItemValue:o.css`
      label: TracePageHeaderOverviewItemValue;
      &:hover > .trace-item-value-detail {
        color: unset;
      }
    `,TracePageHeaderArchiveIcon:o.css`
      label: TracePageHeaderArchiveIcon;
      font-size: 1.78em;
      margin-right: 0.15em;
    `,TracePageHeaderTraceId:o.css`
      label: TracePageHeaderTraceId;
      white-space: nowrap;
    `})),Se=[{key:"timestamp",label:"Trace Start",renderer(e,t){const n=Object(b.b)(e.startTime),r=n.match(/^(.+)(:\d\d\.\d+)$/);return r?Object(h.jsxs)("span",{className:t.TracePageHeaderOverviewItemValue,children:[r[1],Object(h.jsx)("span",{className:t.TracePageHeaderOverviewItemValueDetail,children:r[2]})]}):n}},{key:"duration",label:"Duration",renderer:e=>Object(b.c)(e.duration)},{key:"service-count",label:"Services",renderer:e=>new Set(Object(s.values)(e.processes).map(e=>e.serviceName)).size},{key:"depth",label:"Depth",renderer:e=>Object(s.get)(Object(s.maxBy)(e.spans,"depth"),"depth",0)+1},{key:"span-count",label:"Total Spans",renderer:e=>e.spans.length}];function De(e){const{canCollapse:t,clearSearch:n,focusUiFindMatches:s,hideMap:i,hideSummary:o,nextResult:c,onSlimViewClicked:d,prevResult:u,resultCount:p,slimView:g,textFilter:f,trace:b,traceGraphView:m,updateNextViewRangeTime:v,updateViewRangeTime:j,viewRange:x,searchValue:O,onSearchValueChange:y,hideSearchButtons:T}=e,k=Ie(Object(w.useTheme)()),_=r.useMemo(()=>b?me(b):[],[b]);if(!b)return null;const I=!o&&!g&&Se.map(e=>{const{renderer:t}=e;return _e({},function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,["renderer"]),{value:t(b,k)})}),S=Object(h.jsxs)("h1",{className:l()(k.TracePageHeaderTitle,t&&k.TracePageHeaderTitleCollapsible),children:[Object(h.jsx)(Q,{traceName:ee(b.spans)})," ",Object(h.jsx)("small",{className:l()(k.TracePageHeaderTraceId,L.c),children:b.traceID})]});return Object(h.jsxs)("header",{className:k.TracePageHeader,children:[Object(h.jsxs)("div",{className:k.TracePageHeaderTitleRow,children:[_&&_.length>0&&Object(h.jsx)(ke,{links:_,className:k.TracePageHeaderBack}),t?Object(h.jsxs)("a",{className:k.TracePageHeaderTitleLink,onClick:d,role:"switch","aria-checked":!g,children:[Object(h.jsx)(a.a,{className:l()(k.TracePageHeaderDetailToggle,!g&&k.TracePageHeaderDetailToggleExpanded)}),S]}):S,Object(h.jsx)(F,{clearSearch:n,focusUiFindMatches:s,nextResult:c,prevResult:u,resultCount:p,textFilter:f,navigable:!m,searchValue:O,onSearchValueChange:y,hideSearchButtons:T})]}),I&&Object(h.jsx)(z.a,{className:k.TracePageHeaderOverviewItems,items:I}),!i&&!g&&Object(h.jsx)(R,{trace:b,viewRange:x,updateNextViewRangeTime:v,updateViewRangeTime:j})]})}n.d(t,"a",(function(){return De}))},ia7v:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m12.5 9l1.6-1.5 13.4 12.5-13.4 12.5-1.6-1.5 11.7-11z"})))},e.exports=t.default},id2x:function(e,t,n){"use strict";e.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(var r=1;r<20;++r)e.exports[111+r]="f"+r;for(r=0;r<=9;++r)e.exports[r+96]=r},"kX/o":function(e,t,n){"use strict";e.exports=function(e,t,r,s){var i=this;function a(t){return function(){i.nextExpectedAction=t,++i.sequenceLevels[e],i.resetSequenceTimer()}}function o(t){var a;i.fireCallback(r,t,e),"keyup"!==s&&(a=n("Bcrw"),i.ignoreNextKeyup=a(t)),setTimeout((function(){i.resetSequences()}),10)}i.sequenceLevels[e]=0;for(var c=0;c<t.length;++c){var l=c+1===t.length?o:a(s||i.getKeyInfo(t[c+1]).action);i.bindSingle(t[c],l,s,e,c)}}},khqB:function(e,t,n){"use strict";e.exports=function(e,t){return e.sort().join(",")===t.sort().join(",")}},kxiF:function(e,t,n){"use strict";var r=n("f0Wu"),s=n.n(r),i=n("LvDl");n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return h}));const a=1e6,o=Math.log10(1e3);const c=(e,t,n)=>function(e,t){const n=t+(Math.floor(Math.log10(Math.abs(e)))+1);return n<=0?Math.trunc(e):Number(e.toPrecision(n))}(e/n,t)*n;function l(e){return s()(e/1e3).format("MMMM D YYYY, HH:mm:ss.SSS")}function d(e){const t=c(e,o,1e3);return s.a.duration(t/1e3).asMilliseconds()+"ms"}function u(e){const t=c(e,o,a);return s.a.duration(t/1e3).asSeconds()+"s"}function h(e,t="microseconds"){let n=e;"microseconds"===t&&(n=e/1e3);let r="ms";return n>=1e3&&(r="s",n/=1e3),Object(i.round)(n,2)+r}},lI8u:function(e,t,n){"use strict";e.exports=function(e){var t;"number"!=typeof e.which&&(e.which=e.keyCode);var r=n("Bcrw")(e);void 0!==r&&("keyup"!==e.type||this.ignoreNextKeyup!==r?(t=n("EomD"),this.handleKey(r,t(e),e)):this.ignoreNextKeyup=!1)}},mvwf:function(e,t){},pHRz:function(e,t,n){"use strict";e.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}},pKQe:function(e,t,n){"use strict";e.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}},pdZY:function(e,t,n){"use strict";e.exports=function(e,t){var r,s,i,a,o,c,l=[];for(r=n("fBm0")(e),a=n("1aZc"),o=n("pHRz"),c=n("IfRf"),i=0;i<r.length;++i)a[s=r[i]]&&(s=a[s]),t&&"keypress"!==t&&o[s]&&(s=o[s],l.push("shift")),c(s)&&l.push(s);return{key:s,modifiers:l,action:t=this.pickBestAction(s,l,t)}}},"rhR/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"})))},e.exports=t.default},rzV7:function(e,t,n){"use strict";var r=Object.prototype.hasOwnProperty;function s(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,t){if(s(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(var a=0;a<n.length;a++)if(!r.call(t,n[a])||!s(e[n[a]],t[n[a]]))return!1;return!0}},snuD:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m31.6 31.6v-10.3h3.4v10.3c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h10.4v3.4h-10.4v23.2h23.2z m-9.1-26.6h12.5v12.5h-3.4v-6.8l-16.8 16.8-2.3-2.3 16.8-16.8h-6.8v-3.4z"})))},e.exports=t.default},uISq:function(e,t){e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},w2pd:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));const r=100,s="<trace-without-root-span>",i={DONE:"FETCH_DONE",ERROR:"FETCH_ERROR",LOADING:"FETCH_LOADING"}},xIog:function(e,t,n){"use strict";n.d(t,"o",(function(){return s})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"n",(function(){return c})),n.d(t,"m",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"h",(function(){return u})),n.d(t,"f",(function(){return h})),n.d(t,"p",(function(){return p})),n.d(t,"g",(function(){return g})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"i",(function(){return j}));var r=n("vF1F");const s=r.css`
  position: relative;
`,i=r.css`
  margin-bottom: 0.25rem;
`,a=r.css`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,o=r.css`
  margin: 0;
`,c=r.css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,l=r.css`
  padding-bottom: 0.5rem;
`,d=r.css`
  display: flex;
`,u=r.css`
  align-items: center;
`,h=r.css`
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`,p=r.css`
  text-align: right;
`,g=r.css`
  display: inline-block;
`,f=r.css`
  margin: -0.2rem 0.25rem 0 0;
`,b=r.css`
  text-overflow: ellipsis;
`,m=r.css`
  width: 100%;
`,v=r.css`
  color: #aaa;
`,j=r.css`
  justify-content: flex-end;
`},xmmm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.createChangeEmitter=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var s=t.indexOf(e);t.splice(s,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}},xpaS:function(e,t){},yD29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=a(n("q1tI")),i=a(n("TR4N"));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return s.default.createElement(i.default,r({viewBox:"0 0 40 40"},e),s.default.createElement("g",null,s.default.createElement("path",{d:"m17.5 13.8c3.4 0 6.3 2.8 6.3 6.2s-2.9 6.3-6.3 6.3-6.2-2.9-6.2-6.3 2.8-6.2 6.2-6.2z m14.9 4.6h2.6v3.2h-2.6c-0.8 7-6.3 12.5-13.3 13.3v2.6h-3.2v-2.6c-7-0.8-12.5-6.3-13.3-13.3h-2.6v-3.2h2.6c0.8-7 6.3-12.5 13.3-13.3v-2.6h3.2v2.6c7 0.8 12.5 6.3 13.3 13.3z m-14.9 13.2c6.4 0 11.6-5.2 11.6-11.6s-5.2-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.2 11.6 11.6 11.6z"})))},e.exports=t.default},zL40:function(e,t,n){"use strict";e.exports=function(e,t,n){return e=e instanceof Array?e:[e],this.bindMultiple(e,t,n),this}},zQGu:function(e,t,n){"use strict";e.exports=function(e,t,n){return n||(n=this.getReverseMap()[e]?"keydown":"keypress"),"keypress"===n&&t.length&&(n="keydown"),n}}}]);
//# sourceMappingURL=default~explore~jaegerPlugin.17511e2bf08b06f121f8.js.map