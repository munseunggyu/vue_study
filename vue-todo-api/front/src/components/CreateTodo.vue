<template>
  <form @submit.prevent="handleCreateTodo">
    <label for="title">제목: </label>
    <input type="text" v-model="title" />
    <br />

    <br />
    <button>추가</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    handleCreateTodo() {
      this.$store.dispatch("addTodo", {
        title: this.title,
      });
      this.title = "";
    },
  },
};
</script>

<style></style>
