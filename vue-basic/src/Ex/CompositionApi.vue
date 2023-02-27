<template>
  <div>
    <h2>Reactive Message</h2>
    <p>
      {{ reactiveMessage }}
    </p>
    <button @click="addHi">click</button>
    <h2>Nomal Message</h2>
    <p>
      {{ nomalMessage }}
    </p>
    <button @click="addHey">click</button>
  </div>
</template>

<script>
import { ref, isRef, onMounted, onBeforeMount } from "vue";
export default {
  setup() {
    console.log("setup");
    const reactiveMessage = ref("Reactive Message");
    const addHi = () => {
      reactiveMessage.value = reactiveMessage.value + " hi";
    };
    console.log("isRef(reactiveMessage): ", isRef(reactiveMessage));

    let nomalMessage = "Nomal Message";
    const addHey = () => {
      nomalMessage = nomalMessage + " hey";
    };
    console.log("isRef(nomalMessage): ", isRef(nomalMessage));

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    return {
      reactiveMessage,
      addHi,
      addHey,
      nomalMessage,
    };
  },
};
</script>

<style></style>
