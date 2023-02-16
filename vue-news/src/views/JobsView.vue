<template>
  <div>
    <div v-for="jobs in fetchedJobs" v-bind:key="jobs.id">
      <a :href="jobs.url">
        {{ jobs.title }}
      </a>
      <small> {{ jobs.time_ago }}, {{ jobs.domain }} </small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      fetchedJobs: "fetchedJobs",
    }),
  },
  async created() {
    const currentUrl = this.$route.fullPath;
    this.$store.dispatch("FETCH_DATA", currentUrl);
  },
};
</script>

<style></style>
