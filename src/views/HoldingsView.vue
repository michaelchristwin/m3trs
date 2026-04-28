<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const openTokenDetails = (tokenId: number) => {
  router.push({
    name: 'token details',
    params: {
      walletAddress: '0xb2403f83C23748b26B06173db7527383482E8c5a',
      tokenId: tokenId,
    },
  })
}

const accrue = () => {}

const collect = () => {}
type Holding = {
  tokenId: number
  balance: number
  claimableUsd: number
  stopTime: number
  status: 'Active' | 'Expiring'
}
const holdings: Holding[] = [
  {
    tokenId: 101,
    balance: 250,
    claimableUsd: 45.22,
    stopTime: 45,
    status: 'Active',
  },
  {
    tokenId: 88,
    balance: 100,
    claimableUsd: 12.1,
    stopTime: 2,
    status: 'Expiring',
  },
]
const statusPillClasses: Record<string, string> = {
  Active:
    'bg-primary-container/15 text-primary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold',
  Expiring:
    'bg-secondary-container/15 text-secondary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold',
}
</script>
<template>
  <div class="md:flex block justify-between items-end mb-8">
    <div>
      <h1 class="font-headline text-3xl font-bold tracking-tight text-on-surface">My Holdings</h1>
      <p class="text-on-surface-variant text-sm mt-1 font-body">
        ERC1155 Contract Balances &amp; Revenue Status
      </p>
    </div>
    <button
      class="bg-primary-container md:w-auto w-full text-on-primary-container px-6 py-2.5 rounded hover:bg-primary-fixed-dim transition-all glow-primary font-headline text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2"
    >
      <span class="material-symbols-outlined text-[18px]" data-icon="account_balance_wallet"
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
      <div class="col-span-2">Token ID</div>
      <div class="col-span-1 text-right">Balance</div>
      <div class="col-span-2 text-right">Claimable USD</div>
      <div class="col-span-2 text-right">Stop Time</div>
      <div class="col-span-2 text-center">Status</div>
      <div class="col-span-3 text-right">Actions</div>
    </div>
    <!-- Table Body (Rows via Spacing & Surface Container Shifts) -->
    <div class="flex flex-col gap-1 mt-1" v-for="holding in holdings" :key="holding.tokenId">
      <div
        @click="openTokenDetails(holding.tokenId)"
        aria-label="Open token details"
        class="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 cursor-pointer bg-surface-container-low rounded group hover:bg-surface-container transition-colors items-center"
      >
        <!-- Subtle warning indicator line on the left to show severity without borders -->
        <div
          class="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container/50"
          v-if="holding.status === 'Expiring'"
        ></div>
        <div class="md:col-span-2 text-sm text-on-surface">
          <span class="md:hidden text-on-surface-variant">Token ID: </span>
          <span class="font-mono-data">#{{ holding.tokenId }}</span>
        </div>
        <div class="col-span-1 font-mono-data text-sm text-on-surface text-right">
          {{ holding.balance }}
        </div>
        <div class="md:col-span-2 text-sm text-primary md:text-right">
          <span class="md:hidden text-on-surface-variant">Claimable: </span>
          ${{ holding.claimableUsd.toFixed(2) }}
        </div>
        <div class="md:col-span-2 text-sm text-on-surface md:text-right">
          <span class="md:hidden text-on-surface-variant">Stop Time: </span>
          {{ holding.stopTime }}d left
        </div>
        <div class="md:col-span-2 md:flex md:justify-center">
          <span :class="statusPillClasses[holding.status]">
            {{ holding.status }}
          </span>
        </div>
        <div class="md:col-span-3 flex flex-col md:flex-row md:justify-end gap-2">
          <button
            @click.prevent="accrue"
            class="md:block hidden px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-primary hover:border-primary/50 transition-colors text-xs font-headline uppercase tracking-wider"
          >
            Accrue
          </button>
          <button
            @click.prevent="collect"
            class="md:block hidden px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-primary hover:border-primary/50 transition-colors text-xs font-headline uppercase tracking-wider"
          >
            Collect
          </button>
          <button
            @click.prevent
            class="block md:hidden px-3 py-1.5 rounded bg-transparent text-on-surface-variant hover:text-on-surface transition-colors items-center justify-center"
          >
            <span class="material-symbols-outlined text-[18px]" data-icon="more_horiz"
              >more_horiz</span
            >
          </button>
        </div>
      </div>
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
      <div class="mb-1">&gt;[SYNC] Contract state verified at block 18492044</div>
      <div class="mb-1 text-primary-container">
        &gt;[OK] Balances retrieved successfully. 0ms latency.
      </div>
    </div>
  </div>
</template>
