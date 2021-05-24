// pages/index222/demo2.js
const db=wx.cloud.database()
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    

  },
  //获取输入的账户
getZhangHao(event) {
  
    console.log("账号", event.detail.value)
    app.globalData.zhanghao=event.detail.value
    console.log("账号111", app.globalData.zhanghao)
  },
  //获取输入的密码
  getMiMa(event) {
  
  console.log("密码", event.detail.value)
    app.globalData.mima=event.detail.value
  
  },
  //点击登录
  login() {
    
  let zhanghao = app.globalData.zhanghao
  let mima = app.globalData.mima
  console.log("账户", zhanghao, "密码", mima)
  if (zhanghao.length > 9||zhanghao.length < 9) {
    wx.showToast({
        //icon: none,
        title: '账户要等于9位',
    })
return
}
//校验密码 
if (mima.length < 4) {
    wx.showToast({
        //icon: none,
        title: '密码至少4位',
    })
return
}
// 登录
db.collection("usrinfo").where({
  sno:'211808581'
}).get({
    success:res=> {
        console.log("获取数据成功", res);

        let user=res.data[0]
        console.log("获取数据成功", user);
        console.log("user", user);
        if(mima==user.password){
            console.log("登陆成功")
            wx.navigateTo({
                url: '../start/time',
            })
        }else{
        console.log("登录失败")
            wx.showToast({
                //icon:none,
                title: '账户或密码不正确',
            })
        }
    },
    fail(err) {
        console.log("获取数据失败", err);
    }
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