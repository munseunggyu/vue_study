<template>
  <select
    name="category"
    id="category"
    v-model="category"
    @change="changeCategroy"
  >
    <option value="all">전체</option>
    <option value="complete">완료</option>
    <option value="incomplete">미완료</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      category: "all",
    };
  },
  methods: {
    changeCategroy() {
      this.$store.commit("changeCategory", this.category);
    },
  },
};
</script>

<style></style>
