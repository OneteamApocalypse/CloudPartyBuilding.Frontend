import request from "@/utils/request.js";

/**
 * 获取会议列表
 * @param {Object} params
 */
export function newsComment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url:"/newComment/selectByNewsId", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
};
export function intonewsComment(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/newComment/insertSelective", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
}