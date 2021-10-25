import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 按需引入element-ui
import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
