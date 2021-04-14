<template>
  <div class="detail">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="bar-chart-o" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <aplayer :audio="audio" :lrcType="1" />

    <div class="footer">
      <ul>
        <li class="el-icon-star-off"></li>
        <li class="el-icon-close"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqSongDetail } from "../../api/user";
import { reqLyric } from "../../api/user";
import { reqSongsUrl } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      id: "",
      audio: {
        name: "",
        artist: "",
        url: "",
        cover: '', // prettier-ignore
        lrc: "",
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
    // 获取歌手详情
    async artDetail(id) {
      let str = `?ids=${id}`;
      console.log(str);
      const res = await reqSongDetail(str);
      console.log(res);
      // 歌名
      this.audio.name = res.data.songs[0].name;
      // 歌手名
      this.audio.artist = res.data.songs[0].al.name;
      // 图片
      this.audio.cover = res.data.songs[0].al.picUrl;
    },
    // 获取歌词
    async getLyric(id) {
      let str = `?id=${id}`;
      console.log(str);
      const res = await reqLyric(str);
      console.log(res);
      this.audio.lrc = res.data.lrc.lyric;
    },
    // 获取歌曲url
    async getSongurl(id) {
      let str = `?id=${id}`;
      console.log(str);
      const res = await reqSongsUrl(str);
      console.log(res);
      this.audio.url = res.data.data[0].url;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const id = this.$route.query.id;
    console.log(id);
    this.id = id;

    this.artDetail(id);
    this.getLyric(id);
    this.getSongurl(id);
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
