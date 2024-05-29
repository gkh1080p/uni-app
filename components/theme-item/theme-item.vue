<template>
	<view class="themeItem">
		<navigator :url="'/pages/classList/classList?id='+item._id+'&name='+item.name" class="box" v-if="!isMore">
			<image class="pic" :src="item.picurl" mode="aspectFill"></image>
			<view class="mask">{{item.name}}</view>
			<view class="tab">{{compareTimestamp(item.updateTime)}}天前更新</view>
		</navigator>

		<navigator open-type="reLaunch" url="/pages/classLayout/classLayout" class="box more" v-if="isMore">
			<image class="pic" src="../../common/images/classify2.jpg" mode="widthFix"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="40" color="white"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup lang="ts">
// 导入时间戳处理函数
import {compareTimestamp} from "../../utils/common.js"
interface objs{
	enable:boolean,
	name:string,
	picurl:string,
	select:boolean,
	sort:number,
	updateTime:number,
	_id:string
}
defineProps({
	isMore: {
		type: Boolean,
		default: false
	},
	item:{
		type: Object as () => objs,
		default:{}
	}
});


</script>

<style lang="scss" scoped>
.themeItem {
	.box {
		height: 340rpx;
		border-radius: 10rpx;
		overflow: hidden;
		position: relative;

		.pic {
			width: 100%;
			height: 100%;
		}
		.mask {
			position: absolute;
			left: 0;
			bottom: 0;
			font-size: 30rpx;
			color: white;
			display: flex;
			height: 70rpx;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(0, 0, 0, 0.2);
			backdrop-filter: blur(20rpx);
		}
		.tab {
			position: absolute;
			left: 0;
			top: 0;
			font-size: 25rpx;
			background-color: rgba(250, 129, 90, 0.9);
			color: white;
			padding: 6rpx 14rpx;
			border-radius: 0 0 20rpx 0;
		}
	}
	.box.more {
		.mask {
			width: 100%;
			height: 100%;

			flex-direction: column;
		}
		.text {
			font-size: 28rpx;
		}
	}
}
</style>
