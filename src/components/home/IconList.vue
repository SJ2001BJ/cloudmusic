<template>
  <div class="iconList">
    <div class="iconItem">
      <i class="bi bi-newspaper"></i>
      <span>音乐大事</span>
    </div>

    <div class="iconItem">
      <i class="bi bi-ui-radios"></i>
      <span>私人电台</span>
    </div>

    <div class="iconItem">
      <i class="bi bi-file-earmark-music"></i>
      <span>歌单</span>
    </div>

    <div class="iconItem">
      <i class="bi bi-bar-chart-steps"></i>
      <span>排行榜</span>
    </div>
  </div>


</template>

<style long="less" scoped>
 .iconList{
   width: 100%;
   height: 1rem;
   margin-top: .2rem;
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
 }

</style>

<script>
export default {
  name: "IconList"
}
</script>

<style scoped>

</style>