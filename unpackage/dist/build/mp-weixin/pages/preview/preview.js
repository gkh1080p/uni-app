"use strict";const e=require("../../common/vendor.js"),a=require("../../utils/system.js"),o=require("../../api/preview/index.js");if(!Array){(e.resolveComponent("uni-icons")+e.resolveComponent("uni-dateformat")+e.resolveComponent("uni-rate")+e.resolveComponent("uni-popup"))()}Math||((()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js")+(()=>"../../uni_modules/uni-rate/components/uni-rate/uni-rate.js")+(()=>"../../uni_modules/uni-popup/components/uni-popup/uni-popup.js"))();const t={__name:"preview",setup(t){const l=e.ref(!0),n=e.ref(null),i=e.ref();let u=e.ref(0),s=e.ref(!1);const r=e.ref(null),c=()=>{l.value=!l.value},d=()=>{n.value.open()},p=()=>{n.value.close()},v=()=>{i.value.userScore&&(s.value=!0,u.value=i.value.userScore),r.value.open()},f=()=>{u.value=0,s.value=!1,r.value.close()},m=async()=>{e.index.showLoading({title:"加载中..."});let{classid:a,_id:t}=i.value,l=await o.getScoreUrl(a,t,u.value);e.index.hideLoading(),0===l.data.errCode&&(e.index.showToast({title:"评分成功",icon:"none"}),w.value[y.value].userScore=u.value,e.index.setStorageSync("storeClassList",w.value),f())},h=()=>{e.index.navigateBack({delta:1,fail:a=>{e.index.reLaunch({url:"/pages/index/index"})}})},g=e.index.getStorageSync("storeClassList")||[],w=e.ref();w.value=g.map((e=>({...e,picurl:e.smallPicurl.replace("_small.webp",".jpg")})));const x=e.ref(null),y=e.ref(null);e.onLoad((async e=>{if(x.value=e.id,e.type){let a=await o.getDetailWall(e.id);w.value=a.data.data.map((e=>({...e,picurl:e.smallPicurl.replace("_small.webp",".jpg")})))}y.value=w.value.findIndex((a=>a._id==e.id)),i.value=w.value[y.value],u.value=i.value.score}));const _=e=>{y.value=e.detail.current,i.value=w.value[y.value],u.value=i.value.score},b=async()=>{try{e.index.showLoading({title:"下载中",mask:!0});let{classid:a,_id:t}=i.value;if(0!=(await o.getWriteDownload(a,t)).data.errCode)throw new Error("下载过于频繁");e.index.getImageInfo({src:i.value.picurl,success:a=>{e.index.saveImageToPhotosAlbum({filePath:a.path,success:a=>{e.index.showToast({title:"保存成功，请到相册查看",icon:"none"})},fail:a=>{"saveImageToPhotosAlbum:fail cancel"!=a.errMsg?e.index.showModal({title:"授权提示",content:"需要授权保存相册",success:a=>{a.confirm&&e.index.openSetting({success:a=>{a.authSetting["scope.writePhotosAlbum"]?e.index.showToast({title:"授权成功",icon:"none"}):e.index.showToast({title:"授权失败",icon:"none"})}})}}):e.index.showToast({title:"保存失败，请重新点击下载",icon:"none"})},complete:a=>{e.index.showToast({title:a,icon:"none"}),e.index.hideLoading()}})}})}catch(a){e.index.hideLoading()}};return e.onShareAppMessage((e=>({title:"好果子图画",path:"/pages/preview/preview?id="+x.value+"&type=share"}))),e.onShareTimeline((()=>({title:"好果子壁纸",query:"id="+x.value+"&type=share"}))),(o,t)=>e.e({a:e.f(w.value,((a,o,t)=>e.e({a:o<=y.value+1&&o>=y.value-1},o<=y.value+1&&o>=y.value-1?{b:e.o(c,a._id),c:a.picurl}:{},{d:a._id}))),b:y.value,c:e.o(_),d:l.value},l.value?{e:e.p({type:"left",size:"30",color:"##ffffff"}),f:e.o(h),g:e.unref(a.statusBarHeight)()+"px",h:e.t(y.value+1),i:e.t(w.value.length),j:e.p({date:new Date,format:"hh:mm"}),k:e.p({date:new Date,format:"MM月yy日"}),l:e.p({type:"info",size:"30"}),m:e.o(d),n:e.p({type:"star",size:"30"}),o:e.t(i.value.userScore?i.value.userScore:e.unref(u)),p:e.o(v),q:e.p({type:"download-filled",size:"30"}),r:e.o(b)}:{},{s:e.o(p),t:e.p({type:"closeempty",size:"18",color:"#999"}),v:e.t(i.value._id),w:e.t(i.value.nickname),x:e.p({readonly:"true",value:e.unref(s)?i.value.userScore:e.unref(u)}),y:e.t(e.unref(u)),z:e.t(i.value.description),A:e.f(i.value.tabs,((a,o,t)=>({a:e.t(a),b:a}))),B:e.sr(n,"c69088be-6",{k:"infoPopup"}),C:e.p({type:"bottom","background-color":"white",borderRadius:"30rpx 30rpx 0 0"}),D:e.t(e.unref(s)?"已评分过了~":"壁纸评分"),E:e.o(f),F:e.p({type:"closeempty",size:"18",color:"#999"}),G:e.o((a=>e.isRef(u)?u.value=a:u=a)),H:e.p({allowHalf:!0,disabled:e.unref(s),"disabled-color":"#FFCA3E",modelValue:e.unref(u)}),I:e.t(e.unref(u)),J:e.o(m),K:e.unref(s)||!e.unref(u),L:e.sr(r,"c69088be-9",{k:"scoreInfo"}),M:e.p({type:"center","background-color":"white",borderRadius:"20rpx","is-mask-click":!1})})}},l=e._export_sfc(t,[["__scopeId","data-v-c69088be"]]);t.__runtimeHooks=6,wx.createPage(l);