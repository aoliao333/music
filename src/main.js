import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
