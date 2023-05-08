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
      ></PostItem>
    </AppGrid>
    <AppPagination
      :current-page="params._page"
      :page-count="pageCount"
      @page="(page) => (params._page = page)"
    ></AppPagination>

    <hr class="my-4" />
    <AppCard>
      <PostDetailView :id="'2'"></PostDetailView>
    </AppCard>
  </div>
</template>

<script setup>
import PostItem from "@/components/posts/PostItem.vue";
import AppCard from "@/components/AppCard.vue";
import PostDetailView from "@/views/posts/PostDetailView.vue";
import { computed, ref, watchEffect } from "vue";
import { getPosts } from "@/api/posts";
import { useRouter } from "vue-router";
import AppPagination from "@/components/AppPagination.vue";
import AppGrid from "@/components/AppGrid.vue";
import PostFilter from "@/components/posts/PostFilter.vue";

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
  const { data, headers } = await getPosts(params.value);
  totalCount.value = headers["x-total-count"];
  posts.value = data;
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
</script>

<style lang="scss" scoped></style>
