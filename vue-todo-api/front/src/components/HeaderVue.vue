<template>
  <header>
    <h1>
      <router-link to="/"> To Do!! </router-link>
    </h1>
    <div class="right">
      <router-link to="/login">login</router-link>
      <router-link to="/sign">Sign</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  padding: 1.2rem;
  background: #41b883;
  height: 70px;
}
h1 {
  color: white;
  font-size: 25px;
  font-weight: 800;
}
.right {
  float: right;
  margin-right: 30px;
  margin-top: 20px;
  padding: 5px;
}
a {
  margin-left: 8px;
  color: white;
  text-decoration: none;
}
</style>
