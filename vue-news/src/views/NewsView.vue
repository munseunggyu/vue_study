<template>
  <div>
    <div v-for="news in this.$store.state.news" v-bind:key="news.id">
      {{ news.title }}
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
    const currentUrl = this.$route.fullPath;
    this.$store.dispatch("FETCH_DATA", currentUrl);
  },
};
</script>

<style></style>
