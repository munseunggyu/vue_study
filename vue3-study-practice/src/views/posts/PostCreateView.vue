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
import { useRouter } from "vue-router";
import PostForm from "./PostForm.vue";
import { useAlert } from "../../hooks/useAlert";
import { useAxios } from "@/hooks/useAxios";
const router = useRouter();
const { vSuccess } = useAlert();
const form = ref({
  title: null,
  content: null,
});
const goListPage = () => {
  router.push({
    name: "PostList",
  });
};
const { err, loading, execute } = useAxios(
  `/posts`,
  {
    method: "post",
    // data: { ...form.value, createAt: new Date() },
  },
  {
    onSuccess: () => {
      goListPage();
      vSuccess("등록이 되었습니다.");
    },
    onError: (err) => {
      console.log(error);
    },
    immediate: false,
  }
);
const save = async () => {
  execute({ ...form.value, createAt: new Date() });
};
</script>

<style lang="scss" scoped></style>
