<template>
	
	<div class="hoting">
		<div class="work">
		<h3>组织活动</h3>
		<work-list v-for="(item,index) in hotList">
		  <br>
			<a href="https://element.eleme.io"  target="_blank">{{item.name}}</a>
			<h5>{{item.text}}</h5>
			</br>
		</work-list>
	</div>
	
		<div>
		      <ul class="list">
		         <li v-for="item in list">
		           <router-link :to="'/newList/'+item.aid">{{item.title}}</router-link>
					
		         </li>
					  
		      </ul>
		   </div>
</div>
</template>

<script>

	import Axios from "axios";
	import newList from "@/components/newList"; //引入组件
	// 导出组件
	export default {
	name:'hoting',
	data() {
		return {
		hotList: [
			{name:"第一次组织活动",
			text:"阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴"
			},
			{name:"第二次组织活动",
			text:"阿松肯定会我i的那位i的年纪own"
			},
			{name:"第三次组织活动",
			text:"死啊等会我的后期无敌回去"
			},
			{name:"第四次组织活动",
			text:"东起带你去哦我的弄完i的浓情"
			},
			{name:"第五次组织活动",
			text:"地区我都i前往东i你数据库范式恐惧愤怒"}
		],
		list:[]
		};
	},
		methods:{
		  getData(){
		    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
		    Axios.get(api).then((response)=>{
		      this.list=response.data.result;
		      //console.log(response.data.result);
		    }).catch((error)=>{
		      console.log(error);
		    });
		  }
		},
		mounted(){
		  this.getData();
		}
}
</script>

<style scoped>
	.work{
		font-size: 20px;
		text-align: center;
		font-weight:700;
		width: 50%;
		padding-top:100px;
		padding-bottom:100px;
		background-color:#EEEEEE;
		margin: auto;
		
	}
	.work br{
		font-size: 16px;
		text-align: center;
		font-weight:600;
		
	}
	
	.list{
	  li{
	    display: block;
	    text-align: left;
	    padding: 10px 0;
	  }
	}
</style>
