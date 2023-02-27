<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
      <slot :child-message="childMessage" ></slot>
    </main>
    <footer>
      <slot name="footer"></slot>

    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(){
    const childMessage = ref('자식 메시지')
    return {
      childMessage
    }
  }
}
</script>

<style>

</style>