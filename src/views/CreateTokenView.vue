<script lang="ts" setup>
import { z } from 'zod'
import { useHead } from '@unhead/vue'
import { useForm } from 'vee-validate'
import type { Address, BaseError } from 'viem'
import { useMutation } from '@tanstack/vue-query'
import { toTypedSchema } from '@vee-validate/zod'
import { M3TRS } from '@/config/smart-contracts/M3TRS'
import { approveAndMint } from '@/actions/approveAndMint'
import { useConnection, useReadContract } from '@wagmi/vue'
import { MyToken } from '@/config/smart-contracts/MyToken'

useHead({
  title: 'Create Token',
  meta: [{ name: 'description', content: 'Create TRS token' }],
})

const selectedCardClass: Record<string, string> = {
  selected:
    'min-w-full sm:min-w-65 sm:max-w-65 shrink-0 bg-surface-container-high p-4 rounded cursor-pointer border-2 border-primary-container relative overflow-hidden shadow-[0_0_15px_rgba(0,255,65,0.1)] sm:snap-start',
  unselected:
    'min-w-full sm:min-w-65 sm:max-w-65 shrink-0 bg-surface-container-low p-4 rounded cursor-pointer border border-transparent hover:border-outline-variant transition-colors ghost-border sm:snap-start',
}
const { address } = useConnection()
const {
  data: tokenIds,
  error,
  isPending,
} = useReadContract({
  ...MyToken,
  functionName: 'tokensOfOwner',
  args: [address.value as Address],
  query: {
    enabled: !!address,
  },
})

const schema = z.object({
  tokenId: z.bigint({
    error: (issue) => (issue.input === undefined ? 'Select an NFT' : 'Invalid token ID'),
  }),
  metadataUrl: z
    .string('Invalid URL')
    .refine((val) => val.startsWith('ipfs://'), { message: 'Must be an IPFS URL' }),
  supply: z.number().positive({ error: 'Supply must be greater than 0' }),
  stopTime: z.iso
    .datetime({ local: true })
    .transform((val) => new Date(val)) // local → Date (UTC internally)
    .refine((date) => !isNaN(date.getTime()), 'Invalid date')
    .transform((date) => date.getTime()), // → UTC timestamp (number)
})

const { handleSubmit, setFieldValue, errors, values, meta } = useForm({
  validationSchema: toTypedSchema(schema),
})

const onSubmit = handleSubmit(async (formValues) => {
  const { supply, tokenId, stopTime, metadataUrl } = formValues
  await approveAndMint(
    [M3TRS.address, formValues.tokenId],
    [BigInt(supply), tokenId, BigInt(stopTime), metadataUrl],
  )
})
const { mutateAsync, isPending: mutationIsPending } = useMutation({
  mutationFn: onSubmit,
  mutationKey: ['approveAndMint'],
})

function onSelectNFT(tokenId: bigint) {
  setFieldValue('tokenId', tokenId)
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-3xl md:text-5xl font-bold font-headline text-on-surface mb-2 tracking-tight">
        Revenue Token Wizard
      </h1>
      <p class="text-on-surface-variant font-mono text-sm uppercase tracking-widest">
        Initialization Sequence // Step 2
      </p>
    </div>
    <!-- Wizard Layout -->
    <form class="grid grid-cols-1 lg:grid-cols-12 gap-8" @submit.prevent="mutateAsync">
      <!-- Left Column: Form Steps -->
      <div class="lg:col-span-8 space-y-12">
        <!-- Step 1: Select M3TER -->
        <section class="bg-surface-container-low p-6 rounded-lg ghost-border relative">
          <div
            class="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-surface-container-high border border-outline flex items-center justify-center font-mono text-sm text-on-surface"
          >
            1
          </div>
          <h2 class="font-headline text-xl text-on-surface mb-6 ml-4">Select M3TER NFT</h2>
          <div
            class="flex flex-col gap-4 max-h-[70vh] overflow-y-auto sm:flex-row sm:overflow-x-auto sm:overflow-y-hidden sm:max-h-none sm:scroll-smooth sm:snap-x sm:snap-mandatory custom-scrollbar"
          >
            <div v-if="isPending">
              <p>Loading...</p>
            </div>
            <div v-else-if="error">
              Error: {{ (error as BaseError).shortMessage || error.message }}
            </div>
            <div
              v-else
              v-for="tokenId in tokenIds"
              :key="tokenId.toString()"
              @click="onSelectNFT(tokenId)"
              :class="[
                values.tokenId === tokenId
                  ? selectedCardClass.selected
                  : selectedCardClass.unselected,
              ]"
            >
              <!-- Selected indicator -->
              <div
                v-if="values.tokenId === tokenId"
                class="absolute top-2 right-2 text-primary-container"
              >
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">
                  check_circle
                </span>
              </div>

              <!-- Icon (static as requested) -->
              <div
                class="w-full h-24 bg-surface-container-lowest mb-3 rounded overflow-hidden ghost-border flex items-center justify-center"
              >
                <span class="material-symbols-outlined text-4xl text-outline-variant">
                  memory
                </span>
              </div>

              <!-- Token -->
              <div
                :class="[
                  'font-mono text-lg font-bold',
                  values.tokenId === tokenId ? 'text-primary-container' : 'text-on-surface',
                ]"
              >
                #{{ Number(tokenId) }}
              </div>

              <!-- CAP -->
              <div class="font-mono text-xs text-on-surface-variant mt-1">CAP: 500 kWh</div>
            </div>
          </div>
          <span class="text-red-500 italic text-[13px]" v-if="errors.tokenId">{{
            errors.tokenId
          }}</span>
        </section>
        <!-- Step 2: Configure Token -->
        <section
          class="bg-surface-container-high p-6 rounded-lg ghost-border relative shadow-[0_0_20px_rgba(0,255,65,0.05)]"
        >
          <div
            class="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-primary-container border-2 border-surface flex items-center justify-center font-mono text-sm text-on-primary-container font-bold"
          >
            2
          </div>
          <h2 class="font-headline text-xl text-primary-container mb-8 ml-4">Configure Token</h2>
          <div class="space-y-8">
            <!-- Supply Input -->
            <div class="relative">
              <label
                class="block font-mono text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-2"
                >Total Supply (Integer)</label
              >
              <div class="flex items-end">
                <input
                  class="input-underline w-full font-mono text-2xl text-on-surface pb-2 px-0 bg-transparent focus:ring-0"
                  placeholder="0"
                  type="number"
                  :value="values.supply"
                  @input="
                    setFieldValue('supply', ($event.target as HTMLInputElement).valueAsNumber)
                  "
                />
                <span
                  class="font-mono text-sm text-outline-variant ml-3 pb-2 border-b border-outline-variant"
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
                <span class="material-symbols-outlined text-outline-variant mr-3 pb-2"
                  >calendar_month</span
                >
                <input
                  class="bg-transparent border-none w-full font-mono text-lg text-on-surface pb-2 px-0 focus:ring-0"
                  type="datetime-local"
                  :value="values.stopTime"
                  @input="setFieldValue('stopTime', ($event.target as HTMLInputElement).value)"
                />
              </div>
            </div>
            <!-- Metadata URI Input -->
            <div class="relative">
              <label
                class="block font-mono text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-2"
                >Metadata URI</label
              >
              <input
                :value="values.metadataUrl"
                @input="setFieldValue('metadataUrl', ($event.target as HTMLInputElement).value)"
                class="input-underline w-full font-mono text-sm text-on-surface pb-2 px-0 bg-transparent focus:ring-0"
                placeholder="ipfs://..."
                type="text"
              />
            </div>
            <span class="text-red-500 italic text-[12px]" v-if="errors.metadataUrl">{{
              errors.metadataUrl
            }}</span>
          </div>
        </section>
      </div>
      <!-- Right Column: Review & Action -->
      <div class="lg:col-span-4">
        <div class="sticky top-24">
          <section class="bg-surface-container-low p-6 rounded-lg ghost-border relative">
            <div
              class="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-surface-container-high border border-outline flex items-center justify-center font-mono text-sm text-on-surface"
            >
              3
            </div>
            <h2 class="font-headline text-xl text-on-surface mb-6 ml-4">Review</h2>
            <div class="space-y-4 mb-8">
              <div class="flex justify-between items-center pb-2 border-b border-surface-variant">
                <span class="font-mono text-xs text-on-surface-variant uppercase">Asset</span>
                <span class="font-mono text-sm text-on-surface">M3TER #{{ values.tokenId }}</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-surface-variant">
                <span class="font-mono text-xs text-on-surface-variant uppercase">Supply</span>
                <span class="font-mono text-sm text-on-surface">10,000 RVT</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-surface-variant">
                <span class="font-mono text-xs text-on-surface-variant uppercase">Expiry</span>
                <span class="font-mono text-sm text-secondary-container">12/31/2024</span>
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
                  style="font-variation-settings: 'FILL' 1"
                  >warning</span
                >
                <p class="font-body text-sm text-secondary-fixed">
                  Depositing M3TER <span class="font-mono">{{ values.tokenId }}</span> locks it in
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
  </div>
</template>
