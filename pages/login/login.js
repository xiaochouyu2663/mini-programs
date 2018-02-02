var app=getApp()
// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorageInfo({
      success:function(res){
        console.log(res)
      }
    })
    //在当前页面显示导航条加载动画。
    wx.showNavigationBarLoading()
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#bdd90a',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    wx.setNavigationBarTitle({
      title: '农哒商城登录',
      complete:function(){
        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
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
      url: app.globalData.URL+'account/login',
      method:'GET',
      dataType:'json',
      data:{
        username:this.data.username,
        password:this.data.password
      },
      success: function (res){
        console.log(res)
        if(res.data.code==200){
          app.globalData.userInfo.isLogin=true;

          wx.showToast({
            title: '登录成功',
            icon: 'none',
            duration: 2000,
            success:function(){
              wx.setStorageSync('userInfo', res.data.data);
              wx.switchTab({
                url:'/pages/member-center/member-center'
              })
            }
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000,
          })
        }
      },
      fail: function (res){
        wx.showToast({
          title: '请稍后再试',
          icon: 'none',
          duration: 2000,
        })
        return;
      }
    })
  }
})