<template>
  <div>
    <span>{{ teacher.name }}</span>
    <p>{{ teacher.letures.length > 0 ?'있음':'없음' }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ exisLecture() }}</p>
    <h2>
      {{ fullName }}
    </h2>
  </div>
</template>

<script>
import { computed, reactive,ref } from "vue";

export default {
  setup() {
    const teacher = reactive({
      name:'hey',
      letures:['js','python'],
    })

    // computed는 읽기 전용으로 된다

    // 캐싱된다.
    const hasLecture = computed( () => {
      return teacher.letures.length > 0 ?'있음':'없음' 
    })
    
    // 캐싱되지 않는다.
    const exisLecture = () => {
      return teacher.letures.length > 0 ?'있음':'없음' 
    }

    // 
    const first = ref('홍')
    const last = ref('길동')

    // computed 변경을 위한 set
    // const fullName = computed(() => first.value + ' ' + last.value)
    const fullName = computed({
      get(){
        return first.value + ' ' + last.value
      },
      set(value){
        [first.value,last.value] = value.split(' ')
      }
    })
    fullName.value = 'h ey'
    return {
      teacher,
      hasLecture,
      exisLecture,
      fullName
    };
  },
};
</script>

<style></style>
