<template>
  <div>
    <div v-for="news in fetchedNews" v-bind:key="news.id">
      <a v-bind:href="news.url">
        {{ news.title }}
      </a>
      <small>
        {{ news.time_ago }} by
        <router-link :to="`/user/${news.user}`"> {{ news.user }} </router-link>
      </small>
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
