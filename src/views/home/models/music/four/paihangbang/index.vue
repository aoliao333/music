<template>
  <div class="paihangbang">
    <div class="nav">
      <i class="el-icon-back" @click="gohome"></i>
      <p>排行榜</p>
      <!-- 官方榜 -->
    </div>
    <div class="content">
      <h3>官方榜</h3>
      <div class="guanfang" v-if="top.length">
        <!-- v-if="top.length" 就这一个长度解决不存在时的报错 -->
        <div
          class="top1"
          v-for="item in top.slice(0, 4)"
          :key="item.id"
          @click="golist(item.id)"
        >
          <img :src="item.coverImgUrl" alt="" width="100" height="100" />
          <li v-for="(list, index) in item.tracks" :key="index">
            {{ index + 1 + "." }}{{ list.first }}-{{ list.second }}
          </li>
        </div>
      </div>

      <!-- 特殊的两个 -->
      <div class="guanfang" v-if="top.length">
        <!-- v-if="top.length" 就这一个长度解决不存在时的报错 -->
        <div class="top1">
          <img :src="zhanshang.coverUrl" alt="" width="100" height="100" />
          <li v-for="(list, index) in zhanshang.songs" :key="index">
            {{ index + 1 + "." }}{{ list.name }}-{{ list.album.name }}
          </li>
        </div>
      </div>
      <div class="guanfang" v-if="top.length">
        <!-- v-if="top.length" 就这一个长度解决不存在时的报错 -->
        <div class="top1">
          <img :src="geshou.coverUrl" alt="" width="100" height="100" />
          <li v-for="(list, index) in geshou.artists" :key="index">
            {{ index + 1 + "." }}{{ list.first }}-热度-{{ list.third }}
          </li>
        </div>
      </div>
    </div>
    <!-- 全球榜 -->
    <!-- 利用数组方法 -->
    <div class="earth" v-if="top.length">
      <h3>全球榜</h3>
      <div
        class="earth1"
        v-for="item in top.slice(4)"
        :key="item.id"
        @click="golist1(item.id)"
      >
        <img :src="item.coverImgUrl" alt="" width="100" height="100" />
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reqToplist } from "../../../../../../api/four/paihangbang";
export default {
  components: {},
  data() {
    return {
      top: [],
      top4: [],
      geshou: null,
      zhanshang: null,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    gohome() {
      this.$router.replace("/home/music");
    },
    golist(id) {
      this.$router.replace(`/list/${id}`);
    },
    golist1(id) {
      this.$router.replace(`/list/${id}`);
    },

    async getlist() {
      // console.log(1);
      const res = await reqToplist();
      // console.log(res);
      if (res.status === 200) {
        this.top = res.data.list;
        this.geshou = res.data.artistToplist;
        this.zhanshang = res.data.rewardToplist;
        // console.log(this.zhanshang);
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getlist();
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
.content {
  margin-top: 50px;
}
.guanfang {
  border-bottom: 1px solid rgb(211, 201, 201);
  overflow: hidden;
}
.content {
  margin-top: 70px;
}
h3 {
  margin: 20px 20px 10px 20px;
  font-weight: 800;
}
.top1 {
  overflow: hidden;
  margin-bottom: 3px;
}
.top1 img {
  float: left;
}
.top1 li {
  font-size: 15px;
  padding: 8px 5px;
  float: left;
}
.earth {
  overflow: hidden;
}
.earth .earth1 {
  float: left;
  height: 170px;
  width: 125px;
}
.earth .earth1 p {
  padding: 5px;
  font-size: 12px;
  font-weight: 800;
}
.earth1 img {
  margin-left: 2px;
  width: 123px;
  height: 125px;
}
</style>