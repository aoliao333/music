<template>
  <div class="footer">
    <div class="left" @click="showPopup"><van-icon name="orders-o" /></div>
    <!-- v-model控制弹出层 -->
    <van-popup v-model="show" position="left" :style="{ height: '100%' }">
      <div class="popop-top">
        <h6>登录网易云音乐</h6>
        <h6>320k高音质无线下载，手机电脑多端同步</h6>
        <el-button round size="medium">立即登录</el-button>
      </div>
      <div class="popup-list">
        <div class="popup-list_top">
          <van-cell @click="cc" title="我的消息" icon="comment-o" />
          <van-cell @click="cc" title="会员中心" icon="diamond-o" />
          <van-cell @click="cc" title="商城" icon="shopping-cart-o" />
          <van-cell @click="cc" title="在线听歌免流量" icon="coupon-o" />
        </div>
        <div class="popup-list_mid">
          <van-cell @click="cc" title="我的好友" icon="manager-o" />
          <van-cell @click="cc" title="附近的人" icon="location-o" />
        </div>
        <div class="popup-list_mid">
          <van-cell @click="cc" title="个性换肤" icon="location-o" />
          <van-cell title="附近的人" icon="el-icon-guide" />
        </div>
        <div class="popup-list_bot">
          <van-cell @click="cc" title="个性换肤" icon="location-o" />
          <van-cell @click="cc" title="听歌识曲" icon="location-o" />
          <van-cell @click="cc" title="定时停止播放" icon="location-o" />
          <van-cell @click="cc" title="扫一扫" icon="location-o" />
          <van-cell @click="cc" title="音乐闹钟" icon="location-o" />
          <van-cell @click="cc" title="驾驶模式" icon="location-o" />
        </div>
      </div>
    </van-popup>
    <ul>
      <router-link to="/fenlei" tag="li"
        ><span><van-icon name="music-o"/></span
      ></router-link>
      <router-link to="/home" tag="li">
        <span> <van-icon name="service-o"/></span>
      </router-link>
      <router-link to="/cart" tag="li"
        ><span><van-icon name="friends-o"/></span
      ></router-link>
    </ul>
    <div class="right"><van-icon name="search" /></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

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
.footer {
  display: flex;
  justify-content: start;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  background-color: #eee;
}
.footer .right {
  width: 10%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.footer .left {
  width: 10%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.footer ul {
  display: flex;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  padding: 0 25%;
}

.footer ul li {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.active {
  background: orange;
  color: #fff;
}

.popop-top {
  overflow: hidden;
  font-size: 14px;
  text-align: center;
  color: #c6c7c7;
  width: 300px;
  height: 100px;
  background: crimson;
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2F0g%2Fc9%2FQJ6659121136.jpg%3Fx-oss-process%3Dstyle%2Fshow&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620815975&t=e3e8779774fb46056113628419d6cd56")
    no-repeat;
}
.popop-top h6 {
  margin-top: 10px;
}
.popop-top button {
  margin-top: 10px;
}
</style>
