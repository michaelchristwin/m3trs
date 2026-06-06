<script lang="ts" setup>
import { useAppKitAccount, useAppKit } from "@reown/appkit/vue";
import { watch } from "vue";
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

const { open } = useAppKit();
const eip155Account = useAppKitAccount({ namespace: "eip155" });

watch(
  () => eip155Account.value.isConnected,
  (isConnected, prev) => {
    if (prev !== undefined && !isConnected) {
      open();
    }
  },
  { immediate: false },
);
</script>

<template>
  <!-- Header for larger screens -->
  <HeaderMd />
  <!-- Header for mobile -->
  <HeaderMobile />
  <Sidebar />
  <NavMobile />
  <main class="pt-24 pb-12 px-6 md:pl-72 flex-1 relative overflow-hidden">
    <RouterView />
  </main>
</template>
