<template>
  <div class="center">
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <form @submit.prevent="setUpdatePost">
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input
          class="form-control"
          id="title"
          placeholder="제목"
          v-model="form.title"
        />
      </div>
      <div class="mb-3">
        <label for="contents" class="form-label">내용</label>
        <textarea
          class="form-control"
          id="contents"
          rows="3"
          placeholder="내용"
          v-model="form.content"
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          class="btn btn-outline-danger me-2"
          @click="goDetailPage"
        >
          취소
        </button>
        <button class="btn btn-primary">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from "@/api/posts";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const goDetailPage = () => router.push({ name: "PostDetail", params: { id } });
const form = ref({
  title: null,
  content: null,
});
const fetchPost = async () => {
  const data = await getPostById(id);
  form.value = { ...data };
};
const setUpdatePost = () => {
  const data = { ...form.value, createAt: new Date() };
  updatePost(id, data);
  goDetailPage();
  console.log(data);
};
fetchPost();
</script>

<style lang="scss" scoped></style>
