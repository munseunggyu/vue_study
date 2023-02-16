<template>
  <div>
    <div v-for="ask in fetchedAsk" v-bind:key="ask.id">
      <router-link :to="`/item/${ask.id}`">
        {{ ask.title }}
      </router-link>
      <small> {{ ask.time_ago }} by {{ ask.user }} </small>
    </div>
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

<style></style>
