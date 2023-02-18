<template>
  <div><input type="checkbox" @click="changeCheck" />눌러 {{ value }}</div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    changeCheck(e) {
      console.log(e.target.value);
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style></style>
