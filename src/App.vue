<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
useSeoMeta({
  title: 'M3trs',
  description:
    'M3TRS lets energy asset owners tokenize revenue streams, create on-chain bonds, and manage holdings — all powered by decentralized metering infrastructure',
})
</script>

<template>
  <RouterView />
</template>
