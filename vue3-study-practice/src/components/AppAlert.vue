<template>
  <div v-if="show">
    <div class="alert app-alert" :class="styleClass" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
  typeAlert: {
    type: String,
    default: "error",
  },
});
console.log(props.typeAlert);
const styleClass = computed(() => {
  return props.typeAlert === "error" ? "alert-danger" : "alert-success";
});
</script>

<style lang="scss" scoped>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
