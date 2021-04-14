<template>
<div class='search'>
    <div class="top">
        <div class="topleft fl"><a href="#/search"><van-icon size="30px" color="white" name="arrow-left"/></a></div>
        <div class="topright fl">        
        <p>歌手分类</p></div>
         </div>
    <div>
        <ul>
            <a href="#"><li>华语男歌手</li></a>
            <a href="#"><li>华语女歌手</li></a>
            <a href="#"><li>华语乐队/组合</li></a>
        </ul>
        <ul>
            <a href="#"><li>欧美男歌手</li></a>
            <a href="#"><li>欧美女歌手</li></a>
            <a href="#"><li>欧美乐队/组合</li></a>
        </ul>
        <ul>
            <a href="#"><li>日本男歌手</li></a>
            <a href="#"><li>日本女歌手</li></a>
            <a href="#"><li>日本乐队/组合</li></a>
        </ul>
                <ul>
            <a href="#"><li>韩国男歌手</li></a>
            <a href="#"><li>韩国女歌手</li></a>
            <a href="#"><li>韩国乐队/组合</li></a>
        </ul>
                <ul>
            <a href="#"><li>其他男歌手</li></a>
            <a href="#"><li>其他女歌手</li></a>
            <a href="#"><li>其他乐队/组合</li></a>
        </ul>
    </div>
</div>
</template>
<script>
// import {reqhotlist} from "../../api/hotsearch"
export default {
components: {},
data() {
return {
hotlist:[]
};
},
computed: {},
watch: {},
//方法集合
methods: {
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
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
ul{
    background-color: white;
    margin-top: 12px;
}
ul li{
    line-height: 50px;
    height:50px;
    color: black;
    margin-left: 15px;
    background-color: white;
    width: 100%;
    border-bottom: 1px solid rgb(221, 219, 219);
}
li a{
    /* background-color: white; */
    color: black;
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
.topright p{
    height: 70px;
    line-height: 70px;
    color: white;
}
.top{
    height: 70px;
    background-color: #D33A31;
}
</style>