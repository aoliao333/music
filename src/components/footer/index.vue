<template>
  <div class="footer">
    <ul>
      <router-link to="/home" tag="li">首页</router-link>
      <router-link to="/fenlei" tag="li">分类</router-link>
      <router-link to="/cart" tag="li">购物</router-link>
      <router-link to="/order" tag="li">订单</router-link>
      <router-link to="/mine" tag="li">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 40px;
  background-color: #eee;
}
.footer ul {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.footer ul li {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.active {
  background: orange;
  color: #fff;
}
</style>
