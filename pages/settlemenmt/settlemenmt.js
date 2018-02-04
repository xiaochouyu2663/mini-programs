// pages/settlemenmt/settlemenmt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      {
        id: 1231,
        name: 'Huile Olive 食用橄榄油',
        price: '92342.00',
        original: '923422.00',
        integral: '2323.00',
        RMB: '23',
        sales: 1231313,
        yeright: '1.00',
        num: 2,
        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        id: 1231,
        name: 'Huile Olive 食用橄榄油',
        price: '92342.00',
        original: '923422.00',
        integral: '2323.00',
        RMB: '23',
        sales: 1231313,
        yeright: '1.00',
        num: 2,
        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '结算'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#BDD90B',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
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
  
  }
})