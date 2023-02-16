<template>
  <div>
    <section>
      <div>
        <div>
          <router-link :to="`/user/${fetchItem.user}`">
            user: {{ fetchItem.user }}
          </router-link>
        </div>
        <h2>
          {{ fetchItem.title }}
        </h2>
      </div>
    </section>
    <section>
      <div v-html="fetchItem.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      fetchItem: "fetchItem",
    }),
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  },
};
</script>

<style></style>
