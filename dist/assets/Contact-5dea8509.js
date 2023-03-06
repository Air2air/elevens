import{s as n,B as a,C as f,k as x,l as C,q as d,m as p,n as u,j as t,F as m,a as T,b as r,S as s,g as $}from"./index-230bb9f9.js";import{B as I}from"./bannerVideo-6e7872ae.js";import{C as b}from"./calloutComponents-d06216f1.js";import{B as k}from"./button-64e42d70.js";import{H as y}from"./heading-5a9a9600.js";const l=250,E=n.div`
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
  @media (min-width: ${a}px) {
    padding: 20px 0;
  }
  @media (max-width: ${a}px) {
    padding: 0;
  }
  /* background: gold; */
`,O=n.div`
  height: ${l}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,w=l*.8,_=n.div`
  flex: 1;
  width: 100%;
  height: ${w}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${a}px) {
    display: inline-flex;
  }
  @media (max-width: ${a}px) {
    display: none;
  }
`,v=n.h2`
  color: ${e=>e.color===""||!e.color?f:e.color};
  @media (min-width: ${a}px) {
    ${x}
  }
  @media (max-width: ${a}px) {
    ${C}
  }
`,F=n.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${d};
`,B=n.a`
  color: ${d};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${a}px) {
    ${p}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${u}
    font-size: 1.1em;
  }
`,D=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(m,{children:t(T,{backgroundColor:e.backgroundColor,children:r(E,{children:[r(O,{children:[t(v,{children:e.shortName}),t(F,{children:e.address}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(k,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(s,{height:15,backgroundColor:e.backgroundColor}),t(B,{href:`mailto:${e.email}`,children:e.email})]}),t(_,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},L=({jsonFile:e})=>{const{data:o,loading:c,error:i}=$({file:e});return c?t(b,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.length>0?o.map((g,h)=>t(D,{...g},h)):t("div",{style:{color:"white"},children:"Data Fetch error in List component"})},R=()=>r(m,{children:[t(I,{pageVideo:769227014,overlayOpacity:.1,overlayColor:1}),t(y,{jsonFile:"/data/contactHeading.json"}),t(L,{jsonFile:"/data/contactContent.json"})]});export{R as default};