<template>
  <div class="login">
    <!-- 登录表单 -->
    <form>
      <label for="name">
        <input
          type="text"
          class="input"
          id="name"
          v-model="name"
          placeholder="用户名"
        />
      </label>
      <label for="psw" class="last">
        <input
          type="password"
          class="input"
          id="psw"
          v-model="psw"
          placeholder="密码"
        />
        <em v-show="req">*用户名或密码错误</em>
      </label>

      <!-- 登录按钮 -->
      <button class="loginSub" @click="login" type="button">
        登 录
        <i class="fa fa-spinner fa-spin" v-show="icon"></i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    // 每个组件最最重要的就是data
    return {
      name: '',
      psw: '',
      icon: false,
      req: false,
    }
  },
}
</script>

<style scoped>
@import '../assets/css/login.css';
</style>
