<template>
  <div class="login reg">
    <van-uploader :after-read="afterRead" v-if="!imgurl" />
    <img :src="imgurl" alt="" width="100" height="100" v-else />

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

export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
      imgurl: "",
      nickName: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.imgurl = file.content;
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
