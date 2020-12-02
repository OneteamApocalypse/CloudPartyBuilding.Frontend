<template>
	<div class="ho">

		<el-container>
			<el-container>
				<el-main style="height: 100%;">
					<li v-for="item in tableData">
						<h1>{{item.name}}</h1>
						<p>作者：{{item.author}}</p>
						<span>{{item.content}}</span>
					</li>
					<el-divider></el-divider>
					<P>评论</P>
					<el-form :model="searchParams" ref="searchParams" label-position="left">
						<el-form-item>
							<el-input style="width: 50%;" type="textarea" :rows="3" placeholder="请输入内容" v-model="searchParams.content">
								
							</el-input>
							<el-form-item v-model="searchParams.newsId"></el-form-item>
							<el-form-item v-model="searchParams.lastCommentId"></el-form-item>
							<el-button type="primary" style="width: 100px;text-align: center;" value="提交" @click="submitForm()">提交评论</el-button>
							
						</el-form-item>
												
					</el-form>

					<li v-for="item in listData">
						<p>评论人:{{item.userId}}</p>
						<span>评论内容:{{item.content}}</span>
						<el-divider></el-divider>
					</li>
					<!-- </el-table> -->
					<ToolBar>
						<div>
							<!-- 分页 -->
							<el-pagination background layout="prev, pager, next" :page-size="pageSize" :total="total" @current-change="changePage">
							</el-pagination>
						</div>
					</ToolBar>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import newList from "@/components/newList"; //引入组件
	import {
		query
	} from "@/api/news";
	import {
		newsComment
	} from "@/api/newComment";
	import {
		selectid
	} from "@/api/user";
	import {
		intonewsComment
	} from "@/api/newComment";
	export default {
		data() {
			return {
				searchParams: {
					id: '',
					userId: 1,
					content: '',
					date: '',
					newsId: this.$route.query.id,
					lastCommentId: '',
				},
				tableData: [],
				listData: [],
				textarea: '',
				pageSize: 5,
				//默认总条数
				total: null,
				//默认初始页号
				pageNo: 1,
			};

		},
		created() {
			this.initForms();
			this.initnewsComment()
		},
		methods: {
			initForms() {
				query({
						id: this.$route.query.id
					})
					.then(r => {
						//后端传入的是一个对象，前端不能直接用数组接收，直接使用会导致数据格式匹配错误
						let tableData = [];
						//在空数组中直接加入r(对象)
						tableData.push(r);
						this.tableData = tableData;
					})
					.catch(() => {});
			},
			initnewsComment() {
				newsComment({
					news_id: this.$route.query.id,
					pageNo: this.pageNo,
					pageSize: this.pageSize
				}).then(r => {
					//获取到从后台传入的部门列表
					this.listData = r.list
					this.total = r.total
				}).catch(() => {});
			},
			changePage(val) {
				this.pageNo = val
				//根据新的页面选取分页数据
				this.initnewsComment()
			},
			//修改提交
			submitForm() {
				this.$refs.searchParams.validate(valid => {
					if (valid) {
						this.$message({
							message: "字段验证通过，提交请求，成功后刷新分页！",
							type: "success"
						});
						intonewsComment(this.searchParams)
							.then(r => {
								this.$message({
									message: r.msg,
									type: "success"
								});
								this.$emit("success");
							})
							.catch(() => {});
						//隐藏嵌套框

					} else {
						this.$message({
							message: "请按照提示正确填写内容！",
							type: "warning"
						});
						return false;
					}
				});

			},

		},
		components: {}
	};
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

	.w3cschool {
		text-align: center
	}

	.list {
		width: 60%;
		margin: 0 auto;


	}

	.el-header {
		background-color: #025532;
		color: #ffffff;
		text-align: center;
		line-height: 240px;

	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 60px;
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
