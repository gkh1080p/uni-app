import req from "../../utils/api.js"

const indexList=[
	"https://tea.qingnian8.com/api/bizhi/classify"
]

// 专题精选
export const getClassifyUrl=()=>{
	return req(indexList[0],{pageSize:100})
}


