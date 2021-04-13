<template>
  <div class="info">
    <van-nav-bar
      title="我的信息"
      @click-left="onClickLeft"
      left-text="返回"
      left-arrow
    >
    </van-nav-bar>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/info/private">私信</van-tabbar-item>
      <van-tabbar-item to="/info/discuss">评论</van-tabbar-item>
      <van-tabbar-item to="/info/callme">@我</van-tabbar-item>
      <van-tabbar-item to="/info/message">通知</van-tabbar-item>
    </van-tabbar>
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

  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
  },
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
.van-tabbar {
  border-top: 1px solid #eee;
  position: fixed;
  top: 46px;
  left: 0;
  height: 40px;
}
.van-tabbar-item {
  font-size: 13px !important;
}
.van-tabbar-item--active {
  background: red;
  color: #fff;
}
</style>
