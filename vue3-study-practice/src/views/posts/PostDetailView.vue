<template>
  <AppLoading v-if="loading" />
  <AppError v-else-if="err" :message="err" />
  <div class="center">
    <h2>{{ post?.title }}</h2>
    <p>id: {{ props.id }}, idOdd: {{ isOdd }}</p>
    <p>{{ post?.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post?.createAt).format("YYYY. MM. DD HH:mm:ss") }}
    </p>
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
        <button class="btn btn-outline-danger" @click="handledeletePost">
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { deletePost } from "@/api/posts";
import { useRouter } from "vue-router";
import AppLoading from "@/components/app/AppLoading.vue";
import AppError from "@/components/app/AppError.vue";
import { useAxios } from "@/hooks/useAxios";
import { useNumber } from "@/hooks/useNumber";
import { computed, toRef } from "vue";

const props = defineProps({
  id: String,
});

const router = useRouter();
const url = computed(() => `posts/${props.id}`);
const { loading, err, data: post } = useAxios(url);
const idRef = toRef(props, "id");
const { isOdd } = useNumber(idRef);
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

// const fetchPost = async () => {
//   try {
//     const data = await getPostById(props.id);
//     post.value = { ...data };
//   } catch (error) {
//     console.log(error);
//     err.value = error;
//   } finally {
//     loading.value = false;
//   }
// };
// fetchPost();
const goEditPage = () => {
  router.push({
    name: "PostEdit",
    params: {
      id: props.id,
    },
  });
};

const handledeletePost = async () => {
  await deletePost(props.id);
  goListPage();
};
</script>

<style lang="scss" scoped></style>
