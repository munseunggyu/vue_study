<template>
  <AppModal :title="'게시글'" v-model="show" :show="show" @click="closeModal">
    <template #default>
      <div class="row g-3">
        <div class="col-3">제목</div>
        <div class="col-9">{{ title }}</div>
        <div class="col-3">내용</div>
        <div class="col-9">{{ content }}</div>
        <div class="col-3">등록일</div>
        <div class="col-9">{{ createAt }}</div>
      </div>
    </template>
    <template #actions>
      <button type="button" class="btn btn-primary" @click="closeModal">
        close
      </button>
    </template>
  </AppModal>
</template>

<script setup>
import AppModal from "@/components/AppModal.vue";
import { computed } from "vue";

const props = defineProps({
  modelVale: Boolean,
  title: String,
  content: String,
  createAt: [String, Number],
  show: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const show = computed({
  get() {
    return props.modelVale;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const closeModal = () => {
  show.value = false;
};
</script>

<style lang="scss" scoped></style>
