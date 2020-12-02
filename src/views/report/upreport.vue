<template>
	<div class="ho">
		<el-container>
			<el-container>
				<el-main style="height: 720px;">
					<ToolBar>
						<div class="main-top">
							<el-breadcrumb-item>举报列表</el-breadcrumb-item>

						</div>
					</ToolBar>
					<div>
						<el-table ref="multipleTable" :data="listData" tooltip-effect="dark" style="width: 100%">
							<el-table-column type="selection" width="55"></el-table-column>

							<el-table-column label="被举报人名称" align="center">
								<template slot-scope="scope">{{ scope.row.username }}</template>
							</el-table-column>

							<el-table-column label="举报时间" align="center">
								<template slot-scope="scope">{{ scope.row.date |formatDate }}</template>
							</el-table-column>
							<el-table-column label="详细信息" align="center">
								<template slot-scope="scope">
									<el-button size="mini" round type="success" @click="newsDetailInfo(scope.row.id)">详情信息</el-button>
								</template>
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
		reportAllType
	} from "@/api/report";
	import {
		updateAll
	} from "@/api/report";
	import {
		tager
	} from "@/config/tager";

	export default {

		data() {
			return {

				searchParams: {
					id: '',
					type: '',
				},
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
	
				return y + '-' + MM + '-' + d ;
			},
			tager: function(id) {
				return tager(id);
			}
		},

		computed: {

		},

		created() {
			this.initepartmentListDate()
		},
		methods: {
			//查询部门列表数据
			initepartmentListDate() {
				reportAllType({
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
				this.initepartmentListDate()
			},

			one(newtype) {
				if (newtype == 1) {
					this.$confirm("确定通过?", "提示", {
							confirmButtonText: "确定",
							cancelButtonText: "取消",
							type: "warning",
						})
						.then(() => {
							this.updateByPrimaryKey(id, newtype);
						})
						.catch(() => {});
				} else if (newtype == 3) {
					this.$confirm("确定不通过?", "提示", {
							confirmButtonText: "确定",
							cancelButtonText: "取消",
							type: "warning",
						})
						.then(() => {
							this.updateByPrimaryKey(id, newtype);
						})
						.catch(() => {});
				}
			},
			//修改提交
			updateByPrimaryKey(id, newtype) {
				updateAll({
						newsId: id,
						type: newtype
					})
					.then(r => {
						this.newsReviewResult = newtype,
							this.dealDate = new Date().toLocaleString();
						this.$message({
							type: "success",
							message: r.msg
						});
					})
					.catch(() => {});
			},
			newsDetailInfo(id){
				
				this.id=id;
				 //this.showEditDialog=true;					
				this.$router.push({path:'/reportInfo',query:{id:id}})
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
