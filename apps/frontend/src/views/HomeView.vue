<script setup lang="ts">
import { format } from "date-fns";
import { useRouter } from "vue-router";
import { useConnection } from "@wagmi/vue";
import { trpc } from "@/config/trpc-client";
import { useAppKit } from "@reown/appkit/vue";
import { m3terImageUrl } from "@/utils/constants";
import { TRS } from "@/config/smart-contracts/TRS/TRS";
import { constructSvg } from "@/utils/svg-constructor";
import { MyToken } from "@/config/smart-contracts/MyToken/MyToken";
import { computed, onMounted, ref, watch, onUnmounted } from "vue";
import AnimatedNumbers from "@/components/AnimatedNumbers.vue";
import FlipText from "@/components/FlipText.vue";
import CardsCarousel from "@/components/CardsCarousel.vue";

const { open } = useAppKit();
const { isConnected } = useConnection();
const router = useRouter();

const launchApp = () => {
  if (isConnected.value) {
    return router.push({ name: "overview" });
  }

  open();

  const stop = watch(isConnected, (connected) => {
    if (connected) {
      stop();
      router.push({ name: "overview" });
    }
  });
};
const imageBase64 = ref<string | null>(null);
onMounted(async () => {
  const result = await trpc.getNounsBase64URL.query({
    imageUrl: m3terImageUrl,
  });
  //console.log(result);
  imageBase64.value = result;
});
const imgUrl = computed(() => {
  if (!imageBase64.value) return null;
  const svgString = constructSvg({
    name: `TRS-#0-${format(Math.floor(Date.now()), "yyyy-MM-dd")}`,
    imageUrl: imageBase64.value,
    m3terContract: MyToken.address,
    meterId: 0,
    stopTime: Math.floor(Date.now() / 1000),
    trsContract: TRS.address,
  });
  const blob = new Blob([svgString], { type: "image/svg+xml" });
  return URL.createObjectURL(blob);
});

const canvasRef = ref<HTMLCanvasElement | null>(null);

const STAR_COUNT = 120;
const SPEED = 10;

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

let animFrameId: number | null = null;
let stars: Star[] = [];

function createStar(W: number, H: number): Star {
  return {
    x: (Math.random() - 0.5) * W,
    y: (Math.random() - 0.5) * H,
    z: Math.random() * W,
    pz: 0,
  };
}

function initStars(W: number, H: number): void {
  stars = Array.from({ length: STAR_COUNT }, () => createStar(W, H));
}

function tick(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
  const W = canvas.width;
  const H = canvas.height;

  ctx.fillStyle = "rgba(13, 13, 13, 0.28)";
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.translate(W / 2, H / 2);

  for (const s of stars) {
    s.pz = s.z;
    s.z -= SPEED;

    if (s.z <= 0) {
      Object.assign(s, createStar(W, H));
      s.z = W;
      s.pz = W;
    }

    const sx = (s.x / s.z) * W;
    const sy = (s.y / s.z) * H;
    const px = (s.x / s.pz) * W;
    const py = (s.y / s.pz) * H;

    const closeness = 1 - s.z / W;
    const g = Math.floor(160 + closeness * 70);
    const b = Math.floor(40 + closeness * 17);
    const alpha = (0.3 + closeness * 0.7).toFixed(2);

    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(sx, sy);
    ctx.strokeStyle = `rgba(0, ${g}, ${b}, ${alpha})`;
    ctx.lineWidth = closeness * 2;
    ctx.stroke();
  }

  ctx.restore();
  animFrameId = requestAnimationFrame(() => tick(canvas, ctx));
}

function handleResize(canvas: HTMLCanvasElement): void {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  initStars(canvas.width, canvas.height);
}

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  initStars(canvas.width, canvas.height);

  const ro = new ResizeObserver(() => handleResize(canvas));
  ro.observe(canvas);

  tick(canvas, ctx);

  onUnmounted(() => {
    if (animFrameId !== null) cancelAnimationFrame(animFrameId);
    ro.disconnect();
  });
});
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-background/80 backdrop-blur-md border-b border-surface-container-high transition-colors"
  >
    <div
      class="text-2xl font-black text-primary-container tracking-tighter font-headline uppercase"
    >
      M3TRS
    </div>
    <div class="flex items-center gap-6">
      <a
        class="font-label text-sm text-on-surface/70 hover:text-primary-container transition-colors tracking-wide uppercase hidden md:block"
        href="#"
        >Docs</a
      >
      <button
        @click="launchApp"
        class="bg-primary-container text-on-primary-container px-6 py-2 rounded font-label text-sm font-bold tracking-wider hover:bg-primary transition-colors glow-primary"
      >
        LAUNCH APP
      </button>
    </div>
  </nav>
  <!-- Main Content -->
  <main class="grow pt-24">
    <!-- Hero Section -->
    <section
      class="relative min-h-204.75 flex flex-col justify-center items-center px-6 text-center overflow-hidden"
    >
      <!-- Background Elements -->
      <div
        class="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-surface-container-high via-background to-background"
      ></div>
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px] z-0"
      ></div>
      <div
        class="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8"
      >
        <div>
          <FlipText
            pretext="Energy has a Return;"
            :words="['Tokenize', 'Swap', 'Hodl', 'Earn']"
          />

          <p
            class="font-body text-lg md:text-xl text-on-surface/70 max-w-2xl leading-relaxed"
          >
            Derive real yield from energy infra on the m3tering protocol
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <button
            @click="launchApp"
            class="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold text-lg rounded tracking-wider uppercase glow-primary glow-primary-hover transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Launch App
            <span class="material-symbols-outlined">rocket_launch</span>
          </button>
          <button
            class="w-full sm:w-auto px-4 py-4 bg-transparent border border-outline-variant text-primary-container font-headline font-medium text-lg rounded tracking-wider uppercase hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Docs
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
    <section
      class="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8 my-10"
    >
      <!-- Technical Micro-Data -->
      <div
        class="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl border-t border-surface-container-high pt-8"
      >
        <div class="flex flex-col items-center gap-1">
          <span
            class="font-label text-xs text-on-surface/50 tracking-widest uppercase"
            >Total Volume</span
          >
          <AnimatedNumbers
            prefix="$"
            :value="24000000"
            class-name="font-mono text-xl md:text-[30px] text-on-surface font-bold"
          />
        </div>
        <div class="flex flex-col items-center gap-1">
          <span
            class="font-label text-xs text-on-surface/50 tracking-widest uppercase"
            >Total Accrued</span
          >
          <AnimatedNumbers
            prefix="$"
            :value="10500000"
            class-name="font-mono text-xl md:text-[30px] text-on-surface font-bold"
          />
        </div>

        <div class="flex flex-col items-center gap-1">
          <span
            class="font-label text-xs text-on-surface/50 tracking-widest uppercase"
            >Total Mints</span
          >
          <AnimatedNumbers
            :value="200000"
            class-name="font-mono text-xl md:text-[30px] text-on-surface font-bold"
          />
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div class="conversion-banner">
          <canvas ref="canvasRef" class="conversion-canvas" />

          <div class="conversion-content">
            <img
              :src="m3terImageUrl"
              alt="M3terHead #0"
              class="conversion-img"
            />

            <div class="flow-dots">
              <span
                v-for="i in 5"
                :key="i"
                class="flow-dot"
                :style="{ animationDelay: `${i * 0.2}s` }"
              />
            </div>

            <img v-if="imgUrl" :src="imgUrl" alt="TRS" class="conversion-img" />
          </div>
        </div>
        <div class="flex flex-col items-center gap-4 mb-16">
          <h2
            class="font-headline text-3xl md:text-4xl font-semibold tracking-tight uppercase"
          >
            Tokenize <span class="text-primary-container">yield</span> from
            <span class="text-primary-container">M3ters</span>
          </h2>
        </div>
      </div>
    </section>
    <CardsCarousel />
  </main>
  <!-- Footer -->
  <footer
    class="py-12 px-6 border-t border-surface-container-high bg-background flex flex-col items-center gap-8"
  >
    <!-- Trust Badge -->
    <div
      class="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
    >
      <span class="material-symbols-outlined text-3xl">bolt</span>
      <span
        class="font-label text-xs uppercase tracking-[0.2em] text-on-surface"
        >Powered by the M3tering Protocol</span
      >
    </div>
    <div
      class="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-on-surface/40 pt-8 border-t border-surface-container-high/50"
    >
      <p>© 2026 M3TRS Interface. All rights reserved.</p>
      <div class="flex gap-6">
        <a class="hover:text-primary-container transition-colors" href="#"
          >TERMS</a
        >
        <a class="hover:text-primary-container transition-colors" href="#"
          >PRIVACY</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.conversion-banner {
  position: relative;
  width: 100%;
  min-height: 250px;
  overflow: hidden;
  background: #0d0d0d;
  border-radius: var(--radius-xl);
}

.conversion-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.conversion-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  padding: 2rem;
}

.conversion-img {
  width: 250px;
  height: auto;
  object-fit: cover;
  border-radius: var(--radius-xl);
}

.flow-dots {
  display: flex;
  gap: 5px;
  align-items: center;
}

.flow-dots--reverse {
  flex-direction: row-reverse;
}

.flow-dot {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--color-primary-fixed-dim);
  opacity: 0.3;
  animation: pulse-dot 1.2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.badge-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(0, 230, 57, 0.35);
  background: rgba(0, 230, 57, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-fixed-dim);
}

.badge-label {
  font-family: var(--font-label);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary-fixed-dim);
}

.badge-sub {
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--color-on-surface-variant);
  text-align: center;
  max-width: 130px;
  line-height: 1.5;
}
</style>
<style>
@keyframes moveForward {
  0% {
    transform: translateZ(-1000px) scale(0.2);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateZ(500px) scale(1.5);
    opacity: 0;
  }
}
</style>
