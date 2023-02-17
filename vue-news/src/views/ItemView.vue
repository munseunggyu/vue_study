<template>
  <div>
    <section>
      <user-profile :userInfo="fetchItem">
        <div slot="username">username: {{ fetchItem?.user }}</div>
        <template slot="time">
          {{ fetchItem?.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
      <h2>
        {{ fetchItem?.title }}
      </h2>
    </section>
    <section>
      <div v-html="fetchItem?.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
import { DetailItem } from "../mixins/DetailItem";

export default {
  components: { UserProfile },
  data() {
    return {
      hi: "FETCH_ITEM",
    };
  },
  computed: {
    ...mapGetters({
      fetchItem: "fetchItem",
    }),
  },
  mixins: [DetailItem("FETCH_ITEM")],
  // created() {
  //   const id = this.$route.params.id;
  //   this.$store.dispatch("FETCH_ITEM", id);
  // },
};
</script>

<style></style>
