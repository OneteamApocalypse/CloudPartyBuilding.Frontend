<!-- 新增部门 -->
<template>
	<div class="news">
		<el-form ref="form" :model="form" label-width="200px">
			<el-form-item label="人员名称" style="width: 500px;">
				<el-input v-model="form.usersname"></el-input>
			</el-form-item>
			<el-form-item label="人员成绩" style="width: 500px;">
				<el-input v-model="form.grades"></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm()">立即发布</el-button>
				<el-button>取消</el-button>
			</el-form-item>

		</el-form>
	</div>
</template>

<script>
	import {
		fillerLeft,
		resetObject
	} from "@/utils/common";

	import {
		insertgradesAll
	} from "@/api/grades"
	/*  */
	export default {
		data() {
			return {
				form: {
					gradesid: '',
					usersid: '',
					usersname: '',
					grades: '',
				},
				textarea: '请输入内容',
			}
		},
		created() {
			this.initepartmentListDate()
		},
		methods: {


			submitForm() {
				this.$refs.form.validate(valid => {
					if (valid) {
						this.$message({
							message: "字段验证通过，提交请求，成功后刷新分页！",
							type: "success"
						});
						insertgradesAll(this.form)
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
	};
</script>
