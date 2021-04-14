<template>
<div class='search'>
    <div class="top">
        <div class="topleft fl">
            <a href="#/search"><van-icon size="30px" color="white" name="arrow-left"/></a>
        </div>
        <div class="topright fl">
            <input type="text" name="" id="ipt" placeholder="音乐、视频、歌手、电台" v-model="val"
            @keyup.enter="submit">
            <van-icon size="30px" color="white" name="cross"  v-if="val" @click="del" />
        </div>
    </div>
<van-tabs v-model="active">
  <van-tab title="单曲" >
            <ul>
            <li v-for="(m,n) in singlist" :key="n">
                <img :src="m.al.picUrl" alt="">
                <div class="right"><p>{{m.name}}</p></div>
            </li>
        </ul>
  </van-tab>
  <van-tab title="歌手" >         
      <ul>
        <li v-for="(m,n) in singerlist" :key="n">
                <img :src="m.img1v1Url" alt="">
                <div class="right"><p>{{m.name}}</p></div>
        </li>
        </ul>
    </van-tab>
  <van-tab title="专辑">
        <ul>
        <li v-for="(m,n) in zhuanjilist" :key="n">
                <img :src="m.picUrl" alt="">
                 <div class="right"><p>{{m.name}}</p><span>{{m.artist.name}}&nbsp;{{m.publishTime|dataForm}}</span></div>
        </li>
        </ul>
  </van-tab>
  <van-tab title="歌单">
      <ul>
        <li v-for="(m,n) in gedanlist" :key="n">
                <img :src="m.coverImgUrl" alt="">
                <!-- <div class="right"><p>{{m.name}}</p></div> -->
                 <div class="right"><p>{{m.name}}</p><span>{{m.trackCount}}首&nbsp;by{{m.creator.nickname}}，播放{{(Number((m.playCount)/10000)).toFixed(1)}}万次</span></div>
        </li>
        </ul>
  </van-tab>
  <van-tab title="视频">内容 4</van-tab>
  <van-tab title="主播电台">内容 4</van-tab>
  <van-tab title="用户">内容 4</van-tab>

</van-tabs>
</div>
</template>
<script>
import {reqsinglist} from "../../../api/search/search"
export default {
components: {},
data() {
return {
active:0,
limit:10,
val:this.$route.query.keywords,
singlist:[],
singerlist:[],
zhuanjilist:[],
gedanlist:[],
};
},
computed: {},
watch: {},
//方法集合
methods: {
    del(){
        this.val=''
    },
     submit(){
    this.$router.push({path:'/result',query:{keywords:this.val,type:this.type}});
    this.initsinglist(this.val,1,this.limit)
    this.initsingerlist(this.val,100,this.limit)
    this.initzhuanjilist(this.val,10,this.limit)
    this.initgedanlist(this.val,1000,this.limit)
    },
    //单曲
    async initsinglist(val,type,limit){
        const result= await reqsinglist(val,type,limit);
        this.singlist=result.data.result.songs
    },
    //歌手
    async initsingerlist(val,type,limit){
        const result= await reqsinglist(val,type,limit);
        this.singerlist=result.data.result.artists
    },
    //专辑
    async initzhuanjilist(val,type,limit){
        const result= await reqsinglist(val,type,limit);
        this.zhuanjilist=result.data.result.albums
    },
    //歌单
    async initgedanlist(val,type,limit){
        const result= await reqsinglist(val,type,limit);
        this.gedanlist=result.data.result.playlists
        console.log(result.data.result.playlists);
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.initsinglist(this.val,1,this.limit)
    this.initsingerlist(this.val,100,this.limit)
    this.initzhuanjilist(this.val,10,this.limit)
    this.initgedanlist(this.val,1000,this.limit)

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
  filters:{
    dataForm(str){
      var date=new Date(str)
      var y=date.getFullYear()
      var m=date.getMonth()+1
      var d=date.getDate()
      return `${y}.${m}.${d}`
    }
  },
}
</script>
<style scoped>
img{
    float: left;
    display: block;
    width: 60px;
    height: 60px;
}
li p{
    width: 280px;
    overflow: hidden;    
text-overflow:ellipsis;    
white-space: nowrap;
    overflow: hidden;
    padding: 7px 0;
    font-size: 16px;
}
li span{
    font-size: 10px;
    color: rgb(129, 124, 124);
}
li{
    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgb(177, 175, 175);
}
.right{
    float: left;
    height: 60px;
    margin-left: 19px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.search{
    overflow: hidden;
    widows: 100%;
    height: 100%;
    background-color: #F2F4F5;
}
.topleft{
    width: 30px;
    height: 30px;
    padding: 20px;
}
.topright{
    width: 270px;
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;
}
.fenlei{
    height: 50px;
    background-color: #F2F4F5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #b5b6b6;
}
.fenlei p{
    color: #737575;
    padding: 0 5px;
}
#ipt{
    width: 250px;
    font-size: 19px;
    height: 38px;
    border: none;
    color: #F2C4C1;
    background-color: #D33A31;
}
input::-webkit-input-placeholder{
    color: #E0756E;
}
input::-moz-input-placeholder{
    color: #E0756E;
}
input::-ms-input-placeholder{
    color: #E0756E;
}
.top{
    height: 70px;
    background-color: #D33A31;
}
</style>