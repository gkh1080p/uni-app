import req from "../../utils/api.js"

const indexList=[
	"https://tea.qingnian8.com/api/bizhi/userInfo",
	"https://tea.qingnian8.com/api/bizhi/userWallList"
]

// 专题精选
export const getUserInfo=()=>{
	return req(indexList[0])
}

export const getHistoryList=(type,pageNum,pageSize)=>{
	return req(indexList[1],{type,pageNum,pageSize})
}