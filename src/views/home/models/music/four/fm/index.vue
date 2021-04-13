<template>
  <div class="fm">私人FM</div>
</template>

<script>
// import { reqPersonalFM } from "../../../../../../api/four/fm";
export default {
  components: {},
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    // async fmlist() {
    //   const res = await reqPersonalFM();
    //   console.log(res);
    // },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.fmlist();
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
</style>