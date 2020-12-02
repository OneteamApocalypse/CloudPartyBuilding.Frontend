import request from "@/utils/request.js";

/**
 * 获取部门列表
 * @param {Object} params
 */
export function communistPartyRSS(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/RSS/communistPartyRSS", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
}