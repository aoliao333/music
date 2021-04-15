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
    <div class="van">
<van-tabs v-model="active"  sticky  offset-top="70px">
  <van-tab title="单曲"  >
        <ul>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="singonLoad">
            <li v-for="(m,n) in singlist" :key="n"  @click="gosing(m.id)">
                <div class="right"><p>{{m.name}}</p><span>{{m.ar[0].name}}&nbsp;-&nbsp;{{m.al.name}}</span>
                </div>
                <div class="sandian fr">
                    <van-icon name="ellipsis" />
                </div>
            </li>
        </van-list>
        </ul>
  </van-tab>
  <van-tab title="歌手" >         
      <ul>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="singeronLoad">
        <li v-for="(m,n) in singerlist" :key="n" >
                <img :src="m.img1v1Url" alt="">
                <div class="right"><p>{{m.name}}</p></div>
        </li>
        </van-list>
        </ul>
    </van-tab>
  <van-tab title="专辑">
        <ul>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="zhuanjionLoad">
        <li v-for="(m,n) in zhuanjilist" :key="n" @click="gozhuanji(m.id)">
                <img :src="m.picUrl" alt="">
                 <div class="right"><p>{{m.name}}</p><span>{{m.artist.name}}&nbsp;{{m.publishTime|dataForm}}</span></div>
        </li>
        </van-list>
        </ul>
  </van-tab>
  <van-tab title="歌单">
      <ul>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="gedanonLoad">
        <li v-for="(m,n) in gedanlist" :key="n"  @click="gogedan(m.id)">
                <img :src="m.coverImgUrl" alt="">
                 <div class="right"><p>{{m.name}}</p><span>{{m.trackCount}}首&nbsp;by{{m.creator.nickname}}，播放{{(Number((m.playCount)/10000)).toFixed(1)}}万次</span></div>
        </li>
        </van-list>
        </ul>
  </van-tab>
  <van-tab title="视频">
        <ul>
        <li v-for="(m,n) in shipinlist" :key="n" class="shipin">
                <img :src="m.coverUrl" alt="" >
                 <div class="right"><p>{{m.title}}</p><span>{{m.durationms|durationms}}&nbsp;by&nbsp;{{m.creator[0].userName}}</span></div>
        </li>
        </ul>
  </van-tab> 
  <van-tab title="主播电台">

        <ul>
        <li v-for="(m,n) in diantailist" :key="n">
                <img :src="m.picUrl" alt="">
                <div class="right"><p>{{m.name}}</p>
                <span>{{m.dj.nickname}}</span></div>
        </li>
        </ul>
  </van-tab>
  <van-tab title="用户">
        <ul>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="useronLoad">
        <li v-for="(m,n) in userlist" :key="n" class="user">
                <img :src="m.avatarUrl" alt="">
                <div class="right"><p>{{m.nickname}}</p>
                <span>{{m.signature}}</span></div>
        </li>
        </van-list>
        </ul>
  </van-tab>
</van-tabs>
</div>
</div>
</template>
<script>
import {reqsinglist} from "../../../api/search/search"
import {reqdiantailist} from "../../../api/search/search"
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
shipinlist:[],
diantailist:[],
userlist:[],
lishilist:JSON.parse(localStorage.getItem('lishi')),
userpage:1,
gedanpage:1,
zhuanjipage:1,
singpage:1,
singerpage:1,
loading: false,
finished: false,
};
},
computed: {},
watch: {},
//方法集合
methods: {
    gosing(id){
        this.$router.push({path:'/detail?id='+id})
    },
    gogedan(id){
        this.$router.push({path:'/list1/'+id})
    },
    gozhuanji(id){
        this.$router.push({path:'/list2/'+id})
    },
    del(){
        this.val=''
    },
     submit(){
    this.$router.push({path:'/result',query:{keywords:this.val,type:this.type}});
    let lishi=JSON.parse(localStorage.getItem('lishi'));
        if (lishi!=null) {
            lishi.unshift(this.val)
            this.lishilist=lishi
            localStorage.setItem('lishi',JSON.stringify(lishi)) 
        }else{
            lishi=[this.val]
            this.lishilist=lishi
            localStorage.setItem('lishi',JSON.stringify(lishi))
    }
    this.singlist=[],
    this.singerlist=[],
    this.zhuanjilist=[]
    this.gedanlist=[]
    this.userlist=[]
    this.singonLoad()
    this.singeronLoad()
    this.zhuanjionLoad()
    this.gedanonLoad()
    this.useronLoad()
    this.initshipinlist(this.val,1014,this.limit)
    this.initdiantailist(this.val,1009,this.limit)
    },
    //单曲
    async  singonLoad(){
    const  result= await reqsinglist(this.val,1,this.limit,this.singpage)
    if (result.data.result.songs.length<10) {
    this.finished=true
    }else{
    this.loading=false;
    this.singpage+=10;
    this.singlist=this.singlist.concat(result.data.result.songs)
    }
    },
    //歌手
    async  singeronLoad(){
    const  result= await reqsinglist(this.val,100,this.limit,this.singerpage)
    if (result.data.result.artists.length<10) {
    this.finished=true
    }else{
    this.loading=false;
    this.singerpage+=10;
    this.singerlist=this.singerlist.concat(result.data.result.artists)
    }
    },
    //专辑
    async  zhuanjionLoad(){
    const  result= await reqsinglist(this.val,10,this.limit,this.zhuanjipage)
    if (result.data.result.albums.length<10) {
    this.finished=true
    }else{
    this.loading=false;
    this.zhuanjipage+=10;
    this.zhuanjilist=this.zhuanjilist.concat(result.data.result.albums)
    }
    },
    //视频
    async initshipinlist(val,type,limit){
        const result= await reqdiantailist(val,type,limit);
        this.shipinlist=result.data.result.videos
    },
    // 电台
    async initdiantailist(val,type,limit){
        const result= await reqdiantailist(val,type,limit);
        this.diantailist=result.data.result.djRadios
    },
    //歌单
    async  gedanonLoad(){
    const  result= await reqsinglist(this.val,1000,this.limit,this.gedanpage)
    if (result.data.result.playlists.length<10) {
    this.finished=true
    }else{
    this.loading=false;
    this.gedanpage+=10;
    this.gedanlist=this.gedanlist.concat(result.data.result.playlists)
    }
    },
    //用户
    async useronLoad(){
    const  result= await reqsinglist(this.val,1002,this.limit,this.userpage)
    if (result.data.result.userprofiles.length<10) {
    this.finished=true
    }else{
    this.loading=false;
    this.userpage+=10;
    this.userlist=this.userlist.concat(result.data.result.userprofiles)
    }
    },
 },
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.initshipinlist(this.val,1014,this.limit)
    this.initdiantailist(this.val,1009,this.limit)
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
    },
    durationms(str){
      var date=new Date(str)
      var mm=date.getMinutes()
      var ss=date.getSeconds()
      if (mm<10) {
          mm='0'+mm
      }
      if (ss<10) {
          ss='0'+ss
      }
      return `${mm}:${ss}`
    }
  },
}
</script>
<style scoped>
.sandian{
    height: 60px;
    line-height: 60px;
    margin-right: 20px;
}
.user img{
    border-radius: 30px;
}
img{
    float: left;
    display: block;
    width: 60px;
    height: 60px;
}
li p{
    width: 280px; 
    text-overflow:ellipsis;    
    white-space: nowrap;
    overflow: hidden;
    padding: 7px 0;
    font-size: 16px;
}
li span{
    font-size: 10px;
    color: rgb(129, 124, 124);
    width: 280px; 
    text-overflow:ellipsis;    
    white-space: nowrap;
    overflow: hidden;
}
li{
    height: 60px;
    width: 100%;
    border-bottom: 1px solid rgb(177, 175, 175);
}
.shipin{
    height: 70px;
}
.shipin img{
    height: 70px;
    width: 120px;
}
.shipin p{
    width: 220px;
}
.shipin span{
    width: 220px;
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
.van{
    position: absolute;
    top: 70px;
}
.top{
    z-index: 999;
    width: 100%;
    position:fixed;
    top:0;
    height: 70px;
    background-color: #D33A31;
}

</style>