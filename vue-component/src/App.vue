<template>
  <div>
    <h1>Controlled Component</h1>
    <section>
      <h2>CheckBox</h2>
      <CheckBoxInput v-model="hi"></CheckBoxInput>
    </section>
    <section>
      <h2>SelectBox</h2>
      <SelectBox v-model="hey"></SelectBox>
    </section>
  </div>
</template>

<script>
import CheckBoxInput from "./controlledComponent/CheckBoxInput.vue";
import SelectBox from "./controlledComponent/SelectBox.vue";

export default {
  components: {
    CheckBoxInput,
    SelectBox,
  },
  data() {
    return {
      hi: false,
      hey: "all",
    };
  },
  methods: {},
};
</script>

<style></style>
