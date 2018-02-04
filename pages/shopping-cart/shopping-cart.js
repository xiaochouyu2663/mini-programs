// pages/shopping-cart/shopping-cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[
      {
        name:'洁面凝胶1',
        price:'2342.00',
        integral:'234.00',
        num:3,
        imgUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      },
      {
        name: '洁面凝胶2',
        price: '2.00',
        integral: '234.00',
        num: 1,
        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
      }
    ],
    editState:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideTabBar()
    wx.setNavigationBarTitle({
      title:'购物车'
    })
    wx.setNavigationBarColor({
      frontColor:'#ffffff',
      backgroundColor:'#bdd90a'
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
      }
    })
    
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
  //购物车编辑
  editHandle: function () {
    this.setData({
      editState: !this.data.editState
    })
  }
})