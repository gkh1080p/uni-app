import req from "../../utils/api.js"

const indexList=[
	"https://tea.qingnian8.com/api/bizhi/setupScore",
	"https://tea.qingnian8.com/api/bizhi/downloadWall",
	"https://tea.qingnian8.com/api/bizhi/detailWall"
]

// 专题精选
export const getScoreUrl=(classid,wallId,userScore)=>{
	return req(indexList[0],{classid,wallId,userScore})
}

export const getWriteDownload=(classid,wallId)=>{
	return req(indexList[1],{classid,wallId})
}

export const getDetailWall=(id)=>{
	return req(indexList[2],{id})
}