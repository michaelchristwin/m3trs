<script lang="ts" setup>
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { useWaitForTransactionReceipt, useWriteContract } from "@wagmi/vue";
const props = defineProps(["tokenId", "class", "innerText"]);
const { mutateAsync, isPending, data: txHash } = useWriteContract();

const accrueRevenue = async () => {
  await mutateAsync({
    ...TRS,
    functionName: "accrueRevenue",
    args: [BigInt(props.tokenId)],
  });
};

const {
  isLoading: isConfirming,
  //isSuccess: isConfirmed
} = useWaitForTransactionReceipt({
  hash: txHash,
});
</script>
<template>
  <button :disabled="isPending || isConfirming" @click.stop="accrueRevenue" :class="props.class">
    {{ innerText }}
  </button>
</template>
