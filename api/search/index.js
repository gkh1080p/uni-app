import req from "../../utils/api.js"

const indexList=[
	"https://tea.qingnian8.com/api/bizhi/searchWall"
]

// 专题精选
export const getSearchWall=(keyword,pageNum,pageSize)=>{
	return req(indexList[0],{keyword,pageNum,pageSize})
}