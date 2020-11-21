import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vant/lib/index.css";
import "./assets/styles/reset.scss";
Vue.config.productionTip = false;
import { Tabbar, TabbarItem, NavBar } from "vant";

Vue.use(Tabbar);
Vue.use(NavBar);
Vue.use(TabbarItem);
Vue.filter("Tenthousand", value => {
  var num = Math.pow(10, 4);
  if (value > num) {
    return `${(value / num).toFixed(1)}万`;
  } else {
    return value;
  }
});
Vue.filter("upname", value => {
  var num = Math.pow(10, 4);
  if (value > num) {
    return `${(value / num).toFixed(1)}万`;
  } else {
    return value;
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
