<script setup lang="ts">
import NumberFlow, { continuous, type Format } from "@number-flow/vue";
import { ref, onMounted } from "vue";
const { value, prefix, className } = defineProps<{
  value: number;
  className: string;
  prefix?: string;
}>();
const internalValue = ref(0);

const flowFormat: Format = {
  notation: "compact",
  compactDisplay: "short",
};
onMounted(() => {
  setTimeout(() => {
    internalValue.value = value;
  }, 200);
});
</script>
<template>
  <NumberFlow
    :prefix="prefix"
    :value="internalValue"
    :format="flowFormat"
    :plugins="[continuous]"
    :class="className"
  />
</template>
