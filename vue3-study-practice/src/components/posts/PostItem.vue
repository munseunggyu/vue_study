<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ content }}</p>
    <p class="text-muted">
      {{ createDate }}
    </p>
    <button @click.stop="$emit('modal')">😎</button>
    <button @click.stop="$emit('preview', id)">🧐</button>
  </AppCard>
</template>

<script setup>
import { computed, inject } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  createAt: {
    type: [String, Date, Number],
  },
});
const emit = defineEmits(["modal", "preview"]);

const dayjs = inject("dayjs");
const createDate = computed(() => {
  return dayjs(props.createAt).format("YYYY. MM. DD HH:mm:ss");
});
</script>

<style lang="scss" scoped></style>
