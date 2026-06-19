<script setup lang="ts">
import { partnerLogos } from "@/assets/logos";

const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];
</script>

<template>
  <section
    class="w-full overflow-hidden bg-surface-container-low py-14 select-none"
  >
    <p
      class="font-headline text-3xl md:text-4xl font-semibold tracking-tight uppercase mb-8 text-center"
    >
      Powering
      <span class="text-primary-container">InfraFi</span>
      Ecosystem
    </p>

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
      <div class="marquee-track">
        <div class="marquee-group">
          <div v-for="(logo, index) in marqueeLogos" :key="index" class="logo">
            <img
              :src="logo"
              alt=""
              class="md:h-35 h-20 w-auto object-contain grayscale opacity-70"
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
  width: 19rem;
  height: 10rem;
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
