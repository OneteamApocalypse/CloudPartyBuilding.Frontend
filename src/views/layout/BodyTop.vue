<template>
  <div class="body-top" >
    <div class="body-top-btn" @click="hiddenSidebar">
      <i class="el-icon-menu"></i>
    </div>
	<div class="body-top-btn" @click="showWebIndex" >
	  <i class="el-icon-position"></i>
	</div>
    <div class="right">
      <span class="body-top-btn" @click="screenFullToggle">
        <i class="fa fa-arrows-alt"></i>
      </span>
      <el-dropdown>
        <span class="body-top-btn">
          <i class="el-icon-setting"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <div style="padding: 10px 20px;text-align: center;">
            导航类型：
            <el-button-group>
              <el-button
                :type="system.navType === item.value ? 'primary' : ''"
                size="mini"
                v-for="item in GlobalCfg.systemNavType"
                :key="item.value"
                @click="$store.commit('NAV_TYPE_TOGGLE', item.value)"
                >{{ item.label }}</el-button
              >
            </el-button-group>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="body-top-btn">
          {{ userName }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="$router.push('/personal')">
            <i style="padding-right: 8px" class="fa fa-user"></i>个人中心
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">
            <i style="padding-right: 8px" class="fa fa-sign-out"></i>退出系统
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import ScreenFull from "screenfull";
import { mapState } from "vuex";
import Menu from "@/menu/index";
import { removeToken} from "@/utils/common";
export default {
  name: "BodyTop",
  data() {
    return {
      menu: Menu,
      userName: "Admin"
    };
  },
  methods: {
    hiddenSidebar() {
      this.$store.commit("HIDE_SIDEBAR_TOGGLE");
    },
    screenFullToggle() {
      ScreenFull.toggle()
        .then(() => {})
        .catch(() => {
          this.$message({
            message: "你的浏览器不支持全屏！",
            type: "warning"
          });
        });
    },
	
	//实现退出系统返回到登录页

	 logout() {
		removeToken();
		this.$router.push({name:'Login'})
		},
		showWebIndex(){
			this.$router.push("/")
		}
	
  },
  computed: mapState(["system"])
};
</script>
<style lang="scss">
@import "../../assets/css/variables.scss";
.body-top {
  width: 100%;
  display: flex;
  height: 50px;
  background-color: #025532;
  z-index: 10;
  .body-top-btn {
    overflow: hidden;
    height: $--top-height;
    display: inline-block;
    text-align: center;
    line-height: $--top-height;
    cursor: pointer;
    padding: 0 14px;
    color: #fff;
    .badge {
      .el-badge__content {
        margin-top: 10px;
      }
    }
    &:hover {
      background-color: mix(#000, $--color-primary, 10%);
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
