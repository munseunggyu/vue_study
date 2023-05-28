import { computed, reactive, unref } from "vue";

export const useNumber = (number) => {
  const isOdd = computed(() => unref(number) % 2 === 1);
  const isEven = computed(() => !isOdd.value);

  // const state = reactive({
  //   x: 1,
  //   y: 2
  // })

  return {
    isOdd,
    isEven,
    // toRefs(state) 객체 반응형이 풀리는걸 방지
  };
};
