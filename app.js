/*app.js
 * App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。整个小程序只有一个App实例，是全部页面共享的
 */
App({
  //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function () {
    
  },
  //当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow:function(res){
    console.log(res)
   
  },
  
  globalData: {
    URL:'http://noda.cn/index.php/api',
    userInfo:{
      isLogin:false
    }
  },
 
})