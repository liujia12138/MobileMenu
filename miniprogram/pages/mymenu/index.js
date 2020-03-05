// miniprogram/pages/mymenu/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [{
      id: 1,
      name: "蛋炒饭",
      type: "1",
      material: "鸡蛋，米饭，葱姜蒜...",
    }, {
      id: 2,
      name: "红烧肉",
      type: "2",
      material: "五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖",
    }, {
      id: 1,
      name: "羊肉焖饭",
      type: "1",
      material: "羊肉，土豆，胡萝卜，米饭，葱姜蒜...",
      pic: "../../images/imgs/img3.jpg"
    }, {
      id: 2,
      name: "红烧肉",
      type: "2",
      material: "五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖",
    }, {
      id: 1,
      name: "蛋炒饭",
      type: "1",
      material: "鸡蛋，米饭，葱姜蒜...",
    }, {
      id: 2,
      name: "红烧肉",
      type: "2",
      material: "五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖",
    }, {
      id: 1,
      name: "蛋炒饭",
      type: "1",
      material: "鸡蛋，米饭，葱姜蒜...",
    }, {
      id: 2,
      name: "红烧肉",
      type: "2",
      material: "五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖",
    }, {
      id: 1,
      name: "蛋炒饭",
      type: "1",
      material: "鸡蛋，米饭，葱姜蒜...",
    }, {
      id: 2,
      name: "红烧肉",
      type: "2",
      material: "五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖",
    }, {
      id: 1,
      name: "蛋炒饭",
      type: "1",
      material: "鸡蛋，米饭，葱姜蒜...",
    }, {
      id: 2,
      name: "红烧肉",
      type: "2",
      material: "五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖,五花肉，老抽，玉米油，葱姜蒜，糖",
    }],
    menuType: [{
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
    }]
  },

  onLoad: function(options) {
    this.gitTypename();
  },
  gitTypename() {
    const menuList = this.data.menuList
    if (menuList) {
      menuList.forEach(item => {
        this.data.menuType.forEach(type => {
          if (item.type == type.type) {
            item.typename = type.name
          }
        })
      });
      this.setData({
        menuList
      });
    }

  },
  detail(){
    
  }
})