<template>
  <router-view/>
  <FooterMusic/>
</template>
<script>
import FooterMusic from "@/components/item/FooterMusic";
export default{
components:{
  FooterMusic
}
}
</script>
<style lang="less">
*{
  margin : 0;
  padding: 0;
  box-sizing: border-box;
}
.bi bi-three-dots{
  width: .10rem;
  height: .10rem;

}
a{
  color:black;
}
</style>
