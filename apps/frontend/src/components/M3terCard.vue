<script setup lang="ts">
import { m3terImageUrl, selectedCardClass } from "@/utils/constants";
import { CircleCheck } from "@lucide/vue";

const props = defineProps<{
  tokenId: bigint;
  selected: boolean;
}>();

const emit = defineEmits<{
  select: [bigint];
}>();

const alt = `M3terHead #${Number(props.tokenId)}`;

function onKeyDown(e: KeyboardEvent) {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    emit("select", props.tokenId);
  }
}
</script>

<template>
  <div
    role="checkbox"
    :aria-checked="selected"
    :aria-label="alt"
    tabindex="0"
    :class="
      selected ? selectedCardClass.selected : selectedCardClass.unselected
    "
    @click="emit('select', tokenId)"
    @keydown="onKeyDown"
  >
    <div v-if="selected" class="absolute top-2 right-2 text-primary-container">
      <CircleCheck />
    </div>

    <div class="w-full h-32 p-2 rounded flex justify-center items-center">
      <img :src="m3terImageUrl" :alt="alt" class="inset-0 object-cover" />
    </div>

    <div :class="selected ? 'text-primary-container' : 'text-on-surface'">
      #{{ Number(tokenId) }}
    </div>
  </div>
</template>
