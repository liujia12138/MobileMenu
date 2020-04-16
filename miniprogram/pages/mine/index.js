const app = getApp()

Page({

  data: {
    user: null,
    menuList: [{
      text: "我的菜单",
      name: "mymenu",
      key: 0,
      icon: "../../images/icon/menu.png",
      router: "../../pages/mymenu/index"
    }, {
      text: "我的收藏",
      name: "mycollect",
      key: 1,
      icon: "../../images/icon/star.png",
        router: "../../pages/mymenu/index"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    const self = this;
    //获取用户信息
    const user = wx.getStorageSync('userIdEnc');
    //用户信息存在，放到data中
    if (user) {
      this.setData({
        user: JSON.parse(user)
      });
      return user;
    }
    //调用wx.login，获取登录凭证code
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res.code, 'code')
          self.code = res.code;
          // self.wxGetUserInfo(res.code);
        }
      },
    });
    
  },

  /**
   *  未登录-点击登录按钮操作
   */
  getUser(e) {
    const self = this;
    var userinfos = e.detail.userInfo;
    if (userinfos) {
      //获取user信息,avatarUrl,nickName...
      this.setData({
        user: userinfos
      });
      //userinfo缓存
      wx.setStorage('userIdEnc', JSON.stringify(userinfos));
      console.log(e, 'e',self)
      //调后端登录接口，获取token
      app.api.postRequest("/auth/miniProgramLogin", {
        code: self.code,
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      }).then((res) => {
        //token
        // wx.setStorage('token', JSON.stringify(userinfos));
      }).catch((res) => {
        console.log(res, "err")
      })
    } else {
      console.log('用户按了拒绝按钮');
    }
  },

  wxGetUserInfo(code) {
    const self = this;
    // wx.getUserInfo获取用户信息
     
    wx.getUserInfo({
      withCredentials: true,
      success(res) {
        let {
          encryptedData,
          userInfo,
          iv
        } = res;
        console.log(res, self.code)
        app.api.postRequest('/', {
          code,
          encryptedData,
          iv,
        }).then(res => {
          console.log(`后台交互拿回数据:`, res);
          // 获取到后台重写的session数据，可以通过vuex做本地保存
        }).catch(err => {
          console.log(`自动请求api失败 err:`, err);
        })
      },
      
      fail(err) {
        console.log('自动wx.getUserInfo失败:', err);
        // 显示主动授权的button
        self.buttonVisible = true;
      }
    })

  },

  // tapmenu(e) {
  //   const key = e.currentTarget.dataset.key;
  //   wx.navigateTo({
  //     url: "../../pages/mymenu/index"
  //   })
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})