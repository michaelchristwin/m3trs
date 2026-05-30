<script lang="ts" setup>
import { readContracts } from "@wagmi/core";
import { useQuery } from "@tanstack/vue-query";
import { wagmiAdapter } from "@/config/wagmi";
import { formatDistanceToNow } from "date-fns";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { trpc } from "@/config/trpc-client";
import { formatEther } from "viem";

const props = defineProps<{ listing: import("@m3trs/opensea-sdk").Listing }>();
const { listing } = props;

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data: metadata, isLoading } = useQuery({
  queryKey: ["getNftByIdentifier"],
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
    let nft_metadata = await trpc.opensea.getNftMetadata.query({
      contractAddress: TRS.address,
      tokenId: listing.protocolData?.parameters.offer[0]
        ?.identifierOrCriteria as string,
    });
    return {
      revenue,
      nft_metadata,
      total_supply,
    };
  },
  enabled: !!listing.protocolData?.parameters.offer[0]?.identifierOrCriteria,
});
</script>

<template>
  <div
    class="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 bg-surface-container-low rounded group items-center"
  >
    <div class="md:col-span-2 text-sm text-on-surface">
      <span class="md:hidden text-on-surface-variant">Token Name: </span>
      <span class="font-mono-data">{{ metadata?.nft_metadata.name }}</span>
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
          formatDistanceToNow(
            new Date(Number(listing.protocolData?.parameters.endTime) * 1000),
            {
              addSuffix: true,
            },
          )
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
        rel="noopener noreferrer"
        :href="`https://opensea.io/item/zora/${TRS.address}/${listing.protocolData?.parameters.offer[0]?.identifierOrCriteria}`"
        class="block px-4 text-center py-1.5 rounded-[30px] bg-primary-container text-neutral-800 transition-colors text-xs font-headline tracking-wider hover:bg-primary-container/80"
      >
        Buy
      </a>
    </div>
  </div>
</template>
