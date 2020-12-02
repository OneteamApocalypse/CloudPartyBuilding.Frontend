import Vue from 'vue';
import store from './store';
import App from "./App.vue";
import router from './router'
import elementUi from "element-ui";
import "@/assets/css/style.scss";
import "@/assets/css/bbs.css";
import BaiduMap from 'vue-baidu-map'
import Config from "@/config/app";
import { getToken,toDecimal2,getUserInfo } from "@/utils/common";
Vue.config.productionTip = false

Vue.prototype.GlobalCfg = Config;
Vue.use(elementUi);

Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '7dgclcm0gxH5ic30Mf6QQ2HSS8Wv8p4W'
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) },

}).$mount('#app');


