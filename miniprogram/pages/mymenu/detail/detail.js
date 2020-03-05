// miniprogram/pages/mymenu/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: ""
  },

  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  },
  remove(){
    const thisId = this.data.id;
    wx.showModal({
      title: '提示',
      content: '确定删除该菜单吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})