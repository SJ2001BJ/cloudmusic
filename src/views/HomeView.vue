<template>
<!--  <i class="bi bi-three-dots"></i>-->
  <div>
    <TopNav/>
    <SwipeTop/>
    <IconList/>
    <MusicList/>

  </div>

</template>

<script>
// @ is an alias to /src

import TopNav from "@/components/home/TopNav";
import SwipeTop from "@/components/home/SwipeTop";
import IconList from "@/components/home/IconList";
import MusicList from "@/components/home/MusicList";
export default {
  name: 'HomeView',
  components: {
    IconList,
    SwipeTop,
    TopNav,
    MusicList

  }
}
</script>
