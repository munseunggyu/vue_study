<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/one"
          >NestedOne</RouterLink
        >
        <!-- :to="{ // history에 저장되지 않고 대체된다.
          name: 'NestedOne', replace: true
        }" -->
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/two"
          >NesteTwo</RouterLink
        >
      </li>
    </ul>
    <RouterView></RouterView>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
