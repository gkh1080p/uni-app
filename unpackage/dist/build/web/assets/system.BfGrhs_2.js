import{K as t}from"./index-DfAuioeV.js";let e=t(),n=()=>e.statusBarHeight||0;const i=()=>{if(uni.getMenuButtonBoundingClientRect){let{top:t,height:e}=uni.getMenuButtonBoundingClientRect();return e+2*(t-n())}return 40},u=()=>n()+i(),s=()=>0;export{u as a,s as g,n as s,i as t};