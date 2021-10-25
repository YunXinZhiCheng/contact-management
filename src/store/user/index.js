// 常量
const REGISTER = 'REGISTER' // 这是注册

export default {
  state: {},
  mutations: {
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
  },
  actions: {
    // payload 是待会用户在页面传过来的
    register({ commit }, payload) {
      commit(REGISTER, payload)
    },
  },
}
