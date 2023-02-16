<template>
  <div>
    <div v-for="ask in this.$store.state.ask" v-bind:key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    const currentUrl = this.$route.fullPath;
    this.$store.dispatch("FETCH_DATA", currentUrl);
  },
};
</script>

<style></style>
