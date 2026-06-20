<script setup lang="ts">
import { partnerLogos } from "@/assets/logos";

const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];
</script>

<template>
  <section class="w-full overflow-hidden py-14 select-none">
    <h3
      class="font-headline text-2xl md:text-3xl font-semibold tracking-tight uppercase md:mb-8 mb-4 text-center"
    >
      Powering
      <span class="text-primary-container">InfraFi</span>
      Ecosystem
    </h3>

    <div
      class="relative overflow-hidden md:h-55 h-50 flex justify-center items-center"
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
      <div class="marquee-track flex w-max">
        <div class="flex shrink-0 md:gap-12 gap-6">
          <div
            v-for="(logo, index) in marqueeLogos"
            :key="index"
            class="md:w-76 md:h-40 w-50 h-20 shrink-0 flex items-center justify-center"
          >
            <img
              :src="logo"
              :alt="logo"
              class="md:h-35 h-15 w-auto object-contain grayscale opacity-70"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-track {
  animation: marquee 28s linear infinite;
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
