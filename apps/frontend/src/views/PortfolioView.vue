<script lang="ts" setup>
import BondCard from "@/components/BondCard.vue";
import HoldingsListItem from "@/components/HoldingsListItem.vue";
import { useQuery } from "@tanstack/vue-query";
import { collections } from "@/config/opensea/collections";
import { computed } from "vue";
import { trpc } from "@/config/trpc-client";
import { checksumAddress } from "viem";

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data, isLoading } = useQuery({
  queryKey: ["getNfts", address, collections.holdings],
  queryFn: () =>
    trpc.opensea.getNFTByAccount.query({
      owner: checksumAddress(address),
      collection: collections.holdings.toLowerCase(),
    }),
});

const holdings = computed(() => {
  return (
    data.value?.nfts?.map((nft) => {
      return {
        name: nft.name,
        tokenId: nft.identifier,
        metadataUrl: nft.metadataUrl,
        contract: nft.contract,
      };
    }) ?? []
  );
});
const { data: bonds, isLoading: isLoadingBonds } = useQuery({
  queryKey: ["getBonds", address, collections.bonds],
  queryFn: async () =>
    await trpc.opensea.getNFTByAccount.query({
      owner: address,
      collection: collections.bonds,
    }),
});
</script>
<template>
  <header class="mb-8 md:mb-12 animate-pulse" v-if="isLoadingBonds">
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
      M3TER BONDS
    </h1>
    <p class="text-on-surface-variant font-mono text-sm max-w-2xl">
      ACTIVE_CONTRACTS:
      <span class="text-primary-container">{{ bonds.nfts.length }}</span>
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
    <BondCard v-for="bond in bonds.nfts" :key="bond.identifier" :bond="bond" />
  </div>
  <div v-else class="flex justify-center items-center p-2">
    <p>You have no bonds yet</p>
  </div>
  <div class="md:flex block justify-between items-end my-8">
    <div>
      <h1
        class="font-headline text-3xl font-bold tracking-tight text-on-surface"
      >
        Yield Tokens
      </h1>
      <p class="text-on-surface-variant text-sm mt-1 font-body">
        ERC1155 Contract Balances &amp; Revenue Status
      </p>
    </div>
  </div>
  <!-- High Density Data Table (No Lines, Tonal Layering) -->
  <div class="bg-surface-container-lowest rounded-lg p-1 mb-10">
    <!-- Table Header -->
    <div
      class="hidden md:grid grid-cols-11 gap-4 px-6 py-3 bg-surface-container-highest rounded-t font-headline text-xs uppercase tracking-widest text-on-surface-variant items-center"
    >
      <div class="col-span-2">Token Name</div>
      <div class="col-span-1 text-right">Balance</div>
      <div class="col-span-2 text-right">Claimable USD</div>
      <div class="col-span-2 text-right">Stop Time</div>
      <div class="col-span-2 text-center">Status</div>
      <div class="col-span-2 text-right">Actions</div>
    </div>
    <!-- Skeleton Rows -->

    <!-- Table Body (Rows via Spacing & Surface Container Shifts) -->

    <div
      v-for="i in 5"
      v-if="isLoading"
      :key="i"
      class="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-outline-variant animate-pulse items-center"
    >
      <!-- Token -->
      <div class="col-span-2 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-surface-container-highest"></div>

        <div class="space-y-2">
          <div class="h-4 w-28 rounded bg-surface-container-highest"></div>
          <div class="h-3 w-20 rounded bg-surface-container-highest"></div>
        </div>
      </div>

      <!-- Balance -->
      <div class="col-span-1 flex justify-end">
        <div class="h-4 w-16 rounded bg-surface-container-highest"></div>
      </div>

      <!-- Claimable USD -->
      <div class="col-span-2 flex justify-end">
        <div class="h-4 w-24 rounded bg-surface-container-highest"></div>
      </div>

      <!-- Stop Time -->
      <div class="col-span-2 flex justify-end">
        <div class="h-4 w-32 rounded bg-surface-container-highest"></div>
      </div>

      <!-- Status -->
      <div class="col-span-2 flex justify-center">
        <div class="h-8 w-24 rounded-full bg-surface-container-highest"></div>
      </div>

      <!-- Actions -->
      <div class="col-span-2 flex justify-end gap-2">
        <div class="h-10 w-24 rounded-lg bg-surface-container-highest"></div>
        <div class="h-10 w-24 rounded-lg bg-surface-container-highest"></div>
      </div>
    </div>
    <div
      class="flex flex-col gap-1 mt-1"
      v-else-if="holdings.length > 0"
      v-for="{ tokenId, metadataUrl, contract, name } in holdings"
      :key="tokenId"
    >
      <HoldingsListItem
        :token-id="tokenId"
        :metadata-url="metadataUrl"
        :contract="contract"
        :name="name"
      />
    </div>
    <div v-else class="mt-4 text-sm text-on-surface-variant text-center p-3">
      <p>You have no holdings yet</p>
    </div>
  </div>
</template>
