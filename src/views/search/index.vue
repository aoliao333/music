<template>
<div class='search'>
    <div class="top">
        <div class="topleft fl">
            <a href="#/home"><van-icon size="30px" color="white" name="arrow-left"/></a>
        </div>
        <div class="topright fl">
            <input type="text" name="" id="ipt" placeholder="音乐、视频、歌手、电台" v-model="val"  @keyup.enter="submit" >
            <van-icon size="30px" color="white" name="cross"  v-if="val" @click="del"  />
        </div>
    </div>
    <a href="#/singerlist">
    <div class="fenlei">
        <van-icon name="friends-o" size="23px" />
        <p>歌手分类</p>
        <van-icon name="arrow" size="23px" />
    </div>
    </a>
    <div class="hot">
        <p>热门搜索</p>
        <ul>
            <li v-for="(v,i) in hotlist" :key="i" @click="sub(v.first)">
            <a :href="'#/result?keywords='+v.first">
            {{v.first}}</a>
            </li>
        </ul>
    </div>
    <div class="lishi">
        <ul>
            <li v-for="(v,i) in lishilist" :key="i" v-show="i<6" @click="go(v)">
            <van-icon name="clock-o" />
            <p >{{v}}</p>           
            <van-icon name="cross"  @click.stop="dellishi(v)" />
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import {reqhotlist} from "../../api/search/search"

export default {
components: {},
data() {
return {
val:'',
hotlist:[],
lishilist:JSON.parse(localStorage.getItem('lishi')),
};
},
computed: {},
watch: {},
//方法集合
methods: {
    del(){
        this.val=''
    },
    go(v){
        this.$router.push({path:'/result',query:{keywords:v}});
    },
    dellishi(v){
        let lishi=JSON.parse(localStorage.getItem('lishi'));
        let index=lishi.findIndex(item=>item==v)
        lishi.splice(index,1)
        localStorage.setItem('lishi',JSON.stringify(lishi))
        this.lishilist=lishi
        return false;
    },
    sub(v){
        let lishi=JSON.parse(localStorage.getItem('lishi'));
        if (lishi!=null) {
            lishi.unshift(v)
            this.lishilist=lishi
            localStorage.setItem('lishi',JSON.stringify(lishi)) 
        }else{
            lishi=[v]
            this.lishilist=lishi
            localStorage.setItem('lishi',JSON.stringify(lishi))
        }
    },
    submit(){
        this.$router.push({path:'/result',query:{keywords:this.val}});
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
    },
    async inithotlist(){
        const result= await reqhotlist();
        this.hotlist=result.data.result.hots;
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.inithotlist()
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
.lishi li{
    padding: 0 10px;
    height: 40px;
    width: 355px;
    border-bottom: 1px solid rgb(177, 175, 175);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.lishi  p{
    width: 280px;
}
.search{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #F2F4F5;
}
.hot p {
    margin-bottom: 15px
}
.hot{
    background-color: #F2F4F5;
    padding-top: 30px;
    padding-bottom: 20px;
    font-size: 13px;
    overflow: hidden;
}
.hot li {
    padding: 10px;
   float: left;
}
.hot a{
    color: black;
    height: 25px;
    padding:4px 6px;
    border: 1px solid #b5b6b6;
    border-radius: 15px;
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