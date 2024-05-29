<template>
	<view class="classLayout pageBg">
		<custom-nav-bar title="分类"></custom-nav-bar>
		<view class="classify">
			<theme-item v-for="item in classifys" :key="item._id" :item="item" ></theme-item>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
import { getClassifyUrl } from '../../api/classLayout/index.js';
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
const classifys=ref([])
const getClassify=async ()=>{
	try{
		const res=await getClassifyUrl()
		if(res.data.errCode===0){
			classifys.value=res.data.data
		}else{
			throw new Error("密钥错误")
		}
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
}
getClassify()
// 分享好友
onShareAppMessage((e)=>{
	return {
		title:"好果子图画",
		path:"/pages/classLayout/classLayout"
	}
})
// 分享盆友圈
onShareTimeline(()=>{
	return {
		title:"好果子壁纸"
	}
})
</script>

<style lang="scss" scoped>
.classify{
	width: 100%;
	overflow: hidden;
	padding:30rpx;
	display: grid;
	grid-template-columns: repeat(3,1fr);
	gap:15rpx;
	
}
</style>
