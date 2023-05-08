<template>
  <div class="center">
    <h1 class="hey">Home</h1>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }">
      <AppCard> {{ item }} </AppCard>
    </AppGrid>
  </div>
</template>

<script setup>
import AppCard from "@/components/AppCard.vue";
import AppGrid from "@/components/AppGrid.vue";
import { ref } from "vue";

const items = ref(["사과", "딸기", "배", "포도", "귤"]);
</script>

<style lang="scss" scoped></style>
