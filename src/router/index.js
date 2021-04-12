import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 配置路由
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/mine",
    },
    {
      path: "/home",
      name: "Name",
      component: () => import("../views/home/index.vue"), // 路由懒加载
      meta: {
        title: "我的首页",
        showTabbar: false, //   登录前不显示底部导航
      },
    },
    {
      path: "/fenlei",
      name: "Fenlei",
      component: () => import("../views/fenlei/index.vue"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
    },
    {
      path: "/mine",
      name: "Mine",
      component: () => import("../views/mine/index.vue"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/cart/index.vue"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
    },
    {
      path: "/order",
      name: "Order",
      component: () => import("../views/order/index.vue"), // 路由懒加载
      meta: {
        showTabbar: false, //   登录前不显示底部导航
      },
      redirect: "/order/weizhifu",
      children: [
        {
          path: "weizhifu",
          name: "Weizhifu",
          component: () => import("../views/order/weizhifu"),
        },
        {
          path: "yizhifu",
          name: "Yizhifu",
          component: () => import("../views/order/yizhifu"),
        },
        {
          path: "daifahuo",
          name: "Daifahuo",
          component: () => import("../views/order/daifahuo"),
        },
        {
          path: "yifahuo",
          name: "Yifahuo",
          component: () => import("../views/order/yifahuo"),
        },
      ],
    },
    {
      /*  path: "/pdetail/:id", // */
      path: "/pdetail",
      name: "Pdetail",
      component: () => import("../views/detail/index"), // 路由懒加载
      meta: {
        title: "我的首页",
        showTabbar: false, //   登录前不显示底部导航
      },
    },
  ],
  linkActiveClass: "active",
});

export default router;
