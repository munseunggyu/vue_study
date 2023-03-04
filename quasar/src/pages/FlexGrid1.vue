<template>
  <q-page class="q-pa-xl">
    <section>
      <h2 class="text-h4">Flex - Gutter</h2>
      <q-separator class="q-my-md" spaced />
      <div class="bg-blue">
        <div class="q-gutter-x-sm">
          <div v-for="n in 4" :key="n" class="square"></div>
        </div>
      </div>
      <q-separator class="q-my-md" spaced />

      <div class="bg-blue">
        <div class="row q-col-gutter-sm">
          <div
            v-for="n in 8"
            :key="n"
            class="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Title
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-h4">Flex - Col</h2>
      <a href="https://quasar.dev/style/shadows">link</a>
      <q-separator class="q-my-md" spaced />
      <div class="row">
        <!-- 12 -->
        <div class="border col-1"></div>
        <div class="border"></div>
      </div>
      <q-separator class="q-my-md" spaced />
      <div class="row">
        <!-- 12 -->
        <div class="border col-1"></div>
        <div class="border col-3"></div>
        <div class="border col-5"></div>
        <div class="border col-1"></div>
        <div class="border col-1"></div>
        <div class="border col-1"></div>
        <div class="border col-7"></div>
      </div>

      <q-separator class="q-my-md" spaced />
      <div class="row">
        <!-- 12 -->
        <!-- auto는 컨텐츠 너비만큼만 -->
        <div class="border col-auto">1</div>
        <div class="border col-3"></div>
        <div class="border col-5"></div>
        <div class="border col-1"></div>
        <div class="border col-1"></div>
      </div>
      <q-separator class="q-my-md" spaced />
      <div class="row">
        <!-- 12 -->
        <!-- grow는 남은 영역 모두 차지 -->
        <div class="border col-grow">1</div>
        <div class="border col-3"></div>
        <div class="border col-1"></div>
        <div class="border col-1"></div>
      </div>
      <q-separator class="q-my-md" spaced />
      <div class="row no-wrap">
        <!-- 12 -->
        <!-- shrink 남은 영역 모두 차지 -->
        <div class="border col-auto">
          autoautoautoautoautoautoautoautoautoauto
        </div>
        <div class="border col-shrink">
          shrinkshrinkshrinkshrinkshrinkshrinkshrinkshrink
        </div>
        <div class="border col-8"></div>
        <div class="border col-1"></div>
      </div>
    </section>
    <section>
      <h2 class="text-h4">Flexbox - Row</h2>
      <a href="https://quasar.dev/style/shadows">link</a>
      <q-separator class="q-my-md" />
      <div class="row bg-yellow">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square q-ml-auto"></div>
      </div>
    </section>
    <section>
      <h2 class="text-h4">Flexbox - column</h2>
      <a href="https://quasar.dev/style/shadows">link</a>
      <q-separator class="q-my-md" />
      <div class="column">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
    </section>
    <section>
      <h2 class="text-h4">Flexbox - header</h2>
      <a href="https://quasar.dev/style/shadows">link</a>
      <q-separator class="q-my-md" />
      <div
        class="row bg-red items-center justify-between q-px-sm"
        :style="{ height: '50px' }"
      >
        <div class="row items-center">
          <q-btn icon="list" densex flat round></q-btn>
          <div class="text-h6">Quasar App</div>
        </div>
        <!-- <div class="q-ml-auto"> -->
        <q-btn icon="light_mode " dense flat round />
        <!-- </div> -->
      </div>
    </section>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.square {
  width: 80px;
  height: 80px;
  background-color: $primary;
  border: 1px solid $secondary;
  display: inline-block;
  box-sizing: border-box;
}
.border {
  border: 1px solid $primary;
  padding: 8px;
}
</style>
