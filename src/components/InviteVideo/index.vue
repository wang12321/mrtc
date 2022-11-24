<template>
  <div class="invite-video">
    <div class="user-info">
      <img class="img-head" src="@/assets/images/jj.png" alt="">
      <div class="info-name"><span class="name">江流儿</span><span> 高级UI设计师 | 29岁 | 女 | 3-5年 </span></div>
      <div class="info-text"><span>请求与你视频面试</span></div>
    </div>
    <div class="btn-base kshf-btn">快捷回复</div>
    <div class="btn-base ckjl-btn">查看简历</div>
    <img class="img-jj" src="@/assets/images/jj.png" alt="">
    <img class="img-splj" src="@/assets/images/splj.png" alt="">

  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>
<style lang="scss" scoped>
.invite-video {
  position: absolute;
  top: 40px;
  right: 20px;
  width: 400px;
  height: 150px;
  overflow: hidden;
  background: #001528;
  border-radius: 10px;

  .user-info {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 80px;
    //background: red;
    overflow: hidden;

    .info-name {
      position: absolute;
      top: 15px;
      left: 90px;
      width: 300px;
      height: 20px;
      font-size: 14px;
      color: #666;

      .name {
        font-size: 20px;
        color: white
      }
    }

    .info-text {
      position: absolute;
      bottom: 15px;
      left: 90px;
      width: 300px;
      height: 20px;
      font-size: 14px;
      color: white;
    }

    .img-head {
      position: absolute;
      bottom: 15px;
      left: 20px;
      width: 50px;
    }
  }

  .ckjl-btn {
    position: absolute;
    left: 110px;
  }

  .kshf-btn {
    position: absolute;
    left: 20px;
  }

  .btn-base {
    bottom: 25px;
    width: 80px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    color: white;
    text-align: center;
    background: #000;
    border-radius: 17px;
  }

  .ckjl-btn {

  }

  .img-jj {
    position: absolute;
    right: 80px;
    bottom: 20px;
    width: 40px;
  }

  .img-splj {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 40px;
  }
}
</style>

