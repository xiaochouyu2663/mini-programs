var app=getApp()
Page({
  data: {
    username:'',
    password:''
  },
  //获取用户输入用户名的值
  bindinputUsername:function(e){
    this.setData({
      username:e.detail.value
    })
  },
  //获取用户输入密码的值
  bindinputPassword:function(e){
    this.setData({
      password:e.detail.value
    })
  },
  // 用户登录功能
  loginHandel:function(){
    var reg=/^[1][1,3,4,5,7,8][0-9]{9}$/;
    if (!reg.test(this.data.username)){
      wx.showToast({
        title:'手机号格式不正确',
        icon:'none',
        duration:2000,
      })
      return;
    }
    if(this.data.password.length<6){
      wx.showToast({
        title: '密码不能小于6位',
        icon: 'none',
        duration: 2000,
      })
      return;
    }
    wx.request({
      url: app.globalData.URL+'/account/login',
      method:'GET',
      dataType:'json',
      data:{
        username:this.data.username,
        password:this.data.password
      },
      success: function (res){
        console.log(res)
        if(res.data.code==200){
          
          wx.showToast({
            title: '登录成功',
            icon: 'none',
            success:function(){
              wx.setStorageSync('userInfo', res.data.data);
              wx.switchTab({
                url:'/pages/index/index'
              })
            }
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      },
      fail: function (res){
        wx.showToast({
          title: '请稍后再试',
          icon: 'none'
        })
      }
    })
  }
})