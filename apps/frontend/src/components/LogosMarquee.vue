<script setup lang="ts">
import { partnerLogos } from "@/assets/logos";
</script>

<template>
  <section
    class="w-full overflow-hidden bg-surface-container-low py-14 select-none"
  >
    <p
      class="mb-10 text-center text-xs font-semibold tracking-[0.2em] text-primary-container uppercase"
    >
      Trusted by teams at
    </p>

    <div
      class="relative overflow-hidden"
      style="
        mask-image: linear-gradient(
          to right,
          transparent 0%,
          black 12%,
          black 88%,
          transparent 100%
        );
        -webkit-mask-image: linear-gradient(
          to right,
          transparent 0%,
          black 12%,
          black 88%,
          transparent 100%
        );
      "
    >
      <div class="marquee-track">
        <!-- first set -->
        <div class="marquee-group">
          <div
            v-for="(logo, index) in partnerLogos"
            :key="`a-${index}`"
            class="logo"
          >
            <img
              :src="logo"
              alt=""
              class="max-h-8 max-w-28 w-auto h-auto object-contain"
            />
          </div>
        </div>

        <!-- duplicate set -->
        <div class="marquee-group" aria-hidden="true">
          <div
            v-for="(logo, index) in partnerLogos"
            :key="`b-${index}`"
            class="logo"
          >
            <img
              :src="logo"
              alt=""
              class="max-h-8 max-w-28 w-auto h-auto object-contain"
            />
          </div>
        </div>
        <!-- duplicate set -->
        <div class="marquee-group" aria-hidden="true">
          <div
            v-for="(logo, index) in partnerLogos"
            :key="`b-${index}`"
            class="logo"
          >
            <img
              :src="logo"
              alt=""
              class="max-h-8 max-w-28 w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.marquee-group {
  display: flex;
  flex-shrink: 0;
  gap: 3rem; /* gap-12 */
}

.logo {
  width: 8rem;
  height: 2.5rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-33.333333%);
  }
}
</style>
