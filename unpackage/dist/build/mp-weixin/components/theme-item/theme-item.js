"use strict";const e=require("../../common/vendor.js"),t=require("../../common/assets.js"),i=require("../../utils/common.js");if(!Array){e.resolveComponent("uni-icons")()}Math;const o=e.defineComponent({__name:"theme-item",props:{isMore:{type:Boolean,default:!1},item:{type:Object,default:{}}},setup:o=>(s,m)=>e.e({a:!o.isMore},o.isMore?{}:{b:o.item.picurl,c:e.t(o.item.name),d:e.t(e.unref(i.compareTimestamp)(o.item.updateTime)),e:"/pages/classList/classList?id="+o.item._id+"&name="+o.item.name},{f:o.isMore},o.isMore?{g:t._imports_0,h:e.p({type:"more-filled",size:"40",color:"white"})}:{})}),s=e._export_sfc(o,[["__scopeId","data-v-48881e82"]]);wx.createComponent(s);
