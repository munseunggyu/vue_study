<template>
  <div>
    <non-props-ex class="hi"></non-props-ex>
    <non-props-ex class="hi"></non-props-ex>
    <slot-ex>
      <!-- <template #header>
      header
    </template> -->
      <template #main> main?? </template>
      <template v-slot:default="obj">
        {{ obj.childMessage }}
        암시적으로 Default 슬롯입니다.
      </template>
      <template v-slot:footer> footer </template>
    </slot-ex>
    <!-- provider inject -->
    <provide-inject></provide-inject>
    <life-cycle-ex></life-cycle-ex>

    <!-- script setup -->
    <script-setup></script-setup>
    <router-view></router-view>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import VModelEx from "./Ex/VModelEx.vue";
import NonPropsEx from "./Ex/NonPropsEx.vue";
import SlotEx from "./Ex/SlotEx.vue";
import ProvideInject from "./Ex/ProvideInject.vue";
import LifeCycleEx from "./Ex/LifeCycleEx.vue";
import ScriptSetup from "./Ex/ScriptSetup.vue";

// v-for, v-if는 함께 사용하는 것을 권장하지 않는다.
export default {
  components: {
    VModelEx,
    NonPropsEx,
    SlotEx,
    ProvideInject,
    LifeCycleEx,
    ScriptSetup,
  },
  setup() {
    const providerEx = ref("provide-inject 예시입니다.");
    // provide('key',value)
    provide("provide-ex", providerEx);
    return {};
  },
};
</script>

<style scoped></style>
