<template>
  <form @submit.prevent="handleCreateTodo">
    <label for="title">제목: </label>
    <input type="text" v-model="title" />
    <br />
    <label for="conent">내용: </label>
    <textarea
      name="content"
      id="content"
      cols="30"
      rows="10"
      v-model="content"
    ></textarea>
    <br />
    <button>추가</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    handleCreateTodo() {
      this.$store.dispatch("addTodo", {
        title: this.title,
        content: this.content,
      });
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style></style>
