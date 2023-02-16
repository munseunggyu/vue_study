<template>
  <div>
    <p>name: {{ fetchUser.id }}</p>
    <p>created: {{ fetchUser.created }}</p>
    <p>karma: {{ fetchUser.karma }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchUser: "fetchUser",
    }),
  },
  created() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", id);
  },
};
</script>

<style></style>
