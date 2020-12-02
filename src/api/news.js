import request from "@/utils/request.js";


export function newsAll(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/news/query_all", 
		 method: "get",
		  //get请求请使用 params: params
		 params: params ,	 
	 });
};
export function query(params){
	return request({
			 //如果是绝对路径就不会在使用配置里的url
			 url: "/news/query", 
			 method: "get",
			  //get请求请使用 params: params
			 params: params ,	 
	});
};
	
export function insert(params){
	return request({
			 //如果是绝对路径就不会在使用配置里的url
			 url: "/news/insert", 
			 method: "post",
			  //get请求请使用 params: params
			 data: params ,	 
	});
}