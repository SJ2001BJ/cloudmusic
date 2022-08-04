<template>
<div class="FooterMusic">
   <div class="footerLeft" @click="updateDetailShow">
     <img :src="playList[playListIndex].al.picUrl" alt=""/>
     <div>
       <p>{{playList[playListIndex].al.name}}</p>
       <span>
         横滑切换上下首哦
       </span>
     </div>
   </div>
  <div class="footerRight">
    <i class="bi bi-list-nested"></i>
    <i class="bi bi-play-circle" @click="play" v-if="isbtnShow"></i>
    <i class="bi bi-pause-circle" @click="play" v-else></i>
  </div>
  <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
  <van-popup v-model:show="detailShow" position="right" :style="{ width: '100%',height:'100%' }" >
    内容
  </van-popup>
</div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['playList','playListIndex','isbtnShow','detailShow']),
  },
  mounted(){
    console.log(this.$refs);
  },
  methods:{
    play:function(){
      //判断音乐是否播放
      if(this.$refs.audio.paused){
        this.$refs.audio.play();
        this.updateIsbtnShow(false)
      }else{
        this.$refs.audio.pause()
        this.updateIsbtnShow(true)
      }

    },
    ...mapMutations(['updateIsbtnShow','updateDetailShow'])
  },
  watch:{
    playListIndex:function(){//监听如果下标发生改变，就自动播放音乐
      this.$refs.audio.autoplay=true;
      if(this.$refs.audio.paused){//如果是暂停状态，改变图标
        this.updateIsbtnShow(false)
      }
    },
    playList:function(){
      if(this.isbtnShow){
        this.$refs.audio.autoplay=true;
        this.updateIsbtnShow(false)
      }
    }

  },
  components:{
    // MusicDetail
  }
};
</script>

<style lang="less" scoped>
 .FooterMusic{
   width: 100%;
   height: 1.4rem;
   background-color: white;
   position: fixed;
   bottom:0;
   border-top: 1px solid #999;
   display: flex;
   padding:.2rem;
   justify-content: space-between;
 }
 .footerLeft{
   width: 60%;
   height: 100%;
   display: flex;
   justify-content: space-around;
   align-items: center;

 }
 img{
   width: 1rem;
   height: 1rem;
   border-radius: 50%;
 }
 .footerRight{
   width: 15%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 .bi{
   width: .6rem;
   height: 30px;
 }
</style>