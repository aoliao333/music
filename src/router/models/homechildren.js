import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const homechild = [
  {
    path: "music",
    name: "Music",
    component: () => import("../../views/home/models/music"), // 路由懒加载
    meta: {
      title: "音乐",
      showTabbar: true, //   登录前不显示底部导航
    },
    //音乐页面子路由配置
    // children: [
    //   {
    //     path: "fm",
    //     name: "Fm",
    //     component: () => import("../../views/home/models/music/four/fm"), // 路由懒加载
    //     meta: {
    //       title: "音乐",
    //       showTabbar: false, //   登录前不显示底部导航
    //     },
    //   },
    // ],
  },
];
export default homechild;
