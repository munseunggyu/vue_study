<template>
  <div>
    <user-profile :userInfo="fetchUser">
      <div slot="username">username: {{ fetchUser?.id }}</div>
      <template slot="time">
        {{ fetchUser?.created }}
      </template>
    </user-profile>
    <!-- <p>name: {{ fetchUser?.id }}</p>
    <p>created: {{ fetchUser?.created }}</p>
    <p>karma: {{ fetchUser?.karma }}</p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
import { DetailItem } from "../mixins/DetailItem";

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters({
      fetchUser: "fetchUser",
    }),
  },
  mixins: [DetailItem("FETCH_USER")],
  // created() {
  //   const id = this.$route.params.id;
  //   this.$store.dispatch("FETCH_USER", id);
  // },
};
</script>

<style></style>
