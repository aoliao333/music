<template>
  <div class="order">
    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item icon="home-o" to="/order/weizhifu"
        >未支付</van-tabbar-item
      >
      <van-tabbar-item icon="search" to="/order/yizhifu"
        >翼支付</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" to="/order/daifahuo"
        >代发货</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" to="/order/yifahuo"
        >已发货</van-tabbar-item
      >
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
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
<style scoped></style>
