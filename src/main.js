import Vue from 'vue';
import store from './store';
import App from "./App.vue";
import router from './router'
import elementUi from "element-ui";
import "@/assets/css/style.scss";

Vue.config.productionTip = false
Vue.use(elementUi);


new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')


