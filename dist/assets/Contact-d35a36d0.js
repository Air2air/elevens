import{s as n,B as a,C as x,k as C,l as p,q as m,m as u,n as T,j as t,F as g,a as $,b as r,S as d,g as I,M as b}from"./index-bd4cd023.js";import{B as k}from"./bannerVideo-fb84848d.js";import{C as y,H as E}from"./heading-f902a0d4.js";import{B as O}from"./button-d01b9abd.js";const s=250,w=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: ${s}px;
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
`,_=n.div`
  height: ${s}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  padding-left: 30px;
`,F=s*.8,v=n.div`
  flex: 1;
  width: 100%;
  height: ${F}px;
  background-size: cover;
  background-position: center;
  transition: all 500ms;
  @media (min-width: ${a}px) {
    display: inline-flex;
  }
  @media (max-width: ${a}px) {
    display: none;
  }
`,D=n.h2`
  color: ${e=>e.color===""||!e.color?x:e.color};
  @media (min-width: ${a}px) {
    ${C}
  }
  @media (max-width: ${a}px) {
    ${p}
  }
`,B=n.div`
  font-family: "Roboto", sans-serif;
  line-height: 1.6em;
  color: ${m};
`,L=n.a`
  color: ${m};
  transition: all 300ms;
  transform: scale(1);
  transform-origin: center center;
  &:hover {
    transform: scale(1.04);
  }
  @media (min-width: ${a}px) {
    ${u}
    font-size: 1.2em;
  }
  @media (max-width: ${a}px) {
    ${T}
    font-size: 1.1em;
  }
`,N=(e,o)=>{const c=i=>"url(/images/content/"+i+")";return t(g,{children:t($,{backgroundColor:e.backgroundColor,children:r(w,{children:[r(_,{children:[t(D,{children:e.shortName}),t(B,{children:e.address}),t(d,{height:15,backgroundColor:e.backgroundColor}),t(O,{to:"https://www.linkedin.com/company/eleven-health",text:"LinkedIn"}),t(d,{height:15,backgroundColor:e.backgroundColor}),t(L,{href:`mailto:${e.email}`,children:e.email})]}),t(v,{className:"bgImage",style:{backgroundImage:c(e.photo)}})]})},o)})},j=({jsonFile:e})=>{const{data:o,loading:c,error:i}=I({file:e});return c?t(y,{}):i?r("div",{children:["Error: ",i.message]}):o&&o.content.length>0?o.content.map((h,f)=>t(N,{...h},f)):t("div",{style:{color:"white"},children:"Data Fetch error in ContactList component"})},l="/data/contactPage.json",P=()=>r(g,{children:[t(b,{jsonFile:l}),t(k,{pageVideo:769227014,overlayOpacity:.1,overlayColor:1}),t(E,{jsonFile:l}),t(j,{jsonFile:l})]});export{P as default};
