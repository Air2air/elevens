import{r as i,m as e,F as c,n as u,E as k}from"./bannerComponents-b17e5c41.js";import{R as g}from"./rowButton-1ab95f14.js";import{H as I,I as T,K as w,R as B,C as E,N as H,G as R,b as F,B as L,S as d}from"./index-24415fcf.js";import{C as W}from"./callOutList-8f1df295.js";import{F as j}from"./fetch-c6cd0f13.js";import{B as O}from"./barLabel-5d529e73.js";import"./buttonComponents-841b3e60.js";import"./callOut-32faad29.js";import"./titleCallout-e41bbb77.js";import"./index-9076de00.js";const p=(a,o)=>{const[s,r]=i.useState(!0),[t,l]=i.useState(!1),[C,b]=i.useState(50),h=20,f=100,x=()=>{const n=Math.random()*(f-h)+h;b(n)},m=3e3,v=5e3;i.useEffect(()=>{l(!0);const n=setInterval(()=>{x()},Math.random()*(v-m)+m);return()=>clearInterval(n)},[]),i.useEffect(()=>{r(!0);const n=setTimeout(()=>{r(!1)},500);return()=>{clearTimeout(n)}},[]);const S=`all ${B}ms`;return e(c,{children:u(I,{children:[e(T,{style:{height:C+"%",backgroundColor:a.backgroundColor,transition:S,animation:t?w(a.index):""}}),e(O,{hidden:s,label:a.label,index:a.index})]},o)})},y=({jsonFile:a})=>{const{data:o,loading:s,error:r}=j({file:a});return s?e("div",{children:"Loading..."}):r?u("div",{children:["Error: ",r.message]}):e(c,{children:o&&o.length>0?e(E,{backgroundColor:3,children:e(H,{children:e(R,{children:o.map((t,l)=>e(p,{index:l,title:t.title,label:t.label,value:t.value,backgroundColor:t.backgroundColor},t.id))})})}):e("div",{style:{color:"white"},children:"Data Fetch error in Page component"})})},$=()=>u(c,{children:[e(F,{pageVideo:776449715,overlayOpacity:.7,overlayColor:k}),e(L,{text:"whatwedo"}),e(y,{jsonFile:"/data/whatwedoChart.json"}),e(g,{buttonTo:"/casestudies",buttonText:"Case Studies",backgroundColor:3}),e(d,{height:40,backgroundColor:3}),e(W,{jsonFile:"/data/whatwedoContent.json"}),e(d,{height:40,backgroundColor:2}),e(g,{buttonTo:"/casestudies",buttonText:"Case Studies",backgroundColor:2}),e(d,{height:40,backgroundColor:2})]});export{$ as default};
