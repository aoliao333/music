import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "./router";
// import axios from 'axios';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import { Lazyload } from "vant";

<<<<<<< HEAD
import APlayer from "@moefe/vue-aplayer";

=======

Vue.use(Lazyload);
>>>>>>> d7bab8a08ef8f5dbcd95698f1fed7e76c6fd2661
Vue.config.productionTip = false;
// 音乐播放
Vue.use(APlayer, {
  defaultCover: "https://github.com/u3u.png", // 设置播放器默认封面图片
  productionTip: false, // 是否在控制台输出版本信息
});
Vue.use(Lazyload);
Vue.use(Vant);
Vue.use(ElementUI);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
