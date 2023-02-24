<template>
  <div>
    <button @click="increment">click</button>
    {{ counter }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;

    return {
      counter,
      increment,
    };
  },
};
</script>

<style></style>
