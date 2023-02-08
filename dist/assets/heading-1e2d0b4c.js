import{B as t,r as T,s as p,f as r,l as m,t as E,m as g,T as $,j as e,k as f}from"./bannerComponents-977adf2c.js";import{s as i,r as n}from"./vendor-cc4417f8.js";import{b as w,c as N,d as u,e as O}from"./index-afaf3e1b.js";const h=i.div`
  position: absolute;
  margin: 0 auto;
  top: 0;

  @media (min-width: ${t}px) {
    height: ${T}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${p}px;
    width: 100%;
  }
  /* background: blue; */
`,I=i.div`
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
    width: ${m};
  }
  /* background: green; */
`,D=i.h1`
  color: ${E};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${w}
  }
  @media (max-width: ${t}px) {
    ${N}
  }
`,H=i.div`
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
    width: ${m};
  }
  /* background: red; */
`,B=i.div`
  color: ${g};
  height: auto;
  text-align: left;
  opacity: ${$};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${u}
  }
  @media (max-width: ${t}px) {
    ${O}
  }
`,C=({jsonFile:l})=>{const[a,x]=n.useState([]),[s,c]=n.useState(0);return n.useEffect(()=>{(async()=>{const _=await(await fetch(l)).json();x(_)})()},[]),n.useEffect(()=>{const d=setInterval(()=>{c(o=>(o+1)%a.length)},6e3);return()=>clearInterval(d)},[a]),a.length?f(h,{children:[e(I,{children:e(D,{className:"animate__animated animate__fadeInDown",children:a[s].title})}),e(H,{children:e(B,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:a[s].subhead})})]},s):e(h,{})};export{C as H};
