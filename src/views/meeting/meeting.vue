<template>
	<div class="ho">
		<el-container>
			<el-container>
				<el-main style="height: 720px;">
					<ToolBar>
						<div class="main-top">
							<el-breadcrumb-item>会议信息</el-breadcrumb-item>
							
						</div>
					</ToolBar>
					<div>
						<el-table ref="multipleTable" :data="listData" tooltip-effect="dark" style="width: 100%">
							<el-table-column type="selection" width="55"></el-table-column>

							<el-table-column label="会议名称" align="center">
								<template slot-scope="scope">{{ scope.row.meetingName }}</template>
							</el-table-column>
							<el-table-column label="会议内容" align="center">
								<template slot-scope="scope">{{ scope.row.meetingRecord }}</template>
								</el-table-column>
								<el-table-column label="会议时间" align="center">
									<template slot-scope="scope">{{ scope.row.meetingTime |formatDate }}</template>
								</el-table-column>
								<el-table-column label="会议地点" align="center">
									<template slot-scope="scope">{{ scope.row.meetingPlace }}</template>
								</el-table-column>
								<el-table-column label="会议主持人" align="center">
									<template slot-scope="scope">{{ scope.row.meetingHost }}</template>
								</el-table-column>
						</el-table>
						<ToolBar>
							<div>
								<!-- 分页 -->
								<el-pagination background layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="changePage">
								</el-pagination>
							</div>
						</ToolBar>
					</div>
				</el-main>
			</el-container>

		</el-container>
	</div>
</template>

<script>
	import Axios from "axios";
	import newList from "@/components/newList"; //引入组件
	import {
		meetingAll
	} from "@/api/meeting.js";

	export default {

		data() {
			return {


				listData: [],
				date: '',
				showEditDialog: false,
				id: '',
				//每页显示条数
				pageSize: 5,
				//默认总条数
				total: null,
				//默认初始页号
				pageNo: 1,
			}
		},
		filters: {
			formatDate: function(value) {
				let date = new Date(value);
				let y = date.getFullYear();
				let MM = date.getMonth() + 1;
				MM = MM < 10 ? ('0' + MM) : MM;
				let d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				let h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				let m = date.getMinutes();
				m = m < 10 ? ('0' + m) : m;
				let s = date.getSeconds();
				s = s < 10 ? ('0' + s) : s;
				return y + '-' + MM + '-' + d+ ' ' + h+ ':' + m+ ':' + d;
			},
		},

		computed: {

		},

		created() {
			this.selectmeetingAll()
		},
		methods: {
			//查询部门列表数据
			selectmeetingAll() {
				meetingAll({
					pageNo: this.pageNo,
					pageSize: this.pageSize
				}).then(r => {
					//获取到从后台传入的部门列表
					this.listData = r.list
					this.total = r.total
				}).catch(() => {});
			},
			//改变页面当前页
			changePage(val) {
				this.pageNo = val
				//根据新的页面选取分页数据
				this.selectmeetingAll()
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

	.el-header {
		background-color: #025532;
		color: #ffffff;
		text-align: center;
		line-height: 140px;

	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
		margin: -12px;
		padding-top: 15px;
	}

	.el-footer {

		color: #ffff00;
		text-align: center;
		line-height: 70px;

	}

	.cart-footer .select-con {
		float: right;
		padding-right: 20px;
	}

	.cart-footer .delete-con {
		float: right;
		padding-right: 40px;
		margin-top: -5px;

	}
</style>

