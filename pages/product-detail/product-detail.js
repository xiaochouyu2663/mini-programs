const app = getApp()
Page({
  data: {
    productInfo:{
      id:1231,
      name: 'Huile Olive 食用橄榄油',
      price:'92342.00',
      original:'923422.00',
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
    ],
    attrPopup:{
      visible:false
    }
  },
  onLoad:function(option){
    // if(option.oid)
    this.productDetail(101)
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
  },
  //attr-popup弹出效果
  popupShow:function(){
    this.setData({
      'attrPopup.visible':true
    })
  },
  popupHide: function (e) {
    //判断事件源组件
    if (e.target.id == 'attr-popup' || e.target.id =='attr-popup-close'){
      this.setData({
        'attrPopup.visible': false
      })
    }
  },
  productDetail: function (oid) {
    var self = this;
    wx.request({
      url: app.globalData.URL + '/api/products/SingleDetail',
      data:{oid,oid},
      success: function (res) {
        console.log(res)
        self.setData({
          'productInfo.id':res.data.data.Id,
          'productInfo.name': res.data.data.ProductName,
          'productInfo.price': res.data.data.MarketPrice,
          'productInfo.original': res.data.data.CurrentPrice,
          'productInfo.sales': res.data.data.Id,
          'productInfo.imgUrl': app.globalData.URL+'/'+ res.data.data.ImgPath,
        })
      }
    });

  },
})