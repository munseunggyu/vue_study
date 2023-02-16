<template>
  <div>
    <div v-for="news in fetchedNews" v-bind:key="news.id">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      fetchedNews: "fetchedNews",
    }),
  },
  created() {
    const currentUrl = this.$route.fullPath;
    this.$store.dispatch("FETCH_DATA", currentUrl);
  },
};
</script>

<style></style>
