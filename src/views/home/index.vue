<template>
  <div class="home">
    <Header> </Header>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了哦"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item._id"
        :title="item.name"
        @click="godetil(item._id)"
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
      list: [],
      finished: false,
      loading: false,
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
          params: {
            page: this.page,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            if (res.data.products < 10) {
              this.finished = true; // 当数据的长度小于10的时候，结束
            } else {
              this.loading = false; // 否则放行。
              ++this.page;
            }
            this.list = this.list.concat(res.data.products);
          }
        });
    },
    godetil(id) {
      //传递参数，使用this.$router (此时。需要加r 使用this.$router.push({}))
      this.$router.push({
        /*  name: "Pdetail", // name 传参 */
        path: "/pdetail", // path 传参
        // 如果为query传参， 可以和name， path 俩者共同使用
        // 如果为params 传参。 只能和name配合

        /*  path: `/pdetail/${id}`, // 此方法是动态传参。需要在路由中配置。/pdetail/:id */
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
