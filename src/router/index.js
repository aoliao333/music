import Vue from "vue";
import VueRouter from "vue-router";

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
      path: "/home",
      name: "Name",
      component: () => import("../views/home/index.vue"), // 路由懒加载
      meta: {
        title: "我的首页",
        showTabbar: true, //   登录前不显示底部导航
      },
    },
    {
      path: "/fenlei",
      name: "Fenlei",
      component: () => import("../views/fenlei/index.vue"), // 路由懒加载
      meta: {
        showTabbar: true, //   登录前不显示底部导航
      },
    },
    {
      path: "/cart",
      name: "Cart",
      component: () => import("../views/cart/index.vue"), // 路由懒加载
      meta: {
        showTabbar: true, //   登录前不显示底部导航
      },
    },
  ],
  linkActiveClass: "active",
});

export default router;
