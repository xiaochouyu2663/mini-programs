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
    hasData:true,
    nowPage:1,
    pageCount:10
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
    console.log('Do something when pull down.');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    if(that.data.hasData==true){
      that.setData({
        nowPage: that.data.nowPage + 1
      })
      wx.request({
        url: app.globalData.URL + '/partner/partnerFirst',
        data: {
          nowPage: that.data.nowPage,
          pageCount: that.data.pageCount
        },
        dataType: 'json',
        success: function (res) {
          if (res.data.code == 200) {
            that.setData({
              partnerList: that.data.partnerList.concat(res.data.data.map((item) => {
                switch (item.level) {
                  case 0:
                    var leveldes = '初级会员'
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
              }))
            })
          }else{
            that.setData({
              hasData:false
            })
          }
        }
      })
    }
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