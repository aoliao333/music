<template>
  <div class="detail">
    <div class="top">
      <van-nav-bar :title="name" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="bar-chart-o" size="18" />
        </template>
      </van-nav-bar>
    </div>

    <div class="footer">
      <ul>
        <li class="el-icon-caret-left"></li>
        <li class="el-icon-video-play"></li>
        <!--        <li class="el-icon-video-pause"></li> -->
        <li class="el-icon-caret-right"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      name: "ccc",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    onClickLeft() {
      console.log(1);
    },
    onClickRight() {
      console.log(2);
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
.detail {
  background-color: #adafb4;
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.footer ul {
  display: flex;
  justify-content: start;
}
.footer li {
  color: rgb(177, 149, 149);
  text-align: center;
  flex: 1;
  font-size: 30px;
}
</style>
