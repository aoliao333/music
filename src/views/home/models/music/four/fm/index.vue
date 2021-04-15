<template>
  <div class="fm">
    <van-notice-bar
      v-show="flag"
      @click="gologin"
      color="#1989fa"
      background="#ecf9ff"
      left-icon="info-o"
    >
      未登录，请先登录
    </van-notice-bar>
  </div>
</template>

<script>
import { getCookie } from "../../../../../../utils/util";

export default {
  components: {},
  data() {
    return {
      flag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    gologin() {
      this.$router.replace("/login");
    },
    get() {
      if (unescape(getCookie("uid"))) {
        this.flag = false;
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
</style>