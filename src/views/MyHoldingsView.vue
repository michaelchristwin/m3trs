<template>
  <div class="flex justify-between items-end mb-8">
    <div>
      <h1 class="font-headline text-3xl font-bold tracking-tight text-on-surface">My Holdings</h1>
      <p class="text-on-surface-variant text-sm mt-1 font-body">
        ERC1155 Contract Balances &amp; Revenue Status
      </p>
    </div>
    <button
      class="bg-primary-container text-on-primary-container px-6 py-2.5 rounded hover:bg-primary-fixed-dim transition-all glow-primary font-headline text-sm font-bold tracking-wider uppercase flex items-center gap-2"
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
      class="grid grid-cols-12 gap-4 px-6 py-3 bg-surface-container-highest rounded-t font-headline text-xs uppercase tracking-widest text-on-surface-variant items-center"
    >
      <div class="col-span-2">Token ID</div>
      <div class="col-span-1 text-right">Balance</div>
      <div class="col-span-2 text-right">Claimable USD</div>
      <div class="col-span-2 text-right">Stop Time</div>
      <div class="col-span-2 text-center">Status</div>
      <div class="col-span-3 text-right">Actions</div>
    </div>
    <!-- Table Body (Rows via Spacing & Surface Container Shifts) -->
    <div class="flex flex-col gap-1 mt-1">
      <!-- Row 1: ACTIVE -->

      <RouterLink
        :to="{
          name: 'token details',
          params: { walletAddress: '0xb2403f83C23748b26B06173db7527383482E8c5a', tokenId: 101 },
        }"
        class="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low rounded group hover:bg-surface-container transition-colors items-center"
      >
        <div class="col-span-2 font-mono-data text-sm text-on-surface">
          <span class="text-on-surface-variant mr-1">#</span>101
        </div>
        <div class="col-span-1 font-mono-data text-sm text-on-surface text-right">250</div>
        <div
          class="col-span-2 font-mono-data text-sm text-primary text-right flex justify-end items-center gap-1"
        >
          $45.22
        </div>
        <div class="col-span-2 font-mono-data text-sm text-on-surface text-right">45d left</div>
        <div class="col-span-2 flex justify-center">
          <span
            class="bg-primary-container/15 text-primary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold"
          >
            Active
          </span>
        </div>
        <div class="col-span-3 flex justify-end gap-2">
          <button
            class="px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-primary hover:border-primary/50 transition-colors text-xs font-headline uppercase tracking-wider"
          >
            Accrue
          </button>
          <button
            class="px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-primary hover:border-primary/50 transition-colors text-xs font-headline uppercase tracking-wider"
          >
            Collect
          </button>
          <button
            class="px-3 py-1.5 rounded bg-transparent text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
          >
            <span class="material-symbols-outlined text-[18px]" data-icon="more_horiz"
              >more_horiz</span
            >
          </button>
        </div>
      </RouterLink>
      <!-- Row 2: EXPIRING -->
      <RouterLink
        :to="{
          name: 'token details',
          params: { walletAddress: '0xb2403f83C23748b26B06173db7527383482E8c5a', tokenId: 101 },
        }"
        class="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low rounded group hover:bg-surface-container transition-colors items-center relative overflow-hidden"
      >
        <!-- Subtle warning indicator line on the left to show severity without borders -->
        <div class="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container/50"></div>
        <div class="col-span-2 font-mono-data text-sm text-on-surface pl-2">
          <span class="text-on-surface-variant mr-1">#</span>88
        </div>
        <div class="col-span-1 font-mono-data text-sm text-on-surface text-right">100</div>
        <div
          class="col-span-2 font-mono-data text-sm text-secondary-container text-right flex justify-end items-center gap-1"
        >
          $12.10
        </div>
        <div class="col-span-2 font-mono-data text-sm text-secondary-container text-right">
          2d left
        </div>
        <div class="col-span-2 flex justify-center">
          <span
            class="bg-secondary-container/15 text-secondary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold"
          >
            Expiring
          </span>
        </div>
        <div class="col-span-3 flex justify-end gap-2">
          <button
            class="px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-secondary-container hover:border-secondary-container/50 transition-colors text-xs font-headline uppercase tracking-wider"
          >
            Accrue
          </button>
          <button
            class="px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-secondary-container hover:border-secondary-container/50 transition-colors text-xs font-headline uppercase tracking-wider"
          >
            Collect
          </button>
          <button
            class="px-3 py-1.5 rounded bg-transparent text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
          >
            <span class="material-symbols-outlined text-[18px]" data-icon="more_horiz"
              >more_horiz</span
            >
          </button>
        </div>
      </RouterLink>
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
