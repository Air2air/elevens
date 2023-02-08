import{t as o,B as e,j as a}from"./bannerComponents-c18b3df6.js";import{s as i}from"./vendor-632b4abd.js";import{s as n,t as r,u as s,o as d}from"./index-db3c1ee9.js";const b=t=>a(m,{style:{animation:t.hidden?"":d(t.index)},children:a(l,{style:{transform:t.rotate?"rotate(90deg)":""},children:t.label})},t.index),m=i.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: +1;
  opacity: 0;
  /* display: none; */
  /* background: red; */
`,l=i.div`
  position: absolute;
  text-transform: uppercase;
  color: ${o};
  @media (min-width: ${e}px) {
    ${n};
    bottom: 10%;
    width: 100%;
    text-align: center;
  }
  @media (max-width: ${e}px) {
    ${r};
    left: 0%;
    bottom: ${s+20}px;
    text-align: right;
    transform-origin: 20% 18%;
    transform: rotate(90deg);
    min-width: 160px;
  }
  /* background: green; */
`;export{b as B};
