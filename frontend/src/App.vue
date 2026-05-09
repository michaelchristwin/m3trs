<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useSeoMeta } from '@unhead/vue'
import { createAppKit } from '@reown/appkit/vue'
import { wagmiAdapter, networks, projectId, metadata } from './config/wagmi'
useSeoMeta({
  title: 'M3trs',
  description:
    'M3TRS lets energy asset owners tokenize revenue streams, create on-chain bonds, and manage holdings — all powered by decentralized metering infrastructure',
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: false,
  },
})
</script>

<template>
  <RouterView />
</template>
