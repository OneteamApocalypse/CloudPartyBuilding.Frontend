<template>

	<div class="communistParty">


		<ul class="list">
			<el-image src="http://www.people.cn/img/2014peoplelogo/rmw_logo.gif"></el-image>
			<br><br>
			<li v-for="item in listData">
				<a :href="item.link" target="_blank" rel="noopener noreferrer">{{item.title}}</a>
				<div>{{item.publishedDate | formatDate}}</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import Axios from "axios";
	import newList from "@/components/newList"; //引入组件
	// // 导出组件

	// export default {
	// name:'hoting',
	// data() {
	// 	return {

	// 		list:[]
	// 	};
	// },
	// 	methods:{
	// 	  getData(){
	// 	    var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
	// 	    Axios.get(api).then((response)=>{
	// 	      this.list=response.data.result;
	// 	      //console.log(response.data.result);
	// 	    }).catch((error)=>{
	// 	      console.log(error);
	// 	    });
	// 	  },


	// 	},
	import {
		communistPartyRSS
	} from "@/api/communistPartyRSS";

	export default {
		// filters:{
		//         formatTimeToStr:function(time){

		//             return formatTimeToStr(time);
		//         },
		//  },
		data() {
			return {

				// //模糊查询
				// searchParams: {
				//   title: "",
				//   type: ""
				// },

				listData: [],
				date: '',

				showEditDialog: false,
				id: '',
			}
		},
		filters: {
		      formatDate: function (value) {
		        let date = new Date(value);
		        let y = date.getFullYear();
		        let MM = date.getMonth() + 1;
		        MM = MM < 10 ? ('0' + MM) : MM;
		        let d = date.getDate();
		        d = d < 10 ? ('0' + d) : d;
		        // let h = date.getHours();
		        // h = h < 10 ? ('0' + h) : h;
		        // let m = date.getMinutes();
		        // m = m < 10 ? ('0' + m) : m;
		        // let s = date.getSeconds();
		        // s = s < 10 ? ('0' + s) : s;
		        return y + '-' + MM + '-' + d ;
		      },
		},

		computed: {

		},

		created() {
			//页面一加载就初始化部门列表
			this.initepartmentListDate()
		},
		methods: {


			//查询部门列表数据
			initepartmentListDate() {
				communistPartyRSS().then(r => {
					//获取到从后台传入的部门列表
					console.log(r)
					this.listData = r
				})
			},

		},

	}

</script>

<style>
	.ho {
		width: 100%;
		height: 60%;
		


	}

	.list li {
		display: block;
		text-align: left;
		padding: 4px 0;
		font-size: 20px;


	}

	.list {
		width: 60%;
		margin: 0 auto;


	}
</style>
