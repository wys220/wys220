import{_ as e,a as s}from"./index-17ef6d9f.js";import{i as t,b as a,Z as i,k as o,j as l,c as r,a as n,F as m,a8 as u,u as p,U as c,O as d,R as v,ai as j,o as f,T as g,ay as y,az as x}from"./@vue-a48b1e2a.js";import"./@element-plus-a71f3b6f.js";import"./element-plus-7eff7cb6.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-ca817af0.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c6009091.js";import"./aplayer-5d7f43e3.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-dcb2e9bc.js";import"./vxe-table-6b86ff84.js";import"./xe-utils-c57e546e.js";import"./dom-zindex-e3f8f991.js";import"./axios-da7e9e83.js";import"./vuex-b5ec2b38.js";import"./vue-router-887b1494.js";import"./vue-i18n-680abb53.js";import"./@intlify-b54f8de8.js";const h={class:"container"},k={class:"main"},_={class:"img-area"},z=["src","poster"],T=["title"],b=(e=>(y("data-v-4a9a3c4a"),e=e(),x(),e))((()=>n("div",null,[n("div",null,"下一页"),n("div",null,"更多精彩")],-1))),w=e({__name:"index",setup(e){const{proxy:y}=t(),x=a([]),w=a(0),E=i({page:0,size:15});let R=o((()=>x.value.length>0&&x.value.length<w.value));const U=async()=>{var e,t;const a=await s(E);200==a.code&&(x.value=[...x.value,...null==(e=a.result)?void 0:e.list],w.value=null==(t=a.result)?void 0:t.total,B())},B=()=>{let e=document.getElementsByTagName("video");y.$nextTick((function(){for(let s=0;s<e.length;s++)!function(s){e[s].addEventListener("play",(function(){N(s)}))}(s)}))},N=e=>{let s=document.getElementsByTagName("video");y.$nextTick((function(){for(let t=0;t<s.length;t++)t!==e&&s[t].pause()}))};return l((()=>{U()})),(e,s)=>{const t=j("DArrowRight"),a=j("el-icon");return f(),r("div",h,[n("div",k,[(f(!0),r(m,null,u(x.value,((e,s)=>(f(),r("div",{class:"item",key:s},[n("div",_,[n("video",{ref_for:!0,ref:"videoRef",src:e.playUrl,poster:e.coverUrl,controls:"controls"},null,8,z)]),n("div",{class:"name",title:e.title},g(e.title),9,T)])))),128)),p(R)?(f(),r("div",{key:0,class:"item card",onClick:s[0]||(s[0]=e=>(E.page++,void U()))},[c(a,{size:60},{default:d((()=>[c(t)])),_:1}),b])):v("",!0)])])}}},[["__scopeId","data-v-4a9a3c4a"]]);export{w as default};
