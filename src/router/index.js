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

    {
      //头部导航第二个 首页
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
      path: "/info",
      name: "Info",
      component: () => import("../views/popup/info/index.vue"), // 路由懒加载
      meta: {
        title: "信息",
        showTabbar: false, //   登录前不显示底部导航
      },
      //音乐页面子路由配置
      redirect: "/info/private",
      children: [
        {
          path: "private",
          name: "Private",
          component: () => import("../views/popup/info/private/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
        {
          path: "discuss",
          name: "Discuss",
          component: () => import("../views/popup/info/discuss/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
        {
          path: "callme",
          name: "Callme",
          component: () => import("../views/popup/info/callme/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
        {
          path: "message",
          name: "Message",
          component: () => import("../views/popup/info/message/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
      ],
      linkActiveClass: "active",
    },
    {
      path: "/cart", //头部导航第三个  音乐动态
      name: "Cart",
      component: () => import("../views/cart/index.vue"), // 路由懒加载
      meta: {
        showTabbar: true, //   登录前不显示底部导航
      },
    },
    {
      path: "/login", //头部导航第三个  音乐动态
      name: "Login",
      component: () => import("../views/login/index.vue"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
    },
    {
      path: "/reg", //头部导航第三个  音乐动态
      name: "Reg",
      component: () => import("../views/reg/index.vue"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
    },
    {
      path: "/shop", //头部导航第三个  音乐动态
      name: "Shop",
      component: () => import("../views/popup/shop/index.vue"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
      redirect: "/shop/home",
      children: [
        {
          path: "home",
          name: "Home",
          component: () => import("../views/popup/shop/home/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
        {
          path: "fenlei",
          name: "Fenlei",
          component: () => import("../views/popup/shop/fenlei/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
        {
          path: "cart",
          name: "Cart",
          component: () => import("../views/popup/shop/cart/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
        {
          path: "mine",
          name: "Mine",
          component: () => import("../views/popup/shop/mine/index.vue"), // 路由懒加载
          meta: {
            showTabbar: false, //   登录前不显示底部导航
          },
        },
      ],
    },
    {
      path: "/list/:id",
      name: "List",
      component: () => import("../views/list"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
    },
  ],
  linkActiveClass: "active",
});
export default router;
