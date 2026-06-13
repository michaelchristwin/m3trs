<script lang="ts" setup>
import { useAppKit, useAppKitAccount } from "@reown/appkit/vue";

const { open } = useAppKit();
const eip155Account = useAppKitAccount({ namespace: "eip155" });
</script>

<template>
  <header
    class="fixed hidden top-0 w-full z-50 md:flex justify-between items-center px-6 h-16 bg-[#131313] backdrop-blur-md"
  >
    <div class="flex items-center gap-4">
      <RouterLink
        to="/discover"
        class="text-2xl font-black text-[#00FF41] tracking-tighter font-headline uppercase"
      >
        M3TRS
      </RouterLink>
    </div>
    <div
      class="flex items-center gap-6 font-headline uppercase tracking-wider text-xs"
    >
      <div class="flex items-center gap-4 border-l border-surface-variant pl-4">
        <button
          class="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high"
        >
          <span class="material-symbols-outlined text-[20px]"
            >notifications</span
          >
        </button>
        <button
          class="text-[#e5e2e1]/60 hover:text-[#00FF41] transition-colors relative flex items-center justify-center h-8 w-8 rounded hover:bg-surface-container-high"
        >
          <span class="material-symbols-outlined text-[20px]">settings</span>
        </button>
        <button
          @click="open({ view: 'Account' })"
          class="flex cursor-pointer items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded box-glow border border-primary/20"
        >
          <div
            class="w-2 h-2 rounded-[9999px] bg-primary-container shadow-[0_0_8px_rgba(0,255,65,0.8)]"
          ></div>
          <span class="font-mono-data text-[#00FF41] text-xs"
            >{{ eip155Account.address?.slice(0, 4) }}...{{
              eip155Account.address?.slice(-4)
            }}</span
          >
        </button>
      </div>
    </div>
  </header>
</template>
