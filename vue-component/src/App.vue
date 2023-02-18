<template>
  <div>
    <h1>Controlled Component</h1>
    <section>
      <h2>CheckBox</h2>
      <CheckBoxInput v-model="checkInput"></CheckBoxInput>
    </section>
    <section>
      <h2>SelectBox</h2>
      <SelectBox v-model="selectInput"></SelectBox>
    </section>
    <hr />
    <section>
      <h2>Renderless Component</h2>
      <FetchData :url="url">
        <div slot-scope="{ response, loading }">
          <div v-if="!loading">
            {{ response }}
          </div>
          <div v-if="loading">...loading</div>
        </div>
      </FetchData>
    </section>
  </div>
</template>
<!-- https://jsonplaceholder.typicode.com/users/1 -->
<script>
import CheckBoxInput from "./controlledComponent/CheckBoxInput.vue";
import SelectBox from "./controlledComponent/SelectBox.vue";
import FetchData from "./renderlessComponent/FetchData.vue";

export default {
  components: {
    CheckBoxInput,
    SelectBox,
    FetchData,
  },
  data() {
    return {
      checkInput: false,
      selectInput: "all",
      url: "https://jsonplaceholder.typicode.com/users/1",
    };
  },
  methods: {},
};
</script>

<style></style>
