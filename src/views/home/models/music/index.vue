<template>
  <div class="music">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(swipe, index) in swipelist" :key="index"
        ><img :src="swipe.pic" alt="" width="100%" height="200"
      /></van-swipe-item>
    </van-swipe>

    <van-tabbar v-model="active" :fixed="false">
      <van-tabbar-item icon="home-o" @click="gofm">私人FM</van-tabbar-item>
      <van-tabbar-item icon="search" @click="goday">每日推荐</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="gomusiclist"
        >歌单</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" @click="gopaihangbang"
        >排行榜</van-tabbar-item
      >
    </van-tabbar>
    <!-- 推荐歌单 -->
    <div class="list">
      <router-link class="tuijian" to="/">
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
          推荐歌单<van-icon name="arrow" />
        </van-button>
      </router-link>
      <div class="zy">
        <div class="zhiyu" v-for="item in list1" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 独家放送 -->
    <div class="list">
      <router-link class="tuijian" to="/">
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
          独家放送<van-icon name="arrow" />
        </van-button>
      </router-link>
      <div class="zy">
        <div class="dujia" v-for="item in list2" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="list">
      <router-link class="tuijian" to="/">
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
          最新音乐<van-icon name="arrow" />
        </van-button>
      </router-link>
      <div class="zy">
        <div class="zhiyu" v-for="item in list3" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 推荐mv -->
    <div class="list">
      <router-link class="tuijian" to="/">
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
          推荐MV<van-icon name="arrow" />
        </van-button>
      </router-link>
      <div class="zy">
        <div class="mv" v-for="item in list4" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 推荐电台 -->
    <div class="list">
      <router-link class="tuijian" to="/">
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)">
          推荐电台<van-icon name="arrow" />
        </van-button>
      </router-link>
      <div class="zy">
        <div class="diantai" v-for="item in list5" :key="item.id">
          <img :src="item.picUrl" alt="" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqSwipe } from "../../../../api/home";
import { reqPersonalized } from "../../../../api/home";
import { reqNewsong } from "../../../../api/home";
import { reqPrivatecontent } from "../../../../api/home";
import { reqMv } from "../../../../api/home";
import { reqDjprogram } from "../../../../api/home";

export default {
  components: {},
  data() {
    return {
      active: "",
      swipelist: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    //跳路由
    gofm() {
      this.$router.push("/fm");
    },
    goday() {
      this.$router.push("/day");
    },
    gomusiclist() {
      this.$router.push("/musiclist");
    },
    gopaihangbang() {
      this.$router.push("/paihangbang");
    },

    //获取轮播图
    async swipe() {
      const res = await reqSwipe({ type: 2 });
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.banners);
        this.swipelist = res.data.banners;
      }
    },
    //推荐歌单
    async tuijian() {
      const res = await reqPersonalized({ limit: 6 });
      // console.log(res.data.result);
      if (res.status === 200) {
        this.list1 = res.data.result;
        console.log(this.list1);
      }
    },
    //独家放送
    async dujia() {
      const res = await reqPrivatecontent({ limit: 3 });
      // console.log(res.data.result);
      if (res.status === 200) {
        this.list2 = res.data.result;
        console.log(this.list2);
      }
    },
    //最新音乐
    async zuixin() {
      const res = await reqNewsong({ limit: 6 });
      // console.log(res.data.result);
      if (res.status === 200) {
        this.list3 = res.data.result;
        console.log(this.list3);
      }
    },
    //推荐MV
    async mv() {
      const res = await reqMv();
      // console.log(res.data.result);
      if (res.status === 200) {
        this.list4 = res.data.result;
        console.log(this.list4);
      }
    },
    // reqDjprogram 推荐电台
    async diantai() {
      const res = await reqDjprogram();
      // console.log(res.data.result);
      if (res.status === 200) {
        this.list5 = res.data.result;
        console.log(this.list5);
      }
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.swipe();
    this.tuijian();
    this.zuixin();
    this.dujia();
    this.mv();
    this.diantai();
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
.music {
  width: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.zy {
  overflow-y: hidden;

  width: 100%;
}
.zhiyu {
  float: left;
  width: 125px;
  height: 170px;
  font-size: 12px;
}
.zhiyu img {
  width: 125px;
  height: 125px;
  margin-bottom: 5px;
}
.list {
  width: 100%;
}
.dujia {
  float: left;
  width: 185px;
  height: 170px;
  font-size: 12px;
}
.dujia img {
  width: 185px;
  height: 125px;
  margin-bottom: 5px;
}
.dujia:nth-child(3) img {
  width: 375px;
}
.mv {
  float: left;
  width: 185px;
  height: 170px;
  font-size: 12px;
}
.mv img {
  width: 185px;
  height: 125px;
  margin-bottom: 5px;
}
.diantai {
  float: left;
  width: 125px;
  height: 170px;
  font-size: 12px;
}
.diantai img {
  width: 125px;
  height: 125px;
  margin-bottom: 5px;
}
</style>