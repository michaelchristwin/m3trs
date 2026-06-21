<script lang="ts" setup>
import NotConnected from "@/components/NotConnected.vue";
import Sidebar2 from "@/components/Sidebar2.vue";

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

const { isConnected } = useConnection();
</script>

<template>
  <HeaderMobile />
  <div class="relative" v-if="isConnected">
    <NavMobile />

    <Sidebar2>
      <HeaderMd />
      <RouterView />
    </Sidebar2>
  </div>
  <NotConnected v-else />
</template>
