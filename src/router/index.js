//名字未能语义化，请看注释，分路由的子路由放在models下
// 自己语义化命名 比如home路由的子路由，写为homechildren
// 写完后导入此文件中 children:导入文件的名字

import Vue from "vue";
import VueRouter from "vue-router";

//例如home的子路由
import homechild from "../router/models/homechildren";

Vue.use(VueRouter);


// 配置路由
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    { //头部导航第二个 首页
      path: "/home",
      name: "Home",
      component: () => import("../views/home/index.vue"), // 路由懒加载
      meta: {
        title: "首页",
        showTabbar: true, //   登录前不显示底部导航
      },
      //home 子路由引入方法
      redirect: "/home/music",
      children: homechild,
    },
    { //私人fm
      path: "/fm",
      name: "Fm",
      component: () => import("../views/home/models/music/four/fm"), // 路由懒加载
      meta: {
        title: "首页",
        showTabbar: false, //   登录前不显示底部导航
      },

    },
    { //每日推荐
      path: "/day",
      name: "Day",
      component: () => import("../views/home/models/music/four/day"), // 路由懒加载
      meta: {
        title: "首页",
        showTabbar: false, //   登录前不显示底部导航
      },

    },
    { //歌单
      path: "/musiclist",
      name: "Musiclist",
      component: () => import("../views/home/models/music/four/musiclist"), // 路由懒加载
      meta: {
        title: "首页",
        showTabbar: false, //   登录前不显示底部导航
      },

    },
    { //排行榜
      path: "/paihangbang",
      name: "Paihangbang",
      component: () => import("../views/home/models/music/four/paihangbang"), // 路由懒加载
      meta: {
        title: "首页",
        showTabbar: false, //   登录前不显示底部导航
      },

    },
    {

      path: "/fenlei", //头部导航第一个 分类
      name: "Fenlei",
      component: () => import("../views/fenlei/index.vue"), // 路由懒加载
      meta: {
        showTabbar: true, //   登录前不显示底部导航
      },
    },
    {

      path: "/cart",  //头部导航第三个  音乐动态
      name: "Cart",
      component: () => import("../views/cart/index.vue"), // 路由懒加载
      meta: {
        showTabbar: true, //   登录前不显示底部导航
      },
    },
  ],
});
export default router;