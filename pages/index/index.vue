<template>
	<view class="HomeLayOut pageBg">
		<!-- 自定义头部导航 -->
		<custom-nav-bar title="首页"></custom-nav-bar>
		
		<!-- 轮播图 -->
		<view class="banner">
			<swiper indicator-dots autoplay indicator-active-color="#fff" circular>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 轮播信息 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="notification-filled" size="25" ></uni-icons>
				<text>公告</text>
			</view>
			<view class="center" >
				<swiper  autoplay vertical interval="3000" duration="300">
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator class="swiper-item" :url="'/pages/notice/detail?id='+item._id">
						{{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="16" color="$theme-color"></uni-icons>
			</view>
		</view>
		<!-- 每日推荐 -->
		<view class="select">
			<common-title>
				<template #name>
					<view>每日推荐</view>
				</template>
				<template #custom>
					<view>
						<uni-icons type="calendar-filled" size="15" color="$brand-theme-color"></uni-icons>
						<uni-dateformat :date="Date.now()" format="MM年dd日"></uni-dateformat>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x="true">
					<view class="box" v-for="item in randomList" @click="goPreview(item._id)" :key="item._id">
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>
					<view>专题精选</view>
				</template>
				<template #custom>
					<view>
						<navigator url="" class="more" > More+</navigator>
					</view>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in classify" :item="item" ></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'	
import {getBannerUrl,getDayRandomUrl,getNoticeUrl,getClassifyUrl} from '../../api/index/index.js'
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
// 轮播图数据
	// 定义数据
const bannerList=ref([])
const getBanner= async ()=>{
	try{
		const res=await getBannerUrl()
		if(res.data.errCode===0){
			bannerList.value=res.data.data
		}else{
			throw new Error("密钥错误")
		}
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
	
}	
getBanner()
// 每日推荐
const randomList=ref([])
const getDayRandom=async ()=>{
	try{
		const res=await getDayRandomUrl()
		if(res.data.errCode===0){
			randomList.value=res.data.data
		}else{
			throw new Error("密钥错误")
		}
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
	
}
getDayRandom()
// 公告
const noticeList=ref([])
const getNotice=async ()=>{
	try{
		const res=await getNoticeUrl()
		if(res.data.errCode===0){
			noticeList.value=res.data.data
		}else{
			throw new Error("密钥错误")
		}
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
	
}
getNotice()

const classify=ref([])
const getClassify=async ()=>{
	try{
		const res=await getClassifyUrl()
		if(res.data.errCode===0){
			classify.value=res.data.data
		}else{
			throw new Error("密钥错误")
		}
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
}
getClassify()
// 每日推荐-跳转到详细页面
const goPreview=(id)=>{
	uni.setStorageSync("storeClassList",randomList.value)
	uni.navigateTo({
		url:"/pages/preview/preview?id="+id
	})
	
}
// 分享好友
onShareAppMessage((e)=>{
	return {
		title:"好果子图画",
		path:"/pages/classList/classList"
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
.HomeLayOut{
	// 轮播图scss
	.banner{
		width: 750rpx;
		padding: 30rpx 0rpx;
		swiper{
			width:750rpx;
			height: 340rpx;
			swiper-item{
				width: 100%;
				height: 100%;
				padding: 0 30rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	// 公告通知
	.notice{
		display: flex;
		justify-content: center;
		margin: 20rpx 30rpx;
		width: 690rpx;
		height: 80rpx;
		background-color: #e3e7ea;
		border-radius: 40rpx;
		line-height:80rpx;
		.left{
			flex-grow: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			:deep(){
				.uni-icons{
					color:$brand-theme-color !important;
				}
			}
			text{
				color: $brand-theme-color;
				font-size: 28rpx;
				font-weight: 600;
			}
			
		}
		.center{
			flex-grow:8;
			swiper{
				height: 100%;
				.swiper-item{
					height: 100%;
					font-size: 30rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		.right{
			flex-grow:1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	// 每日精选部分
	.select{
		margin-top: 50rpx;
		:deep(){
			.uni-icons{
				color:$brand-theme-color !important;
			}
		}
		
		.content{
			width: 720rpx;
			padding-left: 30rpx;
			
			margin-top: 30rpx;
			box-sizing: border-box;
			scroll-view{
				white-space:nowrap;
				.box{
					width: 200rpx;
					height: 430rpx;
					display: inline-block;
					margin:0 5rpx;
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
	}
	// 专题精选
	.theme{
		margin-top: 40rpx;
		padding-bottom: 100rpx;
		.more{
			font-size: 32rpx;
			color: #888;
		}
		.content{
			margin: 0 30rpx;
			display: grid;
			gap: 15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
}
</style>
