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
      let dispatchName = "";
      if (this.$route.name === "login") {
        dispatchName = "handleSignIn";
      } else {
        dispatchName = "handleSignUp";
      }
      this.$store
        .dispatch(dispatchName, {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.email = "";
          this.password = "";
          this.$router.push("/");
        });
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
