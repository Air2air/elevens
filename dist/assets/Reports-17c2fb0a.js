import{r as g,j as e,E,s as i,B as r,h as f,i as T,k as D,l as $,m as w,n as b,F as m,a as O,b as s,g as C,o as _,S as v}from"./index-bd0181d7.js";const F=t=>{const[a,c]=g.useState([]),n=t.baseUrl+t.params+t.resultLimit;g.useEffect(()=>{(async()=>{const y=await(await fetch(n)).json();c(y.results.map(h=>({term:h.term,time:h.time,count:h.count})))})()},[]);const d=a.map(o=>o.time),l=a.map(o=>o.count),p={grid:{top:10,right:8,bottom:20,left:80,containLabel:!1},xAxis:{data:d,type:t.horizontal?"value":"category",inverse:!1},yAxis:{type:t.horizontal?"category":"value"},series:[{data:l,type:t.chartType,smooth:!0,itemStyle:{color:t.seriesColor}}],tooltip:{trigger:"axis"}};return e(E,{option:p})},S=i.div`
  margin: 0 auto;
  @media (min-width: ${r}px) {
    padding: 30px 0;
    /* width: ${f}; */
  }
  @media (max-width: ${r}px) {
    padding: 10px 0;
    /* width: ${T}; */
  }
  /* background: red;; */
`,u=40,x=30,N=i.div`
  height: ${u}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${x}px;
  width: 100%;
  @media (min-width: ${r}px) {
    ${D};
  }
  @media (max-width: ${r}px) {
    ${$};
  }
  /* background: red; */
`,R=i.div`
  height: ${u}px;
  text-align: left;
`,I=i.div`
  height: ${u}px;
  text-align: right;
`,j=i.div`
  height: auto;
  text-align: left;
  margin-top: ${x}px;
  @media (min-width: ${r}px) {
    ${w};
  }
  @media (max-width: ${r}px) {
    ${b};
  }
  /* background: gold; */
`,A=t=>{const a=t.chartType!==""?e(F,{...t}):e("div",{children:"Not a chart"});return e(m,{children:e(O,{...t,children:s(S,{children:[s(N,{style:{color:t.textColor},children:[e(R,{children:t.category}),e(I,{children:t.subcategory})]}),a,e(j,{style:{color:t.textColor},children:t.description})]})})})},L=({jsonFile:t})=>{const{data:a,loading:c,error:n}=C({file:t});return c?e(_,{}):n?s("div",{children:["Error: ",n.message]}):e(m,{children:a&&a.length>0?a.map((d,l)=>g.createElement(A,{...d,key:l})):e("div",{style:{color:"white"},children:"Data Fetch error in Page component"})})},P=()=>s(m,{children:[e(v,{height:140,backgroundColor:1}),e(L,{jsonFile:"/data/fda/endpoints.json"})]});export{P as default};
