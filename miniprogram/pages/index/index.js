//index.js
const app = getApp()

Page({
  data: {
    nbFrontColor: '#000000',
    nbBackgroundColor: '#ffffff',
  },
  onLoad() {
    const titles = ['关注', '我的一周食谱']
    const tabs = titles.map(item => ({ title: item }))
    this.setData({ tabs })
  },

  onTabCLick(e) {
    const index = e.detail.index;
    this.setData({ activeTab: index });
    console.log("index", index)

  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ activeTab: index })
  }
})