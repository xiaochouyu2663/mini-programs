var app=getApp();
Page({
  data: {
    isArgee:true,
    referralCode:'',
    mobile:'',
    realName:'',
    IDCard:'',
    password:'',
    verifyCode:''
  },
  onLoad:function(){
    
  },
  isAgreeHandle:function(e){
     this.setData({
       isArgee: e.detail.value
     })
  },
  register:function(){
    if (this.data.referralCode==''){
      wx.showToast({
        title: '请填写推荐码',
        icon:'none'
      })
      return;
    }
    if (this.data.mobile == '') {
      wx.showToast({
        title: '请填写手机号',
        icon: 'none'
      })
      return;
    }
    if (this.data.realName == '') {
      wx.showToast({
        title: '请填写真实姓名',
        icon: 'none'
      })
      return;
    }
    if (this.data.IDCard == '') {
      wx.showToast({
        title: '请填写身份证号',
        icon: 'none'
      })
      return;
    }
    if (this.data.password == '') {
      wx.showToast({
        title: '请填写登陆密码',
        icon: 'none'
      })
      return;
    }
    if (this.data.verifyCode == '') {
      wx.showToast({
        title: '请填写验证码',
        icon: 'none'
      })
      return;
    }
    
    // wx.request({
    //   url: app.globalData.URL + '/account/register',
    //   data: {
    //     referralCode: this.data.referralCode,
    //     username: this.data.mobile,
    //     alias: this.data.realName,
    //     IDCard: this.data.IDCard,
    //     password: this.data.password,
    //     vcode: this.data.verifyCode
    //   },
    //   success: function (res) {
    //     if (res.data.code == 200) {
    //       wx.showToast({
    //         title: '注册成功',
    //         icon: 'none'
    //       })
          
    //     } else {
    //       wx.showToast({
    //         title: '注册失败',
    //         icon: 'none'
    //       })
    //     }
    //   },
    //   fail: function (err) {
    //     wx.showToast({
    //       title: '请稍后再试',
    //       icon: 'none'
    //     })
    //   },
    // })
  },
  //注册码输入函数
  referralCodeInput: function (e) {
    this.setData({
      referralCode: e.detail.value
    })
  },
  //注册人手机号输入函数
  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  //真实姓名输入函数
  realNameInput: function (e) {
    this.setData({
      realName: e.detail.value
    })
  },
  //身份证号输入函数
  IDCardInput: function (e) {
    this.setData({
      IDCard: e.detail.value
    })
  },
  //登录密码输入函数
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  //验证码输入函数
  verifyCodeInput: function (e) {
    this.setData({
      verifyCode: e.detail.value
    })
  },
  //获取验证码
  verifyCodeHandle: function () {
    if (this.data.mobile == '') {
      wx.showToast({
        title: '请填写手机号',
        icon: 'none'
      })
      return;
    }
    wx.request({
      url: app.globalData.URL +'/account/sendMessage', 
      data: {
        mobile: this.data.mobile
      },
      success: function (res) {
        if(res.data.code==200){
          wx.showToast({
            title: '发送成功',
            icon: 'none'
          })
        }else {
          wx.showToast({
            title: '发送失败',
            icon: 'none'
          })
        }
      },
      fail: function (err) {
        wx.showToast({
          title: '请稍后再试',
          icon: 'none'
        })
      },
    })
  },
})