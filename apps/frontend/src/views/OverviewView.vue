<script lang="ts" setup>
import ListingItem from "@/components/ListingItem.vue";
import ListingsSkeleton from "@/components/ListingsSkeleton.vue";
import { collections } from "@/config/opensea/collections";
import { trpc } from "@/config/trpc-client";
import { ListingStatusEnum } from "@m3trs/opensea-sdk";
import { useQuery } from "@tanstack/vue-query";
import { useHead } from "@unhead/vue";
import { onMounted, onUnmounted, ref } from "vue";

useHead({
  title: "Overview",
  meta: [{ name: "description", content: "dashboard" }],
});

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data: listings, isLoading } = useQuery({
  queryKey: ["getBestListingsCollection", address, collections.holdings],
  queryFn: async () => {
    const result = await trpc.opensea.getBestListingsCollection.query({
      slug: collections.holdings.toLowerCase(),
      limit: 20,
    });
    const filteredResult = result.listings.filter(
      (l) =>
        l.status !== ListingStatusEnum.Cancelled &&
        l.status !== ListingStatusEnum.Expired &&
        l.status !== ListingStatusEnum.Inactive &&
        l.status !== ListingStatusEnum.Fulfilled,
    );
    return filteredResult;
  },
});
const targetSection = ref<HTMLElement | null>(null);
const isVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry) {
        isVisible.value = entry.isIntersecting;
      }
    },
    {
      threshold: 0.2,
    },
  );

  if (targetSection.value) {
    observer.observe(targetSection.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});

function scrollToSection() {
  targetSection.value?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
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

  <!-- Three Panel Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Panel 2: Your Holdings -->
    <div
      class="bg-surface-container-low rounded flex flex-col h-95 relative group border border-transparent hover:border-outline-variant/30 transition-colors"
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
      class="bg-surface-container-low rounded flex flex-col h-95 relative group border border-transparent hover:border-outline-variant/30 transition-colors"
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
  <div class="mt-17" ref="targetSection">
    <div class="md:flex block justify-between items-end mb-8">
      <div>
        <h1
          class="font-headline text-3xl font-bold tracking-tight text-on-surface"
        >
          MTRS Marketplace
        </h1>
      </div>
    </div>
    <!-- High Density Data Table (No Lines, Tonal Layering) -->
    <div class="bg-surface-container-lowest rounded-lg p-1">
      <div class="space-y-4" v-if="isLoading">
        <ListingsSkeleton v-for="i in 5" :key="i" />
      </div>

      <div class="space-y-4" v-else-if="listings && listings.length > 0">
        <ListingItem
          v-for="listing in listings"
          :key="listing.orderHash"
          :listing="listing"
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
  <button
    v-if="!isVisible"
    @click="scrollToSection"
    class="fixed right-6 bottom-19 flex justify-center items-center bg-primary-container w-12 h-12 rounded-[100%] text-neutral-800 animate-bounce shadow-lg transition hover:scale-105"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-chevron-down-icon lucide-chevron-down"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</template>
