import{t as e,B as o,j as i}from"./bannerComponents-977adf2c.js";import{s as l}from"./vendor-cc4417f8.js";import{f as r,g as a}from"./index-afaf3e1b.js";const T=t=>i(c,{children:i(d,{color:t.color,children:t.title})}),c=l.div`
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
