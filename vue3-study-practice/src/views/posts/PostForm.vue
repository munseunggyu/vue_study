<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        class="form-control"
        id="title"
        placeholder="제목"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
      />
    </div>
    <div class="mb-3">
      <label for="contents" class="form-label">내용</label>
      <textarea
        class="form-control"
        id="contents"
        rows="3"
        placeholder="내용"
        :value="content"
        @input="$emit('update:content', $event.target.value)"
      ></textarea>
    </div>
    <slot name="actions"> </slot>
  </form>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});

defineEmits(["update:title", "update:content"]);
</script>

<style lang="scss" scoped></style>
