<template>
  <div class="detail">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="bar-chart-o" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <aplayer :audio="audio" :lrcType="3" />

    <div class="footer">
      <ul>
        <li class="el-icon-star-off"></li>
        <li class="el-icon-close"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      audio: {
        name: "东西（Cover：林俊呈）",
        artist: "纳豆",
        url: "https://cdn.moefe.org/music/mp3/thing.mp3",
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: "https://cdn.moefe.org/music/lrc/thing.lrc",
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const id = this.$route.query.id;
    console.log(id);
  },
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
  border-top: 1px solid #eee;
  padding: 10px 0;
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
