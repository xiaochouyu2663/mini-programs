//index.js
//获取应用实例
const app = getApp()

Page({
  //参与页面渲染的数据
  data: {
    swiper:{
      autoplay:true,
      'indicator-color': '#898989',
      'indicator-active-color': '#be0000',
      'indicator-dots':true,
      interval:2000,
      sliders: [
        
      ]
    },
    advertise:{
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    },
    hotProducts:[
      {
        imgUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name:'Huile Olive 食用橄榄油',
        price:'23.00',
        integral:'900',
        classname:'goods_even'
      },
      {
        imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: 'Huile Olive 食用橄榄油',
        price: '23.00',
        integral: '900',
        classname: 'goods_odd'
      },
      {
        imgUrl: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: 'Huile Olive 食用橄榄油ssss',
        price: '23.00',
        integral: '900',
        classname: 'goods_even'
      },
      {
        imgUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: 'Huile Olive 食用橄榄油',
        price: '23.00',
        integral: '900',
        classname: 'goods_odd'
      }
    ],
    banner:{
      src:'/pages/product-detail/product-detail',
      imgUrl:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    },
    
  },
  //页面渲染后执行
  onLoad:function(){
    var self = this;
    wx.request({
      url: app.globalData.URL+'/api/products/banners', 
      success: function (res) {
        self.setData({
          'swiper.sliders':res.data.data.map((item)=>{
            return {
              id: item.ProductId,
              imgUrl: app.globalData.URL + '/' + item.Path
            }
          })
        })
        // console(self.data.swiper.sliders)
      }
    });

    
  },
  onPullDownRefresh: function(){
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },3000)
  }
})
