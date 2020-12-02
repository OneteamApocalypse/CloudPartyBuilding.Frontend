<!-- 新增部门 -->
<template>
	<div class="news">
		<el-form ref="form" :model="form" label-width="200px">
			<el-form-item label="会议名称" style="width: 500px;">
				<el-input v-model="form.meetingName"></el-input>
			</el-form-item>
			<el-form-item label="会议地点" style="width: 500px;">
				<el-input v-model="form.meetingPlace"></el-input>
			</el-form-item>
			<el-form-item label="会议时间">
				<el-date-picker v-model="form.meetingTime"></el-date-picker>
			</el-form-item>
			<el-form-item label="主持人" style="width: 500px;">
				<el-input v-model="form.meetingHost"></el-input>
			</el-form-item>
			<el-form-item label="会议内容">
				<el-input v-model="form.meetingRecord" type="textarea" :rows="8" placeholder="请输入内容">
				</el-input>
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
		insertmeetingAll
	} from "@/api/meeting"
	/*  */
	export default {
		data() {
			return {
				form: {
					meetingId: '',
					meetingName: '',
					meetingRecord: '',
					meetingHost: '',
					meetingPlace: '',
					meetingTime:'',
				},
				textarea: '请输入内容',
			}
		},
		created() {
			
		},
		methods: {


			submitForm() {
				this.$refs.form.validate(valid => {
					if (valid) {
						this.$message({
							message: "字段验证通过，提交请求，成功后刷新分页！",
							type: "success"
						});
						insertmeetingAll(this.form)
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
