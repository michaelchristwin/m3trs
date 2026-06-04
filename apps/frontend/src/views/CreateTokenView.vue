<script lang="ts" setup>
import { ref } from "vue";
import { format } from "date-fns";
import { useHead } from "@unhead/vue";
import { useForm } from "vee-validate";
import { trpc } from "@/config/trpc-client";
import { formSchema } from "@/utils/schemas";
import { toTypedSchema } from "@vee-validate/zod";
import { approve, mint } from "@/smart-contracts/actions";
import { collections } from "@/config/opensea/collections";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { checksumAddress, keccak256, encodePacked, type BaseError } from "viem";
import { openDialog } from "@/utils/dialog.utils";
import { constructSvg } from "@/utils/svg-constructor";
import M3terCard from "@/components/M3terCard.vue";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import FormField from "@/components/FormField.vue";
import FormTextarea from "@/components/FormTextarea.vue";
import { getWalletClient } from "@wagmi/core";
import { wagmiAdapter } from "@/config/wagmi";
import M3terCardSkeleton from "@/components/M3terCardSkeleton.vue";

useHead({
  title: "Create Token",
  meta: [{ name: "description", content: "Create TRS token" }],
});
const modalState = ref<import("@/utils/types").ModalState>("minting");
const mintTxStatus = ref<import("@/utils/types").MintTxStatus>({
  success: false,
  error: "",
});
const dialog = ref<HTMLDialogElement | null>(null);

const address = "0xb2403f83C23748b26B06173db7527383482E8c5a";

const { data, error, isLoading, refetch } = useQuery({
  queryKey: ["getNfts", address],
  queryFn: () =>
    trpc.opensea.getNFTByAccount.query({
      owner: address,
      collection: collections.meters,
    }),
});

const visibleStatus = ref("Preparing transaction...");
const { handleSubmit, setFieldValue, errors, values, meta, resetForm } =
  useForm({
    validationSchema: toTypedSchema(formSchema),
    initialValues: { description: "", supply: "" },
  });

const onSubmit = handleSubmit(async (formValues) => {
  openDialog(dialog.value);
  modalState.value = "minting";

  try {
    const { supply, tokenId, stopTime, description } = formValues;

    visibleStatus.value = "Approving M3ter for transaction...";
    const walletClient = await getWalletClient(wagmiAdapter.wagmiConfig);
    const approveResult = await approve(address, tokenId, walletClient);
    if (!approveResult.success) {
      mintTxStatus.value = approveResult;
      modalState.value = "error";
      return;
    }

    visibleStatus.value = "Preparing metadata...";
    const name = `TRS-#${tokenId}-${format(stopTime * 1000, "yyyy-MM-dd")}`;

    const hash = keccak256(
      encodePacked(
        ["uint256", "uint256", "uint256"],
        [tokenId, supply, BigInt(stopTime)],
      ),
    );

    // To-do: Add hextToBigint on new contract deployment
    //const identifier = hexToBigInt(hash);
    const svgString = constructSvg({
      name,
      meter_id: Number(tokenId),
      stop_time: stopTime,
      m3ter_contract: MyToken.address,
      trs_contract: TRS.address,
    });
    visibleStatus.value = "Uploading NFT image to arweave...";
    const image_url = await trpc.arweave.uploadSvg.mutate({
      name,
      image: svgString,
    });
    const metadata = {
      name,
      image: image_url,
      description,
      attributes: [
        { display_type: "date", trait_type: "stop_time", value: stopTime },
        { trait_type: "creator", value: checksumAddress(address) },
        { trait_type: "token_id", value: hash },
      ],
    };

    visibleStatus.value = "Uploading metadata to arweave...";
    const url = await trpc.arweave.uplodMetadata.mutate(metadata);

    visibleStatus.value = "Minting tokens and bond...";
    mintTxStatus.value = await mint(
      {
        supply: BigInt(supply),
        m3terId: tokenId,
        stopTime: BigInt(stopTime),
        uri: url,
      },
      checksumAddress(address),
      walletClient,
    );

    if (mintTxStatus.value.success) {
      modalState.value = "success";
      resetForm();
      refetch();
    } else {
      modalState.value = "error";
    }
  } catch (err) {
    mintTxStatus.value = {
      success: false,
      error:
        err instanceof Error ? err.message : "An unexpected error occurred.",
    };
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
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <h1
        class="text-3xl md:text-5xl font-bold font-headline text-on-surface mb-2 tracking-tight"
      >
        Revenue Token Wizard
      </h1>
      <!-- <p
        class="text-on-surface-variant font-mono text-sm uppercase tracking-widest"
      >
        Initialization Sequence // Step 2
      </p> -->
    </div>
    <!-- Wizard Layout -->
    <form
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
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <template v-if="isLoading">
              <M3terCardSkeleton v-for="i in 6" :key="i" />
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
                  class="input rounded ps-1"
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
                <span
                  class="material-symbols-outlined text-on-surface mr-3 pb-2"
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
                  errors.description
                    ? 'text-red-400'
                    : 'text-on-surface-variant'
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
              <div
                class="flex justify-between items-center pb-2 border-b border-surface-variant"
              >
                <span
                  class="font-mono text-xs text-on-surface-variant uppercase"
                  >Asset</span
                >
                <span class="font-mono text-sm text-on-surface"
                  >M3TER #{{ values.tokenId }}</span
                >
              </div>
              <div
                class="flex justify-between items-center pb-2 border-b border-surface-variant"
              >
                <span
                  class="font-mono text-xs text-on-surface-variant uppercase"
                  >Supply</span
                >
                <span class="font-mono text-sm text-on-surface"
                  >{{ values.supply }} TRS</span
                >
              </div>
              <div
                class="flex justify-between items-center pb-2 border-b border-surface-variant"
              >
                <span
                  class="font-mono text-xs text-on-surface-variant uppercase"
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
                  <span class="font-mono">{{ values.tokenId }}</span> locks it
                  in the contract until expiry.
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
    <dialog ref="dialog" class="m3trs-dialog" id="m3trs-dialog">
      <div
        class="relative flex min-h-70 w-[calc(100vw-40px)] max-w-[320px] flex-col items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#1c1c1e] p-10 md:min-h-85 md:max-w-110 lg:min-h-90 lg:max-w-130"
      >
        <!-- MINTING -->
        <div
          v-if="modalState === 'minting'"
          class="flex w-full flex-col items-center animate-[fade-in_.35s_ease-out_forwards]"
        >
          <svg
            class="mb-12 -rotate-45"
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
          >
            <!-- Center dot -->
            <circle
              cx="90"
              cy="90"
              r="20"
              fill="#279b37"
              class="animate-[radar-fade_1.96s_linear_infinite]"
            />
            <!-- Inner arc (quarter circle, top-right) -->
            <path
              d="M 90,40 A 50,50 0 0,1 140,90"
              stroke="#279b37"
              stroke-width="8"
              stroke-linecap="butt"
              class="animate-[radar-fade_1.96s_linear_infinite_.196s]"
            />
            <!-- Outer arc -->
            <path
              d="M 90,10 A 80,80 0 0,1 170,90"
              stroke="#279b37"
              stroke-width="8"
              stroke-linecap="butt"
              class="animate-[radar-fade_1.96s_linear_infinite_.392s]"
            />
          </svg>

          <div
            class="flex items-center gap-3 text-sm italic text-[#279b37] transition-opacity duration-300 opacity-100"
          >
            <svg
              class="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />

              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 
              0 0 5.373 0 12h4zm2 
              5.291A7.962 7.962 0 014 
              12H0c0 3.042 1.135 5.824 
              3 7.938l3-2.647z"
              />
            </svg>

            <span>{{ visibleStatus }}</span>
          </div>
        </div>

        <!-- SUCCESS -->
        <div
          v-else-if="modalState === 'success'"
          class="flex w-full flex-col items-center animate-[fade-in_.35s_ease-out_forwards]"
        >
          <div class="mb-6 animate-[scale-up_.35s_ease-out_forwards]">
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#279b37"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <h2 class="mb-2 text-lg font-semibold text-white">Position Minted</h2>

          <p class="mb-6 px-4 text-center text-[13px] text-white/50">
            Your M3TRS revenue position has been successfully minted on-chain.
          </p>

          <div
            v-if="mintTxStatus.success === true"
            class="mb-8 rounded border border-white/5 bg-black/30 px-4 py-2 font-mono text-[11px] text-white/50"
          >
            TX {{ mintTxStatus.txHash }}
          </div>

          <div class="flex w-full flex-col gap-3">
            <a
              v-if="mintTxStatus.success === true"
              :href="`https://explorer.zora.energy/tx/${mintTxStatus.txHash}`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full rounded-lg bg-[#279b37] px-6 py-3 text-center font-semibold text-white transition-colors duration-150 hover:bg-[#34b348]"
            >
              View on Explorer →
            </a>

            <button
              type="button"
              commandfor="m3trs-dialog"
              command="close"
              class="w-full rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

        <!-- ERROR -->
        <div
          v-else-if="modalState === 'error'"
          class="flex w-full flex-col items-center animate-[fade-in_.35s_ease-out_forwards]"
        >
          <div class="mb-6 animate-[scale-up_.35s_ease-out_forwards]">
            <svg
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e53935"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />

              <line x1="15" y1="9" x2="9" y2="15" />

              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          </div>

          <h2 class="mb-2 text-lg font-semibold text-white">Minting Failed</h2>

          <p
            class="mb-8 px-4 text-center text-[13px] text-white/50"
            v-if="mintTxStatus.success === false"
          >
            {{ mintTxStatus.error }}
          </p>

          <div class="flex w-full flex-col gap-3">
            <!-- <button
              class="w-full rounded-lg bg-[#279b37] px-6 py-3 font-semibold text-white transition-colors duration-150 hover:bg-[#34b348]"
            >
              Retry
            </button> -->

            <button
              class="w-full rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition-colors duration-150 hover:bg-white/5"
              commandfor="m3trs-dialog"
              command="close"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style scoped>
.m3trs-dialog {
  padding: 0;
  border: none;
  background: transparent;
  overflow: visible;
}

.m3trs-dialog::backdrop {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
}
</style>

<style>
@keyframes radar-fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes scale-up {
  from {
    opacity: 0;
    transform: scale(0.6);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
