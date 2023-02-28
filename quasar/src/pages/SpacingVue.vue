<template>
  <q-page class="q-pa-xl">
    <section>
      <h2 class="text-h4">Spacing</h2>
      <a href="https://quasar.dev/style/spacing#introduction">link</a>
      <q-separator class="q-my-md" />
      <p>q-[p|m][t|r|b|l|a|x|y]-[none|auto|xs|sm|md|lg|xl]</p>
      <p>
        q-[패딩|마진][탑|우|아래|왼|모두|좌우|상하]-[none|auto|xs|sm|md|lg|xl]
      </p>
      <div class="bg-primary q-pa-xs">
        <div class="bg-dark text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum
          officiis vel minus doloribus. Nemo doloremque iusto veritatis
          repudiandae molestiae corporis consectetur. Hic ab atque repellat
          harum fugiat impedit iure.
        </div>
      </div>
      <div class="bg-primary q-pa-sm q-mt-md">
        <div class="bg-dark text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum
          officiis vel minus doloribus. Nemo doloremque iusto veritatis
          repudiandae molestiae corporis consectetur. Hic ab atque repellat
          harum fugiat impedit iure.
        </div>
      </div>
      <div class="bg-primary q-pa-md q-mt-md">
        <div class="bg-dark text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum
          officiis vel minus doloribus. Nemo doloremque iusto veritatis
          repudiandae molestiae corporis consectetur. Hic ab atque repellat
          harum fugiat impedit iure.
        </div>
      </div>
      <div class="bg-primary q-pa-lg q-mt-md">
        <div class="bg-dark text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum
          officiis vel minus doloribus. Nemo doloremque iusto veritatis
          repudiandae molestiae corporis consectetur. Hic ab atque repellat
          harum fugiat impedit iure.
        </div>
      </div>
      <div class="bg-primary q-pa-xl q-mt-md">
        <div class="bg-dark text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cum
          officiis vel minus doloribus. Nemo doloremque iusto veritatis
          repudiandae molestiae corporis consectetur. Hic ab atque repellat
          harum fugiat impedit iure.
        </div>
      </div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">Components</div>
      <q-separator class="q-my-md" />
      <q-card
        class="my-card bg-secondary text-white q-mx-auto"
        style="width: 400px"
      >
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator dark />

        <q-card-actions>
          <q-btn outline padding="sm">Action 1</q-btn>
          <q-btn outline padding="none">Action 2</q-btn>
        </q-card-actions>
      </q-card>
    </section>
  </q-page>
</template>

<script>
export default {};
</script>

<style></style>
