<script lang="ts" setup>
import type { MintTxStatus, ModalState } from "@/utils/types";

interface DialogParams {
  modalState: ModalState;
  visibleStatus: string;
  mintTxStatus: MintTxStatus;
}
defineProps<DialogParams>();
</script>

<template>
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
