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
  <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div>
      <h1 class="font-headline text-4xl font-bold tracking-tight text-on-surface mb-2">
        System Overview
      </h1>
      <p class="font-mono-data text-sm text-on-surface-variant">
        Real-time aggregate data for connected node:
        <span class="text-primary-container">0x71C...4eD1</span>
      </p>
    </div>
    <div class="flex items-center gap-4 font-mono-data text-xs">
      <div class="flex flex-col items-end">
        <span class="text-on-surface-variant">NETWORK STATUS</span>
        <span class="text-primary-container flex items-center gap-1.5"
          ><div class="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse"></div>
          OPTIMAL</span
        >
      </div>
      <div class="flex flex-col items-end border-l border-surface-variant pl-4">
        <span class="text-on-surface-variant">BLOCK HEIGHT</span>
        <span class="text-on-surface">18,492,011</span>
      </div>
    </div>
  </div>
  <!-- Three Panel Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Panel 1: Your Meters -->
    <div
      class="bg-surface-container-low rounded flex flex-col h-105 relative group border border-transparent hover:border-outline-variant/30 transition-colors"
    >
      <!-- Ghost border for depth -->
      <div
        class="absolute inset-0 border border-outline-variant opacity-15 rounded pointer-events-none"
      ></div>
      <div
        class="p-5 flex justify-between items-start bg-surface-container-highest border-b border-surface-variant/50"
      >
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-on-surface-variant text-[24px]"
            >ev_station</span
          >
          <h2 class="font-headline font-bold text-lg">Your Meters</h2>
        </div>
        <div
          class="font-mono-data bg-surface-variant text-on-surface px-2 py-0.5 rounded text-sm border border-outline-variant/50"
        >
          3
        </div>
      </div>
      <div class="flex-1 p-5 overflow-y-auto space-y-4">
        <!-- Item 1 (Active) -->
        <div
          class="bg-surface p-4 rounded flex justify-between items-center group/item hover:bg-surface-container-high transition-colors"
        >
          <div>
            <div class="font-label-caps text-on-surface-variant mb-1">METER ID</div>
            <div class="font-mono-data text-on-surface font-bold">#101</div>
          </div>
          <div class="flex flex-col items-end">
            <div
              class="bg-[#00FF41]/15 text-[#00FF41] px-3 py-1 rounded-[9999px] font-label-caps font-bold tracking-widest text-[10px] border border-[#00FF41]/30"
            >
              ACTIVE
            </div>
          </div>
        </div>
        <!-- Item 2 (Expiring) -->
        <div
          class="bg-surface p-4 rounded flex justify-between items-center group/item hover:bg-surface-container-high transition-colors"
        >
          <div>
            <div class="font-label-caps text-on-surface-variant mb-1">METER ID</div>
            <div class="font-mono-data text-on-surface font-bold">#88</div>
          </div>
          <div class="flex flex-col items-end">
            <div
              class="bg-secondary-container/15 text-secondary-container px-3 py-1 rounded-[9999px] font-label-caps font-bold tracking-widest text-[10px] border border-secondary-container/30"
            >
              EXPIRING
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 mt-auto">
        <button
          class="w-full bg-primary-container text-on-primary-container font-headline font-bold py-3 rounded text-sm hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2"
        >
          VIEW ALL METERS
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </div>
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
          <span class="material-symbols-outlined text-on-surface-variant text-[24px]"
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
          <div class="font-label-caps text-on-surface-variant mb-2">TOTAL CLAIMABLE VALUE</div>
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
        <button
          class="w-full bg-transparent border-2 border-outline-variant text-on-surface font-headline font-bold py-2.5 rounded text-sm hover:border-primary-container hover:text-primary-container transition-colors flex items-center justify-center gap-2"
        >
          MANAGE HOLDINGS
        </button>
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
          <span class="material-symbols-outlined text-on-surface-variant text-[24px]"
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
            <div class="font-label-caps text-on-surface-variant mb-1">BOND ID</div>
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
        <button
          class="w-full bg-transparent border-2 border-outline-variant text-on-surface font-headline font-bold py-2.5 rounded text-sm hover:border-primary-container hover:text-primary-container transition-colors flex items-center justify-center gap-2"
        >
          VIEW BONDS
        </button>
      </div>
    </div>
  </div>
</template>
