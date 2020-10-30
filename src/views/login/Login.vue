<template>
<div>
 <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="loginForm.pass" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="clickLogin('loginForm')">登录</el-button>
		</el-form-item>
 </el-form>
			    
</div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        name: "",
        pass: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  }
  }
</script>

<style>
</style>
