// pages/member-center/mypartner.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:{
      current: true,
      pagination: 0
    },
    partnerList: [
    ],
    nowPage:1,
    pageCount:13
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.URL +'/partner/partnerFirst',
      data:{
        nowPage: that.data.nowPage,
        pageCount: that.data.pageCount
      },
      dataType: 'json',
      success:function(res){
        console.log(res.data)
        if (res.data.code==200){
          that.setData({
            partnerList: res.data.data.map((item) => {
              switch (item.level){
                case 0:
                var leveldes='初级会员'
                break;
                case 1:
                  var leveldes = '一级微商'
                  break;
                case 2:
                  var leveldes = '二级微商'
                  break;
                default:
                  break;
              }
              return {
                level: leveldes,
                mobile: item.mobile,
                addTime: item.addTime,
                imgUrl: ''
              }
            })
          })
        }
        
        
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
  //改变tab样式
  tipTab: function(){
    this.setData({
      "tab.current": !this.data.tab.current,
      "tab.pagination": Number(this.data.tab.current) * 50
    })
   
  }
})