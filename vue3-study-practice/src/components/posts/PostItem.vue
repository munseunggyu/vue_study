<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ content }}</p>
    <p class="text-muted">
      {{ createAt }}
    </p>
    <button @click.stop="$emit('modal')">😎</button>
  </AppCard>
</template>

<script setup>
import AppCard from "@/components/AppCard.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: [String, Date, Number],
  },
});

defineEmits(["modal"]);
</script>

<style lang="scss" scoped></style>
