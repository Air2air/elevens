import{j as a,b as r,f as s}from"./styled-components.browser.esm-e2f2eb67.js";import{F as C,G as h,H as m,I as g,J as y,K as b,b as p,M as k,B as i,k as d,d as l,N as f,R as S}from"./index-84b97dce.js";import{u as j}from"./useQuery-1e8173fd.js";const v=t=>a(C,{children:t.data.map((o,e)=>r(h,{children:[a(m,{style:{height:g(o.height),backgroundColor:o.backgroundColor,animation:y(e)}},o.id),a(b,{label:o.label,index:e})]},e))}),x=t=>a(p,{backgroundColor:t.backgroundColor,children:a(k,{children:a(v,{data:t.data})})}),B="data/dataCaseStudies.json",O="casestudies",R=()=>{const t=async()=>(await fetch(B,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:o,status:e}=j(O,t),c=14e3;return r(s,{children:[e==="error"&&a("p",{style:{color:"red"},children:"Error fetching data"}),e==="loading"&&r(s,{children:[a(i,{pageVideo:776446335,overlayOpacity:.4,overlayColor:d,typing:!0,loopEndTime:c}),a(l,{text:"casestudies"})]}),e==="success"&&r(s,{children:[a(i,{pageVideo:776446335,overlayOpacity:.4,overlayColor:d,typing:!0,loopEndTime:c}),a(l,{text:"casestudies"}),o.map((n,u)=>r("div",{children:[a(x,{data:n.practiceArea,backgroundColor:2}),a(f,{...n})]},u)),a(S,{buttonTo:"/markets",buttonText:"Markets",backgroundColor:4})]})]})};export{R as default};