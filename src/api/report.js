import request from "@/utils/request.js";

/**
 * 获取会议列表
 * @param {Object} params
 */
export function reportAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/report/query_all", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
};
export function updateAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/report/updateAll", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
};
export function report(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/report/query", 
		method: "get",
		 //get请求请使用 params: params
		params: params ,	 
	 });
};
 
export function insertreportAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/report/insertAll", 
		 method: "post",
		  //get请求请使用 params: params
		 data: params ,	 
	 });
};
export function reportAllType(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/report/queryType", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
};
