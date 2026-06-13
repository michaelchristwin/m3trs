<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="pt-24 pb-12 px-6 md:pl-72 flex-1 relative overflow-hidden">
      <SidebarTrigger />
      <slot />
    </main>
  </SidebarProvider>
</template>
