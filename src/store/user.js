//注册
const REGISTER = 'REGISTER'
// 登录
const LOGIN = 'LOGIN'
// 登出
const LOGINOUT = 'LOGINOUT'
export default {
  state: {},
  mutations: {
    [REGISTER] (state, payload) {

      var b = 0

      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf('user') != -1) {
          if (JSON.parse(localStorage.getItem(localStorage.key(i))).name == payload.name) {
            b = 1;
            break
          }
        }
      }

      if (b == 0) {
        localStorage.setItem('user' + localStorage.length, JSON.stringify(payload))

        sessionStorage.register = 1
      } else {
        sessionStorage.register = 0
      }

    },
    [LOGIN] (state, user) {
      // 存储user
      var localUser = '', f = 0
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).indexOf('user') != -1) {
          if (JSON.parse(localStorage.getItem(localStorage.key(i))).name == user.name) {
            localUser = JSON.parse(localStorage.getItem(localStorage.key(i)))
            f = 1
            break;
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

    [LOGINOUT] () {
      sessionStorage.register = 0
      sessionStorage.login = 0
    }
  },
  actions: {
    register ({ commit }, payload) {

      // console.log(payload);

      commit(REGISTER, payload)
    },
    signIn ({ commit }, user) {
      commit(LOGIN, user)
    },
    signOut ({ commit }) {
      commit(LOGINOUT)
    }
  }
}