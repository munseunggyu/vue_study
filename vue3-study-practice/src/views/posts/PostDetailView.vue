<template>
  <div class="center">
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getPostById } from "@/api/posts";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const props = defineProps({
  id: String,
});
console.log(props);
const router = useRouter();
const form = ref({});
/**
 * ref
 * 장) 한 번에 객체할당 가능
 * 단) form.value.title form.value.content 이런식으로 접근해야한다
 */
/**
 * reactive
 * 단) 하나씩 넣어주어야한다
 * let form = reactive({})
    form.title = data.title
    form.content = form.content
 */

const goListPage = () => {
  router.push({
    name: "PostList",
  });
};

const fetchPost = () => {
  const data = getPostById(props.id);
  form.value = { ...data };
};
fetchPost();
const goEditPage = () => {
  router.push({
    name: "PostEdit",
    params: {
      id: props.id,
    },
  });
};
</script>

<style lang="scss" scoped></style>
