<template>
  <q-page class="q-pa-md q-pa-md-xl">
    <!-- https://www.inflearn.com/course/lecture?courseSlug=%ED%80%98%EC%9D%B4%EC%82%AC-%EB%A7%88%EC%8A%A4%ED%84%B0-vue-%EC%9B%B9&unitId=133053&tab=curriculum 15:55 spacing breakpoints 생성 -->
    <section>
      <h2 class="text-h4">Breakpoints</h2>
      <a href="https://quasar.dev/style/breakpoints#introduction">link</a>
      <q-separator class="q-my-md" />
      <div class="target text-white flex flex-center">
        <span class="text-h2">
          {{ $q.screen.name }}
        </span>
      </div>
    </section>
    <section>
      <h2 class="text-h4">$q.screen</h2>
      <a href="https://quasar.dev/options/the-q-object">object</a>
      <q-separator class="q-my-md" />

      <ul>
        <li v-for="(value, key) in $q.screen" :key="key">
          <span>{{ key }}</span> - <span>{{ isFc(value) }}</span>
        </li>
      </ul>
      <p>it은 작냐, gt는 크냐</p>
    </section>
  </q-page>
</template>

<script>
export default {
  mounted() {
    console.log('this.$q.screen', this.$q.screen);
  },
};
</script>
<script setup>
import { useQuasar } from 'quasar';
const $q = useQuasar();
console.log($q.screen, 'setup');

const isFc = value => (typeof value === 'function' ? '함수입니다.' : value);
</script>

<style lang="scss" scoped>
.target {
  height: 200px;
  background-color: $dark;
}
@media (max-width: $breakpoint-xs-max) {
  // 600px 이하
  .target {
    background-color: $red;
  }
}
.target {
  body.screen--sm & {
    background-color: $orange;
  }
}
</style>
