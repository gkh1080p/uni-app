import{o as a,c as t,w as e,a as l,b as s,r as o,i,d as r,e as n,f as c,g as d,F as u,h as f,S as m,j as _,k as p,l as h,t as v,s as w,n as y,m as g,p as b}from"./index-DfAuioeV.js";import{_ as j,a as z}from"./theme-item.CQLzi9yB.js";import{a as C,o as k,b as x,r as L}from"./api.BC6ic0yS.js";import{_ as q}from"./uni-icons.CFJW16x-.js";import{_ as E}from"./uni-dateformat.QKOGG0hG.js";import{_ as M}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./system.BfGrhs_2.js";const $=M({},[["render",function(r,n){const c=i;return a(),t(c,{class:"title"},{default:e((()=>[l(c,{class:"name"},{default:e((()=>[s("h2",null,[o(r.$slots,"name",{},void 0,!0)])])),_:3}),l(c,{class:"custom"},{default:e((()=>[o(r.$slots,"custom",{},void 0,!0)])),_:3})])),_:3})}],["__scopeId","data-v-cd1aa673"]]),F=["https://tea.qingnian8.com/api/bizhi/homeBanner","https://tea.qingnian8.com/api/bizhi/randomWall","https://tea.qingnian8.com/api/bizhi/wallNewsList","https://tea.qingnian8.com/api/bizhi/classify"],B=M({__name:"index",setup(s){const o=r([]);(async()=>{try{const a=await C(F[0]);if(0!==a.data.errCode)throw new Error("密钥错误");o.value=a.data.data}catch(a){console.log(a)}})();const M=r([]);(async()=>{try{const a=await C(F[1]);if(0!==a.data.errCode)throw new Error("密钥错误");M.value=a.data.data}catch(a){console.log(a)}})();const B=r([]);(async()=>{try{const a=await C(F[2],{select:"true"});if(0!==a.data.errCode)throw new Error("密钥错误");B.value=a.data.data}catch(a){console.log(a)}})();const I=r([]);(async()=>{try{const a=await C(F[3],{select:"true"});if(0!==a.data.errCode)throw new Error("密钥错误");I.value=a.data.data}catch(a){console.log(a)}})();return k((a=>({title:"好果子图画",path:"/pages/classList/classList"}))),x((()=>({title:"好果子壁纸"}))),(s,r)=>{const C=L(n("custom-nav-bar"),j),k=g,x=b,F=m,D=i,H=L(n("uni-icons"),q),N=_,O=p,P=L(n("uni-dateformat"),E),S=L(n("common-title"),$),W=h,A=L(n("theme-item"),z);return a(),t(D,{class:"HomeLayOut pageBg"},{default:e((()=>[l(C,{title:"首页"}),l(D,{class:"banner"},{default:e((()=>[l(F,{"indicator-dots":"",autoplay:"","indicator-active-color":"#fff",circular:""},{default:e((()=>[(a(!0),c(u,null,d(o.value,(s=>(a(),t(x,{key:s._id},{default:e((()=>[l(k,{src:s.picurl,mode:"aspectFill"},null,8,["src"])])),_:2},1024)))),128))])),_:1})])),_:1}),l(D,{class:"notice"},{default:e((()=>[l(D,{class:"left"},{default:e((()=>[l(H,{type:"notification-filled",size:"25"}),l(N,null,{default:e((()=>[f("公告")])),_:1})])),_:1}),l(D,{class:"center"},{default:e((()=>[l(F,{autoplay:"",vertical:"",interval:"3000",duration:"300"},{default:e((()=>[(a(!0),c(u,null,d(B.value,(s=>(a(),t(x,{key:s._id},{default:e((()=>[l(O,{class:"swiper-item",url:"/pages/notice/detail?id="+s._id},{default:e((()=>[f(v(s.title),1)])),_:2},1032,["url"])])),_:2},1024)))),128))])),_:1})])),_:1}),l(D,{class:"right"},{default:e((()=>[l(H,{type:"forward",size:"16",color:"$theme-color"})])),_:1})])),_:1}),l(D,{class:"select"},{default:e((()=>[l(S,null,{name:e((()=>[l(D,null,{default:e((()=>[f("每日推荐")])),_:1})])),custom:e((()=>[l(D,null,{default:e((()=>[l(H,{type:"calendar-filled",size:"15",color:"$brand-theme-color"}),l(P,{date:Date.now(),format:"MM年dd日"},null,8,["date"])])),_:1})])),_:1}),l(D,{class:"content"},{default:e((()=>[l(W,{"scroll-x":"true"},{default:e((()=>[(a(!0),c(u,null,d(M.value,(s=>(a(),t(D,{class:"box",onClick:a=>{return t=s._id,w("storeClassList",M.value),void y({url:"/pages/preview/preview?id="+t});var t},key:s._id},{default:e((()=>[l(k,{src:s.smallPicurl,mode:"aspectFill"},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),l(D,{class:"theme"},{default:e((()=>[l(S,null,{name:e((()=>[l(D,null,{default:e((()=>[f("专题精选")])),_:1})])),custom:e((()=>[l(D,null,{default:e((()=>[l(O,{url:"",class:"more"},{default:e((()=>[f(" More+")])),_:1})])),_:1})])),_:1}),l(D,{class:"content"},{default:e((()=>[(a(!0),c(u,null,d(I.value,(e=>(a(),t(A,{item:e},null,8,["item"])))),256)),l(A,{isMore:!0})])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-68db636c"]]);export{B as default};