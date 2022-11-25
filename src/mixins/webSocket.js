export default {
  components: { },
  data() {
    return {
      websock: '',
      lockReconnect: false, // 是否真正建立连接
      timeout: 58 * 1000, // 58秒一次心跳
      timeoutObj: null, // 心跳倒计时
      serverTimeoutObj: null, // 心跳倒计时
      timeoutnum: null, // 断开 重连倒计时
      typeState: '0',
      roomID: '669356350194356',
      roomKey: '123',
      userID: ''
    }
  },
  created() {
  },
  destroyed() {
    this.websock.close() // 离开路由之后断开websocket连接
  },
  methods: {
    messageSend({ toUserId, userId, type, roomNumber, passWord }) {
      const actions = {
        toUserId: '1592321317354872833',
        userId: '123',
        type: type,
        roomNumber: roomNumber,
        passWord: passWord
      }
      this.websocketsend(JSON.stringify(actions))
    },
    currentTime() {
      setInterval(this.formatDate, 500)
    },
    initWebSocket() {
      // 初始化weosocket
      const wsuri = 'ws://192.168.7.125:1119/v1/message/video/call/token_wechat_jobs:205a3208f7ea372588eded06782cbc8f'
      this.websock = new WebSocket(wsuri)
      // 客户端接收服务端数据时触发
      this.websock.onmessage = this.websocketonmessage
      // 连接建立时触发
      this.websock.onopen = this.websocketonopen
      // 通信发生错误时触发
      this.websock.onerror = this.websocketonerror
      // 连接关闭时触发
      this.websock.onclose = this.websocketclose
    },
    // 连接建立时触发
    websocketonopen() {
      // 开启心跳
      this.start()
      // 连接建立之后执行send方法发送数据

      // this.websocketsend(actions)
    },
    // 通信发生错误时触发
    websocketonerror() {
      console.log('出现错误')
      this.reconnect()
    },
    // 客户端接收服务端数据时触发
    websocketonmessage(e) {
      console.log(e.data)
      // 收到服务器信息，心跳重置
      // MESSAGE_CALL("1","呼叫"),
      //   REJECT_MESSAGE_CALL("2","被拒接"),
      //   NOT_ONLINE("3","不在线"),
      //   LINE_BUSY("4","占线中"),
      //   HEARTBEAT_DETECTION("999","心跳检测");
      const data = JSON.parse(e.data)
      this.typeState = data.type
      switch (data.type) {
        case '1':
          this.roomID = data.roomNumber
          this.roomKey = data.passWord
          this.userID = data.userId
          break
      }

      this.reset()
    },
    websocketsend(Data) {
      // 数据发送
      this.websock.send(Data)
    },
    // 连接关闭时触发
    websocketclose(e) {
      // 关闭
      console.log('断开连接', e)
      // 重连
      this.reconnect()
    },
    reconnect() {
      // 重新连接
      var that = this
      if (that.lockReconnect) {
        return
      }
      that.lockReconnect = true
      // 没连接上会一直重连，设置延迟避免请求过多
      that.timeoutnum && clearTimeout(that.timeoutnum)
      that.timeoutnum = setTimeout(function() {
        // 新连接
        that.initWebSocket()
        that.lockReconnect = false
      }, 5000)
    },
    reset() {
      // 重置心跳
      var that = this
      // 清除时间
      clearTimeout(that.timeoutObj)
      clearTimeout(that.serverTimeoutObj)
      // 重启心跳
      that.start()
    },
    start() {
      // 开启心跳
      console.log('开启心跳')
      var self = this
      self.timeoutObj && clearTimeout(self.timeoutObj)
      self.serverTimeoutObj && clearTimeout(self.serverTimeoutObj)
      self.timeoutObj = setTimeout(function() {
        // 这里发送一个心跳，后端收到后，返回一个心跳消息，
        if (self.websock.readyState && Number(self.websock.readyState) === 1) {
          // 如果连接正常
          const actions = {
            toUserId: '1592321317354872833',
            userId: '123',
            type: '999',
            roomNumber: '123456',
            passWord: '123456'
          }
          self.websocketsend(JSON.stringify(actions)) // 这里可以自己跟后端约定
        } else {
          // 否则重连
          self.reconnect()
        }
        self.serverTimeoutObj = setTimeout(function() {
          // 超时关闭
          self.websock.close()
        }, self.timeout)
      }, self.timeout)
    }
  },
  mounted() {
    this.currentTime()
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate) // 在Vue实例销毁前，清除时间定时器
    }
  }
}
