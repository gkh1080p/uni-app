<template>
<view class="section">
		<view class="list">
			<view class="row" v-for="item in objs">
				<view class="left">
					<uni-icons :type="item.icon" size="30"></uni-icons>
					<view class="text">{{item.text}}</view>
				</view>
				<view class="right" >
					<view class="number">{{item.num}}</view>
					<navigator :url="item.url">
						<uni-icons type="right" size="30"></uni-icons>
					</navigator>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface Item {
  text: string;
  icon: string;
  num?: number;
  customer?:boolean
  url?:string
}
defineProps({
	objs:{
		 type: Array as () => Item[], // 使用 PropType<string[]> 定义 icons 的类型
		 default:[]
	}
})
</script>

<style lang="scss" scoped>
.section{
		background-color: #fff;
		margin: 20rpx 40rpx;
		border: 1rpx solid #eee;
		box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.1);
		border-radius: 10rpx;
		overflow: hidden;
		.list{
			.row{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 10rpx 30rpx;
				height: 100rpx;
				border: 1rpx solid #eee;
				&:last-child{
					border-bottom: 0rpx ;
				}
				.left{
					display: flex;
					align-items: center;
					.text{
						margin-left: 20rpx;
						font-size: 30rpx;
					}
					:deep(){
						.uni-icons{
							color:$brand-theme-color !important;
						}
					}
				}
				.right{
					display: flex;
					align-items: center;
					:deep(){
						.uni-icons{
							color:$brand-theme-color !important;
						}
					}
					.number{
						margin-right: 20rpx;
						font-size: 30rpx;
					}
					button{
						width: 120rpx;
						height: 60rpx;
						position: relative;
					}
				}
			}
		}
	}
</style>