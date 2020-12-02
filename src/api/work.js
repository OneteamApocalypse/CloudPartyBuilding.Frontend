import request from "@/utils/request.js";
/* 
	用户登录
 */
export function SelectAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/work/SelectAll", 
		 method: "get",
		 params: params //注意：如果是get请求请使用 params: params
	 });
}
export function insertworkingAll(params){
	return request({
			 //如果是绝对路径就不会在使用配置里的url
			 url: "/work/insertAll", 
			 method: "post",
			  //get请求请使用 params: params
			 data: params ,	 
	});
}