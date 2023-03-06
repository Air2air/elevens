import{s as e,B as t,z as E,A as N,i as x,p as T,D as f,q as w,T as b,r as s,m as n,n as B}from"./bannerComponents-ace7d953.js";import{F as D,c as I,d as C,e as H,f as y,g as R,h as v}from"./index-24876990.js";const d=40,A="250px",S="100%",r="hsl(0, 0%, 90%)",h="hsl(0, 86%, 36%)",l="hsl(0, 86%, 46%)",g="rgba(0, 0, 0, 0.4)",_="rgba(50, 50, 50, 0.4)",K=e.div`
  ${D};
  color: ${r};
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  height: ${d}px;
  transition: all 300ms;
  text-transform: uppercase;
  background: ${h};
  &:hover {
    background: ${l};
  }
  span {
    margin-left: 8px;
  }
  .icon {
    height: 24px;
  }
`,M=e.div`
  ${I};
  height: ${d}px;
  color: ${r};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  span {
    margin-right: 10px;
  }
  background: ${a=>a.buttonColor==="gray"?g:h};
  &:hover {
    background: ${a=>a.buttonColor==="gray"?_:l};
  }
  min-width: ${A};
  @media (min-width: ${t}px) {
    display: inline-flex;
  }
  @media (max-width: ${t}px) {
    display: none;
  }
`,j=e.div`
  ${C};
  height: ${d}px;
  color: ${r};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${S};
  span {
    margin-right: 10px;
  }
  background: ${a=>a.buttonColor==="gray"?g:h};
  &:hover {
    background: ${a=>a.buttonColor==="gray"?_:l};
  }
  @media (min-width: ${t}px) {
    display: none;
  }
  @media (max-width: ${t}px) {
    display: inline-flex;
  }
`,p=e.div`
  position: absolute;
  margin: 0 auto;
  top: 0;

  @media (min-width: ${t}px) {
    height: ${E}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${N}px;
    width: 100%;
  }
  /* background: blue; */
`,k=e.div`
  display: flex;
  align-items: flex-end;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 60%;
    width: ${x};
  }
  @media (max-width: ${t}px) {
    height: 60%;
    width: ${T};
  }
  /* background: green; */
`,L=e.h1`
  color: ${f};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${H}
  }
  @media (max-width: ${t}px) {
    ${y}
  }
`,U=e.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  margin: 0 auto;
  @media (min-width: ${t}px) {
    height: 40%;
    width: ${x};
  }
  @media (max-width: ${t}px) {
    height: 40%;
    width: ${T};
  }
  /* background: red; */
`,F=e.div`
  color: ${w};
  height: auto;
  text-align: left;
  opacity: ${b};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${R}
  }
  @media (max-width: ${t}px) {
    ${v}
  }
`,W=({jsonFile:a})=>{const[i,O]=s.useState([]),[o,$]=s.useState(0);return s.useEffect(()=>{(async()=>{const u=await(await fetch(a)).json();O(u)})()},[]),s.useEffect(()=>{const c=setInterval(()=>{$(m=>(m+1)%i.length)},6e3);return()=>clearInterval(c)},[i]),i.length?B(p,{children:[n(k,{children:n(L,{className:"animate__animated animate__fadeInDown",children:i[o].title})}),n(U,{children:n(F,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:i[o].subhead})})]},o):n(p,{})};export{d as B,W as H,M as a,j as b,K as c};
