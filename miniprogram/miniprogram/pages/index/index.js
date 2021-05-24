const  db=wx.cloud.database()//连接数据库了 const=val

Page({

  /**
   * 页面的初始数据
   */
  data: {
    datainfo1:""
  
  },
 setTime(){
  //指定数据库的名字
  /*db.collection("demodata").get({//查询
    success:res=>{
      console.log(res)
      this.setData({
        datainfo:res.data
      }
      )
    }
  })*/
//.doc()只能放随机生成的id
 db.collection("demodata").where({
    name:"韩茗"
  }).get()
  .then(res=>{
    console.log(res)
    this.setData({
      datainfo1:res.data
    })
  })
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