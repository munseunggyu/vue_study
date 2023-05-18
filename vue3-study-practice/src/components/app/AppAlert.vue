<template>
  <Transition>
    <div v-if="show">
      <div class="alert app-alert" :class="styleClass" role="alert">
        {{ message }}
      </div>
    </div>
  </Transition>
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
.v-leave-active,
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  opacity: 1;
}
</style>
