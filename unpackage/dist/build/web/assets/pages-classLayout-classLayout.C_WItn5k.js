import{_ as a,a as s}from"./theme-item.CQLzi9yB.js";import{d as t,e,o,c as i,w as r,i as c,a as l,f as m,g as n,F as p}from"./index-DfAuioeV.js";import{a as u,o as d,b as f,r as _}from"./api.BC6ic0yS.js";import{_ as y}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./uni-icons.CFJW16x-.js";import"./system.BfGrhs_2.js";const g=["https://tea.qingnian8.com/api/bizhi/classify"],h=y({__name:"classLayout",setup(y){const h=t([]);return(async()=>{try{const a=await u(g[0],{pageSize:100});if(0!==a.data.errCode)throw new Error("密钥错误");h.value=a.data.data}catch(a){console.log(a)}})(),d((a=>({title:"好果子图画",path:"/pages/classLayout/classLayout"}))),f((()=>({title:"好果子壁纸"}))),(t,u)=>{const d=_(e("custom-nav-bar"),a),f=_(e("theme-item"),s),y=c;return o(),i(y,{class:"classLayout pageBg"},{default:r((()=>[l(d,{title:"分类"}),l(y,{class:"classify"},{default:r((()=>[(o(!0),m(p,null,n(h.value,(a=>(o(),i(f,{key:a._id,item:a},null,8,["item"])))),128))])),_:1})])),_:1})}}},[["__scopeId","data-v-cd50c238"]]);export{h as default};
