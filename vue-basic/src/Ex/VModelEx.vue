<template>
  <div>
    <input type="text" 
    :value="modelValue"
    @input="event => $emit('update:modelValue',event.target.value)"
    >
    <button>click</button>
  </div>
</template>

<script>
export default {
  props:['modelValue'],
  emits:['update:modelValue'],
  setup(){

    return{}
  }

}
</script>

<style>

</style>