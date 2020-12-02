<template>
	<div class="news">
		<el-form ref="form" :model="form" label-width="200px">
			<el-form-item label="新闻名称" style="width: 500px;">
				<el-input v-model="form.name"></el-input>
			</el-form-item>
			<el-form-item label="新闻副标题" style="width: 500px;">
				<el-input v-model="form.subtitle"></el-input>
			</el-form-item>
			<el-form-item label="新闻板块">
				<el-select v-model="form.type" placeholder="请选择新闻模式">
					<el-option label="混排" value="1"></el-option>
					<el-option label="标排" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="新闻内容">
				<el-input v-model="form.content" type="textarea" :rows="8" placeholder="请输入内容">
				</el-input>
			</el-form-item>
			<el-form-item v-model="form.author"></el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm()">立即发布</el-button>
				<el-button>取消</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	import {
			insert
		} from "@/api/news";
	export default {
		data() {
			return {
				form: {
					name: '',
					subtitle: '',
					author: '1',
					publisher: '2',
					content: '',
					type: '',
					status: '',
				},
				textarea: '请输入内容',
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');			
			},
			submitForm() {
				this.$refs.form.validate(valid => {
					if (valid) {
						this.$message({
							message: "字段验证通过，提交请求，成功后刷新分页！",
							type: "success"
						});
						insert(this.form)
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
		}
	}
</script>

<style>
</style>
