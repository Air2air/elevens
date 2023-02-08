import{t as e,B as o,j as i}from"./bannerComponents-c18b3df6.js";import{s as l}from"./vendor-632b4abd.js";import{f as r,g as a}from"./index-db3c1ee9.js";const T=t=>i(c,{children:i(d,{color:t.color,children:t.title})}),c=l.div`
  text-align: left;
  width: 100%;
  min-height: 50px;
  /* background: red; */
`,d=l.h3`
  color: ${t=>t.color===""||!t.color?e:t.color};
  @media (min-width: ${o}px) {
    ${r}
  }
  @media (max-width: ${o}px) {
    ${a}
  }
`;export{T};
