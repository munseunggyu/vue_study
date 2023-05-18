<template>
  <div class="center">
    <h2>게시글 목록</h2>
    <hr class="my-4" />

    <PostFilter @submit.prevent v-model:title="params.title_like"></PostFilter>
    <hr class="my-4" />
    <AppGrid v-slot="{ item }" :items="posts">
      <PostItem
        :title="item.title"
        :content="item.content"
        :create-at="item.createAt"
        @click="goPostDeatil(item.id)"
        @modal="
          openModal({
            title: item.title,
            content: item.content,
            createAt: item.createAt,
          })
        "
      ></PostItem>
    </AppGrid>
    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="(page) => (params._page = page)"
    ></AppPagination>

    <PostModal
      :title="modalTitle"
      :content="modalContent"
      :createAt="modalCreateAt"
      v-model="show"
      :show="show"
    />

    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="'4'"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from "@/components/posts/PostItem.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import { computed, ref, watchEffect } from "vue";
import { getPosts } from "@/api/posts";
import { useRouter } from "vue-router";
import PostFilter from "@/components/posts/PostFilter.vue";
import PostModal from "./PostModal.vue";

const router = useRouter();
const posts = ref([]);
const params = ref({
  _sort: "createAt",
  _order: "desc",
  _limit: 9,
  _page: 1,
  title_like: "",
});
const totalCount = ref(0);

const fetchPosts = async () => {
  try {
    const { data, headers } = await getPosts(params.value);
    totalCount.value = headers["x-total-count"];
    posts.value = data;
  } catch (error) {
    console.log(error);
  }
};

// fetchPosts();
const pageCount = computed(() => {
  return Math.ceil(totalCount.value / params.value._limit);
});

// 초기 1회 실행
watchEffect(fetchPosts);

const movePage = (page) => {
  params.value._page = page;
};

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
  console.log(
    show.value,
    modalTitle.value,
    modalContent.value,
    modalCreateAt.value
  );
};

const closeModal = () => {
  show.value = false;
};
</script>

<style lang="scss" scoped></style>
