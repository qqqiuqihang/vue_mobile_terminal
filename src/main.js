import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

// 导入全局样式
import "./styles/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
