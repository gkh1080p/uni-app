import {ref} from 'vue'
let system=uni.getSystemInfoSync()
export let statusBarHeight=()=>system.statusBarHeight || 0


export const titleBarHeight=()=>{
	if(uni.getMenuButtonBoundingClientRect){
		let {top,height}=uni.getMenuButtonBoundingClientRect()
		let titleBarHeight=height+(top-statusBarHeight())*2
		return titleBarHeight
	}else{
		return 40;
	}
}
export const getNavBarHeight=()=>statusBarHeight()+titleBarHeight()
// 抖音小程序
export const getLeftIcon=()=>{

	
	// #ifdef MP-TOUTIAO
	let {leftIcon:{left,width}}=tt.getCustomButtonBoundingClienRect()
	return left+parseInt(width)+5
	//  #endif
	
	// #ifndef MP-TOUTIAO
	return 0
	//  #endif
	
}
