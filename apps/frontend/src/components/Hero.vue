<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref, nextTick } from "vue";
import FlipText from "./FlipText.vue";
import PreviewTRS from "./PreviewTRS.vue";
import { M3TERS } from "@/assets/m3ters";

const VISIBLE = 9;
const CENTER_SLOT = Math.floor(VISIBLE / 2);
const SLOT_OFFSETS = Array.from({ length: VISIBLE }, (_, i) => i - CENTER_SLOT);

const HOLD_MS = 1400;
const TRANSITION_MS = 500;

const viewportRef = ref<HTMLElement | null>(null);
const trackRef = ref<HTMLElement | null>(null);

const progress = ref(0); // 0..1
const step = ref(304); // fallback; measured on mount
const centerImage = ref(0);
const animating = ref(false);

let holdTimer: number | undefined;
let rafId = 0;
let ro: ResizeObserver | undefined;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function measureStep() {
  const track = trackRef.value;
  if (!track) return;

  const cards = track.querySelectorAll<HTMLElement>("[data-card]");
  if (cards.length < 2) return;

  const a = cards.item(0);
  const b = cards.item(1);
  if (!a || !b) return;

  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  step.value = bRect.left - aRect.left;
}

function scheduleNext() {
  if (holdTimer) window.clearTimeout(holdTimer);

  holdTimer = window.setTimeout(startAnimation, HOLD_MS);
}

function startAnimation() {
  if (animating.value) return;
  animating.value = true;

  const start = performance.now();

  const frame = (now: number) => {
    const t = Math.min((now - start) / TRANSITION_MS, 1);
    progress.value = easeOutCubic(t);

    if (t < 1) {
      rafId = requestAnimationFrame(frame);
      return;
    }

    // Commit the shift after the motion finishes.
    animating.value = false;
    progress.value = 0;
    centerImage.value = (centerImage.value + 1) % M3TERS.length;

    scheduleNext();
  };

  rafId = requestAnimationFrame(frame);
}

function opacityFor(dist: number) {
  if (dist <= 0) return 0.67;
  if (dist < 1) return 0.67 - dist * 0.49;
  if (dist < 2) return 0.45 - (dist - 1) * 0.15;
  if (dist < 3) return 0.3 - (dist - 2) * 0.12;
  return 0.18;
}

const visibleCards = computed(() =>
  SLOT_OFFSETS.map((slotOffset) => {
    const imageIndex =
      (centerImage.value + slotOffset + M3TERS.length) % M3TERS.length;

    const x = slotOffset - progress.value;

    const dist = Math.abs(x);

    // FIX: stable identity, not interpolated identity
    const isCenter = slotOffset === 0 && progress.value < 0.5;

    const focus = isCenter ? 1 : 0;

    return {
      imageUrl: M3TERS[imageIndex]!,

      opacity: isCenter ? 0.67 : opacityFor(Math.round(dist)),

      background: isCenter
        ? "linear-gradient(rgb(22,22,22) 0%, rgb(62,62,62) 100%)"
        : "linear-gradient(rgba(22,22,22,0.7) 0%, rgba(62,62,62,0.7) 100%)",

      border: isCenter
        ? "2px solid rgba(255,255,255,0.3)"
        : "1px solid rgba(255,255,255,0.1)",

      boxShadow: isCenter
        ? "rgb(0,0,0) 0px 0px 77.4px inset"
        : "rgb(0,0,0) 0px 0px 0px inset",

      transform: `scale(${isCenter ? 1.03 : 1})`,
    };
  }),
);
const trackStyle = computed(() => ({
  transform: `translateX(${-progress.value * step.value}px)`,
  willChange: "transform",
}));

onMounted(async () => {
  await nextTick();
  measureStep();

  ro = new ResizeObserver(() => {
    measureStep();
  });

  if (viewportRef.value) {
    ro.observe(viewportRef.value);
  }

  scheduleNext();
});

onBeforeUnmount(() => {
  if (holdTimer) window.clearTimeout(holdTimer);
  if (rafId) cancelAnimationFrame(rafId);
  ro?.disconnect();
});
</script>

<template>
  <section
    class="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
  >
    <div
      ref="viewportRef"
      class="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div
        ref="trackRef"
        class="flex items-center gap-4 sm:gap-5 lg:gap-6"
        :style="trackStyle"
      >
        <div
          v-for="(card, i) in visibleCards"
          :key="i"
          data-card
          class="h-fit w-35 shrink-0 sm:w-50 lg:w-70"
          :style="{
            opacity: card.opacity,
            background: card.background,
            border: card.border,
            boxShadow: card.boxShadow,
            transform: card.transform,
            borderRadius: '38px',
          }"
        >
          <PreviewTRS name="" :image-url="card.imageUrl" meter-id="0" />
        </div>
      </div>
    </div>

    <div
      class="absolute inset-0 flex items-center justify-center bg-background/50"
    ></div>

    <div class="relative z-10 mx-auto max-w-5xl translate-y-35">
      <div class="flex flex-col items-center gap-4 text-center">
        <FlipText
          pretext="Energy has a Return;"
          :words="['Swap', 'Hodl', 'Earn']"
        />
        <p
          class="max-w-2xl text-[14px] font-semibold leading-normal text-white/70 md:text-lg lg:max-w-3xl"
        >
          Derive real yield from energy infra on the m3tering protocol
        </p>
      </div>
    </div>
  </section>
</template>
