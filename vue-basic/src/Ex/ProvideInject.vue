<template>
  <div>
    <div class="deep-child">
      {{ provide_injectEx }}
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup(){
    const provide_injectEx = inject('provide-ex')

    // console.log(provide_injectEx.value)
    return{
      provide_injectEx
    }
  }
}
</script>

<style>

</style>