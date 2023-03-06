import{s as e,e as E,U as N,B as t,V as b,W as f,X as w,h as x,i as T,K as B,Y as D,Z as I,q as C,T as H,$ as y,a0 as R,r as s,j as n,b as v}from"./index-230bb9f9.js";const d=40,S="250px",k="100%",r="hsl(0, 0%, 90%)",h="hsl(0, 86%, 36%)",l="hsl(0, 86%, 46%)",g="rgba(0, 0, 0, 0.4)",_="rgba(50, 50, 50, 0.4)",j=e.div`
  ${E};
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
`,F=e.div`
  ${N};
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
  min-width: ${S};
  @media (min-width: ${t}px) {
    display: inline-flex;
  }
  @media (max-width: ${t}px) {
    display: none;
  }
`,G=e.div`
  ${b};
  height: ${d}px;
  color: ${r};
  align-items: center;
  justify-content: center;
  transition: all 300ms;
  text-transform: uppercase;
  width: ${k};
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
    height: ${f}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${w}px;
    width: 100%;
  }
  /* background: blue; */
`,A=e.div`
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
  color: ${B};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${D}
  }
  @media (max-width: ${t}px) {
    ${I}
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
`,K=e.div`
  color: ${C};
  height: auto;
  text-align: left;
  opacity: ${H};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${y}
  }
  @media (max-width: ${t}px) {
    ${R}
  }
`,M=({jsonFile:a})=>{const[i,O]=s.useState([]),[o,$]=s.useState(0);return s.useEffect(()=>{(async()=>{const u=await(await fetch(a)).json();O(u)})()},[]),s.useEffect(()=>{const c=setInterval(()=>{$(m=>(m+1)%i.length)},6e3);return()=>clearInterval(c)},[i]),i.length?v(p,{children:[n(A,{children:n(L,{className:"animate__animated animate__fadeInDown",children:i[o].title})}),n(U,{children:n(K,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:i[o].subhead})})]},o):n(p,{})};export{j as B,M as H,d as a,F as b,G as c};
