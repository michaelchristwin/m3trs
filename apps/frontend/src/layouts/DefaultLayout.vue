<script lang="ts" setup>
import NotConnected from "@/components/NotConnected.vue";

import { useConnection } from "@wagmi/vue";
import { defineAsyncComponent } from "vue";
const HeaderMd = defineAsyncComponent(
  () => import("@/components/headers/HeaderMd.vue"),
);
const HeaderMobile = defineAsyncComponent(
  () => import("@/components/headers/HeaderMobile.vue"),
);
const NavMobile = defineAsyncComponent(
  () => import("@/components/navs/NavMobile.vue"),
);
const Sidebar = defineAsyncComponent(() => import("@/components/Sidebar.vue"));
const { isConnected } = useConnection();
</script>

<template>
  <HeaderMd />
  <HeaderMobile />
  <div class="relative" v-if="isConnected">
    <Sidebar />
    <NavMobile />
    <main class="pt-24 pb-12 px-6 md:pl-72 flex-1 relative overflow-hidden">
      <RouterView />
    </main>
  </div>
  <NotConnected v-else />
</template>
