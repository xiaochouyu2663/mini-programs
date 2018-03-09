// pages/integral/my-integral.js
Page({
  data: {
    currentIntegral:'consume',
    integralTab:0
  },
  consumeIntegral:function(){
    
    this.setData({
      currentIntegral: 'consume',
      integralTab:0
    })
  },
  withdrawIntegral: function () {
    
    this.setData({
      currentIntegral: "withdraw",
      integralTab: '50%'
    })
  },
  toTransfer :function (){
    wx.navigateTo({
      url: '/pages/integral/integral-transfer'
    })
  },
  toWithdraw: function () {
    wx.navigateTo({
      url: '/pages/integral/integral-withdraw'
    })
  }
})