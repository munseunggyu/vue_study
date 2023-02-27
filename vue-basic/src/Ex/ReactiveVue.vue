<template>
  <div>
    <button @click="increment">click {{ state.count }}</button>
    {{ objState.num1 }}
    <br />
    <hr />
    <p>{{ title }}</p>
    <p>{{ author }}</p>
    <p>{{ book }}</p>
    <p>{{ author1 }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs, toRef, readonly } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });
    const increment = () => {
      state.count++;
    };

    // obj일때는 .value가 안 붙어도 된다.
    const num1 = ref(1);
    const objState = reactive({
      num1,
    });
    console.log(objState.num1, "obj");

    // arr일때는 .value가 붙어야한다.
    const num2 = ref(2);
    const arrState = reactive([num2]);
    console.log(arrState[0].value, "arr");

    // 구조분해할당 반응성 전달
    const book = reactive({
      author: "Me",
      year: "2023",
      title: "Vue3",
    });
    // 반응성 전달되지 않는다.
    // let {author, title} = book

    // 여러개일때
    const { author, title } = toRefs(book);
    const author1 = toRef(book, "author");

    // readonly
    const original = reactive({
      count: 0,
    });
    const copy = readonly(original);
    original.count++;
    console.log(original.count);
    copy.count++;
    console.log(copy.count);

    return {
      state,
      increment,
      objState,
      author,
      title,
      book,
      author1,
    };
  },
};
</script>

<style></style>
