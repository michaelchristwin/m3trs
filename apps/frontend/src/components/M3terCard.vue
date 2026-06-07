<script setup lang="ts">
import { m3terImageUrl, selectedCardClass } from "@/utils/constants";

const props = defineProps<{
  tokenId: bigint;
  selected: boolean;
}>();

const emit = defineEmits<{
  select: [bigint];
}>();

const alt = `M3terHead #${Number(props.tokenId)}`;
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

    <div class="w-full h-32 p-2 rounded flex justify-center items-center">
      <!-- <span class="material-symbols-outlined text-4xl"> memory </span> -->
      <img :src="m3terImageUrl" :alt="alt" class="inset-0 object-cover" />
    </div>

    <div :class="selected ? 'text-primary-container' : 'text-on-surface'">
      #{{ Number(tokenId) }}
    </div>
  </div>
</template>
