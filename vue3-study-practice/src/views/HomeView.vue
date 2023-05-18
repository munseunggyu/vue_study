<template>
  <div class="center">
    <h1 class="hey">Home</h1>
    {{ $person.name }}
    {{ person.name }}
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard> {{ item }} </AppCard>
    </AppGrid>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$person.name);
    this.$person.say();
  },
};
</script>

<script setup>
import { inject, ref } from "vue";

const items = ref(["사과", "딸기", "배", "포도", "귤"]);

const person = inject("person");
console.log(person.name, "inject");
</script>

<style lang="scss" scoped></style>
