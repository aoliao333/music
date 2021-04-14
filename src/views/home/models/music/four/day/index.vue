<template>
  <div class="day">
    <van-nav-bar
      style="background:#D33A31"
      title="每日推荐"
      @click-left="onClickLeft"
      left-text="返回"
      left-arrow
    >
    </van-nav-bar>
    <div class="daily-top">
      <p>根据你的音乐口味生成，每日6：00更新</p>
    </div>
    <div class="list">
      <van-cell title="播放全部" size="30" icon="play-circle-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon size="20" name="label-o" />
        </template>
      </van-cell>
      <ul>
        <li v-for="item in songList" :key="item.id">
          <van-cell :title="item.name" @click="godetail(item.id)">
            <!-- 使用 right-icon 插槽来自定义右侧图标 -->
            <template #right-icon>
              <van-icon name="points" class="points-icon" @click="showdetail" />
            </template>
          </van-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reqRecommend } from "../../../../../../api/home_a";
/* import { Toast } from "vant"; */
export default {
  components: {},
  data() {
    return {
      songList: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    // 点击出现具体信息
    showdetail() {},
    // 点击跳往播放页面
    godetail(id) {
      // query传参可以和path结合使用，也可以和name结合使用,params传参只能和name配合,params传递参数的时候，参数丢失
      this.$router.push({
        name: `Detail`,
        /*   path:`/detail/${id}`, */
        query: { id },
      });
    },
    // 返回按钮
    onClickLeft() {
      this.$router.push("/home");
    },
    //每日推荐
    async dailyRecommend() {
      const res = await reqRecommend({ limit: 30 });
      console.log(res);
      if (res.data.code === 200) {
        this.songList = res.data.result;
        console.log(this.songList);
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.dailyRecommend();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style>
.daily-top {
  position: relative;
  width: 100%;
  height: 200px;
  background: red;
  background: url("http://p1.music.126.net/D9B_m3QXpLXMGW2e3KehJg==/109951165885500975.jpg?imageView&quality=89")
    no-repeat;
}
.daily-top p {
  font-size: 14px;
  color: beige;
  position: absolute;
  bottom: 0;
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar__title {
  color: #fff;
}
.van-nav-bar__text {
  color: #fff;
}
.van-cell {
  border-bottom: 1px solid #eee;
  overflow: hidden;
}
.van-cell__left-icon {
  font-size: 24px;
}
.van-cell--30 span {
  color: red;
}

.van-cell--30 .van-cell__title {
  margin-left: 10px;
}
</style>
