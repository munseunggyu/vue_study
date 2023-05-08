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
    <AppAlert :show="showAlert" :message="message" :type-alert="alertType" />
  </div>
</template>

<script setup>
import { getPostById, updatePost } from "@/api/posts";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostForm from "./PostForm.vue";
import AppAlert from "@/components/AppAlert.vue";

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const goDetailPage = () => router.push({ name: "PostDetail", params: { id } });
const form = ref({
  title: null,
  content: null,
});
const message = ref("");
const alertType = ref("error");
const fetchPost = async () => {
  try {
    const data = await getPostById(id);
    form.value = { ...data };
  } catch (error) {
    vAlert("에러발생");
  }
};
const setUpdatePost = () => {
  const data = { ...form.value, createAt: new Date() };
  updatePost(id, data);
  vAlert("수정되었습니다.", "success");
  // goDetailPage();
};
fetchPost();

const showAlert = ref(false);

const vAlert = (msg, type = "error") => {
  showAlert.value = true;
  message.value = msg;
  alertType.value = type;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>

<style lang="scss" scoped></style>
