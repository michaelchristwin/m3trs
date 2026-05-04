<script lang="ts" setup>
import { M3TRS } from '@/config/smart-contracts/M3TRS'
import { useWaitForTransactionReceipt, useWriteContract } from '@wagmi/vue'
const props = defineProps(['tokenId', 'class', 'innerText'])
const { mutateAsync, isPending, data: txHash } = useWriteContract()

const accrueRevenue = async () => {
  await mutateAsync({
    ...M3TRS,
    functionName: 'accrueRevenue',
    args: [BigInt(props.tokenId)],
  })
}

const {
  isLoading: isConfirming,
  //isSuccess: isConfirmed
} = useWaitForTransactionReceipt({
  hash: txHash,
})
</script>
<template>
  <button :disabled="isPending || isConfirming" @click="accrueRevenue" :class="props.class">
    {{ innerText }}
  </button>
</template>
