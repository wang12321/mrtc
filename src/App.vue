<template>
  <div id="app">
    <router-view />
    <Video :is-hidden-video="isHiddenVideo" :time="timeStr" @onQuit="onQuit" />
    <!--    <InviteVideo></InviteVideo>-->
    <div class="joinroom" @click="initRoom('join')">加入房间</div>
    <div class="joinroom created" @click="initRoom('created')">创建房间</div>

  </div>
</template>

<script>
import InviteVideo from './components/InviteVideo'
import Video from './components/Video'
import mrtc from '@/mixins/mrtc'

export default {
  name: 'App',
  components: {
    InviteVideo,
    Video
  },
  mixins: [mrtc],
  data() {
    return {

    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.created{
  top: 200px !important;
}
.joinroom {
  position: absolute;
  top: 100px;
  left: 10px;
  width: 100px;
  height: 50px;
  background: white;
}
</style>
