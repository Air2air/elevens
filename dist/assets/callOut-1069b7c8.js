import{j as A,F as Ye,k as Ze}from"./bannerComponents-c18b3df6.js";import{C as Je}from"./index-db3c1ee9.js";import{T as Ke}from"./titleCallout-ec92d07b.js";import{r as be,A as Qe}from"./vendor-632b4abd.js";import{a as et,b as tt}from"./calloutComponents-2135cd2b.js";import{c as b}from"./__commonjsHelpers__-725317a4.js";var T={},rt={get exports(){return T},set exports(e){T=e}},J={},K={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(n){n.Root="root",n.Text="text",n.Directive="directive",n.Comment="comment",n.Script="script",n.Style="style",n.Tag="tag",n.CDATA="cdata",n.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function r(n){return n.type===t.Tag||n.type===t.Script||n.type===t.Style}e.isTag=r,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(K);var f={},C=b&&b.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),P=b&&b.__assign||function(){return P=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},P.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0});f.cloneNode=f.hasChildren=f.isDocument=f.isDirective=f.isComment=f.isText=f.isCDATA=f.isTag=f.Element=f.Document=f.CDATA=f.NodeWithChildren=f.ProcessingInstruction=f.Comment=f.Text=f.DataNode=f.Node=void 0;var g=K,Q=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),ee(this,t)},e}();f.Node=Q;var L=function(e){C(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),t}(Q);f.DataNode=L;var xe=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.Text,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(L);f.Text=xe;var Ce=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.Comment,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(L);f.Comment=Ce;var Se=function(e){C(t,e);function t(r,n){var a=e.call(this,n)||this;return a.name=r,a.type=g.ElementType.Directive,a}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(L);f.ProcessingInstruction=Se;var j=function(e){C(t,e);function t(r){var n=e.call(this)||this;return n.children=r,n}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),t}(Q);f.NodeWithChildren=j;var ke=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.CDATA,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(j);f.CDATA=ke;var we=function(e){C(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=g.ElementType.Root,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(j);f.Document=we;var Oe=function(e){C(t,e);function t(r,n,a,s){a===void 0&&(a=[]),s===void 0&&(s=r==="script"?g.ElementType.Script:r==="style"?g.ElementType.Style:g.ElementType.Tag);var c=e.call(this,a)||this;return c.name=r,c.attribs=n,c.type=s,c}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(n){var a,s;return{name:n,value:r.attribs[n],namespace:(a=r["x-attribsNamespace"])===null||a===void 0?void 0:a[n],prefix:(s=r["x-attribsPrefix"])===null||s===void 0?void 0:s[n]}})},enumerable:!1,configurable:!0}),t}(j);f.Element=Oe;function Ae(e){return(0,g.isTag)(e)}f.isTag=Ae;function _e(e){return e.type===g.ElementType.CDATA}f.isCDATA=_e;function Pe(e){return e.type===g.ElementType.Text}f.isText=Pe;function Re(e){return e.type===g.ElementType.Comment}f.isComment=Re;function Ie(e){return e.type===g.ElementType.Directive}f.isDirective=Ie;function Ne(e){return e.type===g.ElementType.Root}f.isDocument=Ne;function nt(e){return Object.prototype.hasOwnProperty.call(e,"children")}f.hasChildren=nt;function ee(e,t){t===void 0&&(t=!1);var r;if(Pe(e))r=new xe(e.data);else if(Re(e))r=new Ce(e.data);else if(Ae(e)){var n=t?X(e.children):[],a=new Oe(e.name,P({},e.attribs),n);n.forEach(function(o){return o.parent=a}),e.namespace!=null&&(a.namespace=e.namespace),e["x-attribsNamespace"]&&(a["x-attribsNamespace"]=P({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(a["x-attribsPrefix"]=P({},e["x-attribsPrefix"])),r=a}else if(_e(e)){var n=t?X(e.children):[],s=new ke(n);n.forEach(function(l){return l.parent=s}),r=s}else if(Ne(e)){var n=t?X(e.children):[],c=new we(n);n.forEach(function(l){return l.parent=c}),e["x-mode"]&&(c["x-mode"]=e["x-mode"]),r=c}else if(Ie(e)){var i=new Se(e.name,e.data);e["x-name"]!=null&&(i["x-name"]=e["x-name"],i["x-publicId"]=e["x-publicId"],i["x-systemId"]=e["x-systemId"]),r=i}else throw new Error("Not implemented yet: ".concat(e.type));return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}f.cloneNode=ee;function X(e){for(var t=e.map(function(n){return ee(n,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}(function(e){var t=b&&b.__createBinding||(Object.create?function(i,o,l,p){p===void 0&&(p=l);var h=Object.getOwnPropertyDescriptor(o,l);(!h||("get"in h?!o.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return o[l]}}),Object.defineProperty(i,p,h)}:function(i,o,l,p){p===void 0&&(p=l),i[p]=o[l]}),r=b&&b.__exportStar||function(i,o){for(var l in i)l!=="default"&&!Object.prototype.hasOwnProperty.call(o,l)&&t(o,i,l)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var n=K,a=f;r(f,e);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},c=function(){function i(o,l,p){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof l=="function"&&(p=l,l=s),typeof o=="object"&&(l=o,o=void 0),this.callback=o??null,this.options=l??s,this.elementCB=p??null}return i.prototype.onparserinit=function(o){this.parser=o},i.prototype.onreset=function(){this.dom=[],this.root=new a.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},i.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},i.prototype.onerror=function(o){this.handleCallback(o)},i.prototype.onclosetag=function(){this.lastNode=null;var o=this.tagStack.pop();this.options.withEndIndices&&(o.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(o)},i.prototype.onopentag=function(o,l){var p=this.options.xmlMode?n.ElementType.Tag:void 0,h=new a.Element(o,l,void 0,p);this.addNode(h),this.tagStack.push(h)},i.prototype.ontext=function(o){var l=this.lastNode;if(l&&l.type===n.ElementType.Text)l.data+=o,this.options.withEndIndices&&(l.endIndex=this.parser.endIndex);else{var p=new a.Text(o);this.addNode(p),this.lastNode=p}},i.prototype.oncomment=function(o){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=o;return}var l=new a.Comment(o);this.addNode(l),this.lastNode=l},i.prototype.oncommentend=function(){this.lastNode=null},i.prototype.oncdatastart=function(){var o=new a.Text(""),l=new a.CDATA([o]);this.addNode(l),o.parent=l,this.lastNode=o},i.prototype.oncdataend=function(){this.lastNode=null},i.prototype.onprocessinginstruction=function(o,l){var p=new a.ProcessingInstruction(o,l);this.addNode(p)},i.prototype.handleCallback=function(o){if(typeof this.callback=="function")this.callback(o,this.dom);else if(o)throw o},i.prototype.addNode=function(o){var l=this.tagStack[this.tagStack.length-1],p=l.children[l.children.length-1];this.options.withStartIndices&&(o.startIndex=this.parser.startIndex),this.options.withEndIndices&&(o.endIndex=this.parser.endIndex),l.children.push(o),p&&(o.prev=p,p.next=o),o.parent=l,this.lastNode=null},i}();e.DomHandler=c,e.default=c})(J);var oe="html",le="head",R="body",it=/<([a-zA-Z]+[0-9]?)/,se=/<head[^]*>/i,ce=/<body[^]*>/i,N=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Y=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},ue=typeof window=="object"&&window.DOMParser;if(typeof ue=="function"){var at=new ue,ot="text/html";Y=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),at.parseFromString(e,ot)},N=Y}if(typeof document=="object"&&document.implementation){var I=document.implementation.createHTMLDocument();N=function(e,t){if(t){var r=I.documentElement.querySelector(t);return r.innerHTML=e,I}return I.documentElement.innerHTML=e,I}}var $=typeof document=="object"?document.createElement("template"):{},Z;$.content&&(Z=function(e){return $.innerHTML=e,$.content.childNodes});function lt(e){var t,r=e.match(it);r&&r[1]&&(t=r[1].toLowerCase());var n,a,s;switch(t){case oe:return n=Y(e),se.test(e)||(a=n.querySelector(le),a&&a.parentNode.removeChild(a)),ce.test(e)||(a=n.querySelector(R),a&&a.parentNode.removeChild(a)),n.querySelectorAll(oe);case le:case R:return n=N(e),s=n.querySelectorAll(t),ce.test(e)&&se.test(e)?s[0].parentNode.childNodes:s;default:return Z?Z(e):(a=N(e,R).querySelector(R),a.childNodes)}}var st=lt,te={},De={};De.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"];var F=J,ct=De,fe=ct.CASE_SENSITIVE_TAG_NAMES,ut=F.Comment,ft=F.Element,pt=F.ProcessingInstruction,dt=F.Text,Me={},W;for(var q=0,ht=fe.length;q<ht;q++)W=fe[q],Me[W.toLowerCase()]=W;function mt(e){return Me[e]}function Le(e){for(var t={},r,n=0,a=e.length;n<a;n++)r=e[n],t[r.name]=r.value;return t}function vt(e){e=e.toLowerCase();var t=mt(e);return t||e}function je(e,t,r){t=t||null;for(var n=[],a=0,s=e.length;a<s;a++){var c=e[a],i;switch(c.nodeType){case 1:i=new ft(vt(c.nodeName),Le(c.attributes)),i.children=je(c.childNodes,i);break;case 3:i=new dt(c.nodeValue);break;case 8:i=new ut(c.nodeValue);break;default:continue}var o=n[a-1]||null;o&&(o.next=i),i.parent=t,i.prev=o,i.next=null,n.push(i)}return r&&(i=new pt(r.substring(0,r.indexOf(" ")).toLowerCase(),r),i.next=n[0]||null,i.parent=t,n.unshift(i),n[1]&&(n[1].prev=n[0])),n}te.formatAttributes=Le;te.formatDOM=je;var gt=st,yt=te,Et=yt.formatDOM,Tt=/<(![a-zA-Z\s]+)>/;function bt(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(e==="")return[];var t=e.match(Tt),r;return t&&t[1]&&(r=t[1]),Et(gt(e),null,r)}var xt=bt,y={},H={},Ct=0;H.SAME=Ct;var St=1;H.CAMELCASE=St;H.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};Object.defineProperty(y,"__esModule",{value:!0});function kt(e,t){return wt(e)||Ot(e,t)||At(e,t)||_t()}function wt(e){if(Array.isArray(e))return e}function Ot(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],a=!0,s=!1,c,i;try{for(r=r.call(e);!(a=(c=r.next()).done)&&(n.push(c.value),!(t&&n.length===t));a=!0);}catch(o){s=!0,i=o}finally{try{!a&&r.return!=null&&r.return()}finally{if(s)throw i}}return n}}function At(e,t){if(e){if(typeof e=="string")return pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pe(e,t)}}function pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fe=0,S=1,z=2,B=3,re=4,He=5,ze=6;function Pt(e){return m.hasOwnProperty(e)?m[e]:null}function v(e,t,r,n,a,s,c){this.acceptsBooleans=t===z||t===B||t===re,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=c}var m={},Rt=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];Rt.forEach(function(e){m[e]=new v(e,Fe,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=kt(e,2),r=t[0],n=t[1];m[r]=new v(r,S,!1,n,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){m[e]=new v(e,z,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){m[e]=new v(e,z,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){m[e]=new v(e,B,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){m[e]=new v(e,B,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){m[e]=new v(e,re,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){m[e]=new v(e,ze,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){m[e]=new v(e,He,!1,e.toLowerCase(),null,!1,!1)});var ne=/[\-\:]([a-z])/g,ie=function(t){return t[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(ne,ie);m[t]=new v(t,S,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(ne,ie);m[t]=new v(t,S,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ne,ie);m[t]=new v(t,S,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){m[e]=new v(e,S,!1,e.toLowerCase(),null,!1,!1)});var It="xlinkHref";m[It]=new v("xlinkHref",S,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){m[e]=new v(e,S,!1,e.toLowerCase(),null,!0,!0)});var ae=H,Nt=ae.CAMELCASE,Dt=ae.SAME,de=ae.possibleStandardNames,Mt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Lt=Mt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",jt=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Lt+"]*$")),Ft=Object.keys(de).reduce(function(e,t){var r=de[t];return r===Dt?e[t]=t:r===Nt?e[t.toLowerCase()]=t:e[t]=r,e},{});y.BOOLEAN=B;y.BOOLEANISH_STRING=z;y.NUMERIC=He;y.OVERLOADED_BOOLEAN=re;y.POSITIVE_NUMERIC=ze;y.RESERVED=Fe;y.STRING=S;y.getPropertyInfo=Pt;y.isCustomAttribute=jt;y.possibleStandardNames=Ft;var Be={},D={},Ht={get exports(){return D},set exports(e){D=e}},he=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,zt=/\n/g,Bt=/^\s*/,Vt=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Gt=/^:\s*/,Ut=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Xt=/^[;\s]*/,$t=/^\s+|\s+$/g,Wt=`
`,me="/",ve="*",k="",qt="comment",Yt="declaration",Zt=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var r=1,n=1;function a(d){var u=d.match(zt);u&&(r+=u.length);var E=d.lastIndexOf(Wt);n=~E?d.length-E:n+d.length}function s(){var d={line:r,column:n};return function(u){return u.position=new c(d),l(),u}}function c(d){this.start=d,this.end={line:r,column:n},this.source=t.source}c.prototype.content=e;function i(d){var u=new Error(t.source+":"+r+":"+n+": "+d);if(u.reason=d,u.filename=t.source,u.line=r,u.column=n,u.source=e,!t.silent)throw u}function o(d){var u=d.exec(e);if(u){var E=u[0];return a(E),e=e.slice(E.length),u}}function l(){o(Bt)}function p(d){var u;for(d=d||[];u=h();)u!==!1&&d.push(u);return d}function h(){var d=s();if(!(me!=e.charAt(0)||ve!=e.charAt(1))){for(var u=2;k!=e.charAt(u)&&(ve!=e.charAt(u)||me!=e.charAt(u+1));)++u;if(u+=2,k===e.charAt(u-1))return i("End of comment missing");var E=e.slice(2,u-2);return n+=2,a(E),e=e.slice(u),n+=2,d({type:qt,comment:E})}}function O(){var d=s(),u=o(Vt);if(u){if(h(),!o(Gt))return i("property missing ':'");var E=o(Ut),qe=d({type:Yt,property:ge(u[0].replace(he,k)),value:E?ge(E[0].replace(he,k)):k});return o(Xt),qe}}function U(){var d=[];p(d);for(var u;u=O();)u!==!1&&(d.push(u),p(d));return d}return l(),U()};function ge(e){return e?e.replace($t,k):k}var Jt=Zt;function Ve(e,t){var r=null;if(!e||typeof e!="string")return r;for(var n,a=Jt(e),s=typeof t=="function",c,i,o=0,l=a.length;o<l;o++)n=a[o],c=n.property,i=n.value,s?t(c,i,n):i&&(r||(r={}),r[c]=i);return r}Ht.exports=Ve;D.default=Ve;var V={};V.__esModule=!0;V.camelCase=void 0;var Kt=/^--[a-zA-Z0-9-]+$/,Qt=/-([a-z])/g,er=/^[^-]+$/,tr=/^-(webkit|moz|ms|o|khtml)-/,rr=/^-(ms)-/,nr=function(e){return!e||er.test(e)||Kt.test(e)},ir=function(e,t){return t.toUpperCase()},ye=function(e,t){return"".concat(t,"-")},ar=function(e,t){return t===void 0&&(t={}),nr(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(rr,ye):e=e.replace(tr,ye),e.replace(Qt,ir))};V.camelCase=ar;(function(e){var t=b&&b.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};e.__esModule=!0;var r=t(D),n=V;function a(s,c){var i={};return!s||typeof s!="string"||(0,r.default)(s,function(o,l){o&&l&&(i[(0,n.camelCase)(o,c)]=l)}),i}e.default=a})(Be);var or=be,lr=Be.default;function sr(e,t){if(!e||typeof e!="object")throw new TypeError("First argument must be an object");var r,n,a=typeof t=="function",s={},c={};for(r in e){if(n=e[r],a&&(s=t(r,n),s&&s.length===2)){c[s[0]]=s[1];continue}typeof n=="string"&&(c[n]=r)}return c}function cr(e,t){if(e.indexOf("-")===-1)return t&&typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ur={reactCompat:!0};function fr(e,t){if(e!=null)try{t.style=lr(e,ur)}catch{t.style={}}}var pr=or.version.split(".")[0]>=16,Ge=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);function dr(e){return!Ge.has(e.name)}var Ue={PRESERVE_CUSTOM_ATTRIBUTES:pr,invertObject:sr,isCustomComponent:cr,setStyleProp:fr,canTextBeChildOfNode:dr,elementsWithNoTextChildren:Ge},_=y,Ee=Ue,Xe=function(t,r){t=t||{};var n={reset:!0,submit:!0},a,s,c,i,o,l={},p=t.type&&n[t.type];for(a in t){if(c=t[a],_.isCustomAttribute(a)){l[a]=c;continue}if(s=a.toLowerCase(),i=Te(s),i){switch(o=_.getPropertyInfo(i),(i==="checked"||i==="value")&&r!=="option"&&!p&&(i=Te("default"+s)),l[i]=c,o&&o.type){case _.BOOLEAN:l[i]=!0;break;case _.OVERLOADED_BOOLEAN:c===""&&(l[i]=!0);break}continue}Ee.PRESERVE_CUSTOM_ATTRIBUTES&&(l[a]=c)}return Ee.setStyleProp(t.style,l),l};function Te(e){return _.possibleStandardNames[e]}var hr=be,mr=Xe,M=Ue,vr=M.setStyleProp,gr=M.canTextBeChildOfNode;function $e(e,t){t=t||{};for(var r=t.library||hr,n=r.cloneElement,a=r.createElement,s=r.isValidElement,c=[],i,o,l=typeof t.replace=="function",p,h,O,U=t.trim,d=0,u=e.length;d<u;d++){if(i=e[d],l&&(p=t.replace(i),s(p))){u>1&&(p=n(p,{key:p.key||d})),c.push(p);continue}if(i.type==="text"){if(o=!i.data.trim().length,o&&i.parent&&!gr(i.parent)||U&&o)continue;c.push(i.data);continue}switch(h=i.attribs,yr(i)?vr(h.style,h):h&&(h=mr(h,i.name)),O=null,i.type){case"script":case"style":i.children[0]&&(h.dangerouslySetInnerHTML={__html:i.children[0].data});break;case"tag":i.name==="textarea"&&i.children[0]?h.defaultValue=i.children[0].data:i.children&&i.children.length&&(O=$e(i.children,t));break;default:continue}u>1&&(h.key=d),c.push(a(i.name,h,O))}return c.length===1?c[0]:c}function yr(e){return M.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&M.isCustomComponent(e.name,e.attribs)}var Er=$e,G=J,w=xt,Tr=Xe,We=Er;w=typeof w.default=="function"?w.default:w;var br={lowerCaseAttributeNames:!1};function x(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");return e===""?[]:(t=t||{},We(w(e,t.htmlparser2||br),t))}x.domToReact=We;x.htmlToDOM=w;x.attributesToProps=Tr;x.Comment=G.Comment;x.Element=G.Element;x.ProcessingInstruction=G.ProcessingInstruction;x.Text=G.Text;rt.exports=x;T.default=x;T.domToReact;T.htmlToDOM;T.attributesToProps;T.Comment;T.Element;T.ProcessingInstruction;T.Text;const xr=T,_r=e=>{const t=e.text?xr(e.text):"Data fetch error in Text";return A(Ye,{children:A(Je,{...e,children:Ze(et,{children:[A(Ke,{title:e.title}),A(Qe,{animateIn:"animate__fadeIn",delay:0,offset:60,children:A(tt,{children:t})})]})})})};export{_r as C};
