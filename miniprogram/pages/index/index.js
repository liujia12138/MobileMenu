//index.js
const app = getApp()
import {
  focusList,
  focus2
} from "../api/index.js"
Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
    swiperClass: "index-tab-swiper",
    activeTab: 0,
    dataList: null,
    itemHieght: 756,
    swiperHeight: 0
  },
  onLoad() {
    this.getFocus();
    const titles = ['关注', '我的一周食谱']
    const tabs = titles.map(item => ({
      title: item
    }))
    this.setData({
      tabs
    });

  },
  methods: {

  },
  getFocus() {
    app.api.getRequest("/imenu-api/meals/find", {
      index: 1,
      size:10
    }).then(res => {
      if(res.data.code === 200){
        const dataList = res.data.data.list;
        const swiperHeight = this.data.itemHieght * dataList.length;
        this.setData({
          dataList,
          swiperHeight: this.data.itemHieght * dataList.length + "rpx"
        });
      }else{

      }

    }).catch(res => {
      const dataList = [{
        avatarUrl: "../../images/avatar/img1.jpg",
        username: "乐悠厨房",
        title: "羊肉焖饭",
        content: "这道羊肉焖饭米粒分明，羊肉香而不膻，鲜嫩可口，再加上土豆和萝卜这些配菜，美味至极，可以说连吃三碗都不过瘾。亲们有机会一定要试试看哦",
        pics: ["../../images/imgs/img3.jpg", "../../images/imgs/img4.jpg"],
        favour: 24,//点赞
        comment: 3,//评论
        collect: 20,//收藏
        sort: 0
      }, {
        avatarUrl: "../../images/avatar/img2.png",
        username: "李明1",
        title: "aaaaa这个是title1",
          content: "这些庞大的动物在找食物时用他们的头像犁一样将雪推到一边。如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。",
        pics: ["../../images/imgs/img3.jpg", "../../images/imgs/img4.jpg"],
        favour: 24,
        comment: 3,
        collect: 20,
        sort: 0
        }, {
          avatarUrl: "../../images/avatar/img2.png",
          username: "李明1",
          title: "aaaaa这个是title1",
          content: "这些庞大的动物在找食物时用他们的头像犁一样将雪推到一边。如果在 bindchange 的事件回调函数中使用 setData 改变 current 值，则有可能导致 setData 被不停地调用，因而通常情况下请在改变 current 值前检测 source 字段来判断是否是由于用户触摸引起。",
          pics: ["../../images/imgs/img3.jpg", "../../images/imgs/img4.jpg"],
          favour: 24,
          comment: 3,
          collect: 20,
          sort: 0
      }];
      const swiperHeight = this.data.itemHieght * dataList.length;
      this.setData({
        dataList,
        swiperHeight: this.data.itemHieght * dataList.length + "rpx"
      });
    })
  },
  onTabCLick(e) {
    const index = e.detail.index;
    this.setData({
      activeTab: index
    });
  },
  onChange(e) {
    const index = e.detail.index
    this.setData({
      activeTab: index
    })
  }
})