<template>
  <div>
    <div v-for="news in this.$store.state.news" v-bind:key="news.id">
      {{ news.user }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style></style>
