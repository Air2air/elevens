import{r as d,j as e,u as y,b as u,v as I,w as O,x as v,y as x,z as S,g as p,o as j,a as f,D as k,s as m,G as B,B as g,h as H,i as F,F as C,A as W,H as _,M as D,S as L}from"./index-cf40b924.js";import{T as M,R as P}from"./rowButton-431a5379.js";import{B as $}from"./bannerVideo-fda6b7ef.js";import{B as N}from"./barLabel-1ab18077.js";import{C as R,a as A,b as z,H as K}from"./heading-17338026.js";const V=o=>{const[a,i]=d.useState(0),[t,r]=d.useState("100%"),[n,l]=d.useState(!0),[T,E]=d.useState(1);return d.useEffect(()=>{r("100%"),i(1),l(!0);const s=setTimeout(()=>{l(!1)},500),c=setTimeout(()=>{r("50%"),l(!0)},7e3),b=setTimeout(()=>{i(0),l(!0)},o.loopEndTime-2e3),w=setTimeout(()=>{E(T+1)},o.loopEndTime);return()=>{clearTimeout(s),clearTimeout(c),clearTimeout(b),clearTimeout(w)}},[T]),e(y,{style:{width:t},children:o.data.chart.map((s,c)=>u(I,{children:[e(O,{style:{height:v(s.height),backgroundColor:s.backgroundColor,animation:a?x(c):S(c),opacity:a?0:1}},s.id),e(N,{hidden:n,label:s.label,index:c})]},c))})},G=({jsonFile:o})=>{const{data:a,loading:i,error:t}=p({file:o});return i?e(j,{}):t?u("div",{children:["Error: ",t.message]}):e(f,{backgroundColor:2,children:e(k,{children:e(V,{data:a,loopEndTime:12e4})})})},q="100px";m.div`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  height: auto;
  background: ${B};
`;const J=m.div`
  margin: 0 auto;
  z-index: +1;
  height: auto;
  @media (min-width: ${g}px) {
    width: ${H};
    padding: 50px 0;
  }
  @media (max-width: ${g}px) {
    width: ${F};
    padding: 20px 0;
  }
`,Q=m.div`
  margin: 0 auto;
  display: grid;
  grid-gap: 0px;
  opacity: 0.5;
  grid-template-columns: auto auto auto;
`,U=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${q};
  /* background: gold; */
`,X=m.img`
  height: auto;
`,Y=({jsonFile:o})=>{const a=window.innerWidth<g;function i(n,l){return l?n*.6:n}const{data:t,error:r}=p({file:o});return r?u("div",{children:["Error: ",r.message]}):t&&t.length>0?e(C,{children:e(f,{backgroundColor:1,children:e(J,{children:e(Q,{children:t.map((n,l)=>e(U,{children:e(X,{src:`images/content/${n.image}`,alt:n.title,width:i(n.width,a)})},l))})})})}):e("div",{children:"No data"})},Z=({jsonFile:o})=>{const{data:a,loading:i,error:t}=p({file:o});return i?e(R,{}):t?u("div",{children:["Error: ",t.message]}):e(C,{children:a.page&&a.page.length>0?a.page.map((r,n)=>d.createElement(f,{...r,key:n},u(A,{children:[e(M,{title:r.title}),e(W,{animateIn:"animate__fadeIn",delay:0,offset:60,children:e(z,{children:_(r.description)})})]}))):e("div",{style:{color:"white"},children:"Data Fetch error in CalloutList component"})})},h="/data/homePage.json",re=()=>u(C,{children:[e(D,{jsonFile:h}),e($,{pageVideo:776443340,overlayOpacity:.1,overlayColor:1}),e(K,{jsonFile:h}),e(G,{jsonFile:h}),e(Z,{jsonFile:h}),e(P,{buttonTo:"/whatwedo",buttonText:"What we do",backgroundColor:2}),e(L,{height:40,backgroundColor:2}),e(Y,{jsonFile:"/data/orgsContent.json"})]});export{re as default};
