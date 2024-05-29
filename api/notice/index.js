import req from "../../utils/api.js"

const indexList=[
	"https://tea.qingnian8.com/api/bizhi/wallNewsDetail",
]

// 专题精选
export const getNewsDetail=(id)=>{
	return req(indexList[0],{id})
}