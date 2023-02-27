<template>
  <div>
    <input type="text" ref="inputRef">
  </div>
</template>

<script>
// 실행 순서

import { onMounted,ref } from 'vue';

// setup => beforeCreate => created => beforeMount => mounted
export default {
  setup(){
    const inputRef = ref(null)
    onMounted(() => {
      // console.log(inputRef.value)
    })
    return{
      inputRef
    }
  }
}
</script>

<style>

</style>