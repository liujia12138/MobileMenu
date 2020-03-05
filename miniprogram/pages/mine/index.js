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
    const user = wx.getStorageSync('userIdEnc');
    wx.login({
      success(res) {
        if (res.code) {
          self.code = res.code;
          self.wxGetUserInfo(res.code);
        }
      },
    });
    const data = {
      code: "0435m1ey0wagdb1FmDdy0snaey05m1e4",
      encryptedData: "pJrsa/NmLQJEXxSDbb12YLM4A+udD9Ym5lYlCr4LSDmnS+OF/35W2j6YDYgasJZ9WwBYJOcnd4ayMe6Ngk/7AMxYGK2EoLPikAPiEnCgxS/vqDTB5RiazRMnPOtmfeE0Q3KFIzRfHDjN9GOgmC4ozcTCPMvaUD7A5cHk4JDFzcTLnPM6of2Kg/PJE+OQP1ZbN8QpERm92sk26P8oMeZGEbBiva7SD0xla/GTsq1UypFL3yEQHVuaBYXc2jlAN+w0FtJoxfdUqNOqpKRlyQ6SQbyXzOZkI+AV+y6RbLw2ASJUGjzRM127PnrSTwte9/zofpNXMNQ/9t1liCdm5poGx0ZAMu3Tlx5UQJ780+KEo444Udh8iRZASprOIX50Ar7IuMYlYROM0QWQ6xv7ZXwucKsU7rqtLJhcScJ1tuIr3CEiyOP6jpDkq3dkgorgJLLcT3BdhOfsb+ymj9PApmpeeD7zZLvTEDUFERl1tDkK+X4=",
      iv: "bHj2CujnytSWauUmWWutjA=="
    }
    if (user) {
      this.setData({
        user: JSON.parse(user)
      });
    }
  },

  getUser(e) {
    const self = this;
    var userinfos = e.detail.userInfo;
    if (userinfos) {
      this.setData({
        user: userinfos
      });
      wx.setStorageSync('userIdEnc', JSON.stringify(userinfos));
      let {
        encryptedData,
        userInfo,
        iv
      } = e.detail;
      app.api.postRequest("/imenu-api/login", {
        code: self.code,
        encryptedData,
        iv
      }).then((res) => {
        //token

      }).catch((res) => {
        console.log(res, "err")
      })
    } else {
      console.log('用户按了拒绝按钮');
    }
  },

  wxGetUserInfo(code) {
    const self = this;
    wx.getUserInfo({
      withCredentials: true,
      success(res) {
        let {
          encryptedData,
          userInfo,
          iv
        } = res;
        app.api.postRequest('/imenu-api/login', {
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