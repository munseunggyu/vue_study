<template>
  <q-page class="">
    <section
      class="row q-col-gutter-x-xl q-pa-lg no-wrap"
      :style="{ height: '250px' }"
    >
      <div class="col-auto">
        <q-avatar size="150px" class="profile-img">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
      <div class="column justify-between">
        <div class="row q-col-gutter-x-md">
          <span class="text-h6"> Hellow World </span>
          <div class="q-gutter-x-sm">
            <q-btn color="secondary" label="팔로우" />
            <q-btn color="white" text-color="black" label="메시지 보내기" />
          </div>
          <span> <q-btn icon="more_horiz" round dense /></span>
        </div>
        <div class="row q-gutter-x-md">
          <span class="text-weight-bold"> 게시물 931</span>
          <span class="text-weight-bold"> 팔로워 102.3만</span>
          <span class="text-weight-bold"> 팔로우 1001</span>
        </div>
        <div class="column">
          <span> WOW</span>
          <span> 예술가</span>
          <span class="q-mb-sm"> youtube.com/@ginis2</span>
          <p>
            <span class="text-weight-bold"> daeseung5521 </span> 님이
            팔로우합니다
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 15" :key="n">
          <q-avatar size="70px">
            <q-img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <div class="text-center q-mt-xs">name</div>
        </div>
      </div>
    </section>
    <section class="row q-col-gutter-lg q-mt-lg">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="n in 15" :key="n">
        <q-card class="my-card">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" ratio="1">
            <div
              class="absolute-bottom text-subtitle2 text-center full-height flex flex-center over"
            >
              Title
            </div>
          </q-img>
        </q-card>
      </div>
    </section>
  </q-page>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.q-page {
  box-sizing: border-box;
  padding: 35px 127px;
}
</style>
