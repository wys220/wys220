import{_ as s,g as e}from"./index-fb496d5f.js";import{u as a}from"./vue-router-887b1494.js";import{i as t,b as i,Z as l,k as r,j as o,c as m,a as p,F as u,a8 as n,u as v,U as c,O as d,R as j,ai as f,o as y,T as g,ay as h,az as x}from"./@vue-a48b1e2a.js";import"./@element-plus-a71f3b6f.js";import"./element-plus-7eff7cb6.js";import"./lodash-es-d4f5f48c.js";import"./@vueuse-ca817af0.js";import"./@popperjs-b78c3215.js";import"./@ctrl-91de2ec7.js";import"./dayjs-c6009091.js";import"./aplayer-5d7f43e3.js";import"./async-validator-cf877c1f.js";import"./memoize-one-63ab667a.js";import"./normalize-wheel-es-3222b0a2.js";import"./@floating-ui-dcb2e9bc.js";import"./vxe-table-65ab5acd.js";import"./xe-utils-c57e546e.js";import"./dom-zindex-e3f8f991.js";import"./axios-da7e9e83.js";import"./vuex-b5ec2b38.js";import"./vue-i18n-680abb53.js";import"./@intlify-b54f8de8.js";const z={class:"container w100 h100 ofa"},b={class:"main"},k={class:"img-area"},w=["title"],_=(s=>(h("data-v-63ef5bf3"),s=s(),x(),s))((()=>p("div",null,[p("div",null,"下一页"),p("div",null,"更多精彩")],-1))),R=s({__name:"details",setup(s){t();const h=a(),x=i([]);i(0);const R=i(0),A=l({type:"beauty",page:0,size:15});let C=r((()=>x.value.length>0&&x.value.length<R.value));const D=async()=>{var s,a;const t=await e(A);200==t.code&&(x.value=[...x.value,...null==(s=t.result)?void 0:s.list],R.value=null==(a=t.result)?void 0:a.total)},F=s=>{let e=[...x.value];if(0===s)return e.map((s=>s.url));let a=e.splice(s),t=e.splice(0,s);return a.concat(t).map((s=>s.url))};let I=i(null);return o((()=>{var s;I.value=h.params,A.type=null==(s=h.params)?void 0:s.type,D()})),(s,e)=>{const a=f("el-image"),t=f("DArrowRight"),i=f("el-icon");return y(),m("div",z,[p("div",b,[(y(!0),m(u,null,n(x.value,((s,e)=>(y(),m("div",{class:"item",key:e},[p("div",k,[c(a,{class:"img-sty",src:s.url,"zoom-rate":1.2,"preview-src-list":F(e),"hide-on-click-modal":!0,fit:"cover"},null,8,["src","preview-src-list"])]),p("div",{class:"name",title:s.title},g(s.title),9,w)])))),128)),v(C)?(y(),m("div",{key:0,class:"item card",onClick:e[0]||(e[0]=s=>(A.page++,void D()))},[c(i,{size:60},{default:d((()=>[c(t)])),_:1}),_])):j("",!0)])])}}},[["__scopeId","data-v-63ef5bf3"]]);export{R as default};
