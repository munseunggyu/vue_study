<template>
  <nav class="mt-3" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="isPrevPage">
        <a class="page-link" @click.prevent="$emit('page', currentPage - 1)"
          >Previous</a
        >
      </li>
      <li
        v-for="(page, index) in pageCount"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <button class="page-link" @click="$emit('page', page)">
          {{ index + 1 }}
        </button>
      </li>

      <li class="page-item" :class="isNextPage">
        <a
          class="page-link"
          @click.prevent="$emit('page', currentPage + 1)"
          href="#"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
});
defineEmits(["page"]);
const isPrevPage = computed(() => {
  return { disabled: props.currentPage < props.pageCount };
});
const isNextPage = computed(() => {
  return { disabled: props.currentPage > props.pageCount };
});
</script>

<style lang="scss" scoped></style>
