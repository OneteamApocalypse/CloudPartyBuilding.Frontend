import request from "@/utils/request.js";

/**
 * 获取部门列表
 * @param {Object} params
 */
export function newsReview(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/newsReview/selectUnreviewedById", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
};
export function newsReviewAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/newsReview/newsReviewStatusSelectAll", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
};
export function updatenewsReview(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/newsReview/updateByPrimaryKeySelective", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
}

