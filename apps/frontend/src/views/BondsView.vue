<script lang="ts" setup>
import BondCard from "@/components/BondCard.vue";
import { collections } from "@/config/opensea/collections";
import { trpc } from "@/config/trpc-client";
import { useQuery } from "@tanstack/vue-query";
import { useHead } from "@unhead/vue";

useHead({
  title: "Bonds",
  meta: [{ name: "description", content: "" }],
});

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data: bonds, isLoading } = useQuery({
  queryKey: ["getBonds", address, collections.bonds],
  queryFn: async () =>
    await trpc.opensea.getNFTByAccount.query({
      owner: address,
      collection: collections.bonds,
    }),
});
</script>

<template>
  <header class="mb-8 md:mb-12 animate-pulse" v-if="isLoading">
    <!-- Title -->
    <div
      class="h-10 md:h-12 w-64 rounded bg-surface-container-highest mb-3"
    ></div>

    <!-- Stats line -->
    <div
      class="h-4 w-full max-w-2xl rounded bg-surface-container-highest"
    ></div>
  </header>
  <header class="mb-8 md:mb-12" v-else-if="bonds">
    <h1
      class="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-2"
    >
      BOND ASSETS
    </h1>
    <p class="text-on-surface-variant font-mono text-sm max-w-2xl">
      ACTIVE_CONTRACTS:
      <span class="text-primary-container">{{ bonds.nfts.length }}</span> |
      TOTAL_LOCKED_VALUE:
      <span class="text-on-surface">1,450 kWh</span>
    </p>
  </header>
  <!-- Bento Grid Layout for Bonds -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    v-if="isLoading"
  >
    <article
      v-for="i in 3"
      :key="i"
      class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden animate-pulse"
    >
      <!-- Status Pill -->
      <div
        class="absolute top-6 right-6 h-6 w-24 rounded-full bg-surface-container-highest"
      ></div>

      <!-- Meter ID -->
      <div class="mb-6">
        <div class="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

        <div class="h-7 w-24 rounded bg-surface-container-highest"></div>
      </div>

      <!-- Token + Stop Time -->
      <div class="grid grid-cols-2 gap-4 mb-8">
        <div>
          <div class="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

          <div class="h-5 w-16 rounded bg-surface-container-highest"></div>
        </div>

        <div>
          <div class="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

          <div class="h-5 w-24 rounded bg-surface-container-highest"></div>
        </div>
      </div>

      <!-- Countdown -->
      <div
        class="bg-surface-container-high rounded p-4 mb-6 border-l-2 border-outline-variant/20"
      >
        <div class="h-3 w-24 rounded bg-surface-container-highest mb-3"></div>

        <div class="h-8 w-32 rounded bg-surface-container-highest"></div>
      </div>

      <!-- Button -->
      <div class="mt-auto pt-4 border-t border-outline-variant/20">
        <div class="w-full h-12 rounded bg-surface-container-highest"></div>
      </div>
    </article>
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
    v-else-if="bonds && bonds.nfts.length > 0"
  >
    <BondCard
      v-for="bond in bonds.nfts"
      :key="bond.identifier"
      :token-id="bond.identifier"
      :metadata-url="bond.metadataUrl"
    />
  </div>
  <div v-else class="flex justify-center items-center p-2">
    <p>You have no bonds yet</p>
  </div>
</template>
