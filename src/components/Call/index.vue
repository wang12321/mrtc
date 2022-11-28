<template>
  <div class="call-class">
    <img class="img-user" src="../../assets/image/jj.png" alt="">
    <div class="name">蔡磊</div>
    <div class="name-call">正在呼叫...</div>
    <img class="img-cancel" src="../../assets/image/jj.png" alt="" @click="onCancel">
    <div class="name-cancel" @click="onCancel">取消</div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    onCancel() {
      this.$emit('onCancel')
    }

  }

}
</script>

<style scoped lang="scss">
.call-class {
  position: absolute;
  top: 100px;
  right: 0;
  width: 300px;
  height: 350px;
  color: white;
  background: rgba(0,0,0,.8);
  border-radius: 10px 0 0 10px;

  .name {
    position: absolute;
    top: 120px;
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }

  .img-cancel {
    position: absolute;
    top: 230px;
    right: calc(50% - 20px);
    z-index: 99;
    width: 40px;
  }

  .name-cancel {
    position: absolute;
    top: 280px;
    width: 100%;
    font-size: 12px;
    text-align: center;
  }

  .name-call {
    position: absolute;
    top: 160px;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }
}

.img-user {
  position: absolute;
  top: 30px;
  right: calc(50% - 40px);
  z-index: 99;
  width: 80px;
}

</style>
