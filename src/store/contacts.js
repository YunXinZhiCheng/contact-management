import userImg from '@/assets/img/contact.jpg'
// 用户初始化
const USER_INIT = 'USER_INIT'
var contactId = 0
export default {
  state: {
    items: [], //待会展示通讯录的列表
    own: {} // 用户信息的
  },
  mutations: {
    [USER_INIT] (state, user) {
      state.items = user.items
      state.own = user.own
    }
  },
  actions: {
    userInit ({ commit }) {
      if (sessionStorage.login && sessionStorage.login == 1) {
        // 这里面的数据 我是直接写死的 
        // axios去掉接口实现的 mockjs去模拟
        var items = [
          { name: 'kobe', tel: 1234555656, status: "亲人" },
          { name: 'nic', tel: 1234555656, status: "朋友" },
          { name: 'james', tel: 1234555656, status: "亲人" },
          { name: 'wind', tel: 1234555656, status: "朋友" },
          { name: 'lily', tel: 1234555656, status: "同学" },
          { name: 'paul', tel: 1234555656, status: "亲人" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'chris', tel: 1234555656, status: "亲人" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'tom', tel: 1234555656, status: "同学" },
          { name: 'kevin', tel: 1234555656, status: "亲人" },
        ];

        items = items.filter((item) => {
          item.id = contactId++
          item.imgSrc = userImg
          return item
        })
        localStorage.items = JSON.stringify(items)
        var own = JSON.parse(sessionStorage.user)
        // console.log(own);
        commit(USER_INIT, {
          items: JSON.parse(localStorage.items),
          own
        })

      }
    }

  }
}