<script lang="ts" setup>
import { useRouter } from "vue-router";
import AccrueButton from "./buttons/AccrueButton.vue";
import CollectButton from "./buttons/CollectButton.vue";
import { useQuery } from "@tanstack/vue-query";
import { trpc } from "@/config/trpc-client";
import { computed } from "vue";
import { useReadContract } from "@wagmi/vue";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
const props = defineProps([
  "tokenId",
  "metadataUrl",
  "status",
  "contract",
  "name",
]);
const router = useRouter();
const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const openTokenDetails = (tokenId: number) => {
  router.push({
    name: "token details",
    params: {
      walletAddress: address,
      tokenId: tokenId,
    },
  });
};
const { data } = useQuery({
  queryKey: ["getNftsByIdentifier"],
  queryFn: () =>
    trpc.opensea.getNFTByOwners.query({
      owner: props.contract,
      identifier: props.tokenId,
    }),
  enabled: !!props.contract && !!props.tokenId,
});
const total = computed(() => {
  return (
    data.value?.owners.reduce((sum, owner) => sum + owner.quantity, 0) ?? 0
  );
});
const { data: revenue, isLoading } = useReadContract({
  ...TRS,
  functionName: "revenue",
  args: [address, BigInt(props.tokenId)],
});
const statusPillClasses: Record<string, string> = {
  Active:
    "text-primary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold",
  Expiring:
    "text-secondary-container px-3 py-1 rounded-[9999px] text-[0.6875rem] font-headline uppercase tracking-wider font-bold",
};
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
      <span class="font-mono-data">{{ name }}</span>
    </div>
    <div class="col-span-1 font-mono-data text-sm text-on-surface text-right">
      {{ total }}
    </div>
    <div class="md:col-span-2 text-sm text-primary md:text-right">
      <span class="md:hidden text-on-surface-variant">Claimable: </span>
      {{ Number(revenue!) }}
    </div>
    <div class="md:col-span-2 text-sm text-on-surface md:text-right">
      <span class="md:hidden text-on-surface-variant">Stop Time: </span>
      2d left
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
        class="md:block hidden px-3 py-1.5 rounded-[30px] border border-primary/50 text-on-surface transition-colors text-xs font-headline uppercase tracking-wider hover:bg-sky-500/10 hover:border-sky-500 hover:text-sky-400"
      />
      <CollectButton
        inner-text="Collect"
        :token-id="tokenId"
        class="md:block hidden px-3 py-1.5 rounded-[30px] border border-primary/50 text-on-surface transition-colors text-xs font-headline uppercase tracking-wider hover:bg-emerald-500/10 hover:border-emerald-500 hover:text-emerald-400"
      />
      <button
        @click.prevent
        class="md:block hidden px-3 py-1.5 rounded bg-transparent text-on-surface-variant hover:text-on-surface transition-colors items-center justify-center"
      >
        <span
          class="material-symbols-outlined text-[18px]"
          data-icon="more_horiz"
          >more_horiz</span
        >
      </button>
    </div>
  </div>
</template>
