var app = getApp()
Page({

  
  radioChange: function (e){
    // console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  upload: function (e) {
    wx.chooseImage({
      count: 1, 
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'], 
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: app.globalData.URL +'/account/upload', 
          filePath: tempFilePaths[0],
          name: 'image',
          header: {
            'content-type': 'multipart/form-data'
          },
          formData: {
            'userId': '123'
          },
          success: function (res) {
            console.log('上传图片后返回的res', res)
          }
        })
      }
    })
  },
})