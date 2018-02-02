// pages/product-detail/product-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productInfo:{
      id:1231,
      name: 'Huile Olive 食用橄榄油',
      price:'92342.00',
      integral:'2323.00',
      RMB:'23',
      sales:1231313,
      yeright:'1.00',
      imgUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    },
    productTab:{
      select:true,
      tip:'商品详情',
      x:'0',
      classname:'active'
    },
    evaluate:[
      {
        username:'用户1',
        prias:3,
        content:'撒啊发卡方就是奖励积分；啊',
        imgUrl:null,
        time:'2018-12-2 12:33'
      },
      {
        username: '用户2',
        prias: 1,
        content: '撒啊发卡方就是奖励积分；啊撒啊发卡方就是奖励积分；啊撒啊发卡方就是奖励积分；啊',
        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        time: '2018-1-2 12:33'
      },
      {
        username: '用户1',
        prias: 5,
        content: 'sdfsfsfdsfsdfds',
        imgUrl: null,
        time: '2018-1-2 12:33'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  //点击商品详情效果
  selectDetail:function(){
    this.setData({
      'productTab.select': true,
      'productTab.tip':'商品详情',
      'productTab.x': '0'
    })
    
  },
  //点击商品评价效果
  selectEvaluate:function(){
    this.setData({
      'productTab.select':false,
      'productTab.tip': '商品评价',
      'productTab.x': '50%'
    })
  }
})