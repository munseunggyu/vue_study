<template>
  <div>
    <h2>
      Class bind
    </h2>
    <p class="hey" :class="{클래스명 : boolean}">
      안녕하세요
    </p>
    <p class="hey" :class="classObj">
      안녕
    </p>
    <p class="hey" :class="[arrClass,'dsa', true ? 'zxc' :'cxz']">
      arr
    </p>
  </div>
</template>

<script>
import { computed, reactive,ref } from "vue";

export default {
  setup() {
    const classObj = reactive({
      active: true,
      wow: false
    })

    const arrClass = ref('asd')

    return {
      classObj,arrClass
    };
  },
};
</script>

<style scoped>
.클래스명{
  color: burlywood;
}
</style>
