<template>
  <view class="userLayout pageBg">
	<view :style="{height:getNavBarHeight()+'px'}"></view>  
	<view class="userInfo">
		<view class="avatar">
			<image class="" src="../../static/images/2d71f098bcadc0ecff56b13cc969033.jpg" mode="aspectFill"></image>
		</view>
		<view class="ip"  v-if="info  && info.IP">
			{{info.IP}}
		</view>
		<view class="address" v-if="info  && info.address.country">
			来自于:{{info.address.country}} {{info.address.province}} {{info.address.city}} 
		</view>  
	</view>
	<list-row :objs="obj1"></list-row>
	<list-row :objs="obj2"></list-row>
	
	<!-- #ifdef MP-WEIXIN -->
	<button open-type="contact">联系客服</button>
	<!-- #endif -->
	
	<!-- #ifdef WEB -->
	<button @click="clickContact">拨打电话</button>
	<!-- #endif -->
  </view>
</template>

<script setup>
import { getNavBarHeight } from '../../utils/system';
import { getUserInfo } from '../../api/user';
import {ref} from 'vue'
import {onLoad} from "@dcloudio/uni-app"
let info=ref()
let download=ref()
let score=ref()
let obj1=ref(
[
	{
		text: "我的下载",
		icon: "download-filled",
		num: 0
	},
	{
		text: "我的评分",
		icon: "star-filled",
		num: 0
	},
]
)
let obj2=ref(
[
	{
		text: "订阅更新",
		icon: "notification-filled",
		url:"/pages/notice/detail?id=653507c6466d417a3718e94b"
	},
	{
		text: "常见问题",
		icon: "chat-filled",
		url:"/pages/notice/detail?id=6536358ce0ec19c8d67fbe82"
	},
	
]
)

// 客服
const clickContact=()=>{
	uni.makePhoneCall({
		phoneNumber:"17881091086",
		success:()=>{
			console.log("成功")
		}
	})
}

// 用户个人信息
const getUser=async ()=>{
	let res=await getUserInfo()
	if(res.data.errCode==0){
		info.value=res.data.data
		obj1.value[0].num=res.data.data.downloadSize
		obj1.value[1].num=res.data.data.scoreSize
		obj1.value[0].url="/pages/classList/classList?name=我的下载&type=download"
		obj1.value[1].url="/pages/classList/classList?name=我的评分&type=score"
	}
}
onLoad(()=>{
	getUser()
})
</script>

<style lang="scss" scoped>
.userLayout{
	
	.userInfo{
		display: flex;
		justify-content: center;
		flex-flow: column nowrap;
		align-items: center;
		padding: 50rpx 0;
		.avatar{
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.ip{
			padding: 20rpx 0;
			font-size: 35rpx;
		}
		.address{
			color: #aaa;
			font-size: 28rpx;
		}
	}
	button{
		background-color: rgba(0, 0, 0, 0);
		background-color: #fff;
		
	}
}
</style>
