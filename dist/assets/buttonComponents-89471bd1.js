import{s as o}from"./vendor-cc4417f8.js";import{B as n}from"./bannerComponents-977adf2c.js";import{F as l,h as c,i as d}from"./index-afaf3e1b.js";const i=40,O="250px",m="100%",a="hsl(0, 0%, 90%)",r="hsl(0, 86%, 36%)",s="hsl(0, 86%, 46%)",e="rgba(0, 0, 0, 0.4)",p="rgba(50, 50, 50, 0.4)",x=o.div`
  ${l};
  color: ${a};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${i}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${r};
  &:hover {
    background: ${s};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`,$=o.div`
  ${c};
  height: ${i}px;
  color: ${a};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${t=>t.buttonColor==="gray"?e:r};
  &:hover {
    background: ${t=>t.buttonColor==="gray"?p:s};
  }
  min-width: ${O};
  @media (min-width: ${n}px) {
    display: inline-flex;
  }
  @media (max-width: ${n}px) {
    display: none;
  }
`,u=o.div`
  ${d};
  height: ${i}px;
  color: ${a};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${m};
  span {
    margin-right: 10px;
  }
  background: ${t=>t.buttonColor==="gray"?e:r};
  &:hover {
    background: ${t=>t.buttonColor==="gray"?p:s};
  }
  @media (min-width: ${n}px) {
    display: none;
  }
  @media (max-width: ${n}px) {
    display: inline-flex;
  }
`;export{i as B,$ as a,u as b,x as c};
