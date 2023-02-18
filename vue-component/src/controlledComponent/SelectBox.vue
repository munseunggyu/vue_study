<template>
  <div>
    <select :value="value" @change="changeSelect" name="category" id="cateogry">
      <option value="all">all</option>
      <option value="complete">complete</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    changeSelect(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style></style>
