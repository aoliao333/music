<template>
  <div class="home">
    <van-nav-bar
      title="云音乐商城"
      @click-left="onClickLeft"
      left-text="返回"
      left-arrow
    >
    </van-nav-bar>
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 轮播图 -->
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" height="200" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      value: "",
      images: [
        "http://p1.music.126.net/IBO-SSodR_Fa9a1oKkc6Dg==/109951165887056550.jpg?imageView&quality=89",
        "http://p1.music.126.net/D9B_m3QXpLXMGW2e3KehJg==/109951165885500975.jpg?imageView&quality=89",
        "http://p1.music.126.net/w-h-LMS2e63pIhg5bhJMKA==/109951165885504239.jpg?imageView&quality=89",
      ],
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
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
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
<style scoped></style>
