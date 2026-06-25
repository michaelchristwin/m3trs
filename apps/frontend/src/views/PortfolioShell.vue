<script lang="ts" setup>
import { useHead } from "@unhead/vue";
useHead({
  title: "Portfolio",
  meta: [{ name: "description", content: "Your TRS token holdings" }],
});
</script>

<template>
  <RouterView />
</template>
