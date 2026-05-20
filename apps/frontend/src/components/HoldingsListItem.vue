<script lang="ts" setup>
import { readContracts } from "@wagmi/core";
import { useRouter } from "vue-router";
import AccrueButton from "./buttons/AccrueButton.vue";
import CollectButton from "./buttons/CollectButton.vue";
import { useQuery } from "@tanstack/vue-query";
import { wagmiAdapter } from "@/config/wagmi";
import { formatDistanceToNow } from "date-fns";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { checksumAddress } from "viem";
const props = defineProps([
  "tokenId",
  "metadataUrl",
  "status",
  "contract",
  "name",
]);
interface Metadata {
  name: string;
  stopTime: number;
  description: string;
}
const router = useRouter();
const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const openTokenDetails = (tokenName: string) => {
  console.log(tokenName);
  router.push({
    name: "token details",
    params: {
      tokenName,
    },
    query: {
      tokenId: props.tokenId,
    },
  });
};

const { data: metadata, isLoading } = useQuery({
  queryKey: ["getNftByIdentifier", props.tokenId],
  queryFn: async () => {
    const result = await readContracts(wagmiAdapter.wagmiConfig, {
      contracts: [
        {
          ...TRS,
          functionName: "balanceOf",
          args: [checksumAddress(address), BigInt(props.tokenId)],
        },
        {
          ...TRS,
          functionName: "revenue",
          args: [address, BigInt(props.tokenId)],
        },
      ],
    });
    if (result[0].error) {
      throw result[0].error;
    }
    if (result[1].error) {
      throw result[1].error;
    }
    const supply = Number(result[0].result);
    const revenue = Number(result[1].result);
    const metadata: Metadata = await fetch(props.metadataUrl).then((res) =>
      res.json(),
    );
    return {
      ...metadata,
      supply,
      revenue,
      status: props.status,
      contract: props.contract,
      name: props.name,
    };
  },
  enabled: !!props.contract && !!props.tokenId && !!props.metadataUrl,
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
    @click="openTokenDetails(props.name)"
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
      {{ metadata?.supply }}
    </div>
    <div class="md:col-span-2 text-sm text-primary md:text-right">
      <span class="md:hidden text-on-surface-variant">Claimable: </span>
      <div
        v-if="isLoading"
        class="inline-block h-4 w-20 rounded bg-surface-container-highest animate-pulse"
      ></div>
      <span v-else-if="metadata != undefined">{{
        Number(metadata.revenue)
      }}</span>
    </div>
    <div class="md:col-span-2 text-sm text-on-surface md:text-right">
      <span class="md:hidden text-on-surface-variant">Stop Time: </span>
      <div
        v-if="isLoading"
        class="inline-block h-4 w-20 rounded bg-surface-container-highest animate-pulse"
      ></div>
      <span v-else-if="metadata != undefined">
        {{ formatDistanceToNow(new Date(metadata.stopTime * 1000)) }} left
      </span>
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
