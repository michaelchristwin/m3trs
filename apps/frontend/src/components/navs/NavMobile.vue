<script setup lang="ts">
import {
  Telescope,
  SquarePlus,
  Archive,
  Scroll,
  type LucideIcon,
} from "@lucide/vue";

const routes: { name: string; path: string; icon: LucideIcon }[] = [
  { name: "Discover", path: "/discover", icon: Telescope },
  { name: "Create Token", path: "/create-token", icon: SquarePlus },
  { name: "Holdings", path: "holdings", icon: Archive },
  { name: "Bonds", path: "/bonds", icon: Scroll },
];
</script>
<template>
  <nav
    class="fixed bottom-0 left-0 w-full z-50 flex md:hidden justify-around items-center h-20 px-2 bg-[#131313] pb-safe border-t border-[#00FF41]/10"
  >
    <RouterLink
      v-for="route in routes"
      active-class="text-primary-container bg-[#00FF41]/15 rounded-[9999px] px-5 py-1.5"
      :to="route.path"
      class="flex flex-col items-center justify-center text-neutral-500 hover:text-[#00FF41] transition-colors duration-200 min-w-16"
    >
      <component :is="route.icon" :size="20" class="mb-1" />
      <span class="font-['Space_Grotesk'] text-[10px] uppercase font-medium">{{
        route.name
      }}</span>
    </RouterLink>
  </nav>
</template>
