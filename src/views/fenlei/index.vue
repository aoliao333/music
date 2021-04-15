<template>
  <div class="fenlei">
    <Header></Header>
    <div class="wode">
        <div class="wode-list" @click="toBendiyinyue">
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
        <div class="wode-list" @click="toWodeshoucang">
            <van-icon name="manager-o" class="icon" size="35px" color="red"/>
            <p class="wode-list-right">我的收藏<span>(0)</span></p>
        </div>
    </div>
   <van-collapse v-model="activeNames" class="gedan">
  <van-collapse-item title="创建的歌单" name="1">
    <van-button type="primary" size="large" @click="chuangjiangedan"><van-icon name="plus" />创建新歌单</van-button>
     
         <!-- <div class="gedan-list"  > -->
            <div class="gedan-list"   v-for="(item,index) in playlists" :key="index" @click="golist1(item.id)">
           <van-image
              width="75"
              height="75"
              :src="item.coverImgUrl"
            />
            <dl class="gedan-list-right"><dd>{{item.name}}</dd><dt>{{gedanchangdu[index]}}首</dt></dl>
            <van-button  type="default" is-link @click="showPopup"><van-icon class="gedanicon" name="ellipsis" />
          </van-button>
            <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
          <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
            <p>歌单：我喜欢的音乐</p>
              <div class="wode-list">
            <van-icon name="down" class="icon" size="25px" color="red"/>
            <p class="wode-list-right">下载</p>
        </div>
        <div class="wode-list">
            <van-icon name="share-o" class="icon" size="25px" color="red"/>
            <p class="wode-list-right">分享</p>
           
        </div>
</van-popup>
        </div>
  </van-collapse-item>
  
  </van-collapse>
  <div class="tuijian">
    <h3>推荐歌单</h3>
   <van-row gutter="20" v-if="obj" >
  <van-col span="8" v-for="item1 in obj.result.slice(0,3)" :key="item1.id"  @click="golist(item1.id)"><van-image
  height="10rem"
  fit="contain"
  :src="item1.picUrl"
/> <p>{{item1.name}}</p>
</van-col>
  
</van-row>
  </div>
  </div>
</template>

<script>
import Header from "../../components/header";
import {isLogined} from '../../utils/util'
import {getCookie} from '../../utils/util'
import { Dialog } from 'vant';
import {tuijianDedan} from '../../api/four/bendi'
import {yonghuGedan} from '../../api/four/bendi'
import {xinjiangedan} from '../../api/four/bendi'
import {gedanXiangqing} from '../../api/list'

export default {
  components: {
    Header,
    [Dialog.Component.name]: Dialog.Component,
  },
  data() {
    
    return {
      activeNames: ['1'],
       show: false,
       obj:null,
       playlists:null,
      // message:
       gedanname:'',
       aaa:null,
       gedanchangdu:[],
       url:this.$route.path,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},

  methods: {
    
    async  getTuijiangedan(){
    const result=await tuijianDedan();
    if(result.status===200){
      this.obj=result.data;
   
     
    }
  },
  async getWodegedan(id){
   if(isLogined()){
    const result=await yonghuGedan(id);
  
     this.playlists=result.data.playlist;
    
     for (let i = 0; i < this.playlists.length; i++) {
      this.gedanaaa(this.playlists[i].id);
     }
   }

  },
  async gedanaaa(id){
    const res=await gedanXiangqing(id);
    const aa=res.data.playlist.tracks.length;
    this.gedanchangdu.push(aa)
  },
    showPopup() {
      this.show = true;
    },
chuangjiangedan(){
      Dialog.confirm({
      title: '新建歌单',
      message: '<input type="text" v-model="gedanname"   placeholder="请输入歌单标题">',
      
})
  .then(() => {
    this.aaa=this.gedanname;
       this.xinjiangedanaaa(this.gedanname)
    
  })
  .catch(() => {
    // on cancel
  });
    },
   toBendiyinyue(){
     this.$router.push({ path:'/bendiyinyue'})
   },
   toWodeshoucang(){
     this.$router.push({ path:'/wodeshoucang'})

   },
   golist(id) {
      this.$router.replace(`/list1/${id}?url=`+this.url);
     
    },
     golist1(id) {
      this.$router.replace(`/list1/${id}?url=`+this.url);  
    },     
 async  xinjiangedanaaa(name){
   if(this.gedanname===''){
     console.log(3333);
   }else{
 if(isLogined()){
      const result =await xinjiangedan(name);
      console.log(5555,result);
    }
   } 
   }
  },
 
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

    this.getTuijiangedan();
    this.getWodegedan(getCookie('uid'));
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style  scoped>

.fenlei {
  margin-top: 40px;
}
.wode{
  background: #f2f4f5;

}
.wode-list{
  width: 100%;
  height: 56px;
  line-height: 55px;
  display: flex;
}
.icon{
  line-height: 55px;
  margin-left: 10px;
  margin-right: 10px;
  width: 10%;
}
.wode-list-right{
  height: 55px;
  border-bottom: 1px #dadcdd solid;
  width: 90%;
}
.van-collapse-item__content{
  width: 100%;
  padding: 12px 0px;
}
.van-button--large{
  background-color:#f2f4f5 ;
  color: red;
  border: none;
  width: 100%;
}
.gedan{
   background: #f2f4f5;
}
.gedan-list{
  width: 100%;
  height: 76px;
  line-height: 75px;
  display: flex;
}
.gedan-list-right{
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* line-height: 35px; */
}
.gedan-list-right dd{
  height: 30px;
}
.van-button--normal{
  height: 100%;
  border: none;
}
.van-button::before{
opacity: 0;
}
.gedanicon{
  font-size: 30px;
}
.tuijian{
  width: 100%;
  text-align: center;
  font-size: 18px;
   background: #f2f4f5;
  margin-top: 10px;
  
}
.tuijiangedan{
  width: 100%;
  height: 200px;
}
</style>
