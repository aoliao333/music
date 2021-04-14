<template>
   <div class='wodeshoucang' v-if="isRouterAlive">
          
      <div class="header">
          <span class="header-left"  > <van-icon @click="toFenlei" name="arrow-left"/></span>         
          <span class="header-left">我的收藏</span>
          <span class="header-right"><van-icon  name="ellipsis"/></span>
         
      </div>
    <van-tabs >
        <van-tab title="专辑" name="a">
            <div class="zanwu">
                <div class="shuzizhuanji" v-for="(item,index) in songs1.hotAlbums.slice(0,5)" :key="index">
                    <img :src="item.picUrl" alt="" width="75" height="75" >
                    <!-- <van-image
                            width="75"
                            height="75"
                            lazy-load
                            :src="item.picUrl"
                            /> -->
                    <dl>
                        <dt>{{item.name}}</dt>
                        <dd>{{item.artist.name}}</dd>
                    </dl>
                </div>
            </div>
            <div class="tuijian">
                <p>最新专辑推荐</p>
                <van-row gutter="20" >
                <van-col span="8" v-for="(item1,index) in songs.hotAlbums.slice(0,3)" :key='index'><van-image
                height="10rem"
                fit="contain"
                :src="item1.picUrl"
                /> <p>{{item1.name}} </p>
                </van-col>
               
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
import {shoucanggeshoulist} from '../../../api/four/bendi'

export default {
    // inject:['reload'],
    components: {},
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
        
        return {
           songs:null ,
           songs1:null,
           songsss:null,
           tuijiansongs:null,
           isRouterAlive: true
        };
    },
    computed: {},
    watch: {},
    
    methods: {
         reload() {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true;
        })
      },
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
            //   this.reload();
               
            }
        },
        
    async  wodezhuanji(id){
              const result=await tuijianZhuanji(id);
            console.log(result);
            // console.log(result.status);
            if (result.status==200) {
                console.log(result.data);
                this.songs1=result.data;
            //   this.reload();  
            }    
        },
   async  geshouliebiao(id){
        console.log(33333);
        const result=await shoucanggeshoulist(id);
        console.log(result);
    }
    },

    created() {
        this.getZhuanji(6472);
        this.wodezhuanji(12871618);
        this.geshouliebiao(339146651)
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
.shuzizhuanji{
    width: 100%;
    height: 80px;
    background-color: #d0d2d3;
    display: flex;  
}
.shuzizhuanji dl{
    margin-left: 10px;
    line-height: 30px;
}
.shuzizhuanji dl dt{
    font-weight: 800;
}
</style>