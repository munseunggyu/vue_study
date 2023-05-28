<template>
  <div class="center">
    <h2>게시글 목록</h2>
    <hr class="my-4" />

    <PostFilter @submit.prevent v-model:title="params.title_like"></PostFilter>
    <hr class="my-4" />

    <AppLoading v-if="loading" />
    <AppError v-else-if="err" :message="err" />

    <template v-else>
      <AppGrid v-slot="{ item }" :items="posts">
        <PostItem
          :title="item.title"
          :content="item.content"
          :create-at="item.createAt"
          :id="item.id"
          @click="goPostDeatil(item.id)"
          @modal="
            openModal({
              title: item.title,
              content: item.content,
              createAt: item.createAt,
            })
          "
          @preview="seletedPreview"
        ></PostItem>
      </AppGrid>
      <AppPagination
        :current-page="params._page"
        :page-count="pageCount"
        @page="(page) => (params._page = page)"
      ></AppPagination>
    </template>
    <PostModal
      :title="modalTitle"
      :content="modalContent"
      :createAt="modalCreateAt"
      v-model="show"
      :show="show"
    />

    <template v-if="previewId">
      <hr class="my-4" />
      <AppCard>
        <PostDetailView :id="previewId"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>

<script setup>
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import { computed, provide, ref } from "vue";
import { useRouter } from "vue-router";
import PostFilter from "@/components/posts/PostFilter.vue";
import PostModal from "./PostModal.vue";
import { useAxios } from "@/hooks/useAxios";

const router = useRouter();
const params = ref({
  _sort: "createAt",
  _order: "desc",
  _limit: 9,
  _page: 1,
  title_like: "",
});
const staticsMessage = "statics msg";
provide("staticsMessage", staticsMessage);
const totalCount = computed(() => {
  return response.value.headers["x-total-count"];
});
const {
  response,
  data: posts,
  loading,
  err,
} = useAxios("/posts", { method: "get", params });
const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit);
});

const movePage = (page) => {
  params.value._page = page;
};
// onUpdated(() => {
//   console.log(response.value); // 데이터 변경 후의 값 출력
// });
const goPostDeatil = (id) => {
  // router.push(`/posts/${id}`);
  router.push({
    name: "PostDetail",
    params: {
      id,
    },
  });
};

// modal

const show = ref(false);

const modalTitle = ref("");
const modalContent = ref("");
const modalCreateAt = ref("");

const openModal = ({ title, content, createAt }) => {
  show.value = true;
  modalTitle.value = title;
  modalContent.value = content;
  modalCreateAt.value = createAt;
};

const closeModal = () => {
  show.value = false;
};

const previewId = ref(null);
const seletedPreview = (id) => {
  console.log(id);
  previewId.value = id + "";
  console.log(previewId.value);
};
</script>
<style lang="scss" scoped></style>
