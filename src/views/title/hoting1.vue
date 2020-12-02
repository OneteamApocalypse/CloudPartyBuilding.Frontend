<template>
	<div class="hoting1">
	<div class="bbs" >
	    <header ><span @click="changeshow">我要发帖</span></header>
	    <section>
	            <ul>
	    			<li v-for="v in postlist">
	    				<div><img :src="v.src" /></div>
	    				<h1>hhk</h1>
	    				<p>
	    					<span>{{v.title}}</span>
	    					<span>{{v.copyright}}</span>
							<span>{{v.time}}</span>
	    				</p>
						<br><br>
						<span>
							<el-badge :value="12" class="item">
							<el-button size="small">评论</el-button>
							</el-badge>
							<el-badge :value="3" class="item">
							<el-button size="small">回复</el-button>
							</el-badge>
						</span>
	    			</li>
	    		</ul>
	    </section>
	
	   <div class="post" v-show="isShow">
	       <input class="title" v-model="title" placeholder="请输入标题（1-50个字符）">
	       所属版块：<select v-model="copyright">
	   		<option>请选择版块</option>
	   		<option>党建政策</option>
	   		<option>党纪党风</option>
	   		<option>新手报到</option>
	   		<option>新闻来啦</option>
	   		</select>
	       <textarea v-model="content" class="content"></textarea>
	       <input class="btn" value="发布" @click="toPost">
		   <input class="btn" value="取消" @click="changeshow1">
	   </div>
	</div>
	</div>
</template>

<script>
	import c01 from '@/assets/images/post/tou01.jpg'
	import c02 from '@/assets/images/post/tou02.jpg'
	import c03 from '@/assets/images/post/tou03.jpg'
	import c04 from '@/assets/images/post/tou04.jpg'
	export default {
		name:'hoting1',
		data() {
			return {
				isShow:false,
				title:'',
				copyright:'请选择板块',
				//time:''
				postlist:[{src:c01,title:'卢本伟',copyright:'sewd',time:'2020-03-21'}],
				
			};
		},
			methods:{
			  changeshow:function(){
			  				 this.isShow=true;
			  },
			  changeshow1:function(){
				  this.isShow=false;
				
			  },
			  toPost(){
			  				 var myDate=new Date();
			  				 var currentDate=myDate.getFullYear()+"-"+parseInt(myDate.getMonth()+1)+"-"+myDate.getDate()+" "+myDate.getHours()+":"+myDate.getMinutes();
			  				 var random=Math.floor(Math.random()*4);//得到1-4的范围数据
			  				 this.postlist.unshift({src:'c0'+random,title:this.title,copyright:this.copyright,time:currentDate});
			  				  this.isShow=false;
			  				  //清空编辑区域数据
			  				  this.title='';
			  				  this.copyright='请选择板块';
			  				  this.content='';
			  },
			}
		
	}
</script>

<style>
</style>
