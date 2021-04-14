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
<van-tabs>
  <van-tab v-for="(v,i) in nav" :title="v" :key="i" >
    <div v-if="i==0" :index=1>
        danqu
    </div>
    <div v-if="i==1" :index=2>
        <ul>
            <li v-for="(m,n) in singerlist" :key="n">
                <img :src="m.img1v1Url" alt="">
                <div class="right"><p>{{m.name}}</p></div>
            </li>
        </ul>
    </div>
    <div v-if="i==2">
        <ul>
            <li>
                <img src="https://img0.baidu.com/it/u=2190448189,1096971242&fm=26&fmt=auto&gp=0.jpg" alt="">
                <div class="right"><p>张杰</p><span>小米2018-02-09</span></div>
            </li>
        </ul>
    </div>
    <div v-if="i==3">歌单</div>
    <div v-if="i==4">视频</div>
  </van-tab>
</van-tabs>
    <!-- <div class="nav">
        <ul>
            <li><a href="">单曲</a></li>
            <li><a href="">歌手</a></li>
            <li><a href="">专辑</a></li>
            <li><a href="">歌单</a></li>
            <li><a href="">视频</a></li>
            <li><a href="">主播电台</a></li>
            <li><a href="">用户</a></li>
        </ul>
    </div> -->
</div>
</template>
<script>
import {reqsinglist} from "../../../api/search/search"
export default {
components: {},
data() {
return {
index:0,
type:100,
limit:10,
nav:['单曲','歌手','专辑','歌单','视频','主播电台','用户'],
val:this.$route.query.keywords,
// keywords:this.$route.query.keywords,
singerlist:[],
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
    this.initsinglist(this.val,this.type,this.limit)
    },
    async initsinglist(val,type,limit){
        const result= await reqsinglist(val,type,limit);
        this.singerlist=result.data.result.artists
        console.log(result.data.result.artists);
        // console.log(this.singerlist);
    },
    ss(){
    console.log(this.index);

    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // console.log(this.index);
    this.initsinglist(this.val,this.type,this.limit)
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
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
    padding: 7px 0;
    font-size: 20px;
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