import request from "@/utils/request.js";

/**
 * 获取会议列表
 * @param {Object} params
 */
export function gradesAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/grades/query_all", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
};
 
export function insertgradesAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/grades/insertAll", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
}