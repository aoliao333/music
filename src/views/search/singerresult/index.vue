<template>
<div class='search'>
    <div class="top">
        <div class="topleft fl"><a href="#/singerlist"><van-icon size="30px" color="white" name="arrow-left"/></a></div>
        <div class="topright fl">        
        <p class="fl">{{title}}-{{text}}</p><p class="fr" is-link @click="showPopup">筛选</p></div>
         </div>
        <van-popup v-model="show" :style="{ height: '90%',width:'80%' }">
            <li>请选择</li>
            <li @click="ch('热门歌手',-1)">热门歌手</li>
            <li v-for="(v,i) in zimu" :key="i" @click="ch(v,v)">{{v}}</li>
            <li @click="ch('其他',0)">其他</li>
        </van-popup>
    <div class="bottom">
      <ul>
          <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
        <li v-for="(m,n) in singerlist" :key="n">
                <img :src="m.img1v1Url" alt="">
                <div class="right"><p>{{m.name}}</p></div>
        </li>
        </van-list>
        </ul>
    </div>
</div>
</template>
<script>
import {reqsingerlist} from "../../../api/search/search"

export default {
components: {},
data() {
return {
text:'热门歌手',
initial:-1,
zimu:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
title:this.$route.query.title,
area:this.$route.query.area,
limit:10,
type:this.$route.query.type,
singerlist:[],
show: false,
page:1,
loading: false,
finished: false,
};
},
computed: {},
watch: {},
//方法集合
methods: {
    ch(m,n){
        this.text=m
        this.initial=n
        this.show = false;
        this.singerlist=[],
        this.onLoad()
    },
    showPopup() {
      this.show = true;
    },
    async onLoad(){
        const  result= await reqsingerlist(this.type,this.area,this.limit,this.initial,this.page)
        if (result.data.artists.length<10) {
    this.finished=true
    }else{
    this.loading=false;
    this.page+=10;
    this.singerlist=this.singerlist.concat(result.data.artists)
    }
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // this.initlist(this.type,this.area,this.limit,this.initial,this.page)
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
.bottom{
    margin-top: 70px;
}
.van-popup li{
    line-height: 60px;
    text-indent: 20px;
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
.search{
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #F2F4F5;
}
.topleft{
    width: 30px;
    height: 30px;
    padding: 20px;
}
.topright{
    width: 290px;
}
.topright p{
    /* width: 30px; */
    height: 70px;
    line-height: 70px;
    color: white;
}
.top{
    width: 100%;
    position: fixed;
    top: 0;
    height: 70px;
    background-color: #D33A31;
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
</style>