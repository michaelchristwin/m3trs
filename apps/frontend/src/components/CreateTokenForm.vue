<script lang="ts" setup>
import { collections } from "@/config/opensea/collections";
import { trpc } from "@/config/trpc-client";
import { formSchema } from "@/utils/schemas";
import type { MintTokensParams, ModalState } from "@/utils/types";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import type { BaseError } from "viem";
import { computed, defineAsyncComponent } from "vue";
import PreviewTRS from "./PreviewTRS.vue";
import { format, fromUnixTime, parse } from "date-fns";

const FormField = defineAsyncComponent(
  () => import("@/components/FormField.vue"),
);
const FormTextarea = defineAsyncComponent(
  () => import("@/components/FormTextarea.vue"),
);
const M3terCard = defineAsyncComponent(
  () => import("@/components/M3terCard.vue"),
);
const M3terCardSkeleton = defineAsyncComponent(
  () => import("@/components/M3terCardSkeleton.vue"),
);
const modalState = defineModel<ModalState>("modalState");
const isModalOpen = defineModel<boolean>("isModalOpen");
interface FormProps {
  mintTokens: ({
    supply,
    tokenId,
    stopTime,
    description,
    walletAddress,
  }: MintTokensParams) => Promise<
    | {
        status: "error";
        error: string;
      }
    | {
        status: "success";
        txHash: `0x${string}`;
      }
  >;
}
const props = defineProps<FormProps>();
const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";
const { data, error, isLoading, refetch } = useQuery({
  queryKey: ["getNfts", address],
  queryFn: () =>
    trpc.opensea.getNFTByAccount.query({
      owner: address,
      collection: collections.meters,
    }),
});

const { handleSubmit, setFieldValue, errors, values, meta, resetForm } =
  useForm({
    validationSchema: toTypedSchema(formSchema),
    initialValues: { description: "", supply: "" },
  });

const onSubmit = handleSubmit(async (formValues) => {
  isModalOpen.value = true;
  modalState.value = "minting";

  const result = await props.mintTokens({
    walletAddress: address,
    ...formValues,
  });

  if (result.status === "success") {
    modalState.value = "success";
    await refetch();
    resetForm();
  } else {
    modalState.value = "error";
  }
});

const { mutateAsync, isPending: mutationIsPending } = useMutation({
  mutationFn: onSubmit,
  mutationKey: ["approveAndMint"],
});

const onSelectNFT = (tokenId: bigint) => {
  setFieldValue("tokenId", tokenId);
};
const convertToLocaleDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US");
};
const stopTimeSeconds = (input?: string) => {
  if (!input) return;
  const date = parse(input, "yyyy-MM-dd'T'HH:mm", new Date());

  // convert to UTC seconds
  return Math.floor(date.getTime() / 1000);
};
const tokenName = computed(() => {
  if (!values.stopTime) return `TRS-#${Number(values.tokenId || "")}`;
  else {
    const secs = stopTimeSeconds(values.stopTime);
    if (!secs) return `TRS-#${Number(values.tokenId || "")}`;
    else {
      return `TRS-#${Number(values.tokenId || "")}-${format(secs * 1000, "yyyy-MM-dd")}`;
    }
  }
});
const readableStopTime = computed(() => {
  const secs = stopTimeSeconds(values.stopTime);
  if (!secs) return;
  //console.log(values.stopTime);
  const date = fromUnixTime(secs); // handles the * 1000 for you
  return format(date, "yyyy-MM-dd HH:mm:ss");
});
const tokenId = computed(() => values.tokenId?.toString() ?? null);

const { data: metadata } = useQuery({
  queryKey: ["getTokenMetadata", tokenId],
  queryFn: async () => {
    const result = await trpc.opensea.getNftMetadata.query({
      chain: "base",
      contractAddress: collections.nouns,
      tokenId: "0",
    });
    console.log("Result: ", result);
    return result;
  },
  enabled: () => tokenId.value !== null, // ✅ getter function, not computed()
});
</script>

<template>
  <form
    novalidate
    class="grid grid-cols-1 lg:grid-cols-12 gap-8"
    @submit.prevent="mutateAsync"
  >
    <!-- Left Column: Form Steps -->
    <div class="lg:col-span-8 space-y-12">
      <!-- Step 1: Select M3TER -->
      <section
        class="bg-surface-container-low p-6 rounded-lg ghost-border relative"
      >
        <div
          class="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-surface-container-high border border-outline flex items-center justify-center font-mono text-sm text-on-surface"
        >
          1
        </div>
        <h2 class="font-headline text-xl text-on-surface mb-6 ml-4">
          Select M3TER NFT
        </h2>
        <div
          class="grid grid-cols-1 gap-4 md:grid-cols-2"
          role="group"
          aria-label="Select an NFT"
        >
          <template v-if="isLoading">
            <M3terCardSkeleton v-for="i in 2" :key="i" />
          </template>

          <div
            v-else-if="error"
            class="col-span-full rounded-lg border border-error/20 bg-error-container/10 p-4 text-sm text-error"
          >
            Error:
            {{ (error as BaseError).shortMessage || error.message }}
          </div>

          <div
            v-else-if="!data?.nfts?.length"
            class="col-span-full rounded-lg border border-outline-variant p-6 text-center text-on-surface-variant"
          >
            You have no M3ters.
          </div>

          <M3terCard
            v-else
            v-for="nft in data.nfts"
            :key="nft.identifier"
            :token-id="BigInt(nft.identifier)"
            :selected="values.tokenId === BigInt(nft.identifier)"
            @select="onSelectNFT"
          />
        </div>
      </section>
      <!-- Step 2: Configure Token -->
      <section
        class="bg-surface-container-high p-6 rounded-lg ghost-border relative shadow-[0_0_20px_rgba(0,255,65,0.05)]"
      >
        <div
          class="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-surface-container-high border border-outline flex items-center justify-center font-mono text-sm text-on-surface"
        >
          2
        </div>
        <h2 class="font-headline text-xl text-primary-container mb-8 ml-4">
          Configure Token
        </h2>
        <div class="space-y-8">
          <!-- Supply Input -->
          <div class="relative">
            <label
              class="block font-mono text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-2"
              >Total Supply (Integer)</label
            >
            <div class="flex items-end">
              <FormField
                name="supply"
                type="number"
                class="input rounded ps-1 w-full"
                placeholder="0"
              />
              <span
                class="font-mono text-sm text-on-surface ml-3 pb-2 border-b border-outline-variant"
                >TRS</span
              >
            </div>
          </div>
          <!-- Stop Time Input -->
          <div class="relative">
            <label
              class="block font-mono text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-2"
              >Expiry Timestamp</label
            >
            <div
              class="flex items-center border-b border-outline-variant focus-within:border-primary-container focus-within:shadow-[0_4px_6px_-1px_rgba(0,255,65,0.08)] transition-all"
            >
              <span class="material-symbols-outlined text-on-surface mr-3 pb-2"
                >calendar_month</span
              >
              <FormField
                name="stopTime"
                type="datetime-local"
                class="bg-transparent border-none w-full font-mono text-lg text-on-surface pb-2 px-0 focus:ring-0 scheme-dark"
              />
            </div>
          </div>

          <div
            class="rounded-lg border bg-surface-container-low p-4 transition-all"
            :class="
              errors.description
                ? 'border-red-500 bg-red-500/5'
                : 'border-outline/30 focus-within:border-primary-container'
            "
          >
            <label
              class="mb-3 block font-mono text-[0.6875rem] uppercase tracking-widest"
              :class="
                errors.description ? 'text-red-400' : 'text-on-surface-variant'
              "
            >
              Description
            </label>

            <FormTextarea
              name="description"
              :rows="4"
              class="w-full resize-none bg-transparent font-mono text-sm text-on-surface outline-none"
              placeholder="Describe this revenue token..."
            />

            <div
              v-if="errors.description"
              class="mt-3 flex items-center gap-2 text-sm text-red-400"
            >
              <span class="material-symbols-outlined text-base"> error </span>

              <span>{{ errors.description }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- Right Column: Review & Action -->
    <div class="lg:col-span-4">
      <div class="sticky top-24">
        <section
          class="bg-surface-container-low p-6 rounded-lg ghost-border relative"
        >
          <div
            class="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-surface-container-high border border-outline flex items-center justify-center font-mono text-sm text-on-surface"
          >
            3
          </div>
          <h2 class="font-headline text-xl text-on-surface mb-6 ml-4">
            Review
          </h2>
          <div class="space-y-4 mb-8">
            <PreviewTRS
              :name="tokenName"
              :meter-id="values.tokenId?.toString()"
              :readable-stop-time="readableStopTime"
              :image-url="metadata?.image"
            />
            <div
              class="flex justify-between items-center pb-2 border-b border-surface-variant"
            >
              <span class="font-mono text-xs text-on-surface-variant uppercase"
                >Asset</span
              >
              <span class="font-mono text-sm text-on-surface"
                >M3TER #{{ values.tokenId }}</span
              >
            </div>
            <div
              class="flex justify-between items-center pb-2 border-b border-surface-variant"
            >
              <span class="font-mono text-xs text-on-surface-variant uppercase"
                >Supply</span
              >
              <span class="font-mono text-sm text-on-surface"
                >{{ values.supply }} TRS</span
              >
            </div>
            <div
              class="flex justify-between items-center pb-2 border-b border-surface-variant"
            >
              <span class="font-mono text-xs text-on-surface-variant uppercase"
                >Expiry</span
              >
              <span class="font-mono text-sm text-secondary-container">{{
                values.stopTime ? convertToLocaleDate(values.stopTime) : ""
              }}</span>
            </div>
          </div>
          <!-- Warning Box -->
          <div
            class="bg-secondary-container/10 border-l-2 border-secondary-container p-4 mb-8"
            v-if="values.tokenId != undefined"
          >
            <div class="flex items-start gap-3">
              <span
                class="material-symbols-outlined text-secondary-container"
                style="font-variation-settings: &quot;FILL&quot; 1"
                >warning</span
              >
              <p class="font-body text-sm text-secondary-fixed">
                Depositing M3TER
                <span class="font-mono">{{ values.tokenId }}</span> locks it in
                the contract until expiry.
              </p>
            </div>
          </div>
          <button
            type="submit"
            :disabled="!meta.valid || mutationIsPending"
            class="w-full bg-primary-container disabled:bg-primary-container/50 disabled:cursor-not-allowed! text-on-primary-container font-headline font-bold uppercase tracking-wider py-4 rounded hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(0,255,65,0.2)] flex justify-center items-center gap-2"
          >
            <span class="material-symbols-outlined">rocket_launch</span>
            <span>Create Token</span>
            <svg
              v-if="mutationIsPending"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-loader-circle-icon lucide-loader-circle animate-spin text-[14px]"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </button>
        </section>
      </div>
    </div>
  </form>
</template>
