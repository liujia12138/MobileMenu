// miniprogram/pages/mymenu/add/add.js
Page({

  data: {
    types: [{
      type: 1,
      name: "主食"
    }, {
      type: 2,
      name: "菜"
    }, {
      type: 3,
      name: "汤"
    }, {
      type: 4,
      name: "甜品"
    }],
    array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    addform: {
      name: "",
      type: 1,
      material: ""
    }
  },

  onLoad: function (options) {

  },
  bindPickerChange(e) {
    console.log(e)
    this.data.addform.type = Number(e.detail.value)+1
    this.setData({
      index: e.detail.value
    })
  },
  bindNameInput(e){
    this.data.addform.name = e.detail.value
  },
  bindMaterialInput(e){
    this.data.addform.material = e.detail.value
  },
  save(){
    const data = this.data.addform;
    if(!data.name){
      wx.showToast({
        title: "请输入名称",
        icon: "none"
      })
    }else if(!data.material){
      wx.showToast({
        title: "请输入需要的材料",
        icon: "none"
      })
    }else{
      console.log(data)
    }
  }
})