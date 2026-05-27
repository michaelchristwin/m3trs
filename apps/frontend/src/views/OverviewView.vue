<script lang="ts" setup>
import { collections } from "@/config/opensea/collections";
import { trpc } from "@/config/trpc-client";
import { useAppKitAccount } from "@reown/appkit/vue";
import { useQuery } from "@tanstack/vue-query";
import { useHead } from "@unhead/vue";
import { computed } from "vue";
useHead({
  title: "Overview",
  meta: [{ name: "description", content: "dashboard" }],
});

const eip155Account = useAppKitAccount({ namespace: "eip155" });
const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data, isLoading } = useQuery({
  queryKey: ["getNftsByContract", address, collections.holdings],
  queryFn: () =>
    trpc.opensea.getNFTsByContract.query({
      address,
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
</script>
<template>
  <div
    class="absolute inset-0 pointer-events-none opacity-[0.03] z-[-1]"
    style="
      background-image:
        linear-gradient(to right, #00ff41 1px, transparent 1px),
        linear-gradient(to bottom, #00ff41 1px, transparent 1px);
      background-size: 40px 40px;
    "
  ></div>
  <!-- Dashboard Header -->
  <div
    class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6"
  >
    <div>
      <h1
        class="font-headline text-4xl font-bold tracking-tight text-on-surface mb-2"
      >
        System Overview
      </h1>
      <p class="font-mono-data text-sm text-on-surface-variant">
        Real-time aggregate data for connected node:
        <span class="text-primary-container"
          >{{ eip155Account.address?.slice(0, 5) }}...{{
            eip155Account.address?.slice(-4)
          }}</span
        >
      </p>
    </div>
  </div>
  <!-- Three Panel Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Panel 2: Your Holdings -->
    <div
      class="bg-surface-container-low rounded flex flex-col h-105 relative group border border-transparent hover:border-outline-variant/30 transition-colors"
    >
      <div
        class="absolute inset-0 border border-outline-variant opacity-15 rounded pointer-events-none"
      ></div>
      <div
        class="p-5 flex justify-between items-start bg-surface-container-highest border-b border-surface-variant/50"
      >
        <div class="flex items-center gap-3">
          <span
            class="material-symbols-outlined text-on-surface-variant text-[24px]"
            >account_balance_wallet</span
          >
          <h2 class="font-headline font-bold text-lg">Your Holdings</h2>
        </div>
        <div
          class="font-mono-data bg-surface-variant text-on-surface px-2 py-0.5 rounded text-sm border border-outline-variant/50"
        >
          12
        </div>
      </div>
      <div class="flex-1 p-5 flex flex-col justify-center items-center">
        <div class="text-center mb-6">
          <div class="font-label-caps text-on-surface-variant mb-2">
            TOTAL CLAIMABLE VALUE
          </div>
          <div
            class="font-mono-data text-5xl font-bold text-primary-container text-glow tracking-tight"
          >
            $142.50
          </div>
        </div>
        <div
          class="w-full bg-surface p-4 rounded border border-surface-variant/50 text-sm font-mono-data text-on-surface-variant flex justify-between"
        >
          <span>AGGREGATE YIELD</span>
          <span class="text-on-surface">+4.2% APY</span>
        </div>
      </div>
      <div class="p-5 mt-auto">
        <RouterLink
          :to="{ name: 'holdings' }"
          class="w-full bg-transparent border-2 border-outline-variant text-on-surface font-headline font-bold py-2.5 rounded text-sm hover:border-primary-container hover:text-primary-container transition-colors flex items-center justify-center gap-2"
        >
          MANAGE HOLDINGS
        </RouterLink>
      </div>
    </div>
    <!-- Panel 3: Your Bonds -->
    <div
      class="bg-surface-container-low rounded flex flex-col h-105 relative group border border-transparent hover:border-outline-variant/30 transition-colors"
    >
      <div
        class="absolute inset-0 border border-outline-variant opacity-15 rounded pointer-events-none"
      ></div>
      <div
        class="p-5 flex justify-between items-start bg-surface-container-highest border-b border-surface-variant/50"
      >
        <div class="flex items-center gap-3">
          <span
            class="material-symbols-outlined text-on-surface-variant text-[24px]"
            >receipt_long</span
          >
          <h2 class="font-headline font-bold text-lg">Your Bonds</h2>
        </div>
        <div
          class="font-mono-data bg-surface-variant text-on-surface px-2 py-0.5 rounded text-sm border border-outline-variant/50"
        >
          1
        </div>
      </div>
      <div class="flex-1 p-5 overflow-y-auto space-y-4">
        <!-- Item 1 (Redeemable) -->
        <div
          class="bg-surface p-4 rounded flex justify-between items-center group/item hover:bg-surface-container-high transition-colors border-l-2 border-primary-container"
        >
          <div>
            <div class="font-label-caps text-on-surface-variant mb-1">
              BOND ID
            </div>
            <div class="font-mono-data text-on-surface font-bold">#42</div>
          </div>
          <div class="flex flex-col items-end">
            <div
              class="bg-[#00FF41]/15 text-[#00FF41] px-3 py-1 rounded-[9999px] font-label-caps font-bold tracking-widest text-[10px] border border-[#00FF41]/30"
            >
              REDEEMABLE
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 mt-auto">
        <RouterLink
          :to="{
            name: 'bonds',
          }"
          class="w-full bg-transparent border-2 border-outline-variant text-on-surface font-headline font-bold py-2.5 rounded text-sm hover:border-primary-container hover:text-primary-container transition-colors flex items-center justify-center gap-2"
        >
          VIEW BONDS
        </RouterLink>
      </div>
    </div>
  </div>
  <div class="mt-30">
    <div class="md:flex block justify-between items-end mb-8">
      <div>
        <h1
          class="font-headline text-3xl font-bold tracking-tight text-on-surface"
        >
          Listings
        </h1>
        <p class="text-on-surface-variant text-sm mt-1 font-body">
          ERC1155 Contract Balances &amp; Revenue Status
        </p>
      </div>
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
          <div
            class="w-10 h-10 rounded-full bg-surface-container-highest"
          ></div>

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
        <div class="col-span-3 flex justify-end gap-2">
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
        <p>There are no listings yet</p>
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
        <div class="mb-1">
          &gt;[SYSTEM] Connected to node: eu-west-data-relay
        </div>
        <div class="mb-1">
          &gt;[SYNC] Contract state verified at block 18492044
        </div>
        <div class="mb-1 text-primary-container">
          &gt;[OK] Balances retrieved successfully. 0ms latency.
        </div>
      </div>
    </div>
  </div>
</template>
