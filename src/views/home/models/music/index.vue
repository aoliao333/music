<template>
  <div class="music">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(swipe, index) in swipelist" :key="index"
        ><img :src="swipe.pic" alt="" width="100%" height="200"
      /></van-swipe-item>
    </van-swipe>

    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item icon="home-o" @click="gofm">私人FM</van-tabbar-item>
      <van-tabbar-item icon="search" @click="goday">每日推荐</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="gomusiclist"
        >歌单</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" @click="gopaihangbang"
        >排行榜</van-tabbar-item
      >
    </van-tabbar>
    <!-- 推荐歌单 -->
    <div class="list">
      <router-link class="tuijian" to="/">
        <button>推荐歌单</button>
        <van-icon name="arrow" />
      </router-link>
      <div class="zy">
        <div class="zhiyu" v-for="item in list1" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqSwipe } from "../../../../api/home";
import { reqPersonalized } from "../../../../api/home";

export default {
  components: {},
  data() {
    return {
      active: "",
      swipelist: [],
      list1: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    //跳路由
    gofm() {
      this.$router.push("/fm");
    },
    goday() {
      this.$router.push("/day");
    },
    gomusiclist() {
      this.$router.push("/musiclist");
    },
    gopaihangbang() {
      this.$router.push("/paihangbang");
    },

    //获取轮播图
    async swipe() {
      const res = await reqSwipe({ type: 2 });
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.banners);
        this.swipelist = res.data.banners;
      }
    },
    //推荐歌单
    async tuijian() {
      const res = await reqPersonalized({ limit: 6 });
      // console.log(res.data.result);
      if (res.status === 200) {
        this.list1 = res.data.result;
        console.log(this.list1);
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.swipe();
    this.tuijian();
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
.music {
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.zhiyu img {
  width: 100px;
  height: 100px;
}
.list {
  width: 100%;
}
</style>
