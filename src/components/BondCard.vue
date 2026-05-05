<script lang="ts" setup>
import { M3TRS } from '@/config/smart-contracts/M3TRS'
import { useWaitForTransactionReceipt, useWriteContract } from '@wagmi/vue'

defineProps(['status', 'meterId', 'tokenId', 'stopTime'])
const { mutateAsync, isPending, data: txHash } = useWriteContract()
const expire = async (id: number) => {
  await mutateAsync({
    ...M3TRS,
    functionName: 'expire',
    args: [BigInt(id)],
  })
}

const {
  isLoading: isConfirming,
  // isSuccess: isConfirmed
} = useWaitForTransactionReceipt({
  hash: txHash,
})
</script>
<template>
  <article
    class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden group"
  >
    <!-- Status Pill -->
    <div
      class="absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-mono font-bold bg-[#00FF41]/15 text-[#00FF41] border border-[#00FF41]/30"
    >
      {{ status }}
    </div>
    <div class="mb-6">
      <p
        class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
      >
        METER_ID
      </p>
      <p class="font-mono text-xl text-on-surface">#{{ meterId }}</p>
    </div>
    <div class="grid grid-cols-2 gap-4 mb-8">
      <div>
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          TOKEN_ID
        </p>
        <p class="font-mono text-sm text-on-surface">#{{ tokenId }}</p>
      </div>
      <div>
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          STOP_TIME
        </p>
        <p class="font-mono text-sm text-on-surface">{{ stopTime }}</p>
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
        @click="expire(tokenId)"
        :disabled="isPending || isConfirming"
        class="w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold text-sm rounded hover:bg-primary transition-all duration-200 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]"
      >
        [EXPIRE]
      </button>
    </div>
  </article>
</template>
