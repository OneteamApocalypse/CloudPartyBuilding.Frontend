<template>
	<div class="news">
	      <header>
	        <router-link to="/" class="gobackLink"><< 返回列表</router-link>
	      </header>
	      <h2>{{list.title}}</h2>
	      <div class="cont" v-html="list.content"></div>
	    </div>
</template>

<script>
	 import Axios from 'axios';
	
	    export default {
	        data(){
	          return {
	            list:[]
	          }
	        },
	      
	    
		methods:{
			          getData(id){
			            var api='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+id;
			            Axios.get(api).then((response)=>{
			              console.log(response);
			              this.list=response.data.result[0];
			              //console.log(response.data.result);
			            }).catch((error)=>{
			              console.log(error);
			            });
			          }
			        },
		mounted(){
		        this.getData(this.$route.params.id);
		      }
			  }
</script>

<style lang="scss" scoped>
   .news{
     padding: 0 15px;
   }
 
   header{
     text-align: left;
 
     .gobackLink{
       display: inline-block;
       padding: 5px 10px;
       border: 1px solid #eee;
       border-radius:10px;
     }
   }
 
 
   .cont{
     text-align: left;
     line-height: 2em;
 
     img{
       display: block;
       max-width: 100%;
       height: auto;
     }
   }
</style>
