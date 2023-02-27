<template>
  <div>
   <non-props-ex class="hi" ></non-props-ex>
   <non-props-ex class="hi" ></non-props-ex>
   <slot-ex>
    <!-- <template #header>
      header
    </template> -->
    <template #main>
      main
    </template>
    <template v-slot:default="obj">
      {{ obj.childMessage }}
      암시적으로 Default 슬롯입니다.
    </template>
    <template v-slot:footer>
      footer
    </template>
   </slot-ex>
  </div>
</template>

<script>
import { ref } from 'vue';
import VModelEx from './Ex/VModelEx.vue';
import NonPropsEx from './Ex/NonPropsEx.vue';
import SlotEx from './Ex/SlotEx.vue';

// v-for, v-if는 함께 사용하는 것을 권장하지 않는다.
export default {
  components: { VModelEx,NonPropsEx,SlotEx },
  setup() {
    
    return {
    };
  },
};
</script>

<style scoped>
</style>
