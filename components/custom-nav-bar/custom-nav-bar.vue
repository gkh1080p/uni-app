<template>
	<view class="layout">
		<view class="navbar">
			<!-- 占位 -->
			<view class="statusBar" :style="{height:statusBarHeight()+'px'}"></view>
			<!-- 主题样式 -->
			<view class="titleBar" :style="{height:titleBarHeight()+'px',marginLeft:getLeftIcon()+'px'}">
				<view class="title">{{title}}</view>
				<navigator class="search" url="/pages/search/search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</navigator>
			</view>
		</view>
		
		<view class="fill" :style="{height:statusBarHeight()+titleBarHeight()+'px'}">
			
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
import {statusBarHeight,titleBarHeight,getLeftIcon} from "@/utils/system.js"
defineProps({
	title:{
		type:String,
		default:""
	}
})
</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom,rgba(0,0,0,0) ,#fff 400rpx),
		linear-gradient(to right,#B4F8C8 ,#F1D1D0) ;
		.statusBar{
		}
		.titleBar{
			display: flex;
			padding-top: 10rpx;
			padding-left:20rpx;
			.title{
				font-size: 40rpx;
				font-weight: 700;
				color: $text-font-color-1;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				.text{
					padding-left: 20rpx;
				}
				.icon{
					padding-left: 20rpx;
				}
			}
		}
	}
	.fill{
		
	}
}
</style>