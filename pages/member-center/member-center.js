var app = getApp()
Page({
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
  logoff:function(){
    wx.removeStorageSync('userInfo');
    app.globalData.userInfo ={};
    wx.redirectTo({
      url: "/pages/login/login"
    })
  }

 
})