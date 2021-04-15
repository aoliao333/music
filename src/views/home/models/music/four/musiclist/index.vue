<template>
  <div class="musiclist">
    <div class="nav">
      <i class="el-icon-back" @click="gomusic"></i>
    </div>

    <!-- 歌单列表 -->
    <div class="tj" v-if="musicList">
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
      id: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    gomusic() {
      this.$router.replace("/home/music");
    },
    //获取歌单
    async tuijian() {
      const res = await reqMusicList({ limit: 30 });

      if (res.status === 200) {
        // console.log(res.data.playlists);
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
.nav {
  width: 100%;
  /* 不占位置 */
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgb(79, 140, 208);
  overflow: hidden;
  color: #fff;
  height: 50px;
  z-index: 100;
}
.nav i {
  margin-top: 20px;
}
.tj {
  padding-top: 55px;
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