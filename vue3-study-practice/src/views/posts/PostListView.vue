<template>
  <div class="center">
    <h2>게시글 목록</h2>
    <hr class="my-4" />
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
      </div>
    </form>
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :create-at="post.createAt"
          @click="goPostDeatil(post.id)"
        ></PostItem>
      </div>
    </div>
    <nav class="mt-3" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: params._page < pageCount }">
          <a class="page-link" @click.prevent="--params._page">Previous</a>
        </li>
        <li
          v-for="(page, index) in pageCount"
          :key="page"
          class="page-item"
          :class="{ active: params._page === page }"
        >
          <button class="page-link" @click="movePage(page)">
            {{ index + 1 }}
          </button>
        </li>

        <li class="page-item" :class="{ disabled: params._page > pageCount }">
          <a class="page-link" @click.prevent="++params._page" href="#">Next</a>
        </li>
      </ul>
    </nav>
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

const router = useRouter();
const posts = ref([]);
const params = ref({
  _sort: "createAt",
  _order: "asc",
  _limit: 9,
  _page: 2,
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
