<template>
   <div class="musicList">
     <div class="musicTop">
       <div class="title">发现好歌单</div>
       <div class="more">查看更多</div>
     </div>
   </div>
</template>

<script>
import {getMusicList} from "@/request/api/home";
export default {
  data(){
    return {
      musicList:[],
    };
  },
  methods:{
    async getSongsList(){
      let res = await getMusicList();
      console.log(res);
    },
  },
  mounted(){
    this.getSongsList()
  }
};
</script>
<style lang="less" scoped>
.musicList{
  width: 100%;
  height: 5rem;
  padding:0.2rem;
}
.musicTop{
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  .title{
    font-size: 0.4rem;
    font-weight: 900;
  }
  .more{
    border:1px solid #cccccc;
    text-align: center;
    line-height: 0.6rem;
    paddingL: 0 0.2rem;
    border-radius: 0.4rem;
  }
}


</style>


<style scoped>

</style>