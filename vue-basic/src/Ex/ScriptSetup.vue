<template>
<div>
  <p>
    {{ msg }}
  </p>
  <button @click="sayHellow">click</button>
</div>
</template>

<script setup>
  const msg = 'Script SetUp'
  const sayHellow = () => alert('sayHellow')

</script>

<style>

</style>