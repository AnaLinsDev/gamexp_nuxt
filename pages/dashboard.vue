<template>
  <v-card>
    <LoginForm v-if="isLogin" />
    <RegisterForm v-else />

    <span v-if="isLogin">
      Dont have an account yet ? Go to
      <span @click="changePageType"> Register </span>
    </span>
    <span v-else>
      Already have an account ? Go to
      <span @click="changePageType"> Login </span>
    </span>
  </v-card>
</template>

<script>

export default {
  components: { LoginForm, RegisterForm },

  data() {
    return {
      isLogin: true,
    };
  },

  methods: {
    changePageType() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>

<style></style>
