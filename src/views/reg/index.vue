<template>
  <div class="reg">
    <div class="mid">
      <van-uploader :after-read="afterRead" v-if="!imgurl" />
      <img :src="imgurl" alt="" width="100" height="100" v-else />
    </div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="nickName"
        name="nickName"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { reqReg } from "../../api/user";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
      nickName: "",
      imgurl: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    afterRead(file) {
      this.imgurl = file.content; // base64  减少图片发起的请求
      console.log(file.content);
    },
    async onSubmit(values) {
      console.log("submit", values);
      const result = await reqReg({ ...values, avatar: this.imgurl });
      console.log(result);
      if (result.status === 200) {
        Toast.success("注册成功");
        this.$router.replace("/login");
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
.mid {
  position: fixed;
  top: 210px;
  left: 150px;
}
</style>
