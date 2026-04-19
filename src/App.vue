<script setup lang="ts">
import { RouterView } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

import { useRoute } from 'vue-router'
import type { Component } from 'vue'

const route = useRoute()
type LayoutKey = 'default'
const layouts: Record<LayoutKey, Component> = {
  default: DefaultLayout,
}
const layout = (route.meta.layout as LayoutKey) || 'default'
</script>

<template>
  <component :is="layouts[layout]">
    <RouterView />
  </component>
</template>
