<template>
  <ul class="news-list">
    <li v-for="item in listItems" v-bind:key="item.id" class="post">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="item.domain">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
        </p>
        <small class="link-text">
          {{ item.time_ago }} by
          <template v-if="item.user">
            <router-link class="link-text" :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
          </template>
          <template v-else>
            <a :href="item.url">
              {{ item.domain }}
            </a>
          </template>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchedNews: "fetchedNews",
      fetchedAsk: "fetchedAsk",
      fetchedJobs: "fetchedJobs",
    }),
    listItems() {
      const url = this.$route.fullPath;
      if (url === "/news") {
        return this.fetchedNews;
      } else if (url === "/ask") {
        return this.fetchedAsk;
      } else if (url === "/jobs") {
        return this.fetchedJobs;
      }
      return url;
    },
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
