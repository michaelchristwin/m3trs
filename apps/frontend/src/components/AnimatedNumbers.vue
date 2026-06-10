<script setup lang="ts">
import NumberFlow, { continuous, type Format } from "@number-flow/vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const el = ref<HTMLDivElement | null>(null);

let observer: IntersectionObserver | null = null;
let triggered = false;

onMounted(() => {
  if (!el.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries?.[0];
      if (!entry) return;

      if (entry.isIntersecting && !triggered) {
        triggered = true;

        setTimeout(() => {
          internalValue.value = value;
        }, 250);

        observer?.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  observer.observe(el.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
<template>
  <div ref="el">
    <NumberFlow
      :prefix="prefix"
      :value="internalValue"
      :format="flowFormat"
      :plugins="[continuous]"
      :class="className"
    />
  </div>
</template>
