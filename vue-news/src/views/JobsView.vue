<template>
  <div>
    <div v-for="jobs in this.$store.state.jobs" v-bind:key="jobs.id">
      {{ jobs.title }}
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
