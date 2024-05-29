<template>
	<view class="preview">
		<swiper duration="1000" circular :current="currentIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in ClassListObjs" :key="item._id">
				<image v-if="index<=currentIndex+1&&index>=currentIndex-1"  @click="maskChange" :src="item.picurl" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

		<!-- 遮罩层 -->
		<view class="mask" v-if="maskState">
			<view class="goBack" @click="InfoBack" :style="{top:statusBarHeight()+'px'}">
				<uni-icons type="left" size="30" color="##ffffff"></uni-icons>
			</view>
			<view class="content">{{currentIndex+1}} / {{ClassListObjs.length}}</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月yy日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="30"></uni-icons>
					<view>信息</view>
				</view>
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="30"></uni-icons>
					<view>{{ currentInfo.userScore?currentInfo.userScore:score }}分</view>
				</view>
				<view class="box" @click="clickDownLoad">
					<uni-icons type="download-filled" size="30"></uni-icons>
					<view>下载</view>
				</view>
			</view>
		</view>

		<uni-popup class="Popup" ref="infoPopup" type="bottom" background-color="white" borderRadius="30rpx 30rpx 0 0">
			<view class="infoPopup">
				<view class="popHeader">
					<view class="title">壁纸信息</view>
					<view class="close">
						<uni-icons type="closeempty" size="18" color="#999" @click="clickInfoClose"></uni-icons>
					</view>
				</view>
				<scroll-view scroll-y class="scrollContent">
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID:</view>
							<text class="value" selectable>{{currentInfo._id}}</text>
						</view>
						<!-- <view class="row">
							<view class="label">分类:</view>
							<text class="value" selectable>{{currentInfo.nickname}}</text>
						</view> -->
						<view class="row">
							<view class="label">发布者:</view>
							<text class="value" selectable>{{currentInfo.nickname}}</text>
						</view>
						<view class="row">
							<view class="label">评分:</view>
							<view class="value rate" selectable touchable>
								<uni-rate readonly="true" :value="isScore?currentInfo.userScore:score" />
								<text>{{ score }}分</text>
							</view>
						</view>
						<view class="row">
							<view class="label">摘要:</view>
							<text class="value" selectable>{{currentInfo.description}}</text>
						</view>
						<view class="row">
							<view class="label">标签:</view>
							<view class="value tabs">
								<text class="tab" v-for="item in currentInfo.tabs" :key="item">{{item}}</text>
							</view>
						</view>
						<view class="row">
							<text class="value copyright" selectable>
								图片来自用户投稿，非商业使用，用于免费学习交流， 如有侵权，您可以拷贝图片id举报 至平台，邮箱513894357@qq.com,管理将删除侵权图片
							</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<uni-popup ref="scoreInfo" type="center" background-color="white" borderRadius="20rpx" :is-mask-click="false">
			<view class="scoreInfo">
				<view class="scoreHead">
					<view></view>
					<view class="title">{{isScore?"已评分过了~":"壁纸评分"}}</view>
					<view class="close">
						<uni-icons type="closeempty" size="18" color="#999" @click="clickScoreClose"></uni-icons>
					</view>
				</view>
				<!-- 评分组件 -->
				<view class="content">
					<uni-rate v-model="score" allowHalf :disabled="isScore" disabled-color="#FFCA3E"></uni-rate>
					<text class="text">{{score}}分</text>
				</view>
				
				<!-- 按钮 -->
				<view class="footer">
					<button  @click="submitScore" type="primary" size="mini"  :disabled="isScore||!score">确认评分</button>
				</view>
			</view>
			
		</uni-popup>
	</view>
</template>

<script setup>
import { computed, ref } from 'vue';
import {onLoad} from '@dcloudio/uni-app'
import { statusBarHeight } from '../../utils/system';
import {getScoreUrl,getWriteDownload,getDetailWall} from '../../api/preview/index.js'
import {onShareAppMessage,onShareTimeline} from "@dcloudio/uni-app"
const maskState = ref(true);
const infoPopup = ref(null);
// 当前用户信息
const currentInfo=ref()
// 评分
let score = ref(0);
// 是否存在评分
let isScore=ref(false)

// 评分弹窗
const scoreInfo = ref(null);
const maskChange = () => {
	maskState.value = !maskState.value;
};
// 打开详细按钮
const clickInfo = () => {
	infoPopup.value.open();
};
// 关闭详细按钮
const clickInfoClose = () => {
	infoPopup.value.close();
	
};
// 打开评分面板
const clickScore = () => {
	if(currentInfo.value.userScore){
		isScore.value=true
		score.value=currentInfo.value.userScore
	}
	scoreInfo.value.open();
	
};
// 关闭评分框
const clickScoreClose=()=>{
	score.value=0
	isScore.value=false
	scoreInfo.value.close();
	
}
// 提交评分
const submitScore=async ()=>{
	uni.showLoading({
		title:"加载中..."
	})
	let {classid,_id:willId}=currentInfo.value
	let res=await getScoreUrl(classid,willId,score.value)
	uni.hideLoading()
	if(res.data.errCode===0){
		uni.showToast({
			title:"评分成功",
			icon:'none'
		})
		ClassListObjs.value[currentIndex.value].userScore=score.value
		uni.setStorageSync("storeClassList",ClassListObjs.value)
		clickScoreClose()
	}
}
// 返回按钮回调
const InfoBack=()=>{
	uni.navigateBack({
		delta:1,
		fail:(err)=>{
			uni.reLaunch({
				url:"/pages/index/index"
			})
		}
	})
}

// 预览图片
const storeClassList=uni.getStorageSync('storeClassList') ||[]
const ClassListObjs=ref()
ClassListObjs.value=storeClassList.map(item=>{
	return { 
		...item,
		picurl:item.smallPicurl.replace("_small.webp",".jpg")
	}
})
// 图片id与索引值
const currentId=ref(null)
const currentIndex=ref(null)
onLoad(async (e)=>{
	currentId.value=e.id
	if(e.type){
		let rbs=await getDetailWall(e.id)
		ClassListObjs.value=rbs.data.data.map(item=>{
		return { 
			...item,
			picurl:item.smallPicurl.replace("_small.webp",".jpg")
			}
		})
	}
	currentIndex.value=ClassListObjs.value.findIndex(item=>{
		return item._id==e.id
	})
	// 找出当前图片的信息
	currentInfo.value=ClassListObjs.value[currentIndex.value]
	score.value=currentInfo.value.score
})

// 轮播图滑动
const swiperChange=(e)=>{
	currentIndex.value=e.detail.current
	currentInfo.value=ClassListObjs.value[currentIndex.value]
	score.value=currentInfo.value.score
}

const clickDownLoad=async ()=>{
	// #ifdef H5
		uni.showModal({
			content:"长按保存",
			showCancel:false
		})
	// #endif
	
	// #ifndef H5
	try{
		uni.showLoading({
			title:"下载中",
			mask:true
		})
		let {classid,_id:willId}=currentInfo.value
		let res=await getWriteDownload(classid,willId)
		if(res.data.errCode!=0){
			throw new Error("下载过于频繁")
		};
		uni.getImageInfo({
			src:currentInfo.value.picurl,
			success:(res)=>{
				uni.saveImageToPhotosAlbum({
					filePath:res.path,
					// 授权成功
					success:(e)=>{
						uni.showToast({
							title: "保存成功，请到相册查看",
							icon: "none"
						})
					},
					// 授权失败
					fail:(err)=>{
						// 下载失败
						if(err.errMsg == 'saveImageToPhotosAlbum:fail cancel'){
							uni.showToast({
								title:"保存失败，请重新点击下载",
								icon:'none'
							})
							return ;
						}
						uni.showModal({
							title:"授权提示",
							content:"需要授权保存相册",
							success:res_show=>{
								if(res_show.confirm){
									uni.openSetting({
										success:(setting)=>{
											if(setting.authSetting["scope.writePhotosAlbum"]){
												uni.showToast({
													title:"授权成功",
													icon:"none"
												})
											}else{
												uni.showToast({
													title:"授权失败",
													icon:"none"
												})
											}
										}
									})
								}
							}
						})
					},
					complete:(e)=>{
						uni.showToast({
							title:e,
							icon:'none'
						})
						uni.hideLoading()
					}
				})
			}
		})
	
	}catch(e){
		//TODO handle the exception
		uni.hideLoading()
	}	
	// #endif
}
// 分享盆友
onShareAppMessage((e)=>{
	return {
		title:"好果子图画",
		path:"/pages/preview/preview?id="+currentId.value+"&type=share"
	}
})
// 分享盆友圈
onShareTimeline(()=>{
	return {
		title:"好果子壁纸",
		query:"id="+currentId.value+"&type=share"
	}
})
</script>

<style lang="scss" scoped>
.preview {
	width: 100%;
	height: 100vh;
	position: relative;

	swiper {
		width: 100%;
		height: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.mask {
		& > view {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			width: fit-content;
			color: white;
		}
		.goBack {
			top: 1vh;
			left: 40rpx;
			
		}
		.content {
			top: 10vh;
			background-color: rgba(0, 0, 0, 0.3);
			font-size: 30rpx;
			border-radius: 40rpx;
			padding: 8rpx 20rpx;
			background-filter: blur(10rpx);
		}
		.time {
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 200rpx;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		.date {
			top: calc(10vh + 230rpx);
			font-size: 40rpx;
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		.footer {
			background: rgba(255, 255, 255, 0.8);
			bottom: 5vh;
			width: 60vw;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 20rpx 40rpx;
			border-radius: 120rpx;
			color: #000;
			box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
			background-filter: blur(20rpx);
		}
	}

	// 信息弹窗
	.Popup {
		.infoPopup {
			padding: 50rpx;
			overflow: hidden;
			.popHeader {
				width: 100%;
				position: relative;
				.title {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translate(-50%, 0);
					height: 30rpx;
					font-size: 35rpx;
					color: $text-font-color-2;
				}
				
				
				.close {
					position: absolute;
					top: 0.8vh;
					right: 0;
					padding: 0 20px;
					// border: 1px solid red;
				}
			}
			.scrollContent {
				margin-top: 80rpx;
				max-height: 60vh;

				.content {
					.row {
						display: flex;
						justify-content: center;
						padding: 16rpx 0;
						font-size: 32rpx;
						// line-height: 1.7em;
						.label {
							color: $text-font-color-3;
							width: 140rpx;
							text-align: right;
							font-size: 30rpx;
						}
						.value {
							padding-left: 30rpx;
							flex-grow: 1;
							width: 0;
						}
						.rate {
							display: flex;
							align-items: center;
							text {
								color: #ffca3e;
								padding: 0 20rpx;
							}
						}
						.tabs {
							display: flex;
							flex-wrap: wrap;
							.tab {
								color: $brand-theme-color;
								border: 1px solid $brand-theme-color;
								font-size: 30rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: em;
								margin: 0 10rpx 10rpx 0;
							}
						}
						.copyright {
							font-size: 28rpx;
							padding: 20rpx;
							background: #f6f6f6;
							color: #666;
							border-radius: 20rpx;
							margin: 20rpx 0;
							line-height: 1.6em;
						}
					}
				}
			}
		}
	}

	// 评分弹窗
	.scoreInfo{
		width: 60vw;
		min-height: 200rpx;
		font-size: 28rpx;
		.scoreHead{
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-around;
			padding:20rpx 0 ;
		}
		
		.content{
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			text{
				padding: 0 20rpx;
				line-height: 1.5em;
			}
		}
		.footer{
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			padding: 20rpx ;
		}
	}
	
}
</style>
