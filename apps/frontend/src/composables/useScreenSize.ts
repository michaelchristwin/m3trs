import { ref, onMounted, onUnmounted } from "vue";

export function useScreenSize() {
  const width = ref(0);
  const height = ref(0);

  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    update();
    window.addEventListener("resize", update);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });

  return { width, height };
}
