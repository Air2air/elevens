import{b as a,F as e,j as o}from"./bannerCSS-7d27781b.js";import{B as i,Y as c,e as l,a7 as y,R as u,Z as h}from"./index-91a95fb3.js";import{u as m}from"./useQuery-c3e1642a.js";const g="/data/dataVision.json",x="vision",v=()=>{const p=async()=>(await fetch(g,{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json(),{data:r,status:t}=m(x,p),n=14e3;return a(e,{children:[t==="error"&&o("p",{style:{color:"red"},children:"Error fetching data"}),t==="loading"&&a(e,{children:[o(i,{pageVideo:776446335,overlayOpacity:.4,overlayColor:c,typing:!0,loopEndTime:n}),o(l,{text:"vision"})]}),t==="success"&&a(e,{children:[o(i,{pageVideo:776451115,overlayOpacity:.1,overlayColor:c,typing:!0}),o(l,{text:"vision"}),o(y,{loopEndTime:n,columnCount:7,data:r,backgroundColor:3}),o(u,{buttonTo:"/history",buttonText:"History"}),r.map((s,d)=>o(h,{...s},d)),o(u,{buttonTo:"/history",buttonText:"History"})]})]})};export{v as default};
