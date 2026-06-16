<script lang="ts" setup>
import { readContracts } from "@wagmi/core";
import { useQuery } from "@tanstack/vue-query";
import { wagmiAdapter } from "@/config/wagmi";
import { formatDistanceToNow } from "date-fns";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { trpc } from "@/config/trpc-client";
import { formatEther } from "viem";
import { computed } from "vue";

const props = defineProps<{
  listing: import("@m3trs/opensea-sdk").Listing;
}>();
const { listing } = props;

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";
const tokenId = computed(() => {
  return listing.protocolData?.parameters?.offer?.[0]?.identifierOrCriteria;
});
const { data: metadata, isLoading } = useQuery({
  queryKey: ["getNftByIdentifier", tokenId],
  queryFn: async () => {
    const result = await readContracts(wagmiAdapter.wagmiConfig, {
      contracts: [
        {
          ...TRS,
          functionName: "revenue",
          args: [address, BigInt(tokenId.value!)],
        },
        {
          ...TRS,
          functionName: "token",
          args: [BigInt(tokenId.value!)],
        },
      ],
    });
    if (result[0].error) {
      throw result[0].error;
    }
    if (result[1].error) {
      throw result[1].error;
    }

    const revenue = Number(result[0].result);
    const total_supply = result[1].result[1];
    const stopTime = result[1].result[3];
    let nft_metadata = await trpc.opensea.getNftMetadata.query({
      contractAddress: TRS.address,
      tokenId: tokenId.value!,
    });
    return {
      revenue,
      nft_metadata,
      total_supply,
      stopTime,
    };
  },
  enabled: !!tokenId.value,
});
const isActive = computed(
  () => Number(metadata.value?.stopTime) * 1000 > Date.now(),
);
</script>

<template>
  <RouterLink
    :to="`/discover/${tokenId!}`"
    v-if="metadata && isActive"
    class="relative bg-surface-container-low rounded p-4"
  >
    <!-- Mobile -->
    <div class="flex gap-4 md:hidden">
      <img
        :src="metadata.nft_metadata.image"
        :alt="metadata.nft_metadata.name"
        class="w-20 h-30 rounded object-cover shrink-0"
      />

      <div class="min-w-0 flex-1 space-y-1 text-sm">
        <div class="font-mono-data text-on-surface truncate">
          {{ metadata.nft_metadata.name }}
        </div>

        <div>
          <span class="text-on-surface-variant">Accrued:</span>
          <span class="text-primary">
            ${{ Number(metadata.revenue).toFixed(2) }}
          </span>
        </div>

        <div>
          <span class="text-on-surface-variant">Stop:</span>
          {{
            formatDistanceToNow(new Date(Number(metadata.stopTime) * 1000), {
              addSuffix: true,
            })
          }}
        </div>

        <div>
          <span class="text-on-surface-variant">Supply:</span>
          {{ listing.remainingQuantity }} of
          {{ Number(metadata.total_supply) }}
        </div>

        <div>
          <span class="text-on-surface-variant">Price:</span>
          {{ formatEther(BigInt(listing.price.current.value)) }} Ξ
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          :href="`https://opensea.io/item/zora/${TRS.address}/${tokenId!}`"
          class="inline-block mt-2 px-4 py-1.5 w-full text-center rounded-[30px] bg-primary-container text-neutral-800 text-xs font-headline tracking-wider"
        >
          Buy
        </a>
      </div>
    </div>

    <!-- Desktop -->
    <div class="hidden md:grid md:grid-cols-13 md:gap-4 md:items-center">
      <div
        class="md:col-span-3 text-sm text-on-surface md:flex md:items-center md:space-x-1"
      >
        <span class="md:hidden text-on-surface-variant">Token Name: </span>
        <img
          :src="metadata.nft_metadata.image"
          class="w-6 h-6"
          :alt="metadata.nft_metadata.name"
        />
        <span class="font-mono-data">{{ metadata.nft_metadata.name }}</span>
      </div>
      <div class="md:col-span-2 text-sm text-primary md:text-center">
        <span class="md:hidden text-on-surface-variant">Total Accrued: </span>
        <div
          v-if="isLoading"
          class="inline-block h-4 w-20 rounded bg-surface-container-highest animate-pulse"
        ></div>
        <span v-else-if="metadata != undefined"
          >${{ Number(metadata.revenue).toFixed(2) }}</span
        >
      </div>

      <div class="md:col-span-2 text-sm text-on-surface md:text-right">
        <span class="md:hidden text-on-surface-variant">Stop Time: </span>
        <div
          v-if="isLoading"
          class="inline-block h-4 w-20 rounded bg-surface-container-highest animate-pulse"
        ></div>
        <span v-else-if="metadata != undefined">
          {{
            formatDistanceToNow(new Date(Number(metadata.stopTime) * 1000), {
              addSuffix: true,
            })
          }}
        </span>
      </div>
      <div
        class="md:col-span-2 font-mono-data text-sm text-on-surface md:text-right"
      >
        <span class="md:hidden text-on-surface-variant">Supply: </span>
        <span
          >{{ listing.remainingQuantity }} of
          {{ Number(metadata?.total_supply) }}</span
        >
      </div>
      <div class="md:col-span-2 md:flex md:justify-end">
        <span class="md:hidden text-on-surface-variant">Price: </span>
        <span> {{ formatEther(BigInt(listing.price.current.value)) }} Ξ </span>
      </div>
      <div class="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-2">
        <a
          target="_blank"
          @click.stop
          rel="noopener noreferrer"
          :href="`https://opensea.io/item/zora/${TRS.address}/${tokenId!}`"
          class="block px-4 text-center py-1.5 rounded-[30px] bg-primary-container text-neutral-800 transition-colors text-xs font-headline tracking-wider hover:bg-primary-container/80"
        >
          Buy
        </a>
      </div>
    </div>
  </RouterLink>
</template>
