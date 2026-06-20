<script setup lang="ts">
import { z } from "zod";
import { readContracts } from "@wagmi/core";
import { useHead } from "@unhead/vue";
import { useForm } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import { toTypedSchema } from "@vee-validate/zod";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { Image, Brackets } from "@lucide/vue";
import {
  type Address,
  isAddress,
  getAddress,
  parseUnits,
  checksumAddress,
} from "viem";
import AccrueButton from "@/components/buttons/AccrueButton.vue";
import CollectButton from "@/components/buttons/CollectButton.vue";
import { useWaitForTransactionReceipt, useWriteContract } from "@wagmi/vue";
import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@tanstack/vue-query";
import { wagmiAdapter } from "@/config/wagmi";
import { trpc } from "@/config/trpc-client";
const route = useRoute();
const router = useRouter();

useHead({
  title: `Holdings | Token ${route.query.tokenName}`,
  meta: [
    {
      name: "description",
      content: `Details for token ${route.query.tokenName}`,
    },
  ],
});
const handleBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push({ name: "holdings" });
  }
};

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data, isLoading } = useQuery({
  queryKey: ["getData", route.params.tokenId],
  queryFn: async () => {
    const result = await readContracts(wagmiAdapter.wagmiConfig, {
      contracts: [
        {
          ...TRS,
          functionName: "token",
          args: [BigInt(route.params.tokenId as string)],
        },
        {
          ...TRS,
          functionName: "accRevenuePerToken",
          args: [BigInt(route.params.tokenId as string)],
        },
        {
          ...TRS,
          functionName: "revenue",
          args: [
            checksumAddress(address),
            BigInt(route.params.tokenId as string),
          ],
        },
      ],
    });
    const metadata = await trpc.opensea.getNftMetadata.query({
      contractAddress: TRS.address,
      tokenId: route.params.tokenId as string,
    });

    if (result[0].error) {
      throw result[0].error;
    }
    if (result[1].error) {
      throw result[1].error;
    }
    if (result[2].error) {
      throw result[2].error;
    }
    return {
      token: result[0].result,
      accRevenuePerToken: Number(result[1].result * result[0].result[1]) / 1e18,
      revenue: Number(result[1].result),
      ...metadata,
    };
  },
});

const { mutateAsync, isPending, data: txHash } = useWriteContract();
const formSchema = z.object({
  recipientAddress: z
    .string()
    .refine((val) => isAddress(val), {
      message: "Invalid Ethereum address",
    })
    .transform((val) => getAddress(val)), // checksummed,
  amount: z
    .string()
    .min(1, "Required")
    .regex(/^\d+(\.\d+)?$/, "Invalid number format")
    .transform((val) => parseUnits(val, 18)), // → bigint,
});
const { handleSubmit, setFieldValue, values, meta } = useForm({
  validationSchema: toTypedSchema(formSchema),
});
const onSubmit = handleSubmit(async ({ recipientAddress, amount }) => {
  await mutateAsync({
    ...TRS,
    functionName: "safeTransferFrom",
    args: [
      address as Address,
      recipientAddress,
      BigInt(route.params.tokenId as string),
      amount,
      "0x",
    ],
  });
});
const { isLoading: isConfirming } = useWaitForTransactionReceipt({
  hash: txHash,
});
</script>

<template>
  <!-- Header Section -->
  <div class="mb-10">
    <div class="flex items-center gap-4 mb-2">
      <button
        :onclick="handleBack"
        aria-label="Navigate back"
        class="text-on-surface/50 hover:text-primary transition-colors flex items-center gap-1 font-headline text-sm"
      >
        <span class="material-symbols-outlined text-sm" data-icon="arrow_back"
          >arrow_back</span
        >
        Back
      </button>
    </div>

    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-pulse"
      v-if="isLoading"
    >
      <div>
        <div
          class="h-10 md:h-14 w-72 md:w-96 rounded bg-surface-container-highest"
        ></div>
        <div class="h-4 w-56 mt-3 rounded bg-surface-container-highest"></div>
      </div>
      <div
        class="flex items-center px-4 py-2 rounded-full bg-surface-container-highest self-start md:self-auto"
      >
        <div class="w-2 h-2 rounded-full bg-surface-container-high mr-2"></div>
        <div class="h-4 w-20 rounded bg-surface-container-high"></div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row md:items-end justify-between gap-6"
      v-else-if="data"
    >
      <div>
        <h1
          class="font-headline font-bold text-3xl md:text-5xl text-on-surface tracking-tight"
        >
          <span class="font-mono text-primary">{{
            $route.query.tokenName
          }}</span>
        </h1>
        <p
          class="font-mono text-sm text-on-surface/50 mt-2 tracking-widest uppercase"
        >
          Contract Details &amp; Revenue Hub
        </p>
      </div>
    </div>
  </div>

  <!-- Bento Grid Layout -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
    <!-- Left Column (Image) -->
    <div
      class="lg:col-span-4 flex flex-col gap-6 animate-pulse"
      v-if="isLoading"
    >
      <div
        class="bg-surface-container-low rounded-lg ghost-border-outline overflow-hidden flex flex-col"
      >
        <div
          class="bg-surface-container-highest px-6 py-4 flex items-center justify-between"
        >
          <div class="h-4 w-24 rounded bg-surface-container"></div>
          <div class="h-5 w-5 rounded bg-surface-container"></div>
        </div>
        <div class="p-6 flex flex-col gap-6">
          <div class="w-45 h-[310.33px] mx-auto rounded bg-surface-container" />
        </div>
      </div>
    </div>

    <div
      class="lg:col-span-4 flex flex-col gap-6"
      v-else-if="data !== undefined"
    >
      <!-- Image Card -->
      <div
        class="bg-surface-container-low rounded-xl ghost-border-outline overflow-hidden flex flex-col"
      >
        <div
          class="bg-surface-container-highest px-6 py-4 flex items-center justify-between"
        >
          <h3
            class="font-headline font-bold text-on-surface text-sm uppercase tracking-wider"
          >
            Image
          </h3>
          <Image :size="18" class="text-on-surface/50" />
        </div>
        <div class="p-6">
          <img
            :src="data.image"
            alt="TRS image"
            class="w-100 md:w-80 h-auto mx-auto"
          />
        </div>
      </div>
    </div>

    <!-- Right Column (Metadata, Revenue, Transfer) -->
    <div class="lg:col-span-8 flex flex-col gap-6">
      <!-- Metadata Panel -->
      <div
        class="bg-surface-container-low rounded-xl ghost-border-outline overflow-hidden relative"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
          class="bg-surface-container-highest px-6 py-4 flex items-center justify-between relative z-10"
        >
          <h3
            class="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2"
          >
            <Brackets class="text-primary" :size="18" />
            Metadata
          </h3>
        </div>
        <div class="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative z-10">
          <!-- Description + M3ter ID -->
          <div
            class="font-mono text-[3.5rem] leading-none font-light tracking-tight mb-2 animate-pulse"
            v-if="isLoading"
          >
            <div class="h-12 w-48 rounded bg-surface-container-highest"></div>
          </div>
          <div
            class="flex-1 flex flex-col justify-start gap-6"
            v-else-if="data"
          >
            <div>
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1"
              >
                Description
              </label>
              <p
                class="font-mono text-sm text-primary block tracking-wider mb-1"
              >
                {{ data.description }}
              </p>
            </div>
            <div>
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1"
              >
                M3TER ID
              </label>
              <div class="font-mono text-2xl text-secondary">
                #{{ data.token[2] }}
              </div>
            </div>
          </div>

          <div class="w-px bg-surface-container hidden md:block"></div>
          <div class="w-full h-px bg-surface-container md:hidden"></div>

          <!-- Supply + Stop Time -->
          <div class="flex-1 flex flex-col justify-center gap-6">
            <div class="font-mono text-3xl animate-pulse" v-if="isLoading">
              <div class="h-8 w-40 rounded bg-surface-container-highest"></div>
            </div>
            <div v-else-if="data">
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1"
              >
                Supply
              </label>
              <div class="font-mono text-3xl text-on-surface">
                {{ data.token[1] }}
              </div>
            </div>

            <div v-if="data">
              <label
                class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-1"
              >
                Stop Time
              </label>
              <div class="font-mono text-sm text-on-surface mb-1">
                {{
                  new Date(Number(data.token[3]) * 1000)
                    .toISOString()
                    .split("T")[0]
                }}
              </div>
              <div
                class="font-mono text-xs text-secondary-container bg-secondary-container/10 inline-block px-2 py-0.5 rounded"
              >
                Expires in
                {{
                  formatDistanceToNow(new Date(Number(data.token[3]) * 1000))
                }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Revenue Hub Panel -->
      <div
        class="bg-surface-container-low rounded-xl ghost-border-outline overflow-hidden relative"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div
          class="bg-surface-container-highest px-6 py-4 flex items-center justify-between relative z-10"
        >
          <h3
            class="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2"
          >
            <span
              class="material-symbols-outlined text-primary text-lg"
              data-icon="account_balance_wallet"
              >account_balance_wallet</span
            >
            Revenue Hub
          </h3>
        </div>
        <div class="p-6 md:p-8 flex flex-col md:flex-row gap-8 relative z-10">
          <!-- Total Accrued -->
          <div class="flex-1 flex flex-col justify-center">
            <label
              class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2"
            >
              Total Accrued
            </label>
            <div
              class="font-mono text-[3.5rem] leading-none font-light tracking-tight mb-2 animate-pulse"
              v-if="isLoading"
            >
              <div class="h-12 w-48 rounded bg-surface-container-highest"></div>
            </div>
            <div
              v-else-if="data"
              class="font-mono text-[3.5rem] leading-none text-on-surface font-light tracking-tight mb-2"
            >
              ${{ data.accRevenuePerToken.toFixed(2) }}
            </div>
            <div class="flex items-center gap-2 text-primary mt-2">
              <span
                class="material-symbols-outlined text-sm"
                data-icon="trending_up"
                >trending_up</span
              >
              <span class="font-mono text-xs">+12.4% this epoch</span>
            </div>
          </div>

          <div class="w-px bg-surface-container hidden md:block"></div>
          <div class="w-full h-px bg-surface-container md:hidden"></div>

          <!-- Your Claimable + Actions -->
          <div class="flex-1 flex flex-col justify-center">
            <label
              class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2"
            >
              Your Claimable
            </label>
            <div class="font-mono text-3xl mb-6 animate-pulse" v-if="isLoading">
              <div class="h-8 w-40 rounded bg-surface-container-highest"></div>
            </div>
            <div class="font-mono text-3xl text-primary mb-6" v-else-if="data">
              ${{ data.revenue.toFixed(2) }}
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <AccrueButton
                inner-text="Accrue Revenue"
                :token-id="$route.params.tokenId"
                class="flex-1 bg-transparent border-primary/30 border text-primary font-headline font-bold text-sm py-3 px-4 rounded hover:bg-primary/5 transition-all"
              />
              <CollectButton
                inner-text="Collect Revenue"
                :token-id="$route.params.tokenId"
                class="flex-1 bg-primary-container text-on-primary-container font-headline font-bold text-sm py-3 px-4 rounded hover:brightness-110 transition-all glow-primary glass-gradient-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Transfer Operations Panel -->
  <div
    class="bg-surface-container-low rounded-lg ghost-border-outline overflow-hidden mt-30 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
  >
    <div
      class="bg-surface-container-highest px-6 py-4 flex items-center justify-between"
    >
      <h3
        class="font-headline font-bold text-on-surface text-sm uppercase tracking-wider flex items-center gap-2"
      >
        <span
          class="material-symbols-outlined text-on-surface/50 text-lg"
          data-icon="swap_horiz"
          >swap_horiz</span
        >
        Transfer Operations
      </h3>
    </div>
    <div class="p-6 md:p-8">
      <form
        class="flex flex-col md:flex-row gap-6 items-end"
        @submit.prevent="onSubmit"
      >
        <div class="flex-1 w-full">
          <label
            class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2"
          >
            Recipient Address
          </label>
          <div class="relative">
            <span
              class="material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2 text-on-surface/40 pb-2"
              data-icon="wallet"
              >wallet</span
            >
            <input
              class="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-mono text-sm focus:ring-0 focus:border-primary focus:shadow-[0_1px_0_0_rgba(0,255,65,1)] transition-all pl-8 pb-2 pt-2 placeholder:text-on-surface/20"
              placeholder="0x..."
              type="text"
              :value="values.recipientAddress"
              @input="
                setFieldValue(
                  'recipientAddress',
                  ($event.target as HTMLInputElement).value,
                )
              "
            />
          </div>
        </div>
        <div class="w-full md:w-1/3">
          <label
            class="font-headline text-on-surface/60 text-[0.6875rem] uppercase tracking-wider block mb-2"
          >
            Amount
          </label>
          <input
            class="w-full bg-transparent border-0 border-b border-outline-variant text-on-surface font-mono text-sm focus:ring-0 focus:border-primary focus:shadow-[0_1px_0_0_rgba(0,255,65,1)] transition-all pb-2 pt-2 placeholder:text-on-surface/20 text-right"
            placeholder="0.00"
            type="number"
            :value="values.amount"
            @input="
              setFieldValue('amount', ($event.target as HTMLInputElement).value)
            "
          />
        </div>
        <button
          type="submit"
          :disabled="!meta.valid || isPending || isConfirming"
          class="w-full md:w-auto bg-transparent ghost-border-primary text-primary font-headline font-bold text-sm py-2.5 px-8 rounded hover:bg-primary/5 transition-all whitespace-nowrap self-stretch md:self-auto mb-1"
        >
          Execute Transfer
        </button>
      </form>
    </div>
  </div>
</template>
