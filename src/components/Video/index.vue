<template>
  <div id="videos" class="video-div" :class="isHiddenVideo?'display-none':'display-block'">
    <div class="publishVideo">
      <video
        id="publish_video1"
        autoplay
        muted="true"
        webkit-playsinline="true"
        playsinline="true"
        width="100%"
        height="100%"
        style="object-fit: cover;"
      />
      <div class="time">{{ time }}</div>

      <div class="video-tool">
        <img class="img-gd" src="@/assets/images/jj.png" alt="" @click="onQuit">
        <div class="btn-class">
          <div class="btn-base inappropriate" @click="onInappropriate">不合适</div>
          <div class="btn-base looks" @click="onLooks">再看看</div>
          <div class="btn-base offer" @click="onOffer">发Offer</div>
        </div>
      </div>
      <!--        <label id="publish_media_stat1" class="css-text-color hiddenForMobile" type="text" />-->
      <!--        <label id="streamId_text" type="text" class="hiddenForMobile">streamId:</label>-->
      <!--        <label id="publish_streamId1" class="css-text-color hiddenForMobile" type="text" />-->
    </div>
    <div class="subscribeVideo">
      <video
        id="video0"
        autoplay
        muted
        width="100%"
        height="100%"
        webkit-playsinline="true"
        playsinline="true"
        style="object-fit: cover;"
      >
        video
      </video>
      <audio id="audio0" autoplay>音频</audio>
      <video id="video99" autoplay muted="true" width="100%" height="480" hidden>
        video
      </video>
      <audio id="audio99" autoplay hidden>音频</audio>
      <br>
      <label id="subscribe_feedId_text0" type="text" class="hiddenForMobile" hidden>&nbsp;&nbsp;feedId:</label>
      <label id="feedId0" class="css-text-color hiddenForMobile" type="text" />
      <br>
      <label id="subscribe_streamId_text0" type="text" hidden class="hiddenForMobile">&nbsp;&nbsp;streamId:</label>
      <label id="subscribe_streamId0" class="css-text-color hiddenForMobile" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    isHiddenVideo: {
      type: Boolean,
      default: true
    },
    time: {
      type: String,
      default: '00:00:00'
    }
  },
  methods: {
    onQuit() {
      this.$emit('onQuit')
    },
    onInappropriate() {
      this.$emit('onInappropriate')
    },
    onLooks() {
      this.$emit('onLooks')
    },
    onOffer() {
      this.$emit('onOffer')
    }
  }
}
</script>

<style lang="scss" scoped>
.display-none {
  display: none;
}

.display-block {
  display: block;
}
.video-div {
  position: absolute;
  top: 40px;
  right: 10px;
  width: 500px;
  height: 600px;
  overflow: hidden;
  background: #001528;
  border-radius: 20px;

  .publishVideo {
    width: 100%;
    height: 100%;

    .time{
      position: absolute;
      top: 10px;
      right: 0;
      width: 100px;
      height: 40px;
      line-height: 40px;
      color: white;
    }
    .video-tool {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-color: rgba(0,0,0,.5);

      .img-gd {
        position: absolute;
        top: -20px;
        right: calc(50% - 20px);
        width: 40px;
      }

      .btn-class {
        position: relative;
        width: 320px;
        height: 100px;
        margin: 0 auto;
        //background: red;
      }

      .looks {
        position: absolute;
        left: 120px;
      }

      .offer {
        position: absolute;
        left: 220px;
      }

      .inappropriate {
        position: absolute;
        left: 20px;
      }

      .btn-base {
        bottom: 25px;
        width: 90px;
        height: 40px;
        font-size: 12px;
        line-height: 40px;
        color: white;
        text-align: center;
        background: #000;
        border-radius: 20px;
      }
    }
  }

  .subscribeVideo {
    position: absolute;
    top: 50px;
    right: 10px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background-color: #409eff;
    border-radius: 10px;
  }
}

</style>
