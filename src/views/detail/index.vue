<template>
  <div class="detail">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="bar-chart-o" size="18" />
        </template>
      </van-nav-bar>
    </div>

    <aplayer
      :audio="audio"
      :lrcType="1"
      :showlrc="true"
      class="bofangqi"
      :list="musicList"
      v-if="flag"
      fixed
    ></aplayer>

    <ul class="lrc-list" v-if="flag">
      <li v-for="item in songLyricsarr" :key="item.id">{{ item }}</li>
    </ul>
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
      flag: false,
      //歌曲背景图
      picUrl: "",
      //   歌名
      name: "",
      //歌手名
      singerName: "",
      //   音乐 id
      id: "",
      //音乐播放链接
      musicUrl: "",
      fixed: true,
      placeholder: true,
      // 歌词 字符串
      songLyrics: "",
      // 歌词 数组
      songLyricsarr: "",
      // 音频列表
      audio: {
        name: "",
        artist: "",
        url: "",
        cover: '', // prettier-ignore
        lrc: "",
      },
      showLrc: true,
      musicList: [
        {
          title: "白羊",
          artist: "徐秉龙",
          src:
            "http://m8.music.126.net/20200607160502/d62b8d5dc9c90c93a151914be957a617/ymusic/25a2/4ff4/52fc/d664724d25de35a8d4e23c1b986c60b5.mp3",
          pic:
            "https://p1.music.126.net/tczb_7II9KzSuLQsVt89Gw==/109951163049336667.jpg",
        },
        {
          title: "说谎",
          artist: "林宥嘉",
          src:
            "http://m7.music.126.net/20200607161953/af2e67e22c2407fea966c46769106159/ymusic/05ee/4458/4a12/e3ea4813e0c4abafe6c3d40b13cb9f65.mp3",
          pic:
            "https://p2.music.126.net/mMZNB-jhYsw29K61QtopJA==/109951163187404137.jpg",
        },
        {
          title: "成都",
          artist: "赵雷",
          src:
            "http://m7.music.126.net/20200607162234/8629f14056f784879d33dedbab34bf03/ymusic/fa90/df9c/59f7/95c4a2802e0b9191ae1a048f127e53c5.mp3",
          pic:
            "https://p1.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",
        },
        {
          title: "陪你到底",
          artist: "许华升",
          src:
            "http://m7.music.126.net/20200607161155/1ddfddaa4d9a7c3100c3e7329ce8e3da/ymusic/540f/005e/065e/ce65b58fea742cac390e1499eb32db98.mp3",
          pic:
            "https://p1.music.126.net/a7QkLGexMQGT2lF3mqcUdw==/109951163693319625.jpg",
        },
        {
          title: "广东爱情故事",
          artist: "雨神",
          src:
            "http://m7.music.126.net/20200607160858/6143003bbb9021f13678624978f9ba14/ymusic/c69c/aeed/2bd9/57487636f38ec8ef9355bf67d0741dfe.mp3",
          pic:
            "https://p1.music.126.net/gjvguk9I-QwuyWFjQHM9SA==/109951163189947600.jpg",
        },
        {
          title: "烟火里的尘埃",
          artist: "华晨宇",
          src:
            "http://m8.music.126.net/20200607161716/e2266bad871c28351a3ce257061b3310/ymusic/5d63/5150/0851/5f226aac018cafc2cb248f7d28fbd5b4.mp3",
          pic:
            "https://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg",
        },
      ],
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

      const res = await reqSongDetail(str);

      // 歌名
      this.audio.name = res.data.songs[0].name;
      // 歌手名
      this.audio.artist = res.data.songs[0].al.name;
      // 图片
      this.audio.cover = res.data.songs[0].al.picUrl;
      this.flag = true;
    },
    // 获取歌词
    async getLyric(id) {
      let str = `?id=${id}`;

      const res = await reqLyric(str);

      this.audio.lrc = res.data.lrc.lyric;
      // 歌词
      if (res.status === 200) {
        // console.log(result.data.lrc.lyric);
        this.songLyrics = res.data.lrc.lyric;

        const aaa = /(\[)[0-9]{2}:{1}[0-9]{2}.{1}[0-9]{3}(\])/g;
        const dateStr = this.songLyrics.replace(aaa, ",");
        // console.log(dateStr);
        // console.log(dateStr.split(","));
        this.songLyricsarr = dateStr.split(",");
        // arr.splice(0, 9);
        // console.log(arr.splice(0, 9));
      }
    },
    // 获取歌曲url
    async getSongurl(id) {
      let str = `?id=${id}`;

      const res = await reqSongsUrl(str);

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
.top {
  width: 100%;
  position: fixed;
  top: 0;
}
.van-nav-bar {
  z-index: 100;
}
.lrc-list {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
}
.lrc-list li {
  color: rgb(147, 199, 214);
  padding: 5px 0;
}
</style>
