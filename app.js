App({
  globalData: {
    URL: 'http://noda.cn',
    userInfo: {
    }
  },
  onLaunch: function () {
    var _this=this;
    // wx.login({
      // success: function (res) {
        // console.log(res)
        // if (res.code) {
        //   wx.request({
        //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=' + code +'&grant_type=authorization_code',
        //     data: {
        //       code: res.code
        //     }
        //   })
        // } else {
        //   console.log('登录失败！' + res.errMsg)
        // }
      // }
    // });
    //获取用户信息
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        _this.globalData.userInfo=res.data;
      },
      fail: function (res) {
        wx.redirectTo({
          url: "/pages/login/login"
        })
      }
    })
  },
  
 
})