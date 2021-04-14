<template>
  <div class="musiclist">
    <van-nav-bar title="" left-text="歌单" left-arrow fixed> </van-nav-bar>
    <!-- 歌单列表 -->
    <div class="tj">
      <div class="tuijian" v-for="item in musicList" :key="item.id">
        <img :src="item.coverImgUrl" alt="" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqMusicList } from "../../../../../../api/home";

export default {
  components: {},
  data() {
    return {
      musicList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    //获取歌单
    async tuijian() {
      const res = await reqMusicList({ limit: 30 });

      if (res.status === 200) {
        console.log(res.data.playlists);
        this.musicList = res.data.playlists;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
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
.tj {
  padding-top: 45px;
}
.tuijian {
  float: left;
  width: 125px;
  height: 170px;
  font-size: 12px;
}
.tuijian img {
  width: 125px;
  height: 125px;
  margin-bottom: 5px;
}
</style>