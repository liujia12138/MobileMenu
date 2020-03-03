import request from '../util/request.js'

const _request = new request();
function focusList(){
  _request.getRequest("/", {page: 0}).then(res => {
    console.log("aaa")
  }).catch(res => {
    console.log("bbb")
  })
  return [
    {
      avatarUrl:"../../images/avatar/img1.jpg",
      username: "李明",
      title: "aaaaatitle",
      content: "这些庞大的动物在找食物时用他们的头像犁一样将雪推到一边。",
      favour: 24,
      comment: 3,
      collect: 20,
      sort: 0
    }
  ]
}

function focus2(){
  return wx.request({
    url: "https://chogath.top",
    type: "get"
  })
}

module.exports= {
  focusList: focusList,
  focus2: focus2
}