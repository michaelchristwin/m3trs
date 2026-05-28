<script lang="ts" setup>
import { readContracts } from "@wagmi/core";
import { useQuery } from "@tanstack/vue-query";
import { wagmiAdapter } from "@/config/wagmi";
import { formatDistanceToNow } from "date-fns";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { ListingStatusEnum } from "@m3trs/opensea-sdk";

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
      ],
    });
    if (result[0].error) {
      throw result[0].error;
    }

    const revenue = Number(result[0].result);

    return {
      revenue,
    };
  },
  enabled: !!listing.protocolData?.parameters.offer[0]?.identifierOrCriteria,
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
    aria-label="Open token details"
    class="relative grid grid-cols-1 md:grid-cols-11 gap-3 md:gap-4 px-4 md:px-6 py-4 cursor-pointer bg-surface-container-low rounded group hover:bg-surface-container transition-colors items-center"
  >
    <!-- Subtle warning indicator line on the left to show severity without borders -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container/50"
      v-if="
        listing.status ===
        (ListingStatusEnum.Cancelled ||
          ListingStatusEnum.Expired ||
          ListingStatusEnum.Inactive ||
          ListingStatusEnum.Fulfilled)
      "
    ></div>
    <div class="md:col-span-2 text-sm text-on-surface">
      <span class="md:hidden text-on-surface-variant">Token ID: </span>
      <span class="font-mono-data">Name</span>
    </div>
    <div class="col-span-1 font-mono-data text-sm text-on-surface text-right">
      {{ listing.remainingQuantity }}
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
    <div class="md:col-span-2 md:flex md:justify-center">
      <span
        :class="
          statusPillClasses[
            listing.status === ListingStatusEnum.Active ? 'Active' : 'Expiring'
          ]
        "
      >
        {{
          listing.status === ListingStatusEnum.Active ? "Active" : "Inactive"
        }}
      </span>
    </div>
    <div class="md:col-span-2 flex flex-col md:flex-row md:justify-end gap-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        :href="`https://opensea.io/item/zora/${TRS.address}/${listing.protocolData?.parameters.offer[0]?.identifierOrCriteria}`"
        class="md:block hidden px-3 text-center py-2 rounded-[30px] bg-[#0786FF] text-on-surface transition-colors text-xs font-headline tracking-wider hover:bg-[#0786FF]/80"
      >
        View on OpenSea
      </a>
    </div>
  </div>
</template>
