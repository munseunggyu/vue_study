<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
import { bus } from "../utils/bus";

// import { mapState } from "vuex";
export default {
  components: {
    ListItem,
  },
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
  created() {
    bus.$emit("start:spinner");
    const currentUrl = this.$route.fullPath;
    this.$store
      .dispatch("FETCH_DATA", currentUrl)
      .then(() => {
        bus.$emit("end:spinner");
      })
      .catch((error) => console.log(error));
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
