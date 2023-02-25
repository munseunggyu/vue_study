<template>
  <div></div>
</template>

<script>
import { reactive, readonly } from "vue";

export default {
  setup() {
    const original = reactive({
      count: 0,
    });
    const copy = readonly(original);
    original.count++;
    console.log(original.count);
    copy.count++;
    console.log(copy.count);
    return {};
  },
};
</script>

<style></style>
