"use strict";const e=require("../../common/vendor.js"),t=require("../../api/notice/index.js");if(!Array){(e.resolveComponent("uni-tag")+e.resolveComponent("uni-dateformat")+e.resolveComponent("mp-html"))()}Math||((()=>"../../uni_modules/uni-tag/components/uni-tag/uni-tag.js")+(()=>"../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js")+(()=>"../../uni_modules/mp-html/components/mp-html/mp-html.js"))();const a={__name:"detail",setup(a){const n=e.ref();return e.onLoad((e=>{(async e=>{let a=await t.getNewsDetail(e);n.value=a.data.data})(e.id)})),(t,a)=>e.e({a:n.value.select},n.value.select?{b:e.p({inverted:!0,text:"置顶",type:"error"})}:{},{c:e.t(n.value.title),d:e.t(n.value.author),e:e.p({date:Date.now(),format:"yyyy-MM-dd hh:mm:ss"}),f:e.p({content:n.value.content}),g:e.t(n.value.view_count)})}},n=e._export_sfc(a,[["__scopeId","data-v-59eba0b3"]]);wx.createPage(n);