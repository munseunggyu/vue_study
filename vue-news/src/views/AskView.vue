<template>
  <div>
    <ul class="news-list">
      <li v-for="ask in fetchedAsk" v-bind:key="ask.id" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="news-title">
            <router-link :to="`/item/${ask.id}`">
              {{ ask.title }}
            </router-link>
          </p>
          <small class="link-text">
            {{ ask.time_ago }} by
            <router-link class="link-text" :to="`/user/${ask.user}`">
              {{ ask.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapState } from "vuex";
export default {
  computed: {
    // ...mapState({
    //   ask: (state) => {
    //     return state.ask;
    //   },
    // }),
    ...mapGetters({
      fetchedAsk: "fetchedAsk",
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
