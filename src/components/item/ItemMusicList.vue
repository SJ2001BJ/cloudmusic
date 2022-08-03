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
    <div class="itemList">
      <div class="item" v-for="(item,i) in itemList" :key="i">
         <div class="itemLeft">
           <span class="leftSpan" >{{i+1}}</span>
           <div class="name">
             <p>{{ item.name}} </p>
             <span v-for="(item1, index) in item.ar" :key="index" >
               {{item1.name}}
             </span>
           </div>
         </div>
        <div class="itemRight">
          <i class="bi bi-camera-video" v-if='item.mv != 0'></i>
          <i class="bi bi-list-nested"></i>
        </div>
      </div>
    </div>
    </div>





</template>

<script>
export default {
  setup(props){
    console.log(props);
  },
  props:['itemList','subscribedCount']
}
</script>

<style lang="less" scoped>
.itemMusicList{
  width: 100%;
  height: 10rem;
  background-color: antiquewhite;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .itemListTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
     .listLeft{
       width: 3rem;
       height: 100%;
       line-height: 30px;
       float: left;
       display: flex;
       justify-content: space-between;
       align-items: center;
     }
  }
}
/**
 to do
 */

//p{
// width: 40%;
//  height: 0.2rem;
//  display: flex;
//  justify-content: space-around;
//  align-items: center;
//  margin-bottom: 10px;
//}
//.name{
//
//  height: 100%;
//  display: flex;
//  flex-direction: column;
//
//}
</style>