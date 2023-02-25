<template>
  <div>
    <h2>
      V if
    </h2>
    <ul>
      <li v-if="type === 'a'">A</li>
      <li v-else-if="type === 'b'">B</li>
      <li v-else-if="type === 'c'">C</li>
      <li v-else>No</li>
    </ul>
    <button @click="type='a'">A</button>
    <button @click="type='b'">B</button>
    <button @click="type='c'">C</button>
    <button @click="type='d'">No</button>
  </div>
</template>

<script>
import { ref } from "vue";

// v-for, v-if는 함께 사용하는 것을 권장하지 않는다.
export default {
  setup() {
    const type = ref('a')

    return {
      type
    };
  },
};
</script>

<style scoped>
.클래스명{
  color: burlywood;
}
</style>
