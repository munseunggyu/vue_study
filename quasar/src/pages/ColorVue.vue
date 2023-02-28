<template>
  <q-page class="q-pa-xl">
    <section>
      <h2 class="text-h4">Colors</h2>
      <a href="https://quasar.dev/style/color-palette#introduction">link</a>
      <q-separator class="q-my-md" />
      <div class="q-gutter-sm">
        <div class="q-pa-xs rounded-borders bg-primary text-yellow">
          primary
        </div>
        <div class="q-pa-xs rounded-borders bg-secondary">secondary</div>
        <div class="q-pa-xs rounded-borders bg-accent">accent</div>
        <div class="q-pa-xs rounded-borders bg-dark text-white">dark</div>
        <div class="q-pa-xs rounded-borders bg-positive">positive</div>
        <div class="q-pa-xs rounded-borders bg-negative">negative</div>
        <div class="q-pa-xs rounded-borders bg-info">info</div>
        <div class="q-pa-xs rounded-borders bg-error">warning</div>
        <p>scss 정의</p>
      </div>
    </section>
    <section>
      <h2 class="text-h4">Components</h2>
      <a href="https://quasar.dev/vue-components/button#introduction">link</a>
      <q-separator class="q-my-md" />
      <q-btn label="제출" text-color="yellow" color="primary" />
      <q-btn label="제출" text-color="yellow" color="error" />
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="amber" glossy label="Amber" />
      <q-btn color="brown-5" label="Brown 5" />
      <q-btn color="deep-orange" glossy label="Deep Orange" />
      <q-btn color="purple" label="Purple" />
      <q-btn color="black" label="Black" />
    </section>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  color: $red;
  background-color: $grey-5;
}
.text-error {
  color: $red;
}
.bg-error {
  background-color: $red;
}
</style>
