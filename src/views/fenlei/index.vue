<template>
  <div class="fenlei">
    <Header></Header>
    <div class="wode">
        <div class="wode-list">
            <van-icon name="music-o" class="icon" size="35px" color="red"/>
            <p class="wode-list-right">本地音乐<span>(0)</span></p>
        </div>
        <div class="wode-list">
            <van-icon name="play-circle-o" class="icon" size="35px" color="red"/>
            <p class="wode-list-right">最近播放<span>(0)</span></p>
        </div>
        <div class="wode-list">
            <van-icon name="down
" class="icon" size="35px" color="red"/>
            <p class="wode-list-right">下载管理<span>(0)</span></p>
        </div>
        <div class="wode-list">
            <van-icon name="fire-o" class="icon" size="35px" color="red"/>
            <p class="wode-list-right">我的电台<span>(0)</span></p>
        </div>
        <div class="wode-list">
            <van-icon name="manager-o" class="icon" size="35px" color="red"/>
            <p class="wode-list-right">我的收藏<span>(0)</span></p>
        </div>
    </div>
   <el-collapse v-model="activeNames" @change="handleChange">
     <div class="gedan"></div>
  <el-collapse-item title="创建的歌单(1)" name="1" >
    <div class="el-icon-setting"></div>
    <div>111</div>
  </el-collapse-item>
  
</el-collapse>
  </div>
</template>

<script>
import Header from "../../components/header";

export default {
  components: {
    Header,
  },
  data() {
    
    return {
      activeNames: ['1']
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
     handleChange(val) {
        console.log(val);
      }
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
@import url("//unpkg.com/element-ui@2.10.0/lib/theme-chalk/index.css");


.fenlei {
  margin-top: 40px;
}
.wode{
  background: #f2f4f5;

}
.wode-list{
  width: 100%;
  height: 76px;
  line-height: 75px;
  display: flex;
}
.icon{
  line-height: 75px;
  margin-left: 10px;
  margin-right: 10px;
  width: 10%;
}
.wode-list-right{
  height: 75px;
  border-bottom: 1px #dadcdd solid;
  width: 90%;
}
.el-icon-setting{
  width: 100%;
}
.collapse-title { flex: 1 0 90%; order: 1; } .el-collapse-item__header { flex: 1 0 auto; order: -1; }


</style>
