<template>
  <form>
    <div class="row g-3">
      <div class="col">
        <input
          @input="$emit('update:title', $event.target.value)"
          :value="title"
          type="text"
          class="form-control"
        />
      </div>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  title: {
    typeof: String,
  },
});
defineEmits(["update:title"]);
</script>

<style lang="scss" scoped></style>
