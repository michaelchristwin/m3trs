<script lang="ts" setup>
import { useAppKit, useAppKitAccount } from "@reown/appkit/vue";

const { open } = useAppKit();
const eip155Account = useAppKitAccount({ namespace: "eip155" });
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 flex md:hidden items-center justify-between px-4 h-16 bg-[#131313] shadow-[0_0_15px_rgba(0,255,65,0.05)] rounded-none mb-1 transition-all duration-300"
  >
    <RouterLink
      to="/discover"
      class="font-['Space_Grotesk'] font-bold tracking-tighter text-[#00FF41] text-xl"
      >M3TRS</RouterLink
    >
    <!-- Trailing Icon -->
    <div class="space-x-2 flex items-center">
      <button
        class="text-neutral-500 hover:bg-[#00FF41]/10 transition-all duration-300 active:scale-95 w-10 h-10 flex items-center justify-center rounded-full"
      >
        <span class="material-symbols-outlined">notifications</span>
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
  </header>
</template>
