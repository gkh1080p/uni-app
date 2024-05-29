export default function api(url,parameter,method="GET") {
	
	return new Promise((resolve,reject)=>{
		uni.request({
		    url,
		    method,
		    header: {
		        "access-key": "gkh1080p"
		    },
			data:parameter,
			success:res=>{
				if(res.data.errCode===0){
					resolve(res)
				}else if(res.data.errCode===400){
					uni.showModal({
						title:"错误提示",
						content:res.data.errMsg,
						showCancel:false
					})
					reject(res.data)
				}else{
					uni.showToast({
						title:res.data.errMsg,
						icon:"none"
					})
					reject(res.data)
				}
			},
			fail:err=>{
				reject(err)
			}
			
		});
	})
    
}