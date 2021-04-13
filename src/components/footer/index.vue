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
          <van-cell @click="goMyInfo" title="我的消息" icon="comment-o" />
          <van-cell title="会员中心" icon="diamond-o" />
          <van-cell @click="goShop" title="商城" icon="shopping-cart-o" />
          <van-cell title="在线听歌免流量" icon="coupon-o" />
        </div>
        <div class="popup-list_mid">
          <van-cell title="我的好友" icon="manager-o" />
          <van-cell title="附近的人" icon="location-o" />
        </div>
        <div class="popup-list_bot">
          <van-cell title="个性换肤" icon="award-o" />
          <van-cell title="听歌识曲" icon="service-o" />
          <van-cell @click="setTiming" title="定时停止播放" icon="underway-o" />
          <van-cell title="扫一扫" icon="scan" />
          <van-cell @click="musicClock" title="音乐闹钟" icon="tosend" />
          <van-cell title="驾驶模式" icon="logistics" />
        </div>
      </div>
      <div class="popup-bot">
        <van-cell @click="nightPatter" title="夜间模式" icon="star-o" />
        <van-cell @click="setting" title="设置" icon="setting-o" />
        <van-cell @click="close" title="退出" icon="close" />
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
    // 点击主页面顶部最左边控制弹出层
    showPopup() {
      this.show = true;
    },
    // 去我的消息模块
    goMyInfo() {
      this.$router.push("/info");
    },

    goShop() {
      console.log("goMember");
    },

    changeSkin() {
      console.log("changeSkin");
    },
    setTiming() {
      console.log("setTiming");
    },
    musicClock() {
      console.log("musicClock");
    },
    nightPatter() {
      console.log("nightPatter");
    },
    setting() {
      console.log("setting");
    },
    close() {
      console.log("close");
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
  background-color: #d33a31;
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
  background-color: #d33a31;
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
  height: 30px;
  line-height: 10px;
}
.popup-list .van-cell {
  height: 40px;
}
.popup-list .van-cell span {
  font-weight: 600;
}

.popup-bot {
  position: fixed;
  bottom: 0;
}
.popup-bot .van-cell {
  width: 33%;
  height: 40px;
  float: left;
}
</style>
