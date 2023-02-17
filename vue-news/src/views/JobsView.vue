<template>
  <div>
    <ul class="news-list">
      <li v-for="jobs in fetchedJobs" v-bind:key="jobs.id" class="post">
        <div class="points">
          {{ jobs.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a :href="jobs.url">
              {{ jobs.title }}
            </a>
          </p>
          <small class="link-text">
            {{ jobs.time_ago }} by
            <a :href="jobs.url">
              {{ jobs.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
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

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
