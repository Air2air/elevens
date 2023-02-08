import{B as o,g as f,m as d,j as t,F as m,k as r}from"./bannerComponents-c18b3df6.js";import{B as x}from"./bannerVideo-ec88b2c7.js";import{C as p}from"./calloutComponents-2135cd2b.js";import{F as C}from"./fetch-584fce66.js";import{B as u}from"./button-54f5ed62.js";import{f as T,g as $,j as I,k,C as y,S as s}from"./index-db3c1ee9.js";import{s as a}from"./vendor-632b4abd.js";import{H as E}from"./heading-ed0012bc.js";import"./buttonComponents-d171a4d1.js";import"./__commonjsHelpers__-725317a4.js";const l=250,O=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${l}px;
  transition: all 500ms;
  &:hover {
    .bgImage {
      opacity: 1;
      filter: none;
    }
  }
  .bgImage {
    opacity: 0.8;
    filter: grayscale(100%);
  }
  @media (min-width: ${o}px) {
    padding: 20px 0;
  }
  @media (max-width: ${o}px) {
    padding: 0;
  }
  /* background: gold; */
`,b=a.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,w=l*.8,_=a.div`
  flex: 1;
  width: 100%;
  height: ${w}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${o}px) {
    display: inline-flex;
  }
  @media (max-width: ${o}px) {
    display: none;
  }
`,F=a.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${o}px) {
    ${T}
  }
  @media (max-width: ${o}px) {
    ${$}
  }
`,v=a.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${d};
`,B=a.a`
  color: ${d};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${o}px) {
    ${I}
    font-size: 1.2em;
  }
  @media (max-width: ${o}px) {
    ${k}
    font-size: 1.1em;
  }
`,D=(e,n)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t(y,{backgroundColor:e.backgroundColor,children:r(O,{children:[r(b,{children:[t(F,{children:e.shortName}),t(v,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(u,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(B,{href:`mailto:${e.email}`,children:e.email})]}),t(_,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},n)})},L=({jsonFile:e})=>{const{data:n,loading:c,error:i}=C({file:e});return c?t(p,{}):i?r("div",{children:["Error: ",i.message]}):n&&n.length>0?n.map((g,h)=>t(D,{...g},h)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},G=()=>r(m,{children:[t(x,{pageVideo:769227014,overlayOpacity:.1,overlayColor:1}),t(E,{jsonFile:"/data/contactHeading.json"}),t(L,{jsonFile:"/data/contactContent.json"})]});export{G as default};
