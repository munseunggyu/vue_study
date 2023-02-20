<template>
  <form @submit.prevent="handleSign">
    <fieldset>
      <legend>
        {{ this.$route.name }}
        <slot name="legendname"> </slot>
      </legend>
      <label for="email">email: </label>
      <input id="email" type="email" v-model="email" />
      <br />
      <label for="password">password: </label>
      <input id="password" type="password" v-model="password" />
      <br />
      <button>회원가입</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSign() {
      if (this.$route.name === "login") {
        this.$store.dispatch("handleSignIn", {
          email: this.email,
          password: this.password,
        });
      } else {
        this.$store.dispatch("handleSignUp", {
          email: this.email,
          password: this.password,
        });
      }

      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
fieldset {
  margin: 10px;
}
label {
  margin: 10px;
}
input {
  margin-top: 10px;
}
</style>
