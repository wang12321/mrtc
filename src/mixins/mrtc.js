export default {
  data() {
    return {
      test_controller: null,
      src: '',
      isHiddenVideo: true,
      hour: 0, // 定义时，分，秒，毫秒并初始化为0；
      minute: 0,
      ms: 0,
      second: 0, // 秒
      time: null,
      timeStr: '',
      role: 'created'
    }
  },
  created() {
    // eslint-disable-next-line no-undef
    const test_controller = new McuController() // 实例化 SDK
    this.test_controller = test_controller
    console.log(111, test_controller)
    this.init()
    this.initCallback()
  },
  methods: {
    onQuit() {
      console.log(123)
      const test_controller = this.test_controller
      test_controller.LeaveRoom()
    },
    initCallback() {
      const test_controller = this.test_controller
      // 建立连接成功回调
      test_controller.OnConnectOK = () => {
        // conn_state = 0;
        // this.initRoom()
        alert('建立连接成功')
        // test_controller.JoinRoom('669168215684029', '123', this.getSign())
      }
      // 建立连接失败回调
      test_controller.OnConnectFailed = function(code, msg) {
        console.log(code, msg)
        alert('建立连接失败, 请尝试https修复')
      }
      // 房间初始化成功
      test_controller.OnInitRoomConfigOK = () => {
        alert('房间初始化成功')
        if (this.role === 'created') {
          this.createRoom()
        } else if (this.role === 'join') {
          this.joinRoom()
        }

        // test_controller.JoinRoom('669168215684029', '123', this.getSign())
      }
      // 房间初始化失败
      test_controller.OnInitRoomConfigFail = function(err_code, err_msg) {
        console.log(123123123, err_code, err_msg)
        alert('房间初始化失败')
      }
      // 创建房间成功回调
      test_controller.OnCreateRoomSucc = (room_id, rtoken) => {
        console.log(123123, room_id, rtoken)

        this.isHiddenVideo = false
        // test_controller.JoinRoom(room_id, rtoken, this.getSign())

        alert('创建房间成功')
      }
      // 创建房间失败回调
      test_controller.OnCreateRoomFailed = function(err_code, err_msg) {
        console.log(err_code, err_msg)
        alert('创建房间失败')
      }
      // 加入房间成功
      test_controller.OnJoinRoomSucc = () => {
        alert('加入房间成功')
        this.isHiddenVideo = false
      }
      // 加入房间失败
      test_controller.OnJoinRoomFailed = function(err_code, err_msg) {
        console.log(err_code, err_msg)
        alert('加入房间失败')
      }
      test_controller.OnPublishSucc = (sid)=> {
        this.timeStart()
        alert('发布订阅')
      }
      // 订阅成功回调
      test_controller.OnSubscribeSucc = function(feedId, sid) {
        test_controller.trace(`~~~~~~~~~~~~~ OnSubscribeSuccess  Response  , sid=${sid},feedId=${feedId}`)
        alert('订阅成功回调')

        // document.getElementById("audio0").play()
        // document.getElementById("video0").play()
      }
      // 邀请成功
      test_controller.OnInviteOK = function() {
        alert('邀请成功回调')
      }

      // 邀请失败
      test_controller.OnInviteFail = function(code, msg) {
        alert('邀请失败回调')
      }
      test_controller.OnReplyInviteOK = () => {
        alert('回复邀请回调')
      }
      // 退出房间回调
      test_controller.OnLeaveRoom = (leaveType) => {
        test_controller.warning(`~~~~~~~~~~~~~ leave room! leaveType = ${leaveType}`)
        alert('退出房间成功')
        this.onTimeReset()
        this.isHiddenVideo = true
      }
    },
    joinRoom() {
      const test_controller = this.test_controller
      test_controller.JoinRoom('669168215684029', '123', this.getSign())
    },
    createRoom() {
      const test_controller = this.test_controller
      test_controller.CreateRoom(this.getSign())
    },

    initRoom(type) {
      if (type) {
        this.role = type
      }
      const test_controller = this.test_controller
      // const config_param = {
      //   'third_id': '',
      //   'auto_publish_subscribe': 3,
      //   'video_profile_type': '2',
      //   'enableVideo': true,
      //   'enableAudio': true,
      //   'publish_device': 1,
      //   'initPublish': [
      //     {
      //       'publish_video_id': 'publish_video1',
      //       'publish_streamId_id': 'publish_streamId1',
      //       'publish_tag': 'VIDEO_SOURCE_CAMERA'
      //     }
      //   ],
      //   'initSubscribe': [
      //     {
      //       'subscribe_video_id': 'video0',
      //       'subscribe_audio_id': 'audio0',
      //       'subscribe_streamId_id': 'subscribe_streamId0',
      //       'feedId_id': 'feedId0'
      //     },
      //     {
      //       'subscribe_video_id': 'video99',
      //       'subscribe_audio_id': 'audio99'
      //     }
      //   ],
      //   'audioSource': 'default',
      //   'videoSource': '5f98ac1f90e68fc566c351052d9b0add56955f99011e346abdab3f0f2ecdea4f',
      //   'aspectRatioStrongDepend': false,
      //   'aspectRatio': '0',
      //   'degradationType': 1,
      //   'defaultRecord': false,
      //   'need_volume_analyser': true,
      //   'transport_': 'all',
      //   'defaultTurnServer': '',
      //   'E2EE': {
      //     'E2EE_enable': false,
      //     'E2EE_ikm': 'secret0123456789'
      //   },
      //   'sknm': '0,1',
      //   'media_type': 1,
      //   'enableDataChannel': false,
      //   'engine': 0,
      //   'scalabilityMode': 'NONE'
      // }
      const config_param = {
        auto_publish_subscribe: 3,
        media_type: 1,
        publish_device: 1,
        initSubscribe: [
          {
            subscribe_video_id: 'video0',
            subscribe_audio_id: 'audio0',
            subscribe_streamId_id: 'subscribe_streamId0',
            feedId_id: 'feedId0'
          }, {
            subscribe_video_id: 'video4',
            subscribe_audio_id: 'audio4'
          }],
        initPublish: [
          {
            publish_video_id: 'publish_video1',
            publish_streamId_id: 'publish_streamId1',
            publish_tag: 'VIDEO_SOURCE_CAMERA_1'
          }
        ]
      }
      console.log(1231232123123123, config_param)
      test_controller.InitRoomConfig(config_param)
    },
    init() {
      const test_controller = this.test_controller
      const config_param = {}

      config_param.uid = '6189'
      config_param.biz_name = 'demo'
      config_param.sub_biz = 'default'
      config_param.workspaceId = 'default'
      config_param.room_server_url = 'wss://mrtc.mpaas.cn-hangzhou.aliyuncs.com/ws'
      config_param.sign = 'signature'
      // 允许最大断网时间 (超过未重连, 直接关闭)
      config_param.network_check_timeout = 120 * 1000
      test_controller.Connect(config_param)
    },
    // 签名(通道建连/创建房间/加入房间需要)
    getSign(uid, isRecord = false) {
      const test_controller = this.test_controller
      test_controller.trace(`GetSign uid=${uid}`)
      return 'signature'
    },
    onTimeReset() { // 重置
      clearInterval(this.time)
      this.hour = 0
      this.minute = 0
      this.ms = 0
      this.second = 0
      this.timeStr = '00:00:00'
    },
    timeStart() {
      this.time = setInterval(this.timer, 50)
    },
    timer() { // 定义计时函数
      this.ms = this.ms + 50 // 毫秒
      if (this.ms >= 1000) {
        this.ms = 0
        this.second = this.second + 1 // 秒
      }
      if (this.second >= 60) {
        this.second = 0
        this.minute = this.minute + 1 // 分钟
      }

      if (this.minute >= 60) {
        this.minute = 0
        this.hour = this.hour + 1 // 小时
      }
      this.timeStr = this.toDub(this.hour) + ':' + this.toDub(this.minute) + ':' + this.toDub(this.second)/* +""+this.toDubms(this.ms)+"毫秒"*/
      // console.log(111111,this.timeStr)

      // document.getElementById('mytime').innerHTML=h+"时"+m+"分"+s+"秒"+ms+"毫秒";
    },
    toDub(n) { // 补0操作
      if (n < 10) {
        return '0' + n
      } else {
        return '' + n
      }
    }

  }
}
