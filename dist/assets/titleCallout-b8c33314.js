import{s as l,z as e,B as i,m as o}from"./bannerComponents-d39a1a52.js";import{h as a,i as r}from"./index-b6dd9cfc.js";const s=t=>o(c,{children:o(d,{color:t.color,children:t.title})}),c=l.div`
  text-align: left;
  width: 100%;
  min-height: 50px;
  /* background: red; */
`,d=l.h3`
  color: ${t=>t.color===""||!t.color?e:t.color};
  @media (min-width: ${i}px) {
    ${a}
  }
  @media (max-width: ${i}px) {
    ${r}
  }
`;export{s as T};
