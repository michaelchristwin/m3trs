<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { X } from "@lucide/vue";
import type { MintTxStatus, ModalState } from "@/utils/types";
import { TRS } from "@/config/smart-contracts/TRS/TRS";

interface DialogParams {
  modalState: ModalState;
  visibleStatus: string;
  mintTxStatus: MintTxStatus;
  isOpen: boolean;
  supply: number;
  tokenId: bigint;
}

defineProps<DialogParams>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <AlertDialog :open="isOpen">
    <AlertDialogContent class="border-white/10 p-10 pointer-events-auto">
      <AlertDialogHeader class="hidden">
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div>
        <AlertDialogCancel
          v-if="modalState === 'minting'"
          @click="emit('close')"
          class="rounded-[100%] float-end border border-white/10 bg-white/5 w-10 h-10 text-sm font-medium text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
        >
          <X :size="18" />
        </AlertDialogCancel>
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

          <div class="flex w-full flex-col gap-3">
            <a
              v-if="mintTxStatus.status === 'success'"
              :href="`https://opensea.io/item/zora/${TRS.address}/${tokenId.toString()}`"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full rounded-lg bg-[#279b37] px-6 py-3 text-center font-semibold text-white transition-colors duration-150 hover:bg-[#34b348]"
            >
              List on OpenSea →
            </a>
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
            v-if="mintTxStatus.status === 'error'"
          >
            {{ mintTxStatus.error }}
          </p>

          <div class="flex w-full flex-col gap-3">
            <AlertDialogCancel
              @click="emit('close')"
              class="w-full rounded-lg border border-white/15 bg-red-200/5! px-6 py-3 font-semibold text-white transition-colors duration-150 hover:bg-white/5"
            >
              Dismiss
            </AlertDialogCancel>
          </div>
        </div>
      </div>
      <AlertDialogFooter class="hidden">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
