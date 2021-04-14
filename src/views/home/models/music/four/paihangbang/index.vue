<template>
  <div class="paihangbang">
    <div class="nav">
      <i class="el-icon-back"></i>
      <p>排行榜</p>
    </div>
    <div class="guanfang">
      <h3>官方榜</h3>
    </div>
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
.paihangbang {
  overflow: hidden;
}
.nav {
  width: 100%;
  /* 不占位置 */
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgb(240, 8, 8);
  overflow: hidden;
  color: #fff;
  height: 50px;
}
.nav p {
  float: left;
  line-height: 50px;
}
.nav i {
  float: left;
  line-height: 50px;
  padding: 0 20px;
}
.guanfang {
  margin-top: 70px;
  min-height: 100px;
}
</style>