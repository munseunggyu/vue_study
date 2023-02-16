<template>
  <div>jobs</div>
</template>

<script>
import { fetchList } from "@/api";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const newsList = await fetchList("news/1.json");
    this.users = newsList;
    console.log(this.users);
  },
};
</script>

<style></style>
