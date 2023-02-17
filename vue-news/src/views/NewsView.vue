<template>
  <div>
    <ul class="news-list">
      <li v-for="news in fetchedNews" v-bind:key="news.id" class="post">
        <div class="points">
          {{ news.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="news.url">
              {{ news.title }}
            </a>
          </p>
          <small class="link-text">
            {{ news.time_ago }} by
            <router-link class="link-text" :to="`/user/${news.user}`">
              {{ news.user }}
            </router-link>
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
      fetchedNews: "fetchedNews",
    }),
  },
  created() {
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
