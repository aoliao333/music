<template>
  <div class="shop">
    <router-view></router-view>

    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/shop/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/shop/fenlei" dot
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" to="/shop/cart" badge="5"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/shop/mine" badge="20"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return { active: 0 };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
