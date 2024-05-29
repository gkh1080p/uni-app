import req from "../../utils/api.js"
const indexList=[
	"https://tea.qingnian8.com/api/bizhi/homeBanner",
	"https://tea.qingnian8.com/api/bizhi/randomWall",
	"https://tea.qingnian8.com/api/bizhi/wallNewsList",
	"https://tea.qingnian8.com/api/bizhi/classify"
]

// 轮播图api
export const getBannerUrl=()=>{
	return req(indexList[0])
}

// 每日推荐api
export const getDayRandomUrl=()=>{
	return req(indexList[1])
}

// 公告api
export const getNoticeUrl=()=>{
	return req(indexList[2],{select:"true"})
}
// 专题精选
export const getClassifyUrl=()=>{
	return req(indexList[3],{select:"true"})
}
