<template>
  <div style="width: 100vw;height: 100vh;display: flex;justify-content: center;align-items: center">
    <el-form ref="loginForm" :rules="rules" :model="loginForm" label-width="80px">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="loginForm.pass" show-password></el-input>
      </el-form-item>
	  
	  </el-form-item>
	  
      <el-form-item>
        <el-button type="primary" @click="clickLogin('loginForm')">登录</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
        <el-row>
          <el-col :span="12">
            <el-link type="primary" @click="register()">注册</el-link>
          </el-col>
          <el-col :span="12" style="text-align:right">
            <el-link type="primary">忘记密码</el-link>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { setToken } from "@/utils/common";
import { login } from "@/api/user";
import { yz } from "@/api/user"
export default {
  data() {
    return {
      loginForm: {
        name: "",
        pass: "",
		captcha: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    clickLogin(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          login({
            phone: this.loginForm.name,
            password: this.loginForm.pass
          })
            .then(r => {
              // console.log(r);
              if (r.status == "success") {
                setToken("HJDF844GDFG5D8J7FGHFG5");
                this.$router.push("/");
              }else{
                 this.$alert(r.msg, '提示', {
                  confirmButtonText: '确定'
                });
              }
            })
            .catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(loginForm) {
      this.$refs[loginForm].resetFields();
    },
	register(){
		this.$router.push({
		  path: "/register"
		});
	},
  },
  mounted: function() {}
};
</script>
