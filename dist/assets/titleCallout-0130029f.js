import{s as l,A as e,B as i,m as o}from"./bannerComponents-62cc5090.js";import{i as a,j as r}from"./index-a4744e2e.js";const s=t=>o(c,{children:o(d,{color:t.color,children:t.title})}),c=l.div`
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
