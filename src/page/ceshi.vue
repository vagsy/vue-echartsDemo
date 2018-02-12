<template lang="html">
  <div class="ceshi">
    <input type="text" id="inputPhone" placeholder="手机号" v-model="userData.userPhone" ref="phone">
      <button class="btn btn-info sign-button submit" type="button" name="button" @click="loginFun">登录</button>
  </div>
</template>

<script>
export default {
    methods: {
        //点击登录页面中的登录按钮，实现用户登录
        loginFun: function() {
            var userPhone = this.$refs.phone.value;
            console.log(userPhone);
        }
    },
    data() {
        return {
            userData: {
                userPhone: '15388646322',
                passWord: 'yy1028'
            }
        }
    }
}
</script>

<style lang="css">
</style>
