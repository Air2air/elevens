import{C as _e,a as U,b as ue,c as Ee,d as Oe,e as Te,f as K,B as o,g as xe,h as we,i as k,j as e,k as c,l as $e,F as p,m as j,n as ye,o as He}from"./bannerComponents-c18b3df6.js";import{r as i,s as n,L as _,A as Z,u as q,a as Ie,b as ve,Q as Le,c as be,R as Ne,d as Ce,W as Re,e as Se,f as Ae,B as De}from"./vendor-632b4abd.js";import"./__commonjsHelpers__-725317a4.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&m(h)}).observe(document,{childList:!0,subtree:!0});function d(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(r){if(r.ep)return;r.ep=!0;const a=d(r);fetch(r.href,a)}})();const I='"Roboto Condensed Light", sans-serif',v='"Source Sans Pro", sans-serif',O='"Roboto Condensed", sans-serif',Fe="2.4em",ke="1.7em",Be="1.5em",Pe="1.1em",Me="1.6em",ze="1.3em",Ge="1.05em",We=".9em",Y="1.05em",Q=".95em",Ve="1.1em",Ue="1.1em",Ke="1.8em",je="1.6em",Ze="1.7em",qe="1.2em",X="1.7em",J="1.2em",Ye="1.5em",Qe="1.3em",L=100,b=300,T=500,Xe=600,on=`font-weight: ${L}; font-size: ${Fe}; font-family: ${I}; line-height: ${Ze};`,rn=`font-weight: ${L}; font-size: ${ke}; font-family: ${I}; line-height: ${qe};`,sn=`font-weight: ${b}; font-size: ${Be}; font-family: ${v}; line-height: ${X};`,an=`font-weight: ${b}; font-size: ${Pe}; font-family: ${v}; line-height: ${J};`,cn=`font-weight: ${L}; font-size: ${Me}; font-family: ${I}; line-height: ${X}; text-transform: uppercase; opacity: 0.5; margin-top:10px; margin-bottom:40px;`,dn=`font-weight: ${L}; font-size: ${ze}; font-family: ${I}; line-height: ${J}; text-transform: uppercase;  opacity: 0.7; margin-top:10px; margin-bottom:20px;`,ee=`font: ${T} ${Ge} ${O}; text-transform: uppercase;`,te=`font: ${T} ${We} ${O}; text-transform: uppercase; `,Je=`font: ${T} ${Y} ${O};`,ln=`font: ${T} ${Q} ${O};`,B=`font-weight: ${b}; font-size: ${Y}; font-family: ${v}; line-height: ${Ke};`,et=`font-weight: ${b}; font-size: ${Q}; font-family: ${v}; line-height: ${je};`,hn=`font-weight: ${T}; font-size: ${Ve}; font-family: ${O}; line-height: ${Ye};`,mn=`font-weight: ${T}; font-size: ${Ue}; font-family: ${O}; line-height: ${Qe};`,ne=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 800",style:{enableBackground:"new 0 0 800 800"},xmlSpace:"preserve",...t},i.createElement("path",{d:"M0 0h146.41v800H0zM246.8 0h306.41v140H246.8zM246.8 660h306.41v140H246.8zM246.8 330h306.41v140H246.8zM653.59 0H800v800H653.59z",fill:"#fff"})),N=t=>i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1552.29 216",...t},i.createElement("path",{d:"M.96 0h40.51v216H.96zm68.29 0h84.79v37.8H69.25zm0 178.2h84.79V216H69.25zm0-89.1h84.79v37.8H69.25zM181.82 0h40.51v216h-40.51z",fill:"#FFFFFF"}),i.createElement("path",{d:"M472.01 112.45H370.92v88.12h116.23V216H352.66V0H486.4v15.43H370.92v81.59h101.09v15.43zM544 200.57h106.73V216H525.59V0H544v200.57zm261.1-88.12H704.02v88.12h116.23V216H685.76V0H819.5v15.43H704.02v81.59H805.1v15.43zm127.75 76.85l1.19 4.6 1.34-4.6L1003.36 0h20.04l-80.45 216h-17.52L844.98 0h19.89l67.98 189.3zm232.66-76.85h-101.09v88.12h116.23V216h-134.48V0h133.74v15.43h-115.48v81.59h101.09v15.43zM1380 216h-18.26L1237.5 31.15V216h-18.41V0h18.41l124.39 184.99V0H1380v216zm152.96-54.72c0-11.64-4.09-20.86-12.27-27.64s-23.14-13.23-44.89-19.34-37.62-12.77-47.63-19.99c-14.24-10.2-21.36-23.57-21.36-40.12 0-16.07 6.61-29.13 19.84-39.19 13.23-10.05 30.14-15.08 50.73-15.08 13.95 0 26.43 2.69 37.45 8.08s19.56 12.9 25.62 22.52 9.09 20.35 9.09 32.19h-17.9c0-14.38-4.91-25.94-14.72-34.67s-23-13.1-39.55-13.1c-16.07 0-28.87 3.59-38.39 10.77-9.53 7.18-14.29 16.55-14.29 28.11 0 10.7 4.28 19.42 12.84 26.17s22.28 12.7 41.13 17.85c18.86 5.16 33.15 10.5 42.87 16.03s17.03 12.15 21.94 19.85 7.36 16.79 7.36 27.28c0 16.55-6.62 29.83-19.84 39.83-13.23 10.01-30.67 15.01-52.32 15.01-14.82 0-28.41-2.65-40.77-7.94s-21.75-12.7-28.14-22.23c-6.4-9.53-9.6-20.44-9.6-32.76h17.75c0 14.82 5.53 26.51 16.6 35.07 11.06 8.57 25.79 12.85 44.16 12.85 16.36 0 29.49-3.61 39.4-10.83 9.94-7.22 14.89-16.79 14.89-28.72z",fill:"#FFFFFF"})),H=t=>{if(typeof t=="string"&&t.includes("hsl"))return t;if(typeof t=="number")return{1:_e,2:U,3:ue,4:Ee,5:Oe,6:Te}[t];if(typeof t=="string"&&!t.includes("hsl"))return null},oe=400,R=oe*.8,S=R*.8,tt=R*.2,nt=350,A=nt*.8,ot=A*.15,ie=A*.5,it=A*.2,rt=n.div`
  position: relative;
  z-index: +1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
  height: ${oe}px;
  /* margin: 50px 0 0 0; */
  /* background-color: blue; */
`,st=n.div`
  display: flex;
  z-index: +1;
  flex-direction: column;
  width: ${K};
  margin: 0 auto;
  height: ${R}px;
  /* background-color: lightblue; */
`,re=n.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: ${o}px) {
    height: ${S}px;
  }
  @media (max-width: ${o}px) {
    height: ${ie}px;
  }
  /* background-color: gold; */
`,P=n.div`
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: ${S}px;
  /* background: blue; */
`,E=n.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  @media (min-width: ${o}px) {
    height: ${S}px;
  }
  @media (max-width: ${o}px) {
    height: ${ie}px;
  }
  /* background: green; */
`,l=n(_)`
  color: ${xe};
  transition: all 200ms;
  &:hover {
    color: ${we};
  }
  @media (min-width: ${o}px) {
    ${ee}
    padding: 8px 0;
    text-align: left;
  }
  @media (max-width: ${o}px) {
    ${te}
    padding: 6px 0;
    text-align: center;
  }
`,se=n.div`
  z-index: +1;
  font-size: 0.9em;
  color: ${k};
  display: flex;
  align-items: center;
  text-align: center;
  div {
    color: ${k};
  }
  @media (min-width: ${o}px) {
    height: ${tt}px;
  }
  @media (max-width: ${o}px) {
    height: ${it}px;
  }
  /* background: blue; */
`,at=n(Z)`
  display: flex;
  /* z-index: +1; */
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: ${ot}px;
  a.link {
    opacity: 0.4;
  }
  &:hover {
    a.link {
      opacity: 1;
    }
  }
  /* background: green; */
`,ae=n.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
  width: 24px;
  padding: 0;
  opacity: 0.5;
  transform: scale(1);
  transition: all 300ms;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
  /* background-color: blue; */
`,ct=t=>e(rt,{style:{backgroundColor:H(t.backgroundColor)},children:c(st,{children:[c(re,{children:[e(P,{style:{width:"40%"},children:e(Z,{animateIn:"animate__fadeInLeft",delay:0,offset:0,children:e(_,{className:"link",to:"/home",children:e("div",{style:{width:"120px",opacity:.6},children:e(N,{})})})})}),c(P,{style:{width:"60%"},children:[c(E,{children:[e(l,{to:"/",children:"Home"}),e(l,{to:"/whatwedo",children:"What We Do"}),e(l,{to:"/markets",children:"Markets"})]}),c(E,{children:[e(l,{to:"/casestudies",children:"Case Studies"}),e(l,{to:"/vision",children:"Vision"}),e(l,{to:"/history",children:"History"})]}),c(E,{children:[e(l,{to:"/about",children:"About"}),e(l,{to:"/contact",children:"Contact"})]})]})]}),c(se,{children:[e("div",{children:"© Eleven of Ten LLP"}),e(ae,{children:e(ne,{})}),e("div",{children:"All rights reserved."})]})]})}),ce=t=>e(p,{children:c(dt,{style:{height:"100%",width:"100%",backgroundColor:H(t.backgroundColor)},children:[t?null:"No props passed",e(lt,{children:t.children})]})}),dt=n.div`
  height: 100%;
  width: 100%;
  /* background-color: gold; */
`,lt=n.div`
  margin: 0 auto;
  height: auto;
  @media (min-width: ${o}px) {
    width: ${K};
  }
  @media (max-width: ${o}px) {
    width: ${$e};
  }
  /* background: red; */
`,M=t=>e(p,{children:t.backgroundColor?e(z,{style:{height:t.height,background:H(t.backgroundColor)}}):e(z,{style:{height:t.height,background:H(1)}})}),z=n.div`
  width: 100%;
`,ht=t=>c(ce,{backgroundColor:t.backgroundColor,children:[e(M,{height:30,backgroundColor:t.backgroundColor}),e(at,{animateIn:"animate__fadeInUp",delay:0,offset:0,children:e(_,{className:"link",to:"/home",children:e("div",{style:{width:"130px",opacity:.6},children:e(N,{})})})}),c(re,{children:[c(E,{children:[e(l,{to:"/",children:"Home"}),e(l,{to:"/whatwedo",children:"What We Do"}),e(l,{to:"/markets",children:"Markets"})]}),c(E,{children:[e(l,{to:"/casestudies",children:"Case Studies"}),e(l,{to:"/vision",children:"Vision"}),e(l,{to:"/history",children:"History"})]}),c(E,{children:[e(l,{to:"/about",children:"About"}),e(l,{to:"/contact",children:"Contact"})]})]}),c(se,{children:[e("div",{children:"© Eleven of Ten LLP"}),e(ae,{children:e(ne,{})}),e("div",{children:"All rights reserved."})]}),e(M,{height:20,backgroundColor:t.backgroundColor})]}),mt=t=>{const[s,d]=i.useState(window.innerWidth);return i.useEffect(()=>{const m=()=>d(window.innerWidth);return window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),console.log("backgroundColor: ",t.backgroundColor),e(p,{children:s>o?e(ct,{backgroundColor:t.backgroundColor}):e(ht,{backgroundColor:t.backgroundColor})})},u=90,D=120,C="rgba(0, 0, 0, 0.4)",de="rgba(100, 100, 100, 0.5)",ft=()=>{const[t,s]=i.useState(!1),[d,m]=i.useState(0),r=()=>{const h=document.body.scrollTop||document.documentElement.scrollTop;if(m(h),h>100)t&&s(!1);else return s(!0),d};return i.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r))),c(gt,{children:[!t&&e(pt,{}),c(_t,{children:[e(Et,{children:e(ut,{children:e(_,{to:"/home",children:e("div",{style:{width:"140px"},children:e(N,{})})})})}),c(Ot,{children:[e(w,{to:"/whatwedo",children:"What we do"}),e(w,{to:"/markets",children:"Markets"}),e(w,{to:"/vision",children:"Vision"}),e(w,{to:"/about",children:"About"}),e(w,{to:"/contact",children:"Contact"})]})]})]})},gt=n.div`
  z-index: +2;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${u}px;
`,pt=n.div`
  z-index: -1;
  position: absolute;
  width: 100vw;
  height: ${u}px;
  background: ${C};
`,_t=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: ${u}px;
  margin: 0 auto;
  padding: 0;
  /* background-color: blue; */
`,ut=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${u}px;
  padding: 0;
  opacity: 0.7;
  transform: scale(1);
  transition: all 300ms;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
  /* background-color: blue; */
`,Et=n.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
  height: ${u}px;
  padding: 0;
  /* background: #000; */
`,Ot=n.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: ${u}px;
`,w=n(_)`
  ${ee};
  color: ${j};
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: ${u}px;
  background: ${C};
  transition: all 300ms;
  &:hover {
    background: ${de};
  }
`,Tt=()=>e(p,{children:c($t,{children:[e(yt,{children:e(Ht,{children:e(_,{to:"/home",children:e("div",{style:{width:"140px"},children:e(N,{})})})})}),c(It,{children:[e($,{to:"/whatwedo",children:"Work"}),e($,{to:"/markets",children:"Markets"}),e($,{to:"/vision",children:"Vision"}),e($,{to:"/about",children:"About"}),e($,{to:"/contact",children:"Contact"})]})]})}),xt=D*.5,le=xt+"px",wt=D*.5,he=wt+"px",$t=n.div`
  z-index: +2;
  position: fixed;
  top: 0;
  display: flex;
  width: 100vw;
  flex-direction: column;
  height: ${D}px;
`,yt=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 0;
  height: ${le};
  background: ${C};
`,Ht=n.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: ${le};
  padding: 4px 0 0 0;
  opacity: 0.7;
  transform: scale(1);
  transition: all 300ms;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
  /* background-color: blue; */
`,It=n.div`
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
  height: ${he};
  padding: 0;
`,$=n(_)`
  ${te};
  flex-wrap: nowrap;
  color: ${j};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: ${he};
  background: ${C};
  transition: all 300ms;
  &:hover {
    background: ${de};
  }
`,vt=()=>{const[t,s]=i.useState(window.innerWidth);return i.useEffect(()=>{const d=()=>s(window.innerWidth);return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),e(p,{children:t>o?e(ft,{}):e(Tt,{})})},Lt="modulepreload",bt=function(t){return"/"+t},G={},f=function(s,d,m){if(!d||d.length===0)return s();const r=document.getElementsByTagName("link");return Promise.all(d.map(a=>{if(a=bt(a),a in G)return;G[a]=!0;const h=a.endsWith(".css"),pe=h?'[rel="stylesheet"]':"";if(!!m)for(let x=r.length-1;x>=0;x--){const y=r[x];if(y.href===a&&(!h||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${pe}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":Lt,h||(g.as="script",g.crossOrigin=""),g.href=a,document.head.appendChild(g),h)return new Promise((x,y)=>{g.addEventListener("load",x),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>s())},Nt=i.lazy(()=>f(()=>import("./About-53b0eaf2.js"),["assets/About-53b0eaf2.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/bannerVideo-ec88b2c7.js","assets/titleCallout-ec92d07b.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/button-54f5ed62.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js","assets/heading-ed0012bc.js","assets/About-b8f52491.css"])),Ct=i.lazy(()=>f(()=>import("./Reports-36ff0d96.js"),["assets/Reports-36ff0d96.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/callOutList-5bfa90df.js","assets/callOut-1069b7c8.js","assets/titleCallout-ec92d07b.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js"])),Rt=i.lazy(()=>f(()=>import("./CaseStudies-b0b90e09.js"),["assets/CaseStudies-b0b90e09.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/bannerVideo-ec88b2c7.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/callOutList-5bfa90df.js","assets/callOut-1069b7c8.js","assets/titleCallout-ec92d07b.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js","assets/heading-ed0012bc.js"])),St=i.lazy(()=>f(()=>import("./Contact-0f4ad5d7.js"),["assets/Contact-0f4ad5d7.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/bannerVideo-ec88b2c7.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js","assets/button-54f5ed62.js","assets/buttonComponents-d171a4d1.js","assets/heading-ed0012bc.js"])),At=i.lazy(()=>f(()=>import("./History-d9a2fe41.js"),["assets/History-d9a2fe41.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/callOut-1069b7c8.js","assets/titleCallout-ec92d07b.js","assets/calloutComponents-2135cd2b.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/heading-ed0012bc.js"])),W=i.lazy(()=>f(()=>import("./Home-fe0e2a98.js"),["assets/Home-fe0e2a98.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/bannerVideo-ec88b2c7.js","assets/barLabel-33062b34.js","assets/fetch-584fce66.js","assets/heading-ed0012bc.js"])),Dt=i.lazy(()=>f(()=>import("./Markets-e3a11560.js"),["assets/Markets-e3a11560.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/bannerVideo-ec88b2c7.js","assets/callOutList-5bfa90df.js","assets/callOut-1069b7c8.js","assets/titleCallout-ec92d07b.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js","assets/barLabel-33062b34.js","assets/heading-ed0012bc.js"])),Ft=i.lazy(()=>f(()=>import("./Vision-a1dc45f7.js"),["assets/Vision-a1dc45f7.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/bannerVideo-ec88b2c7.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/callOutList-5bfa90df.js","assets/callOut-1069b7c8.js","assets/titleCallout-ec92d07b.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js","assets/barLabel-33062b34.js","assets/heading-ed0012bc.js"])),kt=i.lazy(()=>f(()=>import("./WhatWeDo-91c87ea9.js"),["assets/WhatWeDo-91c87ea9.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/bannerVideo-ec88b2c7.js","assets/callOutList-5bfa90df.js","assets/callOut-1069b7c8.js","assets/titleCallout-ec92d07b.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js","assets/barLabel-33062b34.js","assets/heading-ed0012bc.js"])),Bt=i.lazy(()=>f(()=>import("./Vision-a1dc45f7.js"),["assets/Vision-a1dc45f7.js","assets/bannerComponents-c18b3df6.js","assets/vendor-632b4abd.js","assets/__commonjsHelpers__-725317a4.js","assets/bannerVideo-ec88b2c7.js","assets/rowButton-e65f3394.js","assets/buttonComponents-d171a4d1.js","assets/callOutList-5bfa90df.js","assets/callOut-1069b7c8.js","assets/titleCallout-ec92d07b.js","assets/calloutComponents-2135cd2b.js","assets/fetch-584fce66.js","assets/barLabel-33062b34.js","assets/heading-ed0012bc.js"])),Pt=[{id:"About",path:"about",section:"About",element:e(Nt,{})},{id:"Articles",path:"articles",section:"Articles",element:e(Ct,{})},{id:"CaseStudies",path:"casestudies",section:"Case Studies",element:e(Rt,{})},{id:"Contact",path:"contact",section:"Contact",element:e(St,{})},{id:"History",path:"history",section:"History",element:e(At,{})},{id:"Home",path:"/",section:"Home",element:e(W,{})},{id:"Home2",path:"home",section:"Home",element:e(W,{})},{id:"Markets",path:"markets",section:"Markets",element:e(Dt,{})},{id:"Reports",path:"reports",section:"Reports",element:e(Ft,{})},{id:"WhatWeDo",path:"whatwedo",section:"WhatWeDo",element:e(kt,{})},{id:"Vision",path:"vision",section:"Vision",element:e(Bt,{})}],Mt=()=>{const t=q();i.useEffect(()=>{window.gtag("event","page_view",{page_path:t.pathname+t.search+t.hash,page_search:t.search,page_hash:t.hash})},[t])},V="1.2em",zt="1em",Gt=10,Wt=7,me=150,fe=110,F=400,ge=100,Vt=30,Ut=30,Kt=n.div`
  @media (min-width: ${o}px) {
    padding: 40px 0;
    height: ${me}px;
  }
  @media (max-width: ${o}px) {
    padding: 20px 0;
    height: ${fe}px;
  }
  /* background: blue; */
`,jt=n.div`
  /* position: absolute;
  left: 0; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  transform-origin: 0% 0%;
  transition: all ${F}ms;
  overflow: hidden;
  @media (min-width: ${o}px) {
    grid-gap: ${Gt}px;
    height: ${me}px;
  }
  @media (max-width: ${o}px) {
    grid-gap: ${Wt}px;
    height: ${fe}px;
  }
`,fn=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
  @media (min-width: ${o}px) {
    width: 100%;
    height: 100%;
  }
  @media (max-width: ${o}px) {
    width: 100%;
    height: 100%;
  }
  /* background: green; */
`,gn=n.div`
  opacity: 0;
  @media (min-width: ${o}px) {
    min-height: ${Vt}px;
    align-items: flex-start;
    width: 100%;
  }
  @media (max-width: ${o}px) {
    min-height: ${Ut}px;
    align-items: flex-end;
    width: 100%;
  }
  /* background: gold; */
`,pn=t=>`fadeInUp ${F}ms ease-out ${ge*(t?t+1:0)}ms forwards`,_n=t=>`fadeOutDown ${F}ms ease-in ${ge*(t?t+1:0)}ms forwards`,un=t=>`${t===0?0:t}%`,En=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  height: "100%";
  /* align-self: flex-end; */
  font-size: ${V};
  color: ${ye};
  @media (min-width: ${o}px) {
    font-size: ${V};
  }
  @media (max-width: ${o}px) {
    font-size: ${zt};
  }
  /* background: green;  */
`,Zt=()=>e(ce,{backgroundColor:1,children:e(Kt,{children:e(jt,{})})}),qt=({children:t})=>{const s=q(),[d,m]=i.useState(s.pathname),{opacity:r}=Ie({from:{opacity:0},to:{opacity:1},config:{duration:500},reset:!0});return i.useEffect(()=>{m(s.pathname)},[s.pathname]),e(ve.div,{style:{opacity:r},children:d===s.pathname&&t})},Yt=new Le,Qt=()=>{Mt();const t=()=>c(p,{children:[e(He,{}),e(Zt,{})]});return e(p,{children:c(be,{client:Yt,children:[e(vt,{}),e(i.Suspense,{fallback:e(t,{}),children:e(qt,{children:e(Ne,{children:Pt.map(({path:s,element:d})=>e(Ce,{path:s,element:d},s))})})}),e(mt,{backgroundColor:5})]})})};const Xt=Re`

body {
box-sizing: border-box;
outline: 0;
margin: 0;
padding: 0;
border: 0;
background-color: ${U};
}

blockquote {
  margin:0;
  padding: 8px 0 8px 10px;
  border-left: 5px solid red;
}

body {
  ${B}
  -webkit-font-smoothing: antialiased;
  text-align: left;
}

// HEADINGS

h1,
h2,
h3 {
  ${Je};
  margin-top: 0;
  margin-bottom: 0.4em;
  text-align: left;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.6em;
}

// TEXT

p {
  @media (min-width: ${o}px) {
    ${B}
  }
  @media (max-width: ${o}px) {
    ${et}
  }
}


b {
  font-weight: ${Xe};
  // color: gold;
}

a {
  text-decoration: none;
}

ul {
  margin-left: 0;
  padding-left: 0px;
  list-style: square inside;
}

li {
  @media (min-width: ${o}px) {
    padding: 8px 0;
  }
  @media (max-width: ${o}px) {
    padding: 5px 0;
  }
}

@font-face {
  font-family: "Roboto Condensed";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto Condensed Light";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Light.ttf") format("truetype");
  font-display: swap;
}


@font-face {
  font-family: "Roboto";
  src: url("/fonts/Roboto/Roboto-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}



@font-face {
  font-family: "Roboto Condensed";
  src: url("/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}



`;Se.render(c(Ae.StrictMode,{children:[e(Xt,{}),e(De,{children:e(Qt,{})})]}),document.getElementById("root"));export{fn as B,ce as C,Je as F,En as G,M as S,f as _,ln as a,on as b,rn as c,sn as d,an as e,cn as f,dn as g,hn as h,mn as i,B as j,et as k,jt as l,gn as m,un as n,pn as o,_n as p,Zt as q,Kt as r,ee as s,te as t,fe as u,F as v};
