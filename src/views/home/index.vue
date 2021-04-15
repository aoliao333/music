<template>
  <div class="home">
    <Header></Header>
    <div class="nav">
      <van-tabs
        class="nav1"
        v-model="activeName"
        color="red"
        title-active-color="red"
      >
        <van-tab title="音乐" name="a"><Music></Music></van-tab>
        <van-tab title="视频" name="b"><Video></Video></van-tab>
        <van-tab title="电台" name="c"><Diantai></Diantai></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
import Music from "./models/music";
import Diantai from "./models/diantai";
import Video from "./models/video";
export default {
  components: {
    Header,
    Music,
    Diantai,
    Video,
  },
  data() {
    return {
      activeName: "a",
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.home {
  margin-top: 60px;
}
.nav1 {
  opacity: 0.9;
}
</style>
