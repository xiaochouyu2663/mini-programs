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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getSystemInfo({
      success: function (res) {
        console.log('系统信息',res)
      }
    })
    
  },
  //购物车编辑
  editHandle: function () {
    this.setData({
      editState: !this.data.editState
    })
  },
  toSettlement: function (){
    wx.navigateTo({
      url: '/pages/shopping-cart/shopcart-settlement'
    })
  }
})