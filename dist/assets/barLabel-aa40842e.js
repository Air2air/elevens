import{s as i,z as n,B as e,m as a}from"./bannerComponents-41f292de.js";import{t as o,u as r,v as d,o as s}from"./index-559c7700.js";const h=t=>a(m,{style:{animation:t.hidden?"":s(t.index)},children:a(l,{style:{transform:t.rotate?"rotate(90deg)":""},children:t.label})},t.index),m=i.div`
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
  color: ${n};
  @media (min-width: ${e}px) {
    ${o};
    bottom: 10%;
    width: 100%;
    text-align: center;
  }
  @media (max-width: ${e}px) {
    ${r};
    left: 0%;
    bottom: ${d+20}px;
    text-align: right;
    transform-origin: 20% 18%;
    transform: rotate(90deg);
    min-width: 160px;
  }
  /* background: green; */
`;export{h as B};
