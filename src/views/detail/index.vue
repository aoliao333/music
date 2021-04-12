<template>
  <div class="detail">
    <span class="left" @click="gotolink"
      ><van-icon name="arrow-left" color="#1989fa" size="40"
    /></span>

    <div v-if="obj">
      <!-- 此时的v-if  当obj存在的时候才渲染当前页面。 避免了
    obj的初始为null导致的错误。

    下文的v-if  也相同
     -->
      <div class="cc">
        <h3>{{ obj.name }}</h3>
      </div>
      <img :src="obj.coverImg" alt="" class="img" v-if="obj.coverImg" />
    </div>

    <van-button type="info" block>加入购物车</van-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      obj: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    gotolink() {
      //点击跳转至上次浏览页面
      // this.$router.go(-1)

      //指定跳转地址
      this.$router.replace("/");
    },

    async initData(id) {
      const result = await axios.get(
        `http://localhost:3009/api/v1/products/${id}`
      );
      console.log(result);
      if (result.status === 200) {
        this.obj = result.data;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //动态传参。 path: "/pdetail:id", 由this.$route.params.id  获取动态传来的参数
    // 单个路由 。 在具体某个页面所呈现 使用this.$route
    /*  const id = this.$route.params.id; */

    //
    const id = this.$route.query.id;
    this.initData(id);
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
img {
  width: 200px;
}
.left {
  float: left;
  display: block;
  margin-bottom: 20px;
}
.cc {
  margin-top: 66px;
}
</style>
