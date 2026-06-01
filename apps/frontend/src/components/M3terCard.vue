<script setup lang="ts">
import { selectedCardClass } from "@/utils/constants";

defineProps<{
  tokenId: bigint;
  selected: boolean;
}>();
const emit = defineEmits<{
  select: [bigint];
}>();
</script>
<template>
  <div
    :class="
      selected ? selectedCardClass.selected : selectedCardClass.unselected
    "
    @click="emit('select', tokenId)"
  >
    <div v-if="selected" class="absolute top-2 right-2 text-primary-container">
      <span class="material-symbols-outlined">check_circle</span>
    </div>

    <div
      class="w-full h-24 rounded bg-surface-container-lowest flex justify-center items-center"
    >
      <span class="material-symbols-outlined text-4xl"> memory </span>
    </div>

    <div :class="selected ? 'text-primary-container' : 'text-on-surface'">
      #{{ Number(tokenId) }}
    </div>
  </div>
</template>
