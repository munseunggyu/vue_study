<template>
  <TheHeader></TheHeader>
  <TheView></TheView>
  <AppAlert :show="showAlert" :message="message" :type-alert="alertType" />
</template>

<script setup>
import TheHeader from "@/layouts/TheHeader.vue";
import TheView from "@/layouts/TheView.vue";
import { useAlert } from "./hooks/useAlert";

const { showAlert, message, alertType } = useAlert();
</script>

<style lang="scss" scoped></style>
