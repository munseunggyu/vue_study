<template>
  <div>
    <p>
      {{ this.originPrice }}
    </p>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  computed: {
    // ...mapGetters(["originPrice", "doublePrice", "triplePrice"]),
    originPrice() {
      console.log(this.$store.getters.originPrice);
      return this.$store.getters.originPrice;
    },
  },
};
</script>

<style></style>
