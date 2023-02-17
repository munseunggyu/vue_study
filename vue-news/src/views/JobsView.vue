<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem,
  },
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
