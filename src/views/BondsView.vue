<script lang="ts" setup>
import { M3TRS } from '@/config/smart-contracts/M3TRS'
import { useHead } from '@unhead/vue'
import { useWriteContract } from '@wagmi/vue'
useHead({
  title: 'Bonds',
  meta: [{ name: 'description', content: '' }],
})
const { mutateAsync, isPending } = useWriteContract()

const expire = async (id: number) => {
  await mutateAsync({
    ...M3TRS,
    functionName: 'expire',
    args: [BigInt(id)],
  })
}
</script>

<template>
  <header class="mb-8 md:mb-12">
    <h1 class="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-2">
      BOND ASSETS
    </h1>
    <p class="text-on-surface-variant font-mono text-sm max-w-2xl">
      ACTIVE_CONTRACTS: <span class="text-primary-container">03</span> | TOTAL_LOCKED_VALUE:
      <span class="text-on-surface">1,450 kWh</span>
    </p>
  </header>
  <!-- Bento Grid Layout for Bonds -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <!-- Card 1: REDEEMABLE -->
    <article
      class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden group"
    >
      <!-- Status Pill -->
      <div
        class="absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-mono font-bold bg-[#00FF41]/15 text-[#00FF41] border border-[#00FF41]/30"
      >
        REDEEMABLE
      </div>
      <div class="mb-6">
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          METER_ID
        </p>
        <p class="font-mono text-xl text-on-surface">#501</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-8">
        <div>
          <p
            class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
          >
            TOKEN_ID
          </p>
          <p class="font-mono text-sm text-on-surface">#101</p>
        </div>
        <div>
          <p
            class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
          >
            STOP_TIME
          </p>
          <p class="font-mono text-sm text-on-surface">2024-12-31</p>
        </div>
      </div>
      <div class="bg-surface-container-high rounded p-4 mb-6 border-l-2 border-primary-container">
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          COUNTDOWN
        </p>
        <p class="font-mono text-2xl text-primary-container">00 DAYS</p>
      </div>
      <div class="mt-auto pt-4 border-t border-outline-variant/20">
        <button
          @click="expire(3)"
          :disabled="isPending"
          class="w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold text-sm rounded hover:bg-primary transition-all duration-200 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
        >
          [EXPIRE]
        </button>
      </div>
    </article>
    <!-- Card 2: PENDING -->
    <article
      class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden group"
    >
      <!-- Status Pill -->
      <div
        class="absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-mono font-bold bg-surface-container-highest text-on-surface-variant border border-outline-variant/30"
      >
        PENDING
      </div>
      <div class="mb-6">
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          METER_ID
        </p>
        <p class="font-mono text-xl text-on-surface">#502</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-8">
        <div>
          <p
            class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
          >
            TOKEN_ID
          </p>
          <p class="font-mono text-sm text-on-surface">#102</p>
        </div>
        <div>
          <p
            class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
          >
            STOP_TIME
          </p>
          <p class="font-mono text-sm text-on-surface">2024-12-31</p>
        </div>
      </div>
      <div class="bg-surface-container-high rounded p-4 mb-6 border-l-2 border-secondary-container">
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          COUNTDOWN
        </p>
        <p class="font-mono text-2xl text-secondary-container">45 DAYS</p>
      </div>
      <div class="mt-auto pt-4 border-t border-outline-variant/20">
        <button
          class="w-full py-3 bg-surface-container-highest text-on-surface-variant font-headline font-bold text-sm rounded cursor-not-allowed opacity-50"
          disabled
        >
          [EXPIRE]
        </button>
      </div>
    </article>
    <!-- Card 3: PENDING -->
    <article
      class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden group"
    >
      <!-- Status Pill -->
      <div
        class="absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-mono font-bold bg-surface-container-highest text-on-surface-variant border border-outline-variant/30"
      >
        PENDING
      </div>
      <div class="mb-6">
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          METER_ID
        </p>
        <p class="font-mono text-xl text-on-surface">#503</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-8">
        <div>
          <p
            class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
          >
            TOKEN_ID
          </p>
          <p class="font-mono text-sm text-on-surface">#103</p>
        </div>
        <div>
          <p
            class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
          >
            STOP_TIME
          </p>
          <p class="font-mono text-sm text-on-surface">2024-12-31</p>
        </div>
      </div>
      <div class="bg-surface-container-high rounded p-4 mb-6 border-l-2 border-secondary-container">
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          COUNTDOWN
        </p>
        <p class="font-mono text-2xl text-secondary-container">12 DAYS</p>
      </div>
      <div class="mt-auto pt-4 border-t border-outline-variant/20">
        <button
          class="w-full py-3 bg-surface-container-highest text-on-surface-variant font-headline font-bold text-sm rounded cursor-not-allowed opacity-50"
          disabled
        >
          [EXPIRE]
        </button>
      </div>
    </article>
  </div>
</template>
