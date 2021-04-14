import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "./router";
// import axios from 'axios';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { Lazyload } from "vant";


Vue.use(Lazyload);
Vue.config.productionTip = false;
Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
