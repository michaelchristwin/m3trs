<script lang="ts" setup>
import HoldingsListItem from "@/components/HoldingsListItem.vue";
import { useQuery } from "@tanstack/vue-query";
import { collections } from "@/config/opensea/collections";
import { computed, effect } from "vue";
import { trpc } from "@/config/trpc-client";

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data, error, isPending } = useQuery({
  queryKey: ["getNfts", address],
  queryFn: () =>
    trpc.opensea.getNFTByAccount.query({
      owner: address,
      collection: collections.holdings,
    }),
});
effect(() => {
  console.log(data.value?.nfts);
});

const holdings = computed(() => {
  return (
    data.value?.nfts?.map((nft) => {
      return {
        name: nft.name,
        tokenId: nft.identifier,
        metadataUrl: nft.metadataUrl,
        status: "Active",
        contract: nft.contract,
      };
    }) ?? []
  );
});
effect(() => {
  console.log(holdings.value);
});
</script>
<template>
  <div class="md:flex block justify-between items-end mb-8">
    <div>
      <h1
        class="font-headline text-3xl font-bold tracking-tight text-on-surface"
      >
        My Holdings
      </h1>
      <p class="text-on-surface-variant text-sm mt-1 font-body">
        ERC1155 Contract Balances &amp; Revenue Status
      </p>
    </div>
    <button
      class="bg-primary-container md:w-auto w-full text-on-primary-container px-6 py-2.5 rounded hover:bg-primary-fixed-dim transition-all glow-primary font-headline text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2"
    >
      <span
        class="material-symbols-outlined text-[18px]"
        data-icon="account_balance_wallet"
        >account_balance_wallet</span
      >
      Collect All Revenue
    </button>
  </div>
  <!-- High Density Data Table (No Lines, Tonal Layering) -->
  <div class="bg-surface-container-lowest rounded-lg p-1">
    <!-- Table Header -->
    <div
      class="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-surface-container-highest rounded-t font-headline text-xs uppercase tracking-widest text-on-surface-variant items-center"
    >
      <div class="col-span-2">Token Name</div>
      <div class="col-span-1 text-right">Balance</div>
      <div class="col-span-2 text-right">Claimable USD</div>
      <div class="col-span-2 text-right">Stop Time</div>
      <div class="col-span-2 text-center">Status</div>
      <div class="col-span-3 text-right">Actions</div>
    </div>
    <!-- Table Body (Rows via Spacing & Surface Container Shifts) -->
    <div
      class="flex flex-col gap-1 mt-1"
      v-if="holdings.length > 0"
      v-for="{ tokenId, status, metadataUrl, contract, name } in holdings"
      :key="tokenId"
    >
      <HoldingsListItem
        :token-id="tokenId"
        :status="status"
        :metadata-url="metadataUrl"
        :contract="contract"
        :name="name"
      />
    </div>
  </div>
  <!-- Terminal Output / Log Area (Decorative industrial element) -->
  <div class="mt-8 pt-6">
    <div class="flex items-center gap-2 mb-3">
      <span
        class="material-symbols-outlined text-on-surface-variant text-[14px]"
        data-icon="terminal"
        >terminal</span
      >
      <span
        class="font-mono-data text-[0.6875rem] text-on-surface-variant uppercase tracking-widest"
        >System Log</span
      >
    </div>
    <div
      class="bg-surface-container-lowest border border-surface-variant/50 rounded p-4 font-mono-data text-xs text-on-surface-variant opacity-70"
    >
      <div class="mb-1">&gt;[SYSTEM] Connected to node: eu-west-data-relay</div>
      <div class="mb-1">
        &gt;[SYNC] Contract state verified at block 18492044
      </div>
      <div class="mb-1 text-primary-container">
        &gt;[OK] Balances retrieved successfully. 0ms latency.
      </div>
    </div>
  </div>
</template>
