<template>
 <div class="itemMusicTop">
   <img :src="playlist.coverImgUrl" alt="" class="bgimg">

     <div class="itemLeft">
       <i class="bi bi-arrow-left" @click="$router.go(-1)"></i>
       <span class="musicList">歌单</span>
     </div>

     <div class="itemRight">
       <i class="bi bi-search"></i>
       <i class="bi bi-three-dots-vertical"></i>
     </div>
 </div>

  <div class="itemMusicCenter">
    <div class="itemContent">
      <img :src="playlist.coverImgUrl" alt="" class="showing">
      <span class="bi bi-play-circle"></span>
      <span class="musicCount">{{ changeCount(playlist.playCount)}}</span>
    </div>

    <div class="contentRight">
      <p class="rightP_one">{{playlist.name}}</p>
      <div class="right_img">
        <span>
           <img :src="playlist.creator.avatarUrl" alt="" class="avatarName" />
        </span>

        <span class="nickName">{{playlist.creator.nickname}}</span>
        <i class="bi bi-arrow-right"></i>
      </div>
    </div>

    <div class="iconList">
       <div class="iconItem">
         <i class="bi bi-body-text"></i>
         <span>{{playlist.commentCount}}</span>
       </div>

      <div class="iconItem">
        <i class="bi bi-share"></i>
        <span>{{playlist.trackCount}}</span>
      </div>

      <div class="iconItem">
        <i class="bi bi-box-arrow-down"></i>
        <span>下载</span>
      </div>

      <div class="iconItem">
        <i class="bi bi-check2-circle"></i>
        <span>多选</span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
 setup(props){
  // console.log(props);
   //通过props进行传值，判断如果数据拿不到，就获取sessionStorage的数据
   if((props.playlist.creator="")){
     props.playlist.creator= JSON.parse(sessionStorage.getItem().playlist).creator
   }
   function changeCount (num){
     if(num>=100000000){
       return(num/100000000).toFixed(1)+"亿"
     }else if(num>=10000){
       return(num/10000).toFixed(1)+"万"
     }
   }
   return{changeCount}
 },
  props:['playlist'],
};
</script>

<style lang="less" scoped>
.itemMusicTop{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 10px;
  position: relative;
}
.itemLeft, .itemRight{
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
}
.musicList{
  font-size: .4rem;
  color:white;
}
.bi{
  fill:white; //填充颜色
}
.bgimg{
  width: 100%;
  height: 11rem;
  position: fixed;
  z-index: -1;
  filter: blur(30px);
}
.showing{
  width:37%;
  height: 138px;
  border-redius: 0.2rem;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 0.4rem;
  position: absolute;
}
.musicCount{
  position: absolute;
  padding-top: 10px;
  padding-left: 75px;
  color: aliceblue;

}
.listName{
  margin-left: 170px;
  width: 46%;
  position: relative;
  //padding-top: 20px;
  color: aliceblue;
}
.nickName{
  margin-left: 200px;
  margin-top: 50px;

  position: relative;
}
.rightP_one{
  padding-left: 160px;
  padding-top: 25px;
  color: aliceblue;
}
.bi-play-circle{
  color: aliceblue;
  position:absolute;
  padding-top: 11px;
  padding-left: 60px;
}
.avatarName{
  width: 30px;
  height: 30px;
  margin-left: 165px;
  margin-top: 10px;
  border-radius: 50%;
}

.iconList{
  width: 100%;
  height: 1rem;
  margin-top: .9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.iconItem{
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: aliceblue;
}
</style>