<template>
  <div id="app">
    <router-view />
    <Video :is-hidden-video="isHiddenVideo" :time="timeStr" @onQuit="onQuit" />
    <InviteVideo v-if="typeState === '1'" @onAction="onAction" />
    <div class="joinroom" @click="initRoom('join')">加入房间</div>
    <div class="joinroom created" @click="initRoom('created')">创建房间</div>

  </div>
</template>

<script>
import InviteVideo from './components/InviteVideo'
import Video from './components/Video'
import mrtc from '@/mixins/mrtc'
import webSocket from '@/mixins/webSocket'

export default {
  name: 'App',
  components: {
    InviteVideo,
    Video
  },
  mixins: [mrtc, webSocket],
  data() {
    return {

    }
  },
  created() {
    this.initWebSocket()
  },
  methods: {
    onAction(type) {
      console.log(123, type)
      // 1 接听 2 拒绝 3 快速回复 4 查看简历
      switch (type) {
        case '1':
          this.initRoom('created')
          break
        case '2':
          this.initRoom('join')
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.created {
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
