<template>
  <div>
    <h2>보간법</h2>
    <p>
      {{ message }}
    </p>
    <p v-once>
      {{ message }}
    </p>
    <button @click="handleClick">click</button>
    <h2>v-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려보세요</div>
    <button :disabled="true">wow</button>
    <input v-bind="inputOptions" />
    {{ message.split("").reverse().join("") }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Hi");
    const rawHtml = ref("<strong>안녕</strong>");
    const dynamicTitle = ref("Hi");
    const inputOptions = ref({
      type: "text",
      value: "123123",
      required: true,
    });
    const handleClick = () => {
      message.value += "!";
    };
    return {
      message,
      handleClick,
      inputOptions,
      rawHtml,
      dynamicTitle,
    };
  },
};
</script>

<style></style>
