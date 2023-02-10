<template>
  <header>
    <h1>Header</h1>
    {{ propsdata }}
    <button v-on:click="sendEvt">send</button>
  </header>
</template>

<script>
export default {
  props: ["propsdata"],
  methods: {
    sendEvt: function () {
      this.$emit("renew");
    },
  },
};
</script>

<style></style>
