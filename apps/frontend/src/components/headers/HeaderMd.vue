<script lang="ts" setup>
import { useAppKit, useAppKitAccount } from "@reown/appkit/vue";
import { SidebarTrigger } from "@/components/ui/sidebar";

const { open } = useAppKit();
const eip155Account = useAppKitAccount({ namespace: "eip155" });
</script>

<template>
  <header
    class="hidden w-full md:flex justify-between items-center h-16 bg-[#131313] backdrop-blur-md"
  >
    <div class="flex items-center gap-4">
      <SidebarTrigger />
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
