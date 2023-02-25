<template>
  <div>
   <ul>
    <template v-for="item in evenItems" v-bind:key="item.id">
      <!-- <li v-if="item.id %2 === 0"> -->
        <li v-if="evenItems">
        {{ item.msg }}
      </li>
    </template>
   </ul>
  </div>
</template>

<script>
import { computed, reactive } from "vue";

// v-for, v-if는 함께 사용하는 것을 권장하지 않는다.
export default {
  setup() {
    const items = reactive([
    {id:1,msg:'h1'},
    {id:2,msg:'h2'},
    {id:3,msg:'h3'},
    {id:4,msg:'h4'},
    ])

    const evenItems = computed(() => {
      return items.filter(item => item.id % 2 ===0)
    })
    return {
      items,
      evenItems
    };
  },
};
</script>

<style scoped>
.클래스명{
  color: burlywood;
}
</style>
