<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="phone"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>

      <van-cell value="注册" @click="goreg" />
    </van-form>
  </div>
</template>

<script>
import { reqLogin } from "../../api/user";
import { setCookie } from "../../utils/util";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    goreg() {
      this.$router.push("/reg");
    },
    async onSubmit(values) {
      console.log("submit", values);
      /* phone=18238630659&password=19971227lwk
        ?phone=18238630659&password=19971227lwk
       */
      var str = `?phone=${this.phone}&password=${this.password}`;

      console.log(str);
      const result = await reqLogin(str);
      console.log(result);
      if (result.data.code === 200) {
        setCookie("uid", result.data.account.id, 500000);
        Toast.success("登录成功");
        this.$router.push("/home");
      } else if (result.code.status === 400) {
        Toast.success("账户不存在");
      } else {
        Toast.success("密码输入错误");
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
.login {
  margin-top: 0px;
}
</style>
