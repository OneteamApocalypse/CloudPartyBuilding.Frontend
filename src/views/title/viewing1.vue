<template>
	<div >
	<h2 style="text-align: center;">网上举报</h2>
	<el-form ref="formLabelAlign" :model="formLabelAlign">
	  <el-form-item label="姓名">
	    <el-input v-model="formLabelAlign.username"></el-input>
	  </el-form-item>
	  <div style="margin: 50px 0;"></div>
	  <el-form-item label="内容">
	    <el-input type="textarea"
		  :rows="10"
		 v-model="formLabelAlign.content"></el-input>
	  </el-form-item>
	  <el-form-item>
		  	  	   <el-button type="primary" style="margin-left: 1400px;"  @click="submitForm()">提交信息</el-button>
	  </el-form-item>

	  </el-form>
	  <el-upload
	    class="upload-demo"
	    action="https://jsonplaceholder.typicode.com/posts/"
	    :on-preview="handlePreview"
	    :on-remove="handleRemove"
	    :before-remove="beforeRemove"
	    multiple
	    :limit="3"
	    :on-exceed="handleExceed"
	 >
	  <el-button type="primary" style="margin-left: 120px;" >上传附件<i class="el-icon-upload el-icon--right"></i></el-button>
	 
	  </el-upload>

	  </div>
</template>

<script>
	import{insertreportAll} from"@/api/report";
	export default {
	  data() {
	    return {
	     formLabelAlign:{
			 username:'',
			 content:'',	 
		 },
	
	    }
		
	  },
	      methods: {
	        handleRemove(file, fileList) {
	          console.log(file, fileList);
	        },
	        handlePreview(file) {
	          console.log(file);
	        },
	        handleExceed(files, fileList) {
	          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
	        },
	        beforeRemove(file, fileList) {
	          return this.$confirm(`确定移除 ${ file.name }？`);
	        },
			submitForm() {
				this.$refs.formLabelAlign.validate(valid => {
					if (valid) {
						this.$message({
							message: "字段验证通过，提交请求，成功后刷新分页！",
							type: "success"
						});
						insertreportAll(this.formLabelAlign)
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
	}
</script>

<style>
</style>
