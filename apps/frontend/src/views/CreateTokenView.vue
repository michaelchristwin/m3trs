<script lang="ts" setup>
import { useHead } from "@unhead/vue";
import { defineAsyncComponent, ref } from "vue";
import { useMint } from "@/composables/useMint";

const CreateTokenForm = defineAsyncComponent(
  () => import("@/components/CreateTokenForm.vue"),
);
const MintingDialog = defineAsyncComponent(
  () => import("@/components/MintingDialog.vue"),
);

useHead({
  title: "Create Token",
  meta: [{ name: "description", content: "Create TRS token" }],
});

const modalState = ref<import("@/utils/types").ModalState>("minting");
const isModalOpen = ref(false);
const { mintTokens, currentStep, mintTxStatus } = useMint();
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <h1
        class="text-3xl md:text-5xl font-bold font-headline text-on-surface mb-2 tracking-tight"
      >
        Tokenize In 3 Steps
      </h1>
    </div>
    <!-- Wizard Layout -->
    <CreateTokenForm
      v-model:modal-state="modalState"
      v-model:is-modal-open="isModalOpen"
      :mint-tokens="mintTokens"
    />
    <MintingDialog
      :is-open="isModalOpen"
      :mint-tx-status="mintTxStatus"
      :modal-state="modalState"
      :visible-status="currentStep"
    />
  </div>
</template>
