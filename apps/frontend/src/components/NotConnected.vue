<script lang="ts" setup>
import { useAppKit } from "@reown/appkit/vue";
const { open } = useAppKit();
</script>
<template>
  <main
    class="grow flex items-center justify-center relative z-10 px-4 pt-16 pb-12 w-full max-w-4xl mx-auto"
  >
    <!-- Centered Layout Container -->
    <div
      class="flex flex-col items-center text-center space-y-12 w-full relative"
    >
      <!-- Ambient Glow Behind Card -->
      <div class="ambient-glow"></div>

      <!-- Content Area -->
      <div class="flex flex-col items-center space-y-6 max-w-xl relative z-10">
        <h1
          class="font-headline text-3xl md:text-4xl font-bold text-on-surface uppercase tracking-wide leading-tight"
        >
          Please connect your wallet to continue
        </h1>
        <p
          class="font-body text-base md:text-lg text-on-surface-variant max-w-md"
        >
          Access your energy revenue dashboard, manage holdings, and issue bonds
          on the M3tering Protocol.
        </p>
        <!-- Primary CTA Button -->
        <div class="pt-4 w-full sm:w-auto">
          <button
            type="button"
            @click="open({ view: 'Connect' })"
            class="w-full sm:w-auto bg-primary-container text-on-primary-container font-headline font-bold uppercase tracking-widest px-10 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-primary-fixed transition-colors duration-300 relative group overflow-hidden"
          >
            <!-- Technical Micro-Gradient Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
            <span
              class="material-symbols-outlined text-[20px] relative z-10"
              data-icon="account_balance_wallet"
              data-weight="fill"
              style="font-variation-settings: &quot;FILL&quot; 1"
              >account_balance_wallet</span
            >
            <span class="relative z-10 text-sm md:text-base"
              >CONNECT WALLET</span
            >
          </button>
        </div>
        <!-- Technical Micro-Data Footer (Grid Logic) -->
        <div
          class="pt-8 flex items-center gap-4 text-[0.6875rem] font-mono-tech text-outline opacity-60 uppercase tracking-widest"
        >
          <span>Protocol v2.1.4</span>
          <span class="w-1 h-1 bg-outline rounded-full"></span>
          <span>Status: Disconnected</span>
        </div>
      </div>
    </div>
  </main>
</template>
