<template>
  <div>
    <div class="user-description">
      <slot name="username"> </slot>
      <!-- <router-link :to="`/user/${user.id}`">
        {{ user.id }}
      </router-link> -->
      <div class="time">
        time:
        <slot name="time"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  // computed: {
  //   ...mapGetters({ user: "fetchUser" }),
  // },
  props: {
    userInfo: Object,
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
  color: #828282;
}
</style>
