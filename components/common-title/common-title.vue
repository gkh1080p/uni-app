<template>
	<view class="title">
		<!-- 公共标题 -->
		<view class="name">
			<h2>
				<slot name="name"></slot>
			</h2>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 30rpx;
}
</style>