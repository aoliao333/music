<template>
  <div class="login">
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
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="gohomes"
          >登录</van-button
        >
      </div>
    </van-form>
    <van-cell value="注册" @click="goreg" />
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    goreg() {
      this.$router.push("/reg");
    },
    gohomes(){
      this.$router.push("/home");
    },
     onSubmit(values) {
      console.log("submit", values);
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
<style scoped></style>
