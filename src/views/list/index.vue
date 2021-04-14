<template>
  <div class="list">
    <div class="nav">
      <i class="el-icon-back" @click="gopaihangbang"></i>
    </div>
    <div>
      <img :src="coverImgUrl" alt="" height="375" width="100%" />
      <van-cell title="播放全部" size="30" icon="play-circle-o"
        >{{ "共" + list.length + "首" }}
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="bars" size="25" />多选
        </template>
      </van-cell>

      <van-list finished-text="没有更多了" v-if="list">
        <van-cell
          @click="godetial(item.id)"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="a">
            <h1 v-show="3">{{ index + 1 }}</h1>
            <div class="b">
              <h2>{{ item.name }}</h2>
              <p>{{ item.ar[0].name }}-{{ item.name }}</p>
            </div>
            <van-icon class="icon" name="ellipsis" />
          </div>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { reqPhblist } from "../../api/list";
export default {
  components: {},
  data() {
    return {
      id1: 0,
      id: 0,
      coverImgUrl: "",
      list: [],
      loading: false,
      finished: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    gopaihangbang() {
      this.$router.replace("/paihangbang");
    },
    async getlist(id1) {
      const res = await reqPhblist({ id: id1 });
      // console.log(res);
      if (res.status === 200) {
        // console.log(res.data.playlist.tracks[0]);
        this.coverImgUrl = res.data.playlist.coverImgUrl;
        this.list = res.data.playlist.tracks;
      }
    },
    godetial(id) {
      this.$router.push({
        name: `Detail`,
        query: { id },
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.getlist(this.id);
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
.a {
  display: flex;
  align-items: center;
}
.a h1 {
  width: 30px;
  font-size: 16px;
  color: red;
}
.a .b {
  flex: 1;
}
.a .b h2 {
  font-weight: 600;
}
.a .icon {
  width: 30px;
}
</style>