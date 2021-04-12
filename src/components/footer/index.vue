<template>
  <div class="footer">
    <div class="left"><van-icon name="orders-o" /></div>
    <ul>
      <router-link to="/fenlei" tag="li"
        ><span><van-icon name="music-o"/></span
      ></router-link>
      <router-link to="/home" tag="li">
        <span> <van-icon name="service-o"/></span>
      </router-link>
      <router-link to="/cart" tag="li"
        ><span><van-icon name="friends-o"/></span
      ></router-link>
    </ul>
    <div class="right"><van-icon name="search" /></div>
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
  display: flex;
  justify-content: start;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  background-color: #eee;
}
.footer .right {
  width: 10%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.footer .left {
  width: 10%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.footer ul {
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  padding: 0 25%;
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
