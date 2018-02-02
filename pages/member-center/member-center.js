var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{
      headImg:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    },
    orderList:[
      {
        type:1,
        name:'待付款',
        icon:'/static/icon_s1.png',
        num:1
      },
      {
        type: 2,
        name: '待收货',
        icon: '/static/icon_s2.png',
        num: 0
      },
      {
        type: 3,
        name: '待自提',
        icon: '/static/icon_s3.png',
        num: 5
      },
      {
        type: 4,
        name: '待评价',
        icon: '/static/icon_s4.png',
        num: 3
      },
      {
        type: 5,
        name: '售后',
        icon: '/static/icon_s5.png',
        num: 4
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo');
    console.log(userInfo)
    // 
    







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
  
  }
})