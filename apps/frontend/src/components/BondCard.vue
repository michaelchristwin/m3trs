<script lang="ts" setup>
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { useQuery } from "@tanstack/vue-query";
import { useWaitForTransactionReceipt, useWriteContract } from "@wagmi/vue";
import { differenceInDays } from "date-fns";
import { effect } from "vue";
const props = defineProps(["tokenId", "metadataUrl"]);
interface Metadata {
  name: string;
  stopTime: number;
  description: string;
}
const { data: token, isLoading } = useQuery<Metadata>({
  queryKey: ["getBond", props.tokenId],
  queryFn: () => fetch(props.metadataUrl).then((res) => res.json()),
});

const { mutateAsync, data: txHash } = useWriteContract();
const expire = async (id: number) => {
  await mutateAsync({
    ...TRS,
    functionName: "expire",
    args: [BigInt(id)],
  });
};

useWaitForTransactionReceipt({
  hash: txHash,
});
effect(() => {
  console.log(token.value);
});
</script>
<template>
  <article
    v-if="isLoading"
    class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden animate-pulse"
  >
    <!-- Status Pill -->
    <div
      class="absolute top-6 right-6 h-6 w-24 rounded-full bg-surface-container-highest"
    ></div>

    <!-- Meter ID -->
    <div class="mb-6">
      <div class="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

      <div class="h-7 w-24 rounded bg-surface-container-highest"></div>
    </div>

    <!-- Token + Stop Time -->
    <div class="grid grid-cols-2 gap-4 mb-8">
      <div>
        <div class="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

        <div class="h-5 w-16 rounded bg-surface-container-highest"></div>
      </div>

      <div>
        <div class="h-3 w-20 rounded bg-surface-container-highest mb-2"></div>

        <div class="h-5 w-24 rounded bg-surface-container-highest"></div>
      </div>
    </div>

    <!-- Countdown -->
    <div
      class="bg-surface-container-high rounded p-4 mb-6 border-l-2 border-outline-variant/20"
    >
      <div class="h-3 w-24 rounded bg-surface-container-highest mb-3"></div>

      <div class="h-8 w-32 rounded bg-surface-container-highest"></div>
    </div>

    <!-- Button -->
    <div class="mt-auto pt-4 border-t border-outline-variant/20">
      <div class="w-full h-12 rounded bg-surface-container-highest"></div>
    </div>
  </article>
  <article
    v-else-if="token !== undefined"
    class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden group"
  >
    <!-- Status Pill -->
    <div
      class="absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-mono font-bold bg-[#00FF41]/15 text-[#00FF41] border border-[#00FF41]/30"
    >
      {{
        token.stopTime > Math.floor(Date.now() / 1000)
          ? "PENDING"
          : "REDEEMABLE"
      }}
    </div>
    <div class="mb-6">
      <p
        class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
      >
        METER_ID
      </p>
      <p class="font-mono text-xl text-on-surface">#{{ Number(tokenId) }}</p>
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
        <p class="font-mono text-sm text-on-surface">
          {{ new Date(token.stopTime * 1000).toISOString().split("T")[0] }}
        </p>
      </div>
    </div>
    <div
      class="bg-surface-container-high rounded p-4 mb-6 border-l-2 border-primary-container"
    >
      <p
        class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
      >
        COUNTDOWN
      </p>
      <p class="font-mono text-2xl text-primary-container">
        {{ differenceInDays(token.stopTime * 1000, new Date()) }}
        DAYS
      </p>
    </div>
    <div class="mt-auto pt-4 border-t border-outline-variant/20">
      <button
        @click="expire(tokenId)"
        :disabled="token.stopTime > Math.floor(Date.now() / 1000)"
        class="w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold text-sm rounded hover:bg-primary transition-all duration-200 shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-container-highest disabled:shadow-none disabled:text-on-surface-variant"
      >
        [EXPIRE]
      </button>
    </div>
  </article>
</template>
