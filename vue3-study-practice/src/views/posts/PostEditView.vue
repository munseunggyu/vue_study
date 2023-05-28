<template>
  <div class="center">
    <h2>게시글 수정</h2>
    <hr class="my-4" />

    <AppLoading v-if="loading" />
    <AppError v-else-if="err" :message="err" />

    <template v-else>
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
    </template>
  </div>
</template>

<script setup>
import { getPostById, updatePost } from "@/api/posts";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostForm from "./PostForm.vue";
import { useAlert } from "../../hooks/useAlert";
import { useAxios } from "@/hooks/useAxios";
import AppLoading from "@/components/app/AppLoading.vue";
import AppError from "@/components/app/AppError.vue";
const route = useRoute();
const router = useRouter();
const id = route.params.id;
const { vSuccess } = useAlert();
const goDetailPage = () => router.push({ name: "PostDetail", params: { id } });
const { loading, err, data: form } = useAxios(`posts/${id}`);

const setUpdatePost = () => {
  const data = { ...form.value, createAt: new Date() };
  updatePost(id, data);
  vSuccess("수정되었습니다.");
  goDetailPage();
};
// fetchPost();
</script>

<style lang="scss" scoped></style>
