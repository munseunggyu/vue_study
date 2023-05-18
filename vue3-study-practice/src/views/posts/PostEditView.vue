<template>
  <div class="center">
    <h2>게시글 수정</h2>
    <hr class="my-4" />
    <PostForm
      @submit.prevent="setUpdatePost"
      v-model:title="form.title"
      v-model:content="form.content"
    >
      <template #actions>
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
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from "@/api/posts";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostForm from "./PostForm.vue";
import { useAlert } from "../../hooks/useAlert";
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const { vSuccess } = useAlert();
const goDetailPage = () => router.push({ name: "PostDetail", params: { id } });
const form = ref({
  title: null,
  content: null,
});
const fetchPost = async () => {
  try {
    const data = await getPostById(id);
    form.value = { ...data };
  } catch (error) {
    console.log(error);
  }
};
const setUpdatePost = () => {
  const data = { ...form.value, createAt: new Date() };
  updatePost(id, data);
  vSuccess("수정되었습니다.");
  goDetailPage();
};
fetchPost();
</script>

<style lang="scss" scoped></style>
