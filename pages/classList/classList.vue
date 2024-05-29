<!-- 详细页面 -->
<template>
  <view class="classList">
	<view class="loadingLayout" v-if="!classList.length&&noData">
	  	<uni-load-more status="loading"></uni-load-more>
	</view> 
	<view class="content">
		<navigator :url="'/pages/preview/preview?id='+item._id"  class="item" v-for="item in classList" :key="item._id">
			<image :src="item.smallPicurl" mode="aspectFill"></image>
		</navigator>
	</view>
	<view class="loadingLayout">
	  	<uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
	</view>  
	<view class="safe-area-inset-bottom"></view>
  </view>
</template>

<script setup>
import {ref} from 'vue'
import {onLoad,onUnload,onReachBottom} from '@dcloudio/uni-app'
import { getClassListUrl } from '../../api/classList/index.js';
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
import { getHistoryList } from '../../api/user/index.js';
let id=ref("")
let name=ref("")
let pageNum=ref(1)
let type=ref()
const noData=ref(false)
// 接受数据
onLoad(async (e)=>{
	if(e.type) type.value=e.type
	if(e.id) id.value=e.id
	name.value=e.name
	// 我的下载，评分跳转过来
	uni.setNavigationBarTitle({
		title:e.name
	})
	getClassList()
})
// 触底加载
onReachBottom(()=>{
	if(noData.value) return
	debounce(()=>{
		pageNum.value++
		getClassList(pageNum.value)
		},1000)()
})
const classList=ref([])
// 请求api
const getClassList=async (pageNum=1,pageSize=12)=>{
	try{
		let res;
		if(id.value)  res=await getClassListUrl(id.value,pageNum,pageSize)
		if(type.value) res=await getHistoryList(type.value,pageNum,pageSize)
		if(res.data.errCode===0){
			classList.value=[...classList.value,...res.data.data]
			uni.setStorageSync('storeClassList',classList.value)
			if(res.data.data.length<pageSize){
				noData.value=true
			}
		}else{
			throw new Error("密钥出错")
		}
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
}
// 防抖措施
function debounce(func,delay){
	let timer;
	return function(){
		if(timer) clearTimeout(timer)
		timer=setTimeout(()=>{
			func.call(this,arguments)
		},delay)
		timer=null
	}
}
// 分享盆友
onShareAppMessage((e)=>{
	return {
		title:"好果子图画",
		path:"/pages/classList/classList?id="+id.value+"&name="+name.value
	}
})
// 分享盆友圈
onShareTimeline(()=>{
	return {
		title:"好果子壁纸",
		query:"id="+id.value+"&name="+name.value
	}
})
onUnload(()=>{
	uni.removeStorageSync("storeClassList")
})
</script>

<style lang="scss" scoped>
.classList{
	.content{
		display: grid;
		grid-template-columns: repeat(3,1fr);
		gap: 5rpx;
		padding: 5rpx;
		.item{
			height: 440rpx;
			image{
				width: 100%;
				height: 100%;
				display: block;
				
			}
		}
	}
}
</style>
