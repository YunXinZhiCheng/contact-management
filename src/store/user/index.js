// 常量
const REGISTER = 'REGISTER' // 这是注册
const SIGN_IN = 'SIGN_IN' // 这是登录

export default {
  state: {},
  mutations: {
    // 注册
    [REGISTER](state, payload) {
      //   console.log(payload)

      // 本地存储 判断不允许重复注册
      var b = 0

      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf('user') != -1) {
          if (
            JSON.parse(localStorage.getItem(localStorage.key(i))).name ==
            payload.name
          ) {
            b = 1
            break
          }
        }
      }

      if (b == 0) {
        localStorage.setItem(
          'user' + localStorage.length,
          JSON.stringify(payload)
        )

        sessionStorage.register = 1
      } else {
        sessionStorage.register = 0
      }
    },

    // 登录
    [SIGN_IN](state, user) {
      // 登录的逻辑
      // 存储user
      var localUser = ''
      var f = 0
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf('user') != -1) {
          if (
            JSON.parse(localStorage.getItem(localStorage.key(i))).name ==
            user.name
          ) {
            localUser = JSON.parse(localStorage.getItem(localStorage.key(i)))
            f = 1
            break
          }
        }
      }
      
      if (f == 1 && user.psw === localUser.psw) {
        sessionStorage.login = 1
        sessionStorage.user = JSON.stringify(localUser)
        sessionStorage.userId = localStorage.key(i)
      } else {
        sessionStorage.login = 0
      }
    },
  },
  actions: {
    // payload 是待会用户在页面传过来的

    // 注册
    register({ commit }, payload) {
      commit(REGISTER, payload)
    },

    // 等
    signIn({ commit }, user) {
      commit(SIGN_IN, user)
    },
  },
}
