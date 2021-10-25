<template>
  <div id="mailList">
    <div class="head">
      <div class="logo">通讯录后台</div>
      <div class="welcome">
        <span class="name">{{ own.name }}</span>
        ，你好
        <div class="img">
          <img src="../assets/img/contact.jpg" />
        </div>
      </div>
    </div>
    <div class="lside">
      <ul>
        <li :class="{ act: clickId == 1 }" @click="clickId = 1">
          <router-link to="/contacts/index">
            <i class="fa fa-address-book-o"></i>
            通讯录
          </router-link>
        </li>
        <li :class="{ act: clickId == 2 }" @click="clickId = 2">
          <router-link to="/contacts/add">
            <i class="fa fa-reorder"></i>
            添加信息
          </router-link>
        </li>
        <li :class="{ act: clickId == 3 }" @click="clickId = 3">
          <router-link to="/contacts/own">
            <i class="fa fa-user-o"></i>
            个人中心
          </router-link>
        </li>
      </ul>
      <div class="out" @click="loginOut">
        <i class="fa fa-cog"></i>
        退出登录
      </div>
    </div>
    <div class="rside">
      <router-view :items="items" :own="own"></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      clickId: 1,
    }
  },
  computed: mapState({
    own: (state) => state.contacts.own,
    items: (state) => state.contacts.items,
  }),
  methods: {
    ...mapActions(['signOut']),
    loginOut() {
      this.signOut()
      this.$router.replace('/home/login')
    },
  },
  beforeCreate() {
    this.$store.dispatch('userInit')
  },
}
</script>

<style scoped>
@import '../assets/css/mailList.css';
</style>
