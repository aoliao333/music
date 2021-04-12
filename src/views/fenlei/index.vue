<template>
  <div class="fenlei">
    <Header>
      <span><slot name="left">我的左边的插槽</slot></span>
      <slot>我是没有名字的插槽</slot>
    </Header>

    <Scope>
      <template slot-scope="parent">
        <ul>
          <li v-for="(item, index) in parent.lists" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Scope>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {},
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
<style scoped></style>
