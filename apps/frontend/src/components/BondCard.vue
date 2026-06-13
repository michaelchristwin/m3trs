<script lang="ts" setup>
import { computed } from "vue";
import { formatDistanceToNow } from "date-fns";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { useReadContract } from "@wagmi/vue";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { trpc } from "@/config/trpc-client";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { hexToBigInt } from "viem";
import { getWalletClient } from "@wagmi/core";
import { wagmiAdapter } from "@/config/wagmi";
import { publicClient } from "@/config/viem-clients";

const props = defineProps<{
  bond: import("@/utils/types").Bond;
}>();

const { data: tokenId } = useReadContract({
  ...TRS,
  functionName: "tokenByM3ter",
  args: [BigInt(props.bond.identifier)],
});
const { data: totalAccrued } = useReadContract({
  ...TRS,
  functionName: "accRevenuePerToken",
  args: tokenId.value ? [tokenId.value] : undefined,
  query: {
    enabled: computed(() => !!tokenId.value),
  },
});
const {
  data: token,
  isLoading: isTokenLoading,
  isError,
  refetch,
} = useQuery({
  queryKey: ["getBond", props.bond.identifier],
  queryFn: () =>
    trpc.opensea.getNftMetadata.query({
      contractAddress: TRS.address,
      tokenId: String(tokenId.value),
    }),
  enabled: computed(() => !!tokenId.value),
});

const stopTime = computed<number | null>(() => {
  const trait = token.value?.traits.find((t) => t.traitType === "stop_time");

  return trait?.value ?? null;
});

const status = computed(() => {
  if (!stopTime.value) return null;

  const remaining = stopTime.value - Math.floor(Date.now() / 1000);

  return {
    isActive: remaining > 0,
    isMoreThanAWeekAway: remaining > 7 * 24 * 60 * 60,
    remaining,
  };
});

const isMetadataLoading = computed(
  () => !tokenId.value || isTokenLoading.value,
);
const tokenIdHash = computed(() => {
  if (token.value) {
    return token.value.traits.find((t) => t.traitType === "token_id");
  }
});

const redeem = async (id?: bigint) => {
  if (!id) return;
  try {
    const walletClient = await getWalletClient(wagmiAdapter.wagmiConfig);
    const hash = await walletClient.writeContract({
      ...TRS,
      functionName: "redeem",
      args: [BigInt(id)],
    });
    const reciept = await publicClient.waitForTransactionReceipt({ hash });
    if (reciept.status === "reverted") {
      throw Error("Transaction reverted");
    }
    await refetch();
  } catch (err) {
    console.error(err);
  }
};
const { mutateAsync, isPending } = useMutation({
  mutationKey: ["redeem"],
  mutationFn: redeem,
});
const buttonText = computed(() => {
  if (isPending.value) return "[SUBMITTING...]";
  else {
    return "[REDEEM]";
  }
});
</script>

<template>
  <!-- Skeleton -->
  <article
    v-if="isMetadataLoading"
    class="bg-surface-container-low rounded-lg p-6 flex flex-col animate-pulse"
  >
    <div class="flex justify-between items-start mb-6">
      <div>
        <div class="h-3 w-20 rounded bg-surface-container-highest mb-2" />
        <div class="h-7 w-24 rounded bg-surface-container-highest" />
      </div>

      <div class="h-6 w-24 rounded-full bg-surface-container-highest" />
    </div>

    <div class="h-24 rounded bg-surface-container-highest mb-6" />

    <div class="h-12 rounded bg-surface-container-highest mt-auto" />
  </article>

  <!-- Error -->
  <article v-else-if="isError" class="bg-surface-container-low rounded-lg p-6">
    <p class="text-sm text-error">Failed to load bond metadata.</p>
  </article>

  <!-- Content -->
  <article
    v-else
    class="bg-surface-container-low rounded-lg p-6 flex flex-col relative overflow-hidden"
  >
    <!-- Status -->
    <div
      v-if="status"
      :class="[
        'absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-mono font-bold border',
        status.isActive
          ? status.isMoreThanAWeekAway
            ? 'bg-secondary/15 text-secondary border-secondary/30'
            : 'bg-[#00FF41]/15 text-[#00FF41] border-[#00FF41]/30'
          : 'bg-primary-container/15 text-primary-container border-primary-container/30',
      ]"
    >
      {{ status.isActive ? "PENDING" : "REDEEMABLE" }}
    </div>

    <!-- Meter -->
    <div class="mb-6">
      <p
        class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
      >
        METER_ID
      </p>

      <p class="font-mono text-xl text-on-surface">
        #{{ Number(bond.identifier) }}
      </p>
    </div>

    <!-- Stop Time -->
    <div class="grid grid-cols-2 gap-4 mb-8">
      <div>
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          STOP_TIME
        </p>

        <p v-if="stopTime" class="font-mono text-sm text-on-surface">
          {{ new Date(stopTime * 1000).toISOString().split("T")[0] }}
        </p>

        <p v-else class="font-mono text-sm text-on-surface-variant">Unknown</p>
      </div>

      <div>
        <p
          class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
        >
          ACCRUED
        </p>

        <p
          v-if="totalAccrued !== undefined"
          class="font-mono text-sm text-on-surface"
        >
          ${{ Number(totalAccrued).toFixed(2) }}
        </p>

        <div
          v-else
          class="h-5 w-20 rounded bg-surface-container-highest animate-pulse"
        />
      </div>
    </div>

    <!-- Redeem Countdown -->
    <div
      v-if="status && stopTime"
      :class="[
        'bg-surface-container-high rounded p-4 mb-6 border-l-2',
        status.isMoreThanAWeekAway
          ? 'border-secondary-container'
          : 'border-primary-container',
      ]"
    >
      <p
        class="text-[0.6875rem] font-headline tracking-wider text-on-surface-variant uppercase mb-1"
      >
        REDEEMABLE
      </p>

      <p
        :class="[
          'font-mono text-2xl uppercase',
          status.isMoreThanAWeekAway
            ? 'text-secondary-container'
            : 'text-primary-container',
        ]"
      >
        {{
          formatDistanceToNow(stopTime * 1000, {
            addSuffix: true,
          })
        }}
      </p>
    </div>

    <!-- Action -->
    <div class="mt-auto pt-4 border-t border-outline-variant/20">
      <HoverCard v-if="!status?.isActive">
        <HoverCardTrigger>
          <button
            @click="mutateAsync(hexToBigInt(tokenIdHash?.value))"
            :disabled="status?.isActive || isPending"
            class="w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold text-sm rounded transition-all duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-container-highest disabled:text-on-surface-variant"
          >
            {{ buttonText }}
          </button>
        </HoverCardTrigger>
        <HoverCardContent>
          <p class="font-mono text-sm text-on-surface/80">
            Stop time has passed. Manual redeem execution required to finalize
            state.
          </p>
          <p class="font-mono text-xs text-error/80 mt-1">
            Warning: This action is irreversible and halts all revenue accrual.
          </p>
        </HoverCardContent>
      </HoverCard>
      <button
        v-else
        @click="mutateAsync(hexToBigInt(tokenIdHash?.value))"
        :disabled="status?.isActive || isPending"
        class="w-full py-3 bg-primary-container text-on-primary-container font-headline font-bold text-sm rounded transition-all duration-200 hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-container-highest disabled:text-on-surface-variant"
      >
        {{ buttonText }}
      </button>
    </div>
  </article>
</template>
