import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const fenleichild = [
  {
    path: "fenlei",
    name: "Fenlei",
    component: () => import("../../views/fenlei"), // 路由懒加载
    meta: {
      title: "音乐",
      showTabbar: true, //   登录前不显示底部导航
    },
    //音乐页面子路由配置
    children: [
      {
        path: "bendiyinyue",
        name: "bendiyinyue",
        component: () => import("../../views/fenlei/bendiyinyue"), // 路由懒加载
        meta: {
          title: "音乐",
          showTabbar: false, //   登录前不显示底部导航
        },
      },
    ],
  },
];
export default fenleichild;
