import req from "../../utils/api.js"

const indexList=[
	"https://tea.qingnian8.com/api/bizhi/wallList"
]

// 专题精选
export const getClassListUrl=(id,pageNum,pageSize)=>{
	return req(indexList[0],{classid:id,pageNum,pageNum})
}

