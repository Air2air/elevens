import{s as e,B as t,x as E,y as N,i as x,p as T,z as f,q as b,T as w,r as s,m as n,n as B}from"./bannerComponents-41f292de.js";import{F as D,b as I,c as y,d as C,e as H,f as R,g as v}from"./index-6fcd47e0.js";const d=40,S="250px",k="100%",r="hsl(0, 0%, 90%)",h="hsl(0, 86%, 36%)",l="hsl(0, 86%, 46%)",g="rgba(0, 0, 0, 0.4)",_="rgba(50, 50, 50, 0.4)",K=e.div`
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
  min-width: ${S};
  @media (min-width: ${t}px) {
    display: inline-flex;
  }
  @media (max-width: ${t}px) {
    display: none;
  }
`,j=e.div`
  ${y};
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
    height: ${E}px;
    width: 100%;
  }
  @media (max-width: ${t}px) {
    height: ${N}px;
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
  color: ${f};
  text-shadow: 0 0 4px #000;
  @media (min-width: ${t}px) {
    ${C}
  }
  @media (max-width: ${t}px) {
    ${H}
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
  color: ${b};
  height: auto;
  text-align: left;
  opacity: ${w};
  text-shadow: 0 0 4px #000;
  /* background: red; */
  @media (min-width: ${t}px) {
    ${R}
  }
  @media (max-width: ${t}px) {
    ${v}
  }
`,W=({jsonFile:a})=>{const[i,O]=s.useState([]),[o,$]=s.useState(0);return s.useEffect(()=>{(async()=>{const u=await(await fetch(a)).json();O(u)})()},[]),s.useEffect(()=>{const c=setInterval(()=>{$(m=>(m+1)%i.length)},6e3);return()=>clearInterval(c)},[i]),i.length?B(p,{children:[n(A,{children:n(L,{className:"animate__animated animate__fadeInDown",children:i[o].title})}),n(U,{children:n(F,{className:"animate__animated animate__fadeInUp animate__delay-1s",children:i[o].subhead})})]},o):n(p,{})};export{d as B,W as H,M as a,j as b,K as c};
