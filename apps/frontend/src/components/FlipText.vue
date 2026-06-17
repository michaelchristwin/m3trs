<template>
  <h1
    class="flex items-center gap-8 font-headline font-black text-2xl md:text-start text-center md:text-5xl lg:text-6xl tracking-tighter text-on-surface uppercase leading-[0.9]"
  >
    {{ pretext }} <br class="hidden md:block" />
    <span class="flip-wrapper" :style="{ width: flipWidth + 'px' }">
      <button
        @click="gotoDiscover"
        class="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary-container font-headline font-bold text-lg rounded-lg tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] gap-2"
      >
        <span
          class="flip-inner text-glow transition-all"
          :class="{ flipping: isFlipping }"
        >
          {{ currentWord }} <ArrowRight />
        </span>
      </button>
    </span>
  </h1>
</template>

<script setup lang="ts">
import { ArrowRight } from "@lucide/vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
interface FlipTextProps {
  words: string[];
  interval?: number;
  pretext: string;
}

const props = withDefaults(defineProps<FlipTextProps>(), {
  interval: 2000,
});

const currentIndex = ref(0);
const currentWord = ref(props.words[0]);
const isFlipping = ref(false);
const flipWidth = ref(120);
let timer: NodeJS.Timeout;
const router = useRouter();
const gotoDiscover = () => {
  router.push("/discover");
};
function measureWidth() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.font = "500 28px sans-serif";
  flipWidth.value =
    Math.ceil(
      props.words.reduce((m, w) => Math.max(m, ctx.measureText(w).width), 0),
    ) + 8;
}

function flip() {
  isFlipping.value = true;
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % props.words.length;
    currentWord.value = props.words[currentIndex.value];
    isFlipping.value = false;
  }, 500);
}

onMounted(() => {
  measureWidth();
  timer = setInterval(flip, props.interval);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<style scoped>
.flip-wrapper {
  display: inline-block;
  perspective: 600px;
  height: 1.4em;
}
.flip-inner {
  display: flex;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
}
.flip-inner.flipping {
  transform: rotateX(90deg);
}
</style>
