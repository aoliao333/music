<template>
   <div class='bendiyinyue'>
      <div class="header">
          <span class="header-left"  > <van-icon @click="toFenlei" name="arrow-left"/></span>         
          <span class="header-left">本地音乐</span>
          <span class="header-right"><van-icon  name="ellipsis"/></span>
         
      </div>
      <van-tabs v-model="activeName">
        <van-tab title="单曲" name="a">暂无内容</van-tab>
        <van-tab title="歌手" name="b">暂无内容</van-tab>
        <van-tab title="专辑" name="c">暂无内容</van-tab>
        <van-tab title="文件夹" name="d">暂无内容</van-tab>
        </van-tabs>
   </div>
</template>

<script>
export default {
    
    components: {},
    data() {
        
        return {
            activeName: 'a',
        };
    },
    computed: {},
    watch: {},
    
    methods: {
       toFenlei(){
     this.$router.push({ path:'/fenlei'})
            
        }  
    },
    created() {
        
    },
    mounted() {
               
    },
    beforeCreate() {}, 
    beforeMount() {},
    beforeUpdate() {}, 
    updated() {}, 
    }
</script>
<style  scoped>
    .header{
        height: 40px;
        background-color: red;
        width: 100%;
        line-height: 40px;
        font-size: 18px;
        color: aliceblue;
    }
    .header-left{
        float: left;
        padding-left: 8px;
    }
    .header-right{
        float: right;
        padding-right: 10px;
    }
</style>