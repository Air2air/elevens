import{a as Wn,s as Ae,B as dn,j as V,F as Oe,b as dt}from"./bannerCSS-18d11c47.js";import{a as Pe,L as Se}from"./index-4213c5a9.js";import{B as vn,a as Ee,b as Ce}from"./buttonComponents-f575d892.js";var b={},Ie={get exports(){return b},set exports(t){b=t}},Te="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ne=Te,_e=Ne;function Hn(){}function Bn(){}Bn.resetWarningCache=Hn;var Re=function(){function t(a,r,i,o,s,f){if(f!==_e){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function n(){return t}var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:n,element:t,elementType:t,instanceOf:n,node:t,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:Bn,resetWarningCache:Hn};return e.PropTypes=e,e};Ie.exports=Re();function bn(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?bn(Object(e),!0).forEach(function(a){O(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):bn(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Pt(t){return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pt(t)}function Le(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function pn(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Me(t,n,e){return n&&pn(t.prototype,n),e&&pn(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Zt(t,n){return je(t)||De(t,n)||Gn(t,n)||Ye()}function ct(t){return Fe(t)||ze(t)||Gn(t)||$e()}function Fe(t){if(Array.isArray(t))return Dt(t)}function je(t){if(Array.isArray(t))return t}function ze(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function De(t,n){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var a=[],r=!0,i=!1,o,s;try{for(e=e.call(t);!(r=(o=e.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&e.return!=null&&e.return()}finally{if(i)throw s}}return a}}function Gn(t,n){if(t){if(typeof t=="string")return Dt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Dt(t,n)}}function Dt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function $e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gn=function(){},tn={},Xn={},Vn=null,qn={mark:gn,measure:gn};try{typeof window<"u"&&(tn=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(Vn=MutationObserver),typeof performance<"u"&&(qn=performance)}catch{}var Ue=tn.navigator||{},hn=Ue.userAgent,yn=hn===void 0?"":hn,D=tn,h=Xn,kn=Vn,vt=qn;D.document;var M=!!h.documentElement&&!!h.head&&typeof h.addEventListener=="function"&&typeof h.createElement=="function",Kn=~yn.indexOf("MSIE")||~yn.indexOf("Trident/"),bt,pt,gt,ht,yt,_="___FONT_AWESOME___",$t=16,Qn="fa",Jn="svg-inline--fa",G="data-fa-i2svg",Yt="data-fa-pseudo-element",We="data-fa-pseudo-element-pending",nn="data-prefix",en="data-icon",xn="fontawesome-i2svg",He="async",Be=["HTML","HEAD","STYLE","SCRIPT"],Zn=function(){try{return!0}catch{return!1}}(),g="classic",y="sharp",an=[g,y];function ut(t){return new Proxy(t,{get:function(e,a){return a in e?e[a]:e[g]}})}var it=ut((bt={},O(bt,g,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(bt,y,{fa:"solid",fass:"solid","fa-solid":"solid"}),bt)),ot=ut((pt={},O(pt,g,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(pt,y,{solid:"fass"}),pt)),st=ut((gt={},O(gt,g,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(gt,y,{fass:"fa-solid"}),gt)),Ge=ut((ht={},O(ht,g,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(ht,y,{"fa-solid":"fass"}),ht)),Xe=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,te="fa-layers-text",Ve=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qe=ut((yt={},O(yt,g,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(yt,y,{900:"fass"}),yt)),ne=[1,2,3,4,5,6,7,8,9,10],Ke=ne.concat([11,12,13,14,15,16,17,18,19,20]),Qe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ft=new Set;Object.keys(ot[g]).map(ft.add.bind(ft));Object.keys(ot[y]).map(ft.add.bind(ft));var Je=[].concat(an,ct(ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(ne.map(function(t){return"".concat(t,"x")})).concat(Ke.map(function(t){return"w-".concat(t)})),at=D.FontAwesomeConfig||{};function Ze(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(h&&typeof h.querySelector=="function"){var na=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];na.forEach(function(t){var n=Zt(t,2),e=n[0],a=n[1],r=ta(Ze(e));r!=null&&(at[a]=r)})}var ee={styleDefault:"solid",familyDefault:"classic",cssPrefix:Qn,replacementClass:Jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};at.familyPrefix&&(at.cssPrefix=at.familyPrefix);var Z=u(u({},ee),at);Z.autoReplaceSvg||(Z.observeMutations=!1);var d={};Object.keys(ee).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(e){Z[t]=e,rt.forEach(function(a){return a(d)})},get:function(){return Z[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(n){Z.cssPrefix=n,rt.forEach(function(e){return e(d)})},get:function(){return Z.cssPrefix}});D.FontAwesomeConfig=d;var rt=[];function ea(t){return rt.push(t),function(){rt.splice(rt.indexOf(t),1)}}var j=$t,N={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aa(t){if(!(!t||!M)){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=h.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}}var ra="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){for(var t=12,n="";t-- >0;)n+=ra[Math.random()*62|0];return n}function nt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function rn(t){return t.classList?nt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(n){return n})}function ae(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ia(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,'="').concat(ae(t[e]),'" ')},"").trim()}function It(t){return Object.keys(t||{}).reduce(function(n,e){return n+"".concat(e,": ").concat(t[e].trim(),";")},"")}function on(t){return t.size!==N.size||t.x!==N.x||t.y!==N.y||t.rotate!==N.rotate||t.flipX||t.flipY}function oa(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function sa(t){var n=t.transform,e=t.width,a=e===void 0?$t:e,r=t.height,i=r===void 0?$t:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Kn?f+="translate(".concat(n.x/j-a/2,"em, ").concat(n.y/j-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/j,"em), calc(-50% + ").concat(n.y/j,"em)) "):f+="translate(".concat(n.x/j,"em, ").concat(n.y/j,"em) "),f+="scale(".concat(n.size/j*(n.flipX?-1:1),", ").concat(n.size/j*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var fa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function re(){var t=Qn,n=Jn,e=d.cssPrefix,a=d.replacementClass,r=fa;if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var wn=!1;function Lt(){d.autoAddCss&&!wn&&(aa(re()),wn=!0)}var la={mixout:function(){return{dom:{css:re,insertCss:Lt}}},hooks:function(){return{beforeDOMElementCreation:function(){Lt()},beforeI2svg:function(){Lt()}}}},R=D||{};R[_]||(R[_]={});R[_].styles||(R[_].styles={});R[_].hooks||(R[_].hooks={});R[_].shims||(R[_].shims=[]);var T=R[_],ie=[],ca=function t(){h.removeEventListener("DOMContentLoaded",t),St=1,ie.map(function(n){return n()})},St=!1;M&&(St=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState),St||h.addEventListener("DOMContentLoaded",ca));function ua(t){M&&(St?setTimeout(t,0):ie.push(t))}function mt(t){var n=t.tag,e=t.attributes,a=e===void 0?{}:e,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?ae(t):"<".concat(n," ").concat(ia(a),">").concat(i.map(mt).join(""),"</").concat(n,">")}function An(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ma=function(n,e){return function(a,r,i,o){return n.call(e,a,r,i,o)}},Mt=function(n,e,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?ma(e,r):e,f,l,c;for(a===void 0?(f=1,c=n[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,n[l],l,n);return c};function da(t){for(var n=[],e=0,a=t.length;e<a;){var r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){var i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function Ut(t){var n=da(t);return n.length===1?n[0].toString(16):null}function va(t,n){var e=t.length,a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function On(t){return Object.keys(t).reduce(function(n,e){var a=t[e],r=!!a.icon;return r?n[a.iconName]=a.icon:n[e]=a,n},{})}function Wt(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.skipHooks,r=a===void 0?!1:a,i=On(n);typeof T.hooks.addPack=="function"&&!r?T.hooks.addPack(t,On(n)):T.styles[t]=u(u({},T.styles[t]||{}),i),t==="fas"&&Wt("fa",n)}var kt,xt,wt,q=T.styles,ba=T.shims,pa=(kt={},O(kt,g,Object.values(st[g])),O(kt,y,Object.values(st[y])),kt),sn=null,oe={},se={},fe={},le={},ce={},ga=(xt={},O(xt,g,Object.keys(it[g])),O(xt,y,Object.keys(it[y])),xt);function ha(t){return~Je.indexOf(t)}function ya(t,n){var e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!ha(r)?r:null}var ue=function(){var n=function(i){return Mt(q,function(o,s,f){return o[f]=Mt(s,i,{}),o},{})};oe=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),se=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),ce=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var e="far"in q||d.autoFetchSvg,a=Mt(ba,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});fe=a.names,le=a.unicodes,sn=Tt(d.styleDefault,{family:d.familyDefault})};ea(function(t){sn=Tt(t.styleDefault,{family:d.familyDefault})});ue();function fn(t,n){return(oe[t]||{})[n]}function ka(t,n){return(se[t]||{})[n]}function B(t,n){return(ce[t]||{})[n]}function me(t){return fe[t]||{prefix:null,iconName:null}}function xa(t){var n=le[t],e=fn("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function $(){return sn}var ln=function(){return{prefix:null,iconName:null,rest:[]}};function Tt(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.family,a=e===void 0?g:e,r=it[a][t],i=ot[a][t]||ot[a][r],o=t in T.styles?t:null;return i||o||null}var Pn=(wt={},O(wt,g,Object.keys(st[g])),O(wt,y,Object.keys(st[y])),wt);function Nt(t){var n,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.skipLookups,r=a===void 0?!1:a,i=(n={},O(n,g,"".concat(d.cssPrefix,"-").concat(g)),O(n,y,"".concat(d.cssPrefix,"-").concat(y)),n),o=null,s=g;(t.includes(i[g])||t.some(function(l){return Pn[g].includes(l)}))&&(s=g),(t.includes(i[y])||t.some(function(l){return Pn[y].includes(l)}))&&(s=y);var f=t.reduce(function(l,c){var m=ya(d.cssPrefix,c);if(q[c]?(c=pa[s].includes(c)?Ge[s][c]:c,o=c,l.prefix=c):ga[s].indexOf(c)>-1?(o=c,l.prefix=Tt(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[g]&&c!==i[y]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var v=o==="fa"?me(l.iconName):{},p=B(l.prefix,l.iconName);v.prefix&&(o=null),l.iconName=v.iconName||p||l.iconName,l.prefix=v.prefix||l.prefix,l.prefix==="far"&&!q.far&&q.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},ln());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===y&&(q.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=B(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=$()||"fas"),f}var wa=function(){function t(){Le(this,t),this.definitions={}}return Me(t,[{key:"add",value:function(){for(var e=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){e.definitions[s]=u(u({},e.definitions[s]||{}),o[s]),Wt(s,o[s]);var f=st[g][s];f&&Wt(f,o[s]),ue()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];e[s]||(e[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(e[s][m]=l)}),e[s][f]=l}),e}}]),t}(),Sn=[],K={},J={},Aa=Object.keys(J);function Oa(t,n){var e=n.mixoutsTo;return Sn=t,K={},Object.keys(J).forEach(function(a){Aa.indexOf(a)===-1&&delete J[a]}),Sn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(e[o]=r[o]),Pt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){e[o]||(e[o]={}),e[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){K[o]||(K[o]=[]),K[o].push(i[o])})}a.provides&&a.provides(J)}),e}function Ht(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];var i=K[t]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function X(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];var r=K[t]||[];r.forEach(function(i){i.apply(null,e)})}function L(){var t=arguments[0],n=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,n):void 0}function Bt(t){t.prefix==="fa"&&(t.prefix="fas");var n=t.iconName,e=t.prefix||$();if(n)return n=B(e,n)||n,An(de.definitions,e,n)||An(T.styles,e,n)}var de=new wa,Pa=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,X("noAuto")},Sa={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return M?(X("beforeI2svg",n),L("pseudoElements2svg",n),L("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,ua(function(){Ca({autoReplaceSvgRoot:e}),X("watch",n)})}},Ea={icon:function(n){if(n===null)return null;if(Pt(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:B(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Tt(n[0]);return{prefix:a,iconName:B(a,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(d.cssPrefix,"-"))>-1||n.match(Xe))){var r=Nt(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||$(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=$();return{prefix:i,iconName:B(i,n)||n}}}},I={noAuto:Pa,config:d,dom:Sa,parse:Ea,library:de,findIconDefinition:Bt,toHtml:mt},Ca=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.autoReplaceSvgRoot,a=e===void 0?h:e;(Object.keys(T.styles).length>0||d.autoFetchSvg)&&M&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function _t(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return mt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(M){var a=h.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Ia(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(on(o)&&e.found&&!a.found){var s=e.width,f=e.height,l={x:s/f/2,y:.5};r.style=It(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Ta(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(n,"-").concat(d.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function cn(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,v=t.watchable,p=v===void 0?!1:v,w=a.found?a:e,S=w.width,k=w.height,E=r==="fak",x=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(F){return m.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(m.classes).join(" "),A={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})},C=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};p&&(A.attributes[G]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||lt())},children:[f]}),delete A.attributes.title);var P=u(u({},A),{},{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},C),m.styles)}),U=a.found&&e.found?L("generateAbstractMask",P)||{children:[],attributes:{}}:L("generateAbstractIcon",P)||{children:[],attributes:{}},W=U.children,Rt=U.attributes;return P.children=W,P.attributes=Rt,s?Ta(P):Ia(P)}function En(t){var n=t.content,e=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[G]="");var c=u({},o.styles);on(r)&&(c.transform=sa({transform:r,startCentered:!0,width:e,height:a}),c["-webkit-transform"]=c.transform);var m=It(c);m.length>0&&(l.style=m);var v=[];return v.push({tag:"span",attributes:l,children:[n]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Na(t){var n=t.content,e=t.title,a=t.extra,r=u(u(u({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=It(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var Ft=T.styles;function Gt(t){var n=t[0],e=t[1],a=t.slice(4),r=Zt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}var _a={found:!1,width:512,height:512};function Ra(t,n){!Zn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Xt(t,n){var e=n;return n==="fa"&&d.styleDefault!==null&&(n=$()),new Promise(function(a,r){if(L("missingIconAbstract"),e==="fa"){var i=me(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&Ft[n]&&Ft[n][t]){var o=Ft[n][t];return a(Gt(o))}Ra(t,n),a(u(u({},_a),{},{icon:d.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}var Cn=function(){},Vt=d.measurePerformance&&vt&&vt.mark&&vt.measure?vt:{mark:Cn,measure:Cn},et='FA "6.2.1"',La=function(n){return Vt.mark("".concat(et," ").concat(n," begins")),function(){return ve(n)}},ve=function(n){Vt.mark("".concat(et," ").concat(n," ends")),Vt.measure("".concat(et," ").concat(n),"".concat(et," ").concat(n," begins"),"".concat(et," ").concat(n," ends"))},un={begin:La,end:ve},At=function(){};function In(t){var n=t.getAttribute?t.getAttribute(G):null;return typeof n=="string"}function Ma(t){var n=t.getAttribute?t.getAttribute(nn):null,e=t.getAttribute?t.getAttribute(en):null;return n&&e}function Fa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function ja(){if(d.autoReplaceSvg===!0)return Ot.replace;var t=Ot[d.autoReplaceSvg];return t||Ot.replace}function za(t){return h.createElementNS("http://www.w3.org/2000/svg",t)}function Da(t){return h.createElement(t)}function be(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=n.ceFn,a=e===void 0?t.tag==="svg"?za:Da:e;if(typeof t=="string")return h.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(be(o,{ceFn:a}))}),r}function $a(t){var n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ot={replace:function(n){var e=n[0];if(e.parentNode)if(n[1].forEach(function(r){e.parentNode.insertBefore(be(r),e)}),e.getAttribute(G)===null&&d.keepOriginalSource){var a=h.createComment($a(e));e.parentNode.replaceChild(a,e)}else e.remove()},nest:function(n){var e=n[0],a=n[1];if(~rn(e).indexOf(d.replacementClass))return Ot.replace(n);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return mt(s)}).join(`
`);e.setAttribute(G,""),e.innerHTML=o}};function Tn(t){t()}function pe(t,n){var e=typeof n=="function"?n:At;if(t.length===0)e();else{var a=Tn;d.mutateApproach===He&&(a=D.requestAnimationFrame||Tn),a(function(){var r=ja(),i=un.begin("mutate");t.map(r),i(),e()})}}var mn=!1;function ge(){mn=!0}function qt(){mn=!1}var Et=null;function Nn(t){if(kn&&d.observeMutations){var n=t.treeCallback,e=n===void 0?At:n,a=t.nodeCallback,r=a===void 0?At:a,i=t.pseudoElementsCallback,o=i===void 0?At:i,s=t.observeMutationsRoot,f=s===void 0?h:s;Et=new kn(function(l){if(!mn){var c=$();nt(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!In(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&In(m.target)&&~Qe.indexOf(m.attributeName))if(m.attributeName==="class"&&Ma(m.target)){var v=Nt(rn(m.target)),p=v.prefix,w=v.iconName;m.target.setAttribute(nn,p||c),w&&m.target.setAttribute(en,w)}else Fa(m.target)&&r(m.target)})}}),M&&Et.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ya(){Et&&Et.disconnect()}function Ua(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),e}function Wa(t){var n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Nt(rn(t));return r.prefix||(r.prefix=$()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ka(r.prefix,t.innerText)||fn(r.prefix,Ut(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ha(t){var n=nt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(e?n["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||lt()):(n["aria-hidden"]="true",n.focusable="false")),n}function Ba(){return{iconName:null,title:null,titleId:null,prefix:null,transform:N,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function _n(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Wa(t),a=e.iconName,r=e.prefix,i=e.rest,o=Ha(t),s=Ht("parseNodeAttributes",{},t),f=n.styleParser?Ua(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:N,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Ga=T.styles;function he(t){var n=d.autoReplaceSvg==="nest"?_n(t,{styleParser:!1}):_n(t);return~n.extra.classes.indexOf(te)?L("generateLayersText",t,n):L("generateSvgReplacementMutation",t,n)}var Y=new Set;an.map(function(t){Y.add("fa-".concat(t))});Object.keys(it[g]).map(Y.add.bind(Y));Object.keys(it[y]).map(Y.add.bind(Y));Y=ct(Y);function Rn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!M)return Promise.resolve();var e=h.documentElement.classList,a=function(m){return e.add("".concat(xn,"-").concat(m))},r=function(m){return e.remove("".concat(xn,"-").concat(m))},i=d.autoFetchSvg?Y:an.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ga));i.includes("fa")||i.push("fa");var o=[".".concat(te,":not([").concat(G,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=nt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=un.begin("onTree"),l=s.reduce(function(c,m){try{var v=he(m);v&&c.push(v)}catch(p){Zn||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(v){pe(v,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),c()})}).catch(function(v){f(),m(v)})})}function Xa(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;he(t).then(function(e){e&&pe([e],n)})}function Va(t){return function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:Bt(n||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Bt(r||{})),t(a,u(u({},e),{},{mask:r}))}}var qa=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.transform,r=a===void 0?N:a,i=e.symbol,o=i===void 0?!1:i,s=e.mask,f=s===void 0?null:s,l=e.maskId,c=l===void 0?null:l,m=e.title,v=m===void 0?null:m,p=e.titleId,w=p===void 0?null:p,S=e.classes,k=S===void 0?[]:S,E=e.attributes,x=E===void 0?{}:E,A=e.styles,C=A===void 0?{}:A;if(n){var P=n.prefix,U=n.iconName,W=n.icon;return _t(u({type:"icon"},n),function(){return X("beforeDOMElementCreation",{iconDefinition:n,params:e}),d.autoA11y&&(v?x["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(w||lt()):(x["aria-hidden"]="true",x.focusable="false")),cn({icons:{main:Gt(W),mask:f?Gt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:U,transform:u(u({},N),r),symbol:o,title:v,maskId:c,titleId:w,extra:{attributes:x,styles:C,classes:k}})})}},Ka={mixout:function(){return{icon:Va(qa)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Rn,e.nodeCallback=Xa,e}}},provides:function(n){n.i2svg=function(e){var a=e.node,r=a===void 0?h:a,i=e.callback,o=i===void 0?function(){}:i;return Rn(r,o)},n.generateSvgReplacementMutation=function(e,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,v=a.extra;return new Promise(function(p,w){Promise.all([Xt(r,s),c.iconName?Xt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var k=Zt(S,2),E=k[0],x=k[1];p([e,cn({icons:{main:E,mask:x},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(w)})},n.generateAbstractIcon=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.transform,s=e.styles,f=It(s);f.length>0&&(r.style=f);var l;return on(o)&&(l=L("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Qa={mixout:function(){return{layer:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return _t({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:e,params:a});var o=[];return e(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ct(i)).join(" ")},children:o}]})}}}},Ja={mixout:function(){return{counter:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return _t({type:"counter",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:a}),Na({content:e.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ct(s))}})})}}}},Za={mixout:function(){return{text:function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?N:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,v=a.styles,p=v===void 0?{}:v;return _t({type:"text",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:a}),En({content:e,transform:u(u({},N),i),title:s,extra:{attributes:m,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ct(l))}})})}}},provides:function(n){n.generateLayersText=function(e,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Kn){var l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,En({content:e.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},tr=new RegExp('"',"ug"),Ln=[1105920,1112319];function nr(t){var n=t.replace(tr,""),e=va(n,0),a=e>=Ln[0]&&e<=Ln[1],r=n.length===2?n[0]===n[1]:!1;return{value:Ut(r?n[0]:n),isSecondary:a||r}}function Mn(t,n){var e="".concat(We).concat(n.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(e)!==null)return a();var i=nt(t.children),o=i.filter(function(W){return W.getAttribute(Yt)===n})[0],s=D.getComputedStyle(t,n),f=s.getPropertyValue("font-family").match(Ve),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?y:g,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ot[v][f[2].toLowerCase()]:qe[v][l],w=nr(m),S=w.value,k=w.isSecondary,E=f[0].startsWith("FontAwesome"),x=fn(p,S),A=x;if(E){var C=xa(S);C.iconName&&C.prefix&&(x=C.iconName,p=C.prefix)}if(x&&!k&&(!o||o.getAttribute(nn)!==p||o.getAttribute(en)!==A)){t.setAttribute(e,A),o&&t.removeChild(o);var P=Ba(),U=P.extra;U.attributes[Yt]=n,Xt(x,p).then(function(W){var Rt=cn(u(u({},P),{},{icons:{main:W,mask:ln()},prefix:p,iconName:A,extra:U,watchable:!0})),F=h.createElement("svg");n==="::before"?t.insertBefore(F,t.firstChild):t.appendChild(F),F.outerHTML=Rt.map(function(we){return mt(we)}).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function er(t){return Promise.all([Mn(t,"::before"),Mn(t,"::after")])}function ar(t){return t.parentNode!==document.head&&!~Be.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Fn(t){if(M)return new Promise(function(n,e){var a=nt(t.querySelectorAll("*")).filter(ar).map(er),r=un.begin("searchPseudoElements");ge(),Promise.all(a).then(function(){r(),qt(),n()}).catch(function(){r(),qt(),e()})})}var rr={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Fn,e}}},provides:function(n){n.pseudoElements2svg=function(e){var a=e.node,r=a===void 0?h:a;d.searchPseudoElements&&Fn(r)}}},jn=!1,ir={mixout:function(){return{dom:{unwatch:function(){ge(),jn=!0}}}},hooks:function(){return{bootstrap:function(){Nn(Ht("mutationObserverCallbacks",{}))},noAuto:function(){Ya()},watch:function(e){var a=e.observeMutationsRoot;jn?qt():Nn(Ht("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},zn=function(n){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},e)},or={mixout:function(){return{parse:{transform:function(e){return zn(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-transform");return r&&(e.transform=zn(r)),e}}},provides:function(n){n.generateAbstractTransformGrouping=function(e){var a=e.main,r=e.transform,i=e.containerWidth,o=e.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),p.path)}]}]}}}},jt={x:0,y:0,width:"100%",height:"100%"};function Dn(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function sr(t){return t.tag==="g"?t.children:[t]}var fr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-mask"),i=r?Nt(r.split(" ").map(function(o){return o.trim()})):ln();return i.prefix||(i.prefix=$()),e.mask=i,e.maskId=a.getAttribute("data-fa-mask-id"),e}}},provides:function(n){n.generateAbstractMask=function(e){var a=e.children,r=e.attributes,i=e.main,o=e.mask,s=e.maskId,f=e.transform,l=i.width,c=i.icon,m=o.width,v=o.icon,p=oa({transform:f,containerWidth:m,iconWidth:l}),w={tag:"rect",attributes:u(u({},jt),{},{fill:"white"})},S=c.children?{children:c.children.map(Dn)}:{},k={tag:"g",attributes:u({},p.inner),children:[Dn(u({tag:c.tag,attributes:u(u({},c.attributes),p.path)},S))]},E={tag:"g",attributes:u({},p.outer),children:[k]},x="mask-".concat(s||lt()),A="clip-".concat(s||lt()),C={tag:"mask",attributes:u(u({},jt),{},{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,E]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:sr(v)},C]};return a.push(P,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(x,")")},jt)}),{children:a,attributes:r}}}},lr={provides:function(n){var e=!1;D.matchMedia&&(e=D.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},cr={hooks:function(){return{parseNodeAttributes:function(e,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return e.symbol=i,e}}}},ur=[la,Ka,Qa,Ja,Za,rr,ir,or,fr,lr,cr];Oa(ur,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var Kt=I.parse;I.findIconDefinition;I.toHtml;var mr=I.icon;I.layer;I.text;I.counter;function $n(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function z(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?$n(Object(e),!0).forEach(function(a){Q(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):$n(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function Ct(t){return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ct(t)}function Q(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function dr(t,n){if(t==null)return{};var e={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(e[r]=t[r]);return e}function vr(t,n){if(t==null)return{};var e=dr(t,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(e[a]=t[a])}return e}function Qt(t){return br(t)||pr(t)||gr(t)||hr()}function br(t){if(Array.isArray(t))return Jt(t)}function pr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gr(t,n){if(t){if(typeof t=="string")return Jt(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);if(e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set")return Array.from(t);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Jt(t,n)}}function Jt(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,a=new Array(n);e<n;e++)a[e]=t[e];return a}function hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(t){var n,e=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,v=t.fixedWidth,p=t.inverse,w=t.border,S=t.listItem,k=t.flip,E=t.size,x=t.rotation,A=t.pull,C=(n={"fa-beat":e,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":v,"fa-inverse":p,"fa-border":w,"fa-li":S,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Q(n,"fa-".concat(E),typeof E<"u"&&E!==null),Q(n,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),Q(n,"fa-pull-".concat(A),typeof A<"u"&&A!==null),Q(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(C).map(function(P){return C[P]?P:null}).filter(function(P){return P})}function kr(t){return t=t-0,t===t}function ye(t){return kr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(n,e){return e?e.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var xr=["style"];function wr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ar(t){return t.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,e){var a=e.indexOf(":"),r=ye(e.slice(0,a)),i=e.slice(a+1).trim();return r.startsWith("webkit")?n[wr(r)]=i:n[r]=i,n},{})}function ke(t,n){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(f){return ke(t,f)}),r=Object.keys(n.attributes||{}).reduce(function(f,l){var c=n.attributes[l];switch(l){case"class":f.attrs.className=c,delete n.attributes.class;break;case"style":f.attrs.style=Ar(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[ye(l)]=c}return f},{attrs:{}}),i=e.style,o=i===void 0?{}:i,s=vr(e,xr);return r.attrs.style=z(z({},r.attrs.style),o),t.apply(void 0,[n.tag,z(z({},r.attrs),s)].concat(Qt(a)))}var xe=!1;try{xe=!0}catch{}function Or(){if(!xe&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Yn(t){if(t&&Ct(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kt.icon)return Kt.icon(t);if(t===null)return null;if(t&&Ct(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function zt(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?Q({},t,n):{}}var tt=Wn.forwardRef(function(t,n){var e=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Yn(e),c=zt("classes",[].concat(Qt(yr(t)),Qt(i.split(" ")))),m=zt("transform",typeof t.transform=="string"?Kt.transform(t.transform):t.transform),v=zt("mask",Yn(a)),p=mr(l,z(z(z(z({},c),m),v),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!p)return Or("Could not find icon",l),null;var w=p.abstract,S={ref:n};return Object.keys(t).forEach(function(k){tt.defaultProps.hasOwnProperty(k)||(S[k]=t[k])}),Pr(w[0],S)});tt.displayName="FontAwesomeIcon";tt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};tt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Pr=ke.bind(null,Wn.createElement),Un={prefix:"fas",iconName:"chevron-right",icon:[384,512,[9002],"f054","M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};const Tr=t=>V(Oe,{children:V(Pe,{backgroundColor:t.backgroundColor,children:V(Sr,{children:dt(Se,{to:t.buttonTo,children:[dt(Ee,{buttonColor:t.buttonColor,children:[dt("span",{children:[t.buttonText," "]}),V(tt,{icon:Un,size:"xs"})]}),dt(Ce,{buttonColor:t.buttonColor,children:[V("span",{children:t.buttonText}),V(tt,{icon:Un,size:"xs"})]})]})})})}),Sr=Ae.div`
  width: 100%;
  @media (min-width: ${dn}px) {
    height: ${vn}px;
    text-align: right;
    justify-content: flex-end;
  }
  @media (max-width: ${dn}px) {
    height: ${vn}px;
  }
  /* background: green; */
`;export{Tr as R,b as p};
