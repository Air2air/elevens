import{s as i,e as E,V as N,B as t,W as w,h as r,i as h,q as x,X as g,m as b,n as f,j as n,a as B,Y as C,Z as I,L as y,$ as D,a0 as H,a1 as v,a2 as L,r as s,F as R,b as S}from"./index-cf40b924.js";const l=40,k="250px",A="100%",c="hsl(0, 0%, 90%)",m="hsl(0, 86%, 36%)",p="hsl(0, 86%, 46%)",T="rgba(0, 0, 0, 0.4)",$="rgba(50, 50, 50, 0.4)",W=i.div`
  ${E};
  color: ${c};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${l}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${m};
  &:hover {
    background: ${p};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`,j=i.div`
  ${N};
  height: ${l}px;
  color: ${c};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${a=>a.buttonColor==="gray"?T:m};
  &:hover {
    background: ${a=>a.buttonColor==="gray"?$:p};
  }
  min-width: ${k};
  @media (min-width: ${t}px) {
    display: inline-flex;
  }
  @media (max-width: ${t}px) {
    display: none;
  }
`,X=i.div`
  ${w};
  height: ${l}px;
  color: ${c};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${A};
  span {
    margin-right: 10px;
  }
  background: ${a=>a.buttonColor==="gray"?T:m};
  &:hover {
    background: ${a=>a.buttonColor==="gray"?$:p};
  }
  @media (min-width: ${t}px) {
    display: none;
  }
  @media (max-width: ${t}px) {
    display: inline-flex;
  }
`,Y=i.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  text-align: left;
  @media (min-width: ${t}px) {
    padding: 50px 0;
    /* width: ${r}; */
  }
  @media (max-width: ${t}px) {
    padding: 20px 0;
    /* width: ${h}; */
  }
  /* background: red;; */
`,V=i.div`
  color: ${x};
  height: auto;
  text-align: left;
  opacity: ${g};
  /* padding-bottom: 20px; */
  @media (min-width: ${t}px) {
    ${b};
  }
  @media (max-width: ${t}px) {
    ${f};
  }
`,q=a=>n(B,{...a,children:n("div",{style:{height:400}})}),F=i.div`
  position: absolute;
  margin: 0 auto;
  top: 0;

  @media (min-width: ${t}px) {
    height: ${C}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${I}px;
    width: 100%;
  }
  /* background: blue; */
`,U=i.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 60%;
    width: ${r};
  }
  @media (max-width: ${t}px) {
    height: 60%;
    width: ${h};
  }
  /* background: green; */
`,P=i.h1`
  color: ${y};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${D}
  }
  @media (max-width: ${t}px) {
    ${H}
  }
`,K=i.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 40%;
    width: ${r};
  }
  @media (max-width: ${t}px) {
    height: 40%;
    width: ${h};
  }
  /* background: red; */
`,M=i.div`
  color: ${x};
  height: auto;
  text-align: left;
  opacity: ${g};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${v}
    line-height: 1.5em;
  }
  @media (max-width: ${t}px) {
    ${L}
    line-height: 1.2em;
  }
`,z=({jsonFile:a})=>{const[o,O]=s.useState([]);s.useEffect(()=>{fetch(a).then(e=>e.json()).then(e=>O(e.headings)).catch(e=>console.error("Error fetching data from JSON file:",e))},[]);const[_,u]=s.useState(0);return s.useEffect(()=>{const e=setInterval(()=>{u(d=>(d+1)%o.length)},6e3);return()=>clearInterval(e)},[o]),n(R,{children:o.map((e,d)=>S(F,{style:{display:d===_?"block":"none"},children:[n(U,{children:n(P,{className:"animate__animated animate__fadeInDown",children:e.title})}),n(K,{children:n(M,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:e.subhead})})]},e.id))})};export{W as B,q as C,z as H,Y as a,V as b,l as c,j as d,X as e};
