import{s as a,B as n,j as f,q as d,m as t,F as m,n as r}from"./bannerComponents-ace7d953.js";import{B as x}from"./bannerVideo-ab788414.js";import{C}from"./calloutComponents-560e5e07.js";import{i as p,j as u,k as T,l as $,C as I,S as s,b}from"./index-24876990.js";import{B as k}from"./button-cfce9e5c.js";import{H as y}from"./heading-2b51225a.js";const l=250,E=a.div`
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
  @media (min-width: ${n}px) {
    padding: 20px 0;
  }
  @media (max-width: ${n}px) {
    padding: 0;
  }
  /* background: gold; */
`,O=a.div`
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
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`,v=a.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${n}px) {
    ${p}
  }
  @media (max-width: ${n}px) {
    ${u}
  }
`,F=a.div`
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
  @media (min-width: ${n}px) {
    ${T}
    font-size: 1.2em;
  }
  @media (max-width: ${n}px) {
    ${$}
    font-size: 1.1em;
  }
`,D=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t(I,{backgroundColor:e.backgroundColor,children:r(E,{children:[r(O,{children:[t(v,{children:e.shortName}),t(F,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(k,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(B,{href:`mailto:${e.email}`,children:e.email})]}),t(_,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},L=({jsonFile:e})=>{const{data:o,loading:c,error:i}=b({file:e});return c?t(C,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((g,h)=>t(D,{...g},h)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},M=()=>r(m,{children:[t(x,{pageVideo:769227014,overlayOpacity:.1,overlayColor:1}),t(y,{jsonFile:"/data/contactHeading.json"}),t(L,{jsonFile:"/data/contactContent.json"})]});export{M as default};
