<script lang="ts" setup>
import { useAppKitAccount } from '@reown/appkit/vue'
import { useRouter } from 'vue-router'
import AccrueButton from './buttons/AccrueButton.vue'
import CollectButton from './buttons/CollectButton.vue'
defineProps(['tokenId', 'status', 'balance', 'claimableUsd', 'stopTime'])
const router = useRouter()

const eip155Account = useAppKitAccount({ namespace: 'eip155' })
const openTokenDetails = (tokenId: number) => {
  router.push({
    name: 'token details',
    params: {
      walletAddress: eip155Account.value.address,
      tokenId: tokenId,
    },
  })
}
const statusPillClasses: Record<string, string> = {
  Active:
    'bg-primary-container/15 text-primary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold',
  Expiring:
    'bg-secondary-container/15 text-secondary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold',
}
</script>
<template>
  <div
    @click="openTokenDetails(tokenId)"
    aria-label="Open token details"
    class="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 cursor-pointer bg-surface-container-low rounded group hover:bg-surface-container transition-colors items-center"
  >
    <!-- Subtle warning indicator line on the left to show severity without borders -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container/50"
      v-if="status === 'Expiring'"
    ></div>
    <div class="md:col-span-2 text-sm text-on-surface">
      <span class="md:hidden text-on-surface-variant">Token ID: </span>
      <span class="font-mono-data">#{{ tokenId }}</span>
    </div>
    <div class="col-span-1 font-mono-data text-sm text-on-surface text-right">
      {{ balance }}
    </div>
    <div class="md:col-span-2 text-sm text-primary md:text-right">
      <span class="md:hidden text-on-surface-variant">Claimable: </span>
      ${{ claimableUsd.toFixed(2) }}
    </div>
    <div class="md:col-span-2 text-sm text-on-surface md:text-right">
      <span class="md:hidden text-on-surface-variant">Stop Time: </span>
      {{ stopTime }}d left
    </div>
    <div class="md:col-span-2 md:flex md:justify-center">
      <span :class="statusPillClasses[status]">
        {{ status }}
      </span>
    </div>
    <div class="md:col-span-3 flex flex-col md:flex-row md:justify-end gap-2">
      <AccrueButton
        inner-text="Accrue"
        :token-id="tokenId"
        class="md:block hidden px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-primary hover:border-primary/50 transition-colors text-xs font-headline uppercase tracking-wider"
      />
      <CollectButton
        inner-text="Collect"
        :token-id="tokenId"
        class="md:block hidden px-3 py-1.5 rounded border border-outline-variant/20 text-on-surface hover:text-primary hover:border-primary/50 transition-colors text-xs font-headline uppercase tracking-wider"
      />
      <button
        @click.prevent
        class="md:block hidden px-3 py-1.5 rounded bg-transparent text-on-surface-variant hover:text-on-surface transition-colors items-center justify-center"
      >
        <span class="material-symbols-outlined text-[18px]" data-icon="more_horiz">more_horiz</span>
      </button>
    </div>
  </div>
</template>
