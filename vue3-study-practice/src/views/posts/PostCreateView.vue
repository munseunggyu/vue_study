<template>
  <div class="center">
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <form @submit.prevent="save">
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
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>
        <button class="btn btn-primary">저장</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { createPost } from "@/api/posts";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const goListPage = () => {
  router.push({
    name: "PostList",
  });
};
const save = async () => {
  try {
    const data = {
      ...form.value,
      createAt: new Date(),
    };
    await createPost(data);
    goListPage();
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
