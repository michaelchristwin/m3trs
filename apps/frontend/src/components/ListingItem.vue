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

const { data: metadata } = useQuery({
  queryKey: [
    "getNftByIdentifier",
    listing.protocolData?.parameters.offer[0]?.identifierOrCriteria,
  ],
  queryFn: async () => {
    const result = await readContracts(wagmiAdapter.wagmiConfig, {
      contracts: [
        {
          ...TRS,
          functionName: "revenue",
          args: [
            address,
            BigInt(
              listing.protocolData?.parameters.offer[0]
                ?.identifierOrCriteria as string,
            ),
          ],
        },
        {
          ...TRS,
          functionName: "token",
          args: [
            BigInt(
              listing.protocolData?.parameters.offer[0]
                ?.identifierOrCriteria as string,
            ),
          ],
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
      tokenId: listing.protocolData?.parameters.offer[0]
        ?.identifierOrCriteria as string,
    });
    return {
      revenue,
      nft_metadata,
      total_supply,
      stopTime,
    };
  },
  enabled: !!listing.protocolData?.parameters.offer[0]?.identifierOrCriteria,
});
const isActive = computed(
  () => Number(metadata.value?.stopTime) * 1000 > Date.now(),
);
const openseaUrl = computed(() => {
  const tokenId =
    listing?.protocolData?.parameters.offer?.[0]?.identifierOrCriteria;

  return tokenId
    ? `https://opensea.io/item/zora/${TRS.address}/${tokenId}`
    : "#";
});
</script>

<template>
  <div
    v-if="metadata && isActive"
    class="bg-surface-container-low rounded-xl p-4 flex flex-col gap-4"
  >
    <!-- Header -->
    <div class="flex gap-3">
      <img
        :src="metadata.nft_metadata.image"
        :alt="metadata.nft_metadata.name"
        class="w-16 h-27 object-cover shrink-0"
      />

      <div class="flex-1 min-w-0">
        <h3 class="font-mono-data text-on-surface truncate">
          {{ metadata.nft_metadata.name }}
        </h3>

        <p class="text-sm text-on-surface-variant">
          {{ listing.remainingQuantity }}
          of
          {{ Number(metadata?.total_supply) }}
        </p>
      </div>

      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="openseaUrl"
        class="hidden md:inline-flex items-center justify-center px-9 py-2 h-10 rounded-full bg-primary-container text-neutral-800 text-[14px] font-medium leading-none whitespace-nowrap hover:bg-primary-container/80 transition-colors"
      >
        Buy
      </a>
    </div>

    <!-- Metrics -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div>
        <div class="text-xs text-on-surface-variant uppercase">Accrued</div>
        <div class="text-primary">
          ${{ Number(metadata.revenue).toFixed(2) }}
        </div>
      </div>

      <div>
        <div class="text-xs text-on-surface-variant uppercase">Stop Time</div>
        <div>
          {{
            formatDistanceToNow(new Date(Number(metadata.stopTime) * 1000), {
              addSuffix: true,
            })
          }}
        </div>
      </div>

      <div>
        <div class="text-xs text-on-surface-variant uppercase">Price</div>
        <div>{{ formatEther(BigInt(listing.price.current.value)) }} Ξ</div>
      </div>
    </div>

    <!-- Mobile button -->
    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="openseaUrl"
      class="md:hidden text-center px-4 py-2 rounded-full bg-primary-container text-neutral-800"
    >
      Buy
    </a>
  </div>
</template>
