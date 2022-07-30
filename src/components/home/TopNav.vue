<template>
  <div class="topNav">
    <div class="topLeft">
      <i class="bi bi-three-dots"></i>
    </div>

    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>
      <span>村落</span>
      <span>视频</span>
    </div>

    <div class="topRight">
      <i class="bi bi-search"></i>
    </div>

  </div>
</template>
<style lang="less" scoped>
  .topNav{
    width:100%;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .topContent{
      width: 65%;
      height: 90%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 15px;
      .active{
        font-weight: 900;
      }
    }
  }

</style>
<script>
export default {
  name: "TopNav"
}
</script>

<style scoped>

</style>