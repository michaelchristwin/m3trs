<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { Rocket, ArrowRight } from "@lucide/vue";
import FlipText from "./FlipText.vue";
import PreviewTRS from "./PreviewTRS.vue";
import { M3TERS } from "@/assets/m3ters";

const TOTAL = 51;
const CARD_W = 280;
const GAP = 24;
const STEP = CARD_W + GAP;
const TRANSITION_MS = 600;
const HOLD_MS = 1200;
const CENTER = Math.floor(TOTAL / 2);

const offsetX = ref(0);
const animating = ref(false);

let interval: NodeJS.Timeout;

function opacityFor(dist: number) {
  return [0.67, 0.45, 0.3, 0.18][Math.min(dist, 3)] ?? 0.12;
}

const tickCount = ref(0);

// Track which index is currently in the center visually
const visualCenterIndex = ref(CENTER);

const cardStyles = computed(() =>
  Array.from({ length: TOTAL }, (_, i) => {
    const dist = Math.abs(i - visualCenterIndex.value);
    const active = dist === 0;
    return {
      opacity: opacityFor(dist),
      background: active
        ? "linear-gradient(rgb(22,22,22) 0%, rgb(62,62,62) 100%)"
        : "linear-gradient(rgba(22,22,22,0.7) 0%, rgba(62,62,62,0.7) 100%)",
      border: active
        ? "2px solid rgba(255,255,255,0.3)"
        : "1px solid rgba(255,255,255,0.1)",
      boxShadow: active
        ? "rgb(0,0,0) 0px 0px 77.4px inset"
        : "rgb(0,0,0) 0px 0px 0px inset",
      transform: active ? "scale(1.03)" : "scale(1)",
    };
  }),
);

const stripTransform = computed(() => `translateX(${offsetX.value}px)`);
const stripTransition = computed(() =>
  animating.value
    ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
    : "none",
);

function tick() {
  animating.value = true;
  offsetX.value -= STEP;

  // Immediately update the visual center to the next card
  // This removes styles from the card moving left out of center
  visualCenterIndex.value = CENTER + tickCount.value + 1;

  setTimeout(() => {
    animating.value = false;
    tickCount.value += 1;

    if (tickCount.value > TOTAL - 1 - CENTER) {
      tickCount.value = 0;
      offsetX.value = 0;
      visualCenterIndex.value = CENTER;
    }
    // visualCenterIndex is already set correctly from above
  }, TRANSITION_MS + 50);
}

onMounted(() => {
  interval = setInterval(tick, TRANSITION_MS + HOLD_MS);
});
onUnmounted(() => clearInterval(interval));
</script>

<template>
  <section
    class="relative flex h-[calc(100dvh-40px)] w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
  >
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="flex items-center gap-4 sm:gap-5 lg:gap-6"
        :style="{ transform: stripTransform, transition: stripTransition }"
      >
        <div
          v-for="(style, i) in cardStyles"
          class="h-fit w-35 shrink-0 sm:w-50 lg:w-70"
          :style="{
            opacity: style.opacity,
            background: style.background,
            border: style.border,
            boxShadow: style.boxShadow,
            transform: style.transform,
            borderRadius: '38px',
            transition:
              'opacity 500ms, transform 500ms, border 500ms, box-shadow 500ms, background 500ms',
          }"
        >
          <PreviewTRS
            name=""
            :image-url="M3TERS[i % M3TERS.length]"
            meter-id="0"
          />
        </div>
      </div>
    </div>
    <div
      class="absolute inset-0 flex items-center justify-center bg-background/50"
    ></div>

    <div class="relative z-10 mx-auto max-w-5xl mt-80">
      <div class="flex flex-col items-center gap-4 text-center sm:gap-5">
        <FlipText
          pretext="Energy has a Return;"
          :words="['Tokenize', 'Swap', 'Hodl', 'Earn']"
        />

        <p
          class="max-w-2xl md:text-lg font-semibold leading-relaxed text-lg lg:max-w-3xl text-white/70"
        >
          Derive real yield from energy infra on the m3tering protocol
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <RouterLink
            to="/discover"
            class="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold text-lg rounded-lg tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Launch App</span>
            <Rocket />
          </RouterLink>
          <RouterLink
            to="#docs"
            class="w-full sm:w-auto px-8 py-4 bg-transparent border border-outline-variant text-primary-container font-headline font-bold text-lg rounded tracking-wider uppercase hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Docs</span>
            <ArrowRight />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
