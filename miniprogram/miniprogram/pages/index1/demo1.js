// pages/index1/demo1.js
const  db=wx.cloud.database()
var app=getApp()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    zhanghao1:null,
    startTime:null,
    endTime:'1',
   
    
  },
  collectTime(){
    db.collection('demodata').where({
      sno:'211808581'

    }).get()
    .then(res=>{
      console.log(res.data[0].startTime)
      this.setData({
        startTime:res.data[0].startTime,
        endTime:res.data[0].stopTime
      })
    })
},
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      zhanghao1:app.globalData.zhanghao
  })
},


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    this.setData({
      zhanghao1:app.globalData.zhanghao
  })
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

  }
})