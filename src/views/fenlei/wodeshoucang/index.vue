<template>
   <div class='wodeshoucang'>
          
      <div class="header">
          <span class="header-left"  > <van-icon @click="toFenlei" name="arrow-left"/></span>         
          <span class="header-left">我的收藏</span>
          <span class="header-right"><van-icon  name="ellipsis"/></span>
         
      </div>
    <van-tabs v-model="activeName">
        <van-tab title="专辑" name="a">
            <div class="zanwu">暂无内容</div>
            <div class="tuijian">
                <p>最新专辑推荐</p>
                <van-row gutter="20">
                <van-col span="8"><van-image
                height="10rem"
                fit="contain"
                :src="songs.hotAlbums[0].picUrl"
                /> <p>{{songs.hotAlbums[0].name}} </p>
                </van-col>
                <van-col span="8"><van-image
                height="10rem"
                fit="contain"
                :src="songs.hotAlbums[1].picUrl"
                /> <p>{{songs.hotAlbums[1].name}}</p></van-col>
                <van-col span="8"><van-image
                height="10rem"
                fit="contain"
                :src="songs.hotAlbums[2].picUrl"
                /> <p>{{songs.hotAlbums[2].name}}</p></van-col>
                </van-row>
            </div>
        </van-tab>
        <van-tab title="歌手" name="b">
            <div class="zanwu">暂无内容</div>
        </van-tab>
        <van-tab title="视频" name="c">
            <div class="zanwu">暂无内容</div>
        </van-tab>
        <van-tab title="专栏" name="d">
            <div class="zanwu">暂无内容</div>
        </van-tab>
    </van-tabs>
   
   </div>
</template>

<script>
import {tuijianZhuanji} from '../../../api/four/bendi'
export default {
    
    components: {},
    data() {
        
        return {
           songs:null 
        };
    },
    computed: {},
    watch: {},
    
    methods: {
         toFenlei(){
     this.$router.push({ path:'/fenlei'})
        },
     async   getZhuanji(id){
            const result=await tuijianZhuanji(id);
            console.log(result);
            // console.log(result.status);
            if (result.status==200) {
                console.log(result.data);
                this.songs=result.data;
                console.log(this.songs.hotAlbums[0].picUrl);
            }
        }  
    },
    created() {
        this.getZhuanji(6472);
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
.zanwu{
        width: 100%;
        min-height: 250px;
         background: #f2f4f5;

        margin-bottom: 20px;
    }
.tuijian{
      background: #f2f4f5;

    min-height: 250px;
    width: 100%;
    text-align: center;
    }
.tuijian p{
    font-size: 18px;
}
</style>