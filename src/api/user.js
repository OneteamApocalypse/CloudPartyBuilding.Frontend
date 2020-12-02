import request from "@/utils/request.js";
/* 
	用户登录
 */
export function login(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/user/signin", 
		 method: "post",
		 data: params //注意：如果是get请求请使用 params: params
	 });
}
/* 
 注册验证码
 */
export function yz(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/user/captcha", 
		 method: "get",
		 params: params 
	 });
}
/* 
	注册
 */
export function zc(params){
	
	 return request({
		 //如果是绝对路径就不会在使用配置里的url
		 url: "/user/signup", 
		 method: "post",
		 data: params //注意：如果是get请求请使用 params: params
	 });
}