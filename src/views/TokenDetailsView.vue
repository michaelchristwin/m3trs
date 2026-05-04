<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()

useHead({
  title: `Holdings | Token ${route.params.tokenId}`,
  meta: [{ name: 'description', content: `Details for token ${route.params.tokenId}` }],
})
const handleBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push({ name: 'holdings' })
  }
}
</script>

<template>
  <!-- Header Section -->
  <div class="mb-10">
    <div class="flex items-center gap-4 mb-2">
      <button
        :onclick="handleBack"
        aria-label="Navigate back"
        class="text-on-surface/50 hover:text-primary transition-colors flex items-center gap-1 font-headline text-sm"
      >
        <span class="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
        Back
      </button>
    </div>
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h1 class="font-headline font-bold text-3xl md:text-5xl text-on-surface tracking-tight">
          Token <span class="font-mono text-primary">#{{ $route.params.tokenId }}</span>
        </h1>
        <p class="font-mono text-sm text-on-surface/50 mt-2 tracking-widest uppercase">
          Contract Details &amp; Revenue Hub
        </p>
      </div>
      <div
        class="flex items-center bg-primary-container/15 px-4 py-1.5 rounded-pill ghost-border-primary self-start md:self-auto"
      >
        <span class="w-2 h-2 rounded-full bg-primary-container mr-2 animate-pulse"></span>
        <span
          class="font-headline font-bold text-sm text-primary-container uppercase tracking-wider"
          >Active</span
        >
      </div>
    </div>
  </div>
  <!-- Bento Grid Layout -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
    <!-- Left Column (Metadata) -->
    <div class="lg:col-span-4 flex flex-col gap-6">
      <!-- Metadata Card -->
      <div
        class="bg-surface-container-low rounded-lg ghost-border-outline overflow-hidden flex flex-col"
      >
        <div class="bg-surface-container-highest px-6 py-4 flex items-center justify-between">
          <h3 class="font-headline font-bold text-on-surface text-sm uppercase tracking-wider">
            Metadata
          </h3>
          <span class="material-symbols-outlined text-on-surface/50 text-lg" data-icon="data_object"
            >data_object</span
          >
        </div>
        <div class="p-6 flex flex-col gap-6">
          <div>
            <label
              class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-1"
              >URI</label
            >
            <a
              class="font-mono text-sm text-primary hover:underline break-all truncate block"
              href="#"
              >ipfs://Qm...xYz</a
            >
          </div>
          <div class="w-full h-px bg-surface-container"></div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-1"
                >Supply</label
              >
              <div class="font-mono text-lg text-on-surface">1000</div>
            </div>
            <div>
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-1"
                >M3TER ID</label
              >
              <div class="font-mono text-lg text-secondary">#501</div>
            </div>
          </div>
          <div class="w-full h-px bg-surface-container"></div>
          <div>
            <label
              class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-1"
              >Stop Time</label
            >
            <div class="font-mono text-sm text-on-surface mb-1">2024-12-31</div>
            <div
              class="font-mono text-xs text-secondary-container bg-secondary-container/10 inline-block px-2 py-0.5 rounded"
            >
              Expires in 45 days
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Right Column (Actions & Revenue) -->
    <div class="lg:col-span-8 flex flex-col gap-6">
      <!-- Revenue Panel -->
      <div
        class="bg-surface-container-low rounded-lg ghost-border-outline overflow-hidden relative"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
          class="bg-surface-container-highest px-6 py-4 flex items-center justify-between relative z-10"
        >
          <h3
            class="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2"
          >
            <span
              class="material-symbols-outlined text-primary text-lg"
              data-icon="account_balance_wallet"
              >account_balance_wallet</span
            >
            Revenue Hub
          </h3>
        </div>
        <div class="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative z-10">
          <div class="flex-1 flex flex-col justify-center">
            <label
              class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-2"
              >Total Accrued</label
            >
            <div
              class="font-mono text-[3.5rem] leading-none text-on-surface font-light tracking-tight mb-2"
            >
              $1,200.<span class="text-on-surface/40">00</span>
            </div>
            <div class="flex items-center gap-2 text-primary mt-2">
              <span class="material-symbols-outlined text-sm" data-icon="trending_up"
                >trending_up</span
              >
              <span class="font-mono text-xs">+12.4% this epoch</span>
            </div>
          </div>
          <div class="w-px bg-surface-container hidden md:block"></div>
          <div class="w-full h-px bg-surface-container md:hidden"></div>
          <div class="flex-1 flex flex-col justify-center">
            <label
              class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-2"
              >Your Claimable</label
            >
            <div class="font-mono text-3xl text-primary mb-6">
              $45.<span class="text-primary/60">22</span>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <button
                class="flex-1 bg-transparent ghost-border-primary text-primary font-headline font-bold text-sm py-3 px-4 rounded hover:bg-primary/5 transition-all"
              >
                Accrue Revenue
              </button>
              <button
                class="flex-1 bg-primary-container text-on-primary-container font-headline font-bold text-sm py-3 px-4 rounded hover:brightness-110 transition-all glow-primary glass-gradient-primary"
              >
                Collect Revenue
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Transfer Panel -->
      <div class="bg-surface-container-low rounded-lg ghost-border-outline overflow-hidden">
        <div class="bg-surface-container-highest px-6 py-4 flex items-center justify-between">
          <h3
            class="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2"
          >
            <span
              class="material-symbols-outlined text-on-surface/50 text-lg"
              data-icon="swap_horiz"
              >swap_horiz</span
            >
            Transfer Operations
          </h3>
        </div>
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row gap-6 items-end">
            <div class="flex-1 w-full">
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-2"
                >Recipient Address</label
              >
              <div class="relative">
                <span
                  class="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-on-surface/40 pb-2"
                  data-icon="wallet"
                  >wallet</span
                >
                <input
                  class="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-mono text-sm focus:ring-0 focus:border-primary focus:shadow-[0_1px_0_0_rgba(0,255,65,1)] transition-all pl-8 pb-2 pt-2 placeholder:text-on-surface/20"
                  placeholder="0x..."
                  type="text"
                />
              </div>
            </div>
            <div class="w-full md:w-1/3">
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-[0.05em] block mb-2"
                >Amount</label
              >
              <input
                class="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-mono text-sm focus:ring-0 focus:border-primary focus:shadow-[0_1px_0_0_rgba(0,255,65,1)] transition-all pb-2 pt-2 placeholder:text-on-surface/20 text-right"
                placeholder="0.00"
                type="number"
              />
            </div>
            <button
              class="w-full md:w-auto bg-transparent ghost-border-primary text-primary font-headline font-bold text-sm py-2.5 px-8 rounded hover:bg-primary/5 transition-all whitespace-nowrap self-stretch md:self-auto mb-1"
            >
              Execute Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Conditional Expiry Panel (Mocked state for demonstration, usually hidden if active) -->
  <!-- Note: Displaying here to fulfill prompt requirements, conceptually this would only show if stop time passed -->
  <div
    class="mt-8 bg-surface-container-low rounded-lg border border-error-container/30 overflow-hidden opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
  >
    <div
      class="bg-error-container/10 px-6 py-4 flex items-center justify-between border-b border-error-container/20"
    >
      <h3
        class="font-headline font-bold text-error text-sm uppercase tracking-wider flex items-center gap-2"
      >
        <span class="material-symbols-outlined text-error text-lg" data-icon="warning"
          >warning</span
        >
        Contract Expiry
      </h3>
      <span class="font-mono text-xs text-error/60">CONDITIONAL STATE</span>
    </div>
    <div
      class="p-6 flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-container-lowest/50"
    >
      <div>
        <p class="font-mono text-sm text-on-surface/80">
          Stop time has passed. Manual expiry execution required to finalize state.
        </p>
        <p class="font-mono text-xs text-error/80 mt-1">
          Warning: This action is irreversible and halts all revenue accrual.
        </p>
      </div>
      <button
        class="bg-error-container text-on-error-container font-headline font-bold text-sm py-2 px-6 rounded hover:brightness-110 transition-all whitespace-nowrap border border-error/20"
      >
        Force Expire
      </button>
    </div>
  </div>
</template>
