<template>
  <div class="home">
    <Header>
      <span class="left"><span name="left"> &lt; 返回1111</span></span>
      <span>我是组件里面的东西</span>
      <span class="right">
        <span name="right">右边</span>
      </span>
    </Header>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item._id"
        :title="item.name"
        @click="godetail(item._id)"
      />
    </van-list>
  </div>
</template>

<script>
import Header from "../../components/header";
import axios from "axios";
export default {
  components: {
    Header,
  },
  data() {
    return {
      title: "首页",
      list: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  computed: {},
  watch: {},

  methods: {
    // onLoad会默认执行一次   loading如果是true的时候，说明还不能进行请求
    onLoad() {
      axios
        .get("http://localhost:3009/api/v1/products", {
          params: { page: this.page },
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data.products < 10) {
              this.finished = true; // 如果返回的数组小于10，说明已经加载到最后一页，终止
            } else {
              // 否则的话说明还没有加载到最后一页，放行
              this.loading = false;
              ++this.page;
            }
            this.list = this.list.concat(res.data.products);
          }
        });
    },
    godetail(id) {
      // query传参可以和path结合使用，也可以和name结合使用,params传参只能和name配合,params传递参数的时候，参数丢失
      this.$router.push({
        name: `Pdetail`,
        query: { id },
      });
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.home .left {
  float: left;
}
.home .right {
  float: right;
}
.van-list {
  padding-bottom: 40px;
}
</style>
