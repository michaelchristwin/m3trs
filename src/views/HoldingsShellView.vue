<script lang="ts" setup>
import { useHead } from '@unhead/vue'
useHead({
  title: 'Holdings',
  meta: [{ name: 'description', content: 'Your TRS token holdings' }],
})
</script>

<template>
  <RouterView />
</template>
