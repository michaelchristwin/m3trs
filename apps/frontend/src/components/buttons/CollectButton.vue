<script lang="ts" setup>
import { M3TRS } from '@/config/smart-contracts/M3TRS'
import { useWaitForTransactionReceipt, useWriteContract } from '@wagmi/vue'
const props = defineProps(['tokenId', 'class', 'innerText'])
const { mutateAsync, isPending, data: txHash } = useWriteContract()

const collectRevenue = async () => {
  await mutateAsync({
    ...M3TRS,
    functionName: 'collectRevenue',
    args: [BigInt(props.tokenId)],
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
  <button @click.stop="collectRevenue" :disabled="isPending || isConfirming" :class="props.class">
    {{ innerText }}
  </button>
</template>
