<template>
  <div>
   {{ message }}
   <button @click="message+='!'">a</button>
   <label for="title">title:</label>
   <input type="text" v-model="title"> <br />
    <label for="content">content:</label>
   <input type="texarea" v-model="content">
  </div>
</template>

<script>
import { computed, reactive,ref, watch, watchEffect } from "vue";

// v-for, v-if는 함께 사용하는 것을 권장하지 않는다.
export default {
  setup() {
    const message = ref('')

    // watch(message,(newVal,oldVal) => {
    //   console.log(newVal)
    //   console.log(oldVal)
    // })  

    // getter함수로 사용한다.
    const obj = reactive({
      count:0,
    })
    watch(() => obj.count,(newVal) => {
      console.log(newVal)
    })

        // immediate 즉시 실행
    const obj1 = reactive({
      count:0,
    })
    watch(() => obj1.count,(newVal) => {
      console.log(newVal)
    },{
      immediate:true
    })

    // watchEffect, 최초 1회 실행 후 감시하는 ref값 변경 시 실행 
    const title = ref('')
    const content = ref('')

    watchEffect(() => {
      console.log('first')
      console.log(title.value)
      console.log(message.value)
    })
    return {
      message,
      title,
      content
    };
  },
};
</script>

<style scoped>
.클래스명{
  color: burlywood;
}
</style>
