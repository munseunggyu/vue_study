<template>
  <form>
    <fieldset>
      <legend>
        <slot name="legendname"> </slot>
      </legend>
      <label for="email">email: </label>
      <input id="email" type="email" />
      <br />
      <label for="password">password: </label>
      <input id="password" type="password" />
    </fieldset>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
fieldset {
  margin: 10px;
}
label {
  margin: 10px;
}
input {
  margin-top: 10px;
}
</style>
