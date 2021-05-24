// pages/start/time.js
var util=require('../../utils/util.js')
const  db=wx.cloud.database()

var myDate = new Date(); 
var data=myDate.toLocaleDateString();//可以获取当前日期
var time=myDate.toLocaleTimeString(); //可以获取当前时间


Page({

  /**
   * 页面的初始数据
   */
  data: {
    setTime:''

  },
setTime:function(e){
    const _ = db.command
    var TIME = util.formatTime(new Date());
    var usrdata={};
    db.collection('demodata').where({name:"茗"})
    .update({
      data:{
       startTime:TIME
      }
      }).then(
        wx.showToast({
          //icon:none,
          title: '开始打卡成功',
      }) )
      success:res=>{
        wx.navigateTo({
        url: '../index1/demo1',
    })}
  
     
      

      

    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})