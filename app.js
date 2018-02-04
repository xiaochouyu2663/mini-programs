//app.js 整个小程序只有一个App实例，是全部页面共享的
App({
  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
    
  },
  //当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow:function(){
    
  },
  globalData: {
    URL:'http://www.demo.com/index.php/api/',
    userInfo:{
      isLogin:false
    }
  },
 
})