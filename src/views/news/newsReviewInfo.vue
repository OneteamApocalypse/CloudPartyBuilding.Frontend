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
					<P>审核</P>
					<el-form :model="searchParams" ref="searchParams" label-position="left">
						<el-form-item>
							<el-button type="primary" style="width: 80px" value="提交" @click="one(1)">通过</el-button>
							<el-button type="primary" style="width: 80px" value="提交" @click="one(2)">不通过</el-button>
						</el-form-item>

					</el-form>
					<!-- </el-table> -->
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
		updatenewsReview
	} from "@/api/newsReview";
	export default {
		data() {
			return {
				searchParams: {
					newsReviewDirections: '',
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
			one(newtype) {
				if (newtype == 1) {
					this.$confirm("确定通过?", "提示", {
							confirmButtonText: "确定",
							cancelButtonText: "取消",
							type: "warning",
						})
						.then(() => {
							this.updateByPrimaryKey(newtype);
						})
						.catch(() => {});
				} else if (newtype == 2) {
					this.$confirm("确定不通过?", "提示", {
							confirmButtonText: "确定",
							cancelButtonText: "取消",
							type: "warning",
						})
						.then(() => {
							this.updateByPrimaryKey(newtype);
						})
						.catch(() => {});
				}
			},
			//修改提交
			updateByPrimaryKey(newtype) {
				updatenewsReview({
						newsId: this.$route.query.id,
						newsReviewResult: newtype
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
