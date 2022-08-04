<template>
  <div class="itemMusicList">
    <div class="itemListTop">
      <div class="listLeft">
        <i class="bi bi-play"></i>
        <span>播放全部<span>(共{{itemList.length}}首)</span></span>
      </div>
      <div class="listRight">
        <i class="bi bi-bookmark-plus"></i>
        <span>收藏（{{ subscribedCount }}）</span>
      </div>
    </div>
    <div class="itemList" >
      <div class="item" v-for="(item,i) in itemList" :key="i">
         <div class="itemLeft" @click="playMusic(i)">
           <span class="leftSpan" >{{i+1}}</span>
           <i class="bi bi-camera-video" v-if='item.mv != 0'></i>

           <div class="name">
             <p class="songsName">{{ item.name}} </p>
             <i class="bi bi-list-nested"></i>
             <span v-for="(item1, index) in item.ar" :key="index" class="singersName" >
               {{item1.name}}
             </span>
           </div>
         </div>


      </div>
    </div>
    </div>





</template>

<script>
import {mapMutations} from "vuex";

export default {
  setup(props){
    console.log(props);
  },
  props:['itemList','subscribedCount'],
  methods:{
    playMusic:function (i){
     this.updatePlayList(this.itemList)
      this.updatePlayListIndex(i)
    },
        ...mapMutations(['updatePlayList','updatePlayListIndex'])
  },

}
</script>

<style lang="less" scoped>
.itemMusicList{
  width: 100%;
  height: 25rem;
  background-color: antiquewhite;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
}
.itemListTop{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.listLeft{
  width: 3rem;
  height: 100%;
  line-height: 30px;
  float: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
//.itemRight{
//  float: right;
//  display: flex;
//  justify-content: space-between;
//}
.singersName{
  font-size: 0.1rem;
  display: flex;
}
/**
 to do
 */

.leftSpan{
  line-height: 30px;
  display: flex;
}
.name{
  width: 3rem;
  height: 100%;
  line-height: 30px;
  float: contour;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bi-camera-video{
  position: absolute;
  right:50px;
  display: flex;
  margin-bottom: 10px;
}

.bi-list-nested{
 position: absolute;
  right: 50px;
  display: flex;

}
</style>