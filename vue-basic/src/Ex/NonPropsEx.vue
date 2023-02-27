<template>
  <div >
    <button v-bind="$attrs">click</button>
  </div>
</template>

<script>
export default {
  inheritAttrs:false,
  setup(props,context){
    // console.log(context.attrs)
    return{

    }
  }

}
</script>

<style>

</style>