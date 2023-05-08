<template>
  <div class="center">
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="save"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
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
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { createPost } from "@/api/posts";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostForm from "./PostForm.vue";

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
